import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class RejouerMort extends ObjetVisible {
  private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appel du constructeur de la classe parente "ObjetVisible"

    this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
  }

  protected dessiner() {
    window.lib.ClipRejouerMort.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
    this.frameBounds = window.lib.ClipRejouerMort.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
  }

  public arreterRejouerMort(): void {
    this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible (le bouton "Rejouer" en cas de fin de partie)
  }
}
