import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const n={input:document.querySelector("#datetime-picker"),btn:document.querySelector("[data-start]"),value:document.querySelectorAll(".value")};let u,a;n.btn.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]-e<=0?f.show({message:"Please choose a date in the future",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",messageSize:"320px",iconColor:"white"}):(u=t[0],n.btn.disabled=!1)}};h("#datetime-picker",p);n.btn.addEventListener("click",()=>{a=setInterval(()=>{const t=Date.now(),e=u-t;if(e>0){const s=b(e),r=y(s);n.btn.disabled=!0,n.input.disabled=!0;for(let o=0;o<r.length;o++)n.value[o].innerHTML=r[o]}else clearInterval(a),n.input.disabled=!1},1e3)});//!=============================================
function b(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:l}}function y(t){const e=[];return t.days=t.days.toString().padStart(2,0),t.hours=t.hours.toString().padStart(2,0),t.minutes=t.minutes.toString().padStart(2,0),t.seconds=t.seconds.toString().padStart(2,0),e.push(t.days),e.push(t.hours),e.push(t.minutes),e.push(t.seconds),e}//!=============================================
//# sourceMappingURL=commonHelpers.js.map