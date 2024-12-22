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
    exports.Moustique = void 0;
    var Moustique = /** @class */ (function (_super) {
        __extends(Moustique, _super);
        function Moustique(refScene, unX, unY, refMesCoeurs, refTObstacles, refTMouches, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            // Attributs
            _this.tTouches = [false, false, false, false]; // Tableau pour stocker l'état des touches
            _this.refMinuterie = null; // Référence à la minuterie pour le mouvement
            _this.refMinuterieInv = null; // Référence à la minuterie pour l'invincibilité
            _this.monJeu = null; // Référence au jeu
            _this.droitBouger = true; // Indique si le moustique peut bouger
            // Points de contact : tableau de MovieClip dont la coordonnée mémorise un point de contact du moustique.
            _this.tPointsContact = null;
            _this.tCoeurs = []; // Tableau pour stocker les coeurs
            _this.invincible = false; // Indique si le moustique est invincible
            _this.refMinuterieTimeOut = null; // Référence à la minuterie pour le timeout de l'invincibilité
            _this.tMouches = []; // Tableau pour stocker les mouches
            _this.tObstacles = []; // Tableau pour stocker les obstacles
            _this.minVerifierSiAnimDone = null; // Référence à la minuterie pour vérifier si l'animation est terminée
            _this.lastShotTime = 0; // Temps du dernier tir
            _this.shootInterval = 1000; // Intervalle entre les tirs
            _this.tirPret = false; // Indique si le moustique peut tirer
            _this.tCoeurs = refMesCoeurs;
            _this.tObstacles = refTObstacles;
            _this.tMouches = refTMouches;
            _this.monJeu = refJeu;
            // Initialisation des points de contact
            _this.tPointsContact = [];
            _this.tPointsContact[0] = _this["p0_mc"];
            _this.tPointsContact[1] = _this["p1_mc"];
            _this.tPointsContact[2] = _this["p2_mc"];
            _this.tPointsContact[3] = _this["p3_mc"];
            _this.tPointsContact[4] = _this["p4_mc"];
            _this.scaleX = 0.8;
            _this.scaleY = 0.8;
            _this.refMinuterieInv = 0;
            _this.refMinuterieTimeOut = 0;
            _this.gotoAndPlay("vol");
            // Écouteurs d'événements clavier
            window.onkeydown = _this.activerTouche.bind(_this);
            window.onkeyup = _this.desactiverTouche.bind(_this);
            // Vérification des collisions avec les obstacles et les mouches à chaque tick
            _this.addEventListener("tick", _this.verifierCollisionObstacles.bind(_this));
            _this.addEventListener("tick", _this.verifierCollisionMouches.bind(_this));
            return _this;
        }
        Moustique.prototype.dessiner = function () {
            window.lib.ClipMoustique.call(this);
            this.frameBounds = window.lib.ClipMoustique.prototype.frameBounds;
        };
        Moustique.prototype.verifierCollisionObstacles = function () {
            // Parcours des points de contact du moustique
            for (var i = 0; i < this.tPointsContact.length; i++) {
                // Parcours des obstacles
                for (var cpt = 0; cpt < this.tObstacles.length; cpt++) {
                    if (this.invincible == false) {
                        var unPoint = this.tPointsContact[i];
                        var positionDeMonPointDansObstacle = unPoint.parent.localToLocal(unPoint.x, unPoint.y, this.tObstacles[cpt]);
                        // Vérification de la collision du point avec l'obstacle
                        var collision = this.tObstacles[cpt].hitTest(positionDeMonPointDansObstacle.x, positionDeMonPointDansObstacle.y);
                        if (collision == true) {
                            createjs.Sound.play("sonsMoustiqueVie");
                            this.tCoeurs[this.tCoeurs.length - 1].perdreVie(this.tCoeurs[this.tCoeurs.length - 1]);
                            if (this.tCoeurs.length <= 0) {
                                this.gotoAndPlay("mort");
                                createjs.Sound.play("sonsMoustiqueDead");
                                this.invincible = true;
                                this.minVerifierSiAnimDone = window.setInterval(this.mort.bind(this), 633);
                            }
                            this.debutInvincible();
                        }
                    }
                }
            }
        };
        Moustique.prototype.verifierCollisionMouches = function () {
            // Parcours des points de contact du moustique
            for (var i = 0; i < this.tPointsContact.length; i++) {
                // Parcours des mouches
                for (var cpt = 0; cpt < this.tMouches.length; cpt++) {
                    if (this.invincible == false && this.tCoeurs.length != 0) {
                        var unPoint = this.tPointsContact[i];
                        var positionDeMonPointDansObstacle = unPoint.parent.localToLocal(unPoint.x, unPoint.y, this.tMouches[cpt]);
                        // Vérification de la collision du point avec la mouche
                        var collision = this.tMouches[cpt].hitTest(positionDeMonPointDansObstacle.x, positionDeMonPointDansObstacle.y);
                        if (collision == true) {
                            createjs.Sound.play("sonsMoustiqueVie");
                            this.tCoeurs[this.tCoeurs.length - 1].perdreVie(this.tCoeurs[this.tCoeurs.length - 1]);
                            if (this.tCoeurs.length <= 0) {
                                this.invincible = true;
                                this.gotoAndPlay("mort");
                                createjs.Sound.play("sonsMoustiqueDead");
                                this.minVerifierSiAnimDone = window.setInterval(this.mort.bind(this), 633);
                            }
                            this.debutInvincible();
                        }
                    }
                }
            }
        };
        Moustique.prototype.debutInvincible = function () {
            if (this.invincible == false) {
                // Désactivation des vérifications de collision
                this.removeEventListener("tick", this.verifierCollisionObstacles.bind(this));
                this.removeEventListener("tick", this.verifierCollisionMouches.bind(this));
                this.invincible = true;
                this.alpha = 0.5;
                this.refMinuterieInv = window.setInterval(this.arretInvincible.bind(this), 1000);
            }
        };
        // Cette méthode arrête le mode invincible du moustique.
        Moustique.prototype.arretInvincible = function () {
            if (this.invincible == true) {
                this.alpha = 1;
                window.clearInterval(this.refMinuterieInv);
                this.refMinuterieInv = null;
                this.invincible = false;
            }
        };
        // Cette méthode active les touches du clavier pour contrôler le moustique.
        Moustique.prototype.activerTouche = function (evenement) {
            if (this.refMinuterie == null) {
                this.refMinuterie = window.setInterval(this.bouger.bind(this), 1000 / 60);
            }
            switch (evenement.keyCode) {
                case 39:
                    // Flèche droite
                    this.tTouches[0] = true;
                    break;
                case 37:
                    // Flèche gauche
                    this.tTouches[1] = true;
                    break;
                case 38:
                    // Flèche haut
                    this.tTouches[2] = true;
                    break;
                case 40:
                    // Flèche bas
                    this.tTouches[3] = true;
                    break;
                case 32:
                    // Espace
                    if (this.invincible == false) {
                        this.gotoAndPlay("tir");
                        this.shoot();
                    }
                    break;
            }
        };
        // Cette méthode désactive les touches du clavier pour arrêter le contrôle du moustique.
        Moustique.prototype.desactiverTouche = function (evenement) {
            switch (evenement.keyCode) {
                case 39:
                    this.tTouches[0] = false;
                    break;
                case 37:
                    this.tTouches[1] = false;
                    break;
                case 38:
                    this.tTouches[2] = false;
                    break;
                case 40:
                    this.tTouches[3] = false;
                    break;
                case 32:
                    if (this.invincible == false) {
                        this.gotoAndPlay("vol");
                        break;
                    }
            }
            if (this.tTouches[0] == false &&
                this.tTouches[1] == false &&
                this.tTouches[2] == false &&
                this.tTouches[3] == false) {
                window.clearInterval(this.refMinuterie);
                this.refMinuterie = null;
            }
        };
        //  Cette méthode permet de déplacer le moustique en fonction des touches du clavier activées.
        Moustique.prototype.bouger = function () {
            if (this.droitBouger == true) {
                if (this.tTouches[0] == true) {
                    this.x = this.x + 5;
                    if (this.x >= 800) {
                        this.x = 800;
                    }
                }
                if (this.tTouches[1] == true) {
                    this.x = this.x - 5;
                    if (this.x <= 50) {
                        this.x = 50;
                    }
                }
                if (this.tTouches[2] == true) {
                    this.y = this.y - 5;
                    if (this.y <= 50) {
                        this.y = 50;
                    }
                }
                if (this.tTouches[3] == true) {
                    this.y = this.y + 5;
                    if (this.y >= 600) {
                        this.y = 600;
                    }
                }
            }
        };
        // Cette méthode permet au moustique de tirer un projectile.
        Moustique.prototype.shoot = function () {
            if (this.invincible == false) {
                var currentTime = new Date().getTime();
                if (currentTime - this.lastShotTime > this.shootInterval &&
                    !this.tirPret) {
                    this.lastShotTime = currentTime;
                    this.monJeu.tirer(this.x, this.y);
                    createjs.Sound.play("sonsShoot");
                }
            }
        };
        // Cette méthode est appelée lorsque le moustique est mort.
        // Elle effectue les actions nécessaires pour arrêter le jeu.
        Moustique.prototype.mort = function () {
            window.onkeydown = null;
            window.onkeyup = null;
            this.arreterObjetVisible();
            window.clearInterval(this.minVerifierSiAnimDone);
            this.monJeu.musiqueMort();
            this.monJeu.rejouerMort();
            this.monJeu.arreter();
        };
        // Cette méthode arrête le mouvement et le contrôle du moustique.
        Moustique.prototype.arreterMoustique = function () {
            window.onkeydown = null;
            window.onkeyup = null;
            this.arreterObjetVisible();
        };
        return Moustique;
    }(ObjetVisible_1.ObjetVisible));
    exports.Moustique = Moustique;
});
//# sourceMappingURL=Moustique.js.map