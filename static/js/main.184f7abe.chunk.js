(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(50)},26:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),m=a(3),s=(a(26),a(27),a(8)),i=a(6),o=a(19),u=a.n(o),d=(a(45),a(7));a(46);d.a.configure();var E=function(e){var t=e.product,a=e.addToCart,l=t.title,r=t.image,s=t.price,i=t.description,o=t.id,u=Object(n.useState)(!0),E=Object(m.a)(u,2),f=E[0],p=E[1],g=f?i.slice(0,120):i;return c.a.createElement("div",{key:o,className:"card shadow text-center mb-1 product_container"},c.a.createElement("div",{className:"d-flex justify-content-center card-img pt-3 img_wrap"},c.a.createElement("img",{src:r,alt:l})),c.a.createElement("div",{className:"card-content"},c.a.createElement("h3",null,l),c.a.createElement("p",null,g,c.a.createElement("button",{className:"btn text-primary",onClick:function(){p(!f)}},c.a.createElement("span",null,f?"....Read More":"Read Less"))),c.a.createElement("h4",null,"$",s)),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("button",{className:"btn addToCartBtn",onClick:function(){a(t),d.a.warn("Item Added to the cart !",{position:d.a.POSITION.TOP_CENTER,autoClose:2e3})}},"Add to Cart ",c.a.createElement("i",{className:"fas fa-cart-plus"}))))};function f(e){var t=e.cart,a=e.setCart,l=Object(n.useState)([]),r=Object(m.a)(l,2),o=r[0],d=r[1],f=Object(n.useState)(!0),p=Object(m.a)(f,2),g=p[0],v=p[1];if(Object(n.useEffect)((function(){u.a.get("https://fakestoreapi.com/products").then((function(e){d(e.data),v(!1)}))}),[]),g)return c.a.createElement("div",{className:"text-center mt-5"},c.a.createElement("img",{src:"loader.gif",alt:"loader"}));var N=function(e){var n=Object(i.a)(t),c=n.find((function(t){return e.id===t.id}));c?c.quantity++:(c=Object(s.a)(Object(s.a)({},e),{},{quantity:1}),n.push(c)),a(n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"title_h text-center mt-4 mb-3"},c.a.createElement("h1",null,"Our Products"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"underline"}," "))),c.a.createElement("div",{className:"productList"},o.map((function(e){return c.a.createElement(E,{product:e,key:e.id,addToCart:N})}))))}a(49);var p=a(20);function g(e){var t=e.getTotalSum,a={public_key:"FLWPUBK-b21d0e555e44f8173a7ccd6681e6d370-X",tx_ref:Date.now(),amount:t(),currency:"USD",payment_options:"card,mobilemoney,ussd",customer:{email:"user@gmail.com",phonenumber:"07064586146",name:"joel ugwumadu"},customizations:{title:"Godswill shop",description:"Payment for items in cart",logo:"https://e7.pngegg.com/pngimages/1020/137/png-clipart-bag-illustration-logo-shopping-logo-design-purple-other.png"}},n=Object(p.a)(a);return c.a.createElement("div",{className:"App"},c.a.createElement("button",{className:"btn btn-danger",onClick:function(){n({callback:function(e){console.log(e)},onClose:function(){}})}},"Make Payment"))}function v(e){var t=e.cart,a=e.setCart,n=function(){return t.reduce((function(e,t){return e+t.price*t.quantity}),0)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"title_h text-center mt-4 mb-3"},c.a.createElement("h1",null,"Your Cart"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"underline"}," "))),c.a.createElement("div",{className:"container-fluid Cart_table mt-5 text-center"},c.a.createElement("div",{className:"row table_title mb-3"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("h2",null,"Products")),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("h2",null,"Product Name")),c.a.createElement("div",{className:"col-lg-2"},c.a.createElement("h2",null,"Price")),c.a.createElement("div",{className:"col-lg-2"},c.a.createElement("h2",null,"Quantity")),c.a.createElement("div",{className:"col-lg-2"},c.a.createElement("h2",null,"Remove"))),t.map((function(e){var n=e.image,l=e.title,r=e.price,m=e.quantity,s=e.id;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{key:s,className:"row mb-2 cart_Item"},c.a.createElement("div",{className:"col-lg-3 col-sm-12 col-12"},c.a.createElement("img",{src:n,alt:l,className:"img-fluid"})),c.a.createElement("div",{className:"col-lg-3 col-sm-12 col-12"},c.a.createElement("h3",null,l)),c.a.createElement("div",{className:"col-lg-2 col-sm-12 col-12"},c.a.createElement("h4",null,r.toLocaleString("en-US",{style:"currency",currency:"USD"}).format(r))),c.a.createElement("div",{className:"col-lg-2 col-sm-12 col-12"},c.a.createElement("input",{type:"number",value:m,onChange:function(n){return function(e,n){var c=Object(i.a)(t);c.find((function(t){return t.id===e.id})).quantity=n,a(c)}(e,Number(n.target.value))}})),c.a.createElement("div",{className:"col-lg-2 col-sm-12 col-12"},c.a.createElement("div",{onClick:function(){return n=e,void a(t.filter((function(e){return e!==n})));var n}}," ",c.a.createElement("i",{className:"fas fa-trash-alt"})," "))))}))),c.a.createElement("div",{className:"d-flex justify-content-end container-fluid mt-5"},c.a.createElement("div",null,t.length>0&&c.a.createElement("div",{className:"clear_cart text-center",onClick:function(){a([])}},"Clear Cart"),c.a.createElement("div",{className:"total_cost pt-2 mb-3 mt-2"},"Total Cost: $",n()),c.a.createElement(g,{getTotalSum:n}),c.a.createElement("img",{src:"master-card.png",alt:"master card",className:"master_card"}))))}var N=JSON.parse(localStorage.getItem("cart")||"[]");var b=function(){var e=Object(n.useState)(N),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)("products"),s=Object(m.a)(r,2),i=s[0],o=s[1];Object(n.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(a))}),[a]);var u=function(e){o(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("div",{className:"container d-flex justify-content-around"},c.a.createElement("div",{className:"product",onClick:function(){return u("products")}},"Products"),c.a.createElement("button",{className:"cart",onClick:function(){return u("cart")}},c.a.createElement("i",{className:"fas fa-cart-plus"})," My cart"," ",c.a.createElement("span",null,a.reduce((function(e,t){return e+t.quantity}),0))))),c.a.createElement("div",{className:"container-fluid mb-5"},"products"===i&&c.a.createElement(f,{cart:a,setCart:l}),"cart"===i&&c.a.createElement(v,{cart:a,setCart:l})))};r.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.184f7abe.chunk.js.map