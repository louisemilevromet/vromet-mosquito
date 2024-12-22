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
    exports.Background = void 0;
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        function Background(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appelle le constructeur de la classe parente ObjetVisible
            _this.monJeu = null; // Référence vers l'instance de la classe Jeu
            _this.refMinuterie = null; // Référence à la minuterie utilisée pour déplacer le fond
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.gotoAndStop("jungle"); // Définit l'image à afficher pour le fond
            _this.refMinuterie = window.setInterval(_this.bgRouler.bind(_this), 1000 / 120); // Démarre une minuterie pour appeler la méthode bgRouler toutes les 1/120 secondes
            return _this;
        }
        Background.prototype.dessiner = function () {
            window.lib.ClipFond.call(this); // Appelle la fonction de dessin spécifique à la bibliothèque utilisée pour le fond
            this.frameBounds = window.lib.ClipFond.prototype.frameBounds; // Définit les limites du cadre du fond
        };
        Background.prototype.bgRouler = function () {
            this.x = this.x - 1; // Déplace le fond d'un pixel vers la gauche à chaque appel
            if (this.x <= -2790) {
                // Si le fond est entièrement sorti de l'écran
                this.x = this.x + 2 * 2790; // Le fond revient à sa position initiale pour créer un effet de boucle
            }
        };
        return Background;
    }(ObjetVisible_1.ObjetVisible));
    exports.Background = Background;
});
//# sourceMappingURL=Background.js.map