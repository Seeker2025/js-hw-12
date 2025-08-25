import axios from 'axios';

const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';
export const gallery = document.querySelector('.gallery');


const BASE_URL ='https://pixabay.com/api/';


export function getImagesByQuery(query, page){
  axios.get(BASE_URL, {
  
    params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        // page: myPage,
        // per_page: 40,
        }
 }).then(response =>{
    
    console.log(response.data.hits);
});

}