import{r as n,u as h,b as p,j as r,c as f}from"./index-5Mks-Deo.js";const d=[{id:0,name:"Classic Margherita Pizza",germanName:"Klassische Margherita Pizza",price:3.5,ingredients:["Tomato Sauce","Mozzarella Cheese","Fresh Basil"],germanIngredients:["Tomatensauce","Mozzarellakäse","frisches Basilikum"]},{id:1,name:"Vegetarian Pasta Salad",germanName:"Vegetarischer Nudelsalat",price:4,ingredients:["Pasta","Mixed Vegetables","Italian Dressing"],germanIngredients:["Nudeln","Gemischtes Gemüse","Italienisches Dressing"]},{id:2,name:"Grilled Chicken Wrap",germanName:"Gegrilltes Hähnchen-Wrap",price:5.2,ingredients:["Grilled Chicken","Flour Tortilla","Salsa"],germanIngredients:["Gegrilltes Hähnchen","Mehltortilla","Salsa"]},{id:3,name:"Cheeseburger with Fries",germanName:"Cheeseburger mit Pommes",price:4.5,ingredients:["Beef Patty","Cheese","French Fries"],germanIngredients:["Rindfleisch-Patty","Käse","Pommes Frites"]},{id:4,name:"Vegetable Stir-Fry",germanName:"Gemüsepfanne",price:3.8,ingredients:["Assorted Vegetables","Soy Sauce","Rice"],germanIngredients:["Verschiedenes Gemüse","Sojasauce","Reis"]},{id:5,name:"Chicken Caesar Salad",germanName:"Hähnchen Caesar Salat",price:4.2,ingredients:["Grilled Chicken","Romaine Lettuce","Caesar Dressing"],germanIngredients:["Gegrilltes Hähnchen","Römersalat","Caesar-Dressing"]},{id:6,name:"Tomato Basil Soup with Bread",germanName:"Tomaten-Basilikum Suppe mit Brot",price:2.5,ingredients:["Tomatoes","Basil","Bread"],germanIngredients:["Tomaten","Basilikum","Brot"]},{id:7,name:"Spaghetti Bolognese",germanName:"Spaghetti Bolognese",price:3.7,ingredients:["Spaghetti","Ground Beef","Tomato Sauce"],germanIngredients:["Spaghetti","Hackfleisch","Tomatensauce"]},{id:8,name:"Falafel Pita Pocket",germanName:"Falafel Pita Tasche",price:4,ingredients:["Falafel","Pita Bread","Tahini Sauce"],germanIngredients:["Falafel","Pita-Brot","Tahini-Sauce"]},{id:9,name:"Ham and Cheese Sandwich",germanName:"Schinken-Käse-Sandwich",price:3.2,ingredients:["Ham","Cheese","Bread"],germanIngredients:["Schinken","Käse","Brot"]},{id:10,name:"Vegetable Quesadilla",germanName:"Gemüse Quesadilla",price:4.3,ingredients:["Assorted Vegetables","Cheese","Flour Tortilla"],germanIngredients:["Verschiedenes Gemüse","Käse","Mehltortilla"]},{id:11,name:"Beef and Broccoli Rice Bowl",germanName:"Rindfleisch-Brokkoli Reisschüssel",price:5,ingredients:["Beef Strips","Broccoli","Rice"],germanIngredients:["Rindfleischstreifen","Brokkoli","Reis"]},{id:12,name:"Caprese Panini",germanName:"Caprese Panini",price:3.8,ingredients:["Tomato","Mozzarella Cheese","Basil Pesto"],germanIngredients:["Tomate","Mozzarellakäse","Basilikumpesto"]},{id:13,name:"Sweet Potato Fries",germanName:"Süßkartoffel Pommes",price:2.8,ingredients:["Sweet Potatoes","Olive Oil","Seasonings"],germanIngredients:["Süßkartoffeln","Olivenöl","Gewürze"]},{id:14,name:"Mushroom Risotto",germanName:"Pilzrisotto",price:4.5,ingredients:["Arborio Rice","Mushrooms","Parmesan Cheese"],germanIngredients:["Arborio-Reis","Champignons","Parmesan-Käse"]},{id:15,name:"Tuna Salad Wrap",germanName:"Thunfischsalat Wrap",price:3.9,ingredients:["Tuna","Mixed Greens","Tortilla Wrap"],germanIngredients:["Thunfisch","Gemischter Salat","Tortilla Wrap"]},{id:16,name:"Egg Fried Rice",germanName:"Ei gebratener Reis",price:3.5,ingredients:["Eggs","Rice","Soy Sauce"],germanIngredients:["Eier","Reis","Sojasauce"]}];for(let e=0;e<d.length;e++)d[e].id=e;const I=new Array(7).fill(null).map((e,a)=>d.slice(a*4,(a+1)*4));function R(e){return d[e]}function P(e){return`/res/m${e}.webp`}function w({title:e,titleId:a,...s},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},s),e?n.createElement("title",{id:a},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const S=n.forwardRef(w),B=S;function N({title:e,titleId:a,...s},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},s),e?n.createElement("title",{id:a},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const k=n.forwardRef(N),x=k;function C(e,a,s){const i=document.timeline?document.timeline.currentTime:performance.now();function l(t){a.aborted||(s(t),c(t))}function c(t){const m=t-i,o=Math.round(m/e)*e,u=i+o+e-performance.now();setTimeout(()=>requestAnimationFrame(l),u)}c(i)}function T(){const e=h(),a=p(),[s,i]=n.useState("0:00"),[l,c]=n.useState(!1);return n.useEffect(()=>{const t=()=>{if(!e.user)return;const o=(Number(e.user.loginAt||0)+3e4-Date.now())/1e3;o<0&&(window.parent&&window.parent.postMessage({ev:"unset-user"},"*"),a({type:"set-user",user:null}));const g=o%60|0,u=o/60|0;i(`${u}:${g<10?"0":""}${g}`),c(o<10)},m=new AbortController;return C(1e3,m.signal,t),t(),()=>m.abort()},[e.user,a]),e.user?r.jsxs(r.Fragment,{children:[r.jsxs("nav",{className:"fixed flex w-full gap-4 bg-white px-6 py-3",children:[r.jsx(x,{className:"h-6 w-6"}),r.jsx("h4",{children:e.user.name}),r.jsxs("div",{className:"flex flex-grow justify-end gap-3",children:[r.jsx(B,{className:"h-6 w-6"}),r.jsxs("span",{className:f("relative",l?"text-red-600":""),children:[l?r.jsx("span",{className:"absolute animate-ping",children:s}):null,s]})]})]}),r.jsx("div",{className:"h-14 w-full"})]}):null}export{T as N,R as g,P as i,I as m};