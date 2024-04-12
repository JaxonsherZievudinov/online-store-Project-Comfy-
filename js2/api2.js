
import {getdata} from "./dom2.js"


let API='http://localhost:3000/data'

async function get() {
    try {
        let respone=await fetch(API)
        console.log(11)
        let data=await respone.json()
        getdata(data)
    } catch (error) {
        console.error(error);
    }
}

export default get