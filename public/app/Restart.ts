import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class Restart extends ObjetVisible {
  private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appel du constructeur de la classe parente "ObjetVisible"

    this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"

    this.addEventListener("mousedown", this.debuterRestart.bind(this)); // Ajoute un écouteur d'événement "mousedown" pour appeler la méthode "debuterRestart" lorsque le bouton est cliqué
  }

  protected dessiner() {
    window.lib.ClipRetour.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
    this.frameBounds = window.lib.ClipRetour.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
  }

  private debuterRestart(): void {
    this.monJeu.restartGame(); // Redémarre le jeu en appelant la méthode correspondante dans la classe "Jeu"
  }
}
