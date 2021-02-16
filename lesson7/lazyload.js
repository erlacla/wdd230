//first find all the data-source images with query selector
let imagesToLoad = document.querySelectorAll("img[data-src]");

//when the img is 50px from the window bottom, run function
const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 50px 0px"
};
//change from placeholder (source) to actual image (data source) 
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
//only remove switch from src to data-src when the img is intersecting in window
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    
    //run function on each image
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }


