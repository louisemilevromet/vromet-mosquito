import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class Continuer extends ObjetVisible {
  private monJeu: Jeu = null; // Référence vers l'instance de la classe Jeu

  public constructor(
    refScene: createjs.Stage,
    unX: number,
    unY: number,
    refJeu: Jeu
  ) {
    super(refScene, unX, unY); // Appelle le constructeur de la classe parente ObjetVisible

    this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu

    this.addEventListener("mousedown", this.arreterContinuer.bind(this)); // Ajoute un écouteur d'événements de clic pour arrêter l'objet Continuer
  }

  protected dessiner() {
    window.lib.ClipContinuer.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour l'objet Continuer
    this.frameBounds = window.lib.ClipContinuer.prototype.frameBounds; // Définit les limites du cadre de l'objet Continuer
  }

  private arreterContinuer(): void {
    this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet Continuer
    this.monJeu.clickBackground(); // Appelle la méthode clickBackground de l'instance de la classe Jeu pour gérer le clic sur l'arrière-plan
  }
}
