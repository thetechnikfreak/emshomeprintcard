!function(){"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,g=globalThis,u=g.trustedTypes,_=u?u.emptyScript:"",m=g.reactiveElementPolyfillSupport,f=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[f("elementProperties")]=new Map,v[f("finalized")]=new Map,m?.({ReactiveElement:v}),(g.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,E=x.trustedTypes,w=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,M=document,U=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,V=/>/g,z=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,F=M.createTreeWalker(M,129);function G(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<i;e++){const i=t[e];let a,h,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,h=o.exec(i),null!==h);)d=o.lastIndex,o===R?"!--"===h[1]?o=T:void 0!==h[1]?o=V:void 0!==h[2]?(I.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=z):void 0!==h[3]&&(o=z):o===z?">"===h[0]?(o=r??R,l=-1):void 0===h[1]?l=-2:(l=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?z:'"'===h[3]?D:L):o===D||o===L?o=z:o===T||o===V?o=R:(o=z,r=void 0);const c=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===R?i+k:l>=0?(s.push(a),i.slice(0,l)+S+i.slice(l)+C+c):i+C+(-2===l?e:c)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[h,l]=K(t,e);if(this.el=Q.createElement(h,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[n++],i=s.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:X}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),F.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=N(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Z(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=F.nextNode(),n++)}return F.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Q(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Y(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Y(this,s[i+o],e,o),a===q&&(a=this._$AH[o]),n||=!N(a)||a!==this._$AH[o],a===B?t=B:t!==B&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??B)===q)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(Q,Z),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class ot extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Z(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ht={en:{card:{title:"EV Charger",power:"Power",speed:"Speed",remaining:"Remaining",watts:"W",kmh:"km/h",minutes:"min",mode:"Charging mode",hybridMix:"PV / Grid mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Grid",serviceError:"Service call failed. See browser console for details."},modes:{lock:"Do not charge",grid:"Grid",pv:"PV surplus",hybrid:"Hybrid"},editor:{title:"EV Charger Card configuration",cardTitle:"Card title",language:"Language",imageUrl:"Image URL",chargingModeEntity:"Charging mode entity",powerEntity:"Power entity",pvQuotaEntity:"PV quota entity",speedEntity:"Speed entity (optional)",remainingEntity:"Remaining time entity (optional)",entities:"Entities",appearance:"Appearance",languageAuto:"Auto (Home Assistant language)",languageEn:"English",languageDe:"German"}},de:{card:{title:"EV-Ladestation",power:"Leistung",speed:"Geschwindigkeit",remaining:"Verbleibend",watts:"W",kmh:"km/h",minutes:"Min",mode:"Lademodus",hybridMix:"PV-/Netz-Mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Netz",serviceError:"Service-Aufruf fehlgeschlagen. Details in der Browser-Konsole."},modes:{lock:"Nicht laden",grid:"Netz",pv:"PV-Uberschuss",hybrid:"Hybrid"},editor:{title:"EV Charger Card Konfiguration",cardTitle:"Kartentitel",language:"Sprache",imageUrl:"Bild-URL",chargingModeEntity:"Entity fur Lademodus",powerEntity:"Entity fur Leistung",pvQuotaEntity:"Entity fur PV-Anteil",speedEntity:"Entity fur Geschwindigkeit (optional)",remainingEntity:"Entity fur Restzeit (optional)",entities:"Entitaten",appearance:"Darstellung",languageAuto:"Auto (Home Assistant Sprache)",languageEn:"Englisch",languageDe:"Deutsch"}}};function lt(t,e){return e.split(".").reduce((t,e)=>t?t[e]:void 0,t)}function dt(t,e){if("en"===e||"de"===e)return e;return String(t?.locale?.language||t?.language||"en").toLowerCase().startsWith("de")?"de":"en"}function ct(t,e){return lt(ht[t]||ht.en,e)||lt(ht.en,e)||e}customElements.define("ev-charger-editor",class extends ot{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={title:"",language:"auto",image_url:"",charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:"",...t}}_lang(){return dt(this.hass,this._config?.language)}_text(t){return ct(this._lang(),t)}_onInputChanged(t){if(!this._config)return;const e=t.target,i=e.configValue,s=t.detail?.value??e.value;if(!i)return;const r={...this._config,[i]:s};this._config=r,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}_onLanguageChanged(t){this._onInputChanged({target:{configValue:"language",value:t.target.value}})}_renderEntityPicker(t,e){return j`
      <ha-textfield
        .label=${e}
        .value=${this._config?.[t]||""}
        .configValue=${t}
        @change=${this._onInputChanged}
      ></ha-textfield>
    `}render(){return this.hass&&this._config?j`
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

          <ha-select
            .label=${this._text("editor.language")}
            .value=${this._config.language||"auto"}
            @change=${this._onLanguageChanged}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="auto">${this._text("editor.languageAuto")}</mwc-list-item>
            <mwc-list-item value="en">${this._text("editor.languageEn")}</mwc-list-item>
            <mwc-list-item value="de">${this._text("editor.languageDe")}</mwc-list-item>
          </ha-select>
        </section>
      </div>
    `:j``}static get styles(){return n`
    .editor {
      display: grid;
      gap: 16px;
      padding: 10px 6px 0;
    }

    h3,
    h4 {
      margin: 0;
      color: var(--primary-text-color);
    }

    section {
      display: grid;
      gap: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 12px;
      background: color-mix(in srgb, var(--card-background-color) 92%, #d9e8f7);
    }

    ha-textfield,
    ha-select,
    ha-entity-picker {
      width: 100%;
    }
    `}});const pt="https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png",gt=["lock","grid","pv","hybrid"];class ut extends ot{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"EV Charger",language:"auto",image_url:pt,charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:""}}static getConfigElement(){return document.createElement("ev-charger-editor")}setConfig(t){this.config={...ut.getStubConfig(),...t,image_url:t.image_url||pt}}getCardSize(){return 4}_lang(){return dt(this.hass,this.config?.language)}_text(t){return ct(this._lang(),t)}_state(t,e=""){return this.hass?.states?.[t]?.state??e}_numberState(t,e=0){const i=Number(this._state(t,e));return Number.isFinite(i)?i:e}_formatNumber(t,e=0){return new Intl.NumberFormat(this._lang(),{minimumFractionDigits:e,maximumFractionDigits:e}).format(t)}_hasRequiredConfig(){return Boolean(this.config?.charging_mode_entity&&this.config?.power_entity&&this.config?.pv_quota_entity)}async _setChargingMode(t){const e=this._numberState(this.config.pv_quota_entity,50);let i=0;"pv"===t?i=100:"hybrid"===t&&(i=e);try{await this.hass.callService("emshome","set_charging_mode",{mode:t,minpvpowerquota:i})}catch(t){console.error(this._text("card.serviceError"),t)}}async _updateSliderValue(t){const e=Number(t.target.value);try{await this.hass.callService("emshome","prozentage",{prozentage:e})}catch(t){console.error(this._text("card.serviceError"),t)}}_renderModeButton(t,e){const i=e===t;return j`
      <button
        class="mode-btn ${i?"active":""}"
        @click=${()=>this._setChargingMode(t)}
        aria-pressed=${i?"true":"false"}
      >
        ${ct(this._lang(),`modes.${t}`)}
      </button>
    `}render(){if(!this.hass||!this.config)return B;if(!this._hasRequiredConfig())return j`
        <ha-card>
          <div class="shell">
            <div class="header">
              <div>
                <h2>${this.config.title||this._text("card.title")}</h2>
                <p>Please configure charging_mode_entity, power_entity, and pv_quota_entity.</p>
              </div>
            </div>
          </div>
        </ha-card>
      `;const t=this._state(this.config.charging_mode_entity,"lock"),e=this._numberState(this.config.power_entity,0),i=this._numberState(this.config.pv_quota_entity,50),s=this.config.speed_entity?this._numberState(this.config.speed_entity,0):0,r=this.config.remaining_entity?this._numberState(this.config.remaining_entity,0):0,n=this.config.title||this._text("card.title");return j`
      <ha-card>
        <div class="shell">
          <div class="header">
            <div>
              <h2>${n}</h2>
              <p>${this._text("card.mode")}: ${ct(this._lang(),`modes.${t}`)}</p>
            </div>
            <span class="live-pill">LIVE</span>
          </div>

          <div class="hero">
            <img src=${this.config.image_url||pt} alt="EV charger" loading="lazy" />
            <div class="stats-grid">
              <article class="stat primary">
                <span>${this._text("card.power")}</span>
                <strong>${this._formatNumber(e)} ${this._text("card.watts")}</strong>
              </article>
              ${s>0?j`
                    <article class="stat">
                      <span>${this._text("card.speed")}</span>
                      <strong>${this._formatNumber(s,1)} ${this._text("card.kmh")}</strong>
                    </article>
                  `:B}
              ${r>0?j`
                    <article class="stat">
                      <span>${this._text("card.remaining")}</span>
                      <strong>${this._formatNumber(r)} ${this._text("card.minutes")}</strong>
                    </article>
                  `:B}
            </div>
          </div>

          <div class="mode-grid">${gt.map(e=>this._renderModeButton(e,t))}</div>

          <div class="slider-shell ${"hybrid"===t?"":"disabled"}">
            <label for="mix-slider">${this._text("card.hybridMix")}</label>
            <input
              id="mix-slider"
              type="range"
              min="0"
              max="100"
              step="1"
              .value=${String(i)}
              ?disabled=${"hybrid"!==t}
              @change=${this._updateSliderValue}
            />
            <div class="slider-labels">
              <span>${this._text("card.pvFull")}</span>
              <span>${this._text("card.balanced")}</span>
              <span>${this._text("card.gridFull")}</span>
            </div>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return n`
    :host {
      --ev-accent: #0b8f6a;
      --ev-accent-soft: #a7f1d8;
      --ev-bg-top: #e9f7ff;
      --ev-bg-mid: #f8fffd;
      --ev-bg-bottom: #eef5ff;
      --ev-text-primary: #132235;
      --ev-text-secondary: #49607c;
      --ev-surface: rgba(255, 255, 255, 0.72);
      display: block;
    }

    ha-card {
      overflow: hidden;
      border-radius: 20px;
      border: 1px solid rgba(35, 87, 141, 0.18);
      box-shadow: 0 14px 36px rgba(15, 34, 68, 0.12);
      background:
        radial-gradient(120% 180% at 0% 0%, #d8f5e9 0%, transparent 52%),
        radial-gradient(120% 180% at 100% 100%, #d6e7ff 0%, transparent 50%),
        linear-gradient(160deg, var(--ev-bg-top), var(--ev-bg-mid) 48%, var(--ev-bg-bottom));
    }

    .shell {
      padding: 18px;
      color: var(--ev-text-primary);
      animation: fade-in 320ms ease-out;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      gap: 12px;
    }

    h2 {
      margin: 0;
      font-size: 1.15rem;
      letter-spacing: 0.01em;
      line-height: 1.3;
    }

    .header p {
      margin: 4px 0 0;
      color: var(--ev-text-secondary);
      font-size: 0.82rem;
    }

    .live-pill {
      align-self: center;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      padding: 5px 10px;
      border-radius: 99px;
      color: #ffffff;
      background: linear-gradient(90deg, #0e9f74, #09935f);
      box-shadow: 0 6px 14px rgba(13, 112, 80, 0.3);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 12px;
      margin-bottom: 14px;
      align-items: stretch;
    }

    img {
      width: 100%;
      height: 148px;
      object-fit: cover;
      border-radius: 14px;
      border: 1px solid rgba(15, 50, 96, 0.1);
      background: #ffffff;
    }

    .stats-grid {
      display: grid;
      gap: 8px;
      align-content: start;
    }

    .stat {
      background: var(--ev-surface);
      border: 1px solid rgba(31, 79, 128, 0.12);
      backdrop-filter: blur(2px);
      border-radius: 12px;
      padding: 9px 10px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .stat span {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #55708d;
    }

    .stat strong {
      font-size: 1.05rem;
      line-height: 1.2;
    }

    .stat.primary {
      border-color: rgba(11, 143, 106, 0.32);
      box-shadow: inset 0 0 0 1px rgba(11, 143, 106, 0.06);
    }

    .mode-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-bottom: 14px;
    }

    .mode-btn {
      border: 1px solid rgba(25, 78, 128, 0.2);
      background: rgba(255, 255, 255, 0.62);
      color: #20334a;
      border-radius: 12px;
      padding: 10px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: transform 120ms ease, box-shadow 150ms ease, border-color 150ms ease, background 150ms ease;
      cursor: pointer;
    }

    .mode-btn:hover {
      transform: translateY(-1px);
      border-color: rgba(11, 143, 106, 0.5);
    }

    .mode-btn.active {
      background: linear-gradient(160deg, #d3f9ea, #e7fff6 60%, #f9fffd);
      border-color: rgba(11, 143, 106, 0.6);
      box-shadow: 0 8px 16px rgba(11, 143, 106, 0.15);
      color: #0b684e;
    }

    .slider-shell {
      background: rgba(255, 255, 255, 0.54);
      border: 1px solid rgba(32, 70, 108, 0.13);
      border-radius: 14px;
      padding: 12px;
      transition: opacity 180ms ease;
    }

    .slider-shell.disabled {
      opacity: 0.5;
    }

    label {
      display: block;
      font-size: 0.84rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #1f3652;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--ev-accent);
    }

    .slider-labels {
      margin-top: 7px;
      display: flex;
      justify-content: space-between;
      font-size: 0.72rem;
      color: #4f6784;
      gap: 8px;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 480px) {
      .hero {
        grid-template-columns: 1fr;
      }

      img {
        height: 128px;
      }
    }
    `}}customElements.define("ev-charger-card",ut),window.customCards=window.customCards||[],window.customCards.push({type:"ev-charger-card",name:"EV Charger Card",description:"Premium EV charger card for the EMS Home integration"})}();
