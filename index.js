let img = document.querySelector(".rect img");
img.addEventListener("mouseover",()=>{
   img.setAttribute("src", "images/mp.jpeg");
    
})
let img2 = document.querySelector(".rect img");
img2.addEventListener("mouseout",()=>{
   img2.setAttribute("src", "images/my photo.jpg");
    
})
let button=document.querySelector(".contact-btn");
button.addEventListener("click",()=>{
      let sound = new Audio("audio/a.mp3")
      let nameq =document.querySelector(".form-control").value;
    sound.play();
    alert(`thanks for contacting us,this form is not working in my portfolio ,but it will work in your website if you place order 😊thank you ,${nameq}`)
  
})

const about = document.querySelector(".about-js");
about.addEventListener("click",()=>{
   alert("coming soon 🏃‍♂️");
})

const scrollUp = document.getElementById("scrollUp");

scrollDown.addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

scrollUp.addEventListener("click", () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });
});

