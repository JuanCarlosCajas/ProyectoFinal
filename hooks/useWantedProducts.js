import { postData } from "./useList"

export function addWantedProduct(position){

    const $product = document.getElementsByClassName(`product-${position}`)
    var listWantedProducts = []

    if(localStorage.getItem('products') != null){
        listWantedProducts = JSON.parse(localStorage.getItem('products'))
    }

    console.log($product[0].value)
    var id = position
    var stock = parseInt($product[0].value)
    var src = $product[1].getAttribute('src')
    var titulo = $product[2].innerHTML
    var precio = parseFloat($product[3].innerHTML)
    

    const product = {
        "id": parseInt(id),
        "stock": stock,
        "url": src,
        "title": titulo,
        "price": precio
    }

    if(listWantedProducts.length == 0){
        listWantedProducts[0] = product
    }
    else{
        listWantedProducts[listWantedProducts.length] = product
    }

    if(localStorage.getItem('products') == null){

        localStorage.setItem('products', JSON.stringify(listWantedProducts))

    }
    else{

        localStorage.removeItem('products')
        localStorage.setItem('products', JSON.stringify(listWantedProducts))

    }

    postData()

}