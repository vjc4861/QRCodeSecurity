"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(D,p,l)=>{l.d(p,{c:()=>d});var g=l(1308),_=l(7864),h=l(1898);const d=(a,o)=>{let t,e;const s=(u,w,m)=>{if(typeof document>"u")return;const E=document.elementFromPoint(u,w);E&&o(E)?E!==t&&(f(),r(E,m)):f()},r=(u,w)=>{t=u,e||(e=t);const m=t;(0,g.c)(()=>m.classList.add("ion-activated")),w()},f=(u=!1)=>{if(!t)return;const w=t;(0,g.c)(()=>w.classList.remove("ion-activated")),u&&e!==t&&t.click(),t=void 0};return(0,h.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>s(u.currentX,u.currentY,_.a),onMove:u=>s(u.currentX,u.currentY,_.b),onEnd:()=>{f(!0),(0,_.h)(),e=void 0}})}},2225:(D,p,l)=>{l.d(p,{g:()=>g});const g=(o,t,e,s,r)=>h(o[1],t[1],e[1],s[1],r).map(f=>_(o[0],t[0],e[0],s[0],f)),_=(o,t,e,s,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*e*r+3*e+s*r))-o*Math.pow(r-1,3),h=(o,t,e,s,r)=>a((s-=r)-3*(e-=r)+3*(t-=r)-(o-=r),3*e-6*t+3*o,3*t-3*o,o).filter(u=>u>=0&&u<=1),a=(o,t,e,s)=>{if(0===o)return((o,t,e)=>{const s=t*t-4*o*e;return s<0?[]:[(-t+Math.sqrt(s))/(2*o),(-t-Math.sqrt(s))/(2*o)]})(t,e,s);const r=(3*(e/=o)-(t/=o)*t)/3,f=(2*t*t*t-9*t*e+27*(s/=o))/27;if(0===r)return[Math.pow(-f,1/3)];if(0===f)return[Math.sqrt(-r),-Math.sqrt(-r)];const u=Math.pow(f/2,2)+Math.pow(r/3,3);if(0===u)return[Math.pow(f/2,.5)-t/3];if(u>0)return[Math.pow(-f/2+Math.sqrt(u),1/3)-Math.pow(f/2+Math.sqrt(u),1/3)-t/3];const w=Math.sqrt(Math.pow(-r/3,3)),m=Math.acos(-f/(2*Math.sqrt(Math.pow(-r/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(m/3)-t/3,E*Math.cos((m+2*Math.PI)/3)-t/3,E*Math.cos((m+4*Math.PI)/3)-t/3]}},5062:(D,p,l)=>{l.d(p,{i:()=>g});const g=_=>_&&""!==_.dir?"rtl"===_.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(D,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>d});const g="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=a=>{let o=[],t=!0;const e=a?a.shadowRoot:document,s=a||document.body,r=v=>{o.forEach(i=>i.classList.remove(g)),v.forEach(i=>i.classList.add(g)),o=v},f=()=>{t=!1,r([])},u=v=>{t=h.includes(v.key),t||r([])},w=v=>{if(t&&void 0!==v.composedPath){const i=v.composedPath().filter(c=>!!c.classList&&c.classList.contains("ion-focusable"));r(i)}},m=()=>{e.activeElement===s&&r([])};return e.addEventListener("keydown",u),e.addEventListener("focusin",w),e.addEventListener("focusout",m),e.addEventListener("touchstart",f),e.addEventListener("mousedown",f),{destroy:()=>{e.removeEventListener("keydown",u),e.removeEventListener("focusin",w),e.removeEventListener("focusout",m),e.removeEventListener("touchstart",f),e.removeEventListener("mousedown",f)},setFocus:r}}},7626:(D,p,l)=>{l.d(p,{C:()=>a,a:()=>h,d:()=>d});var g=l(5861),_=l(5730);const h=function(){var o=(0,g.Z)(function*(t,e,s,r,f,u){var w;if(t)return t.attachViewToDom(e,s,f,r);if(!(u||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const m="string"==typeof s?null===(w=e.ownerDocument)||void 0===w?void 0:w.createElement(s):s;return r&&r.forEach(E=>m.classList.add(E)),f&&Object.assign(m,f),e.appendChild(m),yield new Promise(E=>(0,_.c)(m,E)),m});return function(e,s,r,f,u,w){return o.apply(this,arguments)}}(),d=(o,t)=>{if(t){if(o)return o.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let o,t;return{attachViewToDom:function(){var r=(0,g.Z)(function*(f,u,w={},m=[]){var E,v;if(o=f,u){const c="string"==typeof u?null===(E=o.ownerDocument)||void 0===E?void 0:E.createElement(u):u;m.forEach(n=>c.classList.add(n)),Object.assign(c,w),o.appendChild(c),yield new Promise(n=>(0,_.c)(c,n))}else if(o.children.length>0&&!o.children[0].classList.contains("ion-delegate-host")){const n=null===(v=o.ownerDocument)||void 0===v?void 0:v.createElement("div");n.classList.add("ion-delegate-host"),m.forEach(M=>n.classList.add(M)),n.append(...o.children),o.appendChild(n)}const i=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),i.appendChild(o),o});return function(u,w){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},7864:(D,p,l)=>{l.d(p,{a:()=>d,b:()=>a,c:()=>h,d:()=>t,h:()=>o});const g={getEngine(){var e;const s=window;return s.TapticEngine||(null===(e=s.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var e;const s=window;return!!this.getEngine()&&("web"!==(null===(e=s.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;s.impact({style:r})},notification(e){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;s.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},_=()=>g.available(),h=()=>{_()&&g.selection()},d=()=>{_()&&g.selectionStart()},a=()=>{_()&&g.selectionChanged()},o=()=>{_()&&g.selectionEnd()},t=e=>{_()&&g.impact(e)}},109:(D,p,l)=>{l.d(p,{a:()=>g,b:()=>u,c:()=>t,d:()=>w,e:()=>C,f:()=>o,g:()=>m,h:()=>h,i:()=>_,j:()=>n,k:()=>M,l:()=>e,m:()=>r,n:()=>E,o:()=>s,p:()=>a,q:()=>d,r:()=>c,s:()=>y,t:()=>f,u:()=>v,v:()=>i});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(D,p,l)=>{l.d(p,{s:()=>g});const g=e=>{try{if(e instanceof t)return e.value;if(!d()||"string"!=typeof e||""===e)return e;if(e.includes("onload="))return"";const s=document.createDocumentFragment(),r=document.createElement("div");s.appendChild(r),r.innerHTML=e,o.forEach(m=>{const E=s.querySelectorAll(m);for(let v=E.length-1;v>=0;v--){const i=E[v];i.parentNode?i.parentNode.removeChild(i):s.removeChild(i);const c=h(i);for(let n=0;n<c.length;n++)_(c[n])}});const f=h(s);for(let m=0;m<f.length;m++)_(f[m]);const u=document.createElement("div");u.appendChild(s);const w=u.querySelector("div");return null!==w?w.innerHTML:u.innerHTML}catch(s){return console.error(s),""}},_=e=>{if(e.nodeType&&1!==e.nodeType)return;if(typeof NamedNodeMap<"u"&&!(e.attributes instanceof NamedNodeMap))return void e.remove();for(let r=e.attributes.length-1;r>=0;r--){const f=e.attributes.item(r),u=f.name;if(!a.includes(u.toLowerCase())){e.removeAttribute(u);continue}const w=f.value,m=e[u];(null!=w&&w.toLowerCase().includes("javascript:")||null!=m&&m.toLowerCase().includes("javascript:"))&&e.removeAttribute(u)}const s=h(e);for(let r=0;r<s.length;r++)_(s[r])},h=e=>null!=e.children?e.children:e.childNodes,d=()=>{var e;const s=window,r=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},a=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"];class t{constructor(s){this.value=s}}},8416:(D,p,l)=>{l.d(p,{I:()=>a,a:()=>r,b:()=>o,c:()=>w,d:()=>E,f:()=>f,g:()=>s,i:()=>e,p:()=>m,r:()=>v,s:()=>u});var g=l(5861),_=l(5730),h=l(4147);const a="ion-content",o=".ion-content-scroll-host",t=`${a}, ${o}`,e=i=>"ION-CONTENT"===i.tagName,s=function(){var i=(0,g.Z)(function*(c){return e(c)?(yield new Promise(n=>(0,_.c)(c,n)),c.getScrollElement()):c});return function(n){return i.apply(this,arguments)}}(),r=i=>i.querySelector(o)||i.querySelector(t),f=i=>i.closest(t),u=(i,c)=>e(i)?i.scrollToTop(c):Promise.resolve(i.scrollTo({top:0,left:0,behavior:c>0?"smooth":"auto"})),w=(i,c,n,M)=>e(i)?i.scrollByPoint(c,n,M):Promise.resolve(i.scrollBy({top:n,left:c,behavior:M>0?"smooth":"auto"})),m=i=>(0,h.a)(i,a),E=i=>{if(e(i)){const n=i.scrollY;return i.scrollY=!1,n}return i.style.setProperty("overflow","hidden"),!0},v=(i,c)=>{e(i)?i.scrollY=c:i.style.removeProperty("overflow")}},5234:(D,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>_,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>c,keyboardDidClose:()=>m,keyboardDidOpen:()=>u,keyboardDidResize:()=>w,resetKeyboardAssist:()=>t,setKeyboardClose:()=>f,setKeyboardOpen:()=>r,startKeyboardAssist:()=>e,trackViewportChanges:()=>i});const g="ionKeyboardDidShow",_="ionKeyboardDidHide";let d={},a={},o=!1;const t=()=>{d={},a={},o=!1},e=n=>{s(n),n.visualViewport&&(a=c(n.visualViewport),n.visualViewport.onresize=()=>{i(n),u()||w(n)?r(n):m(n)&&f(n)})},s=n=>{n.addEventListener("keyboardDidShow",M=>r(n,M)),n.addEventListener("keyboardDidHide",()=>f(n))},r=(n,M)=>{E(n,M),o=!0},f=n=>{v(n),o=!1},u=()=>!o&&d.width===a.width&&(d.height-a.height)*a.scale>150,w=n=>o&&!m(n),m=n=>o&&a.height===n.innerHeight,E=(n,M)=>{const C=new CustomEvent(g,{detail:{keyboardHeight:M?M.keyboardHeight:n.innerHeight-a.height}});n.dispatchEvent(C)},v=n=>{const M=new CustomEvent(_);n.dispatchEvent(M)},i=n=>{d=Object.assign({},a),a=c(n.visualViewport)},c=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},9852:(D,p,l)=>{l.d(p,{c:()=>_});var g=l(3457);const _=h=>{let d,a,o;const t=()=>{d=()=>{o=!0,h&&h(!0)},a=()=>{o=!1,h&&h(!1)},null==g.w||g.w.addEventListener("keyboardWillShow",d),null==g.w||g.w.addEventListener("keyboardWillHide",a)};return t(),{init:t,destroy:()=>{null==g.w||g.w.removeEventListener("keyboardWillShow",d),null==g.w||g.w.removeEventListener("keyboardWillHide",a),d=a=void 0},isKeyboardVisible:()=>o}}},7741:(D,p,l)=>{l.d(p,{S:()=>_});const _={bubbles:{dur:1e3,circles:9,fn:(h,d,a)=>{const o=h*d/a-h+"ms",t=2*Math.PI*d/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(h,d,a)=>{const o=d/a,t=h*o-h+"ms",e=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,d)=>({r:6,style:{left:9-9*d+"px","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,d,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*d+(d<a/2?180:-180)}deg)`,"animation-delay":h*d/a-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,d,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*d+(d<a/2?180:-180)}deg)`,"animation-delay":h*d/a-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,d,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":h*d/a-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,d,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":h*d/a-h+"ms"}})}}},6659:(D,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>a});var g=l(5730),_=l(5062),h=l(1898);l(4349);const a=(o,t,e,s,r)=>{const f=o.ownerDocument.defaultView;let u=(0,_.i)(o);const m=n=>u?-n.deltaX:n.deltaX;return(0,h.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(u=(0,_.i)(o),(n=>{const{startX:y}=n;return u?y>=f.innerWidth-50:y<=50})(n)&&t()),onStart:e,onMove:n=>{const y=m(n)/f.innerWidth;s(y)},onEnd:n=>{const M=m(n),y=f.innerWidth,C=M/y,O=(n=>u?-n.velocityX:n.velocityX)(n),b=O>=0&&(O>.2||M>y/2),x=(b?1-C:C)*y;let T=0;if(x>5){const B=x/Math.abs(O);T=Math.min(B,540)}r(b,C<=0?.01:(0,g.l)(0,C,.9999),T)}})}},4953:(D,p,l)=>{l.d(p,{F:()=>g});class g{constructor(h,d,a,o,t,e,s){this.qruuid=h,this.qid=d,this.qrTitle=a,this.qrData=o,this.width=t,this.errorCorrectionLevel=e,this.userId=s}}},7935:(D,p,l)=>{l.d(p,{w:()=>w});var g=l(4953),_=l(1135),h=l(5698),d=l(4004),a=l(8505),o=l(3900),t=l(9646),e=l(4650),s=l(2078),r=l(384),f=l(5197),u=l(3101);let w=(()=>{class m{constructor(v,i,c,n){this.loadingEl=v,this.authService=i,this.db=c,this.db2=n,this._qrcodes=new _.X([]),this.deletedQrCodeId=new _.X(null),this.qrCodeDeleted$=this.deletedQrCodeId.asObservable(),console.log("work "),this.fetchDatafromDb()}get qrcodes(){return this._qrcodes.asObservable()}getQrcode(v){return this.qrcodes.pipe((0,h.q)(1),(0,d.U)(i=>Object.assign({},i.find(c=>c.qid===v))))}addingQrCode(v){return this._qrcodes.pipe((0,h.q)(1),(0,a.b)(i=>{this._qrcodes.next(i.concat(v))})).subscribe()}fetchDatafromDb(){return this.db.object("qrcodes").valueChanges().pipe((0,d.U)(v=>{console.log("This fetch function is working"),console.log(JSON.stringify(v));const i=[];for(let c in v){const n=v[c].qruuid,M=v[c].title,y=v[c].data,C=v[c].width,O=v[c].errorCorrectionLevel;console.log(M);const L=new g.F(n,Math.random().toString(),M,y,C,O,this.authService.userId);i.push(L)}return i}))}fetchQrcode(v,i,c,n,M){const y=new g.F(v,Math.random().toString(),i,c,n,M,this.authService.userId);return this._qrcodes.pipe((0,h.q)(1),(0,a.b)(C=>{this._qrcodes.next(C.concat(y))})).subscribe()}deleteQrCode(v){return this._qrcodes.pipe((0,h.q)(1),(0,a.b)(i=>{this._qrcodes.next(i.filter(c=>c.qid!==v))})).subscribe()}cancelQrcode(v){const i="qrcodes";return console.log(i),this.db.object(i).valueChanges().pipe((0,h.q)(1),(0,o.w)(c=>{for(let n in c){console.log(n),console.log(c);const M=c[n].qruuid;if(console.log(M),console.log(v),M===v)return console.log("removing......"),this.db.object(i+"/"+n).remove().then(()=>{this._qrcodes.pipe((0,h.q)(1),(0,a.b)(y=>{this._qrcodes.next(y.filter(C=>C.qruuid!==v))})).subscribe()}),setTimeout(()=>{this.loadingEl.dismiss()},500),(0,t.of)()}return(0,t.of)(null)}))}checkIfQrCodeExists(v){const i="your_unique_identifier_";return v.startsWith(i)?this.db.object("qrcodes").valueChanges().pipe((0,d.U)(c=>{for(let n in c)if(v===i+c[n].qruuid)return!0;return!1})):(0,t.of)(!1)}}return m.\u0275fac=function(v){return new(v||m)(e.LFG(s.HT),e.LFG(r.e),e.LFG(f.KQ),e.LFG(u.ST))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);