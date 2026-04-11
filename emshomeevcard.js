!function(){"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",_=u.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,_?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,E=x.trustedTypes,w=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,M=document,z=()=>M.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,O=/>/g,T=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=M.createTreeWalker(M,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===R?"!--"===c[1]?o=V:void 0!==c[1]?o=O:void 0!==c[2]?(I.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=T):void 0!==c[3]&&(o=T):o===T?">"===c[0]?(o=r??R,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?T:'"'===c[3]?D:L):o===D||o===L?o=T:o===V||o===O?o=R:(o=T,r=void 0);const d=o===T&&t[e+1].startsWith("/>")?" ":"";n+=o===R?i+k:h>=0?(s.push(a),i.slice(0,h)+S+i.slice(h)+C+d):i+C+(-2===h?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=K(t,e);if(this.el=Q.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=h[n++],i=s.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),W.nextNode(),a.push({type:2,index:++r});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===j)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=H(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);W.currentNode=s;let r=W.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=W.nextNode(),n++)}return W.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),H(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,s[i+o],e,o),a===j&&(a=this._$AH[o]),n||=!H(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends Y{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===j)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(Q,X),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new X(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ct={en:{card:{title:"EV Charger",power:"Power",speed:"Speed",remaining:"Remaining",watts:"W",kmh:"km/h",minutes:"min",mode:"Charging mode",hybridMix:"PV / Grid mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Grid",serviceError:"Service call failed. See browser console for details."},modes:{lock:"Do not charge",grid:"Grid",pv:"PV surplus",hybrid:"Hybrid"},editor:{title:"EV Charger Card configuration",cardTitle:"Card title",language:"Language",imageUrl:"Image URL",chargingModeEntity:"Charging mode entity",powerEntity:"Power entity",pvQuotaEntity:"PV quota entity",speedEntity:"Speed entity (optional)",remainingEntity:"Remaining time entity (optional)",entities:"Entities",appearance:"Appearance",languageAuto:"Auto (Home Assistant language)",languageEn:"English",languageDe:"German"}},de:{card:{title:"EV-Ladestation",power:"Leistung",speed:"Geschwindigkeit",remaining:"Verbleibend",watts:"W",kmh:"km/h",minutes:"Min",mode:"Lademodus",hybridMix:"PV-/Netz-Mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Netz",serviceError:"Service-Aufruf fehlgeschlagen. Details in der Browser-Konsole."},modes:{lock:"Nicht laden",grid:"Netz",pv:"PV-Überschuss",hybrid:"Hybrid"},editor:{title:"EV Charger Card Konfiguration",cardTitle:"Kartentitel",language:"Sprache",imageUrl:"Bild-URL",chargingModeEntity:"Entity für Lademodus",powerEntity:"Entity für Leistung",pvQuotaEntity:"Entity für PV-Anteil",speedEntity:"Entity für Geschwindigkeit (optional)",remainingEntity:"Entity für Restzeit (optional)",entities:"Entitäten",appearance:"Darstellung",languageAuto:"Auto (Home Assistant Sprache)",languageEn:"Englisch",languageDe:"Deutsch"}}};function ht(t,e){return e.split(".").reduce((t,e)=>t?t[e]:void 0,t)}function lt(t,e){if("en"===e||"de"===e)return e;return String(t?.locale?.language||t?.language||"en").toLowerCase().startsWith("de")?"de":"en"}function dt(t,e){return ht(ct[t]||ct.en,e)||ht(ct.en,e)||e}customElements.define("ev-charger-editor",class extends ot{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={title:"",language:"auto",image_url:"",charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:"",...t}}_lang(){return lt(this.hass,this._config?.language)}_text(t){return dt(this._lang(),t)}_onInputChanged(t){if(!this._config)return;const e=t.target,i=e.configValue,s=t.detail?.value??e.value;if(!i)return;const r={...this._config,[i]:s};this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}_onLanguageChanged(t){this._onInputChanged({target:{configValue:"language",value:t.target.value}})}_renderEntityPicker(t,e){return B`
      <ha-textfield
        .label=${e}
        .value=${this._config?.[t]||""}
        .configValue=${t}
        @change=${this._onInputChanged}
      ></ha-textfield>
    `}render(){return this.hass&&this._config?B`
      <div class="editor">
        <h3>${this._text("editor.title")}</h3>
        <section>
          <h4>${this._text("editor.entities")}</h4>
          ${this._renderEntityPicker("charging_mode_entity",this._text("editor.chargingModeEntity"))}
          ${this._renderEntityPicker("power_entity",this._text("editor.powerEntity"))}
          ${this._renderEntityPicker("pv_quota_entity",this._text("editor.pvQuotaEntity"))}
          ${this._renderEntityPicker("speed_entity",this._text("editor.speedEntity"))}
          ${this._renderEntityPicker("remaining_entity",this._text("editor.remainingEntity"))}
        </section>
        <section>
          <h4>${this._text("editor.appearance")}</h4>
          <ha-textfield
            .label=${this._text("editor.cardTitle")}
            .value=${this._config.title||""}
            .configValue=${"title"}
            @change=${this._onInputChanged}
          ></ha-textfield>
          <ha-textfield
            .label=${this._text("editor.imageUrl")}
            .value=${this._config.image_url||""}
            .configValue=${"image_url"}
            @change=${this._onInputChanged}
          ></ha-textfield>
          <label class="select-label">${this._text("editor.language")}</label>
          <select class="lang-select" @change=${this._onLanguageChanged}>
            <option value="auto" ?selected=${"auto"===(this._config.language||"auto")}>${this._text("editor.languageAuto")}</option>
            <option value="en" ?selected=${"en"===this._config.language}>${this._text("editor.languageEn")}</option>
            <option value="de" ?selected=${"de"===this._config.language}>${this._text("editor.languageDe")}</option>
          </select>
        </section>
      </div>
    `:B``}static get styles(){return n`
      .editor {
        display: grid;
        gap: 16px;
        padding: 12px 8px 4px;
        font-family: var(--md-sys-typescale-body-medium-font, Roboto, sans-serif);
      }

      h3 {
        margin: 0 0 4px;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        color: var(--md-sys-color-on-surface, var(--primary-text-color));
      }

      h4 {
        margin: 0 0 2px;
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--md-sys-color-primary, var(--primary-color));
      }

      section {
        display: grid;
        gap: 10px;
        border: 1px solid var(--md-sys-color-outline-variant, var(--divider-color));
        border-radius: 12px;
        padding: 14px 12px;
        background: var(--md-sys-color-surface-container-low, var(--card-background-color));
      }

      ha-textfield,
      ha-select,
      ha-entity-picker {
        width: 100%;
      }

      .select-label {
        display: block;
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      .lang-select {
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 0.9375rem;
        font-family: inherit;
        cursor: pointer;
        outline: none;
      }

      .lang-select:focus {
        border-color: var(--primary-color);
      }
    `}});const pt="https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png",ut=["lock","grid","pv","hybrid"],gt={lock:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",grid:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z",pv:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z",hybrid:"M7 2v11h3v9l7-12h-4l4-8z"};class mt extends ot{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"EV Charger",language:"auto",image_url:pt,charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:""}}static getConfigElement(){return document.createElement("ev-charger-editor")}setConfig(t){this.config={...mt.getStubConfig(),...t,image_url:t.image_url||pt}}getCardSize(){return 4}_lang(){return lt(this.hass,this.config?.language)}_text(t){return dt(this._lang(),t)}_state(t,e=""){return this.hass?.states?.[t]?.state??e}_numberState(t,e=0){const i=Number(this._state(t,e));return Number.isFinite(i)?i:e}_formatNumber(t,e=0){return new Intl.NumberFormat(this._lang(),{minimumFractionDigits:e,maximumFractionDigits:e}).format(t)}_hasRequiredConfig(){return Boolean(this.config?.charging_mode_entity&&this.config?.power_entity&&this.config?.pv_quota_entity)}async _setChargingMode(t){const e=this._numberState(this.config.pv_quota_entity,50);let i=0;"pv"===t?i=100:"hybrid"===t&&(i=e);try{await this.hass.callService("emshome","set_charging_mode",{mode:t,minpvpowerquota:i})}catch(t){console.error(this._text("card.serviceError"),t)}}async _updateSliderValue(t){const e=Number(t.target.value);try{await this.hass.callService("emshome","prozentage",{prozentage:e})}catch(t){console.error(this._text("card.serviceError"),t)}}_icon(t){return B`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${gt[t]||""}"/></svg>`}_renderModeButton(t,e){const i=e===t;return B`
      <button
        class="mode-btn ${i?"active":""}"
        @click=${()=>this._setChargingMode(t)}
        aria-pressed=${i?"true":"false"}
      >
        ${this._icon(t)}
        <span>${dt(this._lang(),`modes.${t}`)}</span>
      </button>
    `}render(){if(!this.hass||!this.config)return q;if(!this._hasRequiredConfig())return B`
        <ha-card>
          <div class="shell">
            <h2>${this.config.title||this._text("card.title")}</h2>
            <p class="hint">Please configure charging_mode_entity, power_entity, and pv_quota_entity.</p>
          </div>
        </ha-card>
      `;const t=this._state(this.config.charging_mode_entity,"lock"),e=this._numberState(this.config.power_entity,0),i=this._numberState(this.config.pv_quota_entity,50),s=this.config.speed_entity?this._numberState(this.config.speed_entity,0):0,r=this.config.remaining_entity?this._numberState(this.config.remaining_entity,0):0,n=this.config.title||this._text("card.title");return B`
      <ha-card>
        <div class="shell">

          <!-- Image banner -->
          <div class="img-wrap">
            <img src=${this.config.image_url||pt} alt="EV charger" loading="lazy" />
          </div>

          <!-- Header -->
          <div class="header">
            <h2>${n}</h2>
            <p class="subhead">${this._text("card.mode")}: <strong>${dt(this._lang(),`modes.${t}`)}</strong></p>
          </div>

          <!-- Stats -->
          <div class="stats">
            <div class="stat primary">
              <span class="stat-label">${this._text("card.power")}</span>
              <span class="stat-value">${this._formatNumber(e)} <em>${this._text("card.watts")}</em></span>
            </div>
            ${s>0?B`
              <div class="stat">
                <span class="stat-label">${this._text("card.speed")}</span>
                <span class="stat-value">${this._formatNumber(s,1)} <em>${this._text("card.kmh")}</em></span>
              </div>
            `:q}
            ${r>0?B`
              <div class="stat">
                <span class="stat-label">${this._text("card.remaining")}</span>
                <span class="stat-value">${this._formatNumber(r)} <em>${this._text("card.minutes")}</em></span>
              </div>
            `:q}
          </div>

          <!-- Mode buttons -->
          <div class="mode-grid">
            ${ut.map(e=>this._renderModeButton(e,t))}
          </div>

          <!-- Hybrid slider -->
          <div class="slider-wrap ${"hybrid"===t?"":"disabled"}">
            <div class="slider-header">
              <span class="slider-label">${this._text("card.hybridMix")}</span>
              <span class="slider-value">${i}% PV</span>
            </div>
            <input
              type="range" min="0" max="100" step="1"
              .value=${String(i)}
              ?disabled=${"hybrid"!==t}
              @change=${this._updateSliderValue}
            />
            <div class="slider-ticks">
              <span>${this._text("card.pvFull")}</span>
              <span>${this._text("card.balanced")}</span>
              <span>${this._text("card.gridFull")}</span>
            </div>
          </div>

        </div>
      </ha-card>
    `}static get styles(){return n`
      :host {
        display: block;
        --c-bg:         var(--card-background-color,                   #fff);
        --c-on-bg:      var(--primary-text-color,                      #1c1b1f);
        --c-secondary:  var(--secondary-text-color,                    #49454f);
        --c-divider:    var(--divider-color,                           #e0e0e0);
        --c-primary:    var(--primary-color,                           #6750a4);
        --c-primary-c:  var(--md-sys-color-primary-container,          #eaddff);
        --c-primary-on: var(--md-sys-color-on-primary-container,       #21005d);
        --c-surface-c:  var(--md-sys-color-surface-container,
                           color-mix(in srgb, var(--c-on-bg) 6%, var(--c-bg)));
        --c-active-bg:  var(--md-sys-color-secondary-container,
                           color-mix(in srgb, var(--c-primary) 15%, var(--c-bg)));
        --c-active-on:  var(--md-sys-color-on-secondary-container,     var(--c-primary));
        --c-accent:     var(--md-sys-color-secondary,                  #4caf50);
      }

      ha-card {
        background: var(--c-bg);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08);
      }

      .shell {
        padding: 16px;
        color: var(--c-on-bg);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
      }

      /* ── Header ── */
      .img-wrap {
        margin: -16px -16px 14px;
      }

      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
      }

      .header {
        margin-bottom: 14px;
      }

      h2 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--c-on-bg);
      }

      .subhead {
        margin: 3px 0 0;
        font-size: 0.8125rem;
        color: var(--c-secondary);
      }

      .subhead strong {
        color: var(--c-primary);
        font-weight: 500;
      }

      /* ── Stats ── */
      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px;
        margin-bottom: 14px;
      }

      .stat {
        background: var(--c-surface-c);
        border-radius: 10px;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .stat.primary {
        background: var(--c-primary-c);
        color: var(--c-primary-on);
      }

      .stat-label {
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        opacity: 0.7;
      }

      .stat-value {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2;
      }

      .stat-value em {
        font-style: normal;
        font-size: 0.75rem;
        opacity: 0.65;
        margin-left: 1px;
      }

      /* ── Mode grid ── */
      .mode-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-bottom: 12px;
      }

      .mode-btn {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px solid var(--c-divider);
        border-radius: 10px;
        background: transparent;
        color: var(--c-secondary);
        font-family: inherit;
        font-size: 0.8125rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 150ms, border-color 150ms, color 150ms, box-shadow 150ms;
        text-align: left;
      }

      .mode-btn svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
        flex-shrink: 0;
      }

      .mode-btn::after {
        content: "";
        position: absolute;
        inset: 0;
        background: currentColor;
        opacity: 0;
        transition: opacity 100ms;
        pointer-events: none;
      }

      .mode-btn:hover::after  { opacity: .06; }
      .mode-btn:active::after { opacity: .12; }

      .mode-btn.active {
        background: var(--c-active-bg);
        border-color: transparent;
        color: var(--c-active-on);
        box-shadow: 0 1px 3px rgba(0,0,0,.10);
      }

      /* ── Slider ── */
      .slider-wrap {
        background: var(--c-surface-c);
        border-radius: 10px;
        padding: 12px;
        transition: opacity 180ms;
      }

      .slider-wrap.disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      .slider-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .slider-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--c-on-bg);
      }

      .slider-value {
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--c-accent);
      }

      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--c-divider);
        accent-color: var(--c-accent);
        outline: none;
        cursor: pointer;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--c-accent);
        cursor: pointer;
        transition: box-shadow 150ms, transform 120ms;
      }

      input[type="range"]:not(:disabled):hover::-webkit-slider-thumb {
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--c-accent) 18%, transparent);
        transform: scale(1.1);
      }

      input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border: none;
        border-radius: 50%;
        background: var(--c-accent);
        cursor: pointer;
      }

      .slider-ticks {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        font-size: 0.6875rem;
        color: var(--c-secondary);
      }

      /* ── Responsive ── */
      @media (max-width: 400px) {
        img { height: 130px; }
      }
    `}}customElements.define("ev-charger-card",mt),window.customCards=window.customCards||[],window.customCards.push({type:"ev-charger-card",name:"EV Charger Card",description:"Premium EV charger card for the EMS Home integration"})}();
