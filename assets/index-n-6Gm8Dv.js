(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function y(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(n){if(n.ep)return;n.ep=!0;const c=y(n);fetch(n.href,c)}})();let e=0,o=0,r="",u=!1;const v=document.getElementById("display"),q=document.querySelector("#minus"),k=document.querySelector("#plus"),L=document.querySelector("#divide"),B=document.querySelector("#multiply"),E=document.querySelector("#equals"),b=document.querySelector("#clear"),S=document.querySelector("#plus-minus"),h=document.querySelector("#percent"),O=document.querySelector("#decimal"),w=document.querySelector("#one"),M=document.querySelector("#two"),N=document.querySelector("#three"),I=document.querySelector("#four"),P=document.querySelector("#five"),T=document.querySelector("#six"),F=document.querySelector("#seven"),x=document.querySelector("#eight"),C=document.querySelector("#nine"),z=document.querySelector("#zero"),i=()=>{v.innerHTML=o.toString()},l=t=>{u?(console.log("in middle of operation"),o=t,u=!1):(console.log("not in middle of operation"),o=o*10+t),r!==""&&(m(),r=""),i(),console.log(o)};i();r!==""&&(console.log("operator was clicked"),console.log(e),r="");console.log(o);const d=t=>{u?(r=t,console.log("in middle of operation and operator clicked")):(r!==""&&(m(),console.log("operator was clicked and performOperation was called")),r=t,e=o,u=!0),i()},A=(t,s)=>t=t+s;console.log(e);const D=(t,s)=>t=t-s;console.log(e);console.log(e);const H=(t,s)=>t=t/s;console.log(e);const g=t=>e=t*-1,f=t=>e=t/100,K=t=>e=t,m=()=>{switch(console.log("performing"),r){case"plus":e=A(e,o),console.log("plus case"),console.log(e);break;case"minus":e=D(e,o),console.log("minus case"),console.log(e);break;case"multiply":e=e*o,console.log("multiply case"),console.log(e);break;case"divide":e=H(e,o),console.log("divide case"),console.log(e);break;case"plusMinus":e=g(o),console.log("plusMinus case"),console.log(e);break;case"percent":e=f(o),console.log("percent case"),console.log(e);break;case"equals":console.log("equals case"),console.log(e),e=K(o)}o=e,i(),console.log(e),setTimeout(()=>console.log(e),0)};E.addEventListener("click",()=>{console.log("equals button clicked"),u&&(m(),console.log(e),u=!1,o=0,i())});k.addEventListener("click",()=>d("plus"));q.addEventListener("click",()=>d("minus"));B.addEventListener("click",()=>d("multiply"));L.addEventListener("click",()=>d("divide"));w.addEventListener("click",()=>l(1));M.addEventListener("click",()=>l(2));N.addEventListener("click",()=>l(3));I.addEventListener("click",()=>l(4));P.addEventListener("click",()=>l(5));T.addEventListener("click",()=>l(6));F.addEventListener("click",()=>l(7));x.addEventListener("click",()=>l(8));C.addEventListener("click",()=>l(9));z.addEventListener("click",()=>l(0));b.addEventListener("click",()=>{e=0,o=0,r="",i(),console.log(e)});S.addEventListener("click",()=>{o=g(o),i()});O.addEventListener("click",()=>{o=o/10,i()});h.addEventListener("click",()=>{o=f(o),i()});