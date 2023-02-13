(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"29d7":function(t,e,s){"use strict";s("e67f")},"3c05":function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"open-mail"},[t.open?e("div",{staticClass:"open-content",on:{click:t.openAction}},[e("h3",{staticClass:"title"},[t._v("致猪猪大宝贝的一封信")]),e("p",{staticClass:"desc"},[t._v("轻启")]),e("canvas",{ref:"mail",staticClass:"canvas-mail"})]):e("card")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-content"},[t._l(t.content,(function(s,n){return t.currentPage===n?e("div",{key:n,staticClass:"card-item"},[e("wired-card",{attrs:{elevation:"5"}},[e("vue-typed-js",{attrs:{strings:[s],"show-cursor":!1}},[e("p",{staticClass:"typing"})])],1)],1):t._e()})),e("div",{staticClass:"card-pagination"},[0!==t.currentPage?e("div",{staticClass:"card-btn card-prev",on:{click:t.prev}},[e("wired-button",{attrs:{elevation:"3"}},[t._v(" 上一页 ")])],1):t._e(),t.currentPage!==t.content.length-1?e("div",{staticClass:"card-btn card-next",on:{click:t.next}},[e("wired-button",{attrs:{elevation:"3"}},[t._v(" 下一页 ")])],1):t._e()])],2)},o=[];
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a="undefined"!==typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,h=(t,e,s=null)=>{while(e!==s){const s=e.nextSibling;t.removeChild(e),e=s}},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:h,values:{length:c}}=t;while(a<c){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)f(e[t].name,u)&&n++;while(n-- >0){const e=h[a],s=y.exec(e)[2],n=s.toLowerCase()+u,i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(d);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const n=t.parentNode,i=e.split(d),r=i.length-1;for(let e=0;e<r;e++){let s,r=i[e];if(""===r)s=g();else{const t=y.exec(r);null!==t&&f(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-u.length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===i[r]?(n.insertBefore(g(),t),s.push(t)):t.data=i[r],a+=r}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(g(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;while(-1!==(e=t.data.indexOf(l,e+1)))this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const l of s)l.parentNode.removeChild(l)}}const f=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,v=133;function w(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,v,null,!1);let r=b(n),o=n[r],a=-1,h=0;const l=[];let c=null;while(i.nextNode()){a++;const t=i.currentNode;t.previousSibling===c&&(c=null),e.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&h++;while(void 0!==o&&o.index===a)o.index=null!==c?-1:o.index-h,r=b(n,r),o=n[r]}l.forEach(t=>t.parentNode.removeChild(t))}const _=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,v,null,!1);while(s.nextNode())e++;return e},b=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};function S(t,e,s=null){const{element:{content:n},parts:i}=t;if(null===s||void 0===s)return void n.appendChild(e);const r=document.createTreeWalker(n,v,null,!1);let o=b(i),a=0,h=-1;while(r.nextNode()){h++;const t=r.currentNode;t===s&&(a=_(e),s.parentNode.insertBefore(e,s));while(-1!==o&&i[o].index===h){if(a>0){while(-1!==o)i[o].index+=a,o=b(i,o);return}o=b(i,o)}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=new WeakMap,P=t=>"function"===typeof t&&x.has(t),C={},M={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class R{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const t=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,r=0,o=0,h=n.nextNode();while(r<s.length)if(i=s[r],m(i)){while(o<i.index)o++,"TEMPLATE"===h.nodeName&&(e.push(h),n.currentNode=h.content),null===(h=n.nextNode())&&(n.currentNode=e.pop(),h=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return a&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),O=` ${l} `;class k{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const r=y.exec(t);e+=null===r?t+(s?O:c):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+l}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==N&&(e=N.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A=t=>null===t||!("object"===typeof t||"function"===typeof t),T=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new E(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"===typeof t)return String(t);if("string"===typeof t||!T(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(A(t)||!T(t))n+="string"===typeof t?t:String(t);else for(const e of t)n+="string"===typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===C||A(t)&&t===this.value||(this.value=t,P(t)||(this.committer.dirty=!0))}commit(){while(P(this.value)){const t=this.value;this.value=C,t(this)}this.value!==C&&this.committer.commit()}}class V{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;while(P(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=C,t(this)}const t=this.__pendingValue;t!==C&&(A(t)?t!==this.value&&this.__commitText(t):t instanceof k?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):T(t)?this.__commitIterable(t):t===M?(this.value=M,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t;const s="string"===typeof t?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof R&&this.value.template===e)this.value.update(t.values);else{const s=new R(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new V(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){h(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){while(P(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=C}}class L extends z{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new U(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class U extends E{}let q=!1;(()=>{try{const t={get capture(){return q=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class I{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){while(P(this.__pendingValue)){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=F(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=C}handleEvent(t){"function"===typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const F=t=>t&&(q?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(t){let e=H.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},H.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(l);return s=e.keyString.get(n),void 0===s&&(s=new p(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const H=new Map,W=new WeakMap,B=(t,e,s)=>{let n=W.get(e);void 0===n&&(h(e,e.firstChild),W.set(e,n=new V(Object.assign({templateFactory:$},s))),n.appendInto(e)),n.setValue(t),n.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class D{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){const n=new L(t,e.slice(1),s);return n.parts}if("@"===i)return[new I(t,e.slice(1),n.eventContext)];if("?"===i)return[new j(t,e.slice(1),s)];const r=new z(t,e,s);return r.parts}handleTextExpression(t){return new V(t)}}const J=new D;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!==typeof window&&(window["litHtmlVersions"]||(window["litHtmlVersions"]=[])).push("1.4.1");const G=(t,...e)=>new k(t,e,"html",J),X=(t,e)=>`${t}--${e}`;let K=!0;"undefined"===typeof window.ShadyCSS?K=!1:"undefined"===typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),K=!1);const Q=t=>e=>{const s=X(e.type,t);let n=H.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},H.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(l);if(i=n.keyString.get(r),void 0===i){const s=e.getTemplateElement();K&&window.ShadyCSS.prepareTemplateDom(s,t),i=new p(e,s),n.keyString.set(r,i)}return n.stringsArray.set(e.strings,i),i},Y=["html","svg"],Z=t=>{Y.forEach(e=>{const s=H.get(X(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),w(t,s)})})},tt=new Set,et=(t,e,s)=>{tt.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let l=0;l<r;l++){const t=i[l];t.parentNode.removeChild(t),o.textContent+=t.textContent}Z(t);const a=n.content;s?S(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),w(s,t)}},st=(t,e,s)=>{if(!s||"object"!==typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=W.has(e),r=K&&11===e.nodeType&&!!e.host,o=r&&!tt.has(n),a=o?document.createDocumentFragment():e;if(B(t,a,Object.assign({templateFactory:Q(n)},s)),o){const t=W.get(a);W.delete(a);const s=t.value instanceof R?t.value.template:void 0;et(n,a,s),h(e,e.firstChild),e.appendChild(a),W.set(e,t)}!i&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var nt;window.JSCompiler_renameProperty=(t,e)=>t;const it={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},rt=(t,e)=>e!==t&&(e===e||t===t),ot={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:rt},at=1,ht=4,lt=8,ct=16,dt="finalized";class ut extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=ot){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"===typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ot}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(dt)||t.finalize(),this[dt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"===typeof s?s:"string"===typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=rt){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||it,i="function"===typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter,i=n&&n.toAttribute||it.toAttribute;return i(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=ot){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|lt,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~lt}}_attributeToProperty(t,e){if(this._updateState&lt)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=this._updateState|ct,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~ct}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||this._updateState&ct||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ht;try{await this._updatePromise}catch(Lt){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ht}get hasUpdated(){return this._updateState&at}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(Lt){throw t=!1,this._markUpdated(),Lt}t&&(this._updateState&at||(this._updateState=this._updateState|at,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ht}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}nt=dt,ut[nt]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const pt=(t,e)=>(window.customElements.define(t,e),e),ft=(t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){window.customElements.define(t,e)}}},mt=t=>e=>"function"===typeof e?pt(t,e):ft(t,e),gt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"===typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},yt=(t,e,s)=>{e.constructor.createProperty(s,t)};function vt(t){return(e,s)=>void 0!==s?yt(t,e,s):gt(t,e)}function wt(t,e){return(s,n)=>{const i={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e=void 0!==n?n:s.key,r="symbol"===typeof e?Symbol():"__"+e;i.get=function(){return void 0===this[r]&&(this[r]=this.renderRoot.querySelector(t)),this[r]}}return void 0!==n?_t(i,s,n):bt(i,s)}}const _t=(t,e,s)=>{Object.defineProperty(e,s,t)},bt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});const St=Element.prototype;St.msMatchesSelector||St.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const xt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol();class Ct{constructor(t,e){if(e!==Pt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(xt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Mt=t=>new Ct(String(t),Pt),Rt=t=>{if(t instanceof Ct)return t.cssText;if("number"===typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},Nt=(t,...e)=>{const s=e.reduce((e,s,n)=>e+Rt(s)+t[n+1],t[0]);return new Ct(s,Pt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window["litElementVersions"]||(window["litElementVersions"]=[])).push("2.5.1");const Ot={};class kt extends ut{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!xt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return Mt(e)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?xt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Ot&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Ot}}kt["finalized"]=!0,kt.render=st,kt.shadowRootOptions={mode:"open"};var At=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},Tt=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};const zt=Nt`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class Et extends kt{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(t){this.wiredRender()}wiredRender(t=!1){if(this.svg){const e=this.canvasSize();if(!t&&e[0]===this.lastSize[0]&&e[1]===this.lastSize[1])return;while(this.svg.hasChildNodes())this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",""+e[0]),this.svg.setAttribute("height",""+e[1]),this.draw(this.svg,e),this.lastSize=e,this.classList.add("wired-rendered")}}}function Vt(t,e,s){if(t&&t.length){const[n,i]=e,r=Math.PI/180*s,o=Math.cos(r),a=Math.sin(r);t.forEach(t=>{const[e,s]=t;t[0]=(e-n)*o-(s-i)*a+n,t[1]=(e-n)*a+(s-i)*o+i})}}function jt(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function Lt(t,e,s,n){const i=e[1]-t[1],r=t[0]-e[0],o=i*t[0]+r*t[1],a=n[1]-s[1],h=s[0]-n[0],l=a*s[0]+h*s[1],c=i*h-a*r;return c?[(h*o-r*l)/c,(i*l-a*o)/c]:null}function Ut(t,e,s){const n=t.length;if(n<3)return!1;const i=[Number.MAX_SAFE_INTEGER,s],r=[e,s];let o=0;for(let a=0;a<n;a++){const e=t[a],s=t[(a+1)%n];if(Ft(e,s,r,i)){if(0===It(e,r,s))return qt(e,r,s);o++}}return o%2==1}function qt(t,e,s){return e[0]<=Math.max(t[0],s[0])&&e[0]>=Math.min(t[0],s[0])&&e[1]<=Math.max(t[1],s[1])&&e[1]>=Math.min(t[1],s[1])}function It(t,e,s){const n=(e[1]-t[1])*(s[0]-e[0])-(e[0]-t[0])*(s[1]-e[1]);return 0===n?0:n>0?1:2}function Ft(t,e,s,n){const i=It(t,e,s),r=It(t,e,n),o=It(s,n,t),a=It(s,n,e);return i!==r&&o!==a||!(0!==i||!qt(t,s,e))||!(0!==r||!qt(t,n,e))||!(0!==o||!qt(s,t,n))||!(0!==a||!qt(s,e,n))}function $t(t,e){const s=[0,0],n=Math.round(e.hachureAngle+90);n&&Vt(t,s,n);const i=function(t,e){const s=[...t];s[0].join(",")!==s[s.length-1].join(",")&&s.push([s[0][0],s[0][1]]);const n=[];if(s&&s.length>2){let t=e.hachureGap;t<0&&(t=4*e.strokeWidth),t=Math.max(t,.1);const i=[];for(let e=0;e<s.length-1;e++){const t=s[e],n=s[e+1];if(t[1]!==n[1]){const e=Math.min(t[1],n[1]);i.push({ymin:e,ymax:Math.max(t[1],n[1]),x:e===t[1]?t[0]:n[0],islope:(n[0]-t[0])/(n[1]-t[1])})}}if(i.sort((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax)),!i.length)return n;let r=[],o=i[0].ymin;for(;r.length||i.length;){if(i.length){let t=-1;for(let e=0;e<i.length&&!(i[e].ymin>o);e++)t=e;i.splice(0,t+1).forEach(t=>{r.push({s:o,edge:t})})}if(r=r.filter(t=>!(t.edge.ymax<=o)),r.sort((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x)),r.length>1)for(let t=0;t<r.length;t+=2){const e=t+1;if(e>=r.length)break;const s=r[t].edge,i=r[e].edge;n.push([[Math.round(s.x),o],[Math.round(i.x),o]])}o+=t,r.forEach(e=>{e.edge.x=e.edge.x+t*e.edge.islope})}}return n}(t,e);return n&&(Vt(t,s,-n),function(t,e,s){const n=[];t.forEach(t=>n.push(...t)),Vt(n,e,s)}(i,s,-n)),i}At([wt("svg"),Tt("design:type",SVGSVGElement)],Et.prototype,"svg",void 0);class Ht extends class{constructor(t){this.helper=t}fillPolygon(t,e){return this._fillPolygon(t,e)}_fillPolygon(t,e,s=!1){let n=$t(t,e);if(s){const e=this.connectingLines(t,n);n=n.concat(e)}return{type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}connectingLines(t,e){const s=[];if(e.length>1)for(let n=1;n<e.length;n++){const i=e[n-1];if(jt(i)<3)continue;const r=[e[n][0],i[1]];if(jt(r)>3){const e=this.splitOnIntersections(t,r);s.push(...e)}}return s}midPointInPolygon(t,e){return Ut(t,(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2)}splitOnIntersections(t,e){const s=Math.max(5,.1*jt(e)),n=[];for(let i=0;i<t.length;i++){const r=t[i],o=t[(i+1)%t.length];if(Ft(r,o,...e)){const t=Lt(r,o,e[0],e[1]);if(t){const i=jt([t,e[0]]),r=jt([t,e[1]]);i>s&&r>s&&n.push({point:t,distance:i})}}}if(n.length>1){const s=n.sort((t,e)=>t.distance-e.distance).map(t=>t.point);if(Ut(t,...e[0])||s.shift(),Ut(t,...e[1])||s.pop(),s.length<=1)return this.midPointInPolygon(t,e)?[e]:[];const i=[e[0],...s,e[1]],r=[];for(let e=0;e<i.length-1;e+=2){const s=[i[e],i[e+1]];this.midPointInPolygon(t,s)&&r.push(s)}return r}return this.midPointInPolygon(t,e)?[e]:[]}}{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}}class Wt{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function Bt(t,e,s,n,i){return{type:"path",ops:Yt(t,e,s,n,i)}}function Dt(t,e){return function(t,e,s){const n=(t||[]).length;if(n>2){const i=[];for(let e=0;e<n-1;e++)i.push(...Yt(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&i.push(...Yt(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:i}}return 2===n?Bt(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}(t,!0,e)}function Jt(t,e,s,n,i){return function(t,e,s,n){const[i,r]=ee(n.increment,t,e,n.rx,n.ry,1,n.increment*Kt(.1,Kt(.4,1,s),s),s);let o=te(i,null,s);if(!s.disableMultiStroke){const[i]=ee(n.increment,t,e,n.rx,n.ry,1.5,0,s),r=te(i,null,s);o=o.concat(r)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}(t,e,i,Gt(s,n,i)).opset}function Gt(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),i=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),r=2*Math.PI/i;let o=Math.abs(t/2),a=Math.abs(e/2);const h=1-s.curveFitting;return o+=Qt(o*h,s),a+=Qt(a*h,s),{increment:r,rx:o,ry:a}}function Xt(t){return t.randomizer||(t.randomizer=new Wt(t.seed||0)),t.randomizer.next()}function Kt(t,e,s,n=1){return s.roughness*n*(Xt(s)*(e-t)+t)}function Qt(t,e,s=1){return Kt(-t,t,e,s)}function Yt(t,e,s,n,i,r=!1){const o=r?i.disableMultiStrokeFill:i.disableMultiStroke,a=Zt(t,e,s,n,i,!0,!1);if(o)return a;const h=Zt(t,e,s,n,i,!0,!0);return a.concat(h)}function Zt(t,e,s,n,i,r,o){const a=Math.pow(t-s,2)+Math.pow(e-n,2),h=Math.sqrt(a);let l=1;l=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=i.maxRandomnessOffset||0;c*c*100>a&&(c=h/10);const d=c/2,u=.2+.2*Xt(i);let p=i.bowing*i.maxRandomnessOffset*(n-e)/200,f=i.bowing*i.maxRandomnessOffset*(t-s)/200;p=Qt(p,i,l),f=Qt(f,i,l);const m=[],g=()=>Qt(d,i,l),y=()=>Qt(c,i,l);return r&&(o?m.push({op:"move",data:[t+g(),e+g()]}):m.push({op:"move",data:[t+Qt(c,i,l),e+Qt(c,i,l)]})),o?m.push({op:"bcurveTo",data:[p+t+(s-t)*u+g(),f+e+(n-e)*u+g(),p+t+2*(s-t)*u+g(),f+e+2*(n-e)*u+g(),s+g(),n+g()]}):m.push({op:"bcurveTo",data:[p+t+(s-t)*u+y(),f+e+(n-e)*u+y(),p+t+2*(s-t)*u+y(),f+e+2*(n-e)*u+y(),s+y(),n+y()]}),m}function te(t,e,s){const n=t.length,i=[];if(n>3){const r=[],o=1-s.curveTightness;i.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];r[0]=[s[0],s[1]],r[1]=[s[0]+(o*t[e+1][0]-o*t[e-1][0])/6,s[1]+(o*t[e+1][1]-o*t[e-1][1])/6],r[2]=[t[e+1][0]+(o*t[e][0]-o*t[e+2][0])/6,t[e+1][1]+(o*t[e][1]-o*t[e+2][1])/6],r[3]=[t[e+1][0],t[e+1][1]],i.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;i.push({op:"lineTo",data:[e[0]+Qt(t,s),e[1]+Qt(t,s)]})}}else 3===n?(i.push({op:"move",data:[t[1][0],t[1][1]]}),i.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&i.push(...Yt(t[0][0],t[0][1],t[1][0],t[1][1],s));return i}function ee(t,e,s,n,i,r,o,a){const h=[],l=[],c=Qt(.5,a)-Math.PI/2;l.push([Qt(r,a)+e+.9*n*Math.cos(c-t),Qt(r,a)+s+.9*i*Math.sin(c-t)]);for(let d=c;d<2*Math.PI+c-.01;d+=t){const t=[Qt(r,a)+e+n*Math.cos(d),Qt(r,a)+s+i*Math.sin(d)];h.push(t),l.push(t)}return l.push([Qt(r,a)+e+n*Math.cos(c+2*Math.PI+.5*o),Qt(r,a)+s+i*Math.sin(c+2*Math.PI+.5*o)]),l.push([Qt(r,a)+e+.98*n*Math.cos(c+o),Qt(r,a)+s+.98*i*Math.sin(c+o)]),l.push([Qt(r,a)+e+.9*n*Math.cos(c+.5*o),Qt(r,a)+s+.9*i*Math.sin(c+.5*o)]),[l,h]}const se={randOffset:(t,e)=>t,randOffsetWithRange:(t,e,s)=>(t+e)/2,ellipse:(t,e,s,n,i)=>Jt(t,e,s,n,i),doubleLineOps:(t,e,s,n,i)=>function(t,e,s,n,i){return Yt(t,e,s,n,i,!0)}(t,e,s,n,i)};function ne(t){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:t}}function ie(t,e){let s="";for(const n of t.ops){const t=n.data;switch(n.op){case"move":if(e&&s)break;s+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":s+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":s+=`L${t[0]} ${t[1]} `}}return s.trim()}function re(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg",t);if(e)for(const n in e)s.setAttributeNS(null,n,e[n]);return s}function oe(t,e,s=!1){const n=re("path",{d:ie(t,s)});return e&&e.appendChild(n),n}function ae(t,e,s,n,i,r){return oe(function(t,e,s,n,i){return Dt([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],i)}(e+2,s+2,n-4,i-4,ne(r)),t)}function he(t,e,s,n,i,r){return oe(Bt(e,s,n,i,ne(r)),t)}function le(t,e){return oe(new Ht(se).fillPolygon(t,ne(e)),null)}var ce=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},de=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let ue=class extends Et{constructor(){super(),this.elevation=1,this.disabled=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[zt,Nt`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return G`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const t=this.button.getBoundingClientRect(),e=Math.min(Math.max(1,this.elevation),5),s=t.width+2*(e-1),n=t.height+2*(e-1);return[s,n]}return this.lastSize}draw(t,e){const s=Math.min(Math.max(1,this.elevation),5),n={width:e[0]-2*(s-1),height:e[1]-2*(s-1)};ae(t,0,0,n.width,n.height,this.seed);for(let i=1;i<s;i++)he(t,2*i,n.height+2*i,n.width+2*i,n.height+2*i,this.seed).style.opacity=""+(75-10*i)/100,he(t,n.width+2*i,n.height+2*i,n.width+2*i,2*i,this.seed).style.opacity=""+(75-10*i)/100,he(t,2*i,n.height+2*i,n.width+2*i,n.height+2*i,this.seed).style.opacity=""+(75-10*i)/100,he(t,n.width+2*i,n.height+2*i,n.width+2*i,2*i,this.seed).style.opacity=""+(75-10*i)/100}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.observe&&this.resizeObserver.observe(this.button)}detachResizeListener(){this.button&&this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this.button)}};ce([vt({type:Number}),de("design:type",Object)],ue.prototype,"elevation",void 0),ce([vt({type:Boolean,reflect:!0}),de("design:type",Object)],ue.prototype,"disabled",void 0),ce([wt("button"),de("design:type",HTMLButtonElement)],ue.prototype,"button",void 0),ue=ce([mt("wired-button"),de("design:paramtypes",[])],ue);var pe=function(t,e,s,n){var i,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,s,o):i(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},fe=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends Et{constructor(){super(),this.elevation=1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[zt,Nt`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return G`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(t){const e=t.has("fill");this.wiredRender(e),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const t=this.getBoundingClientRect(),e=Math.min(Math.max(1,this.elevation),5),s=t.width+2*(e-1),n=t.height+2*(e-1);return[s,n]}draw(t,e){const s=Math.min(Math.max(1,this.elevation),5),n={width:e[0]-2*(s-1),height:e[1]-2*(s-1)};if(this.fill&&this.fill.trim()){const e=le([[2,2],[n.width-4,2],[n.width-2,n.height-4],[2,n.height-4]],this.seed);e.classList.add("cardFill"),t.style.setProperty("--wired-card-background-fill",this.fill.trim()),t.appendChild(e)}ae(t,2,2,n.width-4,n.height-4,this.seed);for(let i=1;i<s;i++)he(t,2*i,n.height-4+2*i,n.width-4+2*i,n.height-4+2*i,this.seed).style.opacity=""+(85-10*i)/100,he(t,n.width-4+2*i,n.height-4+2*i,n.width-4+2*i,2*i,this.seed).style.opacity=""+(85-10*i)/100,he(t,2*i,n.height-4+2*i,n.width-4+2*i,n.height-4+2*i,this.seed).style.opacity=""+(85-10*i)/100,he(t,n.width-4+2*i,n.height-4+2*i,n.width-4+2*i,2*i,this.seed).style.opacity=""+(85-10*i)/100}};pe([vt({type:Number}),fe("design:type",Object)],me.prototype,"elevation",void 0),pe([vt({type:String}),fe("design:type",String)],me.prototype,"fill",void 0),me=pe([mt("wired-card"),fe("design:paramtypes",[])],me);s("c619");const ge=(t,e)=>{const s=[],n=t.length;for(let i=0,r=0;i<n;i++)"\n"!==t[i]&&"\r"!==t[i]&&i!==n-1||(s.push(t.substr(r,i)),r=i);return s},ye=(t,e=15)=>{let s="";const n=Math.ceil(t.length/e);for(var i=0;i<n;i++)s+=t.substring(i*e,(i+1)*e)+"||";return s};var ve=(t,e)=>{if(t){const s=[],n=ge(t);n.forEach(t=>{s.push(ye(t,e))});const i=s.join("").split("||");return i.pop(),i}return""},we={name:"Card",components:{WiredButton:void 0,WiredCard:void 0},data(){return{currentPage:0,content:[],loveLetter:"我爱你~猪猪大宝贝~这是我第一次写情书，也不知道能否称之为情书，高考作文都靠背作文书的我，确实不太擅长这方面。想想我们都已经订婚一个月了，时间真的好快，马上就要领证了，有可能当你看见这封信的时候，我们都已经领好证了，能跟你在一起真的好开心好幸福。你知道吗？你笑起来真的很好看，笑声也很好听，你在我眼里真的好美。第一次看见你还是在去年的五月二十号，一向胆小内向的我，从玻璃窗外看着里面静静坐着的你，不知是何勇气，一步步走向你，月老的红线再一次将我们牵在一起。我们一起牵手相拥相吻，一切看起来是那么的顺其自然，其实那是我们双向奔赴的爱情。我们在一起的日子里，见不到你的时候会很想你，看见你的时候会很开心，不舍得和你分开。还记得去年夏天每天都想和你一起散步，就为每天可以见到你。我们一起去看日出日落，你送的情侣照，被我一直珍藏在钱包里。写到这里，我突然陷入了回忆，当时疫情我在你家发高烧，得了新冠，你没有让我一个人回家，反而把我留下来悉心照顾我，给我煮红糖姜茶，还自制退烧贴给我降温。晚上你睡在我的旁边，虽然身体很难受，但一想到你在我身边，心里就暖暖的，当时就想着今生很幸运能遇见你爱上你。我一定要娶你，我未来的新娘一定是你，也只能是你。一想到这个梦想马上就要实现了，就很兴奋很激动，到时候我就可以向全世界宣布你是我的老婆啦，合法滴！想到这儿，现在就好想抱住你，贴在你的耳边说“老婆~我爱你~”。你让我懂得了最浪漫的爱是慢慢靠近你，慢慢喜欢你，慢慢爱上你，慢慢陪伴你。陪伴是最长情的告白，无论发生什么，我都会一直在你身边，珍惜你爱护你。写着写着有点想哭，可能是想到我们一起在江边散步，一起看电影，一起玩游戏，一起拍照，一起追剧等等很多幸福温馨的画面。可能是我自身不够好，还有点笨，希望你可以给我多一点耐心，我会努力做好的，相信我，也相信你自己的眼光一点也不差，我会给你想要的幸福和安全感。我爱你~我滴猪猪大宝贝~"}},mounted(){this.initContent()},methods:{initContent(){this.content=[this.loveLetter];const t=.6*document.body.clientHeight-20,e=Math.floor(t/25),s=.9*document.body.clientWidth-20,n=Math.floor(s/20);this.content=ve(this.loveLetter,e*n)},prev(){this.currentPage--},next(){this.currentPage++}}},_e=we,be=(s("e567"),s("e607")),Se=Object(be["a"])(_e,r,o,!1,null,null,null),xe=Se.exports,Pe=s("b794"),Ce={particles:{length:500,duration:2,velocity:100,effect:-.6,size:28}};(function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[e[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[s]+"CancelAnimationFrame"]||window[e[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,s){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),r=window.setTimeout((function(){e(n+i)}),i);return t=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})})();var Me=function(){function t(t,e){this.x="undefined"!==typeof t?t:0,this.y="undefined"!==typeof e?e:0}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.length=function(t){return"undefined"==typeof t?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=t,this.y*=t,this)},t.prototype.normalize=function(){var t=this.length();return this.x/=t,this.y/=t,this},t}(),Re=function(){function t(){this.position=new Me,this.velocity=new Me,this.acceleration=new Me,this.age=0}return t.prototype.initialize=function(t,e,s,n){this.position.x=t,this.position.y=e,this.velocity.x=s,this.velocity.y=n,this.acceleration.x=s*Ce.particles.effect,this.acceleration.y=n*Ce.particles.effect,this.age=0},t.prototype.update=function(t){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.age+=t},t.prototype.draw=function(t,e){function s(t){return--t*t*t+1}var n=e.width*s(this.age/Ce.particles.duration);t.globalAlpha=1-this.age/Ce.particles.duration,t.drawImage(e,this.position.x-n/2,this.position.y-n/2,n,n)},t}();(function(){var t,e=0,s=0,n=Ce.particles.duration;function i(e){t=new Array(e);for(var s=0;s<t.length;s++)t[s]=new Re}i.prototype.add=function(n,i,r,o){t[s].initialize(n,i,r,o),s++,s==t.length&&(s=0),e==s&&e++,e==t.length&&(e=0)},i.prototype.update=function(i){var r;if(e<s)for(r=e;r<s;r++)t[r].update(i);if(s<e){for(r=e;r<t.length;r++)t[r].update(i);for(r=0;r<s;r++)t[r].update(i)}while(t[e].age>=n&&e!=s)e++,e==t.length&&(e=0)},i.prototype.draw=function(n,i){var r;if(e<s)for(r=e;r<s;r++)t[r].draw(n,i);if(s<e){for(r=e;r<t.length;r++)t[r].draw(n,i);for(r=0;r<s;r++)t[r].draw(n,i)}}})();var Ne={name:"Home",components:{Card:xe},data(){return{open:!0}},mounted(){this.$refs.mail&&Object(Pe["b"])(this.$refs.mail)},methods:{openAction(){this.open=!1}}},Oe=Ne,ke=(s("29d7"),Object(be["a"])(Oe,n,i,!1,null,null,null));e["default"]=ke.exports},e567:function(t,e,s){"use strict";s("3c05")},e67f:function(t,e,s){}}]);