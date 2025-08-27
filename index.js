import{a as l,S as n}from"./assets/vendor-DmazAP2G.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const c=document.querySelector(".gallery");function d(i){let r=null;r=i.map(t=>`
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
        `).join(""),c.insertAdjacentHTML("beforeend",r)}const p="51186890-e1c8ef6e5ef4b08950db17a2f",u=document.querySelector(".gallery"),f="https://pixabay.com/api/";function m(i,r){l.get(f,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{console.log(t.data.hits),d(t.data.hits),new n("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})})}console.log(u);m("cat");
//# sourceMappingURL=index.js.map
