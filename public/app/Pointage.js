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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pointage = void 0;
    var Pointage = /** @class */ (function (_super) {
        __extends(Pointage, _super);
        function Pointage(refScene, unX, unY, refFont, refColor, refText, refJeu) {
            var _this = _super.call(this) || this; // Appel du constructeur de la classe parente "createjs.Text"
            _this.refScene = null; // Référence à la scène du jeu
            _this.monJeu = null; // Référence à une instance de la classe "Jeu"
            refScene.addChild(_this); // Ajoute le texte à la scène
            _this.refScene = refScene; // Affecte la référence de la scène
            _this.x = unX; // Position x du texte dans la scène
            _this.y = unY; // Position y du texte dans la scène
            _this.font = refFont; // Police du texte
            _this.color = refColor; // Couleur du texte
            _this.text = refText; // Contenu initial du texte
            _this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
            return _this;
        }
        return Pointage;
    }(createjs.Text));
    exports.Pointage = Pointage;
});
//# sourceMappingURL=Pointage.js.map