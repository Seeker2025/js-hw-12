import{a as u,S as m}from"./assets/vendor-DmazAP2G.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=e(o);fetch(o.href,t)}})();const c=document.querySelector(".gallery"),d=document.querySelector(".box");let a=1;function p(i){let r=null;r=i.map(e=>`
     <li class="gallery_item">
         <a href="${e.largeImageURL}">
            <img class="img_itm" src="${e.webformatURL}" alt="${e.tags}" title="">
         </a>
         <div class="block">
            <div class="one_item">
               <h2>Likes</h2>
               <p>${e.likes}</p>
            </div>

            <div class="one_item">
               <h2>View</h2>
               <p>${e.views}</p>
            </div>

            <div class="one_item">
               <h2>Comments</h2>
               <p>${e.comments}</p>
            </div>

            <div class="one_item">
               <h2>Downloads</h2>
               <p>${e.downloads}</p>
            </div>
         </div>      
     </li>   
        `).join(""),c.insertAdjacentHTML("beforeend",r)}function y(){c.innerHTML=""}function g(){d.style.visibility="visible"}function h(){d.style.visibility="hidden"}function b(){return a+=1,console.log(a),a}const v="51186890-e1c8ef6e5ef4b08950db17a2f";document.querySelector(".gallery");const L="https://pixabay.com/api/";async function w(i,r){try{await u.get(L,{params:{key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(e=>{console.log(e),p(e.data.hits);const s=new m("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).finally(()=>{h()})}catch(e){console.log(e)}}const _=document.querySelector(".js_button_more"),f=document.querySelector(".js_form"),n={};_.addEventListener("click",S);function S(){b(),console.log(n)}f.addEventListener("submit",q);function q(i){if(i.preventDefault(),y(),new FormData(i.currentTarget).forEach((e,s)=>{n[s]=e}),console.log(n.search),console.log(typeof n.search),n.search===""){iziToast.show({title:"Hey",message:"Enter any word!",titleColor:"#fff",messageColor:"#fff",color:"#b22702",position:"topRight"});return}g(),w(n.search,a),f.reset()}console.log(n);
//# sourceMappingURL=index.js.map
