(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(75),o=a.n(r),l=(a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(53),u=a(51),m=a.n(u),d=a(76),E=a(18),b=a(77),f=a.n(b);a(104);function v(){return c.a.createElement("div",{className:"Navbar"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",{className:"title container-fluid"},"BURGER QUEEN")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row margin-top"},c.a.createElement("div",{className:"col-4 margin-div a-center"},c.a.createElement("a",{href:"#about",className:"color"},"ORDENAR PEDIDO")),c.a.createElement("div",{className:"col-4 margin-div a-center"},c.a.createElement("a",{href:"#about",className:"color"},"ATENDER PEDIDO")),c.a.createElement("div",{className:"col-4 a-center"},c.a.createElement("a",{href:"#about",className:"color"},"PEDIDO LISTO"))))))}var p=a(54);a(105);var h=function(e){var t=e.addUser,a=e.orden,n=e.user,r=e.handleInputChange,o=e.updateItem,l=e.deleteOrden;return c.a.createElement("form",{onSubmit:t,className:"margintop"},c.a.createElement("div",{className:"center orden weigth"},c.a.createElement("p",null,"ORDEN")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4 section"},c.a.createElement("p",null,"Nombre de cliente:")),c.a.createElement("div",{className:"col-8 section"},c.a.createElement("input",{type:"text",name:"name",value:n.customer,onChange:r,"data-testid":"cliente-input"}))),c.a.createElement("div",{className:"row section"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"table weigth"},c.a.createElement("tr",null,c.a.createElement("th",null,"ITEM"),c.a.createElement("th",null,"CANTIDAD"),c.a.createElement("th",null,"P/UNITARIO"),c.a.createElement("th",null,"P/TOTAL"),c.a.createElement("th",null))),c.a.createElement("tbody",{className:"table"},a.length>0?a.map(function(e,t){return c.a.createElement("tr",{"data-testid":"item",key:e.id},c.a.createElement("td",null,e.name),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"button-count margin-button-count-sum",onClick:function(){var a=Object(p.a)({},e);a.count+=1,o(t,a)},"data-testid":"".concat(t,"-update-button-sum")},c.a.createElement("i",{className:"fas fa-plus"})),e.count,c.a.createElement("button",{type:"button",className:"button-count margin-button-count-substr",onClick:function(){var a=Object(p.a)({},e);a.count-=1,a.count<1&&(a.count=1),o(t,a)},"data-testid":"".concat(t,"-update-button-subs")},c.a.createElement("i",{className:"fas fa-minus"}))),c.a.createElement("td",null,e.value),c.a.createElement("td",null,e.count*e.value),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"button muted-button button-delete",onClick:function(){return l(e.name)},"data-testid":"".concat(t,"-deleteOrden-button")},c.a.createElement("i",{className:"fas fa-trash-alt"}))))}):c.a.createElement("tr",null,c.a.createElement("td",{colSpan:3},"No hay pedidos"))),c.a.createElement("tfoot",{className:"table weigth"},c.a.createElement("tr",null,c.a.createElement("th",null,"TOTAL"),c.a.createElement("th",null,a.reduce(function(e,t){return e+t.count*t.value},0)),c.a.createElement("th",null),c.a.createElement("th",null),c.a.createElement("th",null))))),c.a.createElement("div",{className:"margin-button-send weigth"},c.a.createElement("button",{type:"submit","data-testid":"ordenToFirebase-button",className:"button-send"},"ENVIAR A COCINAR")))};a(106);function g(e){var t=e.addOrden,a=e.state,r=Object(n.useState)("Desayuno"),o=Object(E.a)(r,2),l=o[0],i=o[1];return c.a.createElement("div",{className:"background-blue"},c.a.createElement("div",{className:"row button-center margintop margin-filter-bottom"},c.a.createElement("div",{className:"col-6 margin-filter"},c.a.createElement("button",{className:"button-filter weigth marginsup",type:"button",onClick:function(){return i("Desayuno")},"data-testid":"filter-button-desayuno"},"DESAYUNO")),c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{className:"button-filter weigth marginsup",type:"button",onClick:function(){return i("Resto del d\xeda")},"data-testid":"filter-button-restodeldia"},"MEN\xda"))),c.a.createElement("div",{className:"background-blue div-center"},a.filter(function(e){return e.type===l}).map(function(e){return c.a.createElement("div",{key:e.id,className:"row button-center background-white margin-div margin-top div-centerhijo"},c.a.createElement("div",{className:"col-3"},c.a.createElement("img",{src:e.img,alt:"imagen de opciones"})),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("p",null,e.name)),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("p",null,"$/",e.value,".00")),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("button",{key:e.id,className:"button-addOrden",type:"button",onClick:function(){return t(e.name)},"data-testid":"addOrden-button"},c.a.createElement("i",{className:"fas fa-shopping-cart"}))))})))}var N=a(52),w=a.n(N);w.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var O=w.a,y=(a(186),function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var o=Object(n.useState)([]),l=Object(E.a)(o,2),i=l[0],u=l[1],b=Object(n.useState)({customer:""}),p=Object(E.a)(b,2),N=p[0],w=p[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement(v,null)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 background-blue"},c.a.createElement(g,{addOrden:function(e){a.filter(function(t){return t.name===e?u([].concat(Object(s.a)(i),[t])):t})},state:a})),c.a.createElement("div",{className:"col-md-6 background-yellow margin-black"},c.a.createElement(h,{orden:i,deleteOrden:function(e){u(i.filter(function(t){return t.name!==e}))},updateItem:function(e,t){var a=Object(s.a)(i);a[e]=t,u(a)},addUser:function(e){e.preventDefault();var t=O.firestore();t.settings({timestampsInSnapshots:!0}),t.collection("users").add({name:N.customer,orden:i}),w({customer:""}),u([])},user:N,handleInputChange:function(e){w({customer:e.target.value})}}))))}),k=(a(187),document.getElementById("root"));o.a.render(c.a.createElement(y,null),k),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):i(t,e)})}}()},78:function(e,t,a){e.exports=a(188)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.6cad0d5a.chunk.js.map