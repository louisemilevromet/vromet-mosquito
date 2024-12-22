(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"RECUPERE_animate_atlas_1", frames: [[765,157,188,149],[765,0,182,155],[0,0,763,635],[765,308,133,184],[765,494,207,83],[765,579,135,91],[0,637,135,91],[137,637,135,91],[274,637,135,91],[411,637,135,91],[548,637,135,91],[685,672,135,91],[822,672,135,91],[0,730,135,91],[137,730,135,91],[274,730,135,91],[411,730,135,91],[548,730,135,91],[685,765,135,91],[822,765,135,91]]}
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



(lib.CachedBmp_20 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["RECUPERE_animate_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole5, rect = new cjs.Rectangle(0,0,381.5,317.5), [rect]);


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
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole4, rect = new cjs.Rectangle(0,0,94,74.5), [rect]);


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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole3, rect = new cjs.Rectangle(0,0,91,77.5), [rect]);


(lib.Symbole2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole2, rect = new cjs.Rectangle(0,0,103.5,41.5), [rect]);


(lib.Symbole1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbole1, rect = new cjs.Rectangle(0,0,66.5,92), [rect]);


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
	this.text = new cjs.Text("Débuter", "bold 30px 'Verdana'");
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


(lib.ClipObstacle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvYuNIexAAIAAcbI+xAAg");
	this.shape.setTransform(26.5437,34.0778,0.3224,0.3224);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663E35").s().p("AvYOOIAA8bIexAAIAAcbg");
	this.shape_1.setTransform(26.5437,34.0778,0.3224,0.3224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipObstacle, rect = new cjs.Rectangle(-6.2,3.8,65.5,60.7), [rect]);


(lib.ClipMouche = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Corps
	this.instance = new lib.Symbole5();
	this.instance.setTransform(105.65,111.65,0.2704,0.2725,0,0,0,191.2,160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:190.8,regY:158.8,x:105.5,y:111.15},0).wait(14));

	// Aile_D
	this.instance_1 = new lib.Symbole3();
	this.instance_1.setTransform(127.45,75.55,0.2704,0.2725,0,0,0,5,82.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:45.5,regY:38.8,rotation:29.9979,x:142.85,y:70.65},0).wait(1).to({rotation:14.9981,x:141.1,y:66.85},0).wait(1).to({rotation:-15.0014,x:134.95,y:61.15},0).wait(1).to({rotation:14.9981,x:141.1,y:66.85},0).wait(1).to({rotation:29.9979,x:142.85,y:70.65},0).wait(1).to({rotation:14.9981,x:141.1,y:66.85},0).wait(1).to({rotation:0,x:138.35,y:63.55},0).wait(1).to({rotation:14.9989,x:141.1,y:66.85},0).wait(1).to({rotation:29.9979,x:142.85,y:70.65},0).wait(1).to({rotation:14.9981,x:141.1,y:66.85},0).wait(1).to({rotation:0,x:138.35,y:63.55},0).wait(1).to({rotation:29.9992,x:142.85,y:70.65},0).wait(1).to({rotation:14.9989,x:141.1,y:66.85},0).wait(1).to({rotation:29.9979,x:142.85,y:70.65},0).wait(1));

	// Aile_G
	this.instance_2 = new lib.Symbole4();
	this.instance_2.setTransform(121.35,73.1,0.2704,0.2725,0,0,0,97.1,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47,regY:37.2,rotation:-14.9989,x:105.7,y:67},0).wait(1).to({rotation:0,x:107.75,y:63.15},0).wait(1).to({rotation:14.9989,x:110.85,y:60},0).wait(1).to({rotation:-14.9989,x:105.7,y:67},0).wait(1).to({rotation:-7.4994,x:106.6,y:65},0).wait(1).to({rotation:0,x:107.75,y:63.15},0).wait(1).to({rotation:14.9989,x:110.85,y:60},0).wait(1).to({rotation:0,x:107.75,y:63.15},0).wait(1).to({rotation:-14.9989,x:105.7,y:67},0).wait(1).to({rotation:0,x:107.75,y:63.15},0).wait(1).to({rotation:6.9381,x:109.1,y:61.6},0).wait(1).to({rotation:-14.9989,x:105.7,y:67},0).wait(1).to({rotation:0,x:107.75,y:63.15},0).wait(1).to({rotation:-14.9989,x:105.7,y:67},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(54,53.1,103.2,101.4);
p.frameBounds = [rect, new cjs.Rectangle(54,54,104.9,100.5), new cjs.Rectangle(54,53,103.2,101.4), new cjs.Rectangle(54,47,103.2,107.5), new cjs.Rectangle(54,53.5,103.2,101), new cjs.Rectangle(54,53.4,104.9,101.1), new cjs.Rectangle(54,53,103.2,101.4), new cjs.Rectangle(54,47,103.2,107.5), new cjs.Rectangle(54,53,103.2,101.4), new cjs.Rectangle(54,54,104.9,100.5), new cjs.Rectangle(54,53,103.2,101.4), new cjs.Rectangle(54,50,103.2,104.4), new cjs.Rectangle(54,54,104.9,100.5), new cjs.Rectangle(54,53,103.2,101.4), new cjs.Rectangle(54,54,104.9,100.5)];


(lib.ClipMoustique = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.instance = new lib.Symbole1();
	this.instance.setTransform(131.6,66.7,0.3046,0.3046,0,0,0,33.3,46.1);

	this.instance_1 = new lib.Symbole2();
	this.instance_1.setTransform(123.95,74.45,0.3046,0.3046,0,0,0,51.7,20.9);

	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(137.35,57.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_22();
	this.instance_3.setTransform(137.35,57.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_23();
	this.instance_4.setTransform(137.35,57.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_24();
	this.instance_5.setTransform(137.35,57.8,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_25();
	this.instance_6.setTransform(137.35,57.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_26();
	this.instance_7.setTransform(137.35,57.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_27();
	this.instance_8.setTransform(137.35,57.8,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_28();
	this.instance_9.setTransform(137.35,57.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_29();
	this.instance_10.setTransform(137.35,57.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_30();
	this.instance_11.setTransform(137.35,57.8,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_31();
	this.instance_12.setTransform(137.35,57.8,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_32();
	this.instance_13.setTransform(137.35,57.8,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_33();
	this.instance_14.setTransform(137.35,57.8,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_34();
	this.instance_15.setTransform(137.35,57.8,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_35();
	this.instance_16.setTransform(137.35,57.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{regX:51.7,rotation:0,x:123.95,y:74.45,regY:20.9}},{t:this.instance,p:{regX:33.3,rotation:0,x:131.6,y:66.7,regY:46.1}}]}).to({state:[{t:this.instance_3},{t:this.instance_1,p:{regX:51.6,rotation:14.9969,x:126.15,y:70.1,regY:20.9}},{t:this.instance,p:{regX:33.4,rotation:14.9969,x:135.6,y:64.6,regY:46.1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_1,p:{regX:51.8,rotation:4.7753,x:124.55,y:72.65,regY:20.9}},{t:this.instance,p:{regX:33.5,rotation:4.7753,x:132.9,y:65.65,regY:46.3}}]},1).to({state:[{t:this.instance_5},{t:this.instance_1,p:{regX:51.6,rotation:-10.2196,x:123.1,y:77.15,regY:20.8}},{t:this.instance,p:{regX:33.4,rotation:-10.2196,x:129.35,y:68.15,regY:46.1}}]},1).to({state:[{t:this.instance_6},{t:this.instance_1,p:{regX:51.9,rotation:12.2353,x:125.7,y:71.05,regY:20.9}},{t:this.instance,p:{regX:33.4,rotation:12.2353,x:134.8,y:65.1,regY:46.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_1,p:{regX:51.8,rotation:-2.7591,x:123.8,y:75.75,regY:20.9}},{t:this.instance,p:{regX:33.2,rotation:-2.7591,x:131.05,y:67.7,regY:46.3}}]},1).to({state:[{t:this.instance_8},{t:this.instance_1,p:{regX:51.8,rotation:-10.9902,x:123.3,y:78.05,regY:20.8}},{t:this.instance,p:{regX:33.3,rotation:-10.9902,x:129.35,y:69,regY:46.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_1,p:{regX:51.8,rotation:4.0069,x:124.45,y:73.9,regY:20.9}},{t:this.instance,p:{regX:33.4,rotation:4.0069,x:132.65,y:66.7,regY:46.1}}]},1).to({state:[{t:this.instance_10},{t:this.instance_1,p:{regX:51.7,rotation:24.9964,x:127.7,y:68.85,regY:20.8}},{t:this.instance,p:{regX:33.4,rotation:24.9964,x:138,y:65.1,regY:46}}]},1).to({state:[{t:this.instance_11},{t:this.instance_1,p:{regX:51.7,rotation:-5.0001,x:123.6,y:76.45,regY:20.9}},{t:this.instance,p:{regX:33.4,rotation:-5.0001,x:130.65,y:68.05,regY:46.2}}]},1).to({state:[{t:this.instance_12},{t:this.instance_1,p:{regX:51.8,rotation:14.4803,x:125.85,y:71.25,regY:20.7}},{t:this.instance,p:{regX:33.3,rotation:14.4803,x:135.2,y:65.75,regY:46.1}}]},1).to({state:[{t:this.instance_13},{t:this.instance_1,p:{regX:51.6,rotation:-15.5141,x:123.15,y:79.45,regY:20.8}},{t:this.instance,p:{regX:33.4,rotation:-15.5141,x:128.55,y:70,regY:46.2}}]},1).to({state:[{t:this.instance_14},{t:this.instance_1,p:{regX:51.7,rotation:-0.5137,x:124,y:75.2,regY:20.8}},{t:this.instance,p:{regX:33.4,rotation:-0.5137,x:131.6,y:67.45,regY:46.1}}]},1).to({state:[{t:this.instance_15},{t:this.instance_1,p:{regX:51.6,rotation:-15.5141,x:122.95,y:80.05,regY:20.9}},{t:this.instance,p:{regX:33.3,rotation:-15.5141,x:128.3,y:70.6,regY:46.4}}]},1).to({state:[{t:this.instance_16},{t:this.instance_1,p:{regX:51.8,rotation:-5.0289,x:123.35,y:76.95,regY:20.7}},{t:this.instance,p:{regX:33.4,rotation:-5.0289,x:130.3,y:68.65,regY:46.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(108.2,52.7,96.6,50.7);
p.frameBounds = [rect, new cjs.Rectangle(109.4,48.4,95.5,54.9), new cjs.Rectangle(108.3,50.8,96.6,52.6), new cjs.Rectangle(106.6,52.6,98.3,50.8), new cjs.Rectangle(108.9,49.3,95.9,54.1), new cjs.Rectangle(107.8,53.1,97.1,50.2), new cjs.Rectangle(106.6,53.3,98.3,50), new cjs.Rectangle(108.3,52,96.6,51.3), new cjs.Rectangle(110.8,48.1,94.1,55.2), new cjs.Rectangle(107.4,53.2,97.5,50.1), new cjs.Rectangle(109,49.6,95.9,53.7), new cjs.Rectangle(106.3,53.8,98.6,49.6), new cjs.Rectangle(108.2,53.3,96.6,50), new cjs.Rectangle(106.1,54.3,98.8,49), new cjs.Rectangle(107.1,53.8,97.8,49.6)];


// stage content:
(lib.RECUPERE_animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'F1E14CFA894248A5A4CCFEE75D154728',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/RECUPERE_animate_atlas_1.png?1681929255040", id:"RECUPERE_animate_atlas_1"}
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