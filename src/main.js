// import {gallery, getImagesByQuery} from './js/pixabay-api.js';
// console.log(gallery);

// getImagesByQuery('cat', 2);

import axios from 'axios';
import {getImagesByQuery } from './js/pixabay-api.js'
import { clearGallery, showLoader, showLoadMoreButton, PAGE } from './js/render-functions.js';

const loadMore = document.querySelector('.js_button_more');
// console.log(loadMore);
const form = document.querySelector('.js_form');
const isObj = {};

loadMore.addEventListener('click', onClick);
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
function onClick(){
    // let PAGE = 1;
    showLoadMoreButton();
    console.log(isObj);
}

form.addEventListener('submit', inForm);

function inForm(event){
    event.preventDefault();
    
    clearGallery();
    
    const formData = new FormData(event.currentTarget);
    
        formData.forEach((value, name)=>{
        // console.log('value', value);
        // console.log('name', name);
        isObj[name] = value;
        
    })
    console.log(isObj.search);
    console.log(typeof(isObj.search));
     if(isObj.search === ''){
        // console.log('Hi!');
    
        iziToast.show({
            title: 'Hey',
            message: 'Enter any word!',
            titleColor: '#fff',
            messageColor: '#fff',
            color: '#b22702', // blue, red, green, yellow
            position: 'topRight', // bottomRight, bottomLeft, topLeft, topCenter, bottomCenter, center
        });
    return;

    }
                            showLoader();
                            getImagesByQuery(isObj.search, PAGE);
                            form.reset();
}

// let PAGE = null;
// function showLoadMoreButton(){
//    PAGE +=1;
//    return PAGE;
// }
// showLoadMoreButton()
// showLoadMoreButton()
// showLoadMoreButton()
// console.log(PAGE);
console.log(isObj);