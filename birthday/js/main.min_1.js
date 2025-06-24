document.addEventListener("DOMContentLoaded",function(){
if(window.localStorage&&window.sessionStorage){
var e=n.includes(r);
if(s&&e&&"false"!==t){o.forEach(e=>{
let this_host=document.getElementById("this_host");this_host&&(this_host.innerHTML=window.location.host),document.addEventListener("DOMContentLoaded",
function(){let t=document.querySelector(".menu-link");!
function(){const o=document.querySelector(".menu-button");o&&document.addEventListener("click",
function(e){document.getElementById("button-check").checked&&(e=e.target,t&&(e===t||t.contains(e))||e===o||o.contains(e)||closeMenu())})}(),t&&t.addEventListener("click",()=>showMenu());									
if(3===n.length){n[0].addEventListener("click",e=>{for(let e=0;e<n.length;e++)n[e].classList.toggle("open")});
for(let e=1;e<n.length;e++)n[e].addEventListener("click",e=>{for(let e=0;e<n.length;e++)n[e].classList.toggle("open")});
function l(e){return window.open(e,"_blank","height=800,width=600,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes")}n[1].onclick=function(){l(e)},n[2].onclick=function(){l(a)}}});
let buttonCheck=document.getElementById("button-check");
function closeMenu(){buttonCheck&&(buttonCheck.checked=0)}
function showMenu(){buttonCheck&&(buttonCheck.checked=!0)}
function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}									
let tr_1x1=["tr_slot1x1"],tr_468=["tr_slot468"],tr_suffix="";