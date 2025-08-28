import{a as l,S as c}from"./assets/vendor-DmazAP2G.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=document.querySelector(".gallery");document.querySelector(".box");function d(i){let r=null;r=i.map(t=>`
     <li class="gallery_item">
         <a href="${t.largeImageURL}">
            <img class="img_itm" src="${t.webformatURL}" alt="${t.tags}" title="">
         </a>
         <div class="block">
            <div class="one_item">
               <h2>Likes</h2>
               <p>${t.likes}</p>
            </div>

            <div class="one_item">
               <h2>View</h2>
               <p>${t.views}</p>
            </div>

            <div class="one_item">
               <h2>Comments</h2>
               <p>${t.comments}</p>
            </div>

            <div class="one_item">
               <h2>Downloads</h2>
               <p>${t.downloads}</p>
            </div>
         </div>      
     </li>   
        `).join(""),n.insertAdjacentHTML("beforeend",r)}const u="51186890-e1c8ef6e5ef4b08950db17a2f",p=document.querySelector(".gallery"),f="https://pixabay.com/api/";async function m(i,r){try{await l.get(f,{params:{key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r}}).then(t=>{console.log(t),d(t.data.hits);const a=new c("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})})}catch(t){console.log(t)}}console.log(p);m("cat",2);
//# sourceMappingURL=index.js.map
