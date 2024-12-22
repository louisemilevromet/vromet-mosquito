import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export class Demarrer extends ObjetVisible {
  private monJeu: Jeu = null; // Référence vers l'instance de la classe Jeu

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appelle le constructeur de la classe parente ObjetVisible

    this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu

    this.addEventListener("mousedown", this.debuterAffichage.bind(this)); // Ajoute un écouteur d'événements de clic pour démarrer l'affichage
  }

  protected dessiner() {
    window.lib.ClipDebuter.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour l'objet Demarrer
    this.frameBounds = window.lib.ClipDebuter.prototype.frameBounds; // Définit les limites du cadre de l'objet Demarrer
  }

  private debuterAffichage(): void {
    this.monJeu.debuter(this.maScene); // Appelle la méthode debuter de l'instance de la classe Jeu pour démarrer l'affichage
  }

  public arreterDemarrer(): void {
    this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet Demarrer
  }
}
