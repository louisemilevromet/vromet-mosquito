import { Jeu } from "./Jeu";

declare global {
  interface Window {
    init: (app: App) => void;
  }
}

export class App {
  // Attributs
  private scene: createjs.Stage = null;
  private monJeu: Jeu = null;

  public constructor() {
    // Télécharger les médias et initialiser l'animation.
    window.init(this);
  }

  public initialiser(refScene: createjs.Stage) {
    // Initialisation des attributs relatifs à l'animation ---------------------------------------
    this.scene = refScene; // Récupérer la référence de la scène nouvellement créée
    createjs.Ticker.framerate = 30; // Vitesse de l'animation (peut être modifiée si nécessaire)
    // -------------------------------------------------------------------------------------------

    // Initialisation des objets du lieu 0
    this.monJeu = new Jeu(this.scene);
  }
} // fin classe
