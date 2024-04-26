import { buttonFooter } from "../components/buttonFooter"
import { notFound } from "../components/notFound"
import { listShop_component } from "../components/wantedProduct"
import { initProducts } from "./initProducts"
import { deleteProduct } from "./useDelete"

export function postData(){
    

    const $list_wanted = document.querySelector('.list-wanted-products')

    const { btnFooter } = buttonFooter()

    $list_wanted.innerHTML = ""

    var listProducts = JSON.parse(localStorage.getItem('products'))
    var index = 0

    if(listProducts.length === 0){
        const { notfound_component } = notFound()

        $list_wanted.innerHTML = ""
        $list_wanted.innerHTML = notfound_component
    }
    else{

        $list_wanted.innerHTML = ""

        listProducts.map((products) => {

            const { product } = listShop_component(products, index)
            $list_wanted.innerHTML += product
            index++
    
        })
    
        $list_wanted.innerHTML += btnFooter
    
        $(document).ready(function () {
    
            $('.btn-plus').click(function(){
                console.log("Usando boton plus")
                let atributo = $(this).attr('product');
                let numeroActual = parseInt($(`.amount${atributo}`).val())

                if(numeroActual > parseInt($(this).attr('stock-value'))) return

                $(`.amount${atributo}`).val(numeroActual + 1)
    
                console.log(numeroActual)
                $(`.precio${atributo}`).html((parseFloat($(`.precio${atributo}`).attr(`data-value${atributo}`)) * parseInt($(`.amount${atributo}`).val())).toFixed(2))
                console.log(parseFloat($(`.precio${atributo}`).attr(`data-value${atributo}`)) )
            })
        
            $('.btn-minus').click(function(){
        
                let atributo = $(this).attr('product')
                let numeroActual = parseInt($(`.amount${atributo}`).val())
    
                if(numeroActual == 1) return
                else{
                    $(`.amount${atributo}`).val(numeroActual - 1)
                }
    
                $(`.precio${atributo}`).html((parseFloat($(`.precio${atributo}`).attr(`data-value${atributo}`)) * parseInt($(`.amount${atributo}`).val())).toFixed(2))
            })
    
            $('.to-delete').click(function(){
                let atributo = $(this).attr('product')
                console.log(atributo)
                deleteProduct(atributo)
            })
    
            $('.footer-button').click(function(){

                initProducts()

                window.location = "/pagarProductos"
            })
        });
    }

}