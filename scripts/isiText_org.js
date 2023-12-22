var isiID = "TEMPLATE";
var isiVer = "001.b";

function ISIText() {
//square filled <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="#2e3192" d="M0 0h25v25H0z"/></svg>
var bulletLevl1 = '<svg id="bulletCircle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#2A7475"/></svg>';
var bulletLevl1_64 = window.btoa(bulletLevl1);
//square hollow <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="none" stroke="#2e3192" stroke-width="3" stroke-miterlimit="10" d="M0 0h25v25H0z"/></svg>
var bulletLevel2 = '<svg id="bulletCircle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#63666A"/></svg>';
var bulletLevel2_64 = window.btoa(bulletLevel2);

var nonBreakingHyphen = "&#8209;";//do not allow word wrap on hyphen, good for phone numbers
var softHyphen = "&#173;";//optional spot for hyphen for very long words
var zeroSpace = "&#8203;";//good for long URL paths (after each "/")
var greaterthanorequal = "<u>&#62;</u>";//some fonts have strange drawings of this character
var registration = "<sup>&#174;</sup>";
var copyright = "&#169;";
var trademark = "&#8482;";
var configISI,vars = {};
function refreshConfiguration() {
    configISI = {
        body:getBody(),
        css:thisCSS,
        type: "time",
        speed: 160,
        maxTime: null,
        time: 240,
        delay: 0,
        header:getHeader(),
        footer:getFooter(),
        holderCSS:getHolderCSS(),
        stopType:"bottom",
        stopText:"<b>scroll down for more safety information.</b>",
        vars:vars
    }
}

var thisCSS = getCSS();
function getHolderCSS() {
    switch(bannerID){
        /*~displayBanner*/
        default:
            return "top:1191px;left:0px;width:1079px;height:541px;background: #ffffff;";
    }
}
function getCSS() { 
    var str = ".isiBody {font-family: 'Red Hat Text', sans-serif;  font-size: 21px; color:#535455; font-weight:400;background-color:#ffffff;}" +
    "#blackbox {padding:3px; border:1px solid #000000; font-weight:400; position:relative; opacity:1 !important}" + 	
	"#projectISINumber, #projectISIDate {font-weight:400; width:100%; text-align:left;margin-bottom:0;}"+
	"h1 {  color:#2A7475; font-weight:700; margin-top:-.85em; font-size:21px; line-height: 1.15em; letter-spacing: 0;}" +
	"h2 { color:#2A7475; font-weight:700; font-size:21px; line-height: 1.25em; }" +
    "h3 { color:#2A7475; font-weight:700;font-size:11px; line-height: 1.15em;}" +
    "p {margin-block-start: .5em;line-height: 1.15em;}"+

    ".moveTop {margin-top: -6px; margin-bottom:-10px;}"+
    ".addSpaceTop{margin-top: 8px;}"+
    ".displayBlock{display: none;}"+

    "#blue{color:#2A7475;}"+
    "#grey{color:#63666A;}"+

	"ul.isiUL {  padding-left:15px;list-style-type:none; }" +

    "ul.isiUL1 { margin-top: 0px; padding-left:20px; margin-bottom:9px; list-style-type:none; }" +
    "li.isiLI:before{background-size:15px;left:-41px;top:5px; content:'';background-image:url(data:image/svg+xml;base64,"+bulletLevl1_64+");background-repeat:no-repeat;position:absolute;width:25px;height:25px;transform: scale(.5);}"+
    "li.isiLI {position:relative; line-height: 1.45em;}"+

    "ul.isiUL ul.isiUL1 li.isiLI:before{background-size:15px;left:-26px;top:6px; content:'';background-image:url(data:image/svg+xml;base64,"+bulletLevel2_64+");background-repeat:no-repeat;position:absolute;width:25px;height:25px;transform: scale(.4);}"+
    "ul.isiUL1 li.isiLI:before{background-size:5px;left:-14px;top:4px; content:'';background-image:url(data:image/svg+xml;base64,"+bulletLevel2_64+");background-repeat:no-repeat;position:absolute;width:25px;height:25px;transform: scale(.5);}"+
    "ul.isiUL ul.isiUL1 li.isiLI {position:relative;list-style: none; padding-bottom:4px; letter-spacing:0}"+
    

    "#isiBody sup {vertical-align:text-top;font-size:0.6em;line-height:1.5em;}"+

    "a.isiBodyLink:link, a.isiBodyLink:visited  {color:#2A7475; text-decoration:none; font-weight:700; }" +
	"a.isiBodyLink:hover  { color:#2A7475; text-decoration:none; }" +
	
	".isiHeader{background-image:url('./images/textureBorder.png');background-repeat:no-repeat;background-size: 1087px;position:absolute; width:1079px;height: 11px; }" +
    ".isiLogo{background-image:url('images/ucb_logo.svg');background-repeat:no-repeat;position:absolute; width:300px;height: 6px; ;}" +

    ".isiFooter{background-color:#b2d236;}" +
	".isiFooter{font-family: 'Red Hat Text', sans-serif; color:#2A7475; font-weight:700; }"+
	"a.isiFooter:link,a.isiFooter:visited { color:#2A7475;text-decoration:none; }"+
    "a.isiFooter:hover { color:#2A7475; text-decoration:none; }" +
    ".footerLink {color:#2A7475; font-weight:700; width:100%; text-decoration:none; letter-spacing:.01em; }" +
    "a.isiFooterText:link,a.isiFooterText:visited { color: #266A8F; font-weight:700; text-decoration:underline; }"+
    "a.isiFooterText:hover { color: #266A8F; font-weight:700; text-decoration: underline;}"+

    ".stopText { font-family:'Red Hat Text', sans-serif;font-weight:400;color:#ffffff; background-color:#000000; font-size:12px; line-height:1em; text-align:center;padding:3px;transform:translate3d(0,0,0);}" +
  
    ".row:after {content: '';display: table;clear: both;}"+
    ".notop{margin-top:-2px; margin-bottom:0;}"+
    ".notop5{margin-top:0px;}"+

	"#isiBody::-webkit-scrollbar {-webkit-appearance:none; width:10px; background-color:#D8D8D8; border-left:2px solid #ffffff; border-right:2px solid #ffffff;}"+
	"#isiBody::-webkit-scrollbar-thumb { background-color:#2A7475; width:10px; margin-right:10px;}"+	
	"";
    switch(bannerID){
        default:
            str +=
            ".isiBody {line-height:1.25em; letter-spacing: -.005em; padding:46px 43px 12px 32px; margin-right: 20px; margin-top: 20px; }" +
            "h3 {margin-block-end: 0.1em;}" +
            ".row{top: 5px;}"+
            ".isiLogo{width: 258px;height: 126px;background-size: 45%;}"+
            ".column.l {width:13%;float:left;}"+            
            ".column.r {width:100%;float:right;}"+
            "ul.isiUL {margin-block-start: 0.7em; padding-left: 38px;}"+
            ".isiFooter{font-size:22px; color:#2A7475; padding:8px 7px 8px 33px;}"+
            ".displayBlock{display: block;}"+
            ".mbottom{margin-bottom:22px;}";	
	}
	return str;
};
function getHeader() { 
    var openCloseSpan = "<span id='openClose' style='position:absolute;'></span>"
	return  openCloseSpan;
}

function getFooter(){
    switch(bannerID){
        default:
            return "<a href='javascript:foo()' class='footerLink' id='clickTag102'>MEDICATION GUIDE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; <a href='javascript:foo()' class='footerLink' id='clickTag101'>FULL PRESCRIBING INFORMATION</a>";
    }
}

function getBody() { return ""+
    "<h1 id=grey>IMPORTANT SAFETY INFORMATION</h1>"+
    "<h2 class='mbottom'>What is the most important information I should know about BIMZELX<span class=isi>®</span><br> (bimekizumab-bkzx)?</h2>"+
    "<p>BIMZELX is a medicine that affects your immune system. BIMZELX may increase your risk of having serious side effects, including:"+
    "<ul class='isiUL'>" +
        "<li class='isiLI'><b>Infections.</b> BIMZELX is a medicine that may lower the ability of your immune system to fight infections and may increase your risk of infections.</li>"+
        "<ul class='isiUL1'>" +
            "<li class='isiLI'>Your healthcare provider should check you for infections and tuberculosis (TB) before starting treatment with BIMZELX.</li>"+
            "<li class='isiLI'>If your healthcare provider feels you are at risk for TB, you may be treated with medicine for TB before you begin treatment with BIMZELX and during your treatment. </li>"+
            "<li class='isiLI'>Your doctor should watch you closely for signs and symptoms of TB during and after treatment with BIMZELX. <b>Do not take BIMZELX if you have an active TB infection.</b> </li>"+
        "</ul>" +
    "</ul>" +
    "<h2 class='moveTop'>Before starting BIMZELX, tell your healthcare provider if you:</h2>"+
    "<ul class='isiUL'>" +
        "<li class='isiLI'>are being treated for an infection.</li>"+
        "<li class='isiLI'>have an infection that does not go away or that keeps coming back.</li>"+
        "<li class='isiLI'>have TB or have been in close contact with someone with TB.</li>"+
        "<li class='isiLI'>think you have an infection or have symptoms of an infection such as:</li>"+
        "<ul class='isiUL1'>" +
            "<li class='isiLI'>fever, sweats, or chills</li>"+
            "<li class='isiLI'>muscle aches</li>"+
            "<li class='isiLI'>cough</li>"+
            "<li class='isiLI'>shortness of breath</li>"+
            "<li class='isiLI'>blood in your phlegm</li>"+
            "<li class='isiLI'>weight loss</li>"+
            "<li class='isiLI'>warm, red, or painful skin or sores on your body different from your psoriasis</li>"+
            "<li class='isiLI'>diarrhea or stomach pain</li>"+
            "<li class='isiLI'>burning when you urinate or urinating more often than normal</li>"+
        "</ul>" +
    "</ul>" +

    "<p><strong>After starting BIMZELX, call your healthcare provider right away if you have any of the signs of infection listed above.</strong> Do not use BIMZELX if you have any signs of infection unless you are instructed to by your healthcare provider.  See “<strong>What are the possible side effects of BIMZELX?</strong>” for more information about side effects."+
    "<h2>What is BIMZELX?</h2>"+
    "<p>BIMZELX is a prescription medicine used to treat adults with moderate to severe plaque psoriasis who may benefit from taking injections or pills (systemic therapy) or treatment using ultraviolet light alone or with pills (phototherapy). </p>"+
    "<ul class='isiUL'>" +
        "<li class='isiLI'>It is not known if BIMZELX is safe and effective in children.</li>"+
    "</ul>" +
    "<h2 class='moveTop'>Before using BIMZELX, tell your healthcare provider about all of your medical conditions, including if you:  </h2>"+
    "<ul class='isiUL'>" +
        "<li class='isiLI'>have any of the conditions or symptoms listed in the section <strong>“What is the most important information I should know about BIMZELX?”</strong></li>"+
        "<li class='isiLI'>have recently received or are scheduled to receive an immunization (vaccine). You should avoid receiving live vaccines during treatment with BIMZELX.</li>"+
        "<li class='isiLI'>have inflammatory bowel disease (Crohn’s disease or ulcerative colitis).</li>"+
        "<li class='isiLI'>have liver problems.</li>"+
        "<li class='isiLI'>are pregnant or plan to become pregnant. It is not known if BIMZELX can harm your unborn baby. </li>"+
        "<li class='isiLI'>are breastfeeding or plan to breastfeed. It is not known if BIMZELX passes into your breast milk.</li>"+
    "</ul>" +
    "<p><strong>Tell your healthcare provider about all the medicines you take</strong>, including prescription and over the counter medicines, vitamins and herbal supplements.</p>"+
    "<h2 id=blue>What are the possible side effects of BIMZELX?</h2>"+
    "<p><strong>BIMZELX may cause serious side effects. </strong> See <strong>“What is important information I should know about BIMZELX?” </strong></p>"+
    "<ul class='isiUL'>" +
        "<li class='isiLI'><strong>Inflammatory bowel disease.</strong> New cases of inflammatory bowel disease or “flare-ups” have happened with BIMZELX. If you have inflammatory bowel disease (ulcerative colitis or Crohn’s disease), tell your healthcare provider if you have worsening disease symptoms during treatment with BIMZELX or develop new symptoms of stomach pain or diarrhea.</li>"+
    "</ul>" +
    "<ul class='isiUL'>" +
        "<li class='isiLI'><strong>Elevated liver enzyme levels.</strong> Elevated liver enzyme levels have happened with BIMZELX. Your healthcare provider will do blood tests to check your liver enzyme levels before starting treatment and during treatment with BIMZELX.  Stop your treatment with BIMZELX and call your healthcare provider right away if you develop any signs or symptoms of liver problems, including:</li>"+

        "<ul class='isiUL1'>" +
            "<li class='isiLI addSpaceTop'>pain on the right side of your stomach-area</li>"+
            "<li class='isiLI'>feeling very tired</li>"+
            "<li class='isiLI'>loss of appetite</li>"+
            "<li class='isiLI'>nausea and vomiting</li>"+
            "<li class='isiLI'>itching</li>"+
            "<li class='isiLI'>dark urine</li>"+
            "<li class='isiLI'>light-colored stool</li>"+
            "<li class='isiLI'>yellowing of your skin or the whites of your eyes</li>"+
        "</ul>" +
    "</ul>" +
    "<h2 id=blue>The most common side effects of BIMZELX include:</h2>"+
    "<ul class='isiUL'>" +
            "<li class='isiLI'>upper respiratory tract infections</li>"+
            "<li class='isiLI'>headache</li>"+
            "<li class='isiLI'>herpes simplex infections (cold sores in or around the mouth)</li>"+
            "<li class='isiLI'>small red bumps on your skin</li>"+
            "<li class='isiLI'>feeling tired</li>"+
            "<li class='isiLI'>fungal infections (oral thrush or infections in the mouth, throat, skin, nails, feet or genitals)</li>"+
            "<li class='isiLI'>pain, redness or swelling at the injection site</li>"+
            "<li class='isiLI'>stomach flu (gastroenteritis)</li>"+
            "<li class='isiLI'>acne</li>"+
        "</ul>" +

        "<p class='moveTop'> These are not all of the possible side effects of BIMZELX. Call your doctor for medical advice about side effects.</p>"+
        "<br>"+
        "<p>Use BIMZELX exactly as your doctor tells you to use it. See the Instructions for Use that come with BIMZELX. There you will find information about how to store, prepare, and inject BIMZELX. You may self-inject after receiving training from your doctor. </p>"+
        "<p><strong>General information about the safe and effective use of BIMZELX.</strong></p>"+
        "<p>Medicines are sometimes prescribed for purposes other than those listed in a Medication Guide. Do not use BIMZELX for a condition for which it was not prescribed. Do not give BIMZELX to other people, even if they have the same symptoms that you have. It may harm them.  </p>"+
        "<p>You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <a href='javascript:foo()' class='isiFooterText' id='clickTag103'>www.fda.gov/medwatch</a>, or call 1"+nonBreakingHyphen+"800"+nonBreakingHyphen+"FDA"+nonBreakingHyphen+"1088."+
        "<div class='row'>"+
        "<div class='column r'>"+
        "<p class='notop'>BIMZELX® is a registered trademark of the UCB Group of Companies. All other trademarks and registered trademarks are the property of their respective holders.<br>©2023 UCB, Inc., Smyrna, GA 30080. All rights reserved. </p>"+
        "<br class='displayBlock'><p class='notop5'><span id='projectISINumber'></span>"+
        "</div>"+
    "</div>";
   
};
refreshConfiguration();
return configISI;
}

