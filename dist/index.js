var e=require("@reach/portal"),n=require("react"),r=require("@xstate/react"),t=require("react-spring"),o=require("react-use-gesture"),i=require("focus-trap"),a=require("body-scroll-lock"),c=require("@juggle/resize-observer"),u=require("xstate");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=/*#__PURE__*/s(e),f=/*#__PURE__*/s(n);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}function v(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}var m="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function p(e,n,r){return n=(n=+n)==n?n:0,r=(r=+r)==r?r:0,(e=+e)==e&&(e=(e=e<=r?e:r)>=n?e:n),e}function y(e){var n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}var g={box:"border-box"};function h(e,r){var t=r.label,o=r.enabled,i=r.resizeSourceRef,a=n.useState(0),u=a[0],s=a[1];n.useDebugValue(t+": "+u);var l=n.useCallback(function(e){s(e[0].borderBoxSize[0].blockSize),i.current="element"},[i]);return m(function(){if(e.current&&o){var n=new c.ResizeObserver(l);return n.observe(e.current,g),function(){n.disconnect()}}},[e,l,o]),o?u:0}function S(e){return void 0===e&&(e=1e3),new Promise(function(n){return setTimeout(n,e)})}var b={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},E={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},P=u.Machine({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:d({},b,E)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:d({},b,E)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:d({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[u.assign({y:function(e,n){return n.payload.y},velocity:function(e,n){return n.payload.velocity},snapSource:function(e,n){var r=n.payload.source;return void 0===r?"custom":r}})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:function(e,n){},onSnapCancel:function(e,n){},onResizeCancel:function(e,n){},onCloseCancel:function(e,n){},onOpenEnd:function(e,n){},onSnapEnd:function(e,n){},onRezizeEnd:function(e,n){}},services:{onSnapStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onSnapEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},renderVisuallyHidden:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},activate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},deactivate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openImmediately:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},snapSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},resizeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},closeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}}},guards:{initiallyClosed:function(e){return"CLOSED"===e.initialState},initiallyOpen:function(e){return"OPEN"===e.initialState}}}),R=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","expandOnContentDrag"],C=["velocity"],k=["onRest","config"],x=t.config.default,O=x.tension,D=x.friction,N=f.default.forwardRef(function(e,c){var u=e.children,s=e.sibling,l=e.className,g=e.footer,S=e.header,b=e.open,E=e.initialState,x=e.lastSnapRef,N=e.initialFocusRef,j=e.onDismiss,A=e.maxHeight,L=e.defaultSnap,M=void 0===L?H:L,T=e.snapPoints,I=void 0===T?z:T,F=e.blocking,q=void 0===F||F,B=e.scrollLocking,G=void 0===B||B,V=e.style,Z=e.onSpringStart,K=e.onSpringCancel,J=e.onSpringEnd,Q=e.reserveScrollBarGap,U=void 0===Q?q:Q,W=e.expandOnContentDrag,X=void 0!==W&&W,Y=v(e,R),$=function(){var e=n.useState(!1),r=e[0],t=e[1],o=n.useState({}),i=o[0],a=o[1],c=n.useCallback(function(e){return a(function(n){var r;return d({},n,((r={})[e]=!1,r))}),function(){a(function(n){var r;return d({},n,((r={})[e]=!0,r))})}},[]);return n.useEffect(function(){var e=Object.values(i);0!==e.length&&e.every(Boolean)&&t(!0)},[i]),{ready:r,registerReady:c}}(),_=$.ready,ee=$.registerReady,ne=n.useRef(!1),re=n.useRef(Z),te=n.useRef(K),oe=n.useRef(J);n.useEffect(function(){re.current=Z,te.current=K,oe.current=J},[K,Z,J]);var ie,ae,ce=t.useSpring(function(){return{y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0}}),ue=ce[0],se=ce[1],le=n.useRef(null),fe=n.useRef(null),de=n.useRef(null),ve=n.useRef(null),me=n.useRef(null),pe=n.useRef(null),ye=n.useRef(0),ge=n.useRef(),he=n.useRef(!1),Se=(ie=n.useMemo(function(){return"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null},[]),ae=n.useRef(null==ie?void 0:ie.matches),n.useDebugValue(ae.current?"reduce":"no-preference"),n.useEffect(function(){var e=function(e){ae.current=e.matches};return null==ie||ie.addListener(e),function(){return null==ie?void 0:ie.removeListener(e)}},[ie]),ae),be=function(e){var r=e.targetRef,t=e.enabled,o=e.reserveScrollBarGap,i=n.useRef({activate:function(){throw new TypeError("Tried to activate scroll lock too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return i.current.deactivate(),void(i.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1;i.current={activate:function(){n||(n=!0,a.disableBodyScroll(e,{allowTouchMove:function(e){return e.closest("[data-body-scroll-lock-ignore]")},reserveScrollBarGap:o}))},deactivate:function(){n&&(n=!1,a.enableBodyScroll(e))}}},[t,r,o]),i}({targetRef:fe,enabled:_&&G,reserveScrollBarGap:U}),Ee=function(e){var r=e.targetRef,t=e.enabled,o=n.useRef({activate:function(){throw new TypeError("Tried to activate aria hider too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return o.current.deactivate(),void(o.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1,i=[],a=[];o.current={activate:function(){if(!n){n=!0;var r=e.parentNode;document.querySelectorAll("body > *").forEach(function(e){if(e!==r){var n=e.getAttribute("aria-hidden");null!==n&&"false"!==n||(i.push(n),a.push(e),e.setAttribute("aria-hidden","true"))}})}},deactivate:function(){n&&(n=!1,a.forEach(function(e,n){var r=i[n];null===r?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r)}),i=[],a=[])}}},[r,t]),o}({targetRef:le,enabled:_&&q}),Pe=function(e){var r=e.targetRef,t=e.fallbackRef,o=e.initialFocusRef,a=e.enabled,c=n.useRef({activate:function(){throw new TypeError("Tried to activate focus trap too early")},deactivate:function(){}});return n.useDebugValue(a?"Enabled":"Disabled"),n.useEffect(function(){if(!a)return c.current.deactivate(),void(c.current={activate:function(){},deactivate:function(){}});var e=t.current,n=i.createFocusTrap(r.current,{onActivate:void 0,initialFocus:o?function(){return(null==o?void 0:o.current)||e}:void 0,fallbackFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!1}),u=!1;c.current={activate:function(){try{return u?Promise.resolve():(u=!0,Promise.resolve(n.activate()).then(function(){return Promise.resolve(new Promise(function(e){return setTimeout(function(){return e(void 0)},0)})).then(function(){})}))}catch(e){return Promise.reject(e)}},deactivate:function(){u&&(u=!1,n.deactivate())}}},[a,t,o,r]),c}({targetRef:le,fallbackRef:pe,initialFocusRef:N||void 0,enabled:_&&q&&!1!==N}),Re=function(e){var r=e.getSnapPoints,t=e.heightRef,o=e.lastSnapRef,i=e.ready,a=function(e){var r=e.contentRef,t=e.controlledMaxHeight,o=e.footerEnabled,i=e.footerRef,a=e.headerEnabled,c=e.headerRef,u=e.registerReady,s=e.resizeSourceRef,l=n.useMemo(function(){return u("contentHeight")},[u]),f=function(e,r,t){var o=n.useMemo(function(){return r("maxHeight")},[r]),i=n.useState(function(){return y(e)||"undefined"!=typeof window?window.innerHeight:0}),a=i[0],c=i[1],u=a>0,s=n.useRef(0);return n.useDebugValue(e?"controlled":"auto"),n.useEffect(function(){u&&o()},[u,o]),m(function(){if(e)return c(y(e)),void(t.current="maxheightprop");var n=function(){s.current||(s.current=requestAnimationFrame(function(){c(window.innerHeight),t.current="window",s.current=0}))};return window.addEventListener("resize",n),c(window.innerHeight),t.current="window",o(),function(){window.removeEventListener("resize",n),cancelAnimationFrame(s.current)}},[e,o,t]),a}(t,u,s),d=h(c,{label:"headerHeight",enabled:a,resizeSourceRef:s}),v=h(r,{label:"contentHeight",enabled:!0,resizeSourceRef:s}),p=h(i,{label:"footerHeight",enabled:o,resizeSourceRef:s}),g=Math.min(f-d-p,v)+d+p;n.useDebugValue("minHeight: "+g);var S=v>0;return n.useEffect(function(){S&&l()},[S,l]),{maxHeight:f,minHeight:g,headerHeight:d,footerHeight:p}}({contentRef:e.contentRef,controlledMaxHeight:e.controlledMaxHeight,footerEnabled:e.footerEnabled,footerRef:e.footerRef,headerEnabled:e.headerEnabled,headerRef:e.headerRef,registerReady:e.registerReady,resizeSourceRef:e.resizeSourceRef}),c=a.maxHeight,u=a.minHeight,s=a.headerHeight,l=a.footerHeight,f=function(e,n){var r=[].concat(e).map(y).reduce(function(e,r){return e.add(p(r,0,n)),e},new Set),t=Array.from(r),o=Math.min.apply(Math,t);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");var i=Math.max.apply(Math,t);if(Number.isNaN(i))throw new TypeError("maxSnap is NaN");return{snapPoints:t,minSnap:o,maxSnap:i}}(i?r({height:t.current,footerHeight:l,headerHeight:s,minHeight:u,maxHeight:c}):[0],c),d=f.snapPoints,v=f.minSnap,g=f.maxSnap;return n.useDebugValue("minSnap: "+v+", maxSnap:"+g),{minSnap:v,maxSnap:g,findSnap:function(e){var n=y("function"==typeof e?e({footerHeight:l,headerHeight:s,height:t.current,minHeight:u,maxHeight:c,snapPoints:d,lastSnap:o.current}):e);return d.reduce(function(e,r){return Math.abs(r-n)<Math.abs(e-n)?r:e},v)},maxHeight:c}}({contentRef:de,controlledMaxHeight:A,footerEnabled:!!g,footerRef:me,getSnapPoints:I,headerEnabled:!1!==S,headerRef:ve,heightRef:ye,lastSnapRef:x,ready:_,registerReady:ee,resizeSourceRef:ge}),Ce=Re.minSnap,ke=Re.maxSnap,xe=Re.maxHeight,Oe=Re.findSnap,De=n.useRef(xe),Ne=n.useRef(Ce),we=n.useRef(ke),He=n.useRef(Oe),ze=n.useRef(0);m(function(){De.current=xe,we.current=ke,Ne.current=Ce,He.current=Oe,ze.current=Oe(M)},[Oe,M,xe,ke,Ce]);var je=n.useCallback(function(e){var n=e.onRest,r=e.config,t=void 0===r?{}:r,o=t.velocity,i=void 0===o?1:o,a=v(t,C),c=v(e,k);return se(d({},c,{config:d({velocity:i},a,{mass:1,tension:O,friction:Math.max(D,D+(D-D*i))}),onRest:n}))},[se]),Ae=r.useMachine(P,{devTools:!1,actions:{onOpenCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"OPEN"})},[]),onSnapCancel:n.useCallback(function(e){return null==te.current?void 0:te.current({type:"SNAP",source:e.initialState})},[]),onCloseCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"CLOSE"})},[]),onResizeCancel:n.useCallback(function(){return null==te.current?void 0:te.current({type:"RESIZE",source:ge.current})},[]),onOpenEnd:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"OPEN"})},[]),onSnapEnd:n.useCallback(function(e,n){return null==oe.current?void 0:oe.current({type:"SNAP",source:e.initialState})},[]),onResizeEnd:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"RESIZE",source:ge.current})},[])},context:{initialState:E},services:{onSnapStart:n.useCallback(function(e,n){try{return Promise.resolve(null==re.current?void 0:re.current({type:"SNAP",source:n.payload.source||"custom"}))}catch(e){return Promise.reject(e)}},[]),onOpenStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeStart:n.useCallback(function(){try{return Promise.resolve(null==re.current?void 0:re.current({type:"RESIZE",source:ge.current}))}catch(e){return Promise.reject(e)}},[]),onSnapEnd:n.useCallback(function(e,n){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"SNAP",source:e.snapSource}))}catch(e){return Promise.reject(e)}},[]),onOpenEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeEnd:n.useCallback(function(){try{return Promise.resolve(null==oe.current?void 0:oe.current({type:"RESIZE",source:ge.current}))}catch(e){return Promise.reject(e)}},[]),renderVisuallyHidden:n.useCallback(function(e,n){try{return Promise.resolve(je({y:ze.current,ready:0,maxHeight:De.current,maxSnap:we.current,minSnap:ze.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[je]),activate:n.useCallback(function(e,n){try{return ne.current=!0,Promise.resolve(Promise.all([be.current.activate(),Pe.current.activate(),Ee.current.activate()])).then(function(){})}catch(e){return Promise.reject(e)}},[Ee,Pe,be]),deactivate:n.useCallback(function(){try{return be.current.deactivate(),Pe.current.deactivate(),Ee.current.deactivate(),ne.current=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},[Ee,Pe,be]),openImmediately:n.useCallback(function(){try{return ye.current=ze.current,Promise.resolve(je({y:ze.current,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:ze.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[je]),openSmoothly:n.useCallback(function(){try{return Promise.resolve(je({y:0,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:ze.current,immediate:!0})).then(function(){return ye.current=ze.current,Promise.resolve(je({y:ze.current,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:ze.current,immediate:Se.current})).then(function(){})})}catch(e){return Promise.reject(e)}},[je,Se]),snapSmoothly:n.useCallback(function(e,n){try{var r=He.current(e.y);return ye.current=r,x.current=r,Promise.resolve(je({y:r,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:Ne.current,immediate:Se.current,config:{velocity:e.velocity}})).then(function(){})}catch(e){return Promise.reject(e)}},[je,x,Se]),resizeSmoothly:n.useCallback(function(){try{var e=He.current(ye.current);return ye.current=e,x.current=e,Promise.resolve(je({y:e,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:Ne.current,immediate:"element"!==ge.current||Se.current})).then(function(){})}catch(e){return Promise.reject(e)}},[je,x,Se]),closeSmoothly:n.useCallback(function(e,n){try{return je({minSnap:ye.current,immediate:!0}),ye.current=0,Promise.resolve(je({y:0,maxHeight:De.current,maxSnap:we.current,immediate:Se.current})).then(function(){return Promise.resolve(je({ready:0,immediate:!0})).then(function(){})})}catch(e){return Promise.reject(e)}},[je,Se])}}),Le=Ae[0],Me=Ae[1];n.useEffect(function(){_&&Me(b?"OPEN":"CLOSE")},[b,Me,_]),m(function(){(xe||ke||Ce)&&Me("RESIZE")},[xe,ke,Ce,Me]),n.useEffect(function(){return function(){be.current.deactivate(),Pe.current.deactivate(),Ee.current.deactivate()}},[Ee,Pe,be]),n.useImperativeHandle(c,function(){return{snapTo:function(e,n){var r=void 0===n?{}:n,t=r.velocity,o=void 0===t?1:t,i=r.source,a=void 0===i?"custom":i;Me("SNAP",{payload:{y:He.current(e),velocity:o,source:a}})},get height(){return ye.current}}},[Me]),n.useEffect(function(){var e=fe.current,n=function(e){he.current&&e.preventDefault()},r=function(n){e.scrollTop<0&&(requestAnimationFrame(function(){e.style.overflow="hidden",e.scrollTop=0,e.style.removeProperty("overflow")}),n.preventDefault())};return X&&(e.addEventListener("scroll",n),e.addEventListener("touchmove",n),e.addEventListener("touchstart",r)),function(){e.removeEventListener("scroll",n),e.removeEventListener("touchmove",n),e.removeEventListener("touchstart",r)}},[X,fe]);var Te=o.useDrag(function(e){var n=e.args,r=(void 0===n?[]:n)[0],t=void 0===r?{}:r,i=t.closeOnTap,a=void 0!==i&&i,c=t.isContentDragging,u=void 0!==c&&c,s=e.cancel,l=e.direction[1],f=e.down,d=e.first,v=e.last,m=e.memo,p=void 0===m?ue.y.get():m,y=e.tap,g=e.velocity,h=-1*e.movement[1];if(!ne.current)return s(),p;if(j&&a&&y)return s(),setTimeout(function(){return j()},0),p;if(y)return p;var S=p+h,b=h*g,E=Math.max(Ne.current,Math.min(we.current,S+2*b));if(!f&&j&&l>0&&S+b<Ne.current/2)return s(),j(),p;var P=f?j||Ne.current!==we.current?o.rubberbandIfOutOfBounds(S,j?0:Ne.current,we.current,.55):S<Ne.current?o.rubberbandIfOutOfBounds(S,Ne.current,2*we.current,.55):o.rubberbandIfOutOfBounds(S,Ne.current/2,we.current,.55):E;return X&&u?(P>=we.current&&(P=we.current),p===we.current&&fe.current.scrollTop>0&&(P=we.current),he.current=P<we.current):he.current=!1,d&&Me("DRAG"),v?(Me("SNAP",{payload:{y:P,velocity:g>.05?g:1,source:"dragging"}}),p):(se({y:P,ready:1,maxHeight:De.current,maxSnap:we.current,minSnap:Ne.current,immediate:!0,config:{velocity:g}}),p)},{filterTaps:!0});if(Number.isNaN(we.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(Ne.current))throw new TypeError("minSnapRef is NaN!!");var Ie=function(e){var n,r=e.spring,o=t.interpolate([r.y,r.maxHeight],function(e,n){return Math.round(p(n-e,0,16))+"px"}),i=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return p(e,n,r)+"px"}),a=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return e<n?n-e+"px":e>r?r-e+"px":"0px"}),c=t.interpolate([r.y,r.maxSnap],function(e,n){return e>=n?Math.ceil(e-n):0}),u=t.interpolate([r.y,r.minSnap],function(e,n){if(!n)return 0;var r=Math.max(n/2-45,0);return p((e-r)*(1/(Math.min(n/2+45,n)-r)+0),0,1)}),s=t.interpolate([r.y,r.minSnap],function(e,n){return n?p(e/n,0,1):0});return(n={})["--rsbs-content-opacity"]=u,n["--rsbs-backdrop-opacity"]=s,n["--rsbs-antigap-scale-y"]=c,n["--rsbs-overlay-translate-y"]=a,n["--rsbs-overlay-rounded"]=o,n["--rsbs-overlay-h"]=i,n}({spring:ue});/*#__PURE__*/return f.default.createElement(t.animated.div,d({},Y,{"data-rsbs-root":!0,"data-rsbs-state":w.find(Le.matches),"data-rsbs-is-blocking":q,"data-rsbs-is-dismissable":!!j,"data-rsbs-has-header":!!S,"data-rsbs-has-footer":!!g,className:l,ref:le,style:d({},Ie,V,{opacity:ue.ready})}),s,q&&/*#__PURE__*/f.default.createElement("div",d({key:"backdrop","data-rsbs-backdrop":!0},Te({closeOnTap:!0}))),/*#__PURE__*/f.default.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:pe,onKeyDown:function(e){"Escape"===e.key&&(e.stopPropagation(),j&&j())}},!1!==S&&/*#__PURE__*/f.default.createElement("div",d({key:"header","data-rsbs-header":!0,ref:ve},Te()),S),/*#__PURE__*/f.default.createElement("div",d({key:"scroll","data-rsbs-scroll":!0,ref:fe},X?Te({isContentDragging:!0}):{}),/*#__PURE__*/f.default.createElement("div",{"data-rsbs-content":!0,ref:de},u)),g&&/*#__PURE__*/f.default.createElement("div",d({key:"footer",ref:me,"data-rsbs-footer":!0},Te()),g)))}),w=["closed","opening","open","closing","dragging","snapping","resizing"];function H(e){var n=e.lastSnap;return null!=n?n:Math.min.apply(Math,e.snapPoints)}function z(e){return e.minHeight}var j=["onSpringStart","onSpringEnd","skipInitialTransition"],A=n.forwardRef(function(e,r){var t=e.onSpringStart,o=e.onSpringEnd,i=e.skipInitialTransition,a=v(e,j),c=n.useState(!1),u=c[0],s=c[1],p=n.useRef(),y=n.useRef(null),g=n.useRef(i&&a.open?"OPEN":"CLOSED");m(function(){if(a.open)return cancelAnimationFrame(p.current),s(!0),function(){g.current="CLOSED"}},[a.open]);var h=n.useCallback(function(e){return Promise.resolve(null==t?void 0:t(e)).then(function(){"OPEN"===e.type&&cancelAnimationFrame(p.current)})},[t]),S=n.useCallback(function(e){return Promise.resolve(null==o?void 0:o(e)).then(function(){"CLOSE"===e.type&&(p.current=requestAnimationFrame(function(){return s(!1)}))})},[o]);return u?/*#__PURE__*/f.default.createElement(l.default,{"data-rsbs-portal":!0},/*#__PURE__*/f.default.createElement(N,d({},a,{lastSnapRef:y,ref:r,initialState:g.current,onSpringStart:h,onSpringEnd:S}))):null});exports.BottomSheet=A;
//# sourceMappingURL=index.js.map
