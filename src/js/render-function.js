const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.box');


    export function createGallery(images){
   
          let arr = null;
     arr = images.map(itm =>`
     <li class="gallery_item">
         <a href="${itm.largeImageURL}">
            <img class="img_itm" src="${itm.webformatURL}" alt="${itm.tags}" title="">
         </a>
         <div class="block">
            <div class="one_item">
               <h2>Likes</h2>
               <p>${itm.likes}</p>
            </div>

            <div class="one_item">
               <h2>View</h2>
               <p>${itm.views}</p>
            </div>

            <div class="one_item">
               <h2>Comments</h2>
               <p>${itm.comments}</p>
            </div>

            <div class="one_item">
               <h2>Downloads</h2>
               <p>${itm.downloads}</p>
            </div>
         </div>      
     </li>   
        `
     ).join('');
     gallery.insertAdjacentHTML('beforeend', arr);

}


function clearGallery(){

}

function showLoader(){
   loader.style.visibility = 'visible';
}

function hideLoader(){
   loader.style.visibility = 'hidden';
}

function showLoadMoreButton(){

}