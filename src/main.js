// import {gallery, getImagesByQuery} from './js/pixabay-api.js';
// console.log(gallery);

// getImagesByQuery('cat', 2);

import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery } from './js/pixabay-api.js'
import { 
    clearGallery,
    showLoader, 
    addTheOne,
    PAGE,
    hideLoadMoreButton,
    loadMore,
      } from './js/render-functions.js';

export const forHidden = document.querySelector('.js_forHidden');
// console.log(forHidden);
const form = document.querySelector('.js_form');

const isObj = {};
hideLoadMoreButton();

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
                            // console.log(isObj.search);
                            // console.log(typeof(isObj.search));
    if(isObj.search === ''){
                                                        iziToast.show({
                                                            title: 'Hey',
                                                            message: 'Enter any word!',
                                                            titleColor: '#fff',
                                                            messageColor: '#fff',
                                                            color: '#b22702', 
                                                            position: 'topRight',  
                                                        });
                return;
            }
                            showLoader();
                            hideLoadMoreButton();
                            getImagesByQuery(isObj.search, PAGE);
                            form.reset();

                    loadMore.addEventListener('click', onClick);

                            function onClick(){
                                let num = addTheOne();
                                // console.log(isObj);
                                // console.log(num);
                                getImagesByQuery(isObj.search, num);
                            }
                            // forHidden.style.visibility = 'hidden';
                            // hideLoadMoreButton();

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
// console.log(isObj);