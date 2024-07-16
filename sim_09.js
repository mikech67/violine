(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/h.png", id:"h"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,578,255);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,22);


(lib.h = function() {
	this.initialize(img.h);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,266);


(lib.Symbol1copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#75879B","#BBCCDD","#B4C6D7","#7C90A6"],[0,0.475,0.659,1],0,14.3,0,-14).s().p("AhXB9Qgkg0AAhJQAAhIAkg0QAlg0AyAAQAzAAAkA0QAlA0AABIQAABJglA0QgkA0gzAAQgyAAglg0g");
	this.shape.setTransform(12.5,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,35.5);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#565258","#1D1D1F","#657381","#909EAF","#657B92"],[0,0.129,0.757,0.898,0.988],0,15.8,0,-15.7).s().p("AhXB9Qgkg0AAhJQAAhIAkg0QAlg0AyAAQAzAAAkA0QAlA0AABIQAABJglA0QgkA0gzAAQgyAAglg0g");
	this.shape.setTransform(12.5,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,35.5);


(lib.stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABKBAIAAhiIAMAAIAAAJQAEgFAFgDQAFgDAHABQAJAAAHAEQAHAFAEAJQAEAJAAAIQAAALgEAJQgEAIgIAGQgIAEgIAAQgGAAgFgCQgFgDgDgEIAAAjgABcgSQgGAGAAAMQAAAPAFAGQAGAHAIAAQAIAAAGgHQAGgHAAgOQAAgMgGgHQgFgHgIAAQgIAAgGAIgAABAcQgHgKAAgSQAAgSAJgJQAJgJAOABQAPAAAJAJQAKAKAAAQQAAANgEAIQgEAIgIAFQgJAEgJAAQgPAAgKgKgAALgSQgGAGAAAMQAAAOAGAHQAGAHAJAAQAJAAAGgHQAGgHAAgOQAAgMgGgGQgGgIgJAAQgJAAgGAIgAh1AiQgJgEgFgHQgGgJAAgJIANgCQAAAHAEAGQADAEAHAEQAHACAIAAQAIAAAGgCQAFgCADgEQADgEAAgFQAAgEgDgEQgCgCgHgCIgSgEQgNgEgGgDQgHgEgEgGQgDgFAAgHQAAgIAEgGQAEgHAJgDQAIgEAKABQALgBAJAEQAIAEAFAGQAEAHABAJIgNABQgBgJgGgFQgGgEgLgBQgMAAgGAFQgFAEAAAHQAAAEAEAEQADADARAFQAQADAGACQAIAFAFAGQAEAEAAAIQAAAIgFAIQgEAHgJAEQgJADgKAAQgOAAgJgEgAggAkQgDgDgCgDQgBgDAAgMIAAgoIgJAAIAAgJIAJAAIAAgSIAMgIIAAAaIAMAAIAAAJIgMAAIAAApQAAAFABACIACACIAEABIAFAAIACAKIgJABQgHAAgEgBg");
	this.shape.setTransform(37.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-0.1,-11.5,0.1,11.5).ss(1,0,0,4).p("AFohtIrPAAQgeAAAAAeIAACfQAAAeAeAAILPAAQAeAAAAgeIAAifQAAgegeAAg");
	this.shape_1.setTransform(39,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBEBEB","#FBFBFB"],[0,0.992],0,9,0,-9).s().p("AlnBtQgeAAAAgeIAAieQAAgeAeAAILOAAQAfAAAAAeIAACeQAAAegfAAg");
	this.shape_2.setTransform(39,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-0.1,-11.5,0.1,11.5).ss(1,0,0,4).p("AFohtIrPAAQgeAAAAAeIAACfQAAAeAeAAILPAAQAeAAAAgeIAAifQAAgegeAAg");
	this.shape_3.setTransform(39,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EFB8A0","#FEF1EF"],[0,0.992],0,9,0,-9).s().p("AlnBtQgeAAAAgeIAAieQAAgeAeAAILOAAQAfAAAAAeIAACeQAAAegfAAg");
	this.shape_4.setTransform(39,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,80,24);


(lib.slidertrack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzATIAAglIPmAAIAAAlg");
	this.shape.setTransform(50,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,100,4);


(lib.sliderThumb = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-5.1,-10.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,-10.9,10,22);


(lib.s4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.3,1,1).p("EAgQgAxMhAfABj");
	this.shape.setTransform(206.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,415,12);


(lib.s3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EAi8gAOIqZAFAYFgJMg7AAAY");
	this.shape.setTransform(223.6,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,449.2,5);


(lib.s2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("EAiHAAYIoRgGAZEASMg7KgAp");
	this.shape.setTransform(218.4,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,438.7,7);


(lib.s1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AfOAiIizgDAbuAeMg67gA/");
	this.shape.setTransform(199.9,3.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,402.7,10);


(lib.radiobutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(170,170,170,0.251)","rgba(0,0,0,0.251)"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape.setTransform(8.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AAAAAA","#000000"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape_1.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_2.setTransform(8.5,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,6.4,0,-6.3).s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_3.setTransform(8.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E1E1E1","#AEAEAE"],[0,1],-5.2,-5.2,0,-5.2,-5.2,15.4).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZgAgsgsQgTATAAAZQAAAaATASQATATAZAAQAaAAASgTQATgSAAgaQAAgZgTgTQgSgTgaAAQgZAAgTATg");
	this.shape_4.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19,19.1);


(lib.kv = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#565258","#1D1D1F","#657381","#909EAF","#657B92"],[0,0.129,0.757,0.898,0.988],0.4,15.8,0.4,-15.7).s().p("AhHCwIAAlfICQAAIAAFfg");
	this.shape.setTransform(7.3,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,35.3);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.h();
	this.instance.setTransform(99.2,0,0.728,0.728,30.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.6,264.3);


(lib.h3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYgLB8gNQD3gbCxAAQCLAAC2ARQBzAKDUAYQDeAbBfAKQCrAPB6AAQB4AACzgPQBmgKDmgbQDfgYBzgKQC3gRCFAAQCsAAD5AbQB9ANBaAL");
	this.shape.setTransform(-51.9,-85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgEDmgIQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_1.setTransform(-51.9,-85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gFQBzgEDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmAEDmAHQDfAIBzAEQC3AFCFAAQCsAAD5gJQB9gEBagE");
	this.shape_2.setTransform(-51.9,-85.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYAMB8ANQD3AbCxAAQCLAAC2gRQBzgKDUgZQDegaBfgKQCrgPB6AAQB4AACzAPQBmAKDmAaQDfAZBzAKQC3ARCFAAQCsAAD5gbQB9gNBagM");
	this.shape_3.setTransform(-51.9,-86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gGQBzgDDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmADDmAIQDfAIBzADQC3AGCFAAQCsAAD5gJQB9gEBagE");
	this.shape_4.setTransform(-51.9,-85.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgDDmgJQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_5.setTransform(-51.9,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.7,-91.3,383.7,12.6);


(lib.h3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,0,0,4).p("A9zAAQBYgLB8gNQD3gbCxAAQCLAAC2ARQBzAKDUAYQDeAbBfAKQCrAPB6AAQB4AACzgPQBmgKDmgbQDfgYBzgKQC3gRCFAAQCsAAD5AbQB9ANBaAL");
	this.shape.setTransform(-51.9,-85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2.4,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgEDmgIQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_1.setTransform(-51.9,-85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2.7,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gFQBzgEDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmAEDmAHQDfAIBzAEQC3AFCFAAQCsAAD5gJQB9gEBagE");
	this.shape_2.setTransform(-51.9,-85.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYAMB8ANQD3AbCxAAQCLAAC2gRQBzgKDUgZQDegaBfgKQCrgPB6AAQB4AACzAPQBmAKDmAaQDfAZBzAKQC3ARCFAAQCsAAD5gbQB9gNBagM");
	this.shape_3.setTransform(-51.9,-86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gGQBzgDDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmADDmAIQDfAIBzADQC3AGCFAAQCsAAD5gJQB9gEBagE");
	this.shape_4.setTransform(-51.9,-85.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgDDmgJQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_5.setTransform(-51.9,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.7,-91.3,383.7,12.6);


(lib.h3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYgLB8gNQD3gbCxAAQCLAAC2ARQBzAKDUAYQDeAbBfAKQCrAPB6AAQB4AACzgPQBmgKDmgbQDfgYBzgKQC3gRCFAAQCsAAD5AbQB9ANBaAL");
	this.shape.setTransform(-51.9,-85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgEDmgIQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_1.setTransform(-51.9,-85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gFQBzgEDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmAEDmAHQDfAIBzAEQC3AFCFAAQCsAAD5gJQB9gEBagE");
	this.shape_2.setTransform(-51.9,-85.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYAMB8ANQD3AbCxAAQCLAAC2gRQBzgKDUgZQDegaBfgKQCrgPB6AAQB4AACzAPQBmAKDmAaQDfAZBzAKQC3ARCFAAQCsAAD5gbQB9gNBagM");
	this.shape_3.setTransform(-51.9,-86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYAEB8AEQD3AJCxAAQCLAAC2gGQBzgDDUgIQDegIBfgDQCrgFB6AAQB4AACzAFQBmADDmAIQDfAIBzADQC3AGCFAAQCsAAD5gJQB9gEBagE");
	this.shape_4.setTransform(-51.9,-85.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9zAAQBYgDB8gEQD3gJCxAAQCLAAC2AFQBzAEDUAHQDeAJBfADQCrAFB6AAQB4AACzgFQBmgDDmgJQDfgHBzgEQC3gFCFAAQCsAAD5AJQB9AEBaAD");
	this.shape_5.setTransform(-51.9,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.2,-91.8,384.7,13.6);


(lib.h2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9vAAIBeAHQB1AKB3AIQF8AZD+AAQD+AAF9gaQC+gNCJgLQCBgMC4gMQFwgZESAAQETAAFhAZQCxANB5AL");
	this.shape.setTransform(-52.2,-85.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9vAAIBeADQB1AFB3AEQF8AND+AAQD+AAF9gNQC+gHCJgFQCBgFC4gGQFwgNESAAQETAAFhANQCxAGB5AF");
	this.shape_1.setTransform(-52.2,-85.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9vAAIBeAAQB1AAB3AAQF8AAD+AAQD+AAF9AAQC+AACJAAQCBAAC4AAQFwAAESAAQETAAFhAAQCxAAB5AA");
	this.shape_2.setTransform(-52.2,-85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9vAAIBegCQB1gFB3gEQF8gND+AAQD+AAF9ANQC+AHCJAEQCBAGC4AGQFwANESAAQETAAFhgNQCxgGB5gG");
	this.shape_3.setTransform(-52.2,-85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A9vAAIBegGQB1gJB3gJQF8gZD+AAQD+AAF9AaQC+ANCJALQCBAMC4AMQFwAZESAAQETAAFhgZQCxgMB5gN");
	this.shape_4.setTransform(-52.2,-85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.6,-91.9,382.9,12.1);


(lib.h2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A9vAAIBeAHQB1AKB3AIQF8AZD+AAQD+AAF9gaQC+gNCJgLQCBgMC4gMQFwgZESAAQETAAFhAZQCxANB5AL");
	this.shape.setTransform(-52.2,-85.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A9vAAIBeADQB1AFB3AEQF8AND+AAQD+AAF9gNQC+gHCJgFQCBgFC4gGQFwgNESAAQETAAFhANQCxAGB5AF");
	this.shape_1.setTransform(-52.2,-85.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A9vAAIBeAAQB1AAB3AAQF8AAD+AAQD+AAF9AAQC+AACJAAQCBAAC4AAQFwAAESAAQETAAFhAAQCxAAB5AA");
	this.shape_2.setTransform(-52.2,-85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A9vAAIBegCQB1gFB3gEQF8gND+AAQD+AAF9ANQC+AHCJAEQCBAGC4AGQFwANESAAQETAAFhgNQCxgGB5gG");
	this.shape_3.setTransform(-52.2,-85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A9vAAIBegGQB1gJB3gJQF8gZD+AAQD+AAF9AaQC+ANCJALQCBAMC4AMQFwAZESAAQETAAFhgZQCxgMB5gN");
	this.shape_4.setTransform(-52.2,-85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.6,-91.9,382.9,12.1);


(lib.h2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9vAAIBeAHQB1AKB3AIQF8AZD+AAQD+AAF9gaQC+gNCJgLQCBgMC4gMQFwgZESAAQETAAFhAZQCxANB5AL");
	this.shape.setTransform(-52.2,-85.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9vAAIBeADQB1AFB3AEQF8AND+AAQD+AAF9gNQC+gHCJgFQCBgFC4gGQFwgNESAAQETAAFhANQCxAGB5AF");
	this.shape_1.setTransform(-52.2,-85.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9vAAIBeAAQB1AAB3AAQF8AAD+AAQD+AAF9AAQC+AACJAAQCBAAC4AAQFwAAESAAQETAAFhAAQCxAAB5AA");
	this.shape_2.setTransform(-52.2,-85.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9vAAIBegCQB1gFB3gEQF8gND+AAQD+AAF9ANQC+AHCJAEQCBAGC4AGQFwANESAAQETAAFhgNQCxgGB5gG");
	this.shape_3.setTransform(-52.2,-85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A9vAAIBegGQB1gJB3gJQF8gZD+AAQD+AAF9AaQC+ANCJALQCBAMC4AMQFwAZESAAQETAAFhgZQCxgMB5gN");
	this.shape_4.setTransform(-52.2,-85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.1,-92.4,383.9,13.1);


(lib.hcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91A0QEJgaF0gaQLqgzIbAAQIeAALbAzQFuAaECAa");
	this.shape.setTransform(-51.8,-91.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91AjQEJgSF0gRQLqgiIbAAQIeAALbAiQFuARECAS");
	this.shape_1.setTransform(-51.8,-89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91ARQEJgJF0gIQLqgQIbAAQIeAALbAQQFuAIECAJ");
	this.shape_2.setTransform(-51.8,-87.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91AAQEJAAF0AAQLqAAIbAAQIeAALbAAQFuAAECAA");
	this.shape_3.setTransform(-51.8,-85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91gQQEJAJF0AHQLqARIbAAQIeAALbgRQFugHECgJ");
	this.shape_4.setTransform(-51.8,-83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91giQEJASF0AQQLqAjIbAAQIeAALbgjQFugQECgS");
	this.shape_5.setTransform(-51.8,-82.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91gzQEJAaF0AZQLqA0IbAAQIeAALbg0QFugZECga");
	this.shape_6.setTransform(-51.8,-80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,0,0,4).p("A91gQQEJAIF0AIQLqARIbAAQIeAALbgRQFugIECgI");
	this.shape_7.setTransform(-51.8,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:-89.4}}]},1).to({state:[{t:this.shape_2,p:{y:-87.6}}]},1).to({state:[{t:this.shape_3,p:{y:-85.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:-82.1}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{y:-82}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3,p:{y:-85.6}}]},1).to({state:[{t:this.shape_2,p:{y:-87.5}}]},1).to({state:[{t:this.shape_1,p:{y:-89.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.8,-97.5,384,12.5);


(lib.hcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91A0QEJgaF0gaQLqgzIbAAQIeAALbAzQFuAaECAa");
	this.shape.setTransform(-51.8,-91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91AjQEJgSF0gRQLqgiIbAAQIeAALbAiQFuARECAS");
	this.shape_1.setTransform(-51.8,-89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91ARQEJgJF0gIQLqgQIbAAQIeAALbAQQFuAIECAJ");
	this.shape_2.setTransform(-51.8,-87.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91AAQEJAAF0AAQLqAAIbAAQIeAALbAAQFuAAECAA");
	this.shape_3.setTransform(-51.8,-85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91gQQEJAJF0AHQLqARIbAAQIeAALbgRQFugHECgJ");
	this.shape_4.setTransform(-51.8,-83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91giQEJASF0AQQLqAjIbAAQIeAALbgjQFugQECgS");
	this.shape_5.setTransform(-51.8,-82.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91gzQEJAaF0AZQLqA0IbAAQIeAALbg0QFugZECga");
	this.shape_6.setTransform(-51.8,-80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CBCBCB").ss(2,0,0,4).p("A91gQQEJAIF0AIQLqARIbAAQIeAALbgRQFugIECgI");
	this.shape_7.setTransform(-51.8,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:-89.4}}]},1).to({state:[{t:this.shape_2,p:{y:-87.6}}]},1).to({state:[{t:this.shape_3,p:{y:-85.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:-82.1}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{y:-82}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3,p:{y:-85.6}}]},1).to({state:[{t:this.shape_2,p:{y:-87.5}}]},1).to({state:[{t:this.shape_1,p:{y:-89.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.8,-97.5,384,12.5);


(lib.h_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91A0QEJgaF0gaQLqgzIbAAQIeAALbAzQFuAaECAa");
	this.shape.setTransform(-51.8,-91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91AjQEJgSF0gRQLqgiIbAAQIeAALbAiQFuARECAS");
	this.shape_1.setTransform(-51.8,-89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91ARQEJgJF0gIQLqgQIbAAQIeAALbAQQFuAIECAJ");
	this.shape_2.setTransform(-51.8,-87.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91AAQEJAAF0AAQLqAAIbAAQIeAALbAAQFuAAECAA");
	this.shape_3.setTransform(-51.8,-85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91gQQEJAJF0AHQLqARIbAAQIeAALbgRQFugHECgJ");
	this.shape_4.setTransform(-51.8,-83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91giQEJASF0AQQLqAjIbAAQIeAALbgjQFugQECgS");
	this.shape_5.setTransform(-51.8,-82.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91gzQEJAaF0AZQLqA0IbAAQIeAALbg0QFugZECga");
	this.shape_6.setTransform(-51.8,-80.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(3,0,0,4).p("A91gQQEJAIF0AIQLqARIbAAQIeAALbgRQFugIECgI");
	this.shape_7.setTransform(-51.8,-83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:-89.4}}]},1).to({state:[{t:this.shape_2,p:{y:-87.6}}]},1).to({state:[{t:this.shape_3,p:{y:-85.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{y:-82.1}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{y:-82}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3,p:{y:-85.6}}]},1).to({state:[{t:this.shape_2,p:{y:-87.5}}]},1).to({state:[{t:this.shape_1,p:{y:-89.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.3,-98,385,13.5);


(lib.finger = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.h, null, new cjs.Matrix2D(0.625,0.373,-0.373,0.625,-59.2,-174.4)).s().p("AiwJfIgfAIIh9gfIgXgcQgBg1AGg1QAJhUgFhQIgKiKQgGheBZgbIA/AOQAjA/AlA/QBVCOgaCmQgLBFgEBHgAgYGpQgLgVgIgUQgJgWgEgXQgFghABggQACgrgCgrQgEhAgKhBQgJg7gHg7QAMgYAQgVQAagiAdggQAUgDAXAAQAYgCAZAEIhNgjIgmgUQgjgTgkgSQgmgSgqgIIhsgaQhdgXhUgwQgegPgZgYIgJhHIAfg6QAkgPAmgGQA1gHA3ABQBCAEBCAAQC/ADC/gKQCGgHCGgQIAEgHQAiD/ASEAQAHBoADBrIiZEBIilBIQg2AXg1AVg");
	this.shape.setTransform(53.1,61.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.3,123);


(lib.dis_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.502)").s().p("AM7LRQgVhdjZhEQi2g5kGgZInUAAQl8AniEAuQiUAyAABrIAAABI9XAAIAA02QB7hFBPgUIBSgSMBT3AAAIAWAJIA0AYIAAWAg");
	this.shape.setTransform(286.4,72.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,572.8,144.4);


(lib.Bplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABFA/IgBgMIAHABQAEAAADgBQACgBACgDIADgJIACgDIgchHIANAAIAPAoIAGARIAFgRIAPgoIANAAIgcBIIgHAQQgDAHgFACQgEADgGAAIgIgBgAgEAfQgGgGAAgJQAAgGACgEQADgFAEgBIAGgDIALgCQAPgCAHgCIAAgEQAAgHgDgDQgFgEgJAAQgJAAgEADQgEADgCAIIgKgCQACgIADgFQADgEAGgDQAHgCAKAAQAJAAAGACQAGACACADQADAEABAFIABALIAAAOQAAARABAFQAAAFADAEIgNAAQgCgEgBgFQgGAGgHACQgGACgHAAQgMAAgFgFgAASADIgLACQgDACgBACQgCADAAADQAAAFAEADQADAEAIAAQAHAAAFgDQAGgDACgGQACgEAAgIIAAgDQgGABgOACgAglAjIAAhiIAMAAIAABigAiBAjIAAhiIAmAAIAPAAQAHACAFADQAFAEAEAGQADAGAAAIQAAAMgJAJQgIAJgVAAIgaAAIAAAngAh0gQIAaAAQANAAAFgFQAGgEAAgJQAAgGgDgFQgDgEgGgCIgMgBIgaAAg");
	this.shape.setTransform(39.1,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-0.1,-11.5,0.1,11.5).ss(1,0,0,4).p("AFohtIrPAAQgeAAAAAeIAACfQAAAeAeAAILPAAQAeAAAAgeIAAifQAAgegeAAg");
	this.shape_1.setTransform(39,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EBEBEB","#FBFBFB"],[0,0.992],0,9,0,-9).s().p("AlnBtQgeAAAAgeIAAieQAAgeAeAAILOAAQAfAAAAAeIAACeQAAAegfAAg");
	this.shape_2.setTransform(39,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-0.1,-11.5,0.1,11.5).ss(1,0,0,4).p("AFohtIrPAAQgeAAAAAeIAACfQAAAeAeAAILPAAQAeAAAAgeIAAifQAAgegeAAg");
	this.shape_3.setTransform(39,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EFB8A0","#FEF1EF"],[0,0.992],0,9,0,-9).s().p("AlnBtQgeAAAAgeIAAieQAAgeAeAAILOAAQAfAAAAAeIAACeQAAAegfAAg");
	this.shape_4.setTransform(39,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,80,24);


(lib.string3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.hcopy2();
	this.instance.setTransform(243,87);

	this.instance_1 = new lib.h2copy2();
	this.instance_1.setTransform(243,87);

	this.instance_2 = new lib.h3copy2();
	this.instance_2.setTransform(191,1.5,1,1,0,0,0,-52,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-10,383.1,11.5);


(lib.string2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.hcopy();
	this.instance.setTransform(243,87);

	this.instance_1 = new lib.h2copy();
	this.instance_1.setTransform(243,87);

	this.instance_2 = new lib.h3copy();
	this.instance_2.setTransform(191,1.5,1,1,0,0,0,-52,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-10.5,384.1,12.5);


(lib.string1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.h_1();
	this.instance.setTransform(243,87);

	this.instance_1 = new lib.h2();
	this.instance_1.setTransform(243,87);

	this.instance_2 = new lib.h3();
	this.instance_2.setTransform(191,1.5,1,1,0,0,0,-52,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-11,385.1,13.5);


(lib.MainSlider = function() {
	this.initialize();

	// Layer 1
	this.val = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 29;
	this.val.setTransform(21.2,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(157.3,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(71.7,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjVhZIGrAAIAACzImrAAg");
	this.shape.setTransform(21.5,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,257.7,22.4);


(lib.RbGroupMain = function() {
	this.initialize();

	// Layer 2
	this.labelT = new cjs.Text("3rd Harmonic", "13px 'Arial Narrow'");
	this.labelT.name = "labelT";
	this.labelT.lineHeight = 15;
	this.labelT.lineWidth = 104;
	this.labelT.setTransform(-169.7,92.9);

	this.labelT_1 = new cjs.Text("2nd Harmonic", "13px 'Arial Narrow'");
	this.labelT_1.name = "labelT_1";
	this.labelT_1.lineHeight = 15;
	this.labelT_1.lineWidth = 92;
	this.labelT_1.setTransform(-170.5,61.3);

	this.labelT_2 = new cjs.Text("Fundamental", "13px 'Arial Narrow'");
	this.labelT_2.name = "labelT_2";
	this.labelT_2.lineHeight = 15;
	this.labelT_2.lineWidth = 104;
	this.labelT_2.setTransform(-170.5,30.6);

	// Layer 1
	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(-131.9,102.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-131.9,70.5,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,40.5,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3,this.labelT_2,this.labelT_1,this.labelT);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30.6,131.5,81.1);


(lib.RbGroupMain_1 = function() {
	this.initialize();

	// Layer 2
	this.labelT = new cjs.Text("E5 (0.1000 g)", "13px 'Arial Narrow'");
	this.labelT.name = "labelT";
	this.labelT.lineHeight = 15;
	this.labelT.lineWidth = 84;
	this.labelT.setTransform(-169.7,122.9);

	this.labelT_1 = new cjs.Text("A4 (0.2000 g)", "13px 'Arial Narrow'");
	this.labelT_1.name = "labelT_1";
	this.labelT_1.lineHeight = 15;
	this.labelT_1.lineWidth = 104;
	this.labelT_1.setTransform(-169.7,92.9);

	this.labelT_2 = new cjs.Text("D4 (0.4000 g)", "13px 'Arial Narrow'");
	this.labelT_2.name = "labelT_2";
	this.labelT_2.lineHeight = 15;
	this.labelT_2.lineWidth = 92;
	this.labelT_2.setTransform(-170.5,61.3);

	this.labelT_3 = new cjs.Text("G3 (0.8000 g)", "13px 'Arial Narrow'");
	this.labelT_3.name = "labelT_3";
	this.labelT_3.lineHeight = 15;
	this.labelT_3.lineWidth = 104;
	this.labelT_3.setTransform(-170.5,30.6);

	// Layer 1
	this.RadBut_4 = new lib.radiobutton();
	this.RadBut_4.setTransform(-131.9,132.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(-131.9,102.1,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(-131.9,70.5,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(-131.9,40.5,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3,this.RadBut_4,this.labelT_3,this.labelT_2,this.labelT_1,this.labelT);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.5,30.6,131.5,111.1);


(lib.playStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.bPlay = new lib.Bplay();
	this.bPlay.setTransform(39,11,1,1,0,0,0,39,11);
	new cjs.ButtonHelper(this.bPlay, 0, 1, 2, false, new lib.Bplay(), 3);

	this.bStop = new lib.stop();
	this.bStop.setTransform(39,11,1,1,0,0,0,39,11);
	new cjs.ButtonHelper(this.bStop, 0, 1, 2, false, new lib.stop(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bPlay}]}).to({state:[{t:this.bStop}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,80,24);


(lib.peg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Layer 9
	this.instance = new lib.Symbol1copy2("synched",0);
	this.instance.setTransform(12.5,17.7,1,1,0,0,0,12.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.05,x:18.6},13).to({_off:true},1).wait(1).to({_off:false,x:5.3},0).to({scaleX:1,x:12.5},14).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol1copy("synched",0);
	this.instance_1.setTransform(12.5,17.7,1,1,0,0,0,12.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.08,x:5},14).to({regX:12.4,scaleX:0.14,x:19},1).to({regX:12.5,scaleX:1,x:12.5},14).wait(1));

	// Layer 5
	this.instance_2 = new lib.kv("synched",0);
	this.instance_2.setTransform(12.1,17.8,0.062,1,0,0,0,7.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1},14).to({scaleX:0.06},15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7C6658","#4A464B","#4A464B","#97A6B8","#97A6B8","#4A464B"],[0,0.11,0.659,0.867,0.949,1],-7.4,0,7.4,0).s().p("AhJAGIAAgLICTAAIAAALg");
	this.shape.setTransform(12.5,45.6,1,1.222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C6658","#4A464B","#4A464B","#97A6B8","#97A6B8","#4A464B"],[0,0.11,0.659,0.867,0.949,1],-7.4,0,7.4,0).s().p("AhJAGIAAgLICTAAIAAALg");
	this.shape_1.setTransform(12.5,43.4,1,1.222);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7C6658","#4A464B","#4A464B","#97A6B8","#97A6B8","#4A464B"],[0,0.11,0.659,0.867,0.949,1],-7.4,0,7.4,0).s().p("AhJAGIAAgLICTAAIAAALg");
	this.shape_2.setTransform(12.5,41.4,1,1.222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#7C6658","#4A464B","#4A464B","#97A6B8","#97A6B8","#4A464B"],[0,0.11,0.659,0.867,0.949,1],-5.5,0,5.3,0).s().p("Ag2CXIAAktIBtAAIAAEtg");
	this.shape_3.setTransform(12.5,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,64.1);


// stage content:



(lib.sim_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 18
	this.dis_mc = new lib.dis_mc();
	this.dis_mc.setTransform(320.5,379.2,1,1,0,0,0,286.4,72.2);
	this.dis_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dis_mc).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.playStop = new lib.playStop();
	this.playStop.setTransform(566.7,271.5,1,1,0,0,0,39,11);
	this.playStop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playStop).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.finger = new lib.finger();
	this.finger.setTransform(542.6,186.5,1.172,1.172,-4.8,0,0,53.1,61.5);
	this.finger._off = true;

	this.timeline.addTween(cjs.Tween.get(this.finger).wait(1).to({_off:false},0).wait(1));

	// Layer 16
	this.val2 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val2.name = "val2";
	this.val2.textAlign = "center";
	this.val2.lineHeight = 14;
	this.val2.lineWidth = 29;
	this.val2.setTransform(214.6,403.8);

	this.sliderThumb2 = new lib.sliderThumb();
	this.sliderThumb2.setTransform(354.8,411.2);

	this.slidertrack2 = new lib.slidertrack();
	this.slidertrack2.setTransform(269.2,411.6,1.85,1);

	this.val1 = new cjs.Text("188.6", "bold 12px 'Times New Roman'");
	this.val1.name = "val1";
	this.val1.textAlign = "center";
	this.val1.lineHeight = 14;
	this.val1.lineWidth = 29;
	this.val1.setTransform(214.6,348.2);

	this.sliderThumb1 = new lib.sliderThumb();
	this.sliderThumb1.setTransform(354.8,355.5);

	this.slidertrack1 = new lib.slidertrack();
	this.slidertrack1.setTransform(269.2,356,1.85,1);

	this.rbGroup2 = new lib.RbGroupMain();
	this.rbGroup2.setTransform(735.6,324.9,1,1,0,0,0,61.1,21.4);

	this.rbGroup1 = new lib.RbGroupMain_1();
	this.rbGroup1.setTransform(295.9,324.9,1,1,0,0,0,61.1,21.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjVlvIGrAAIAAC0ImrAAgAjVC8IGrAAIAAC0ImrAAg");
	this.shape.setTransform(214.9,382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.rbGroup1},{t:this.rbGroup2},{t:this.slidertrack1},{t:this.sliderThumb1},{t:this.val1},{t:this.slidertrack2},{t:this.sliderThumb2},{t:this.val2}]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(2,1,1).p("EAu8gS9QgFi+jDAAMhXnAAAQjIAAAADIMAAAAlnQAADIDIAAMBXnAAAQDIAAAAjIMAAAglnQAAgFAAgFg");
	this.shape_1.setTransform(320,154.5);

	this.text = new cjs.Text("Hz", "14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 23;
	this.text.setTransform(369.5,450.2);

	this.pitch = new cjs.Text("12345.5", "12px 'Arial'");
	this.pitch.name = "pitch";
	this.pitch.textAlign = "center";
	this.pitch.lineHeight = 14;
	this.pitch.lineWidth = 55;
	this.pitch.setTransform(330.5,451.3);

	this.text_1 = new cjs.Text("Pitch = ", "14px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 83;
	this.text_1.setTransform(277.5,450.2);

	this.text_2 = new cjs.Text("Mode", "14px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 83;
	this.text_2.setTransform(531.5,307.2);

	this.text_3 = new cjs.Text("mm", "12px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 20;
	this.text_3.setTransform(250.9,402.3);

	this.text_4 = new cjs.Text("N", "12px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 14;
	this.text_4.setTransform(244.9,348.4);

	this.text_5 = new cjs.Text("Length", "14px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 83;
	this.text_5.setTransform(329.5,378.2);

	this.text_6 = new cjs.Text("Tension", "14px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 83;
	this.text_6.setTransform(329.5,320.2);

	this.text_7 = new cjs.Text("String (mass)", "14px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 137;
	this.text_7.setTransform(92.5,307.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9999").ss(2,1,1).p("ArnAyQAABkBkAAIUHAAQBkAAAAhkIAAhjQAAhkhkAAI0HAAQhkAAAABkg");
	this.shape_2.setTransform(314.5,457);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AqDCWQhkgBAAhjIAAhiQAAhlBkABIUHAAQBkgBAABlIAABiQAABjhkABg");
	this.shape_3.setTransform(314.5,457);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(2,1,1).p("EAr0gL7MhXnAAAQjIAAAADIIAARnQAADIDIAAMBXnAAAQDIAAAAjIIAAxnQAAjIjIAAg");
	this.shape_4.setTransform(320,377.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.pitch},{t:this.text},{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.string4 = new lib.string3();
	this.string4.setTransform(103.7,171.3,1,1,-1);

	this.string3 = new lib.string3();
	this.string3.setTransform(102.8,157.2);

	this.string2 = new lib.string2();
	this.string2.setTransform(102.8,142.2);

	this.string1 = new lib.string1();
	this.string1.setTransform(102.9,128.6,1,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.string1},{t:this.string2},{t:this.string3},{t:this.string4}]},1).wait(1));

	// Layer 6
	this.s1 = new lib.s1();
	this.s1.setTransform(303.1,132.6,1,1,0,0,0,199.8,3.5);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.s2 = new lib.s2();
	this.s2.setTransform(320.6,145.6,1,1,0,0,0,218.3,2.5);
	this.s2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1).to({_off:false},0).wait(1));

	// Layer 10
	this.s3 = new lib.s3();
	this.s3.setTransform(327.4,157.5,1,1,0,0,0,223.6,1.5);
	this.s3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.s4 = new lib.s4();
	this.s4.setTransform(309.5,168,1,1,0,0,0,206.5,5);
	this.s4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(1).to({_off:false},0).wait(1));

	// Layer 13
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(33.5,23.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 14
	this.peg3 = new lib.peg();
	this.peg3.setTransform(549.9,185.1,0.813,0.813,0,180,0,12.4,31.9);

	this.peg4 = new lib.peg();
	this.peg4.setTransform(515.4,184.6,0.813,0.813,0,180,0,12.4,32.1);

	this.peg2 = new lib.peg();
	this.peg2.setTransform(537.9,108.9,0.813,0.813,0,0,0,12.5,31.9);

	this.peg1 = new lib.peg();
	this.peg1.setTransform(503.3,109.2,0.813,0.813,0,0,0,12.5,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.peg1},{t:this.peg2},{t:this.peg4},{t:this.peg3}]},1).wait(1));

	// Layer 15
	this.hand = new lib.hand();
	this.hand.setTransform(507.6,139.6,1.172,1.172,-4.8,0,0,131.8,132.2);
	this.hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;