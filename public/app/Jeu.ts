import {Demarrer} from "./Demarrer";
import {Moustique} from "./Moustique";
import {Obstacle} from "./Obstacle";
import {Mouche} from "./Mouche";
import {Background} from "./Background";
import {Projectile} from "./Projectile";
import {Coeurs} from "./Coeurs";
import {Pointage} from "./Pointage";
import {PointageMoustique} from "./PointageMoustique";
import {Continuer} from "./Continuer";
import {Restart} from "./Restart";
import {RejouerMort} from "./RejouerMort";
import {Rejouer} from "./Rejouer";

export class Jeu {

// Attributs
    private maScene:createjs.Stage = null;  // La scène principale du jeu
    private leDemarer:Demarrer = null;  // Le bouton de démarrage du jeu
    private minY:number = 0;  // La valeur minimale pour la position verticale des objets
    private maxY:number = 500;  // La valeur maximale pour la position verticale des objets
    private minuterieMouche:number = null;  // La minuterie pour les mouvements de la mouche
    private minuterieObstacle:number = null;  // La minuterie pour les mouvements de l'obstacle
    private background1:Background = null;  // Le premier arrière-plan du jeu
    private background2:Background = null;  // Le deuxième arrière-plan du jeu
    private monMoustiquePointage:PointageMoustique = null;  // L'objet de pointage du moustique
    private mesPoints:createjs.Text = null;  // Le texte affichant les points du joueur
    private minPoints:number = null;  // La valeur minimale des points du joueur
    private niveau:number = 1;  // Le niveau actuel du jeu
    private ptsPourWinNv1:number = 1000;  // Le nombre de points nécessaires pour gagner le niveau 1
    private ptsPourWinNv2:number = 1000;  // Le nombre de points nécessaires pour gagner le niveau 2

    private btnContinuer:Continuer = null;  // Le bouton pour continuer le jeu
    private btnRestart:Restart = null;  // Le bouton pour redémarrer le jeu
    private pageMort: RejouerMort = null;  // La page affichée en cas de défaite
    private btnRejouer:Rejouer = null;  // Le bouton pour rejouer après la défaite

// État du jeu
    private estActif:Boolean = true;  // Indique si le jeu est en cours ou arrêté

// Personnages
    private monMoustique:Moustique = null;  // Le personnage du moustique contrôlé par le joueur
    private monObstacle:Obstacle = null;  // L'obstacle dans le jeu
    private maMouche:Mouche = null;  // La mouche dans le jeu
    private vitesseObstacle:number = null;  // La vitesse des obstacles
    private vitesseMouche:number = null;  // La vitesse des mouches
    private tMouches:Array<Mouche> = [];  // Tableau des mouches présentes dans le jeu
    private tObstacles:Array<Obstacle> = [];  // Tableau des obstacles présents dans le jeu
    private tProjectiles:Array<Projectile> = [];  // Tableau des projectiles dans le jeu
    private tCoeurs:Array<Coeurs> = [];  // Tableau des coeurs dans le jeu

// Son
    private resumerContexteAudio_lier;  // La liaison pour le contexte audio

