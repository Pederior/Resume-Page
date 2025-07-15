let num11 = 8
let num22 = 6
let num33 = 1
let num44 = 999
let num1 = document.getElementById("number1").textContent
let num2 = document.getElementById("number2").textContent
let num3 = document.getElementById("number3").textContent
let num4 = document.getElementById("number4").textContent


var value1 = parseInt(num1,10)
var value2 = parseInt(num2,10)
var value3 = parseInt(num3,10)
var value4 = parseInt(num4,10)

function changeNum(currentValue, targetValue, elementId){
    let interval = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++; 
            document.getElementById(elementId).textContent = currentValue;
        } else { 
            clearInterval(interval); 
        }}, 20);
}
changeNum(value1, num11, "number1"); 
changeNum(value2, num22, "number2"); 
changeNum(value3, num33, "number3"); 
changeNum(value4, num44, "number4");

let aboutMe = document.getElementById("about-me")
let resume = document.getElementById("resume")
let contactMe = document.getElementById("contact-me")
let myBlog = document.getElementById("my-blog")

let displayAboutMe = document.getElementById("aboutme")
let displayResume = document.getElementById("res")
let displayContactMe = document.getElementById("contact")
let displayMyBlog = document.getElementById("blog")

aboutMe.addEventListener("click",()=>{
    displayAboutMe.style.display = "block"
    displayResume.style.display = "none"
    displayContactMe.style.display = "none"
    displayMyBlog.style.display = "none"
})
resume.addEventListener("click",()=>{
    displayAboutMe.style.display = "none"
    displayResume.style.display = "block"
    displayContactMe.style.display = "none"
    displayMyBlog.style.display = "none"
})
contactMe.addEventListener("click",()=>{
    displayAboutMe.style.display = "none"
    displayResume.style.display = "none"
    displayContactMe.style.display = "block"
    displayMyBlog.style.display = "none"
})
myBlog.addEventListener("click",()=>{
    displayAboutMe.style.display = "none"
    displayResume.style.display = "none"
    displayContactMe.style.display = "none"
    displayMyBlog.style.display = "block"
})

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});