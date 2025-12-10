(function(m,_){typeof exports=="object"&&typeof module<"u"?_(exports):typeof define=="function"&&define.amd?define(["exports"],_):(m=typeof globalThis<"u"?globalThis:m||self,_(m.EmployeeDetailsWidget={}))})(this,function(m){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;const _=globalThis,q=_.ShadowRoot&&(_.ShadyCSS===void 0||_.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ne=new WeakMap;let oe=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ne.set(t,e))}return e}toString(){return this.cssText}};const Te=r=>new oe(typeof r=="string"?r:r+"",void 0,J),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new oe(t,r,J)},Ue=(r,e)=>{if(q)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=_.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},le=q?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Te(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oe,defineProperty:Ne,getOwnPropertyDescriptor:ze,getOwnPropertyNames:He,getOwnPropertySymbols:De,getPrototypeOf:Le}=Object,y=globalThis,ae=y.trustedTypes,Re=ae?ae.emptyScript:"",G=y.reactiveElementPolyfillSupport,N=(r,e)=>r,I={toAttribute(r,e){switch(e){case Boolean:r=r?Re:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Z=(r,e)=>!Oe(r,e),ce={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ne(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=ze(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=Le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...He(t),...De(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(le(i))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:I).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:I;this._$Em=i;const h=l.fromAttribute(t,a.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const o=this.constructor,n=this[e];if(s??(s=o.getPropertyOptions(e)),!((s.hasChanged??Z)(n,t)||s.useDefault&&s.reflect&&n===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[N("elementProperties")]=new Map,P[N("finalized")]=new Map,G==null||G({ReactiveElement:P}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,W=z.trustedTypes,he=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+v,ke=`<${pe}>`,w=document,H=()=>w.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",K=Array.isArray,je=r=>K(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,fe=/>/g,E=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,me=/"/g,ge=/^(?:script|style|textarea|title)$/i,Be=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),S=Be(1),A=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),_e=new WeakMap,x=w.createTreeWalker(w,129);function ye(r,e){if(!K(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const Ie=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=L;for(let a=0;a<t;a++){const l=r[a];let h,u,c=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===L?u[1]==="!--"?n=ue:u[1]!==void 0?n=fe:u[2]!==void 0?(ge.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=E):u[3]!==void 0&&(n=E):n===E?u[0]===">"?(n=i??L,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?E:u[3]==='"'?me:$e):n===me||n===$e?n=E:n===ue||n===fe?n=L:(n=E,i=void 0);const d=n===E&&r[a+1].startsWith("/>")?" ":"";o+=n===L?l+ke:c>=0?(s.push(h),l.slice(0,c)+de+l.slice(c)+v+d):l+v+(c===-2?a:d)}return[ye(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class R{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[h,u]=Ie(e,t);if(this.el=R.createElement(h,s),x.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(de)){const p=u[n++],d=i.getAttribute(c).split(v),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:$[2],strings:d,ctor:$[1]==="."?Fe:$[1]==="?"?Ve:$[1]==="@"?qe:F}),i.removeAttribute(c)}else c.startsWith(v)&&(l.push({type:6,index:o}),i.removeAttribute(c));if(ge.test(i.tagName)){const c=i.textContent.split(v),p=c.length-1;if(p>0){i.textContent=W?W.emptyScript:"";for(let d=0;d<p;d++)i.append(c[d],H()),x.nextNode(),l.push({type:2,index:++o});i.append(c[p],H())}}}else if(i.nodeType===8)if(i.data===pe)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function T(r,e,t=r,s){var n,a;if(e===A)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=D(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=T(r,i._$AS(r,e.values),i,s)),e}let We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let o=x.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new U(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new Je(o,this,e)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=x.nextNode(),n++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=T(this,e,t),D(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=R.createElement(ye(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new We(i,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new R(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new U(this.O(H()),this.O(H()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=T(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const a=e;let l,h;for(e=o[0],l=0;l<o.length-1;l++)h=T(this,a[s+l],t,l),h===A&&(h=this._$AH[l]),n||(n=!D(h)||h!==this._$AH[l]),h===f?e=f:e!==f&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Fe extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ve extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class qe extends F{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??f)===A)return;const s=this._$AH,i=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Je{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}const Ge={I:U},Y=z.litHtmlPolyfillSupport;Y==null||Y(R,U),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.3.1");const Ze=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new U(e.insertBefore(H(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;let O=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}};O._$litElement$=!0,O.finalized=!0,(Me=C.litElementHydrateSupport)==null||Me.call(C,{LitElement:O});const X=C.litElementPolyfillSupport;X==null||X({LitElement:O}),(C.litElementVersions??(C.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:Z},Qe=(r=Ke,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,r)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(s==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,r)}}throw Error("Unsupported decorator location: "+s)};function k(r){return(e,t)=>typeof t=="object"?Qe(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae={CHILD:2},be=r=>(...e)=>({_$litDirective$:r,values:e});class we{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ye}=Ge,Ee=()=>document.createComment(""),j=(r,e,t)=>{var o;const s=r._$AA.parentNode,i=e===void 0?r._$AB:e._$AA;if(t===void 0){const n=s.insertBefore(Ee(),i),a=s.insertBefore(Ee(),i);t=new Ye(n,a,r,r.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let h;(o=t._$AQ)==null||o.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==a._$AU&&t._$AP(h)}if(n!==i||l){let h=t._$AA;for(;h!==n;){const u=h.nextSibling;s.insertBefore(h,i),h=u}}}return t},M=(r,e,t=r)=>(r._$AI(e,t),r),Xe={},et=(r,e=Xe)=>r._$AH=e,tt=r=>r._$AH,ee=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=(r,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(r[i],i);return s},it=be(class extends we{constructor(r){if(super(r),r.type!==Ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],o=[];let n=0;for(const a of r)i[n]=s?s(a,n):n,o[n]=t(a,n),n++;return{values:o,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,s]){const i=tt(r),{values:o,keys:n}=this.dt(e,t,s);if(!Array.isArray(i))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let h,u,c=0,p=i.length-1,d=0,$=o.length-1;for(;c<=p&&d<=$;)if(i[c]===null)c++;else if(i[p]===null)p--;else if(a[c]===n[d])l[d]=M(i[c],o[d]),c++,d++;else if(a[p]===n[$])l[$]=M(i[p],o[$]),p--,$--;else if(a[c]===n[$])l[$]=M(i[c],o[$]),j(r,l[$+1],i[c]),c++,$--;else if(a[p]===n[d])l[d]=M(i[p],o[d]),j(r,i[c],i[p]),p--,d++;else if(h===void 0&&(h=Se(n,d,$),u=Se(a,c,p)),h.has(a[c]))if(h.has(a[p])){const g=u.get(n[d]),re=g!==void 0?i[g]:null;if(re===null){const Pe=j(r,i[c]);M(Pe,o[d]),l[d]=Pe}else l[d]=M(re,o[d]),j(r,i[c],re),i[g]=null;d++}else ee(i[p]),p--;else ee(i[c]),c++;for(;d<=$;){const g=j(r,l[$+1]);M(g,o[d]),l[d++]=g}for(;c<=p;){const g=i[c++];g!==null&&ee(g)}return this.ut=n,et(r,l),A}}),xe=b`
  :host {
    display: block;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`,Ce=b`
  :host {
    /* Brand */
    --c-primary: #4F46E5;       /* Tailwind Indigo-600 */
    --c-primary-dark: #4338ca; 
    
    /* Neutrals */
    --c-gray-500: #6b7280;      /* Muted Text */
    --c-gray-900: #111827;      /* Main Text */
    --c-border: #e5e7eb;
  }

  /* Utility classes if you need them in HTML */
  .text-primary { color: var(--c-primary); }
  .text-gray-900 { color: var(--c-gray-900); }
  .text-gray-500 { color: var(--c-gray-500); }
`,st=b`
  :host {
    --font-family: system-ui, -apple-system, sans-serif;
    
    /* Specific sizes from your previous Tailwind classes */
    --fs-xs: 11px;  /* text-[11px] */
    --fs-sm: 14px;
    --fs-md: 15px;  /* text-[15px] */
    
    --fw-medium: 500;
  }

  .uppercase { 
    text-transform: uppercase; 
    letter-spacing: 0.025em; /* tracking-wide */
  }
`,rt=b`
  :host {
    --gap-sm: 12px; /* gap-3 */
    --gap-lg: 24px; /* gap-6 */
  }
`,nt=b`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,ot=[xe,Ce,nt];var lt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,te=(r,e,t,s)=>{for(var i=s>1?void 0:s?at(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&lt(e,t,i),i};let B=class extends O{constructor(){super(...arguments),this.fields=[],this.columns=2}getIconTemplate(r){return r.iconTemplate?r.iconTemplate:null}render(){return!this.fields||this.fields.length===0?S`<p class="no-data">No data available.</p>`:S`
      <div class="grid-layout" style="--cols: ${this.columns}">
        ${it(this.fields,(r,e)=>r.label??`${e}`,r=>{const e=this.getIconTemplate(r);return S`
              <div class="field-row">
                
                ${e?S`<div class="icon-wrapper">${e}</div>`:""}

                <div class="flex flex-col ${e?"":"ml-0"}">
                  <div class="label">
                    ${r.label}
                  </div>
                  <div class="value ${r.highlight?"highlight":""}">
                    ${r.title}
                  </div>
                </div>
              </div>
            `})}
      </div>
    `}};B.styles=[xe,Ce,st,rt,b`
      /* 1. Grid Container */
      .grid-layout {
        display: grid;
        gap: var(--gap-lg);
        /* Default to 1 column (mobile) */
        grid-template-columns: 1fr;
      }

      /* Desktop Columns Handling */
      @media (min-width: 768px) {
        .grid-layout {
          /* Use CSS var passed from style attribute or default to 2 */
          grid-template-columns: repeat(var(--cols, 2), 1fr);
        }
      }

      /* 2. Field Row */
      .field-row {
        display: flex;
        align-items: flex-start;
        gap: var(--gap-sm);
      }

      /* 3. Icon Container (Wrapper for SVG) */
      .icon-wrapper {
        margin-top: 4px; /* mt-1 */
        color: var(--c-primary);
        display: inline-block;
        /* Size for w-3 h-3 (12px) */
        width: 12px;
        height: 12px;
      }

      /* 4. Text Styling */
      .label {
        font-size: var(--fs-xs);
        color: var(--c-gray-500);
        text-transform: uppercase;
        letter-spacing: 0.025em; /* tracking-wide */
        line-height: 1.4;
      }

      .value {
        font-size: var(--fs-md);
        color: var(--c-gray-900);
        line-height: 1.4;
      }

      .highlight {
        color: var(--c-primary);
        font-weight: var(--fw-medium);
      }
      
      /* Helper for no data */
      .no-data {
        color: var(--c-gray-500);
        font-size: var(--fs-sm);
      }
    `],te([k({type:Array,attribute:!1})],B.prototype,"fields",2),te([k({type:Number})],B.prototype,"columns",2),B=te([ve("field-list-widget")],B);/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var ct={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},ht={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},dt={prefix:"fas",iconName:"mobile",icon:[384,512,[128241,"mobile-android","mobile-phone"],"f3ce","M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},pt={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},ut={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},ft={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},$t={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},mt={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},gt={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ie extends we{constructor(e){if(super(e),this.it=f,e.type!==Ae.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===A)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ie.directiveName="unsafeHTML",ie.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends ie{}se.directiveName="unsafeSVG",se.resultType=2;const _t=be(se),yt=(r,e="")=>{if(!r||!r.icon)return S``;const t=r.icon[0],s=r.icon[1],i=r.icon[4],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${s}" fill="currentColor" aria-hidden="true"><path d="${i}"/></svg>`;return S`<span class="${e} inline-block">${_t(o)}</span>`};var vt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,V=(r,e,t,s)=>{for(var i=s>1?void 0:s?At(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&vt(e,t,i),i};const bt=[{label:"Manager",title:"Maria Thompson",icon:"user",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"map-pin"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"phone"},{label:"Job Title",title:"Forklift Operator",icon:"briefcase"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"calendar"},{label:"Department",title:"Warehouse Operations",icon:"building"},{label:"Email",title:"james.davis@nova.com",icon:"envelope",highlight:!0},{label:"Nickname",title:"JD",icon:"tag"}];m.EmployeeDetailsWidget=class extends O{constructor(){super(...arguments),this.headerTitle="Employee details",this.fields=bt,this.columns=2}getIconFromString(e){const t={user:ft,"map-pin":ct,phone:$t,briefcase:gt,calendar:ut,building:pt,envelope:ht,tag:mt,mobile:dt},s=t[e];return s||(console.warn(`[employee-details-widget] Unknown icon "${e}", defaulting to "user".`),t.user)}render(){const e=this.fields.map(t=>{const s=this.getIconFromString(t.icon);return{...t,iconTemplate:yt(s,"svg-icon-inner")}});return S`
      <section role="region" aria-label=${this.headerTitle}>
        <h2 class="sr-only">${this.headerTitle}</h2>
        <field-list-widget
          .fields=${e}
          .columns=${this.columns}
        ></field-list-widget>
      </section>
    `}},m.EmployeeDetailsWidget.styles=[ot,b`
      :host {
        display: block;
        width: 100%;
        /* You can override the primary color here specifically for this widget if needed */
        /* --c-primary: #8200DB; */
      }

      section {
        width: 100%;
        display: block;
        font-family: var(--font-family, sans-serif);
      }
    `],V([k({type:String})],m.EmployeeDetailsWidget.prototype,"headerTitle",2),V([k({type:Array})],m.EmployeeDetailsWidget.prototype,"fields",2),V([k({type:Number})],m.EmployeeDetailsWidget.prototype,"columns",2),m.EmployeeDetailsWidget=V([ve("employee-details-widget")],m.EmployeeDetailsWidget),Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
