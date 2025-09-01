import{a as p,i as m,S as b}from"./assets/vendor-CvObF2vT.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const y=document.querySelector(".gallery"),h=document.querySelector(".box"),d=document.querySelector(".js_button_more");let c=1;function v(r){let i=null;i=r.map(e=>`
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
        `).join(""),y.insertAdjacentHTML("beforeend",i)}function L(){y.innerHTML=""}function w(){h.style.visibility="visible"}function _(){h.style.visibility="hidden"}function S(){return c+=1,c}function q(){d.style.visibility="visible"}function f(){d.style.visibility="hidden"}const O="51186890-e1c8ef6e5ef4b08950db17a2f",D="https://pixabay.com/api/";let n=null;document.querySelector(".gallery");async function u(r,i){try{await p.get(D,{params:{key:O,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}}).then(e=>{console.log(e.data),console.log(e.data.totalHits),n+=e.data.hits.length,console.log(n),q(),e.data.totalHits<=n&&(console.log("Fail"),m.show({title:"We're sorry,",message:"but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",color:"#b22702",position:"topRight"}),f()),v(e.data.hits);const a=new b("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).finally(()=>{_()})}catch(e){console.log(e)}}document.querySelector(".js_forHidden");const g=document.querySelector(".js_form"),s={};f();g.addEventListener("submit",E);function E(r){if(r.preventDefault(),L(),new FormData(r.currentTarget).forEach((a,t)=>{s[t]=a}),s.search===""){m.show({title:"Hey",message:"Enter any word!",titleColor:"#fff",messageColor:"#fff",color:"#b22702",position:"topRight"});return}w(),f(),u(s.search,c),g.reset(),d.addEventListener("click",e);function e(){let a=S();u(s.search,a)}}
//# sourceMappingURL=index.js.map
