(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function l(t){t.classList.contains("active")?t.classList.replace("active","desactive"):t.classList.replace("desactive","active")}function S(){return{btnFooter:`
        <div class="footer-container">
            <button type="button" class="footer-button">Pagar!</button>
        </div>
    `}}function g(){var t=`
        <div class="notfound-container">
            <h3 style='text-align : center; margin-top: 30px'>Aquí parece que no hay.... nada?</h3>
            <img src='img/noFound.svg' alt='' width='300px' height='300px'>
        <div>
    `;return{notfound_component:t}}function w(t,n){var o=`
    <section class="wanted-product">

        <img src="${t.url}" product="${n}" alt="" width="80" height="50">
        <span class="title-wanted-product">${t.title}</span>
        <p class="price-wanted-product">Precio: S/ <span data-value${n}='${parseFloat(t.price)}' class="precio${n}">${t.price}</span></p>

        <div class="counter-product">
        <button type="button" class="btn-plus" stock-value="${t.stock}" product="${n}" title="Añadir"><i class='bx bx-plus'></i></button>
        <input type="number" min="1" class="amount${n}" value="1" readonly placeholder="1">
        <button type="button" class="btn-minus" product="${n}" title="Quitar"><i class='bx bx-minus'></i></button>
        </div>

        <button type="button" product="${n}" class="to-delete" title="Eliminar"><i class='bx bx-trash trash'></i></button>

    </section>
    `;return{product:o}}function I(){JSON.parse(localStorage.getItem("products"))}function P(t){let n=JSON.parse(localStorage.getItem("products")),o=[];for(let c=0;c<n.length;c++)c!=t&&o.push(n[c]);localStorage.setItem("products",JSON.stringify(o)),m()}function m(){const t=document.querySelector(".list-wanted-products"),{btnFooter:n}=S();t.innerHTML="";var o=JSON.parse(localStorage.getItem("products")),c=0;if(o.length===0){const{notfound_component:e}=g();t.innerHTML="",t.innerHTML=e}else t.innerHTML="",o.map(e=>{const{product:r}=w(e,c);t.innerHTML+=r,c++}),t.innerHTML+=n,$(document).ready(function(){$(".btn-plus").click(function(){console.log("Usando boton plus");let e=$(this).attr("product"),r=parseInt($(`.amount${e}`).val());r>parseInt($(this).attr("stock-value"))||($(`.amount${e}`).val(r+1),console.log(r),$(`.precio${e}`).html((parseFloat($(`.precio${e}`).attr(`data-value${e}`))*parseInt($(`.amount${e}`).val())).toFixed(2)),console.log(parseFloat($(`.precio${e}`).attr(`data-value${e}`))))}),$(".btn-minus").click(function(){let e=$(this).attr("product"),r=parseInt($(`.amount${e}`).val());r!=1&&($(`.amount${e}`).val(r-1),$(`.precio${e}`).html((parseFloat($(`.precio${e}`).attr(`data-value${e}`))*parseInt($(`.amount${e}`).val())).toFixed(2)))}),$(".to-delete").click(function(){let e=$(this).attr("product");console.log(e),P(e)}),$(".footer-button").click(function(){I(),window.location="/pagarProductos"})})}function y(){return{logo:`
        <a class="store-logo">
            <i class='bx bxs-store-alt logo'></i>
            <h1>ShopCSS</h1>
        <a/>
    `}}function E(){return{user:` 
            <div class="user-container">
                <span style="font-weight: bold">Convierte en cliente</span><button type="button" class="login-btn">Ingresar!</button
            </div>
        `}}window.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header-logo"),{logo:n}=y(),o=document.getElementById("loginForm"),c=document.querySelector(".footer-login"),e=document.getElementById("loginBtn"),r=document.querySelector(".Registro"),a=document.getElementById("registerForm"),s=document.querySelector(".footer-register"),i=document.getElementById("registerBtn"),b=document.querySelector(".Login");t.innerHTML=n,r.addEventListener("click",function(){o.style.display="none",c.style.display="none",a.style.display="block",s.style.display="flex"}),b.addEventListener("click",function(){o.style.display="block",c.style.display="flex",a.style.display="none",s.style.display="none"}),e.addEventListener("click",function(L){L.preventDefault(),window.location.pathname="/ProyectoFinal/"}),i.addEventListener("submit",function(){console.log("Registro")})});var M;const d=document.querySelector(".shop-container"),p=document.querySelector(".background-wanted-products"),v=document.querySelector(".list-wanted-products"),f=document.querySelector(".category-products"),u=document.querySelector(".header-container");console.log(M);window.addEventListener("DOMContentLoaded",()=>{const{logo:t}=y(),{user:n}=E();u.innerHTML="",u.innerHTML+=t,u.innerHTML+=n,document.querySelector(".login-btn").addEventListener("click",function(){window.location.pathname="/ProyectoFinal/login"}),m()});p.addEventListener("click",()=>{l(p),l(v),l(d)});d.addEventListener("click",()=>{l(p),l(v),l(d)});f.addEventListener("change",function(){console.log(f.value)});function _(t){const n=document.getElementsByClassName(`product-${t}`);var o=[];localStorage.getItem("products")!=null&&(o=JSON.parse(localStorage.getItem("products"))),console.log(n[0].value);var c=t,e=parseInt(n[0].value),r=n[1].getAttribute("src"),a=n[2].innerHTML,s=parseFloat(n[3].innerHTML);const i={id:parseInt(c),stock:e,url:r,title:a,price:s};o.length==0?o[0]=i:o[o.length]=i,localStorage.getItem("products")==null||localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify(o)),m()}function h(t){const n=document.querySelector(".list-products");if(n.innerHTML="",console.log(t.length),t.length==0){const{notfound_component:o}=g();n.innerHTML=o}else for(let o=0;o<t.length;o++)n.innerHTML+=`
                <div class="product-card" product="${t[o].id_producto}">
                    <input class="product-${t[o].id_producto}" type=hidden value="${t[o].stock}">
                    <img src="${t[o].url_producto}" class="product-${t[o].id_producto}" alt="${t[o].nombre}" width="300px" height="200px">
                    <h3 class="product-${t[o].id_producto}">${t[o].nombre}</h3>
                    <p>Precio: $. <span class="product-${t[o].id_producto}">${t[o].precio.replace(/,/g,".")}</span></p>
                    <button type="button" class="add-product" product="${t[o].id_producto}"><i class='bx bx-plus add'></i>Enviar al carro</button>
                </div>
            `;$(".add-product").click(function(){var o=$(this).attr("product");_(o)})}window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("search"),n=document.querySelector(".category-products");t.addEventListener("input",()=>{o()}),n.addEventListener("change",()=>{o()});function o(){let e=t.value,r=parseInt(n.value),s={nombre:c(e),category:r};$.ajax({type:"POST",url:"http://localhost/Proyectos/oracledb/search.php",data:s,success:function(i){h(i)}})}function c(e){return e&&e[0].toUpperCase()+e.slice(1)}});window.addEventListener("DOMContentLoaded",()=>{const{notfound_component:t}=g(),n=document.querySelector(".list-products");console.log($(".category-products").val()),$.ajax({type:"POST",url:"http://localhost/Proyectos/oracledb/chargeProducts.php",success:function(o){h(o)},error:function(){n.innerHTML=t}})});
