(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"webgif_atlas_", frames: [[0,0,1725,712],[0,2243,1033,762],[0,3007,1028,724],[0,714,1043,763],[0,1479,1040,762]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.cover = function() {
	this.spriteSheet = ss["webgif_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.individual = function() {
	this.spriteSheet = ss["webgif_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mac = function() {
	this.spriteSheet = ss["webgif_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pedigree = function() {
	this.spriteSheet = ss["webgif_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.weights = function() {
	this.spriteSheet = ss["webgif_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mac();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,539.7,380.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pedigree();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,539.3,394.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weights();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.515,0.515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,536,392.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.individual();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,532.9,393.1), null);


(lib.cover_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeD7IAAn1IA9AAIAAH1g");
	this.shape.setTransform(279.2,324.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiGCgQgggdAAgtQAAgbAMgVQAMgXAUgNQATgNAZgGQASgFAkgEQBKgJAjgNIAAgQQAAgmgQgPQgYgVguAAQgrAAgUAQQgWAOgKAoIg7gJQAHgmAUgYQASgYAkgNQAjgMAuAAQAvgBAcALQAdALAPARQANARAFAYQADARAAApIAABRQAABVAFAXQADAWAMAWIhAAAQgKgUgCgZQgjAdgfALQgfANgkAAQg8AAgggegAgOAWQgmAGgQAHQgPAGgJAOQgJANABAQQAAAZASAQQATAQAkAAQAiAAAcgPQAbgPANgbQAKgWAAgoIAAgWQghANhCAJg");
	this.shape_1.setTransform(252,331.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC5C6IAAjkQAAglgGgQQgGgRgQgJQgPgLgWAAQgmAAgZAaQgaAZAAA4IAADTIg8AAIAAjrQAAgpgPgVQgPgUgjgBQgZAAgWAOQgXAOgKAaQgJAbgBAxIAAC8Ig9AAIAAlrIA3AAIAAAzQARgaAdgRQAcgPAkAAQAoAAAaAQQAZARALAeQArhABFABQA2AAAdAeQAdAdAAA+IAAD5g");
	this.shape_2.setTransform(203.6,330.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeD7IAAlrIA9AAIAAFrgAgeizIAAhHIA9AAIAABHg");
	this.shape_3.setTransform(166.6,324.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABWC6IAAjdQAAglgHgSQgIgTgRgLQgTgMgYAAQgnAAgcAZQgdAaAABGIAADFIg+AAIAAlrIA4AAIAAA0QAog8BKABQAiAAAbAMQAcALANATQAOATAFAaQADASAAAqIAADfg");
	this.shape_4.setTransform(139.3,330.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiGCgQgggdAAgtQAAgbAMgVQAMgXAUgNQATgNAZgGQASgFAkgEQBKgJAjgNIAAgQQABgmgSgPQgXgVguAAQgrAAgUAQQgVAOgLAoIg8gJQAJgmASgYQATgYAjgNQAlgMAtAAQAvgBAcALQAeALAOARQANARAGAYQACARAAApIAABRQAABVAFAXQADAWAMAWIhAAAQgKgUgCgZQgjAdgfALQgfANgkAAQg8AAgggegAgOAWQgmAGgQAHQgPAGgJAOQgJANABAQQAAAZASAQQASAQAlAAQAiAAAcgPQAbgPANgbQAKgWAAgoIAAgWQghANhCAJg");
	this.shape_5.setTransform(100.2,331.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiFD4IgHg6QAUAFAPAAQAVAAAMgHQAMgGAIgNQAGgJANglIAFgPIiJlqIBCAAIBLDSQAPAoALArQAKgpAPgpIBOjTIA9AAIiKFwQgWA8gMAWQgQAfgVAOQgVAOgeAAQgRAAgWgHg");
	this.shape_6.setTransform(382.1,258.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABWC6IAAjdQAAglgHgSQgIgTgRgLQgTgMgZAAQgmAAgcAZQgdAZAABHIAADFIg9AAIAAlrIA3AAIAAA0QAog8BLAAQAgAAAcANQAbALAOATQANATAGAaQADARAAAsIAADeg");
	this.shape_7.setTransform(344.8,250.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiGCgQgggdAAgtQAAgbAMgVQAMgXAUgNQATgMAZgIQASgEAkgFQBKgJAkgMIAAgQQAAgmgRgPQgYgVguAAQgrAAgUAQQgWAPgKAnIg7gJQAHgnAUgXQASgYAkgMQAjgOAuAAQAvAAAcALQAdALAOARQAOAQAFAZQADARABApIAABRQAABVAEAXQADAWAMAWIhAAAQgKgUgDgZQghAdggALQgfANgkAAQg8gBgggdgAgOAXQgmAFgQAHQgPAGgJAOQgIANAAAQQAAAZASAQQASAQAlAAQAiAAAcgPQAcgPANgbQAJgWABgoIAAgWQgiANhCAKg");
	this.shape_8.setTransform(305.7,251.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhiC6IAAlrIA4AAIAAA3QAVgmASgMQARgNAVAAQAgABAfATIgUA5QgXgNgWAAQgVAAgPAMQgQAMgHAWQgKAhAAAnIAAC9g");
	this.shape_9.setTransform(258.1,250.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah6CNQgvgxAAhcQAAhkA4gwQAvgpBCAAQBLAAAwAyQAvAxAABWQAABFgVAoQgVAogoAWQgoAXgwAAQhLgBgvgwgAhLhnQgfAjAABEQAABGAfAiQAeAjAtAAQAuAAAegjQAfgiAAhHQAAhDgfgjQgegjguAAQgtAAgeAjg");
	this.shape_10.setTransform(224.1,251.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgzD/IAAk6Ig2AAIAAgwIA2AAIAAgnQAAgkAHgSQAIgYAXgPQAVgPApAAQAaAAAfAGIgJA2QgTgDgRAAQgcAAgMALQgMAMAAAhIAAAiIBHAAIAAAwIhHAAIAAE6g");
	this.shape_11.setTransform(196.6,243.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhmCgQglgdgLg6IA9gJQAFAkAYAUQAXATApAAQArAAAUgRQAVgSAAgWQAAgVgTgMQgMgJgygMQhDgSgagLQgagMgOgWQgNgXAAgaQAAgZALgUQALgVATgOQAOgKAZgHQAZgIAcAAQAqAAAgANQAhAMAPAVQAPAVAGAjIg8AJQgEgcgUgQQgTgQgjAAQgrAAgSAOQgSAOAAASQAAAMAIALQAHAJAQAGQAJAEAsAMQBCASAaALQAZAKAPAVQAPAWAAAfQAAAfgSAbQgSAbgiAPQgiAPgrAAQhFgBglgdg");
	this.shape_12.setTransform(148.1,251.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABLD7Ih4i6IgrAqIAACQIg9AAIAAn1IA9AAIAAEdICRiTIBQAAIiLCGICYDlg");
	this.shape_13.setTransform(115.6,244.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhhC6IAAlrIA3AAIAAA3QAVgmASgMQARgNAWAAQAeABAhATIgWA5QgWgNgXAAQgUAAgPAMQgQAMgHAWQgKAhAAAnIAAC9g");
	this.shape_14.setTransform(87,250.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah6CNQgvgxAAhcQAAhkA4gwQAvgpBCAAQBLAAAwAyQAvAxAABWQAABFgVAoQgVAogoAWQgoAXgwAAQhLgBgvgwgAhLhnQgfAjAABEQAABGAfAiQAeAjAtAAQAuAAAegjQAfgiAAhHQAAhDgfgjQgegjguAAQgtAAgeAjg");
	this.shape_15.setTransform(52.9,251.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AB5D7Ihql+IgPg6QgHAigHAYIhrF+IhDAAIiFn1IBEAAIBMFIQAMA0AJAzIAXhdIBflSIBPAAIBID9QAbBfAMBTQAJgwAQg9IBOlCIBDAAIiJH1g");
	this.shape_16.setTransform(1.9,244.2);

	this.instance = new lib.cover();
	this.instance.parent = this;
	this.instance.setTransform(-92,-28,0.318,0.318);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("Egq5gNuMBVzAAAIAAbdMhVzAAAg");
	this.shape_17.setTransform(182.6,286.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Egq5ANvIAA7dMBVzAAAIAAbdg");
	this.shape_18.setTransform(182.6,286.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-28,551.2,403.2);


// stage content:
(lib.webgif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(275.1,200.3,1.019,1.052,0,0,0,269.9,190.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.mac();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.535,0.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},241).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241).to({_off:false},0).wait(1).to({regX:269.8,regY:190,x:275,y:200,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(50));

	// Layer 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.1,200.1,1.02,1.014,0,0,0,269.6,197.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.pedigree();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.527,0.524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},181).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},60).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).wait(1).to({regY:197.2,x:275,y:200,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(110));

	// Layer 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(274.9,200,1.026,1.019,0,0,0,267.9,196.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.weights();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.529,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},120).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},59).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).wait(1).to({regX:268,x:275,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(169));

	// Layer 2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(275.2,200.2,1.032,1.018,0,0,0,266.6,196.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.individual();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.532,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},60).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},61).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).wait(1).to({regX:266.4,regY:196.5,x:275,y:200,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(230));

	// Layer 1
	this.instance_8 = new lib.cover_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(405.4,339.1,1.001,0.995,0,0,0,312.8,312.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},70).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,200,552,401);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/webgif_atlas_.png", id:"webgif_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;