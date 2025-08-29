import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createGallery, hideLoader,  } from './render-functions.js';

const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';
export const gallery = document.querySelector('.gallery');
const BASE_URL ='https://pixabay.com/api/';


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
   console.log(response);
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
        })
 }catch(err){
    console.log(err);
 }
}
