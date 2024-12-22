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
    exports.Restart = void 0;
    var Restart = /** @class */ (function (_super) {
        __extends(Restart, _super);
        function Restart(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appel du constructeur de la classe parente "ObjetVisible"
            _this.monJeu = null; // Référence à une instance de la classe "Jeu"
            _this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
            _this.addEventListener("mousedown", _this.debuterRestart.bind(_this)); // Ajoute un écouteur d'événement "mousedown" pour appeler la méthode "debuterRestart" lorsque le bouton est cliqué
            return _this;
        }
        Restart.prototype.dessiner = function () {
            window.lib.ClipRetour.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
            this.frameBounds = window.lib.ClipRetour.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
        };
        Restart.prototype.debuterRestart = function () {
            this.monJeu.restartGame(); // Redémarre le jeu en appelant la méthode correspondante dans la classe "Jeu"
        };
        return Restart;
    }(ObjetVisible_1.ObjetVisible));
    exports.Restart = Restart;
});
//# sourceMappingURL=Restart.js.map