export abstract class ObjetVisible extends createjs.MovieClip {
  public maScene: createjs.Stage = null;

  public constructor(refScene: createjs.Stage, unX: number, unY: number) {
    super();
    this.dessiner();
    this.gotoAndStop(0);
    refScene.addChild(this);
    this.x = unX;
    this.y = unY;

    this.maScene = refScene;
  }

  // Déclarer une méthode abstraite (la méthode n’a pas de code et termine par «;»)
  protected abstract dessiner(): void;

  // Cette méthode
  public arreterObjetVisible(): void {
    this.maScene.removeChild(this);
  }
}
