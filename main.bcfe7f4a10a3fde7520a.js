(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(n,t,e){"use strict";e.r(t);e("JBxO"),e("FdtR");var a=function(n){return new Promise((function(t){return setTimeout((function(){t(n)}),n)}))},o=function(n){return console.log("Resolved after "+n+"ms")};a(2e3).then(o),a(1e3).then(o),a(1500).then(o);e("lmye"),e("D/wG"),e("wCa+");var i=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(n,t){return new Promise((function(e){e(n.map((function(n){return n.name===t?Object.assign({},n,{active:!n.active}):n})))}))},r=function(n){return console.table(n)};c(i,"Mango").then(r),c(i,"Lux").then(r);var u=function(n){return new Promise((function(t,e){var a,o,i=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){Math.random()>.3?t({transactionId:n.id,transactionDelay:i}):e(n.id)}),i)}))},s=function(n){console.log("Transaction "+n.transactionId+" processed in "+n.transactionDelay+" ms")},m=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};u({id:70,amount:150}).then(s).catch(m),u({id:71,amount:230}).then(s).catch(m),u({id:72,amount:75}).then(s).catch(m),u({id:73,amount:100}).then(s).catch(m)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.bcfe7f4a10a3fde7520a.js.map