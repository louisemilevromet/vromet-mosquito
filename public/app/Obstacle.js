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
define(["require", "exports", "./Mechant"], function (require, exports, Mechant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Obstacle = void 0;
    var Obstacle = /** @class */ (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(refScene, unX, unY, refMaVitesse, refMesProjectiles, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, refMaVitesse, refJeu) || this;
            // Attributs
            _this.monJeu = null;
            _this.maVitesse = null;
            _this.tProjectiles = [];
            _this.monJeu = refJeu;
            _this.maVitesse = refMaVitesse;
            _this.tProjectiles = refMesProjectiles;
            _this.scaleX = 0.75;
            _this.scaleY = 0.75;
            _this.gotoAndPlay("skin2");
            _this.addEventListener("tick", _this.verifierSiTouche.bind(_this));
            _this.monJeu.changerSkinObstacle(_this);
            return _this;
        }
        // Redéfinition de la méthode de dessin.
        Obstacle.prototype.dessiner = function () {
            window.lib.ClipObstacle.call(this);
            this.frameBounds = window.lib.ClipObstacle.prototype.frameBounds;
        };
        // Vérifie si l'obstacle est touché par un projectile et effectue les actions appropriées.
        Obstacle.prototype.verifierSiTouche = function () {
            var rect1 = this.getTransformedBounds();
            for (var i = 0; i < this.tProjectiles.length; i++) {
                var rect2 = this.tProjectiles[i].getTransformedBounds();
                if (rect1.intersects(rect2) == true) {
                    this.monJeu.soundRocket();
                    this.monJeu.deleteProjectile(this.tProjectiles[i]);
                    this.monJeu.deleteProjectile(this.tProjectiles[i]);
                }
            }
        };
        // Cette méthode arrête l'obstacle.
        Obstacle.prototype.arreterObstacle = function () {
            this.arreterObjetVisible();
        };
        return Obstacle;
    }(Mechant_1.Mechant));
    exports.Obstacle = Obstacle;
});
//# sourceMappingURL=Obstacle.js.map