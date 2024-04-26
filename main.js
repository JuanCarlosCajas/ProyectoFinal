
import { useSwitch } from './hooks/useShopping'
import { useVerificacion } from './hooks/useVerification';
import { postData } from './hooks/useList';

const $boton_compras = document.querySelector('.shop-container')
const $background_wanted_products = document.querySelector('.background-wanted-products')
const $list_wanted_products = document.querySelector('.list-wanted-products')
const $categoryProducts = document.querySelector(".category-products")

window.addEventListener('DOMContentLoaded', () => {
    postData()

})

$background_wanted_products.addEventListener('click', () => {

    useSwitch($background_wanted_products)
    useSwitch($list_wanted_products)
    useSwitch($boton_compras)

})

$boton_compras.addEventListener('click', () => {

    useSwitch($background_wanted_products)
    useSwitch($list_wanted_products)
    useSwitch($boton_compras)
    useVerificacion()
    
})

$categoryProducts.addEventListener('change', function() {
    console.log($categoryProducts.value)
})
