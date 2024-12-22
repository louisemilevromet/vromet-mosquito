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
    exports.Coeurs = void 0;
    var Coeurs = /** @class */ (function (_super) {
        __extends(Coeurs, _super);
        function Coeurs(refScene, unX, unY, refMoustique, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appelle le constructeur de la classe parente ObjetVisible
            _this.monMoustique = null; // Référence vers l'instance de la classe Moustique
            _this.monJeu = null; // Référence vers l'instance de la classe Jeu
            _this.monMoustique = refMoustique; // Stocke la référence à l'instance de la classe Moustique
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.scaleX = 0.3; // Définit l'échelle horizontale du cœur
            _this.scaleY = 0.3; // Définit l'échelle verticale du cœur
            _this.gotoAndPlay(1); // Démarre l'animation du cœur à partir de la première image
            return _this;
        }
        Coeurs.prototype.dessiner = function () {
            window.lib.ClipCoeurs.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour les cœurs
            this.frameBounds = window.lib.ClipCoeurs.prototype.frameBounds; // Définit les limites du cadre des cœurs
        };
        Coeurs.prototype.perdreVie = function (refMonCoeur) {
            this.monJeu.deleteVie(refMonCoeur); // Appelle la méthode deleteVie de l'instance de la classe Jeu pour supprimer un cœur
        };
        Coeurs.prototype.arreterCoeur = function () {
            this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet cœur
        };
        return Coeurs;
    }(ObjetVisible_1.ObjetVisible));
    exports.Coeurs = Coeurs;
});
//# sourceMappingURL=Coeurs.js.map