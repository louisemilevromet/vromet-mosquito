import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";
import { Mouche } from "./Mouche";

export class Projectile extends ObjetVisible {
  private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY - 5); // Appel du constructeur de la classe parente "ObjetVisible"

    this.scaleX = 0.4; // Échelle horizontale du projectile
    this.scaleY = 0.4; // Échelle verticale du projectile

    this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"

    this.addEventListener("tick", this.avancer.bind(this)); // Ajoute un écouteur d'événement "tick" pour appeler la méthode "avancer" à chaque tick
  }

  protected dessiner() {
    window.lib.ClipFire.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
    this.frameBounds = window.lib.ClipFire.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
  }

  private avancer(): void {
    this.x = this.x + 40; // Fait avancer le projectile en déplaçant sa position horizontale
  }

  public arreterProjectile(): void {
    this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible
  }
}
