(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const m=document.getElementById("open"),f=document.getElementById("close"),s=document.querySelector(".header__nav--menu"),y=document.querySelectorAll(".header__nav--menu_articulo"),v=()=>{s.style.transition="transform 0.3s ease-in-out",m.style.display="none",f.style.display="block",s.style.transform="scale(1, 1)",s.style.transformOrigin="right"},l=()=>{m.style.display="block",f.style.display="none",s.style.transform="scale(0, 1)",s.style.transformOrigin="right"},E=()=>{window.innerWidth<=900?(l(),y.forEach(e=>{e.addEventListener("click",l,!0)})):(v(),y.forEach(e=>{e.removeEventListener("click",l,!0)}))};E();m.addEventListener("click",()=>{v()});f.addEventListener("click",()=>{l()});window.onresize=()=>{window.outerWidth<=912?s.style.transform="scale(0, 1)":s.style.transform="scale(1, 1)",E()};const L=document.getElementById("facelink"),h=document.getElementById("faceicon"),I=document.getElementById("iglink"),b=document.getElementById("igicon"),i=(e,c,o,r,t)=>{e.addEventListener(c,()=>{o.style.color=r,t==!0&&(o.style.transition="color 350ms ease")})};i(L,"mouseover",h,"#3b5998",!0);i(L,"mouseout",h,"#efefef99",!1);i(I,"mouseover",b,"#e23ecc",!0);i(I,"mouseout",b,"#efefef99",!1);const B=document.getElementById("contactform"),d=document.querySelectorAll("#contactform .contact__input, textarea"),p={nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,textarea:/^[\s\S]{0,220}$/},a={nameInput:!1,messageInput:!1},g=(e,c,o,r)=>{c.test(e.value)?(document.getElementById(o).classList.remove("contact__input--incorrect"),document.getElementById(o).classList.add("contact__input--correct"),document.querySelector(`${r} p`).classList.remove("contact__error"),document.querySelector(`${r} p`).classList.add("contact__correct"),a[o]=!0):(document.getElementById(o).classList.remove("contact__input--correct"),document.getElementById(o).classList.add("contact__input--incorrect"),document.querySelector(`${r} p`).classList.remove("contact__correct"),document.querySelector(`${r} p`).classList.add("contact__error"),a[o]=!1)},_=e=>{switch(e.target.name){case"namee":g(e.target,p.nombre,"nameInput",".contname");break;case"message":g(e.target,p.textarea,"messageInput",".contmen");break}};d.forEach(e=>{e.addEventListener("keyup",_),e.addEventListener("blur",_)});console.log(a);console.log(B);B.addEventListener("submit",e=>{if(e.preventDefault(),a.nameInput&&a.messageInput){document.querySelector(".contact__senderror").style.transform="scale(0)",document.querySelector(".contact__sendcorrect").style.transform="scale(1)",setTimeout(()=>{document.querySelector(".contact__sendcorrect").style.transform="scale(0)"},5e3),console.log(a);const c=document.getElementById("redirect-to-whatsapp");c.href=`https://wa.me/3571552833?text=Hola, mi nombre es ${d[0].value}. ${d[1].value}`,c.click()}else document.querySelector(".contact__sendcorrect").style.transform="scale(0)",document.querySelector(".contact__senderror").style.transform="scale(1)"});