var isiID = "TEMPLATE";
var isiVer = "001.b";
// var googleFontsLinkISI = '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>< link href = "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap" rel = "stylesheet" >';

function ISIText() {
//square filled<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="#2e3192" d="M0 0h25v25H0z"/></svg>
var bulletLevl1 = '<svg id="bulletCircle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#2A7475"/></svg>';
var bulletLevl1_64 = window.btoa(bulletLevl1);
//square hollow<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path fill="none" stroke="#2e3192" stroke-width="3" stroke-miterlimit="10" d="M0 0h25v25H0z"/></svg>
var bulletLevel2 = '<svg id="bulletCircle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#535455"/></svg>';
var bulletLevel2_64 = window.btoa(bulletLevel2);
var ucbLogo = '<svg version="1.1" id="ucb" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 200 201" style="enable-background:new 0 0 200 201" xml:space="preserve"><style>.ucb0{fill:#21409a}</style><path id="graphic" class="ucb0" d="M200 85V.3h-84.5C159 7.1 193.3 41.4 200 85zM84.5.3H0V85C6.7 41.4 41 7.1 84.5.4zM0 116v84.5h84.5C41 193.7 6.7 159.4 0 116zm115.5 84.5H200V116c-6.7 43.5-41 77.8-84.5 84.5zM147 106h-17V95h17V81h-31.5V120H147V106zm4.2-47.2V120h38.6V80.7h-24.3v-22h-14.3zM176.6 95V106h-11.1V95h11zM100.7.4h-1.2v80.3h-2.8v25H86.3v-25H73V120h26.4v80.5h1.2V120h10.2V80.7h-10.2V.4z"/></svg>';
var ucbLogo_64 = window.btoa(ucbLogo);


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
        time: 480,
        delay: 0,
        header:getHeader(),
        footer:getFooter(),
        holderCSS:getHolderCSS(),
        stopType:"overlay",
        stopText:"<b>scroll down for more safety information.</b>",
        vars:vars
    }
}
var thisCSS = getCSS();
function getHolderCSS() {
    switch(bannerID){
        /*~displayBanner*/
        default:
            return "top:0px;left:0px;width:1079px;height:541px;background: #ffffff;";
    }
}
function getCSS() { 
    var str = 
    "@font-face {/*regular*/font-family: 'Red Hat Text';src: url('fonts/RedHatDisplay-Regular.woff2') format('woff2');font-weight: 400;}@font-face {/*bold*/font-family: 'Red Hat Text';src: url('fonts/RedHatDisplay-Bold.woff2') format('woff2');font-weight: 700;}"+
    ".isiHolder {background-color:#ffffff;}"+
    ".isiBody {font-family: 'Red Hat Text', sans-serif; color:#535455; font-weight:400;background-color:#ffffff;}" +	
	"#projectISINumber, #projectISIDate {font-weight:400; width:100%; text-align:left;margin-bottom:0;}"+
	"h1 {color:#535456; font-weight:700;}" +
	"h2 {color:#2c7375; font-weight:700; }" +

	"ul.isiUL {list-style-type:none; }" +
    "li.isiLI:before{content:'';background-image:url(data:image/svg+xml;base64,"+bulletLevl1_64+");background-repeat:no-repeat;position:absolute;width:25px;height:25px;}"+
    "li.isiLI {position:relative;}"+
    "ul.isiUL ul.isiUL {list-style-type:none; }" +
    "ul.isiUL ul.isiUL li.isiLI:before{content:'';background-image:url(data:image/svg+xml;base64,"+bulletLevel2_64+");background-repeat:no-repeat;position:absolute;width:25px;height:25px;}"+
    "ul.isiUL ul.isiUL li.isiLI {position:relative;}"+
    "#isiBody sup {vertical-align: text-top;font-size:0.6em;line-height:1.5em;}"+

    ".isiHeader{background-image:url('images/textureBorder.png');background-repeat:repeat-x;position:absolute; width:100%;}" +
    ".isiLogo{background-image:url(data:image/svg+xml;base64,"+ucbLogo_64+");background-repeat:no-repeat;position:absolute; width:200px;height:200px; ;}" +

    ".isiFooter{background-color:#b2d236;}" +
	".isiFooter{font-family: 'Red Hat Text', sans-serif; color:#2A7475; font-weight:700; }"+
	
    "a.isiBodyLink:link, a.isiBodyLink:visited  {color:#2A7475; text-decoration:underline; font-weight:700; }" +
	"a.isiBodyLink:hover  {color:#2A7475; text-decoration:none; }" +

    "a.isiFooterText:link,a.isiFooterText:visited {color: #266A8F; font-weight:700; text-decoration:none; }"+
    "a.isiFooterText:hover {color: #266A8F; font-weight:700; text-decoration: none;}"+
    

	"#isiBody::-webkit-scrollbar {-webkit-appearance: none;width: 8px;background-color: #D8D8D8;border-left: 3px #ffffff solid;border-right: 3px #ffffff solid;}"+	
    "#isiBody::-webkit-scrollbar-thumb {background-color: #2A7475;width: 8px;height: 31px;margin-right: 10px;}"+
	"";
    switch(bannerID){
        case "dim1080x1733":
        default:
            str +=
            ".isiBody {font-size: 24px;padding:0px 35px 35px 34px;line-height: 1.25em;}" +
			"h1 {font-size:24px;margin: 0.75em 0em}" +
            "h2 {font-size:24px;}" +
            "ul.isiUL {padding-left:42px; line-height: 1.45em;}" +
            "li.isiLI:before {background-size: 9px;left: -39px;top: 11px;}"+
            "ul.isiUL ul.isiUL {padding-left: 22px; line-height: 1.45em;}" +
            "ul.isiUL ul.isiUL li.isiLI:before {background-size: 7px;left: -21px;top: 10px;}"+
            "li.LIafterUL {margin-top:1em;}"+
            ".isiLogo{width: 100px;height: 100px;margin-left: 16px;}"+
            ".column.l {width:14%;float:left;}"+            
            ".column.r {width: 86%;float: right;margin-top: -29px; line-height: 1.2em;}"+
            ".row{top: 10px;}"+
            ".isiHeader{height:10px; ;}" +
            ".isiFooter{font-size:24px;color:#2A7475; padding:3px 7px 2px 13px;}";		
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
            return "<a href='#' class='isiFooterText'>MEDICATION GUIDE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;<a href='#' class='isiFooterText'>FULL PRESCRIBING INFORMATION</a>";
    }
}

