import{S as d}from"./assets/vendor-10cb7c31.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],h=document.querySelector(".gallery"),p=[];g.forEach(({preview:i,original:a,description:n})=>{const r=document.createElement("li");r.classList.add("gallery-item");const e=document.createElement("a");e.classList.add("gallery-link"),e.href=a;const t=document.createElement("img");t.classList.add("gallery-image"),t.src=i,t.alt=n,e.append(t),r.append(e),p.push(r)});h.append(...p);new d(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});const o={email:"",message:""},l=document.querySelector(".feedback-form");l.addEventListener("input",function(i){const{name:a,value:n}=i.target;(a==="email"||a==="message")&&(o[a]=n,u())});function u(){localStorage.setItem("feedback-form-state",JSON.stringify(o))}const c=JSON.parse(localStorage.getItem("feedback-form-state"));c&&(o.email=c.email,o.message=c.message,m());function m(){document.querySelector('[name="email"]').value=o.email,document.querySelector('[name="message"]').value=o.message}l.addEventListener("submit",i=>{i.preventDefault(),o.email.trim()===""||o.message.trim()===""?alert("Fill please all fields"):(console.log(o),f(),y())});function f(){o.email="",o.message="",m()}function y(){localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers3.js.map
