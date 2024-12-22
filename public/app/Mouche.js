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
    exports.Mouche = void 0;
    var Mouche = /** @class */ (function (_super) {
        __extends(Mouche, _super);
        function Mouche(refScene, unX, unY, refMaVitesse, refMesProjectiles, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, refMaVitesse, refJeu) || this; // Appelle le constructeur de la classe parente Mechant
            // Attributs
            _this.maVitesse = null; // Vitesse de la mouche
            _this.tProjectiles = []; // Tableau des projectiles
            _this.minVerifierSiAnimDone = null; // Référence à la minuterie pour vérifier si l'animation est terminée
            _this.monJeu = refJeu; // Stocke la référence à l'instance de la classe Jeu
            _this.maVitesse = refMaVitesse; // Stocke la vitesse de la mouche
            _this.tProjectiles = refMesProjectiles; // Stocke le tableau des projectiles
            _this.scaleX = 0.85; // Réduit l'échelle horizontale de la mouche
            _this.scaleY = 0.85; // Réduit l'échelle verticale de la mouche
            _this.gotoAndPlay("vol1"); // Démarre l'animation de vol de la mouche
            _this.addEventListener("tick", _this.verifierSiTouche.bind(_this)); // Ajoute un écouteur d'événements de rafraîchissement pour appeler la fonction verifierSiTouche à chaque rafraîchissement de l'écran
            _this.monJeu.changerSkinMouche(_this); // Change le skin de la mouche dans le jeu
            return _this;
        }
        Mouche.prototype.dessiner = function () {
            window.lib.ClipMouche.call(this);
            this.frameBounds = window.lib.ClipMouche.prototype.frameBounds;
        };
        Mouche.prototype.verifierSiTouche = function () {
            var rect1 = this.getTransformedBounds(); // Récupère les coordonnées de la mouche
            for (var cpt = 0; cpt < this.tProjectiles.length; cpt++) {
                var rect2 = this.tProjectiles[cpt].getTransformedBounds(); // Récupère les coordonnées du projectile actuel
                if (rect1.intersects(rect2) == true) {
                    // Vérifie si la mouche touche le projectile
                    this.monJeu.mortMouche(this); // Fait mourir la mouche
                    this.monJeu.deleteProjectile(this.tProjectiles[cpt]); // Supprime le projectile du jeu
                    this.minVerifierSiAnimDone = window.setInterval(this.creuveMouche.bind(this), 633); // Déclenche une minuterie pour vérifier si l'animation de mort de la mouche est terminée
                    this.monJeu.soundMouche(); // Joue le son de la mouche
                    createjs.Sound.play("sonsMoucheMort"); // Joue le son de la mouche morte
                }
            }
        };
        Mouche.prototype.creuveMouche = function () {
            this.arreterObjetVisible(); // Arrête l'objet visible de la mouche
            this.monJeu.deleteMouche(this); // Supprime la mouche du jeu
        };
        Mouche.prototype.arreterMouche = function () {
            this.arreterObjetVisible(); // Arrête l'objet visible de la mouche
        };
        return Mouche;
    }(Mechant_1.Mechant));
    exports.Mouche = Mouche;
});
//# sourceMappingURL=Mouche.js.map