    public constructor(refScene:createjs.Stage) {
        this.maScene = refScene
        this.resumerContexteAudio_lier = this.resumerContexteAudio.bind(this);
        this.leDemarer = new Demarrer(refScene, 400, 550, this);
    }

// Débuter le jeu
    public debuter(refScene: createjs.Stage) {
        this.maScene = refScene;

        // Vérifier si le jeu est actif
        if (this.estActif) {
            // Arrêter les sons en cours
            createjs.Sound.stop();

            // Jouer la musique correspondante au niveau
            if (this.niveau == 1) {
                createjs.Sound.play("sonsMusique1", { loop: -1 });
            } else if (this.niveau == 2) {
                createjs.Sound.play("sonsMusique2", { loop: -1 });
            }

            // Résumer le contexte audio
            this.resumerContexteAudio();

            // Arrêter le bouton de démarrage
            this.leDemarer.arreterDemarrer();

            // Créer les arrière-plans
            this.background1 = new Background(refScene, 0, 0, this);
            this.background2 = new Background(refScene, 2790, 0, this);

            // Déterminer les vitesses des obstacles
            this.vitesseObstacle = Math.floor(Math.random() * 10 + 2);
            this.vitesseMouche = Math.floor(Math.random() * 10 + 2);

            // Créer une minuterie pour les mouches
            this.minuterieMouche = window.setInterval(this.creerMouche.bind(this), 4000);

            // Créer une minuterie pour les obstacles
            this.minuterieObstacle = window.setInterval(this.creerObstacle.bind(this), 2000);

            // Créer les cœurs
            this.tCoeurs.push(new Coeurs(this.maScene, 20, 20, this.monMoustique, this));
            this.tCoeurs.push(new Coeurs(this.maScene, 75, 20, this.monMoustique, this));
            this.tCoeurs.push(new Coeurs(this.maScene, 130, 20, this.monMoustique, this));

            // Créer le pointage du moustique
            this.monMoustiquePointage = new PointageMoustique(this.maScene, 700, 20, this);

            // Créer le pointage
            this.mesPoints = new Pointage(this.maScene, 570, 20, "32px Rayman Origins", "#FFFFFF", "0", this);
            this.minPoints = window.setInterval(this.incrementerPointage.bind(this), 500 / 10);

            // Créer le moustique
            this.monMoustique = new Moustique(refScene, 150, 350, this.tCoeurs, this.tObstacles, this.tMouches, this);
        }

        // Mettre le jeu en mode inactif
        this.estActif = false;
    }

// Jouer la musique de la mort
    public musiqueMort(): void {
        createjs.Sound.stop();
        createjs.Sound.play("sonsMusiqueDead", { loop: -1 });
    }

// Jouer le son de l'impact du rocket
    public soundRocket(): void {
        createjs.Sound.play("sonsRocketHit");
    }

// Jouer le son de l'impact de la mouche
    public soundMouche(): void {
        createjs.Sound.play("sonsMoucheHit");
    }

// Creer les vilaines mouches
    private creerMouche(): void {
        if (this.niveau == 1) {
            // Générer une position Y aléatoire pour la mouche dans la plage définie
            let randMoucheY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);

            // Générer une vitesse aléatoire pour la mouche dans le niveau 1
            let randVitesseMouche = Math.floor(Math.random() * 10 + 2);

            // Ajouter une nouvelle mouche au tableau des mouches avec les paramètres générés
            this.tMouches.push(new Mouche(this.maScene, 800, randMoucheY, randVitesseMouche, this.tProjectiles, this));
        }

        if (this.niveau == 2) {
            // Générer une position Y aléatoire pour la mouche dans la plage définie
            let randMoucheY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);

            // Générer une vitesse aléatoire pour la mouche dans le niveau 2
            let randVitesseMouche = Math.floor(Math.random() * 20 + 5);

            // Ajouter une nouvelle mouche au tableau des mouches avec les paramètres générés
            this.tMouches.push(new Mouche(this.maScene, 800, randMoucheY, randVitesseMouche, this.tProjectiles, this));
        }
    }

// Creer les vilains obstacles
    private creerObstacle(): void {
        if (this.niveau == 1) {
            // Générer une position Y aléatoire pour l'obstacle dans la plage définie
            let randObstacleY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);

            // Générer une vitesse aléatoire pour l'obstacle dans le niveau 1
            let randVitesseObstacle = Math.floor(Math.random() * 8 + 8);

            // Ajouter un nouvel obstacle au tableau des obstacles avec les paramètres générés
            this.tObstacles.push(new Obstacle(this.maScene, 800, randObstacleY, randVitesseObstacle, this.tProjectiles, this));
        }

        if (this.niveau == 2) {
            // Générer une position Y aléatoire pour l'obstacle dans la plage définie
            let randObstacleY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);

            // Générer une vitesse aléatoire pour l'obstacle dans le niveau 2
            let randVitesseObstacle = Math.floor(Math.random() * 20 + 8);

            // Ajouter un nouvel obstacle au tableau des obstacles avec les paramètres générés
            this.tObstacles.push(new Obstacle(this.maScene, 800, randObstacleY, randVitesseObstacle, this.tProjectiles, this));
        }
    }

