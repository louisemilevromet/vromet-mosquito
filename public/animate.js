(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"animate_atlas_1", frames: [[382,240,156,70],[224,440,156,70],[96,471,116,52],[460,486,75,64],[382,486,76,65],[382,133,129,105],[0,471,94,74],[457,406,90,78],[0,0,380,318],[513,133,83,64],[513,199,58,28],[382,440,63,25],[0,320,222,149],[457,312,110,92],[382,0,172,131],[214,512,90,49],[224,320,231,118]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Background_Ice = function() {
	this.initialize(img.Background_Ice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2790,600);


(lib.Background_Junglepngcopy = function() {
	this.initialize(img.Background_Junglepngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2790,600);


(lib.Instruction = function() {
	this.initialize(img.Instruction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Points_Avatarpngcopy = function() {
	this.initialize(ss["animate_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.rejouer = function() {
	this.initialize(img.rejouer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbole25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole25, rect = new cjs.Rectangle(0,0,75,64), [rect]);


(lib.Symbole24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole24, rect = new cjs.Rectangle(0,0,76,65), [rect]);


(lib.Symbole23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole23, rect = new cjs.Rectangle(0,0,129,105), [rect]);


(lib.Symbole22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole22, rect = new cjs.Rectangle(0,0,156,70), [rect]);


(lib.Symbole21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("", "35px 'RaymanOrigins'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-29.95,105.7);

	this.instance = new lib.Points_Avatarpngcopy();
	this.instance.setTransform(73,0,0.3161,0.3163,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole21, rect = new cjs.Rectangle(-81.9,0,155,144.2), [rect]);


(lib.Symbole17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole17, rect = new cjs.Rectangle(0,0,172,131), [rect]);


(lib.Symbole16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AioCpQhGhGAAhjQAAhiBGhGQBGhGBiAAQBjAABGBGQBGBGAABiQAABjhGBGQhGBGhjAAQhiAAhGhGg");
	this.shape.setTransform(9.0309,9.0692,0.3787,0.3787);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole16, rect = new cjs.Rectangle(0,0,18.1,18.1), [rect]);


(lib.Symbole15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole15, rect = new cjs.Rectangle(0,0,83,64), [rect]);


(lib.Symbole12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole12, rect = new cjs.Rectangle(0,0,58,28), [rect]);


(lib.Symbole11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole11, rect = new cjs.Rectangle(0,0,63,25), [rect]);


(lib.Symbole9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole9, rect = new cjs.Rectangle(0,0,116,52), [rect]);


(lib.Symbole8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole8, rect = new cjs.Rectangle(0,0,156,70), [rect]);


(lib.Symbole7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole7, rect = new cjs.Rectangle(0,0,222,149), [rect]);


(lib.Symbole6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole6, rect = new cjs.Rectangle(0,0,110,92), [rect]);


(lib.Symbole5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole5, rect = new cjs.Rectangle(0,0,380,318), [rect]);


(lib.Symbole4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole4, rect = new cjs.Rectangle(0,0,94,74), [rect]);


(lib.Symbole3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.CachedBmp_9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole3, rect = new cjs.Rectangle(0,0,90,78), [rect]);


(lib.clipPoint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAWAAQAAAJgHAGQgGAHgJAAQgIAAgHgHQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAGAHQAHAGAAAIg");
	this.shape.setTransform(-0.05,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgHgGg");
	this.shape_1.setTransform(-0.05,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clipPoint, rect = new cjs.Rectangle(-3.2,-3.2,6.3,6.3), [rect]);


(lib.ClipDebuter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Calque_1
	this.text = new cjs.Text("Débuter", "30px 'Rayman Origins'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(-0.95,-17.3);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("Ao8ivIR5AAIAAFfIx5AAg");
	this.shape.setTransform(-0.95,-1.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(87,87,87,0)").s().p("Ao8CwIAAlfIR5AAIAAFfg");
	this.shape_1.setTransform(-0.95,-1.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-23.3,130,50);
p.frameBounds = [rect, rect=null, rect];


(lib.ClipArreter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Calque_1
	this.text = new cjs.Text("Arreter", "bold 30px 'Verdana'");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(14,-10.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AuSmeIclAAIAAM9I8lAAg");
	this.shape.setTransform(13.525,9.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E4E4").s().p("AuSGfIAAs9IclAAIAAM9g");
	this.shape_1.setTransform(13.525,9.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.9,-32.9,185,85);
p.frameBounds = [rect, rect=null, rect];


(lib.ClipRetour = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Rejouer ", "58px 'Rayman Origins'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 235;
	this.text.parent = this;
	this.text.setTransform(4.5,-35.75);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.text_1 = new cjs.Text("Bravo !\n Vous avez conquis le monde", "38px 'Rayman Origins'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 42;
	this.text_1.lineWidth = 372;
	this.text_1.parent = this;
	this.text_1.setTransform(3.4,-249);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipRetour, rect = new cjs.Rectangle(-190.8,-257,402,294), [rect]);


(lib.ClipRejouerMort = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.rejouer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipRejouerMort, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.ClipFire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fire
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-59.45,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.4,-24,90,49);
p.frameBounds = [rect];


(lib.ClipContinuer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {jungle:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Bravo !\n Vous avez conquis la jungle", "38px 'Rayman Origins'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 414;
	this.text.parent = this;
	this.text.setTransform(4.65,-244.55);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.text_1 = new cjs.Text("Continuer", "58px 'Rayman Origins'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 62;
	this.text_1.lineWidth = 258;
	this.text_1.parent = this;
	this.text_1.setTransform(0.8,-29.4);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("ABtlBISyAAIAAKDMgo9AAAIAAqDICRAA");
	this.shape.setTransform(0.8,0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.004)").s().p("A0eFCIAAqDICRAAIAACSIT5AAIAAiSISzAAIAAKDg");
	this.shape_1.setTransform(0.8,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipContinuer, rect = new cjs.Rectangle(-207.5,-249.5,431,304), [rect]);


(lib.ClipRejouer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("Rejouer", "58px 'Rayman Origins'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 237;
	this.text.parent = this;
	this.text.setTransform(-1.25,-33.2);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipRejouer, rect = new cjs.Rectangle(-124.5,-38.2,254,80), [rect]);


(lib.ClipFond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"jungle":0,ice:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fond
	this.instance = new lib.Background_Junglepngcopy();
	this.instance.setTransform(-2790,0);

	this.instance_1 = new lib.Background_Junglepngcopy();
	this.instance_1.setTransform(2790,0);

	this.instance_2 = new lib.Background_Junglepngcopy();

	this.instance_3 = new lib.Background_Ice();
	this.instance_3.setTransform(2790,0);

	this.instance_4 = new lib.Background_Ice();
	this.instance_4.setTransform(-2790,0);

	this.instance_5 = new lib.Background_Ice();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2790,0,8370,600);
p.frameBounds = [rect, rect];


(lib.Symbole26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Symbole23();
	this.instance.setTransform(68.4,109.25,1,1,0,0,0,64.7,52.6);

	this.instance_1 = new lib.Symbole24();
	this.instance_1.setTransform(95.3,89.6,1,1,0,0,0,0,65.3);

	this.instance_2 = new lib.Symbole25();
	this.instance_2.setTransform(74.8,64.5,1,1,0,0,0,74.8,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole26, rect = new cjs.Rectangle(0,0,171.3,161.7), [rect]);


(lib.Symbole19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Symbole5();
	this.instance.setTransform(70.15,83.05,0.367,0.3706,0,0,0,191.2,160.6);

	this.instance_1 = new lib.Symbole3();
	this.instance_1.setTransform(99.75,30.75,0.367,0.3706,0,0,0,5.2,82.9);

	this.instance_2 = new lib.Symbole4();
	this.instance_2.setTransform(91.75,27.15,0.367,0.3706,0,0,0,97.5,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole19, rect = new cjs.Rectangle(0,0,139.5,141.4), [rect]);


(lib.Symbole18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Symbole6();
	this.instance.setTransform(46.85,40.45,0.4385,0.4385,0,0,0,106.9,92.2);

	this.instance_1 = new lib.Symbole7();
	this.instance_1.setTransform(89.4,41.45,0.4385,0.4385,0,0,0,111.3,72.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole18, rect = new cjs.Rectangle(0,0,138,74.9), [rect]);


(lib.ClipPointageMoustique = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Symbole21();
	this.instance.setTransform(132.4,22.8,1,1,0,0,0,132.4,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipPointageMoustique, rect = new cjs.Rectangle(-81.9,0,155,144.2), [rect]);


(lib.ClipObstacle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {skin1:0,skin2:60};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay("skin1");
	}
	this.frame_119 = function() {
		this.gotoAndPlay("skin2")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// Smoke
	this.instance = new lib.Symbole9();
	this.instance.setTransform(197.35,49.1,1,1,0,0,0,57.6,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:58,regY:26,scaleX:0.9568,rotation:-0.1776,x:197.75,y:48.65},0).wait(1).to({scaleX:0.9135,rotation:-0.3552,x:197.7,y:48.4},0).wait(1).to({scaleX:0.8703,rotation:-0.5327,x:197.65,y:48.25},0).wait(1).to({scaleX:0.827,rotation:-0.7103,x:197.6,y:48},0).wait(1).to({scaleX:0.8514,rotation:-0.8879,x:197.65,y:47.8},0).wait(1).to({scaleX:0.8758,rotation:-1.0655,x:197.7,y:47.55},0).wait(1).to({scaleX:0.9002,rotation:-1.2431,x:197.65,y:47.3},0).wait(1).to({scaleX:0.9246,rotation:-1.4207,x:197.7,y:47.1},0).wait(1).to({scaleX:0.949,rotation:-1.5982,x:197.65,y:46.85},0).wait(1).to({scaleX:0.9066,rotation:-1.7758,y:46.65},0).wait(1).to({scaleX:0.8644,rotation:-1.9534,x:197.7,y:46.45},0).wait(1).to({scaleX:0.8221,rotation:-2.131,x:197.65,y:46.25},0).wait(1).to({scaleX:0.7797,rotation:-2.3086,y:46},0).wait(1).to({scaleX:0.7374,rotation:-2.4862,y:45.8},0).wait(1).to({scaleX:0.7803,rotation:-2.6637,x:197.6,y:45.5},0).wait(1).to({scaleX:0.8232,rotation:-2.8413,x:197.65,y:45.3},0).wait(1).to({scaleX:0.8662,rotation:-3.0189,y:45.05},0).wait(1).to({scaleX:0.9091,rotation:-3.1965,x:197.7,y:44.85},0).wait(1).to({scaleX:0.952,rotation:-2.8986,y:44.55},0).wait(1).to({scaleX:0.9055,rotation:-2.6007,x:197.75,y:44.25},0).wait(1).to({scaleX:0.859,rotation:-2.3028,y:44.05},0).wait(1).to({scaleX:0.8126,rotation:-2.0049,y:43.75},0).wait(1).to({scaleX:0.7661,rotation:-1.707,y:43.5},0).wait(1).to({scaleX:0.7196,rotation:-1.4091,x:197.8,y:43.15},0).wait(1).to({scaleX:0.7897,rotation:-1.1112,x:197.85,y:42.9},0).wait(1).to({scaleX:0.8598,rotation:-0.8133,y:42.65},0).wait(1).to({scaleX:0.9299,rotation:-0.5154,x:198,y:42.35},0).wait(1).to({scaleX:1,rotation:-0.2175,x:198.05,y:42.1},0).wait(1).to({scaleX:0.9853,scaleY:1.0001,rotation:0.0533,y:43},0).wait(1).to({scaleX:0.9706,scaleY:1.0003,rotation:0.3241,y:43.95},0).wait(1).to({scaleX:0.956,scaleY:1.0004,rotation:0.5949,x:198.1,y:44.9},0).wait(1).to({scaleX:0.9412,scaleY:1.0005,rotation:0.8657,y:45.8},0).wait(1).to({scaleX:0.9266,scaleY:1.0006,rotation:1.1365,x:198.15,y:46.75},0).wait(1).to({scaleX:0.9119,scaleY:1.0007,rotation:1.4073,x:198.1,y:47.7},0).wait(1).to({scaleX:0.8739,scaleY:0.9546,rotation:1.6782,x:198.15,y:48.65},0).wait(1).to({scaleX:0.836,scaleY:0.9085,rotation:1.949,x:198.2,y:49.6},0).wait(1).to({scaleX:0.7981,scaleY:0.8624,rotation:2.2198,y:50.55},0).wait(1).to({scaleX:0.7601,scaleY:0.8162,rotation:2.4906,x:198.25,y:51.45},0).wait(1).to({scaleX:0.7222,scaleY:0.7701,rotation:2.7614,y:52.4},0).wait(1).to({scaleX:0.7603,scaleY:0.8276,rotation:2.6233,x:198.2,y:52.25},0).wait(1).to({scaleX:0.7985,scaleY:0.8852,rotation:2.4853,x:198.15,y:52.05},0).wait(1).to({scaleX:0.8366,scaleY:0.9428,rotation:2.3472,x:198.2,y:51.9},0).wait(1).to({scaleX:0.8747,scaleY:1.0003,rotation:2.2091,x:198.15,y:51.7},0).wait(1).to({scaleX:0.9128,scaleY:1.0579,rotation:2.0711,y:51.5},0).wait(1).to({scaleX:0.8909,scaleY:1.054,rotation:1.933,y:51.35},0).wait(1).to({scaleX:0.869,scaleY:1.0502,rotation:1.7949,x:198.1,y:51.2},0).wait(1).to({scaleX:0.8472,scaleY:1.0463,rotation:1.6568,x:198,y:50.95},0).wait(1).to({scaleX:0.8253,scaleY:1.0425,rotation:1.5188,y:50.8},0).wait(1).to({scaleX:0.8034,scaleY:1.0386,rotation:1.3807,x:197.95,y:50.6},0).wait(1).to({scaleX:0.792,scaleY:1.0348,rotation:1.2426,x:197.85,y:50.45},0).wait(1).to({scaleX:0.7807,scaleY:1.0309,rotation:1.1046,x:197.9,y:50.25},0).wait(1).to({scaleX:0.7693,scaleY:1.027,rotation:0.9665,x:197.85,y:50.1},0).wait(1).to({scaleX:0.7579,scaleY:1.0232,rotation:0.8284,x:197.8,y:49.95},0).wait(1).to({scaleX:0.7466,scaleY:1.0193,rotation:0.6904,y:49.75},0).wait(1).to({scaleX:0.7973,scaleY:1.0154,rotation:0.5523,y:49.6},0).wait(1).to({scaleX:0.848,scaleY:1.0116,rotation:0.4142,x:197.75,y:49.4},0).wait(1).to({scaleX:0.8986,scaleY:1.0077,rotation:0.2761,x:197.7,y:49.2},0).wait(1).to({scaleX:0.9493,scaleY:1.0039,rotation:0.1381,x:197.75,y:49.05},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:48.9},0).to({_off:true},1).wait(60));

	// Corps
	this.instance_1 = new lib.Symbole8();
	this.instance_1.setTransform(73.95,51.6,1,1,0,0,0,78,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:35,rotation:-0.1776,y:51.85},0).wait(1).to({rotation:-0.3552,y:52},0).wait(1).to({rotation:-0.5327,x:74,y:52.2},0).wait(1).to({rotation:-0.7103,y:52.35},0).wait(1).to({rotation:-0.8879,y:52.5},0).wait(1).to({rotation:-1.0655,y:52.65},0).wait(1).to({rotation:-1.2431,y:52.8},0).wait(1).to({rotation:-1.4207,y:52.95},0).wait(1).to({rotation:-1.5982,y:53.15},0).wait(1).to({rotation:-1.7758,y:53.3},0).wait(1).to({rotation:-1.9534,y:53.45},0).wait(1).to({rotation:-2.131,y:53.6},0).wait(1).to({rotation:-2.3086,y:53.7},0).wait(1).to({rotation:-2.4862,y:53.85},0).wait(1).to({rotation:-2.6637,y:54.05},0).wait(1).to({rotation:-2.8413,y:54.2},0).wait(1).to({rotation:-3.0189,y:54.35},0).wait(1).to({rotation:-3.1965,y:54.55},0).wait(1).to({rotation:-2.9128,y:53.6},0).wait(1).to({rotation:-2.6291,x:73.95,y:52.65},0).wait(1).to({rotation:-2.3454,x:74,y:51.75},0).wait(1).to({rotation:-2.0617,x:73.95,y:50.9},0).wait(1).to({rotation:-1.7779,x:74,y:50},0).wait(1).to({rotation:-1.4942,x:73.95,y:49.05},0).wait(1).to({rotation:-1.2105,x:74,y:48.15},0).wait(1).to({rotation:-0.9268,x:73.95,y:47.25},0).wait(1).to({rotation:-0.6431,x:74,y:46.35},0).wait(1).to({rotation:-0.3594,x:73.95,y:45.4},0).wait(1).to({rotation:-0.0757,x:74,y:45.75},0).wait(1).to({rotation:0.208,x:73.95,y:46.15},0).wait(1).to({rotation:0.4917,x:74,y:46.45},0).wait(1).to({rotation:0.7754,y:46.8},0).wait(1).to({rotation:1.0592,y:47.15},0).wait(1).to({rotation:1.3429,y:47.5},0).wait(1).to({rotation:1.6266,x:73.95,y:47.8},0).wait(1).to({rotation:1.9103,x:74,y:48.15},0).wait(1).to({rotation:2.194,x:73.95,y:48.5},0).wait(1).to({rotation:2.4777,x:74,y:48.8},0).wait(1).to({rotation:2.7614,x:73.95,y:49.15},0).wait(1).to({rotation:2.6233,y:49.25},0).wait(1).to({rotation:2.4853,x:74,y:49.45},0).wait(1).to({rotation:2.3472,x:73.95,y:49.55},0).wait(1).to({rotation:2.2091,x:74,y:49.65},0).wait(1).to({rotation:2.0711,y:49.8},0).wait(1).to({rotation:1.933,x:73.95,y:49.95},0).wait(1).to({rotation:1.7949,y:50.05},0).wait(1).to({rotation:1.6568,y:50.2},0).wait(1).to({rotation:1.5188,y:50.3},0).wait(1).to({rotation:1.3807,x:74,y:50.45},0).wait(1).to({rotation:1.2426,y:50.55},0).wait(1).to({rotation:1.1046,y:50.7},0).wait(1).to({rotation:0.9665,x:73.95,y:50.8},0).wait(1).to({rotation:0.8284,x:74,y:50.95},0).wait(1).to({rotation:0.6904,y:51.05},0).wait(1).to({rotation:0.5523,x:73.95,y:51.15},0).wait(1).to({rotation:0.4142,x:74,y:51.3},0).wait(1).to({rotation:0.2761,y:51.4},0).wait(1).to({rotation:0.1381,x:73.95,y:51.55},0).wait(1).to({rotation:0,y:51.7},0).to({_off:true},1).wait(60));

	// SmokeLv2
	this.instance_2 = new lib.Symbole9();
	this.instance_2.setTransform(197.35,49.1,1,1,0,0,0,57.6,26.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(1).to({regX:58,regY:26,scaleX:0.9568,rotation:-0.1776,x:197.75,y:48.65},0).wait(1).to({scaleX:0.9135,rotation:-0.3552,x:197.7,y:48.4},0).wait(1).to({scaleX:0.8703,rotation:-0.5327,x:197.65,y:48.25},0).wait(1).to({scaleX:0.827,rotation:-0.7103,x:197.6,y:48},0).wait(1).to({scaleX:0.8514,rotation:-0.8879,x:197.65,y:47.8},0).wait(1).to({scaleX:0.8758,rotation:-1.0655,x:197.7,y:47.55},0).wait(1).to({scaleX:0.9002,rotation:-1.2431,x:197.65,y:47.3},0).wait(1).to({scaleX:0.9246,rotation:-1.4207,x:197.7,y:47.1},0).wait(1).to({scaleX:0.949,rotation:-1.5982,x:197.65,y:46.85},0).wait(1).to({scaleX:0.9066,rotation:-1.7758,y:46.65},0).wait(1).to({scaleX:0.8644,rotation:-1.9534,x:197.7,y:46.45},0).wait(1).to({scaleX:0.8221,rotation:-2.131,x:197.65,y:46.25},0).wait(1).to({scaleX:0.7797,rotation:-2.3086,y:46},0).wait(1).to({scaleX:0.7374,rotation:-2.4862,y:45.8},0).wait(1).to({scaleX:0.7803,rotation:-2.6637,x:197.6,y:45.5},0).wait(1).to({scaleX:0.8232,rotation:-2.8413,x:197.65,y:45.3},0).wait(1).to({scaleX:0.8662,rotation:-3.0189,y:45.05},0).wait(1).to({scaleX:0.9091,rotation:-3.1965,x:197.7,y:44.85},0).wait(1).to({scaleX:0.952,rotation:-2.8986,y:44.55},0).wait(1).to({scaleX:0.9055,rotation:-2.6007,x:197.75,y:44.25},0).wait(1).to({scaleX:0.859,rotation:-2.3028,y:44.05},0).wait(1).to({scaleX:0.8126,rotation:-2.0049,y:43.75},0).wait(1).to({scaleX:0.7661,rotation:-1.707,y:43.5},0).wait(1).to({scaleX:0.7196,rotation:-1.4091,x:197.8,y:43.15},0).wait(1).to({scaleX:0.7897,rotation:-1.1112,x:197.85,y:42.9},0).wait(1).to({scaleX:0.8598,rotation:-0.8133,y:42.65},0).wait(1).to({scaleX:0.9299,rotation:-0.5154,x:198,y:42.35},0).wait(1).to({scaleX:1,rotation:-0.2175,x:198.05,y:42.1},0).wait(1).to({scaleX:0.9853,scaleY:1.0001,rotation:0.0533,y:43},0).wait(1).to({scaleX:0.9706,scaleY:1.0003,rotation:0.3241,y:43.95},0).wait(1).to({scaleX:0.956,scaleY:1.0004,rotation:0.5949,x:198.1,y:44.9},0).wait(1).to({scaleX:0.9412,scaleY:1.0005,rotation:0.8657,y:45.8},0).wait(1).to({scaleX:0.9266,scaleY:1.0006,rotation:1.1365,x:198.15,y:46.75},0).wait(1).to({scaleX:0.9119,scaleY:1.0007,rotation:1.4073,x:198.1,y:47.7},0).wait(1).to({scaleX:0.8739,scaleY:0.9546,rotation:1.6782,x:198.15,y:48.65},0).wait(1).to({scaleX:0.836,scaleY:0.9085,rotation:1.949,x:198.2,y:49.6},0).wait(1).to({scaleX:0.7981,scaleY:0.8624,rotation:2.2198,y:50.55},0).wait(1).to({scaleX:0.7601,scaleY:0.8162,rotation:2.4906,x:198.25,y:51.45},0).wait(1).to({scaleX:0.7222,scaleY:0.7701,rotation:2.7614,y:52.4},0).wait(1).to({scaleX:0.7603,scaleY:0.8276,rotation:2.6233,x:198.2,y:52.25},0).wait(1).to({scaleX:0.7985,scaleY:0.8852,rotation:2.4853,x:198.15,y:52.05},0).wait(1).to({scaleX:0.8366,scaleY:0.9428,rotation:2.3472,x:198.2,y:51.9},0).wait(1).to({scaleX:0.8747,scaleY:1.0003,rotation:2.2091,x:198.15,y:51.7},0).wait(1).to({scaleX:0.9128,scaleY:1.0579,rotation:2.0711,y:51.5},0).wait(1).to({scaleX:0.8909,scaleY:1.054,rotation:1.933,y:51.35},0).wait(1).to({scaleX:0.869,scaleY:1.0502,rotation:1.7949,x:198.1,y:51.2},0).wait(1).to({scaleX:0.8472,scaleY:1.0463,rotation:1.6568,x:198,y:50.95},0).wait(1).to({scaleX:0.8253,scaleY:1.0425,rotation:1.5188,y:50.8},0).wait(1).to({scaleX:0.8034,scaleY:1.0386,rotation:1.3807,x:197.95,y:50.6},0).wait(1).to({scaleX:0.792,scaleY:1.0348,rotation:1.2426,x:197.85,y:50.45},0).wait(1).to({scaleX:0.7807,scaleY:1.0309,rotation:1.1046,x:197.9,y:50.25},0).wait(1).to({scaleX:0.7693,scaleY:1.027,rotation:0.9665,x:197.85,y:50.1},0).wait(1).to({scaleX:0.7579,scaleY:1.0232,rotation:0.8284,x:197.8,y:49.95},0).wait(1).to({scaleX:0.7466,scaleY:1.0193,rotation:0.6904,y:49.75},0).wait(1).to({scaleX:0.7973,scaleY:1.0154,rotation:0.5523,y:49.6},0).wait(1).to({scaleX:0.848,scaleY:1.0116,rotation:0.4142,x:197.75,y:49.4},0).wait(1).to({scaleX:0.8986,scaleY:1.0077,rotation:0.2761,x:197.7,y:49.2},0).wait(1).to({scaleX:0.9493,scaleY:1.0039,rotation:0.1381,x:197.75,y:49.05},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:48.9},0).wait(1));

	// CorpsLv2
	this.instance_3 = new lib.Symbole22();
	this.instance_3.setTransform(73.7,51.7,1,1,0,0,0,78.2,35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).wait(1).to({regX:78,rotation:-0.1776,x:73.55,y:51.8},0).wait(1).to({rotation:-0.3552,y:51.95},0).wait(1).to({rotation:-0.5327,x:73.6,y:52.15},0).wait(1).to({rotation:-0.7103,y:52.3},0).wait(1).to({rotation:-0.8879,x:73.65,y:52.45},0).wait(1).to({rotation:-1.0655,y:52.6},0).wait(1).to({rotation:-1.2431,y:52.75},0).wait(1).to({rotation:-1.4207,y:52.85},0).wait(1).to({rotation:-1.5982,x:73.7,y:53.05},0).wait(1).to({rotation:-1.7758,y:53.2},0).wait(1).to({rotation:-1.9534,y:53.35},0).wait(1).to({rotation:-2.131,x:73.75,y:53.5},0).wait(1).to({rotation:-2.3086,y:53.6},0).wait(1).to({rotation:-2.4862,y:53.75},0).wait(1).to({rotation:-2.6637,x:73.8,y:53.95},0).wait(1).to({rotation:-2.8413,y:54.1},0).wait(1).to({rotation:-3.0189,y:54.25},0).wait(1).to({rotation:-3.1965,x:73.85,y:54.4},0).wait(1).to({rotation:-2.9128,y:53.5},0).wait(1).to({rotation:-2.6291,x:73.8,y:52.55},0).wait(1).to({rotation:-2.3454,x:73.85,y:51.6},0).wait(1).to({rotation:-2.0617,x:73.8,y:50.75},0).wait(1).to({rotation:-1.7779,x:73.85,y:49.85},0).wait(1).to({rotation:-1.4942,x:73.8,y:48.9},0).wait(1).to({rotation:-1.2105,x:73.85,y:48},0).wait(1).to({rotation:-0.9268,x:73.8,y:47.1},0).wait(1).to({rotation:-0.6431,x:73.85,y:46.2},0).wait(1).to({rotation:-0.3594,x:73.8,y:45.25},0).wait(1).to({rotation:-0.0757,x:73.85,y:45.6},0).wait(1).to({rotation:0.208,x:73.8,y:46},0).wait(1).to({rotation:0.4917,x:73.85,y:46.3},0).wait(1).to({rotation:0.7754,y:46.65},0).wait(1).to({rotation:1.0592,y:47},0).wait(1).to({rotation:1.3429,y:47.35},0).wait(1).to({rotation:1.6266,x:73.8,y:47.65},0).wait(1).to({rotation:1.9103,x:73.85,y:48},0).wait(1).to({rotation:2.194,x:73.8,y:48.35},0).wait(1).to({rotation:2.4777,x:73.85,y:48.65},0).wait(1).to({rotation:2.7614,x:73.8,y:49},0).wait(1).to({rotation:2.6233,y:49.1},0).wait(1).to({rotation:2.4853,x:73.85,y:49.25},0).wait(1).to({rotation:2.3472,x:73.8,y:49.4},0).wait(1).to({rotation:2.2091,x:73.85,y:49.5},0).wait(1).to({rotation:2.0711,y:49.65},0).wait(1).to({rotation:1.933,x:73.8,y:49.8},0).wait(1).to({rotation:1.7949,y:49.9},0).wait(1).to({rotation:1.6568,y:50.05},0).wait(1).to({rotation:1.5188,y:50.15},0).wait(1).to({rotation:1.3807,x:73.85,y:50.3},0).wait(1).to({rotation:1.2426,y:50.4},0).wait(1).to({rotation:1.1046,y:50.5},0).wait(1).to({rotation:0.9665,y:50.65},0).wait(1).to({rotation:0.8284,y:50.8},0).wait(1).to({rotation:0.6904,y:50.9},0).wait(1).to({rotation:0.5523,x:73.8,y:51},0).wait(1).to({rotation:0.4142,x:73.85,y:51.15},0).wait(1).to({rotation:0.2761,y:51.25},0).wait(1).to({rotation:0.1381,x:73.8,y:51.4},0).wait(1).to({rotation:0,y:51.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4,16.7,259.8,70);
p.frameBounds = [rect, new cjs.Rectangle(-4.1,16.6,257.5,70.5), new cjs.Rectangle(-4.2,16.6,255.1,71), new cjs.Rectangle(-4.3,16.4,252.8,71.4), new cjs.Rectangle(-4.4,16.3,250.4,72), new cjs.Rectangle(-4.5,16.3,252,72.4), new cjs.Rectangle(-4.6,16.2,253.6,72.9), new cjs.Rectangle(-4.7,16.1,255.3,73.4), new cjs.Rectangle(-4.8,16,256.8,73.9), new cjs.Rectangle(-4.9,16,258.5,74.3), new cjs.Rectangle(-5,15.9,256.1,74.8), new cjs.Rectangle(-5.1,15.8,253.8,75.3), new cjs.Rectangle(-5.2,15.7,251.6,75.8), new cjs.Rectangle(-5.3,15.6,249.3,76.3), new cjs.Rectangle(-5.4,15.6,247,76.7), new cjs.Rectangle(-5.5,15.5,249.6,77.1), new cjs.Rectangle(-5.6,15.4,252.4,77.7), new cjs.Rectangle(-5.7,15.3,255.1,78.1), new cjs.Rectangle(-5.8,15.3,257.7,78.6), new cjs.Rectangle(-5.6,14.7,259.9,77.9), new cjs.Rectangle(-5.5,14.2,257,77.1), new cjs.Rectangle(-5.3,13.7,254,76.4), new cjs.Rectangle(-5.2,13.2,251,75.6), new cjs.Rectangle(-5,12.7,248,74.8), new cjs.Rectangle(-4.9,12.1,245.1,74.1), new cjs.Rectangle(-4.7,11.6,248.9,73.3), new cjs.Rectangle(-4.5,11.1,252.7,72.5), new cjs.Rectangle(-4.4,10.5,256.6,71.8), new cjs.Rectangle(-4.2,10,260.3,71), new cjs.Rectangle(-4,10.7,259.3,70.2), new cjs.Rectangle(-4.1,10.9,258.7,70.6), new cjs.Rectangle(-4.3,10.9,258.1,71.4), new cjs.Rectangle(-4.4,10.8,257.6,72.1), new cjs.Rectangle(-4.6,10.8,257.1,72.9), new cjs.Rectangle(-4.8,10.7,256.5,73.6), new cjs.Rectangle(-5,10.7,254.6,74.4), new cjs.Rectangle(-5.1,10.7,252.7,75.1), new cjs.Rectangle(-5.3,10.6,250.7,75.9), new cjs.Rectangle(-5.5,10.6,248.7,76.7), new cjs.Rectangle(-5.5,10.5,246.6,77.4), new cjs.Rectangle(-5.5,10.8,248.9,77.1), new cjs.Rectangle(-5.4,11.1,250.9,76.7), new cjs.Rectangle(-5.3,11.5,253.1,76.4), new cjs.Rectangle(-5.3,11.7,255.2,76), new cjs.Rectangle(-5.2,12.1,257.4,75.6), new cjs.Rectangle(-5.1,12.4,255.9,75.2), new cjs.Rectangle(-5,12.7,254.3,74.9), new cjs.Rectangle(-4.9,13,253,74.5), new cjs.Rectangle(-4.9,13.3,251.5,74.1), new cjs.Rectangle(-4.8,13.6,250.1,73.8), new cjs.Rectangle(-4.7,14,249.2,73.4), new cjs.Rectangle(-4.6,14.3,248.4,73), new cjs.Rectangle(-4.6,14.6,247.5,72.7), new cjs.Rectangle(-4.4,14.9,246.6,72.3), new cjs.Rectangle(-4.4,15.2,245.9,71.9), new cjs.Rectangle(-4.3,15.5,248.6,71.5), new cjs.Rectangle(-4.2,15.8,251.4,71.2), new cjs.Rectangle(-4.2,16.1,254.3,70.8), new cjs.Rectangle(-4,16.4,257,70.4), new cjs.Rectangle(-4,16.7,259.8,70), new cjs.Rectangle(-4.5,16.7,260.3,70), new cjs.Rectangle(-4.5,16.6,257.9,70.5), new cjs.Rectangle(-4.6,16.6,255.5,71), new cjs.Rectangle(-4.7,16.4,253.2,71.4), new cjs.Rectangle(-4.8,16.4,250.8,71.9), new cjs.Rectangle(-4.9,16.3,252.4,72.4), new cjs.Rectangle(-4.9,16.2,253.9,72.9), new cjs.Rectangle(-5.1,16.1,255.7,73.4), new cjs.Rectangle(-5.2,16,257.2,73.9), new cjs.Rectangle(-5.2,15.9,258.8,74.3), new cjs.Rectangle(-5.3,15.8,256.4,74.8), new cjs.Rectangle(-5.4,15.7,254.1,75.3), new cjs.Rectangle(-5.5,15.7,251.8,75.8), new cjs.Rectangle(-5.6,15.6,249.5,76.3), new cjs.Rectangle(-5.7,15.5,247.2,76.7), new cjs.Rectangle(-5.7,15.4,249.8,77.2), new cjs.Rectangle(-5.8,15.3,252.6,77.7), new cjs.Rectangle(-5.9,15.3,255.3,78.1), new cjs.Rectangle(-6,15.1,257.8,78.6), new cjs.Rectangle(-5.8,14.6,260.1,77.9), new cjs.Rectangle(-5.6,14,257.1,77.1), new cjs.Rectangle(-5.5,13.6,254.2,76.4), new cjs.Rectangle(-5.3,13.1,251.1,75.6), new cjs.Rectangle(-5.2,12.5,248.2,74.8), new cjs.Rectangle(-5,12,245.2,74.1), new cjs.Rectangle(-4.8,11.4,249.1,73.3), new cjs.Rectangle(-4.7,10.9,252.9,72.5), new cjs.Rectangle(-4.5,10.4,256.7,71.8), new cjs.Rectangle(-4.3,9.9,260.5,71), new cjs.Rectangle(-4.2,10.6,259.4,70.2), new cjs.Rectangle(-4.3,10.7,258.9,70.6), new cjs.Rectangle(-4.4,10.7,258.3,71.4), new cjs.Rectangle(-4.6,10.7,257.7,72.1), new cjs.Rectangle(-4.8,10.6,257.2,72.9), new cjs.Rectangle(-4.9,10.5,256.7,73.7), new cjs.Rectangle(-5.1,10.5,254.7,74.4), new cjs.Rectangle(-5.3,10.5,252.8,75.1), new cjs.Rectangle(-5.4,10.5,250.8,75.9), new cjs.Rectangle(-5.6,10.4,248.8,76.7), new cjs.Rectangle(-5.7,10.4,246.8,77.4), new cjs.Rectangle(-5.7,10.7,249,77.1), new cjs.Rectangle(-5.6,11,251.1,76.7), new cjs.Rectangle(-5.5,11.3,253.2,76.4), new cjs.Rectangle(-5.4,11.6,255.4,76), new cjs.Rectangle(-5.4,11.9,257.5,75.6), new cjs.Rectangle(-5.3,12.2,256,75.2), new cjs.Rectangle(-5.2,12.6,254.5,74.9), new cjs.Rectangle(-5.1,12.9,253.1,74.5), new cjs.Rectangle(-5,13.2,251.7,74.1), new cjs.Rectangle(-5,13.5,250.2,73.8), new cjs.Rectangle(-4.9,13.8,249.4,73.4), new cjs.Rectangle(-4.8,14.1,248.5,73), new cjs.Rectangle(-4.7,14.4,247.7,72.6), new cjs.Rectangle(-4.6,14.7,246.8,72.3), new cjs.Rectangle(-4.6,15,246,71.9), new cjs.Rectangle(-4.4,15.4,248.7,71.5), new cjs.Rectangle(-4.4,15.7,251.6,71.1), new cjs.Rectangle(-4.3,16,254.4,70.8), new cjs.Rectangle(-4.2,16.3,257.1,70.4), new cjs.Rectangle(-4.2,16.6,260,70)];


(lib.ClipMouche = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {vol1:0,mort1:15,vol2:35,mort2:51};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay("vol1");
	}
	this.frame_34 = function() {
		this.gotoAndPlay("mort1");
	}
	this.frame_50 = function() {
		this.gotoAndPlay("vol2");
	}
	this.frame_69 = function() {
		this.gotoAndPlay("mort2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(20).call(this.frame_34).wait(16).call(this.frame_50).wait(19).call(this.frame_69).wait(1));

	// Corps
	this.instance = new lib.Symbole5();
	this.instance.setTransform(70.15,83.05,0.367,0.3706,0,0,0,191.2,160.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:190,regY:159,scaleY:0.3707,x:69.75,y:81.75},0).wait(1).to({y:81.05},0).wait(1).to({y:80.35},0).wait(1).to({y:79.65},0).wait(1).to({y:78.95},0).wait(1).to({y:78.25},0).wait(1).to({y:77.5},0).wait(1).to({y:78.2},0).wait(1).to({y:78.85},0).wait(1).to({y:79.5},0).wait(1).to({y:80.15},0).wait(1).to({y:80.8},0).wait(1).to({y:81.45},0).wait(1).to({y:82.1},0).to({_off:true},1).wait(55));

	// Aile_D
	this.instance_1 = new lib.Symbole3();
	this.instance_1.setTransform(99.75,30.75,0.367,0.3706,0,0,0,5.2,82.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:45,regY:39,scaleY:0.3707,rotation:29.9979,x:120.5,y:23.2},0).wait(1).to({scaleY:0.3706,rotation:14.9981,x:118.05,y:17.35},0).wait(1).to({scaleY:0.3707,rotation:-15.0014,x:109.65,y:9.15},0).wait(1).to({scaleY:0.3706,rotation:14.9981,x:118.05,y:15.95},0).wait(1).to({scaleY:0.3707,rotation:29.9979,x:120.5,y:20.4},0).wait(1).to({scaleY:0.3706,rotation:14.9981,x:118.05,y:14.55},0).wait(1).to({scaleY:0.3707,rotation:0,x:114.3,y:9.5},0).wait(1).to({rotation:14.9989,x:118.05,y:14.35},0).wait(1).to({rotation:29.9979,x:120.5,y:20},0).wait(1).to({scaleY:0.3706,rotation:14.9981,x:118.05,y:15.35},0).wait(1).to({scaleY:0.3707,rotation:0,x:114.3,y:11.6},0).wait(1).to({rotation:29.9992,x:120.5,y:21.5},0).wait(1).to({rotation:14.9989,x:118.05,y:16.9},0).wait(1).to({rotation:29.9979,x:120.5,y:22.55},0).to({_off:true},1).wait(55));

	// Aile_G
	this.instance_2 = new lib.Symbole4();
	this.instance_2.setTransform(91.75,27.15,0.367,0.3706,0,0,0,97.5,73.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47,regY:37,scaleY:0.3707,rotation:-14.9989,x:70.35,y:18.3},0).wait(1).to({rotation:0,x:73.15,y:12.35},0).wait(1).to({rotation:14.9989,x:77.25,y:7.3},0).wait(1).to({rotation:-14.9989,x:70.35,y:16.2},0).wait(1).to({rotation:-7.4994,x:71.6,y:12.75},0).wait(1).to({rotation:0,x:73.15,y:9.55},0).wait(1).to({rotation:14.9989,x:77.25,y:4.5},0).wait(1).to({rotation:0,x:73.15,y:9.35},0).wait(1).to({rotation:-14.9989,x:70.35,y:15.1},0).wait(1).to({rotation:0,x:73.15,y:10.35},0).wait(1).to({rotation:6.9381,x:74.9,y:8.75},0).wait(1).to({rotation:-14.9989,x:70.35,y:16.65},0).wait(1).to({rotation:0,x:73.15,y:11.9},0).wait(1).to({rotation:-14.9989,x:70.35,y:17.65},0).to({_off:true},1).wait(55));

	// Tout
	this.instance_3 = new lib.Symbole19();
	this.instance_3.setTransform(69.8,70.6,1,1,0,0,0,69.8,70.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(1).to({regX:69.7,regY:70.7,scaleX:0.9716,scaleY:0.9716,rotation:19.1179,x:72.75,y:68.3},0).wait(1).to({scaleX:0.9432,scaleY:0.9432,rotation:38.2168,x:75.85,y:65.8},0).wait(1).to({scaleX:0.9148,scaleY:0.9148,rotation:57.3158,x:78.95,y:63.3},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,rotation:76.3768,x:82.05,y:60.85},0).wait(1).to({scaleX:0.8581,scaleY:0.8581,rotation:95.4189,x:85.2,y:58.35},0).wait(1).to({scaleX:0.8298,scaleY:0.8298,rotation:114.4611,x:88.3,y:55.95},0).wait(1).to({scaleX:0.8015,scaleY:0.8015,rotation:133.4653,x:91.4,y:53.5},0).wait(1).to({scaleX:0.7733,scaleY:0.7733,rotation:152.4505,x:94.55,y:51.2},0).wait(1).to({scaleX:0.7451,scaleY:0.7451,rotation:171.4168,x:97.7,y:48.75},0).wait(1).to({scaleX:0.7169,scaleY:0.7169,rotation:190.3642,x:100.75,y:46.4},0).wait(1).to({scaleX:0.6888,scaleY:0.6888,rotation:209.2926,x:103.85,y:44},0).wait(1).to({scaleX:0.6606,scaleY:0.6606,rotation:228.2021,x:106.9,y:41.6},0).wait(1).to({scaleX:0.6325,scaleY:0.6325,rotation:247.0926,x:110,y:39.3},0).wait(1).to({scaleX:0.6045,scaleY:0.6045,rotation:265.9453,x:113,y:36.9},0).wait(1).to({scaleX:0.5765,scaleY:0.5765,rotation:284.7979,x:116.05,y:34.5},0).wait(1).to({scaleX:0.5485,scaleY:0.5485,rotation:303.6316,x:119.1,y:32.15},0).wait(1).to({scaleX:0.5205,scaleY:0.5205,rotation:322.4274,x:122.1,y:29.75},0).wait(1).to({scaleX:0.4926,scaleY:0.4926,rotation:341.2232,x:125.15,y:27.35},0).wait(1).to({scaleX:0.4646,scaleY:0.4646,rotation:360,x:128.2,y:25},0).to({_off:true},1).wait(35));

	// Corps
	this.instance_4 = new lib.Symbole23();
	this.instance_4.setTransform(64.7,83.05,1,1,0,0,0,64.7,52.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).wait(1).to({regX:64.5,regY:52.5,x:64.5,y:82.3},0).wait(1).to({y:81.7},0).wait(1).to({y:81.1},0).wait(1).to({y:80.5},0).wait(1).to({y:79.85},0).wait(1).to({y:79.25},0).wait(1).to({y:78.65},0).wait(1).to({y:78.05},0).wait(1).to({y:78.75},0).wait(1).to({y:79.45},0).wait(1).to({y:80.15},0).wait(1).to({y:80.85},0).wait(1).to({y:81.55},0).wait(1).to({y:82.25},0).wait(1).to({y:83},0).to({_off:true},1).wait(19));

	// Aile_Droite
	this.instance_5 = new lib.Symbole24();
	this.instance_5.setTransform(91.6,63.4,1,1,0,0,0,0,65.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).wait(1).to({regX:38,regY:32.5,rotation:10.721,x:135.05,y:37.6},0).wait(1).to({rotation:-1.7323,x:128.6,y:28.2},0).wait(1).to({rotation:17.7435,x:137.8,y:41.8},0).wait(1).to({rotation:5.0532,x:132.35,y:31.45},0).wait(1).to({rotation:14.042,x:136.4,y:37.5},0).wait(1).to({rotation:1.1023,x:130.25,y:27.4},0).wait(1).to({rotation:16.1,x:137.2,y:37.85},0).wait(1).to({rotation:5.6304,x:132.6,y:29.25},0).wait(1).to({rotation:15.0666,x:136.8,y:37.05},0).wait(1).to({rotation:0,x:129.6,y:26.7},0).wait(1).to({rotation:18.6947,x:138.1,y:41.35},0).wait(1).to({rotation:8.2104,x:133.85,y:33.9},0).wait(1).to({rotation:16.3965,x:137.3,y:40.95},0).wait(1).to({rotation:1.3968,x:130.35,y:30.5},0).wait(1).to({rotation:13.8493,x:136.3,y:40.25},0).to({_off:true},1).wait(19));

	// Aile_Gauche
	this.instance_6 = new lib.Symbole25();
	this.instance_6.setTransform(71.1,38.3,1,1,0,0,0,74.8,64.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).wait(1).to({regX:37.5,regY:32,rotation:-9.6998,x:28.85,y:12.05},0).wait(1).to({rotation:5.2995,x:36.95,y:1.35},0).wait(1).to({rotation:-13.14,x:27.35,y:13.45},0).wait(1).to({rotation:-3.1791,x:32.05,y:5.65},0).wait(1).to({rotation:-14.1177,x:27,y:13.1},0).wait(1).to({rotation:-4.9179,x:31.15,y:5.8},0).wait(1).to({rotation:-13.6109,x:27.25,y:11.6},0).wait(1).to({rotation:-5.884,x:30.7,y:5.35},0).wait(1).to({rotation:-16.5951,x:26.1,y:13.9},0).wait(1).to({rotation:-7.3831,x:29.95,y:7.6},0).wait(1).to({rotation:-22.3813,x:24.3,y:19.65},0).wait(1).to({rotation:-11.6691,x:27.95,y:11.85},0).wait(1).to({rotation:-20.6074,x:24.75,y:19.4},0).wait(1).to({rotation:-10.3669,x:28.6,y:12.1},0).wait(1).to({rotation:-21.0777,x:24.6,y:20.95},0).to({_off:true},1).wait(19));

	// Tout2
	this.instance_7 = new lib.Symbole26();
	this.instance_7.setTransform(81.8,54.7,1,1,0,0,0,85.5,80.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).wait(1).to({regX:85.6,regY:80.8,scaleX:0.956,scaleY:0.956,rotation:20,x:83.6,y:55.55},0).wait(1).to({scaleX:0.9119,scaleY:0.9119,rotation:40,x:85.3,y:56.35},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,rotation:60,x:87,y:57.25},0).wait(1).to({scaleX:0.8238,scaleY:0.8238,rotation:80,x:88.65,y:58.1},0).wait(1).to({scaleX:0.7797,scaleY:0.7797,rotation:100,x:90.3,y:58.9},0).wait(1).to({scaleX:0.7356,scaleY:0.7356,rotation:120,x:91.95,y:59.75},0).wait(1).to({scaleX:0.6916,scaleY:0.6916,rotation:140,x:93.65,y:60.5},0).wait(1).to({scaleX:0.6475,scaleY:0.6475,rotation:160,x:95.3,y:61.3},0).wait(1).to({scaleX:0.6034,scaleY:0.6034,rotation:180,x:97,y:62.1},0).wait(1).to({scaleX:0.5594,scaleY:0.5594,rotation:200,x:98.65,y:62.85},0).wait(1).to({scaleX:0.5153,scaleY:0.5153,rotation:220,x:100.35,y:63.65},0).wait(1).to({scaleX:0.4713,scaleY:0.4713,rotation:240,x:102.15,y:64.4},0).wait(1).to({scaleX:0.4272,scaleY:0.4272,rotation:260,x:103.85,y:65.25},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,rotation:280,x:105.6,y:66.05},0).wait(1).to({scaleX:0.3391,scaleY:0.3391,rotation:300,x:107.3,y:66.85},0).wait(1).to({scaleX:0.295,scaleY:0.295,rotation:320,x:109,y:67.65},0).wait(1).to({scaleX:0.251,scaleY:0.251,rotation:340,x:110.75,y:68.5},0).wait(1).to({scaleX:0.2069,scaleY:0.2069,rotation:360,x:112.45,y:69.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,139.5,141.4);
p.frameBounds = [rect, new cjs.Rectangle(0,0.7,142.1,140), new cjs.Rectangle(0,-1.3,139.5,141.3), new cjs.Rectangle(0,-10.3,139.5,149.6), new cjs.Rectangle(0,-2.2,139.5,140.8), new cjs.Rectangle(0,-3,142.1,140.9), new cjs.Rectangle(0,-4.1,139.5,141.3), new cjs.Rectangle(0,-13.1,139.5,149.6), new cjs.Rectangle(0,-4.3,139.5,141.5), new cjs.Rectangle(0,-2.5,142.1,140.4), new cjs.Rectangle(0,-3.3,139.5,141.8), new cjs.Rectangle(0,-6.8,139.5,145.9), new cjs.Rectangle(0,-1,142.1,140.8), new cjs.Rectangle(0,-1.7,139.5,142.2), new cjs.Rectangle(0,0,142.1,141.1), new cjs.Rectangle(0,0,139.5,141.4), new cjs.Rectangle(-13.7,-0.9,165.5,156.3), new cjs.Rectangle(-17,-9.6,179.5,168.7), new cjs.Rectangle(-9.9,-13.5,173.5,165.6), new cjs.Rectangle(6.6,-8.9,149.1,144.8), new cjs.Rectangle(19,-6.8,127.6,128.7), new cjs.Rectangle(10.9,-20.9,136.9,147.5), new cjs.Rectangle(11.8,-25.9,145.5,154.1), new cjs.Rectangle(21.4,-22.2,137.8,143.7), new cjs.Rectangle(38.4,-11,115.9,118.7), new cjs.Rectangle(45.4,-12.5,113.5,110.5), new cjs.Rectangle(43.2,-22,126.2,117.8), new cjs.Rectangle(45.2,-23.9,127.2,120.6), new cjs.Rectangle(53.8,-18.7,114.6,110.3), new cjs.Rectangle(67.8,-8.2,90.8,89.2), new cjs.Rectangle(74.7,-11.3,91.1,95.1), new cjs.Rectangle(76.4,-17.2,96.2,102.7), new cjs.Rectangle(78.5,-18.7,95,99.9), new cjs.Rectangle(85.2,-15.2,83.7,86.7), new cjs.Rectangle(95.9,-7.8,64.8,65.6), new cjs.Rectangle(-3.7,-26.2,171.3,161.6), new cjs.Rectangle(-13.4,-25.8,191.9,160.7), new cjs.Rectangle(-3.3,-33.8,170.9,168.1), new cjs.Rectangle(-16.4,-26.1,200.3,159.8), new cjs.Rectangle(-7.1,-28.3,180.2,161.4), new cjs.Rectangle(-17.1,-27.1,198.4,159.5), new cjs.Rectangle(-8.9,-29.3,177.8,161.1), new cjs.Rectangle(-16.7,-28.3,199.5,159.5), new cjs.Rectangle(-9.9,-30.3,183.6,160.9), new cjs.Rectangle(-18.9,-27.4,200.9,158.8), new cjs.Rectangle(-11.3,-29,178.9,161), new cjs.Rectangle(-22.6,-24.1,207.2,156.9), new cjs.Rectangle(-15.1,-27,191.3,160.4), new cjs.Rectangle(-21.6,-23.7,204.5,157.8), new cjs.Rectangle(-14,-26.1,183.3,160.9), new cjs.Rectangle(-21.8,-22.3,202.9,157.9), new cjs.Rectangle(-3.7,-26.2,171.3,161.6), new cjs.Rectangle(-16.4,-45,195.5,188.5), new cjs.Rectangle(-19.3,-50.2,197.6,190.7), new cjs.Rectangle(-9.4,-42,175.9,169.9), new cjs.Rectangle(11.3,-22.8,141.4,151.7), new cjs.Rectangle(21.8,-14.8,142,147.2), new cjs.Rectangle(23,-22.1,151.9,157.3), new cjs.Rectangle(32.7,-18.7,142.2,147.3), new cjs.Rectangle(41.2,-6.1,124,120.7), new cjs.Rectangle(45.2,13.3,103.4,97.6), new cjs.Rectangle(42.8,11.2,114.4,110.4), new cjs.Rectangle(47.8,16,111.7,107.8), new cjs.Rectangle(58.9,26.1,95.5,92.3), new cjs.Rectangle(70.7,28.5,73.2,78.7), new cjs.Rectangle(69.4,29.9,69.8,72.4), new cjs.Rectangle(69.1,32.1,70,72.5), new cjs.Rectangle(74.4,38.7,60.6,62.9), new cjs.Rectangle(83.7,47.9,48,46.7), new cjs.Rectangle(94.8,52.7,35.4,33.4)];


(lib.ClipMoustique = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {vol:0,tir:30,mort:60};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay("vol");
	}
	this.frame_59 = function() {
		this.gotoAndPlay("tir");
	}
	this.frame_89 = function() {
		this.gotoAndPlay("mort");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(30).call(this.frame_89).wait(1));

	// pointContact
	this.p4_mc = new lib.clipPoint();
	this.p4_mc.name = "p4_mc";
	this.p4_mc.setTransform(-21.4,-32.5,1,1,0,0,0,-0.1,-0.1);
	this.p4_mc.visible = false;

	this.p3_mc = new lib.clipPoint();
	this.p3_mc.name = "p3_mc";
	this.p3_mc.setTransform(-52.55,-44.8,1,1,0,0,0,-0.1,-0.1);
	this.p3_mc.visible = false;

	this.p3_mc_1 = new lib.clipPoint();
	this.p3_mc_1.name = "p3_mc_1";
	this.p3_mc_1.setTransform(-98.8,-25.15,1,1,0,0,0,-0.1,-0.1);
	this.p3_mc_1.visible = false;

	this.p2_mc = new lib.clipPoint();
	this.p2_mc.name = "p2_mc";
	this.p2_mc.setTransform(-75.85,4.35,1,1,0,0,0,-0.1,-0.1);
	this.p2_mc.visible = false;

	this.p1_mc = new lib.clipPoint();
	this.p1_mc.name = "p1_mc";
	this.p1_mc.setTransform(-30,6.5,1,1,0,0,0,-0.1,-0.1);
	this.p1_mc.visible = false;

	this.p0_mc = new lib.clipPoint();
	this.p0_mc.name = "p0_mc";
	this.p0_mc.setTransform(-6.2,-1.9,1,1,0,0,0,-0.1,-0.1);
	this.p0_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0_mc},{t:this.p1_mc},{t:this.p2_mc},{t:this.p3_mc_1},{t:this.p3_mc},{t:this.p4_mc}]}).to({state:[]},60).wait(30));

	// Ailes
	this.instance = new lib.Symbole6();
	this.instance.setTransform(-90.35,-18.05,0.4385,0.4385,0,0,0,106.9,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55,regY:46,rotation:14.9989,x:-107,y:-43.85},0).wait(1).to({rotation:0,x:-113.1,y:-39.05},0).wait(1).to({rotation:-14.9989,x:-117.55,y:-32.8},0).wait(1).to({rotation:-5.2821,x:-114.85,y:-37.5},0).wait(1).to({rotation:9.7168,x:-109.35,y:-43.65},0).wait(1).to({rotation:-5.2821,x:-114.85,y:-38.25},0).wait(1).to({rotation:-12.5308,x:-116.9,y:-35.4},0).wait(1).to({rotation:2.4683,x:-112.15,y:-42.1},0).wait(1).to({rotation:17.4671,x:-105.9,y:-47.4},0).wait(1).to({rotation:2.4674,x:-112.15,y:-42.85},0).wait(1).to({rotation:-12.5317,x:-116.9,y:-36.8},0).wait(1).to({rotation:2.4678,x:-112.15,y:-43.55},0).wait(1).to({rotation:15.8795,x:-106.6,y:-48.4},0).wait(1).to({rotation:14.9989,x:-107,y:-48.45},0).wait(1).to({rotation:0,x:-113.1,y:-42.95},0).wait(1).to({rotation:-14.9989,x:-117.55,y:-36},0).wait(1).to({rotation:-5.2821,x:-114.85,y:-40},0).wait(1).to({rotation:9.7168,x:-109.35,y:-45.4},0).wait(1).to({rotation:-5.2821,x:-114.85,y:-39.25},0).wait(1).to({rotation:-12.5308,x:-116.9,y:-35.7},0).wait(1).to({rotation:2.4683,x:-112.15,y:-41.7},0).wait(1).to({rotation:17.4671,x:-105.9,y:-46.25},0).wait(1).to({rotation:2.4674,x:-112.15,y:-40.95},0).wait(1).to({rotation:2.4678,y:-40.6},0).wait(1).to({rotation:14.9989,x:-107,y:-44.45},0).wait(1).to({rotation:0,x:-113.1,y:-38.95},0).wait(1).to({rotation:-14.9989,x:-117.55,y:-31.95},0).wait(1).to({rotation:-5.2821,x:-114.85,y:-35.95},0).wait(1).to({rotation:11.9112,x:-108.35,y:-42.05},0).wait(1).to({regX:109.7,regY:92.2,rotation:0,x:-90.35,y:-18.05},0).wait(1).to({regX:55,regY:46,rotation:14.9989,x:-108.2,y:-44.1},0).wait(1).to({rotation:0,x:-114.35,y:-38.9},0).wait(1).to({rotation:-14.9989,x:-118.75,y:-32.25},0).wait(1).to({rotation:-5.2821,x:-116.1,y:-37.1},0).wait(1).to({rotation:9.7168,x:-110.55,y:-43.5},0).wait(1).to({rotation:-5.2821,x:-116.1,y:-37.7},0).wait(1).to({rotation:-12.5308,x:-118.1,y:-34.65},0).wait(1).to({rotation:2.4683,x:-113.4,y:-41.6},0).wait(1).to({rotation:17.4671,x:-107.1,y:-47.1},0).wait(1).to({rotation:2.4674,x:-113.4,y:-42.15},0).wait(1).to({rotation:-12.5317,x:-118.1,y:-35.75},0).wait(1).to({rotation:2.4678,x:-113.4,y:-42.75},0).wait(1).to({rotation:15.8795,x:-107.8,y:-47.8},0).wait(1).to({rotation:14.9989,x:-108.2},0).wait(1).to({rotation:0,x:-114.35,y:-42.05},0).wait(1).to({rotation:-14.9989,x:-118.75,y:-34.85},0).wait(1).to({rotation:-5.2821,x:-116.1,y:-39.2},0).wait(1).to({rotation:9.7168,x:-110.55,y:-45},0).wait(1).to({rotation:-5.2821,x:-116.1,y:-38.65},0).wait(1).to({rotation:-12.5308,x:-118.1,y:-35.05},0).wait(1).to({rotation:2.4683,x:-113.4,y:-41.45},0).wait(1).to({rotation:17.4671,x:-107.1,y:-46.4},0).wait(1).to({rotation:2.4674,x:-113.4,y:-40.9},0).wait(1).to({rotation:2.4678,y:-40.65},0).wait(1).to({rotation:14.9989,x:-108.2,y:-44.85},0).wait(1).to({rotation:0,x:-114.35,y:-39.15},0).wait(1).to({rotation:-14.9989,x:-118.75,y:-31.95},0).wait(1).to({rotation:-5.2821,x:-116.1,y:-36.25},0).wait(1).to({rotation:11.9112,x:-109.6,y:-42.8},0).to({_off:true},1).wait(30));

	// Corps
	this.instance_1 = new lib.Symbole7();
	this.instance_1.setTransform(-47.8,-17.1,0.4385,0.4385,0,0,0,111.3,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:111,regY:74.5,x:-47.95,y:-16.35},0).wait(1).to({y:-16.7},0).wait(1).to({y:-17.05},0).wait(1).to({y:-17.45},0).wait(1).to({y:-17.8},0).wait(1).to({y:-18.15},0).wait(1).to({y:-18.55},0).wait(1).to({y:-18.9},0).wait(1).to({y:-19.25},0).wait(1).to({y:-19.6},0).wait(1).to({y:-20},0).wait(1).to({y:-20.35},0).wait(1).to({y:-20.7},0).wait(1).to({y:-21.1},0).wait(1).to({y:-20.75},0).wait(1).to({y:-20.4},0).wait(1).to({y:-20.05},0).wait(1).to({y:-19.7},0).wait(1).to({y:-19.4},0).wait(1).to({y:-19.05},0).wait(1).to({y:-18.7},0).wait(1).to({y:-18.35},0).wait(1).to({y:-18},0).wait(1).to({y:-17.7},0).wait(1).to({y:-17.35},0).wait(1).to({y:-17},0).wait(1).to({y:-16.65},0).wait(1).to({y:-16.3},0).wait(1).to({y:-16},0).to({_off:true},1).wait(60));

	// Paup
	this.instance_2 = new lib.Symbole11();
	this.instance_2.setTransform(-43.5,-38.25,1,1,0,0,0,31.2,12.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(1).to({regX:31.5,regY:12.5,x:-43.2,y:-38.75},0).wait(1).to({y:-39.1},0).wait(1).to({y:-39.45},0).wait(1).to({y:-39.8},0).wait(1).to({y:-40.15},0).wait(1).to({y:-40.5},0).wait(1).to({y:-40.85},0).wait(1).to({y:-41.15},0).wait(1).to({y:-41.5},0).wait(1).to({y:-41.85},0).wait(1).to({y:-42.2},0).wait(1).to({y:-42.55},0).wait(1).to({y:-42.9},0).wait(1).to({y:-43.25},0).wait(1).to({y:-42.9},0).wait(1).to({y:-42.55},0).wait(1).to({y:-42.2},0).wait(1).to({y:-41.85},0).wait(1).to({y:-41.5},0).wait(1).to({y:-41.15},0).wait(1).to({y:-40.8},0).wait(1).to({y:-40.45},0).wait(1).to({y:-40.1},0).wait(1).to({y:-39.75},0).wait(1).to({y:-39.4},0).wait(1).to({y:-39.05},0).wait(1).to({y:-38.7},0).wait(1).to({y:-38.35},0).wait(1).to({y:-38},0).to({_off:true},1).wait(30));

	// Nez
	this.instance_3 = new lib.Symbole12();
	this.instance_3.setTransform(-20.25,-8.15,1,1,0,0,0,29.1,14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(1).to({regX:29,x:-20.35,y:-8.45},0).wait(1).to({y:-8.8},0).wait(1).to({y:-9.15},0).wait(1).to({y:-9.5},0).wait(1).to({y:-9.85},0).wait(1).to({y:-10.2},0).wait(1).to({y:-10.55},0).wait(1).to({y:-10.85},0).wait(1).to({y:-11.2},0).wait(1).to({y:-11.55},0).wait(1).to({y:-11.9},0).wait(1).to({y:-12.25},0).wait(1).to({y:-12.6},0).wait(1).to({y:-12.95},0).wait(1).to({y:-12.6},0).wait(1).to({y:-12.25},0).wait(1).to({y:-11.9},0).wait(1).to({y:-11.55},0).wait(1).to({y:-11.2},0).wait(1).to({y:-10.85},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.15},0).wait(1).to({y:-9.8},0).wait(1).to({y:-9.45},0).wait(1).to({y:-9.1},0).wait(1).to({y:-8.75},0).wait(1).to({y:-8.4},0).wait(1).to({y:-8.05},0).wait(1).to({y:-7.7},0).to({_off:true},1).wait(30));

	// Corps
	this.instance_4 = new lib.Symbole15();
	this.instance_4.setTransform(-54.9,-17.7,1,1,0,0,0,41.7,32);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(1).to({regX:41.5,x:-55.1,y:-18},0).wait(1).to({y:-18.35},0).wait(1).to({y:-18.7},0).wait(1).to({y:-19.05},0).wait(1).to({y:-19.4},0).wait(1).to({y:-19.75},0).wait(1).to({y:-20.1},0).wait(1).to({y:-20.4},0).wait(1).to({y:-20.75},0).wait(1).to({y:-21.1},0).wait(1).to({y:-21.45},0).wait(1).to({y:-21.8},0).wait(1).to({y:-22.15},0).wait(1).to({y:-22.5},0).wait(1).to({y:-22.15},0).wait(1).to({y:-21.8},0).wait(1).to({y:-21.45},0).wait(1).to({y:-21.1},0).wait(1).to({y:-20.75},0).wait(1).to({y:-20.4},0).wait(1).to({y:-20.05},0).wait(1).to({y:-19.7},0).wait(1).to({y:-19.35},0).wait(1).to({y:-19},0).wait(1).to({y:-18.65},0).wait(1).to({y:-18.3},0).wait(1).to({y:-17.95},0).wait(1).to({y:-17.6},0).wait(1).to({y:-17.25},0).to({_off:true},1).wait(30));

	// Shii
	this.instance_5 = new lib.Symbole16();
	this.instance_5.setTransform(-28.25,-15.15,1,1,0,0,0,9.1,9.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).wait(1).to({regX:9,x:-28.35,y:-15.45},0).wait(1).to({y:-15.8},0).wait(1).to({y:-16.15},0).wait(1).to({y:-16.5},0).wait(1).to({y:-16.85},0).wait(1).to({y:-17.2},0).wait(1).to({y:-17.55},0).wait(1).to({y:-17.85},0).wait(1).to({y:-18.2},0).wait(1).to({y:-18.55},0).wait(1).to({y:-18.9},0).wait(1).to({y:-19.25},0).wait(1).to({y:-19.6},0).wait(1).to({y:-19.95},0).wait(1).to({y:-19.6},0).wait(1).to({y:-19.25},0).wait(1).to({y:-18.9},0).wait(1).to({y:-18.55},0).wait(1).to({y:-18.2},0).wait(1).to({y:-17.85},0).wait(1).to({y:-17.5},0).wait(1).to({y:-17.15},0).wait(1).to({y:-16.8},0).wait(1).to({y:-16.45},0).wait(1).to({y:-16.1},0).wait(1).to({y:-15.75},0).wait(1).to({y:-15.4},0).wait(1).to({y:-15.05},0).wait(1).to({y:-14.7},0).to({_off:true},1).wait(30));

	// Tout
	this.instance_6 = new lib.Symbole18();
	this.instance_6.setTransform(-68.15,-21,1,1,0,0,0,66.2,35.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).wait(1).to({regX:69,regY:37.4,scaleX:0.9721,scaleY:0.9721,rotation:12.4138,x:-65.8,y:-18.9},0).wait(1).to({scaleX:0.9442,scaleY:0.9442,rotation:24.8276,x:-66.4,y:-18.5},0).wait(1).to({scaleX:0.9162,scaleY:0.9162,rotation:37.2414,x:-66.95,y:-18.25},0).wait(1).to({scaleX:0.8883,scaleY:0.8883,rotation:49.6552,x:-67.55,y:-18.2},0).wait(1).to({scaleX:0.8603,scaleY:0.8603,rotation:62.069,x:-68.25},0).wait(1).to({scaleX:0.8324,scaleY:0.8324,rotation:74.4828,x:-68.8,y:-18.35},0).wait(1).to({scaleX:0.8045,scaleY:0.8045,rotation:86.8966,x:-69.3,y:-18.6},0).wait(1).to({scaleX:0.7766,scaleY:0.7766,rotation:99.3103,x:-69.65,y:-19},0).wait(1).to({scaleX:0.7486,scaleY:0.7486,rotation:111.7241,x:-70,y:-19.45},0).wait(1).to({scaleX:0.7207,scaleY:0.7207,rotation:124.1379,x:-70.2,y:-20},0).wait(1).to({scaleX:0.6928,scaleY:0.6928,rotation:136.5517,x:-70.25,y:-20.45},0).wait(1).to({scaleX:0.6648,scaleY:0.6648,rotation:148.9655,y:-20.9},0).wait(1).to({scaleX:0.6369,scaleY:0.6369,rotation:161.3793,x:-70.15,y:-21.35},0).wait(1).to({scaleX:0.609,scaleY:0.609,rotation:173.7931,x:-69.9,y:-21.75},0).wait(1).to({scaleX:0.581,scaleY:0.581,rotation:186.2069,x:-69.65,y:-22.15},0).wait(1).to({scaleX:0.5531,scaleY:0.5531,rotation:198.6207,x:-69.3,y:-22.35},0).wait(1).to({scaleX:0.5252,scaleY:0.5252,rotation:211.0345,x:-68.95,y:-22.55},0).wait(1).to({scaleX:0.4972,scaleY:0.4972,rotation:223.4483,x:-68.55},0).wait(1).to({scaleX:0.4693,scaleY:0.4693,rotation:235.8621,x:-68.2},0).wait(1).to({scaleX:0.4414,scaleY:0.4414,rotation:248.2759,x:-67.9,y:-22.45},0).wait(1).to({scaleX:0.4135,scaleY:0.4135,rotation:260.6897,x:-67.65,y:-22.25},0).wait(1).to({scaleX:0.3855,scaleY:0.3855,rotation:273.1034,x:-67.45,y:-22.05},0).wait(1).to({scaleX:0.3576,scaleY:0.3576,rotation:285.5172,x:-67.3,y:-21.75},0).wait(1).to({scaleX:0.3297,scaleY:0.3297,rotation:297.931,x:-67.2,y:-21.55},0).wait(1).to({scaleX:0.3017,scaleY:0.3017,rotation:310.3448,y:-21.3},0).wait(1).to({scaleX:0.2738,scaleY:0.2738,rotation:322.7586,x:-67.25,y:-21.1},0).wait(1).to({scaleX:0.2459,scaleY:0.2459,rotation:335.1724,x:-67.35,y:-20.9},0).wait(1).to({scaleX:0.2179,scaleY:0.2179,rotation:347.5862,x:-67.45,y:-20.8},0).wait(1).to({scaleX:0.19,scaleY:0.19,rotation:360,x:-67.6,y:-20.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.2,-58.5,138,75.2);
p.frameBounds = [rect, new cjs.Rectangle(-135.5,-69.6,136.3,86.1), new cjs.Rectangle(-137.1,-59.2,137.9,75.3), new cjs.Rectangle(-146.1,-58.5,146.9,74.3), new cjs.Rectangle(-140.7,-59.9,141.5,75.2), new cjs.Rectangle(-136.5,-67.6,137.3,82.6), new cjs.Rectangle(-140.7,-60.6,141.5,75.2), new cjs.Rectangle(-144.8,-60.3,145.6,74.5), new cjs.Rectangle(-137.2,-63.4,138,77.3), new cjs.Rectangle(-135,-73.9,135.8,87.5), new cjs.Rectangle(-137.2,-64,138,77.2), new cjs.Rectangle(-144.8,-61.7,145.6,74.5), new cjs.Rectangle(-137.2,-64.7,138,77.2), new cjs.Rectangle(-135.4,-74.4,136.2,86.5), new cjs.Rectangle(-135.5,-74.3,136.3,86), new cjs.Rectangle(-137.1,-63.1,137.9,75.1), new cjs.Rectangle(-146.1,-61.7,146.9,74.1), new cjs.Rectangle(-140.7,-62.4,141.5,75.1), new cjs.Rectangle(-136.5,-69.4,137.3,82.5), new cjs.Rectangle(-140.7,-61.6,141.5,75), new cjs.Rectangle(-144.8,-60.6,145.6,74.3), new cjs.Rectangle(-137.2,-62.9,138,77), new cjs.Rectangle(-135,-72.8,135.8,87.2), new cjs.Rectangle(-137.2,-62.2,138,77), new cjs.Rectangle(-137.2,-61.8,138,76.9), new cjs.Rectangle(-135.5,-70.2,136.3,85.7), new cjs.Rectangle(-137.1,-59,137.9,74.8), new cjs.Rectangle(-146.1,-57.7,146.9,73.8), new cjs.Rectangle(-140.7,-58.4,141.5,74.9), new cjs.Rectangle(-136.1,-66.8,136.9,83.6), new cjs.Rectangle(-138.4,-58.5,147.1,72.8), new cjs.Rectangle(-136.7,-69.8,145.4,83.9), new cjs.Rectangle(-138.4,-59,147.1,72.7), new cjs.Rectangle(-147.3,-58,156,71.3), new cjs.Rectangle(-141.9,-59.5,150.6,72.5), new cjs.Rectangle(-137.7,-67.5,146.4,80.1), new cjs.Rectangle(-141.9,-60.1,150.6,72.4), new cjs.Rectangle(-146,-59.5,154.7,71.5), new cjs.Rectangle(-138.4,-62.8,147.1,74.5), new cjs.Rectangle(-136.2,-73.7,144.9,85), new cjs.Rectangle(-138.4,-63.4,147.1,74.4), new cjs.Rectangle(-146,-60.6,154.7,71.2), new cjs.Rectangle(-138.4,-64,147.1,74.2), new cjs.Rectangle(-136.6,-73.8,145.3,83.7), new cjs.Rectangle(-136.7,-73.6,145.4,83.1), new cjs.Rectangle(-138.4,-62.2,147.1,72.1), new cjs.Rectangle(-147.3,-60.6,156,70.8), new cjs.Rectangle(-141.9,-61.6,150.6,72.2), new cjs.Rectangle(-137.7,-69,146.4,79.9), new cjs.Rectangle(-141.9,-61,150.6,72.3), new cjs.Rectangle(-146,-59.9,154.7,71.6), new cjs.Rectangle(-138.4,-62.7,147.1,74.7), new cjs.Rectangle(-136.2,-73,144.9,85.3), new cjs.Rectangle(-138.4,-62.2,147.1,74.9), new cjs.Rectangle(-138.4,-61.9,147.1,75), new cjs.Rectangle(-136.7,-70.6,145.4,84), new cjs.Rectangle(-138.4,-59.2,147.1,73), new cjs.Rectangle(-147.3,-57.6,156,71.7), new cjs.Rectangle(-141.9,-58.6,150.6,73.1), new cjs.Rectangle(-137.3,-67.6,146,82.4), new cjs.Rectangle(-134.3,-56.8,138,74.9), new cjs.Rectangle(-132,-68.8,137.5,99.9), new cjs.Rectangle(-126.7,-77.9,130.5,118.9), new cjs.Rectangle(-118.9,-83.9,117.7,131.1), new cjs.Rectangle(-109.3,-86.4,100.2,136.4), new cjs.Rectangle(-108.1,-85.8,88.9,135.1), new cjs.Rectangle(-105,-82.1,74.1,127.3), new cjs.Rectangle(-100.5,-75.7,60.5,114.1), new cjs.Rectangle(-106.9,-72.3,74.7,109.6), new cjs.Rectangle(-115.1,-68.3,90.3,104.6), new cjs.Rectangle(-120.3,-62.3,100.4,94.8), new cjs.Rectangle(-122.6,-54.8,105,81.3), new cjs.Rectangle(-122.3,-51.9,104.2,70.6), new cjs.Rectangle(-119.3,-49.7,98.4,59.3), new cjs.Rectangle(-114.1,-46.2,88.4,46), new cjs.Rectangle(-111.1,-48,81.6,51.9), new cjs.Rectangle(-110.3,-54.1,77.7,63.6), new cjs.Rectangle(-107.4,-57.9,70.4,71), new cjs.Rectangle(-103,-59.6,60.4,74.2), new cjs.Rectangle(-97.2,-59.1,51.1,73.3), new cjs.Rectangle(-90.5,-56.6,42.7,68.7), new cjs.Rectangle(-83.6,-52.7,33.2,61.2), new cjs.Rectangle(-83.3,-49.1,31.7,53.7), new cjs.Rectangle(-86.8,-48.1,39,50.4), new cjs.Rectangle(-88.8,-45.9,43.2,44.9), new cjs.Rectangle(-89.3,-42.5,44.1,37.8), new cjs.Rectangle(-88.5,-38.5,42.4,30.4), new cjs.Rectangle(-86.6,-34.2,38.5,24.7), new cjs.Rectangle(-83.9,-29.9,32.9,18.5), new cjs.Rectangle(-80.7,-27.8,26.3,14.3)];


(lib.ClipCoeurs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Heart
	this.instance = new lib.Symbole17();
	this.instance.setTransform(85.9,65.7,1,1,0,0,0,85.9,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:86,regY:65.5,scaleX:0.9988,scaleY:0.9973,rotation:-0.15,x:86.05,y:65.35},0).wait(1).to({scaleX:0.9975,scaleY:0.9947,rotation:-0.3,x:86.1,y:65.15},0).wait(1).to({scaleX:0.9963,scaleY:0.992,rotation:-0.4499,y:65},0).wait(1).to({scaleX:0.9951,scaleY:0.9894,rotation:-0.5999,y:64.85},0).wait(1).to({scaleX:0.9938,scaleY:0.9867,rotation:-0.7499,x:86.15,y:64.7},0).wait(1).to({scaleX:0.9926,scaleY:0.984,rotation:-0.8999,y:64.55},0).wait(1).to({scaleX:0.9914,scaleY:0.9814,rotation:-1.0498,x:86.25,y:64.4},0).wait(1).to({scaleX:0.9901,scaleY:0.9787,rotation:-1.1998,y:64.25},0).wait(1).to({scaleX:0.9889,scaleY:0.9761,rotation:-1.3498,x:86.2,y:64.1},0).wait(1).to({scaleX:0.9877,scaleY:0.9734,rotation:-1.4998,x:86.25,y:63.95},0).wait(1).to({scaleX:0.9864,scaleY:0.9707,rotation:-1.6497,x:86.3,y:63.75},0).wait(1).to({scaleX:0.9852,scaleY:0.968,rotation:-1.7997,x:86.35,y:63.65},0).wait(1).to({scaleX:0.984,scaleY:0.9654,rotation:-1.9497,x:86.3,y:63.45},0).wait(1).to({scaleX:0.9827,scaleY:0.9627,rotation:-2.0997,x:86.35,y:63.3},0).wait(1).to({scaleX:0.9815,scaleY:0.9601,rotation:-2.2497,x:86.4,y:63.2},0).wait(1).to({scaleX:0.9803,scaleY:0.9574,rotation:-2.3996,x:86.45,y:63},0).wait(1).to({scaleX:0.979,scaleY:0.9547,rotation:-2.5496,y:62.85},0).wait(1).to({scaleX:0.9778,scaleY:0.952,rotation:-2.6996,x:86.5,y:62.7},0).wait(1).to({scaleX:0.9765,scaleY:0.9494,rotation:-2.8496,y:62.55},0).wait(1).to({scaleX:0.9753,scaleY:0.9467,rotation:-2.9995,y:62.35},0).wait(1).to({scaleX:0.9741,scaleY:0.9441,rotation:-3.1495,x:86.55,y:62.25},0).wait(1).to({scaleX:0.9728,scaleY:0.9414,rotation:-3.2995,y:62.1},0).wait(1).to({scaleX:0.9716,scaleY:0.9387,rotation:-3.4495,x:86.6,y:61.95},0).wait(1).to({scaleX:0.9704,scaleY:0.9361,rotation:-3.5994,y:61.75},0).wait(1).to({scaleX:0.9691,scaleY:0.9334,rotation:-3.7494,y:61.6},0).wait(1).to({scaleX:0.9679,scaleY:0.9308,rotation:-3.8994,x:86.65,y:61.45},0).wait(1).to({scaleX:0.9667,scaleY:0.9281,rotation:-4.0494,y:61.35},0).wait(1).to({scaleX:0.9654,scaleY:0.9254,rotation:-4.1994,x:86.7,y:61.15},0).wait(1).to({scaleX:0.9642,scaleY:0.9228,rotation:-4.3493,x:86.75,y:61},0).wait(1).to({scaleX:0.9629,scaleY:0.9201,rotation:-4.4993,y:60.85},0).wait(1).to({scaleX:0.9617,scaleY:0.9174,rotation:-4.2963,x:86.8,y:60.65},0).wait(1).to({scaleX:0.9605,scaleY:0.9148,rotation:-4.0934,y:60.55},0).wait(1).to({scaleX:0.9593,scaleY:0.9121,rotation:-3.8904,x:86.75,y:60.4},0).wait(1).to({scaleX:0.958,scaleY:0.9094,rotation:-3.6875,x:86.8,y:60.25},0).wait(1).to({scaleX:0.9568,scaleY:0.9068,rotation:-3.4845,x:86.85,y:60.1},0).wait(1).to({scaleX:0.9556,scaleY:0.9041,rotation:-3.2815,x:86.9,y:59.9},0).wait(1).to({scaleX:0.9543,scaleY:0.9015,rotation:-3.0786,x:86.85,y:59.8},0).wait(1).to({scaleX:0.9531,scaleY:0.8988,rotation:-2.8756,x:86.9,y:59.65},0).wait(1).to({scaleX:0.9518,scaleY:0.9021,rotation:-2.6726,y:59.45},0).wait(1).to({scaleX:0.9506,scaleY:0.9055,rotation:-2.4697,x:86.95,y:59.35},0).wait(1).to({scaleX:0.9494,scaleY:0.9088,rotation:-2.2667,x:87,y:59.15},0).wait(1).to({scaleX:0.9482,scaleY:0.9121,rotation:-2.0637,y:59},0).wait(1).to({scaleX:0.9469,scaleY:0.9155,rotation:-1.8608,x:87.05,y:58.85},0).wait(1).to({scaleX:0.9457,scaleY:0.9188,rotation:-1.6578,x:87.1,y:58.7},0).wait(1).to({scaleX:0.9445,scaleY:0.9221,rotation:-1.4548,y:58.6},0).wait(1).to({scaleX:0.9432,scaleY:0.9255,rotation:-1.2519,y:58.45},0).wait(1).to({scaleX:0.942,scaleY:0.9288,rotation:-1.0489,x:87.15,y:58.25},0).wait(1).to({scaleX:0.9407,scaleY:0.9321,rotation:-0.846,y:58.15},0).wait(1).to({scaleX:0.9395,scaleY:0.9355,rotation:-0.643,x:87.2,y:57.95},0).wait(1).to({scaleX:0.9383,scaleY:0.9388,rotation:-0.44,y:57.85},0).wait(1).to({scaleX:0.937,scaleY:0.9421,rotation:-0.2371,x:87.25,y:57.65},0).wait(1).to({scaleX:0.9358,scaleY:0.9454,rotation:-0.0341,x:87.3,y:57.55},0).wait(1).to({scaleX:0.9346,scaleY:0.9488,rotation:0.1689,x:87.25,y:57.4},0).wait(1).to({scaleX:0.9333,scaleY:0.9521,rotation:0.3718,x:87.3,y:57.15},0).wait(1).to({scaleX:0.9321,scaleY:0.9555,rotation:0.5748,y:57.05},0).wait(1).to({scaleX:0.9308,scaleY:0.9588,rotation:0.7778,x:87.35,y:56.9},0).wait(1).to({scaleX:0.9296,scaleY:0.9621,rotation:0.9807,x:87.4,y:56.7},0).wait(1).to({scaleX:0.9284,scaleY:0.9654,rotation:1.1837,y:56.55},0).wait(1).to({scaleX:0.9296,scaleY:0.9688,rotation:1.3867,x:87.35,y:56.75},0).wait(1).to({scaleX:0.9307,scaleY:0.9721,rotation:1.5896,x:87.4,y:56.85},0).wait(1).to({scaleX:0.9319,scaleY:0.9754,rotation:1.7926,x:87.35,y:57},0).wait(1).to({scaleX:0.9331,scaleY:0.9788,rotation:1.9955,x:87.3,y:57.15},0).wait(1).to({scaleX:0.9343,scaleY:0.9821,rotation:2.1985,x:87.35,y:57.35},0).wait(1).to({scaleX:0.9354,scaleY:0.9854,rotation:2.4015,x:87.25,y:57.45},0).wait(1).to({scaleX:0.9366,scaleY:0.9888,rotation:2.6044,y:57.6},0).wait(1).to({scaleX:0.9378,scaleY:0.9921,rotation:2.8074,x:87.2,y:57.75},0).wait(1).to({scaleX:0.939,scaleY:0.9954,rotation:3.0104,x:87.25,y:57.9},0).wait(1).to({scaleX:0.9401,scaleY:0.9988,rotation:3.2133,x:87.2,y:58.05},0).wait(1).to({scaleX:0.9413,scaleY:1.0021,rotation:3.4163,x:87.15,y:58.15},0).wait(1).to({scaleX:0.9425,scaleY:1.0054,rotation:3.6193,y:58.3},0).wait(1).to({scaleX:0.9437,scaleY:1.0088,rotation:3.8222,x:87.1,y:58.45},0).wait(1).to({scaleX:0.9448,scaleY:1.0121,rotation:4.0252,y:58.65},0).wait(1).to({scaleX:0.946,scaleY:1.0154,rotation:4.2282,y:58.8},0).wait(1).to({scaleX:0.9472,scaleY:1.0187,rotation:4.4311,x:87.05,y:58.95},0).wait(1).to({scaleX:0.9484,scaleY:1.0221,rotation:4.6341,y:59.1},0).wait(1).to({scaleX:0.9495,scaleY:1.0254,rotation:4.837,x:87,y:59.2},0).wait(1).to({scaleX:0.9507,scaleY:1.0288,rotation:5.04,y:59.35},0).wait(1).to({scaleX:0.9519,scaleY:1.0321,rotation:5.243,x:86.9,y:59.5},0).wait(1).to({scaleX:0.953,scaleY:1.0354,rotation:5.4459,x:86.95,y:59.65},0).wait(1).to({scaleX:0.9542,scaleY:1.0345,rotation:5.3098,x:86.9,y:59.8},0).wait(1).to({scaleX:0.9554,scaleY:1.0336,rotation:5.1736,y:59.95},0).wait(1).to({scaleX:0.9566,scaleY:1.0328,rotation:5.0375,x:86.85,y:60.1},0).wait(1).to({scaleX:0.9578,scaleY:1.0319,rotation:4.9013,y:60.25},0).wait(1).to({scaleX:0.9589,scaleY:1.031,rotation:4.7652,y:60.4},0).wait(1).to({scaleX:0.9601,scaleY:1.0301,rotation:4.629,x:86.8,y:60.55},0).wait(1).to({scaleX:0.9613,scaleY:1.0292,rotation:4.4929,x:86.75,y:60.65},0).wait(1).to({scaleX:0.9624,scaleY:1.0283,rotation:4.3568,x:86.8,y:60.85},0).wait(1).to({scaleX:0.9636,scaleY:1.0274,rotation:4.2206,x:86.75,y:60.95},0).wait(1).to({scaleX:0.9648,scaleY:1.0266,rotation:4.0845,x:86.7,y:61.1},0).wait(1).to({scaleX:0.966,scaleY:1.0257,rotation:3.9483,x:86.6,y:61.25},0).wait(1).to({scaleX:0.9671,scaleY:1.0248,rotation:3.8122,x:86.65,y:61.4},0).wait(1).to({scaleX:0.9683,scaleY:1.0239,rotation:3.676,x:86.6,y:61.6},0).wait(1).to({scaleX:0.9695,scaleY:1.023,rotation:3.5399,x:86.55,y:61.75},0).wait(1).to({scaleX:0.9707,scaleY:1.0221,rotation:3.4037,x:86.6,y:61.85},0).wait(1).to({scaleX:0.9718,scaleY:1.0213,rotation:3.2676,x:86.55,y:62},0).wait(1).to({scaleX:0.973,scaleY:1.0204,rotation:3.1314,y:62.15},0).wait(1).to({scaleX:0.9742,scaleY:1.0195,rotation:2.9953,x:86.5,y:62.35},0).wait(1).to({scaleX:0.9753,scaleY:1.0186,rotation:2.8591,x:86.45,y:62.5},0).wait(1).to({scaleX:0.9765,scaleY:1.0177,rotation:2.723,x:86.5,y:62.6},0).wait(1).to({scaleX:0.9777,scaleY:1.0168,rotation:2.5868,x:86.45,y:62.75},0).wait(1).to({scaleX:0.9789,scaleY:1.0159,rotation:2.4507,x:86.4,y:62.9},0).wait(1).to({scaleX:0.9801,scaleY:1.0151,rotation:2.3145,x:86.35,y:63.05},0).wait(1).to({scaleX:0.9812,scaleY:1.0142,rotation:2.1784,y:63.2},0).wait(1).to({scaleX:0.9824,scaleY:1.0133,rotation:2.0422,y:63.35},0).wait(1).to({scaleX:0.9836,scaleY:1.0124,rotation:1.9061,y:63.45},0).wait(1).to({scaleX:0.9847,scaleY:1.0115,rotation:1.7699,x:86.3,y:63.6},0).wait(1).to({scaleX:0.9859,scaleY:1.0106,rotation:1.6338,x:86.25,y:63.75},0).wait(1).to({scaleX:0.9871,scaleY:1.0098,rotation:1.4976,x:86.2,y:63.9},0).wait(1).to({scaleX:0.9883,scaleY:1.0089,rotation:1.3615,y:64.05},0).wait(1).to({scaleX:0.9894,scaleY:1.008,rotation:1.2253,y:64.2},0).wait(1).to({scaleX:0.9906,scaleY:1.0071,rotation:1.0892,y:64.35},0).wait(1).to({scaleX:0.9918,scaleY:1.0062,rotation:0.953,x:86.15,y:64.5},0).wait(1).to({scaleX:0.993,scaleY:1.0053,rotation:0.8169,x:86.1,y:64.65},0).wait(1).to({scaleX:0.9941,scaleY:1.0044,rotation:0.6807,y:64.8},0).wait(1).to({scaleX:0.9953,scaleY:1.0036,rotation:0.5446,y:64.95},0).wait(1).to({scaleX:0.9965,scaleY:1.0027,rotation:0.4084,x:86.05,y:65.05},0).wait(1).to({scaleX:0.9977,scaleY:1.0018,rotation:0.2723,y:65.2},0).wait(1).to({scaleX:0.9988,scaleY:1.0009,rotation:0.1361,x:86,y:65.35},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:65.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,172,131);
p.frameBounds = [rect, new cjs.Rectangle(0,-0.1,172.2,131.1), new cjs.Rectangle(0,-0.3,172.3,131.2), new cjs.Rectangle(-0.1,-0.5,172.4,131.3), new cjs.Rectangle(-0.1,-0.7,172.5,131.4), new cjs.Rectangle(-0.1,-0.9,172.6,131.5), new cjs.Rectangle(-0.2,-1.1,172.7,131.6), new cjs.Rectangle(-0.2,-1.3,172.9,131.7), new cjs.Rectangle(-0.3,-1.5,173,131.8), new cjs.Rectangle(-0.2,-1.7,173.1,131.8), new cjs.Rectangle(-0.3,-1.9,173.2,131.9), new cjs.Rectangle(-0.3,-2.1,173.3,132), new cjs.Rectangle(-0.3,-2.3,173.4,132.1), new cjs.Rectangle(-0.4,-2.5,173.5,132.2), new cjs.Rectangle(-0.4,-2.7,173.5,132.3), new cjs.Rectangle(-0.4,-2.8,173.6,132.3), new cjs.Rectangle(-0.5,-3.1,173.7,132.4), new cjs.Rectangle(-0.4,-3.3,173.8,132.5), new cjs.Rectangle(-0.4,-3.4,173.9,132.5), new cjs.Rectangle(-0.4,-3.6,174,132.6), new cjs.Rectangle(-0.5,-3.8,174,132.7), new cjs.Rectangle(-0.5,-4,174.1,132.7), new cjs.Rectangle(-0.5,-4.1,174.2,132.8), new cjs.Rectangle(-0.5,-4.3,174.2,132.8), new cjs.Rectangle(-0.5,-4.5,174.3,132.9), new cjs.Rectangle(-0.5,-4.7,174.4,132.9), new cjs.Rectangle(-0.5,-4.9,174.4,133), new cjs.Rectangle(-0.5,-5.1,174.5,133), new cjs.Rectangle(-0.5,-5.2,174.5,133.1), new cjs.Rectangle(-0.5,-5.4,174.5,133.1), new cjs.Rectangle(-0.5,-5.6,174.6,133.2), new cjs.Rectangle(-0.2,-5.3,174,132.3), new cjs.Rectangle(0.1,-5,173.4,131.4), new cjs.Rectangle(0.5,-4.7,172.7,130.4), new cjs.Rectangle(0.8,-4.4,172.1,129.5), new cjs.Rectangle(1.2,-4.1,171.5,128.6), new cjs.Rectangle(1.5,-3.8,170.9,127.7), new cjs.Rectangle(1.8,-3.5,170.3,126.7), new cjs.Rectangle(2.2,-3.1,169.6,125.8), new cjs.Rectangle(2.5,-3.3,169.1,125.7), new cjs.Rectangle(2.8,-3.3,168.5,125.6), new cjs.Rectangle(3.1,-3.4,167.9,125.4), new cjs.Rectangle(3.5,-3.5,167.3,125.3), new cjs.Rectangle(3.8,-3.6,166.7,125.2), new cjs.Rectangle(4.1,-3.7,166.1,125), new cjs.Rectangle(4.4,-3.7,165.5,124.9), new cjs.Rectangle(4.8,-3.9,164.9,124.8), new cjs.Rectangle(5.1,-4,164.2,124.6), new cjs.Rectangle(5.5,-4.1,163.6,124.5), new cjs.Rectangle(5.8,-4.1,163,124.4), new cjs.Rectangle(6.2,-4.2,162.3,124.2), new cjs.Rectangle(6.5,-4.3,161.7,124.1), new cjs.Rectangle(6.9,-4.4,161,124), new cjs.Rectangle(6.8,-4.9,161.1,124.8), new cjs.Rectangle(6.7,-5.6,161.3,125.8), new cjs.Rectangle(6.6,-6.2,161.6,126.8), new cjs.Rectangle(6.6,-6.9,161.8,127.8), new cjs.Rectangle(6.4,-7.6,162,128.8), new cjs.Rectangle(6.4,-8.2,162.3,129.8), new cjs.Rectangle(6,-8.6,162.9,130.7), new cjs.Rectangle(5.7,-8.9,163.5,131.8), new cjs.Rectangle(5.3,-9.3,164.2,132.7), new cjs.Rectangle(5,-9.6,164.9,133.8), new cjs.Rectangle(4.6,-10,165.5,134.7), new cjs.Rectangle(4.3,-10.3,166.2,135.7), new cjs.Rectangle(3.9,-10.7,166.8,136.7), new cjs.Rectangle(3.6,-11,167.5,137.7), new cjs.Rectangle(3.2,-11.3,168.1,138.7), new cjs.Rectangle(2.9,-11.7,168.8,139.7), new cjs.Rectangle(2.5,-12,169.4,140.7), new cjs.Rectangle(2.2,-12.4,170.1,141.7), new cjs.Rectangle(1.8,-12.8,170.8,142.7), new cjs.Rectangle(1.5,-13.1,171.4,143.7), new cjs.Rectangle(1.1,-13.5,172,144.7), new cjs.Rectangle(0.8,-13.8,172.7,145.7), new cjs.Rectangle(0.4,-14.2,173.4,146.6), new cjs.Rectangle(0,-14.5,174.1,147.6), new cjs.Rectangle(-0.3,-14.9,174.8,148.6), new cjs.Rectangle(-0.7,-15.2,175.4,149.6), new cjs.Rectangle(-1,-15.6,176.1,150.5), new cjs.Rectangle(-1,-15.2,176,150.1), new cjs.Rectangle(-0.9,-14.8,175.9,149.7), new cjs.Rectangle(-1,-14.4,175.8,149.2), new cjs.Rectangle(-0.9,-14,175.6,148.8), new cjs.Rectangle(-0.9,-13.7,175.6,148.3), new cjs.Rectangle(-0.9,-13.3,175.5,147.8), new cjs.Rectangle(-0.9,-12.9,175.4,147.4), new cjs.Rectangle(-0.8,-12.5,175.3,146.9), new cjs.Rectangle(-0.8,-12.2,175.2,146.5), new cjs.Rectangle(-0.7,-11.8,175.1,146), new cjs.Rectangle(-0.8,-11.4,175,145.5), new cjs.Rectangle(-0.7,-11,174.9,145), new cjs.Rectangle(-0.7,-10.6,174.8,144.5), new cjs.Rectangle(-0.6,-10.3,174.7,144.1), new cjs.Rectangle(-0.7,-9.9,174.6,143.6), new cjs.Rectangle(-0.6,-9.4,174.5,143), new cjs.Rectangle(-0.6,-9.1,174.4,142.6), new cjs.Rectangle(-0.6,-8.7,174.4,142.1), new cjs.Rectangle(-0.6,-8.3,174.2,141.6), new cjs.Rectangle(-0.5,-7.9,174.1,141.1), new cjs.Rectangle(-0.5,-7.5,174,140.7), new cjs.Rectangle(-0.5,-7.1,173.9,140.2), new cjs.Rectangle(-0.4,-6.7,173.8,139.6), new cjs.Rectangle(-0.4,-6.3,173.7,139.2), new cjs.Rectangle(-0.4,-6,173.6,138.7), new cjs.Rectangle(-0.3,-5.6,173.5,138.2), new cjs.Rectangle(-0.3,-5.2,173.4,137.7), new cjs.Rectangle(-0.3,-4.7,173.3,137.2), new cjs.Rectangle(-0.2,-4.3,173.2,136.7), new cjs.Rectangle(-0.3,-3.9,173.1,136.1), new cjs.Rectangle(-0.2,-3.5,173,135.7), new cjs.Rectangle(-0.2,-3.2,172.9,135.1), new cjs.Rectangle(-0.1,-2.8,172.8,134.7), new cjs.Rectangle(-0.1,-2.3,172.6,134.2), new cjs.Rectangle(-0.1,-1.9,172.5,133.6), new cjs.Rectangle(-0.1,-1.5,172.5,133.1), new cjs.Rectangle(0,-1.1,172.4,132.6), new cjs.Rectangle(0,-0.7,172.2,132.1), new cjs.Rectangle(0.1,-0.3,172.1,131.5), new cjs.Rectangle(0,0,172,131)];


// stage content:
(lib.animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Instruction();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,800,600);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'F1E14CFA894248A5A4CCFEE75D154728',
	width: 800,
	height: 600,
	fps: 30,
	color: "#787878",
	opacity: 1.00,
	manifest: [
		{src:"images/Background_Ice.png?1684259461149", id:"Background_Ice"},
		{src:"images/Background_Junglepngcopy.png?1684259461149", id:"Background_Junglepngcopy"},
		{src:"images/Instruction.png?1684259461149", id:"Instruction"},
		{src:"images/rejouer.png?1684259461149", id:"rejouer"},
		{src:"images/animate_atlas_1.png?1684259461057", id:"animate_atlas_1"},
		{src:"sounds/sonsMusiqueDead.mp3?1684259461149", id:"sonsMusiqueDead"},
		{src:"sounds/sonsMoucheHit.mp3?1684259461149", id:"sonsMoucheHit"},
		{src:"sounds/sonsMoucheMort.mp3?1684259461149", id:"sonsMoucheMort"},
		{src:"sounds/sonsMoustiqueDead.mp3?1684259461149", id:"sonsMoustiqueDead"},
		{src:"sounds/sonsMoustiqueVie.mp3?1684259461149", id:"sonsMoustiqueVie"},
		{src:"sounds/sonsMusique1.mp3?1684259461149", id:"sonsMusique1"},
		{src:"sounds/sonsMusique2.mp3?1684259461149", id:"sonsMusique2"},
		{src:"sounds/sonsReussi.mp3?1684259461149", id:"sonsReussi"},
		{src:"sounds/sonsRocketHit.mp3?1684259461149", id:"sonsRocketHit"},
		{src:"sounds/sonsShoot.mp3?1684259461149", id:"sonsShoot"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F1E14CFA894248A5A4CCFEE75D154728'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;