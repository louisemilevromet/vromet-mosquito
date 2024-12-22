var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rejouer = void 0;
    var Rejouer = /** @class */ (function (_super) {
        __extends(Rejouer, _super);
        function Rejouer(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appel du constructeur de la classe parente "ObjetVisible"
            _this.monJeu = null; // Référence à une instance de la classe "Jeu"
            _this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
            _this.addEventListener("mousedown", _this.rejouerJeu.bind(_this)); // Ajoute un écouteur d'événement "mousedown" pour appeler la méthode "rejouerJeu" lorsque le bouton est cliqué
            return _this;
        }
        Rejouer.prototype.dessiner = function () {
            window.lib.ClipRejouer.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
            this.frameBounds = window.lib.ClipRejouer.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
        };
        Rejouer.prototype.rejouerJeu = function () {
            this.monJeu.restartGame(); // Redémarre le jeu en appelant la méthode correspondante dans la classe "Jeu"
            this.removeEventListener("mousedown", this.rejouerJeu.bind(this)); // Supprime l'écouteur d'événement "mousedown" pour éviter les clics supplémentaires
            this.arreterBtnRejouer(); // Appelle la méthode privée pour arrêter le bouton "Rejouer"
            this.monJeu.arreterRejouerMort(); // Appelle la méthode correspondante dans la classe "Jeu" pour arrêter l'affichage du bouton "Rejouer" en cas de fin de partie
        };
        Rejouer.prototype.arreterBtnRejouer = function () {
            this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible (le bouton "Rejouer")
        };
        return Rejouer;
    }(ObjetVisible_1.ObjetVisible));
    exports.Rejouer = Rejouer;
});
//# sourceMappingURL=Rejouer.js.map