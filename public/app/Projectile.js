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
    exports.Projectile = void 0;
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY - 5) || this; // Appel du constructeur de la classe parente "ObjetVisible"
            _this.monJeu = null; // Référence à une instance de la classe "Jeu"
            _this.scaleX = 0.4; // Échelle horizontale du projectile
            _this.scaleY = 0.4; // Échelle verticale du projectile
            _this.monJeu = refJeu; // Affecte la référence à l'instance de la classe "Jeu"
            _this.addEventListener("tick", _this.avancer.bind(_this)); // Ajoute un écouteur d'événement "tick" pour appeler la méthode "avancer" à chaque tick
            return _this;
        }
        Projectile.prototype.dessiner = function () {
            window.lib.ClipFire.call(this); // Crée l'objet graphique à partir de la bibliothèque "lib"
            this.frameBounds = window.lib.ClipFire.prototype.frameBounds; // Définit les limites de chaque frame de l'animation
        };
        Projectile.prototype.avancer = function () {
            this.x = this.x + 40; // Fait avancer le projectile en déplaçant sa position horizontale
        };
        Projectile.prototype.arreterProjectile = function () {
            this.arreterObjetVisible(); // Appelle la méthode parente pour arrêter l'objet visible
        };
        return Projectile;
    }(ObjetVisible_1.ObjetVisible));
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map