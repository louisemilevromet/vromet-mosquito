import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

declare global {
  interface Window {
    lib: any;
  }
}

export class Background extends ObjetVisible {
  private monJeu: Jeu = null; // Référence vers l'instance de la classe Jeu
  private refMinuterie: number = null; // Référence à la minuterie utilisée pour déplacer le fond

  public constructor(refScene: createjs.Stage, unX, unY, refJeu: Jeu) {
    super(refScene, unX, unY); // Appelle le constructeur de la classe parente ObjetVisible

    this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu

    this.gotoAndStop("jungle"); // Définit l'image à afficher pour le fond

    this.refMinuterie = window.setInterval(
      this.bgRouler.bind(this),
      1000 / 120
    ); // Démarre une minuterie pour appeler la méthode bgRouler toutes les 1/120 secondes
  }

  protected dessiner() {
    window.lib.ClipFond.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour le fond
    this.frameBounds = window.lib.ClipFond.prototype.frameBounds; // Définit les limites du cadre du fond
  }

  private bgRouler() {
    this.x = this.x - 1; // Déplace le fond d'un pixel vers la gauche à chaque appel

    if (this.x <= -2790) {
      // Si le fond est entièrement sorti de l'écran
      this.x = this.x + 2 * 2790; // Le fond revient à sa position initiale pour créer un effet de boucle
    }
  }
}
