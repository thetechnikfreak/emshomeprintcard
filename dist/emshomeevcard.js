!function(){"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:o,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",v=u.reactiveElementPolyfillSupport,f=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!o(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=r;const n=s.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const n=this.constructor;if(!1===r&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,v?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,w=t=>t,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,M=document,z=()=>M.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,N="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,O=/>/g,T=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,F=M.createTreeWalker(M,129);function G(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":3===e?"<math>":"",a=V;for(let e=0;e<i;e++){const i=t[e];let o,d,c=-1,l=0;for(;l<i.length&&(a.lastIndex=l,d=a.exec(i),null!==d);)l=a.lastIndex,a===V?"!--"===d[1]?a=R:void 0!==d[1]?a=O:void 0!==d[2]?(I.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=T):void 0!==d[3]&&(a=T):a===T?">"===d[0]?(a=s??V,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,o=d[1],a=void 0===d[3]?T:'"'===d[3]?L:D):a===L||a===D?a=T:a===R||a===O?a=V:(a=T,s=void 0);const h=a===T&&t[e+1].startsWith("/>")?" ":"";n+=a===V?i+P:c>=0?(r.push(o),i.slice(0,c)+S+i.slice(c)+C+h):i+C+(-2===c?e:h)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const a=t.length-1,o=this.parts,[d,c]=K(t,e);if(this.el=Q.createElement(d,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=F.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=r.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),r.removeAttribute(t)}else t.startsWith(C)&&(o.push({type:6,index:s}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],z()),F.nextNode(),o.push({type:2,index:++s});r.append(t[e],z())}}}else if(8===r.nodeType)if(r.data===k)o.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)o.push({type:7,index:s}),t+=C.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,r){if(e===B)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=H(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,r)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??M).importNode(e,!0);F.currentNode=r;let s=F.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new Z(s,s.nextSibling,this,t):1===o.type?e=new o.ctor(s,o.name,o.strings,this,t):6===o.type&&(e=new rt(s,this,t)),this._$AV.push(e),o=i[++a]}n!==o?.index&&(s=F.nextNode(),n++)}return F.currentNode=M,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),H(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Y(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Z(this.O(z()),this.O(z()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=J(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const r=t;let a,o;for(t=s[0],a=0;a<s.length-1;a++)o=J(this,r[i+a],e,a),o===B&&(o=this._$AH[a]),n||=!H(o)||o!==this._$AH[a],o===q?t=q:t!==q&&(t+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends X{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===B)return;const i=this._$AH,r=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(Q,Z),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new Z(e.insertBefore(z(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ot=nt.litElementPolyfillSupport;ot?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");const dt={en:{card:{title:"EV Charger",power:"Power",speed:"Speed",remaining:"Remaining",watts:"W",kmh:"km/h",minutes:"min",mode:"Charging mode",hybridMix:"PV / Grid mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Grid",serviceError:"Service call failed. See browser console for details."},modes:{lock:"Do not charge",grid:"Grid",pv:"PV surplus",hybrid:"Hybrid"},editor:{title:"EV Charger Card configuration",cardTitle:"Card title",language:"Language",imageUrl:"Image URL",chargingModeEntity:"Charging mode entity",powerEntity:"Power entity",pvQuotaEntity:"PV quota entity",speedEntity:"Speed entity (optional)",remainingEntity:"Remaining time entity (optional)",entities:"Entities",appearance:"Appearance",languageAuto:"Auto (Home Assistant language)",languageEn:"English",languageDe:"German"}},de:{card:{title:"EV-Ladestation",power:"Leistung",speed:"Geschwindigkeit",remaining:"Verbleibend",watts:"W",kmh:"km/h",minutes:"Min",mode:"Lademodus",hybridMix:"PV-/Netz-Mix",pvFull:"100% PV",balanced:"50/50",gridFull:"100% Netz",serviceError:"Service-Aufruf fehlgeschlagen. Details in der Browser-Konsole."},modes:{lock:"Nicht laden",grid:"Netz",pv:"PV-Überschuss",hybrid:"Hybrid"},editor:{title:"EV Charger Card Konfiguration",cardTitle:"Kartentitel",language:"Sprache",imageUrl:"Bild-URL",chargingModeEntity:"Entity für Lademodus",powerEntity:"Entity für Leistung",pvQuotaEntity:"Entity für PV-Anteil",speedEntity:"Entity für Geschwindigkeit (optional)",remainingEntity:"Entity für Restzeit (optional)",entities:"Entitäten",appearance:"Darstellung",languageAuto:"Auto (Home Assistant Sprache)",languageEn:"Englisch",languageDe:"Deutsch"}}};function ct(t,e){return e.split(".").reduce((t,e)=>t?t[e]:void 0,t)}function lt(t,e){if("en"===e||"de"===e)return e;return String(t?.locale?.language||t?.language||"en").toLowerCase().startsWith("de")?"de":"en"}function ht(t,e){return ct(dt[t]||dt.en,e)||ct(dt.en,e)||e}customElements.define("ev-charger-editor",class extends at{static get properties(){return{hass:{},_config:{state:!0}}}setConfig(t){this._config={title:"",language:"auto",image_url:"",charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:"",...t}}_lang(){return lt(this.hass,this._config?.language)}_text(t){return ht(this._lang(),t)}_onInputChanged(t){if(!this._config)return;const e=t.target,i=e.configValue,r=t.detail?.value??e.value;if(!i)return;const s={...this._config,[i]:r};this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}_onLanguageChanged(t){this._onInputChanged({target:{configValue:"language",value:t.target.value}})}_renderEntityPicker(t,e){return j`
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
    `}});const pt="https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png",ut=["lock","grid","pv","hybrid"],gt={lock:{icon:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"},grid:{icon:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"},pv:{icon:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"},hybrid:{icon:"M7 2v11h3v9l7-12h-4l4-8z"}};class mt extends at{static get properties(){return{hass:{},config:{}}}static getStubConfig(){return{title:"EV Charger",language:"auto",image_url:pt,charging_mode_entity:"",power_entity:"",pv_quota_entity:"",speed_entity:"",remaining_entity:""}}static getConfigElement(){return document.createElement("ev-charger-editor")}setConfig(t){this.config={...mt.getStubConfig(),...t,image_url:t.image_url||pt}}getCardSize(){return 4}_lang(){return lt(this.hass,this.config?.language)}_text(t){return ht(this._lang(),t)}_state(t,e=""){return this.hass?.states?.[t]?.state??e}_numberState(t,e=0){const i=Number(this._state(t,e));return Number.isFinite(i)?i:e}_formatNumber(t,e=0){return new Intl.NumberFormat(this._lang(),{minimumFractionDigits:e,maximumFractionDigits:e}).format(t)}_hasRequiredConfig(){return Boolean(this.config?.charging_mode_entity&&this.config?.power_entity&&this.config?.pv_quota_entity)}async _setChargingMode(t){const e=this._numberState(this.config.pv_quota_entity,50);let i=0;"pv"===t?i=100:"hybrid"===t&&(i=e);try{await this.hass.callService("emshome","set_charging_mode",{mode:t,minpvpowerquota:i})}catch(t){console.error(this._text("card.serviceError"),t)}}async _updateSliderValue(t){const e=Number(t.target.value);try{await this.hass.callService("emshome","prozentage",{prozentage:e})}catch(t){console.error(this._text("card.serviceError"),t)}}_modeIcon(t){return j`<svg class="mode-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="${gt[t]?.icon||""}"/></svg>`}_renderModeButton(t,e){const i=e===t;return j`
      <button
        class="mode-btn ${i?"active":""}"
        @click=${()=>this._setChargingMode(t)}
        aria-pressed=${i?"true":"false"}
      >
        ${this._modeIcon(t)}
        <span>${ht(this._lang(),`modes.${t}`)}</span>
        ${i?j`<span class="mode-indicator"></span>`:q}
      </button>
    `}render(){if(!this.hass||!this.config)return q;if(!this._hasRequiredConfig())return j`
        <ha-card>
          <div class="md-shell">
            <div class="md-header">
              <h2>${this.config.title||this._text("card.title")}</h2>
              <p class="md-subtitle">Please configure charging_mode_entity, power_entity, and pv_quota_entity.</p>
            </div>
          </div>
        </ha-card>
      `;const t=this._state(this.config.charging_mode_entity,"lock"),e=this._numberState(this.config.power_entity,0),i=this._numberState(this.config.pv_quota_entity,50),r=this.config.speed_entity?this._numberState(this.config.speed_entity,0):0,s=this.config.remaining_entity?this._numberState(this.config.remaining_entity,0):0,n=this.config.title||this._text("card.title"),a=i,o=100-i;return j`
      <ha-card>
        <div class="md-shell">

          <!-- ── Header ── -->
          <div class="md-header">
            <div class="md-header-text">
              <h2>${n}</h2>
              <p class="md-subtitle">
                <span class="mode-chip mode-chip--${t}">
                  ${this._modeIcon(t)}
                  ${ht(this._lang(),`modes.${t}`)}
                </span>
              </p>
            </div>
            <div class="live-badge">
              <span class="live-dot"></span>
              LIVE
            </div>
          </div>

          <!-- ── Hero ── -->
          <div class="md-hero">
            <div class="md-image-wrap">
              <img src=${this.config.image_url||pt} alt="EV charger" loading="lazy" />
            </div>
            <div class="md-stats">
              <div class="md-stat md-stat--primary">
                <span class="md-stat-label">${this._text("card.power")}</span>
                <span class="md-stat-value">${this._formatNumber(e)}<em>${this._text("card.watts")}</em></span>
              </div>
              ${r>0?j`
                <div class="md-stat">
                  <span class="md-stat-label">${this._text("card.speed")}</span>
                  <span class="md-stat-value">${this._formatNumber(r,1)}<em>${this._text("card.kmh")}</em></span>
                </div>
              `:q}
              ${s>0?j`
                <div class="md-stat">
                  <span class="md-stat-label">${this._text("card.remaining")}</span>
                  <span class="md-stat-value">${this._formatNumber(s)}<em>${this._text("card.minutes")}</em></span>
                </div>
              `:q}
            </div>
          </div>

          <!-- ── Mode grid ── -->
          <div class="md-divider"></div>
          <div class="md-section-label">${this._text("card.mode")}</div>
          <div class="md-mode-grid">
            ${ut.map(e=>this._renderModeButton(e,t))}
          </div>

          <!-- ── Hybrid slider ── -->
          <div class="md-slider-card ${"hybrid"===t?"":"md-slider-card--disabled"}">
            <div class="md-slider-header">
              <span class="md-section-label" style="margin:0">${this._text("card.hybridMix")}</span>
              ${"hybrid"===t?j`
                <span class="md-slider-readout">
                  <span class="pv-val">${a}%</span>&thinsp;PV &nbsp;·&nbsp; <span class="grid-val">${o}%</span>&thinsp;Grid
                </span>
              `:q}
            </div>
            <input
              id="mix-slider"
              type="range"
              min="0" max="100" step="1"
              .value=${String(i)}
              ?disabled=${"hybrid"!==t}
              @change=${this._updateSliderValue}
            />
            <div class="md-slider-labels">
              <span>${this._text("card.pvFull")}</span>
              <span>${this._text("card.balanced")}</span>
              <span>${this._text("card.gridFull")}</span>
            </div>
          </div>

        </div>
      </ha-card>
    `}static get styles(){return n`
      /* ── MD3 token fallbacks ── */
      :host {
        /* Surface / background */
        --ev-surface:         var(--md-sys-color-surface,            #faf9fd);
        --ev-surface-variant: var(--md-sys-color-surface-variant,    #e4e1ec);
        --ev-surface-container: var(--md-sys-color-surface-container, #eeedf1);
        --ev-on-surface:      var(--md-sys-color-on-surface,         #1c1b1f);
        --ev-on-surface-var:  var(--md-sys-color-on-surface-variant, #49454f);
        --ev-outline:         var(--md-sys-color-outline,            #7a757f);
        --ev-outline-var:     var(--md-sys-color-outline-variant,    #cac4d0);

        /* Primary tonal */
        --ev-primary:         var(--md-sys-color-primary,            #6750a4);
        --ev-on-primary:      var(--md-sys-color-on-primary,         #ffffff);
        --ev-primary-container: var(--md-sys-color-primary-container, #eaddff);
        --ev-on-primary-cont: var(--md-sys-color-on-primary-container, #21005d);

        /* Secondary tonal (green accent — custom) */
        --ev-secondary:         #1b6e4b;
        --ev-on-secondary:      #ffffff;
        --ev-secondary-container: #b1f0cc;
        --ev-on-secondary-cont: #002114;

        /* Error */
        --ev-error:           var(--md-sys-color-error,              #b3261e);

        /* Elevation shadows (MD3 levels) */
        --ev-elev1: 0 1px 2px rgba(0,0,0,.12), 0 1px 3px 1px rgba(0,0,0,.08);
        --ev-elev2: 0 1px 2px rgba(0,0,0,.12), 0 2px 6px 2px rgba(0,0,0,.10);
        --ev-elev3: 0 4px 8px 3px rgba(0,0,0,.10), 0 1px 3px rgba(0,0,0,.14);

        /* Typography */
        --ev-font: var(--md-ref-typeface-brand, 'Google Sans', Roboto, sans-serif);
        --ev-font-plain: var(--md-ref-typeface-plain, Roboto, sans-serif);

        display: block;
      }

      ha-card {
        background: var(--ev-surface);
        border-radius: 16px;
        box-shadow: var(--ev-elev1);
        overflow: hidden;
        font-family: var(--ev-font-plain);
        color: var(--ev-on-surface);
      }

      .md-shell {
        padding: 16px;
        animation: md-enter 260ms cubic-bezier(.2,.0,0,1) both;
      }

      /* ── Header ── */
      .md-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
        gap: 8px;
      }

      .md-header-text { flex: 1 1 auto; }

      h2 {
        margin: 0;
        font-family: var(--ev-font);
        font-size: 1.375rem; /* MD3 title-large */
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.75rem;
        color: var(--ev-on-surface);
      }

      .md-subtitle {
        margin: 4px 0 0;
        font-size: 0.875rem;
        color: var(--ev-on-surface-var);
      }

      /* mode chip in header */
      .mode-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 10px 2px 6px;
        border-radius: 99px;
        font-size: 0.8125rem;
        font-weight: 500;
        background: var(--ev-surface-container);
        color: var(--ev-on-surface-var);
        line-height: 1.6;
      }

      .mode-chip--lock   { background: #fde7e7; color: #8c1d18; }
      .mode-chip--grid   { background: #e3f2fd; color: #0d47a1; }
      .mode-chip--pv     { background: #e8f5e9; color: #1b5e20; }
      .mode-chip--hybrid { background: var(--ev-primary-container); color: var(--ev-on-primary-cont); }

      .mode-chip .mode-icon { width: 15px; height: 15px; fill: currentColor; }

      /* LIVE badge */
      .live-badge {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        border-radius: 99px;
        background: var(--ev-secondary-container);
        color: var(--ev-on-secondary-cont);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        flex-shrink: 0;
        align-self: center;
      }

      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-secondary);
        animation: pulse 1.8s ease-in-out infinite;
      }

      /* ── Hero ── */
      .md-hero {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;
        margin-bottom: 16px;
        align-items: stretch;
      }

      .md-image-wrap {
        border-radius: 12px;
        overflow: hidden;
        background: var(--ev-surface-container);
      }

      img {
        width: 100%;
        height: 152px;
        object-fit: cover;
        display: block;
      }

      .md-stats {
        display: grid;
        gap: 8px;
        align-content: start;
      }

      .md-stat {
        background: var(--ev-surface-container);
        border-radius: 12px;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        transition: box-shadow 200ms ease;
      }

      .md-stat--primary {
        background: var(--ev-primary-container);
        color: var(--ev-on-primary-cont);
        box-shadow: var(--ev-elev1);
      }

      .md-stat-label {
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.72;
      }

      .md-stat-value {
        font-family: var(--ev-font);
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        color: var(--ev-on-surface);
      }

      .md-stat--primary .md-stat-value { color: var(--ev-on-primary-cont); }

      .md-stat-value em {
        font-style: normal;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 2px;
        opacity: 0.7;
        vertical-align: baseline;
      }

      /* ── Divider + section label ── */
      .md-divider {
        height: 1px;
        background: var(--ev-outline-var);
        margin: 4px 0 12px;
      }

      .md-section-label {
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ev-primary);
        margin-bottom: 8px;
        display: block;
      }

      /* ── Mode grid ── */
      .md-mode-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-bottom: 14px;
      }

      .mode-btn {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--ev-outline-var);
        background: var(--ev-surface);
        color: var(--ev-on-surface-var);
        border-radius: 12px;
        padding: 10px 12px;
        font-family: var(--ev-font-plain);
        font-size: 0.8125rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition:
          background 160ms ease,
          border-color 160ms ease,
          box-shadow 160ms ease,
          color 160ms ease;
        text-align: left;
      }

      .mode-btn::before {
        content: "";
        position: absolute;
        inset: 0;
        background: currentColor;
        opacity: 0;
        transition: opacity 120ms ease;
        border-radius: inherit;
        pointer-events: none;
      }

      .mode-btn:hover::before  { opacity: 0.06; }
      .mode-btn:active::before { opacity: 0.12; }

      .mode-btn:hover {
        border-color: var(--ev-outline);
        box-shadow: var(--ev-elev1);
      }

      .mode-btn.active {
        background: var(--ev-secondary-container);
        border-color: transparent;
        color: var(--ev-on-secondary-cont);
        box-shadow: var(--ev-elev2);
      }

      .mode-icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
        flex-shrink: 0;
      }

      .mode-btn span { flex: 1 1 auto; }

      .mode-indicator {
        flex: 0 0 auto !important;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-secondary);
      }

      /* ── Hybrid slider card ── */
      .md-slider-card {
        background: var(--ev-surface-container);
        border-radius: 12px;
        padding: 12px 14px;
        transition: opacity 200ms ease;
      }

      .md-slider-card--disabled { opacity: 0.45; pointer-events: none; }

      .md-slider-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .md-slider-readout {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--ev-on-surface-var);
      }

      .pv-val   { color: #1b6e4b; font-weight: 700; }
      .grid-val { color: #0d47a1; font-weight: 700; }

      /* MD3-flavoured range input */
      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(
          to right,
          var(--ev-secondary) 0%,
          var(--ev-secondary) calc(var(--slider-pct, 50) * 1%),
          var(--ev-outline-var) calc(var(--slider-pct, 50) * 1%),
          var(--ev-outline-var) 100%
        );
        outline: none;
        cursor: pointer;
        accent-color: var(--ev-secondary);
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--ev-secondary);
        box-shadow: 0 0 0 0 rgba(27,110,75,.3);
        transition: box-shadow 160ms ease, transform 120ms ease;
        cursor: pointer;
      }

      input[type="range"]:not(:disabled):hover::-webkit-slider-thumb {
        box-shadow: 0 0 0 6px rgba(27,110,75,.14);
        transform: scale(1.1);
      }

      input[type="range"]:not(:disabled):active::-webkit-slider-thumb {
        box-shadow: 0 0 0 10px rgba(27,110,75,.22);
        transform: scale(1.15);
      }

      input[type="range"]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        background: var(--ev-secondary);
        cursor: pointer;
      }

      .md-slider-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 0.6875rem;
        color: var(--ev-on-surface-var);
        opacity: 0.8;
      }

      /* ── Animations ── */
      @keyframes md-enter {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: .35; }
      }

      /* ── Responsive ── */
      @media (max-width: 480px) {
        .md-hero { grid-template-columns: 1fr; }
        img { height: 130px; }
      }
    `}}customElements.define("ev-charger-card",mt),window.customCards=window.customCards||[],window.customCards.push({type:"ev-charger-card",name:"EV Charger Card",description:"Premium EV charger card for the EMS Home integration"})}();
