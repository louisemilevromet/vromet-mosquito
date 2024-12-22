import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class PointageMoustique extends ObjetVisible {
  private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appel du constructeur de la classe parente "ObjetVisible"

    this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"

    this.gotoAndPlay(0); // Démarre l'animation du clip
  }

  protected dessiner() {
    window.lib.ClipPointageMoustique.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
    this.frameBounds = window.lib.ClipPointageMoustique.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
  }

  public arreterPointageMoustique(): void {
    this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible
  }
}
