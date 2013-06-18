/*
Holder - 1.7 - client side image placeholders
(c) 2012 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/
var Holder=Holder||{};(function(e,t){function o(e,t){var n="complete",r="readystatechange",i=!1,s=i,o=!0,u=e.document,a=u.documentElement,f=u.addEventListener?"addEventListener":"attachEvent",l=u.addEventListener?"removeEventListener":"detachEvent",c=u.addEventListener?"":"on",h=function(o){(o.type!=r||u.readyState==n)&&((o.type=="load"?e:u)[l](c+o.type,h,i),!s&&(s=!0)&&t.call(e,null))},p=function(){try{a.doScroll("left")}catch(e){setTimeout(p,50);return}h("poll")};if(u.readyState==n)t.call(e,"lazy");else{if(u.createEventObject&&a.doScroll){try{o=!e.frameElement}catch(d){}o&&p()}u[f](c+"DOMContentLoaded",h,i),u[f](c+r,h,i),e[f](c+"load",h,i)}}function u(e){e=e.match(/^(\W)?(.*)/);var t=document["getElement"+(e[1]?e[1]=="#"?"ById":"sByClassName":"sByTagName")](e[2]);var n=[];t!=null&&(t.length?n=t:t.length==0?n=t:n=[t]);return n}function a(e,t){var n={};for(var r in e)n[r]=e[r];for(var i in t)n[i]=t[i];return n}function f(e,t,n){var r=[t,e].sort();var i=Math.round(r[1]/16),s=Math.round(r[0]/16);var o=Math.max(n.size,i);return{height:o}}function l(e,t,n,r){var i=f(t.width,t.height,n);var o=i.height;var u=t.width*r,a=t.height*r;var l=n.font?n.font:"sans-serif";s.width=u;s.height=a;e.textAlign="center";e.textBaseline="middle";e.fillStyle=n.background;e.fillRect(0,0,u,a);e.fillStyle=n.foreground;e.font="bold "+o+"px "+l;var c=n.text?n.text:t.width+"x"+t.height;if(e.measureText(c).width/u>1){o=n.size/(e.measureText(c).width/u)}e.font="bold "+o*r+"px "+l;e.fillText(c,u/2,a/2,u);return s.toDataURL("image/png")}function c(e,t,n,i){var s=n.dimensions,o=n.theme,u=n.text?decodeURIComponent(n.text):n.text;var f=s.width+"x"+s.height;o=u?a(o,{text:u}):o;o=n.font?a(o,{font:n.font}):o;var c=1;if(window.devicePixelRatio&&window.devicePixelRatio>1){c=window.devicePixelRatio}if(e=="image"){t.setAttribute("data-src",i);t.setAttribute("alt",u?u:o.text?o.text+" ["+f+"]":f);t.style.width=s.width+"px";t.style.height=s.height+"px";if(r){t.style.backgroundColor=o.background}else{t.setAttribute("src",l(v,s,o,c))}}else{if(!r){t.style.backgroundImage="url("+l(v,s,o,c)+")";t.style.backgroundSize=s.width+"px "+s.height+"px"}}}function h(e,t,n){var r=t.dimensions,i=t.theme,s=t.text;var o=r.width+"x"+r.height;i=s?a(i,{text:s}):i;var u=document.createElement("div");u.style.backgroundColor=i.background;u.style.color=i.foreground;u.className=e.className+" holderjs-fluid";u.style.width=t.dimensions.width+(t.dimensions.width.indexOf("%")>0?"":"px");u.style.height=t.dimensions.height+(t.dimensions.height.indexOf("%")>0?"":"px");u.id=e.id;e.style.width=0;e.style.height=0;if(i.text){u.appendChild(document.createTextNode(i.text))}else{u.appendChild(document.createTextNode(o));m.push(u);setTimeout(p,0)}e.parentNode.insertBefore(u,e.nextSibling);if(jQuery){jQuery(function(t){t(e).on("load",function(){e.style.width=u.style.width;e.style.height=u.style.height;t(e).show();t(u).remove()})})}}function p(){for(i in m){if(!m.hasOwnProperty(i))continue;var e=m[i],t=e.firstChild;e.style.lineHeight=e.offsetHeight+"px";t.data=e.offsetWidth+"x"+e.offsetHeight}}function d(t,n){var r={theme:g.themes.gray},i=false;for(sl=t.length,j=0;j<sl;j++){var s=t[j];if(e.flags.dimensions.match(s)){i=true;r.dimensions=e.flags.dimensions.output(s)}else if(e.flags.fluid.match(s)){i=true;r.dimensions=e.flags.fluid.output(s);r.fluid=true}else if(e.flags.colors.match(s)){r.theme=e.flags.colors.output(s)}else if(n.themes[s]){r.theme=n.themes[s]}else if(e.flags.text.match(s)){r.text=e.flags.text.output(s)}else if(e.flags.font.match(s)){r.font=e.flags.font.output(s)}}return i?r:false}var n=false,r=false,s=document.createElement("canvas");document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s});window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});if(!Object.prototype.hasOwnProperty)Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])};if(!s.getContext){r=true}else{if(s.toDataURL("image/png").indexOf("data:image/png")<0){r=true}else{var v=s.getContext("2d")}}var m=[];var g={domain:"holder.js",images:"img",elements:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};e.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{size:g.themes.gray.size,foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},font:{regex:/font\:(.*)/,output:function(e){return this.regex.exec(e)[1]}}};for(var y in e.flags){if(!e.flags.hasOwnProperty(y))continue;e.flags[y].match=function(e){return e.match(this.regex)}}e.add_theme=function(t,n){t!=null&&n!=null&&(g.themes[t]=n);return e};e.add_image=function(t,n){var r=u(n);if(r.length){for(var i=0,s=r.length;i<s;i++){var o=document.createElement("img");o.setAttribute("data-src",t);r[i].appendChild(o)}}return e};e.run=function(t){var n=a(g,t),r=u(n.images),i=u(n.elements),s=true,o=[];for(v=0,p=r.length;v<p;v++)o.push(r[v]);var f=document.createElement("style");f.type="text/css";f.styleSheet?f.styleSheet.cssText=n.stylesheet:f.textContent=n.stylesheet;document.getElementsByTagName("head")[0].appendChild(f);var l=new RegExp(n.domain+'/(.*?)"?\\)');for(var p=i.length,v=0;v<p;v++){var m=window.getComputedStyle(i[v],null).getPropertyValue("background-image");var y=m.match(l);if(y){var b=d(y[1].split("/"),n);if(b){c("background",i[v],b,m)}}}for(var p=o.length,v=0;v<p;v++){var m=o[v].getAttribute("src")||o[v].getAttribute("data-src");if(m!=null&&m.indexOf(n.domain)>=0){var b=d(m.substr(m.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);if(b){if(b.fluid){h(o[v],b,m)}else{c("image",o[v],b,m)}}}}return e};o(t,function(){if(window.addEventListener){window.addEventListener("resize",p,false);window.addEventListener("orientationchange",p,false)}else{window.attachEvent("onresize",p)}n||e.run()});if(typeof define==="function"&&define.amd){define("Holder",[],function(){return e})}})(Holder,window)