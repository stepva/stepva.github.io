(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5656)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(3297),a=n(4634),f=n(4611),i=n(3794),c=n(2725),s=n(3462),d=n(1018),p=n(7190),h=n(1210),v=n(8684);let y=new Set;function b(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:f.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let n,r;let{href:f,as:y,children:g,prefetch:m,passHref:j,replace:x,shallow:C,scroll:M,locale:E,onClick:k,onMouseEnter:O,onTouchStart:P,legacyBehavior:w=!1}=e,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==m,R=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),I=null!=R?R:T,S=!R,{href:U,as:A}=l.default.useMemo(()=>{if(!R){let e=_(f);return{href:e,as:y?_(y):e}}let[e,t]=u.resolveHref(R,f,!0);return{href:e,as:y?u.resolveHref(R,y):t||e}},[R,f,y]),D=l.default.useRef(U),H=l.default.useRef(A);w&&(r=l.default.Children.only(n));let K=w?r&&"object"==typeof r&&r.ref:t,[B,X,Z]=p.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(H.current!==A||D.current!==U)&&(Z(),H.current=A,D.current=U),B(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[A,K,U,Z,B]);l.default.useEffect(()=>{I&&X&&N&&b(I,U,A,{locale:E},S)},[A,U,X,E,N,null==R?void 0:R.locale,I,S]);let z={ref:q,onClick(e){w||"function"!=typeof k||k(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,u,f,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:f}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?l.default.startTransition(h):h()}(e,I,U,A,x,C,M,E,S,N)},onMouseEnter(e){w||"function"!=typeof O||O(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(N||!S)&&b(I,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(N||!S)&&b(I,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(i.isAbsoluteUrl(A))z.href=A;else if(!w||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(A,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);z.href=t||v.addBasePath(c.addLocale(A,e,null==R?void 0:R.defaultLocale))}return w?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},L,z),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!l,[c,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[i,n,t,c,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,c,h]};var r=n(7294),o=n(9311);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(2488);var o=n(1163),l=n(1664),u=n.n(l);function a(e){let{Component:t,pageProps:n}=e,l=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:["/"!=l.pathname&&(0,r.jsx)("header",{className:"flex flex-row p-3 justify-center",children:(0,r.jsx)("div",{className:"order-1 text-center",children:(0,r.jsx)("p",{className:"text-xl hover:font-bold transition-opacity",children:(0,r.jsx)(u(),{href:"/",children:"Home"})})})}),(0,r.jsx)("main",{children:(0,r.jsx)(t,{...n})})]})}},2488:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);