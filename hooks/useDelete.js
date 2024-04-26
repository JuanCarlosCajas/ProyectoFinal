import { postData } from "./useList"


export function deleteProduct(index){
    let listProducts = JSON.parse(localStorage.getItem('products'))
    let listAux = []
    for(let i = 0; i < listProducts.length ; i++){
        if(i == index){
            continue
        }
        else{
            listAux.push(listProducts[i])
        }
    }

    localStorage.setItem('products', JSON.stringify(listAux))

    postData()
}