function getBody() { return ""+
"<h1>INDICATION</h1>"+
"BIMZELX"+registration+" is a prescription medicine used to treat adults with moderate to severe plaque psoriasis who may benefit from taking injections or pills (systemic therapy) or treatment using ultraviolet light alone or with pills (phototherapy)."+
"<h1>IMPORTANT SAFETY INFORMATION</h1>"+
"<h2>What is the most important information I should know about BIMZELX"+registration+" (bimekizumab"+nonBreakingHyphen+"bkzx)?</h2>"+
"<p>BIMZELX is a medicine that affects your immune system. BIMZELX may increase your risk of having serious side effects, including:"+
"<ul class='isiUL'>"+    
    "<li class='isiLI'><b>Suicidal thoughts and behavior have happened in some people treated with BIMZELX.</b> Get medical help right away or call the National Suicide and Crisis Lifeline at 988 if you, your caregiver or your family member notice in you any of the following symptoms:</li>"+
    "<ul class='isiUL'>"+
        "<li class='isiLI'>new or worsening depression or anxiety</li>"+
        "<li class='isiLI'>thoughts of suicide, dying, or hurting yourself</li>"+
        "<li class='isiLI'>changes in behavior or mood</li>"+
        "<li class='isiLI'>acting on dangerous impulses</li>"+
        "<li class='isiLI'>attempt to commit suicide</li>"+
    "</ul>"+
    "<li class='isiLI LIafterUL'><b>Infections.</b> BIMZELX is a medicine that may lower the ability of your immune system to fight infections and may increase your risk of infections.</li>"+
    "<ul class='isiUL'>"+
        "<li class='isiLI'>Your healthcare provider should check you for infections and tuberculosis (TB) before starting treatment with BIMZELX.</li>"+
        "<li class='isiLI'>If your healthcare provider feels you are at risk for TB, you may be treated with medicine for TB before you begin treatment with BIMZELX and during your treatment.</li>"+
        "<li class='isiLI'>Your doctor should watch you closely for signs and symptoms of TB during and after treatment with BIMZELX. <b>Do not take BIMZELX if you have an active TB infection.</b></li>"+
    "</ul>"+
"</ul>"+ 
"<h2>Before starting BIMZELX, tell your healthcare provider if you:</h2>"+
"<ul class='isiUL'>"+
    "<li class='isiLI'>are being treated for an infection</li>"+
    "<li class='isiLI'>have an infection that does not go away or that keeps coming back</li>"+
    "<li class='isiLI'>have TB or have been in close contact with someone with TB</li>"+
    "<li class='isiLI'>think you have an infection or have symptoms of an infection such as:</li>"+
    "<ul class='isiUL'>"+    
        "<li class='isiLI'>fever, sweats, or chills</li>"+
        "<li class='isiLI'>muscle aches</li>"+
        "<li class='isiLI'>cough</li>"+
        "<li class='isiLI'>shortness of breath</li>"+
        "<li class='isiLI'>blood in your phlegm</li>"+
        "<li class='isiLI'>weight loss</li>"+
        "<li class='isiLI'>warm, red, or painful skin or sores on your body different from your psoriasis</li>"+
        "<li class='isiLI'>diarrhea or stomach pain</li>"+
        "<li class='isiLI'>burning when you urinate or urinating more often than normal</li>"+
    "</ul>"+
"</ul>"+	
"<p><b>After starting BIMZELX, call your healthcare provider right away if you have any of the signs of infection listed above.</b> Do not use BIMZELX if you have any signs of infection unless you are instructed to by your healthcare provider. See “<b>What are the possible side effects of BIMZELX?</b>” for more information about side effects."+

"<h2>What is BIMZELX?</h2>"+ 
"<p>BIMZELX is a prescription medicine used to treat adults with moderate to severe plaque psoriasis who may benefit from taking injections or pills (systemic therapy) or treatment using ultraviolet light alone or with pills (phototherapy)."+
"<ul class='isiUL'>"+
    "<li class='isiLI'>It is not known if BIMZELX is safe and effective in children.</li>"+
"</ul>"+    
"<h2>Before using BIMZELX, tell your healthcare provider about all of your medical conditions, including if you:</h2>"+
"<ul class='isiUL'>"+
    "<li class='isiLI'>have any of the conditions or symptoms listed in the section <b>“What is the most important information I should know about BIMZELX?”</b></li>"+
    "<li class='isiLI'>have a history of depression, or suicidal thoughts or behavior</li>"+
    "<li class='isiLI'>have liver problems</li>"+
    "<li class='isiLI'>have inflammatory bowel disease (Crohn’s disease or ulcerative colitis)</li>"+
    "<li class='isiLI'>have recently received or are scheduled to receive an immunization (vaccine). You should avoid receiving live vaccines during treatment with BIMZELX.</li>"+
    "<li class='isiLI'>are pregnant or plan to become pregnant. It is not known if BIMZELX can harm your unborn baby.</li>"+
        "<ul class='isiUL'>"+
            "<li class='isiLI'>If you become pregnant while taking BIMZELX, you are encouraged to enroll in the Pregnancy Registry, which is used to collect information about the health of you and your baby. Talk to your healthcare provider or call 1"+nonBreakingHyphen+"877"+nonBreakingHyphen+"311"+nonBreakingHyphen+"8972 to enroll in this registry or visit <a href='#' class='isiBodyLink'>http://"+zeroSpace+"mothertobaby"+zeroSpace+".org/"+zeroSpace+"pregnancy-"+zeroSpace+"studies/</a>.</li>"+
        "</ul>"+
    "<li class='isiLI'>are breastfeeding or plan to breastfeed. It is not known if BIMZELX passes into your breast milk. Talk to your healthcare provider about the best way to feed your baby during treatment with BIMZELX.</li>"+
"</ul>"+    
"<p><b>Tell your healthcare provider about all the medicines you take,</b> including prescription and over-the-counter medicines, vitamins, and herbal supplements."+
"<h2>What are the possible side effects of BIMZELX?</h2>"+
"<p><b>BIMZELX may cause serious side effects.</b> See “<b>What is important information I should know about BIMZELX?”</b>"+
"<ul class='isiUL'>"+
    "<li class='isiLI'><b>Elevated liver enzyme levels.</b> Your healthcare provider will do blood tests to check your liver enzyme levels before starting treatment and during treatment with BIMZELX. Your healthcare provider may temporarily stop or permanently stop your treatment with BIMZELX if you develop liver problems. Call your healthcare provider right away if you develop any signs or symptoms of liver problems, including:</li>"+
    "<ul class='isiUL'>"+
        "<li class='isiLI'>pain on the right side of your stomach-area</li>"+
        "<li class='isiLI'>feeling very tired</li>"+
        "<li class='isiLI'>loss of appetite</li>"+
        "<li class='isiLI'>nausea and vomiting</li>"+
        "<li class='isiLI'>itching</li>"+
        "<li class='isiLI'>dark urine</li>"+
        "<li class='isiLI'>light-colored stool</li>"+
        "<li class='isiLI'>yellowing of your skin or the whites of your eyes</li>"+
    "</ul>"+
    "<li class='isiLI LIafterUL'><b>Inflammatory bowel disease.</b> New cases of inflammatory bowel disease or “flare-ups” have happened with BIMZELX. If you have inflammatory bowel disease (Crohn’s disease or ulcerative colitis), tell your healthcare provider if you have worsening disease symptoms during treatment with BIMZELX or develop new or worsening signs of Crohn’s disease or ulcerative colitis.</li>"+
"</ul>"+
"<h2>The most common side effects of BIMZELX include:</h2>"+
"<ul class='isiUL'>"+
    "<li class='isiLI'>upper respiratory tract infections</li>"+
    "<li class='isiLI'>headache</li>"+
    "<li class='isiLI'>herpes simplex infections (cold sores in or around the mouth)</li>"+
    "<li class='isiLI'>small red bumps on your skin</li>"+
    "<li class='isiLI'>feeling tired</li>"+
    "<li class='isiLI'>fungal infections (oral thrush or infections in the mouth, throat, skin, nails, feet, or genitals)</li>"+
    "<li class='isiLI'>pain, redness, or swelling at the injection site</li>"+
    "<li class='isiLI'>stomach flu (gastroenteritis)</li>"+
    "<li class='isiLI'>acne</li>"+
"</ul>"+
"<p>These are not all of the possible side effects of BIMZELX. Call your doctor for medical advice about side effects."+

"<p>Use BIMZELX exactly as your doctor tells you to use it."+

"<p>You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <a href='#' class='isiBodyLink'>www.fda.gov/"+zeroSpace+"medwatch</a>, or call 1"+nonBreakingHyphen+"800"+nonBreakingHyphen+"FDA"+nonBreakingHyphen+"1088."+
"<div class='row'>"+
    "<div class='column l'>"+
    "<div class=isiLogo></div>"+
    "</div>"+
    "<div class='column r'>"+
    "<p class='regiatrationP'>BIMZELX"+registration+"  is a registered trademark of the UCB Group of Companies."+
    "<br>All other trademarks and registered trademarks are the property of their respective holders.<br>"+copyright+"2023 UCB, Inc., Smyrna, GA 30080. All rights reserved.</p>"+
    "<p class='projectNumberP'><span id='projectISINumber'></span>"+
"";

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