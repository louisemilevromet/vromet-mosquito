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
    exports.Continuer = void 0;
    var Continuer = /** @class */ (function (_super) {
        __extends(Continuer, _super);
        function Continuer(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appelle le constructeur de la classe parente ObjetVisible
            _this.monJeu = null; // Référence vers l'instance de la classe Jeu
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.addEventListener("mousedown", _this.arreterContinuer.bind(_this)); // Ajoute un écouteur d'événements de clic pour arrêter l'objet Continuer
            return _this;
        }
        Continuer.prototype.dessiner = function () {
            window.lib.ClipContinuer.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour l'objet Continuer
            this.frameBounds = window.lib.ClipContinuer.prototype.frameBounds; // Définit les limites du cadre de l'objet Continuer
        };
        Continuer.prototype.arreterContinuer = function () {
            this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet Continuer
            this.monJeu.clickBackground(); // Appelle la méthode clickBackground de l'instance de la classe Jeu pour gérer le clic sur l'arrière-plan
        };
        return Continuer;
    }(ObjetVisible_1.ObjetVisible));
    exports.Continuer = Continuer;
});
//# sourceMappingURL=Continuer.js.map