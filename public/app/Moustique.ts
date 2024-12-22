import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";
import { Coeurs } from "./Coeurs";
import { Obstacle } from "./Obstacle";
import { Mouche } from "./Mouche";

export class Moustique extends ObjetVisible {
  // Attributs
  private tTouches: Array<boolean> = [false, false, false, false]; // Tableau pour stocker l'état des touches
  private refMinuterie: number = null; // Référence à la minuterie pour le mouvement
  private refMinuterieInv: number = null; // Référence à la minuterie pour l'invincibilité
  private monJeu: Jeu = null; // Référence au jeu
  private droitBouger: boolean = true; // Indique si le moustique peut bouger

  // Points de contact : tableau de MovieClip dont la coordonnée mémorise un point de contact du moustique.
  private tPointsContact: Array<createjs.MovieClip> = null;

  private tCoeurs: Array<Coeurs> = []; // Tableau pour stocker les coeurs
  private invincible: boolean = false; // Indique si le moustique est invincible
  private refMinuterieTimeOut: number = null; // Référence à la minuterie pour le timeout de l'invincibilité
  private tMouches: Array<Mouche> = []; // Tableau pour stocker les mouches
  private tObstacles: Array<Obstacle> = []; // Tableau pour stocker les obstacles
  private minVerifierSiAnimDone = null; // Référence à la minuterie pour vérifier si l'animation est terminée

  private lastShotTime: number = 0; // Temps du dernier tir
  private shootInterval: number = 1000; // Intervalle entre les tirs
  private tirPret: boolean = false; // Indique si le moustique peut tirer

  public constructor(
    refScene: createjs.Stage,
    unX,
    unY,
    refMesCoeurs: Array<Coeurs>,
    refTObstacles: Array<Obstacle>,
    refTMouches: Array<Mouche>,
    refJeu: Jeu
  ) {
    super(refScene, unX, unY);

    this.tCoeurs = refMesCoeurs;
    this.tObstacles = refTObstacles;
    this.tMouches = refTMouches;
    this.monJeu = refJeu;

    // Initialisation des points de contact
    this.tPointsContact = [];
    this.tPointsContact[0] = this["p0_mc"];
    this.tPointsContact[1] = this["p1_mc"];
    this.tPointsContact[2] = this["p2_mc"];
    this.tPointsContact[3] = this["p3_mc"];
    this.tPointsContact[4] = this["p4_mc"];

    this.scaleX = 0.8;
    this.scaleY = 0.8;

    this.refMinuterieInv = 0;
    this.refMinuterieTimeOut = 0;

    this.gotoAndPlay("vol");

    // Écouteurs d'événements clavier
    window.onkeydown = this.activerTouche.bind(this);
    window.onkeyup = this.desactiverTouche.bind(this);

    // Vérification des collisions avec les obstacles et les mouches à chaque tick
    this.addEventListener("tick", this.verifierCollisionObstacles.bind(this));
    this.addEventListener("tick", this.verifierCollisionMouches.bind(this));
  }

  protected dessiner() {
    window.lib.ClipMoustique.call(this);
    this.frameBounds = window.lib.ClipMoustique.prototype.frameBounds;
  }

  private verifierCollisionObstacles(): void {
    // Parcours des points de contact du moustique
    for (let i = 0; i < this.tPointsContact.length; i++) {
      // Parcours des obstacles
      for (let cpt = 0; cpt < this.tObstacles.length; cpt++) {
        if (this.invincible == false) {
          let unPoint = this.tPointsContact[i];
          let positionDeMonPointDansObstacle: createjs.Point =
            unPoint.parent.localToLocal(
              unPoint.x,
              unPoint.y,
              this.tObstacles[cpt]
            );
          // Vérification de la collision du point avec l'obstacle
          let collision = this.tObstacles[cpt].hitTest(
            positionDeMonPointDansObstacle.x,
            positionDeMonPointDansObstacle.y
          );
          if (collision == true) {
            createjs.Sound.play("sonsMoustiqueVie");
            this.tCoeurs[this.tCoeurs.length - 1].perdreVie(
              this.tCoeurs[this.tCoeurs.length - 1]
            );
            if (this.tCoeurs.length <= 0) {
              this.gotoAndPlay("mort");
              createjs.Sound.play("sonsMoustiqueDead");
              this.invincible = true;
              this.minVerifierSiAnimDone = window.setInterval(
                this.mort.bind(this),
                633
              );
            }
            this.debutInvincible();
          }
        }
      }
    }
  }