var autoscrollStartTime,autoscrollCompleteTime;
var isiState = "collapsed";
function addISITreatment() {
    startAutoscroll = function () {
        autoscrollStartTime = new Date().getTime();
        isi.startAutoscroll();
    }
    completeAutoscroll = function() {
		//jumpToTop();               
        autoscrollCompleteTime = new Date().getTime();
        console.log(">:< pause + auto scroll time:", ((autoscrollCompleteTime - autoscrollStartTime)*0.001).toFixed(2) + " s");
        console.log(">:< total animation time:", ((autoscrollCompleteTime - startTime)*0.001).toFixed(2) + " s");
    }
    jumpToTop = function() {
        isi.goToTop(1,.5);
    }    
    toggleISIBox = function() {
        var time = .5;/*~displayBanner*/
            if(isiState === "collapsed") {
                isi.resize(isi.var("ExpandedISI"),time);
                gsap.to(getElem("openClose"),{duration:time,rotation:90});
                gsap.to(getElem("openCloseLineVertical"),{duration:time,autoAlpha:0});
                isiState = "expanded";
            } else {
                isi.resize(isi.var("CollapsedISI"),time);
                gsap.to(getElem("openClose"),{duration:time,rotation:0});
                gsap.to(getElem("openCloseLineVertical"),{duration:time,autoAlpha:1});
                isiState = "collapsed";
            }
        /*displayBanner~*/
		
    }
	
    isiHolder.addEventListener("ISI_AUTOSCROLL_COMPLETE",completeAutoscroll);

    isiHolder.addEventListener("ISI_AUTOSCROLL_INTERRUPTED",function(e){console.log(e.type);});
    isiHolder.addEventListener("ISI_AUTOSCROLL_ABORTED",function(e){console.log(e.type);});
    isiHolder.addEventListener("ISI_READY",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_CALL_START_AUTOSCROLL",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_START_AUTOSCROLL",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_STOPPOINT_INVALID",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_CUEPOINT",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_RESIZE_START",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_RESIZE_COMPLETE",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_START_GO_TO_TOP",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_COMPLETE_GO_TO_TOP",function(e){console.log(e.type);});
	isiHolder.addEventListener("ISI_AUTOSCROLL_TIMEOUT",function(e){console.log(e.type);});
	    
    function addToTimeline() {
        //remove after first update (this will not overwrite onStart);
        mainTimeline.eventCallback("onUpdate", null);
        //add startAutoscroll to beginning of timeline
       /* mainTimeline.add(startAutoscroll,0);*/
        //add startAutoscroll to end of timeline
        mainTimeline.add(startAutoscroll,">");
        //otherwise, tell developer to use .add(startAutoscroll) in their timeline
    }
    mainTimeline.eventCallback("onUpdate", addToTimeline);
}