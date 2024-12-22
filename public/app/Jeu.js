define(["require", "exports", "./Demarrer", "./Moustique", "./Obstacle", "./Mouche", "./Background", "./Projectile", "./Coeurs", "./Pointage", "./PointageMoustique", "./Continuer", "./Restart", "./RejouerMort", "./Rejouer"], function (require, exports, Demarrer_1, Moustique_1, Obstacle_1, Mouche_1, Background_1, Projectile_1, Coeurs_1, Pointage_1, PointageMoustique_1, Continuer_1, Restart_1, RejouerMort_1, Rejouer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Jeu = void 0;
    var Jeu = /** @class */ (function () {
        function Jeu(refScene) {
            // Attributs
            this.maScene = null; // La scène principale du jeu
            this.leDemarer = null; // Le bouton de démarrage du jeu
            this.minY = 0; // La valeur minimale pour la position verticale des objets
            this.maxY = 500; // La valeur maximale pour la position verticale des objets
            this.minuterieMouche = null; // La minuterie pour les mouvements de la mouche
            this.minuterieObstacle = null; // La minuterie pour les mouvements de l'obstacle
            this.background1 = null; // Le premier arrière-plan du jeu
            this.background2 = null; // Le deuxième arrière-plan du jeu
            this.monMoustiquePointage = null; // L'objet de pointage du moustique
            this.mesPoints = null; // Le texte affichant les points du joueur
            this.minPoints = null; // La valeur minimale des points du joueur
            this.niveau = 1; // Le niveau actuel du jeu
            this.ptsPourWinNv1 = 1000; // Le nombre de points nécessaires pour gagner le niveau 1
            this.ptsPourWinNv2 = 1000; // Le nombre de points nécessaires pour gagner le niveau 2
            this.btnContinuer = null; // Le bouton pour continuer le jeu
            this.btnRestart = null; // Le bouton pour redémarrer le jeu
            this.pageMort = null; // La page affichée en cas de défaite
            this.btnRejouer = null; // Le bouton pour rejouer après la défaite
            // État du jeu
            this.estActif = true; // Indique si le jeu est en cours ou arrêté
            // Personnages
            this.monMoustique = null; // Le personnage du moustique contrôlé par le joueur
            this.monObstacle = null; // L'obstacle dans le jeu
            this.maMouche = null; // La mouche dans le jeu
            this.vitesseObstacle = null; // La vitesse des obstacles
            this.vitesseMouche = null; // La vitesse des mouches
            this.tMouches = []; // Tableau des mouches présentes dans le jeu
            this.tObstacles = []; // Tableau des obstacles présents dans le jeu
            this.tProjectiles = []; // Tableau des projectiles dans le jeu
            this.tCoeurs = []; // Tableau des coeurs dans le jeu
            this.maScene = refScene;
            this.resumerContexteAudio_lier = this.resumerContexteAudio.bind(this);
            this.leDemarer = new Demarrer_1.Demarrer(refScene, 400, 550, this);
        }
        // Débuter le jeu
        Jeu.prototype.debuter = function (refScene) {
            this.maScene = refScene;
            // Vérifier si le jeu est actif
            if (this.estActif) {
                // Arrêter les sons en cours
                createjs.Sound.stop();
                // Jouer la musique correspondante au niveau
                if (this.niveau == 1) {
                    createjs.Sound.play("sonsMusique1", { loop: -1 });
                }
                else if (this.niveau == 2) {
                    createjs.Sound.play("sonsMusique2", { loop: -1 });
                }
                // Résumer le contexte audio
                this.resumerContexteAudio();
                // Arrêter le bouton de démarrage
                this.leDemarer.arreterDemarrer();
                // Créer les arrière-plans
                this.background1 = new Background_1.Background(refScene, 0, 0, this);
                this.background2 = new Background_1.Background(refScene, 2790, 0, this);
                // Déterminer les vitesses des obstacles
                this.vitesseObstacle = Math.floor(Math.random() * 10 + 2);
                this.vitesseMouche = Math.floor(Math.random() * 10 + 2);
                // Créer une minuterie pour les mouches
                this.minuterieMouche = window.setInterval(this.creerMouche.bind(this), 4000);
                // Créer une minuterie pour les obstacles
                this.minuterieObstacle = window.setInterval(this.creerObstacle.bind(this), 2000);
                // Créer les cœurs
                this.tCoeurs.push(new Coeurs_1.Coeurs(this.maScene, 20, 20, this.monMoustique, this));
                this.tCoeurs.push(new Coeurs_1.Coeurs(this.maScene, 75, 20, this.monMoustique, this));
                this.tCoeurs.push(new Coeurs_1.Coeurs(this.maScene, 130, 20, this.monMoustique, this));
                // Créer le pointage du moustique
                this.monMoustiquePointage = new PointageMoustique_1.PointageMoustique(this.maScene, 700, 20, this);
                // Créer le pointage
                this.mesPoints = new Pointage_1.Pointage(this.maScene, 570, 20, "32px Rayman Origins", "#FFFFFF", "0", this);
                this.minPoints = window.setInterval(this.incrementerPointage.bind(this), 500 / 10);
                // Créer le moustique
                this.monMoustique = new Moustique_1.Moustique(refScene, 150, 350, this.tCoeurs, this.tObstacles, this.tMouches, this);
            }
            // Mettre le jeu en mode inactif
            this.estActif = false;
        };
        // Jouer la musique de la mort
        Jeu.prototype.musiqueMort = function () {
            createjs.Sound.stop();
            createjs.Sound.play("sonsMusiqueDead", { loop: -1 });
        };
        // Jouer le son de l'impact du rocket
        Jeu.prototype.soundRocket = function () {
            createjs.Sound.play("sonsRocketHit");
        };
        // Jouer le son de l'impact de la mouche
        Jeu.prototype.soundMouche = function () {
            createjs.Sound.play("sonsMoucheHit");
        };
        // Creer les vilaines mouches
        Jeu.prototype.creerMouche = function () {
            if (this.niveau == 1) {
                // Générer une position Y aléatoire pour la mouche dans la plage définie
                var randMoucheY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);
                // Générer une vitesse aléatoire pour la mouche dans le niveau 1
                var randVitesseMouche = Math.floor(Math.random() * 10 + 2);
                // Ajouter une nouvelle mouche au tableau des mouches avec les paramètres générés
                this.tMouches.push(new Mouche_1.Mouche(this.maScene, 800, randMoucheY, randVitesseMouche, this.tProjectiles, this));
            }
            if (this.niveau == 2) {
                // Générer une position Y aléatoire pour la mouche dans la plage définie
                var randMoucheY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);
                // Générer une vitesse aléatoire pour la mouche dans le niveau 2
                var randVitesseMouche = Math.floor(Math.random() * 20 + 5);
                // Ajouter une nouvelle mouche au tableau des mouches avec les paramètres générés
                this.tMouches.push(new Mouche_1.Mouche(this.maScene, 800, randMoucheY, randVitesseMouche, this.tProjectiles, this));
            }
        };
        // Creer les vilains obstacles
        Jeu.prototype.creerObstacle = function () {
            if (this.niveau == 1) {
                // Générer une position Y aléatoire pour l'obstacle dans la plage définie
                var randObstacleY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);
                // Générer une vitesse aléatoire pour l'obstacle dans le niveau 1
                var randVitesseObstacle = Math.floor(Math.random() * 8 + 8);
                // Ajouter un nouvel obstacle au tableau des obstacles avec les paramètres générés
                this.tObstacles.push(new Obstacle_1.Obstacle(this.maScene, 800, randObstacleY, randVitesseObstacle, this.tProjectiles, this));
            }
            if (this.niveau == 2) {
                // Générer une position Y aléatoire pour l'obstacle dans la plage définie
                var randObstacleY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);
                // Générer une vitesse aléatoire pour l'obstacle dans le niveau 2
                var randVitesseObstacle = Math.floor(Math.random() * 20 + 8);
                // Ajouter un nouvel obstacle au tableau des obstacles avec les paramètres générés
                this.tObstacles.push(new Obstacle_1.Obstacle(this.maScene, 800, randObstacleY, randVitesseObstacle, this.tProjectiles, this));
            }
        };
        // Change le skin de la mouche pour le niveau 2
        Jeu.prototype.changerSkinMouche = function (refMaMouche) {
            if (this.niveau == 2) {
                // Changer le skin de la mouche vers "vol2" dans le niveau 2
                refMaMouche.gotoAndPlay("vol2");
            }
        };
        // Change le skin de l'obstacle pour le niveau 2
        Jeu.prototype.changerSkinObstacle = function (refMonObstacle) {
            if (this.niveau == 2) {
                // Changer le skin de l'obstacle vers "skin1" dans le niveau 2
                refMonObstacle.gotoAndPlay("skin1");
            }
        };
        // L'animation de la mouche lorsqu'elle meurt, selon le Niveau
        Jeu.prototype.mortMouche = function (refMaMouche) {
            if (this.niveau == 1) {
                // Animer la mouche avec l'animation "mort1" dans le niveau 1
                refMaMouche.gotoAndPlay("mort1");
            }
            else if (this.niveau == 2) {
                // Animer la mouche avec l'animation "mort2" dans le niveau 2
                refMaMouche.gotoAndPlay("mort2");
            }
        };
        // Supprimer les mouches du tableau de mouches
        Jeu.prototype.deleteMouche = function (refMaMouche) {
            // Trouver l'index de la mouche dans le tableau des mouches
            var index = this.tMouches.indexOf(refMaMouche);
            // Vérifier si la mouche a été trouvée dans le tableau
            if (index != -1) {
                // Supprimer la mouche du tableau des mouches
                this.tMouches.splice(index, 1);
                // Supprime la mouche comme objet visible
                refMaMouche.arreterMouche();
            }
        };
        // Supprimer les obstacles du tableau d'obstacles
        Jeu.prototype.deleteObstacle = function (refMonObstacle) {
            // Trouver l'index de l'obstacle dans le tableau des obstacles
            var index = this.tObstacles.indexOf(refMonObstacle);
            // Vérifier si l'obstacle a été trouvé dans le tableau
            if (index != -1) {
                // Supprimer l'obstacle du tableau des obstacles
                this.tObstacles.splice(index, 1);
                // Supprime l'obstacle comme objet visible
                refMonObstacle.arreterObstacle();
            }
        };
        // Supprimer les coeurs du tableau de coeurs
        Jeu.prototype.deleteVie = function (refMonCoeur) {
            // Trouver l'index du cœur dans le tableau des cœurs
            var index = this.tCoeurs.indexOf(refMonCoeur);
            // Vérifier si le cœur a été trouvé dans le tableau
            if (index != -1) {
                // Supprimer le cœur du tableau des cœurs
                this.tCoeurs.splice(index, 1);
                // Supprime le coeur comme objet visible
                refMonCoeur.arreterCoeur();
            }
        };
        // Supprimer les projectiles du teableau de projectiles
        Jeu.prototype.deleteProjectile = function (refMonProjectile) {
            // Trouver l'index du projectile dans le tableau des projectiles
            var index = this.tProjectiles.indexOf(refMonProjectile);
            // Vérifier si le projectile a été trouvé dans le tableau
            if (index != -1) {
                // Supprimer le projectile du tableau des projectiles
                this.tProjectiles.splice(index, 1);
                // Supprime le projectile comme objet visible
                refMonProjectile.arreterProjectile();
            }
        };
        // Creer les projectiles
        Jeu.prototype.tirer = function (X, Y) {
            // Créer un nouveau projectile à la position X, Y
            this.tProjectiles.push(new Projectile_1.Projectile(this.maScene, X, Y, this));
            // Jouer le son de tir
            createjs.Sound.play("Shoot");
        };
        // Incrémentation du pointage en fonction du niveau actuel
        Jeu.prototype.incrementerPointage = function () {
            // Incrémenter le pointage en fonction du niveau actuel
            if (this.niveau == 1) {
                this.mesPoints.text = String(parseInt(this.mesPoints.text) + 1 + " " + "pts");
                // Vérifier si le pointage atteint le seuil de victoire pour le niveau 1
                if (parseInt(this.mesPoints.text) >= this.ptsPourWinNv1) {
                    // Créer le bouton "Continuer"
                    this.btnContinuer = new Continuer_1.Continuer(this.maScene, 400, 300, this);
                    // Changer la musique
                    this.changeMusic();
                    // Arrêter le jeu
                    this.arreter();
                    // Passer au niveau 2
                    this.niveau = 2;
                }
            }
            else if (this.niveau == 2) {
                this.mesPoints.text = String(parseInt(this.mesPoints.text) + 1 + " " + "pts");
                // Vérifier si le pointage atteint le seuil de victoire pour le niveau 2
                if (parseInt(this.mesPoints.text) >= this.ptsPourWinNv2) {
                    // Créer le bouton "Restart"
                    this.btnRestart = new Restart_1.Restart(this.maScene, 400, 300, this);
                    // Changer la musique
                    this.changeMusic();
                    // Arrêter le jeu
                    this.arreter();
                    // Revenir au niveau 1
                    this.niveau = 1;
                }
            }
        };
        // Change le background pour le niveau 2
        Jeu.prototype.clickBackground = function () {
            // Débuter le jeu en passant la scène actuelle comme référence
            this.debuter(this.maScene);
            // Changer l'image de fond des backgrounds en mode "ice"
            this.background1.gotoAndStop("ice");
            this.background2.gotoAndStop("ice");
        };
        // Recommence le jeu au début
        Jeu.prototype.restartGame = function () {
            // Redémarrer le jeu en passant la scène actuelle comme référence
            this.debuter(this.maScene);
        };
        // Gère la mort du moustique
        Jeu.prototype.rejouerMort = function () {
            // Créer la page de mort
            this.pageMort = new RejouerMort_1.RejouerMort(this.maScene, 0, 0, this);
            // Créer le bouton "Rejouer"
            this.btnRejouer = new Rejouer_1.Rejouer(this.maScene, 400, 300, this);
            // Réinitialiser le niveau à 1
            this.niveau = 1;
        };
        // Arrête la page de mort
        Jeu.prototype.arreterRejouerMort = function () {
            // Arrêter la page de mort
            this.pageMort.arreterRejouerMort();
        };
        // Gêre les sounds
        Jeu.prototype.resumerContexteAudio = function () {
            // Gérer la suspension du contexte audio dans Chrome (bug)
            try {
                if (createjs.WebAudioPlugin.context.state === "suspended") {
                    createjs.WebAudioPlugin.context.resume();
                    // On doit l'appeler seulement une fois donc on enlève l'écouteur
                    //window.removeEventListener("click", this.resumerContexteAudio_lier);
                }
            }
            catch (e) {
                // SoundJS context or web audio plugin may not exist
                console.error("There was an error while trying to resume the SoundJS Web Audio context...");
                console.error(e);
            }
        };
        // Change la musique quand un niveau est fini
        Jeu.prototype.changeMusic = function () {
            // Arrêter la musique actuelle
            createjs.Sound.stop();
            // Jouer la musique de réussite en boucle
            createjs.Sound.play("sonsReussi", { loop: -1 });
        };
        // Arrete le jeu
        Jeu.prototype.arreter = function () {
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
                for (var cpt = 0; cpt < this.tProjectiles.length; cpt++) {
                    this.tProjectiles[cpt].arreterProjectile();
                }
                this.tProjectiles = [];
                // Arrêter les mouches
                for (var cpt = 0; cpt < this.tMouches.length; cpt++) {
                    this.tMouches[cpt].arreterMouche();
                }
                this.tMouches = [];
                // Arrêter les obstacles
                for (var cpt = 0; cpt < this.tObstacles.length; cpt++) {
                    this.tObstacles[cpt].arreterObstacle();
                }
                this.tObstacles = [];
                // Arrêter les coeurs
                for (var cpt = 0; cpt < this.tCoeurs.length; cpt++) {
                    this.tCoeurs[cpt].arreterCoeur();
                }
                this.tCoeurs = [];
                // Réinitialiser les références des personnages
                this.monMoustique = null;
                this.monObstacle = null;
                this.maMouche = null;
            }
            this.estActif = true;
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map