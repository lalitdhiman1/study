import React from 'react';
let LOCAL = false;
let path=""
if(LOCAL){
	path = "http://localhost:4040/";
} else{
  path = "http://192.168.5.66:4040/";
}

export const PATHURL = {
  cdnPath: {
    url:path
  },
  imageCarousel: {
    url:path+"data/carousel.json"
  },
  featured: {
    url:path+"data/featuredProduct.json"
  },  
  newReleases: {
    url:path+"data/newReleases.json"
  },
  categoryItems: {
    url: path+"data/category.json"
  },
  prodImages: {
    url: path+"data/prodImages.json"
  },
  launching: {
  	url: path+"data/launching.json"
  },
  loginAuthentication:{
    url:"https://preprd.lincfast.com/lfapi/public/authenticate_user"
  }
};
