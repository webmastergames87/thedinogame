const HIDDEN_CLASS="hidden";
let isSubFrame=!1;
function updateIconClass(e){
	var n=isSubFrame?"#sub-frame-error":"#main-frame-error",n=document.querySelector(n+" .icon");n.classList.contains(e)||(n.className="icon "+e)}
function onDocumentLoad(){
	var e=loadTimeData.valueExists("iconClass")&&loadTimeData.getValue("iconClass");updateIconClass(e),isSubFrame||"icon-offline"!==e||
	(document.documentElement.classList.add("offline"),new Runner(".interstitial-wrapper"))}window.top.location===window.location&&!window.portalHost||
	(document.documentElement.setAttribute("subframe",""),isSubFrame=!0),document.addEventListener("DOMContentLoaded",onDocumentLoad);