import { ObjetVisible } from "./ObjetVisible";
import { Moustique } from "./Moustique";
import { Jeu } from "./Jeu";

export class Coeurs extends ObjetVisible {
    private monMoustique: Moustique = null; // Référence vers l'instance de la classe Moustique
    private monJeu: Jeu = null; // Référence vers l'instance de la classe Jeu

    public constructor(refScene: createjs.Stage, unX, unY, refMoustique: Moustique, refJeu: Jeu) {
        super(refScene, unX, unY); // Appelle le constructeur de la classe parente ObjetVisible

        this.monMoustique = refMoustique; // Stocke la référence à l'instance de la classe Moustique
        this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu

        this.scaleX = 0.3; // Définit l'échelle horizontale du cœur
        this.scaleY = 0.3; // Définit l'échelle verticale du cœur

        this.gotoAndPlay(1); // Démarre l'animation du cœur à partir de la première image
    }

    protected dessiner() {
        window.lib.ClipCoeurs.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour les cœurs
        this.frameBounds = window.lib.ClipCoeurs.prototype.frameBounds; // Définit les limites du cadre des cœurs
    }

    public perdreVie(refMonCoeur) {
        this.monJeu.deleteVie(refMonCoeur); // Appelle la méthode deleteVie de l'instance de la classe Jeu pour supprimer un cœur
    }

    public arreterCoeur():void {
        this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet cœur
    }
}
