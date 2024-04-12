import get from "./api.js"

let box1=document.querySelector(".box1")
let secrig=document.querySelector(".secrig")

function getdata(data){
    box1.innerHTML=''
    data.forEach((el)=>{
    let card=document.createElement("div")
    card.classList.add("card")

    let img=document.createElement("img")
    img.src=el.img
    img.classList.add("img")

    let name=document.createElement("h1")
    name.innerHTML=el.name
    name.classList.add("name")


    let price=document.createElement("p")
    price.innerHTML=el.price
    price.classList.add("price")
    
     
    card.append(img,name,price)
    box1.append(card)
    // secrig.append(card)
    })
}

export {getdata}