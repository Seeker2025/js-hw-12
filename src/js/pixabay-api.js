import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { 
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton
 } from './render-functions.js';
// import { loadMore } from '../main.js';

const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';
const BASE_URL ='https://pixabay.com/api/';
let total = null;

export const gallery = document.querySelector('.gallery');
// const indexWords = document.querySelector('.js_index_words')

export async function getImagesByQuery(query, page){
  try{
    await axios.get(BASE_URL, {
  
    params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
        }
 })
 .then(response => {

                                        console.log(response.data);
                                        console.log(response.data.totalHits);
                                        //  console.log((response.data.hits).length);
                                        total += (response.data.hits).length;
                                        console.log(total);
                                        showLoadMoreButton();
   if(response.data.totalHits <= total){
        console.log('Fail');
        
                                        iziToast.show({
                                                  title: `We're sorry,`,
                  message: `but you've reached the end of search results.`,
                                                  titleColor: '#fff',
                                                  messageColor: '#fff',
                                                  color: '#b22702', 
                                                  position: 'topRight',  
                                              });
        hideLoadMoreButton();                                    
   } 
     
   createGallery(response.data.hits)
   
 const lightbox = new SimpleLightbox('li.gallery_item a', {
    
            captionsData: 'alt',    
            captionDelay: 200,    
            animationSpeed: 250,    
            scaleImageToRatio: true,

   });

 })
      .finally(()=>{
          hideLoader();
          // loadMore.style.visibility = 'visible';
          // showLoadMoreButton();
        })
 }catch(err){
    console.log(err);
 }
}
