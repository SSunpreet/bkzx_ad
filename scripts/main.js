var bannerID,stageWidth, stageHeight;
var isi;
var mainTimeline;
var projectNumber = "US-BK-2300272";
var projectDate = "";
var style = 'column';
function exitHandler(e) {
	var target = e.toElement || e.relatedTarget || e.target || function () { throw "Failed to attach an event target!"; }
    console.log('clicked on',target.id)
	switch (target.id) {
		/*~isiClickTags*/
		
		/*isiClickTags~*/
		// default: window.open(window.clickTag1);
	}
}
function init() {
	gsap.registerPlugin(ScrollToPlugin);
	new Border(borderHolder,{thickness:1});
	isi = new ISI({
		projectISINumber:projectNumber,
		projectISIDate:projectDate,
	});
    

	mainTimeline = gsap.timeline({onStart:startTimeline,onComplete:completeTimeline});
	addISITreatment();
	mainTimeline
		.set([
			isiHolder
		],{autoAlpha:1})
		/**/
		.pause();
	mainTimeline.play();
}
var startTime,stageCompleteTime;
function startTimeline() {
	startTime = new Date().getTime();
}
function completeTimeline() {
	stageCompleteTime = new Date().getTime();
	console.log(">>"+bannerID.replace("dim","")+"<< stage animation finished at timestamp",((stageCompleteTime - startTime)*0.001).toFixed(1) + "s");
}
