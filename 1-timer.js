import{f as y,i as m}from"./assets/vendor-BbSUbo7J.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector("button[data-start]"),l=document.querySelector("#datetime-picker"),h=document.querySelector("span[data-days]"),g=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){f.defaultDate>=o[0]?(u.disabled=!0,m.error({title:"Error",message:"Please choose a date in the future"})):(u.disabled=!1,m.success({title:"OK",message:'You can press "Start"!'}))}};y("#datetime-picker",f);function v(o){const t=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),i=Math.floor(o%864e5%36e5/6e4),c=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:r,minutes:i,seconds:c}}const d=o=>o.toString().padStart(2,"0");u.addEventListener("click",D);function D(){u.disabled=!0,l.disabled=!0;const o=document.querySelector("#animatedDiv");o.classList.add("animated");const n=setInterval(()=>{const s=new Date,e=new Date(l.value)-s,{days:t,hours:r,minutes:i,seconds:c}=v(e);h.textContent=d(t),g.textContent=d(r),S.textContent=d(i),b.textContent=d(c),[t,r,i,c].every(p=>p===0)&&(clearInterval(n),l.disabled=!1,o.classList.remove("animated"))},1e3)}
//# sourceMappingURL=1-timer.js.map
