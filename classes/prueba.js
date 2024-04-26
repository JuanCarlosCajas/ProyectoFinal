export class Productos{

    constructor(id, stock, url, nombre, cantidad, precio){
        this._id = id
        this._stock = stock
        this._url = url
        this._nombre = nombre
        this._cantidad = cantidad
        this._precio = precio
    }

    get id(){
        return this._id
    }

    set id(nuevaId){
        this._id = nuevaId
    }

    get url(){
        return this._url
    }

    set url(nuevoURL){
        this._url = nuevoURL
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    get cantidad(){
        return this._cantidad
    }

    set cantidad(nuevaCantidad){
        this._cantidad = nuevaCantidad
    }

    get precio(){
        return this._precio
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio
    }
}
var listPurchaseProducts = []

export function chargePurchaseProducts(id, stock, url, nombre, precio, cantidad){
    listPurchaseProducts.push(new Productos(id, stock, url, nombre, precio, cantidad))
} 

export function returnListPurcharseProducts(){
    return { listPurchaseProducts }
}

export function deleteListProducts(){
    listPurchaseProducts = []
}

export default Productos