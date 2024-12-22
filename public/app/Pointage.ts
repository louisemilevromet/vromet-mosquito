import {Jeu} from "./Jeu";

export class Pointage extends createjs.Text {
    private refScene: createjs.Stage = null; // Référence à la scène du jeu
    private monJeu: Jeu = null; // Référence à une instance de la classe "Jeu"

    public constructor(refScene: createjs.Stage, unX: number, unY: number, refFont: string, refColor: string, refText: string, refJeu: Jeu) {
        super(); // Appel du constructeur de la classe parente "createjs.Text"
        refScene.addChild(this); // Ajoute le texte à la scène
        this.refScene = refScene; // Affecte la référence de la scène
        this.x = unX; // Position x du texte dans la scène
        this.y = unY; // Position y du texte dans la scène
        this.font = refFont; // Police du texte
        this.color = refColor; // Couleur du texte
        this.text = refText; // Contenu initial du texte
        this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
    }
}
