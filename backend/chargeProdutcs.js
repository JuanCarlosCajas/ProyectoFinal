import { addProduct } from "../hooks/useResponse";
import { notFound } from "../components/notFound";

window.addEventListener('DOMContentLoaded', () => {

    const { notfound_component } = notFound()
    const $list_products = document.querySelector(".list-products")
    console.log($('.category-products').val())
    $.ajax({
        type: "POST",
        url: "http://localhost/Proyectos/oracledb/chargeProducts.php",
        success: function (response) {
            addProduct(response)
        },
        error: function(){
            $list_products.innerHTML = notfound_component
        }
    });
})

