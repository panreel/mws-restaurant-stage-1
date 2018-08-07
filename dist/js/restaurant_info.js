!function(n){var r={};function t(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var a in n)t.d(e,a,function(r){return n[r]}.bind(null,a));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=12)}([function(n,r,t){"use strict";t.d(r,"a",function(){return e});class e{static get DATABASE_URL(){return"http://localhost:1337/restaurants"}static fetchRestaurants(){return fetch(e.DATABASE_URL).then(n=>n.json())}static favoriteRestaurant(n){return fetch(this.DATABASE_URL+"/"+n+"/?is_favorite=true",{method:"PUT",mode:"cors"}).then(n=>n.json())}static unfavoriteRestaurant(n){return fetch(this.DATABASE_URL+"/"+n+"/?is_favorite=false",{method:"PUT",mode:"cors"}).then(n=>n.json())}static fetchRestaurantById(n,r){e.fetchRestaurants().then(t=>{const e=t.find(r=>r.id==n);e?r(null,e):r("Restaurant does not exist",null)}).catch(n=>r(null,n))}static fetchRestaurantByCuisine(n,r){e.fetchRestaurants().then(t=>{const e=t.filter(r=>r.cuisine_type==n);r(null,e)}).catch(n=>r(null,n))}static fetchRestaurantByNeighborhood(n,r){e.fetchRestaurants().then(t=>{const e=t.filter(r=>r.neighborhood==n);r(null,e)}).catch(n=>r(null,n))}static fetchRestaurantByCuisineAndNeighborhood(n,r,t){e.fetchRestaurants().then(e=>{let a=e;"all"!=n&&(a=a.filter(r=>r.cuisine_type==n)),"all"!=r&&(a=a.filter(n=>n.neighborhood==r)),t(a,null)}).catch(n=>t(null,n))}static fetchNeighborhoods(n){e.fetchRestaurants().then(r=>{const t=r.map((n,t)=>r[t].neighborhood),e=t.filter((n,r)=>t.indexOf(n)==r);n(null,e)}).catch(r=>n(null,r))}static fetchCuisines(n){e.fetchRestaurants().then(r=>{const t=r.map((n,t)=>r[t].cuisine_type),e=t.filter((n,r)=>t.indexOf(n)==r);n(null,e)}).catch(r=>n(null,r))}static urlForRestaurant(n){return`./restaurant.html?id=${n.id}`}static imageUrlForRestaurant(n){return n.photograph?`./img/${n.photograph}.jpg`:"./img/default_icon.jpg"}static mapMarkerForRestaurant(n,r){return new google.maps.Marker({position:n.latlng,title:n.name,url:e.urlForRestaurant(n),map:r,animation:google.maps.Animation.DROP})}}},function(n,r){n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var a=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(e),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(e[i]=!0)}for(a=0;a<n.length;a++){var o=n[a];"number"==typeof o[0]&&e[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),r.push(o))}},r}},function(n,r,t){var e={},a=function(n){var r;return function(){return void 0===r&&(r=n.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var r={};return function(n){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),o=null,s=0,l=[],c=t(6);function d(n,r){for(var t=0;t<n.length;t++){var a=n[t],i=e[a.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(h(a.parts[o],r))}else{var s=[];for(o=0;o<a.parts.length;o++)s.push(h(a.parts[o],r));e[a.id]={id:a.id,refs:1,parts:s}}}}function u(n,r){for(var t=[],e={},a=0;a<n.length;a++){var i=n[a],o=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[o]?e[o].parts.push(s):t.push(e[o]={id:o,parts:[s]})}return t}function p(n,r){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=l[l.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),l.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=i(n.insertInto+" "+n.insertAt.before);t.insertBefore(r,a)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=l.indexOf(n);r>=0&&l.splice(r,1)}function m(n){var r=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),g(r,n.attrs),p(n,r),r}function g(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function h(n,r){var t,e,a,i;if(r.transform&&n.css){if(!(i=r.transform(n.css)))return function(){};n.css=i}if(r.singleton){var l=s++;t=o||(o=m(r)),e=x.bind(null,t,l,!1),a=x.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(r,n.attrs),p(n,r),r}(r),e=function(n,r,t){var e=t.css,a=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&a;(r.convertToAbsoluteUrls||i)&&(e=c(e));a&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([e],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,r),a=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),a=function(){f(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else a()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=u(n,r);return d(t,r),function(n){for(var a=[],i=0;i<t.length;i++){var o=t[i];(s=e[o.id]).refs--,a.push(s)}n&&d(u(n,r),r);for(i=0;i<a.length;i++){var s;if(0===(s=a[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete e[s.id]}}}};var b=function(){var n=[];return function(r,t){return n[r]=t,n.filter(Boolean).join("\n")}}();function x(n,r,t,e){var a=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=b(r,a);else{var i=document.createTextNode(a),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(i,o[r]):n.appendChild(i)}}},function(n,r){"serviceWorker"in navigator&&"SyncManager"in window&&navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(n){console.log("[SW] Registration succeeded. Scope is "+n.scope)}).catch(function(n){console.log("[SW] Registration failed with "+n)})},function(n,r,t){var e=t(5);"string"==typeof e&&(e=[[n.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(2)(e,a);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(1)(!1)).push([n.i,'@charset "utf-8";\r\n/* CSS Document */\r\nbody,td,th,p{\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 10pt;\r\n\tcolor: #333;\r\n\tline-height: 1.5;\r\n}\r\nbody {\r\n\tbackground-color: #fdfdfd;\r\n\tmargin: 0;\r\n\tposition:relative;\r\n}\r\nul, li {\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tfont-size: 10pt;\r\n\tcolor: #333;\r\n}\r\na {\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\na:hover, a:focus {\r\n\tcolor: #3397db;\r\n\ttext-decoration: none;\r\n}\r\na img{\r\n\tborder: none 0px #fff;\r\n}\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0 0 20px;\r\n}\r\narticle, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n#header, .inside header {\r\n  grid-area: header;\r\n}\r\n#maincontent {\r\n  background-color: #f3f3f3;\r\n  display: grid;\r\n  grid-template-rows: 400px auto;\r\n  grid-template-areas: \r\n  "map"\r\n  "filter-restaurants"\r\n}\r\n#footer {\r\n  grid-area: footer;\r\n  background-color: #444;\r\n  color: #D9D9D9;\r\n  font-size: 8pt;\r\n  letter-spacing: 1px;\r\n  padding: 25px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n.hidden-from-screen {\r\n  position:absolute;\r\n  left:-10000px;\r\n  top:auto;\r\n  width:1px;\r\n  height:1px;\r\n  overflow:hidden;\r\n}\r\n\r\n/* ====================== Grid Styling ==================== */\r\n.container-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 80px auto auto;\r\n  grid-template-columns: 100%;\r\n  grid-template-areas:\r\n  "header"\r\n  "content"\r\n  "footer"\r\n}\r\n.container-restaurants {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-column-gap: 2%;\r\n  grid-row-gap: 15px;\r\n}\r\n\r\n/* ====================== Navigation ====================== */\r\nnav {\r\n  height: 80px;\r\n  background-color: #252831;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nnav h1 {\r\n  margin: auto;\r\n  padding: 0 10px;\r\n}\r\nnav h1 a {\r\n  color: #fff;\r\n  font-size: 0.7em;\r\n  font-weight: 200;\r\n  letter-spacing: 10px;\r\n  text-transform: uppercase;\r\n}\r\n#breadcrumb {\r\n    grid-area: breadcrumb;\r\n    padding: 15px 30px 15px;\r\n    list-style: none;\r\n    background-color: #eee;\r\n    font-size: 17px;\r\n    margin: 0;\r\n}\r\n/* Display list items side by side */\r\n#breadcrumb li {\r\n    display: inline;\r\n}\r\n/* Add a slash symbol (/) before/behind each list item */\r\n#breadcrumb li+li:before {\r\n    padding: 8px;\r\n    color: black;\r\n    content: "/\\A0";\r\n}\r\n/* Add a color to all links inside the list */\r\n#breadcrumb li a {\r\n    color: #135381;\r\n    text-decoration: none;\r\n}\r\n/* Add a color on mouse-over */\r\n#breadcrumb li a:hover {\r\n    color: #01447e;\r\n    text-decoration: underline;\r\n}\r\n\r\n/* ====================== Map ====================== */\r\n#map-container {\r\n  grid-area: map;\r\n  position: relative;\r\n}\r\n#map-container #showmap{\r\n  position: absolute;\r\n  width: 250px;\r\n  height: 60px;\r\n  top: calc(50% - 30px);\r\n  left: calc(50% - 125px);\r\n  font-size: 1.1em;\r\n  font-weight: 200;\r\n  border-radius: 5px;\r\n  border-color: transparent;\r\n  background-color: #185F91;\r\n  color: #fff;\r\n}\r\n#map {\r\n  height: 400px;\r\n  width: 100%;\r\n  background-color: #ccc;\r\n}\r\n.inside #map {\r\n  height: 250px;\r\n}\r\n\r\n/* ====================== Restaurant Filtering ====================== */\r\n.filter-restaurants {\r\n  grid-area: filter-restaurants;\r\n}\r\n\r\n.filter-options {\r\n  background-color: #185F91;\r\n  align-items: center;\r\n  padding: 20px 25px;\r\n}\r\n.filter-options h2 {\r\n  color: white;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n  margin-bottom: 10px;\r\n}\r\n.filter-options select {\r\n  background-color: white;\r\n  border: 1px solid #fff;\r\n  font-family: Arial,sans-serif;\r\n  font-size: 11pt;\r\n  height: 35px;\r\n  letter-spacing: 0;\r\n  padding: 0 10px;\r\n  width: 100%;\r\n}\r\n.filter-options select:not(:last-of-type) {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* ====================== Restaurant Listing ====================== */\r\n#restaurants-list {\r\n  background-color: #f3f3f3;\r\n  list-style: outside none none;\r\n  margin: 0;\r\n  padding: 30px 20px 60px;\r\n  text-align: center;\r\n}\r\n#restaurants-list article {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  font-family: Arial,sans-serif;\r\n  padding: 0 30px 25px;\r\n  text-align: left;\r\n}\r\n#restaurants-list .restaurant-img {\r\n  background-color: #ccc;\r\n  display: block;\r\n  margin: 0;\r\n  max-width: 100%;\r\n  min-width: 100%;\r\n}\r\n#restaurants-list article h2 {\r\n  color: #185F91;\r\n  font-family: Arial,sans-serif;\r\n  font-size: 12pt;\r\n  font-weight: 200;\r\n  letter-spacing: 0;\r\n  line-height: 1.3;\r\n  height: 2.6;\r\n  margin: 20px 0 10px;\r\n}\r\n#restaurants-list p {\r\n  margin: 0;\r\n  font-size: 9pt;\r\n}\r\n#restaurants-list .user-actions {\r\n  display: grid;\r\n  grid-template-columns: 49% 49%;\r\n  grid-column-gap: 2%;\r\n}\r\n#restaurants-list article a {\r\n  border-radius: 5px;\r\n  border-bottom: 2px solid #eee;\r\n  color: #fff;\r\n  display: inline-block;\r\n  font-size: 9pt;\r\n  margin: 15px 0 0;\r\n  padding: 8px 30px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n#restaurants-list article a.view-more {\r\n  background-color: #185F91;\r\n}\r\n#restaurants-list article a.notfavorite {\r\n  background-color: #eaa612;\r\n}\r\n#restaurants-list article a.favorite {\r\n  background-color: #71a879;\r\n}\r\n\r\n/* ====================== Restaurant Details ====================== */\r\n.inside {\r\n  display: grid;\r\n  grid-template-rows: 135px auto auto;\r\n  grid-template-columns: 100%;\r\n  grid-template-areas:\r\n  "header"\r\n  "content"\r\n  "footer"\r\n}\r\n.inside #maincontent {\r\n  background-color: #f3f3f3;\r\n  display: grid;\r\n  grid-template-rows: auto 250px auto;\r\n  grid-template-areas: \r\n  "restaurants-container"\r\n  "map"\r\n  "restaurants-reviews"\r\n}\r\n#restaurant-name {\r\n  color: #185F91;\r\n  font-family: Arial,sans-serif;\r\n  font-size: 20pt;\r\n  font-weight: 200;\r\n  letter-spacing: 0;\r\n  margin: 0 0 15px;\r\n  text-transform: uppercase;\r\n  line-height: 1.1;\r\n}\r\n#restaurant-img {\r\n\twidth: 100%;\r\n}\r\n#restaurant-address {\r\n  font-size: 12pt;\r\n  margin: 10px 0px;\r\n}\r\n#restaurant-cuisine {\r\n  background-color: #333;\r\n  color: #ddd;\r\n  font-size: 12pt;\r\n  font-weight: 300;\r\n  letter-spacing: 10px;\r\n  margin: 0 0 20px;\r\n  padding: 2px 0;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n#restaurant-hours {\r\n  width: 100%;\r\n}\r\n#restaurant-container, #reviews-container {\r\n  border-bottom: 1px solid #d9d9d9;\r\n  border-top: 1px solid #fff;\r\n  padding: 30px 30px;\r\n}\r\n#restaurants-container {\r\n  grid-area: restaurants-container;\r\n}\r\n#reviews-container {\r\n  grid-area: restaurants-reviews;\r\n  padding: 30px 30px;\r\n}\r\n#reviews-container h2 {\r\n  color: #185F91;\r\n  font-size: 20pt;\r\n  font-weight: 300;\r\n  letter-spacing: -1px;\r\n  padding-bottom: 1pt;\r\n}\r\n#reviews-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: grid;\r\n  grid-template-columns: 100%;\r\n  grid-row-gap: 30px;\r\n}\r\n#reviews-list article {\r\n  background-color: #fff;\r\n  border: 2px solid #f3f3f3;\r\n  display: block;\r\n  list-style-type: none;\r\n  overflow: hidden;\r\n  padding: 20px;\r\n}\r\n#reviews-list article p {\r\n  margin: 0 0 10px;\r\n}\r\n#restaurant-hours td {\r\n  color: #666;\r\n}\r\n',""])},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var a,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(n,r,t){var e=t(8);"string"==typeof e&&(e=[[n.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(2)(e,a);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(1)(!1)).push([n.i,'@media screen and (min-width: 1000px) {\n  \n  nav h1 a {\n    font-size: 1.3em;\n  }\n  .container-restaurants {\n    display: grid;\n    grid-template-columns: 32% 32% 32%;\n  }\n  .filter-options select {\n    width: 200px;\n  }\n  .filter-options select:not(:last-of-type) {\n    margin-right: 10px;\n  }\n  .inside #maincontent {\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 250px auto;\n    grid-template-areas: \n    "map map"\n    "restaurants-container restaurants-reviews"\n  }\n\n}',""])},function(n,r,t){var e=t(10);"string"==typeof e&&(e=[[n.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(2)(e,a);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(1)(!1)).push([n.i,'@media screen and (min-width: 600px) and (max-width: 1000px) {\n\n  nav h1 a {\n    font-size: 1em;\n  }\n  .container-restaurants {\n    display: grid;\n    grid-template-columns: 49% 49%;\n  }\n  .filter-options select {\n    width: 200px;\n  }\n  .filter-options select:not(:last-of-type) {\n    margin-right: 10px;\n  }\n  #restaurant-container {\n    display: grid;\n    grid-template-columns: 40% 56%;\n    grid-column-gap: 4%; \n    grid-template-areas:\n      "restaurant-details-title restaurant-details-title"\n      "restaurant-details-main restaurant-details-side";\n  }\n  #restaurant-name {\n    grid-area: restaurant-details-title\n  }\n  #restaurant-container-details-main {\n    grid-area: restaurant-details-main\n  }\n  #restaurant-container-details-side {\n    grid-area: restaurant-details-side\n  }\n  .inside #maincontent {\n    grid-template-rows: 250px auto auto;\n    grid-template-columns: 100%;\n    grid-template-areas: \n    "map"\n    "restaurants-container" \n    "restaurants-reviews"\n  }\n\n}',""])},,function(n,r,t){"use strict";t.r(r);t(3);var e=t(0);t(4),t(7),t(9);window.initMap=(()=>{!function(n){if(self.restaurant)return void n(null,self.restaurant);const r=function(n,r){r||(r=window.location.href);n=n.replace(/[\[\]]/g,"\\$&");const t=new RegExp(`[?&]${n}(=([^&#]*)|&|#|$)`).exec(r);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}("id");r?e.a.fetchRestaurantById(r,(r,t)=>{self.restaurant=t,t?(!function(n=self.restaurant){const r=document.getElementById("restaurant-name");r.innerHTML=n.name,r.tabIndex=0,document.getElementById("restaurant-address").innerHTML=n.address;const t=document.getElementById("restaurant-img");t.className="restaurant-img",t.tabIndex=0,t.alt="A "+n.name+" restaurant picture",t.src=e.a.imageUrlForRestaurant(n),document.getElementById("restaurant-cuisine").innerHTML=n.cuisine_type,n.operating_hours&&function(n=self.restaurant.operating_hours){const r=document.getElementById("restaurant-hours");r.tabIndex=0;for(let t in n){const e=document.createElement("tr"),a=document.createElement("td");a.innerHTML=t,e.appendChild(a);const i=document.createElement("td");i.innerHTML=n[t],e.appendChild(i),r.appendChild(e)}}();!function(n=self.restaurant.reviews){const r=document.getElementById("reviews-container"),t=document.createElement("h3");if(t.innerHTML="Reviews",r.appendChild(t),!n){const n=document.createElement("p");return n.innerHTML="No reviews yet!",void r.appendChild(n)}const e=document.getElementById("reviews-list");n.forEach(n=>{e.appendChild(function(n){const r=document.createElement("article");r.tabIndex=0;const t=document.createElement("h3");t.innerHTML=n.name,r.appendChild(t);const e=document.createElement("p");e.innerHTML=n.date,r.appendChild(e);const a=document.createElement("p");a.innerHTML=`Rating: ${n.rating}`,r.appendChild(a);const i=document.createElement("p");return i.innerHTML=n.comments,r.appendChild(i),r}(n))}),r.appendChild(e)}()}(),n(null,t)):console.error(r)}):(error="No restaurant id in URL",n(error,null))}((n,r)=>{n?console.error(n):(self.map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:r.latlng,scrollwheel:!1}),function(n=self.restaurant){const r=document.getElementById("breadcrumb"),t=document.createElement("li");t.innerHTML=n.name,r.appendChild(t)}(),e.a.mapMarkerForRestaurant(self.restaurant,self.map))})})}]);