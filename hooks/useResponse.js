import { notFound } from "../components/notFound"
import { addWantedProduct } from "./useWantedProducts"

export function addProduct(response){
    const $list_products = document.querySelector(".list-products")
    $list_products.innerHTML = ""

    console.log(response.length)

    if(response.length == 0){

        const { notfound_component } = notFound()

        $list_products.innerHTML = notfound_component 
    }
    else{
        for(let i = 0; i < response.length; i++){
            
            $list_products.innerHTML += `
                <div class="product-card" product="${response[i].id_producto}">
                    <input class="product-${response[i].id_producto}" type=hidden value="${response[i].stock}">
                    <img src="${response[i].url_producto}" class="product-${response[i].id_producto}" alt="${response[i].nombre}" width="300px" height="200px">
                    <h3 class="product-${response[i].id_producto}">${response[i].nombre}</h3>
                    <p>Precio: $. <span class="product-${response[i].id_producto}">${response[i].precio.replace(/,/g, '.')}</span></p>
                    <button type="button" class="add-product" product="${response[i].id_producto}"><i class='bx bx-plus add'></i>Enviar al carro</button>
                </div>
            `
        }
    }
    

    $('.add-product').click(function(){
        var atributo = $(this).attr('product')
        addWantedProduct(atributo);
    })
}