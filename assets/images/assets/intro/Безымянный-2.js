(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.polosprite = function() {
	this.initialize(img.polosprite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,480);


(lib.sprites = function() {
	this.initialize(img.sprites);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,918,882);// helper functions:

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


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.polosprite();
	this.instance.setTransform(0,0,1.825,1.825);

	this.instance_1 = new lib.polosprite();
	this.instance_1.setTransform(72,0,1.825,1.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,1269.2,876), null);


(lib.Анимация43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.polosprite();
	this.instance.setTransform(-915.1,-669.55,2.7899,2.7899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-915.1,-669.5,1830.2,1339.1);


(lib.Анимация42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.polosprite();
	this.instance.setTransform(-915.1,-669.55,2.7899,2.7899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-915.1,-669.5,1830.2,1339.1);


(lib.Анимация39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A16PsIAA/XMAr1AAAIAAfXg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-100.3,280.5,200.7);


(lib.Анимация35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(197,88,156,0.898)").s().p("AMWXuI4wAAQhMgChLgQQh9gahshGQhkg+hJheQhJhegihzQghhwgQh4QgQh1AEh3QgCm9ABm8IgBifQgBiCALiDQAMiWAsiSQAjh2BMhiQBLhgBqhAQBUgxBegbQBegcBhgDIYwAAIBPAMQBPAOBJAdQA9AYA7AjQA4AhAwAtQBCA/AtBOQBeClAiC7QALA/AEBBQAUFmACFlQACC5gHC6QgGClgMCmQgHBbgPBaIgHAiQgJAmgOAlQgZBFgeBCQg1B0hbBZQhUBRhrApQhHAbhKAOQg3AMg5AAIgJAAg");
	this.shape.setTransform(0.0051,0.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.1,-151.7,304.29999999999995,303.5);


(lib.Анимация33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgFA7IgFgIQgLgggKg1QgDgPALgIQAKgJAPAGIAGAIQAEAFABAEQAOAxAFAiIAAAGQgDANgNADIgIABQgHAAgGgEg");
	this.shape.setTransform(10.5251,32.4544,1.8681,1.8681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgjAxQgJgCgHgEQgCAAgCgIIgCgNQAIgKAFgEQAsghAWgQQAKgHAJAAQALABAFAKQADAHgCAKQgCALgFAEQgfAbgnAYQgFADgHAAIgEAAg");
	this.shape_1.setTransform(-23.4306,20.5717,1.8681,1.8681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnC+QgEAAgFgIQgEgGgBgHIgahsQgQhAgMgrQgFgRgNgVIgXglQgRgZAXgKQBEgcAfgHQAJgCANAFQANAGAGAHQAyBFBVB6QAHAMAHAQIAKAXQgSA2hCAoQgzAfgoAAQgLAAgKgCg");
	this.shape_2.setTransform(64.3672,4.2363,1.8681,1.8681);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah3CSQhDg7gDhOQgCgUADg0IAQgLQAKgHAHgDQAbgIBdgYIB6giQAdgKAUAUQArAqAMA3QABAGgFAJQgFAIgEABQhGARhIAxQggAWhZBMQgLAKgHAAQgHAAgJgJg");
	this.shape_3.setTransform(-41.4981,-31.9965,1.8681,1.8681);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADYCTQghgCgcgUQgmgcgrg0QhDhOhhATQgtAIgUABIgkABIgcgBQghgNgTgQQgUgRgKgXQgFgKAAgOQABgPAFgIQAHgKAjgCIA5gCQAigBAWgEQA0gLAmAIQAtAJAhAiQADADAHADQAGACAGgBQBagHA7BRQApA3AxAcQAYANgBAWQgCAWgZAMQgeAOgdAAIgFAAg");
	this.shape_4.setTransform(-21.956,72.3003,1.8681,1.8681);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDDDDD").s().p("Aj/KDQgJgCgBgCIgLgSIgMgVQhyjWini1QgSgUABgJQABgFARgRIAdgfIAcgiQASgVgMgdIgJgVQgWgrACgfQAAgOAGgQIANggQAXhHAfhsIAzi1QAHgYANgQQAcgiA8hBQAXgaAgAAQARAEAYAAIAqAAQBwBMAkAcQADACABAKQAAAKgCAIIgeBgQgEANAFAGQAGAGAQACQB5AKB4BOQAMAJAIgBQAIgBAFgNQAXg0AKgcQALgcAHgFQAHgFAeADQBBAGBHAMQAYADAbAUQAXARAVAbQAHAJACARIABAbIAAAaQAAARACAJQAHAqgMAtQgJAjgXAvIhECJQglBNgWA/QgMAwgWAbQgXAcgkALQgZAKgJATQgJASADAbQADAeAAAeQAAAUgGADIggAHQhzAPh6AkQhnAfh9AzQgWAIgMADIgEABIgEgBgAiRFOQAoAPAiAoQAoAxAoAfQAcAUAhACQAgABAggPQAagNABgWQABgVgYgNQgwgcgqg4Qg7hRhZAHQgFABgGgCQgHgDgEgDQgigigsgJQgngIg0ALQgVAEgjABIg5ACQgjACgHAKQgFAIAAAOQAAAOAEALQAJAVAUARQATAPAiAPIAcABIAkAAQAXgBAqgIQATgEASAAQAdAAAZAJgAAEBHQgKAIADAPQAIA1AMAhQACAGAKAFIASAJIAKgPQAFgKgBgGQgDgTgQhBQgBgEgFgFIgGgIQgGgCgGAAQgIAAgGAFgAEQjUQgcAHhHAcQgXAKARAZIAYAlQANAVAEARQAVBGAhCRQACAHAEAGQAEAIAEAAQAwALBBgoQBCgpASg2IgKgXQgHgQgHgKQhQh1g4hLQgGgHgNgGQgJgDgHAAIgGAAgAiDAYQgXAQgsAiIgNAOIACANQABAIADABQAHAEAJABQAKABAGgDQAlgWAigfQAFgEACgLQACgKgDgHQgFgKgKgBIgBAAQgJAAgKAHgAikluIg9ASIg9AQIg8AQQgkAJgYAIQgHACgKAHIgQALQgDA2ABATQADBRBDA5QAJAIAHAAQAHgBALgIQBYhLAigXQBHgyBHgRQAEgBAFgJQAFgJgBgFQgMg4grgqQgNgNgSAAQgIAAgKADg");
	this.shape_5.setTransform(5.2721,8.3413,1.8681,1.8681);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai2KqIhVgfQgGgDgHgGQhJiNiNisIh9iQIg5jzQByg8BVjKQAbg/AVhFIAPg5IDniXICrgTQC6gNBRAdQBOAcCMCDQBGBCA2A7IBQEbQhpDUgFCmQgCBTATAoIjXCYQh2AHjFA0QhxAfhoAjQgEACgFAAIgKgCg");
	this.shape_6.setTransform(0.0326,-0.7646,1.8681,1.8681);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-128.5,252.9,257.1);


(lib.Анимация30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD4CXQhNgkhohMQgegWgagcQgeASgZAVQhJA+hpA0QiUBKhhgOQiLgVg7hkQgTghgFggQgFgcAIAGIAegCQAngFAtgNQCOgnCMhjQApgdAygGQBQgJBDATQAiAKAWAfIAFgFQAkgjAwgJQBCgNBHAMQAvAJAsAcQA/ApBOAjQBxA0B0AbQgCABACAWQADAkgGAcQgXBjiLAUQgcAFgeAAQhpAAhzg2g");
	this.shape.setTransform(4.505,142.6139,1.2778,1.2778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvB/QglgKgQggQhFhlgcgvQgEgJABgMQACgYAWgOQAWgPAYAQQAMAJAHALIBNBtIALAMQAUAUAKAVQAPAhgSAXQgKANgUAAQgJAAgMgDg");
	this.shape_1.setTransform(31.4028,78.9034,1.2778,1.2778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah8CWQgXgeATgqQANgbAZgZIAOgQIBjiMIAZgZQAegUAdATQAcASACAfQABAPgFAMQgjA8hZCAQgVAqgvANQgPAEgMAAQgZAAgNgRg");
	this.shape_2.setTransform(-21.7273,78.8986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDClQhFgcgchFQgchEAchDQAchEBFgdQBDgcBEAcQBFAdAcBEQAcBDgcBEQgcBFhFAcQgiAOgiAAQghAAgigOg");
	this.shape_3.setTransform(87.325,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0CBQg2gWgWg2QgWg1AWg1QAWg1A2gWQA0gWA2AWQA1AWAWA1QAWA1gWA1QgWA2g1AWQgbALgbAAQgaAAgagLg");
	this.shape_4.setTransform(-77.2599,9.9052,1.2778,1.2778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjEAKQhBhGhJhGIg8g4QAchLBVhBQA0goA/gdQAPgGAOAGQBgAtDICaQBzBYByBfQAJAIgCAMQgpDSicBwQgxAjg3AVIgsAOQgpifjNjmg");
	this.shape_5.setTransform(87.2923,14.8088,1.2778,1.2778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjFFJQichwgpjSQgCgMAJgIQByhfBzhYQDIiaBggtQAOgGAPAGQA+AdA1AoQBVBBAcBLQheBThnBxQjNDmgqCfQhGgOhOg4g");
	this.shape_6.setTransform(-77.421,14.8088,1.2778,1.2778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEDEDE").s().p("ArxRbQkQisj8hoQAdhgAlhCQA+hxABiWIjSkLQgCj0gMkYQgVowgqiyQAbiLBQiPQCfkeEIgSIC1AVQDEAiBPA+IAAGxIBVgUQBsgYBtgOQFfgrD1BHIAAmTIAygWQA/gaBBgUQDThACoATQC3AVBgCIQA+BXBYEGIgoJHQglJpAOCvQgdAlgpAuQhSBfg9A0IAPBFQATBSAXBFQAGASArBoQAVA1AAAtIAAABQl9CxnnFhQj0CwipCNQlwlXmGj0g");
	this.shape_7.setTransform(3.6,69.3588);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("APuTEQAAgjgRgqQghhRgFgPQgSg1gPhBIgLg2QAvgoBAhKQAhglAWgcQgLiJAdnkIAgnHQhFjNgxhFQhLhqiPgQQiEgQilAzQg0APgwAVIgnARIAAE8QjAg4kSAiQhWAKhUATIhDAQIAAlTQg+gxiZgaIiOgRQjPAOh8DgQg+BxgVBtQAgCKARG2QAJDbACDAICkDQQAAB2gyBYQgcA0gXBLQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg9AJg+IAGgyIgHpVIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREIQAPDqBJC7QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdg");
	this.shape_8.setTransform(3.6677,-1.0759,1.2777,1.2777);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApOREQjViGjFhSQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg8AJg+IAGgyIgHpWIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREJQAPDqBJC6QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdQkqCLl+EVQi/CKiDBuQkhkNkxi/g");
	this.shape_9.setTransform(3.6536,41.3331,1.2776,1.2776);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("EgAyAkCQhVhjgZgTIh5hsQhZhPh6hCIiGhvIhihhQh5gxhfheIhThaIAHBKQACA4gOgMQigh0htkyQhSjagwkcQhtBRiMAlQiWAniYgVICahzQC4iSAhhsQgXAfhBAdQh2A9irgEQBMgzBjiMQDLkbAXm+IiCAfIhuALQAAgNCMiLQCNiIgCgSQALmlBxlOQA7iqA2haQAqhPBPhnQCajKC0hsQDliJC0g4QC4g3DKAMIEegPIDjAcQEPAyDWBhQC6BXCICJQBgBiBVCUQBvDMAyC4QAcBxA3FjQAVD+BGDSIDOILQAFAoh5hQQh/hUhSh2QAPCQAtC3QAgC3gZEIQgYDuibFKQhXCzhBBrQgNgTgIgvIgUhDIg5BoQhSB2hwBKQAAgaANg8IAEgPQALg6gHgZQgCgHg+BcQhcByh1A0IiwC9IiPBgIj9C2QgZAThnBiQg4A1grAAIgCAAQgtAAg4hBg");
	this.shape_10.setTransform(-0.0901,-2.5733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.6,-239.7,397,479.4);


(lib.Анимация27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A16PsIAA/XMAr1AAAIAAfXg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-100.3,280.5,200.7);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(197,88,156,0.898)").s().p("AMWXuI4wAAQhMgChLgQQh9gahshGQhkg+hJheQhJhegihzQghhwgQh4QgQh1AEh3QgCm9ABm8IgBifQgBiCALiDQAMiWAsiSQAjh2BMhiQBLhgBqhAQBUgxBegbQBegcBhgDIYwAAIBPAMQBPAOBJAdQA9AYA7AjQA4AhAwAtQBCA/AtBOQBeClAiC7QALA/AEBBQAUFmACFlQACC5gHC6QgGClgMCmQgHBbgPBaIgHAiQgJAmgOAlQgZBFgeBCQg1B0hbBZQhUBRhrApQhHAbhKAOQg3AMg5AAIgJAAg");
	this.shape.setTransform(0.0051,0.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.1,-151.7,304.29999999999995,303.5);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAzQgVgWAAgdQAAgdAVgUQAUgWAdAAQAdAAAVAWQAVAUAAAdQAAAdgVAWQgVAUgdAAQgdAAgUgUg");
	this.shape.setTransform(1.268,275.1796,1.2773,1.2773);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADHBqIgRgNQhHg0hAgMIgzgCQgxABg6AbQgnARgiAYIgBABIgMAIIgBABQgQAKgTgBQgdABgVgWQgVgUAAgeQAAgSAJgQQAIgOAOgKIAGgDQBeg9BegYQAvgMAcAAQBtABBeAwQAvAZAeAcIAAAAQAdAUAAAkQAAAegVAUQgVAWgdgBQgTABgQgKg");
	this.shape_1.setTransform(1.8109,280.8637,1.2773,1.2773);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEBFQgdgdAAgoQAAgnAdgdQAdgcAnAAQApAAAcAcQAcAdAAAnQAAAogcAdQgcAcgpAAQgnAAgdgcg");
	this.shape_2.setTransform(44.5375,241.6816,1.2773,1.2773);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBJQgegeAAgrQAAgqAegeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrgBQgqABgegfg");
	this.shape_3.setTransform(-51.0066,218.4662,1.2773,1.2773);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADHFMQhTgTg2hNQhAhahHgoQhGgnj/hXIAAk0QAAgDADgDQACgCADAAIIYAKIByDOQB1DVATAkIADAdQACAjgHAeQgWBhhlAPQgMACgOAAQgVAAgZgFg");
	this.shape_4.setTransform(67.7175,234.3576,1.2773,1.2773);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj5FRIgUgCQhlgPgWhhQgHgeACgjIADgdQASgkB2jVIByjOIIXgKQADAAACACQADADAAADIAAE0Qj/BXhFAnQhIAohABaQg2BNhTATQgXAFgYAAIgEAAg");
	this.shape_5.setTransform(-67.4487,234.3077,1.2773,1.2773);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhRguIBBixICzDfQhAA5iIBZQhFAtg4AhQANhOBEjAg");
	this.shape_6.setTransform(63.3781,-29.3994,1.2773,1.2773);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAmCSQiIhZhAg5ICzjfIBBCxQBEDAANBOQg4ghhFgtg");
	this.shape_7.setTransform(-60.8421,-29.3994,1.2773,1.2773);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah/DeIB6m7ICFG7g");
	this.shape_8.setTransform(0.9168,-52.0401,1.2773,1.2773);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ay+SkQArhgCnpfICgpMID7AAIJPw8IJzRSIDcAAIFyT1g");
	this.shape_9.setTransform(0.5974,164.3075,1.2773,1.2773);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CECECE").s().p("A09eXQBtlYE67gQAaiUgBiPQgEmmB6pAQAmi1AtitIAniKII+FmQAhAVAnAAQAmAAAhgVII+lmQBeBOBlMcQAyGOAfF+QALCHDSQlQBoITBnH4g");
	this.shape_10.setTransform(1.9067,67.8372,1.2773,1.2773);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFDFD").s().p("Egb+AlBQgOg+AbipQA1lTDLoWQAOgVgEifIgOmVQgYrCAmoVQArpNCxnDQDLoIFhj5QgCAeAAAkQgBBJAIBEQAZDWBlBUQA1AtBBApQAnAZBWAyQC1BwDECrQBbhOB2hdQDsi7CIhPQA4ggAmgyQAngzAOg9QAIglAFhSQAEhRgDg5QEuDfC7FrQDqHFArKJIAAdoIAoBfQAxB3AqCBQCEGaAJFTg");
	this.shape_11.setTransform(-0.1549,13.455,1.2773,1.2773);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AlzErQhWgzgngYQhBgqg1gsQhlhVgajUQgIhFABhJQABgsACgVIABgBQFJjnG4ASIBIAEQA3AHA9APQDCAtC1BlIAAAAQBTAuBNA5QADA5gFBRQgEBSgJAkQgOA9gnAzQgmAyg3AgQiIBPjsC7Qh2BdhbBOQjEisi1hvg");
	this.shape_12.setTransform(1.146,-242.2578,1.2773,1.2773);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-316.6,458.8,632.7);


(lib.Анимация10копия2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD4CXQhNgkhohMQgegWgagcQgeASgZAVQhJA+hpA0QiUBKhhgOQiLgVg7hkQgTghgFggQgFgcAIAGIAegCQAngFAtgNQCOgnCMhjQApgdAygGQBQgJBDATQAiAKAWAfIAFgFQAkgjAwgJQBCgNBHAMQAvAJAsAcQA/ApBOAjQBxA0B0AbQgCABACAWQADAkgGAcQgXBjiLAUQgcAFgeAAQhpAAhzg2g");
	this.shape.setTransform(4.505,142.6139,1.2778,1.2778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvB/QglgKgQggQhFhlgcgvQgEgJABgMQACgYAWgOQAWgPAYAQQAMAJAHALIBNBtIALAMQAUAUAKAVQAPAhgSAXQgKANgUAAQgJAAgMgDg");
	this.shape_1.setTransform(31.4028,78.9034,1.2778,1.2778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhhB1QgSgXAPghQAKgVAUgUIALgMIBNhtIATgUQAYgQAWAPQAWAOACAYQABAMgEAJQgcAvhFBlQgQAgglAKQgMADgJAAQgUAAgKgNg");
	this.shape_2.setTransform(-21.7232,78.9034,1.2778,1.2778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDClQhFgcgchFQgchEAchDQAchEBFgdQBDgcBEAcQBFAdAcBEQAcBDgcBEQgcBFhFAcQgiAOgiAAQghAAgigOg");
	this.shape_3.setTransform(79.725,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0CBQg2gWgWg2QgWg1AWg1QAWg1A2gWQA0gWA2AWQA1AWAWA1QAWA1gWA1QgWA2g1AWQgbALgbAAQgaAAgagLg");
	this.shape_4.setTransform(-94.1099,9.9052,1.2778,1.2778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjEAKQhBhGhJhGIg8g4QAchLBVhBQA0goA/gdQAPgGAOAGQBgAtDICaQBzBYByBfQAJAIgCAMQgpDSicBwQgxAjg3AVIgsAOQgpifjNjmg");
	this.shape_5.setTransform(87.2923,14.8088,1.2778,1.2778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjFFJQichwgpjSQgCgMAJgIQByhfBzhYQDIiaBggtQAOgGAPAGQA+AdA1AoQBVBBAcBLQheBThnBxQjNDmgqCfQhGgOhOg4g");
	this.shape_6.setTransform(-77.421,14.8088,1.2778,1.2778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEDEDE").s().p("ApNNoQjWiGjEhSQAXhKAcg0QAyhZgBh1IijjRQgCi/gJjbQgRm2ghiLQAWhtA9hwQB9jgDPgOICOAQQCZAbA+AwIAAFTIBDgQQBUgSBVgLQETgiDAA4IAAk8IAmgRQAxgUA0gQQClgyCEAPQCPAQBLBrQAxBEBFDNIggHIQgdHjALCJQgXAdggAkQhBBKguApIALA2QAOBAATA2QAEAOAiBSQARApAAAjIAAABQkrCLl9EUQi/CKiDBuQkhkNkxi/g");
	this.shape_7.setTransform(3.5742,69.3497,1.2776,1.2776);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("APuTEQAAgjgRgqQghhRgFgPQgSg1gPhBIgLg2QAvgoBAhKQAhglAWgcQgLiJAdnkIAgnHQhFjNgxhFQhLhqiPgQQiEgQilAzQg0APgwAVIgnARIAAE8QjAg4kSAiQhWAKhUATIhDAQIAAlTQg+gxiZgaIiOgRQjPAOh8DgQg+BxgVBtQAgCKARG2QAJDbACDAICkDQQAAB2gyBYQgcA0gXBLQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg9AJg+IAGgyIgHpVIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREIQAPDqBJC7QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdg");
	this.shape_8.setTransform(3.6536,-1.0849,1.2776,1.2776);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApOREQjViGjFhSQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg8AJg+IAGgyIgHpWIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREJQAPDqBJC6QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdQkqCLl+EVQi/CKiDBuQkhkNkxi/g");
	this.shape_9.setTransform(3.6536,41.3331,1.2776,1.2776);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjNDMQhVhQAAh6QAAh5BVhSQBVhVB4AAQB4AABVBVQBWBSAAB5QAAB6hWBQQhTBTh6AAQh4AAhVhTg");
	this.shape_10.setTransform(-50.8856,9.0724,1.2776,1.2776);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjyDlQhlhdAAiIQAAiHBlheQBnheCLAAQCNAABlBeQBmBgAACFQAACHhmBeQhjBfiPABQiOgBhkhfg");
	this.shape_11.setTransform(-50.6939,10.8292,1.2776,1.2776);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjNDOQhYhSABh6QgBh3BYhVQBXhXB4AAQB5AABXBVQBUBXAAB2QAAB4hUBVQhWBUh6AAQh5AAhWhUg");
	this.shape_12.setTransform(62.4738,9.2002,1.2776,1.2776);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjxDlQhphdAAiHQAAh/BphgQBnhfCQgBQCRABBmBfQBrBjgPCAQgLCJhdBYQhfBYiMAAQiRAAhmhZg");
	this.shape_13.setTransform(62.808,11.8513,1.2776,1.2776);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAQQgKgcABgUQACgaAZgXIAMCjQgWglgIgdg");
	this.shape_14.setTransform(-5.1577,115.6922,1.2776,1.2776);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeJMQAAg0gZhXIg0hqQgkhLgHgwQgDgyAhgmIAjgfIAAjfQAAiFgeizIgeiTIBFAFIAYDYQATB/AAHPQAAAUARCQIAPCOIBDABIAfuaIgEi+IA7gMIAAB6IgoI7QAgArAHBSQAEBRgZAiQgYAiAABrIACBlg");
	this.shape_15.setTransform(6.5609,85.5717,1.2776,1.2776);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkC0IgplnICbAbIgLFNg");
	this.shape_16.setTransform(8.3015,133.1641,1.2776,1.2776);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AovgfIBegPIBhgbQCNggDQAtICZgFQBRgPBKARQBOATDBBcIj0AIIjbAfg");
	this.shape_17.setTransform(-1.8558,143.0304,1.2776,1.2776);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AncADQhPhEg/hQIgyhEIFwBCQBzAYD8BHIE/g/IEbgFQg7BThwBSQjgCpjuAAIgNAAQkCAAjxjTg");
	this.shape_18.setTransform(1.9452,171.9175,1.2776,1.2776);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAnFZQhuAAh/g0QgjgNh6g/Qhpg6iejPQicjLAdADQBfANCfg2QCig3ASAAQBNAADtAsICFgPQCQgMAjAQIG0DEQgyBUiICHQhqBriNBCQiRBEiAAAIgGAAg");
	this.shape_19.setTransform(1.0807,167.4391,1.2776,1.2776);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKCzQAmg4AhhNQAthpgHg1QgIgpgkgLIAOhBIAsg0QAsgcAGCPQggDLgjBSQgWA2g4A/Ig0Azg");
	this.shape_20.setTransform(133.7347,13.8271,1.2776,1.2776);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALiWQAVAIAIASQAhBGh3DNg");
	this.shape_21.setTransform(130.9299,13.2567,1.2776,1.2776);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuDsQg1hBgZg0QgXg4gYh2IgShvQAFiPAsAcQAZALASApIAQBBQgZAHgMAYQgYAxAyB0QAfBLAsBGIAXBug");
	this.shape_22.setTransform(-118.9842,13.7952,1.2776,1.2776);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWALQglhdAUgqQAIgUAWgGIA4EtQgthKgYhCg");
	this.shape_23.setTransform(-116.0748,13.2567,1.2776,1.2776);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjmTOIlFlaQiSilgyhyQglhXgHjWQgIkNgRhWIgnh9QgghcgKhYQgLh6AAhVQADhdASjYQB+gPC8g1QF0hnE8i8QAsgZhnBzIiCCQQgeAmEPhTQE5hgFci2QBZgvAAD1IgFErQgGFYgQB7IgGBFQgSBmguB8Qg2CUgSDrQgVDkgiBTQgxB2iHCaQhlB2iFB6IiDByQhdBGhGAAQhmAAhphjg");
	this.shape_24.setTransform(8.1099,56.1185,1.2776,1.2776);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgncMQhDhNgTgPIhfhUQhFg+hgg0IhphXIhMhLQhfgnhKhKIhChGIAGA6QACAsgMgKQh8hahWjwQhAirgmjeQhVA/huAeQh1Aeh3gQIB4haQCRhzAahUQgTAYgyAXQhdAviGgCQA8gpBNhtQCfjdASldIhlAYIhWAIQAAgKBthtQBuhqgBgOQAJlKBYkFQAuiFAqhHQAhg9A+hRQB4ieCOhVQCyhrCOgrQCPgsCfAKIDfgMICyAWQDUAnCoBMQCRBEBrBrQBLBNBCB0QBXCfAnCQQAWBZArEWQARDHA2CkIChGZQAEAfheg+QhkhChAhcQAMBxAjCPQAZCPgTDPQgTC6h6ECQhDCMg0BUQgJgPgHglIgQg0IgsBRQhABdhYA6QAAgXANg5QAJgtgFgTQgCgGgxBIQhIBZhbApIiKCUIhwBLIjGCOQgTAPhRBNQgsAqghAAIgBAAQgkAAgsg0g");
	this.shape_25.setTransform(-0.0567,-2.5849,1.2776,1.2776);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-239.7,396.9,479.4);


(lib.Анимация10копия = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD4CXQhNgkhohMQgegWgagcQgeASgZAVQhJA+hpA0QiUBKhhgOQiLgVg7hkQgTghgFggQgFgcAIAGIAegCQAngFAtgNQCOgnCMhjQApgdAygGQBQgJBDATQAiAKAWAfIAFgFQAkgjAwgJQBCgNBHAMQAvAJAsAcQA/ApBOAjQBxA0B0AbQgCABACAWQADAkgGAcQgXBjiLAUQgcAFgeAAQhpAAhzg2g");
	this.shape.setTransform(4.505,142.6139,1.2778,1.2778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvB/QglgKgQggQhFhlgcgvQgEgJABgMQACgYAWgOQAWgPAYAQQAMAJAHALIBNBtIALAMQAUAUAKAVQAPAhgSAXQgKANgUAAQgJAAgMgDg");
	this.shape_1.setTransform(31.4028,78.9034,1.2778,1.2778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhhB1QgSgXAPghQAKgVAUgUIALgMIBNhtIATgUQAYgQAWAPQAWAOACAYQABAMgEAJQgcAvhFBlQgQAgglAKQgMADgJAAQgUAAgKgNg");
	this.shape_2.setTransform(-21.7232,78.9034,1.2778,1.2778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDClQhFgcgchFQgchEAchDQAchEBFgdQBDgcBEAcQBFAdAcBEQAcBDgcBEQgcBFhFAcQgiAOgiAAQghAAgigOg");
	this.shape_3.setTransform(104.725,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0CBQg2gWgWg2QgWg1AWg1QAWg1A2gWQA0gWA2AWQA1AWAWA1QAWA1gWA1QgWA2g1AWQgbALgbAAQgaAAgagLg");
	this.shape_4.setTransform(-70.1099,9.9052,1.2778,1.2778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjEAKQhBhGhJhGIg8g4QAchLBVhBQA0goA/gdQAPgGAOAGQBgAtDICaQBzBYByBfQAJAIgCAMQgpDSicBwQgxAjg3AVIgsAOQgpifjNjmg");
	this.shape_5.setTransform(87.2923,14.8088,1.2778,1.2778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjFFJQichwgpjSQgCgMAJgIQByhfBzhYQDIiaBggtQAOgGAPAGQA+AdA1AoQBVBBAcBLQheBThnBxQjNDmgqCfQhGgOhOg4g");
	this.shape_6.setTransform(-77.421,14.8088,1.2778,1.2778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEDEDE").s().p("ApNNoQjWiGjEhSQAXhKAcg0QAyhZgBh1IijjRQgCi/gJjbQgRm2ghiLQAWhtA9hwQB9jgDPgOICOAQQCZAbA+AwIAAFTIBDgQQBUgSBVgLQETgiDAA4IAAk8IAmgRQAxgUA0gQQClgyCEAPQCPAQBLBrQAxBEBFDNIggHIQgdHjALCJQgXAdggAkQhBBKguApIALA2QAOBAATA2QAEAOAiBSQARApAAAjIAAABQkrCLl9EUQi/CKiDBuQkhkNkxi/g");
	this.shape_7.setTransform(3.5836,69.3573,1.2777,1.2777);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("APuTEQAAgjgRgqQghhRgFgPQgSg1gPhBIgLg2QAvgoBAhKQAhglAWgcQgLiJAdnkIAgnHQhFjNgxhFQhLhqiPgQQiEgQilAzQg0APgwAVIgnARIAAE8QjAg4kSAiQhWAKhUATIhDAQIAAlTQg+gxiZgaIiOgRQjPAOh8DgQg+BxgVBtQAgCKARG2QAJDbACDAICkDQQAAB2gyBYQgcA0gXBLQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg9AJg+IAGgyIgHpVIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREIQAPDqBJC7QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdg");
	this.shape_8.setTransform(3.663,-1.0789,1.2777,1.2777);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApOREQjViGjFhSQgzgVgugQQglgMgXgiIkbmsQgFgIABgJQABgIAGgHQBuhxA1jDQAQg8AJg+IAGgyIgHpWIEjmVQAvhBBHgkQDWhsC9hLQEnh1CTAAQCSAAERBlQCvBBDFBfQBGAiAvA8IFQG1IgHBWQgDCLAREJQAPDqBJC6QAsBwA1BIQAJANgHAOQhjC4hpCLQhEBag7A5QgQAQgZALIhAAdQkqCLl+EVQi/CKiDBuQkhkNkxi/g");
	this.shape_9.setTransform(3.663,41.34,1.2777,1.2777);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjNDMQhVhQAAh6QAAh5BVhSQBVhVB4AAQB4AABVBVQBWBSAAB5QAAB6hWBQQhTBTh6AAQh4AAhVhTg");
	this.shape_10.setTransform(-50.8775,9.0786,1.2777,1.2777);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjyDlQhlhdAAiIQAAiHBlheQBnheCLAAQCNAABlBeQBmBgAACFQAACHhmBeQhjBfiPABQiOgBhkhfg");
	this.shape_11.setTransform(-50.6858,10.8354,1.2777,1.2777);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjNDOQhYhSABh6QgBh3BYhVQBXhXB4AAQB5AABXBVQBUBXAAB2QAAB4hUBVQhWBUh6AAQh5AAhWhUg");
	this.shape_12.setTransform(62.4846,9.2064,1.2777,1.2777);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjxDlQhphdAAiHQAAh/BphgQBnhfCQgBQCRABBmBfQBrBjgPCAQgLCJhdBYQhfBYiMAAQiRAAhmhZg");
	this.shape_13.setTransform(62.8188,11.8576,1.2777,1.2777);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAQQgKgcABgUQACgaAZgXIAMCjQgWglgIgdg");
	this.shape_14.setTransform(-5.1485,115.701,1.2777,1.2777);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeJMQAAg0gZhXIg0hqQgkhLgHgwQgDgyAhgmIAjgfIAAjfQAAiFgeizIgeiTIBFAFIAYDYQATB/AAHPQAAAUARCQIAPCOIBDABIAfuaIgEi+IA7gMIAAB6IgoI7QAgArAHBSQAEBRgZAiQgYAiAABrIACBlg");
	this.shape_15.setTransform(6.5704,85.5797,1.2777,1.2777);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkC0IgplnICbAbIgLFNg");
	this.shape_16.setTransform(8.311,133.1733,1.2777,1.2777);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AovgfIBegPIBhgbQCNggDQAtICZgFQBRgPBKARQBOATDBBcIj0AIIjbAfg");
	this.shape_17.setTransform(-1.8465,143.0398,1.2777,1.2777);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AncADQhPhEg/hQIgyhEIFwBCQBzAYD8BHIE/g/IEbgFQg7BThwBSQjgCpjuAAIgNAAQkCAAjxjTg");
	this.shape_18.setTransform(1.9546,171.9276,1.2777,1.2777);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAnFZQhuAAh/g0QgjgNh6g/Qhpg6iejPQicjLAdADQBfANCfg2QCig3ASAAQBNAADtAsICFgPQCQgMAjAQIG0DEQgyBUiICHQhqBriNBCQiRBEiAAAIgGAAg");
	this.shape_19.setTransform(1.09,167.449,1.2777,1.2777);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKCzQAmg4AhhNQAthpgHg1QgIgpgkgLIAOhBIAsg0QAsgcAGCPQggDLgjBSQgWA2g4A/Ig0Azg");
	this.shape_20.setTransform(133.7472,13.8334,1.2777,1.2777);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALiWQAVAIAIASQAhBGh3DNg");
	this.shape_21.setTransform(130.9424,13.263,1.2777,1.2777);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuDsQg1hBgZg0QgXg4gYh2IgShvQAFiPAsAcQAZALASApIAQBBQgZAHgMAYQgYAxAyB0QAfBLAsBGIAXBug");
	this.shape_22.setTransform(-118.9778,13.8015,1.2777,1.2777);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWALQglhdAUgqQAIgUAWgGIA4EtQgthKgYhCg");
	this.shape_23.setTransform(-116.0683,13.263,1.2777,1.2777);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjmTOIlFlaQiSilgyhyQglhXgHjWQgIkNgRhWIgnh9QgghcgKhYQgLh6AAhVQADhdASjYQB+gPC8g1QF0hnE8i8QAsgZhnBzIiCCQQgeAmEPhTQE5hgFci2QBZgvAAD1IgFErQgGFYgQB7IgGBFQgSBmguB8Qg2CUgSDrQgVDkgiBTQgxB2iHCaQhlB2iFB6IiDByQhdBGhGAAQhmAAhphjg");
	this.shape_24.setTransform(8.1194,56.1259,1.2777,1.2777);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgncMQhDhNgTgPIhfhUQhFg+hgg0IhphXIhMhLQhfgnhKhKIhChGIAGA6QACAsgMgKQh8hahWjwQhAirgmjeQhVA/huAeQh1Aeh3gQIB4haQCRhzAahUQgTAYgyAXQhdAviGgCQA8gpBNhtQCfjdASldIhlAYIhWAIQAAgKBthtQBuhqgBgOQAJlKBYkFQAuiFAqhHQAhg9A+hRQB4ieCOhVQCyhrCOgrQCPgsCfAKIDfgMICyAWQDUAnCoBMQCRBEBrBrQBLBNBCB0QBXCfAnCQQAWBZArEWQARDHA2CkIChGZQAEAfheg+QhkhChAhcQAMBxAjCPQAZCPgTDPQgTC6h6ECQhDCMg0BUQgJgPgHglIgQg0IgsBRQhABdhYA6QAAgXANg5QAJgtgFgTQgCgGgxBIQhIBZhbApIiKCUIhwBLIjGCOQgTAPhRBNQgsAqghAAIgBAAQgkAAgsg0g");
	this.shape_25.setTransform(-0.0474,-2.579,1.2777,1.2777);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-239.7,397,479.4);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgFA7IgFgIQgLgggKg1QgDgPALgIQAKgJAPAGIAGAIQAEAFABAEQAOAxAFAiIAAAGQgDANgNADIgIABQgHAAgGgEg");
	this.shape.setTransform(9.2834,31.6868,1.8657,1.8657);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgjAxQgJgCgHgEQgCAAgCgIIgCgNQAIgKAFgEQAsghAWgQQAKgHAJAAQALABAFAKQADAHgCAKQgCALgFAEQgfAbgnAYQgFADgHAAIgEAAg");
	this.shape_1.setTransform(-24.6281,19.8196,1.8657,1.8657);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnC+QgEAAgFgIQgEgGgBgHIgahsQgQhAgMgrQgFgRgNgVIgXglQgRgZAXgKQBEgcAfgHQAJgCANAFQANAGAGAHQAyBFBVB6QAHAMAHAQIAKAXQgSA2hCAoQgzAfgoAAQgLAAgKgCg");
	this.shape_2.setTransform(63.0557,3.5053,1.8657,1.8657);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah3CSQhDg7gDhOQgCgUADg0IAQgLQAKgHAHgDQAbgIBdgYIB6giQAdgKAUAUQArAqAMA3QABAGgFAJQgFAIgEABQhGARhIAxQggAWhZBMQgLAKgHAAQgHAAgJgJg");
	this.shape_3.setTransform(-42.6721,-32.6804,1.8657,1.8657);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADYCTQghgCgcgUQgmgcgrg0QhDhOhhATQgtAIgUABIgkABIgcgBQghgNgTgQQgUgRgKgXQgFgKAAgOQABgPAFgIQAHgKAjgCIA5gCQAigBAWgEQA0gLAmAIQAtAJAhAiQADADAHADQAGACAGgBQBagHA7BRQApA3AxAcQAYANgBAWQgCAWgZAMQgeAOgdAAIgFAAg");
	this.shape_4.setTransform(-23.1555,71.4809,1.8657,1.8657);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDDDDD").s().p("Aj/KDQgJgCgBgCIgLgSIgMgVQhyjWini1QgSgUABgJQABgFARgRIAdgfIAcgiQASgVgMgdIgJgVQgWgrACgfQAAgOAGgQIANggQAXhHAfhsIAzi1QAHgYANgQQAcgiA8hBQAXgaAgAAQARAEAYAAIAqAAQBwBMAkAcQADACABAKQAAAKgCAIIgeBgQgEANAFAGQAGAGAQACQB5AKB4BOQAMAJAIgBQAIgBAFgNQAXg0AKgcQALgcAHgFQAHgFAeADQBBAGBHAMQAYADAbAUQAXARAVAbQAHAJACARIABAbIAAAaQAAARACAJQAHAqgMAtQgJAjgXAvIhECJQglBNgWA/QgMAwgWAbQgXAcgkALQgZAKgJATQgJASADAbQADAeAAAeQAAAUgGADIggAHQhzAPh6AkQhnAfh9AzQgWAIgMADIgEABIgEgBgAiRFOQAoAPAiAoQAoAxAoAfQAcAUAhACQAgABAggPQAagNABgWQABgVgYgNQgwgcgqg4Qg7hRhZAHQgFABgGgCQgHgDgEgDQgigigsgJQgngIg0ALQgVAEgjABIg5ACQgjACgHAKQgFAIAAAOQAAAOAEALQAJAVAUARQATAPAiAPIAcABIAkAAQAXgBAqgIQATgEASAAQAdAAAZAJgAAEBHQgKAIADAPQAIA1AMAhQACAGAKAFIASAJIAKgPQAFgKgBgGQgDgTgQhBQgBgEgFgFIgGgIQgGgCgGAAQgIAAgGAFgAEQjUQgcAHhHAcQgXAKARAZIAYAlQANAVAEARQAVBGAhCRQACAHAEAGQAEAIAEAAQAwALBBgoQBCgpASg2IgKgXQgHgQgHgKQhQh1g4hLQgGgHgNgGQgJgDgHAAIgGAAgAiDAYQgXAQgsAiIgNAOIACANQABAIADABQAHAEAJABQAKABAGgDQAlgWAigfQAFgEACgLQACgKgDgHQgFgKgKgBIgBAAQgJAAgKAHgAikluIg9ASIg9AQIg8AQQgkAJgYAIQgHACgKAHIgQALQgDA2ABATQADBRBDA5QAJAIAHAAQAHgBALgIQBYhLAigXQBHgyBHgRQAEgBAFgJQAFgJgBgFQgMg4grgqQgNgNgSAAQgIAAgKADg");
	this.shape_5.setTransform(4.0373,7.605,1.8657,1.8657);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai2KqIhVgfQgGgDgHgGQhJiNiNisIh9iQIg5jzQByg8BVjKQAbg/AVhFIAPg5IDniXICrgTQC6gNBRAdQBOAcCMCDQBGBCA2A7IBQEbQhpDUgFCmQgCBTATAoIjXCYQh2AHjFA0QhxAfhoAjQgEACgFAAIgKgCg");
	this.shape_6.setTransform(-1.1954,-1.489,1.8657,1.8657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-129.1,252.6,256.8);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.sprites();
	this.instance.setTransform(-774.3,-743.9,1.6869,1.6869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-774.3,-743.9,1548.6,1487.9);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.sprites();
	this.instance.setTransform(-774.3,-743.9,1.6869,1.6869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-774.3,-743.9,1548.6,1487.9);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_4
	this.instance = new lib.Анимация30("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.6,-239.7,397,479.4);


// stage content:
(lib.Безымянный2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [239];
	// timeline functions:
	this.frame_239 = function() {
		playSound("untitled");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(181));

	// Слой_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_1 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_2 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_3 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_4 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_5 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_6 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_7 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_8 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_9 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_10 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_11 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_12 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_13 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_14 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_15 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_16 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_17 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_18 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_19 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_20 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_21 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_22 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_23 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_24 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_25 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_26 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_27 = new cjs.Graphics().p("AueMXQmAlHAAnQIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHQmAFHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_28 = new cjs.Graphics().p("AueMXQmAlIAAnPIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHPmAFIIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_29 = new cjs.Graphics().p("AueMXQmAlIAAnPIAAAAQAAnPGAlHIAAAAQGAlIIeABIAAAAQIfgBGAFIIAAAAQGAFHAAHPIAAAAQAAHPmAFIIAAAAQmAFIofgBIAAAAQoeABmAlIg");
	var mask_graphics_30 = new cjs.Graphics().p("AueMXQmAlIAAnPIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHPmAFIIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_31 = new cjs.Graphics().p("AueMXQmAlIAAnPIAAAAQAAnPGAlHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFHAAHPIAAAAQAAHPmAFIIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_32 = new cjs.Graphics().p("AueMXQmAlIAAnPIAAAAQAAnOGAlIIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQGAFIAAHOIAAAAQAAHPmAFIIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_33 = new cjs.Graphics().p("AueMXQl/lHAAnQIAAAAQAAnPF/lHIAAAAQGAlIIeABIAAAAQIfgBGAFIIAAAAQF/FHAAHPIAAAAQAAHQl/FHIAAAAQmAFIofgBIAAAAQoeABmAlIg");
	var mask_graphics_34 = new cjs.Graphics().p("AueMXQl/lHAAnQIAAAAQAAnOF/lIIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQF/FIAAHOIAAAAQAAHQl/FHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_35 = new cjs.Graphics().p("AueMXQl/lHAAnQIAAAAQAAnOF/lIIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQF/FIAAHOIAAAAQAAHQl/FHIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_36 = new cjs.Graphics().p("AueMXQl/lIAAnPIAAAAQAAnPF/lHIAAAAQGAlHIegBIAAAAQIfABGAFHIAAAAQF/FHAAHPIAAAAQAAHPl/FIIAAAAQmAFHofABIAAAAQoegBmAlHg");
	var mask_graphics_37 = new cjs.Graphics().p("AudMXQmAlIAAnPIAAAAQAAnPGAlHIAAAAQF/lHIegBIAAAAQIfABF/FHIAAAAQGAFHAAHPIAAAAQAAHPmAFIIAAAAQl/FHofABIAAAAQoegBl/lHg");
	var mask_graphics_38 = new cjs.Graphics().p("AudMXQmAlHAAnQIAAAAQAAnOGAlIIAAAAQF/lHIeAAIAAAAQIfAAF/FHIAAAAQGAFIAAHOIAAAAQAAHQmAFHIAAAAQl/FHofAAIAAAAQoeAAl/lHg");
	var mask_graphics_39 = new cjs.Graphics().p("AudMXQl/lHAAnQIAAAAQAAnOF/lIIAAAAQF/lIIeABIAAAAQIfgBF/FIIAAAAQF/FIAAHOIAAAAQAAHQl/FHIAAAAQl/FIofgBIAAAAQoeABl/lIg");
	var mask_graphics_40 = new cjs.Graphics().p("AudMXQl/lIAAnPIAAAAQAAnPF/lHIAAAAQGAlIIdABIAAAAQIegBGAFIIAAAAQF/FHAAHPIAAAAQAAHPl/FIIAAAAQmAFIoegBIAAAAQodABmAlIg");
	var mask_graphics_41 = new cjs.Graphics().p("AucMXQl/lIAAnPIAAAAQAAnPF/lHIAAAAQF/lHIdAAIAAAAQIeAAF/FHIAAAAQF/FHAAHPIAAAAQAAHPl/FIIAAAAQl/FHoeAAIAAAAQodAAl/lHg");
	var mask_graphics_42 = new cjs.Graphics().p("AucMXQl+lIAAnPIAAAAQAAnPF+lHIAAAAQF/lIIdABIAAAAQIegBF/FIIAAAAQF+FHAAHPIAAAAQAAHPl+FIIAAAAQl/FIoegBIAAAAQodABl/lIg");
	var mask_graphics_43 = new cjs.Graphics().p("AubMXQl/lHAAnQIAAAAQAAnOF/lIIAAAAQF+lHIdAAIAAAAQIeAAF+FHIAAAAQF/FIAAHOIAAAAQAAHQl/FHIAAAAQl+FHoeAAIAAAAQodAAl+lHg");
	var mask_graphics_44 = new cjs.Graphics().p("AuaMXQl+lHAAnQIAAAAQAAnPF+lHIAAAAQF+lIIcABIAAAAQIdgBF+FIIAAAAQF+FHAAHPIAAAAQAAHQl+FHIAAAAQl+FIodgBIAAAAQocABl+lIg");
	var mask_graphics_45 = new cjs.Graphics().p("AuZMXQl+lHAAnQIAAAAQAAnOF+lIIAAAAQF+lHIbgBIAAAAQIcABF+FHIAAAAQF+FIAAHOIAAAAQAAHQl+FHIAAAAQl+FHocABIAAAAQobgBl+lHg");
	var mask_graphics_46 = new cjs.Graphics().p("AuYMXQl+lHAAnQIAAAAQAAnOF+lIIAAAAQF9lHIbgBIAAAAQIcABF9FHIAAAAQF+FIAAHOIAAAAQAAHQl+FHIAAAAQl9FHocABIAAAAQobgBl9lHg");
	var mask_graphics_47 = new cjs.Graphics().p("AuYMXQl9lHAAnQIAAAAQAAnOF9lIIAAAAQF9lHIbAAIAAAAQIcAAF9FHIAAAAQF9FIAAHOIAAAAQAAHQl9FHIAAAAQl9FHocAAIAAAAQobAAl9lHg");
	var mask_graphics_48 = new cjs.Graphics().p("AuXMXQl9lHAAnQIAAAAQAAnOF9lIIAAAAQF9lHIagBIAAAAQIbABF9FHIAAAAQF9FIAAHOIAAAAQAAHQl9FHIAAAAQl9FHobABIAAAAQoagBl9lHg");
	var mask_graphics_49 = new cjs.Graphics().p("AuXMXQl8lIAAnPIAAAAQAAnPF8lHIAAAAQF9lHIaAAIAAAAQIbAAF9FHIAAAAQF8FHAAHPIAAAAQAAHPl8FIIAAAAQl9FHobAAIAAAAQoaAAl9lHg");
	var mask_graphics_50 = new cjs.Graphics().p("AuWMXQl9lIAAnPIAAAAQAAnOF9lIIAAAAQF8lHIagBIAAAAQIbABF8FHIAAAAQF9FIAAHOIAAAAQAAHPl9FIIAAAAQl8FHobABIAAAAQoagBl8lHg");
	var mask_graphics_51 = new cjs.Graphics().p("AuWMXQl8lHAAnQIAAAAQAAnPF8lHIAAAAQF8lIIaABIAAAAQIbgBF8FIIAAAAQF8FHAAHPIAAAAQAAHQl8FHIAAAAQl8FIobgBIAAAAQoaABl8lIg");
	var mask_graphics_52 = new cjs.Graphics().p("AuWMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF9lIIZABIAAAAQIagBF9FIIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl9FIoagBIAAAAQoZABl9lIg");
	var mask_graphics_53 = new cjs.Graphics().p("AuWMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF9lHIZAAIAAAAQIaAAF9FHIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl9FHoaAAIAAAAQoZAAl9lHg");
	var mask_graphics_54 = new cjs.Graphics().p("AuVMXQl9lHAAnQIAAAAQAAnPF9lHIAAAAQF8lIIZABIAAAAQIagBF8FIIAAAAQF9FHAAHPIAAAAQAAHQl9FHIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_55 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnPF8lHIAAAAQF8lIIZABIAAAAQIagBF8FIIAAAAQF8FHAAHPIAAAAQAAHQl8FHIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_56 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnPF8lHIAAAAQF8lIIZABIAAAAQIagBF8FIIAAAAQF8FHAAHPIAAAAQAAHQl8FHIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_57 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF8lHIZgBIAAAAQIaABF8FHIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl8FHoaABIAAAAQoZgBl8lHg");
	var mask_graphics_58 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF8lHIZAAIAAAAQIaAAF8FHIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_59 = new cjs.Graphics().p("AuVMXQl8lIAAnPIAAAAQAAnPF8lHIAAAAQF8lIIZABIAAAAQIagBF8FIIAAAAQF8FHAAHPIAAAAQAAHPl8FIIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_60 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnPF8lHIAAAAQF8lIIZABIAAAAQIagBF8FIIAAAAQF8FHAAHPIAAAAQAAHQl8FHIAAAAQl8FIoagBIAAAAQoZABl8lIg");
	var mask_graphics_61 = new cjs.Graphics().p("AuVMXQl8lIAAnPIAAAAQAAnPF8lHIAAAAQF8lHIZgBIAAAAQIaABF8FHIAAAAQF8FHAAHPIAAAAQAAHPl8FIIAAAAQl8FHoaABIAAAAQoZgBl8lHg");
	var mask_graphics_62 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF8lHIZgBIAAAAQIaABF8FHIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl8FHoaABIAAAAQoZgBl8lHg");
	var mask_graphics_63 = new cjs.Graphics().p("AuVMXQl8lHAAnQIAAAAQAAnOF8lIIAAAAQF8lHIZgBIAAAAQIaABF8FHIAAAAQF8FIAAHOIAAAAQAAHQl8FHIAAAAQl8FHoaABIAAAAQoZgBl8lHg");
	var mask_graphics_72 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFplSH/AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn/AAlplSg");
	var mask_graphics_99 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFplSH/AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn/AAlplSg");
	var mask_graphics_100 = new cjs.Graphics().p("AtoMwQlqlSAAneIAAAAQAAndFqlSIAAAAQFplRH/AAIAAAAQIAAAFpFRIAAAAQFqFSAAHdIAAAAQAAHelqFSIAAAAQlpFRoAAAIAAAAQn/AAlplRg");
	var mask_graphics_101 = new cjs.Graphics().p("AtpMvQlqlRAAneIAAAAQAAndFqlRIAAAAQFqlSH/AAIAAAAQIAAAFqFSIAAAAQFqFRAAHdIAAAAQAAHelqFRIAAAAQlqFSoAAAIAAAAQn/AAlqlSg");
	var mask_graphics_102 = new cjs.Graphics().p("AtqMvQlqlRAAneIAAAAQAAndFqlRIAAAAQFqlRIAAAIAAAAQIBAAFqFRIAAAAQFqFRAAHdIAAAAQAAHelqFRIAAAAQlqFRoBAAIAAAAQoAAAlqlRg");
	var mask_graphics_103 = new cjs.Graphics().p("AtqMvQlrlSAAndIAAAAQAAncFrlSIAAAAQFqlRIAAAIAAAAQIBAAFqFRIAAAAQFrFSAAHcIAAAAQAAHdlrFSIAAAAQlqFRoBAAIAAAAQoAAAlqlRg");
	var mask_graphics_104 = new cjs.Graphics().p("AtrMuQlrlRAAndIAAAAQAAncFrlRIAAAAQFrlRIAAAIAAAAQIBAAFrFRIAAAAQFrFRAAHcIAAAAQAAHdlrFRIAAAAQlrFRoBAAIAAAAQoAAAlrlRg");
	var mask_graphics_105 = new cjs.Graphics().p("AtsMuQlrlRAAndIAAAAQAAncFrlRIAAAAQFrlRIBAAIAAAAQICAAFrFRIAAAAQFrFRAAHcIAAAAQAAHdlrFRIAAAAQlrFRoCAAIAAAAQoBAAlrlRg");
	var mask_graphics_106 = new cjs.Graphics().p("AtsMuQlslRAAndIAAAAQAAncFslRIAAAAQFrlQIBAAIAAAAQICAAFrFQIAAAAQFsFRAAHcIAAAAQAAHdlsFRIAAAAQlrFQoCAAIAAAAQoBAAlrlQg");
	var mask_graphics_107 = new cjs.Graphics().p("AttMtQlslRAAncIAAAAQAAnbFslRIAAAAQFrlRICAAIAAAAQIDAAFrFRIAAAAQFsFRAAHbIAAAAQAAHclsFRIAAAAQlrFRoDAAIAAAAQoCAAlrlRg");
	var mask_graphics_108 = new cjs.Graphics().p("AtuMtQlslRAAncIAAAAQAAnbFslRIAAAAQFslQICAAIAAAAQIDAAFsFQIAAAAQFsFRAAHbIAAAAQAAHclsFRIAAAAQlsFQoDAAIAAAAQoCAAlslQg");
	var mask_graphics_109 = new cjs.Graphics().p("AtuMsQlslQAAncIAAAAQAAnbFslQIAAAAQFslRICAAIAAAAQIDAAFsFRIAAAAQFsFQAAHbIAAAAQAAHclsFQIAAAAQlsFRoDAAIAAAAQoCAAlslRg");
	var mask_graphics_110 = new cjs.Graphics().p("AtvMsQlslQAAncIAAAAQAAnbFslQIAAAAQFslQIDAAIAAAAQIEAAFsFQIAAAAQFsFQAAHbIAAAAQAAHclsFQIAAAAQlsFQoEAAIAAAAQoDAAlslQg");
	var mask_graphics_111 = new cjs.Graphics().p("AtwMsQlslQAAncIAAAAQAAnbFslQIAAAAQFtlQIDAAIAAAAQIEAAFtFQIAAAAQFsFQAAHbIAAAAQAAHclsFQIAAAAQltFQoEAAIAAAAQoDAAltlQg");
	var mask_graphics_112 = new cjs.Graphics().p("AtwMrQltlQAAnbIAAAAQAAnaFtlQIAAAAQFslQIEAAIAAAAQIFAAFsFQIAAAAQFtFQAAHaIAAAAQAAHbltFQIAAAAQlsFQoFAAIAAAAQoEAAlslQg");
	var mask_graphics_113 = new cjs.Graphics().p("AtxMrQltlQAAnbIAAAAQAAnaFtlQIAAAAQFtlQIEAAIAAAAQIFAAFtFQIAAAAQFtFQAAHaIAAAAQAAHbltFQIAAAAQltFQoFAAIAAAAQoEAAltlQg");
	var mask_graphics_114 = new cjs.Graphics().p("AtyMrQltlQAAnbIAAAAQAAnaFtlQIAAAAQFulPIEAAIAAAAQIFAAFuFPIAAAAQFtFQAAHaIAAAAQAAHbltFQIAAAAQluFPoFAAIAAAAQoEAAlulPg");
	var mask_graphics_115 = new cjs.Graphics().p("AtyMqQlulPAAnbIAAAAQAAnaFulPIAAAAQFtlQIFAAIAAAAQIGAAFtFQIAAAAQFuFPAAHaIAAAAQAAHbluFPIAAAAQltFQoGAAIAAAAQoFAAltlQg");
	var mask_graphics_116 = new cjs.Graphics().p("AtzMqQlulPAAnbIAAAAQAAnaFulPIAAAAQFulPIFAAIAAAAQIGAAFuFPIAAAAQFuFPAAHaIAAAAQAAHbluFPIAAAAQluFPoGAAIAAAAQoFAAlulPg");
	var mask_graphics_117 = new cjs.Graphics().p("At0MpQlulPAAnaIAAAAQAAnZFulPIAAAAQFulQIGAAIAAAAQIHAAFuFQIAAAAQFuFPAAHZIAAAAQAAHaluFPIAAAAQluFQoHAAIAAAAQoGAAlulQg");
	var mask_graphics_118 = new cjs.Graphics().p("At0MpQlvlPAAnaIAAAAQAAnZFvlPIAAAAQFulPIGAAIAAAAQIHAAFuFPIAAAAQFvFPAAHZIAAAAQAAHalvFPIAAAAQluFPoHAAIAAAAQoGAAlulPg");
	var mask_graphics_119 = new cjs.Graphics().p("At1MpQlvlPAAnaIAAAAQAAnZFvlPIAAAAQFvlOIGAAIAAAAQIHAAFvFOIAAAAQFvFPAAHZIAAAAQAAHalvFPIAAAAQlvFOoHAAIAAAAQoGAAlvlOg");
	var mask_graphics_120 = new cjs.Graphics().p("At2MoQlvlOAAnaIAAAAQAAnZFvlOIAAAAQFvlPIHAAIAAAAQIIAAFvFPIAAAAQFvFOAAHZIAAAAQAAHalvFOIAAAAQlvFPoIAAIAAAAQoHAAlvlPg");
	var mask_graphics_121 = new cjs.Graphics().p("At2MoQlwlPAAnZIAAAAQAAnYFwlPIAAAAQFvlOIHAAIAAAAQIIAAFvFOIAAAAQFwFPAAHYIAAAAQAAHZlwFPIAAAAQlvFOoIAAIAAAAQoHAAlvlOg");
	var mask_graphics_122 = new cjs.Graphics().p("At3MoQlwlPAAnZIAAAAQAAnYFwlPIAAAAQFwlOIHAAIAAAAQIIAAFwFOIAAAAQFwFPAAHYIAAAAQAAHZlwFPIAAAAQlwFOoIAAIAAAAQoHAAlwlOg");
	var mask_graphics_123 = new cjs.Graphics().p("At4MnQlwlOAAnZIAAAAQAAnYFwlOIAAAAQFwlOIIAAIAAAAQIJAAFwFOIAAAAQFwFOAAHYIAAAAQAAHZlwFOIAAAAQlwFOoJAAIAAAAQoIAAlwlOg");
	var mask_graphics_124 = new cjs.Graphics().p("At4MnQlxlOAAnZIAAAAQAAnYFxlOIAAAAQFwlOIIAAIAAAAQIJAAFwFOIAAAAQFxFOAAHYIAAAAQAAHZlxFOIAAAAQlwFOoJAAIAAAAQoIAAlwlOg");
	var mask_graphics_125 = new cjs.Graphics().p("At5MmQlwlNAAnZIAAAAQAAnYFwlNIAAAAQFwlOIJAAIAAAAQIKAAFwFOIAAAAQFwFNAAHYIAAAAQAAHZlwFNIAAAAQlwFOoKAAIAAAAQoJAAlwlOg");
	var mask_graphics_126 = new cjs.Graphics().p("At6MmQlwlOAAnYIAAAAQAAnXFwlOIAAAAQFxlOIJAAIAAAAQIKAAFxFOIAAAAQFwFOAAHXIAAAAQAAHYlwFOIAAAAQlxFOoKAAIAAAAQoJAAlxlOg");
	var mask_graphics_127 = new cjs.Graphics().p("At6MmQlxlOAAnYIAAAAQAAnXFxlOIAAAAQFxlNIJAAIAAAAQIKAAFxFNIAAAAQFxFOAAHXIAAAAQAAHYlxFOIAAAAQlxFNoKAAIAAAAQoJAAlxlNg");
	var mask_graphics_128 = new cjs.Graphics().p("At7MlQlxlNAAnYIAAAAQAAnXFxlNIAAAAQFxlOIKAAIAAAAQILAAFxFOIAAAAQFxFNAAHXIAAAAQAAHYlxFNIAAAAQlxFOoLAAIAAAAQoKAAlxlOg");
	var mask_graphics_129 = new cjs.Graphics().p("At8MlQlxlNAAnYIAAAAQAAnXFxlNIAAAAQFylNIKAAIAAAAQILAAFyFNIAAAAQFxFNAAHXIAAAAQAAHYlxFNIAAAAQlyFNoLAAIAAAAQoKAAlylNg");
	var mask_graphics_130 = new cjs.Graphics().p("At8MlQlylOAAnXIAAAAQAAnWFylOIAAAAQFxlNILAAIAAAAQIMAAFxFNIAAAAQFyFOAAHWIAAAAQAAHXlyFOIAAAAQlxFNoMAAIAAAAQoLAAlxlNg");
	var mask_graphics_131 = new cjs.Graphics().p("At9MkQlylNAAnXIAAAAQAAnWFylNIAAAAQFylNILAAIAAAAQIMAAFyFNIAAAAQFyFNAAHWIAAAAQAAHXlyFNIAAAAQlyFNoMAAIAAAAQoLAAlylNg");
	var mask_graphics_132 = new cjs.Graphics().p("At+MkQlylNAAnXIAAAAQAAnWFylNIAAAAQFzlNILAAIAAAAQIMAAFzFNIAAAAQFyFNAAHWIAAAAQAAHXlyFNIAAAAQlzFNoMAAIAAAAQoLAAlzlNg");
	var mask_graphics_133 = new cjs.Graphics().p("At+MkQlzlNAAnXIAAAAQAAnWFzlNIAAAAQFylMIMAAIAAAAQINAAFyFMIAAAAQFzFNAAHWIAAAAQAAHXlzFNIAAAAQlyFMoNAAIAAAAQoMAAlylMg");
	var mask_graphics_134 = new cjs.Graphics().p("At/MjQlzlMAAnXIAAAAQAAnWFzlMIAAAAQFzlNIMAAIAAAAQINAAFzFNIAAAAQFzFMAAHWIAAAAQAAHXlzFMIAAAAQlzFNoNAAIAAAAQoMAAlzlNg");
	var mask_graphics_135 = new cjs.Graphics().p("AuAMjQlzlNAAnWIAAAAQAAnVFzlNIAAAAQFzlMINAAIAAAAQIOAAFzFMIAAAAQFzFNAAHVIAAAAQAAHWlzFNIAAAAQlzFMoOAAIAAAAQoNAAlzlMg");
	var mask_graphics_136 = new cjs.Graphics().p("AuAMiQl0lMAAnWIAAAAQAAnVF0lMIAAAAQFzlNINAAIAAAAQIOAAFzFNIAAAAQF0FMAAHVIAAAAQAAHWl0FMIAAAAQlzFNoOAAIAAAAQoNAAlzlNg");
	var mask_graphics_137 = new cjs.Graphics().p("AuBMiQl0lMAAnWIAAAAQAAnVF0lMIAAAAQF0lMINAAIAAAAQIOAAF0FMIAAAAQF0FMAAHVIAAAAQAAHWl0FMIAAAAQl0FMoOAAIAAAAQoNAAl0lMg");
	var mask_graphics_138 = new cjs.Graphics().p("AuCMiQl0lMAAnWIAAAAQAAnVF0lMIAAAAQF0lMIOAAIAAAAQIPAAF0FMIAAAAQF0FMAAHVIAAAAQAAHWl0FMIAAAAQl0FMoPAAIAAAAQoOAAl0lMg");
	var mask_graphics_139 = new cjs.Graphics().p("AuCMhQl1lLAAnWIAAAAQAAnVF1lLIAAAAQF0lMIOAAIAAAAQIPAAF0FMIAAAAQF1FLAAHVIAAAAQAAHWl1FLIAAAAQl0FMoPAAIAAAAQoOAAl0lMg");
	var mask_graphics_140 = new cjs.Graphics().p("AuDMhQl1lMAAnVIAAAAQAAnUF1lMIAAAAQF1lMIOAAIAAAAQIPAAF1FMIAAAAQF1FMAAHUIAAAAQAAHVl1FMIAAAAQl1FMoPAAIAAAAQoOAAl1lMg");
	var mask_graphics_141 = new cjs.Graphics().p("AuEMhQl1lMAAnVIAAAAQAAnUF1lMIAAAAQF1lLIPAAIAAAAQIQAAF1FLIAAAAQF1FMAAHUIAAAAQAAHVl1FMIAAAAQl1FLoQAAIAAAAQoPAAl1lLg");
	var mask_graphics_142 = new cjs.Graphics().p("AuEMgQl1lLAAnVIAAAAQAAnUF1lLIAAAAQF1lMIPAAIAAAAQIQAAF1FMIAAAAQF1FLAAHUIAAAAQAAHVl1FLIAAAAQl1FMoQAAIAAAAQoPAAl1lMg");
	var mask_graphics_143 = new cjs.Graphics().p("AuFMgQl1lLAAnVIAAAAQAAnUF1lLIAAAAQF1lLIQAAIAAAAQIRAAF1FLIAAAAQF1FLAAHUIAAAAQAAHVl1FLIAAAAQl1FLoRAAIAAAAQoQAAl1lLg");
	var mask_graphics_144 = new cjs.Graphics().p("AuGMfQl1lLAAnUIAAAAQAAnTF1lLIAAAAQF2lLIQAAIAAAAQIRAAF2FLIAAAAQF1FLAAHTIAAAAQAAHUl1FLIAAAAQl2FLoRAAIAAAAQoQAAl2lLg");
	var mask_graphics_145 = new cjs.Graphics().p("AuGMfQl2lLAAnUIAAAAQAAnTF2lLIAAAAQF2lLIQAAIAAAAQIRAAF2FLIAAAAQF2FLAAHTIAAAAQAAHUl2FLIAAAAQl2FLoRAAIAAAAQoQAAl2lLg");
	var mask_graphics_146 = new cjs.Graphics().p("AuHMfQl2lLAAnUIAAAAQAAnTF2lLIAAAAQF2lKIRAAIAAAAQISAAF2FKIAAAAQF2FLAAHTIAAAAQAAHUl2FLIAAAAQl2FKoSAAIAAAAQoRAAl2lKg");
	var mask_graphics_147 = new cjs.Graphics().p("AuIMeQl2lKAAnUIAAAAQAAnTF2lKIAAAAQF3lLIRAAIAAAAQISAAF3FLIAAAAQF2FKAAHTIAAAAQAAHUl2FKIAAAAQl3FLoSAAIAAAAQoRAAl3lLg");
	var mask_graphics_148 = new cjs.Graphics().p("AuIMeQl3lKAAnUIAAAAQAAnTF3lKIAAAAQF2lKISAAIAAAAQITAAF2FKIAAAAQF3FKAAHTIAAAAQAAHUl3FKIAAAAQl2FKoTAAIAAAAQoSAAl2lKg");
	var mask_graphics_149 = new cjs.Graphics().p("AuJMeQl3lLAAnTIAAAAQAAnSF3lLIAAAAQF3lKISAAIAAAAQITAAF3FKIAAAAQF3FLAAHSIAAAAQAAHTl3FLIAAAAQl3FKoTAAIAAAAQoSAAl3lKg");
	var mask_graphics_150 = new cjs.Graphics().p("AuKMdQl3lKAAnTIAAAAQAAnSF3lKIAAAAQF4lKISAAIAAAAQITAAF4FKIAAAAQF3FKAAHSIAAAAQAAHTl3FKIAAAAQl4FKoTAAIAAAAQoSAAl4lKg");
	var mask_graphics_151 = new cjs.Graphics().p("AuKMdQl4lKAAnTIAAAAQAAnSF4lKIAAAAQF3lKITAAIAAAAQIUAAF3FKIAAAAQF4FKAAHSIAAAAQAAHTl4FKIAAAAQl3FKoUAAIAAAAQoTAAl3lKg");
	var mask_graphics_152 = new cjs.Graphics().p("AuLMcQl4lJAAnTIAAAAQAAnSF4lJIAAAAQF4lKITAAIAAAAQIUAAF4FKIAAAAQF4FJAAHSIAAAAQAAHTl4FJIAAAAQl4FKoUAAIAAAAQoTAAl4lKg");
	var mask_graphics_153 = new cjs.Graphics().p("AuMMcQl4lJAAnTIAAAAQAAnRF4lKIAAAAQF4lKIUAAIAAAAQIVAAF4FKIAAAAQF4FKAAHRIAAAAQAAHTl4FJIAAAAQl4FKoVAAIAAAAQoUAAl4lKg");
	var mask_graphics_154 = new cjs.Graphics().p("AuMMcQl5lKAAnSIAAAAQAAnRF5lKIAAAAQF4lJIUAAIAAAAQIVAAF4FJIAAAAQF5FKAAHRIAAAAQAAHSl5FKIAAAAQl4FJoVAAIAAAAQoUAAl4lJg");
	var mask_graphics_155 = new cjs.Graphics().p("AuNMbQl5lJAAnSIAAAAQAAnRF5lJIAAAAQF5lKIUAAIAAAAQIVAAF5FKIAAAAQF5FJAAHRIAAAAQAAHSl5FJIAAAAQl5FKoVAAIAAAAQoUAAl5lKg");
	var mask_graphics_156 = new cjs.Graphics().p("AuOMbQl5lJAAnSIAAAAQAAnRF5lJIAAAAQF5lJIVAAIAAAAQIWAAF5FJIAAAAQF5FJAAHRIAAAAQAAHSl5FJIAAAAQl5FJoWAAIAAAAQoVAAl5lJg");
	var mask_graphics_157 = new cjs.Graphics().p("AuOMbQl6lJAAnSIAAAAQAAnRF6lJIAAAAQF5lJIVAAIAAAAQIWAAF5FJIAAAAQF6FJAAHRIAAAAQAAHSl6FJIAAAAQl5FJoWAAIAAAAQoVAAl5lJg");
	var mask_graphics_158 = new cjs.Graphics().p("AuPMaQl5lJAAnRIAAAAQAAnQF5lJIAAAAQF6lJIVAAIAAAAQIWAAF6FJIAAAAQF5FJAAHQIAAAAQAAHRl5FJIAAAAQl6FJoWAAIAAAAQoVAAl6lJg");
	var mask_graphics_159 = new cjs.Graphics().p("AuQMaQl5lJAAnRIAAAAQAAnQF5lJIAAAAQF6lJIWAAIAAAAQIXAAF6FJIAAAAQF5FJAAHQIAAAAQAAHRl5FJIAAAAQl6FJoXAAIAAAAQoWAAl6lJg");
	var mask_graphics_160 = new cjs.Graphics().p("AuQMaQl6lJAAnRIAAAAQAAnQF6lJIAAAAQF6lIIWAAIAAAAQIXAAF6FIIAAAAQF6FJAAHQIAAAAQAAHRl6FJIAAAAQl6FIoXAAIAAAAQoWAAl6lIg");
	var mask_graphics_161 = new cjs.Graphics().p("AuRMZQl6lIAAnRIAAAAQAAnQF6lIIAAAAQF6lJIXAAIAAAAQIYAAF6FJIAAAAQF6FIAAHQIAAAAQAAHRl6FIIAAAAQl6FJoYAAIAAAAQoXAAl6lJg");
	var mask_graphics_162 = new cjs.Graphics().p("AuSMZQl6lIAAnRIAAAAQAAnQF6lIIAAAAQF7lIIXAAIAAAAQIYAAF7FIIAAAAQF6FIAAHQIAAAAQAAHRl6FIIAAAAQl7FIoYAAIAAAAQoXAAl7lIg");
	var mask_graphics_163 = new cjs.Graphics().p("AuSMYQl7lIAAnQIAAAAQAAnPF7lIIAAAAQF7lJIXAAIAAAAQIYAAF7FJIAAAAQF7FIAAHPIAAAAQAAHQl7FIIAAAAQl7FJoYAAIAAAAQoXAAl7lJg");
	var mask_graphics_164 = new cjs.Graphics().p("AuTMYQl7lIAAnQIAAAAQAAnPF7lIIAAAAQF7lIIYAAIAAAAQIZAAF7FIIAAAAQF7FIAAHPIAAAAQAAHQl7FIIAAAAQl7FIoZAAIAAAAQoYAAl7lIg");
	var mask_graphics_165 = new cjs.Graphics().p("AuUMYQl7lIAAnQIAAAAQAAnPF7lIIAAAAQF8lHIYgBIAAAAQIZABF8FHIAAAAQF7FIAAHPIAAAAQAAHQl7FIIAAAAQl8FIoZAAIAAAAQoYAAl8lIg");
	var mask_graphics_166 = new cjs.Graphics().p("AuUMXQl8lHAAnQIAAAAQAAnPF8lHIAAAAQF7lIIZAAIAAAAQIaAAF7FIIAAAAQF8FHAAHPIAAAAQAAHQl8FHIAAAAQl7FIoaAAIAAAAQoZAAl7lIg");
	var mask_graphics_167 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFplSH/AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn/AAlplSg");
	var mask_graphics_239 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFplSH/AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn/AAlplSg");
	var mask_graphics_240 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFqlSH+AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn+AAlqlSg");
	var mask_graphics_241 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFqlSH+AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn+AAlqlSg");
	var mask_graphics_242 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFqlSH+AAIAAAAQH/AAFqFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlqFSn/AAIAAAAQn+AAlqlSg");
	var mask_graphics_243 = new cjs.Graphics().p("AtnMwQlqlSAAneIAAAAQAAndFqlSIAAAAQFplSH+AAIAAAAQH/AAFpFSIAAAAQFqFSAAHdIAAAAQAAHelqFSIAAAAQlpFSn/AAIAAAAQn+AAlplSg");
	var mask_graphics_244 = new cjs.Graphics().p("AtnMwQlplSAAneIAAAAQAAndFplSIAAAAQFplSH+AAIAAAAQH/AAFpFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlpFSn/AAIAAAAQn+AAlplSg");
	var mask_graphics_245 = new cjs.Graphics().p("AtnMxQlplTAAneIAAAAQAAndFplTIAAAAQFplSH+AAIAAAAQH/AAFpFSIAAAAQFpFTAAHdIAAAAQAAHelpFTIAAAAQlpFSn/AAIAAAAQn+AAlplSg");
	var mask_graphics_246 = new cjs.Graphics().p("AtnMxQlplSAAnfIAAAAQAAneFplSIAAAAQFplSH+AAIAAAAQH/AAFpFSIAAAAQFpFSAAHeIAAAAQAAHflpFSIAAAAQlpFSn/AAIAAAAQn+AAlplSg");
	var mask_graphics_247 = new cjs.Graphics().p("AtmMxQlplSAAnfIAAAAQAAneFplSIAAAAQFolSH+AAIAAAAQH/AAFoFSIAAAAQFpFSAAHeIAAAAQAAHflpFSIAAAAQloFSn/AAIAAAAQn+AAlolSg");
	var mask_graphics_248 = new cjs.Graphics().p("AtmMxQlolSAAnfIAAAAQAAneFolSIAAAAQFplTH9AAIAAAAQH+AAFpFTIAAAAQFoFSAAHeIAAAAQAAHfloFSIAAAAQlpFTn+AAIAAAAQn9AAlplTg");
	var mask_graphics_249 = new cjs.Graphics().p("AtlMyQlolTAAnfIAAAAQAAneFolTIAAAAQFolSH9AAIAAAAQH+AAFoFSIAAAAQFoFTAAHeIAAAAQAAHfloFTIAAAAQloFSn+AAIAAAAQn9AAlolSg");
	var mask_graphics_250 = new cjs.Graphics().p("AtlMyQlnlTAAnfIAAAAQAAneFnlTIAAAAQFolTH9AAIAAAAQH+AAFoFTIAAAAQFnFTAAHeIAAAAQAAHflnFTIAAAAQloFTn+AAIAAAAQn9AAlolTg");
	var mask_graphics_251 = new cjs.Graphics().p("AtkMzQlnlTAAngIAAAAQAAnfFnlTIAAAAQFolTH8AAIAAAAQH9AAFoFTIAAAAQFnFTAAHfIAAAAQAAHglnFTIAAAAQloFTn9AAIAAAAQn8AAlolTg");
	var mask_graphics_252 = new cjs.Graphics().p("AtjMzQlnlTAAngIAAAAQAAnfFnlTIAAAAQFolTH7AAIAAAAQH8AAFoFTIAAAAQFnFTAAHfIAAAAQAAHglnFTIAAAAQloFTn8AAIAAAAQn7AAlolTg");
	var mask_graphics_253 = new cjs.Graphics().p("AthM0QlnlTAAnhIAAAAQAAnfFnlUIAAAAQFmlUH7AAIAAAAQH8AAFmFUIAAAAQFnFUAAHfIAAAAQAAHhlnFTIAAAAQlmFUn8AAIAAAAQn7AAlmlUg");
	var mask_graphics_254 = new cjs.Graphics().p("AtgM1QlmlUAAnhIAAAAQAAngFmlUIAAAAQFmlUH6AAIAAAAQH7AAFmFUIAAAAQFmFUAAHgIAAAAQAAHhlmFUIAAAAQlmFUn7AAIAAAAQn6AAlmlUg");
	var mask_graphics_255 = new cjs.Graphics().p("AteM2QlllUAAniIAAAAQAAnhFllUIAAAAQFllVH5AAIAAAAQH6AAFlFVIAAAAQFlFUAAHhIAAAAQAAHillFUIAAAAQllFVn6AAIAAAAQn5AAlllVg");
	var mask_graphics_256 = new cjs.Graphics().p("AtbM4QlklVAAnjIAAAAQAAniFklVIAAAAQFklVH3AAIAAAAQH4AAFkFVIAAAAQFkFVAAHiIAAAAQAAHjlkFVIAAAAQlkFVn4AAIAAAAQn3AAlklVg");
	var mask_graphics_257 = new cjs.Graphics().p("AtYM6QlilWAAnkIAAAAQAAnjFilWIAAAAQFjlWH1AAIAAAAQH2AAFjFWIAAAAQFiFWAAHjIAAAAQAAHkliFWIAAAAQljFWn2AAIAAAAQn1AAljlWg");
	var mask_graphics_258 = new cjs.Graphics().p("AtTM8QlhlXAAnlIAAAAQAAnkFhlXIAAAAQFglXHzAAIAAAAQH0AAFgFXIAAAAQFhFXAAHkIAAAAQAAHllhFXIAAAAQlgFXn0AAIAAAAQnzAAlglXg");
	var mask_graphics_259 = new cjs.Graphics().p("AtPM/QlflYAAnnIAAAAQAAnmFflYIAAAAQFflYHwAAIAAAAQHxAAFfFYIAAAAQFfFYAAHmIAAAAQAAHnlfFYIAAAAQlfFYnxAAIAAAAQnwAAlflYg");
	var mask_graphics_260 = new cjs.Graphics().p("AtMNBQldlZAAnoIAAAAQAAnnFdlZIAAAAQFelZHuAAIAAAAQHvAAFeFZIAAAAQFdFZAAHnIAAAAQAAHoldFZIAAAAQleFZnvAAIAAAAQnuAAlelZg");
	var mask_graphics_261 = new cjs.Graphics().p("AtJNDQlclaAAnpIAAAAQAAnoFclaIAAAAQFdlZHsAAIAAAAQHtAAFdFZIAAAAQFcFaAAHoIAAAAQAAHplcFaIAAAAQldFZntAAIAAAAQnsAAldlZg");
	var mask_graphics_262 = new cjs.Graphics().p("AtHNEQlblaAAnqIAAAAQAAnpFblaIAAAAQFclaHrAAIAAAAQHsAAFcFaIAAAAQFbFaAAHpIAAAAQAAHqlbFaIAAAAQlcFansAAIAAAAQnrAAlclag");
	var mask_graphics_263 = new cjs.Graphics().p("AtFNFQlblbAAnqIAAAAQAAnpFblbIAAAAQFblbHqAAIAAAAQHrAAFbFbIAAAAQFbFbAAHpIAAAAQAAHqlbFbIAAAAQlbFbnrAAIAAAAQnqAAlblbg");
	var mask_graphics_264 = new cjs.Graphics().p("AtENGQlalbAAnrIAAAAQAAnqFalbIAAAAQFblbHpAAIAAAAQHqAAFbFbIAAAAQFaFbAAHqIAAAAQAAHrlaFbIAAAAQlbFbnqAAIAAAAQnpAAlblbg");
	var mask_graphics_265 = new cjs.Graphics().p("AtDNHQlZlcAAnrIAAAAQAAnqFZlcIAAAAQFalbHpAAIAAAAQHqAAFaFbIAAAAQFZFcAAHqIAAAAQAAHrlZFcIAAAAQlaFbnqAAIAAAAQnpAAlalbg");
	var mask_graphics_266 = new cjs.Graphics().p("AtCNHQlZlbAAnsIAAAAQAAnrFZlbIAAAAQFalcHoAAIAAAAQHpAAFaFcIAAAAQFZFbAAHrIAAAAQAAHslZFbIAAAAQlaFcnpAAIAAAAQnoAAlalcg");
	var mask_graphics_267 = new cjs.Graphics().p("AtBNIQlZlcAAnsIAAAAQAAnrFZlcIAAAAQFZlbHoAAIAAAAQHpAAFZFbIAAAAQFZFcAAHrIAAAAQAAHslZFcIAAAAQlZFbnpAAIAAAAQnoAAlZlbg");
	var mask_graphics_268 = new cjs.Graphics().p("AtANIQlZlcAAnsIAAAAQAAnrFZlcIAAAAQFZlcHnAAIAAAAQHoAAFZFcIAAAAQFZFcAAHrIAAAAQAAHslZFcIAAAAQlZFcnoAAIAAAAQnnAAlZlcg");
	var mask_graphics_269 = new cjs.Graphics().p("AtANIQlYlcAAnsIAAAAQAAnrFYlcIAAAAQFZlcHnAAIAAAAQHoAAFZFcIAAAAQFYFcAAHrIAAAAQAAHslYFcIAAAAQlZFcnoAAIAAAAQnnAAlZlcg");
	var mask_graphics_270 = new cjs.Graphics().p("As/NJQlZlcAAntIAAAAQAAnsFZlcIAAAAQFYlcHnAAIAAAAQHoAAFYFcIAAAAQFZFcAAHsIAAAAQAAHtlZFcIAAAAQlYFcnoAAIAAAAQnnAAlYlcg");
	var mask_graphics_271 = new cjs.Graphics().p("As/NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYlcHnAAIAAAAQHoAAFYFcIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFcnoAAIAAAAQnnAAlYlcg");
	var mask_graphics_272 = new cjs.Graphics().p("As/NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFZlcHmAAIAAAAQHnAAFZFcIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlZFcnnAAIAAAAQnmAAlZlcg");
	var mask_graphics_273 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYlcHmAAIAAAAQHnAAFYFcIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFcnnAAIAAAAQnmAAlYlcg");
	var mask_graphics_274 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYlcHmAAIAAAAQHnAAFYFcIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFcnnAAIAAAAQnmAAlYlcg");
	var mask_graphics_275 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYldHmAAIAAAAQHnAAFYFdIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFdnnAAIAAAAQnmAAlYldg");
	var mask_graphics_276 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYldHmAAIAAAAQHnAAFYFdIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFdnnAAIAAAAQnmAAlYldg");
	var mask_graphics_277 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYldHmAAIAAAAQHnAAFYFdIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFdnnAAIAAAAQnmAAlYldg");
	var mask_graphics_278 = new cjs.Graphics().p("As+NJQlYlcAAntIAAAAQAAnsFYlcIAAAAQFYldHmAAIAAAAQHnAAFYFdIAAAAQFYFcAAHsIAAAAQAAHtlYFcIAAAAQlYFdnnAAIAAAAQnmAAlYldg");
	var mask_graphics_279 = new cjs.Graphics().p("AtoMwQlplSAAneIAAAAQAAndFplSIAAAAQFqlSH+AAIAAAAQIAAAFpFSIAAAAQFpFSAAHdIAAAAQAAHelpFSIAAAAQlpFSoAAAIAAAAQn+AAlqlSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_1,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_2,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_3,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_4,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_5,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_6,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_7,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_8,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_9,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_10,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_11,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_12,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_13,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_14,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_15,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_16,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_17,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_18,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_19,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_20,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_21,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_22,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_23,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_24,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_25,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_26,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_27,x:430.9997,y:535.4001}).wait(1).to({graphics:mask_graphics_28,x:430.9088,y:535.3389}).wait(1).to({graphics:mask_graphics_29,x:430.6216,y:535.1458}).wait(1).to({graphics:mask_graphics_30,x:430.1149,y:534.8061}).wait(1).to({graphics:mask_graphics_31,x:429.3621,y:534.3012}).wait(1).to({graphics:mask_graphics_32,x:428.3298,y:533.6082}).wait(1).to({graphics:mask_graphics_33,x:426.9771,y:532.7006}).wait(1).to({graphics:mask_graphics_34,x:425.2536,y:531.5436}).wait(1).to({graphics:mask_graphics_35,x:423.0949,y:530.0955}).wait(1).to({graphics:mask_graphics_36,x:420.4192,y:528.3}).wait(1).to({graphics:mask_graphics_37,x:417.1171,y:526.0842}).wait(1).to({graphics:mask_graphics_38,x:413.0406,y:523.3486}).wait(1).to({graphics:mask_graphics_39,x:407.983,y:519.9547}).wait(1).to({graphics:mask_graphics_40,x:401.6462,y:515.7023}).wait(1).to({graphics:mask_graphics_41,x:393.5844,y:510.2923}).wait(1).to({graphics:mask_graphics_42,x:383.1255,y:503.2742}).wait(1).to({graphics:mask_graphics_43,x:369.3294,y:494.0167}).wait(1).to({graphics:mask_graphics_44,x:351.4541,y:482.0215}).wait(1).to({graphics:mask_graphics_45,x:330.9777,y:468.2808}).wait(1).to({graphics:mask_graphics_46,x:312.1821,y:455.6682}).wait(1).to({graphics:mask_graphics_47,x:297.3717,y:445.73}).wait(1).to({graphics:mask_graphics_48,x:286.0961,y:438.1632}).wait(1).to({graphics:mask_graphics_49,x:277.398,y:432.3262}).wait(1).to({graphics:mask_graphics_50,x:270.5499,y:427.7313}).wait(1).to({graphics:mask_graphics_51,x:265.0675,y:424.0525}).wait(1).to({graphics:mask_graphics_52,x:260.6274,y:421.0726}).wait(1).to({graphics:mask_graphics_53,x:257.0044,y:418.6417}).wait(1).to({graphics:mask_graphics_54,x:254.0408,y:416.6527}).wait(1).to({graphics:mask_graphics_55,x:251.6197,y:415.0282}).wait(1).to({graphics:mask_graphics_56,x:249.6533,y:413.7089}).wait(1).to({graphics:mask_graphics_57,x:248.0746,y:412.6491}).wait(1).to({graphics:mask_graphics_58,x:246.8286,y:411.8135}).wait(1).to({graphics:mask_graphics_59,x:245.8742,y:411.1726}).wait(1).to({graphics:mask_graphics_60,x:245.1757,y:410.7037}).wait(1).to({graphics:mask_graphics_61,x:244.7037,y:410.3874}).wait(1).to({graphics:mask_graphics_62,x:244.4355,y:410.2074}).wait(1).to({graphics:mask_graphics_63,x:244.7501,y:410.1498}).wait(9).to({graphics:mask_graphics_72,x:247.1504,y:416.8503}).wait(27).to({graphics:mask_graphics_99,x:247.1504,y:416.8503}).wait(1).to({graphics:mask_graphics_100,x:249.6582,y:416.9975}).wait(1).to({graphics:mask_graphics_101,x:252.1665,y:417.1446}).wait(1).to({graphics:mask_graphics_102,x:254.6748,y:417.2922}).wait(1).to({graphics:mask_graphics_103,x:257.1827,y:417.4393}).wait(1).to({graphics:mask_graphics_104,x:259.6914,y:417.5865}).wait(1).to({graphics:mask_graphics_105,x:262.1992,y:417.7341}).wait(1).to({graphics:mask_graphics_106,x:264.7075,y:417.8812}).wait(1).to({graphics:mask_graphics_107,x:267.2159,y:418.0284}).wait(1).to({graphics:mask_graphics_108,x:269.7241,y:418.1755}).wait(1).to({graphics:mask_graphics_109,x:272.2324,y:418.3231}).wait(1).to({graphics:mask_graphics_110,x:274.7408,y:418.4703}).wait(1).to({graphics:mask_graphics_111,x:277.2486,y:418.6174}).wait(1).to({graphics:mask_graphics_112,x:279.7569,y:418.765}).wait(1).to({graphics:mask_graphics_113,x:282.2657,y:418.9122}).wait(1).to({graphics:mask_graphics_114,x:284.7735,y:419.0593}).wait(1).to({graphics:mask_graphics_115,x:287.2818,y:419.2065}).wait(1).to({graphics:mask_graphics_116,x:289.7896,y:419.3541}).wait(1).to({graphics:mask_graphics_117,x:292.2502,y:419.45}).wait(1).to({graphics:mask_graphics_118,x:300.533,y:419.7919}).wait(1).to({graphics:mask_graphics_119,x:308.8161,y:420.1335}).wait(1).to({graphics:mask_graphics_120,x:317.0993,y:420.4755}).wait(1).to({graphics:mask_graphics_121,x:325.3824,y:420.817}).wait(1).to({graphics:mask_graphics_122,x:333.6656,y:421.159}).wait(1).to({graphics:mask_graphics_123,x:341.9001,y:421.4502}).wait(1).to({graphics:mask_graphics_124,x:360.1166,y:421.7917}).wait(1).to({graphics:mask_graphics_125,x:378.3334,y:422.1328}).wait(1).to({graphics:mask_graphics_126,x:396.5499,y:422.4744}).wait(1).to({graphics:mask_graphics_127,x:414.7668,y:422.816}).wait(1).to({graphics:mask_graphics_128,x:432.9832,y:423.1575}).wait(1).to({graphics:mask_graphics_129,x:451.2002,y:423.5499}).wait(1).to({graphics:mask_graphics_130,x:480.9375,y:423.8874}).wait(1).to({graphics:mask_graphics_131,x:510.6749,y:424.2249}).wait(1).to({graphics:mask_graphics_132,x:540.4117,y:424.5624}).wait(1).to({graphics:mask_graphics_133,x:570.1495,y:424.8999}).wait(1).to({graphics:mask_graphics_134,x:599.8869,y:425.2378}).wait(1).to({graphics:mask_graphics_135,x:629.6243,y:425.5749}).wait(1).to({graphics:mask_graphics_136,x:659.3616,y:425.9124}).wait(1).to({graphics:mask_graphics_137,x:689.0499,y:426.2499}).wait(1).to({graphics:mask_graphics_138,x:703.5421,y:426.5833}).wait(1).to({graphics:mask_graphics_139,x:718.0339,y:426.9168}).wait(1).to({graphics:mask_graphics_140,x:732.5266,y:427.2502}).wait(1).to({graphics:mask_graphics_141,x:747.0185,y:427.5837}).wait(1).to({graphics:mask_graphics_142,x:761.5103,y:427.9167}).wait(1).to({graphics:mask_graphics_143,x:776.1501,y:428.2497}).wait(1).to({graphics:mask_graphics_144,x:784.0251,y:428.2497}).wait(1).to({graphics:mask_graphics_145,x:791.9001,y:428.2501}).wait(1).to({graphics:mask_graphics_146,x:799.7746,y:428.2501}).wait(1).to({graphics:mask_graphics_147,x:807.6501,y:428.2501}).wait(1).to({graphics:mask_graphics_148,x:815.5246,y:428.2497}).wait(1).to({graphics:mask_graphics_149,x:823.4001,y:428.2497}).wait(1).to({graphics:mask_graphics_150,x:826.4084,y:428.2416}).wait(1).to({graphics:mask_graphics_151,x:829.4166,y:428.233}).wait(1).to({graphics:mask_graphics_152,x:832.4248,y:428.2249}).wait(1).to({graphics:mask_graphics_153,x:835.4327,y:428.2164}).wait(1).to({graphics:mask_graphics_154,x:838.4414,y:428.2083}).wait(1).to({graphics:mask_graphics_155,x:841.4001,y:428.2002}).wait(1).to({graphics:mask_graphics_156,x:844.2927,y:428.193}).wait(1).to({graphics:mask_graphics_157,x:847.1857,y:428.1858}).wait(1).to({graphics:mask_graphics_158,x:850.0788,y:428.1786}).wait(1).to({graphics:mask_graphics_159,x:852.9714,y:428.1718}).wait(1).to({graphics:mask_graphics_160,x:855.8644,y:428.1642}).wait(1).to({graphics:mask_graphics_161,x:858.757,y:428.1574}).wait(1).to({graphics:mask_graphics_162,x:861.7,y:428.1003}).wait(1).to({graphics:mask_graphics_163,x:859.5999,y:429.8373}).wait(1).to({graphics:mask_graphics_164,x:857.5002,y:431.5747}).wait(1).to({graphics:mask_graphics_165,x:855.4,y:433.3122}).wait(1).to({graphics:mask_graphics_166,x:853.2499,y:435.0501}).wait(1).to({graphics:mask_graphics_167,x:849.7004,y:424.8999}).wait(72).to({graphics:mask_graphics_239,x:849.7004,y:424.8999}).wait(1).to({graphics:mask_graphics_240,x:849.8115,y:424.9471}).wait(1).to({graphics:mask_graphics_241,x:850.1616,y:425.0952}).wait(1).to({graphics:mask_graphics_242,x:850.7754,y:425.3553}).wait(1).to({graphics:mask_graphics_243,x:851.6826,y:425.74}).wait(1).to({graphics:mask_graphics_244,x:852.9197,y:426.2638}).wait(1).to({graphics:mask_graphics_245,x:854.5284,y:426.9451}).wait(1).to({graphics:mask_graphics_246,x:856.5619,y:427.8065}).wait(1).to({graphics:mask_graphics_247,x:859.0833,y:428.8747}).wait(1).to({graphics:mask_graphics_248,x:862.1734,y:430.1842}).wait(1).to({graphics:mask_graphics_249,x:865.9345,y:431.7768}).wait(1).to({graphics:mask_graphics_250,x:870.4998,y:433.7113}).wait(1).to({graphics:mask_graphics_251,x:876.0469,y:436.0612}).wait(1).to({graphics:mask_graphics_252,x:882.8195,y:438.9296}).wait(1).to({graphics:mask_graphics_253,x:891.1575,y:442.462}).wait(1).to({graphics:mask_graphics_254,x:901.557,y:446.868}).wait(1).to({graphics:mask_graphics_255,x:914.742,y:452.4534}).wait(1).to({graphics:mask_graphics_256,x:931.7299,y:459.6498}).wait(1).to({graphics:mask_graphics_257,x:953.5865,y:468.9085}).wait(1).to({graphics:mask_graphics_258,x:979.9236,y:480.0654}).wait(1).to({graphics:mask_graphics_259,x:1006.7413,y:491.4256}).wait(1).to({graphics:mask_graphics_260,x:1029.5523,y:501.0889}).wait(1).to({graphics:mask_graphics_261,x:1047.4452,y:508.6687}).wait(1).to({graphics:mask_graphics_262,x:1061.3763,y:514.5701}).wait(1).to({graphics:mask_graphics_263,x:1072.3878,y:519.2352}).wait(1).to({graphics:mask_graphics_264,x:1081.242,y:522.9859}).wait(1).to({graphics:mask_graphics_265,x:1088.4609,y:526.0442}).wait(1).to({graphics:mask_graphics_266,x:1094.4045,y:528.5619}).wait(1).to({graphics:mask_graphics_267,x:1099.3279,y:530.6476}).wait(1).to({graphics:mask_graphics_268,x:1103.4184,y:532.3801}).wait(1).to({graphics:mask_graphics_269,x:1106.8146,y:533.8192}).wait(1).to({graphics:mask_graphics_270,x:1109.6235,y:535.0086}).wait(1).to({graphics:mask_graphics_271,x:1111.9279,y:535.9851}).wait(1).to({graphics:mask_graphics_272,x:1113.7959,y:536.7762}).wait(1).to({graphics:mask_graphics_273,x:1115.2804,y:537.4053}).wait(1).to({graphics:mask_graphics_274,x:1116.4252,y:537.8904}).wait(1).to({graphics:mask_graphics_275,x:1117.2685,y:538.2477}).wait(1).to({graphics:mask_graphics_276,x:1117.8405,y:538.4898}).wait(1).to({graphics:mask_graphics_277,x:1118.1677,y:538.6279}).wait(1).to({graphics:mask_graphics_278,x:1118.2243,y:538.6212}).wait(1).to({graphics:mask_graphics_279,x:1125.4,y:548.8002}).wait(141));

	// Слой_6
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(-66.45,426.05);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(-240.7,302.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0009},0).wait(1).to({alpha:0.0037},0).wait(1).to({alpha:0.0088},0).wait(1).to({alpha:0.0165},0).wait(1).to({alpha:0.0275},0).wait(1).to({alpha:0.0424},0).wait(1).to({alpha:0.0622},0).wait(1).to({alpha:0.0884},0).wait(1).to({alpha:0.1233},0).wait(1).to({alpha:0.1705},0).wait(1).to({alpha:0.2361},0).wait(1).to({alpha:0.3304},0).wait(1).to({alpha:0.4622},0).wait(1).to({alpha:0.6052},0).wait(1).to({alpha:0.7159},0).wait(1).to({alpha:0.7932},0).wait(1).to({alpha:0.8483},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.9197},0).wait(1).to({alpha:0.9431},0).wait(1).to({alpha:0.9611},0).wait(1).to({alpha:0.9746},0).wait(1).to({alpha:0.9847},0).wait(1).to({alpha:0.9918},0).wait(1).to({alpha:0.9965},0).wait(1).to({alpha:0.9992},0).wait(1).to({alpha:1},0).wait(1).to({x:-66.5352,y:425.9898},0).wait(1).to({x:-66.8035,y:425.8002},0).wait(1).to({x:-67.2762,y:425.4661},0).wait(1).to({x:-67.979,y:424.9694},0).wait(1).to({x:-68.9428,y:424.2882},0).wait(1).to({x:-70.2057,y:423.3957},0).wait(1).to({x:-71.8147,y:422.2585},0).wait(1).to({x:-73.8297,y:420.8344},0).wait(1).to({x:-76.3278,y:419.069},0).wait(1).to({x:-79.4106,y:416.8902},0).wait(1).to({x:-83.2163,y:414.2006},0).wait(1).to({x:-87.9377,y:410.8637},0).wait(1).to({x:-93.8537,y:406.6826},0).wait(1).to({x:-101.38,y:401.3635},0).wait(1).to({x:-111.1439,y:394.4629},0).wait(1).to({x:-124.0233,y:385.3605},0).wait(1).to({x:-140.711,y:373.5666},0).wait(1).to({x:-159.8273,y:360.0563},0).wait(1).to({x:-177.3743,y:347.655},0).wait(1).to({x:-191.2008,y:337.8832},0).wait(1).to({x:-201.7272,y:330.4438},0).wait(1).to({x:-209.8478,y:324.7046},0).wait(1).to({x:-216.2406,y:320.1865},0).wait(1).to({x:-221.3584,y:316.5695},0).wait(1).to({x:-225.5042,y:313.6395},0).wait(1).to({x:-228.8864,y:311.2492},0).wait(1).to({x:-231.6531,y:309.2938},0).wait(1).to({x:-233.9133,y:307.6965},0).wait(1).to({x:-235.7489,y:306.3992},0).wait(1).to({x:-237.2231,y:305.3573},0).wait(1).to({x:-238.3859,y:304.5355},0).wait(1).to({x:-239.2772,y:303.9056},0).wait(1).to({x:-239.9295,y:303.4446},0).wait(1).to({x:-240.3697,y:303.1334},0).wait(1).to({x:-240.6202,y:302.9564},0).to({_off:true},1).wait(357));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(9).to({y:533.9},0).wait(27).to({startPosition:0},0).wait(1).to({x:-240.6193,y:533.9015},0).wait(1).to({x:-240.3711,y:533.9062},0).wait(1).to({x:-239.9458,y:533.9142},0).wait(1).to({x:-239.3328,y:533.9257},0).wait(1).to({x:-238.5206,y:533.941},0).wait(1).to({x:-237.4963,y:533.9602},0).wait(1).to({x:-236.246,y:533.9837},0).wait(1).to({x:-234.7541,y:534.0118},0).wait(1).to({x:-233.0034,y:534.0447},0).wait(1).to({x:-230.9745,y:534.0828},0).wait(1).to({x:-228.6461,y:534.1266},0).wait(1).to({x:-225.9938,y:534.1764},0).wait(1).to({x:-222.9903,y:534.2329},0).wait(1).to({x:-219.6044,y:534.2965},0).wait(1).to({x:-215.8007,y:534.368},0).wait(1).to({x:-211.5383,y:534.4481},0).wait(1).to({x:-206.7699,y:534.5377},0).wait(1).to({x:-201.4405,y:534.6379},0).wait(1).to({x:-195.4855,y:534.7498},0).wait(1).to({x:-188.8286,y:534.875},0).wait(1).to({x:-181.3784,y:535.015},0).wait(1).to({x:-173.025,y:535.172},0).wait(1).to({x:-163.6348,y:535.3485},0).wait(1).to({x:-153.0437,y:535.5475},0).wait(1).to({x:-141.0484,y:535.773},0).wait(1).to({x:-127.3955,y:536.0296},0).wait(1).to({x:-111.7687,y:536.3233},0).wait(1).to({x:-93.7773,y:536.6615},0).wait(1).to({x:-72.9557,y:537.0528},0).wait(1).to({x:-48.8012,y:537.5068},0).wait(1).to({x:-20.9129,y:538.031},0).wait(1).to({x:10.6783,y:538.6248},0).wait(1).to({x:45.0169,y:539.2702},0).wait(1).to({x:80.0516,y:539.9287},0).wait(1).to({x:113.4023,y:540.5555},0).wait(1).to({x:143.4837,y:541.1209},0).wait(1).to({x:169.8129,y:541.6158},0).wait(1).to({x:192.5999,y:542.0441},0).wait(1).to({x:212.308,y:542.4145},0).wait(1).to({x:229.423,y:542.7362},0).wait(1).to({x:244.3715,y:543.0171},0).wait(1).to({x:257.5049,y:543.264},0).wait(1).to({x:269.1062,y:543.482},0).wait(1).to({x:279.4024,y:543.6755},0).wait(1).to({x:288.5765,y:543.848},0).wait(1).to({x:296.7768,y:544.0021},0).wait(1).to({x:304.1248,y:544.1402},0).wait(1).to({x:310.7211,y:544.2642},0).wait(1).to({x:316.6495,y:544.3756},0).wait(1).to({x:321.9805,y:544.4758},0).wait(1).to({x:326.774,y:544.5659},0).wait(1).to({x:331.0813,y:544.6469},0).wait(1).to({x:334.9466,y:544.7195},0).wait(1).to({x:338.4081,y:544.7846},0).wait(1).to({x:341.4994,y:544.8427},0).wait(1).to({x:344.2498,y:544.8944},0).wait(1).to({x:346.6852,y:544.9402},0).wait(1).to({x:348.8287,y:544.9804},0).wait(1).to({x:350.7008,y:545.0156},0).wait(1).to({x:352.3199,y:545.0461},0).wait(1).to({x:353.7024,y:545.072},0).wait(1).to({x:354.8632,y:545.0939},0).wait(1).to({x:355.8159,y:545.1118},0).wait(1).to({x:356.5727,y:545.126},0).wait(1).to({x:357.1447,y:545.1367},0).wait(1).to({x:357.5421,y:545.1442},0).wait(1).to({x:357.7744,y:545.1486},0).wait(1).to({x:357.85,y:545.15},0).wait(27).to({y:314.4},0).wait(45).to({startPosition:0},0).wait(1).to({x:357.9588,y:314.4488,alpha:0.9996},0).wait(1).to({x:358.2997,y:314.6017,alpha:0.9984},0).wait(1).to({x:358.8966,y:314.8694,alpha:0.9962},0).wait(1).to({x:359.7777,y:315.2646,alpha:0.993},0).wait(1).to({x:360.9765,y:315.8022,alpha:0.9887},0).wait(1).to({x:362.5328,y:316.5002,alpha:0.983},0).wait(1).to({x:364.4946,y:317.3801,alpha:0.9759},0).wait(1).to({x:366.9209,y:318.4683,alpha:0.9671},0).wait(1).to({x:369.8848,y:319.7976,alpha:0.9563},0).wait(1).to({x:373.4787,y:321.4094,alpha:0.9433},0).wait(1).to({x:377.8213,y:323.357,alpha:0.9276},0).wait(1).to({x:383.0689,y:325.7105,alpha:0.9085},0).wait(1).to({x:389.4319,y:328.5643,alpha:0.8854},0).wait(1).to({x:397.2015,y:332.0489,alpha:0.8573},0).wait(1).to({x:406.7914,y:336.35,alpha:0.8225},0).wait(1).to({x:418.8013,y:341.7364,alpha:0.7789},0).wait(1).to({x:434.0909,y:348.5936,alpha:0.7235},0).wait(1).to({x:453.7361,y:357.4044,alpha:0.6522},0).wait(1).to({x:478.2848,y:368.4144,alpha:0.5632},0).wait(1).to({x:505.5924,y:380.6617,alpha:0.4641},0).wait(1).to({x:530.833,y:391.982,alpha:0.3726},0).wait(1).to({x:551.3209,y:401.1707,alpha:0.2983},0).wait(1).to({x:567.35,y:408.3597,alpha:0.2401},0).wait(1).to({x:579.9748,y:414.0218,alpha:0.1943},0).wait(1).to({x:590.0827,y:418.5552,alpha:0.1577},0).wait(1).to({x:598.3001,y:422.2406,alpha:0.1279},0).wait(1).to({x:605.0597,y:425.2722,alpha:0.1033},0).wait(1).to({x:610.6654,y:427.7864,alpha:0.083},0).wait(1).to({x:615.3367,y:429.8814,alpha:0.0661},0).wait(1).to({x:619.236,y:431.6302,alpha:0.0519},0).wait(1).to({x:622.4865,y:433.0881,alpha:0.0401},0).wait(1).to({x:625.184,y:434.2979,alpha:0.0303},0).wait(1).to({x:627.4041,y:435.2936,alpha:0.0223},0).wait(1).to({x:629.2075,y:436.1024,alpha:0.0158},0).wait(1).to({x:630.644,y:436.7467,alpha:0.0105},0).wait(1).to({x:631.7545,y:437.2447,alpha:0.0065},0).wait(1).to({x:632.5733,y:437.612,alpha:0.0035},0).wait(1).to({x:633.1296,y:437.8615,alpha:0.0015},0).wait(1).to({x:633.4481,y:438.0043,alpha:0.0004},0).wait(1).to({x:633.55,y:438.05,alpha:0},0).wait(141));

	// icons_svg
	this.instance_2 = new lib.Анимация33("synched",0);
	this.instance_2.setTransform(246.15,479.9);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Анимация8("synched",0);
	this.instance_3.setTransform(848.05,433.35);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:479.8766,alpha:0.0003},0).wait(1).to({y:479.8035,alpha:0.0013},0).wait(1).to({y:479.6762,alpha:0.0031},0).wait(1).to({y:479.4894,alpha:0.0057},0).wait(1).to({y:479.2367,alpha:0.0092},0).wait(1).to({y:478.911,alpha:0.0137},0).wait(1).to({y:478.5038,alpha:0.0194},0).wait(1).to({y:478.0047,alpha:0.0263},0).wait(1).to({y:477.4014,alpha:0.0347},0).wait(1).to({y:476.679,alpha:0.0447},0).wait(1).to({y:475.8185,alpha:0.0567},0).wait(1).to({y:474.7966,alpha:0.0709},0).wait(1).to({y:473.583,alpha:0.0877},0).wait(1).to({y:472.1382,alpha:0.1078},0).wait(1).to({y:470.4095,alpha:0.1318},0).wait(1).to({y:468.3247,alpha:0.1608},0).wait(1).to({y:465.7832,alpha:0.1961},0).wait(1).to({y:462.6436,alpha:0.2397},0).wait(1).to({y:458.7148,alpha:0.2942},0).wait(1).to({y:453.7857,alpha:0.3627},0).wait(1).to({y:447.8127,alpha:0.4457},0).wait(1).to({y:441.3166,alpha:0.5359},0).wait(1).to({y:435.2759,alpha:0.6198},0).wait(1).to({y:430.2531,alpha:0.6895},0).wait(1).to({y:426.2304,alpha:0.7454},0).wait(1).to({y:423.0036,alpha:0.7902},0).wait(1).to({y:420.3819,alpha:0.8266},0).wait(1).to({y:418.2227,alpha:0.8566},0).wait(1).to({y:416.4244,alpha:0.8816},0).wait(1).to({y:414.914,alpha:0.9026},0).wait(1).to({y:413.6378,alpha:0.9203},0).wait(1).to({y:412.5561,alpha:0.9353},0).wait(1).to({y:411.6382,alpha:0.9481},0).wait(1).to({y:410.8601,alpha:0.9589},0).wait(1).to({y:410.2031,alpha:0.968},0).wait(1).to({y:409.6518,alpha:0.9757},0).wait(1).to({y:409.1936,alpha:0.982},0).wait(1).to({y:408.8183,alpha:0.9872},0).wait(1).to({y:408.5171,alpha:0.9914},0).wait(1).to({y:408.2828,alpha:0.9947},0).wait(1).to({y:408.1089,alpha:0.9971},0).wait(1).to({y:407.9902,alpha:0.9987},0).wait(1).to({y:407.9219,alpha:0.9997},0).wait(1).to({y:407.9,alpha:1},0).wait(55).to({startPosition:0},0).wait(1).to({x:246.2312,y:407.9034},0).wait(1).to({x:246.4807,y:407.914},0).wait(1).to({x:246.9084,y:407.9321},0).wait(1).to({x:247.5248,y:407.9581},0).wait(1).to({x:248.3416,y:407.9927},0).wait(1).to({x:249.3716,y:408.0362},0).wait(1).to({x:250.6289,y:408.0894},0).wait(1).to({x:252.1292,y:408.1528},0).wait(1).to({x:253.8897,y:408.2273},0).wait(1).to({x:255.9299,y:408.3135},0).wait(1).to({x:258.2714,y:408.4125},0).wait(1).to({x:260.9385,y:408.5253},0).wait(1).to({x:263.9588,y:408.653},0).wait(1).to({x:267.3636,y:408.797},0).wait(1).to({x:271.1887,y:408.9587},0).wait(1).to({x:275.475,y:409.1399},0).wait(1).to({x:280.2701,y:409.3427},0).wait(1).to({x:285.6293,y:409.5693},0).wait(1).to({x:291.6175,y:409.8225},0).wait(1).to({x:298.3118,y:410.1055},0).wait(1).to({x:305.8037,y:410.4223},0).wait(1).to({x:314.2038,y:410.7775},0).wait(1).to({x:323.6465,y:411.1768},0).wait(1).to({x:334.2969,y:411.6271},0).wait(1).to({x:346.3593,y:412.1371},0).wait(1).to({x:360.0887,y:412.7176},0).wait(1).to({x:375.8029,y:413.3821},0).wait(1).to({x:393.895,y:414.1471},0).wait(1).to({x:414.8332,y:415.0324},0).wait(1).to({x:439.1229,y:416.0594},0).wait(1).to({x:467.1673,y:417.2452},0).wait(1).to({x:498.9353,y:418.5885},0).wait(1).to({x:533.466,y:420.0485},0).wait(1).to({x:568.6968,y:421.5382},0).wait(1).to({x:602.2341,y:422.9562},0).wait(1).to({x:632.4839,y:424.2353},0).wait(1).to({x:658.9605,y:425.3548},0).wait(1).to({x:681.875,y:426.3237},0).wait(1).to({x:701.6934,y:427.1616},0).wait(1).to({x:718.9042,y:427.8894},0).wait(1).to({x:733.9364,y:428.525},0).wait(1).to({x:747.1433,y:429.0834},0).wait(1).to({x:758.8095,y:429.5767},0).wait(1).to({x:769.1634,y:430.0145},0).wait(1).to({x:778.3888,y:430.4045},0).wait(1).to({x:786.6349,y:430.7532},0).wait(1).to({x:794.0241,y:431.0656},0).wait(1).to({x:800.6573,y:431.3461},0).wait(1).to({x:806.6189,y:431.5982},0).wait(1).to({x:811.9797,y:431.8249},0).wait(1).to({x:816.8001,y:432.0287},0).wait(1).to({x:821.1315,y:432.2118},0).wait(1).to({x:825.0184,y:432.3762},0).wait(1).to({x:828.4993,y:432.5233},0).wait(1).to({x:831.6079,y:432.6548},0).wait(1).to({x:834.3736,y:432.7717},0).wait(1).to({x:836.8227,y:432.8753},0).wait(1).to({x:838.9782,y:432.9664},0).wait(1).to({x:840.8608,y:433.046},0).wait(1).to({x:842.4889,y:433.1149},0).wait(1).to({x:843.8792,y:433.1737},0).wait(1).to({x:845.0465,y:433.223},0).wait(1).to({x:846.0045,y:433.2635},0).wait(1).to({x:846.7655,y:433.2957},0).wait(1).to({x:847.3407,y:433.32},0).wait(1).to({x:847.7404,y:433.3369},0).wait(1).to({x:847.974,y:433.3468},0).to({_off:true},1).wait(32).to({_off:false,scaleX:0.8436,scaleY:0.8436,x:246.1,y:407.1,alpha:0},1).wait(1).to({scaleX:0.8438,scaleY:0.8438,y:407.1007,alpha:0.0003},0).wait(1).to({scaleX:0.8442,scaleY:0.8442,x:246.1002,y:407.103,alpha:0.0011},0).wait(1).to({scaleX:0.845,scaleY:0.845,x:246.1004,y:407.107,alpha:0.0026},0).wait(1).to({scaleX:0.8462,scaleY:0.8462,x:246.1008,y:407.1132,alpha:0.005},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:246.1014,y:407.122,alpha:0.0083},0).wait(1).to({scaleX:0.8503,scaleY:0.8503,x:246.1021,y:407.1339,alpha:0.0127},0).wait(1).to({scaleX:0.8534,scaleY:0.8534,x:246.1031,y:407.1497,alpha:0.0187},0).wait(1).to({scaleX:0.8575,scaleY:0.8575,x:246.1044,y:407.1707,alpha:0.0266},0).wait(1).to({scaleX:0.8629,scaleY:0.8629,x:246.1062,y:407.1987,alpha:0.0371},0).wait(1).to({scaleX:0.8703,scaleY:0.8703,x:246.1085,y:407.2364,alpha:0.0513},0).wait(1).to({scaleX:0.8805,scaleY:0.8805,x:246.1118,y:407.2889,alpha:0.071},0).wait(1).to({scaleX:0.8953,scaleY:0.8953,x:246.1165,y:407.3643,alpha:0.0994},0).wait(1).to({scaleX:0.9159,scaleY:0.9159,x:246.1231,y:407.4698,alpha:0.139},0).wait(1).to({scaleX:0.9383,scaleY:0.9383,x:246.1303,y:407.5842,alpha:0.182},0).wait(1).to({scaleX:0.9556,scaleY:0.9556,x:246.1358,y:407.6727,alpha:0.2153},0).wait(1).to({scaleX:0.9677,scaleY:0.9677,x:246.1397,y:407.7345,alpha:0.2386},0).wait(1).to({scaleX:0.9763,scaleY:0.9763,x:246.1424,y:407.7787,alpha:0.2552},0).wait(1).to({scaleX:0.9826,scaleY:0.9826,x:246.1445,y:407.8112,alpha:0.2674},0).wait(1).to({scaleX:0.9874,scaleY:0.9874,x:246.146,y:407.8358,alpha:0.2766},0).wait(1).to({scaleX:0.9911,scaleY:0.9911,x:246.1472,y:407.8545,alpha:0.2837},0).wait(1).to({scaleX:0.9939,scaleY:0.9939,x:246.1481,y:407.8688,alpha:0.2891},0).wait(1).to({scaleX:0.996,scaleY:0.996,x:246.1487,y:407.8797,alpha:0.2931},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,x:246.1492,y:407.8877,alpha:0.2962},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,x:246.1496,y:407.8935,alpha:0.2983},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:246.1498,y:407.8972,alpha:0.2997},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:246.15,y:407.8993,alpha:0.3005},0).wait(1).to({scaleX:1,scaleY:1,y:407.9,alpha:0.3008},0).wait(162).to({startPosition:0},0).wait(1).to({y:407.8115,alpha:0.3006},0).wait(1).to({y:407.5299,alpha:0.2999},0).wait(1).to({y:407.0274,alpha:0.2987},0).wait(1).to({y:406.2689,alpha:0.2969},0).wait(1).to({y:405.2102,alpha:0.2943},0).wait(1).to({y:403.7939,alpha:0.2909},0).wait(1).to({y:401.944,alpha:0.2864},0).wait(1).to({y:399.5565,alpha:0.2807},0).wait(1).to({y:396.4843,alpha:0.2733},0).wait(1).to({y:392.5102,alpha:0.2637},0).wait(1).to({y:387.2991,alpha:0.2511},0).wait(1).to({y:380.3094,alpha:0.2343},0).wait(1).to({y:370.667,alpha:0.211},0).wait(1).to({y:357.3118,alpha:0.1789},0).wait(1).to({y:341.022,alpha:0.1396},0).wait(1).to({y:326.2559,alpha:0.104},0).wait(1).to({y:315.2905,alpha:0.0776},0).wait(1).to({y:307.3517,alpha:0.0584},0).wait(1).to({y:301.4523,alpha:0.0442},0).wait(1).to({y:296.9527,alpha:0.0334},0).wait(1).to({y:293.4591,alpha:0.025},0).wait(1).to({y:290.7204,alpha:0.0184},0).wait(1).to({y:288.5688,alpha:0.0132},0).wait(1).to({y:286.887,alpha:0.0091},0).wait(1).to({y:285.5902,alpha:0.006},0).wait(1).to({y:284.615,alpha:0.0037},0).wait(1).to({y:283.9128,alpha:0.002},0).wait(1).to({y:283.4455,alpha:0.0008},0).wait(1).to({y:283.1828,alpha:0.0002},0).wait(1).to({y:283.1,alpha:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167).to({_off:false},0).wait(19).to({startPosition:0},0).wait(1).to({regX:-1.2,regY:-0.7,scaleX:0.9995,scaleY:0.9995,x:846.85,y:432.6,alpha:0.996},0).wait(1).to({scaleX:0.998,scaleY:0.998,alpha:0.982},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,alpha:0.9536},0).wait(1).to({scaleX:0.9888,scaleY:0.9888,alpha:0.9019},0).wait(1).to({scaleX:0.978,scaleY:0.978,x:846.95,alpha:0.8069},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,x:847.05,y:432.65,alpha:0.6132},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:847.2,alpha:0.3303},0).wait(1).to({scaleX:0.9055,scaleY:0.9055,x:847.25,alpha:0.1708},0).wait(1).to({scaleX:0.8961,scaleY:0.8961,x:847.3,y:432.6,alpha:0.0889},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:847.35,y:432.65,alpha:0.0427},0).wait(1).to({scaleX:0.8879,scaleY:0.8879,alpha:0.0167},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,alpha:0.0037},0).wait(1).to({regX:0,regY:0,scaleX:0.886,scaleY:0.886,x:848.45,y:433.25,alpha:0},0).to({_off:true,scaleX:0.8436,scaleY:0.8436,x:246.1,y:407.1},1).wait(220));

	// Слой_23
	this.instance_4 = new lib.Анимация35("synched",0);
	this.instance_4.setTransform(245.8,474.75);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Анимация15("synched",0);
	this.instance_5.setTransform(851.5,432.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:474.7266,alpha:0.0003},0).wait(1).to({y:474.6535,alpha:0.0013},0).wait(1).to({y:474.5262,alpha:0.0031},0).wait(1).to({y:474.3394,alpha:0.0057},0).wait(1).to({y:474.0867,alpha:0.0092},0).wait(1).to({y:473.761,alpha:0.0137},0).wait(1).to({y:473.3538,alpha:0.0194},0).wait(1).to({y:472.8547,alpha:0.0263},0).wait(1).to({y:472.2514,alpha:0.0347},0).wait(1).to({y:471.5289,alpha:0.0447},0).wait(1).to({y:470.6685,alpha:0.0567},0).wait(1).to({y:469.6466,alpha:0.0709},0).wait(1).to({y:468.433,alpha:0.0877},0).wait(1).to({y:466.9882,alpha:0.1078},0).wait(1).to({y:465.2595,alpha:0.1318},0).wait(1).to({y:463.1747,alpha:0.1608},0).wait(1).to({y:460.6332,alpha:0.1961},0).wait(1).to({y:457.4936,alpha:0.2397},0).wait(1).to({y:453.5648,alpha:0.2942},0).wait(1).to({y:448.6357,alpha:0.3627},0).wait(1).to({y:442.6627,alpha:0.4457},0).wait(1).to({y:436.1666,alpha:0.5359},0).wait(1).to({y:430.1259,alpha:0.6198},0).wait(1).to({y:425.1031,alpha:0.6895},0).wait(1).to({y:421.0804,alpha:0.7454},0).wait(1).to({y:417.8536,alpha:0.7902},0).wait(1).to({y:415.2319,alpha:0.8266},0).wait(1).to({y:413.0727,alpha:0.8566},0).wait(1).to({y:411.2744,alpha:0.8816},0).wait(1).to({y:409.7639,alpha:0.9026},0).wait(1).to({y:408.4878,alpha:0.9203},0).wait(1).to({y:407.4061,alpha:0.9353},0).wait(1).to({y:406.4882,alpha:0.9481},0).wait(1).to({y:405.7101,alpha:0.9589},0).wait(1).to({y:405.0531,alpha:0.968},0).wait(1).to({y:404.5018,alpha:0.9757},0).wait(1).to({y:404.0436,alpha:0.982},0).wait(1).to({y:403.6683,alpha:0.9872},0).wait(1).to({y:403.3671,alpha:0.9914},0).wait(1).to({y:403.1328,alpha:0.9947},0).wait(1).to({y:402.9589,alpha:0.9971},0).wait(1).to({y:402.8402,alpha:0.9987},0).wait(1).to({y:402.7719,alpha:0.9997},0).wait(1).to({y:402.75,alpha:1},0).wait(55).to({startPosition:0},0).wait(1).to({x:245.8817,y:402.754},0).wait(1).to({x:246.1328,y:402.7665},0).wait(1).to({x:246.5632,y:402.7877},0).wait(1).to({x:247.1835,y:402.8184},0).wait(1).to({x:248.0055,y:402.8591},0).wait(1).to({x:249.042,y:402.9103},0).wait(1).to({x:250.3072,y:402.9729},0).wait(1).to({x:251.8169,y:403.0475},0).wait(1).to({x:253.5886,y:403.1351},0).wait(1).to({x:255.6416,y:403.2366},0).wait(1).to({x:257.9979,y:403.3531},0).wait(1).to({x:260.6818,y:403.4859},0).wait(1).to({x:263.7212,y:403.6362},0).wait(1).to({x:267.1476,y:403.8056},0).wait(1).to({x:270.9967,y:403.9959},0).wait(1).to({x:275.3101,y:404.2092},0).wait(1).to({x:280.1355,y:404.4478},0).wait(1).to({x:285.5285,y:404.7145},0).wait(1).to({x:291.5546,y:405.0124},0).wait(1).to({x:298.2911,y:405.3455},0).wait(1).to({x:305.8303,y:405.7183},0).wait(1).to({x:314.2834,y:406.1363},0).wait(1).to({x:323.7857,y:406.6062},0).wait(1).to({x:334.5034,y:407.1361},0).wait(1).to({x:346.642,y:407.7363},0).wait(1).to({x:360.458,y:408.4195},0).wait(1).to({x:376.2715,y:409.2014},0).wait(1).to({x:394.4778,y:410.1017},0).wait(1).to({x:415.5481,y:411.1435},0).wait(1).to({x:439.9912,y:412.3522},0).wait(1).to({x:468.2126,y:413.7476},0).wait(1).to({x:500.1812,y:415.3284},0).wait(1).to({x:534.9299,y:417.0466},0).wait(1).to({x:570.3831,y:418.7996},0).wait(1).to({x:604.1322,y:420.4684},0).wait(1).to({x:634.5729,y:421.9736},0).wait(1).to({x:661.2167,y:423.2911},0).wait(1).to({x:684.2759,y:424.4313},0).wait(1).to({x:704.2194,y:425.4174},0).wait(1).to({x:721.5388,y:426.2738},0).wait(1).to({x:736.666,y:427.0218},0).wait(1).to({x:749.9563,y:427.679},0).wait(1).to({x:761.6961,y:428.2595},0).wait(1).to({x:772.1153,y:428.7747},0).wait(1).to({x:781.399,y:429.2337},0).wait(1).to({x:789.6972,y:429.644},0).wait(1).to({x:797.133,y:430.0117},0).wait(1).to({x:803.8081,y:430.3418},0).wait(1).to({x:809.8073,y:430.6384},0).wait(1).to({x:815.202,y:430.9052},0).wait(1).to({x:820.0528,y:431.145},0).wait(1).to({x:824.4115,y:431.3606},0).wait(1).to({x:828.323,y:431.554},0).wait(1).to({x:831.8258,y:431.7272},0).wait(1).to({x:834.954,y:431.8819},0).wait(1).to({x:837.7373,y:432.0195},0).wait(1).to({x:840.2018,y:432.1413},0).wait(1).to({x:842.371,y:432.2486},0).wait(1).to({x:844.2654,y:432.3423},0).wait(1).to({x:845.9038,y:432.4233},0).wait(1).to({x:847.3028,y:432.4925},0).wait(1).to({x:848.4776,y:432.5505},0).wait(1).to({x:849.4416,y:432.5982},0).wait(1).to({x:850.2074,y:432.6361},0).wait(1).to({x:850.7863,y:432.6647},0).wait(1).to({x:851.1885,y:432.6846},0).wait(1).to({x:851.4235,y:432.6962},0).to({_off:true},1).wait(32).to({_off:false,scaleX:0.8436,scaleY:0.8436,x:245.8,y:402.75,alpha:0},1).wait(1).to({scaleX:0.8438,scaleY:0.8438,alpha:0.0005},0).wait(1).to({scaleX:0.8442,scaleY:0.8442,alpha:0.0022},0).wait(1).to({scaleX:0.845,scaleY:0.845,alpha:0.0053},0).wait(1).to({scaleX:0.8462,scaleY:0.8462,alpha:0.0099},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,alpha:0.0165},0).wait(1).to({scaleX:0.8503,scaleY:0.8503,alpha:0.0255},0).wait(1).to({scaleX:0.8534,scaleY:0.8534,alpha:0.0374},0).wait(1).to({scaleX:0.8575,scaleY:0.8575,alpha:0.0532},0).wait(1).to({scaleX:0.8629,scaleY:0.8629,alpha:0.0742},0).wait(1).to({scaleX:0.8703,scaleY:0.8703,alpha:0.1026},0).wait(1).to({scaleX:0.8805,scaleY:0.8805,alpha:0.142},0).wait(1).to({scaleX:0.8953,scaleY:0.8953,alpha:0.1988},0).wait(1).to({scaleX:0.9159,scaleY:0.9159,alpha:0.278},0).wait(1).to({scaleX:0.9383,scaleY:0.9383,alpha:0.3641},0).wait(1).to({scaleX:0.9556,scaleY:0.9556,alpha:0.4307},0).wait(1).to({scaleX:0.9677,scaleY:0.9677,alpha:0.4772},0).wait(1).to({scaleX:0.9763,scaleY:0.9763,alpha:0.5103},0).wait(1).to({scaleX:0.9826,scaleY:0.9826,alpha:0.5348},0).wait(1).to({scaleX:0.9874,scaleY:0.9874,alpha:0.5533},0).wait(1).to({scaleX:0.9911,scaleY:0.9911,alpha:0.5674},0).wait(1).to({scaleX:0.9939,scaleY:0.9939,alpha:0.5781},0).wait(1).to({scaleX:0.996,scaleY:0.996,alpha:0.5863},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,alpha:0.5923},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,alpha:0.5967},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,alpha:0.5995},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,alpha:0.6011},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.6016},0).wait(162).to({startPosition:0},0).wait(1).to({y:402.6615,alpha:0.6011},0).wait(1).to({y:402.3799,alpha:0.5998},0).wait(1).to({y:401.8774,alpha:0.5974},0).wait(1).to({y:401.1189,alpha:0.5937},0).wait(1).to({y:400.0602,alpha:0.5886},0).wait(1).to({y:398.6439,alpha:0.5818},0).wait(1).to({y:396.794,alpha:0.5729},0).wait(1).to({y:394.4065,alpha:0.5613},0).wait(1).to({y:391.3343,alpha:0.5465},0).wait(1).to({y:387.3602,alpha:0.5274},0).wait(1).to({y:382.1491,alpha:0.5023},0).wait(1).to({y:375.1594,alpha:0.4686},0).wait(1).to({y:365.517,alpha:0.4221},0).wait(1).to({y:352.1618,alpha:0.3577},0).wait(1).to({y:335.872,alpha:0.2792},0).wait(1).to({y:321.1059,alpha:0.208},0).wait(1).to({y:310.1405,alpha:0.1552},0).wait(1).to({y:302.2017,alpha:0.1169},0).wait(1).to({y:296.3023,alpha:0.0885},0).wait(1).to({y:291.8027,alpha:0.0668},0).wait(1).to({y:288.3091,alpha:0.0499},0).wait(1).to({y:285.5704,alpha:0.0367},0).wait(1).to({y:283.4188,alpha:0.0264},0).wait(1).to({y:281.737,alpha:0.0183},0).wait(1).to({y:280.4402,alpha:0.012},0).wait(1).to({y:279.465,alpha:0.0073},0).wait(1).to({y:278.7628,alpha:0.0039},0).wait(1).to({y:278.2955,alpha:0.0017},0).wait(1).to({y:278.0328,alpha:0.0004},0).wait(1).to({y:277.95,alpha:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({_off:false},0).wait(19).to({startPosition:0},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:851.5002,alpha:0.996},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:851.5008,alpha:0.982},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:851.5021,alpha:0.9536},0).wait(1).to({scaleX:0.9888,scaleY:0.9888,x:851.5043,alpha:0.9019},0).wait(1).to({scaleX:0.978,scaleY:0.978,x:851.5086,alpha:0.8069},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,x:851.5171,alpha:0.6132},0).wait(1).to({scaleX:0.9237,scaleY:0.9237,x:851.5297,alpha:0.3303},0).wait(1).to({scaleX:0.9055,scaleY:0.9055,x:851.5367,alpha:0.1708},0).wait(1).to({scaleX:0.8961,scaleY:0.8961,x:851.5404,alpha:0.0889},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:851.5424,alpha:0.0427},0).wait(1).to({scaleX:0.8879,scaleY:0.8879,x:851.5436,alpha:0.0167},0).wait(1).to({scaleX:0.8864,scaleY:0.8864,x:851.5441,alpha:0.0037},0).wait(1).to({scaleX:0.886,scaleY:0.886,x:851.5,alpha:0},0).to({_off:true,scaleX:0.8436,scaleY:0.8436,x:245.8,y:402.75},1).wait(220));

	// Слой_29 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBliAV0IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_6 = new cjs.Graphics().p("EBlIAfqIAA6hIbFAAIAAahg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EBlIAfqIAA6hIbFAAIAAahg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EBlIAfpIAA6hIbFAAIAAahg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EBlIAfpIAA6hIbFAAIAAahg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EBlIAfnIAA6hIbFAAIAAahg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EBlIAfmIAA6hIbFAAIAAahg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EBlIAfjIAA6hIbFAAIAAahg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EBlIAfgIAA6hIbFAAIAAahg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EBlIAfcIAA6hIbFAAIAAahg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EBlIAfXIAA6hIbFAAIAAahg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EBlIAfQIAA6hIbFAAIAAahg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EBlIAfHIAA6hIbFAAIAAahg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EBlIAe6IAA6hIbFAAIAAahg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EBlIAeoIAA6hIbFAAIAAahg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EBlIAeQIAA6hIbFAAIAAahg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EBlIAd2IAA6hIbFAAIAAahg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EBlIAdiIAA6hIbFAAIAAahg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EBlIAdUIAA6hIbFAAIAAahg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EBlIAdJIAA6hIbFAAIAAahg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EBlIAdBIAA6hIbFAAIAAahg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EBlIAc7IAA6hIbFAAIAAahg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EBlIAc2IAA6hIbFAAIAAahg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EBlIAczIAA6hIbFAAIAAahg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EBlIAcwIAA6hIbFAAIAAahg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EBlIAcuIAA6hIbFAAIAAahg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EBlIAcsIAA6hIbFAAIAAahg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EBlIAcrIAA6hIbFAAIAAahg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EBlIAcqIAA6hIbFAAIAAahg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EBlIAcqIAA6hIbFAAIAAahg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AthNQIAA6fIbDAAIAAafg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AthNQIAA6fIbDAAIAAafg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EBlIAcpIAA6gIbFAAIAAagg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EBlJAcpIAA6gIbEAAIAAagg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EBlKAcpIAA6fIbCAAIAAafg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EBlLAcpIAA6eIbBAAIAAaeg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EBlMAcoIAA6bIa/AAIAAabg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EBlPAcnIAA6YIa7AAIAAaYg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EBlSAcmIAA6UIa3AAIAAaUg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EBlWAclIAA6PIayAAIAAaPg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EBlbAcjIAA6HIarAAIAAaHg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EBljAcgIAA58IagAAIAAZ8g");
	var mask_1_graphics_249 = new cjs.Graphics().p("EBlvAccIAA5tIaPAAIAAZtg");
	var mask_1_graphics_250 = new cjs.Graphics().p("EBmAAcWIAA5WIZ4AAIAAZWg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EBl5AcRIAA5DIZlAAIAAZDg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EBl0AcOIAA41IZXAAIAAY1g");
	var mask_1_graphics_253 = new cjs.Graphics().p("EBlxAcMIAA4sIZMAAIAAYsg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EBluAcKIAA4lIZGAAIAAYlg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EBltAcJIAA4gIZAAAIAAYgg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EBlrAcIIAA4dIY9AAIAAYdg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EBlqAcHIAA4aIY7AAIAAYag");
	var mask_1_graphics_258 = new cjs.Graphics().p("EBlqAcHIAA4YIY4AAIAAYYg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EBlpAcGIAA4WIY3AAIAAYWg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EBlpAcGIAA4VIY1AAIAAYVg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EBloAcGIAA4VIY1AAIAAYVg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EBloAcGIAA4UIY1AAIAAYUg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EBloAcGIAA4VIY1AAIAAYVg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EBloAcHIAA4bIY8AAIAAYbg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EBloAcJIAA4iIZDAAIAAYig");
	var mask_1_graphics_266 = new cjs.Graphics().p("EBloAcLIAA4oIZJAAIAAYog");
	var mask_1_graphics_267 = new cjs.Graphics().p("EBlpAcMIAA4sIZMAAIAAYsg");
	var mask_1_graphics_268 = new cjs.Graphics().p("EBlpAcNIAA4wIZQAAIAAYwg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EBlpAcOIAA4zIZTAAIAAYzg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EBlpAcOIAA41IZWAAIAAY1g");
	var mask_1_graphics_271 = new cjs.Graphics().p("EBlpAcPIAA43IZYAAIAAY3g");
	var mask_1_graphics_272 = new cjs.Graphics().p("EBloAcPIAA45IZbAAIAAY5g");
	var mask_1_graphics_273 = new cjs.Graphics().p("EBloAcRIAA5BIZiAAIAAZBg");
	var mask_1_graphics_274 = new cjs.Graphics().p("EBlnAcTIAA5IIZpAAIAAZIg");
	var mask_1_graphics_275 = new cjs.Graphics().p("EBlmAcUIAA5OIZwAAIAAZOg");
	var mask_1_graphics_276 = new cjs.Graphics().p("EBlmAcWIAA5UIZ1AAIAAZUg");
	var mask_1_graphics_277 = new cjs.Graphics().p("EBllAcXIAA5ZIZ7AAIAAZZg");
	var mask_1_graphics_278 = new cjs.Graphics().p("EBllAcYIAA5eIaAAAIAAZeg");
	var mask_1_graphics_279 = new cjs.Graphics().p("EBlkAcZIAA5iIaFAAIAAZig");
	var mask_1_graphics_280 = new cjs.Graphics().p("EBlkAcaIAA5nIaJAAIAAZng");
	var mask_1_graphics_281 = new cjs.Graphics().p("EBljAcbIAA5rIaOAAIAAZrg");
	var mask_1_graphics_282 = new cjs.Graphics().p("EBljAccIAA5uIaRAAIAAZug");
	var mask_1_graphics_283 = new cjs.Graphics().p("EBljAcdIAA5yIaUAAIAAZyg");
	var mask_1_graphics_284 = new cjs.Graphics().p("EBliAceIAA51IaYAAIAAZ1g");
	var mask_1_graphics_285 = new cjs.Graphics().p("EBliAcfIAA55IabAAIAAZ5g");
	var mask_1_graphics_286 = new cjs.Graphics().p("EBliAcfIAA57IadAAIAAZ7g");
	var mask_1_graphics_287 = new cjs.Graphics().p("EBlhAcgIAA5+IahAAIAAZ+g");
	var mask_1_graphics_288 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_289 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_290 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_291 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_293 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_294 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_295 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_296 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_297 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_298 = new cjs.Graphics().p("EBliAcgIAA6AIaiAAIAAaAg");
	var mask_1_graphics_299 = new cjs.Graphics().p("EBliAceIAA6AIaiAAIAAaAg");
	var mask_1_graphics_300 = new cjs.Graphics().p("EBliAccIAA6AIaiAAIAAaAg");
	var mask_1_graphics_301 = new cjs.Graphics().p("EBliAcYIAA6AIaiAAIAAaAg");
	var mask_1_graphics_302 = new cjs.Graphics().p("EBliAcTIAA6AIaiAAIAAaAg");
	var mask_1_graphics_303 = new cjs.Graphics().p("EBliAcNIAA6AIaiAAIAAaAg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EBliAcFIAA6AIaiAAIAAaAg");
	var mask_1_graphics_305 = new cjs.Graphics().p("EBliAb6IAA6AIaiAAIAAaAg");
	var mask_1_graphics_306 = new cjs.Graphics().p("EBliAbsIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_307 = new cjs.Graphics().p("EBliAbaIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_308 = new cjs.Graphics().p("EBliAbCIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_309 = new cjs.Graphics().p("EBliAahIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_310 = new cjs.Graphics().p("EBliAZzIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_311 = new cjs.Graphics().p("EBliAY7IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_312 = new cjs.Graphics().p("EBliAYJIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_313 = new cjs.Graphics().p("EBliAXjIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_314 = new cjs.Graphics().p("EBliAXIIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_315 = new cjs.Graphics().p("EBliAWzIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_316 = new cjs.Graphics().p("EBliAWkIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_317 = new cjs.Graphics().p("EBliAWYIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_318 = new cjs.Graphics().p("EBliAWPIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_319 = new cjs.Graphics().p("EBliAWHIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_320 = new cjs.Graphics().p("EBliAWBIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_321 = new cjs.Graphics().p("EBliAV9IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_322 = new cjs.Graphics().p("EBliAV6IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_323 = new cjs.Graphics().p("EBliAV3IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_324 = new cjs.Graphics().p("EBliAV2IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_325 = new cjs.Graphics().p("EBliAV1IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_326 = new cjs.Graphics().p("EBliAV0IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_336 = new cjs.Graphics().p("EBlIAfqIAA6hIbFAAIAAahg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EBlIAfqIAA6hIbFAAIAAahg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EBlIAfpIAA6hIbFAAIAAahg");
	var mask_1_graphics_339 = new cjs.Graphics().p("EBlIAfpIAA6hIbFAAIAAahg");
	var mask_1_graphics_340 = new cjs.Graphics().p("EBlIAfnIAA6hIbFAAIAAahg");
	var mask_1_graphics_341 = new cjs.Graphics().p("EBlIAfmIAA6hIbFAAIAAahg");
	var mask_1_graphics_342 = new cjs.Graphics().p("EBlIAfjIAA6hIbFAAIAAahg");
	var mask_1_graphics_343 = new cjs.Graphics().p("EBlIAfgIAA6hIbFAAIAAahg");
	var mask_1_graphics_344 = new cjs.Graphics().p("EBlIAfcIAA6hIbFAAIAAahg");
	var mask_1_graphics_345 = new cjs.Graphics().p("EBlIAfXIAA6hIbFAAIAAahg");
	var mask_1_graphics_346 = new cjs.Graphics().p("EBlIAfQIAA6hIbFAAIAAahg");
	var mask_1_graphics_347 = new cjs.Graphics().p("EBlIAfHIAA6hIbFAAIAAahg");
	var mask_1_graphics_348 = new cjs.Graphics().p("EBlIAe6IAA6hIbFAAIAAahg");
	var mask_1_graphics_349 = new cjs.Graphics().p("EBlIAeoIAA6hIbFAAIAAahg");
	var mask_1_graphics_350 = new cjs.Graphics().p("EBlIAeQIAA6hIbFAAIAAahg");
	var mask_1_graphics_351 = new cjs.Graphics().p("EBlIAd2IAA6hIbFAAIAAahg");
	var mask_1_graphics_352 = new cjs.Graphics().p("EBlIAdiIAA6hIbFAAIAAahg");
	var mask_1_graphics_353 = new cjs.Graphics().p("EBlIAdUIAA6hIbFAAIAAahg");
	var mask_1_graphics_354 = new cjs.Graphics().p("EBlIAdJIAA6hIbFAAIAAahg");
	var mask_1_graphics_355 = new cjs.Graphics().p("EBlIAdBIAA6hIbFAAIAAahg");
	var mask_1_graphics_356 = new cjs.Graphics().p("EBlIAc7IAA6hIbFAAIAAahg");
	var mask_1_graphics_357 = new cjs.Graphics().p("EBlIAc2IAA6hIbFAAIAAahg");
	var mask_1_graphics_358 = new cjs.Graphics().p("EBlIAczIAA6hIbFAAIAAahg");
	var mask_1_graphics_359 = new cjs.Graphics().p("EBlIAcwIAA6hIbFAAIAAahg");
	var mask_1_graphics_360 = new cjs.Graphics().p("EBlIAcuIAA6hIbFAAIAAahg");
	var mask_1_graphics_361 = new cjs.Graphics().p("EBlIAcsIAA6hIbFAAIAAahg");
	var mask_1_graphics_362 = new cjs.Graphics().p("EBlIAcrIAA6hIbFAAIAAahg");
	var mask_1_graphics_363 = new cjs.Graphics().p("EBlIAcqIAA6hIbFAAIAAahg");
	var mask_1_graphics_364 = new cjs.Graphics().p("EBlIAcqIAA6hIbFAAIAAahg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AthNQIAA6fIbDAAIAAafg");
	var mask_1_graphics_381 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_382 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_383 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_384 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_385 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_386 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_387 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_388 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_389 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_390 = new cjs.Graphics().p("EBliAchIAA6AIaiAAIAAaAg");
	var mask_1_graphics_391 = new cjs.Graphics().p("EBliAcgIAA6AIaiAAIAAaAg");
	var mask_1_graphics_392 = new cjs.Graphics().p("EBliAceIAA6AIaiAAIAAaAg");
	var mask_1_graphics_393 = new cjs.Graphics().p("EBliAccIAA6AIaiAAIAAaAg");
	var mask_1_graphics_394 = new cjs.Graphics().p("EBliAcYIAA6AIaiAAIAAaAg");
	var mask_1_graphics_395 = new cjs.Graphics().p("EBliAcTIAA6AIaiAAIAAaAg");
	var mask_1_graphics_396 = new cjs.Graphics().p("EBliAcNIAA6AIaiAAIAAaAg");
	var mask_1_graphics_397 = new cjs.Graphics().p("EBliAcFIAA6AIaiAAIAAaAg");
	var mask_1_graphics_398 = new cjs.Graphics().p("EBliAb6IAA6AIaiAAIAAaAg");
	var mask_1_graphics_399 = new cjs.Graphics().p("EBliAbsIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_400 = new cjs.Graphics().p("EBliAbaIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_401 = new cjs.Graphics().p("EBliAbCIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_402 = new cjs.Graphics().p("EBliAahIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_403 = new cjs.Graphics().p("EBliAZzIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_404 = new cjs.Graphics().p("EBliAY7IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_405 = new cjs.Graphics().p("EBliAYJIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_406 = new cjs.Graphics().p("EBliAXjIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_407 = new cjs.Graphics().p("EBliAXIIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_408 = new cjs.Graphics().p("EBliAWzIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_409 = new cjs.Graphics().p("EBliAWkIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_410 = new cjs.Graphics().p("EBliAWYIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_411 = new cjs.Graphics().p("EBliAWPIAA5/IaiAAIAAZ/g");
	var mask_1_graphics_412 = new cjs.Graphics().p("EBliAWHIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_413 = new cjs.Graphics().p("EBliAWBIAA5+IaiAAIAAZ+g");
	var mask_1_graphics_414 = new cjs.Graphics().p("EBliAV9IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_415 = new cjs.Graphics().p("EBliAV6IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_416 = new cjs.Graphics().p("EBliAV3IAA5+IaiAAIAAZ+g");
	var mask_1_graphics_417 = new cjs.Graphics().p("EBliAV2IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_418 = new cjs.Graphics().p("EBliAV1IAA5/IaiAAIAAZ/g");
	var mask_1_graphics_419 = new cjs.Graphics().p("EBliAV0IAA5+IaiAAIAAZ+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:819.6248,y:139.6425}).wait(6).to({graphics:mask_1_graphics_6,x:820.475,y:202.6}).wait(1).to({graphics:mask_1_graphics_7,x:820.475,y:202.5854}).wait(1).to({graphics:mask_1_graphics_8,x:820.475,y:202.5387}).wait(1).to({graphics:mask_1_graphics_9,x:820.475,y:202.4552}).wait(1).to({graphics:mask_1_graphics_10,x:820.475,y:202.3288}).wait(1).to({graphics:mask_1_graphics_11,x:820.475,y:202.1517}).wait(1).to({graphics:mask_1_graphics_12,x:820.475,y:201.9136}).wait(1).to({graphics:mask_1_graphics_13,x:820.475,y:201.6007}).wait(1).to({graphics:mask_1_graphics_14,x:820.475,y:201.194}).wait(1).to({graphics:mask_1_graphics_15,x:820.475,y:200.6658}).wait(1).to({graphics:mask_1_graphics_16,x:820.475,y:199.9739}).wait(1).to({graphics:mask_1_graphics_17,x:820.475,y:199.0517}).wait(1).to({graphics:mask_1_graphics_18,x:820.475,y:197.7882}).wait(1).to({graphics:mask_1_graphics_19,x:820.475,y:196.0108}).wait(1).to({graphics:mask_1_graphics_20,x:820.475,y:193.6052}).wait(1).to({graphics:mask_1_graphics_21,x:820.475,y:191.0366}).wait(1).to({graphics:mask_1_graphics_22,x:820.475,y:189.0051}).wait(1).to({graphics:mask_1_graphics_23,x:820.475,y:187.5518}).wait(1).to({graphics:mask_1_graphics_24,x:820.475,y:186.4962}).wait(1).to({graphics:mask_1_graphics_25,x:820.475,y:185.706}).wait(1).to({graphics:mask_1_graphics_26,x:820.475,y:185.1011}).wait(1).to({graphics:mask_1_graphics_27,x:820.475,y:184.632}).wait(1).to({graphics:mask_1_graphics_28,x:820.475,y:184.2664}).wait(1).to({graphics:mask_1_graphics_29,x:820.475,y:183.9826}).wait(1).to({graphics:mask_1_graphics_30,x:820.475,y:183.7648}).wait(1).to({graphics:mask_1_graphics_31,x:820.475,y:183.6018}).wait(1).to({graphics:mask_1_graphics_32,x:820.475,y:183.4848}).wait(1).to({graphics:mask_1_graphics_33,x:820.475,y:183.4072}).wait(1).to({graphics:mask_1_graphics_34,x:820.475,y:183.3637}).wait(1).to({graphics:mask_1_graphics_35,x:1554.325,y:281.85}).wait(203).to({graphics:mask_1_graphics_238,x:1554.325,y:281.85}).wait(1).to({graphics:mask_1_graphics_239,x:820.4703,y:183.3456}).wait(1).to({graphics:mask_1_graphics_240,x:820.455,y:183.3315}).wait(1).to({graphics:mask_1_graphics_241,x:820.4273,y:183.306}).wait(1).to({graphics:mask_1_graphics_242,x:820.3846,y:183.2667}).wait(1).to({graphics:mask_1_graphics_243,x:820.3236,y:183.2104}).wait(1).to({graphics:mask_1_graphics_244,x:820.2395,y:183.1329}).wait(1).to({graphics:mask_1_graphics_245,x:820.1254,y:183.0277}).wait(1).to({graphics:mask_1_graphics_246,x:819.9708,y:182.8851}).wait(1).to({graphics:mask_1_graphics_247,x:819.7582,y:182.6892}).wait(1).to({graphics:mask_1_graphics_248,x:819.4576,y:182.412}).wait(1).to({graphics:mask_1_graphics_249,x:819.0155,y:182.0044}).wait(1).to({graphics:mask_1_graphics_250,x:818.3749,y:181.3899}).wait(1).to({graphics:mask_1_graphics_251,x:815.7968,y:180.9321}).wait(1).to({graphics:mask_1_graphics_252,x:813.85,y:180.5864}).wait(1).to({graphics:mask_1_graphics_253,x:812.5288,y:180.3518}).wait(1).to({graphics:mask_1_graphics_254,x:811.6041,y:180.1876}).wait(1).to({graphics:mask_1_graphics_255,x:810.9329,y:180.0685}).wait(1).to({graphics:mask_1_graphics_256,x:810.435,y:179.98}).wait(1).to({graphics:mask_1_graphics_257,x:810.0623,y:179.9139}).wait(1).to({graphics:mask_1_graphics_258,x:809.7845,y:179.8645}).wait(1).to({graphics:mask_1_graphics_259,x:809.5813,y:179.8285}).wait(1).to({graphics:mask_1_graphics_260,x:809.4381,y:179.803}).wait(1).to({graphics:mask_1_graphics_261,x:809.3446,y:179.7864}).wait(1).to({graphics:mask_1_graphics_262,x:809.2928,y:179.7772}).wait(1).to({graphics:mask_1_graphics_263,x:809.2767,y:179.7515}).wait(1).to({graphics:mask_1_graphics_264,x:810.0105,y:179.9423}).wait(1).to({graphics:mask_1_graphics_265,x:810.6932,y:180.1199}).wait(1).to({graphics:mask_1_graphics_266,x:811.2711,y:180.2703}).wait(1).to({graphics:mask_1_graphics_267,x:811.7432,y:180.3931}).wait(1).to({graphics:mask_1_graphics_268,x:812.1283,y:180.4933}).wait(1).to({graphics:mask_1_graphics_269,x:812.4456,y:180.5758}).wait(1).to({graphics:mask_1_graphics_270,x:812.71,y:180.6446}).wait(1).to({graphics:mask_1_graphics_271,x:812.9326,y:180.7025}).wait(1).to({graphics:mask_1_graphics_272,x:813.0747,y:180.7048}).wait(1).to({graphics:mask_1_graphics_273,x:813.7527,y:180.8861}).wait(1).to({graphics:mask_1_graphics_274,x:814.3801,y:181.054}).wait(1).to({graphics:mask_1_graphics_275,x:814.9613,y:181.2095}).wait(1).to({graphics:mask_1_graphics_276,x:815.5001,y:181.3536}).wait(1).to({graphics:mask_1_graphics_277,x:815.9998,y:181.4873}).wait(1).to({graphics:mask_1_graphics_278,x:816.4633,y:181.6113}).wait(1).to({graphics:mask_1_graphics_279,x:816.8932,y:181.7263}).wait(1).to({graphics:mask_1_graphics_280,x:817.292,y:181.833}).wait(1).to({graphics:mask_1_graphics_281,x:817.6618,y:181.9319}).wait(1).to({graphics:mask_1_graphics_282,x:818.0044,y:182.0236}).wait(1).to({graphics:mask_1_graphics_283,x:818.3216,y:182.1084}).wait(1).to({graphics:mask_1_graphics_284,x:818.6149,y:182.1869}).wait(1).to({graphics:mask_1_graphics_285,x:818.8857,y:182.2593}).wait(1).to({graphics:mask_1_graphics_286,x:819.1354,y:182.3261}).wait(1).to({graphics:mask_1_graphics_287,x:819.365,y:182.3876}).wait(1).to({graphics:mask_1_graphics_288,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_289,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_290,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_291,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_292,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_293,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_294,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_295,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_296,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_297,x:819.6248,y:182.4871}).wait(1).to({graphics:mask_1_graphics_298,x:819.6248,y:182.3904}).wait(1).to({graphics:mask_1_graphics_299,x:819.6248,y:182.2177}).wait(1).to({graphics:mask_1_graphics_300,x:819.6248,y:181.9571}).wait(1).to({graphics:mask_1_graphics_301,x:819.6248,y:181.5934}).wait(1).to({graphics:mask_1_graphics_302,x:819.6248,y:181.1069}).wait(1).to({graphics:mask_1_graphics_303,x:819.6248,y:180.4713}).wait(1).to({graphics:mask_1_graphics_304,x:819.6248,y:179.6511}).wait(1).to({graphics:mask_1_graphics_305,x:819.6248,y:178.5956}).wait(1).to({graphics:mask_1_graphics_306,x:819.6248,y:177.2304}).wait(1).to({graphics:mask_1_graphics_307,x:819.6248,y:175.4401}).wait(1).to({graphics:mask_1_graphics_308,x:819.6248,y:173.0388}).wait(1).to({graphics:mask_1_graphics_309,x:819.6248,y:169.7261}).wait(1).to({graphics:mask_1_graphics_310,x:819.6248,y:165.1379}).wait(1).to({graphics:mask_1_graphics_311,x:819.6248,y:159.5416}).wait(1).to({graphics:mask_1_graphics_312,x:819.6248,y:154.4687}).wait(1).to({graphics:mask_1_graphics_313,x:819.6248,y:150.7015}).wait(1).to({graphics:mask_1_graphics_314,x:819.6248,y:147.9742}).wait(1).to({graphics:mask_1_graphics_315,x:819.6248,y:145.9474}).wait(1).to({graphics:mask_1_graphics_316,x:819.6248,y:144.4016}).wait(1).to({graphics:mask_1_graphics_317,x:819.6248,y:143.2014}).wait(1).to({graphics:mask_1_graphics_318,x:819.6248,y:142.2605}).wait(1).to({graphics:mask_1_graphics_319,x:819.6248,y:141.5213}).wait(1).to({graphics:mask_1_graphics_320,x:819.6248,y:140.9435}).wait(1).to({graphics:mask_1_graphics_321,x:819.6248,y:140.498}).wait(1).to({graphics:mask_1_graphics_322,x:819.6248,y:140.163}).wait(1).to({graphics:mask_1_graphics_323,x:819.6248,y:139.9217}).wait(1).to({graphics:mask_1_graphics_324,x:819.6248,y:139.7612}).wait(1).to({graphics:mask_1_graphics_325,x:819.6248,y:139.671}).wait(1).to({graphics:mask_1_graphics_326,x:819.6248,y:139.6425}).wait(10).to({graphics:mask_1_graphics_336,x:820.475,y:202.6}).wait(1).to({graphics:mask_1_graphics_337,x:820.475,y:202.5854}).wait(1).to({graphics:mask_1_graphics_338,x:820.475,y:202.5387}).wait(1).to({graphics:mask_1_graphics_339,x:820.475,y:202.4552}).wait(1).to({graphics:mask_1_graphics_340,x:820.475,y:202.3288}).wait(1).to({graphics:mask_1_graphics_341,x:820.475,y:202.1517}).wait(1).to({graphics:mask_1_graphics_342,x:820.475,y:201.9136}).wait(1).to({graphics:mask_1_graphics_343,x:820.475,y:201.6007}).wait(1).to({graphics:mask_1_graphics_344,x:820.475,y:201.194}).wait(1).to({graphics:mask_1_graphics_345,x:820.475,y:200.6658}).wait(1).to({graphics:mask_1_graphics_346,x:820.475,y:199.9739}).wait(1).to({graphics:mask_1_graphics_347,x:820.475,y:199.0517}).wait(1).to({graphics:mask_1_graphics_348,x:820.475,y:197.7882}).wait(1).to({graphics:mask_1_graphics_349,x:820.475,y:196.0108}).wait(1).to({graphics:mask_1_graphics_350,x:820.475,y:193.6052}).wait(1).to({graphics:mask_1_graphics_351,x:820.475,y:191.0366}).wait(1).to({graphics:mask_1_graphics_352,x:820.475,y:189.0051}).wait(1).to({graphics:mask_1_graphics_353,x:820.475,y:187.5518}).wait(1).to({graphics:mask_1_graphics_354,x:820.475,y:186.4962}).wait(1).to({graphics:mask_1_graphics_355,x:820.475,y:185.706}).wait(1).to({graphics:mask_1_graphics_356,x:820.475,y:185.1011}).wait(1).to({graphics:mask_1_graphics_357,x:820.475,y:184.632}).wait(1).to({graphics:mask_1_graphics_358,x:820.475,y:184.2664}).wait(1).to({graphics:mask_1_graphics_359,x:820.475,y:183.9826}).wait(1).to({graphics:mask_1_graphics_360,x:820.475,y:183.7648}).wait(1).to({graphics:mask_1_graphics_361,x:820.475,y:183.6018}).wait(1).to({graphics:mask_1_graphics_362,x:820.475,y:183.4848}).wait(1).to({graphics:mask_1_graphics_363,x:820.475,y:183.4072}).wait(1).to({graphics:mask_1_graphics_364,x:820.475,y:183.3637}).wait(1).to({graphics:mask_1_graphics_365,x:1554.325,y:281.85}).wait(16).to({graphics:mask_1_graphics_381,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_382,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_383,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_384,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_385,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_386,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_387,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_388,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_389,x:819.6248,y:182.5175}).wait(1).to({graphics:mask_1_graphics_390,x:819.6248,y:182.4871}).wait(1).to({graphics:mask_1_graphics_391,x:819.6248,y:182.3904}).wait(1).to({graphics:mask_1_graphics_392,x:819.6248,y:182.2177}).wait(1).to({graphics:mask_1_graphics_393,x:819.6248,y:181.9571}).wait(1).to({graphics:mask_1_graphics_394,x:819.6248,y:181.5934}).wait(1).to({graphics:mask_1_graphics_395,x:819.6248,y:181.1069}).wait(1).to({graphics:mask_1_graphics_396,x:819.6248,y:180.4713}).wait(1).to({graphics:mask_1_graphics_397,x:819.6248,y:179.6511}).wait(1).to({graphics:mask_1_graphics_398,x:819.6248,y:178.5956}).wait(1).to({graphics:mask_1_graphics_399,x:819.6248,y:177.2304}).wait(1).to({graphics:mask_1_graphics_400,x:819.6248,y:175.4401}).wait(1).to({graphics:mask_1_graphics_401,x:819.6248,y:173.0388}).wait(1).to({graphics:mask_1_graphics_402,x:819.6248,y:169.7261}).wait(1).to({graphics:mask_1_graphics_403,x:819.6248,y:165.1379}).wait(1).to({graphics:mask_1_graphics_404,x:819.6248,y:159.5416}).wait(1).to({graphics:mask_1_graphics_405,x:819.6248,y:154.4687}).wait(1).to({graphics:mask_1_graphics_406,x:819.6248,y:150.7015}).wait(1).to({graphics:mask_1_graphics_407,x:819.6248,y:147.9742}).wait(1).to({graphics:mask_1_graphics_408,x:819.6248,y:145.9474}).wait(1).to({graphics:mask_1_graphics_409,x:819.6248,y:144.4016}).wait(1).to({graphics:mask_1_graphics_410,x:819.6248,y:143.2014}).wait(1).to({graphics:mask_1_graphics_411,x:819.6248,y:142.2605}).wait(1).to({graphics:mask_1_graphics_412,x:819.6248,y:141.5213}).wait(1).to({graphics:mask_1_graphics_413,x:819.6248,y:140.9435}).wait(1).to({graphics:mask_1_graphics_414,x:819.6248,y:140.498}).wait(1).to({graphics:mask_1_graphics_415,x:819.6248,y:140.163}).wait(1).to({graphics:mask_1_graphics_416,x:819.6248,y:139.9217}).wait(1).to({graphics:mask_1_graphics_417,x:819.6248,y:139.7612}).wait(1).to({graphics:mask_1_graphics_418,x:819.6248,y:139.671}).wait(1).to({graphics:mask_1_graphics_419,x:819.6248,y:139.6425}).wait(1));

	// Слой_28
	this.instance_6 = new lib.Анимация2("synched",0);
	this.instance_6.setTransform(1383.25,438.95,0.7446,0.7446,0,0,0,0.1,0.4);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({y:563.2},0).wait(1).to({regX:0,regY:0,x:1383.2,y:562.8707,alpha:0.0008},0).wait(1).to({y:562.7774,alpha:0.0032},0).wait(1).to({y:562.6105,alpha:0.0075},0).wait(1).to({y:562.3576,alpha:0.0141},0).wait(1).to({y:562.0033,alpha:0.0233},0).wait(1).to({y:561.5271,alpha:0.0357},0).wait(1).to({y:560.9015,alpha:0.0519},0).wait(1).to({y:560.0881,alpha:0.073},0).wait(1).to({y:559.0316,alpha:0.1005},0).wait(1).to({y:557.6479,alpha:0.1364},0).wait(1).to({y:555.8034,alpha:0.1843},0).wait(1).to({y:553.2764,alpha:0.25},0).wait(1).to({y:549.7215,alpha:0.3423},0).wait(1).to({y:544.9105,alpha:0.4673},0).wait(1).to({y:539.7731,alpha:0.6007},0).wait(1).to({y:535.7101,alpha:0.7062},0).wait(1).to({y:532.8037,alpha:0.7817},0).wait(1).to({y:530.6925,alpha:0.8366},0).wait(1).to({y:529.1121,alpha:0.8776},0).wait(1).to({y:527.9023,alpha:0.909},0).wait(1).to({y:526.964,alpha:0.9334},0).wait(1).to({y:526.2329,alpha:0.9524},0).wait(1).to({y:525.6651,alpha:0.9671},0).wait(1).to({y:525.2296,alpha:0.9785},0).wait(1).to({y:524.9035,alpha:0.9869},0).wait(1).to({y:524.6696,alpha:0.993},0).wait(1).to({y:524.5144,alpha:0.997},0).wait(1).to({y:524.4274,alpha:0.9993},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:524.7,alpha:1},0).wait(203).to({startPosition:0},0).wait(1).to({regX:0,regY:0,scaleX:0.7445,scaleY:0.7445,x:1383.2003,y:524.3765},0).wait(1).to({scaleX:0.7443,scaleY:0.7443,x:1383.2012,y:524.3007},0).wait(1).to({scaleX:0.7439,scaleY:0.7439,x:1383.2029,y:524.1632},0).wait(1).to({scaleX:0.7432,scaleY:0.7432,x:1383.2056,y:523.9515},0).wait(1).to({scaleX:0.7423,scaleY:0.7423,x:1383.2093,y:523.6488},0).wait(1).to({scaleX:0.741,scaleY:0.741,x:1383.2145,y:523.2316},0).wait(1).to({scaleX:0.7393,scaleY:0.7393,x:1383.2216,y:522.6656},0).wait(1).to({scaleX:0.737,scaleY:0.737,x:1383.2311,y:521.8983},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:1383.2442,y:520.8438},0).wait(1).to({scaleX:0.7293,scaleY:0.7293,x:1383.2627,y:519.3522},0).wait(1).to({scaleX:0.7226,scaleY:0.7226,x:1383.29,y:517.1586},0).wait(1).to({scaleX:0.713,scaleY:0.713,x:1383.3295,y:513.9804},0).wait(1).to({scaleX:0.7024,scaleY:0.7024,x:1383.3732,y:510.4631},0).wait(1).to({scaleX:0.6943,scaleY:0.6943,x:1383.4062,y:507.807},0).wait(1).to({scaleX:0.6889,scaleY:0.6889,x:1383.4286,y:506.0044},0).wait(1).to({scaleX:0.685,scaleY:0.685,x:1383.4443,y:504.7428},0).wait(1).to({scaleX:0.6823,scaleY:0.6823,x:1383.4557,y:503.8272},0).wait(1).to({scaleX:0.6802,scaleY:0.6802,x:1383.4641,y:503.1478},0).wait(1).to({scaleX:0.6787,scaleY:0.6787,x:1383.4705,y:502.6393},0).wait(1).to({scaleX:0.6775,scaleY:0.6775,x:1383.4752,y:502.2604},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:1383.4786,y:501.9831},0).wait(1).to({scaleX:0.6761,scaleY:0.6761,x:1383.481,y:501.7878},0).wait(1).to({scaleX:0.6757,scaleY:0.6757,x:1383.4826,y:501.6602},0).wait(1).to({scaleX:0.6755,scaleY:0.6755,x:1383.4835,y:501.5895},0).wait(1).to({regX:0.2,regY:0.5,scaleX:0.6754,scaleY:0.6754,x:1383.6,y:501.85},0).wait(1).to({regX:0,regY:0,scaleX:0.6755,scaleY:0.6755,x:1383.4499,y:501.5104},0).wait(1).to({scaleX:0.6756,scaleY:0.6756,x:1383.4495,y:501.5428},0).wait(1).to({scaleX:0.6757,scaleY:0.6757,x:1383.4487,y:501.5994},0).wait(1).to({scaleX:0.676,scaleY:0.676,x:1383.4477,y:501.6828},0).wait(1).to({scaleX:0.6763,scaleY:0.6763,x:1383.4463,y:501.7961},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:1383.4444,y:501.9428},0).wait(1).to({scaleX:0.6773,scaleY:0.6773,x:1383.4421,y:502.1271},0).wait(1).to({scaleX:0.678,scaleY:0.678,x:1383.4392,y:502.3543},0).wait(1).to({scaleX:0.6789,scaleY:0.6789,x:1383.4358,y:502.6308},0).wait(1).to({scaleX:0.6799,scaleY:0.6799,x:1383.4316,y:502.9645},0).wait(1).to({scaleX:0.6811,scaleY:0.6811,x:1383.4265,y:503.3655},0).wait(1).to({scaleX:0.6825,scaleY:0.6825,x:1383.4205,y:503.8469},0).wait(1).to({scaleX:0.6843,scaleY:0.6843,x:1383.4132,y:504.4259},0).wait(1).to({scaleX:0.6864,scaleY:0.6864,x:1383.4044,y:505.1261},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:1383.3936,y:505.9799},0).wait(1).to({scaleX:0.6922,scaleY:0.6922,x:1383.3804,y:507.0336},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,x:1383.3638,y:508.3537},0).wait(1).to({scaleX:0.7013,scaleY:0.7013,x:1383.3426,y:510.031},0).wait(1).to({scaleX:0.7077,scaleY:0.7077,x:1383.3159,y:512.1606},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,x:1383.2836,y:514.7242},0).wait(1).to({scaleX:0.7236,scaleY:0.7236,x:1383.2499,y:517.4001},0).wait(1).to({scaleX:0.7307,scaleY:0.7307,x:1383.2203,y:519.7565},0).wait(1).to({scaleX:0.7365,scaleY:0.7365,x:1383.1965,y:521.6478},0).wait(1).to({scaleX:0.741,scaleY:0.741,x:1383.1777,y:523.1385},0).wait(1).to({regX:0.1,regY:0.4,scaleX:0.7446,scaleY:0.7446,x:1383.25,y:524.7},0).wait(1).to({regX:0,regY:0,x:1383.2,y:524.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:524.7},0).wait(1).to({regX:0,regY:0,x:1383.2,y:524.3392,alpha:0.9993},0).wait(1).to({y:524.1457,alpha:0.997},0).wait(1).to({y:523.8004,alpha:0.993},0).wait(1).to({y:523.2793,alpha:0.9869},0).wait(1).to({y:522.5518,alpha:0.9784},0).wait(1).to({y:521.5787,alpha:0.9671},0).wait(1).to({y:520.3077,alpha:0.9523},0).wait(1).to({y:518.6672,alpha:0.9331},0).wait(1).to({y:516.5563,alpha:0.9085},0).wait(1).to({y:513.8257,alpha:0.8767},0).wait(1).to({y:510.2451,alpha:0.8349},0).wait(1).to({y:505.4425,alpha:0.7789},0).wait(1).to({y:498.8172,alpha:0.7017},0).wait(1).to({y:489.6409,alpha:0.5946},0).wait(1).to({y:478.4482,alpha:0.4641},0).wait(1).to({y:468.3024,alpha:0.3458},0).wait(1).to({y:460.768,alpha:0.2579},0).wait(1).to({y:455.3133,alpha:0.1943},0).wait(1).to({y:451.2599,alpha:0.1471},0).wait(1).to({y:448.1682,alpha:0.111},0).wait(1).to({y:445.7677,alpha:0.083},0).wait(1).to({y:443.886,alpha:0.0611},0).wait(1).to({y:442.4076,alpha:0.0438},0).wait(1).to({y:441.252,alpha:0.0303},0).wait(1).to({y:440.361,alpha:0.02},0).wait(1).to({y:439.6909,alpha:0.0121},0).wait(1).to({y:439.2085,alpha:0.0065},0).wait(1).to({y:438.8874,alpha:0.0028},0).wait(1).to({y:438.7069,alpha:0.0007},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:438.95,alpha:0},0).wait(10).to({y:563.2},0).wait(1).to({regX:0,regY:0,x:1383.2,y:562.8707,alpha:0.0008},0).wait(1).to({y:562.7774,alpha:0.0032},0).wait(1).to({y:562.6105,alpha:0.0075},0).wait(1).to({y:562.3576,alpha:0.0141},0).wait(1).to({y:562.0033,alpha:0.0233},0).wait(1).to({y:561.5271,alpha:0.0357},0).wait(1).to({y:560.9015,alpha:0.0519},0).wait(1).to({y:560.0881,alpha:0.073},0).wait(1).to({y:559.0316,alpha:0.1005},0).wait(1).to({y:557.6479,alpha:0.1364},0).wait(1).to({y:555.8034,alpha:0.1843},0).wait(1).to({y:553.2764,alpha:0.25},0).wait(1).to({y:549.7215,alpha:0.3423},0).wait(1).to({y:544.9105,alpha:0.4673},0).wait(1).to({y:539.7731,alpha:0.6007},0).wait(1).to({y:535.7101,alpha:0.7062},0).wait(1).to({y:532.8037,alpha:0.7817},0).wait(1).to({y:530.6925,alpha:0.8366},0).wait(1).to({y:529.1121,alpha:0.8776},0).wait(1).to({y:527.9023,alpha:0.909},0).wait(1).to({y:526.964,alpha:0.9334},0).wait(1).to({y:526.2329,alpha:0.9524},0).wait(1).to({y:525.6651,alpha:0.9671},0).wait(1).to({y:525.2296,alpha:0.9785},0).wait(1).to({y:524.9035,alpha:0.9869},0).wait(1).to({y:524.6696,alpha:0.993},0).wait(1).to({y:524.5144,alpha:0.997},0).wait(1).to({y:524.4274,alpha:0.9993},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:524.7,alpha:1},0).wait(16).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:1383.2,y:524.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:524.7},0).wait(1).to({regX:0,regY:0,x:1383.2,y:524.3392,alpha:0.9993},0).wait(1).to({y:524.1457,alpha:0.997},0).wait(1).to({y:523.8004,alpha:0.993},0).wait(1).to({y:523.2793,alpha:0.9869},0).wait(1).to({y:522.5518,alpha:0.9784},0).wait(1).to({y:521.5787,alpha:0.9671},0).wait(1).to({y:520.3077,alpha:0.9523},0).wait(1).to({y:518.6672,alpha:0.9331},0).wait(1).to({y:516.5563,alpha:0.9085},0).wait(1).to({y:513.8257,alpha:0.8767},0).wait(1).to({y:510.2451,alpha:0.8349},0).wait(1).to({y:505.4425,alpha:0.7789},0).wait(1).to({y:498.8172,alpha:0.7017},0).wait(1).to({y:489.6409,alpha:0.5946},0).wait(1).to({y:478.4482,alpha:0.4641},0).wait(1).to({y:468.3024,alpha:0.3458},0).wait(1).to({y:460.768,alpha:0.2579},0).wait(1).to({y:455.3133,alpha:0.1943},0).wait(1).to({y:451.2599,alpha:0.1471},0).wait(1).to({y:448.1682,alpha:0.111},0).wait(1).to({y:445.7677,alpha:0.083},0).wait(1).to({y:443.886,alpha:0.0611},0).wait(1).to({y:442.4076,alpha:0.0438},0).wait(1).to({y:441.252,alpha:0.0303},0).wait(1).to({y:440.361,alpha:0.02},0).wait(1).to({y:439.6909,alpha:0.0121},0).wait(1).to({y:439.2085,alpha:0.0065},0).wait(1).to({y:438.8874,alpha:0.0028},0).wait(1).to({y:438.7069,alpha:0.0007},0).wait(1).to({regX:0.1,regY:0.4,x:1383.25,y:438.95,alpha:0},0).wait(1));

	// Слой_26 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EBOAArQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EBOAArQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EBOAArQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EBOAArPMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EBOAArOMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EBOAArMMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EBOAArJMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EBOAArGMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EBOAArCMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EBOAAq9MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EBOAAq2MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EBOAAqtMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EBOAAqgMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EBOAAqOMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EBOAAp2MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EBOAApdMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EBOAApIMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EBOAAo6MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EBOAAovMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EBOAAonMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EBOAAohMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EBOAAodMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EBOAAoZMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EBOAAoWMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EBOAAoUMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EBOAAoSMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EBOAAoRMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EBOAAoQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EBOAAoQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AyxSyMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AyxSyMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EBOBAoQMAAAglkMAljAAAMAAAAlkg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EBOBAoQMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_241 = new cjs.Graphics().p("EBOBAoPMAAAgliMAliAAAMAAAAlig");
	var mask_2_graphics_242 = new cjs.Graphics().p("EBOBAoPMAAAglhMAliAAAMAAAAlhg");
	var mask_2_graphics_243 = new cjs.Graphics().p("EBODAoOMAAAgleMAleAAAMAAAAleg");
	var mask_2_graphics_244 = new cjs.Graphics().p("EBOEAoMMAAAglZMAlaAAAMAAAAlZg");
	var mask_2_graphics_245 = new cjs.Graphics().p("EBO4An5MAAAgkSMAkSAAAMAAAAkSg");
	var mask_2_graphics_246 = new cjs.Graphics().p("EBPQAnxMAAAgjxMAjxAAAMAAAAjxg");
	var mask_2_graphics_247 = new cjs.Graphics().p("EBPcAnsMAAAgjfMAjgAAAMAAAAjfg");
	var mask_2_graphics_248 = new cjs.Graphics().p("EBPjAnqMAAAgjWMAjXAAAMAAAAjWg");
	var mask_2_graphics_249 = new cjs.Graphics().p("EBPnAnpMAAAgjSMAjRAAAMAAAAjSg");
	var mask_2_graphics_250 = new cjs.Graphics().p("EBPoAnpMAAAgjRMAjQAAAMAAAAjRg");
	var mask_2_graphics_251 = new cjs.Graphics().p("EBRvAm8MAAAggcMAgcAAAMAAAAgcg");
	var mask_2_graphics_252 = new cjs.Graphics().p("EBRzAm6MAAAggWMAgXAAAMAAAAgWg");
	var mask_2_graphics_253 = new cjs.Graphics().p("EBR6Am4MAAAggOMAgOAAAMAAAAgOg");
	var mask_2_graphics_254 = new cjs.Graphics().p("EBSDAm1MAAAggCMAgCAAAMAAAAgCg");
	var mask_2_graphics_255 = new cjs.Graphics().p("EBSQAmxIAA/wIfxAAIAAfwg");
	var mask_2_graphics_256 = new cjs.Graphics().p("EBSlAmqIAA/VIfUAAIAAfVg");
	var mask_2_graphics_257 = new cjs.Graphics().p("EBSxAmlIAA/DIfEAAIAAfDg");
	var mask_2_graphics_258 = new cjs.Graphics().p("EBS5AmjIAA+6Ie5AAIAAe6g");
	var mask_2_graphics_259 = new cjs.Graphics().p("EBS8AmhIAA+0Ie1AAIAAe0g");
	var mask_2_graphics_260 = new cjs.Graphics().p("EBS+AmgIAA+xIeyAAIAAexg");
	var mask_2_graphics_261 = new cjs.Graphics().p("EBS/AmgIAA+wIexAAIAAewg");
	var mask_2_graphics_262 = new cjs.Graphics().p("EBTAAmgIAA+wIevAAIAAewg");
	var mask_2_graphics_263 = new cjs.Graphics().p("EBTBAmgIAA+vIevAAIAAevg");
	var mask_2_graphics_264 = new cjs.Graphics().p("EBTAAmhIAA+wIewAAIAAewg");
	var mask_2_graphics_265 = new cjs.Graphics().p("EBS/AmhIAA+xIexAAIAAexg");
	var mask_2_graphics_266 = new cjs.Graphics().p("EBS9AmiIAA+0Ie0AAIAAe0g");
	var mask_2_graphics_267 = new cjs.Graphics().p("EBS6AmjIAA+4Ie4AAIAAe4g");
	var mask_2_graphics_268 = new cjs.Graphics().p("EBS2AmkIAA+9Ie+AAIAAe9g");
	var mask_2_graphics_269 = new cjs.Graphics().p("EBSwAmmIAA/FIfGAAIAAfFg");
	var mask_2_graphics_270 = new cjs.Graphics().p("EBSoAmpIAA/QIfRAAIAAfQg");
	var mask_2_graphics_271 = new cjs.Graphics().p("EBSeAmtIAA/fIffAAIAAffg");
	var mask_2_graphics_272 = new cjs.Graphics().p("EBSPAmyIAA/zIfzAAIAAfzg");
	var mask_2_graphics_273 = new cjs.Graphics().p("EBR6Am5MAAAggQMAgQAAAMAAAAgQg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EBRbAnEMAAAgg6MAg6AAAMAAAAg6g");
	var mask_2_graphics_275 = new cjs.Graphics().p("EBQuAnTMAAAgh2MAh3AAAMAAAAh2g");
	var mask_2_graphics_276 = new cjs.Graphics().p("EBP9AnkMAAAgi5MAi6AAAMAAAAi5g");
	var mask_2_graphics_277 = new cjs.Graphics().p("EBPYAnxMAAAgjsMAjsAAAMAAAAjsg");
	var mask_2_graphics_278 = new cjs.Graphics().p("EBO/An6MAAAgkPMAkOAAAMAAAAkPg");
	var mask_2_graphics_279 = new cjs.Graphics().p("EBOtAoAMAAAgknMAknAAAMAAAAkng");
	var mask_2_graphics_280 = new cjs.Graphics().p("EBOgAoFMAAAgk5MAk4AAAMAAAAk5g");
	var mask_2_graphics_281 = new cjs.Graphics().p("EBOWAoIMAAAglFMAlGAAAMAAAAlFg");
	var mask_2_graphics_282 = new cjs.Graphics().p("EBOPAoKMAAAglPMAlPAAAMAAAAlPg");
	var mask_2_graphics_283 = new cjs.Graphics().p("EBOKAoMMAAAglWMAlWAAAMAAAAlWg");
	var mask_2_graphics_284 = new cjs.Graphics().p("EBOGAoNMAAAglbMAlcAAAMAAAAlbg");
	var mask_2_graphics_285 = new cjs.Graphics().p("EBODAoOMAAAglfMAlgAAAMAAAAlfg");
	var mask_2_graphics_286 = new cjs.Graphics().p("EBOCAoPMAAAgliMAlhAAAMAAAAlig");
	var mask_2_graphics_287 = new cjs.Graphics().p("EBOBAoPMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AyxSyMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EBOAAoPMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EBOAAoOMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EBOAAoNMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_292 = new cjs.Graphics().p("EBOAAoKMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_293 = new cjs.Graphics().p("EBOAAoHMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EBOAAoCMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_295 = new cjs.Graphics().p("EBOAAn7MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_296 = new cjs.Graphics().p("EBOAAnzMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_297 = new cjs.Graphics().p("EBOAAnpMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_298 = new cjs.Graphics().p("EBOAAnbMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_299 = new cjs.Graphics().p("EBOAAnJMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_300 = new cjs.Graphics().p("EBOAAmxMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_301 = new cjs.Graphics().p("EBOAAmQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_302 = new cjs.Graphics().p("EBOAAliMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_303 = new cjs.Graphics().p("EBOAAkqMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_304 = new cjs.Graphics().p("EBOAAj3MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_305 = new cjs.Graphics().p("EBOAAjSMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_306 = new cjs.Graphics().p("EBOAAi2MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_307 = new cjs.Graphics().p("EBOAAiiMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_308 = new cjs.Graphics().p("EBOAAiTMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_309 = new cjs.Graphics().p("EBOAAiHMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_310 = new cjs.Graphics().p("EBOAAh9MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_311 = new cjs.Graphics().p("EBOAAh2MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_312 = new cjs.Graphics().p("EBOAAhwMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_313 = new cjs.Graphics().p("EBOAAhsMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_314 = new cjs.Graphics().p("EBOAAhoMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_315 = new cjs.Graphics().p("EBOAAhmMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_316 = new cjs.Graphics().p("EBOAAhkMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_317 = new cjs.Graphics().p("EBOAAhjMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_318 = new cjs.Graphics().p("EBOAAhjMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_330 = new cjs.Graphics().p("EBOAArQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_331 = new cjs.Graphics().p("EBOAArQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_332 = new cjs.Graphics().p("EBOAArQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_333 = new cjs.Graphics().p("EBOAArPMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_334 = new cjs.Graphics().p("EBOAArOMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_335 = new cjs.Graphics().p("EBOAArMMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_336 = new cjs.Graphics().p("EBOAArJMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_337 = new cjs.Graphics().p("EBOAArGMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_338 = new cjs.Graphics().p("EBOAArCMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_339 = new cjs.Graphics().p("EBOAAq9MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_340 = new cjs.Graphics().p("EBOAAq2MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_341 = new cjs.Graphics().p("EBOAAqtMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_342 = new cjs.Graphics().p("EBOAAqgMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_343 = new cjs.Graphics().p("EBOAAqOMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_344 = new cjs.Graphics().p("EBOAAp2MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_345 = new cjs.Graphics().p("EBOAApdMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_346 = new cjs.Graphics().p("EBOAApIMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_347 = new cjs.Graphics().p("EBOAAo6MAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_348 = new cjs.Graphics().p("EBOAAovMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_349 = new cjs.Graphics().p("EBOAAonMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_350 = new cjs.Graphics().p("EBOAAohMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_351 = new cjs.Graphics().p("EBOAAodMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_352 = new cjs.Graphics().p("EBOAAoZMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EBOAAoWMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EBOAAoUMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EBOAAoSMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EBOAAoRMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EBOAAoQMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EBOAAoQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AyxSyMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AyxSyMAAAgljMAljAAAMAAAAljg");
	var mask_2_graphics_382 = new cjs.Graphics().p("EBOAAoPMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_383 = new cjs.Graphics().p("EBOAAoOMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_384 = new cjs.Graphics().p("EBOAAoNMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_385 = new cjs.Graphics().p("EBOAAoKMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_386 = new cjs.Graphics().p("EBOAAoHMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_387 = new cjs.Graphics().p("EBOAAoCMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_388 = new cjs.Graphics().p("EBOAAn7MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_389 = new cjs.Graphics().p("EBOAAnzMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_390 = new cjs.Graphics().p("EBOAAnpMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_391 = new cjs.Graphics().p("EBOAAnbMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_392 = new cjs.Graphics().p("EBOAAnJMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_393 = new cjs.Graphics().p("EBOAAmxMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_394 = new cjs.Graphics().p("EBOAAmQMAAAglkMAlkAAAMAAAAlkg");
	var mask_2_graphics_395 = new cjs.Graphics().p("EBOAAliMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_396 = new cjs.Graphics().p("EBOAAkqMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_397 = new cjs.Graphics().p("EBOAAj3MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_398 = new cjs.Graphics().p("EBOAAjSMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_399 = new cjs.Graphics().p("EBOAAi2MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_400 = new cjs.Graphics().p("EBOAAiiMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_401 = new cjs.Graphics().p("EBOAAiTMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_402 = new cjs.Graphics().p("EBOAAiHMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_403 = new cjs.Graphics().p("EBOAAh9MAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_404 = new cjs.Graphics().p("EBOAAh2MAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_405 = new cjs.Graphics().p("EBOAAhwMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_406 = new cjs.Graphics().p("EBOAAhsMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_407 = new cjs.Graphics().p("EBOAAhoMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_408 = new cjs.Graphics().p("EBOAAhmMAAAgljMAlkAAAMAAAAljg");
	var mask_2_graphics_409 = new cjs.Graphics().p("EBOAAhkMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_410 = new cjs.Graphics().p("EBOAAhjMAAAgliMAlkAAAMAAAAlig");
	var mask_2_graphics_411 = new cjs.Graphics().p("EBOAAhjMAAAgliMAlkAAAMAAAAlig");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:739.6,y:276.825}).wait(1).to({graphics:mask_2_graphics_1,x:739.6,y:276.8104}).wait(1).to({graphics:mask_2_graphics_2,x:739.6,y:276.7637}).wait(1).to({graphics:mask_2_graphics_3,x:739.6,y:276.6802}).wait(1).to({graphics:mask_2_graphics_4,x:739.6,y:276.5538}).wait(1).to({graphics:mask_2_graphics_5,x:739.6,y:276.3767}).wait(1).to({graphics:mask_2_graphics_6,x:739.6,y:276.1386}).wait(1).to({graphics:mask_2_graphics_7,x:739.6,y:275.8257}).wait(1).to({graphics:mask_2_graphics_8,x:739.6,y:275.419}).wait(1).to({graphics:mask_2_graphics_9,x:739.6,y:274.8908}).wait(1).to({graphics:mask_2_graphics_10,x:739.6,y:274.1989}).wait(1).to({graphics:mask_2_graphics_11,x:739.6,y:273.2767}).wait(1).to({graphics:mask_2_graphics_12,x:739.6,y:272.0132}).wait(1).to({graphics:mask_2_graphics_13,x:739.6,y:270.2358}).wait(1).to({graphics:mask_2_graphics_14,x:739.6,y:267.8302}).wait(1).to({graphics:mask_2_graphics_15,x:739.6,y:265.2616}).wait(1).to({graphics:mask_2_graphics_16,x:739.6,y:263.2301}).wait(1).to({graphics:mask_2_graphics_17,x:739.6,y:261.7768}).wait(1).to({graphics:mask_2_graphics_18,x:739.6,y:260.7212}).wait(1).to({graphics:mask_2_graphics_19,x:739.6,y:259.931}).wait(1).to({graphics:mask_2_graphics_20,x:739.6,y:259.3261}).wait(1).to({graphics:mask_2_graphics_21,x:739.6,y:258.857}).wait(1).to({graphics:mask_2_graphics_22,x:739.6,y:258.4914}).wait(1).to({graphics:mask_2_graphics_23,x:739.6,y:258.2076}).wait(1).to({graphics:mask_2_graphics_24,x:739.6,y:257.9898}).wait(1).to({graphics:mask_2_graphics_25,x:739.6,y:257.8268}).wait(1).to({graphics:mask_2_graphics_26,x:739.6,y:257.7098}).wait(1).to({graphics:mask_2_graphics_27,x:739.6,y:257.6322}).wait(1).to({graphics:mask_2_graphics_28,x:739.6,y:257.5887}).wait(1).to({graphics:mask_2_graphics_29,x:1359.025,y:394.975}).wait(209).to({graphics:mask_2_graphics_238,x:1359.025,y:394.975}).wait(1).to({graphics:mask_2_graphics_239,x:739.5946,y:257.5721}).wait(1).to({graphics:mask_2_graphics_240,x:739.5756,y:257.5617}).wait(1).to({graphics:mask_2_graphics_241,x:739.5359,y:257.54}).wait(1).to({graphics:mask_2_graphics_242,x:739.4606,y:257.4988}).wait(1).to({graphics:mask_2_graphics_243,x:739.31,y:257.4165}).wait(1).to({graphics:mask_2_graphics_244,x:738.9691,y:257.1941}).wait(1).to({graphics:mask_2_graphics_245,x:737.0154,y:255.3449}).wait(1).to({graphics:mask_2_graphics_246,x:736.1001,y:254.4784}).wait(1).to({graphics:mask_2_graphics_247,x:735.6201,y:254.024}).wait(1).to({graphics:mask_2_graphics_248,x:735.3603,y:253.7782}).wait(1).to({graphics:mask_2_graphics_249,x:735.2342,y:253.6588}).wait(1).to({graphics:mask_2_graphics_250,x:735.2217,y:253.6717}).wait(1).to({graphics:mask_2_graphics_251,x:730.7125,y:249.1875}).wait(1).to({graphics:mask_2_graphics_252,x:730.575,y:249.0447}).wait(1).to({graphics:mask_2_graphics_253,x:730.3797,y:248.8417}).wait(1).to({graphics:mask_2_graphics_254,x:730.097,y:248.548}).wait(1).to({graphics:mask_2_graphics_255,x:729.6707,y:248.1051}).wait(1).to({graphics:mask_2_graphics_256,x:728.917,y:247.367}).wait(1).to({graphics:mask_2_graphics_257,x:728.461,y:246.911}).wait(1).to({graphics:mask_2_graphics_258,x:728.2039,y:246.6539}).wait(1).to({graphics:mask_2_graphics_259,x:728.0717,y:246.5217}).wait(1).to({graphics:mask_2_graphics_260,x:727.9972,y:246.4472}).wait(1).to({graphics:mask_2_graphics_261,x:727.9553,y:246.4053}).wait(1).to({graphics:mask_2_graphics_262,x:727.9345,y:246.3845}).wait(1).to({graphics:mask_2_graphics_263,x:727.9898,y:246.4398}).wait(1).to({graphics:mask_2_graphics_264,x:728.0018,y:246.4513}).wait(1).to({graphics:mask_2_graphics_265,x:728.0402,y:246.4881}).wait(1).to({graphics:mask_2_graphics_266,x:728.11,y:246.5551}).wait(1).to({graphics:mask_2_graphics_267,x:728.2174,y:246.6581}).wait(1).to({graphics:mask_2_graphics_268,x:728.371,y:246.8054}).wait(1).to({graphics:mask_2_graphics_269,x:728.5827,y:247.0084}).wait(1).to({graphics:mask_2_graphics_270,x:728.8698,y:247.2838}).wait(1).to({graphics:mask_2_graphics_271,x:729.2592,y:247.6571}).wait(1).to({graphics:mask_2_graphics_272,x:729.7942,y:248.1702}).wait(1).to({graphics:mask_2_graphics_273,x:730.5511,y:248.896}).wait(1).to({graphics:mask_2_graphics_274,x:731.6641,y:249.9635}).wait(1).to({graphics:mask_2_graphics_275,x:733.2767,y:251.51}).wait(1).to({graphics:mask_2_graphics_276,x:735.0614,y:253.2215}).wait(1).to({graphics:mask_2_graphics_277,x:736.4091,y:254.5139}).wait(1).to({graphics:mask_2_graphics_278,x:737.3237,y:255.391}).wait(1).to({graphics:mask_2_graphics_279,x:737.9639,y:256.0049}).wait(1).to({graphics:mask_2_graphics_280,x:738.4285,y:256.4505}).wait(1).to({graphics:mask_2_graphics_281,x:738.7732,y:256.7811}).wait(1).to({graphics:mask_2_graphics_282,x:739.0312,y:257.0285}).wait(1).to({graphics:mask_2_graphics_283,x:739.2235,y:257.2129}).wait(1).to({graphics:mask_2_graphics_284,x:739.3642,y:257.3478}).wait(1).to({graphics:mask_2_graphics_285,x:739.4633,y:257.4428}).wait(1).to({graphics:mask_2_graphics_286,x:739.528,y:257.5049}).wait(1).to({graphics:mask_2_graphics_287,x:739.5638,y:257.5393}).wait(1).to({graphics:mask_2_graphics_288,x:1359.025,y:394.975}).wait(1).to({graphics:mask_2_graphics_289,x:739.6,y:257.5446}).wait(1).to({graphics:mask_2_graphics_290,x:739.6,y:257.4479}).wait(1).to({graphics:mask_2_graphics_291,x:739.6,y:257.2752}).wait(1).to({graphics:mask_2_graphics_292,x:739.6,y:257.0146}).wait(1).to({graphics:mask_2_graphics_293,x:739.6,y:256.6509}).wait(1).to({graphics:mask_2_graphics_294,x:739.6,y:256.1644}).wait(1).to({graphics:mask_2_graphics_295,x:739.6,y:255.5288}).wait(1).to({graphics:mask_2_graphics_296,x:739.6,y:254.7086}).wait(1).to({graphics:mask_2_graphics_297,x:739.6,y:253.6531}).wait(1).to({graphics:mask_2_graphics_298,x:739.6,y:252.2878}).wait(1).to({graphics:mask_2_graphics_299,x:739.6,y:250.4976}).wait(1).to({graphics:mask_2_graphics_300,x:739.6,y:248.0963}).wait(1).to({graphics:mask_2_graphics_301,x:739.6,y:244.7836}).wait(1).to({graphics:mask_2_graphics_302,x:739.6,y:240.1954}).wait(1).to({graphics:mask_2_graphics_303,x:739.6,y:234.5991}).wait(1).to({graphics:mask_2_graphics_304,x:739.6,y:229.5262}).wait(1).to({graphics:mask_2_graphics_305,x:739.6,y:225.759}).wait(1).to({graphics:mask_2_graphics_306,x:739.6,y:223.0317}).wait(1).to({graphics:mask_2_graphics_307,x:739.6,y:221.0049}).wait(1).to({graphics:mask_2_graphics_308,x:739.6,y:219.4591}).wait(1).to({graphics:mask_2_graphics_309,x:739.6,y:218.2589}).wait(1).to({graphics:mask_2_graphics_310,x:739.6,y:217.318}).wait(1).to({graphics:mask_2_graphics_311,x:739.6,y:216.5788}).wait(1).to({graphics:mask_2_graphics_312,x:739.6,y:216.001}).wait(1).to({graphics:mask_2_graphics_313,x:739.6,y:215.5555}).wait(1).to({graphics:mask_2_graphics_314,x:739.6,y:215.2205}).wait(1).to({graphics:mask_2_graphics_315,x:739.6,y:214.9792}).wait(1).to({graphics:mask_2_graphics_316,x:739.6,y:214.8187}).wait(1).to({graphics:mask_2_graphics_317,x:739.6,y:214.7285}).wait(1).to({graphics:mask_2_graphics_318,x:739.6,y:214.7}).wait(12).to({graphics:mask_2_graphics_330,x:739.6,y:276.825}).wait(1).to({graphics:mask_2_graphics_331,x:739.6,y:276.8104}).wait(1).to({graphics:mask_2_graphics_332,x:739.6,y:276.7637}).wait(1).to({graphics:mask_2_graphics_333,x:739.6,y:276.6802}).wait(1).to({graphics:mask_2_graphics_334,x:739.6,y:276.5538}).wait(1).to({graphics:mask_2_graphics_335,x:739.6,y:276.3767}).wait(1).to({graphics:mask_2_graphics_336,x:739.6,y:276.1386}).wait(1).to({graphics:mask_2_graphics_337,x:739.6,y:275.8257}).wait(1).to({graphics:mask_2_graphics_338,x:739.6,y:275.419}).wait(1).to({graphics:mask_2_graphics_339,x:739.6,y:274.8908}).wait(1).to({graphics:mask_2_graphics_340,x:739.6,y:274.1989}).wait(1).to({graphics:mask_2_graphics_341,x:739.6,y:273.2767}).wait(1).to({graphics:mask_2_graphics_342,x:739.6,y:272.0132}).wait(1).to({graphics:mask_2_graphics_343,x:739.6,y:270.2358}).wait(1).to({graphics:mask_2_graphics_344,x:739.6,y:267.8302}).wait(1).to({graphics:mask_2_graphics_345,x:739.6,y:265.2616}).wait(1).to({graphics:mask_2_graphics_346,x:739.6,y:263.2301}).wait(1).to({graphics:mask_2_graphics_347,x:739.6,y:261.7768}).wait(1).to({graphics:mask_2_graphics_348,x:739.6,y:260.7212}).wait(1).to({graphics:mask_2_graphics_349,x:739.6,y:259.931}).wait(1).to({graphics:mask_2_graphics_350,x:739.6,y:259.3261}).wait(1).to({graphics:mask_2_graphics_351,x:739.6,y:258.857}).wait(1).to({graphics:mask_2_graphics_352,x:739.6,y:258.4914}).wait(1).to({graphics:mask_2_graphics_353,x:739.6,y:258.2076}).wait(1).to({graphics:mask_2_graphics_354,x:739.6,y:257.9898}).wait(1).to({graphics:mask_2_graphics_355,x:739.6,y:257.8268}).wait(1).to({graphics:mask_2_graphics_356,x:739.6,y:257.7098}).wait(1).to({graphics:mask_2_graphics_357,x:739.6,y:257.6322}).wait(1).to({graphics:mask_2_graphics_358,x:739.6,y:257.5887}).wait(1).to({graphics:mask_2_graphics_359,x:1359.025,y:394.975}).wait(22).to({graphics:mask_2_graphics_381,x:1359.025,y:394.975}).wait(1).to({graphics:mask_2_graphics_382,x:739.6,y:257.5446}).wait(1).to({graphics:mask_2_graphics_383,x:739.6,y:257.4479}).wait(1).to({graphics:mask_2_graphics_384,x:739.6,y:257.2752}).wait(1).to({graphics:mask_2_graphics_385,x:739.6,y:257.0146}).wait(1).to({graphics:mask_2_graphics_386,x:739.6,y:256.6509}).wait(1).to({graphics:mask_2_graphics_387,x:739.6,y:256.1644}).wait(1).to({graphics:mask_2_graphics_388,x:739.6,y:255.5288}).wait(1).to({graphics:mask_2_graphics_389,x:739.6,y:254.7086}).wait(1).to({graphics:mask_2_graphics_390,x:739.6,y:253.6531}).wait(1).to({graphics:mask_2_graphics_391,x:739.6,y:252.2878}).wait(1).to({graphics:mask_2_graphics_392,x:739.6,y:250.4976}).wait(1).to({graphics:mask_2_graphics_393,x:739.6,y:248.0963}).wait(1).to({graphics:mask_2_graphics_394,x:739.6,y:244.7836}).wait(1).to({graphics:mask_2_graphics_395,x:739.6,y:240.1954}).wait(1).to({graphics:mask_2_graphics_396,x:739.6,y:234.5991}).wait(1).to({graphics:mask_2_graphics_397,x:739.6,y:229.5262}).wait(1).to({graphics:mask_2_graphics_398,x:739.6,y:225.759}).wait(1).to({graphics:mask_2_graphics_399,x:739.6,y:223.0317}).wait(1).to({graphics:mask_2_graphics_400,x:739.6,y:221.0049}).wait(1).to({graphics:mask_2_graphics_401,x:739.6,y:219.4591}).wait(1).to({graphics:mask_2_graphics_402,x:739.6,y:218.2589}).wait(1).to({graphics:mask_2_graphics_403,x:739.6,y:217.318}).wait(1).to({graphics:mask_2_graphics_404,x:739.6,y:216.5788}).wait(1).to({graphics:mask_2_graphics_405,x:739.6,y:216.001}).wait(1).to({graphics:mask_2_graphics_406,x:739.6,y:215.5555}).wait(1).to({graphics:mask_2_graphics_407,x:739.6,y:215.2205}).wait(1).to({graphics:mask_2_graphics_408,x:739.6,y:214.9792}).wait(1).to({graphics:mask_2_graphics_409,x:739.6,y:214.8187}).wait(1).to({graphics:mask_2_graphics_410,x:739.6,y:214.7285}).wait(1).to({graphics:mask_2_graphics_411,x:739.6,y:214.7}).wait(9));

	// Слой_25
	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.setTransform(1121.2,769.1,1.0332,1.0332,0,0,0,0.1,0.2);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,x:1121.1,y:768.8707,alpha:0.0008},0).wait(1).to({y:768.7774,alpha:0.0032},0).wait(1).to({y:768.6105,alpha:0.0075},0).wait(1).to({y:768.3576,alpha:0.0141},0).wait(1).to({y:768.0033,alpha:0.0233},0).wait(1).to({y:767.5271,alpha:0.0357},0).wait(1).to({y:766.9015,alpha:0.0519},0).wait(1).to({y:766.0881,alpha:0.073},0).wait(1).to({y:765.0316,alpha:0.1005},0).wait(1).to({y:763.6479,alpha:0.1364},0).wait(1).to({y:761.8034,alpha:0.1843},0).wait(1).to({y:759.2764,alpha:0.25},0).wait(1).to({y:755.7215,alpha:0.3423},0).wait(1).to({y:750.9105,alpha:0.4673},0).wait(1).to({y:745.7731,alpha:0.6007},0).wait(1).to({y:741.7101,alpha:0.7062},0).wait(1).to({y:738.8037,alpha:0.7817},0).wait(1).to({y:736.6925,alpha:0.8366},0).wait(1).to({y:735.1121,alpha:0.8776},0).wait(1).to({y:733.9023,alpha:0.909},0).wait(1).to({y:732.964,alpha:0.9334},0).wait(1).to({y:732.2329,alpha:0.9524},0).wait(1).to({y:731.6651,alpha:0.9671},0).wait(1).to({y:731.2296,alpha:0.9785},0).wait(1).to({y:730.9035,alpha:0.9869},0).wait(1).to({y:730.6696,alpha:0.993},0).wait(1).to({y:730.5144,alpha:0.997},0).wait(1).to({y:730.4274,alpha:0.9993},0).wait(1).to({regX:0.1,regY:0.2,x:1121.2,y:730.6,alpha:1},0).wait(209).to({startPosition:0},0).wait(1).to({regX:0,regY:0,scaleX:1.0331,scaleY:1.0331,x:1121.1351,y:730.3453},0).wait(1).to({scaleX:1.0325,scaleY:1.0325,x:1121.2481,y:730.1692},0).wait(1).to({scaleX:1.0316,scaleY:1.0316,x:1121.4532,y:729.8497},0).wait(1).to({scaleX:1.0301,scaleY:1.0301,x:1121.7689,y:729.3578},0).wait(1).to({scaleX:1.028,scaleY:1.028,x:1122.2203,y:728.6544},0).wait(1).to({scaleX:1.025,scaleY:1.025,x:1122.8425,y:727.6849},0).wait(1).to({scaleX:1.021,scaleY:1.021,x:1123.6865,y:726.3698},0).wait(1).to({scaleX:1.0156,scaleY:1.0156,x:1124.8307,y:724.5868},0).wait(1).to({scaleX:1.0082,scaleY:1.0082,x:1126.4033,y:722.1364},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,x:1128.6277,y:718.6704},0).wait(1).to({scaleX:0.9823,scaleY:0.9823,x:1131.8991,y:713.5729},0).wait(1).to({scaleX:0.9599,scaleY:0.9599,x:1136.6387,y:706.1877},0).wait(1).to({scaleX:0.9351,scaleY:0.9351,x:1141.8841,y:698.0144},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,x:1145.8451,y:691.8424},0).wait(1).to({scaleX:0.9038,scaleY:0.9038,x:1148.5333,y:687.6538},0).wait(1).to({scaleX:0.8949,scaleY:0.8949,x:1150.4147,y:684.7221},0).wait(1).to({scaleX:0.8884,scaleY:0.8884,x:1151.7802,y:682.5944},0).wait(1).to({scaleX:0.8837,scaleY:0.8837,x:1152.7934,y:681.0157},0).wait(1).to({scaleX:0.8801,scaleY:0.8801,x:1153.5516,y:679.8342},0).wait(1).to({scaleX:0.8774,scaleY:0.8774,x:1154.1168,y:678.9536},0).wait(1).to({scaleX:0.8755,scaleY:0.8755,x:1154.5303,y:678.3092},0).wait(1).to({scaleX:0.8741,scaleY:0.8741,x:1154.8216,y:677.8553},0).wait(1).to({scaleX:0.8732,scaleY:0.8732,x:1155.0119,y:677.5589},0).wait(1).to({scaleX:0.8727,scaleY:0.8727,x:1155.1172,y:677.3948},0).wait(1).to({regX:0.1,regY:0.2,scaleX:0.8725,scaleY:0.8725,x:1155.25,y:677.45},0).wait(1).to({regX:0,regY:0,scaleX:0.8727,scaleY:0.8727,x:1155.1149,y:677.3547},0).wait(1).to({scaleX:0.8732,scaleY:0.8732,x:1155.0019,y:677.5307},0).wait(1).to({scaleX:0.8742,scaleY:0.8742,x:1154.7968,y:677.8502},0).wait(1).to({scaleX:0.8757,scaleY:0.8757,x:1154.4811,y:678.3421},0).wait(1).to({scaleX:0.8778,scaleY:0.8778,x:1154.0297,y:679.0454},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:1153.4075,y:680.0147},0).wait(1).to({scaleX:0.8847,scaleY:0.8847,x:1152.5635,y:681.3296},0).wait(1).to({scaleX:0.8901,scaleY:0.8901,x:1151.4193,y:683.1123},0).wait(1).to({scaleX:0.8976,scaleY:0.8976,x:1149.8467,y:685.5623},0).wait(1).to({scaleX:0.9081,scaleY:0.9081,x:1147.6223,y:689.0278},0).wait(1).to({scaleX:0.9235,scaleY:0.9235,x:1144.3509,y:694.1245},0).wait(1).to({scaleX:0.9459,scaleY:0.9459,x:1139.6113,y:701.5086},0).wait(1).to({scaleX:0.9706,scaleY:0.9706,x:1134.3659,y:709.6807},0).wait(1).to({scaleX:0.9893,scaleY:0.9893,x:1130.4049,y:715.8517},0).wait(1).to({scaleX:1.002,scaleY:1.002,x:1127.7167,y:720.0398},0).wait(1).to({scaleX:1.0109,scaleY:1.0109,x:1125.8353,y:722.971},0).wait(1).to({scaleX:1.0173,scaleY:1.0173,x:1124.4698,y:725.0984},0).wait(1).to({scaleX:1.0221,scaleY:1.0221,x:1123.4566,y:726.6769},0).wait(1).to({scaleX:1.0257,scaleY:1.0257,x:1122.6984,y:727.8582},0).wait(1).to({scaleX:1.0284,scaleY:1.0284,x:1122.1332,y:728.7386},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,x:1121.7197,y:729.3829},0).wait(1).to({scaleX:1.0317,scaleY:1.0317,x:1121.4284,y:729.8367},0).wait(1).to({scaleX:1.0326,scaleY:1.0326,x:1121.2381,y:730.1331},0).wait(1).to({scaleX:1.0331,scaleY:1.0331,x:1121.1328,y:730.2972},0).wait(1).to({regX:0.1,regY:0.2,scaleX:1.0332,scaleY:1.0332,x:1121.2,y:730.6},0).wait(1).to({regX:0,regY:0,x:1121.1,y:730.3392,alpha:0.9993},0).wait(1).to({y:730.1457,alpha:0.997},0).wait(1).to({y:729.8004,alpha:0.993},0).wait(1).to({y:729.2793,alpha:0.9869},0).wait(1).to({y:728.5518,alpha:0.9784},0).wait(1).to({y:727.5787,alpha:0.9671},0).wait(1).to({y:726.3077,alpha:0.9523},0).wait(1).to({y:724.6672,alpha:0.9331},0).wait(1).to({y:722.5563,alpha:0.9085},0).wait(1).to({y:719.8257,alpha:0.8767},0).wait(1).to({y:716.2451,alpha:0.8349},0).wait(1).to({y:711.4425,alpha:0.7789},0).wait(1).to({y:704.8172,alpha:0.7017},0).wait(1).to({y:695.6409,alpha:0.5946},0).wait(1).to({y:684.4482,alpha:0.4641},0).wait(1).to({y:674.3024,alpha:0.3458},0).wait(1).to({y:666.768,alpha:0.2579},0).wait(1).to({y:661.3133,alpha:0.1943},0).wait(1).to({y:657.2599,alpha:0.1471},0).wait(1).to({y:654.1682,alpha:0.111},0).wait(1).to({y:651.7677,alpha:0.083},0).wait(1).to({y:649.886,alpha:0.0611},0).wait(1).to({y:648.4076,alpha:0.0438},0).wait(1).to({y:647.252,alpha:0.0303},0).wait(1).to({y:646.361,alpha:0.02},0).wait(1).to({y:645.6909,alpha:0.0121},0).wait(1).to({y:645.2085,alpha:0.0065},0).wait(1).to({y:644.8874,alpha:0.0028},0).wait(1).to({y:644.7069,alpha:0.0007},0).wait(1).to({regX:0.1,regY:0.2,x:1121.2,y:644.85,alpha:0},0).wait(12).to({y:769.1},0).wait(1).to({regX:0,regY:0,x:1121.1,y:768.8707,alpha:0.0008},0).wait(1).to({y:768.7774,alpha:0.0032},0).wait(1).to({y:768.6105,alpha:0.0075},0).wait(1).to({y:768.3576,alpha:0.0141},0).wait(1).to({y:768.0033,alpha:0.0233},0).wait(1).to({y:767.5271,alpha:0.0357},0).wait(1).to({y:766.9015,alpha:0.0519},0).wait(1).to({y:766.0881,alpha:0.073},0).wait(1).to({y:765.0316,alpha:0.1005},0).wait(1).to({y:763.6479,alpha:0.1364},0).wait(1).to({y:761.8034,alpha:0.1843},0).wait(1).to({y:759.2764,alpha:0.25},0).wait(1).to({y:755.7215,alpha:0.3423},0).wait(1).to({y:750.9105,alpha:0.4673},0).wait(1).to({y:745.7731,alpha:0.6007},0).wait(1).to({y:741.7101,alpha:0.7062},0).wait(1).to({y:738.8037,alpha:0.7817},0).wait(1).to({y:736.6925,alpha:0.8366},0).wait(1).to({y:735.1121,alpha:0.8776},0).wait(1).to({y:733.9023,alpha:0.909},0).wait(1).to({y:732.964,alpha:0.9334},0).wait(1).to({y:732.2329,alpha:0.9524},0).wait(1).to({y:731.6651,alpha:0.9671},0).wait(1).to({y:731.2296,alpha:0.9785},0).wait(1).to({y:730.9035,alpha:0.9869},0).wait(1).to({y:730.6696,alpha:0.993},0).wait(1).to({y:730.5144,alpha:0.997},0).wait(1).to({y:730.4274,alpha:0.9993},0).wait(1).to({regX:0.1,regY:0.2,x:1121.2,y:730.6,alpha:1},0).wait(22).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:1121.1,y:730.3392,alpha:0.9993},0).wait(1).to({y:730.1457,alpha:0.997},0).wait(1).to({y:729.8004,alpha:0.993},0).wait(1).to({y:729.2793,alpha:0.9869},0).wait(1).to({y:728.5518,alpha:0.9784},0).wait(1).to({y:727.5787,alpha:0.9671},0).wait(1).to({y:726.3077,alpha:0.9523},0).wait(1).to({y:724.6672,alpha:0.9331},0).wait(1).to({y:722.5563,alpha:0.9085},0).wait(1).to({y:719.8257,alpha:0.8767},0).wait(1).to({y:716.2451,alpha:0.8349},0).wait(1).to({y:711.4425,alpha:0.7789},0).wait(1).to({y:704.8172,alpha:0.7017},0).wait(1).to({y:695.6409,alpha:0.5946},0).wait(1).to({y:684.4482,alpha:0.4641},0).wait(1).to({y:674.3024,alpha:0.3458},0).wait(1).to({y:666.768,alpha:0.2579},0).wait(1).to({y:661.3133,alpha:0.1943},0).wait(1).to({y:657.2599,alpha:0.1471},0).wait(1).to({y:654.1682,alpha:0.111},0).wait(1).to({y:651.7677,alpha:0.083},0).wait(1).to({y:649.886,alpha:0.0611},0).wait(1).to({y:648.4076,alpha:0.0438},0).wait(1).to({y:647.252,alpha:0.0303},0).wait(1).to({y:646.361,alpha:0.02},0).wait(1).to({y:645.6909,alpha:0.0121},0).wait(1).to({y:645.2085,alpha:0.0065},0).wait(1).to({y:644.8874,alpha:0.0028},0).wait(1).to({y:644.7069,alpha:0.0007},0).wait(1).to({regX:0.1,regY:0.2,x:1121.2,y:644.85,alpha:0},0).wait(9));

	// Слой_21 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_1 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_2 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_3 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_4 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_5 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_6 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_7 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_8 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_9 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_11 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_14 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_27 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_28 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_29 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_30 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_31 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_32 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_33 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_35 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_36 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_37 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_38 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_39 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_40 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_41 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_42 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_43 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_381 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_382 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_383 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_384 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_385 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_386 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_387 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_388 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_389 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_390 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_391 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_392 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_393 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_394 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_395 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_396 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_397 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_398 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_399 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_400 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_401 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_402 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_403 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_404 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_405 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_406 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_407 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_408 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_409 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_410 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_411 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_412 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_413 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_414 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_415 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_416 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_417 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_418 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");
	var mask_3_graphics_419 = new cjs.Graphics().p("AoYHdIAAu5IQxAAIAAO5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:1160.5999,y:484.0249}).wait(1).to({graphics:mask_3_graphics_1,x:1160.5999,y:484.0043}).wait(1).to({graphics:mask_3_graphics_2,x:1160.5999,y:483.939}).wait(1).to({graphics:mask_3_graphics_3,x:1160.5999,y:483.8256}).wait(1).to({graphics:mask_3_graphics_4,x:1160.5999,y:483.6582}).wait(1).to({graphics:mask_3_graphics_5,x:1160.5999,y:483.4323}).wait(1).to({graphics:mask_3_graphics_6,x:1160.5999,y:483.1402}).wait(1).to({graphics:mask_3_graphics_7,x:1160.5999,y:482.7748}).wait(1).to({graphics:mask_3_graphics_8,x:1160.5999,y:482.3257}).wait(1).to({graphics:mask_3_graphics_9,x:1160.5999,y:481.7817}).wait(1).to({graphics:mask_3_graphics_10,x:1160.5999,y:481.1283}).wait(1).to({graphics:mask_3_graphics_11,x:1160.5999,y:480.3475}).wait(1).to({graphics:mask_3_graphics_12,x:1160.5999,y:479.4169}).wait(1).to({graphics:mask_3_graphics_13,x:1160.5999,y:478.3068}).wait(1).to({graphics:mask_3_graphics_14,x:1160.5999,y:476.9784}).wait(1).to({graphics:mask_3_graphics_15,x:1160.5999,y:475.3782}).wait(1).to({graphics:mask_3_graphics_16,x:1160.5999,y:473.4333}).wait(1).to({graphics:mask_3_graphics_17,x:1160.5999,y:471.0393}).wait(1).to({graphics:mask_3_graphics_18,x:1160.5999,y:468.0513}).wait(1).to({graphics:mask_3_graphics_19,x:1160.5999,y:464.2798}).wait(1).to({graphics:mask_3_graphics_20,x:1160.5999,y:459.5647}).wait(1).to({graphics:mask_3_graphics_21,x:1160.5999,y:454.059}).wait(1).to({graphics:mask_3_graphics_22,x:1160.5999,y:448.5087}).wait(1).to({graphics:mask_3_graphics_23,x:1160.5999,y:443.6969}).wait(1).to({graphics:mask_3_graphics_24,x:1160.5999,y:439.8223}).wait(1).to({graphics:mask_3_graphics_25,x:1160.5999,y:436.7403}).wait(1).to({graphics:mask_3_graphics_26,x:1160.5999,y:434.2626}).wait(1).to({graphics:mask_3_graphics_27,x:1160.5999,y:432.2425}).wait(1).to({graphics:mask_3_graphics_28,x:1160.5999,y:430.5735}).wait(1).to({graphics:mask_3_graphics_29,x:1160.5999,y:429.1812}).wait(1).to({graphics:mask_3_graphics_30,x:1160.5999,y:428.0112}).wait(1).to({graphics:mask_3_graphics_31,x:1160.5999,y:427.0243}).wait(1).to({graphics:mask_3_graphics_32,x:1160.5999,y:426.19}).wait(1).to({graphics:mask_3_graphics_33,x:1160.5999,y:425.4853}).wait(1).to({graphics:mask_3_graphics_34,x:1160.5999,y:424.8918}).wait(1).to({graphics:mask_3_graphics_35,x:1160.5999,y:424.395}).wait(1).to({graphics:mask_3_graphics_36,x:1160.5999,y:423.9828}).wait(1).to({graphics:mask_3_graphics_37,x:1160.5999,y:423.6462}).wait(1).to({graphics:mask_3_graphics_38,x:1160.5999,y:423.3762}).wait(1).to({graphics:mask_3_graphics_39,x:1160.5999,y:423.1665}).wait(1).to({graphics:mask_3_graphics_40,x:1160.5999,y:423.0112}).wait(1).to({graphics:mask_3_graphics_41,x:1160.5999,y:422.9055}).wait(1).to({graphics:mask_3_graphics_42,x:1160.5999,y:422.8443}).wait(1).to({graphics:mask_3_graphics_43,x:1160.5999,y:422.8249}).wait(338).to({graphics:mask_3_graphics_381,x:1160.5999,y:422.8249}).wait(1).to({graphics:mask_3_graphics_382,x:1160.5999,y:422.784}).wait(1).to({graphics:mask_3_graphics_383,x:1160.5999,y:422.6553}).wait(1).to({graphics:mask_3_graphics_384,x:1160.5999,y:422.4289}).wait(1).to({graphics:mask_3_graphics_385,x:1160.5999,y:422.0941}).wait(1).to({graphics:mask_3_graphics_386,x:1160.5999,y:421.6369}).wait(1).to({graphics:mask_3_graphics_387,x:1160.5999,y:421.0407}).wait(1).to({graphics:mask_3_graphics_388,x:1160.5999,y:420.2851}).wait(1).to({graphics:mask_3_graphics_389,x:1160.5999,y:419.3455}).wait(1).to({graphics:mask_3_graphics_390,x:1160.5999,y:418.1899}).wait(1).to({graphics:mask_3_graphics_391,x:1160.5999,y:416.7778}).wait(1).to({graphics:mask_3_graphics_392,x:1160.5999,y:415.0548}).wait(1).to({graphics:mask_3_graphics_393,x:1160.5999,y:412.9483}).wait(1).to({graphics:mask_3_graphics_394,x:1160.5999,y:410.3573}).wait(1).to({graphics:mask_3_graphics_395,x:1160.5999,y:407.1362}).wait(1).to({graphics:mask_3_graphics_396,x:1160.5999,y:403.0717}).wait(1).to({graphics:mask_3_graphics_397,x:1160.5999,y:397.8495}).wait(1).to({graphics:mask_3_graphics_398,x:1160.5999,y:391.0531}).wait(1).to({graphics:mask_3_graphics_399,x:1160.5999,y:382.4118}).wait(1).to({graphics:mask_3_graphics_400,x:1160.5999,y:372.6666}).wait(1).to({graphics:mask_3_graphics_401,x:1160.5999,y:363.6891}).wait(1).to({graphics:mask_3_graphics_402,x:1160.5999,y:356.5035}).wait(1).to({graphics:mask_3_graphics_403,x:1160.5999,y:350.955}).wait(1).to({graphics:mask_3_graphics_404,x:1160.5999,y:346.6287}).wait(1).to({graphics:mask_3_graphics_405,x:1160.5999,y:343.1925}).wait(1).to({graphics:mask_3_graphics_406,x:1160.5999,y:340.4196}).wait(1).to({graphics:mask_3_graphics_407,x:1160.5999,y:338.1552}).wait(1).to({graphics:mask_3_graphics_408,x:1160.5999,y:336.2913}).wait(1).to({graphics:mask_3_graphics_409,x:1160.5999,y:334.7514}).wait(1).to({graphics:mask_3_graphics_410,x:1160.5999,y:333.4788}).wait(1).to({graphics:mask_3_graphics_411,x:1160.5999,y:332.4298}).wait(1).to({graphics:mask_3_graphics_412,x:1160.5999,y:331.5717}).wait(1).to({graphics:mask_3_graphics_413,x:1160.5999,y:330.8783}).wait(1).to({graphics:mask_3_graphics_414,x:1160.5999,y:330.3288}).wait(1).to({graphics:mask_3_graphics_415,x:1160.5999,y:329.9053}).wait(1).to({graphics:mask_3_graphics_416,x:1160.5999,y:329.5944}).wait(1).to({graphics:mask_3_graphics_417,x:1160.5999,y:329.3838}).wait(1).to({graphics:mask_3_graphics_418,x:1160.5999,y:329.2632}).wait(1).to({graphics:mask_3_graphics_419,x:1160.5999,y:329.2249}).wait(1));

	// Слой_20
	this.instance_8 = new lib.Анимация2("synched",0);
	this.instance_8.setTransform(1542.4,381.25,1.1725,1.1725,0,0,0,0,0.1);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:0,y:381.1291,alpha:0.0003},0).wait(1).to({y:381.064,alpha:0.0014},0).wait(1).to({y:380.9504,alpha:0.0033},0).wait(1).to({y:380.7834,alpha:0.006},0).wait(1).to({y:380.5573,alpha:0.0097},0).wait(1).to({y:380.2654,alpha:0.0145},0).wait(1).to({y:379.8997,alpha:0.0204},0).wait(1).to({y:379.4506,alpha:0.0278},0).wait(1).to({y:378.9066,alpha:0.0367},0).wait(1).to({y:378.2531,alpha:0.0473},0).wait(1).to({y:377.4725,alpha:0.0601},0).wait(1).to({y:376.5419,alpha:0.0753},0).wait(1).to({y:375.4318,alpha:0.0934},0).wait(1).to({y:374.1032,alpha:0.1151},0).wait(1).to({y:372.5031,alpha:0.1413},0).wait(1).to({y:370.5581,alpha:0.1731},0).wait(1).to({y:368.1645,alpha:0.2122},0).wait(1).to({y:365.1765,alpha:0.261},0).wait(1).to({y:361.405,alpha:0.3226},0).wait(1).to({y:356.6898,alpha:0.3997},0).wait(1).to({y:351.1839,alpha:0.4896},0).wait(1).to({y:345.6337,alpha:0.5803},0).wait(1).to({y:340.822,alpha:0.659},0).wait(1).to({y:336.9473,alpha:0.7223},0).wait(1).to({y:333.8652,alpha:0.7726},0).wait(1).to({y:331.3878,alpha:0.8131},0).wait(1).to({y:329.3674,alpha:0.8461},0).wait(1).to({y:327.6984,alpha:0.8734},0).wait(1).to({y:326.3061,alpha:0.8961},0).wait(1).to({y:325.1363,alpha:0.9153},0).wait(1).to({y:324.1493,alpha:0.9314},0).wait(1).to({y:323.315,alpha:0.945},0).wait(1).to({y:322.6102,alpha:0.9565},0).wait(1).to({y:322.0167,alpha:0.9662},0).wait(1).to({y:321.5199,alpha:0.9743},0).wait(1).to({y:321.1079,alpha:0.9811},0).wait(1).to({y:320.7711,alpha:0.9866},0).wait(1).to({y:320.5013,alpha:0.991},0).wait(1).to({y:320.2916,alpha:0.9944},0).wait(1).to({y:320.1363,alpha:0.997},0).wait(1).to({y:320.0304,alpha:0.9987},0).wait(1).to({y:319.9695,alpha:0.9997},0).wait(1).to({regY:0.1,y:320.05,alpha:1},0).wait(338).to({startPosition:0},0).wait(1).to({regY:0,y:319.909,alpha:0.9996},0).wait(1).to({y:319.7803,alpha:0.9982},0).wait(1).to({y:319.5541,alpha:0.9958},0).wait(1).to({y:319.2192,alpha:0.9922},0).wait(1).to({y:318.7619,alpha:0.9873},0).wait(1).to({y:318.1656,alpha:0.9809},0).wait(1).to({y:317.4102,alpha:0.9729},0).wait(1).to({y:316.4706,alpha:0.9628},0).wait(1).to({y:315.3151,alpha:0.9505},0).wait(1).to({y:313.9028,alpha:0.9354},0).wait(1).to({y:312.1799,alpha:0.917},0).wait(1).to({y:310.0734,alpha:0.8945},0).wait(1).to({y:307.4823,alpha:0.8668},0).wait(1).to({y:304.2612,alpha:0.8324},0).wait(1).to({y:300.1967,alpha:0.789},0).wait(1).to({y:294.9746,alpha:0.7332},0).wait(1).to({y:288.1782,alpha:0.6606},0).wait(1).to({y:279.5367,alpha:0.5682},0).wait(1).to({y:269.7915,alpha:0.4641},0).wait(1).to({y:260.8141,alpha:0.3682},0).wait(1).to({y:253.6286,alpha:0.2914},0).wait(1).to({y:248.0801,alpha:0.2322},0).wait(1).to({y:243.7536,alpha:0.1859},0).wait(1).to({y:240.3177,alpha:0.1492},0).wait(1).to({y:237.5448,alpha:0.1196},0).wait(1).to({y:235.2802,alpha:0.0954},0).wait(1).to({y:233.4164,alpha:0.0755},0).wait(1).to({y:231.8765,alpha:0.059},0).wait(1).to({y:230.6036,alpha:0.0454},0).wait(1).to({y:229.5547,alpha:0.0342},0).wait(1).to({y:228.6968,alpha:0.0251},0).wait(1).to({y:228.0034,alpha:0.0177},0).wait(1).to({y:227.4537,alpha:0.0118},0).wait(1).to({y:227.0304,alpha:0.0073},0).wait(1).to({y:226.7193,alpha:0.0039},0).wait(1).to({y:226.5087,alpha:0.0017},0).wait(1).to({y:226.3884,alpha:0.0004},0).wait(1).to({regY:0.1,y:226.45,alpha:0},0).wait(1));

	// Слой_19 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_9 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_381 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_382 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_383 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_384 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_385 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_386 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_387 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_388 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_389 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_390 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_391 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_392 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_393 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_394 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_395 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_396 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_397 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_398 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_399 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_400 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_401 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_402 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_403 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_404 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_405 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_406 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_407 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_408 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_409 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_410 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_411 = new cjs.Graphics().p("AoTHSIAAv2IQnAAIAARJg");
	var mask_4_graphics_412 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_413 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_414 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_415 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_416 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_417 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");
	var mask_4_graphics_418 = new cjs.Graphics().p("AoTHSIAAv3IQnAAIAARLg");
	var mask_4_graphics_419 = new cjs.Graphics().p("AoTHTIAAv3IQnAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:548.7251,y:488.5501}).wait(1).to({graphics:mask_4_graphics_1,x:548.7251,y:488.5294}).wait(1).to({graphics:mask_4_graphics_2,x:548.7251,y:488.4637}).wait(1).to({graphics:mask_4_graphics_3,x:548.7251,y:488.3503}).wait(1).to({graphics:mask_4_graphics_4,x:548.7251,y:488.1834}).wait(1).to({graphics:mask_4_graphics_5,x:548.7251,y:487.957}).wait(1).to({graphics:mask_4_graphics_6,x:548.7251,y:487.6654}).wait(1).to({graphics:mask_4_graphics_7,x:548.7251,y:487.3}).wait(1).to({graphics:mask_4_graphics_8,x:548.7251,y:486.851}).wait(1).to({graphics:mask_4_graphics_9,x:548.7251,y:486.3065}).wait(1).to({graphics:mask_4_graphics_10,x:548.7251,y:485.653}).wait(1).to({graphics:mask_4_graphics_11,x:548.7251,y:484.8727}).wait(1).to({graphics:mask_4_graphics_12,x:548.7251,y:483.9421}).wait(1).to({graphics:mask_4_graphics_13,x:548.7251,y:482.8315}).wait(1).to({graphics:mask_4_graphics_14,x:548.7251,y:481.5031}).wait(1).to({graphics:mask_4_graphics_15,x:548.7251,y:479.903}).wait(1).to({graphics:mask_4_graphics_16,x:548.7251,y:477.958}).wait(1).to({graphics:mask_4_graphics_17,x:548.7251,y:475.5645}).wait(1).to({graphics:mask_4_graphics_18,x:548.7251,y:472.5765}).wait(1).to({graphics:mask_4_graphics_19,x:548.7251,y:468.8051}).wait(1).to({graphics:mask_4_graphics_20,x:548.7251,y:464.0899}).wait(1).to({graphics:mask_4_graphics_21,x:548.7251,y:458.5837}).wait(1).to({graphics:mask_4_graphics_22,x:548.7251,y:453.0334}).wait(1).to({graphics:mask_4_graphics_23,x:548.7251,y:448.222}).wait(1).to({graphics:mask_4_graphics_24,x:548.7251,y:444.3475}).wait(1).to({graphics:mask_4_graphics_25,x:548.7251,y:441.265}).wait(1).to({graphics:mask_4_graphics_26,x:548.7251,y:438.7878}).wait(1).to({graphics:mask_4_graphics_27,x:548.7251,y:436.7677}).wait(1).to({graphics:mask_4_graphics_28,x:548.7251,y:435.0982}).wait(1).to({graphics:mask_4_graphics_29,x:548.7251,y:433.7059}).wait(1).to({graphics:mask_4_graphics_30,x:548.7251,y:432.5359}).wait(1).to({graphics:mask_4_graphics_31,x:548.7251,y:431.5495}).wait(1).to({graphics:mask_4_graphics_32,x:548.7251,y:430.7152}).wait(1).to({graphics:mask_4_graphics_33,x:548.7251,y:430.0106}).wait(1).to({graphics:mask_4_graphics_34,x:548.7251,y:429.4165}).wait(1).to({graphics:mask_4_graphics_35,x:548.7251,y:428.9197}).wait(1).to({graphics:mask_4_graphics_36,x:548.7251,y:428.5075}).wait(1).to({graphics:mask_4_graphics_37,x:548.7251,y:428.171}).wait(1).to({graphics:mask_4_graphics_38,x:548.7251,y:427.9009}).wait(1).to({graphics:mask_4_graphics_39,x:548.7251,y:427.6913}).wait(1).to({graphics:mask_4_graphics_40,x:548.7251,y:427.5364}).wait(1).to({graphics:mask_4_graphics_41,x:548.7251,y:427.4302}).wait(1).to({graphics:mask_4_graphics_42,x:548.7251,y:427.3695}).wait(1).to({graphics:mask_4_graphics_43,x:548.7251,y:427.3502}).wait(338).to({graphics:mask_4_graphics_381,x:548.7251,y:427.3502}).wait(1).to({graphics:mask_4_graphics_382,x:548.7251,y:427.3087}).wait(1).to({graphics:mask_4_graphics_383,x:548.7251,y:427.1801}).wait(1).to({graphics:mask_4_graphics_384,x:548.7251,y:426.9541}).wait(1).to({graphics:mask_4_graphics_385,x:548.7251,y:426.6194}).wait(1).to({graphics:mask_4_graphics_386,x:548.7251,y:426.1621}).wait(1).to({graphics:mask_4_graphics_387,x:548.7251,y:425.5655}).wait(1).to({graphics:mask_4_graphics_388,x:548.7251,y:424.8103}).wait(1).to({graphics:mask_4_graphics_389,x:548.7251,y:423.8708}).wait(1).to({graphics:mask_4_graphics_390,x:548.7251,y:422.7151}).wait(1).to({graphics:mask_4_graphics_391,x:548.7251,y:421.303}).wait(1).to({graphics:mask_4_graphics_392,x:548.7251,y:419.5796}).wait(1).to({graphics:mask_4_graphics_393,x:548.7251,y:417.4735}).wait(1).to({graphics:mask_4_graphics_394,x:548.7251,y:414.8824}).wait(1).to({graphics:mask_4_graphics_395,x:548.7251,y:411.6613}).wait(1).to({graphics:mask_4_graphics_396,x:548.7251,y:407.597}).wait(1).to({graphics:mask_4_graphics_397,x:548.7251,y:402.3742}).wait(1).to({graphics:mask_4_graphics_398,x:548.7251,y:395.5783}).wait(1).to({graphics:mask_4_graphics_399,x:548.7251,y:386.9366}).wait(1).to({graphics:mask_4_graphics_400,x:548.7251,y:377.1913}).wait(1).to({graphics:mask_4_graphics_401,x:548.7251,y:368.2138}).wait(1).to({graphics:mask_4_graphics_402,x:548.7251,y:361.0282}).wait(1).to({graphics:mask_4_graphics_403,x:548.7251,y:355.4797}).wait(1).to({graphics:mask_4_graphics_404,x:548.7251,y:351.1534}).wait(1).to({graphics:mask_4_graphics_405,x:548.7251,y:347.7177}).wait(1).to({graphics:mask_4_graphics_406,x:548.7251,y:344.9443}).wait(1).to({graphics:mask_4_graphics_407,x:548.7251,y:342.6799}).wait(1).to({graphics:mask_4_graphics_408,x:548.7251,y:340.816}).wait(1).to({graphics:mask_4_graphics_409,x:548.7251,y:339.2762}).wait(1).to({graphics:mask_4_graphics_410,x:548.7251,y:338.0035}).wait(1).to({graphics:mask_4_graphics_411,x:548.7251,y:336.955}).wait(1).to({graphics:mask_4_graphics_412,x:548.7251,y:336.0964}).wait(1).to({graphics:mask_4_graphics_413,x:548.7251,y:335.4034}).wait(1).to({graphics:mask_4_graphics_414,x:548.7251,y:334.8535}).wait(1).to({graphics:mask_4_graphics_415,x:548.7251,y:334.4305}).wait(1).to({graphics:mask_4_graphics_416,x:548.7251,y:334.1191}).wait(1).to({graphics:mask_4_graphics_417,x:548.7251,y:333.9085}).wait(1).to({graphics:mask_4_graphics_418,x:548.7251,y:333.7884}).wait(1).to({graphics:mask_4_graphics_419,x:548.7251,y:333.7502}).wait(1));

	// Слой_18
	this.instance_9 = new lib.Анимация2("synched",0);
	this.instance_9.setTransform(830.45,381.15,1.1923,1.1923);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({y:381.1291,alpha:0.0003},0).wait(1).to({y:381.064,alpha:0.0014},0).wait(1).to({y:380.9504,alpha:0.0033},0).wait(1).to({y:380.7834,alpha:0.006},0).wait(1).to({y:380.5573,alpha:0.0097},0).wait(1).to({y:380.2654,alpha:0.0145},0).wait(1).to({y:379.8997,alpha:0.0204},0).wait(1).to({y:379.4506,alpha:0.0278},0).wait(1).to({y:378.9066,alpha:0.0367},0).wait(1).to({y:378.2531,alpha:0.0473},0).wait(1).to({y:377.4725,alpha:0.0601},0).wait(1).to({y:376.5419,alpha:0.0753},0).wait(1).to({y:375.4318,alpha:0.0934},0).wait(1).to({y:374.1032,alpha:0.1151},0).wait(1).to({y:372.5031,alpha:0.1413},0).wait(1).to({y:370.5581,alpha:0.1731},0).wait(1).to({y:368.1645,alpha:0.2122},0).wait(1).to({y:365.1765,alpha:0.261},0).wait(1).to({y:361.405,alpha:0.3226},0).wait(1).to({y:356.6898,alpha:0.3997},0).wait(1).to({y:351.1839,alpha:0.4896},0).wait(1).to({y:345.6337,alpha:0.5803},0).wait(1).to({y:340.822,alpha:0.659},0).wait(1).to({y:336.9473,alpha:0.7223},0).wait(1).to({y:333.8652,alpha:0.7726},0).wait(1).to({y:331.3878,alpha:0.8131},0).wait(1).to({y:329.3674,alpha:0.8461},0).wait(1).to({y:327.6984,alpha:0.8734},0).wait(1).to({y:326.3061,alpha:0.8961},0).wait(1).to({y:325.1363,alpha:0.9153},0).wait(1).to({y:324.1493,alpha:0.9314},0).wait(1).to({y:323.315,alpha:0.945},0).wait(1).to({y:322.6102,alpha:0.9565},0).wait(1).to({y:322.0167,alpha:0.9662},0).wait(1).to({y:321.5199,alpha:0.9743},0).wait(1).to({y:321.1079,alpha:0.9811},0).wait(1).to({y:320.7711,alpha:0.9866},0).wait(1).to({y:320.5013,alpha:0.991},0).wait(1).to({y:320.2916,alpha:0.9944},0).wait(1).to({y:320.1363,alpha:0.997},0).wait(1).to({y:320.0304,alpha:0.9987},0).wait(1).to({y:319.9695,alpha:0.9997},0).wait(1).to({y:319.95,alpha:1},0).wait(338).to({startPosition:0},0).wait(1).to({y:319.909,alpha:0.9996},0).wait(1).to({y:319.7803,alpha:0.9982},0).wait(1).to({y:319.5541,alpha:0.9958},0).wait(1).to({y:319.2192,alpha:0.9922},0).wait(1).to({y:318.7619,alpha:0.9873},0).wait(1).to({y:318.1656,alpha:0.9809},0).wait(1).to({y:317.4102,alpha:0.9729},0).wait(1).to({y:316.4706,alpha:0.9628},0).wait(1).to({y:315.3151,alpha:0.9505},0).wait(1).to({y:313.9028,alpha:0.9354},0).wait(1).to({y:312.1799,alpha:0.917},0).wait(1).to({y:310.0734,alpha:0.8945},0).wait(1).to({y:307.4823,alpha:0.8668},0).wait(1).to({y:304.2612,alpha:0.8324},0).wait(1).to({y:300.1967,alpha:0.789},0).wait(1).to({y:294.9746,alpha:0.7332},0).wait(1).to({y:288.1782,alpha:0.6606},0).wait(1).to({y:279.5367,alpha:0.5682},0).wait(1).to({y:269.7915,alpha:0.4641},0).wait(1).to({y:260.8141,alpha:0.3682},0).wait(1).to({y:253.6286,alpha:0.2914},0).wait(1).to({y:248.0801,alpha:0.2322},0).wait(1).to({y:243.7536,alpha:0.1859},0).wait(1).to({y:240.3177,alpha:0.1492},0).wait(1).to({y:237.5448,alpha:0.1196},0).wait(1).to({y:235.2802,alpha:0.0954},0).wait(1).to({y:233.4164,alpha:0.0755},0).wait(1).to({y:231.8765,alpha:0.059},0).wait(1).to({y:230.6036,alpha:0.0454},0).wait(1).to({y:229.5547,alpha:0.0342},0).wait(1).to({y:228.6968,alpha:0.0251},0).wait(1).to({y:228.0034,alpha:0.0177},0).wait(1).to({y:227.4537,alpha:0.0118},0).wait(1).to({y:227.0304,alpha:0.0073},0).wait(1).to({y:226.7193,alpha:0.0039},0).wait(1).to({y:226.5087,alpha:0.0017},0).wait(1).to({y:226.3884,alpha:0.0004},0).wait(1).to({y:226.35,alpha:0},0).wait(1));

	// FROGGIT_face_svg
	this.instance_10 = new lib.Анимация10("synched",0);
	this.instance_10.setTransform(844.2,52.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация10копия("synched",0);
	this.instance_11.setTransform(876.4,234.05);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация10копия2("synched",0);
	this.instance_12.setTransform(812.9,234.05);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).wait(1).to({y:52.1986,alpha:0.0008},0).wait(1).to({y:52.6736,alpha:0.0034},0).wait(1).to({y:53.5262,alpha:0.0081},0).wait(1).to({y:54.8219,alpha:0.0152},0).wait(1).to({y:56.6454,alpha:0.0252},0).wait(1).to({y:59.1091,alpha:0.0388},0).wait(1).to({y:62.3671,alpha:0.0567},0).wait(1).to({y:66.6381,alpha:0.0802},0).wait(1).to({y:72.2467,alpha:0.111},0).wait(1).to({y:79.699,alpha:0.1519},0).wait(1).to({y:89.8286,alpha:0.2076},0).wait(1).to({y:104.0394,alpha:0.2857},0).wait(1).to({y:124.242,alpha:0.3967},0).wait(1).to({y:149.5803,alpha:0.5359},0).wait(1).to({y:172.4381,alpha:0.6615},0).wait(1).to({y:188.9908,alpha:0.7524},0).wait(1).to({y:200.738,alpha:0.817},0).wait(1).to({y:209.3391,alpha:0.8642},0).wait(1).to({y:215.8138,alpha:0.8998},0).wait(1).to({y:220.7731,alpha:0.927},0).wait(1).to({y:224.6008,alpha:0.9481},0).wait(1).to({y:227.5513,alpha:0.9643},0).wait(1).to({y:229.8012,alpha:0.9767},0).wait(1).to({y:231.4777,alpha:0.9859},0).wait(1).to({y:232.6758,alpha:0.9924},0).wait(1).to({y:233.4679,alpha:0.9968},0).wait(1).to({y:233.9109,alpha:0.9992},0).wait(1).to({y:234.05,alpha:1},0).wait(26).to({startPosition:0},0).wait(1).to({x:844.2833},0).wait(1).to({x:844.5646},0).wait(1).to({x:845.1091},0).wait(1).to({x:846.0225},0).wait(1).to({x:847.4937},0).wait(1).to({x:849.9072},0).wait(1).to({x:854.165},0).wait(1).to({x:861.4286},0).wait(1).to({x:867.753},0).wait(1).to({x:871.2812},0).wait(1).to({x:873.3696},0).wait(1).to({x:874.6808},0).wait(1).to({x:875.5103},0).wait(1).to({x:876.0111},0).wait(1).to({x:876.2722},0).to({_off:true},1).wait(59).to({_off:false,x:879.9},0).wait(1).to({x:879.8571,y:234.0203},0).wait(1).to({x:879.7181,y:233.9239},0).wait(1).to({x:879.4636,y:233.7474},0).wait(1).to({x:879.0673,y:233.4727},0).wait(1).to({x:878.4926,y:233.0742},0).wait(1).to({x:877.6858,y:232.5149},0).wait(1).to({x:876.5643,y:231.7374},0).wait(1).to({x:874.9914,y:230.6469},0).wait(1).to({x:872.7232,y:229.0744},0).wait(1).to({x:869.3035,y:226.7035},0).wait(1).to({x:864.1444,y:223.1267},0).wait(1).to({x:858.295,y:219.0714},0).wait(1).to({x:854.0045,y:216.0968},0).wait(1).to({x:851.1825,y:214.1403},0).wait(1).to({x:849.2499,y:212.8004},0).wait(1).to({x:847.8741,y:211.8466},0).wait(1).to({x:846.8743,y:211.1535},0).wait(1).to({x:846.1452,y:210.6479},0).wait(1).to({x:845.6203,y:210.2841},0).wait(1).to({x:845.2555,y:210.0311},0).wait(1).to({x:845.0196,y:209.8676},0).wait(1).to({x:844.8901,y:209.7778},0).wait(1).to({x:844.85,y:209.75},0).wait(1).to({x:844.8497,y:209.7606},0).wait(1).to({x:844.8488,y:209.7941},0).wait(1).to({x:844.8473,y:209.8528},0).wait(1).to({x:844.8449,y:209.9397},0).wait(1).to({x:844.8417,y:210.0585},0).wait(1).to({x:844.8376,y:210.2133},0).wait(1).to({x:844.8324,y:210.4094},0).wait(1).to({x:844.8258,y:210.6533},0).wait(1).to({x:844.8178,y:210.9533},0).wait(1).to({x:844.808,y:211.3199},0).wait(1).to({x:844.796,y:211.7672},0).wait(1).to({x:844.7814,y:212.3141},0).wait(1).to({x:844.7634,y:212.9868},0).wait(1).to({x:844.741,y:213.8231},0).wait(1).to({x:844.7128,y:214.8783},0).wait(1).to({x:844.6766,y:216.234},0).wait(1).to({x:844.6294,y:217.9984},0).wait(1).to({x:844.5694,y:220.2419},0).wait(1).to({x:844.5017,y:222.7719},0).wait(1).to({x:844.4393,y:225.1026},0).wait(1).to({x:844.3894,y:226.968},0).wait(1).to({x:844.3509,y:228.4085},0).wait(1).to({x:844.3209,y:229.5318},0).wait(1).to({x:844.297,y:230.4238},0).wait(1).to({x:844.2777,y:231.1437},0).wait(1).to({x:844.262,y:231.7316},0).wait(1).to({x:844.2491,y:232.2154},0).wait(1).to({x:844.2384,y:232.6152},0).wait(1).to({x:844.2295,y:232.9457},0).wait(1).to({x:844.2223,y:233.218},0).wait(1).to({x:844.2163,y:233.4407},0).wait(1).to({x:844.2115,y:233.6207},0).wait(1).to({x:844.2077,y:233.7635},0).wait(1).to({x:844.2047,y:233.8734},0).wait(1).to({x:844.2026,y:233.9541},0).wait(1).to({x:844.2011,y:234.0088},0).wait(1).to({x:844.2003,y:234.04},0).wait(1).to({x:844.2,y:234.05},0).wait(11).to({startPosition:0},0).wait(1).to({y:233.9209,alpha:0.9993},0).wait(1).to({y:233.5103,alpha:0.997},0).wait(1).to({y:232.7774,alpha:0.993},0).wait(1).to({y:231.6713,alpha:0.9869},0).wait(1).to({y:230.1273,alpha:0.9784},0).wait(1).to({y:228.0619,alpha:0.9671},0).wait(1).to({y:225.3642,alpha:0.9523},0).wait(1).to({y:221.8825,alpha:0.9331},0).wait(1).to({y:217.4021,alpha:0.9085},0).wait(1).to({y:211.6066,alpha:0.8767},0).wait(1).to({y:204.007,alpha:0.8349},0).wait(1).to({y:193.8137,alpha:0.7789},0).wait(1).to({y:179.7519,alpha:0.7017},0).wait(1).to({y:160.2755,alpha:0.5946},0).wait(1).to({y:136.5197,alpha:0.4641},0).wait(1).to({y:114.9857,alpha:0.3458},0).wait(1).to({y:98.9944,alpha:0.2579},0).wait(1).to({y:87.417,alpha:0.1943},0).wait(1).to({y:78.8138,alpha:0.1471},0).wait(1).to({y:72.2518,alpha:0.111},0).wait(1).to({y:67.157,alpha:0.083},0).wait(1).to({y:63.1631,alpha:0.0611},0).wait(1).to({y:60.0253,alpha:0.0438},0).wait(1).to({y:57.5727,alpha:0.0303},0).wait(1).to({y:55.6815,alpha:0.02},0).wait(1).to({y:54.2593,alpha:0.0121},0).wait(1).to({y:53.2353,alpha:0.0065},0).wait(1).to({y:52.5539,alpha:0.0028},0).wait(1).to({y:52.1708,alpha:0.0007},0).wait(1).to({y:52.05,alpha:0},0).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(255).to({_off:false},0).wait(1).to({x:876.2117},0).wait(1).to({x:875.5701},0).wait(1).to({x:874.3108},0).wait(1).to({x:872.1547},0).wait(1).to({x:868.5695},0).wait(1).to({x:862.3615},0).wait(1).to({x:850.66},0).wait(1).to({x:834.8583},0).wait(1).to({x:825.2396},0).wait(1).to({x:819.9484},0).wait(1).to({x:816.7774},0).wait(1).to({x:814.8269},0).wait(1).to({x:813.6708},0).wait(1).to({x:813.0758},0).to({_off:true},1).wait(15).to({_off:false,x:876.4},0).wait(1).to({x:876.1824},0).wait(1).to({x:875.4329},0).wait(1).to({x:873.9371},0).wait(1).to({x:871.3102},0).wait(1).to({x:866.7532},0).wait(1).to({x:858.2608},0).wait(1).to({x:842.3716},0).wait(1).to({x:828.6212},0).wait(1).to({x:821.5217},0).wait(1).to({x:817.5323},0).wait(1).to({x:815.1674},0).wait(1).to({x:813.7975},0).wait(1).to({x:813.1031},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(270).to({_off:false},0).wait(1).to({x:813.0883},0).wait(1).to({x:813.7299},0).wait(1).to({x:814.9892},0).wait(1).to({x:817.1453},0).wait(1).to({x:820.7305},0).wait(1).to({x:826.9385},0).wait(1).to({x:838.64},0).wait(1).to({x:854.4417},0).wait(1).to({x:864.0604},0).wait(1).to({x:869.3516},0).wait(1).to({x:872.5226},0).wait(1).to({x:874.4731},0).wait(1).to({x:875.6292},0).wait(1).to({x:876.2242},0).to({_off:true},1).wait(14).to({_off:false,x:812.9},0).wait(1).to({x:813.0988},0).wait(1).to({x:813.7763},0).wait(1).to({x:815.106},0).wait(1).to({x:817.3826},0).wait(1).to({x:821.1683},0).wait(1).to({x:827.7233},0).wait(1).to({x:840.079},0).wait(1).to({x:856.7641},0).wait(1).to({x:866.9206},0).wait(1).to({x:872.5075},0).wait(1).to({x:875.8559},0).wait(1).to({x:877.9154},0).wait(1).to({x:879.1361},0).wait(1).to({x:879.7644},0).to({_off:true},1).wait(106));

	// FROGGIT_body_svg
	this.instance_13 = new lib.Анимация12("synched",0);
	this.instance_13.setTransform(848.1,763);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(190).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.3,x:847.9,y:762.6,alpha:0.0008},0).wait(1).to({y:762.35,alpha:0.0034},0).wait(1).to({y:761.9,alpha:0.0081},0).wait(1).to({y:761.2,alpha:0.0152},0).wait(1).to({y:760.25,alpha:0.0252},0).wait(1).to({y:758.95,alpha:0.0388},0).wait(1).to({y:757.2,alpha:0.0567},0).wait(1).to({y:754.95,alpha:0.0802},0).wait(1).to({y:752,alpha:0.111},0).wait(1).to({y:748.05,alpha:0.1519},0).wait(1).to({y:742.7,alpha:0.2076},0).wait(1).to({y:735.2,alpha:0.2857},0).wait(1).to({y:724.5,alpha:0.3967},0).wait(1).to({y:711.1,alpha:0.5359},0).wait(1).to({y:699.05,alpha:0.6615},0).wait(1).to({y:690.3,alpha:0.7524},0).wait(1).to({y:684.1,alpha:0.817},0).wait(1).to({y:679.55,alpha:0.8642},0).wait(1).to({y:676.1,alpha:0.8998},0).wait(1).to({y:673.5,alpha:0.927},0).wait(1).to({y:671.45,alpha:0.9481},0).wait(1).to({y:669.9,alpha:0.9643},0).wait(1).to({y:668.7,alpha:0.9767},0).wait(1).to({y:667.85,alpha:0.9859},0).wait(1).to({y:667.2,alpha:0.9924},0).wait(1).to({y:666.8,alpha:0.9968},0).wait(1).to({y:666.55,alpha:0.9992},0).wait(1).to({regX:0,regY:0,x:848.1,y:666.8,alpha:1},0).wait(171).to({startPosition:0},0).wait(1).to({regX:-0.2,regY:-0.3,x:847.9,y:666.35,alpha:0.9993},0).wait(1).to({y:666,alpha:0.997},0).wait(1).to({y:665.4,alpha:0.993},0).wait(1).to({y:664.5,alpha:0.9869},0).wait(1).to({y:663.2,alpha:0.9784},0).wait(1).to({y:661.45,alpha:0.9671},0).wait(1).to({y:659.2,alpha:0.9523},0).wait(1).to({y:656.25,alpha:0.9331},0).wait(1).to({y:652.5,alpha:0.9085},0).wait(1).to({y:647.6,alpha:0.8767},0).wait(1).to({y:641.25,alpha:0.8349},0).wait(1).to({y:632.65,alpha:0.7789},0).wait(1).to({y:620.85,alpha:0.7017},0).wait(1).to({y:604.5,alpha:0.5946},0).wait(1).to({y:584.55,alpha:0.4641},0).wait(1).to({y:566.45,alpha:0.3458},0).wait(1).to({y:553,alpha:0.2579},0).wait(1).to({y:543.3,alpha:0.1943},0).wait(1).to({y:536.05,alpha:0.1471},0).wait(1).to({y:530.55,alpha:0.111},0).wait(1).to({y:526.25,alpha:0.083},0).wait(1).to({y:522.9,alpha:0.0611},0).wait(1).to({y:520.3,alpha:0.0438},0).wait(1).to({y:518.2,alpha:0.0303},0).wait(1).to({y:516.65,alpha:0.02},0).wait(1).to({y:515.45,alpha:0.0121},0).wait(1).to({y:514.55,alpha:0.0065},0).wait(1).to({y:514,alpha:0.0028},0).wait(1).to({y:513.7,alpha:0.0007},0).wait(1).to({regX:0,regY:0,x:848.1,y:513.9,alpha:0},0).wait(1));

	// Слой_32
	this.instance_14 = new lib.Анимация39("synched",0);
	this.instance_14.setTransform(862.5,222.75);
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация27("synched",0);
	this.instance_15.setTransform(881.4,222.75);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},44).to({state:[{t:this.instance_14}]},25).to({state:[{t:this.instance_14}]},19).to({state:[{t:this.instance_15}]},11).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).wait(25).to({x:852.9},0).to({alpha:0},19).to({_off:true},11).wait(321));

	// Слой_34 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("A16PsIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_1 = new cjs.Graphics().p("EAj/AePIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_2 = new cjs.Graphics().p("EAj/AeOIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_3 = new cjs.Graphics().p("EAj/AeOIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_4 = new cjs.Graphics().p("EAj/AeNIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_5 = new cjs.Graphics().p("EAj/AeMIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_6 = new cjs.Graphics().p("EAj+AeKIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_7 = new cjs.Graphics().p("EAj+AeJIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_8 = new cjs.Graphics().p("EAj+AeGIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_9 = new cjs.Graphics().p("EAj9AeEIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EAj8AeAIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EAj8Ad9IAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_12 = new cjs.Graphics().p("EAj7Ad4IAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_13 = new cjs.Graphics().p("EAj6AdzIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EAj4AdsIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EAj3AdlIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EAj1AdbIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_17 = new cjs.Graphics().p("EAjzAdQIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_18 = new cjs.Graphics().p("EAjwAdCIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_19 = new cjs.Graphics().p("EAjsAcxIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_20 = new cjs.Graphics().p("EAjoAcbIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_21 = new cjs.Graphics().p("EAjjAcBIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_22 = new cjs.Graphics().p("EAjdAbkIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_23 = new cjs.Graphics().p("EAjYAbJIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_24 = new cjs.Graphics().p("EAjTAazIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_25 = new cjs.Graphics().p("EAjQAahIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_26 = new cjs.Graphics().p("EAjNAaTIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_27 = new cjs.Graphics().p("EAjKAaHIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_28 = new cjs.Graphics().p("EAjIAZ9IAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_29 = new cjs.Graphics().p("EAjHAZ2IAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_30 = new cjs.Graphics().p("EAjFAZvIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_31 = new cjs.Graphics().p("EAjEAZpIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_32 = new cjs.Graphics().p("EAjDAZkIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_33 = new cjs.Graphics().p("EAjDAZgIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EAjCAZdIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_35 = new cjs.Graphics().p("EAjBAZaIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_36 = new cjs.Graphics().p("EAjBAZYIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EAjAAZVIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EAjAAZUIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EAjAAZSIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EAjAAZRIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EAi/AZRIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EAi/AZQIAA/WMAr1AAAIAAfWg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EAi/AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EAi/AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EAi/AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EAi+AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EAi+AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EAi9AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EAi9AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EAi8AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EAi7AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EAi7AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EAi6AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EAi6AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EAi5AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EAi5AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EAi4AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EAi4AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_59 = new cjs.Graphics().p("EAi3AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_60 = new cjs.Graphics().p("EAi3AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_61 = new cjs.Graphics().p("EAi2AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EAi1AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EAi1AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EAi0AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_65 = new cjs.Graphics().p("EAi0AZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EAizAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EAizAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EAiyAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EAiyAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EAixAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_71 = new cjs.Graphics().p("EAixAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EAiwAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EAivAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_74 = new cjs.Graphics().p("EAivAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EAiuAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_76 = new cjs.Graphics().p("EAiuAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_77 = new cjs.Graphics().p("EAitAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_78 = new cjs.Graphics().p("EAitAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_79 = new cjs.Graphics().p("EAisAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_80 = new cjs.Graphics().p("EAisAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_81 = new cjs.Graphics().p("EAirAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_82 = new cjs.Graphics().p("EAirAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_83 = new cjs.Graphics().p("EAiqAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_84 = new cjs.Graphics().p("EAipAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_85 = new cjs.Graphics().p("EAipAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_86 = new cjs.Graphics().p("EAioAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_87 = new cjs.Graphics().p("EAioAZQIAA/XMAr1AAAIAAfXg");
	var mask_5_graphics_88 = new cjs.Graphics().p("EAinAZQIAA/XMAr1AAAIAAfXg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:881.4,y:286.575}).wait(1).to({graphics:mask_5_graphics_1,x:510.8229,y:193.4646}).wait(1).to({graphics:mask_5_graphics_2,x:510.8164,y:193.4323}).wait(1).to({graphics:mask_5_graphics_3,x:510.8051,y:193.3759}).wait(1).to({graphics:mask_5_graphics_4,x:510.7885,y:193.2931}).wait(1).to({graphics:mask_5_graphics_5,x:510.766,y:193.1811}).wait(1).to({graphics:mask_5_graphics_6,x:510.7371,y:193.0368}).wait(1).to({graphics:mask_5_graphics_7,x:510.7009,y:192.8564}).wait(1).to({graphics:mask_5_graphics_8,x:510.6565,y:192.6353}).wait(1).to({graphics:mask_5_graphics_9,x:510.6029,y:192.368}).wait(1).to({graphics:mask_5_graphics_10,x:510.5387,y:192.0479}).wait(1).to({graphics:mask_5_graphics_11,x:510.4622,y:191.6667}).wait(1).to({graphics:mask_5_graphics_12,x:510.3714,y:191.2139}).wait(1).to({graphics:mask_5_graphics_13,x:510.2635,y:190.6762}).wait(1).to({graphics:mask_5_graphics_14,x:510.1351,y:190.0361}).wait(1).to({graphics:mask_5_graphics_15,x:509.9814,y:189.2702}).wait(1).to({graphics:mask_5_graphics_16,x:509.7961,y:188.3465}).wait(1).to({graphics:mask_5_graphics_17,x:509.5702,y:187.2205}).wait(1).to({graphics:mask_5_graphics_18,x:509.2911,y:185.8295}).wait(1).to({graphics:mask_5_graphics_19,x:508.9419,y:184.0888}).wait(1).to({graphics:mask_5_graphics_20,x:508.5037,y:181.9049}).wait(1).to({graphics:mask_5_graphics_21,x:507.9728,y:179.2586}).wait(1).to({graphics:mask_5_graphics_22,x:507.3954,y:176.3804}).wait(1).to({graphics:mask_5_graphics_23,x:506.8584,y:173.7041}).wait(1).to({graphics:mask_5_graphics_24,x:506.4119,y:171.4786}).wait(1).to({graphics:mask_5_graphics_25,x:506.0544,y:169.6964}).wait(1).to({graphics:mask_5_graphics_26,x:505.7675,y:168.2667}).wait(1).to({graphics:mask_5_graphics_27,x:505.5345,y:167.1052}).wait(1).to({graphics:mask_5_graphics_28,x:505.3426,y:166.1485}).wait(1).to({graphics:mask_5_graphics_29,x:505.1827,y:165.3518}).wait(1).to({graphics:mask_5_graphics_30,x:505.0485,y:164.6826}).wait(1).to({graphics:mask_5_graphics_31,x:504.935,y:164.1172}).wait(1).to({graphics:mask_5_graphics_32,x:504.8389,y:163.6379}).wait(1).to({graphics:mask_5_graphics_33,x:504.7573,y:163.2312}).wait(1).to({graphics:mask_5_graphics_34,x:504.6881,y:162.8865}).wait(1).to({graphics:mask_5_graphics_35,x:504.6297,y:162.5954}).wait(1).to({graphics:mask_5_graphics_36,x:504.5807,y:162.3511}).wait(1).to({graphics:mask_5_graphics_37,x:504.54,y:162.1481}).wait(1).to({graphics:mask_5_graphics_38,x:504.5066,y:161.9819}).wait(1).to({graphics:mask_5_graphics_39,x:504.4799,y:161.8484}).wait(1).to({graphics:mask_5_graphics_40,x:504.459,y:161.7446}).wait(1).to({graphics:mask_5_graphics_41,x:504.4436,y:161.6676}).wait(1).to({graphics:mask_5_graphics_42,x:504.433,y:161.615}).wait(1).to({graphics:mask_5_graphics_43,x:504.4269,y:161.5847}).wait(1).to({graphics:mask_5_graphics_44,x:504.425,y:161.575}).wait(1).to({graphics:mask_5_graphics_45,x:504.3705,y:161.575}).wait(1).to({graphics:mask_5_graphics_46,x:504.3159,y:161.575}).wait(1).to({graphics:mask_5_graphics_47,x:504.2614,y:161.575}).wait(1).to({graphics:mask_5_graphics_48,x:504.2068,y:161.575}).wait(1).to({graphics:mask_5_graphics_49,x:504.1523,y:161.575}).wait(1).to({graphics:mask_5_graphics_50,x:504.0977,y:161.575}).wait(1).to({graphics:mask_5_graphics_51,x:504.0432,y:161.575}).wait(1).to({graphics:mask_5_graphics_52,x:503.9886,y:161.575}).wait(1).to({graphics:mask_5_graphics_53,x:503.9341,y:161.575}).wait(1).to({graphics:mask_5_graphics_54,x:503.8795,y:161.575}).wait(1).to({graphics:mask_5_graphics_55,x:503.825,y:161.575}).wait(1).to({graphics:mask_5_graphics_56,x:503.7705,y:161.575}).wait(1).to({graphics:mask_5_graphics_57,x:503.7159,y:161.575}).wait(1).to({graphics:mask_5_graphics_58,x:503.6614,y:161.575}).wait(1).to({graphics:mask_5_graphics_59,x:503.6068,y:161.575}).wait(1).to({graphics:mask_5_graphics_60,x:503.5523,y:161.575}).wait(1).to({graphics:mask_5_graphics_61,x:503.4977,y:161.575}).wait(1).to({graphics:mask_5_graphics_62,x:503.4432,y:161.575}).wait(1).to({graphics:mask_5_graphics_63,x:503.3886,y:161.575}).wait(1).to({graphics:mask_5_graphics_64,x:503.3341,y:161.575}).wait(1).to({graphics:mask_5_graphics_65,x:503.2795,y:161.575}).wait(1).to({graphics:mask_5_graphics_66,x:503.225,y:161.575}).wait(1).to({graphics:mask_5_graphics_67,x:503.1705,y:161.575}).wait(1).to({graphics:mask_5_graphics_68,x:503.1159,y:161.575}).wait(1).to({graphics:mask_5_graphics_69,x:503.0614,y:161.575}).wait(1).to({graphics:mask_5_graphics_70,x:503.0068,y:161.575}).wait(1).to({graphics:mask_5_graphics_71,x:502.9523,y:161.575}).wait(1).to({graphics:mask_5_graphics_72,x:502.8977,y:161.575}).wait(1).to({graphics:mask_5_graphics_73,x:502.8432,y:161.575}).wait(1).to({graphics:mask_5_graphics_74,x:502.7886,y:161.575}).wait(1).to({graphics:mask_5_graphics_75,x:502.7341,y:161.575}).wait(1).to({graphics:mask_5_graphics_76,x:502.6795,y:161.575}).wait(1).to({graphics:mask_5_graphics_77,x:502.625,y:161.575}).wait(1).to({graphics:mask_5_graphics_78,x:502.5705,y:161.575}).wait(1).to({graphics:mask_5_graphics_79,x:502.5159,y:161.575}).wait(1).to({graphics:mask_5_graphics_80,x:502.4614,y:161.575}).wait(1).to({graphics:mask_5_graphics_81,x:502.4068,y:161.575}).wait(1).to({graphics:mask_5_graphics_82,x:502.3523,y:161.575}).wait(1).to({graphics:mask_5_graphics_83,x:502.2977,y:161.575}).wait(1).to({graphics:mask_5_graphics_84,x:502.2432,y:161.575}).wait(1).to({graphics:mask_5_graphics_85,x:502.1886,y:161.575}).wait(1).to({graphics:mask_5_graphics_86,x:502.1341,y:161.575}).wait(1).to({graphics:mask_5_graphics_87,x:502.0795,y:161.575}).wait(1).to({graphics:mask_5_graphics_88,x:502.025,y:161.575}).wait(332));

	// Слой_3
	this.instance_16 = new lib.Символ1();
	this.instance_16.setTransform(1778,-348.15,1.5287,1.5287,0,0,0,634.6,437.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52).to({_off:false},0).wait(17).to({x:1762.1,alpha:1},0).wait(1).to({regY:438,x:1762.05,y:-347.95},0).wait(1).to({x:1761.9},0).wait(1).to({x:1761.65},0).wait(1).to({x:1761.3},0).wait(1).to({x:1760.8},0).wait(1).to({x:1760.1},0).wait(1).to({x:1759.25},0).wait(1).to({x:1758.1,y:-347.9},0).wait(1).to({x:1756.6},0).wait(1).to({x:1754.7},0).wait(1).to({x:1752.2,y:-347.85},0).wait(1).to({x:1748.9,y:-347.8},0).wait(1).to({x:1744.25,y:-347.75},0).wait(1).to({x:1737.9,y:-347.65},0).wait(1).to({x:1730.1,y:-347.55},0).wait(1).to({x:1723,y:-347.45},0).wait(1).to({x:1717.75,y:-347.4},0).wait(1).to({x:1714,y:-347.35},0).wait(1).to({x:1711.15,y:-347.3},0).wait(1).to({x:1709,y:-347.25},0).wait(1).to({x:1707.35},0).wait(1).to({x:1706,y:-347.2},0).wait(1).to({x:1705},0).wait(1).to({x:1704.2},0).wait(1).to({x:1703.55},0).wait(1).to({x:1703.1},0).wait(1).to({x:1702.75},0).wait(1).to({x:1702.55},0).wait(1).to({x:1702.4},0).wait(1).to({regY:437.9,y:-347.35},0).wait(1).to({regY:438,y:-347.15},0).wait(2).to({x:1702.45},0).wait(1).to({x:1702.5},0).wait(1).to({x:1702.55},0).wait(1).to({x:1702.65},0).wait(1).to({x:1702.7,y:-347.1},0).wait(1).to({x:1702.85},0).wait(1).to({x:1703,y:-347.05},0).wait(1).to({x:1703.15},0).wait(1).to({x:1703.3,y:-347},0).wait(1).to({x:1703.5},0).wait(1).to({x:1703.75,y:-346.95},0).wait(1).to({x:1704,y:-346.9},0).wait(1).to({x:1704.3,y:-346.85},0).wait(1).to({x:1704.65,y:-346.8},0).wait(1).to({x:1705.05,y:-346.7},0).wait(1).to({x:1705.45,y:-346.65},0).wait(1).to({x:1705.9,y:-346.55},0).wait(1).to({x:1706.45,y:-346.5},0).wait(1).to({x:1707,y:-346.4},0).wait(1).to({x:1707.65,y:-346.25},0).wait(1).to({x:1708.4,y:-346.15},0).wait(1).to({x:1709.2,y:-346},0).wait(1).to({x:1710.15,y:-345.85},0).wait(1).to({x:1711.2,y:-345.65},0).wait(1).to({x:1712.45,y:-345.45},0).wait(1).to({x:1713.85,y:-345.2},0).wait(1).to({x:1715.5,y:-344.95},0).wait(1).to({x:1717.35,y:-344.6},0).wait(1).to({x:1719.55,y:-344.25},0).wait(1).to({x:1722,y:-343.8},0).wait(1).to({x:1724.7,y:-343.35},0).wait(1).to({x:1727.45,y:-342.9},0).wait(1).to({x:1730.05,y:-342.45},0).wait(1).to({x:1732.4,y:-342.05},0).wait(1).to({x:1734.45,y:-341.7},0).wait(1).to({x:1736.2,y:-341.4},0).wait(1).to({x:1737.75,y:-341.1},0).wait(1).to({x:1739.1,y:-340.9},0).wait(1).to({x:1740.25,y:-340.7},0).wait(1).to({x:1741.3,y:-340.5},0).wait(1).to({x:1742.2,y:-340.35},0).wait(1).to({x:1743,y:-340.2},0).wait(1).to({x:1743.7,y:-340.1},0).wait(1).to({x:1744.35,y:-340},0).wait(1).to({x:1744.95,y:-339.9},0).wait(1).to({x:1745.45,y:-339.8},0).wait(1).to({x:1745.9,y:-339.75},0).wait(1).to({x:1746.3,y:-339.65},0).wait(1).to({x:1746.7,y:-339.6},0).wait(1).to({x:1747.05,y:-339.55},0).wait(1).to({x:1747.35,y:-339.5},0).wait(1).to({x:1747.6,y:-339.45},0).wait(1).to({x:1747.85,y:-339.4},0).wait(1).to({x:1748.05,y:-339.35},0).wait(1).to({x:1748.25,y:-339.3},0).wait(1).to({x:1748.4},0).wait(1).to({x:1748.55,y:-339.25},0).wait(1).to({x:1748.7},0).wait(1).to({x:1748.8},0).wait(1).to({x:1748.9,y:-339.2},0).wait(1).to({x:1748.95},0).wait(1).to({x:1749.05},0).wait(2).to({x:1749.1},0).wait(2).to({regY:437.9,x:1749.15,y:-339.35},0).wait(30).to({regY:438,y:-339.2,alpha:0.9988},0).wait(1).to({alpha:0.9948},0).wait(1).to({alpha:0.9875},0).wait(1).to({alpha:0.9762},0).wait(1).to({alpha:0.9598},0).wait(1).to({alpha:0.9368},0).wait(1).to({alpha:0.9048},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.7952},0).wait(1).to({alpha:0.6977},0).wait(1).to({alpha:0.5505},0).wait(1).to({alpha:0.3836},0).wait(1).to({alpha:0.2612},0).wait(1).to({alpha:0.1807},0).wait(1).to({alpha:0.1255},0).wait(1).to({alpha:0.0863},0).wait(1).to({alpha:0.0578},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.0116},0).wait(1).to({alpha:0.0048},0).wait(1).to({alpha:0.0011},0).wait(1).to({regY:437.9,y:-339.35,alpha:0},0).wait(201));

	// Слой_5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_1 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_2 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_3 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_4 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_5 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_6 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_7 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_8 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_9 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_10 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_11 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_12 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_13 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_14 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_15 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_16 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_17 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_18 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_19 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_20 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_21 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_22 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_23 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_24 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_25 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_26 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_27 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_28 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_29 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_30 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_31 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_32 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_33 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_34 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_35 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_36 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_37 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_38 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_39 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_40 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_41 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_42 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_43 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");
	var mask_6_graphics_44 = new cjs.Graphics().p("EgqDBXlMAAAivJMBUHAAAMAAACvJg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:826.5249,y:727.9002}).wait(1).to({graphics:mask_6_graphics_1,x:826.5249,y:727.8268}).wait(1).to({graphics:mask_6_graphics_2,x:826.5249,y:727.5991}).wait(1).to({graphics:mask_6_graphics_3,x:826.5249,y:727.2023}).wait(1).to({graphics:mask_6_graphics_4,x:826.5249,y:726.6195}).wait(1).to({graphics:mask_6_graphics_5,x:826.5249,y:725.832}).wait(1).to({graphics:mask_6_graphics_6,x:826.5249,y:724.8163}).wait(1).to({graphics:mask_6_graphics_7,x:826.5249,y:723.5464}).wait(1).to({graphics:mask_6_graphics_8,x:826.5249,y:721.9904}).wait(1).to({graphics:mask_6_graphics_9,x:826.5249,y:720.1094}).wait(1).to({graphics:mask_6_graphics_10,x:826.5249,y:717.8566}).wait(1).to({graphics:mask_6_graphics_11,x:826.5249,y:715.1737}).wait(1).to({graphics:mask_6_graphics_12,x:826.5249,y:711.9873}).wait(1).to({graphics:mask_6_graphics_13,x:826.5249,y:708.2032}).wait(1).to({graphics:mask_6_graphics_14,x:826.5249,y:703.6983}).wait(1).to({graphics:mask_6_graphics_15,x:826.5249,y:698.3082}).wait(1).to({graphics:mask_6_graphics_16,x:826.5249,y:691.8075}).wait(1).to({graphics:mask_6_graphics_17,x:826.5249,y:683.883}).wait(1).to({graphics:mask_6_graphics_18,x:826.5249,y:674.0937}).wait(1).to({graphics:mask_6_graphics_19,x:826.5249,y:661.8433}).wait(1).to({graphics:mask_6_graphics_20,x:826.5249,y:646.474}).wait(1).to({graphics:mask_6_graphics_21,x:826.5249,y:627.8499}).wait(1).to({graphics:mask_6_graphics_22,x:826.5249,y:607.5945}).wait(1).to({graphics:mask_6_graphics_23,x:826.5249,y:588.7598}).wait(1).to({graphics:mask_6_graphics_24,x:826.5249,y:573.0979}).wait(1).to({graphics:mask_6_graphics_25,x:826.5249,y:560.5551}).wait(1).to({graphics:mask_6_graphics_26,x:826.5249,y:550.494}).wait(1).to({graphics:mask_6_graphics_27,x:826.5249,y:542.3193}).wait(1).to({graphics:mask_6_graphics_28,x:826.5249,y:535.5868}).wait(1).to({graphics:mask_6_graphics_29,x:826.5249,y:529.9794}).wait(1).to({graphics:mask_6_graphics_30,x:826.5249,y:525.2697}).wait(1).to({graphics:mask_6_graphics_31,x:826.5249,y:521.2908}).wait(1).to({graphics:mask_6_graphics_32,x:826.5249,y:517.918}).wait(1).to({graphics:mask_6_graphics_33,x:826.5249,y:515.0556}).wait(1).to({graphics:mask_6_graphics_34,x:826.5249,y:512.6301}).wait(1).to({graphics:mask_6_graphics_35,x:826.5249,y:510.5812}).wait(1).to({graphics:mask_6_graphics_36,x:826.5249,y:508.8622}).wait(1).to({graphics:mask_6_graphics_37,x:826.5249,y:507.4335}).wait(1).to({graphics:mask_6_graphics_38,x:826.5249,y:506.2635}).wait(1).to({graphics:mask_6_graphics_39,x:826.5249,y:505.3243}).wait(1).to({graphics:mask_6_graphics_40,x:826.5249,y:504.5935}).wait(1).to({graphics:mask_6_graphics_41,x:826.5249,y:504.0513}).wait(1).to({graphics:mask_6_graphics_42,x:826.5249,y:503.6814}).wait(1).to({graphics:mask_6_graphics_43,x:826.5249,y:503.4685}).wait(1).to({graphics:mask_6_graphics_44,x:826.5249,y:503.4002}).wait(376));

	// Слой_1
	this.instance_17 = new lib.Анимация42("synched",0);
	this.instance_17.setTransform(1537.4,813.05);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.Анимация43("synched",0);
	this.instance_18.setTransform(1537.4,588.55);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({y:812.977,alpha:0.0003},0).wait(1).to({y:812.7492,alpha:0.0013},0).wait(1).to({y:812.3523,alpha:0.0031},0).wait(1).to({y:811.7696,alpha:0.0057},0).wait(1).to({y:810.9818,alpha:0.0092},0).wait(1).to({y:809.9663,alpha:0.0137},0).wait(1).to({y:808.6965,alpha:0.0194},0).wait(1).to({y:807.1403,alpha:0.0263},0).wait(1).to({y:805.2593,alpha:0.0347},0).wait(1).to({y:803.0066,alpha:0.0447},0).wait(1).to({y:800.3237,alpha:0.0567},0).wait(1).to({y:797.1373,alpha:0.0709},0).wait(1).to({y:793.3532,alpha:0.0877},0).wait(1).to({y:788.8484,alpha:0.1078},0).wait(1).to({y:783.4582,alpha:0.1318},0).wait(1).to({y:776.9577,alpha:0.1608},0).wait(1).to({y:769.0331,alpha:0.1961},0).wait(1).to({y:759.2437,alpha:0.2397},0).wait(1).to({y:746.9934,alpha:0.2942},0).wait(1).to({y:731.6242,alpha:0.3627},0).wait(1).to({y:713.0001,alpha:0.4457},0).wait(1).to({y:692.7447,alpha:0.5359},0).wait(1).to({y:673.9097,alpha:0.6198},0).wait(1).to({y:658.2481,alpha:0.6895},0).wait(1).to({y:645.7051,alpha:0.7454},0).wait(1).to({y:635.6439,alpha:0.7902},0).wait(1).to({y:627.4692,alpha:0.8266},0).wait(1).to({y:620.7368,alpha:0.8566},0).wait(1).to({y:615.1296,alpha:0.8816},0).wait(1).to({y:610.4199,alpha:0.9026},0).wait(1).to({y:606.4409,alpha:0.9203},0).wait(1).to({y:603.068,alpha:0.9353},0).wait(1).to({y:600.2058,alpha:0.9481},0).wait(1).to({y:597.7799,alpha:0.9589},0).wait(1).to({y:595.7312,alpha:0.968},0).wait(1).to({y:594.0121,alpha:0.9757},0).wait(1).to({y:592.5835,alpha:0.982},0).wait(1).to({y:591.4133,alpha:0.9872},0).wait(1).to({y:590.4742,alpha:0.9914},0).wait(1).to({y:589.7435,alpha:0.9947},0).wait(1).to({y:589.2014,alpha:0.9971},0).wait(1).to({y:588.8313,alpha:0.9987},0).wait(1).to({y:588.6184,alpha:0.9997},0).to({_off:true},1).wait(376));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(44).to({_off:false},0).wait(152).to({startPosition:0},0).wait(1).to({alpha:0.9988},0).wait(1).to({alpha:0.9948},0).wait(1).to({alpha:0.9875},0).wait(1).to({alpha:0.9762},0).wait(1).to({alpha:0.9598},0).wait(1).to({alpha:0.9368},0).wait(1).to({alpha:0.9048},0).wait(1).to({alpha:0.86},0).wait(1).to({alpha:0.7952},0).wait(1).to({alpha:0.6977},0).wait(1).to({alpha:0.5505},0).wait(1).to({alpha:0.3836},0).wait(1).to({alpha:0.2612},0).wait(1).to({alpha:0.1807},0).wait(1).to({alpha:0.1255},0).wait(1).to({alpha:0.0863},0).wait(1).to({alpha:0.0578},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.0116},0).wait(1).to({alpha:0.0048},0).wait(1).to({alpha:0.0011},0).wait(1).to({alpha:0},0).wait(201));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFD").s().p("EiayBJeMAAAiS7ME1lAAAMAAACS7g");
	this.shape.setTransform(846.825,379.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(420));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(691.1,196.4,1146.5,1092);
// library properties:
lib.properties = {
	id: '403388C5BD0695439737C80969CD42CC',
	width: 1670,
	height: 768,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/polosprite.png?1620277976313", id:"polosprite"},
		{src:"images/sprites.png?1620277976313", id:"sprites"},
		{src:"sounds/untitled.mp3?1620277976313", id:"untitled"}
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
an.compositions['403388C5BD0695439737C80969CD42CC'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;