let img = document.querySelector(".rect img");
img.addEventListener("mouseover",()=>{
   img.setAttribute("src", "public/images/mp.jpeg");
    
})
let img2 = document.querySelector(".rect img");
img2.addEventListener("mouseout",()=>{
   img2.setAttribute("src", "public/images/my photo.jpg");
    
})
let button=document.querySelector(".contact-btn");
button.addEventListener("click",()=>{
      let sound = new Audio("audio/a.mp3")
      let nameq =document.querySelector(".form-control").value;
    sound.play();
    alert(`thanks for contacting us ,${nameq}`)
  
})

const about = document.querySelector(".about-js");
about.addEventListener("click",()=>{
   alert("coming soon 🏃‍♂️");
})
