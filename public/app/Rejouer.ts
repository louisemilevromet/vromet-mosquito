import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class Rejouer extends ObjetVisible {
  private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appel du constructeur de la classe parente "ObjetVisible"

    this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"

    this.addEventListener("mousedown", this.rejouerJeu.bind(this)); // Ajoute un écouteur d'événement "mousedown" pour appeler la méthode "rejouerJeu" lorsque le bouton est cliqué
  }

  protected dessiner() {
    window.lib.ClipRejouer.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
    this.frameBounds = window.lib.ClipRejouer.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
  }

  private rejouerJeu(): void {
    this.monJeu.restartGame(); // Redémarre le jeu en appelant la méthode correspondante dans la classe "Jeu"
    this.removeEventListener("mousedown", this.rejouerJeu.bind(this)); // Supprime l'écouteur d'événement "mousedown" pour éviter les clics supplémentaires
    this.arreterBtnRejouer(); // Appelle la méthode privée pour arrêter le bouton "Rejouer"
    this.monJeu.arreterRejouerMort(); // Appelle la méthode correspondante dans la classe "Jeu" pour arrêter l'affichage du bouton "Rejouer" en cas de fin de partie
  }

  private arreterBtnRejouer(): void {
    this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible (le bouton "Rejouer")
  }
}
