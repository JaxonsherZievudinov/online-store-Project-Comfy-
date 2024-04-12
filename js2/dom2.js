import get from "./api2.js"

let box1=document.querySelector(".box1")
let secrig=document.querySelector(".secrig")
let range=document.querySelector(".range")
let h44=document.querySelector(".h44")
let PRODUCTS=document.querySelector(".PRODUCTS")
let sec3=document.querySelector(".sec3")
let clas=document.querySelector(".class")
let sec2=document.querySelector(".sec2")





// PRODUCTS.onclick=()=>{
//     PRODUCTS.style.color='white'
// }

range.onclick=()=>{
    h44.innerHTML=`Value :  $${range.value}`
}

function getdata(data){
    secrig.innerHTML=''
    data.forEach((el)=>{
    let card=document.createElement("div")
    card.classList.add("card")
    card.onclick=()=>{
        // localStorage.setItem("data",JSON.stringify(el))
         clas.innerHTML='Albany Table.  '
         sec2.style.display='none'
              
         let card1=document.createElement("div")
         card1.classList.add("card1")

         let div2=document.createElement("div")
         let div3=document.createElement("div")

         let img1=document.createElement("img")
         img1.src=el.img
         img1.classList.add("img10")
     
         let name1=document.createElement("h1")
         name1.innerHTML=el.name
         name1.classList.add("name1")

         let name3=document.createElement("h1")
         name3.innerHTML=el.company
         name3.classList.add("name3")
     
     
         let price1=document.createElement("p")
         price1.innerHTML=el.price
         price1.classList.add("price1")
         

         div3.append(name1,name3,price1)
         div2.append(img1)
         card1.append(div2,div3)
         sec3.append(card1)

    }

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
    // box1.append(card)
    secrig.append(card)
    })
}

export {getdata}