  private verifierCollisionMouches(): void {
    // Parcours des points de contact du moustique
    for (let i = 0; i < this.tPointsContact.length; i++) {
      // Parcours des mouches
      for (let cpt = 0; cpt < this.tMouches.length; cpt++) {
        if (this.invincible == false && this.tCoeurs.length != 0) {
          let unPoint = this.tPointsContact[i];
          let positionDeMonPointDansObstacle: createjs.Point =
            unPoint.parent.localToLocal(
              unPoint.x,
              unPoint.y,
              this.tMouches[cpt]
            );
          // Vérification de la collision du point avec la mouche
          let collision = this.tMouches[cpt].hitTest(
            positionDeMonPointDansObstacle.x,
            positionDeMonPointDansObstacle.y
          );
          if (collision == true) {
            createjs.Sound.play("sonsMoustiqueVie");
            this.tCoeurs[this.tCoeurs.length - 1].perdreVie(
              this.tCoeurs[this.tCoeurs.length - 1]
            );
            if (this.tCoeurs.length <= 0) {
              this.invincible = true;
              this.gotoAndPlay("mort");
              createjs.Sound.play("sonsMoustiqueDead");
              this.minVerifierSiAnimDone = window.setInterval(
                this.mort.bind(this),
                633
              );
            }
            this.debutInvincible();
          }
        }
      }
    }
  }

  private debutInvincible(): void {
    if (this.invincible == false) {
      // Désactivation des vérifications de collision
      this.removeEventListener(
        "tick",
        this.verifierCollisionObstacles.bind(this)
      );
      this.removeEventListener(
        "tick",
        this.verifierCollisionMouches.bind(this)
      );
      this.invincible = true;
      this.alpha = 0.5;
      this.refMinuterieInv = window.setInterval(
        this.arretInvincible.bind(this),
        1000
      );
    }
  }

  // Cette méthode arrête le mode invincible du moustique.
  private arretInvincible(): void {
    if (this.invincible == true) {
      this.alpha = 1;
      window.clearInterval(this.refMinuterieInv);
      this.refMinuterieInv = null;
      this.invincible = false;
    }
  }

  // Cette méthode active les touches du clavier pour contrôler le moustique.
  private activerTouche(evenement: KeyboardEvent): void {
    if (this.refMinuterie == null) {
      this.refMinuterie = window.setInterval(this.bouger.bind(this), 1000 / 60);
    }

    switch (evenement.keyCode) {
      case 39:
        // Flèche droite
        this.tTouches[0] = true;
        break;
      case 37:
        // Flèche gauche
        this.tTouches[1] = true;
        break;
      case 38:
        // Flèche haut
        this.tTouches[2] = true;
        break;
      case 40:
        // Flèche bas
        this.tTouches[3] = true;
        break;
      case 32:
        // Espace
        if (this.invincible == false) {
          this.gotoAndPlay("tir");
          this.shoot();
        }
        break;
    }
  }

  // Cette méthode désactive les touches du clavier pour arrêter le contrôle du moustique.
  private desactiverTouche(evenement: KeyboardEvent): void {
    switch (evenement.keyCode) {
      case 39:
        this.tTouches[0] = false;
        break;
      case 37:
        this.tTouches[1] = false;
        break;
      case 38:
        this.tTouches[2] = false;
        break;
      case 40:
        this.tTouches[3] = false;
        break;
      case 32:
        if (this.invincible == false) {
          this.gotoAndPlay("vol");
          break;
        }
    }

    if (
      this.tTouches[0] == false &&
      this.tTouches[1] == false &&
      this.tTouches[2] == false &&
      this.tTouches[3] == false
    ) {
      window.clearInterval(this.refMinuterie);
      this.refMinuterie = null;
    }
  }

  //  Cette méthode permet de déplacer le moustique en fonction des touches du clavier activées.
  private bouger(): void {
    if (this.droitBouger == true) {
      if (this.tTouches[0] == true) {
        this.x = this.x + 5;

        if (this.x >= 800) {
          this.x = 800;
        }
      }
      if (this.tTouches[1] == true) {
        this.x = this.x - 5;

        if (this.x <= 50) {
          this.x = 50;
        }
      }
      if (this.tTouches[2] == true) {
        this.y = this.y - 5;

        if (this.y <= 50) {
          this.y = 50;
        }
      }
      if (this.tTouches[3] == true) {
        this.y = this.y + 5;

        if (this.y >= 600) {
          this.y = 600;
        }
      }
    }
  }

  // Cette méthode permet au moustique de tirer un projectile.
  private shoot(): void {
    if (this.invincible == false) {
      const currentTime = new Date().getTime();
      if (
        currentTime - this.lastShotTime > this.shootInterval &&
        !this.tirPret
      ) {
        this.lastShotTime = currentTime;
        this.monJeu.tirer(this.x, this.y);
        createjs.Sound.play("sonsShoot");
      }
    }
  }

  // Cette méthode est appelée lorsque le moustique est mort.
  // Elle effectue les actions nécessaires pour arrêter le jeu.
  private mort(): void {
    window.onkeydown = null;
    window.onkeyup = null;
    this.arreterObjetVisible();

    window.clearInterval(this.minVerifierSiAnimDone);

    this.monJeu.musiqueMort();
    this.monJeu.rejouerMort();
    this.monJeu.arreter();
  }

  // Cette méthode arrête le mouvement et le contrôle du moustique.
  public arreterMoustique(): void {
    window.onkeydown = null;
    window.onkeyup = null;
    this.arreterObjetVisible();
  }
}
