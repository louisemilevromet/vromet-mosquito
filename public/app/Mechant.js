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
    exports.Mechant = void 0;
    var Mechant = /** @class */ (function (_super) {
        __extends(Mechant, _super);
        function Mechant(refScene, unX, unY, refLesVitesses, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this; // Appelle le constructeur de la classe parente ObjetVisible
            // Attributs
            _this.avancer_lier = null; // Référence à la fonction avancer liée au contexte de l'instance
            _this.vitesses = null; // Vitesse de déplacement
            _this.monJeu = null; // Référence vers l'instance de la classe Jeu
            _this.tProjectiles = []; // Tableau des projectiles du méchant
            _this.maScene = refScene; // Stocke la référence à la scène
            _this.vitesses = refLesVitesses; // Stocke les vitesses de déplacement
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.avancer_lier = _this.avancer.bind(_this); // Lie la fonction avancer au contexte de l'instance
            _this.addEventListener("tick", _this.avancer_lier); // Ajoute un écouteur d'événements de rafraîchissement pour appeler la fonction avancer à chaque rafraîchissement de l'écran
            return _this;
        }
        Mechant.prototype.avancer = function () {
            if (this.x <= 800) {
                this.x = this.x - this.vitesses; // Déplace le méchant vers la gauche en fonction de sa vitesse
            }
            if (this.x <= -100) {
                this.monJeu.deleteMouche(this); // Supprime le méchant de type Mouche du jeu
                this.monJeu.deleteObstacle(this); // Supprime le méchant de type Obstacle du jeu
            }
        };
        return Mechant;
    }(ObjetVisible_1.ObjetVisible));
    exports.Mechant = Mechant;
});
//# sourceMappingURL=Mechant.js.map