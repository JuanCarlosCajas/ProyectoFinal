import { addProduct } from "../hooks/useResponse"

window.addEventListener('DOMContentLoaded', () => {
    
    const $searchProducts = document.getElementById('search')
    const $categoryProducts = document.querySelector('.category-products')

    $searchProducts.addEventListener('input', () => {
        search_product()
    })

    $categoryProducts.addEventListener('change', () => {
        search_product()
    })

    function search_product(){
        let nom = $searchProducts.value
        let category = parseInt($categoryProducts.value)
        let nomcap = capitalize(nom)
        let dato = { nombre : nomcap, category: category }

        $.ajax({
            type: "POST",
            url: "http://localhost/Proyectos/oracledb/search.php",
            data: dato,
            success: function (response) {
                addProduct(response)
            }
        });
    }
    function capitalize(s){
        return s && s[0].toUpperCase() + s.slice(1)
    }

})
