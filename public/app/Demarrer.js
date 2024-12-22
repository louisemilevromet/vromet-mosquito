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
    exports.Demarrer = void 0;
    var Demarrer = /** @class */ (function (_super) {
        __extends(Demarrer, _super);
        function Demarrer(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appelle le constructeur de la classe parente ObjetVisible
            _this.monJeu = null; // Référence vers l'instance de la classe Jeu
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.addEventListener("mousedown", _this.debuterAffichage.bind(_this)); // Ajoute un écouteur d'événements de clic pour démarrer l'affichage
            return _this;
        }
        Demarrer.prototype.dessiner = function () {
            window.lib.ClipDebuter.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour l'objet Demarrer
            this.frameBounds = window.lib.ClipDebuter.prototype.frameBounds; // Définit les limites du cadre de l'objet Demarrer
        };
        Demarrer.prototype.debuterAffichage = function () {
            this.monJeu.debuter(this.maScene); // Appelle la méthode debuter de l'instance de la classe Jeu pour démarrer l'affichage
        };
        Demarrer.prototype.arreterDemarrer = function () {
            this.arreterObjetVisible(); // Appelle la méthode arreterObjetVisible de la classe parente ObjetVisible pour arrêter l'objet Demarrer
        };
        return Demarrer;
    }(ObjetVisible_1.ObjetVisible));
    exports.Demarrer = Demarrer;
});
//# sourceMappingURL=Demarrer.js.map