// Change le skin de la mouche pour le niveau 2
    public changerSkinMouche(refMaMouche): void {
        if (this.niveau == 2) {
            // Changer le skin de la mouche vers "vol2" dans le niveau 2
            refMaMouche.gotoAndPlay("vol2");
        }
    }

// Change le skin de l'obstacle pour le niveau 2
    public changerSkinObstacle(refMonObstacle): void {
        if (this.niveau == 2) {
            // Changer le skin de l'obstacle vers "skin1" dans le niveau 2
            refMonObstacle.gotoAndPlay("skin1");
        }
    }

// L'animation de la mouche lorsqu'elle meurt, selon le Niveau
    public mortMouche(refMaMouche): void {
        if (this.niveau == 1) {
            // Animer la mouche avec l'animation "mort1" dans le niveau 1
            refMaMouche.gotoAndPlay("mort1");
        } else if (this.niveau == 2) {
            // Animer la mouche avec l'animation "mort2" dans le niveau 2
            refMaMouche.gotoAndPlay("mort2");
        }
    }

// Supprimer les mouches du tableau de mouches
    public deleteMouche(refMaMouche): void {
        // Trouver l'index de la mouche dans le tableau des mouches
        let index = this.tMouches.indexOf(refMaMouche);

        // Vérifier si la mouche a été trouvée dans le tableau
        if (index != -1) {
            // Supprimer la mouche du tableau des mouches
            this.tMouches.splice(index, 1);

            // Supprime la mouche comme objet visible
            refMaMouche.arreterMouche();
        }
    }

// Supprimer les obstacles du tableau d'obstacles
    public deleteObstacle(refMonObstacle): void {
        // Trouver l'index de l'obstacle dans le tableau des obstacles
        let index = this.tObstacles.indexOf(refMonObstacle);

        // Vérifier si l'obstacle a été trouvé dans le tableau
        if (index != -1) {
            // Supprimer l'obstacle du tableau des obstacles
            this.tObstacles.splice(index, 1);

            // Supprime l'obstacle comme objet visible
            refMonObstacle.arreterObstacle();
        }
    }

// Supprimer les coeurs du tableau de coeurs
    public deleteVie(refMonCoeur): void {
        // Trouver l'index du cœur dans le tableau des cœurs
        let index = this.tCoeurs.indexOf(refMonCoeur);

        // Vérifier si le cœur a été trouvé dans le tableau
        if (index != -1) {
            // Supprimer le cœur du tableau des cœurs
            this.tCoeurs.splice(index, 1);

            // Supprime le coeur comme objet visible
            refMonCoeur.arreterCoeur();
        }
    }

// Supprimer les projectiles du teableau de projectiles
    public deleteProjectile(refMonProjectile): void {
        // Trouver l'index du projectile dans le tableau des projectiles
        let index = this.tProjectiles.indexOf(refMonProjectile);

        // Vérifier si le projectile a été trouvé dans le tableau
        if (index != -1) {
            // Supprimer le projectile du tableau des projectiles
            this.tProjectiles.splice(index, 1);

            // Supprime le projectile comme objet visible
            refMonProjectile.arreterProjectile();
        }
    }

// Creer les projectiles
    public tirer(X, Y): void {
        // Créer un nouveau projectile à la position X, Y
        this.tProjectiles.push(new Projectile(this.maScene, X, Y, this));

        // Jouer le son de tir
        createjs.Sound.play("Shoot");
    }

// Incrémentation du pointage en fonction du niveau actuel
    private incrementerPointage(): void {
        // Incrémenter le pointage en fonction du niveau actuel
        if (this.niveau == 1) {
            this.mesPoints.text = String(parseInt(this.mesPoints.text) + 1 + " " + "pts");

            // Vérifier si le pointage atteint le seuil de victoire pour le niveau 1
            if (parseInt(this.mesPoints.text) >= this.ptsPourWinNv1) {
                // Créer le bouton "Continuer"
                this.btnContinuer = new Continuer(this.maScene, 400, 300, this);

                // Changer la musique
                this.changeMusic();

                // Arrêter le jeu
                this.arreter();

                // Passer au niveau 2
                this.niveau = 2;
            }
        } else if (this.niveau == 2) {
            this.mesPoints.text = String(parseInt(this.mesPoints.text) + 1 + " " + "pts");

            // Vérifier si le pointage atteint le seuil de victoire pour le niveau 2
            if (parseInt(this.mesPoints.text) >= this.ptsPourWinNv2) {
                // Créer le bouton "Restart"
                this.btnRestart = new Restart(this.maScene, 400, 300, this);

                // Changer la musique
                this.changeMusic();

                // Arrêter le jeu
                this.arreter();

                // Revenir au niveau 1
                this.niveau = 1;
            }
        }
    }

