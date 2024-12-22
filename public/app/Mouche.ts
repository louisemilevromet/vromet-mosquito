import { Jeu } from "./Jeu";
import { Mechant } from "./Mechant";
import { Projectile } from "./Projectile";

export class Mouche extends Mechant {
  // Attributs
  private maVitesse: number = null; // Vitesse de la mouche
  public tProjectiles: Array<Projectile> = []; // Tableau des projectiles
  private minVerifierSiAnimDone: number = null; // Référence à la minuterie pour vérifier si l'animation est terminée

  public constructor(
    refScene: createjs.Stage,
    unX: number,
    unY: number,
    refMaVitesse,
    refMesProjectiles: Array<Projectile>,
    refJeu: Jeu
  ) {
    super(refScene, unX, unY, refMaVitesse, refJeu); // Appelle le constructeur de la classe parente Mechant

    this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
    this.maVitesse = refMaVitesse; // Stocke la vitesse de la mouche
    this.tProjectiles = refMesProjectiles; // Stocke le tableau des projectiles

    this.scaleX = 0.85; // Réduit l'échelle horizontale de la mouche
    this.scaleY = 0.85; // Réduit l'échelle verticale de la mouche

    this.gotoAndPlay("vol1"); // Démarre l'animation de vol de la mouche

    this.addEventListener("tick", this.verifierSiTouche.bind(this)); // Ajoute un écouteur d'événements de rafraîchissement pour appeler la fonction verifierSiTouche à chaque rafraîchissement de l'écran
    this.monJeu.changerSkinMouche(this); // Change le skin de la mouche dans le jeu
  }

  protected dessiner() {
    window.lib.ClipMouche.call(this);
    this.frameBounds = window.lib.ClipMouche.prototype.frameBounds;
  }

  private verifierSiTouche(): void {
    let rect1 = this.getTransformedBounds(); // Récupère les coordonnées de la mouche
    for (let cpt = 0; cpt < this.tProjectiles.length; cpt++) {
      let rect2 = this.tProjectiles[cpt].getTransformedBounds(); // Récupère les coordonnées du projectile actuel
      if (rect1.intersects(rect2) == true) {
        // Vérifie si la mouche touche le projectile
        this.monJeu.mortMouche(this); // Fait mourir la mouche
        this.monJeu.deleteProjectile(this.tProjectiles[cpt]); // Supprime le projectile du jeu
        this.minVerifierSiAnimDone = window.setInterval(
          this.creuveMouche.bind(this),
          633
        ); // Déclenche une minuterie pour vérifier si l'animation de mort de la mouche est terminée
        this.monJeu.soundMouche(); // Joue le son de la mouche
        createjs.Sound.play("sonsMoucheMort"); // Joue le son de la mouche morte
      }
    }
  }
  private creuveMouche(): void {
    this.arreterObjetVisible(); // Arrête l'objet visible de la mouche
    this.monJeu.deleteMouche(this); // Supprime la mouche du jeu
  }

  public arreterMouche(): void {
    this.arreterObjetVisible(); // Arrête l'objet visible de la mouche
  }
}
