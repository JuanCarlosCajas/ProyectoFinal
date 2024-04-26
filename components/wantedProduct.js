export function listShop_component(products, index){    

    var product = `
    <section class="wanted-product">

        <img src="${ products.url }" product="${ index }" alt="" width="80" height="50">
        <span class="title-wanted-product">${ products.title }</span>
        <p class="price-wanted-product">Precio: S/ <span data-value${index}='${parseFloat(products.price)}' class="precio${ index }">${ products.price }</span></p>

        <div class="counter-product">
        <button type="button" class="btn-plus" stock-value="${products.stock}" product="${ index }" title="Añadir"><i class='bx bx-plus'></i></button>
        <input type="number" min="1" class="amount${ index }" value="1" readonly placeholder="1">
        <button type="button" class="btn-minus" product="${ index }" title="Quitar"><i class='bx bx-minus'></i></button>
        </div>

        <button type="button" product="${ index }" class="to-delete" title="Eliminar"><i class='bx bx-trash trash'></i></button>

    </section>
    `

    return { product }
    
}