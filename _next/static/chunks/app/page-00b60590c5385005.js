(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6437:(e,t,n)=>{Promise.resolve().then(n.bind(n,6467))},551:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=n(9920)._(n(148));function r(e,t){var n;let r={};"function"==typeof e&&(r.loader=e);let u={...r,...t};return(0,l.default)({...u,modules:null==(n=u.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},148:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let l=n(7437),r=n(2265),u=n(912),a=n(5025);function o(e){return{default:e&&"default"in e?e.default:e}}let d={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},s=function(e){let t={...d,...e},n=(0,r.lazy)(()=>t.loader().then(o)),s=t.loading;function i(e){let o=s?(0,l.jsx)(s,{isLoading:!0,pastDelay:!0,error:null}):null,d=!t.ssr||!!t.loading,i=d?r.Suspense:r.Fragment,f=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(u.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(i,{...d?{fallback:o}:{},children:f})}return i.displayName="LoadableComponent",i}},5025:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return o}});let l=n(7437),r=n(4887),u=n(8011),a=n(5759);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=u.workAsyncStorage.getStore();if(void 0===n)return null;let o=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>{let t=n.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,l.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},6467:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});var l=n(7437),r=n(551);let u=n.n(r)()(async()=>({default:(await n.e(115).then(n.bind(n,8115))).default}),{loadableGenerated:{webpack:()=>[8115]},loading:()=>(0,l.jsx)("div",{className:"h-8 w-8 animate-pulse bg-primary-50"}),ssr:!1}),a=function(){return(0,l.jsx)(u,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(6437)),_N_E=e.O()}]);