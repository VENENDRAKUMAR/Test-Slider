const testimonials = [
  {
    name: "Mayuri-Director",
    photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", 
    text:"I have been using web application development for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
  },
  {
    name: "Ramdas-Director",
    photoUrl:"https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", 
    text:"I have been using web application development for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
  },
  {
    name: "Yogesh-Director",
    photoUrl:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww", 
    text:"web application development makes me more productive and gets the job done in a fraction of the time. I'm glad I found web application development."
  },
  {
    name: "Maya-Director",
    photoUrl:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D", 
    text:"Would definitely recommend web application development and will definitely be ordering again."
  }
];
const imgE11 = document.querySelector("img");
const textE11= document.querySelector(".text");
const usernameE11 = document.querySelector(".username");

let i=0;
updateTestmonial()

function updateTestmonial(){
const {name, photoUrl, text} = testimonials[i];
imgE11.src= photoUrl;
textE11.innerText=text;
usernameE11.innerText=name;
i++;
if(i===testimonials.length){
  i=0;
}
setTimeout(()=>{
 updateTestmonial()
}, 2000)
}