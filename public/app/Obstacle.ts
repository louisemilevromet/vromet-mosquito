import { Jeu } from "./Jeu";
import { Moustique } from "./Moustique";
import { Mechant } from "./Mechant";
import { Projectile } from "./Projectile";

export class Obstacle extends Mechant {
  // Attributs
  public monJeu: Jeu = null;
  private maVitesse = null;
  public tProjectiles: Array<Projectile> = [];

  public constructor(
    refScene: createjs.Stage,
    unX: number,
    unY: number,
    refMaVitesse,
    refMesProjectiles: Array<Projectile>,
    refJeu: Jeu
  ) {
    super(refScene, unX, unY, refMaVitesse, refJeu);

    this.monJeu = refJeu;
    this.maVitesse = refMaVitesse;
    this.tProjectiles = refMesProjectiles;

    this.scaleX = 0.75;
    this.scaleY = 0.75;

    this.gotoAndPlay("skin2");

    this.addEventListener("tick", this.verifierSiTouche.bind(this));
    this.monJeu.changerSkinObstacle(this);
  }

  // Redéfinition de la méthode de dessin.
  protected dessiner() {
    window.lib.ClipObstacle.call(this);
    this.frameBounds = window.lib.ClipObstacle.prototype.frameBounds;
  }

  // Vérifie si l'obstacle est touché par un projectile et effectue les actions appropriées.
  private verifierSiTouche(): void {
    let rect1 = this.getTransformedBounds();
    for (let i = 0; i < this.tProjectiles.length; i++) {
      let rect2 = this.tProjectiles[i].getTransformedBounds();
      if (rect1.intersects(rect2) == true) {
        this.monJeu.soundRocket();
        this.monJeu.deleteProjectile(this.tProjectiles[i]);
        this.monJeu.deleteProjectile(this.tProjectiles[i]);
      }
    }
  }

  // Cette méthode arrête l'obstacle.
  public arreterObstacle(): void {
    this.arreterObjetVisible();
  }
}