// Change le background pour le niveau 2
    public clickBackground(): void {
        // Débuter le jeu en passant la scène actuelle comme référence
        this.debuter(this.maScene);

        // Changer l'image de fond des backgrounds en mode "ice"
        this.background1.gotoAndStop("ice");
        this.background2.gotoAndStop("ice");
    }

// Recommence le jeu au début
    public restartGame(): void {
        // Redémarrer le jeu en passant la scène actuelle comme référence
        this.debuter(this.maScene);
    }

// Gère la mort du moustique
    public rejouerMort(): void {
        // Créer la page de mort
        this.pageMort = new RejouerMort(this.maScene, 0, 0, this);

        // Créer le bouton "Rejouer"
        this.btnRejouer = new Rejouer(this.maScene, 400, 300, this);

        // Réinitialiser le niveau à 1
        this.niveau = 1;
    }

// Arrête la page de mort
    public arreterRejouerMort(): void {
        // Arrêter la page de mort
        this.pageMort.arreterRejouerMort();
    }

// Gêre les sounds
    private resumerContexteAudio():void{
        // Gérer la suspension du contexte audio dans Chrome (bug)
        try {
            if (createjs.WebAudioPlugin.context.state === "suspended") {
                createjs.WebAudioPlugin.context.resume();
                // On doit l'appeler seulement une fois donc on enlève l'écouteur
                //window.removeEventListener("click", this.resumerContexteAudio_lier);
            }
        } catch (e) {
            // SoundJS context or web audio plugin may not exist
            console.error("There was an error while trying to resume the SoundJS Web Audio context...");
            console.error(e);
        }
    }

// Change la musique quand un niveau est fini
    private changeMusic(): void {
        // Arrêter la musique actuelle
        createjs.Sound.stop();

        // Jouer la musique de réussite en boucle
        createjs.Sound.play("sonsReussi", { loop: -1 });
    }

// Arrete le jeu
    public arreter(): void {
        if (this.estActif == false) {
            // Arrêter les intervalles de temps
            window.clearInterval(this.minPoints);
            window.clearInterval(this.minuterieMouche);
            window.clearInterval(this.minuterieObstacle);

            this.minuterieMouche = null;
            this.minuterieObstacle = null;

            // Réinitialiser le texte des points
            this.mesPoints.text = String("");

            // Arrêter le moustique principal et le moustique de pointage
            this.monMoustique.arreterMoustique();
            this.monMoustiquePointage.arreterPointageMoustique();

            // Arrêter les projectiles
            for (let cpt = 0; cpt < this.tProjectiles.length; cpt++) {
                this.tProjectiles[cpt].arreterProjectile();
            }

            this.tProjectiles = [];

            // Arrêter les mouches
            for (let cpt = 0; cpt < this.tMouches.length; cpt++) {
                this.tMouches[cpt].arreterMouche();
            }
            this.tMouches = [];

            // Arrêter les obstacles
            for (let cpt = 0; cpt < this.tObstacles.length; cpt++) {
                this.tObstacles[cpt].arreterObstacle();
            }
            this.tObstacles = [];

            // Arrêter les coeurs
            for (let cpt = 0; cpt < this.tCoeurs.length; cpt++) {
                this.tCoeurs[cpt].arreterCoeur();
            }
            this.tCoeurs = [];

            // Réinitialiser les références des personnages
            this.monMoustique = null;
            this.monObstacle = null;
            this.maMouche = null;
        }
        this.estActif = true;
    }
}