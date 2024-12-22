import { ObjetVisible } from "./ObjetVisible";
import { Jeu } from "./Jeu";

export abstract class Mechant extends ObjetVisible {
  // Attributs
  private avancer_lier = null; // Référence à la fonction avancer liée au contexte de l'instance
  public vitesses = null; // Vitesse de déplacement
  public monJeu: Jeu = null; // Référence vers l'instance de la classe Jeu
  public maScene: createjs.Stage; // Référence vers la scène
  public tProjectiles = []; // Tableau des projectiles du méchant

  public constructor(
    refScene: createjs.Stage,
    unX: number,
    unY: number,
    refLesVitesses: number,
    refJeu: Jeu
  ) {
    super(refScene, unX, unY); // Appelle le constructeur de la classe parente ObjetVisible

    this.maScene = refScene; // Stocke la référence à la scène
    this.vitesses = refLesVitesses; // Stocke les vitesses de déplacement
    this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu

    this.avancer_lier = this.avancer.bind(this); // Lie la fonction avancer au contexte de l'instance

    this.addEventListener("tick", this.avancer_lier); // Ajoute un écouteur d'événements de rafraîchissement pour appeler la fonction avancer à chaque rafraîchissement de l'écran
  }

  private avancer(): void {
    if (this.x <= 800) {
      this.x = this.x - this.vitesses; // Déplace le méchant vers la gauche en fonction de sa vitesse
    }
    if (this.x <= -100) {
      this.monJeu.deleteMouche(this); // Supprime le méchant de type Mouche du jeu
      this.monJeu.deleteObstacle(this); // Supprime le méchant de type Obstacle du jeu
    }
  }
}
