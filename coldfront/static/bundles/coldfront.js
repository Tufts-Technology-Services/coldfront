var top="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce(function(n,e){return n.concat([e+"-"+start,e+"-"+end])},[]),placements=[].concat(basePlacements,[auto]).reduce(function(n,e){return n.concat([e,e+"-"+start,e+"-"+end])},[]),beforeRead="beforeRead",read="read",afterRead="afterRead",beforeMain="beforeMain",main="main",afterMain="afterMain",beforeWrite="beforeWrite",write="write",afterWrite="afterWrite",modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(n){return n?(n.nodeName||"").toLowerCase():null}function getWindow(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function isElement$1(n){var e=getWindow(n).Element;return n instanceof e||n instanceof Element}function isHTMLElement(n){var e=getWindow(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function isShadowRoot(n){if(typeof ShadowRoot>"u")return!1;var e=getWindow(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function applyStyles(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},a=e.attributes[t]||{},s=e.elements[t];!isHTMLElement(s)||!getNodeName(s)||(Object.assign(s.style,r),Object.keys(a).forEach(function(o){var l=a[o];l===!1?s.removeAttribute(o):s.setAttribute(o,l===!0?"":l)}))})}function effect$2(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var a=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),l=o.reduce(function(c,d){return c[d]="",c},{});!isHTMLElement(a)||!getNodeName(a)||(Object.assign(a.style,l),Object.keys(s).forEach(function(c){a.removeAttribute(c)}))})}}const applyStyles$1={name:"applyStyles",enabled:!0,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(n){return n.split("-")[0]}var max=Math.max,min=Math.min,round$1=Math.round;function getUAString(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),a=1,s=1;e&&isHTMLElement(n)&&(a=n.offsetWidth>0&&round$1(r.width)/n.offsetWidth||1,s=n.offsetHeight>0&&round$1(r.height)/n.offsetHeight||1);var o=isElement$1(n)?getWindow(n):window,l=o.visualViewport,c=!isLayoutViewport()&&t,d=(r.left+(c&&l?l.offsetLeft:0))/a,f=(r.top+(c&&l?l.offsetTop:0))/s,p=r.width/a,b=r.height/s;return{width:p,height:b,top:f,right:d+p,bottom:f+b,left:d,x:d,y:f}}function getLayoutRect(n){var e=getBoundingClientRect(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function contains(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&isShadowRoot(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function getComputedStyle$2(n){return getWindow(n).getComputedStyle(n)}function isTableElement(n){return["table","td","th"].indexOf(getNodeName(n))>=0}function getDocumentElement(n){return((isElement$1(n)?n.ownerDocument:n.document)||window.document).documentElement}function getParentNode(n){return getNodeName(n)==="html"?n:n.assignedSlot||n.parentNode||(isShadowRoot(n)?n.host:null)||getDocumentElement(n)}function getTrueOffsetParent(n){return!isHTMLElement(n)||getComputedStyle$2(n).position==="fixed"?null:n.offsetParent}function getContainingBlock(n){var e=/firefox/i.test(getUAString()),t=/Trident/i.test(getUAString());if(t&&isHTMLElement(n)){var r=getComputedStyle$2(n);if(r.position==="fixed")return null}var a=getParentNode(n);for(isShadowRoot(a)&&(a=a.host);isHTMLElement(a)&&["html","body"].indexOf(getNodeName(a))<0;){var s=getComputedStyle$2(a);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return a;a=a.parentNode}return null}function getOffsetParent(n){for(var e=getWindow(n),t=getTrueOffsetParent(n);t&&isTableElement(t)&&getComputedStyle$2(t).position==="static";)t=getTrueOffsetParent(t);return t&&(getNodeName(t)==="html"||getNodeName(t)==="body"&&getComputedStyle$2(t).position==="static")?e:t||getContainingBlock(n)||e}function getMainAxisFromPlacement(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function within(n,e,t){return max(n,min(e,t))}function withinMaxClamp(n,e,t){var r=within(n,e,t);return r>t?t:r}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(n){return Object.assign({},getFreshSideObject(),n)}function expandToHashMap(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var toPaddingObject=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,mergePaddingObject(typeof e!="number"?e:expandToHashMap(e,basePlacements))};function arrow(n){var e,t=n.state,r=n.name,a=n.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,l=getBasePlacement(t.placement),c=getMainAxisFromPlacement(l),d=[left,right].indexOf(l)>=0,f=d?"height":"width";if(!(!s||!o)){var p=toPaddingObject(a.padding,t),b=getLayoutRect(s),v=c==="y"?top:left,x=c==="y"?bottom:right,_=t.rects.reference[f]+t.rects.reference[c]-o[c]-t.rects.popper[f],E=o[c]-t.rects.reference[c],A=getOffsetParent(s),O=A?c==="y"?A.clientHeight||0:A.clientWidth||0:0,$=_/2-E/2,P=p[v],L=O-b[f]-p[x],B=O/2-b[f]/2+$,g=within(P,B,L),q=c;t.modifiersData[r]=(e={},e[q]=g,e.centerOffset=g-B,e)}}function effect$1(n){var e=n.state,t=n.options,r=t.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||contains(e.elements.popper,a)&&(e.elements.arrow=a))}const arrow$1={name:"arrow",enabled:!0,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getVariation(n){return n.split("-")[1]}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(n,e){var t=n.x,r=n.y,a=e.devicePixelRatio||1;return{x:round$1(t*a)/a||0,y:round$1(r*a)/a||0}}function mapToStyles(n){var e,t=n.popper,r=n.popperRect,a=n.placement,s=n.variation,o=n.offsets,l=n.position,c=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,p=n.isFixed,b=o.x,v=b===void 0?0:b,x=o.y,_=x===void 0?0:x,E=typeof f=="function"?f({x:v,y:_}):{x:v,y:_};v=E.x,_=E.y;var A=o.hasOwnProperty("x"),O=o.hasOwnProperty("y"),$=left,P=top,L=window;if(d){var B=getOffsetParent(t),g="clientHeight",q="clientWidth";if(B===getWindow(t)&&(B=getDocumentElement(t),getComputedStyle$2(B).position!=="static"&&l==="absolute"&&(g="scrollHeight",q="scrollWidth")),B=B,a===top||(a===left||a===right)&&s===end){P=bottom;var Y=p&&B===L&&L.visualViewport?L.visualViewport.height:B[g];_-=Y-r.height,_*=c?1:-1}if(a===left||(a===top||a===bottom)&&s===end){$=right;var X=p&&B===L&&L.visualViewport?L.visualViewport.width:B[q];v-=X-r.width,v*=c?1:-1}}var ee=Object.assign({position:l},d&&unsetSides),ue=f===!0?roundOffsetsByDPR({x:v,y:_},getWindow(t)):{x:v,y:_};if(v=ue.x,_=ue.y,c){var J;return Object.assign({},ee,(J={},J[P]=O?"0":"",J[$]=A?"0":"",J.transform=(L.devicePixelRatio||1)<=1?"translate("+v+"px, "+_+"px)":"translate3d("+v+"px, "+_+"px, 0)",J))}return Object.assign({},ee,(e={},e[P]=O?_+"px":"",e[$]=A?v+"px":"",e.transform="",e))}function computeStyles(n){var e=n.state,t=n.options,r=t.gpuAcceleration,a=r===void 0?!0:r,s=t.adaptive,o=s===void 0?!0:s,l=t.roundOffsets,c=l===void 0?!0:l,d={placement:getBasePlacement(e.placement),variation:getVariation(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,mapToStyles(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,mapToStyles(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const computeStyles$1={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:!0};function effect(n){var e=n.state,t=n.instance,r=n.options,a=r.scroll,s=a===void 0?!0:a,o=r.resize,l=o===void 0?!0:o,c=getWindow(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&d.forEach(function(f){f.addEventListener("scroll",t.update,passive)}),l&&c.addEventListener("resize",t.update,passive),function(){s&&d.forEach(function(f){f.removeEventListener("scroll",t.update,passive)}),l&&c.removeEventListener("resize",t.update,passive)}}const eventListeners={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(n){return n.replace(/left|right|bottom|top/g,function(e){return hash$1[e]})}var hash={start:"end",end:"start"};function getOppositeVariationPlacement(n){return n.replace(/start|end/g,function(e){return hash[e]})}function getWindowScroll(n){var e=getWindow(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function getWindowScrollBarX(n){return getBoundingClientRect(getDocumentElement(n)).left+getWindowScroll(n).scrollLeft}function getViewportRect(n,e){var t=getWindow(n),r=getDocumentElement(n),a=t.visualViewport,s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(a){s=a.width,o=a.height;var d=isLayoutViewport();(d||!d&&e==="fixed")&&(l=a.offsetLeft,c=a.offsetTop)}return{width:s,height:o,x:l+getWindowScrollBarX(n),y:c}}function getDocumentRect(n){var e,t=getDocumentElement(n),r=getWindowScroll(n),a=(e=n.ownerDocument)==null?void 0:e.body,s=max(t.scrollWidth,t.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=max(t.scrollHeight,t.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),l=-r.scrollLeft+getWindowScrollBarX(n),c=-r.scrollTop;return getComputedStyle$2(a||t).direction==="rtl"&&(l+=max(t.clientWidth,a?a.clientWidth:0)-s),{width:s,height:o,x:l,y:c}}function isScrollParent(n){var e=getComputedStyle$2(n),t=e.overflow,r=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+a+r)}function getScrollParent(n){return["html","body","#document"].indexOf(getNodeName(n))>=0?n.ownerDocument.body:isHTMLElement(n)&&isScrollParent(n)?n:getScrollParent(getParentNode(n))}function listScrollParents(n,e){var t;e===void 0&&(e=[]);var r=getScrollParent(n),a=r===((t=n.ownerDocument)==null?void 0:t.body),s=getWindow(r),o=a?[s].concat(s.visualViewport||[],isScrollParent(r)?r:[]):r,l=e.concat(o);return a?l:l.concat(listScrollParents(getParentNode(o)))}function rectToClientRect(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function getInnerBoundingClientRect(n,e){var t=getBoundingClientRect(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function getClientRectFromMixedType(n,e,t){return e===viewport?rectToClientRect(getViewportRect(n,t)):isElement$1(e)?getInnerBoundingClientRect(e,t):rectToClientRect(getDocumentRect(getDocumentElement(n)))}function getClippingParents(n){var e=listScrollParents(getParentNode(n)),t=["absolute","fixed"].indexOf(getComputedStyle$2(n).position)>=0,r=t&&isHTMLElement(n)?getOffsetParent(n):n;return isElement$1(r)?e.filter(function(a){return isElement$1(a)&&contains(a,r)&&getNodeName(a)!=="body"}):[]}function getClippingRect(n,e,t,r){var a=e==="clippingParents"?getClippingParents(n):[].concat(e),s=[].concat(a,[t]),o=s[0],l=s.reduce(function(c,d){var f=getClientRectFromMixedType(n,d,r);return c.top=max(f.top,c.top),c.right=min(f.right,c.right),c.bottom=min(f.bottom,c.bottom),c.left=max(f.left,c.left),c},getClientRectFromMixedType(n,o,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function computeOffsets(n){var e=n.reference,t=n.element,r=n.placement,a=r?getBasePlacement(r):null,s=r?getVariation(r):null,o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,c;switch(a){case top:c={x:o,y:e.y-t.height};break;case bottom:c={x:o,y:e.y+e.height};break;case right:c={x:e.x+e.width,y:l};break;case left:c={x:e.x-t.width,y:l};break;default:c={x:e.x,y:e.y}}var d=a?getMainAxisFromPlacement(a):null;if(d!=null){var f=d==="y"?"height":"width";switch(s){case start:c[d]=c[d]-(e[f]/2-t[f]/2);break;case end:c[d]=c[d]+(e[f]/2-t[f]/2);break}}return c}function detectOverflow(n,e){e===void 0&&(e={});var t=e,r=t.placement,a=r===void 0?n.placement:r,s=t.strategy,o=s===void 0?n.strategy:s,l=t.boundary,c=l===void 0?clippingParents:l,d=t.rootBoundary,f=d===void 0?viewport:d,p=t.elementContext,b=p===void 0?popper:p,v=t.altBoundary,x=v===void 0?!1:v,_=t.padding,E=_===void 0?0:_,A=mergePaddingObject(typeof E!="number"?E:expandToHashMap(E,basePlacements)),O=b===popper?reference:popper,$=n.rects.popper,P=n.elements[x?O:b],L=getClippingRect(isElement$1(P)?P:P.contextElement||getDocumentElement(n.elements.popper),c,f,o),B=getBoundingClientRect(n.elements.reference),g=computeOffsets({reference:B,element:$,placement:a}),q=rectToClientRect(Object.assign({},$,g)),Y=b===popper?q:B,X={top:L.top-Y.top+A.top,bottom:Y.bottom-L.bottom+A.bottom,left:L.left-Y.left+A.left,right:Y.right-L.right+A.right},ee=n.modifiersData.offset;if(b===popper&&ee){var ue=ee[a];Object.keys(X).forEach(function(J){var pe=[right,bottom].indexOf(J)>=0?1:-1,se=[top,bottom].indexOf(J)>=0?"y":"x";X[J]+=ue[se]*pe})}return X}function computeAutoPlacement(n,e){e===void 0&&(e={});var t=e,r=t.placement,a=t.boundary,s=t.rootBoundary,o=t.padding,l=t.flipVariations,c=t.allowedAutoPlacements,d=c===void 0?placements:c,f=getVariation(r),p=f?l?variationPlacements:variationPlacements.filter(function(x){return getVariation(x)===f}):basePlacements,b=p.filter(function(x){return d.indexOf(x)>=0});b.length===0&&(b=p);var v=b.reduce(function(x,_){return x[_]=detectOverflow(n,{placement:_,boundary:a,rootBoundary:s,padding:o})[getBasePlacement(_)],x},{});return Object.keys(v).sort(function(x,_){return v[x]-v[_]})}function getExpandedFallbackPlacements(n){if(getBasePlacement(n)===auto)return[];var e=getOppositePlacement(n);return[getOppositeVariationPlacement(n),e,getOppositeVariationPlacement(e)]}function flip(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var a=t.mainAxis,s=a===void 0?!0:a,o=t.altAxis,l=o===void 0?!0:o,c=t.fallbackPlacements,d=t.padding,f=t.boundary,p=t.rootBoundary,b=t.altBoundary,v=t.flipVariations,x=v===void 0?!0:v,_=t.allowedAutoPlacements,E=e.options.placement,A=getBasePlacement(E),O=A===E,$=c||(O||!x?[getOppositePlacement(E)]:getExpandedFallbackPlacements(E)),P=[E].concat($).reduce(function(Re,Fe){return Re.concat(getBasePlacement(Fe)===auto?computeAutoPlacement(e,{placement:Fe,boundary:f,rootBoundary:p,padding:d,flipVariations:x,allowedAutoPlacements:_}):Fe)},[]),L=e.rects.reference,B=e.rects.popper,g=new Map,q=!0,Y=P[0],X=0;X<P.length;X++){var ee=P[X],ue=getBasePlacement(ee),J=getVariation(ee)===start,pe=[top,bottom].indexOf(ue)>=0,se=pe?"width":"height",re=detectOverflow(e,{placement:ee,boundary:f,rootBoundary:p,altBoundary:b,padding:d}),oe=pe?J?right:left:J?bottom:top;L[se]>B[se]&&(oe=getOppositePlacement(oe));var Oe=getOppositePlacement(oe),Ee=[];if(s&&Ee.push(re[ue]<=0),l&&Ee.push(re[oe]<=0,re[Oe]<=0),Ee.every(function(Re){return Re})){Y=ee,q=!1;break}g.set(ee,Ee)}if(q)for(var Be=x?3:1,$e=function(Fe){var ge=P.find(function(Me){var Le=g.get(Me);if(Le)return Le.slice(0,Fe).every(function(st){return st})});if(ge)return Y=ge,"break"},Se=Be;Se>0;Se--){var je=$e(Se);if(je==="break")break}e.placement!==Y&&(e.modifiersData[r]._skip=!0,e.placement=Y,e.reset=!0)}}const flip$1={name:"flip",enabled:!0,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:!1}};function getSideOffsets(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function isAnySideFullyClipped(n){return[top,right,bottom,left].some(function(e){return n[e]>=0})}function hide(n){var e=n.state,t=n.name,r=e.rects.reference,a=e.rects.popper,s=e.modifiersData.preventOverflow,o=detectOverflow(e,{elementContext:"reference"}),l=detectOverflow(e,{altBoundary:!0}),c=getSideOffsets(o,r),d=getSideOffsets(l,a,s),f=isAnySideFullyClipped(c),p=isAnySideFullyClipped(d);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}const hide$1={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hide};function distanceAndSkiddingToXY(n,e,t){var r=getBasePlacement(n),a=[left,top].indexOf(r)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=s[0],l=s[1];return o=o||0,l=(l||0)*a,[left,right].indexOf(r)>=0?{x:l,y:o}:{x:o,y:l}}function offset(n){var e=n.state,t=n.options,r=n.name,a=t.offset,s=a===void 0?[0,0]:a,o=placements.reduce(function(f,p){return f[p]=distanceAndSkiddingToXY(p,e.rects,s),f},{}),l=o[e.placement],c=l.x,d=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=d),e.modifiersData[r]=o}const offset$1={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(n){var e=n.state,t=n.name;e.modifiersData[t]=computeOffsets({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const popperOffsets$1={name:"popperOffsets",enabled:!0,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(n){return n==="x"?"y":"x"}function preventOverflow(n){var e=n.state,t=n.options,r=n.name,a=t.mainAxis,s=a===void 0?!0:a,o=t.altAxis,l=o===void 0?!1:o,c=t.boundary,d=t.rootBoundary,f=t.altBoundary,p=t.padding,b=t.tether,v=b===void 0?!0:b,x=t.tetherOffset,_=x===void 0?0:x,E=detectOverflow(e,{boundary:c,rootBoundary:d,padding:p,altBoundary:f}),A=getBasePlacement(e.placement),O=getVariation(e.placement),$=!O,P=getMainAxisFromPlacement(A),L=getAltAxis(P),B=e.modifiersData.popperOffsets,g=e.rects.reference,q=e.rects.popper,Y=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,X=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),ee=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,ue={x:0,y:0};if(B){if(s){var J,pe=P==="y"?top:left,se=P==="y"?bottom:right,re=P==="y"?"height":"width",oe=B[P],Oe=oe+E[pe],Ee=oe-E[se],Be=v?-q[re]/2:0,$e=O===start?g[re]:q[re],Se=O===start?-q[re]:-g[re],je=e.elements.arrow,Re=v&&je?getLayoutRect(je):{width:0,height:0},Fe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:getFreshSideObject(),ge=Fe[pe],Me=Fe[se],Le=within(0,g[re],Re[re]),st=$?g[re]/2-Be-Le-ge-X.mainAxis:$e-Le-ge-X.mainAxis,Xe=$?-g[re]/2+Be+Le+Me+X.mainAxis:Se+Le+Me+X.mainAxis,Et=e.elements.arrow&&getOffsetParent(e.elements.arrow),et=Et?P==="y"?Et.clientTop||0:Et.clientLeft||0:0,bt=(J=ee?.[P])!=null?J:0,jt=oe+st-bt-et,Bt=oe+Xe-bt,xt=within(v?min(Oe,jt):Oe,oe,v?max(Ee,Bt):Ee);B[P]=xt,ue[P]=xt-oe}if(l){var dt,Qe=P==="x"?top:left,wt=P==="x"?bottom:right,ot=B[L],Dt=L==="y"?"height":"width",qe=ot+E[Qe],tt=ot-E[wt],nt=[top,left].indexOf(A)!==-1,ce=(dt=ee?.[L])!=null?dt:0,Ve=nt?qe:ot-g[Dt]-q[Dt]-ce+X.altAxis,Pt=nt?ot+g[Dt]+q[Dt]-ce-X.altAxis:tt,Vt=v&&nt?withinMaxClamp(Ve,ot,Pt):within(v?Ve:qe,ot,v?Pt:tt);B[L]=Vt,ue[L]=Vt-ot}e.modifiersData[r]=ue}}const preventOverflow$1={name:"preventOverflow",enabled:!0,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function getNodeScroll(n){return n===getWindow(n)||!isHTMLElement(n)?getWindowScroll(n):getHTMLElementScroll(n)}function isElementScaled(n){var e=n.getBoundingClientRect(),t=round$1(e.width)/n.offsetWidth||1,r=round$1(e.height)/n.offsetHeight||1;return t!==1||r!==1}function getCompositeRect(n,e,t){t===void 0&&(t=!1);var r=isHTMLElement(e),a=isHTMLElement(e)&&isElementScaled(e),s=getDocumentElement(e),o=getBoundingClientRect(n,a,t),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!t)&&((getNodeName(e)!=="body"||isScrollParent(s))&&(l=getNodeScroll(e)),isHTMLElement(e)?(c=getBoundingClientRect(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=getWindowScrollBarX(s))),{x:o.left+l.scrollLeft-c.x,y:o.top+l.scrollTop-c.y,width:o.width,height:o.height}}function order(n){var e=new Map,t=new Set,r=[];n.forEach(function(s){e.set(s.name,s)});function a(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(l){if(!t.has(l)){var c=e.get(l);c&&a(c)}}),r.push(s)}return n.forEach(function(s){t.has(s.name)||a(s)}),r}function orderModifiers(n){var e=order(n);return modifierPhases.reduce(function(t,r){return t.concat(e.filter(function(a){return a.phase===r}))},[])}function debounce$3(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function mergeByName(n){var e=n.reduce(function(t,r){var a=t[r.name];return t[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function popperGenerator(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,a=e.defaultOptions,s=a===void 0?DEFAULT_OPTIONS:a;return function(l,c,d){d===void 0&&(d=s);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,s),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},p=[],b=!1,v={state:f,setOptions:function(A){var O=typeof A=="function"?A(f.options):A;_(),f.options=Object.assign({},s,f.options,O),f.scrollParents={reference:isElement$1(l)?listScrollParents(l):l.contextElement?listScrollParents(l.contextElement):[],popper:listScrollParents(c)};var $=orderModifiers(mergeByName([].concat(r,f.options.modifiers)));return f.orderedModifiers=$.filter(function(P){return P.enabled}),x(),v.update()},forceUpdate:function(){if(!b){var A=f.elements,O=A.reference,$=A.popper;if(areValidElements(O,$)){f.rects={reference:getCompositeRect(O,getOffsetParent($),f.options.strategy==="fixed"),popper:getLayoutRect($)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(X){return f.modifiersData[X.name]=Object.assign({},X.data)});for(var P=0;P<f.orderedModifiers.length;P++){if(f.reset===!0){f.reset=!1,P=-1;continue}var L=f.orderedModifiers[P],B=L.fn,g=L.options,q=g===void 0?{}:g,Y=L.name;typeof B=="function"&&(f=B({state:f,options:q,name:Y,instance:v})||f)}}}},update:debounce$3(function(){return new Promise(function(E){v.forceUpdate(),E(f)})}),destroy:function(){_(),b=!0}};if(!areValidElements(l,c))return v;v.setOptions(d).then(function(E){!b&&d.onFirstUpdate&&d.onFirstUpdate(E)});function x(){f.orderedModifiers.forEach(function(E){var A=E.name,O=E.options,$=O===void 0?{}:O,P=E.effect;if(typeof P=="function"){var L=P({state:f,name:A,instance:v,options:$}),B=function(){};p.push(L||B)}})}function _(){p.forEach(function(E){return E()}),p=[]}return v}}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1],createPopper=popperGenerator({defaultModifiers});const Popper=Object.freeze(Object.defineProperty({__proto__:null,afterMain,afterRead,afterWrite,applyStyles:applyStyles$1,arrow:arrow$1,auto,basePlacements,beforeMain,beforeRead,beforeWrite,bottom,clippingParents,computeStyles:computeStyles$1,createPopper,detectOverflow,end,eventListeners,flip:flip$1,hide:hide$1,left,main,modifierPhases,offset:offset$1,placements,popper,popperGenerator,popperOffsets:popperOffsets$1,preventOverflow:preventOverflow$1,read,reference,right,start,top,variationPlacements,viewport,write},Symbol.toStringTag,{value:"Module"}));const elementMap=new Map,Data={set(n,e,t){elementMap.has(n)||elementMap.set(n,new Map);const r=elementMap.get(n);if(!r.has(e)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(e,t)},get(n,e){return elementMap.has(n)&&elementMap.get(n).get(e)||null},remove(n,e){if(!elementMap.has(n))return;const t=elementMap.get(n);t.delete(e),t.size===0&&elementMap.delete(n)}},MAX_UID=1e6,MILLISECONDS_MULTIPLIER=1e3,TRANSITION_END="transitionend",parseSelector=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),n),toType=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),getUID=n=>{do n+=Math.floor(Math.random()*MAX_UID);while(document.getElementById(n));return n},getTransitionDurationFromElement=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const r=Number.parseFloat(e),a=Number.parseFloat(t);return!r&&!a?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*MILLISECONDS_MULTIPLIER)},triggerTransitionEnd=n=>{n.dispatchEvent(new Event(TRANSITION_END))},isElement=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),getElement=n=>isElement(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(parseSelector(n)):null,isVisible=n=>{if(!isElement(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const r=n.closest("summary");if(r&&r.parentNode!==t||r===null)return!1}return e},isDisabled=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",findShadowRoot=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?findShadowRoot(n.parentNode):null},noop$1=()=>{},reflow=n=>{n.offsetHeight},getjQuery=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,DOMContentLoadedCallbacks=[],onDOMContentLoaded=n=>{document.readyState==="loading"?(DOMContentLoadedCallbacks.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of DOMContentLoadedCallbacks)e()}),DOMContentLoadedCallbacks.push(n)):n()},isRTL=()=>document.documentElement.dir==="rtl",defineJQueryPlugin=n=>{onDOMContentLoaded(()=>{const e=getjQuery();if(e){const t=n.NAME,r=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=r,n.jQueryInterface)}})},execute=(n,e=[],t=n)=>typeof n=="function"?n.call(...e):t,executeAfterTransition=(n,e,t=!0)=>{if(!t){execute(n);return}const a=getTransitionDurationFromElement(e)+5;let s=!1;const o=({target:l})=>{l===e&&(s=!0,e.removeEventListener(TRANSITION_END,o),execute(n))};e.addEventListener(TRANSITION_END,o),setTimeout(()=>{s||triggerTransitionEnd(e)},a)},getNextActiveElement=(n,e,t,r)=>{const a=n.length;let s=n.indexOf(e);return s===-1?!t&&r?n[a-1]:n[0]:(s+=t?1:-1,r&&(s=(s+a)%a),n[Math.max(0,Math.min(s,a-1))])},namespaceRegex=/[^.]*(?=\..*)\.|.*/,stripNameRegex=/\..*/,stripUidRegex=/::\d+$/,eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"},nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function makeEventUid(n,e){return e&&`${e}::${uidEvent++}`||n.uidEvent||uidEvent++}function getElementEvents(n){const e=makeEventUid(n);return n.uidEvent=e,eventRegistry[e]=eventRegistry[e]||{},eventRegistry[e]}function bootstrapHandler(n,e){return function t(r){return hydrateObj(r,{delegateTarget:n}),t.oneOff&&EventHandler.off(n,r.type,e),e.apply(n,[r])}}function bootstrapDelegationHandler(n,e,t){return function r(a){const s=n.querySelectorAll(e);for(let{target:o}=a;o&&o!==this;o=o.parentNode)for(const l of s)if(l===o)return hydrateObj(a,{delegateTarget:o}),r.oneOff&&EventHandler.off(n,a.type,e,t),t.apply(o,[a])}}function findHandler(n,e,t=null){return Object.values(n).find(r=>r.callable===e&&r.delegationSelector===t)}function normalizeParameters(n,e,t){const r=typeof e=="string",a=r?t:e||t;let s=getTypeEvent(n);return nativeEvents.has(s)||(s=n),[r,a,s]}function addHandler(n,e,t,r,a){if(typeof e!="string"||!n)return;let[s,o,l]=normalizeParameters(e,t,r);e in customEvents&&(o=(x=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return x.call(this,_)})(o));const c=getElementEvents(n),d=c[l]||(c[l]={}),f=findHandler(d,o,s?t:null);if(f){f.oneOff=f.oneOff&&a;return}const p=makeEventUid(o,e.replace(namespaceRegex,"")),b=s?bootstrapDelegationHandler(n,t,o):bootstrapHandler(n,o);b.delegationSelector=s?t:null,b.callable=o,b.oneOff=a,b.uidEvent=p,d[p]=b,n.addEventListener(l,b,s)}function removeHandler(n,e,t,r,a){const s=findHandler(e[t],r,a);s&&(n.removeEventListener(t,s,!!a),delete e[t][s.uidEvent])}function removeNamespacedHandlers(n,e,t,r){const a=e[t]||{};for(const[s,o]of Object.entries(a))s.includes(r)&&removeHandler(n,e,t,o.callable,o.delegationSelector)}function getTypeEvent(n){return n=n.replace(stripNameRegex,""),customEvents[n]||n}const EventHandler={on(n,e,t,r){addHandler(n,e,t,r,!1)},one(n,e,t,r){addHandler(n,e,t,r,!0)},off(n,e,t,r){if(typeof e!="string"||!n)return;const[a,s,o]=normalizeParameters(e,t,r),l=o!==e,c=getElementEvents(n),d=c[o]||{},f=e.startsWith(".");if(typeof s<"u"){if(!Object.keys(d).length)return;removeHandler(n,c,o,s,a?t:null);return}if(f)for(const p of Object.keys(c))removeNamespacedHandlers(n,c,p,e.slice(1));for(const[p,b]of Object.entries(d)){const v=p.replace(stripUidRegex,"");(!l||e.includes(v))&&removeHandler(n,c,o,b.callable,b.delegationSelector)}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const r=getjQuery(),a=getTypeEvent(e),s=e!==a;let o=null,l=!0,c=!0,d=!1;s&&r&&(o=r.Event(e,t),r(n).trigger(o),l=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),d=o.isDefaultPrevented());const f=hydrateObj(new Event(e,{bubbles:l,cancelable:!0}),t);return d&&f.preventDefault(),c&&n.dispatchEvent(f),f.defaultPrevented&&o&&o.preventDefault(),f}};function hydrateObj(n,e={}){for(const[t,r]of Object.entries(e))try{n[t]=r}catch{Object.defineProperty(n,t,{configurable:!0,get(){return r}})}return n}function normalizeData(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function normalizeDataKey(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Manipulator={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${normalizeDataKey(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${normalizeDataKey(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of t){let a=r.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1),e[a]=normalizeData(n.dataset[r])}return e},getDataAttribute(n,e){return normalizeData(n.getAttribute(`data-bs-${normalizeDataKey(e)}`))}};let Config$1=class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const r=isElement(t)?Manipulator.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...isElement(t)?Manipulator.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[r,a]of Object.entries(t)){const s=e[r],o=isElement(s)?"element":toType(s);if(!new RegExp(a).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${a}".`)}}};const VERSION="5.3.8";class BaseComponent extends Config$1{constructor(e,t){super(),e=getElement(e),e&&(this._element=e,this._config=this._getConfig(t),Data.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Data.remove(this._element,this.constructor.DATA_KEY),EventHandler.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,r=!0){executeAfterTransition(e,t,r)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Data.get(getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return VERSION}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const getSelector=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>parseSelector(t)).join(","):null},SelectorEngine={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let r=n.parentNode.closest(e);for(;r;)t.push(r),r=r.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!isDisabled(t)&&isVisible(t))},getSelectorFromElement(n){const e=getSelector(n);return e&&SelectorEngine.findOne(e)?e:null},getElementFromSelector(n){const e=getSelector(n);return e?SelectorEngine.findOne(e):null},getMultipleElementsFromSelector(n){const e=getSelector(n);return e?SelectorEngine.find(e):[]}},enableDismissTrigger=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;EventHandler.on(document,t,`[data-bs-dismiss="${r}"]`,function(a){if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),isDisabled(this))return;const s=SelectorEngine.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(s)[e]()})},NAME$f="alert",DATA_KEY$a="bs.alert",EVENT_KEY$b=`.${DATA_KEY$a}`,EVENT_CLOSE=`close${EVENT_KEY$b}`,EVENT_CLOSED=`closed${EVENT_KEY$b}`,CLASS_NAME_FADE$5="fade",CLASS_NAME_SHOW$8="show";class Alert extends BaseComponent{static get NAME(){return NAME$f}close(){if(EventHandler.trigger(this._element,EVENT_CLOSE).defaultPrevented)return;this._element.classList.remove(CLASS_NAME_SHOW$8);const t=this._element.classList.contains(CLASS_NAME_FADE$5);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),EventHandler.trigger(this._element,EVENT_CLOSED),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Alert.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}enableDismissTrigger(Alert,"close");defineJQueryPlugin(Alert);const NAME$e="button",DATA_KEY$9="bs.button",EVENT_KEY$a=`.${DATA_KEY$9}`,DATA_API_KEY$6=".data-api",CLASS_NAME_ACTIVE$3="active",SELECTOR_DATA_TOGGLE$5='[data-bs-toggle="button"]',EVENT_CLICK_DATA_API$6=`click${EVENT_KEY$a}${DATA_API_KEY$6}`;class Button extends BaseComponent{static get NAME(){return NAME$e}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(CLASS_NAME_ACTIVE$3))}static jQueryInterface(e){return this.each(function(){const t=Button.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}EventHandler.on(document,EVENT_CLICK_DATA_API$6,SELECTOR_DATA_TOGGLE$5,n=>{n.preventDefault();const e=n.target.closest(SELECTOR_DATA_TOGGLE$5);Button.getOrCreateInstance(e).toggle()});defineJQueryPlugin(Button);const NAME$d="swipe",EVENT_KEY$9=".bs.swipe",EVENT_TOUCHSTART=`touchstart${EVENT_KEY$9}`,EVENT_TOUCHMOVE=`touchmove${EVENT_KEY$9}`,EVENT_TOUCHEND=`touchend${EVENT_KEY$9}`,EVENT_POINTERDOWN=`pointerdown${EVENT_KEY$9}`,EVENT_POINTERUP=`pointerup${EVENT_KEY$9}`,POINTER_TYPE_TOUCH="touch",POINTER_TYPE_PEN="pen",CLASS_NAME_POINTER_EVENT="pointer-event",SWIPE_THRESHOLD=40,Default$c={endCallback:null,leftCallback:null,rightCallback:null},DefaultType$c={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Swipe extends Config$1{constructor(e,t){super(),this._element=e,!(!e||!Swipe.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Default$c}static get DefaultType(){return DefaultType$c}static get NAME(){return NAME$d}dispose(){EventHandler.off(this._element,EVENT_KEY$9)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=SWIPE_THRESHOLD)return;const t=e/this._deltaX;this._deltaX=0,t&&execute(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(EventHandler.on(this._element,EVENT_POINTERDOWN,e=>this._start(e)),EventHandler.on(this._element,EVENT_POINTERUP,e=>this._end(e)),this._element.classList.add(CLASS_NAME_POINTER_EVENT)):(EventHandler.on(this._element,EVENT_TOUCHSTART,e=>this._start(e)),EventHandler.on(this._element,EVENT_TOUCHMOVE,e=>this._move(e)),EventHandler.on(this._element,EVENT_TOUCHEND,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===POINTER_TYPE_PEN||e.pointerType===POINTER_TYPE_TOUCH)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const NAME$c="carousel",DATA_KEY$8="bs.carousel",EVENT_KEY$8=`.${DATA_KEY$8}`,DATA_API_KEY$5=".data-api",ARROW_LEFT_KEY$1="ArrowLeft",ARROW_RIGHT_KEY$1="ArrowRight",TOUCHEVENT_COMPAT_WAIT=500,ORDER_NEXT="next",ORDER_PREV="prev",DIRECTION_LEFT="left",DIRECTION_RIGHT="right",EVENT_SLIDE=`slide${EVENT_KEY$8}`,EVENT_SLID=`slid${EVENT_KEY$8}`,EVENT_KEYDOWN$1=`keydown${EVENT_KEY$8}`,EVENT_MOUSEENTER$1=`mouseenter${EVENT_KEY$8}`,EVENT_MOUSELEAVE$1=`mouseleave${EVENT_KEY$8}`,EVENT_DRAG_START=`dragstart${EVENT_KEY$8}`,EVENT_LOAD_DATA_API$3=`load${EVENT_KEY$8}${DATA_API_KEY$5}`,EVENT_CLICK_DATA_API$5=`click${EVENT_KEY$8}${DATA_API_KEY$5}`,CLASS_NAME_CAROUSEL="carousel",CLASS_NAME_ACTIVE$2="active",CLASS_NAME_SLIDE="slide",CLASS_NAME_END="carousel-item-end",CLASS_NAME_START="carousel-item-start",CLASS_NAME_NEXT="carousel-item-next",CLASS_NAME_PREV="carousel-item-prev",SELECTOR_ACTIVE=".active",SELECTOR_ITEM=".carousel-item",SELECTOR_ACTIVE_ITEM=SELECTOR_ACTIVE+SELECTOR_ITEM,SELECTOR_ITEM_IMG=".carousel-item img",SELECTOR_INDICATORS=".carousel-indicators",SELECTOR_DATA_SLIDE="[data-bs-slide], [data-bs-slide-to]",SELECTOR_DATA_RIDE='[data-bs-ride="carousel"]',KEY_TO_DIRECTION={[ARROW_LEFT_KEY$1]:DIRECTION_RIGHT,[ARROW_RIGHT_KEY$1]:DIRECTION_LEFT},Default$b={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},DefaultType$b={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Carousel extends BaseComponent{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=SelectorEngine.findOne(SELECTOR_INDICATORS,this._element),this._addEventListeners(),this._config.ride===CLASS_NAME_CAROUSEL&&this.cycle()}static get Default(){return Default$b}static get DefaultType(){return DefaultType$b}static get NAME(){return NAME$c}next(){this._slide(ORDER_NEXT)}nextWhenVisible(){!document.hidden&&isVisible(this._element)&&this.next()}prev(){this._slide(ORDER_PREV)}pause(){this._isSliding&&triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){EventHandler.one(this._element,EVENT_SLID,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){EventHandler.one(this._element,EVENT_SLID,()=>this.to(e));return}const r=this._getItemIndex(this._getActive());if(r===e)return;const a=e>r?ORDER_NEXT:ORDER_PREV;this._slide(a,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&EventHandler.on(this._element,EVENT_KEYDOWN$1,e=>this._keydown(e)),this._config.pause==="hover"&&(EventHandler.on(this._element,EVENT_MOUSEENTER$1,()=>this.pause()),EventHandler.on(this._element,EVENT_MOUSELEAVE$1,()=>this._maybeEnableCycle())),this._config.touch&&Swipe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of SelectorEngine.find(SELECTOR_ITEM_IMG,this._element))EventHandler.on(r,EVENT_DRAG_START,a=>a.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(DIRECTION_LEFT)),rightCallback:()=>this._slide(this._directionToOrder(DIRECTION_RIGHT)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),TOUCHEVENT_COMPAT_WAIT+this._config.interval))}};this._swipeHelper=new Swipe(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=KEY_TO_DIRECTION[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=SelectorEngine.findOne(SELECTOR_ACTIVE,this._indicatorsElement);t.classList.remove(CLASS_NAME_ACTIVE$2),t.removeAttribute("aria-current");const r=SelectorEngine.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);r&&(r.classList.add(CLASS_NAME_ACTIVE$2),r.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const r=this._getActive(),a=e===ORDER_NEXT,s=t||getNextActiveElement(this._getItems(),r,a,this._config.wrap);if(s===r)return;const o=this._getItemIndex(s),l=v=>EventHandler.trigger(this._element,v,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(r),to:o});if(l(EVENT_SLIDE).defaultPrevented||!r||!s)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const f=a?CLASS_NAME_START:CLASS_NAME_END,p=a?CLASS_NAME_NEXT:CLASS_NAME_PREV;s.classList.add(p),reflow(s),r.classList.add(f),s.classList.add(f);const b=()=>{s.classList.remove(f,p),s.classList.add(CLASS_NAME_ACTIVE$2),r.classList.remove(CLASS_NAME_ACTIVE$2,p,f),this._isSliding=!1,l(EVENT_SLID)};this._queueCallback(b,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(CLASS_NAME_SLIDE)}_getActive(){return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element)}_getItems(){return SelectorEngine.find(SELECTOR_ITEM,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return isRTL()?e===DIRECTION_LEFT?ORDER_PREV:ORDER_NEXT:e===DIRECTION_LEFT?ORDER_NEXT:ORDER_PREV}_orderToDirection(e){return isRTL()?e===ORDER_PREV?DIRECTION_LEFT:DIRECTION_RIGHT:e===ORDER_PREV?DIRECTION_RIGHT:DIRECTION_LEFT}static jQueryInterface(e){return this.each(function(){const t=Carousel.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$5,SELECTOR_DATA_SLIDE,function(n){const e=SelectorEngine.getElementFromSelector(this);if(!e||!e.classList.contains(CLASS_NAME_CAROUSEL))return;n.preventDefault();const t=Carousel.getOrCreateInstance(e),r=this.getAttribute("data-bs-slide-to");if(r){t.to(r),t._maybeEnableCycle();return}if(Manipulator.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});EventHandler.on(window,EVENT_LOAD_DATA_API$3,()=>{const n=SelectorEngine.find(SELECTOR_DATA_RIDE);for(const e of n)Carousel.getOrCreateInstance(e)});defineJQueryPlugin(Carousel);const NAME$b="collapse",DATA_KEY$7="bs.collapse",EVENT_KEY$7=`.${DATA_KEY$7}`,DATA_API_KEY$4=".data-api",EVENT_SHOW$6=`show${EVENT_KEY$7}`,EVENT_SHOWN$6=`shown${EVENT_KEY$7}`,EVENT_HIDE$6=`hide${EVENT_KEY$7}`,EVENT_HIDDEN$6=`hidden${EVENT_KEY$7}`,EVENT_CLICK_DATA_API$4=`click${EVENT_KEY$7}${DATA_API_KEY$4}`,CLASS_NAME_SHOW$7="show",CLASS_NAME_COLLAPSE="collapse",CLASS_NAME_COLLAPSING="collapsing",CLASS_NAME_COLLAPSED="collapsed",CLASS_NAME_DEEPER_CHILDREN=`:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`,CLASS_NAME_HORIZONTAL="collapse-horizontal",WIDTH="width",HEIGHT="height",SELECTOR_ACTIVES=".collapse.show, .collapse.collapsing",SELECTOR_DATA_TOGGLE$4='[data-bs-toggle="collapse"]',Default$a={parent:null,toggle:!0},DefaultType$a={parent:"(null|element)",toggle:"boolean"};class Collapse extends BaseComponent{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const r=SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);for(const a of r){const s=SelectorEngine.getSelectorFromElement(a),o=SelectorEngine.find(s).filter(l=>l===this._element);s!==null&&o.length&&this._triggerArray.push(a)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Default$a}static get DefaultType(){return DefaultType$a}static get NAME(){return NAME$b}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(l=>l!==this._element).map(l=>Collapse.getOrCreateInstance(l,{toggle:!1}))),e.length&&e[0]._isTransitioning||EventHandler.trigger(this._element,EVENT_SHOW$6).defaultPrevented)return;for(const l of e)l.hide();const r=this._getDimension();this._element.classList.remove(CLASS_NAME_COLLAPSE),this._element.classList.add(CLASS_NAME_COLLAPSING),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(CLASS_NAME_COLLAPSING),this._element.classList.add(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW$7),this._element.style[r]="",EventHandler.trigger(this._element,EVENT_SHOWN$6)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(a,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||EventHandler.trigger(this._element,EVENT_HIDE$6).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,reflow(this._element),this._element.classList.add(CLASS_NAME_COLLAPSING),this._element.classList.remove(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW$7);for(const a of this._triggerArray){const s=SelectorEngine.getElementFromSelector(a);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([a],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(CLASS_NAME_COLLAPSING),this._element.classList.add(CLASS_NAME_COLLAPSE),EventHandler.trigger(this._element,EVENT_HIDDEN$6)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(CLASS_NAME_SHOW$7)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=getElement(e.parent),e}_getDimension(){return this._element.classList.contains(CLASS_NAME_HORIZONTAL)?WIDTH:HEIGHT}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);for(const t of e){const r=SelectorEngine.getElementFromSelector(t);r&&this._addAriaAndCollapsedClass([t],this._isShown(r))}}_getFirstLevelChildren(e){const t=SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);return SelectorEngine.find(e,this._config.parent).filter(r=>!t.includes(r))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const r of e)r.classList.toggle(CLASS_NAME_COLLAPSED,!t),r.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const r=Collapse.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$4,SELECTOR_DATA_TOGGLE$4,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const e of SelectorEngine.getMultipleElementsFromSelector(this))Collapse.getOrCreateInstance(e,{toggle:!1}).toggle()});defineJQueryPlugin(Collapse);const NAME$a="dropdown",DATA_KEY$6="bs.dropdown",EVENT_KEY$6=`.${DATA_KEY$6}`,DATA_API_KEY$3=".data-api",ESCAPE_KEY$2="Escape",TAB_KEY$1="Tab",ARROW_UP_KEY$1="ArrowUp",ARROW_DOWN_KEY$1="ArrowDown",RIGHT_MOUSE_BUTTON=2,EVENT_HIDE$5=`hide${EVENT_KEY$6}`,EVENT_HIDDEN$5=`hidden${EVENT_KEY$6}`,EVENT_SHOW$5=`show${EVENT_KEY$6}`,EVENT_SHOWN$5=`shown${EVENT_KEY$6}`,EVENT_CLICK_DATA_API$3=`click${EVENT_KEY$6}${DATA_API_KEY$3}`,EVENT_KEYDOWN_DATA_API=`keydown${EVENT_KEY$6}${DATA_API_KEY$3}`,EVENT_KEYUP_DATA_API=`keyup${EVENT_KEY$6}${DATA_API_KEY$3}`,CLASS_NAME_SHOW$6="show",CLASS_NAME_DROPUP="dropup",CLASS_NAME_DROPEND="dropend",CLASS_NAME_DROPSTART="dropstart",CLASS_NAME_DROPUP_CENTER="dropup-center",CLASS_NAME_DROPDOWN_CENTER="dropdown-center",SELECTOR_DATA_TOGGLE$3='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',SELECTOR_DATA_TOGGLE_SHOWN=`${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`,SELECTOR_MENU=".dropdown-menu",SELECTOR_NAVBAR=".navbar",SELECTOR_NAVBAR_NAV=".navbar-nav",SELECTOR_VISIBLE_ITEMS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",PLACEMENT_TOP=isRTL()?"top-end":"top-start",PLACEMENT_TOPEND=isRTL()?"top-start":"top-end",PLACEMENT_BOTTOM=isRTL()?"bottom-end":"bottom-start",PLACEMENT_BOTTOMEND=isRTL()?"bottom-start":"bottom-end",PLACEMENT_RIGHT=isRTL()?"left-start":"right-start",PLACEMENT_LEFT=isRTL()?"right-start":"left-start",PLACEMENT_TOPCENTER="top",PLACEMENT_BOTTOMCENTER="bottom",Default$9={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},DefaultType$9={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Dropdown extends BaseComponent{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=SelectorEngine.next(this._element,SELECTOR_MENU)[0]||SelectorEngine.prev(this._element,SELECTOR_MENU)[0]||SelectorEngine.findOne(SELECTOR_MENU,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Default$9}static get DefaultType(){return DefaultType$9}static get NAME(){return NAME$a}toggle(){return this._isShown()?this.hide():this.show()}show(){if(isDisabled(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!EventHandler.trigger(this._element,EVENT_SHOW$5,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(SELECTOR_NAVBAR_NAV))for(const r of[].concat(...document.body.children))EventHandler.on(r,"mouseover",noop$1);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(CLASS_NAME_SHOW$6),this._element.classList.add(CLASS_NAME_SHOW$6),EventHandler.trigger(this._element,EVENT_SHOWN$5,e)}}hide(){if(isDisabled(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!EventHandler.trigger(this._element,EVENT_HIDE$5,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))EventHandler.off(r,"mouseover",noop$1);this._popper&&this._popper.destroy(),this._menu.classList.remove(CLASS_NAME_SHOW$6),this._element.classList.remove(CLASS_NAME_SHOW$6),this._element.setAttribute("aria-expanded","false"),Manipulator.removeDataAttribute(this._menu,"popper"),EventHandler.trigger(this._element,EVENT_HIDDEN$5,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!isElement(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Popper>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:isElement(this._config.reference)?e=getElement(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(CLASS_NAME_SHOW$6)}_getPlacement(){const e=this._parent;if(e.classList.contains(CLASS_NAME_DROPEND))return PLACEMENT_RIGHT;if(e.classList.contains(CLASS_NAME_DROPSTART))return PLACEMENT_LEFT;if(e.classList.contains(CLASS_NAME_DROPUP_CENTER))return PLACEMENT_TOPCENTER;if(e.classList.contains(CLASS_NAME_DROPDOWN_CENTER))return PLACEMENT_BOTTOMCENTER;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(CLASS_NAME_DROPUP)?t?PLACEMENT_TOPEND:PLACEMENT_TOP:t?PLACEMENT_BOTTOMEND:PLACEMENT_BOTTOM}_detectNavbar(){return this._element.closest(SELECTOR_NAVBAR)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Manipulator.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...execute(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const r=SelectorEngine.find(SELECTOR_VISIBLE_ITEMS,this._menu).filter(a=>isVisible(a));r.length&&getNextActiveElement(r,t,e===ARROW_DOWN_KEY$1,!r.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=Dropdown.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===RIGHT_MOUSE_BUTTON||e.type==="keyup"&&e.key!==TAB_KEY$1)return;const t=SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);for(const r of t){const a=Dropdown.getInstance(r);if(!a||a._config.autoClose===!1)continue;const s=e.composedPath(),o=s.includes(a._menu);if(s.includes(a._element)||a._config.autoClose==="inside"&&!o||a._config.autoClose==="outside"&&o||a._menu.contains(e.target)&&(e.type==="keyup"&&e.key===TAB_KEY$1||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const l={relatedTarget:a._element};e.type==="click"&&(l.clickEvent=e),a._completeHide(l)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),r=e.key===ESCAPE_KEY$2,a=[ARROW_UP_KEY$1,ARROW_DOWN_KEY$1].includes(e.key);if(!a&&!r||t&&!r)return;e.preventDefault();const s=this.matches(SELECTOR_DATA_TOGGLE$3)?this:SelectorEngine.prev(this,SELECTOR_DATA_TOGGLE$3)[0]||SelectorEngine.next(this,SELECTOR_DATA_TOGGLE$3)[0]||SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3,e.delegateTarget.parentNode),o=Dropdown.getOrCreateInstance(s);if(a){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),s.focus())}}EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_DATA_TOGGLE$3,Dropdown.dataApiKeydownHandler);EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_MENU,Dropdown.dataApiKeydownHandler);EventHandler.on(document,EVENT_CLICK_DATA_API$3,Dropdown.clearMenus);EventHandler.on(document,EVENT_KEYUP_DATA_API,Dropdown.clearMenus);EventHandler.on(document,EVENT_CLICK_DATA_API$3,SELECTOR_DATA_TOGGLE$3,function(n){n.preventDefault(),Dropdown.getOrCreateInstance(this).toggle()});defineJQueryPlugin(Dropdown);const NAME$9="backdrop",CLASS_NAME_FADE$4="fade",CLASS_NAME_SHOW$5="show",EVENT_MOUSEDOWN=`mousedown.bs.${NAME$9}`,Default$8={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},DefaultType$8={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Backdrop extends Config$1{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Default$8}static get DefaultType(){return DefaultType$8}static get NAME(){return NAME$9}show(e){if(!this._config.isVisible){execute(e);return}this._append();const t=this._getElement();this._config.isAnimated&&reflow(t),t.classList.add(CLASS_NAME_SHOW$5),this._emulateAnimation(()=>{execute(e)})}hide(e){if(!this._config.isVisible){execute(e);return}this._getElement().classList.remove(CLASS_NAME_SHOW$5),this._emulateAnimation(()=>{this.dispose(),execute(e)})}dispose(){this._isAppended&&(EventHandler.off(this._element,EVENT_MOUSEDOWN),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(CLASS_NAME_FADE$4),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=getElement(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),EventHandler.on(e,EVENT_MOUSEDOWN,()=>{execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){executeAfterTransition(e,this._getElement(),this._config.isAnimated)}}const NAME$8="focustrap",DATA_KEY$5="bs.focustrap",EVENT_KEY$5=`.${DATA_KEY$5}`,EVENT_FOCUSIN$2=`focusin${EVENT_KEY$5}`,EVENT_KEYDOWN_TAB=`keydown.tab${EVENT_KEY$5}`,TAB_KEY="Tab",TAB_NAV_FORWARD="forward",TAB_NAV_BACKWARD="backward",Default$7={autofocus:!0,trapElement:null},DefaultType$7={autofocus:"boolean",trapElement:"element"};class FocusTrap extends Config$1{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Default$7}static get DefaultType(){return DefaultType$7}static get NAME(){return NAME$8}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),EventHandler.off(document,EVENT_KEY$5),EventHandler.on(document,EVENT_FOCUSIN$2,e=>this._handleFocusin(e)),EventHandler.on(document,EVENT_KEYDOWN_TAB,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,EventHandler.off(document,EVENT_KEY$5))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const r=SelectorEngine.focusableChildren(t);r.length===0?t.focus():this._lastTabNavDirection===TAB_NAV_BACKWARD?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===TAB_KEY&&(this._lastTabNavDirection=e.shiftKey?TAB_NAV_BACKWARD:TAB_NAV_FORWARD)}}const SELECTOR_FIXED_CONTENT=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",SELECTOR_STICKY_CONTENT=".sticky-top",PROPERTY_PADDING="padding-right",PROPERTY_MARGIN="margin-right";class ScrollBarHelper{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,PROPERTY_PADDING,t=>t+e),this._setElementAttributes(SELECTOR_FIXED_CONTENT,PROPERTY_PADDING,t=>t+e),this._setElementAttributes(SELECTOR_STICKY_CONTENT,PROPERTY_MARGIN,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,PROPERTY_PADDING),this._resetElementAttributes(SELECTOR_FIXED_CONTENT,PROPERTY_PADDING),this._resetElementAttributes(SELECTOR_STICKY_CONTENT,PROPERTY_MARGIN)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,r){const a=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+a)return;this._saveInitialAttribute(o,t);const l=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${r(Number.parseFloat(l))}px`)};this._applyManipulationCallback(e,s)}_saveInitialAttribute(e,t){const r=e.style.getPropertyValue(t);r&&Manipulator.setDataAttribute(e,t,r)}_resetElementAttributes(e,t){const r=a=>{const s=Manipulator.getDataAttribute(a,t);if(s===null){a.style.removeProperty(t);return}Manipulator.removeDataAttribute(a,t),a.style.setProperty(t,s)};this._applyManipulationCallback(e,r)}_applyManipulationCallback(e,t){if(isElement(e)){t(e);return}for(const r of SelectorEngine.find(e,this._element))t(r)}}const NAME$7="modal",DATA_KEY$4="bs.modal",EVENT_KEY$4=`.${DATA_KEY$4}`,DATA_API_KEY$2=".data-api",ESCAPE_KEY$1="Escape",EVENT_HIDE$4=`hide${EVENT_KEY$4}`,EVENT_HIDE_PREVENTED$1=`hidePrevented${EVENT_KEY$4}`,EVENT_HIDDEN$4=`hidden${EVENT_KEY$4}`,EVENT_SHOW$4=`show${EVENT_KEY$4}`,EVENT_SHOWN$4=`shown${EVENT_KEY$4}`,EVENT_RESIZE$1=`resize${EVENT_KEY$4}`,EVENT_CLICK_DISMISS=`click.dismiss${EVENT_KEY$4}`,EVENT_MOUSEDOWN_DISMISS=`mousedown.dismiss${EVENT_KEY$4}`,EVENT_KEYDOWN_DISMISS$1=`keydown.dismiss${EVENT_KEY$4}`,EVENT_CLICK_DATA_API$2=`click${EVENT_KEY$4}${DATA_API_KEY$2}`,CLASS_NAME_OPEN="modal-open",CLASS_NAME_FADE$3="fade",CLASS_NAME_SHOW$4="show",CLASS_NAME_STATIC="modal-static",OPEN_SELECTOR$1=".modal.show",SELECTOR_DIALOG=".modal-dialog",SELECTOR_MODAL_BODY=".modal-body",SELECTOR_DATA_TOGGLE$2='[data-bs-toggle="modal"]',Default$6={backdrop:!0,focus:!0,keyboard:!0},DefaultType$6={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Modal extends BaseComponent{constructor(e,t){super(e,t),this._dialog=SelectorEngine.findOne(SELECTOR_DIALOG,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ScrollBarHelper,this._addEventListeners()}static get Default(){return Default$6}static get DefaultType(){return DefaultType$6}static get NAME(){return NAME$7}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||EventHandler.trigger(this._element,EVENT_SHOW$4,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(CLASS_NAME_OPEN),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||EventHandler.trigger(this._element,EVENT_HIDE$4).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(CLASS_NAME_SHOW$4),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){EventHandler.off(window,EVENT_KEY$4),EventHandler.off(this._dialog,EVENT_KEY$4),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Backdrop({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new FocusTrap({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=SelectorEngine.findOne(SELECTOR_MODAL_BODY,this._dialog);t&&(t.scrollTop=0),reflow(this._element),this._element.classList.add(CLASS_NAME_SHOW$4);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,EventHandler.trigger(this._element,EVENT_SHOWN$4,{relatedTarget:e})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS$1,e=>{if(e.key===ESCAPE_KEY$1){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),EventHandler.on(window,EVENT_RESIZE$1,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),EventHandler.on(this._element,EVENT_MOUSEDOWN_DISMISS,e=>{EventHandler.one(this._element,EVENT_CLICK_DISMISS,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(CLASS_NAME_OPEN),this._resetAdjustments(),this._scrollBar.reset(),EventHandler.trigger(this._element,EVENT_HIDDEN$4)})}_isAnimated(){return this._element.classList.contains(CLASS_NAME_FADE$3)}_triggerBackdropTransition(){if(EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED$1).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(CLASS_NAME_STATIC)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(CLASS_NAME_STATIC),this._queueCallback(()=>{this._element.classList.remove(CLASS_NAME_STATIC),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),r=t>0;if(r&&!e){const a=isRTL()?"paddingLeft":"paddingRight";this._element.style[a]=`${t}px`}if(!r&&e){const a=isRTL()?"paddingRight":"paddingLeft";this._element.style[a]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const r=Modal.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof r[e]>"u")throw new TypeError(`No method named "${e}"`);r[e](t)}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$2,SELECTOR_DATA_TOGGLE$2,function(n){const e=SelectorEngine.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),EventHandler.one(e,EVENT_SHOW$4,a=>{a.defaultPrevented||EventHandler.one(e,EVENT_HIDDEN$4,()=>{isVisible(this)&&this.focus()})});const t=SelectorEngine.findOne(OPEN_SELECTOR$1);t&&Modal.getInstance(t).hide(),Modal.getOrCreateInstance(e).toggle(this)});enableDismissTrigger(Modal);defineJQueryPlugin(Modal);const NAME$6="offcanvas",DATA_KEY$3="bs.offcanvas",EVENT_KEY$3=`.${DATA_KEY$3}`,DATA_API_KEY$1=".data-api",EVENT_LOAD_DATA_API$2=`load${EVENT_KEY$3}${DATA_API_KEY$1}`,ESCAPE_KEY="Escape",CLASS_NAME_SHOW$3="show",CLASS_NAME_SHOWING$1="showing",CLASS_NAME_HIDING="hiding",CLASS_NAME_BACKDROP="offcanvas-backdrop",OPEN_SELECTOR=".offcanvas.show",EVENT_SHOW$3=`show${EVENT_KEY$3}`,EVENT_SHOWN$3=`shown${EVENT_KEY$3}`,EVENT_HIDE$3=`hide${EVENT_KEY$3}`,EVENT_HIDE_PREVENTED=`hidePrevented${EVENT_KEY$3}`,EVENT_HIDDEN$3=`hidden${EVENT_KEY$3}`,EVENT_RESIZE=`resize${EVENT_KEY$3}`,EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$3}${DATA_API_KEY$1}`,EVENT_KEYDOWN_DISMISS=`keydown.dismiss${EVENT_KEY$3}`,SELECTOR_DATA_TOGGLE$1='[data-bs-toggle="offcanvas"]',Default$5={backdrop:!0,keyboard:!0,scroll:!1},DefaultType$5={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Offcanvas extends BaseComponent{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Default$5}static get DefaultType(){return DefaultType$5}static get NAME(){return NAME$6}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||EventHandler.trigger(this._element,EVENT_SHOW$3,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new ScrollBarHelper().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(CLASS_NAME_SHOWING$1);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(CLASS_NAME_SHOW$3),this._element.classList.remove(CLASS_NAME_SHOWING$1),EventHandler.trigger(this._element,EVENT_SHOWN$3,{relatedTarget:e})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||EventHandler.trigger(this._element,EVENT_HIDE$3).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(CLASS_NAME_HIDING),this._backdrop.hide();const t=()=>{this._element.classList.remove(CLASS_NAME_SHOW$3,CLASS_NAME_HIDING),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ScrollBarHelper().reset(),EventHandler.trigger(this._element,EVENT_HIDDEN$3)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED);return}this.hide()},t=!!this._config.backdrop;return new Backdrop({className:CLASS_NAME_BACKDROP,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new FocusTrap({trapElement:this._element})}_addEventListeners(){EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS,e=>{if(e.key===ESCAPE_KEY){if(this._config.keyboard){this.hide();return}EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED)}})}static jQueryInterface(e){return this.each(function(){const t=Offcanvas.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE$1,function(n){const e=SelectorEngine.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),isDisabled(this))return;EventHandler.one(e,EVENT_HIDDEN$3,()=>{isVisible(this)&&this.focus()});const t=SelectorEngine.findOne(OPEN_SELECTOR);t&&t!==e&&Offcanvas.getInstance(t).hide(),Offcanvas.getOrCreateInstance(e).toggle(this)});EventHandler.on(window,EVENT_LOAD_DATA_API$2,()=>{for(const n of SelectorEngine.find(OPEN_SELECTOR))Offcanvas.getOrCreateInstance(n).show()});EventHandler.on(window,EVENT_RESIZE,()=>{for(const n of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Offcanvas.getOrCreateInstance(n).hide()});enableDismissTrigger(Offcanvas);defineJQueryPlugin(Offcanvas);const ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i,DefaultAllowlist={"*":["class","dir","id","lang","role",ARIA_ATTRIBUTE_PATTERN],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},uriAttributes=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),SAFE_URL_PATTERN=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,allowedAttribute=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?uriAttributes.has(t)?!!SAFE_URL_PATTERN.test(n.nodeValue):!0:e.filter(r=>r instanceof RegExp).some(r=>r.test(t))};function sanitizeHtml(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const a=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...a.body.querySelectorAll("*"));for(const o of s){const l=o.nodeName.toLowerCase();if(!Object.keys(e).includes(l)){o.remove();continue}const c=[].concat(...o.attributes),d=[].concat(e["*"]||[],e[l]||[]);for(const f of c)allowedAttribute(f,d)||o.removeAttribute(f.nodeName)}return a.body.innerHTML}const NAME$5="TemplateFactory",Default$4={allowList:DefaultAllowlist,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},DefaultType$4={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},DefaultContentType={entry:"(string|element|function|null)",selector:"(string|element)"};class TemplateFactory extends Config$1{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Default$4}static get DefaultType(){return DefaultType$4}static get NAME(){return NAME$5}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[a,s]of Object.entries(this._config.content))this._setContent(e,s,a);const t=e.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&t.classList.add(...r.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,r]of Object.entries(e))super._typeCheckConfig({selector:t,entry:r},DefaultContentType)}_setContent(e,t,r){const a=SelectorEngine.findOne(r,e);if(a){if(t=this._resolvePossibleFunction(t),!t){a.remove();return}if(isElement(t)){this._putElementInTemplate(getElement(t),a);return}if(this._config.html){a.innerHTML=this._maybeSanitize(t);return}a.textContent=t}}_maybeSanitize(e){return this._config.sanitize?sanitizeHtml(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return execute(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const NAME$4="tooltip",DISALLOWED_ATTRIBUTES=new Set(["sanitize","allowList","sanitizeFn"]),CLASS_NAME_FADE$2="fade",CLASS_NAME_MODAL="modal",CLASS_NAME_SHOW$2="show",SELECTOR_TOOLTIP_INNER=".tooltip-inner",SELECTOR_MODAL=`.${CLASS_NAME_MODAL}`,EVENT_MODAL_HIDE="hide.bs.modal",TRIGGER_HOVER="hover",TRIGGER_FOCUS="focus",TRIGGER_CLICK="click",TRIGGER_MANUAL="manual",EVENT_HIDE$2="hide",EVENT_HIDDEN$2="hidden",EVENT_SHOW$2="show",EVENT_SHOWN$2="shown",EVENT_INSERTED="inserted",EVENT_CLICK$1="click",EVENT_FOCUSIN$1="focusin",EVENT_FOCUSOUT$1="focusout",EVENT_MOUSEENTER="mouseenter",EVENT_MOUSELEAVE="mouseleave",AttachmentMap={AUTO:"auto",TOP:"top",RIGHT:isRTL()?"left":"right",BOTTOM:"bottom",LEFT:isRTL()?"right":"left"},Default$3={allowList:DefaultAllowlist,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},DefaultType$3={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};let Tooltip$1=class oi extends BaseComponent{constructor(e,t){if(typeof Popper>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Default$3}static get DefaultType(){return DefaultType$3}static get NAME(){return NAME$4}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),EventHandler.off(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=EventHandler.trigger(this._element,this.constructor.eventName(EVENT_SHOW$2)),r=(findShadowRoot(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!r)return;this._disposePopper();const a=this._getTipElement();this._element.setAttribute("aria-describedby",a.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(a),EventHandler.trigger(this._element,this.constructor.eventName(EVENT_INSERTED))),this._popper=this._createPopper(a),a.classList.add(CLASS_NAME_SHOW$2),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))EventHandler.on(l,"mouseover",noop$1);const o=()=>{EventHandler.trigger(this._element,this.constructor.eventName(EVENT_SHOWN$2)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||EventHandler.trigger(this._element,this.constructor.eventName(EVENT_HIDE$2)).defaultPrevented)return;if(this._getTipElement().classList.remove(CLASS_NAME_SHOW$2),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))EventHandler.off(a,"mouseover",noop$1);this._activeTrigger[TRIGGER_CLICK]=!1,this._activeTrigger[TRIGGER_FOCUS]=!1,this._activeTrigger[TRIGGER_HOVER]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),EventHandler.trigger(this._element,this.constructor.eventName(EVENT_HIDDEN$2)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(CLASS_NAME_FADE$2,CLASS_NAME_SHOW$2),t.classList.add(`bs-${this.constructor.NAME}-auto`);const r=getUID(this.constructor.NAME).toString();return t.setAttribute("id",r),this._isAnimated()&&t.classList.add(CLASS_NAME_FADE$2),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new TemplateFactory({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[SELECTOR_TOOLTIP_INNER]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(CLASS_NAME_FADE$2)}_isShown(){return this.tip&&this.tip.classList.contains(CLASS_NAME_SHOW$2)}_createPopper(e){const t=execute(this._config.placement,[this,e,this._element]),r=AttachmentMap[t.toUpperCase()];return createPopper(this._element,e,this._getPopperConfig(r))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return execute(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...t,...execute(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")EventHandler.on(this._element,this.constructor.eventName(EVENT_CLICK$1),this._config.selector,r=>{const a=this._initializeOnDelegatedTarget(r);a._activeTrigger[TRIGGER_CLICK]=!(a._isShown()&&a._activeTrigger[TRIGGER_CLICK]),a.toggle()});else if(t!==TRIGGER_MANUAL){const r=t===TRIGGER_HOVER?this.constructor.eventName(EVENT_MOUSEENTER):this.constructor.eventName(EVENT_FOCUSIN$1),a=t===TRIGGER_HOVER?this.constructor.eventName(EVENT_MOUSELEAVE):this.constructor.eventName(EVENT_FOCUSOUT$1);EventHandler.on(this._element,r,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?TRIGGER_FOCUS:TRIGGER_HOVER]=!0,o._enter()}),EventHandler.on(this._element,a,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?TRIGGER_FOCUS:TRIGGER_HOVER]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},EventHandler.on(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Manipulator.getDataAttributes(this._element);for(const r of Object.keys(t))DISALLOWED_ATTRIBUTES.has(r)&&delete t[r];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:getElement(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,r]of Object.entries(this._config))this.constructor.Default[t]!==r&&(e[t]=r);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=oi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}};defineJQueryPlugin(Tooltip$1);const NAME$3="popover",SELECTOR_TITLE=".popover-header",SELECTOR_CONTENT=".popover-body",Default$2={...Tooltip$1.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},DefaultType$2={...Tooltip$1.DefaultType,content:"(null|string|element|function)"};class Popover extends Tooltip$1{static get Default(){return Default$2}static get DefaultType(){return DefaultType$2}static get NAME(){return NAME$3}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[SELECTOR_TITLE]:this._getTitle(),[SELECTOR_CONTENT]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=Popover.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}defineJQueryPlugin(Popover);const NAME$2="scrollspy",DATA_KEY$2="bs.scrollspy",EVENT_KEY$2=`.${DATA_KEY$2}`,DATA_API_KEY=".data-api",EVENT_ACTIVATE=`activate${EVENT_KEY$2}`,EVENT_CLICK=`click${EVENT_KEY$2}`,EVENT_LOAD_DATA_API$1=`load${EVENT_KEY$2}${DATA_API_KEY}`,CLASS_NAME_DROPDOWN_ITEM="dropdown-item",CLASS_NAME_ACTIVE$1="active",SELECTOR_DATA_SPY='[data-bs-spy="scroll"]',SELECTOR_TARGET_LINKS="[href]",SELECTOR_NAV_LIST_GROUP=".nav, .list-group",SELECTOR_NAV_LINKS=".nav-link",SELECTOR_NAV_ITEMS=".nav-item",SELECTOR_LIST_ITEMS=".list-group-item",SELECTOR_LINK_ITEMS=`${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`,SELECTOR_DROPDOWN=".dropdown",SELECTOR_DROPDOWN_TOGGLE$1=".dropdown-toggle",Default$1={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},DefaultType$1={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ScrollSpy extends BaseComponent{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Default$1}static get DefaultType(){return DefaultType$1}static get NAME(){return NAME$2}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=getElement(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(EventHandler.off(this._config.target,EVENT_CLICK),EventHandler.on(this._config.target,EVENT_CLICK,SELECTOR_TARGET_LINKS,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const r=this._rootElement||window,a=t.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:a,behavior:"smooth"});return}r.scrollTop=a}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},a=(this._rootElement||document.documentElement).scrollTop,s=a>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=a;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const l=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&l){if(r(o),!a)return;continue}!s&&!l&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=SelectorEngine.find(SELECTOR_TARGET_LINKS,this._config.target);for(const t of e){if(!t.hash||isDisabled(t))continue;const r=SelectorEngine.findOne(decodeURI(t.hash),this._element);isVisible(r)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,r))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(CLASS_NAME_ACTIVE$1),this._activateParents(e),EventHandler.trigger(this._element,EVENT_ACTIVATE,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(CLASS_NAME_DROPDOWN_ITEM)){SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1,e.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);return}for(const t of SelectorEngine.parents(e,SELECTOR_NAV_LIST_GROUP))for(const r of SelectorEngine.prev(t,SELECTOR_LINK_ITEMS))r.classList.add(CLASS_NAME_ACTIVE$1)}_clearActiveClass(e){e.classList.remove(CLASS_NAME_ACTIVE$1);const t=SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`,e);for(const r of t)r.classList.remove(CLASS_NAME_ACTIVE$1)}static jQueryInterface(e){return this.each(function(){const t=ScrollSpy.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}EventHandler.on(window,EVENT_LOAD_DATA_API$1,()=>{for(const n of SelectorEngine.find(SELECTOR_DATA_SPY))ScrollSpy.getOrCreateInstance(n)});defineJQueryPlugin(ScrollSpy);const NAME$1="tab",DATA_KEY$1="bs.tab",EVENT_KEY$1=`.${DATA_KEY$1}`,EVENT_HIDE$1=`hide${EVENT_KEY$1}`,EVENT_HIDDEN$1=`hidden${EVENT_KEY$1}`,EVENT_SHOW$1=`show${EVENT_KEY$1}`,EVENT_SHOWN$1=`shown${EVENT_KEY$1}`,EVENT_CLICK_DATA_API=`click${EVENT_KEY$1}`,EVENT_KEYDOWN=`keydown${EVENT_KEY$1}`,EVENT_LOAD_DATA_API=`load${EVENT_KEY$1}`,ARROW_LEFT_KEY="ArrowLeft",ARROW_RIGHT_KEY="ArrowRight",ARROW_UP_KEY="ArrowUp",ARROW_DOWN_KEY="ArrowDown",HOME_KEY="Home",END_KEY="End",CLASS_NAME_ACTIVE="active",CLASS_NAME_FADE$1="fade",CLASS_NAME_SHOW$1="show",CLASS_DROPDOWN="dropdown",SELECTOR_DROPDOWN_TOGGLE=".dropdown-toggle",SELECTOR_DROPDOWN_MENU=".dropdown-menu",NOT_SELECTOR_DROPDOWN_TOGGLE=`:not(${SELECTOR_DROPDOWN_TOGGLE})`,SELECTOR_TAB_PANEL='.list-group, .nav, [role="tablist"]',SELECTOR_OUTER=".nav-item, .list-group-item",SELECTOR_INNER=`.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`,SELECTOR_DATA_TOGGLE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',SELECTOR_INNER_ELEM=`${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`,SELECTOR_DATA_TOGGLE_ACTIVE=`.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;class Tab extends BaseComponent{constructor(e){super(e),this._parent=this._element.closest(SELECTOR_TAB_PANEL),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),EventHandler.on(this._element,EVENT_KEYDOWN,t=>this._keydown(t)))}static get NAME(){return NAME$1}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),r=t?EventHandler.trigger(t,EVENT_HIDE$1,{relatedTarget:e}):null;EventHandler.trigger(e,EVENT_SHOW$1,{relatedTarget:t}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(CLASS_NAME_ACTIVE),this._activate(SelectorEngine.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(CLASS_NAME_SHOW$1);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),EventHandler.trigger(e,EVENT_SHOWN$1,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(CLASS_NAME_FADE$1))}_deactivate(e,t){if(!e)return;e.classList.remove(CLASS_NAME_ACTIVE),e.blur(),this._deactivate(SelectorEngine.getElementFromSelector(e));const r=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(CLASS_NAME_SHOW$1);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),EventHandler.trigger(e,EVENT_HIDDEN$1,{relatedTarget:t})};this._queueCallback(r,e,e.classList.contains(CLASS_NAME_FADE$1))}_keydown(e){if(![ARROW_LEFT_KEY,ARROW_RIGHT_KEY,ARROW_UP_KEY,ARROW_DOWN_KEY,HOME_KEY,END_KEY].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(a=>!isDisabled(a));let r;if([HOME_KEY,END_KEY].includes(e.key))r=t[e.key===HOME_KEY?0:t.length-1];else{const a=[ARROW_RIGHT_KEY,ARROW_DOWN_KEY].includes(e.key);r=getNextActiveElement(t,e.target,a,!0)}r&&(r.focus({preventScroll:!0}),Tab.getOrCreateInstance(r).show())}_getChildren(){return SelectorEngine.find(SELECTOR_INNER_ELEM,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const r of t)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),r=this._getOuterElement(e);e.setAttribute("aria-selected",t),r!==e&&this._setAttributeIfNotExists(r,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=SelectorEngine.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const r=this._getOuterElement(e);if(!r.classList.contains(CLASS_DROPDOWN))return;const a=(s,o)=>{const l=SelectorEngine.findOne(s,r);l&&l.classList.toggle(o,t)};a(SELECTOR_DROPDOWN_TOGGLE,CLASS_NAME_ACTIVE),a(SELECTOR_DROPDOWN_MENU,CLASS_NAME_SHOW$1),r.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,r){e.hasAttribute(t)||e.setAttribute(t,r)}_elemIsActive(e){return e.classList.contains(CLASS_NAME_ACTIVE)}_getInnerElement(e){return e.matches(SELECTOR_INNER_ELEM)?e:SelectorEngine.findOne(SELECTOR_INNER_ELEM,e)}_getOuterElement(e){return e.closest(SELECTOR_OUTER)||e}static jQueryInterface(e){return this.each(function(){const t=Tab.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!isDisabled(this)&&Tab.getOrCreateInstance(this).show()});EventHandler.on(window,EVENT_LOAD_DATA_API,()=>{for(const n of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE))Tab.getOrCreateInstance(n)});defineJQueryPlugin(Tab);const NAME="toast",DATA_KEY="bs.toast",EVENT_KEY=`.${DATA_KEY}`,EVENT_MOUSEOVER=`mouseover${EVENT_KEY}`,EVENT_MOUSEOUT=`mouseout${EVENT_KEY}`,EVENT_FOCUSIN=`focusin${EVENT_KEY}`,EVENT_FOCUSOUT=`focusout${EVENT_KEY}`,EVENT_HIDE=`hide${EVENT_KEY}`,EVENT_HIDDEN=`hidden${EVENT_KEY}`,EVENT_SHOW=`show${EVENT_KEY}`,EVENT_SHOWN=`shown${EVENT_KEY}`,CLASS_NAME_FADE="fade",CLASS_NAME_HIDE="hide",CLASS_NAME_SHOW="show",CLASS_NAME_SHOWING="showing",DefaultType={animation:"boolean",autohide:"boolean",delay:"number"},Default={animation:!0,autohide:!0,delay:5e3};class Toast extends BaseComponent{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Default}static get DefaultType(){return DefaultType}static get NAME(){return NAME}show(){if(EventHandler.trigger(this._element,EVENT_SHOW).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(CLASS_NAME_FADE);const t=()=>{this._element.classList.remove(CLASS_NAME_SHOWING),EventHandler.trigger(this._element,EVENT_SHOWN),this._maybeScheduleHide()};this._element.classList.remove(CLASS_NAME_HIDE),reflow(this._element),this._element.classList.add(CLASS_NAME_SHOW,CLASS_NAME_SHOWING),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||EventHandler.trigger(this._element,EVENT_HIDE).defaultPrevented)return;const t=()=>{this._element.classList.add(CLASS_NAME_HIDE),this._element.classList.remove(CLASS_NAME_SHOWING,CLASS_NAME_SHOW),EventHandler.trigger(this._element,EVENT_HIDDEN)};this._element.classList.add(CLASS_NAME_SHOWING),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(CLASS_NAME_SHOW),super.dispose()}isShown(){return this._element.classList.contains(CLASS_NAME_SHOW)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const r=e.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){EventHandler.on(this._element,EVENT_MOUSEOVER,e=>this._onInteraction(e,!0)),EventHandler.on(this._element,EVENT_MOUSEOUT,e=>this._onInteraction(e,!1)),EventHandler.on(this._element,EVENT_FOCUSIN,e=>this._onInteraction(e,!0)),EventHandler.on(this._element,EVENT_FOCUSOUT,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Toast.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}enableDismissTrigger(Toast);defineJQueryPlugin(Toast);(function(){const htmx={onLoad:null,process:null,on:null,off:null,trigger:null,ajax:null,find:null,findAll:null,closest:null,values:function(n,e){return getInputValues(n,e||"post").values},remove:null,addClass:null,removeClass:null,toggleClass:null,takeClass:null,swap:null,defineExtension:null,removeExtension:null,logAll:null,logNone:null,logger:null,config:{historyEnabled:!0,historyCacheSize:10,refreshOnHistoryMiss:!1,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:!0,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:!0,allowScriptTags:!0,inlineScriptNonce:"",inlineStyleNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:!1,timeout:0,wsReconnectDelay:"full-jitter",wsBinaryType:"blob",disableSelector:"[hx-disable], [data-hx-disable]",scrollBehavior:"instant",defaultFocusScroll:!1,getCacheBusterParam:!1,globalViewTransitions:!1,methodsThatUseUrlParams:["get","delete"],selfRequestsOnly:!0,ignoreTitle:!1,scrollIntoViewOnBoost:!0,triggerSpecsCache:null,disableInheritance:!1,responseHandling:[{code:"204",swap:!1},{code:"[23]..",swap:!0},{code:"[45]..",swap:!1,error:!0}],allowNestedOobSwaps:!0,historyRestoreAsHxRequest:!0,reportValidityOfForms:!1},parseInterval:null,location,_:null,version:"2.0.10"};htmx.onLoad=onLoadHelper,htmx.process=processNode,htmx.on=addEventListenerImpl,htmx.off=removeEventListenerImpl,htmx.trigger=triggerEvent,htmx.ajax=ajaxHelper,htmx.find=find,htmx.findAll=findAll,htmx.closest=closest,htmx.remove=removeElement,htmx.addClass=addClassToElement,htmx.removeClass=removeClassFromElement,htmx.toggleClass=toggleClassOnElement,htmx.takeClass=takeClassForElement,htmx.swap=swap,htmx.defineExtension=defineExtension,htmx.removeExtension=removeExtension,htmx.logAll=logAll,htmx.logNone=logNone,htmx.parseInterval=parseInterval,htmx._=internalEval;const internalAPI={addTriggerHandler,bodyContains,canAccessLocalStorage,findThisElement,filterValues,swap,hasAttribute,getAttributeValue,getClosestAttributeValue,getClosestMatch,getExpressionVars,getHeaders,getInputValues,getInternalData,getSwapSpecification,getTriggerSpecs,getTarget,makeFragment,mergeObjects,makeSettleInfo,oobSwap,querySelectorExt,settleImmediately,shouldCancel,triggerEvent,triggerErrorEvent,withExtensions},VERBS=["get","post","put","delete","patch"],VERB_SELECTOR=VERBS.map(function(n){return"[hx-"+n+"], [data-hx-"+n+"]"}).join(", ");function parseInterval(n){if(n==null)return;let e=NaN;return n.slice(-2)=="ms"?e=parseFloat(n.slice(0,-2)):n.slice(-1)=="s"?e=parseFloat(n.slice(0,-1))*1e3:n.slice(-1)=="m"?e=parseFloat(n.slice(0,-1))*1e3*60:e=parseFloat(n),isNaN(e)?void 0:e}function getRawAttribute(n,e){return n instanceof Element&&n.getAttribute(e)}function hasAttribute(n,e){return!!n.hasAttribute&&(n.hasAttribute(e)||n.hasAttribute("data-"+e))}function getAttributeValue(n,e){return getRawAttribute(n,e)||getRawAttribute(n,"data-"+e)}function parentElt(n){const e=n.parentElement;return!e&&n.parentNode instanceof ShadowRoot?n.parentNode:e}function getDocument(){return document}function getRootNode(n,e){return n.getRootNode?n.getRootNode({composed:e}):getDocument()}function getClosestMatch(n,e){for(;n&&!e(n);)n=parentElt(n);return n||null}function getAttributeValueWithDisinheritance(n,e,t){const r=getAttributeValue(e,t),a=getAttributeValue(e,"hx-disinherit");var s=getAttributeValue(e,"hx-inherit");if(n!==e){if(htmx.config.disableInheritance)return s&&(s==="*"||s.split(" ").indexOf(t)>=0)?r:null;if(a&&(a==="*"||a.split(" ").indexOf(t)>=0))return"unset"}return r}function getClosestAttributeValue(n,e){let t=null;if(getClosestMatch(n,function(r){return!!(t=getAttributeValueWithDisinheritance(n,asElement(r),e))}),t!=="unset")return t}function matches(n,e){return n instanceof Element&&n.matches(e)}function getStartTag(n){const t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(n);return t?t[1].toLowerCase():""}function parseHTML(n){return"parseHTMLUnsafe"in Document?Document.parseHTMLUnsafe(n):new DOMParser().parseFromString(n,"text/html")}function takeChildrenFor(n,e){for(;e.childNodes.length>0;)n.append(e.childNodes[0])}function duplicateScript(n){const e=getDocument().createElement("script");return forEach(n.attributes,function(t){e.setAttribute(t.name,t.value)}),e.textContent=n.textContent,e.async=!1,htmx.config.inlineScriptNonce&&(e.nonce=htmx.config.inlineScriptNonce),e}function isJavaScriptScriptNode(n){return n.matches("script")&&(n.type==="text/javascript"||n.type==="module"||n.type==="")}function normalizeScriptTags(n){Array.from(n.querySelectorAll("script")).forEach(e=>{if(isJavaScriptScriptNode(e)){const t=duplicateScript(e),r=e.parentNode;try{r.insertBefore(t,e)}catch(a){logError(a)}finally{e.remove()}}})}function makeFragment(n){const e=n.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i,""),t=getStartTag(e);let r;if(t==="html"){r=new DocumentFragment;const s=parseHTML(n);takeChildrenFor(r,s.body),r.title=s.title}else if(t==="body"){r=new DocumentFragment;const s=parseHTML(e);takeChildrenFor(r,s.body),r.title=s.title}else{const s=parseHTML('<body><template class="internal-htmx-wrapper">'+e+"</template></body>");r=s.querySelector("template").content,r.title=s.title;var a=r.querySelector("title");a&&a.parentNode===r&&(a.remove(),r.title=a.innerText)}return r&&(htmx.config.allowScriptTags?normalizeScriptTags(r):r.querySelectorAll("script").forEach(s=>s.remove())),r}function maybeCall(n){n&&n()}function isType(n,e){return Object.prototype.toString.call(n)==="[object "+e+"]"}function isFunction(n){return typeof n=="function"}function isRawObject(n){return isType(n,"Object")}function getInternalData(n){const e="htmx-internal-data";let t=n[e];return t||(t=n[e]={}),t}function toArray(n){const e=[];if(n)for(let t=0;t<n.length;t++)e.push(n[t]);return e}function forEach(n,e){if(n)for(let t=0;t<n.length;t++)e(n[t])}function isScrolledIntoView(n){const e=n.getBoundingClientRect(),t=e.top,r=e.bottom;return t<window.innerHeight&&r>=0}function bodyContains(n){return n.getRootNode({composed:!0})===document}function splitOnWhitespace(n){return n.trim().split(/\s+/)}function mergeObjects(n,e){for(const t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function parseJSON(n){try{return JSON.parse(n)}catch(e){return logError(e),null}}function canAccessLocalStorage(){const n="htmx:sessionStorageTest";try{return sessionStorage.setItem(n,n),sessionStorage.removeItem(n),!0}catch{return!1}}function normalizePath(n){try{const e=new URL(n,window.location.href);n=e.pathname+e.search}catch{}return n!="/"&&(n=n.replace(/\/+$/,"")),n}function internalEval(str){return maybeEval(getDocument().body,function(){return eval(str)})}function onLoadHelper(n){return htmx.on("htmx:load",function(t){n(t.detail.elt)})}function logAll(){htmx.logger=function(n,e,t){console&&console.log(e,n,t)}}function logNone(){htmx.logger=null}function find(n,e){return typeof n!="string"?n.querySelector(e):find(getDocument(),n)}function findAll(n,e){return typeof n!="string"?n.querySelectorAll(e):findAll(getDocument(),n)}function getWindow(){return window}function removeElement(n,e){n=resolveTarget(n),e?getWindow().setTimeout(function(){removeElement(n),n=null},e):parentElt(n).removeChild(n)}function asElement(n){return n instanceof Element?n:null}function asHtmlElement(n){return n instanceof HTMLElement?n:null}function asString(n){return typeof n=="string"?n:null}function asParentNode(n){return n instanceof Element||n instanceof Document||n instanceof DocumentFragment?n:null}function addClassToElement(n,e,t){n=asElement(resolveTarget(n)),n&&(t?getWindow().setTimeout(function(){addClassToElement(n,e),n=null},t):n.classList&&n.classList.add(e))}function removeClassFromElement(n,e,t){let r=asElement(resolveTarget(n));r&&(t?getWindow().setTimeout(function(){removeClassFromElement(r,e),r=null},t):r.classList&&(r.classList.remove(e),r.classList.length===0&&r.removeAttribute("class")))}function toggleClassOnElement(n,e){n=resolveTarget(n),n.classList.toggle(e)}function takeClassForElement(n,e){n=resolveTarget(n),forEach(n.parentElement.children,function(t){removeClassFromElement(t,e)}),addClassToElement(asElement(n),e)}function closest(n,e){return n=asElement(resolveTarget(n)),n?n.closest(e):null}function startsWith(n,e){return n.substring(0,e.length)===e}function endsWith(n,e){return n.substring(n.length-e.length)===e}function normalizeSelector(n){const e=n.trim();return startsWith(e,"<")&&endsWith(e,"/>")?e.substring(1,e.length-2):e}function querySelectorAllExt(n,e,t){if(e.indexOf("global ")===0)return querySelectorAllExt(n,e.slice(7),!0);n=resolveTarget(n);const r=[];{let o=0,l=0;for(let c=0;c<e.length;c++){const d=e[c];if(d===","&&o===0){r.push(e.substring(l,c)),l=c+1;continue}d==="<"?o++:d==="/"&&c<e.length-1&&e[c+1]===">"&&o--}l<e.length&&r.push(e.substring(l))}const a=[],s=[];for(;r.length>0;){const o=normalizeSelector(r.shift());let l;o.indexOf("closest ")===0?l=closest(asElement(n),normalizeSelector(o.slice(8))):o.indexOf("find ")===0?l=find(asParentNode(n),normalizeSelector(o.slice(5))):o==="next"||o==="nextElementSibling"?l=asElement(n).nextElementSibling:o.indexOf("next ")===0?l=scanForwardQuery(n,normalizeSelector(o.slice(5)),!!t):o==="previous"||o==="previousElementSibling"?l=asElement(n).previousElementSibling:o.indexOf("previous ")===0?l=scanBackwardsQuery(n,normalizeSelector(o.slice(9)),!!t):o==="document"?l=document:o==="window"?l=window:o==="body"?l=document.body:o==="root"?l=getRootNode(n,!!t):o==="host"?l=n.getRootNode().host:s.push(o),l&&a.push(l)}if(s.length>0){const o=s.join(","),l=asParentNode(getRootNode(n,!!t));a.push(...toArray(l.querySelectorAll(o)))}return a}var scanForwardQuery=function(n,e,t){const r=asParentNode(getRootNode(n,t)).querySelectorAll(e);for(let a=0;a<r.length;a++){const s=r[a];if(s.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_PRECEDING)return s}},scanBackwardsQuery=function(n,e,t){const r=asParentNode(getRootNode(n,t)).querySelectorAll(e);for(let a=r.length-1;a>=0;a--){const s=r[a];if(s.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_FOLLOWING)return s}};function querySelectorExt(n,e){return typeof n!="string"?querySelectorAllExt(n,e)[0]:querySelectorAllExt(getDocument().body,n)[0]}function resolveTarget(n,e){return typeof n=="string"?find(asParentNode(e)||document,n):n}function processEventArgs(n,e,t,r){return isFunction(e)?{target:getDocument().body,event:asString(n),listener:e,options:t}:{target:resolveTarget(n),event:asString(e),listener:t,options:r}}function addEventListenerImpl(n,e,t,r){return ready(function(){const s=processEventArgs(n,e,t,r);s.target.addEventListener(s.event,s.listener,s.options)}),isFunction(e)?e:t}function removeEventListenerImpl(n,e,t){return ready(function(){const r=processEventArgs(n,e,t);r.target.removeEventListener(r.event,r.listener)}),isFunction(e)?e:t}const DUMMY_ELT=getDocument().createElement("output");function findAttributeTargets(n,e){const t=getClosestAttributeValue(n,e);if(t){if(t==="this")return[findThisElement(n,e)];{const r=querySelectorAllExt(n,t);if(/(^|,)(\s*)inherit(\s*)($|,)/.test(t)){const s=asElement(getClosestMatch(n,function(o){return o!==n&&hasAttribute(asElement(o),e)}));s&&r.push(...findAttributeTargets(s,e))}return r.length===0?(logError('The selector "'+t+'" on '+e+" returned no matches!"),[DUMMY_ELT]):r}}}function findThisElement(n,e){return asElement(getClosestMatch(n,function(t){return getAttributeValue(asElement(t),e)!=null}))}function getTarget(n){const e=getClosestAttributeValue(n,"hx-target");return e?e==="this"?findThisElement(n,"hx-target"):querySelectorExt(n,e):getInternalData(n).boosted?getDocument().body:n}function shouldSettleAttribute(n){return htmx.config.attributesToSettle.includes(n)}function cloneAttributes(n,e){forEach(Array.from(n.attributes),function(t){!e.hasAttribute(t.name)&&shouldSettleAttribute(t.name)&&n.removeAttribute(t.name)}),forEach(e.attributes,function(t){shouldSettleAttribute(t.name)&&n.setAttribute(t.name,t.value)})}function isInlineSwap(n,e){const t=getExtensions(e);for(let r=0;r<t.length;r++){const a=t[r];try{if(a.isInlineSwap(n))return!0}catch(s){logError(s)}}return n==="outerHTML"}function oobSwap(n,e,t,r){r=r||getDocument();let a="#"+CSS.escape(getRawAttribute(e,"id")),s="outerHTML";n==="true"||(n.indexOf(":")>0?(s=n.substring(0,n.indexOf(":")),a=n.substring(n.indexOf(":")+1)):s=n),e.removeAttribute("hx-swap-oob"),e.removeAttribute("data-hx-swap-oob");const o=querySelectorAllExt(r,a,!1);return o.length?(forEach(o,function(l){let c;const d=e.cloneNode(!0);c=getDocument().createDocumentFragment(),c.appendChild(d),isInlineSwap(s,l)||(c=asParentNode(d));const f={shouldSwap:!0,target:l,fragment:c};triggerEvent(l,"htmx:oobBeforeSwap",f)&&(l=f.target,f.shouldSwap&&(handlePreservedElements(c),swapWithStyle(s,l,l,c,t),restorePreservedElements()),forEach(t.elts,function(p){triggerEvent(p,"htmx:oobAfterSwap",f)}))}),e.parentNode.removeChild(e)):(e.parentNode.removeChild(e),triggerErrorEvent(getDocument().body,"htmx:oobErrorNoTarget",{content:e,target:a})),n}function restorePreservedElements(){const n=find("#--htmx-preserve-pantry--");if(n){for(const e of[...n.children]){const t=find("#"+e.id);t.parentNode.moveBefore(e,t),t.remove()}n.remove()}}function handlePreservedElements(n){forEach(findAll(n,"[hx-preserve], [data-hx-preserve]"),function(e){const t=getAttributeValue(e,"id"),r=getDocument().getElementById(t);if(r!=null)if(e.moveBefore){let a=find("#--htmx-preserve-pantry--");a==null&&(getDocument().body.insertAdjacentHTML("afterend","<div id='--htmx-preserve-pantry--'></div>"),a=find("#--htmx-preserve-pantry--")),a.moveBefore(r,null)}else e.parentNode.replaceChild(r,e)})}function handleAttributes(n,e,t){forEach(e.querySelectorAll("[id]"),function(r){const a=getRawAttribute(r,"id");if(a&&a.length>0){const s=asParentNode(n),o=s&&s.querySelector(CSS.escape(r.tagName)+"#"+CSS.escape(a));if(o&&o!==s){const l=r.cloneNode();cloneAttributes(r,o),t.tasks.push(function(){cloneAttributes(r,l)})}}})}function makeAjaxLoadTask(n){return function(){removeClassFromElement(n,htmx.config.addedClass),processNode(asElement(n)),processFocus(asParentNode(n)),triggerEvent(n,"htmx:load")}}function processFocus(n){const e="[autofocus]",t=asHtmlElement(matches(n,e)?n:n.querySelector(e));t?.focus()}function insertNodesBefore(n,e,t,r){for(handleAttributes(n,t,r);t.childNodes.length>0;){const a=t.firstChild;addClassToElement(asElement(a),htmx.config.addedClass),n.insertBefore(a,e),a.nodeType!==Node.TEXT_NODE&&a.nodeType!==Node.COMMENT_NODE&&r.tasks.push(makeAjaxLoadTask(a))}}function stringHash(n,e){let t=0;for(;t<n.length;)e=(e<<5)-e+n.charCodeAt(t++)|0;return e}function attributeHash(n){let e=0;for(let t=0;t<n.attributes.length;t++){const r=n.attributes[t];r.value&&(e=stringHash(r.name,e),e=stringHash(r.value,e))}return e}function deInitOnHandlers(n){const e=getInternalData(n);if(e.onHandlers){for(let t=0;t<e.onHandlers.length;t++){const r=e.onHandlers[t];removeEventListenerImpl(n,r.event,r.listener)}delete e.onHandlers}}function deInitNode(n){const e=getInternalData(n);e.timeout&&clearTimeout(e.timeout),e.listenerInfos&&forEach(e.listenerInfos,function(t){t.on&&removeEventListenerImpl(t.on,t.trigger,t.listener)}),deInitOnHandlers(n),forEach(Object.keys(e),function(t){t!=="firstInitCompleted"&&delete e[t]})}function cleanUpElement(n){triggerEvent(n,"htmx:beforeCleanupElement"),deInitNode(n),forEach(n.children,function(e){cleanUpElement(e)})}function swapOuterHTML(n,e,t){if(n.tagName==="BODY")return swapInnerHTML(n,e,t);let r;const a=n.previousSibling,s=parentElt(n);if(s){for(insertNodesBefore(s,n,e,t),a==null?r=s.firstChild:r=a.nextSibling,t.elts=t.elts.filter(function(o){return o!==n});r&&r!==n;)r instanceof Element&&t.elts.push(r),r=r.nextSibling;cleanUpElement(n),n.remove()}}function swapAfterBegin(n,e,t){return insertNodesBefore(n,n.firstChild,e,t)}function swapBeforeBegin(n,e,t){return insertNodesBefore(parentElt(n),n,e,t)}function swapBeforeEnd(n,e,t){return insertNodesBefore(n,null,e,t)}function swapAfterEnd(n,e,t){return insertNodesBefore(parentElt(n),n.nextSibling,e,t)}function swapDelete(n){cleanUpElement(n);const e=parentElt(n);if(e)return e.removeChild(n)}function swapInnerHTML(n,e,t){const r=n.firstChild;if(insertNodesBefore(n,r,e,t),r){for(;r.nextSibling;)cleanUpElement(r.nextSibling),n.removeChild(r.nextSibling);cleanUpElement(r),n.removeChild(r)}}function swapWithStyle(n,e,t,r,a){switch(n){case"none":return;case"outerHTML":swapOuterHTML(t,r,a);return;case"afterbegin":swapAfterBegin(t,r,a);return;case"beforebegin":swapBeforeBegin(t,r,a);return;case"beforeend":swapBeforeEnd(t,r,a);return;case"afterend":swapAfterEnd(t,r,a);return;case"delete":swapDelete(t);return;default:var s=getExtensions(e);for(let o=0;o<s.length;o++){const l=s[o];try{const c=l.handleSwap(n,t,r,a);if(c){if(Array.isArray(c))for(let d=0;d<c.length;d++){const f=c[d];f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE&&a.tasks.push(makeAjaxLoadTask(f))}return}}catch(c){logError(c)}}n==="innerHTML"?swapInnerHTML(t,r,a):swapWithStyle(htmx.config.defaultSwapStyle,e,t,r,a)}}function findAndSwapOobElements(n,e,t){var r=findAll(n,"[hx-swap-oob], [data-hx-swap-oob]");return forEach(r,function(a){if(htmx.config.allowNestedOobSwaps||a.parentElement===null){const s=getAttributeValue(a,"hx-swap-oob");s!=null&&oobSwap(s,a,e,t)}else a.removeAttribute("hx-swap-oob"),a.removeAttribute("data-hx-swap-oob")}),r.length>0}function swap(n,e,t,r){r||(r={});let a=null,s=null,o=function(){maybeCall(r.beforeSwapCallback),n=resolveTarget(n);const d=r.contextElement?getRootNode(r.contextElement,!1):getDocument(),f=document.activeElement;let p={};p={elt:f,start:f?f.selectionStart:null,end:f?f.selectionEnd:null};const b=makeSettleInfo(n);if(t.swapStyle==="textContent")n.textContent=e;else{let x=makeFragment(e);if(b.title=r.title||x.title,r.historyRequest&&(x=x.querySelector("[hx-history-elt],[data-hx-history-elt]")||x),r.selectOOB){const _=r.selectOOB.split(",");for(let E=0;E<_.length;E++){const A=_[E].split(":",2);let O=A[0].trim();O.indexOf("#")===0&&(O=O.substring(1));const $=A[1]||"true",P=x.querySelector("#"+O);P&&oobSwap($,P,b,d)}}if(findAndSwapOobElements(x,b,d),forEach(findAll(x,"template"),function(_){_.content&&findAndSwapOobElements(_.content,b,d)&&_.remove()}),r.select){const _=getDocument().createDocumentFragment();forEach(x.querySelectorAll(r.select),function(E){_.appendChild(E)}),x=_}handlePreservedElements(x),swapWithStyle(t.swapStyle,r.contextElement,n,x,b),restorePreservedElements()}if(p.elt&&!bodyContains(p.elt)&&getRawAttribute(p.elt,"id")){const x=document.getElementById(getRawAttribute(p.elt,"id")),_={preventScroll:t.focusScroll!==void 0?!t.focusScroll:!htmx.config.defaultFocusScroll};if(x){if(p.start&&x.setSelectionRange)try{x.setSelectionRange(p.start,p.end)}catch{}x.focus(_)}}removeClassFromElement(n,htmx.config.swappingClass),forEach(b.elts,function(x){x.classList&&addClassToElement(x,htmx.config.settlingClass),triggerEvent(x,"htmx:afterSwap",r.eventInfo)}),maybeCall(r.afterSwapCallback),t.ignoreTitle||handleTitle(b.title);const v=function(){if(forEach(b.tasks,function(x){x.call()}),forEach(b.elts,function(x){x.classList&&removeClassFromElement(x,htmx.config.settlingClass),triggerEvent(x,"htmx:afterSettle",r.eventInfo)}),r.anchor){const x=asElement(resolveTarget("#"+r.anchor));x&&x.scrollIntoView({block:"start",behavior:"auto"})}updateScrollState(b.elts,t),maybeCall(r.afterSettleCallback),maybeCall(a)};t.settleDelay>0?getWindow().setTimeout(v,t.settleDelay):v()},l=htmx.config.globalViewTransitions;t.hasOwnProperty("transition")&&(l=t.transition);const c=r.contextElement||getDocument();if(l&&triggerEvent(c,"htmx:beforeTransition",r.eventInfo)&&typeof Promise<"u"&&document.startViewTransition){const d=new Promise(function(p,b){a=p,s=b}),f=o;o=function(){document.startViewTransition(function(){return f(),d})}}try{t?.swapDelay&&t.swapDelay>0?getWindow().setTimeout(o,t.swapDelay):o()}catch(d){throw triggerErrorEvent(c,"htmx:swapError",r.eventInfo),maybeCall(s),d}}function handleTriggerHeader(n,e,t){const r=n.getResponseHeader(e);if(r.indexOf("{")===0){const a=parseJSON(r);for(const s in a)if(a.hasOwnProperty(s)){let o=a[s];isRawObject(o)?t=o.target!==void 0?o.target:t:o={value:o},triggerEvent(t,s,o)}}else{const a=r.split(",");for(let s=0;s<a.length;s++)triggerEvent(t,a[s].trim(),[])}}const WHITESPACE_OR_COMMA=/[\s,]/,SYMBOL_START=/[_$a-zA-Z]/,SYMBOL_CONT=/[_$a-zA-Z0-9]/,STRINGISH_START=['"',"'","/"],NOT_WHITESPACE=/[^\s]/,COMBINED_SELECTOR_START=/[{(]/,COMBINED_SELECTOR_END=/[})]/;function tokenizeString(n){const e=[];let t=0;for(;t<n.length;){if(SYMBOL_START.exec(n.charAt(t))){for(var r=t;SYMBOL_CONT.exec(n.charAt(t+1));)t++;e.push(n.substring(r,t+1))}else if(STRINGISH_START.indexOf(n.charAt(t))!==-1){const a=n.charAt(t);var r=t;for(t++;t<n.length&&n.charAt(t)!==a;)n.charAt(t)==="\\"&&t++,t++;e.push(n.substring(r,t+1))}else{const a=n.charAt(t);e.push(a)}t++}return e}function isPossibleRelativeReference(n,e,t){return SYMBOL_START.exec(n.charAt(0))&&n!=="true"&&n!=="false"&&n!=="this"&&n!==t&&e!=="."}function maybeGenerateConditional(n,e,t){if(e[0]==="["){e.shift();let r=1,a=" return (function("+t+"){ return (",s=null;for(;e.length>0;){const o=e[0];if(o==="]"){if(r--,r===0){s===null&&(a=a+"true"),e.shift(),a+=")})";try{const l=maybeEval(n,function(){return Function(a)()},function(){return!0});return l.source=a,l}catch(l){return triggerErrorEvent(getDocument().body,"htmx:syntax:error",{error:l,source:a}),null}}}else o==="["&&r++;isPossibleRelativeReference(o,s,t)?a+="(("+t+"."+o+") ? ("+t+"."+o+") : (window."+o+"))":a=a+o,s=e.shift()}}}function consumeUntil(n,e){let t="";for(;n.length>0&&!e.test(n[0]);)t+=n.shift();return t}function consumeCSSSelector(n){let e;return n.length>0&&COMBINED_SELECTOR_START.test(n[0])?(n.shift(),e=consumeUntil(n,COMBINED_SELECTOR_END).trim(),n.shift()):e=consumeUntil(n,WHITESPACE_OR_COMMA),e}const INPUT_SELECTOR="input, textarea, select";function parseAndCacheTrigger(n,e,t){const r=[],a=tokenizeString(e);do{consumeUntil(a,NOT_WHITESPACE);const l=a.length,c=consumeUntil(a,/[,\[\s]/);if(c!=="")if(c==="every"){const d={trigger:"every"};consumeUntil(a,NOT_WHITESPACE),d.pollInterval=parseInterval(consumeUntil(a,/[,\[\s]/)),consumeUntil(a,NOT_WHITESPACE);var s=maybeGenerateConditional(n,a,"event");s&&(d.eventFilter=s),r.push(d)}else{const d={trigger:c};var s=maybeGenerateConditional(n,a,"event");for(s&&(d.eventFilter=s),consumeUntil(a,NOT_WHITESPACE);a.length>0&&a[0]!==",";){const p=a.shift();if(p==="changed")d.changed=!0;else if(p==="once")d.once=!0;else if(p==="consume")d.consume=!0;else if(p==="delay"&&a[0]===":")a.shift(),d.delay=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA));else if(p==="from"&&a[0]===":"){if(a.shift(),COMBINED_SELECTOR_START.test(a[0]))var o=consumeCSSSelector(a);else{var o=consumeUntil(a,WHITESPACE_OR_COMMA);if(o==="closest"||o==="find"||o==="next"||o==="previous"){a.shift();const v=consumeCSSSelector(a);v.length>0&&(o+=" "+v)}}d.from=o}else p==="target"&&a[0]===":"?(a.shift(),d.target=consumeCSSSelector(a)):p==="throttle"&&a[0]===":"?(a.shift(),d.throttle=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA))):p==="queue"&&a[0]===":"?(a.shift(),d.queue=consumeUntil(a,WHITESPACE_OR_COMMA)):p==="root"&&a[0]===":"?(a.shift(),d[p]=consumeCSSSelector(a)):p==="threshold"&&a[0]===":"?(a.shift(),d[p]=consumeUntil(a,WHITESPACE_OR_COMMA)):triggerErrorEvent(n,"htmx:syntax:error",{token:a.shift()});consumeUntil(a,NOT_WHITESPACE)}r.push(d)}a.length===l&&triggerErrorEvent(n,"htmx:syntax:error",{token:a.shift()}),consumeUntil(a,NOT_WHITESPACE)}while(a[0]===","&&a.shift());return t&&(t[e]=r),r}function getTriggerSpecs(n){const e=getAttributeValue(n,"hx-trigger");let t=[];if(e){const r=htmx.config.triggerSpecsCache;t=r&&r[e]||parseAndCacheTrigger(n,e,r)}return t.length>0?t:matches(n,"form")?[{trigger:"submit"}]:matches(n,'input[type="button"], input[type="submit"]')?[{trigger:"click"}]:matches(n,INPUT_SELECTOR)?[{trigger:"change"}]:[{trigger:"click"}]}function cancelPolling(n){getInternalData(n).cancelled=!0}function processPolling(n,e,t){const r=getInternalData(n);r.timeout=getWindow().setTimeout(function(){bodyContains(n)&&r.cancelled!==!0&&(maybeFilterEvent(t,n,makeEvent("hx:poll:trigger",{triggerSpec:t,target:n}))||e(n),processPolling(n,e,t))},t.pollInterval)}function isLocalLink(n){return location.hostname===n.hostname&&getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")!==0}function eltIsDisabled(n){return closest(n,htmx.config.disableSelector)}function boostElement(n,e,t){if(n instanceof HTMLAnchorElement&&isLocalLink(n)&&(n.target===""||n.target==="_self")||n.tagName==="FORM"&&String(getRawAttribute(n,"method")).toLowerCase()!=="dialog"){e.boosted=!0;let r,a;if(n.tagName==="A")r="get",a=getRawAttribute(n,"href");else{const s=getRawAttribute(n,"method");r=s?s.toLowerCase():"get",a=getRawAttribute(n,"action"),(a==null||a==="")&&(a=location.href),r==="get"&&a.includes("?")&&(a=a.replace(/\?[^#]+/,""))}t.forEach(function(s){addEventListener(n,function(o,l){const c=asElement(o);if(eltIsDisabled(c)){cleanUpElement(c);return}issueAjaxRequest(r,a,c,l)},e,s,!0)})}}function shouldCancel(n,e){if(n.type==="submit"&&e.tagName==="FORM")return!0;if(n.type==="click"){const t=e.closest('input[type="submit"], button');if(t&&t.form&&t.type==="submit")return!0;const r=e.closest("a"),a=/^#.+/;if(r&&r.href&&!a.test(r.getAttribute("href")))return!0}return!1}function ignoreBoostedAnchorCtrlClick(n,e){return getInternalData(n).boosted&&n instanceof HTMLAnchorElement&&e.type==="click"&&(e.ctrlKey||e.metaKey)}function maybeFilterEvent(n,e,t){const r=n.eventFilter;if(r)try{return r.call(e,t)!==!0}catch(a){const s=r.source;return triggerErrorEvent(getDocument().body,"htmx:eventFilter:error",{error:a,source:s}),!0}return!1}function addEventListener(n,e,t,r,a){const s=getInternalData(n);let o;r.from?o=querySelectorAllExt(n,r.from):o=[n],r.changed&&("lastValue"in s||(s.lastValue=new WeakMap),o.forEach(function(l){s.lastValue.has(r)||s.lastValue.set(r,new WeakMap),s.lastValue.get(r).set(l,l.value)})),forEach(o,function(l){const c=function(d){if(!bodyContains(n)){l.removeEventListener(r.trigger,c);return}if(ignoreBoostedAnchorCtrlClick(n,d)||((a||shouldCancel(d,l))&&d.preventDefault(),maybeFilterEvent(r,n,d)))return;const f=getInternalData(d);if(f.triggerSpec=r,f.handledFor==null&&(f.handledFor=[]),f.handledFor.indexOf(n)<0){if(f.handledFor.push(n),r.consume&&d.stopPropagation(),r.target&&d.target&&!matches(asElement(d.target),r.target))return;if(r.once){if(s.triggeredOnce)return;s.triggeredOnce=!0}if(r.changed){const p=d.target,b=p.value,v=s.lastValue.get(r);if(v.has(p)&&v.get(p)===b)return;v.set(p,b)}if(s.delayed&&clearTimeout(s.delayed),s.throttle)return;r.throttle>0?s.throttle||(triggerEvent(n,"htmx:trigger"),e(n,d),s.throttle=getWindow().setTimeout(function(){s.throttle=null},r.throttle)):r.delay>0?s.delayed=getWindow().setTimeout(function(){triggerEvent(n,"htmx:trigger"),e(n,d)},r.delay):(triggerEvent(n,"htmx:trigger"),e(n,d))}};t.listenerInfos==null&&(t.listenerInfos=[]),t.listenerInfos.push({trigger:r.trigger,listener:c,on:l}),l.addEventListener(r.trigger,c)})}let windowIsScrolling=!1,scrollHandler=null;function initScrollHandler(){scrollHandler||(scrollHandler=function(){windowIsScrolling=!0},window.addEventListener("scroll",scrollHandler),window.addEventListener("resize",scrollHandler),setInterval(function(){windowIsScrolling&&(windowIsScrolling=!1,forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),function(n){maybeReveal(n)}))},200))}function maybeReveal(n){!hasAttribute(n,"data-hx-revealed")&&isScrolledIntoView(n)&&(n.setAttribute("data-hx-revealed","true"),getInternalData(n).initHash?triggerEvent(n,"revealed"):n.addEventListener("htmx:afterProcessNode",function(){triggerEvent(n,"revealed")},{once:!0}))}function loadImmediately(n,e,t,r){const a=function(){t.loaded||(t.loaded=!0,triggerEvent(n,"htmx:trigger"),e(n))};r>0?getWindow().setTimeout(a,r):a()}function processVerbs(n,e,t){let r=!1;return forEach(VERBS,function(a){if(hasAttribute(n,"hx-"+a)){const s=getAttributeValue(n,"hx-"+a);r=!0,e.path=s,e.verb=a,t.forEach(function(o){addTriggerHandler(n,o,e,function(l,c){const d=asElement(l);if(eltIsDisabled(d)){cleanUpElement(d);return}issueAjaxRequest(a,s,d,c)})})}}),r}function addTriggerHandler(n,e,t,r){if(e.trigger==="revealed")initScrollHandler(),addEventListener(n,r,t,e),maybeReveal(asElement(n));else if(e.trigger==="intersect"){const a={};e.root&&(a.root=querySelectorExt(n,e.root)),e.threshold&&(a.threshold=parseFloat(e.threshold)),new IntersectionObserver(function(o){for(let l=0;l<o.length;l++)if(o[l].isIntersecting){triggerEvent(n,"intersect");break}},a).observe(asElement(n)),addEventListener(asElement(n),r,t,e)}else!t.firstInitCompleted&&e.trigger==="load"?maybeFilterEvent(e,n,makeEvent("load",{elt:n}))||loadImmediately(asElement(n),r,t,e.delay):e.pollInterval>0?(t.polling=!0,processPolling(asElement(n),r,e)):addEventListener(n,r,t,e)}function shouldProcessHxOn(n){const e=asElement(n);if(!e)return!1;const t=e.attributes;for(let r=0;r<t.length;r++){const a=t[r].name;if(startsWith(a,"hx-on:")||startsWith(a,"data-hx-on:")||startsWith(a,"hx-on-")||startsWith(a,"data-hx-on-"))return!0}return!1}const HX_ON_QUERY=new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');function processHXOnRoot(n,e){shouldProcessHxOn(n)&&e.push(asElement(n));const t=HX_ON_QUERY.evaluate(n);let r=null;for(;r=t.iterateNext();)e.push(asElement(r))}function findHxOnWildcardElements(n){const e=[];if(n instanceof DocumentFragment)for(const t of n.childNodes)processHXOnRoot(t,e);else processHXOnRoot(n,e);return e}function findElementsToProcess(n){if(n.querySelectorAll){const t=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",r=[];for(const s in extensions){const o=extensions[s];if(o.getSelectors){var e=o.getSelectors();e&&r.push(e)}}return n.querySelectorAll(VERB_SELECTOR+t+", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]"+r.flat().map(s=>", "+s).join(""))}else return[]}function maybeSetLastButtonClicked(n){const e=getTargetButton(n.target),t=getRelatedFormData(n);t&&(t.lastButtonClicked=e)}function maybeUnsetLastButtonClicked(n){const e=getRelatedFormData(n);e&&(e.lastButtonClicked=null)}function getTargetButton(n){return closest(asElement(n),"button, input[type='submit']")}function getRelatedForm(n){return n.form||closest(n,"form")}function getRelatedFormData(n){const e=getTargetButton(n.target);if(!e)return;const t=getRelatedForm(e);if(t)return getInternalData(t)}function initButtonTracking(n){n.addEventListener("click",maybeSetLastButtonClicked),n.addEventListener("focusin",maybeSetLastButtonClicked),n.addEventListener("focusout",maybeUnsetLastButtonClicked)}function addHxOnEventHandler(n,e,t){const r=getInternalData(n);Array.isArray(r.onHandlers)||(r.onHandlers=[]);let a;const s=function(o){maybeEval(n,function(){eltIsDisabled(n)||(a||(a=new Function("event",t)),a.call(n,o))})};n.addEventListener(e,s),r.onHandlers.push({event:e,listener:s})}function processHxOnWildcard(n){deInitOnHandlers(n);for(let e=0;e<n.attributes.length;e++){const t=n.attributes[e].name,r=n.attributes[e].value;if(startsWith(t,"hx-on")||startsWith(t,"data-hx-on")){const a=t.indexOf("-on")+3,s=t.slice(a,a+1);if(s==="-"||s===":"){let o=t.slice(a+1);startsWith(o,":")?o="htmx"+o:startsWith(o,"-")?o="htmx:"+o.slice(1):startsWith(o,"htmx-")&&(o="htmx:"+o.slice(5)),addHxOnEventHandler(n,o,r)}}}}function initNode(n){triggerEvent(n,"htmx:beforeProcessNode");const e=getInternalData(n),t=getTriggerSpecs(n);processVerbs(n,e,t)||(getClosestAttributeValue(n,"hx-boost")==="true"?boostElement(n,e,t):hasAttribute(n,"hx-trigger")&&t.forEach(function(a){addTriggerHandler(n,a,e,function(){})})),(n.tagName==="FORM"||getRawAttribute(n,"type")==="submit"&&hasAttribute(n,"form"))&&initButtonTracking(n),e.firstInitCompleted=!0,triggerEvent(n,"htmx:afterProcessNode")}function maybeDeInitAndHash(n){if(!(n instanceof Element))return!1;const e=getInternalData(n),t=attributeHash(n);return e.initHash!==t?(deInitNode(n),e.initHash=t,!0):!1}function processNode(n){if(n=resolveTarget(n),eltIsDisabled(n)){cleanUpElement(n);return}const e=[];maybeDeInitAndHash(n)&&e.push(n),forEach(findElementsToProcess(n),function(t){if(eltIsDisabled(t)){cleanUpElement(t);return}maybeDeInitAndHash(t)&&e.push(t)}),forEach(findHxOnWildcardElements(n),processHxOnWildcard),forEach(e,initNode)}function kebabEventName(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function makeEvent(n,e){return new CustomEvent(n,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}function triggerErrorEvent(n,e,t){triggerEvent(n,e,mergeObjects({error:e},t))}function ignoreEventForLogging(n){return n==="htmx:afterProcessNode"}function withExtensions(n,e,t){forEach(getExtensions(n,[],t),function(r){try{e(r)}catch(a){logError(a)}})}function logError(n){console.error(n)}function triggerEvent(n,e,t){n=resolveTarget(n),t==null&&(t={}),t.elt=n;const r=makeEvent(e,t);htmx.logger&&!ignoreEventForLogging(e)&&htmx.logger(n,e,t),t.error&&(logError(t.error+(t.target?", "+t.target:"")),triggerEvent(n,"htmx:error",{errorInfo:t}));let a=n.dispatchEvent(r);const s=kebabEventName(e);if(a&&s!==e){const o=makeEvent(s,r.detail);a=a&&n.dispatchEvent(o)}return withExtensions(asElement(n),function(o){a=a&&o.onEvent(e,r)!==!1&&!r.defaultPrevented}),a}let currentPathForHistory;function setCurrentPathForHistory(n){currentPathForHistory=n,canAccessLocalStorage()&&sessionStorage.setItem("htmx-current-path-for-history",n)}setCurrentPathForHistory(location.pathname+location.search);function getHistoryElement(){return getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]")||getDocument().body}function saveToHistoryCache(n,e){if(!canAccessLocalStorage())return;const t=cleanInnerHtmlForHistory(e),r=getDocument().title,a=window.scrollY;if(htmx.config.historyCacheSize<=0){sessionStorage.removeItem("htmx-history-cache");return}n=normalizePath(n);const s=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let l=0;l<s.length;l++)if(s[l].url===n){s.splice(l,1);break}const o={url:n,content:t,title:r,scroll:a};for(triggerEvent(getDocument().body,"htmx:historyItemCreated",{item:o,cache:s}),s.push(o);s.length>htmx.config.historyCacheSize;)s.shift();for(;s.length>0;)try{sessionStorage.setItem("htmx-history-cache",JSON.stringify(s));break}catch(l){triggerErrorEvent(getDocument().body,"htmx:historyCacheError",{cause:l,cache:s}),s.shift()}}function getCachedHistory(n){if(!canAccessLocalStorage())return null;n=normalizePath(n);const e=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let t=0;t<e.length;t++)if(e[t].url===n)return e[t];return null}function cleanInnerHtmlForHistory(n){const e=htmx.config.requestClass,t=n.cloneNode(!0);return forEach(findAll(t,"."+e),function(r){removeClassFromElement(r,e)}),forEach(findAll(t,"[data-disabled-by-htmx]"),function(r){r.removeAttribute("disabled")}),t.innerHTML}function saveCurrentPageToHistory(){const n=getHistoryElement();let e=currentPathForHistory;canAccessLocalStorage()&&(e=sessionStorage.getItem("htmx-current-path-for-history")),e=e||location.pathname+location.search,getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')||(triggerEvent(getDocument().body,"htmx:beforeHistorySave",{path:e,historyElt:n}),saveToHistoryCache(e,n)),htmx.config.historyEnabled&&history.replaceState({htmx:!0},getDocument().title,location.href)}function pushUrlIntoHistory(n){htmx.config.getCacheBusterParam&&(n=n.replace(/org\.htmx\.cache-buster=[^&]*&?/,""),(endsWith(n,"&")||endsWith(n,"?"))&&(n=n.slice(0,-1))),htmx.config.historyEnabled&&history.pushState({htmx:!0},"",n),setCurrentPathForHistory(n)}function replaceUrlInHistory(n){htmx.config.historyEnabled&&history.replaceState({htmx:!0},"",n),setCurrentPathForHistory(n)}function settleImmediately(n){forEach(n,function(e){e.call(void 0)})}function loadHistoryFromServer(n){const e=new XMLHttpRequest,t={swapStyle:"innerHTML",swapDelay:0,settleDelay:0},r={path:n,xhr:e,historyElt:getHistoryElement(),swapSpec:t};e.open("GET",n,!0),htmx.config.historyRestoreAsHxRequest&&e.setRequestHeader("HX-Request","true"),e.setRequestHeader("HX-History-Restore-Request","true"),e.setRequestHeader("HX-Current-URL",location.href),e.onload=function(){this.status>=200&&this.status<400?(r.response=this.response,triggerEvent(getDocument().body,"htmx:historyCacheMissLoad",r),swap(r.historyElt,r.response,t,{contextElement:r.historyElt,historyRequest:!0}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",{path:n,cacheMiss:!0,serverResponse:r.response})):triggerErrorEvent(getDocument().body,"htmx:historyCacheMissLoadError",r)},triggerEvent(getDocument().body,"htmx:historyCacheMiss",r)&&e.send()}function restoreHistory(n){saveCurrentPageToHistory(),n=n||location.pathname+location.search;const e=getCachedHistory(n);if(e){const t={swapStyle:"innerHTML",swapDelay:0,settleDelay:0,scroll:e.scroll},r={path:n,item:e,historyElt:getHistoryElement(),swapSpec:t};triggerEvent(getDocument().body,"htmx:historyCacheHit",r)&&(swap(r.historyElt,e.content,t,{contextElement:r.historyElt,title:e.title}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",r))}else htmx.config.refreshOnHistoryMiss?htmx.location.reload(!0):loadHistoryFromServer(n)}function addRequestIndicatorClasses(n){let e=findAttributeTargets(n,"hx-indicator");return e==null&&(e=[n]),forEach(e,function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||0)+1,addClassToElement(t,htmx.config.requestClass)}),e}function disableElements(n){let e=findAttributeTargets(n,"hx-disabled-elt");return e==null&&(e=[]),forEach(e,function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||0)+1,t.hasAttribute("disabled")||(t.setAttribute("disabled",""),t.setAttribute("data-disabled-by-htmx",""))}),e}function removeRequestIndicators(n,e){forEach(n.concat(e),function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||1)-1}),forEach(n,function(t){getInternalData(t).requestCount===0&&removeClassFromElement(t,htmx.config.requestClass)}),forEach(e,function(t){getInternalData(t).requestCount===0&&t.hasAttribute("data-disabled-by-htmx")&&(t.removeAttribute("disabled"),t.removeAttribute("data-disabled-by-htmx"))})}function haveSeenNode(n,e){for(let t=0;t<n.length;t++)if(n[t].isSameNode(e))return!0;return!1}function shouldInclude(n){const e=n;return e.name===""||e.name==null||e.disabled||closest(e,"fieldset[disabled]")||e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"?!1:e.type==="checkbox"||e.type==="radio"?e.checked:!0}function addValueToFormData(n,e,t){n!=null&&e!=null&&(Array.isArray(e)?e.forEach(function(r){t.append(n,r)}):t.append(n,e))}function removeValueFromFormData(n,e,t){if(n!=null&&e!=null){let r=t.getAll(n);Array.isArray(e)?r=r.filter(a=>e.indexOf(a)<0):r=r.filter(a=>a!==e),t.delete(n),forEach(r,a=>t.append(n,a))}}function getValueFromInput(n){return n instanceof HTMLSelectElement&&n.multiple?toArray(n.querySelectorAll("option:checked")).map(function(e){return e.value}):n instanceof HTMLInputElement&&n.files?toArray(n.files):n.value}function processInputValue(n,e,t,r,a){if(!(r==null||haveSeenNode(n,r))){if(n.push(r),shouldInclude(r)){const s=getRawAttribute(r,"name");addValueToFormData(s,getValueFromInput(r),e),a&&validateElement(r,t)}r instanceof HTMLFormElement&&(forEach(r.elements,function(s){n.indexOf(s)>=0?removeValueFromFormData(s.name,getValueFromInput(s),e):n.push(s),a&&validateElement(s,t)}),new FormData(r).forEach(function(s,o){s instanceof File&&s.name===""||addValueToFormData(o,s,e)}))}}function validateElement(n,e){const t=n;t.willValidate&&(triggerEvent(t,"htmx:validation:validate"),t.checkValidity()||(triggerEvent(t,"htmx:validation:failed",{message:t.validationMessage,validity:t.validity})&&!e.length&&htmx.config.reportValidityOfForms&&t.reportValidity(),e.push({elt:t,message:t.validationMessage,validity:t.validity})))}function overrideFormData(n,e){for(const t of e.keys())n.delete(t);return e.forEach(function(t,r){n.append(r,t)}),n}function getInputValues(n,e){const t=[],r=new FormData,a=new FormData,s=[],o=getInternalData(n);o.lastButtonClicked&&!bodyContains(o.lastButtonClicked)&&(o.lastButtonClicked=null);let l=n instanceof HTMLFormElement&&n.noValidate!==!0||getAttributeValue(n,"hx-validate")==="true";if(o.lastButtonClicked&&(l=l&&o.lastButtonClicked.formNoValidate!==!0),e!=="get"&&processInputValue(t,a,s,getRelatedForm(n),l),processInputValue(t,r,s,n,l),o.lastButtonClicked||n.tagName==="BUTTON"||n.tagName==="INPUT"&&getRawAttribute(n,"type")==="submit"){const d=o.lastButtonClicked||n,f=getRawAttribute(d,"name");addValueToFormData(f,d.value,a)}const c=findAttributeTargets(n,"hx-include");return forEach(c,function(d){processInputValue(t,r,s,asElement(d),l),matches(d,"form")||forEach(asParentNode(d).querySelectorAll(INPUT_SELECTOR),function(f){processInputValue(t,r,s,f,l)})}),overrideFormData(r,a),{errors:s,formData:r,values:formDataProxy(r)}}function appendParam(n,e,t){n!==""&&(n+="&"),String(t)==="[object Object]"&&(t=JSON.stringify(t));const r=encodeURIComponent(t);return n+=encodeURIComponent(e)+"="+r,n}function urlEncode(n){n=formDataFromObject(n);let e="";return n.forEach(function(t,r){e=appendParam(e,r,t)}),e}function getHeaders(n,e,t){const r={"HX-Request":"true","HX-Trigger":getRawAttribute(n,"id"),"HX-Trigger-Name":getRawAttribute(n,"name"),"HX-Target":getAttributeValue(e,"id"),"HX-Current-URL":location.href};return getValuesForElement(n,"hx-headers",!1,r),t!==void 0&&(r["HX-Prompt"]=t),getInternalData(n).boosted&&(r["HX-Boosted"]="true"),r}function filterValues(n,e){const t=getClosestAttributeValue(e,"hx-params");if(t){if(t==="none")return new FormData;if(t==="*")return n;if(t.indexOf("not ")===0)return forEach(t.slice(4).split(","),function(r){r=r.trim(),n.delete(r)}),n;{const r=new FormData;return forEach(t.split(","),function(a){a=a.trim(),n.has(a)&&n.getAll(a).forEach(function(s){r.append(a,s)})}),r}}else return n}function isAnchorLink(n){return!!getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")>=0}function getSwapSpecification(n,e){const t=e||getClosestAttributeValue(n,"hx-swap"),r={swapStyle:getInternalData(n).boosted?"innerHTML":htmx.config.defaultSwapStyle,swapDelay:htmx.config.defaultSwapDelay,settleDelay:htmx.config.defaultSettleDelay};if(htmx.config.scrollIntoViewOnBoost&&getInternalData(n).boosted&&!isAnchorLink(n)&&(r.show="top"),t){const o=splitOnWhitespace(t);if(o.length>0)for(let l=0;l<o.length;l++){const c=o[l];if(c.indexOf("swap:")===0)r.swapDelay=parseInterval(c.slice(5));else if(c.indexOf("settle:")===0)r.settleDelay=parseInterval(c.slice(7));else if(c.indexOf("transition:")===0)r.transition=c.slice(11)==="true";else if(c.indexOf("ignoreTitle:")===0)r.ignoreTitle=c.slice(12)==="true";else if(c.indexOf("scroll:")===0){var a=c.slice(7).split(":");const f=a.pop();var s=a.length>0?a.join(":"):null;r.scroll=f,r.scrollTarget=s}else if(c.indexOf("show:")===0){var a=c.slice(5).split(":");const p=a.pop();var s=a.length>0?a.join(":"):null;r.show=p,r.showTarget=s}else if(c.indexOf("focus-scroll:")===0){const d=c.slice(13);r.focusScroll=d=="true"}else l==0?r.swapStyle=c:logError("Unknown modifier in hx-swap: "+c)}}return r}function usesFormData(n){return getClosestAttributeValue(n,"hx-encoding")==="multipart/form-data"||matches(n,"form")&&getRawAttribute(n,"enctype")==="multipart/form-data"}function encodeParamsForBody(n,e,t){let r=null;return withExtensions(e,function(a){r==null&&(r=a.encodeParameters(n,t,e))}),r??(usesFormData(e)?overrideFormData(new FormData,formDataFromObject(t)):urlEncode(t))}function makeSettleInfo(n){return{tasks:[],elts:[n]}}function updateScrollState(n,e){const t=n[0],r=n[n.length-1];if(e.scroll){var a=null;e.scrollTarget&&(a=asElement(querySelectorExt(t,e.scrollTarget))),e.scroll==="top"&&(t||a)&&(a=a||t,a.scrollTop=0),e.scroll==="bottom"&&(r||a)&&(a=a||r,a.scrollTop=a.scrollHeight),typeof e.scroll=="number"&&getWindow().setTimeout(function(){window.scrollTo(0,e.scroll)},0)}if(e.show){var a=null;if(e.showTarget){let o=e.showTarget;e.showTarget==="window"&&(o="body"),a=asElement(querySelectorExt(t,o))}e.show==="top"&&(t||a)&&(a=a||t,a.scrollIntoView({block:"start",behavior:htmx.config.scrollBehavior})),e.show==="bottom"&&(r||a)&&(a=a||r,a.scrollIntoView({block:"end",behavior:htmx.config.scrollBehavior}))}}function getValuesForElement(n,e,t,r,a){if(r==null&&(r={}),n==null)return r;const s=getAttributeValue(n,e);if(s){let o=s.trim(),l=t;if(o==="unset")return null;o.indexOf("javascript:")===0?(o=o.slice(11),l=!0):o.indexOf("js:")===0&&(o=o.slice(3),l=!0),o.indexOf("{")!==0&&(o="{"+o+"}");let c;l?c=maybeEval(n,function(){return a?Function("event","return ("+o+")").call(n,a):Function("return ("+o+")").call(n)},{}):c=parseJSON(o);for(const d in c)c.hasOwnProperty(d)&&r[d]==null&&(r[d]=c[d])}return getValuesForElement(asElement(parentElt(n)),e,t,r,a)}function maybeEval(n,e,t){return htmx.config.allowEval?e():(triggerErrorEvent(n,"htmx:evalDisallowedError"),t)}function getHXVarsForElement(n,e,t){return getValuesForElement(n,"hx-vars",!0,t,e)}function getHXValsForElement(n,e,t){return getValuesForElement(n,"hx-vals",!1,t,e)}function getExpressionVars(n,e){return mergeObjects(getHXVarsForElement(n,e),getHXValsForElement(n,e))}function safelySetHeaderValue(n,e,t){if(t!==null)try{n.setRequestHeader(e,t)}catch{n.setRequestHeader(e,encodeURIComponent(t)),n.setRequestHeader(e+"-URI-AutoEncoded","true")}}function getPathFromResponse(n){if(n.responseURL)try{const e=new URL(n.responseURL);return e.pathname+e.search}catch{triggerErrorEvent(getDocument().body,"htmx:badResponseUrl",{url:n.responseURL})}}function hasHeader(n,e){return e.test(n.getAllResponseHeaders())}function ajaxHelper(n,e,t){if(n=n.toLowerCase(),t){if(t instanceof Element||typeof t=="string")return issueAjaxRequest(n,e,null,null,{targetOverride:resolveTarget(t)||DUMMY_ELT,returnPromise:!0});{let r=resolveTarget(t.target);return(t.target&&!r||t.source&&!r&&!resolveTarget(t.source))&&(r=DUMMY_ELT),issueAjaxRequest(n,e,resolveTarget(t.source),t.event,{handler:t.handler,headers:t.headers,values:t.values,targetOverride:r,swapOverride:t.swap,select:t.select,returnPromise:!0,push:t.push,replace:t.replace,selectOOB:t.selectOOB})}}else return issueAjaxRequest(n,e,null,null,{returnPromise:!0})}function hierarchyForElt(n){const e=[];for(;n;)e.push(n),n=n.parentElement;return e}function verifyPath(n,e,t){const r=new URL(e,location.protocol!=="about:"?location.href:window.origin),s=(location.protocol!=="about:"?location.origin:window.origin)===r.origin;return htmx.config.selfRequestsOnly&&!s?!1:triggerEvent(n,"htmx:validateUrl",mergeObjects({url:r,sameHost:s},t))}function formDataFromObject(n){if(n instanceof FormData)return n;const e=new FormData;for(const t in n)n.hasOwnProperty(t)&&(n[t]&&typeof n[t].forEach=="function"?n[t].forEach(function(r){e.append(t,r)}):typeof n[t]=="object"&&!(n[t]instanceof Blob)?e.append(t,JSON.stringify(n[t])):e.append(t,n[t]));return e}function formDataArrayProxy(n,e,t){return new Proxy(t,{get:function(r,a){return typeof a=="number"?r[a]:a==="length"?r.length:a==="push"?function(s){r.push(s),n.append(e,s)}:typeof r[a]=="function"?function(){r[a].apply(r,arguments),n.delete(e),r.forEach(function(s){n.append(e,s)})}:r[a]&&r[a].length===1?r[a][0]:r[a]},set:function(r,a,s){return r[a]=s,n.delete(e),r.forEach(function(o){n.append(e,o)}),!0}})}function formDataProxy(n){return new Proxy(n,{get:function(e,t){if(typeof t=="symbol"){const a=Reflect.get(e,t);return typeof a=="function"?function(){return a.apply(n,arguments)}:a}if(t==="toJSON")return()=>Object.fromEntries(n);if(t in e&&typeof e[t]=="function")return function(){return n[t].apply(n,arguments)};const r=n.getAll(t);if(r.length!==0)return r.length===1?r[0]:formDataArrayProxy(e,t,r)},set:function(e,t,r){return typeof t!="string"?!1:(e.delete(t),r&&typeof r.forEach=="function"?r.forEach(function(a){e.append(t,a)}):typeof r=="object"&&!(r instanceof Blob)?e.append(t,JSON.stringify(r)):e.append(t,r),!0)},deleteProperty:function(e,t){return typeof t=="string"&&e.delete(t),!0},ownKeys:function(e){return Reflect.ownKeys(Object.fromEntries(e))},getOwnPropertyDescriptor:function(e,t){return Reflect.getOwnPropertyDescriptor(Object.fromEntries(e),t)}})}function issueAjaxRequest(n,e,t,r,a,s){let o=null,l=null;if(a=a??{},a.returnPromise&&typeof Promise<"u")var c=new Promise(function(ge,Me){o=ge,l=Me});t==null&&(t=getDocument().body);const d=a.handler||handleAjaxResponse,f=a.select||null;if(!bodyContains(t))return maybeCall(o),c;const p=a.targetOverride||asElement(getTarget(t));if(p==null||p==DUMMY_ELT)return triggerErrorEvent(t,"htmx:targetError",{target:getClosestAttributeValue(t,"hx-target")}),maybeCall(l),c;let b=getInternalData(t);const v=b.lastButtonClicked;if(v){const ge=getRawAttribute(v,"formaction");ge!=null&&(e=ge);const Me=getRawAttribute(v,"formmethod");if(Me!=null)if(VERBS.includes(Me.toLowerCase()))n=Me;else return maybeCall(o),c}const x=getClosestAttributeValue(t,"hx-confirm");if(s===void 0&&triggerEvent(t,"htmx:confirm",{target:p,elt:t,path:e,verb:n,triggeringEvent:r,etc:a,issueRequest:function(Le){return issueAjaxRequest(n,e,t,r,a,!!Le)},question:x})===!1)return maybeCall(o),c;let _=t,E=getClosestAttributeValue(t,"hx-sync"),A=null,O=!1;if(E){const ge=E.split(":"),Me=ge[0].trim();if(Me==="this"?_=findThisElement(t,"hx-sync"):_=asElement(querySelectorExt(t,Me)),E=(ge[1]||"drop").trim(),b=getInternalData(_),E==="drop"&&b.xhr&&b.abortable!==!0)return maybeCall(o),c;if(E==="abort"){if(b.xhr)return maybeCall(o),c;O=!0}else E==="replace"?triggerEvent(_,"htmx:abort"):E.indexOf("queue")===0&&(A=(E.split(" ")[1]||"last").trim())}if(b.xhr)if(b.abortable)triggerEvent(_,"htmx:abort");else{if(A==null){if(r){const ge=getInternalData(r);ge&&ge.triggerSpec&&ge.triggerSpec.queue&&(A=ge.triggerSpec.queue)}A==null&&(A="last")}return b.queuedRequests==null&&(b.queuedRequests=[]),A==="first"&&b.queuedRequests.length===0?b.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)}):A==="all"?b.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)}):A==="last"&&(b.queuedRequests=[],b.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)})),maybeCall(o),c}const $=new XMLHttpRequest;b.xhr=$,b.abortable=O;const P=function(){b.xhr=null,b.abortable=!1,b.queuedRequests!=null&&b.queuedRequests.length>0&&b.queuedRequests.shift()()},L=getClosestAttributeValue(t,"hx-prompt");if(L){var B=prompt(L);if(B===null||!triggerEvent(t,"htmx:prompt",{prompt:B,target:p}))return maybeCall(o),P(),c}if(x&&!s&&!confirm(x))return maybeCall(o),P(),c;let g=getHeaders(t,p,B);n!=="get"&&!usesFormData(t)&&(g["Content-Type"]="application/x-www-form-urlencoded"),a.headers&&(g=mergeObjects(g,a.headers));const q=getInputValues(t,n);let Y=q.errors;const X=q.formData;a.values&&overrideFormData(X,formDataFromObject(a.values));const ee=formDataFromObject(getExpressionVars(t,r)),ue=overrideFormData(X,ee);let J=filterValues(ue,t);htmx.config.getCacheBusterParam&&n==="get"&&J.set("org.htmx.cache-buster",getRawAttribute(p,"id")||"true"),(e==null||e==="")&&(e=location.href);const pe=getValuesForElement(t,"hx-request"),se=getInternalData(t).boosted;let re=htmx.config.methodsThatUseUrlParams.indexOf(n)>=0;const oe={boosted:se,useUrlParams:re,formData:J,parameters:formDataProxy(J),unfilteredFormData:ue,unfilteredParameters:formDataProxy(ue),headers:g,elt:t,target:p,verb:n,errors:Y,withCredentials:a.credentials||pe.credentials||htmx.config.withCredentials,timeout:a.timeout||pe.timeout||htmx.config.timeout,path:e,triggeringEvent:r};if(!triggerEvent(t,"htmx:configRequest",oe))return maybeCall(o),P(),c;if(e=oe.path,n=oe.verb,g=oe.headers,J=formDataFromObject(oe.parameters),Y=oe.errors,re=oe.useUrlParams,Y&&Y.length>0)return triggerEvent(t,"htmx:validation:halted",oe),maybeCall(o),P(),c;const Oe=e.split("#"),Ee=Oe[0],Be=Oe[1];let $e=e;if(re&&($e=Ee,!J.keys().next().done&&($e.indexOf("?")<0?$e+="?":$e+="&",$e+=urlEncode(J),Be&&($e+="#"+Be))),!verifyPath(t,$e,oe))return triggerErrorEvent(t,"htmx:invalidPath",oe),maybeCall(l),P(),c;if($.open(n.toUpperCase(),$e,!0),$.overrideMimeType("text/html"),$.withCredentials=oe.withCredentials,$.timeout=oe.timeout,!pe.noHeaders){for(const ge in g)if(g.hasOwnProperty(ge)){const Me=g[ge];safelySetHeaderValue($,ge,Me)}}const Se={xhr:$,target:p,requestConfig:oe,etc:a,boosted:se,select:f,pathInfo:{requestPath:e,finalRequestPath:$e,responsePath:null,anchor:Be}};if($.onload=function(){try{const ge=hierarchyForElt(t);if(Se.pathInfo.responsePath=getPathFromResponse($),d(t,Se),Se.keepIndicators!==!0&&removeRequestIndicators(je,Re),triggerEvent(t,"htmx:afterRequest",Se),triggerEvent(t,"htmx:afterOnLoad",Se),!bodyContains(t)){let Me=null;for(;ge.length>0&&Me==null;){const Le=ge.shift();bodyContains(Le)&&(Me=Le)}Me&&(triggerEvent(Me,"htmx:afterRequest",Se),triggerEvent(Me,"htmx:afterOnLoad",Se))}maybeCall(o)}catch(ge){throw triggerErrorEvent(t,"htmx:onLoadError",mergeObjects({error:ge},Se)),ge}finally{P()}},$.onerror=function(){removeRequestIndicators(je,Re),triggerErrorEvent(t,"htmx:afterRequest",Se),triggerErrorEvent(t,"htmx:sendError",Se),maybeCall(l),P()},$.onabort=function(){removeRequestIndicators(je,Re),triggerErrorEvent(t,"htmx:afterRequest",Se),triggerErrorEvent(t,"htmx:sendAbort",Se),maybeCall(l),P()},$.ontimeout=function(){removeRequestIndicators(je,Re),triggerErrorEvent(t,"htmx:afterRequest",Se),triggerErrorEvent(t,"htmx:timeout",Se),maybeCall(l),P()},!triggerEvent(t,"htmx:beforeRequest",Se))return maybeCall(o),P(),c;var je=addRequestIndicatorClasses(t),Re=disableElements(t);forEach(["loadstart","loadend","progress","abort"],function(ge){forEach([$,$.upload],function(Me){Me.addEventListener(ge,function(Le){triggerEvent(t,"htmx:xhr:"+ge,{lengthComputable:Le.lengthComputable,loaded:Le.loaded,total:Le.total})})})}),triggerEvent(t,"htmx:beforeSend",Se);const Fe=re?null:encodeParamsForBody($,t,J);return $.send(Fe),c}function determineHistoryUpdates(n,e){const t=e.xhr;let r=null,a=null;if(hasHeader(t,/HX-Push:/i)?(r=t.getResponseHeader("HX-Push"),a="push"):hasHeader(t,/HX-Push-Url:/i)?(r=t.getResponseHeader("HX-Push-Url"),a="push"):hasHeader(t,/HX-Replace-Url:/i)&&(r=t.getResponseHeader("HX-Replace-Url"),a="replace"),r)return r==="false"?{}:{type:a,path:r};const s=e.pathInfo.finalRequestPath,o=e.pathInfo.responsePath;let l=e.etc.push||getClosestAttributeValue(n,"hx-push-url"),c=e.etc.replace||getClosestAttributeValue(n,"hx-replace-url");l==="false"&&(l=null),c==="false"&&(c=null);const d=getInternalData(n).boosted;let f=null,p=null;return l?(f="push",p=l):c?(f="replace",p=c):d&&(f="push",p=o||s),p?(p==="true"&&(p=o||s),e.pathInfo.anchor&&p.indexOf("#")===-1&&(p=p+"#"+e.pathInfo.anchor),{type:f,path:p}):{}}function codeMatches(n,e){var t=new RegExp(n.code);return t.test(e.toString(10))}function resolveResponseHandling(n){for(var e=0;e<htmx.config.responseHandling.length;e++){var t=htmx.config.responseHandling[e];if(codeMatches(t,n.status))return t}return{swap:!1}}function handleTitle(n){if(n){const e=find("title");e?e.textContent=n:window.document.title=n}}function resolveRetarget(n,e){if(e==="this")return n;const t=asElement(querySelectorExt(n,e));if(t==null)throw triggerErrorEvent(n,"htmx:targetError",{target:e}),new Error(`Invalid re-target ${e}`);return t}function handleAjaxResponse(n,e){const t=e.xhr;let r=e.target;const a=e.etc,s=e.select;if(!triggerEvent(n,"htmx:beforeOnLoad",e))return;if(hasHeader(t,/HX-Trigger:/i)&&handleTriggerHeader(t,"HX-Trigger",n),hasHeader(t,/HX-Location:/i)){let O=t.getResponseHeader("HX-Location");var o={};O.indexOf("{")===0&&(o=parseJSON(O),O=o.path,delete o.path),o.push=o.push??"true",ajaxHelper("get",O,o);return}const l=hasHeader(t,/HX-Refresh:/i)&&t.getResponseHeader("HX-Refresh")==="true";if(hasHeader(t,/HX-Redirect:/i)){e.keepIndicators=!0,htmx.location.href=t.getResponseHeader("HX-Redirect"),l&&htmx.location.reload();return}if(l){e.keepIndicators=!0,htmx.location.reload();return}const c=determineHistoryUpdates(n,e),d=resolveResponseHandling(t),f=d.swap;let p=!!d.error,b=htmx.config.ignoreTitle||d.ignoreTitle,v=d.select;d.target&&(e.target=resolveRetarget(n,d.target));var x=a.swapOverride;x==null&&d.swapOverride&&(x=d.swapOverride),hasHeader(t,/HX-Retarget:/i)&&(e.target=resolveRetarget(n,t.getResponseHeader("HX-Retarget"))),hasHeader(t,/HX-Reswap:/i)&&(x=t.getResponseHeader("HX-Reswap"));var _=t.response,E=mergeObjects({shouldSwap:f,serverResponse:_,isError:p,ignoreTitle:b,selectOverride:v,swapOverride:x},e);if(!(d.event&&!triggerEvent(r,d.event,E))&&triggerEvent(r,"htmx:beforeSwap",E)){if(r=E.target,_=E.serverResponse,p=E.isError,b=E.ignoreTitle,v=E.selectOverride,x=E.swapOverride,e.target=r,e.failed=p,e.successful=!p,E.shouldSwap){t.status===286&&cancelPolling(n),withExtensions(n,function(P){_=P.transformResponse(_,t,n)}),c.type&&saveCurrentPageToHistory();var A=getSwapSpecification(n,x);A.hasOwnProperty("ignoreTitle")||(A.ignoreTitle=b),addClassToElement(r,htmx.config.swappingClass),s&&(v=s),hasHeader(t,/HX-Reselect:/i)&&(v=t.getResponseHeader("HX-Reselect"));const O=a.selectOOB||getClosestAttributeValue(n,"hx-select-oob"),$=getClosestAttributeValue(n,"hx-select");swap(r,_,A,{select:v==="unset"?null:v||$,selectOOB:O,eventInfo:e,anchor:e.pathInfo.anchor,contextElement:n,afterSwapCallback:function(){if(hasHeader(t,/HX-Trigger-After-Swap:/i)){let P=n;bodyContains(n)||(P=getDocument().body),handleTriggerHeader(t,"HX-Trigger-After-Swap",P)}},afterSettleCallback:function(){if(hasHeader(t,/HX-Trigger-After-Settle:/i)){let P=n;bodyContains(n)||(P=getDocument().body),handleTriggerHeader(t,"HX-Trigger-After-Settle",P)}},beforeSwapCallback:function(){c.type&&(triggerEvent(getDocument().body,"htmx:beforeHistoryUpdate",mergeObjects({history:c},e)),c.type==="push"?(pushUrlIntoHistory(c.path),triggerEvent(getDocument().body,"htmx:pushedIntoHistory",{path:c.path})):(replaceUrlInHistory(c.path),triggerEvent(getDocument().body,"htmx:replacedInHistory",{path:c.path})))}})}p&&triggerErrorEvent(n,"htmx:responseError",mergeObjects({error:"Response Status Error Code "+t.status+" from "+e.pathInfo.requestPath},e))}}const extensions={};function extensionBase(){return{init:function(n){return null},getSelectors:function(){return null},onEvent:function(n,e){return!0},transformResponse:function(n,e,t){return n},isInlineSwap:function(n){return!1},handleSwap:function(n,e,t,r){return!1},encodeParameters:function(n,e,t){return null}}}function defineExtension(n,e){e.init&&e.init(internalAPI),extensions[n]=mergeObjects(extensionBase(),e)}function removeExtension(n){delete extensions[n]}function getExtensions(n,e,t){if(e==null&&(e=[]),n==null)return e;t==null&&(t=[]);const r=getAttributeValue(n,"hx-ext");return r&&forEach(r.split(","),function(a){if(a=a.replace(/ /g,""),a.slice(0,7)=="ignore:"){t.push(a.slice(7));return}if(t.indexOf(a)<0){const s=extensions[a];s&&e.indexOf(s)<0&&e.push(s)}}),getExtensions(asElement(parentElt(n)),e,t)}var isReady=!1;getDocument().addEventListener("DOMContentLoaded",function(){isReady=!0});function ready(n){isReady||getDocument().readyState==="complete"?n():getDocument().addEventListener("DOMContentLoaded",n)}function insertIndicatorStyles(){if(htmx.config.includeIndicatorStyles!==!1){const n=htmx.config.inlineStyleNonce?` nonce="${htmx.config.inlineStyleNonce}"`:"",e=htmx.config.indicatorClass,t=htmx.config.requestClass;getDocument().head.insertAdjacentHTML("beforeend",`<style${n}>.${e}{opacity:0;visibility: hidden} .${t} .${e}, .${t}.${e}{opacity:1;visibility: visible;transition: opacity 200ms ease-in}</style>`)}}function getMetaConfig(){const n=getDocument().querySelector('meta[name="htmx-config"]');return n?parseJSON(n.content):null}function mergeMetaConfig(){const n=getMetaConfig();n&&(htmx.config=mergeObjects(htmx.config,n))}return ready(function(){mergeMetaConfig(),insertIndicatorStyles();let n=getDocument().body;processNode(n);const e=getDocument().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");n.addEventListener("htmx:abort",function(r){const a=r.detail.elt||r.target,s=getInternalData(a);s&&s.xhr&&s.xhr.abort()});const t=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(r){r.state&&r.state.htmx?(restoreHistory(),forEach(e,function(a){triggerEvent(a,"htmx:restored",{document:getDocument(),triggerEvent})})):t&&t(r)},getWindow().setTimeout(function(){triggerEvent(n,"htmx:load",{}),n=null},0)}),htmx})();var HOOKS=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],defaults$7={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var e=new Date(n.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},english={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var e=n%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},pad=function(n,e){return e===void 0&&(e=2),("000"+n).slice(e*-1)},int=function(n){return n===!0?1:0};function debounce$2(n,e){var t;return function(){var r=this,a=arguments;clearTimeout(t),t=setTimeout(function(){return n.apply(r,a)},e)}}var arrayify=function(n){return n instanceof Array?n:[n]};function toggleClass(n,e,t){if(t===!0)return n.classList.add(e);n.classList.remove(e)}function createElement(n,e,t){var r=window.document.createElement(n);return e=e||"",t=t||"",r.className=e,t!==void 0&&(r.textContent=t),r}function clearNode(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function findParent(n,e){if(e(n))return n;if(n.parentNode)return findParent(n.parentNode,e)}function createNumberInput(n,e){var t=createElement("div","numInputWrapper"),r=createElement("input","numInput "+n),a=createElement("span","arrowUp"),s=createElement("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),e!==void 0)for(var o in e)r.setAttribute(o,e[o]);return t.appendChild(r),t.appendChild(a),t.appendChild(s),t}function getEventTarget(n){try{if(typeof n.composedPath=="function"){var e=n.composedPath();return e[0]}return n.target}catch{return n.target}}var doNothing=function(){},monthToStr=function(n,e,t){return t.months[e?"shorthand":"longhand"][n]},revFormat={D:doNothing,F:function(n,e,t){n.setMonth(t.months.longhand.indexOf(e))},G:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},H:function(n,e){n.setHours(parseFloat(e))},J:function(n,e){n.setDate(parseFloat(e))},K:function(n,e,t){n.setHours(n.getHours()%12+12*int(new RegExp(t.amPM[1],"i").test(e)))},M:function(n,e,t){n.setMonth(t.months.shorthand.indexOf(e))},S:function(n,e){n.setSeconds(parseFloat(e))},U:function(n,e){return new Date(parseFloat(e)*1e3)},W:function(n,e,t){var r=parseInt(e),a=new Date(n.getFullYear(),0,2+(r-1)*7,0,0,0,0);return a.setDate(a.getDate()-a.getDay()+t.firstDayOfWeek),a},Y:function(n,e){n.setFullYear(parseFloat(e))},Z:function(n,e){return new Date(e)},d:function(n,e){n.setDate(parseFloat(e))},h:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},i:function(n,e){n.setMinutes(parseFloat(e))},j:function(n,e){n.setDate(parseFloat(e))},l:doNothing,m:function(n,e){n.setMonth(parseFloat(e)-1)},n:function(n,e){n.setMonth(parseFloat(e)-1)},s:function(n,e){n.setSeconds(parseFloat(e))},u:function(n,e){return new Date(parseFloat(e))},w:doNothing,y:function(n,e){n.setFullYear(2e3+parseFloat(e))}},tokenRegex={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},formats={Z:function(n){return n.toISOString()},D:function(n,e,t){return e.weekdays.shorthand[formats.w(n,e,t)]},F:function(n,e,t){return monthToStr(formats.n(n,e,t)-1,!1,e)},G:function(n,e,t){return pad(formats.h(n,e,t))},H:function(n){return pad(n.getHours())},J:function(n,e){return e.ordinal!==void 0?n.getDate()+e.ordinal(n.getDate()):n.getDate()},K:function(n,e){return e.amPM[int(n.getHours()>11)]},M:function(n,e){return monthToStr(n.getMonth(),!0,e)},S:function(n){return pad(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,e,t){return t.getWeek(n)},Y:function(n){return pad(n.getFullYear(),4)},d:function(n){return pad(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return pad(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,e){return e.weekdays.longhand[n.getDay()]},m:function(n){return pad(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},createDateFormatter=function(n){var e=n.config,t=e===void 0?defaults$7:e,r=n.l10n,a=r===void 0?english:r,s=n.isMobile,o=s===void 0?!1:s;return function(l,c,d){var f=d||a;return t.formatDate!==void 0&&!o?t.formatDate(l,c,f):c.split("").map(function(p,b,v){return formats[p]&&v[b-1]!=="\\"?formats[p](l,f,t):p!=="\\"?p:""}).join("")}},createDateParser=function(n){var e=n.config,t=e===void 0?defaults$7:e,r=n.l10n,a=r===void 0?english:r;return function(s,o,l,c){if(!(s!==0&&!s)){var d=c||a,f,p=s;if(s instanceof Date)f=new Date(s.getTime());else if(typeof s!="string"&&s.toFixed!==void 0)f=new Date(s);else if(typeof s=="string"){var b=o||(t||defaults$7).dateFormat,v=String(s).trim();if(v==="today")f=new Date,l=!0;else if(t&&t.parseDate)f=t.parseDate(s,b);else if(/Z$/.test(v)||/GMT$/.test(v))f=new Date(s);else{for(var x=void 0,_=[],E=0,A=0,O="";E<b.length;E++){var $=b[E],P=$==="\\",L=b[E-1]==="\\"||P;if(tokenRegex[$]&&!L){O+=tokenRegex[$];var B=new RegExp(O).exec(s);B&&(x=!0)&&_[$!=="Y"?"push":"unshift"]({fn:revFormat[$],val:B[++A]})}else P||(O+=".")}f=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),_.forEach(function(g){var q=g.fn,Y=g.val;return f=q(f,Y,d)||f}),f=x?f:void 0}}if(!(f instanceof Date&&!isNaN(f.getTime()))){t.errorHandler(new Error("Invalid date provided: "+p));return}return l===!0&&f.setHours(0,0,0,0),f}}};function compareDates(n,e,t){return t===void 0&&(t=!0),t!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(e.getTime()).setHours(0,0,0,0):n.getTime()-e.getTime()}var isBetween=function(n,e,t){return n>Math.min(e,t)&&n<Math.max(e,t)},calculateSecondsSinceMidnight=function(n,e,t){return n*3600+e*60+t},parseSeconds=function(n){var e=Math.floor(n/3600),t=(n-e*3600)/60;return[e,t,n-e*3600-t*60]},duration={DAY:864e5};function getDefaultHours(n){var e=n.defaultHour,t=n.defaultMinute,r=n.defaultSeconds;if(n.minDate!==void 0){var a=n.minDate.getHours(),s=n.minDate.getMinutes(),o=n.minDate.getSeconds();e<a&&(e=a),e===a&&t<s&&(t=s),e===a&&t===s&&r<o&&(r=n.minDate.getSeconds())}if(n.maxDate!==void 0){var l=n.maxDate.getHours(),c=n.maxDate.getMinutes();e=Math.min(e,l),e===l&&(t=Math.min(c,t)),e===l&&t===c&&(r=n.maxDate.getSeconds())}return{hours:e,minutes:t,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var r=function(l){l&&Object.keys(l).forEach(function(c){return n[c]=l[c]})},a=0,s=e;a<s.length;a++){var o=s[a];r(o)}return n});var __assign=function(){return __assign=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},__assign.apply(this,arguments)},__spreadArrays=function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),a=0,e=0;e<t;e++)for(var s=arguments[e],o=0,l=s.length;o<l;o++,a++)r[a]=s[o];return r},DEBOUNCED_CHANGE_MS=300;function FlatpickrInstance(n,e){var t={config:__assign(__assign({},defaults$7),flatpickr.defaultConfig),l10n:english};t.parseDate=createDateParser({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=_,t._setHoursFromDate=b,t._positionCalendar=wt,t.changeMonth=$e,t.changeYear=Me,t.clear=Se,t.close=je,t.onMouseOver=et,t._createElement=createElement,t.createDay=B,t.destroy=Re,t.isEnabled=Le,t.jumpToDate=O,t.updateValue=Ye,t.open=jt,t.redraw=qe,t.set=Ve,t.setDate=Vt,t.toggle=yt;function r(){t.utils={getDaysInMonth:function(T,C){return T===void 0&&(T=t.currentMonth),C===void 0&&(C=t.currentYear),T===1&&(C%4===0&&C%100!==0||C%400===0)?29:t.l10n.daysInMonth[T]}}}function a(){t.element=t.input=n,t.isOpen=!1,xt(),Qe(),ln(),on(),r(),t.isMobile||L(),A(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&b(t.config.noCalendar?t.latestSelectedDateObj:void 0),Ye(!1)),l();var T=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&T&&wt(),Ne("onReady")}function s(){var T;return((T=t.calendarContainer)===null||T===void 0?void 0:T.getRootNode()).activeElement||document.activeElement}function o(T){return T.bind(t)}function l(){var T=t.config;T.weekNumbers===!1&&T.showMonths===1||T.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var C=(t.days.offsetWidth+1)*T.showMonths;t.daysContainer.style.width=C+"px",t.calendarContainer.style.width=C+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function c(T){if(t.selectedDates.length===0){var C=t.config.minDate===void 0||compareDates(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),R=getDefaultHours(t.config);C.setHours(R.hours,R.minutes,R.seconds,C.getMilliseconds()),t.selectedDates=[C],t.latestSelectedDateObj=C}T!==void 0&&T.type!=="blur"&&un(T);var z=t._input.value;p(),Ye(),t._input.value!==z&&t._debouncedChange()}function d(T,C){return T%12+12*int(C===t.l10n.amPM[1])}function f(T){switch(T%24){case 0:case 12:return 12;default:return T%12}}function p(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var T=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,C=(parseInt(t.minuteElement.value,10)||0)%60,R=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(T=d(T,t.amPM.textContent));var z=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&compareDates(t.latestSelectedDateObj,t.config.minDate,!0)===0,Q=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&compareDates(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var te=calculateSecondsSinceMidnight(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),_e=calculateSecondsSinceMidnight(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),ae=calculateSecondsSinceMidnight(T,C,R);if(ae>_e&&ae<te){var ye=parseSeconds(te);T=ye[0],C=ye[1],R=ye[2]}}else{if(Q){var le=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;T=Math.min(T,le.getHours()),T===le.getHours()&&(C=Math.min(C,le.getMinutes())),C===le.getMinutes()&&(R=Math.min(R,le.getSeconds()))}if(z){var fe=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;T=Math.max(T,fe.getHours()),T===fe.getHours()&&C<fe.getMinutes()&&(C=fe.getMinutes()),C===fe.getMinutes()&&(R=Math.max(R,fe.getSeconds()))}}v(T,C,R)}}function b(T){var C=T||t.latestSelectedDateObj;C&&C instanceof Date&&v(C.getHours(),C.getMinutes(),C.getSeconds())}function v(T,C,R){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(T%24,C,R||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=pad(t.config.time_24hr?T:(12+T)%12+12*int(T%12===0)),t.minuteElement.value=pad(C),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[int(T>=12)]),t.secondElement!==void 0&&(t.secondElement.value=pad(R)))}function x(T){var C=getEventTarget(T),R=parseInt(C.value)+(T.delta||0);(R/1e3>1||T.key==="Enter"&&!/[^\d]/.test(R.toString()))&&Me(R)}function _(T,C,R,z){if(C instanceof Array)return C.forEach(function(Q){return _(T,Q,R,z)});if(T instanceof Array)return T.forEach(function(Q){return _(Q,C,R,z)});T.addEventListener(C,R,z),t._handlers.push({remove:function(){return T.removeEventListener(C,R,z)}})}function E(){Ne("onChange")}function A(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(R){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+R+"]"),function(z){return _(z,"click",t[R])})}),t.isMobile){lt();return}var T=debounce$2(bt,50);if(t._debouncedChange=debounce$2(E,DEBOUNCED_CHANGE_MS),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&_(t.daysContainer,"mouseover",function(R){t.config.mode==="range"&&et(getEventTarget(R))}),_(t._input,"keydown",Et),t.calendarContainer!==void 0&&_(t.calendarContainer,"keydown",Et),!t.config.inline&&!t.config.static&&_(window,"resize",T),window.ontouchstart!==void 0?_(window.document,"touchstart",ge):_(window.document,"mousedown",ge),_(window.document,"focus",ge,{capture:!0}),t.config.clickOpens===!0&&(_(t._input,"focus",t.open),_(t._input,"click",t.open)),t.daysContainer!==void 0&&(_(t.monthNav,"click",It),_(t.monthNav,["keyup","increment"],x),_(t.daysContainer,"click",nt)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var C=function(R){return getEventTarget(R).select()};_(t.timeContainer,["increment"],c),_(t.timeContainer,"blur",c,{capture:!0}),_(t.timeContainer,"click",$),_([t.hourElement,t.minuteElement],["focus","click"],C),t.secondElement!==void 0&&_(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&_(t.amPM,"click",function(R){c(R)})}t.config.allowInput&&_(t._input,"blur",Xe)}function O(T,C){var R=T!==void 0?t.parseDate(T):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),z=t.currentYear,Q=t.currentMonth;try{R!==void 0&&(t.currentYear=R.getFullYear(),t.currentMonth=R.getMonth())}catch(te){te.message="Invalid date supplied: "+R,t.config.errorHandler(te)}C&&t.currentYear!==z&&(Ne("onYearChange"),J()),C&&(t.currentYear!==z||t.currentMonth!==Q)&&Ne("onMonthChange"),t.redraw()}function $(T){var C=getEventTarget(T);~C.className.indexOf("arrow")&&P(T,C.classList.contains("arrowUp")?1:-1)}function P(T,C,R){var z=T&&getEventTarget(T),Q=R||z&&z.parentNode&&z.parentNode.firstChild,te=Kt("increment");te.delta=C,Q&&Q.dispatchEvent(te)}function L(){var T=window.document.createDocumentFragment();if(t.calendarContainer=createElement("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(T.appendChild(re()),t.innerContainer=createElement("div","flatpickr-innerContainer"),t.config.weekNumbers){var C=Be(),R=C.weekWrapper,z=C.weekNumbers;t.innerContainer.appendChild(R),t.weekNumbers=z,t.weekWrapper=R}t.rContainer=createElement("div","flatpickr-rContainer"),t.rContainer.appendChild(Oe()),t.daysContainer||(t.daysContainer=createElement("div","flatpickr-days"),t.daysContainer.tabIndex=-1),ue(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),T.appendChild(t.innerContainer)}t.config.enableTime&&T.appendChild(oe()),toggleClass(t.calendarContainer,"rangeMode",t.config.mode==="range"),toggleClass(t.calendarContainer,"animate",t.config.animate===!0),toggleClass(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(T);var Q=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!Q&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var te=createElement("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(te,t.element),te.appendChild(t.element),t.altInput&&te.appendChild(t.altInput),te.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function B(T,C,R,z){var Q=Le(C,!0),te=createElement("span",T,C.getDate().toString());return te.dateObj=C,te.$i=z,te.setAttribute("aria-label",t.formatDate(C,t.config.ariaDateFormat)),T.indexOf("hidden")===-1&&compareDates(C,t.now)===0&&(t.todayDateElem=te,te.classList.add("today"),te.setAttribute("aria-current","date")),Q?(te.tabIndex=-1,St(C)&&(te.classList.add("selected"),t.selectedDateElem=te,t.config.mode==="range"&&(toggleClass(te,"startRange",t.selectedDates[0]&&compareDates(C,t.selectedDates[0],!0)===0),toggleClass(te,"endRange",t.selectedDates[1]&&compareDates(C,t.selectedDates[1],!0)===0),T==="nextMonthDay"&&te.classList.add("inRange")))):te.classList.add("flatpickr-disabled"),t.config.mode==="range"&&cn(C)&&!St(C)&&te.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&T!=="prevMonthDay"&&z%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(C)+"</span>"),Ne("onDayCreate",te),te}function g(T){T.focus(),t.config.mode==="range"&&et(T)}function q(T){for(var C=T>0?0:t.config.showMonths-1,R=T>0?t.config.showMonths:-1,z=C;z!=R;z+=T)for(var Q=t.daysContainer.children[z],te=T>0?0:Q.children.length-1,_e=T>0?Q.children.length:-1,ae=te;ae!=_e;ae+=T){var ye=Q.children[ae];if(ye.className.indexOf("hidden")===-1&&Le(ye.dateObj))return ye}}function Y(T,C){for(var R=T.className.indexOf("Month")===-1?T.dateObj.getMonth():t.currentMonth,z=C>0?t.config.showMonths:-1,Q=C>0?1:-1,te=R-t.currentMonth;te!=z;te+=Q)for(var _e=t.daysContainer.children[te],ae=R-t.currentMonth===te?T.$i+C:C<0?_e.children.length-1:0,ye=_e.children.length,le=ae;le>=0&&le<ye&&le!=(C>0?ye:-1);le+=Q){var fe=_e.children[le];if(fe.className.indexOf("hidden")===-1&&Le(fe.dateObj)&&Math.abs(T.$i-le)>=Math.abs(C))return g(fe)}t.changeMonth(Q),X(q(Q),0)}function X(T,C){var R=s(),z=st(R||document.body),Q=T!==void 0?T:z?R:t.selectedDateElem!==void 0&&st(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&st(t.todayDateElem)?t.todayDateElem:q(C>0?1:-1);Q===void 0?t._input.focus():z?Y(Q,C):g(Q)}function ee(T,C){for(var R=(new Date(T,C,1).getDay()-t.l10n.firstDayOfWeek+7)%7,z=t.utils.getDaysInMonth((C-1+12)%12,T),Q=t.utils.getDaysInMonth(C,T),te=window.document.createDocumentFragment(),_e=t.config.showMonths>1,ae=_e?"prevMonthDay hidden":"prevMonthDay",ye=_e?"nextMonthDay hidden":"nextMonthDay",le=z+1-R,fe=0;le<=z;le++,fe++)te.appendChild(B("flatpickr-day "+ae,new Date(T,C-1,le),le,fe));for(le=1;le<=Q;le++,fe++)te.appendChild(B("flatpickr-day",new Date(T,C,le),le,fe));for(var ke=Q+1;ke<=42-R&&(t.config.showMonths===1||fe%7!==0);ke++,fe++)te.appendChild(B("flatpickr-day "+ye,new Date(T,C+1,ke%Q),ke,fe));var it=createElement("div","dayContainer");return it.appendChild(te),it}function ue(){if(t.daysContainer!==void 0){clearNode(t.daysContainer),t.weekNumbers&&clearNode(t.weekNumbers);for(var T=document.createDocumentFragment(),C=0;C<t.config.showMonths;C++){var R=new Date(t.currentYear,t.currentMonth,1);R.setMonth(t.currentMonth+C),T.appendChild(ee(R.getFullYear(),R.getMonth()))}t.daysContainer.appendChild(T),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&et()}}function J(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var T=function(z){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&z<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&z>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var C=0;C<12;C++)if(T(C)){var R=createElement("option","flatpickr-monthDropdown-month");R.value=new Date(t.currentYear,C).getMonth().toString(),R.textContent=monthToStr(C,t.config.shorthandCurrentMonth,t.l10n),R.tabIndex=-1,t.currentMonth===C&&(R.selected=!0),t.monthsDropdownContainer.appendChild(R)}}}function pe(){var T=createElement("div","flatpickr-month"),C=window.document.createDocumentFragment(),R;t.config.showMonths>1||t.config.monthSelectorType==="static"?R=createElement("span","cur-month"):(t.monthsDropdownContainer=createElement("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),_(t.monthsDropdownContainer,"change",function(_e){var ae=getEventTarget(_e),ye=parseInt(ae.value,10);t.changeMonth(ye-t.currentMonth),Ne("onMonthChange")}),J(),R=t.monthsDropdownContainer);var z=createNumberInput("cur-year",{tabindex:"-1"}),Q=z.getElementsByTagName("input")[0];Q.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&Q.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(Q.setAttribute("max",t.config.maxDate.getFullYear().toString()),Q.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var te=createElement("div","flatpickr-current-month");return te.appendChild(R),te.appendChild(z),C.appendChild(te),T.appendChild(C),{container:T,yearElement:Q,monthElement:R}}function se(){clearNode(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var T=t.config.showMonths;T--;){var C=pe();t.yearElements.push(C.yearElement),t.monthElements.push(C.monthElement),t.monthNav.appendChild(C.container)}t.monthNav.appendChild(t.nextMonthNav)}function re(){return t.monthNav=createElement("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=createElement("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=createElement("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,se(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(T){t.__hidePrevMonthArrow!==T&&(toggleClass(t.prevMonthNav,"flatpickr-disabled",T),t.__hidePrevMonthArrow=T)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(T){t.__hideNextMonthArrow!==T&&(toggleClass(t.nextMonthNav,"flatpickr-disabled",T),t.__hideNextMonthArrow=T)}}),t.currentYearElement=t.yearElements[0],Lt(),t.monthNav}function oe(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var T=getDefaultHours(t.config);t.timeContainer=createElement("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var C=createElement("span","flatpickr-time-separator",":"),R=createNumberInput("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=R.getElementsByTagName("input")[0];var z=createNumberInput("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=z.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?T.hours:f(T.hours)),t.minuteElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():T.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(R),t.timeContainer.appendChild(C),t.timeContainer.appendChild(z),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var Q=createNumberInput("flatpickr-second");t.secondElement=Q.getElementsByTagName("input")[0],t.secondElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():T.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(Q)}return t.config.time_24hr||(t.amPM=createElement("span","flatpickr-am-pm",t.l10n.amPM[int((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function Oe(){t.weekdayContainer?clearNode(t.weekdayContainer):t.weekdayContainer=createElement("div","flatpickr-weekdays");for(var T=t.config.showMonths;T--;){var C=createElement("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(C)}return Ee(),t.weekdayContainer}function Ee(){if(t.weekdayContainer){var T=t.l10n.firstDayOfWeek,C=__spreadArrays(t.l10n.weekdays.shorthand);T>0&&T<C.length&&(C=__spreadArrays(C.splice(T,C.length),C.splice(0,T)));for(var R=t.config.showMonths;R--;)t.weekdayContainer.children[R].innerHTML=`
      <span class='flatpickr-weekday'>
        `+C.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function Be(){t.calendarContainer.classList.add("hasWeeks");var T=createElement("div","flatpickr-weekwrapper");T.appendChild(createElement("span","flatpickr-weekday",t.l10n.weekAbbreviation));var C=createElement("div","flatpickr-weeks");return T.appendChild(C),{weekWrapper:T,weekNumbers:C}}function $e(T,C){C===void 0&&(C=!0);var R=C?T:T-t.currentMonth;R<0&&t._hidePrevMonthArrow===!0||R>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=R,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,Ne("onYearChange"),J()),ue(),Ne("onMonthChange"),Lt())}function Se(T,C){if(T===void 0&&(T=!0),C===void 0&&(C=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,C===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var R=getDefaultHours(t.config),z=R.hours,Q=R.minutes,te=R.seconds;v(z,Q,te)}t.redraw(),T&&Ne("onChange")}function je(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),Ne("onClose")}function Re(){t.config!==void 0&&Ne("onDestroy");for(var T=t._handlers.length;T--;)t._handlers[T].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var C=t.calendarContainer.parentNode;if(C.lastChild&&C.removeChild(C.lastChild),C.parentNode){for(;C.firstChild;)C.parentNode.insertBefore(C.firstChild,C);C.parentNode.removeChild(C)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(R){try{delete t[R]}catch{}})}function Fe(T){return t.calendarContainer.contains(T)}function ge(T){if(t.isOpen&&!t.config.inline){var C=getEventTarget(T),R=Fe(C),z=C===t.input||C===t.altInput||t.element.contains(C)||T.path&&T.path.indexOf&&(~T.path.indexOf(t.input)||~T.path.indexOf(t.altInput)),Q=!z&&!R&&!Fe(T.relatedTarget),te=!t.config.ignoredFocusElements.some(function(_e){return _e.contains(C)});Q&&te&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&c(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function Me(T){if(!(!T||t.config.minDate&&T<t.config.minDate.getFullYear()||t.config.maxDate&&T>t.config.maxDate.getFullYear())){var C=T,R=t.currentYear!==C;t.currentYear=C||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),R&&(t.redraw(),Ne("onYearChange"),J())}}function Le(T,C){var R;C===void 0&&(C=!0);var z=t.parseDate(T,void 0,C);if(t.config.minDate&&z&&compareDates(z,t.config.minDate,C!==void 0?C:!t.minDateHasTime)<0||t.config.maxDate&&z&&compareDates(z,t.config.maxDate,C!==void 0?C:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(z===void 0)return!1;for(var Q=!!t.config.enable,te=(R=t.config.enable)!==null&&R!==void 0?R:t.config.disable,_e=0,ae=void 0;_e<te.length;_e++){if(ae=te[_e],typeof ae=="function"&&ae(z))return Q;if(ae instanceof Date&&z!==void 0&&ae.getTime()===z.getTime())return Q;if(typeof ae=="string"){var ye=t.parseDate(ae,void 0,!0);return ye&&ye.getTime()===z.getTime()?Q:!Q}else if(typeof ae=="object"&&z!==void 0&&ae.from&&ae.to&&z.getTime()>=ae.from.getTime()&&z.getTime()<=ae.to.getTime())return Q}return!Q}function st(T){return t.daysContainer!==void 0?T.className.indexOf("hidden")===-1&&T.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(T):!1}function Xe(T){var C=T.target===t._input,R=t._input.value.trimEnd()!==Gt();C&&R&&!(T.relatedTarget&&Fe(T.relatedTarget))&&t.setDate(t._input.value,!0,T.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function Et(T){var C=getEventTarget(T),R=t.config.wrap?n.contains(C):C===t._input,z=t.config.allowInput,Q=t.isOpen&&(!z||!R),te=t.config.inline&&R&&!z;if(T.keyCode===13&&R){if(z)return t.setDate(t._input.value,!0,C===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),C.blur();t.open()}else if(Fe(C)||Q||te){var _e=!!t.timeContainer&&t.timeContainer.contains(C);switch(T.keyCode){case 13:_e?(T.preventDefault(),c(),tt()):nt(T);break;case 27:T.preventDefault(),tt();break;case 8:case 46:R&&!t.config.allowInput&&(T.preventDefault(),t.clear());break;case 37:case 39:if(!_e&&!R){T.preventDefault();var ae=s();if(t.daysContainer!==void 0&&(z===!1||ae&&st(ae))){var ye=T.keyCode===39?1:-1;T.ctrlKey?(T.stopPropagation(),$e(ye),X(q(1),0)):X(void 0,ye)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:T.preventDefault();var le=T.keyCode===40?1:-1;t.daysContainer&&C.$i!==void 0||C===t.input||C===t.altInput?T.ctrlKey?(T.stopPropagation(),Me(t.currentYear-le),X(q(1),0)):_e||X(void 0,le*7):C===t.currentYearElement?Me(t.currentYear-le):t.config.enableTime&&(!_e&&t.hourElement&&t.hourElement.focus(),c(T),t._debouncedChange());break;case 9:if(_e){var fe=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(Ke){return Ke}),ke=fe.indexOf(C);if(ke!==-1){var it=fe[ke+(T.shiftKey?-1:1)];T.preventDefault(),(it||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(C)&&T.shiftKey&&(T.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&C===t.amPM)switch(T.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],p(),Ye();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],p(),Ye();break}(R||Fe(C))&&Ne("onKeyDown",T)}function et(T,C){if(C===void 0&&(C="flatpickr-day"),!(t.selectedDates.length!==1||T&&(!T.classList.contains(C)||T.classList.contains("flatpickr-disabled")))){for(var R=T?T.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),z=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),Q=Math.min(R,t.selectedDates[0].getTime()),te=Math.max(R,t.selectedDates[0].getTime()),_e=!1,ae=0,ye=0,le=Q;le<te;le+=duration.DAY)Le(new Date(le),!0)||(_e=_e||le>Q&&le<te,le<z&&(!ae||le>ae)?ae=le:le>z&&(!ye||le<ye)&&(ye=le));var fe=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+C));fe.forEach(function(ke){var it=ke.dateObj,Ke=it.getTime(),Tt=ae>0&&Ke<ae||ye>0&&Ke>ye;if(Tt){ke.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Ct){ke.classList.remove(Ct)});return}else if(_e&&!Tt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Ct){ke.classList.remove(Ct)}),T!==void 0&&(T.classList.add(R<=t.selectedDates[0].getTime()?"startRange":"endRange"),z<R&&Ke===z?ke.classList.add("startRange"):z>R&&Ke===z&&ke.classList.add("endRange"),Ke>=ae&&(ye===0||Ke<=ye)&&isBetween(Ke,z,R)&&ke.classList.add("inRange"))})}}function bt(){t.isOpen&&!t.config.static&&!t.config.inline&&wt()}function jt(T,C){if(C===void 0&&(C=t._positionElement),t.isMobile===!0){if(T){T.preventDefault();var R=getEventTarget(T);R&&R.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),Ne("onOpen");return}else if(t._input.disabled||t.config.inline)return;var z=t.isOpen;t.isOpen=!0,z||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),Ne("onOpen"),wt(C)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(T===void 0||!t.timeContainer.contains(T.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function Bt(T){return function(C){var R=t.config["_"+T+"Date"]=t.parseDate(C,t.config.dateFormat),z=t.config["_"+(T==="min"?"max":"min")+"Date"];R!==void 0&&(t[T==="min"?"minDateHasTime":"maxDateHasTime"]=R.getHours()>0||R.getMinutes()>0||R.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(Q){return Le(Q)}),!t.selectedDates.length&&T==="min"&&b(R),Ye()),t.daysContainer&&(qe(),R!==void 0?t.currentYearElement[T]=R.getFullYear().toString():t.currentYearElement.removeAttribute(T),t.currentYearElement.disabled=!!z&&R!==void 0&&z.getFullYear()===R.getFullYear())}}function xt(){var T=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],C=__assign(__assign({},JSON.parse(JSON.stringify(n.dataset||{}))),e),R={};t.config.parseDate=C.parseDate,t.config.formatDate=C.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(fe){t.config._enable=sn(fe)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(fe){t.config._disable=sn(fe)}});var z=C.mode==="time";if(!C.dateFormat&&(C.enableTime||z)){var Q=flatpickr.defaultConfig.dateFormat||defaults$7.dateFormat;R.dateFormat=C.noCalendar||z?"H:i"+(C.enableSeconds?":S":""):Q+" H:i"+(C.enableSeconds?":S":"")}if(C.altInput&&(C.enableTime||z)&&!C.altFormat){var te=flatpickr.defaultConfig.altFormat||defaults$7.altFormat;R.altFormat=C.noCalendar||z?"h:i"+(C.enableSeconds?":S K":" K"):te+(" h:i"+(C.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:Bt("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:Bt("max")});var _e=function(fe){return function(ke){t.config[fe==="min"?"_minTime":"_maxTime"]=t.parseDate(ke,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:_e("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:_e("max")}),C.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,R,C);for(var ae=0;ae<T.length;ae++)t.config[T[ae]]=t.config[T[ae]]===!0||t.config[T[ae]]==="true";HOOKS.filter(function(fe){return t.config[fe]!==void 0}).forEach(function(fe){t.config[fe]=arrayify(t.config[fe]||[]).map(o)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var ae=0;ae<t.config.plugins.length;ae++){var ye=t.config.plugins[ae](t)||{};for(var le in ye)HOOKS.indexOf(le)>-1?t.config[le]=arrayify(ye[le]).map(o).concat(t.config[le]):typeof C[le]>"u"&&(t.config[le]=ye[le])}C.altInputClass||(t.config.altInputClass=dt().className+" "+t.config.altInputClass),Ne("onParseConfig")}function dt(){return t.config.wrap?n.querySelector("[data-input]"):n}function Qe(){typeof t.config.locale!="object"&&typeof flatpickr.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=__assign(__assign({},flatpickr.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?flatpickr.l10ns[t.config.locale]:void 0),tokenRegex.D="("+t.l10n.weekdays.shorthand.join("|")+")",tokenRegex.l="("+t.l10n.weekdays.longhand.join("|")+")",tokenRegex.M="("+t.l10n.months.shorthand.join("|")+")",tokenRegex.F="("+t.l10n.months.longhand.join("|")+")",tokenRegex.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var T=__assign(__assign({},e),JSON.parse(JSON.stringify(n.dataset||{})));T.time_24hr===void 0&&flatpickr.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=createDateFormatter(t),t.parseDate=createDateParser({config:t.config,l10n:t.l10n})}function wt(T){if(typeof t.config.position=="function")return void t.config.position(t,T);if(t.calendarContainer!==void 0){Ne("onPreCalendarPosition");var C=T||t._positionElement,R=Array.prototype.reduce.call(t.calendarContainer.children,(function(fn,En){return fn+En.offsetHeight}),0),z=t.calendarContainer.offsetWidth,Q=t.config.position.split(" "),te=Q[0],_e=Q.length>1?Q[1]:null,ae=C.getBoundingClientRect(),ye=window.innerHeight-ae.bottom,le=te==="above"||te!=="below"&&ye<R&&ae.top>R,fe=window.pageYOffset+ae.top+(le?-R-2:C.offsetHeight+2);if(toggleClass(t.calendarContainer,"arrowTop",!le),toggleClass(t.calendarContainer,"arrowBottom",le),!t.config.inline){var ke=window.pageXOffset+ae.left,it=!1,Ke=!1;_e==="center"?(ke-=(z-ae.width)/2,it=!0):_e==="right"&&(ke-=z-ae.width,Ke=!0),toggleClass(t.calendarContainer,"arrowLeft",!it&&!Ke),toggleClass(t.calendarContainer,"arrowCenter",it),toggleClass(t.calendarContainer,"arrowRight",Ke);var Tt=window.document.body.offsetWidth-(window.pageXOffset+ae.right),Ct=ke+z>window.document.body.offsetWidth,vn=Tt+z>window.document.body.offsetWidth;if(toggleClass(t.calendarContainer,"rightMost",Ct),!t.config.static)if(t.calendarContainer.style.top=fe+"px",!Ct)t.calendarContainer.style.left=ke+"px",t.calendarContainer.style.right="auto";else if(!vn)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=Tt+"px";else{var Wt=ot();if(Wt===void 0)return;var _n=window.document.body.offsetWidth,Ot=Math.max(0,_n/2-z/2),dn=".flatpickr-calendar.centerMost:before",Xt=".flatpickr-calendar.centerMost:after",Qt=Wt.cssRules.length,zt="{left:"+ae.left+"px;right:auto;}";toggleClass(t.calendarContainer,"rightMost",!1),toggleClass(t.calendarContainer,"centerMost",!0),Wt.insertRule(dn+","+Xt+zt,Qt),t.calendarContainer.style.left=Ot+"px",t.calendarContainer.style.right="auto"}}}}function ot(){for(var T=null,C=0;C<document.styleSheets.length;C++){var R=document.styleSheets[C];if(R.cssRules){try{R.cssRules}catch{continue}T=R;break}}return T??Dt()}function Dt(){var T=document.createElement("style");return document.head.appendChild(T),T.sheet}function qe(){t.config.noCalendar||t.isMobile||(J(),Lt(),ue())}function tt(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function nt(T){T.preventDefault(),T.stopPropagation();var C=function(fe){return fe.classList&&fe.classList.contains("flatpickr-day")&&!fe.classList.contains("flatpickr-disabled")&&!fe.classList.contains("notAllowed")},R=findParent(getEventTarget(T),C);if(R!==void 0){var z=R,Q=t.latestSelectedDateObj=new Date(z.dateObj.getTime()),te=(Q.getMonth()<t.currentMonth||Q.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=z,t.config.mode==="single")t.selectedDates=[Q];else if(t.config.mode==="multiple"){var _e=St(Q);_e?t.selectedDates.splice(parseInt(_e),1):t.selectedDates.push(Q)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=Q,t.selectedDates.push(Q),compareDates(Q,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(fe,ke){return fe.getTime()-ke.getTime()}));if(p(),te){var ae=t.currentYear!==Q.getFullYear();t.currentYear=Q.getFullYear(),t.currentMonth=Q.getMonth(),ae&&(Ne("onYearChange"),J()),Ne("onMonthChange")}if(Lt(),ue(),Ye(),!te&&t.config.mode!=="range"&&t.config.showMonths===1?g(z):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var ye=t.config.mode==="single"&&!t.config.enableTime,le=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(ye||le)&&tt()}E()}}var ce={locale:[Qe,Ee],showMonths:[se,l,Oe],minDate:[O],maxDate:[O],positionElement:[At],clickOpens:[function(){t.config.clickOpens===!0?(_(t._input,"focus",t.open),_(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function Ve(T,C){if(T!==null&&typeof T=="object"){Object.assign(t.config,T);for(var R in T)ce[R]!==void 0&&ce[R].forEach(function(z){return z()})}else t.config[T]=C,ce[T]!==void 0?ce[T].forEach(function(z){return z()}):HOOKS.indexOf(T)>-1&&(t.config[T]=arrayify(C));t.redraw(),Ye(!0)}function Pt(T,C){var R=[];if(T instanceof Array)R=T.map(function(z){return t.parseDate(z,C)});else if(T instanceof Date||typeof T=="number")R=[t.parseDate(T,C)];else if(typeof T=="string")switch(t.config.mode){case"single":case"time":R=[t.parseDate(T,C)];break;case"multiple":R=T.split(t.config.conjunction).map(function(z){return t.parseDate(z,C)});break;case"range":R=T.split(t.l10n.rangeSeparator).map(function(z){return t.parseDate(z,C)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(T)));t.selectedDates=t.config.allowInvalidPreload?R:R.filter(function(z){return z instanceof Date&&Le(z,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(z,Q){return z.getTime()-Q.getTime()})}function Vt(T,C,R){if(C===void 0&&(C=!1),R===void 0&&(R=t.config.dateFormat),T!==0&&!T||T instanceof Array&&T.length===0)return t.clear(C);Pt(T,R),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),O(void 0,C),b(),t.selectedDates.length===0&&t.clear(!1),Ye(C),C&&Ne("onChange")}function sn(T){return T.slice().map(function(C){return typeof C=="string"||typeof C=="number"||C instanceof Date?t.parseDate(C,void 0,!0):C&&typeof C=="object"&&C.from&&C.to?{from:t.parseDate(C.from,void 0),to:t.parseDate(C.to,void 0)}:C}).filter(function(C){return C})}function on(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var T=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);T&&Pt(T,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function ln(){if(t.input=dt(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=createElement(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),At()}function At(){t._positionElement=t.config.positionElement||t._input}function lt(){var T=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=createElement("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=T,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=T==="datetime-local"?"Y-m-d\\TH:i:S":T==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}_(t.mobileInput,"change",function(C){t.setDate(getEventTarget(C).value,!1,t.mobileFormatStr),Ne("onChange"),Ne("onClose")})}function yt(T){if(t.isOpen===!0)return t.close();t.open(T)}function Ne(T,C){if(t.config!==void 0){var R=t.config[T];if(R!==void 0&&R.length>0)for(var z=0;R[z]&&z<R.length;z++)R[z](t.selectedDates,t.input.value,t,C);T==="onChange"&&(t.input.dispatchEvent(Kt("change")),t.input.dispatchEvent(Kt("input")))}}function Kt(T){var C=document.createEvent("Event");return C.initEvent(T,!0,!0),C}function St(T){for(var C=0;C<t.selectedDates.length;C++){var R=t.selectedDates[C];if(R instanceof Date&&compareDates(R,T)===0)return""+C}return!1}function cn(T){return t.config.mode!=="range"||t.selectedDates.length<2?!1:compareDates(T,t.selectedDates[0])>=0&&compareDates(T,t.selectedDates[1])<=0}function Lt(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(T,C){var R=new Date(t.currentYear,t.currentMonth,1);R.setMonth(t.currentMonth+C),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[C].textContent=monthToStr(R.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=R.getMonth().toString(),T.value=R.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function Gt(T){var C=T||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(R){return t.formatDate(R,C)}).filter(function(R,z,Q){return t.config.mode!=="range"||t.config.enableTime||Q.indexOf(R)===z}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function Ye(T){T===void 0&&(T=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=Gt(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=Gt(t.config.altFormat)),T!==!1&&Ne("onValueUpdate")}function It(T){var C=getEventTarget(T),R=t.prevMonthNav.contains(C),z=t.nextMonthNav.contains(C);R||z?$e(R?-1:1):t.yearElements.indexOf(C)>=0?C.select():C.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):C.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function un(T){T.preventDefault();var C=T.type==="keydown",R=getEventTarget(T),z=R;t.amPM!==void 0&&R===t.amPM&&(t.amPM.textContent=t.l10n.amPM[int(t.amPM.textContent===t.l10n.amPM[0])]);var Q=parseFloat(z.getAttribute("min")),te=parseFloat(z.getAttribute("max")),_e=parseFloat(z.getAttribute("step")),ae=parseInt(z.value,10),ye=T.delta||(C?T.which===38?1:-1:0),le=ae+_e*ye;if(typeof z.value<"u"&&z.value.length===2){var fe=z===t.hourElement,ke=z===t.minuteElement;le<Q?(le=te+le+int(!fe)+(int(fe)&&int(!t.amPM)),ke&&P(void 0,-1,t.hourElement)):le>te&&(le=z===t.hourElement?le-te-int(!t.amPM):Q,ke&&P(void 0,1,t.hourElement)),t.amPM&&fe&&(_e===1?le+ae===23:Math.abs(le-ae)>_e)&&(t.amPM.textContent=t.l10n.amPM[int(t.amPM.textContent===t.l10n.amPM[0])]),z.value=pad(le)}}return a(),t}function _flatpickr(n,e){for(var t=Array.prototype.slice.call(n).filter(function(o){return o instanceof HTMLElement}),r=[],a=0;a<t.length;a++){var s=t[a];try{if(s.getAttribute("data-fp-omit")!==null)continue;s._flatpickr!==void 0&&(s._flatpickr.destroy(),s._flatpickr=void 0),s._flatpickr=FlatpickrInstance(s,e||{}),r.push(s._flatpickr)}catch(o){console.error(o)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return _flatpickr(this,n)},HTMLElement.prototype.flatpickr=function(n){return _flatpickr([this],n)});var flatpickr=function(n,e){return typeof n=="string"?_flatpickr(window.document.querySelectorAll(n),e):n instanceof Node?_flatpickr([n],e):_flatpickr(n,e)};flatpickr.defaultConfig={};flatpickr.l10ns={en:__assign({},english),default:__assign({},english)};flatpickr.localize=function(n){flatpickr.l10ns.default=__assign(__assign({},flatpickr.l10ns.default),n)};flatpickr.setDefaults=function(n){flatpickr.defaultConfig=__assign(__assign({},flatpickr.defaultConfig),n)};flatpickr.parseDate=createDateParser({});flatpickr.formatDate=createDateFormatter({});flatpickr.compareDates=compareDates;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return _flatpickr(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=flatpickr);function initDateSelector(){flatpickr(".datepicker",{allowInput:!0})}function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jquery$2={exports:{}};var jquery$1=jquery$2.exports,hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:jquery$1,function(e,t){var r=[],a=Object.getPrototypeOf,s=r.slice,o=r.flat?function(u){return r.flat.call(u)}:function(u){return r.concat.apply([],u)},l=r.push,c=r.indexOf,d={},f=d.toString,p=d.hasOwnProperty,b=p.toString,v=b.call(Object),x={},_=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},E=function(h){return h!=null&&h===h.window},A=e.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function $(u,h,m){m=m||A;var y,w,D=m.createElement("script");if(D.text=u,h)for(y in O)w=h[y]||h.getAttribute&&h.getAttribute(y),w&&D.setAttribute(y,w);m.head.appendChild(D).parentNode.removeChild(D)}function P(u){return u==null?u+"":typeof u=="object"||typeof u=="function"?d[f.call(u)]||"object":typeof u}var L="3.7.1",B=/HTML$/i,g=function(u,h){return new g.fn.init(u,h)};g.fn=g.prototype={jquery:L,constructor:g,length:0,toArray:function(){return s.call(this)},get:function(u){return u==null?s.call(this):u<0?this[u+this.length]:this[u]},pushStack:function(u){var h=g.merge(this.constructor(),u);return h.prevObject=this,h},each:function(u){return g.each(this,u)},map:function(u){return this.pushStack(g.map(this,function(h,m){return u.call(h,m,h)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(g.grep(this,function(u,h){return(h+1)%2}))},odd:function(){return this.pushStack(g.grep(this,function(u,h){return h%2}))},eq:function(u){var h=this.length,m=+u+(u<0?h:0);return this.pushStack(m>=0&&m<h?[this[m]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:r.sort,splice:r.splice},g.extend=g.fn.extend=function(){var u,h,m,y,w,D,S=arguments[0]||{},k=1,N=arguments.length,F=!1;for(typeof S=="boolean"&&(F=S,S=arguments[k]||{},k++),typeof S!="object"&&!_(S)&&(S={}),k===N&&(S=this,k--);k<N;k++)if((u=arguments[k])!=null)for(h in u)y=u[h],!(h==="__proto__"||S===y)&&(F&&y&&(g.isPlainObject(y)||(w=Array.isArray(y)))?(m=S[h],w&&!Array.isArray(m)?D=[]:!w&&!g.isPlainObject(m)?D={}:D=m,w=!1,S[h]=g.extend(F,D,y)):y!==void 0&&(S[h]=y));return S},g.extend({expando:"jQuery"+(L+Math.random()).replace(/\D/g,""),isReady:!0,error:function(u){throw new Error(u)},noop:function(){},isPlainObject:function(u){var h,m;return!u||f.call(u)!=="[object Object]"?!1:(h=a(u),h?(m=p.call(h,"constructor")&&h.constructor,typeof m=="function"&&b.call(m)===v):!0)},isEmptyObject:function(u){var h;for(h in u)return!1;return!0},globalEval:function(u,h,m){$(u,{nonce:h&&h.nonce},m)},each:function(u,h){var m,y=0;if(q(u))for(m=u.length;y<m&&h.call(u[y],y,u[y])!==!1;y++);else for(y in u)if(h.call(u[y],y,u[y])===!1)break;return u},text:function(u){var h,m="",y=0,w=u.nodeType;if(!w)for(;h=u[y++];)m+=g.text(h);return w===1||w===11?u.textContent:w===9?u.documentElement.textContent:w===3||w===4?u.nodeValue:m},makeArray:function(u,h){var m=h||[];return u!=null&&(q(Object(u))?g.merge(m,typeof u=="string"?[u]:u):l.call(m,u)),m},inArray:function(u,h,m){return h==null?-1:c.call(h,u,m)},isXMLDoc:function(u){var h=u&&u.namespaceURI,m=u&&(u.ownerDocument||u).documentElement;return!B.test(h||m&&m.nodeName||"HTML")},merge:function(u,h){for(var m=+h.length,y=0,w=u.length;y<m;y++)u[w++]=h[y];return u.length=w,u},grep:function(u,h,m){for(var y,w=[],D=0,S=u.length,k=!m;D<S;D++)y=!h(u[D],D),y!==k&&w.push(u[D]);return w},map:function(u,h,m){var y,w,D=0,S=[];if(q(u))for(y=u.length;D<y;D++)w=h(u[D],D,m),w!=null&&S.push(w);else for(D in u)w=h(u[D],D,m),w!=null&&S.push(w);return o(S)},guid:1,support:x}),typeof Symbol=="function"&&(g.fn[Symbol.iterator]=r[Symbol.iterator]),g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(u,h){d["[object "+h+"]"]=h.toLowerCase()});function q(u){var h=!!u&&"length"in u&&u.length,m=P(u);return _(u)||E(u)?!1:m==="array"||h===0||typeof h=="number"&&h>0&&h-1 in u}function Y(u,h){return u.nodeName&&u.nodeName.toLowerCase()===h.toLowerCase()}var X=r.pop,ee=r.sort,ue=r.splice,J="[\\x20\\t\\r\\n\\f]",pe=new RegExp("^"+J+"+|((?:^|[^\\\\])(?:\\\\.)*)"+J+"+$","g");g.contains=function(u,h){var m=h&&h.parentNode;return u===m||!!(m&&m.nodeType===1&&(u.contains?u.contains(m):u.compareDocumentPosition&&u.compareDocumentPosition(m)&16))};var se=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function re(u,h){return h?u==="\0"?"�":u.slice(0,-1)+"\\"+u.charCodeAt(u.length-1).toString(16)+" ":"\\"+u}g.escapeSelector=function(u){return(u+"").replace(se,re)};var oe=A,Oe=l;(function(){var u,h,m,y,w,D=Oe,S,k,N,F,W,K=g.expando,j=0,G=0,be=gn(),Te=gn(),xe=gn(),ze=gn(),We=function(M,I){return M===I&&(w=!0),0},ft="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ht="(?:\\\\[\\da-fA-F]{1,6}"+J+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ae="\\["+J+"*("+ht+")(?:"+J+"*([*^$|!~]?=)"+J+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ht+"))|)"+J+"*\\]",Ft=":("+ht+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ae+")*)|.*)\\)|)",Ce=new RegExp(J+"+","g"),He=new RegExp("^"+J+"*,"+J+"*"),nn=new RegExp("^"+J+"*([>+~]|"+J+")"+J+"*"),kn=new RegExp(J+"|>"),pt=new RegExp(Ft),rn=new RegExp("^"+ht+"$"),gt={ID:new RegExp("^#("+ht+")"),CLASS:new RegExp("^\\.("+ht+")"),TAG:new RegExp("^("+ht+"|[*])"),ATTR:new RegExp("^"+Ae),PSEUDO:new RegExp("^"+Ft),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+J+"*(even|odd|(([+-]|)(\\d*)n|)"+J+"*(?:([+-]|)"+J+"*(\\d+)|))"+J+"*\\)|)","i"),bool:new RegExp("^(?:"+ft+")$","i"),needsContext:new RegExp("^"+J+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+J+"*((?:-\\d)?\\d*)"+J+"*\\)|)(?=[^-]|$)","i")},Mt=/^(?:input|select|textarea|button)$/i,Nt=/^h\d$/i,rt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Pn=/[+~]/,vt=new RegExp("\\\\[\\da-fA-F]{1,6}"+J+"?|\\\\([^\\r\\n\\f])","g"),_t=function(M,I){var H="0x"+M.slice(1)-65536;return I||(H<0?String.fromCharCode(H+65536):String.fromCharCode(H>>10|55296,H&1023|56320))},Li=function(){kt()},Ii=bn(function(M){return M.disabled===!0&&Y(M,"fieldset")},{dir:"parentNode",next:"legend"});function $i(){try{return S.activeElement}catch{}}try{D.apply(r=s.call(oe.childNodes),oe.childNodes),r[oe.childNodes.length].nodeType}catch{D={apply:function(I,H){Oe.apply(I,s.call(H))},call:function(I){Oe.apply(I,s.call(arguments,1))}}}function Pe(M,I,H,V){var U,Z,ne,de,ie,we,me,ve=I&&I.ownerDocument,De=I?I.nodeType:9;if(H=H||[],typeof M!="string"||!M||De!==1&&De!==9&&De!==11)return H;if(!V&&(kt(I),I=I||S,N)){if(De!==11&&(ie=rt.exec(M)))if(U=ie[1]){if(De===9)if(ne=I.getElementById(U)){if(ne.id===U)return D.call(H,ne),H}else return H;else if(ve&&(ne=ve.getElementById(U))&&Pe.contains(I,ne)&&ne.id===U)return D.call(H,ne),H}else{if(ie[2])return D.apply(H,I.getElementsByTagName(M)),H;if((U=ie[3])&&I.getElementsByClassName)return D.apply(H,I.getElementsByClassName(U)),H}if(!ze[M+" "]&&(!F||!F.test(M))){if(me=M,ve=I,De===1&&(kn.test(M)||nn.test(M))){for(ve=Pn.test(M)&&Ln(I.parentNode)||I,(ve!=I||!x.scope)&&((de=I.getAttribute("id"))?de=g.escapeSelector(de):I.setAttribute("id",de=K)),we=an(M),Z=we.length;Z--;)we[Z]=(de?"#"+de:":scope")+" "+mn(we[Z]);me=we.join(",")}try{return D.apply(H,ve.querySelectorAll(me)),H}catch{ze(M,!0)}finally{de===K&&I.removeAttribute("id")}}}return si(M.replace(pe,"$1"),I,H,V)}function gn(){var M=[];function I(H,V){return M.push(H+" ")>h.cacheLength&&delete I[M.shift()],I[H+" "]=V}return I}function ut(M){return M[K]=!0,M}function Yt(M){var I=S.createElement("fieldset");try{return!!M(I)}catch{return!1}finally{I.parentNode&&I.parentNode.removeChild(I),I=null}}function Ri(M){return function(I){return Y(I,"input")&&I.type===M}}function Fi(M){return function(I){return(Y(I,"input")||Y(I,"button"))&&I.type===M}}function ri(M){return function(I){return"form"in I?I.parentNode&&I.disabled===!1?"label"in I?"label"in I.parentNode?I.parentNode.disabled===M:I.disabled===M:I.isDisabled===M||I.isDisabled!==!M&&Ii(I)===M:I.disabled===M:"label"in I?I.disabled===M:!1}}function Ht(M){return ut(function(I){return I=+I,ut(function(H,V){for(var U,Z=M([],H.length,I),ne=Z.length;ne--;)H[U=Z[ne]]&&(H[U]=!(V[U]=H[U]))})})}function Ln(M){return M&&typeof M.getElementsByTagName<"u"&&M}function kt(M){var I,H=M?M.ownerDocument||M:oe;return H==S||H.nodeType!==9||!H.documentElement||(S=H,k=S.documentElement,N=!g.isXMLDoc(S),W=k.matches||k.webkitMatchesSelector||k.msMatchesSelector,k.msMatchesSelector&&oe!=S&&(I=S.defaultView)&&I.top!==I&&I.addEventListener("unload",Li),x.getById=Yt(function(V){return k.appendChild(V).id=g.expando,!S.getElementsByName||!S.getElementsByName(g.expando).length}),x.disconnectedMatch=Yt(function(V){return W.call(V,"*")}),x.scope=Yt(function(){return S.querySelectorAll(":scope")}),x.cssHas=Yt(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),x.getById?(h.filter.ID=function(V){var U=V.replace(vt,_t);return function(Z){return Z.getAttribute("id")===U}},h.find.ID=function(V,U){if(typeof U.getElementById<"u"&&N){var Z=U.getElementById(V);return Z?[Z]:[]}}):(h.filter.ID=function(V){var U=V.replace(vt,_t);return function(Z){var ne=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return ne&&ne.value===U}},h.find.ID=function(V,U){if(typeof U.getElementById<"u"&&N){var Z,ne,de,ie=U.getElementById(V);if(ie){if(Z=ie.getAttributeNode("id"),Z&&Z.value===V)return[ie];for(de=U.getElementsByName(V),ne=0;ie=de[ne++];)if(Z=ie.getAttributeNode("id"),Z&&Z.value===V)return[ie]}return[]}}),h.find.TAG=function(V,U){return typeof U.getElementsByTagName<"u"?U.getElementsByTagName(V):U.querySelectorAll(V)},h.find.CLASS=function(V,U){if(typeof U.getElementsByClassName<"u"&&N)return U.getElementsByClassName(V)},F=[],Yt(function(V){var U;k.appendChild(V).innerHTML="<a id='"+K+"' href='' disabled='disabled'></a><select id='"+K+"-\r\\' disabled='disabled'><option selected=''></option></select>",V.querySelectorAll("[selected]").length||F.push("\\["+J+"*(?:value|"+ft+")"),V.querySelectorAll("[id~="+K+"-]").length||F.push("~="),V.querySelectorAll("a#"+K+"+*").length||F.push(".#.+[+~]"),V.querySelectorAll(":checked").length||F.push(":checked"),U=S.createElement("input"),U.setAttribute("type","hidden"),V.appendChild(U).setAttribute("name","D"),k.appendChild(V).disabled=!0,V.querySelectorAll(":disabled").length!==2&&F.push(":enabled",":disabled"),U=S.createElement("input"),U.setAttribute("name",""),V.appendChild(U),V.querySelectorAll("[name='']").length||F.push("\\["+J+"*name"+J+"*="+J+`*(?:''|"")`)}),x.cssHas||F.push(":has"),F=F.length&&new RegExp(F.join("|")),We=function(V,U){if(V===U)return w=!0,0;var Z=!V.compareDocumentPosition-!U.compareDocumentPosition;return Z||(Z=(V.ownerDocument||V)==(U.ownerDocument||U)?V.compareDocumentPosition(U):1,Z&1||!x.sortDetached&&U.compareDocumentPosition(V)===Z?V===S||V.ownerDocument==oe&&Pe.contains(oe,V)?-1:U===S||U.ownerDocument==oe&&Pe.contains(oe,U)?1:y?c.call(y,V)-c.call(y,U):0:Z&4?-1:1)}),S}Pe.matches=function(M,I){return Pe(M,null,null,I)},Pe.matchesSelector=function(M,I){if(kt(M),N&&!ze[I+" "]&&(!F||!F.test(I)))try{var H=W.call(M,I);if(H||x.disconnectedMatch||M.document&&M.document.nodeType!==11)return H}catch{ze(I,!0)}return Pe(I,S,null,[M]).length>0},Pe.contains=function(M,I){return(M.ownerDocument||M)!=S&&kt(M),g.contains(M,I)},Pe.attr=function(M,I){(M.ownerDocument||M)!=S&&kt(M);var H=h.attrHandle[I.toLowerCase()],V=H&&p.call(h.attrHandle,I.toLowerCase())?H(M,I,!N):void 0;return V!==void 0?V:M.getAttribute(I)},Pe.error=function(M){throw new Error("Syntax error, unrecognized expression: "+M)},g.uniqueSort=function(M){var I,H=[],V=0,U=0;if(w=!x.sortStable,y=!x.sortStable&&s.call(M,0),ee.call(M,We),w){for(;I=M[U++];)I===M[U]&&(V=H.push(U));for(;V--;)ue.call(M,H[V],1)}return y=null,M},g.fn.uniqueSort=function(){return this.pushStack(g.uniqueSort(s.apply(this)))},h=g.expr={cacheLength:50,createPseudo:ut,match:gt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(M){return M[1]=M[1].replace(vt,_t),M[3]=(M[3]||M[4]||M[5]||"").replace(vt,_t),M[2]==="~="&&(M[3]=" "+M[3]+" "),M.slice(0,4)},CHILD:function(M){return M[1]=M[1].toLowerCase(),M[1].slice(0,3)==="nth"?(M[3]||Pe.error(M[0]),M[4]=+(M[4]?M[5]+(M[6]||1):2*(M[3]==="even"||M[3]==="odd")),M[5]=+(M[7]+M[8]||M[3]==="odd")):M[3]&&Pe.error(M[0]),M},PSEUDO:function(M){var I,H=!M[6]&&M[2];return gt.CHILD.test(M[0])?null:(M[3]?M[2]=M[4]||M[5]||"":H&&pt.test(H)&&(I=an(H,!0))&&(I=H.indexOf(")",H.length-I)-H.length)&&(M[0]=M[0].slice(0,I),M[2]=H.slice(0,I)),M.slice(0,3))}},filter:{TAG:function(M){var I=M.replace(vt,_t).toLowerCase();return M==="*"?function(){return!0}:function(H){return Y(H,I)}},CLASS:function(M){var I=be[M+" "];return I||(I=new RegExp("(^|"+J+")"+M+"("+J+"|$)"))&&be(M,function(H){return I.test(typeof H.className=="string"&&H.className||typeof H.getAttribute<"u"&&H.getAttribute("class")||"")})},ATTR:function(M,I,H){return function(V){var U=Pe.attr(V,M);return U==null?I==="!=":I?(U+="",I==="="?U===H:I==="!="?U!==H:I==="^="?H&&U.indexOf(H)===0:I==="*="?H&&U.indexOf(H)>-1:I==="$="?H&&U.slice(-H.length)===H:I==="~="?(" "+U.replace(Ce," ")+" ").indexOf(H)>-1:I==="|="?U===H||U.slice(0,H.length+1)===H+"-":!1):!0}},CHILD:function(M,I,H,V,U){var Z=M.slice(0,3)!=="nth",ne=M.slice(-4)!=="last",de=I==="of-type";return V===1&&U===0?function(ie){return!!ie.parentNode}:function(ie,we,me){var ve,De,he,Ie,Ze,Ue=Z!==ne?"nextSibling":"previousSibling",at=ie.parentNode,mt=de&&ie.nodeName.toLowerCase(),Ut=!me&&!de,Ge=!1;if(at){if(Z){for(;Ue;){for(he=ie;he=he[Ue];)if(de?Y(he,mt):he.nodeType===1)return!1;Ze=Ue=M==="only"&&!Ze&&"nextSibling"}return!0}if(Ze=[ne?at.firstChild:at.lastChild],ne&&Ut){for(De=at[K]||(at[K]={}),ve=De[M]||[],Ie=ve[0]===j&&ve[1],Ge=Ie&&ve[2],he=Ie&&at.childNodes[Ie];he=++Ie&&he&&he[Ue]||(Ge=Ie=0)||Ze.pop();)if(he.nodeType===1&&++Ge&&he===ie){De[M]=[j,Ie,Ge];break}}else if(Ut&&(De=ie[K]||(ie[K]={}),ve=De[M]||[],Ie=ve[0]===j&&ve[1],Ge=Ie),Ge===!1)for(;(he=++Ie&&he&&he[Ue]||(Ge=Ie=0)||Ze.pop())&&!((de?Y(he,mt):he.nodeType===1)&&++Ge&&(Ut&&(De=he[K]||(he[K]={}),De[M]=[j,Ge]),he===ie)););return Ge-=U,Ge===V||Ge%V===0&&Ge/V>=0}}},PSEUDO:function(M,I){var H,V=h.pseudos[M]||h.setFilters[M.toLowerCase()]||Pe.error("unsupported pseudo: "+M);return V[K]?V(I):V.length>1?(H=[M,M,"",I],h.setFilters.hasOwnProperty(M.toLowerCase())?ut(function(U,Z){for(var ne,de=V(U,I),ie=de.length;ie--;)ne=c.call(U,de[ie]),U[ne]=!(Z[ne]=de[ie])}):function(U){return V(U,0,H)}):V}},pseudos:{not:ut(function(M){var I=[],H=[],V=Fn(M.replace(pe,"$1"));return V[K]?ut(function(U,Z,ne,de){for(var ie,we=V(U,null,de,[]),me=U.length;me--;)(ie=we[me])&&(U[me]=!(Z[me]=ie))}):function(U,Z,ne){return I[0]=U,V(I,null,ne,H),I[0]=null,!H.pop()}}),has:ut(function(M){return function(I){return Pe(M,I).length>0}}),contains:ut(function(M){return M=M.replace(vt,_t),function(I){return(I.textContent||g.text(I)).indexOf(M)>-1}}),lang:ut(function(M){return rn.test(M||"")||Pe.error("unsupported lang: "+M),M=M.replace(vt,_t).toLowerCase(),function(I){var H;do if(H=N?I.lang:I.getAttribute("xml:lang")||I.getAttribute("lang"))return H=H.toLowerCase(),H===M||H.indexOf(M+"-")===0;while((I=I.parentNode)&&I.nodeType===1);return!1}}),target:function(M){var I=e.location&&e.location.hash;return I&&I.slice(1)===M.id},root:function(M){return M===k},focus:function(M){return M===$i()&&S.hasFocus()&&!!(M.type||M.href||~M.tabIndex)},enabled:ri(!1),disabled:ri(!0),checked:function(M){return Y(M,"input")&&!!M.checked||Y(M,"option")&&!!M.selected},selected:function(M){return M.parentNode&&M.parentNode.selectedIndex,M.selected===!0},empty:function(M){for(M=M.firstChild;M;M=M.nextSibling)if(M.nodeType<6)return!1;return!0},parent:function(M){return!h.pseudos.empty(M)},header:function(M){return Nt.test(M.nodeName)},input:function(M){return Mt.test(M.nodeName)},button:function(M){return Y(M,"input")&&M.type==="button"||Y(M,"button")},text:function(M){var I;return Y(M,"input")&&M.type==="text"&&((I=M.getAttribute("type"))==null||I.toLowerCase()==="text")},first:Ht(function(){return[0]}),last:Ht(function(M,I){return[I-1]}),eq:Ht(function(M,I,H){return[H<0?H+I:H]}),even:Ht(function(M,I){for(var H=0;H<I;H+=2)M.push(H);return M}),odd:Ht(function(M,I){for(var H=1;H<I;H+=2)M.push(H);return M}),lt:Ht(function(M,I,H){var V;for(H<0?V=H+I:H>I?V=I:V=H;--V>=0;)M.push(V);return M}),gt:Ht(function(M,I,H){for(var V=H<0?H+I:H;++V<I;)M.push(V);return M})}},h.pseudos.nth=h.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[u]=Ri(u);for(u in{submit:!0,reset:!0})h.pseudos[u]=Fi(u);function ai(){}ai.prototype=h.filters=h.pseudos,h.setFilters=new ai;function an(M,I){var H,V,U,Z,ne,de,ie,we=Te[M+" "];if(we)return I?0:we.slice(0);for(ne=M,de=[],ie=h.preFilter;ne;){(!H||(V=He.exec(ne)))&&(V&&(ne=ne.slice(V[0].length)||ne),de.push(U=[])),H=!1,(V=nn.exec(ne))&&(H=V.shift(),U.push({value:H,type:V[0].replace(pe," ")}),ne=ne.slice(H.length));for(Z in h.filter)(V=gt[Z].exec(ne))&&(!ie[Z]||(V=ie[Z](V)))&&(H=V.shift(),U.push({value:H,type:Z,matches:V}),ne=ne.slice(H.length));if(!H)break}return I?ne.length:ne?Pe.error(M):Te(M,de).slice(0)}function mn(M){for(var I=0,H=M.length,V="";I<H;I++)V+=M[I].value;return V}function bn(M,I,H){var V=I.dir,U=I.next,Z=U||V,ne=H&&Z==="parentNode",de=G++;return I.first?function(ie,we,me){for(;ie=ie[V];)if(ie.nodeType===1||ne)return M(ie,we,me);return!1}:function(ie,we,me){var ve,De,he=[j,de];if(me){for(;ie=ie[V];)if((ie.nodeType===1||ne)&&M(ie,we,me))return!0}else for(;ie=ie[V];)if(ie.nodeType===1||ne)if(De=ie[K]||(ie[K]={}),U&&Y(ie,U))ie=ie[V]||ie;else{if((ve=De[Z])&&ve[0]===j&&ve[1]===de)return he[2]=ve[2];if(De[Z]=he,he[2]=M(ie,we,me))return!0}return!1}}function In(M){return M.length>1?function(I,H,V){for(var U=M.length;U--;)if(!M[U](I,H,V))return!1;return!0}:M[0]}function Hi(M,I,H){for(var V=0,U=I.length;V<U;V++)Pe(M,I[V],H);return H}function yn(M,I,H,V,U){for(var Z,ne=[],de=0,ie=M.length,we=I!=null;de<ie;de++)(Z=M[de])&&(!H||H(Z,V,U))&&(ne.push(Z),we&&I.push(de));return ne}function $n(M,I,H,V,U,Z){return V&&!V[K]&&(V=$n(V)),U&&!U[K]&&(U=$n(U,Z)),ut(function(ne,de,ie,we){var me,ve,De,he,Ie=[],Ze=[],Ue=de.length,at=ne||Hi(I||"*",ie.nodeType?[ie]:ie,[]),mt=M&&(ne||!I)?yn(at,Ie,M,ie,we):at;if(H?(he=U||(ne?M:Ue||V)?[]:de,H(mt,he,ie,we)):he=mt,V)for(me=yn(he,Ze),V(me,[],ie,we),ve=me.length;ve--;)(De=me[ve])&&(he[Ze[ve]]=!(mt[Ze[ve]]=De));if(ne){if(U||M){if(U){for(me=[],ve=he.length;ve--;)(De=he[ve])&&me.push(mt[ve]=De);U(null,he=[],me,we)}for(ve=he.length;ve--;)(De=he[ve])&&(me=U?c.call(ne,De):Ie[ve])>-1&&(ne[me]=!(de[me]=De))}}else he=yn(he===de?he.splice(Ue,he.length):he),U?U(null,de,he,we):D.apply(de,he)})}function Rn(M){for(var I,H,V,U=M.length,Z=h.relative[M[0].type],ne=Z||h.relative[" "],de=Z?1:0,ie=bn(function(ve){return ve===I},ne,!0),we=bn(function(ve){return c.call(I,ve)>-1},ne,!0),me=[function(ve,De,he){var Ie=!Z&&(he||De!=m)||((I=De).nodeType?ie(ve,De,he):we(ve,De,he));return I=null,Ie}];de<U;de++)if(H=h.relative[M[de].type])me=[bn(In(me),H)];else{if(H=h.filter[M[de].type].apply(null,M[de].matches),H[K]){for(V=++de;V<U&&!h.relative[M[V].type];V++);return $n(de>1&&In(me),de>1&&mn(M.slice(0,de-1).concat({value:M[de-2].type===" "?"*":""})).replace(pe,"$1"),H,de<V&&Rn(M.slice(de,V)),V<U&&Rn(M=M.slice(V)),V<U&&mn(M))}me.push(H)}return In(me)}function ji(M,I){var H=I.length>0,V=M.length>0,U=function(Z,ne,de,ie,we){var me,ve,De,he=0,Ie="0",Ze=Z&&[],Ue=[],at=m,mt=Z||V&&h.find.TAG("*",we),Ut=j+=at==null?1:Math.random()||.1,Ge=mt.length;for(we&&(m=ne==S||ne||we);Ie!==Ge&&(me=mt[Ie])!=null;Ie++){if(V&&me){for(ve=0,!ne&&me.ownerDocument!=S&&(kt(me),de=!N);De=M[ve++];)if(De(me,ne||S,de)){D.call(ie,me);break}we&&(j=Ut)}H&&((me=!De&&me)&&he--,Z&&Ze.push(me))}if(he+=Ie,H&&Ie!==he){for(ve=0;De=I[ve++];)De(Ze,Ue,ne,de);if(Z){if(he>0)for(;Ie--;)Ze[Ie]||Ue[Ie]||(Ue[Ie]=X.call(ie));Ue=yn(Ue)}D.apply(ie,Ue),we&&!Z&&Ue.length>0&&he+I.length>1&&g.uniqueSort(ie)}return we&&(j=Ut,m=at),Ze};return H?ut(U):U}function Fn(M,I){var H,V=[],U=[],Z=xe[M+" "];if(!Z){for(I||(I=an(M)),H=I.length;H--;)Z=Rn(I[H]),Z[K]?V.push(Z):U.push(Z);Z=xe(M,ji(U,V)),Z.selector=M}return Z}function si(M,I,H,V){var U,Z,ne,de,ie,we=typeof M=="function"&&M,me=!V&&an(M=we.selector||M);if(H=H||[],me.length===1){if(Z=me[0]=me[0].slice(0),Z.length>2&&(ne=Z[0]).type==="ID"&&I.nodeType===9&&N&&h.relative[Z[1].type]){if(I=(h.find.ID(ne.matches[0].replace(vt,_t),I)||[])[0],I)we&&(I=I.parentNode);else return H;M=M.slice(Z.shift().value.length)}for(U=gt.needsContext.test(M)?0:Z.length;U--&&(ne=Z[U],!h.relative[de=ne.type]);)if((ie=h.find[de])&&(V=ie(ne.matches[0].replace(vt,_t),Pn.test(Z[0].type)&&Ln(I.parentNode)||I))){if(Z.splice(U,1),M=V.length&&mn(Z),!M)return D.apply(H,V),H;break}}return(we||Fn(M,me))(V,I,!N,H,!I||Pn.test(M)&&Ln(I.parentNode)||I),H}x.sortStable=K.split("").sort(We).join("")===K,kt(),x.sortDetached=Yt(function(M){return M.compareDocumentPosition(S.createElement("fieldset"))&1}),g.find=Pe,g.expr[":"]=g.expr.pseudos,g.unique=g.uniqueSort,Pe.compile=Fn,Pe.select=si,Pe.setDocument=kt,Pe.tokenize=an,Pe.escape=g.escapeSelector,Pe.getText=g.text,Pe.isXML=g.isXMLDoc,Pe.selectors=g.expr,Pe.support=g.support,Pe.uniqueSort=g.uniqueSort})();var Ee=function(u,h,m){for(var y=[],w=m!==void 0;(u=u[h])&&u.nodeType!==9;)if(u.nodeType===1){if(w&&g(u).is(m))break;y.push(u)}return y},Be=function(u,h){for(var m=[];u;u=u.nextSibling)u.nodeType===1&&u!==h&&m.push(u);return m},$e=g.expr.match.needsContext,Se=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function je(u,h,m){return _(h)?g.grep(u,function(y,w){return!!h.call(y,w,y)!==m}):h.nodeType?g.grep(u,function(y){return y===h!==m}):typeof h!="string"?g.grep(u,function(y){return c.call(h,y)>-1!==m}):g.filter(h,u,m)}g.filter=function(u,h,m){var y=h[0];return m&&(u=":not("+u+")"),h.length===1&&y.nodeType===1?g.find.matchesSelector(y,u)?[y]:[]:g.find.matches(u,g.grep(h,function(w){return w.nodeType===1}))},g.fn.extend({find:function(u){var h,m,y=this.length,w=this;if(typeof u!="string")return this.pushStack(g(u).filter(function(){for(h=0;h<y;h++)if(g.contains(w[h],this))return!0}));for(m=this.pushStack([]),h=0;h<y;h++)g.find(u,w[h],m);return y>1?g.uniqueSort(m):m},filter:function(u){return this.pushStack(je(this,u||[],!1))},not:function(u){return this.pushStack(je(this,u||[],!0))},is:function(u){return!!je(this,typeof u=="string"&&$e.test(u)?g(u):u||[],!1).length}});var Re,Fe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ge=g.fn.init=function(u,h,m){var y,w;if(!u)return this;if(m=m||Re,typeof u=="string")if(u[0]==="<"&&u[u.length-1]===">"&&u.length>=3?y=[null,u,null]:y=Fe.exec(u),y&&(y[1]||!h))if(y[1]){if(h=h instanceof g?h[0]:h,g.merge(this,g.parseHTML(y[1],h&&h.nodeType?h.ownerDocument||h:A,!0)),Se.test(y[1])&&g.isPlainObject(h))for(y in h)_(this[y])?this[y](h[y]):this.attr(y,h[y]);return this}else return w=A.getElementById(y[2]),w&&(this[0]=w,this.length=1),this;else return!h||h.jquery?(h||m).find(u):this.constructor(h).find(u);else{if(u.nodeType)return this[0]=u,this.length=1,this;if(_(u))return m.ready!==void 0?m.ready(u):u(g)}return g.makeArray(u,this)};ge.prototype=g.fn,Re=g(A);var Me=/^(?:parents|prev(?:Until|All))/,Le={children:!0,contents:!0,next:!0,prev:!0};g.fn.extend({has:function(u){var h=g(u,this),m=h.length;return this.filter(function(){for(var y=0;y<m;y++)if(g.contains(this,h[y]))return!0})},closest:function(u,h){var m,y=0,w=this.length,D=[],S=typeof u!="string"&&g(u);if(!$e.test(u)){for(;y<w;y++)for(m=this[y];m&&m!==h;m=m.parentNode)if(m.nodeType<11&&(S?S.index(m)>-1:m.nodeType===1&&g.find.matchesSelector(m,u))){D.push(m);break}}return this.pushStack(D.length>1?g.uniqueSort(D):D)},index:function(u){return u?typeof u=="string"?c.call(g(u),this[0]):c.call(this,u.jquery?u[0]:u):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(u,h){return this.pushStack(g.uniqueSort(g.merge(this.get(),g(u,h))))},addBack:function(u){return this.add(u==null?this.prevObject:this.prevObject.filter(u))}});function st(u,h){for(;(u=u[h])&&u.nodeType!==1;);return u}g.each({parent:function(u){var h=u.parentNode;return h&&h.nodeType!==11?h:null},parents:function(u){return Ee(u,"parentNode")},parentsUntil:function(u,h,m){return Ee(u,"parentNode",m)},next:function(u){return st(u,"nextSibling")},prev:function(u){return st(u,"previousSibling")},nextAll:function(u){return Ee(u,"nextSibling")},prevAll:function(u){return Ee(u,"previousSibling")},nextUntil:function(u,h,m){return Ee(u,"nextSibling",m)},prevUntil:function(u,h,m){return Ee(u,"previousSibling",m)},siblings:function(u){return Be((u.parentNode||{}).firstChild,u)},children:function(u){return Be(u.firstChild)},contents:function(u){return u.contentDocument!=null&&a(u.contentDocument)?u.contentDocument:(Y(u,"template")&&(u=u.content||u),g.merge([],u.childNodes))}},function(u,h){g.fn[u]=function(m,y){var w=g.map(this,h,m);return u.slice(-5)!=="Until"&&(y=m),y&&typeof y=="string"&&(w=g.filter(y,w)),this.length>1&&(Le[u]||g.uniqueSort(w),Me.test(u)&&w.reverse()),this.pushStack(w)}});var Xe=/[^\x20\t\r\n\f]+/g;function Et(u){var h={};return g.each(u.match(Xe)||[],function(m,y){h[y]=!0}),h}g.Callbacks=function(u){u=typeof u=="string"?Et(u):g.extend({},u);var h,m,y,w,D=[],S=[],k=-1,N=function(){for(w=w||u.once,y=h=!0;S.length;k=-1)for(m=S.shift();++k<D.length;)D[k].apply(m[0],m[1])===!1&&u.stopOnFalse&&(k=D.length,m=!1);u.memory||(m=!1),h=!1,w&&(m?D=[]:D="")},F={add:function(){return D&&(m&&!h&&(k=D.length-1,S.push(m)),(function W(K){g.each(K,function(j,G){_(G)?(!u.unique||!F.has(G))&&D.push(G):G&&G.length&&P(G)!=="string"&&W(G)})})(arguments),m&&!h&&N()),this},remove:function(){return g.each(arguments,function(W,K){for(var j;(j=g.inArray(K,D,j))>-1;)D.splice(j,1),j<=k&&k--}),this},has:function(W){return W?g.inArray(W,D)>-1:D.length>0},empty:function(){return D&&(D=[]),this},disable:function(){return w=S=[],D=m="",this},disabled:function(){return!D},lock:function(){return w=S=[],!m&&!h&&(D=m=""),this},locked:function(){return!!w},fireWith:function(W,K){return w||(K=K||[],K=[W,K.slice?K.slice():K],S.push(K),h||N()),this},fire:function(){return F.fireWith(this,arguments),this},fired:function(){return!!y}};return F};function et(u){return u}function bt(u){throw u}function jt(u,h,m,y){var w;try{u&&_(w=u.promise)?w.call(u).done(h).fail(m):u&&_(w=u.then)?w.call(u,h,m):h.apply(void 0,[u].slice(y))}catch(D){m.apply(void 0,[D])}}g.extend({Deferred:function(u){var h=[["notify","progress",g.Callbacks("memory"),g.Callbacks("memory"),2],["resolve","done",g.Callbacks("once memory"),g.Callbacks("once memory"),0,"resolved"],["reject","fail",g.Callbacks("once memory"),g.Callbacks("once memory"),1,"rejected"]],m="pending",y={state:function(){return m},always:function(){return w.done(arguments).fail(arguments),this},catch:function(D){return y.then(null,D)},pipe:function(){var D=arguments;return g.Deferred(function(S){g.each(h,function(k,N){var F=_(D[N[4]])&&D[N[4]];w[N[1]](function(){var W=F&&F.apply(this,arguments);W&&_(W.promise)?W.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[N[0]+"With"](this,F?[W]:arguments)})}),D=null}).promise()},then:function(D,S,k){var N=0;function F(W,K,j,G){return function(){var be=this,Te=arguments,xe=function(){var We,ft;if(!(W<N)){if(We=j.apply(be,Te),We===K.promise())throw new TypeError("Thenable self-resolution");ft=We&&(typeof We=="object"||typeof We=="function")&&We.then,_(ft)?G?ft.call(We,F(N,K,et,G),F(N,K,bt,G)):(N++,ft.call(We,F(N,K,et,G),F(N,K,bt,G),F(N,K,et,K.notifyWith))):(j!==et&&(be=void 0,Te=[We]),(G||K.resolveWith)(be,Te))}},ze=G?xe:function(){try{xe()}catch(We){g.Deferred.exceptionHook&&g.Deferred.exceptionHook(We,ze.error),W+1>=N&&(j!==bt&&(be=void 0,Te=[We]),K.rejectWith(be,Te))}};W?ze():(g.Deferred.getErrorHook?ze.error=g.Deferred.getErrorHook():g.Deferred.getStackHook&&(ze.error=g.Deferred.getStackHook()),e.setTimeout(ze))}}return g.Deferred(function(W){h[0][3].add(F(0,W,_(k)?k:et,W.notifyWith)),h[1][3].add(F(0,W,_(D)?D:et)),h[2][3].add(F(0,W,_(S)?S:bt))}).promise()},promise:function(D){return D!=null?g.extend(D,y):y}},w={};return g.each(h,function(D,S){var k=S[2],N=S[5];y[S[1]]=k.add,N&&k.add(function(){m=N},h[3-D][2].disable,h[3-D][3].disable,h[0][2].lock,h[0][3].lock),k.add(S[3].fire),w[S[0]]=function(){return w[S[0]+"With"](this===w?void 0:this,arguments),this},w[S[0]+"With"]=k.fireWith}),y.promise(w),u&&u.call(w,w),w},when:function(u){var h=arguments.length,m=h,y=Array(m),w=s.call(arguments),D=g.Deferred(),S=function(k){return function(N){y[k]=this,w[k]=arguments.length>1?s.call(arguments):N,--h||D.resolveWith(y,w)}};if(h<=1&&(jt(u,D.done(S(m)).resolve,D.reject,!h),D.state()==="pending"||_(w[m]&&w[m].then)))return D.then();for(;m--;)jt(w[m],S(m),D.reject);return D.promise()}});var Bt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;g.Deferred.exceptionHook=function(u,h){e.console&&e.console.warn&&u&&Bt.test(u.name)&&e.console.warn("jQuery.Deferred exception: "+u.message,u.stack,h)},g.readyException=function(u){e.setTimeout(function(){throw u})};var xt=g.Deferred();g.fn.ready=function(u){return xt.then(u).catch(function(h){g.readyException(h)}),this},g.extend({isReady:!1,readyWait:1,ready:function(u){(u===!0?--g.readyWait:g.isReady)||(g.isReady=!0,!(u!==!0&&--g.readyWait>0)&&xt.resolveWith(A,[g]))}}),g.ready.then=xt.then;function dt(){A.removeEventListener("DOMContentLoaded",dt),e.removeEventListener("load",dt),g.ready()}A.readyState==="complete"||A.readyState!=="loading"&&!A.documentElement.doScroll?e.setTimeout(g.ready):(A.addEventListener("DOMContentLoaded",dt),e.addEventListener("load",dt));var Qe=function(u,h,m,y,w,D,S){var k=0,N=u.length,F=m==null;if(P(m)==="object"){w=!0;for(k in m)Qe(u,h,k,m[k],!0,D,S)}else if(y!==void 0&&(w=!0,_(y)||(S=!0),F&&(S?(h.call(u,y),h=null):(F=h,h=function(W,K,j){return F.call(g(W),j)})),h))for(;k<N;k++)h(u[k],m,S?y:y.call(u[k],k,h(u[k],m)));return w?u:F?h.call(u):N?h(u[0],m):D},wt=/^-ms-/,ot=/-([a-z])/g;function Dt(u,h){return h.toUpperCase()}function qe(u){return u.replace(wt,"ms-").replace(ot,Dt)}var tt=function(u){return u.nodeType===1||u.nodeType===9||!+u.nodeType};function nt(){this.expando=g.expando+nt.uid++}nt.uid=1,nt.prototype={cache:function(u){var h=u[this.expando];return h||(h={},tt(u)&&(u.nodeType?u[this.expando]=h:Object.defineProperty(u,this.expando,{value:h,configurable:!0}))),h},set:function(u,h,m){var y,w=this.cache(u);if(typeof h=="string")w[qe(h)]=m;else for(y in h)w[qe(y)]=h[y];return w},get:function(u,h){return h===void 0?this.cache(u):u[this.expando]&&u[this.expando][qe(h)]},access:function(u,h,m){return h===void 0||h&&typeof h=="string"&&m===void 0?this.get(u,h):(this.set(u,h,m),m!==void 0?m:h)},remove:function(u,h){var m,y=u[this.expando];if(y!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(qe):(h=qe(h),h=h in y?[h]:h.match(Xe)||[]),m=h.length;m--;)delete y[h[m]];(h===void 0||g.isEmptyObject(y))&&(u.nodeType?u[this.expando]=void 0:delete u[this.expando])}},hasData:function(u){var h=u[this.expando];return h!==void 0&&!g.isEmptyObject(h)}};var ce=new nt,Ve=new nt,Pt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Vt=/[A-Z]/g;function sn(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:Pt.test(u)?JSON.parse(u):u}function on(u,h,m){var y;if(m===void 0&&u.nodeType===1)if(y="data-"+h.replace(Vt,"-$&").toLowerCase(),m=u.getAttribute(y),typeof m=="string"){try{m=sn(m)}catch{}Ve.set(u,h,m)}else m=void 0;return m}g.extend({hasData:function(u){return Ve.hasData(u)||ce.hasData(u)},data:function(u,h,m){return Ve.access(u,h,m)},removeData:function(u,h){Ve.remove(u,h)},_data:function(u,h,m){return ce.access(u,h,m)},_removeData:function(u,h){ce.remove(u,h)}}),g.fn.extend({data:function(u,h){var m,y,w,D=this[0],S=D&&D.attributes;if(u===void 0){if(this.length&&(w=Ve.get(D),D.nodeType===1&&!ce.get(D,"hasDataAttrs"))){for(m=S.length;m--;)S[m]&&(y=S[m].name,y.indexOf("data-")===0&&(y=qe(y.slice(5)),on(D,y,w[y])));ce.set(D,"hasDataAttrs",!0)}return w}return typeof u=="object"?this.each(function(){Ve.set(this,u)}):Qe(this,function(k){var N;if(D&&k===void 0)return N=Ve.get(D,u),N!==void 0||(N=on(D,u),N!==void 0)?N:void 0;this.each(function(){Ve.set(this,u,k)})},null,h,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){Ve.remove(this,u)})}}),g.extend({queue:function(u,h,m){var y;if(u)return h=(h||"fx")+"queue",y=ce.get(u,h),m&&(!y||Array.isArray(m)?y=ce.access(u,h,g.makeArray(m)):y.push(m)),y||[]},dequeue:function(u,h){h=h||"fx";var m=g.queue(u,h),y=m.length,w=m.shift(),D=g._queueHooks(u,h),S=function(){g.dequeue(u,h)};w==="inprogress"&&(w=m.shift(),y--),w&&(h==="fx"&&m.unshift("inprogress"),delete D.stop,w.call(u,S,D)),!y&&D&&D.empty.fire()},_queueHooks:function(u,h){var m=h+"queueHooks";return ce.get(u,m)||ce.access(u,m,{empty:g.Callbacks("once memory").add(function(){ce.remove(u,[h+"queue",m])})})}}),g.fn.extend({queue:function(u,h){var m=2;return typeof u!="string"&&(h=u,u="fx",m--),arguments.length<m?g.queue(this[0],u):h===void 0?this:this.each(function(){var y=g.queue(this,u,h);g._queueHooks(this,u),u==="fx"&&y[0]!=="inprogress"&&g.dequeue(this,u)})},dequeue:function(u){return this.each(function(){g.dequeue(this,u)})},clearQueue:function(u){return this.queue(u||"fx",[])},promise:function(u,h){var m,y=1,w=g.Deferred(),D=this,S=this.length,k=function(){--y||w.resolveWith(D,[D])};for(typeof u!="string"&&(h=u,u=void 0),u=u||"fx";S--;)m=ce.get(D[S],u+"queueHooks"),m&&m.empty&&(y++,m.empty.add(k));return k(),w.promise(h)}});var ln=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,At=new RegExp("^(?:([+-])=|)("+ln+")([a-z%]*)$","i"),lt=["Top","Right","Bottom","Left"],yt=A.documentElement,Ne=function(u){return g.contains(u.ownerDocument,u)},Kt={composed:!0};yt.getRootNode&&(Ne=function(u){return g.contains(u.ownerDocument,u)||u.getRootNode(Kt)===u.ownerDocument});var St=function(u,h){return u=h||u,u.style.display==="none"||u.style.display===""&&Ne(u)&&g.css(u,"display")==="none"};function cn(u,h,m,y){var w,D,S=20,k=y?function(){return y.cur()}:function(){return g.css(u,h,"")},N=k(),F=m&&m[3]||(g.cssNumber[h]?"":"px"),W=u.nodeType&&(g.cssNumber[h]||F!=="px"&&+N)&&At.exec(g.css(u,h));if(W&&W[3]!==F){for(N=N/2,F=F||W[3],W=+N||1;S--;)g.style(u,h,W+F),(1-D)*(1-(D=k()/N||.5))<=0&&(S=0),W=W/D;W=W*2,g.style(u,h,W+F),m=m||[]}return m&&(W=+W||+N||0,w=m[1]?W+(m[1]+1)*m[2]:+m[2],y&&(y.unit=F,y.start=W,y.end=w)),w}var Lt={};function Gt(u){var h,m=u.ownerDocument,y=u.nodeName,w=Lt[y];return w||(h=m.body.appendChild(m.createElement(y)),w=g.css(h,"display"),h.parentNode.removeChild(h),w==="none"&&(w="block"),Lt[y]=w,w)}function Ye(u,h){for(var m,y,w=[],D=0,S=u.length;D<S;D++)y=u[D],y.style&&(m=y.style.display,h?(m==="none"&&(w[D]=ce.get(y,"display")||null,w[D]||(y.style.display="")),y.style.display===""&&St(y)&&(w[D]=Gt(y))):m!=="none"&&(w[D]="none",ce.set(y,"display",m)));for(D=0;D<S;D++)w[D]!=null&&(u[D].style.display=w[D]);return u}g.fn.extend({show:function(){return Ye(this,!0)},hide:function(){return Ye(this)},toggle:function(u){return typeof u=="boolean"?u?this.show():this.hide():this.each(function(){St(this)?g(this).show():g(this).hide()})}});var It=/^(?:checkbox|radio)$/i,un=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,T=/^$|^module$|\/(?:java|ecma)script/i;(function(){var u=A.createDocumentFragment(),h=u.appendChild(A.createElement("div")),m=A.createElement("input");m.setAttribute("type","radio"),m.setAttribute("checked","checked"),m.setAttribute("name","t"),h.appendChild(m),x.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",x.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",x.option=!!h.lastChild})();var C={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};C.tbody=C.tfoot=C.colgroup=C.caption=C.thead,C.th=C.td,x.option||(C.optgroup=C.option=[1,"<select multiple='multiple'>","</select>"]);function R(u,h){var m;return typeof u.getElementsByTagName<"u"?m=u.getElementsByTagName(h||"*"):typeof u.querySelectorAll<"u"?m=u.querySelectorAll(h||"*"):m=[],h===void 0||h&&Y(u,h)?g.merge([u],m):m}function z(u,h){for(var m=0,y=u.length;m<y;m++)ce.set(u[m],"globalEval",!h||ce.get(h[m],"globalEval"))}var Q=/<|&#?\w+;/;function te(u,h,m,y,w){for(var D,S,k,N,F,W,K=h.createDocumentFragment(),j=[],G=0,be=u.length;G<be;G++)if(D=u[G],D||D===0)if(P(D)==="object")g.merge(j,D.nodeType?[D]:D);else if(!Q.test(D))j.push(h.createTextNode(D));else{for(S=S||K.appendChild(h.createElement("div")),k=(un.exec(D)||["",""])[1].toLowerCase(),N=C[k]||C._default,S.innerHTML=N[1]+g.htmlPrefilter(D)+N[2],W=N[0];W--;)S=S.lastChild;g.merge(j,S.childNodes),S=K.firstChild,S.textContent=""}for(K.textContent="",G=0;D=j[G++];){if(y&&g.inArray(D,y)>-1){w&&w.push(D);continue}if(F=Ne(D),S=R(K.appendChild(D),"script"),F&&z(S),m)for(W=0;D=S[W++];)T.test(D.type||"")&&m.push(D)}return K}var _e=/^([^.]*)(?:\.(.+)|)/;function ae(){return!0}function ye(){return!1}function le(u,h,m,y,w,D){var S,k;if(typeof h=="object"){typeof m!="string"&&(y=y||m,m=void 0);for(k in h)le(u,k,m,y,h[k],D);return u}if(y==null&&w==null?(w=m,y=m=void 0):w==null&&(typeof m=="string"?(w=y,y=void 0):(w=y,y=m,m=void 0)),w===!1)w=ye;else if(!w)return u;return D===1&&(S=w,w=function(N){return g().off(N),S.apply(this,arguments)},w.guid=S.guid||(S.guid=g.guid++)),u.each(function(){g.event.add(this,h,w,y,m)})}g.event={global:{},add:function(u,h,m,y,w){var D,S,k,N,F,W,K,j,G,be,Te,xe=ce.get(u);if(tt(u))for(m.handler&&(D=m,m=D.handler,w=D.selector),w&&g.find.matchesSelector(yt,w),m.guid||(m.guid=g.guid++),(N=xe.events)||(N=xe.events=Object.create(null)),(S=xe.handle)||(S=xe.handle=function(ze){return typeof g<"u"&&g.event.triggered!==ze.type?g.event.dispatch.apply(u,arguments):void 0}),h=(h||"").match(Xe)||[""],F=h.length;F--;)k=_e.exec(h[F])||[],G=Te=k[1],be=(k[2]||"").split(".").sort(),G&&(K=g.event.special[G]||{},G=(w?K.delegateType:K.bindType)||G,K=g.event.special[G]||{},W=g.extend({type:G,origType:Te,data:y,handler:m,guid:m.guid,selector:w,needsContext:w&&g.expr.match.needsContext.test(w),namespace:be.join(".")},D),(j=N[G])||(j=N[G]=[],j.delegateCount=0,(!K.setup||K.setup.call(u,y,be,S)===!1)&&u.addEventListener&&u.addEventListener(G,S)),K.add&&(K.add.call(u,W),W.handler.guid||(W.handler.guid=m.guid)),w?j.splice(j.delegateCount++,0,W):j.push(W),g.event.global[G]=!0)},remove:function(u,h,m,y,w){var D,S,k,N,F,W,K,j,G,be,Te,xe=ce.hasData(u)&&ce.get(u);if(!(!xe||!(N=xe.events))){for(h=(h||"").match(Xe)||[""],F=h.length;F--;){if(k=_e.exec(h[F])||[],G=Te=k[1],be=(k[2]||"").split(".").sort(),!G){for(G in N)g.event.remove(u,G+h[F],m,y,!0);continue}for(K=g.event.special[G]||{},G=(y?K.delegateType:K.bindType)||G,j=N[G]||[],k=k[2]&&new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=D=j.length;D--;)W=j[D],(w||Te===W.origType)&&(!m||m.guid===W.guid)&&(!k||k.test(W.namespace))&&(!y||y===W.selector||y==="**"&&W.selector)&&(j.splice(D,1),W.selector&&j.delegateCount--,K.remove&&K.remove.call(u,W));S&&!j.length&&((!K.teardown||K.teardown.call(u,be,xe.handle)===!1)&&g.removeEvent(u,G,xe.handle),delete N[G])}g.isEmptyObject(N)&&ce.remove(u,"handle events")}},dispatch:function(u){var h,m,y,w,D,S,k=new Array(arguments.length),N=g.event.fix(u),F=(ce.get(this,"events")||Object.create(null))[N.type]||[],W=g.event.special[N.type]||{};for(k[0]=N,h=1;h<arguments.length;h++)k[h]=arguments[h];if(N.delegateTarget=this,!(W.preDispatch&&W.preDispatch.call(this,N)===!1)){for(S=g.event.handlers.call(this,N,F),h=0;(w=S[h++])&&!N.isPropagationStopped();)for(N.currentTarget=w.elem,m=0;(D=w.handlers[m++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||D.namespace===!1||N.rnamespace.test(D.namespace))&&(N.handleObj=D,N.data=D.data,y=((g.event.special[D.origType]||{}).handle||D.handler).apply(w.elem,k),y!==void 0&&(N.result=y)===!1&&(N.preventDefault(),N.stopPropagation()));return W.postDispatch&&W.postDispatch.call(this,N),N.result}},handlers:function(u,h){var m,y,w,D,S,k=[],N=h.delegateCount,F=u.target;if(N&&F.nodeType&&!(u.type==="click"&&u.button>=1)){for(;F!==this;F=F.parentNode||this)if(F.nodeType===1&&!(u.type==="click"&&F.disabled===!0)){for(D=[],S={},m=0;m<N;m++)y=h[m],w=y.selector+" ",S[w]===void 0&&(S[w]=y.needsContext?g(w,this).index(F)>-1:g.find(w,this,null,[F]).length),S[w]&&D.push(y);D.length&&k.push({elem:F,handlers:D})}}return F=this,N<h.length&&k.push({elem:F,handlers:h.slice(N)}),k},addProp:function(u,h){Object.defineProperty(g.Event.prototype,u,{enumerable:!0,configurable:!0,get:_(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[u]},set:function(m){Object.defineProperty(this,u,{enumerable:!0,configurable:!0,writable:!0,value:m})}})},fix:function(u){return u[g.expando]?u:new g.Event(u)},special:{load:{noBubble:!0},click:{setup:function(u){var h=this||u;return It.test(h.type)&&h.click&&Y(h,"input")&&fe(h,"click",!0),!1},trigger:function(u){var h=this||u;return It.test(h.type)&&h.click&&Y(h,"input")&&fe(h,"click"),!0},_default:function(u){var h=u.target;return It.test(h.type)&&h.click&&Y(h,"input")&&ce.get(h,"click")||Y(h,"a")}},beforeunload:{postDispatch:function(u){u.result!==void 0&&u.originalEvent&&(u.originalEvent.returnValue=u.result)}}}};function fe(u,h,m){if(!m){ce.get(u,h)===void 0&&g.event.add(u,h,ae);return}ce.set(u,h,!1),g.event.add(u,h,{namespace:!1,handler:function(y){var w,D=ce.get(this,h);if(y.isTrigger&1&&this[h]){if(D)(g.event.special[h]||{}).delegateType&&y.stopPropagation();else if(D=s.call(arguments),ce.set(this,h,D),this[h](),w=ce.get(this,h),ce.set(this,h,!1),D!==w)return y.stopImmediatePropagation(),y.preventDefault(),w}else D&&(ce.set(this,h,g.event.trigger(D[0],D.slice(1),this)),y.stopPropagation(),y.isImmediatePropagationStopped=ae)}})}g.removeEvent=function(u,h,m){u.removeEventListener&&u.removeEventListener(h,m)},g.Event=function(u,h){if(!(this instanceof g.Event))return new g.Event(u,h);u&&u.type?(this.originalEvent=u,this.type=u.type,this.isDefaultPrevented=u.defaultPrevented||u.defaultPrevented===void 0&&u.returnValue===!1?ae:ye,this.target=u.target&&u.target.nodeType===3?u.target.parentNode:u.target,this.currentTarget=u.currentTarget,this.relatedTarget=u.relatedTarget):this.type=u,h&&g.extend(this,h),this.timeStamp=u&&u.timeStamp||Date.now(),this[g.expando]=!0},g.Event.prototype={constructor:g.Event,isDefaultPrevented:ye,isPropagationStopped:ye,isImmediatePropagationStopped:ye,isSimulated:!1,preventDefault:function(){var u=this.originalEvent;this.isDefaultPrevented=ae,u&&!this.isSimulated&&u.preventDefault()},stopPropagation:function(){var u=this.originalEvent;this.isPropagationStopped=ae,u&&!this.isSimulated&&u.stopPropagation()},stopImmediatePropagation:function(){var u=this.originalEvent;this.isImmediatePropagationStopped=ae,u&&!this.isSimulated&&u.stopImmediatePropagation(),this.stopPropagation()}},g.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},g.event.addProp),g.each({focus:"focusin",blur:"focusout"},function(u,h){function m(y){if(A.documentMode){var w=ce.get(this,"handle"),D=g.event.fix(y);D.type=y.type==="focusin"?"focus":"blur",D.isSimulated=!0,w(y),D.target===D.currentTarget&&w(D)}else g.event.simulate(h,y.target,g.event.fix(y))}g.event.special[u]={setup:function(){var y;if(fe(this,u,!0),A.documentMode)y=ce.get(this,h),y||this.addEventListener(h,m),ce.set(this,h,(y||0)+1);else return!1},trigger:function(){return fe(this,u),!0},teardown:function(){var y;if(A.documentMode)y=ce.get(this,h)-1,y?ce.set(this,h,y):(this.removeEventListener(h,m),ce.remove(this,h));else return!1},_default:function(y){return ce.get(y.target,u)},delegateType:h},g.event.special[h]={setup:function(){var y=this.ownerDocument||this.document||this,w=A.documentMode?this:y,D=ce.get(w,h);D||(A.documentMode?this.addEventListener(h,m):y.addEventListener(u,m,!0)),ce.set(w,h,(D||0)+1)},teardown:function(){var y=this.ownerDocument||this.document||this,w=A.documentMode?this:y,D=ce.get(w,h)-1;D?ce.set(w,h,D):(A.documentMode?this.removeEventListener(h,m):y.removeEventListener(u,m,!0),ce.remove(w,h))}}}),g.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(u,h){g.event.special[u]={delegateType:h,bindType:h,handle:function(m){var y,w=this,D=m.relatedTarget,S=m.handleObj;return(!D||D!==w&&!g.contains(w,D))&&(m.type=S.origType,y=S.handler.apply(this,arguments),m.type=h),y}}}),g.fn.extend({on:function(u,h,m,y){return le(this,u,h,m,y)},one:function(u,h,m,y){return le(this,u,h,m,y,1)},off:function(u,h,m){var y,w;if(u&&u.preventDefault&&u.handleObj)return y=u.handleObj,g(u.delegateTarget).off(y.namespace?y.origType+"."+y.namespace:y.origType,y.selector,y.handler),this;if(typeof u=="object"){for(w in u)this.off(w,h,u[w]);return this}return(h===!1||typeof h=="function")&&(m=h,h=void 0),m===!1&&(m=ye),this.each(function(){g.event.remove(this,u,m,h)})}});var ke=/<script|<style|<link/i,it=/checked\s*(?:[^=]|=\s*.checked.)/i,Ke=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Tt(u,h){return Y(u,"table")&&Y(h.nodeType!==11?h:h.firstChild,"tr")&&g(u).children("tbody")[0]||u}function Ct(u){return u.type=(u.getAttribute("type")!==null)+"/"+u.type,u}function vn(u){return(u.type||"").slice(0,5)==="true/"?u.type=u.type.slice(5):u.removeAttribute("type"),u}function Wt(u,h){var m,y,w,D,S,k,N;if(h.nodeType===1){if(ce.hasData(u)&&(D=ce.get(u),N=D.events,N)){ce.remove(h,"handle events");for(w in N)for(m=0,y=N[w].length;m<y;m++)g.event.add(h,w,N[w][m])}Ve.hasData(u)&&(S=Ve.access(u),k=g.extend({},S),Ve.set(h,k))}}function _n(u,h){var m=h.nodeName.toLowerCase();m==="input"&&It.test(u.type)?h.checked=u.checked:(m==="input"||m==="textarea")&&(h.defaultValue=u.defaultValue)}function Ot(u,h,m,y){h=o(h);var w,D,S,k,N,F,W=0,K=u.length,j=K-1,G=h[0],be=_(G);if(be||K>1&&typeof G=="string"&&!x.checkClone&&it.test(G))return u.each(function(Te){var xe=u.eq(Te);be&&(h[0]=G.call(this,Te,xe.html())),Ot(xe,h,m,y)});if(K&&(w=te(h,u[0].ownerDocument,!1,u,y),D=w.firstChild,w.childNodes.length===1&&(w=D),D||y)){for(S=g.map(R(w,"script"),Ct),k=S.length;W<K;W++)N=w,W!==j&&(N=g.clone(N,!0,!0),k&&g.merge(S,R(N,"script"))),m.call(u[W],N,W);if(k)for(F=S[S.length-1].ownerDocument,g.map(S,vn),W=0;W<k;W++)N=S[W],T.test(N.type||"")&&!ce.access(N,"globalEval")&&g.contains(F,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?g._evalUrl&&!N.noModule&&g._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},F):$(N.textContent.replace(Ke,""),N,F))}return u}function dn(u,h,m){for(var y,w=h?g.filter(h,u):u,D=0;(y=w[D])!=null;D++)!m&&y.nodeType===1&&g.cleanData(R(y)),y.parentNode&&(m&&Ne(y)&&z(R(y,"script")),y.parentNode.removeChild(y));return u}g.extend({htmlPrefilter:function(u){return u},clone:function(u,h,m){var y,w,D,S,k=u.cloneNode(!0),N=Ne(u);if(!x.noCloneChecked&&(u.nodeType===1||u.nodeType===11)&&!g.isXMLDoc(u))for(S=R(k),D=R(u),y=0,w=D.length;y<w;y++)_n(D[y],S[y]);if(h)if(m)for(D=D||R(u),S=S||R(k),y=0,w=D.length;y<w;y++)Wt(D[y],S[y]);else Wt(u,k);return S=R(k,"script"),S.length>0&&z(S,!N&&R(u,"script")),k},cleanData:function(u){for(var h,m,y,w=g.event.special,D=0;(m=u[D])!==void 0;D++)if(tt(m)){if(h=m[ce.expando]){if(h.events)for(y in h.events)w[y]?g.event.remove(m,y):g.removeEvent(m,y,h.handle);m[ce.expando]=void 0}m[Ve.expando]&&(m[Ve.expando]=void 0)}}}),g.fn.extend({detach:function(u){return dn(this,u,!0)},remove:function(u){return dn(this,u)},text:function(u){return Qe(this,function(h){return h===void 0?g.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,u,arguments.length)},append:function(){return Ot(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Tt(this,u);h.appendChild(u)}})},prepend:function(){return Ot(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Tt(this,u);h.insertBefore(u,h.firstChild)}})},before:function(){return Ot(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this)})},after:function(){return Ot(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this.nextSibling)})},empty:function(){for(var u,h=0;(u=this[h])!=null;h++)u.nodeType===1&&(g.cleanData(R(u,!1)),u.textContent="");return this},clone:function(u,h){return u=u??!1,h=h??u,this.map(function(){return g.clone(this,u,h)})},html:function(u){return Qe(this,function(h){var m=this[0]||{},y=0,w=this.length;if(h===void 0&&m.nodeType===1)return m.innerHTML;if(typeof h=="string"&&!ke.test(h)&&!C[(un.exec(h)||["",""])[1].toLowerCase()]){h=g.htmlPrefilter(h);try{for(;y<w;y++)m=this[y]||{},m.nodeType===1&&(g.cleanData(R(m,!1)),m.innerHTML=h);m=0}catch{}}m&&this.empty().append(h)},null,u,arguments.length)},replaceWith:function(){var u=[];return Ot(this,arguments,function(h){var m=this.parentNode;g.inArray(this,u)<0&&(g.cleanData(R(this)),m&&m.replaceChild(h,this))},u)}}),g.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(u,h){g.fn[u]=function(m){for(var y,w=[],D=g(m),S=D.length-1,k=0;k<=S;k++)y=k===S?this:this.clone(!0),g(D[k])[h](y),l.apply(w,y.get());return this.pushStack(w)}});var Xt=new RegExp("^("+ln+")(?!px)[a-z%]+$","i"),Qt=/^--/,zt=function(u){var h=u.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(u)},fn=function(u,h,m){var y,w,D={};for(w in h)D[w]=u.style[w],u.style[w]=h[w];y=m.call(u);for(w in h)u.style[w]=D[w];return y},En=new RegExp(lt.join("|"),"i");(function(){function u(){if(F){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",F.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",yt.appendChild(N).appendChild(F);var W=e.getComputedStyle(F);m=W.top!=="1%",k=h(W.marginLeft)===12,F.style.right="60%",D=h(W.right)===36,y=h(W.width)===36,F.style.position="absolute",w=h(F.offsetWidth/3)===12,yt.removeChild(N),F=null}}function h(W){return Math.round(parseFloat(W))}var m,y,w,D,S,k,N=A.createElement("div"),F=A.createElement("div");F.style&&(F.style.backgroundClip="content-box",F.cloneNode(!0).style.backgroundClip="",x.clearCloneStyle=F.style.backgroundClip==="content-box",g.extend(x,{boxSizingReliable:function(){return u(),y},pixelBoxStyles:function(){return u(),D},pixelPosition:function(){return u(),m},reliableMarginLeft:function(){return u(),k},scrollboxSize:function(){return u(),w},reliableTrDimensions:function(){var W,K,j,G;return S==null&&(W=A.createElement("table"),K=A.createElement("tr"),j=A.createElement("div"),W.style.cssText="position:absolute;left:-11111px;border-collapse:separate",K.style.cssText="box-sizing:content-box;border:1px solid",K.style.height="1px",j.style.height="9px",j.style.display="block",yt.appendChild(W).appendChild(K).appendChild(j),G=e.getComputedStyle(K),S=parseInt(G.height,10)+parseInt(G.borderTopWidth,10)+parseInt(G.borderBottomWidth,10)===K.offsetHeight,yt.removeChild(W)),S}}))})();function Jt(u,h,m){var y,w,D,S,k=Qt.test(h),N=u.style;return m=m||zt(u),m&&(S=m.getPropertyValue(h)||m[h],k&&S&&(S=S.replace(pe,"$1")||void 0),S===""&&!Ne(u)&&(S=g.style(u,h)),!x.pixelBoxStyles()&&Xt.test(S)&&En.test(h)&&(y=N.width,w=N.minWidth,D=N.maxWidth,N.minWidth=N.maxWidth=N.width=S,S=m.width,N.width=y,N.minWidth=w,N.maxWidth=D)),S!==void 0?S+"":S}function Hn(u,h){return{get:function(){if(u()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var jn=["Webkit","Moz","ms"],Bn=A.createElement("div").style,Vn={};function li(u){for(var h=u[0].toUpperCase()+u.slice(1),m=jn.length;m--;)if(u=jn[m]+h,u in Bn)return u}function xn(u){var h=g.cssProps[u]||Vn[u];return h||(u in Bn?u:Vn[u]=li(u)||u)}var ci=/^(none|table(?!-c[ea]).+)/,ui={position:"absolute",visibility:"hidden",display:"block"},Wn={letterSpacing:"0",fontWeight:"400"};function zn(u,h,m){var y=At.exec(h);return y?Math.max(0,y[2]-(m||0))+(y[3]||"px"):h}function wn(u,h,m,y,w,D){var S=h==="width"?1:0,k=0,N=0,F=0;if(m===(y?"border":"content"))return 0;for(;S<4;S+=2)m==="margin"&&(F+=g.css(u,m+lt[S],!0,w)),y?(m==="content"&&(N-=g.css(u,"padding"+lt[S],!0,w)),m!=="margin"&&(N-=g.css(u,"border"+lt[S]+"Width",!0,w))):(N+=g.css(u,"padding"+lt[S],!0,w),m!=="padding"?N+=g.css(u,"border"+lt[S]+"Width",!0,w):k+=g.css(u,"border"+lt[S]+"Width",!0,w));return!y&&D>=0&&(N+=Math.max(0,Math.ceil(u["offset"+h[0].toUpperCase()+h.slice(1)]-D-N-k-.5))||0),N+F}function qn(u,h,m){var y=zt(u),w=!x.boxSizingReliable()||m,D=w&&g.css(u,"boxSizing",!1,y)==="border-box",S=D,k=Jt(u,h,y),N="offset"+h[0].toUpperCase()+h.slice(1);if(Xt.test(k)){if(!m)return k;k="auto"}return(!x.boxSizingReliable()&&D||!x.reliableTrDimensions()&&Y(u,"tr")||k==="auto"||!parseFloat(k)&&g.css(u,"display",!1,y)==="inline")&&u.getClientRects().length&&(D=g.css(u,"boxSizing",!1,y)==="border-box",S=N in u,S&&(k=u[N])),k=parseFloat(k)||0,k+wn(u,h,m||(D?"border":"content"),S,y,k)+"px"}g.extend({cssHooks:{opacity:{get:function(u,h){if(h){var m=Jt(u,"opacity");return m===""?"1":m}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(u,h,m,y){if(!(!u||u.nodeType===3||u.nodeType===8||!u.style)){var w,D,S,k=qe(h),N=Qt.test(h),F=u.style;if(N||(h=xn(k)),S=g.cssHooks[h]||g.cssHooks[k],m!==void 0){if(D=typeof m,D==="string"&&(w=At.exec(m))&&w[1]&&(m=cn(u,h,w),D="number"),m==null||m!==m)return;D==="number"&&!N&&(m+=w&&w[3]||(g.cssNumber[k]?"":"px")),!x.clearCloneStyle&&m===""&&h.indexOf("background")===0&&(F[h]="inherit"),(!S||!("set"in S)||(m=S.set(u,m,y))!==void 0)&&(N?F.setProperty(h,m):F[h]=m)}else return S&&"get"in S&&(w=S.get(u,!1,y))!==void 0?w:F[h]}},css:function(u,h,m,y){var w,D,S,k=qe(h),N=Qt.test(h);return N||(h=xn(k)),S=g.cssHooks[h]||g.cssHooks[k],S&&"get"in S&&(w=S.get(u,!0,m)),w===void 0&&(w=Jt(u,h,y)),w==="normal"&&h in Wn&&(w=Wn[h]),m===""||m?(D=parseFloat(w),m===!0||isFinite(D)?D||0:w):w}}),g.each(["height","width"],function(u,h){g.cssHooks[h]={get:function(m,y,w){if(y)return ci.test(g.css(m,"display"))&&(!m.getClientRects().length||!m.getBoundingClientRect().width)?fn(m,ui,function(){return qn(m,h,w)}):qn(m,h,w)},set:function(m,y,w){var D,S=zt(m),k=!x.scrollboxSize()&&S.position==="absolute",N=k||w,F=N&&g.css(m,"boxSizing",!1,S)==="border-box",W=w?wn(m,h,w,F,S):0;return F&&k&&(W-=Math.ceil(m["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(S[h])-wn(m,h,"border",!1,S)-.5)),W&&(D=At.exec(y))&&(D[3]||"px")!=="px"&&(m.style[h]=y,y=g.css(m,h)),zn(m,y,W)}}}),g.cssHooks.marginLeft=Hn(x.reliableMarginLeft,function(u,h){if(h)return(parseFloat(Jt(u,"marginLeft"))||u.getBoundingClientRect().left-fn(u,{marginLeft:0},function(){return u.getBoundingClientRect().left}))+"px"}),g.each({margin:"",padding:"",border:"Width"},function(u,h){g.cssHooks[u+h]={expand:function(m){for(var y=0,w={},D=typeof m=="string"?m.split(" "):[m];y<4;y++)w[u+lt[y]+h]=D[y]||D[y-2]||D[0];return w}},u!=="margin"&&(g.cssHooks[u+h].set=zn)}),g.fn.extend({css:function(u,h){return Qe(this,function(m,y,w){var D,S,k={},N=0;if(Array.isArray(y)){for(D=zt(m),S=y.length;N<S;N++)k[y[N]]=g.css(m,y[N],!1,D);return k}return w!==void 0?g.style(m,y,w):g.css(m,y)},u,h,arguments.length>1)}});function Je(u,h,m,y,w){return new Je.prototype.init(u,h,m,y,w)}g.Tween=Je,Je.prototype={constructor:Je,init:function(u,h,m,y,w,D){this.elem=u,this.prop=m,this.easing=w||g.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=y,this.unit=D||(g.cssNumber[m]?"":"px")},cur:function(){var u=Je.propHooks[this.prop];return u&&u.get?u.get(this):Je.propHooks._default.get(this)},run:function(u){var h,m=Je.propHooks[this.prop];return this.options.duration?this.pos=h=g.easing[this.easing](u,this.options.duration*u,0,1,this.options.duration):this.pos=h=u,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),m&&m.set?m.set(this):Je.propHooks._default.set(this),this}},Je.prototype.init.prototype=Je.prototype,Je.propHooks={_default:{get:function(u){var h;return u.elem.nodeType!==1||u.elem[u.prop]!=null&&u.elem.style[u.prop]==null?u.elem[u.prop]:(h=g.css(u.elem,u.prop,""),!h||h==="auto"?0:h)},set:function(u){g.fx.step[u.prop]?g.fx.step[u.prop](u):u.elem.nodeType===1&&(g.cssHooks[u.prop]||u.elem.style[xn(u.prop)]!=null)?g.style(u.elem,u.prop,u.now+u.unit):u.elem[u.prop]=u.now}}},Je.propHooks.scrollTop=Je.propHooks.scrollLeft={set:function(u){u.elem.nodeType&&u.elem.parentNode&&(u.elem[u.prop]=u.now)}},g.easing={linear:function(u){return u},swing:function(u){return .5-Math.cos(u*Math.PI)/2},_default:"swing"},g.fx=Je.prototype.init,g.fx.step={};var qt,hn,di=/^(?:toggle|show|hide)$/,fi=/queueHooks$/;function Dn(){hn&&(A.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Dn):e.setTimeout(Dn,g.fx.interval),g.fx.tick())}function Yn(){return e.setTimeout(function(){qt=void 0}),qt=Date.now()}function pn(u,h){var m,y=0,w={height:u};for(h=h?1:0;y<4;y+=2-h)m=lt[y],w["margin"+m]=w["padding"+m]=u;return h&&(w.opacity=w.width=u),w}function Un(u,h,m){for(var y,w=(ct.tweeners[h]||[]).concat(ct.tweeners["*"]),D=0,S=w.length;D<S;D++)if(y=w[D].call(m,h,u))return y}function hi(u,h,m){var y,w,D,S,k,N,F,W,K="width"in h||"height"in h,j=this,G={},be=u.style,Te=u.nodeType&&St(u),xe=ce.get(u,"fxshow");m.queue||(S=g._queueHooks(u,"fx"),S.unqueued==null&&(S.unqueued=0,k=S.empty.fire,S.empty.fire=function(){S.unqueued||k()}),S.unqueued++,j.always(function(){j.always(function(){S.unqueued--,g.queue(u,"fx").length||S.empty.fire()})}));for(y in h)if(w=h[y],di.test(w)){if(delete h[y],D=D||w==="toggle",w===(Te?"hide":"show"))if(w==="show"&&xe&&xe[y]!==void 0)Te=!0;else continue;G[y]=xe&&xe[y]||g.style(u,y)}if(N=!g.isEmptyObject(h),!(!N&&g.isEmptyObject(G))){K&&u.nodeType===1&&(m.overflow=[be.overflow,be.overflowX,be.overflowY],F=xe&&xe.display,F==null&&(F=ce.get(u,"display")),W=g.css(u,"display"),W==="none"&&(F?W=F:(Ye([u],!0),F=u.style.display||F,W=g.css(u,"display"),Ye([u]))),(W==="inline"||W==="inline-block"&&F!=null)&&g.css(u,"float")==="none"&&(N||(j.done(function(){be.display=F}),F==null&&(W=be.display,F=W==="none"?"":W)),be.display="inline-block")),m.overflow&&(be.overflow="hidden",j.always(function(){be.overflow=m.overflow[0],be.overflowX=m.overflow[1],be.overflowY=m.overflow[2]})),N=!1;for(y in G)N||(xe?"hidden"in xe&&(Te=xe.hidden):xe=ce.access(u,"fxshow",{display:F}),D&&(xe.hidden=!Te),Te&&Ye([u],!0),j.done(function(){Te||Ye([u]),ce.remove(u,"fxshow");for(y in G)g.style(u,y,G[y])})),N=Un(Te?xe[y]:0,y,j),y in xe||(xe[y]=N.start,Te&&(N.end=N.start,N.start=0))}}function pi(u,h){var m,y,w,D,S;for(m in u)if(y=qe(m),w=h[y],D=u[m],Array.isArray(D)&&(w=D[1],D=u[m]=D[0]),m!==y&&(u[y]=D,delete u[m]),S=g.cssHooks[y],S&&"expand"in S){D=S.expand(D),delete u[y];for(m in D)m in u||(u[m]=D[m],h[m]=w)}else h[y]=w}function ct(u,h,m){var y,w,D=0,S=ct.prefilters.length,k=g.Deferred().always(function(){delete N.elem}),N=function(){if(w)return!1;for(var K=qt||Yn(),j=Math.max(0,F.startTime+F.duration-K),G=j/F.duration||0,be=1-G,Te=0,xe=F.tweens.length;Te<xe;Te++)F.tweens[Te].run(be);return k.notifyWith(u,[F,be,j]),be<1&&xe?j:(xe||k.notifyWith(u,[F,1,0]),k.resolveWith(u,[F]),!1)},F=k.promise({elem:u,props:g.extend({},h),opts:g.extend(!0,{specialEasing:{},easing:g.easing._default},m),originalProperties:h,originalOptions:m,startTime:qt||Yn(),duration:m.duration,tweens:[],createTween:function(K,j){var G=g.Tween(u,F.opts,K,j,F.opts.specialEasing[K]||F.opts.easing);return F.tweens.push(G),G},stop:function(K){var j=0,G=K?F.tweens.length:0;if(w)return this;for(w=!0;j<G;j++)F.tweens[j].run(1);return K?(k.notifyWith(u,[F,1,0]),k.resolveWith(u,[F,K])):k.rejectWith(u,[F,K]),this}}),W=F.props;for(pi(W,F.opts.specialEasing);D<S;D++)if(y=ct.prefilters[D].call(F,u,W,F.opts),y)return _(y.stop)&&(g._queueHooks(F.elem,F.opts.queue).stop=y.stop.bind(y)),y;return g.map(W,Un,F),_(F.opts.start)&&F.opts.start.call(u,F),F.progress(F.opts.progress).done(F.opts.done,F.opts.complete).fail(F.opts.fail).always(F.opts.always),g.fx.timer(g.extend(N,{elem:u,anim:F,queue:F.opts.queue})),F}g.Animation=g.extend(ct,{tweeners:{"*":[function(u,h){var m=this.createTween(u,h);return cn(m.elem,u,At.exec(h),m),m}]},tweener:function(u,h){_(u)?(h=u,u=["*"]):u=u.match(Xe);for(var m,y=0,w=u.length;y<w;y++)m=u[y],ct.tweeners[m]=ct.tweeners[m]||[],ct.tweeners[m].unshift(h)},prefilters:[hi],prefilter:function(u,h){h?ct.prefilters.unshift(u):ct.prefilters.push(u)}}),g.speed=function(u,h,m){var y=u&&typeof u=="object"?g.extend({},u):{complete:m||!m&&h||_(u)&&u,duration:u,easing:m&&h||h&&!_(h)&&h};return g.fx.off?y.duration=0:typeof y.duration!="number"&&(y.duration in g.fx.speeds?y.duration=g.fx.speeds[y.duration]:y.duration=g.fx.speeds._default),(y.queue==null||y.queue===!0)&&(y.queue="fx"),y.old=y.complete,y.complete=function(){_(y.old)&&y.old.call(this),y.queue&&g.dequeue(this,y.queue)},y},g.fn.extend({fadeTo:function(u,h,m,y){return this.filter(St).css("opacity",0).show().end().animate({opacity:h},u,m,y)},animate:function(u,h,m,y){var w=g.isEmptyObject(u),D=g.speed(h,m,y),S=function(){var k=ct(this,g.extend({},u),D);(w||ce.get(this,"finish"))&&k.stop(!0)};return S.finish=S,w||D.queue===!1?this.each(S):this.queue(D.queue,S)},stop:function(u,h,m){var y=function(w){var D=w.stop;delete w.stop,D(m)};return typeof u!="string"&&(m=h,h=u,u=void 0),h&&this.queue(u||"fx",[]),this.each(function(){var w=!0,D=u!=null&&u+"queueHooks",S=g.timers,k=ce.get(this);if(D)k[D]&&k[D].stop&&y(k[D]);else for(D in k)k[D]&&k[D].stop&&fi.test(D)&&y(k[D]);for(D=S.length;D--;)S[D].elem===this&&(u==null||S[D].queue===u)&&(S[D].anim.stop(m),w=!1,S.splice(D,1));(w||!m)&&g.dequeue(this,u)})},finish:function(u){return u!==!1&&(u=u||"fx"),this.each(function(){var h,m=ce.get(this),y=m[u+"queue"],w=m[u+"queueHooks"],D=g.timers,S=y?y.length:0;for(m.finish=!0,g.queue(this,u,[]),w&&w.stop&&w.stop.call(this,!0),h=D.length;h--;)D[h].elem===this&&D[h].queue===u&&(D[h].anim.stop(!0),D.splice(h,1));for(h=0;h<S;h++)y[h]&&y[h].finish&&y[h].finish.call(this);delete m.finish})}}),g.each(["toggle","show","hide"],function(u,h){var m=g.fn[h];g.fn[h]=function(y,w,D){return y==null||typeof y=="boolean"?m.apply(this,arguments):this.animate(pn(h,!0),y,w,D)}}),g.each({slideDown:pn("show"),slideUp:pn("hide"),slideToggle:pn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(u,h){g.fn[u]=function(m,y,w){return this.animate(h,m,y,w)}}),g.timers=[],g.fx.tick=function(){var u,h=0,m=g.timers;for(qt=Date.now();h<m.length;h++)u=m[h],!u()&&m[h]===u&&m.splice(h--,1);m.length||g.fx.stop(),qt=void 0},g.fx.timer=function(u){g.timers.push(u),g.fx.start()},g.fx.interval=13,g.fx.start=function(){hn||(hn=!0,Dn())},g.fx.stop=function(){hn=null},g.fx.speeds={slow:600,fast:200,_default:400},g.fn.delay=function(u,h){return u=g.fx&&g.fx.speeds[u]||u,h=h||"fx",this.queue(h,function(m,y){var w=e.setTimeout(m,u);y.stop=function(){e.clearTimeout(w)}})},(function(){var u=A.createElement("input"),h=A.createElement("select"),m=h.appendChild(A.createElement("option"));u.type="checkbox",x.checkOn=u.value!=="",x.optSelected=m.selected,u=A.createElement("input"),u.value="t",u.type="radio",x.radioValue=u.value==="t"})();var Kn,Zt=g.expr.attrHandle;g.fn.extend({attr:function(u,h){return Qe(this,g.attr,u,h,arguments.length>1)},removeAttr:function(u){return this.each(function(){g.removeAttr(this,u)})}}),g.extend({attr:function(u,h,m){var y,w,D=u.nodeType;if(!(D===3||D===8||D===2)){if(typeof u.getAttribute>"u")return g.prop(u,h,m);if((D!==1||!g.isXMLDoc(u))&&(w=g.attrHooks[h.toLowerCase()]||(g.expr.match.bool.test(h)?Kn:void 0)),m!==void 0){if(m===null){g.removeAttr(u,h);return}return w&&"set"in w&&(y=w.set(u,m,h))!==void 0?y:(u.setAttribute(h,m+""),m)}return w&&"get"in w&&(y=w.get(u,h))!==null?y:(y=g.find.attr(u,h),y??void 0)}},attrHooks:{type:{set:function(u,h){if(!x.radioValue&&h==="radio"&&Y(u,"input")){var m=u.value;return u.setAttribute("type",h),m&&(u.value=m),h}}}},removeAttr:function(u,h){var m,y=0,w=h&&h.match(Xe);if(w&&u.nodeType===1)for(;m=w[y++];)u.removeAttribute(m)}}),Kn={set:function(u,h,m){return h===!1?g.removeAttr(u,m):u.setAttribute(m,m),m}},g.each(g.expr.match.bool.source.match(/\w+/g),function(u,h){var m=Zt[h]||g.find.attr;Zt[h]=function(y,w,D){var S,k,N=w.toLowerCase();return D||(k=Zt[N],Zt[N]=S,S=m(y,w,D)!=null?N:null,Zt[N]=k),S}});var gi=/^(?:input|select|textarea|button)$/i,mi=/^(?:a|area)$/i;g.fn.extend({prop:function(u,h){return Qe(this,g.prop,u,h,arguments.length>1)},removeProp:function(u){return this.each(function(){delete this[g.propFix[u]||u]})}}),g.extend({prop:function(u,h,m){var y,w,D=u.nodeType;if(!(D===3||D===8||D===2))return(D!==1||!g.isXMLDoc(u))&&(h=g.propFix[h]||h,w=g.propHooks[h]),m!==void 0?w&&"set"in w&&(y=w.set(u,m,h))!==void 0?y:u[h]=m:w&&"get"in w&&(y=w.get(u,h))!==null?y:u[h]},propHooks:{tabIndex:{get:function(u){var h=g.find.attr(u,"tabindex");return h?parseInt(h,10):gi.test(u.nodeName)||mi.test(u.nodeName)&&u.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),x.optSelected||(g.propHooks.selected={get:function(u){var h=u.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(u){var h=u.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),g.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){g.propFix[this.toLowerCase()]=this});function $t(u){var h=u.match(Xe)||[];return h.join(" ")}function Rt(u){return u.getAttribute&&u.getAttribute("class")||""}function An(u){return Array.isArray(u)?u:typeof u=="string"?u.match(Xe)||[]:[]}g.fn.extend({addClass:function(u){var h,m,y,w,D,S;return _(u)?this.each(function(k){g(this).addClass(u.call(this,k,Rt(this)))}):(h=An(u),h.length?this.each(function(){if(y=Rt(this),m=this.nodeType===1&&" "+$t(y)+" ",m){for(D=0;D<h.length;D++)w=h[D],m.indexOf(" "+w+" ")<0&&(m+=w+" ");S=$t(m),y!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(u){var h,m,y,w,D,S;return _(u)?this.each(function(k){g(this).removeClass(u.call(this,k,Rt(this)))}):arguments.length?(h=An(u),h.length?this.each(function(){if(y=Rt(this),m=this.nodeType===1&&" "+$t(y)+" ",m){for(D=0;D<h.length;D++)for(w=h[D];m.indexOf(" "+w+" ")>-1;)m=m.replace(" "+w+" "," ");S=$t(m),y!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(u,h){var m,y,w,D,S=typeof u,k=S==="string"||Array.isArray(u);return _(u)?this.each(function(N){g(this).toggleClass(u.call(this,N,Rt(this),h),h)}):typeof h=="boolean"&&k?h?this.addClass(u):this.removeClass(u):(m=An(u),this.each(function(){if(k)for(D=g(this),w=0;w<m.length;w++)y=m[w],D.hasClass(y)?D.removeClass(y):D.addClass(y);else(u===void 0||S==="boolean")&&(y=Rt(this),y&&ce.set(this,"__className__",y),this.setAttribute&&this.setAttribute("class",y||u===!1?"":ce.get(this,"__className__")||""))}))},hasClass:function(u){var h,m,y=0;for(h=" "+u+" ";m=this[y++];)if(m.nodeType===1&&(" "+$t(Rt(m))+" ").indexOf(h)>-1)return!0;return!1}});var bi=/\r/g;g.fn.extend({val:function(u){var h,m,y,w=this[0];return arguments.length?(y=_(u),this.each(function(D){var S;this.nodeType===1&&(y?S=u.call(this,D,g(this).val()):S=u,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=g.map(S,function(k){return k==null?"":k+""})),h=g.valHooks[this.type]||g.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,S,"value")===void 0)&&(this.value=S))})):w?(h=g.valHooks[w.type]||g.valHooks[w.nodeName.toLowerCase()],h&&"get"in h&&(m=h.get(w,"value"))!==void 0?m:(m=w.value,typeof m=="string"?m.replace(bi,""):m??"")):void 0}}),g.extend({valHooks:{option:{get:function(u){var h=g.find.attr(u,"value");return h??$t(g.text(u))}},select:{get:function(u){var h,m,y,w=u.options,D=u.selectedIndex,S=u.type==="select-one",k=S?null:[],N=S?D+1:w.length;for(D<0?y=N:y=S?D:0;y<N;y++)if(m=w[y],(m.selected||y===D)&&!m.disabled&&(!m.parentNode.disabled||!Y(m.parentNode,"optgroup"))){if(h=g(m).val(),S)return h;k.push(h)}return k},set:function(u,h){for(var m,y,w=u.options,D=g.makeArray(h),S=w.length;S--;)y=w[S],(y.selected=g.inArray(g.valHooks.option.get(y),D)>-1)&&(m=!0);return m||(u.selectedIndex=-1),D}}}}),g.each(["radio","checkbox"],function(){g.valHooks[this]={set:function(u,h){if(Array.isArray(h))return u.checked=g.inArray(g(u).val(),h)>-1}},x.checkOn||(g.valHooks[this].get=function(u){return u.getAttribute("value")===null?"on":u.value})});var en=e.location,Gn={guid:Date.now()},Sn=/\?/;g.parseXML=function(u){var h,m;if(!u||typeof u!="string")return null;try{h=new e.DOMParser().parseFromString(u,"text/xml")}catch{}return m=h&&h.getElementsByTagName("parsererror")[0],(!h||m)&&g.error("Invalid XML: "+(m?g.map(m.childNodes,function(y){return y.textContent}).join(`
`):u)),h};var Xn=/^(?:focusinfocus|focusoutblur)$/,Qn=function(u){u.stopPropagation()};g.extend(g.event,{trigger:function(u,h,m,y){var w,D,S,k,N,F,W,K,j=[m||A],G=p.call(u,"type")?u.type:u,be=p.call(u,"namespace")?u.namespace.split("."):[];if(D=K=S=m=m||A,!(m.nodeType===3||m.nodeType===8)&&!Xn.test(G+g.event.triggered)&&(G.indexOf(".")>-1&&(be=G.split("."),G=be.shift(),be.sort()),N=G.indexOf(":")<0&&"on"+G,u=u[g.expando]?u:new g.Event(G,typeof u=="object"&&u),u.isTrigger=y?2:3,u.namespace=be.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=m),h=h==null?[u]:g.makeArray(h,[u]),W=g.event.special[G]||{},!(!y&&W.trigger&&W.trigger.apply(m,h)===!1))){if(!y&&!W.noBubble&&!E(m)){for(k=W.delegateType||G,Xn.test(k+G)||(D=D.parentNode);D;D=D.parentNode)j.push(D),S=D;S===(m.ownerDocument||A)&&j.push(S.defaultView||S.parentWindow||e)}for(w=0;(D=j[w++])&&!u.isPropagationStopped();)K=D,u.type=w>1?k:W.bindType||G,F=(ce.get(D,"events")||Object.create(null))[u.type]&&ce.get(D,"handle"),F&&F.apply(D,h),F=N&&D[N],F&&F.apply&&tt(D)&&(u.result=F.apply(D,h),u.result===!1&&u.preventDefault());return u.type=G,!y&&!u.isDefaultPrevented()&&(!W._default||W._default.apply(j.pop(),h)===!1)&&tt(m)&&N&&_(m[G])&&!E(m)&&(S=m[N],S&&(m[N]=null),g.event.triggered=G,u.isPropagationStopped()&&K.addEventListener(G,Qn),m[G](),u.isPropagationStopped()&&K.removeEventListener(G,Qn),g.event.triggered=void 0,S&&(m[N]=S)),u.result}},simulate:function(u,h,m){var y=g.extend(new g.Event,m,{type:u,isSimulated:!0});g.event.trigger(y,null,h)}}),g.fn.extend({trigger:function(u,h){return this.each(function(){g.event.trigger(u,h,this)})},triggerHandler:function(u,h){var m=this[0];if(m)return g.event.trigger(u,h,m,!0)}});var yi=/\[\]$/,Jn=/\r?\n/g,vi=/^(?:submit|button|image|reset|file)$/i,_i=/^(?:input|select|textarea|keygen)/i;function Tn(u,h,m,y){var w;if(Array.isArray(h))g.each(h,function(D,S){m||yi.test(u)?y(u,S):Tn(u+"["+(typeof S=="object"&&S!=null?D:"")+"]",S,m,y)});else if(!m&&P(h)==="object")for(w in h)Tn(u+"["+w+"]",h[w],m,y);else y(u,h)}g.param=function(u,h){var m,y=[],w=function(D,S){var k=_(S)?S():S;y[y.length]=encodeURIComponent(D)+"="+encodeURIComponent(k??"")};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!g.isPlainObject(u))g.each(u,function(){w(this.name,this.value)});else for(m in u)Tn(m,u[m],h,w);return y.join("&")},g.fn.extend({serialize:function(){return g.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=g.prop(this,"elements");return u?g.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!g(this).is(":disabled")&&_i.test(this.nodeName)&&!vi.test(u)&&(this.checked||!It.test(u))}).map(function(u,h){var m=g(this).val();return m==null?null:Array.isArray(m)?g.map(m,function(y){return{name:h.name,value:y.replace(Jn,`\r
`)}}):{name:h.name,value:m.replace(Jn,`\r
`)}}).get()}});var Ei=/%20/g,xi=/#.*$/,wi=/([?&])_=[^&]*/,Di=/^(.*?):[ \t]*([^\r\n]*)$/mg,Ai=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Si=/^(?:GET|HEAD)$/,Ti=/^\/\//,Zn={},Cn={},ei="*/".concat("*"),On=A.createElement("a");On.href=en.href;function ti(u){return function(h,m){typeof h!="string"&&(m=h,h="*");var y,w=0,D=h.toLowerCase().match(Xe)||[];if(_(m))for(;y=D[w++];)y[0]==="+"?(y=y.slice(1)||"*",(u[y]=u[y]||[]).unshift(m)):(u[y]=u[y]||[]).push(m)}}function ni(u,h,m,y){var w={},D=u===Cn;function S(k){var N;return w[k]=!0,g.each(u[k]||[],function(F,W){var K=W(h,m,y);if(typeof K=="string"&&!D&&!w[K])return h.dataTypes.unshift(K),S(K),!1;if(D)return!(N=K)}),N}return S(h.dataTypes[0])||!w["*"]&&S("*")}function Mn(u,h){var m,y,w=g.ajaxSettings.flatOptions||{};for(m in h)h[m]!==void 0&&((w[m]?u:y||(y={}))[m]=h[m]);return y&&g.extend(!0,u,y),u}function Ci(u,h,m){for(var y,w,D,S,k=u.contents,N=u.dataTypes;N[0]==="*";)N.shift(),y===void 0&&(y=u.mimeType||h.getResponseHeader("Content-Type"));if(y){for(w in k)if(k[w]&&k[w].test(y)){N.unshift(w);break}}if(N[0]in m)D=N[0];else{for(w in m){if(!N[0]||u.converters[w+" "+N[0]]){D=w;break}S||(S=w)}D=D||S}if(D)return D!==N[0]&&N.unshift(D),m[D]}function Oi(u,h,m,y){var w,D,S,k,N,F={},W=u.dataTypes.slice();if(W[1])for(S in u.converters)F[S.toLowerCase()]=u.converters[S];for(D=W.shift();D;)if(u.responseFields[D]&&(m[u.responseFields[D]]=h),!N&&y&&u.dataFilter&&(h=u.dataFilter(h,u.dataType)),N=D,D=W.shift(),D){if(D==="*")D=N;else if(N!=="*"&&N!==D){if(S=F[N+" "+D]||F["* "+D],!S){for(w in F)if(k=w.split(" "),k[1]===D&&(S=F[N+" "+k[0]]||F["* "+k[0]],S)){S===!0?S=F[w]:F[w]!==!0&&(D=k[0],W.unshift(k[1]));break}}if(S!==!0)if(S&&u.throws)h=S(h);else try{h=S(h)}catch(K){return{state:"parsererror",error:S?K:"No conversion from "+N+" to "+D}}}}return{state:"success",data:h}}g.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:en.href,type:"GET",isLocal:Ai.test(en.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ei,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":g.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(u,h){return h?Mn(Mn(u,g.ajaxSettings),h):Mn(g.ajaxSettings,u)},ajaxPrefilter:ti(Zn),ajaxTransport:ti(Cn),ajax:function(u,h){typeof u=="object"&&(h=u,u=void 0),h=h||{};var m,y,w,D,S,k,N,F,W,K,j=g.ajaxSetup({},h),G=j.context||j,be=j.context&&(G.nodeType||G.jquery)?g(G):g.event,Te=g.Deferred(),xe=g.Callbacks("once memory"),ze=j.statusCode||{},We={},ft={},ht="canceled",Ae={readyState:0,getResponseHeader:function(Ce){var He;if(N){if(!D)for(D={};He=Di.exec(w);)D[He[1].toLowerCase()+" "]=(D[He[1].toLowerCase()+" "]||[]).concat(He[2]);He=D[Ce.toLowerCase()+" "]}return He==null?null:He.join(", ")},getAllResponseHeaders:function(){return N?w:null},setRequestHeader:function(Ce,He){return N==null&&(Ce=ft[Ce.toLowerCase()]=ft[Ce.toLowerCase()]||Ce,We[Ce]=He),this},overrideMimeType:function(Ce){return N==null&&(j.mimeType=Ce),this},statusCode:function(Ce){var He;if(Ce)if(N)Ae.always(Ce[Ae.status]);else for(He in Ce)ze[He]=[ze[He],Ce[He]];return this},abort:function(Ce){var He=Ce||ht;return m&&m.abort(He),Ft(0,He),this}};if(Te.promise(Ae),j.url=((u||j.url||en.href)+"").replace(Ti,en.protocol+"//"),j.type=h.method||h.type||j.method||j.type,j.dataTypes=(j.dataType||"*").toLowerCase().match(Xe)||[""],j.crossDomain==null){k=A.createElement("a");try{k.href=j.url,k.href=k.href,j.crossDomain=On.protocol+"//"+On.host!=k.protocol+"//"+k.host}catch{j.crossDomain=!0}}if(j.data&&j.processData&&typeof j.data!="string"&&(j.data=g.param(j.data,j.traditional)),ni(Zn,j,h,Ae),N)return Ae;F=g.event&&j.global,F&&g.active++===0&&g.event.trigger("ajaxStart"),j.type=j.type.toUpperCase(),j.hasContent=!Si.test(j.type),y=j.url.replace(xi,""),j.hasContent?j.data&&j.processData&&(j.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(j.data=j.data.replace(Ei,"+")):(K=j.url.slice(y.length),j.data&&(j.processData||typeof j.data=="string")&&(y+=(Sn.test(y)?"&":"?")+j.data,delete j.data),j.cache===!1&&(y=y.replace(wi,"$1"),K=(Sn.test(y)?"&":"?")+"_="+Gn.guid+++K),j.url=y+K),j.ifModified&&(g.lastModified[y]&&Ae.setRequestHeader("If-Modified-Since",g.lastModified[y]),g.etag[y]&&Ae.setRequestHeader("If-None-Match",g.etag[y])),(j.data&&j.hasContent&&j.contentType!==!1||h.contentType)&&Ae.setRequestHeader("Content-Type",j.contentType),Ae.setRequestHeader("Accept",j.dataTypes[0]&&j.accepts[j.dataTypes[0]]?j.accepts[j.dataTypes[0]]+(j.dataTypes[0]!=="*"?", "+ei+"; q=0.01":""):j.accepts["*"]);for(W in j.headers)Ae.setRequestHeader(W,j.headers[W]);if(j.beforeSend&&(j.beforeSend.call(G,Ae,j)===!1||N))return Ae.abort();if(ht="abort",xe.add(j.complete),Ae.done(j.success),Ae.fail(j.error),m=ni(Cn,j,h,Ae),!m)Ft(-1,"No Transport");else{if(Ae.readyState=1,F&&be.trigger("ajaxSend",[Ae,j]),N)return Ae;j.async&&j.timeout>0&&(S=e.setTimeout(function(){Ae.abort("timeout")},j.timeout));try{N=!1,m.send(We,Ft)}catch(Ce){if(N)throw Ce;Ft(-1,Ce)}}function Ft(Ce,He,nn,kn){var pt,rn,gt,Mt,Nt,rt=He;N||(N=!0,S&&e.clearTimeout(S),m=void 0,w=kn||"",Ae.readyState=Ce>0?4:0,pt=Ce>=200&&Ce<300||Ce===304,nn&&(Mt=Ci(j,Ae,nn)),!pt&&g.inArray("script",j.dataTypes)>-1&&g.inArray("json",j.dataTypes)<0&&(j.converters["text script"]=function(){}),Mt=Oi(j,Mt,Ae,pt),pt?(j.ifModified&&(Nt=Ae.getResponseHeader("Last-Modified"),Nt&&(g.lastModified[y]=Nt),Nt=Ae.getResponseHeader("etag"),Nt&&(g.etag[y]=Nt)),Ce===204||j.type==="HEAD"?rt="nocontent":Ce===304?rt="notmodified":(rt=Mt.state,rn=Mt.data,gt=Mt.error,pt=!gt)):(gt=rt,(Ce||!rt)&&(rt="error",Ce<0&&(Ce=0))),Ae.status=Ce,Ae.statusText=(He||rt)+"",pt?Te.resolveWith(G,[rn,rt,Ae]):Te.rejectWith(G,[Ae,rt,gt]),Ae.statusCode(ze),ze=void 0,F&&be.trigger(pt?"ajaxSuccess":"ajaxError",[Ae,j,pt?rn:gt]),xe.fireWith(G,[Ae,rt]),F&&(be.trigger("ajaxComplete",[Ae,j]),--g.active||g.event.trigger("ajaxStop")))}return Ae},getJSON:function(u,h,m){return g.get(u,h,m,"json")},getScript:function(u,h){return g.get(u,void 0,h,"script")}}),g.each(["get","post"],function(u,h){g[h]=function(m,y,w,D){return _(y)&&(D=D||w,w=y,y=void 0),g.ajax(g.extend({url:m,type:h,dataType:D,data:y,success:w},g.isPlainObject(m)&&m))}}),g.ajaxPrefilter(function(u){var h;for(h in u.headers)h.toLowerCase()==="content-type"&&(u.contentType=u.headers[h]||"")}),g._evalUrl=function(u,h,m){return g.ajax({url:u,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(y){g.globalEval(y,h,m)}})},g.fn.extend({wrapAll:function(u){var h;return this[0]&&(_(u)&&(u=u.call(this[0])),h=g(u,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var m=this;m.firstElementChild;)m=m.firstElementChild;return m}).append(this)),this},wrapInner:function(u){return _(u)?this.each(function(h){g(this).wrapInner(u.call(this,h))}):this.each(function(){var h=g(this),m=h.contents();m.length?m.wrapAll(u):h.append(u)})},wrap:function(u){var h=_(u);return this.each(function(m){g(this).wrapAll(h?u.call(this,m):u)})},unwrap:function(u){return this.parent(u).not("body").each(function(){g(this).replaceWith(this.childNodes)}),this}}),g.expr.pseudos.hidden=function(u){return!g.expr.pseudos.visible(u)},g.expr.pseudos.visible=function(u){return!!(u.offsetWidth||u.offsetHeight||u.getClientRects().length)},g.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Mi={0:200,1223:204},tn=g.ajaxSettings.xhr();x.cors=!!tn&&"withCredentials"in tn,x.ajax=tn=!!tn,g.ajaxTransport(function(u){var h,m;if(x.cors||tn&&!u.crossDomain)return{send:function(y,w){var D,S=u.xhr();if(S.open(u.type,u.url,u.async,u.username,u.password),u.xhrFields)for(D in u.xhrFields)S[D]=u.xhrFields[D];u.mimeType&&S.overrideMimeType&&S.overrideMimeType(u.mimeType),!u.crossDomain&&!y["X-Requested-With"]&&(y["X-Requested-With"]="XMLHttpRequest");for(D in y)S.setRequestHeader(D,y[D]);h=function(k){return function(){h&&(h=m=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,k==="abort"?S.abort():k==="error"?typeof S.status!="number"?w(0,"error"):w(S.status,S.statusText):w(Mi[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=h(),m=S.onerror=S.ontimeout=h("error"),S.onabort!==void 0?S.onabort=m:S.onreadystatechange=function(){S.readyState===4&&e.setTimeout(function(){h&&m()})},h=h("abort");try{S.send(u.hasContent&&u.data||null)}catch(k){if(h)throw k}},abort:function(){h&&h()}}}),g.ajaxPrefilter(function(u){u.crossDomain&&(u.contents.script=!1)}),g.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(u){return g.globalEval(u),u}}}),g.ajaxPrefilter("script",function(u){u.cache===void 0&&(u.cache=!1),u.crossDomain&&(u.type="GET")}),g.ajaxTransport("script",function(u){if(u.crossDomain||u.scriptAttrs){var h,m;return{send:function(y,w){h=g("<script>").attr(u.scriptAttrs||{}).prop({charset:u.scriptCharset,src:u.url}).on("load error",m=function(D){h.remove(),m=null,D&&w(D.type==="error"?404:200,D.type)}),A.head.appendChild(h[0])},abort:function(){m&&m()}}}});var ii=[],Nn=/(=)\?(?=&|$)|\?\?/;g.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var u=ii.pop()||g.expando+"_"+Gn.guid++;return this[u]=!0,u}}),g.ajaxPrefilter("json jsonp",function(u,h,m){var y,w,D,S=u.jsonp!==!1&&(Nn.test(u.url)?"url":typeof u.data=="string"&&(u.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Nn.test(u.data)&&"data");if(S||u.dataTypes[0]==="jsonp")return y=u.jsonpCallback=_(u.jsonpCallback)?u.jsonpCallback():u.jsonpCallback,S?u[S]=u[S].replace(Nn,"$1"+y):u.jsonp!==!1&&(u.url+=(Sn.test(u.url)?"&":"?")+u.jsonp+"="+y),u.converters["script json"]=function(){return D||g.error(y+" was not called"),D[0]},u.dataTypes[0]="json",w=e[y],e[y]=function(){D=arguments},m.always(function(){w===void 0?g(e).removeProp(y):e[y]=w,u[y]&&(u.jsonpCallback=h.jsonpCallback,ii.push(y)),D&&_(w)&&w(D[0]),D=w=void 0}),"script"}),x.createHTMLDocument=(function(){var u=A.implementation.createHTMLDocument("").body;return u.innerHTML="<form></form><form></form>",u.childNodes.length===2})(),g.parseHTML=function(u,h,m){if(typeof u!="string")return[];typeof h=="boolean"&&(m=h,h=!1);var y,w,D;return h||(x.createHTMLDocument?(h=A.implementation.createHTMLDocument(""),y=h.createElement("base"),y.href=A.location.href,h.head.appendChild(y)):h=A),w=Se.exec(u),D=!m&&[],w?[h.createElement(w[1])]:(w=te([u],h,D),D&&D.length&&g(D).remove(),g.merge([],w.childNodes))},g.fn.load=function(u,h,m){var y,w,D,S=this,k=u.indexOf(" ");return k>-1&&(y=$t(u.slice(k)),u=u.slice(0,k)),_(h)?(m=h,h=void 0):h&&typeof h=="object"&&(w="POST"),S.length>0&&g.ajax({url:u,type:w||"GET",dataType:"html",data:h}).done(function(N){D=arguments,S.html(y?g("<div>").append(g.parseHTML(N)).find(y):N)}).always(m&&function(N,F){S.each(function(){m.apply(this,D||[N.responseText,F,N])})}),this},g.expr.pseudos.animated=function(u){return g.grep(g.timers,function(h){return u===h.elem}).length},g.offset={setOffset:function(u,h,m){var y,w,D,S,k,N,F,W=g.css(u,"position"),K=g(u),j={};W==="static"&&(u.style.position="relative"),k=K.offset(),D=g.css(u,"top"),N=g.css(u,"left"),F=(W==="absolute"||W==="fixed")&&(D+N).indexOf("auto")>-1,F?(y=K.position(),S=y.top,w=y.left):(S=parseFloat(D)||0,w=parseFloat(N)||0),_(h)&&(h=h.call(u,m,g.extend({},k))),h.top!=null&&(j.top=h.top-k.top+S),h.left!=null&&(j.left=h.left-k.left+w),"using"in h?h.using.call(u,j):K.css(j)}},g.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(w){g.offset.setOffset(this,u,w)});var h,m,y=this[0];if(y)return y.getClientRects().length?(h=y.getBoundingClientRect(),m=y.ownerDocument.defaultView,{top:h.top+m.pageYOffset,left:h.left+m.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var u,h,m,y=this[0],w={top:0,left:0};if(g.css(y,"position")==="fixed")h=y.getBoundingClientRect();else{for(h=this.offset(),m=y.ownerDocument,u=y.offsetParent||m.documentElement;u&&(u===m.body||u===m.documentElement)&&g.css(u,"position")==="static";)u=u.parentNode;u&&u!==y&&u.nodeType===1&&(w=g(u).offset(),w.top+=g.css(u,"borderTopWidth",!0),w.left+=g.css(u,"borderLeftWidth",!0))}return{top:h.top-w.top-g.css(y,"marginTop",!0),left:h.left-w.left-g.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&g.css(u,"position")==="static";)u=u.offsetParent;return u||yt})}}),g.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,h){var m=h==="pageYOffset";g.fn[u]=function(y){return Qe(this,function(w,D,S){var k;if(E(w)?k=w:w.nodeType===9&&(k=w.defaultView),S===void 0)return k?k[h]:w[D];k?k.scrollTo(m?k.pageXOffset:S,m?S:k.pageYOffset):w[D]=S},u,y,arguments.length)}}),g.each(["top","left"],function(u,h){g.cssHooks[h]=Hn(x.pixelPosition,function(m,y){if(y)return y=Jt(m,h),Xt.test(y)?g(m).position()[h]+"px":y})}),g.each({Height:"height",Width:"width"},function(u,h){g.each({padding:"inner"+u,content:h,"":"outer"+u},function(m,y){g.fn[y]=function(w,D){var S=arguments.length&&(m||typeof w!="boolean"),k=m||(w===!0||D===!0?"margin":"border");return Qe(this,function(N,F,W){var K;return E(N)?y.indexOf("outer")===0?N["inner"+u]:N.document.documentElement["client"+u]:N.nodeType===9?(K=N.documentElement,Math.max(N.body["scroll"+u],K["scroll"+u],N.body["offset"+u],K["offset"+u],K["client"+u])):W===void 0?g.css(N,F,k):g.style(N,F,W,k)},h,S?w:void 0,S)}})}),g.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(u,h){g.fn[h]=function(m){return this.on(h,m)}}),g.fn.extend({bind:function(u,h,m){return this.on(u,null,h,m)},unbind:function(u,h){return this.off(u,null,h)},delegate:function(u,h,m,y){return this.on(h,u,m,y)},undelegate:function(u,h,m){return arguments.length===1?this.off(u,"**"):this.off(h,u||"**",m)},hover:function(u,h){return this.on("mouseenter",u).on("mouseleave",h||u)}}),g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(u,h){g.fn[h]=function(m,y){return arguments.length>0?this.on(h,null,m,y):this.trigger(h)}});var Ni=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;g.proxy=function(u,h){var m,y,w;if(typeof h=="string"&&(m=u[h],h=u,u=m),!!_(u))return y=s.call(arguments,2),w=function(){return u.apply(h||this,y.concat(s.call(arguments)))},w.guid=u.guid=u.guid||g.guid++,w},g.holdReady=function(u){u?g.readyWait++:g.ready(!0)},g.isArray=Array.isArray,g.parseJSON=JSON.parse,g.nodeName=Y,g.isFunction=_,g.isWindow=E,g.camelCase=qe,g.type=P,g.now=Date.now,g.isNumeric=function(u){var h=g.type(u);return(h==="number"||h==="string")&&!isNaN(u-parseFloat(u))},g.trim=function(u){return u==null?"":(u+"").replace(Ni,"$1")};var ki=e.jQuery,Pi=e.$;return g.noConflict=function(u){return e.$===g&&(e.$=Pi),u&&e.jQuery===g&&(e.jQuery=ki),g},typeof t>"u"&&(e.jQuery=e.$=g),g})})(jquery$2)),jquery$2.exports}var jqueryExports=requireJquery();const jQuery$1=getDefaultExportFromCjs(jqueryExports),src=`/*!
 * Select2 4.1.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by \`banner.start.js\`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
], function () {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the \`_type\` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    var computedEl = window.getComputedStyle(el);

    return (parseFloat(computedEl.height) < el.scrollHeight ||
      parseFloat(computedEl.width) < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\\/\\\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      // Convert the attribute name format (e.g. 'foo-bar') to the dataset
      // property key format (e.g. 'fooBar') as required by the HTML spec.
      var datasetKey = name.replace(/-([a-z])/g, function (_, letter) {
        return letter.toUpperCase();
      });
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return element.dataset[datasetKey]; // Fallback to HTML5 data attribs.
      }
      return element.dataset[datasetKey]; // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results[0].setAttribute('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option[0].setAttribute('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option[0].setAttribute('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results[0].setAttribute('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results[0].setAttribute('aria-expanded', 'true');
      self.$results[0].setAttribute('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results[0].setAttribute('aria-expanded', 'false');
      self.$results[0].setAttribute('aria-hidden', 'true');
      self.$results[0].removeAttribute('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {
            originalEvent: evt,
            data: data
          });
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      var $highlighted = self.getHighlightedResults();
      $highlighted.removeClass('select2-results__option--highlighted');
      $highlighted.each(function () {
        this.setAttribute('aria-selected', 'false');
      });

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element[0].getAttribute('tabindex') != null) {
      this._tabindex = this.$element[0].getAttribute('tabindex');
    }

    if(this.$element[0].getAttribute('title')) {
      $selection[0]
        .setAttribute('title', this.$element[0].getAttribute('title'));
    }
    $selection[0].setAttribute('tabindex', this._tabindex);
    $selection[0].setAttribute('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection[0]
        .setAttribute('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection[0].setAttribute('aria-expanded', 'true');
      self.$selection[0].setAttribute('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection[0].setAttribute('aria-expanded', 'false');
      self.$selection[0].removeAttribute('aria-activedescendant');
      self.$selection[0].removeAttribute('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection[0].setAttribute('tabindex', self._tabindex);
      self.$selection[0].setAttribute('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection[0].setAttribute('tabindex', '-1');
      self.$selection[0].setAttribute('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger \`blur\` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The \`update\` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    var rendered = this.$selection.find('.select2-selection__rendered')[0];
    if(rendered != null) {
      rendered.setAttribute('id', id);
      rendered.setAttribute('role', 'textbox');
      rendered.setAttribute('aria-readonly', 'true');
    }
    this.$selection[0].setAttribute('aria-labelledby', id);
    this.$selection[0].setAttribute('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered[0].removeAttribute('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered[0].setAttribute('title', title);
    } else {
      $rendered[0].removeAttribute('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    var rendered = this.$selection.find('.select2-selection__rendered')[0];
    if(rendered != null) {
      rendered.setAttribute('id', id);
    }

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered[0].removeAttribute('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection
      .find('.select2-selection__rendered')[0]
      .getAttribute('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)[0]
        .setAttribute('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection[0].setAttribute('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var remove = $selection.find('.select2-selection__choice__remove')[0];

      remove.setAttribute('title', removeItem());
      remove.setAttribute('aria-label', removeItem());
      remove.setAttribute('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder !== 'object') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered')[0].setAttribute(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The \`allowClear\` option should be used in combination ' +
          'with the \`placeholder\` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the \`unselect\` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var rendered = this.$selection.find('.select2-selection__rendered')[0];
    var selectionId = null;
    if(rendered != null) {
      selectionId = rendered.getAttribute('id');
    }

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove[0].setAttribute('title', removeAll());
    $remove[0].setAttribute('aria-label', removeAll());
    $remove[0].setAttribute('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search[0].autocomplete = this.options.get('autocomplete');
    this.$search[0].setAttribute('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search[0].setAttribute('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search[0].setAttribute('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search[0].removeAttribute('aria-controls');
      self.$search[0].removeAttribute('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search[0].disabled = false;

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search[0].disabled = true;
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search[0]
          .setAttribute('aria-activedescendant', params.data._resultId);
      } else {
        self.$search[0].removeAttribute('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the \`documentMode\` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated \`keyup\` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the \`keydown\` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search[0]
      .setAttribute('tabindex', this.$selection[0].getAttribute('tabindex'));
    this.$selection[0].setAttribute('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search[0].setAttribute('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search[0].setAttribute('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search[0].getAttribute('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    selectionCssClass.trim().split(' ').forEach(function(cssClass) {
      if(cssClass.length > 0) {
        $selection[0].classList.add(cssClass);
      }
    });

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'require'
], function (require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = Object.assign({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\\u24B6': 'A',
    '\\uFF21': 'A',
    '\\u00C0': 'A',
    '\\u00C1': 'A',
    '\\u00C2': 'A',
    '\\u1EA6': 'A',
    '\\u1EA4': 'A',
    '\\u1EAA': 'A',
    '\\u1EA8': 'A',
    '\\u00C3': 'A',
    '\\u0100': 'A',
    '\\u0102': 'A',
    '\\u1EB0': 'A',
    '\\u1EAE': 'A',
    '\\u1EB4': 'A',
    '\\u1EB2': 'A',
    '\\u0226': 'A',
    '\\u01E0': 'A',
    '\\u00C4': 'A',
    '\\u01DE': 'A',
    '\\u1EA2': 'A',
    '\\u00C5': 'A',
    '\\u01FA': 'A',
    '\\u01CD': 'A',
    '\\u0200': 'A',
    '\\u0202': 'A',
    '\\u1EA0': 'A',
    '\\u1EAC': 'A',
    '\\u1EB6': 'A',
    '\\u1E00': 'A',
    '\\u0104': 'A',
    '\\u023A': 'A',
    '\\u2C6F': 'A',
    '\\uA732': 'AA',
    '\\u00C6': 'AE',
    '\\u01FC': 'AE',
    '\\u01E2': 'AE',
    '\\uA734': 'AO',
    '\\uA736': 'AU',
    '\\uA738': 'AV',
    '\\uA73A': 'AV',
    '\\uA73C': 'AY',
    '\\u24B7': 'B',
    '\\uFF22': 'B',
    '\\u1E02': 'B',
    '\\u1E04': 'B',
    '\\u1E06': 'B',
    '\\u0243': 'B',
    '\\u0182': 'B',
    '\\u0181': 'B',
    '\\u24B8': 'C',
    '\\uFF23': 'C',
    '\\u0106': 'C',
    '\\u0108': 'C',
    '\\u010A': 'C',
    '\\u010C': 'C',
    '\\u00C7': 'C',
    '\\u1E08': 'C',
    '\\u0187': 'C',
    '\\u023B': 'C',
    '\\uA73E': 'C',
    '\\u24B9': 'D',
    '\\uFF24': 'D',
    '\\u1E0A': 'D',
    '\\u010E': 'D',
    '\\u1E0C': 'D',
    '\\u1E10': 'D',
    '\\u1E12': 'D',
    '\\u1E0E': 'D',
    '\\u0110': 'D',
    '\\u018B': 'D',
    '\\u018A': 'D',
    '\\u0189': 'D',
    '\\uA779': 'D',
    '\\u01F1': 'DZ',
    '\\u01C4': 'DZ',
    '\\u01F2': 'Dz',
    '\\u01C5': 'Dz',
    '\\u24BA': 'E',
    '\\uFF25': 'E',
    '\\u00C8': 'E',
    '\\u00C9': 'E',
    '\\u00CA': 'E',
    '\\u1EC0': 'E',
    '\\u1EBE': 'E',
    '\\u1EC4': 'E',
    '\\u1EC2': 'E',
    '\\u1EBC': 'E',
    '\\u0112': 'E',
    '\\u1E14': 'E',
    '\\u1E16': 'E',
    '\\u0114': 'E',
    '\\u0116': 'E',
    '\\u00CB': 'E',
    '\\u1EBA': 'E',
    '\\u011A': 'E',
    '\\u0204': 'E',
    '\\u0206': 'E',
    '\\u1EB8': 'E',
    '\\u1EC6': 'E',
    '\\u0228': 'E',
    '\\u1E1C': 'E',
    '\\u0118': 'E',
    '\\u1E18': 'E',
    '\\u1E1A': 'E',
    '\\u0190': 'E',
    '\\u018E': 'E',
    '\\u24BB': 'F',
    '\\uFF26': 'F',
    '\\u1E1E': 'F',
    '\\u0191': 'F',
    '\\uA77B': 'F',
    '\\u24BC': 'G',
    '\\uFF27': 'G',
    '\\u01F4': 'G',
    '\\u011C': 'G',
    '\\u1E20': 'G',
    '\\u011E': 'G',
    '\\u0120': 'G',
    '\\u01E6': 'G',
    '\\u0122': 'G',
    '\\u01E4': 'G',
    '\\u0193': 'G',
    '\\uA7A0': 'G',
    '\\uA77D': 'G',
    '\\uA77E': 'G',
    '\\u24BD': 'H',
    '\\uFF28': 'H',
    '\\u0124': 'H',
    '\\u1E22': 'H',
    '\\u1E26': 'H',
    '\\u021E': 'H',
    '\\u1E24': 'H',
    '\\u1E28': 'H',
    '\\u1E2A': 'H',
    '\\u0126': 'H',
    '\\u2C67': 'H',
    '\\u2C75': 'H',
    '\\uA78D': 'H',
    '\\u24BE': 'I',
    '\\uFF29': 'I',
    '\\u00CC': 'I',
    '\\u00CD': 'I',
    '\\u00CE': 'I',
    '\\u0128': 'I',
    '\\u012A': 'I',
    '\\u012C': 'I',
    '\\u0130': 'I',
    '\\u00CF': 'I',
    '\\u1E2E': 'I',
    '\\u1EC8': 'I',
    '\\u01CF': 'I',
    '\\u0208': 'I',
    '\\u020A': 'I',
    '\\u1ECA': 'I',
    '\\u012E': 'I',
    '\\u1E2C': 'I',
    '\\u0197': 'I',
    '\\u24BF': 'J',
    '\\uFF2A': 'J',
    '\\u0134': 'J',
    '\\u0248': 'J',
    '\\u24C0': 'K',
    '\\uFF2B': 'K',
    '\\u1E30': 'K',
    '\\u01E8': 'K',
    '\\u1E32': 'K',
    '\\u0136': 'K',
    '\\u1E34': 'K',
    '\\u0198': 'K',
    '\\u2C69': 'K',
    '\\uA740': 'K',
    '\\uA742': 'K',
    '\\uA744': 'K',
    '\\uA7A2': 'K',
    '\\u24C1': 'L',
    '\\uFF2C': 'L',
    '\\u013F': 'L',
    '\\u0139': 'L',
    '\\u013D': 'L',
    '\\u1E36': 'L',
    '\\u1E38': 'L',
    '\\u013B': 'L',
    '\\u1E3C': 'L',
    '\\u1E3A': 'L',
    '\\u0141': 'L',
    '\\u023D': 'L',
    '\\u2C62': 'L',
    '\\u2C60': 'L',
    '\\uA748': 'L',
    '\\uA746': 'L',
    '\\uA780': 'L',
    '\\u01C7': 'LJ',
    '\\u01C8': 'Lj',
    '\\u24C2': 'M',
    '\\uFF2D': 'M',
    '\\u1E3E': 'M',
    '\\u1E40': 'M',
    '\\u1E42': 'M',
    '\\u2C6E': 'M',
    '\\u019C': 'M',
    '\\u24C3': 'N',
    '\\uFF2E': 'N',
    '\\u01F8': 'N',
    '\\u0143': 'N',
    '\\u00D1': 'N',
    '\\u1E44': 'N',
    '\\u0147': 'N',
    '\\u1E46': 'N',
    '\\u0145': 'N',
    '\\u1E4A': 'N',
    '\\u1E48': 'N',
    '\\u0220': 'N',
    '\\u019D': 'N',
    '\\uA790': 'N',
    '\\uA7A4': 'N',
    '\\u01CA': 'NJ',
    '\\u01CB': 'Nj',
    '\\u24C4': 'O',
    '\\uFF2F': 'O',
    '\\u00D2': 'O',
    '\\u00D3': 'O',
    '\\u00D4': 'O',
    '\\u1ED2': 'O',
    '\\u1ED0': 'O',
    '\\u1ED6': 'O',
    '\\u1ED4': 'O',
    '\\u00D5': 'O',
    '\\u1E4C': 'O',
    '\\u022C': 'O',
    '\\u1E4E': 'O',
    '\\u014C': 'O',
    '\\u1E50': 'O',
    '\\u1E52': 'O',
    '\\u014E': 'O',
    '\\u022E': 'O',
    '\\u0230': 'O',
    '\\u00D6': 'O',
    '\\u022A': 'O',
    '\\u1ECE': 'O',
    '\\u0150': 'O',
    '\\u01D1': 'O',
    '\\u020C': 'O',
    '\\u020E': 'O',
    '\\u01A0': 'O',
    '\\u1EDC': 'O',
    '\\u1EDA': 'O',
    '\\u1EE0': 'O',
    '\\u1EDE': 'O',
    '\\u1EE2': 'O',
    '\\u1ECC': 'O',
    '\\u1ED8': 'O',
    '\\u01EA': 'O',
    '\\u01EC': 'O',
    '\\u00D8': 'O',
    '\\u01FE': 'O',
    '\\u0186': 'O',
    '\\u019F': 'O',
    '\\uA74A': 'O',
    '\\uA74C': 'O',
    '\\u0152': 'OE',
    '\\u01A2': 'OI',
    '\\uA74E': 'OO',
    '\\u0222': 'OU',
    '\\u24C5': 'P',
    '\\uFF30': 'P',
    '\\u1E54': 'P',
    '\\u1E56': 'P',
    '\\u01A4': 'P',
    '\\u2C63': 'P',
    '\\uA750': 'P',
    '\\uA752': 'P',
    '\\uA754': 'P',
    '\\u24C6': 'Q',
    '\\uFF31': 'Q',
    '\\uA756': 'Q',
    '\\uA758': 'Q',
    '\\u024A': 'Q',
    '\\u24C7': 'R',
    '\\uFF32': 'R',
    '\\u0154': 'R',
    '\\u1E58': 'R',
    '\\u0158': 'R',
    '\\u0210': 'R',
    '\\u0212': 'R',
    '\\u1E5A': 'R',
    '\\u1E5C': 'R',
    '\\u0156': 'R',
    '\\u1E5E': 'R',
    '\\u024C': 'R',
    '\\u2C64': 'R',
    '\\uA75A': 'R',
    '\\uA7A6': 'R',
    '\\uA782': 'R',
    '\\u24C8': 'S',
    '\\uFF33': 'S',
    '\\u1E9E': 'S',
    '\\u015A': 'S',
    '\\u1E64': 'S',
    '\\u015C': 'S',
    '\\u1E60': 'S',
    '\\u0160': 'S',
    '\\u1E66': 'S',
    '\\u1E62': 'S',
    '\\u1E68': 'S',
    '\\u0218': 'S',
    '\\u015E': 'S',
    '\\u2C7E': 'S',
    '\\uA7A8': 'S',
    '\\uA784': 'S',
    '\\u24C9': 'T',
    '\\uFF34': 'T',
    '\\u1E6A': 'T',
    '\\u0164': 'T',
    '\\u1E6C': 'T',
    '\\u021A': 'T',
    '\\u0162': 'T',
    '\\u1E70': 'T',
    '\\u1E6E': 'T',
    '\\u0166': 'T',
    '\\u01AC': 'T',
    '\\u01AE': 'T',
    '\\u023E': 'T',
    '\\uA786': 'T',
    '\\uA728': 'TZ',
    '\\u24CA': 'U',
    '\\uFF35': 'U',
    '\\u00D9': 'U',
    '\\u00DA': 'U',
    '\\u00DB': 'U',
    '\\u0168': 'U',
    '\\u1E78': 'U',
    '\\u016A': 'U',
    '\\u1E7A': 'U',
    '\\u016C': 'U',
    '\\u00DC': 'U',
    '\\u01DB': 'U',
    '\\u01D7': 'U',
    '\\u01D5': 'U',
    '\\u01D9': 'U',
    '\\u1EE6': 'U',
    '\\u016E': 'U',
    '\\u0170': 'U',
    '\\u01D3': 'U',
    '\\u0214': 'U',
    '\\u0216': 'U',
    '\\u01AF': 'U',
    '\\u1EEA': 'U',
    '\\u1EE8': 'U',
    '\\u1EEE': 'U',
    '\\u1EEC': 'U',
    '\\u1EF0': 'U',
    '\\u1EE4': 'U',
    '\\u1E72': 'U',
    '\\u0172': 'U',
    '\\u1E76': 'U',
    '\\u1E74': 'U',
    '\\u0244': 'U',
    '\\u24CB': 'V',
    '\\uFF36': 'V',
    '\\u1E7C': 'V',
    '\\u1E7E': 'V',
    '\\u01B2': 'V',
    '\\uA75E': 'V',
    '\\u0245': 'V',
    '\\uA760': 'VY',
    '\\u24CC': 'W',
    '\\uFF37': 'W',
    '\\u1E80': 'W',
    '\\u1E82': 'W',
    '\\u0174': 'W',
    '\\u1E86': 'W',
    '\\u1E84': 'W',
    '\\u1E88': 'W',
    '\\u2C72': 'W',
    '\\u24CD': 'X',
    '\\uFF38': 'X',
    '\\u1E8A': 'X',
    '\\u1E8C': 'X',
    '\\u24CE': 'Y',
    '\\uFF39': 'Y',
    '\\u1EF2': 'Y',
    '\\u00DD': 'Y',
    '\\u0176': 'Y',
    '\\u1EF8': 'Y',
    '\\u0232': 'Y',
    '\\u1E8E': 'Y',
    '\\u0178': 'Y',
    '\\u1EF6': 'Y',
    '\\u1EF4': 'Y',
    '\\u01B3': 'Y',
    '\\u024E': 'Y',
    '\\u1EFE': 'Y',
    '\\u24CF': 'Z',
    '\\uFF3A': 'Z',
    '\\u0179': 'Z',
    '\\u1E90': 'Z',
    '\\u017B': 'Z',
    '\\u017D': 'Z',
    '\\u1E92': 'Z',
    '\\u1E94': 'Z',
    '\\u01B5': 'Z',
    '\\u0224': 'Z',
    '\\u2C7F': 'Z',
    '\\u2C6B': 'Z',
    '\\uA762': 'Z',
    '\\u24D0': 'a',
    '\\uFF41': 'a',
    '\\u1E9A': 'a',
    '\\u00E0': 'a',
    '\\u00E1': 'a',
    '\\u00E2': 'a',
    '\\u1EA7': 'a',
    '\\u1EA5': 'a',
    '\\u1EAB': 'a',
    '\\u1EA9': 'a',
    '\\u00E3': 'a',
    '\\u0101': 'a',
    '\\u0103': 'a',
    '\\u1EB1': 'a',
    '\\u1EAF': 'a',
    '\\u1EB5': 'a',
    '\\u1EB3': 'a',
    '\\u0227': 'a',
    '\\u01E1': 'a',
    '\\u00E4': 'a',
    '\\u01DF': 'a',
    '\\u1EA3': 'a',
    '\\u00E5': 'a',
    '\\u01FB': 'a',
    '\\u01CE': 'a',
    '\\u0201': 'a',
    '\\u0203': 'a',
    '\\u1EA1': 'a',
    '\\u1EAD': 'a',
    '\\u1EB7': 'a',
    '\\u1E01': 'a',
    '\\u0105': 'a',
    '\\u2C65': 'a',
    '\\u0250': 'a',
    '\\uA733': 'aa',
    '\\u00E6': 'ae',
    '\\u01FD': 'ae',
    '\\u01E3': 'ae',
    '\\uA735': 'ao',
    '\\uA737': 'au',
    '\\uA739': 'av',
    '\\uA73B': 'av',
    '\\uA73D': 'ay',
    '\\u24D1': 'b',
    '\\uFF42': 'b',
    '\\u1E03': 'b',
    '\\u1E05': 'b',
    '\\u1E07': 'b',
    '\\u0180': 'b',
    '\\u0183': 'b',
    '\\u0253': 'b',
    '\\u24D2': 'c',
    '\\uFF43': 'c',
    '\\u0107': 'c',
    '\\u0109': 'c',
    '\\u010B': 'c',
    '\\u010D': 'c',
    '\\u00E7': 'c',
    '\\u1E09': 'c',
    '\\u0188': 'c',
    '\\u023C': 'c',
    '\\uA73F': 'c',
    '\\u2184': 'c',
    '\\u24D3': 'd',
    '\\uFF44': 'd',
    '\\u1E0B': 'd',
    '\\u010F': 'd',
    '\\u1E0D': 'd',
    '\\u1E11': 'd',
    '\\u1E13': 'd',
    '\\u1E0F': 'd',
    '\\u0111': 'd',
    '\\u018C': 'd',
    '\\u0256': 'd',
    '\\u0257': 'd',
    '\\uA77A': 'd',
    '\\u01F3': 'dz',
    '\\u01C6': 'dz',
    '\\u24D4': 'e',
    '\\uFF45': 'e',
    '\\u00E8': 'e',
    '\\u00E9': 'e',
    '\\u00EA': 'e',
    '\\u1EC1': 'e',
    '\\u1EBF': 'e',
    '\\u1EC5': 'e',
    '\\u1EC3': 'e',
    '\\u1EBD': 'e',
    '\\u0113': 'e',
    '\\u1E15': 'e',
    '\\u1E17': 'e',
    '\\u0115': 'e',
    '\\u0117': 'e',
    '\\u00EB': 'e',
    '\\u1EBB': 'e',
    '\\u011B': 'e',
    '\\u0205': 'e',
    '\\u0207': 'e',
    '\\u1EB9': 'e',
    '\\u1EC7': 'e',
    '\\u0229': 'e',
    '\\u1E1D': 'e',
    '\\u0119': 'e',
    '\\u1E19': 'e',
    '\\u1E1B': 'e',
    '\\u0247': 'e',
    '\\u025B': 'e',
    '\\u01DD': 'e',
    '\\u24D5': 'f',
    '\\uFF46': 'f',
    '\\u1E1F': 'f',
    '\\u0192': 'f',
    '\\uA77C': 'f',
    '\\u24D6': 'g',
    '\\uFF47': 'g',
    '\\u01F5': 'g',
    '\\u011D': 'g',
    '\\u1E21': 'g',
    '\\u011F': 'g',
    '\\u0121': 'g',
    '\\u01E7': 'g',
    '\\u0123': 'g',
    '\\u01E5': 'g',
    '\\u0260': 'g',
    '\\uA7A1': 'g',
    '\\u1D79': 'g',
    '\\uA77F': 'g',
    '\\u24D7': 'h',
    '\\uFF48': 'h',
    '\\u0125': 'h',
    '\\u1E23': 'h',
    '\\u1E27': 'h',
    '\\u021F': 'h',
    '\\u1E25': 'h',
    '\\u1E29': 'h',
    '\\u1E2B': 'h',
    '\\u1E96': 'h',
    '\\u0127': 'h',
    '\\u2C68': 'h',
    '\\u2C76': 'h',
    '\\u0265': 'h',
    '\\u0195': 'hv',
    '\\u24D8': 'i',
    '\\uFF49': 'i',
    '\\u00EC': 'i',
    '\\u00ED': 'i',
    '\\u00EE': 'i',
    '\\u0129': 'i',
    '\\u012B': 'i',
    '\\u012D': 'i',
    '\\u00EF': 'i',
    '\\u1E2F': 'i',
    '\\u1EC9': 'i',
    '\\u01D0': 'i',
    '\\u0209': 'i',
    '\\u020B': 'i',
    '\\u1ECB': 'i',
    '\\u012F': 'i',
    '\\u1E2D': 'i',
    '\\u0268': 'i',
    '\\u0131': 'i',
    '\\u24D9': 'j',
    '\\uFF4A': 'j',
    '\\u0135': 'j',
    '\\u01F0': 'j',
    '\\u0249': 'j',
    '\\u24DA': 'k',
    '\\uFF4B': 'k',
    '\\u1E31': 'k',
    '\\u01E9': 'k',
    '\\u1E33': 'k',
    '\\u0137': 'k',
    '\\u1E35': 'k',
    '\\u0199': 'k',
    '\\u2C6A': 'k',
    '\\uA741': 'k',
    '\\uA743': 'k',
    '\\uA745': 'k',
    '\\uA7A3': 'k',
    '\\u24DB': 'l',
    '\\uFF4C': 'l',
    '\\u0140': 'l',
    '\\u013A': 'l',
    '\\u013E': 'l',
    '\\u1E37': 'l',
    '\\u1E39': 'l',
    '\\u013C': 'l',
    '\\u1E3D': 'l',
    '\\u1E3B': 'l',
    '\\u017F': 'l',
    '\\u0142': 'l',
    '\\u019A': 'l',
    '\\u026B': 'l',
    '\\u2C61': 'l',
    '\\uA749': 'l',
    '\\uA781': 'l',
    '\\uA747': 'l',
    '\\u01C9': 'lj',
    '\\u24DC': 'm',
    '\\uFF4D': 'm',
    '\\u1E3F': 'm',
    '\\u1E41': 'm',
    '\\u1E43': 'm',
    '\\u0271': 'm',
    '\\u026F': 'm',
    '\\u24DD': 'n',
    '\\uFF4E': 'n',
    '\\u01F9': 'n',
    '\\u0144': 'n',
    '\\u00F1': 'n',
    '\\u1E45': 'n',
    '\\u0148': 'n',
    '\\u1E47': 'n',
    '\\u0146': 'n',
    '\\u1E4B': 'n',
    '\\u1E49': 'n',
    '\\u019E': 'n',
    '\\u0272': 'n',
    '\\u0149': 'n',
    '\\uA791': 'n',
    '\\uA7A5': 'n',
    '\\u01CC': 'nj',
    '\\u24DE': 'o',
    '\\uFF4F': 'o',
    '\\u00F2': 'o',
    '\\u00F3': 'o',
    '\\u00F4': 'o',
    '\\u1ED3': 'o',
    '\\u1ED1': 'o',
    '\\u1ED7': 'o',
    '\\u1ED5': 'o',
    '\\u00F5': 'o',
    '\\u1E4D': 'o',
    '\\u022D': 'o',
    '\\u1E4F': 'o',
    '\\u014D': 'o',
    '\\u1E51': 'o',
    '\\u1E53': 'o',
    '\\u014F': 'o',
    '\\u022F': 'o',
    '\\u0231': 'o',
    '\\u00F6': 'o',
    '\\u022B': 'o',
    '\\u1ECF': 'o',
    '\\u0151': 'o',
    '\\u01D2': 'o',
    '\\u020D': 'o',
    '\\u020F': 'o',
    '\\u01A1': 'o',
    '\\u1EDD': 'o',
    '\\u1EDB': 'o',
    '\\u1EE1': 'o',
    '\\u1EDF': 'o',
    '\\u1EE3': 'o',
    '\\u1ECD': 'o',
    '\\u1ED9': 'o',
    '\\u01EB': 'o',
    '\\u01ED': 'o',
    '\\u00F8': 'o',
    '\\u01FF': 'o',
    '\\u0254': 'o',
    '\\uA74B': 'o',
    '\\uA74D': 'o',
    '\\u0275': 'o',
    '\\u0153': 'oe',
    '\\u01A3': 'oi',
    '\\u0223': 'ou',
    '\\uA74F': 'oo',
    '\\u24DF': 'p',
    '\\uFF50': 'p',
    '\\u1E55': 'p',
    '\\u1E57': 'p',
    '\\u01A5': 'p',
    '\\u1D7D': 'p',
    '\\uA751': 'p',
    '\\uA753': 'p',
    '\\uA755': 'p',
    '\\u24E0': 'q',
    '\\uFF51': 'q',
    '\\u024B': 'q',
    '\\uA757': 'q',
    '\\uA759': 'q',
    '\\u24E1': 'r',
    '\\uFF52': 'r',
    '\\u0155': 'r',
    '\\u1E59': 'r',
    '\\u0159': 'r',
    '\\u0211': 'r',
    '\\u0213': 'r',
    '\\u1E5B': 'r',
    '\\u1E5D': 'r',
    '\\u0157': 'r',
    '\\u1E5F': 'r',
    '\\u024D': 'r',
    '\\u027D': 'r',
    '\\uA75B': 'r',
    '\\uA7A7': 'r',
    '\\uA783': 'r',
    '\\u24E2': 's',
    '\\uFF53': 's',
    '\\u00DF': 's',
    '\\u015B': 's',
    '\\u1E65': 's',
    '\\u015D': 's',
    '\\u1E61': 's',
    '\\u0161': 's',
    '\\u1E67': 's',
    '\\u1E63': 's',
    '\\u1E69': 's',
    '\\u0219': 's',
    '\\u015F': 's',
    '\\u023F': 's',
    '\\uA7A9': 's',
    '\\uA785': 's',
    '\\u1E9B': 's',
    '\\u24E3': 't',
    '\\uFF54': 't',
    '\\u1E6B': 't',
    '\\u1E97': 't',
    '\\u0165': 't',
    '\\u1E6D': 't',
    '\\u021B': 't',
    '\\u0163': 't',
    '\\u1E71': 't',
    '\\u1E6F': 't',
    '\\u0167': 't',
    '\\u01AD': 't',
    '\\u0288': 't',
    '\\u2C66': 't',
    '\\uA787': 't',
    '\\uA729': 'tz',
    '\\u24E4': 'u',
    '\\uFF55': 'u',
    '\\u00F9': 'u',
    '\\u00FA': 'u',
    '\\u00FB': 'u',
    '\\u0169': 'u',
    '\\u1E79': 'u',
    '\\u016B': 'u',
    '\\u1E7B': 'u',
    '\\u016D': 'u',
    '\\u00FC': 'u',
    '\\u01DC': 'u',
    '\\u01D8': 'u',
    '\\u01D6': 'u',
    '\\u01DA': 'u',
    '\\u1EE7': 'u',
    '\\u016F': 'u',
    '\\u0171': 'u',
    '\\u01D4': 'u',
    '\\u0215': 'u',
    '\\u0217': 'u',
    '\\u01B0': 'u',
    '\\u1EEB': 'u',
    '\\u1EE9': 'u',
    '\\u1EEF': 'u',
    '\\u1EED': 'u',
    '\\u1EF1': 'u',
    '\\u1EE5': 'u',
    '\\u1E73': 'u',
    '\\u0173': 'u',
    '\\u1E77': 'u',
    '\\u1E75': 'u',
    '\\u0289': 'u',
    '\\u24E5': 'v',
    '\\uFF56': 'v',
    '\\u1E7D': 'v',
    '\\u1E7F': 'v',
    '\\u028B': 'v',
    '\\uA75F': 'v',
    '\\u028C': 'v',
    '\\uA761': 'vy',
    '\\u24E6': 'w',
    '\\uFF57': 'w',
    '\\u1E81': 'w',
    '\\u1E83': 'w',
    '\\u0175': 'w',
    '\\u1E87': 'w',
    '\\u1E85': 'w',
    '\\u1E98': 'w',
    '\\u1E89': 'w',
    '\\u2C73': 'w',
    '\\u24E7': 'x',
    '\\uFF58': 'x',
    '\\u1E8B': 'x',
    '\\u1E8D': 'x',
    '\\u24E8': 'y',
    '\\uFF59': 'y',
    '\\u1EF3': 'y',
    '\\u00FD': 'y',
    '\\u0177': 'y',
    '\\u1EF9': 'y',
    '\\u0233': 'y',
    '\\u1E8F': 'y',
    '\\u00FF': 'y',
    '\\u1EF7': 'y',
    '\\u1E99': 'y',
    '\\u1EF5': 'y',
    '\\u01B4': 'y',
    '\\u024F': 'y',
    '\\u1EFF': 'y',
    '\\u24E9': 'z',
    '\\uFF5A': 'z',
    '\\u017A': 'z',
    '\\u1E91': 'z',
    '\\u017C': 'z',
    '\\u017E': 'z',
    '\\u1E93': 'z',
    '\\u1E95': 'z',
    '\\u01B6': 'z',
    '\\u0225': 'z',
    '\\u0240': 'z',
    '\\u2C6C': 'z',
    '\\uA763': 'z',
    '\\u0386': '\\u0391',
    '\\u0388': '\\u0395',
    '\\u0389': '\\u0397',
    '\\u038A': '\\u0399',
    '\\u03AA': '\\u0399',
    '\\u038C': '\\u039F',
    '\\u038E': '\\u03A5',
    '\\u03AB': '\\u03A5',
    '\\u038F': '\\u03A9',
    '\\u03AC': '\\u03B1',
    '\\u03AD': '\\u03B5',
    '\\u03AE': '\\u03B7',
    '\\u03AF': '\\u03B9',
    '\\u03CA': '\\u03B9',
    '\\u0390': '\\u03B9',
    '\\u03CC': '\\u03BF',
    '\\u03CD': '\\u03C5',
    '\\u03CB': '\\u03C5',
    '\\u03B0': '\\u03C5',
    '\\u03CE': '\\u03C9',
    '\\u03C2': '\\u03C3',
    '\\u2019': '\\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The \`current\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The \`query\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element[0].multiple) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element[0].multiple) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option[0].disabled,
        selected: $option[0].selected,
        title: $option[0].title
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option[0].label,
        children: [],
        title: $option[0].title
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    if (item.children) {
        item.children = item.children.map(
            SelectAdapter.prototype._normalizeItem
        );
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (results && results.results && Array.isArray(results.results)) {
          results.results = results.results.map(
            AjaxAdapter.prototype._normalizeItem
          );
        } else {
          if (self.options.get('debug') && window.console && console.error) {
            // Check to make sure that the response included a \`results\` key.
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '\`results\` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request && 'status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option[0].setAttribute('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option[0].setAttribute('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown[0].setAttribute('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search[0].autocomplete = this.options.get('autocomplete');
    this.$search[0].setAttribute('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated \`keyup\` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search[0].setAttribute('tabindex', 0);
      self.$search[0].setAttribute('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search[0].setAttribute('tabindex', -1);
      self.$search[0].removeAttribute('aria-controls');
      self.$search[0].removeAttribute('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search[0]
          .setAttribute('aria-activedescendant', params.data._resultId);
      } else {
        self.$search[0].removeAttribute('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder !== 'object') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown[0].setAttribute('class', $container[0].getAttribute('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    dropdownCssClass.trim().split(' ').forEach(function(cssClass) {
      if(cssClass.length > 0) {
        $dropdown[0].classList.add(cssClass);
      }
    });

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\\u0000-\\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element[0].lang;
    var elementClosest = $element.closest('[lang]');
    var parentLanguage = elementClosest[0] ? elementClosest[0].lang : null;

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }
    var camelKey = key.replace(/-([a-z])/g, upperCaseLetter);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e[0].multiple;
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e[0].disabled;
    }

    if (this.options.autocomplete == null && $e[0].autocomplete) {
      this.options.autocomplete = $e[0].autocomplete;
    }

    if (this.options.dir === null) {
      var dirValue = $e[0].getAttribute('dir');

      if (dirValue) {
        this.options.dir = dirValue;
      } else {
        var closestDirValue = $e.closest('[dir]').getAttribute('dir');

        if (closestDirValue) {
          this.options.dir = closestDirValue;
        } else {
          this.options.dir = 'ltr';
        }
      }
    }

    $e[0].disabled = this.options.disabled;
    $e[0].multiple = this.options.multiple;

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-select2-tags\` attribute has been changed to ' +
          'use the \`data-data\` and \`data-tags="true"\` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-ajax-url\` attribute has been changed to ' +
          '\`data-ajax--url\` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e[0].setAttribute('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with \`data-\`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after \`data-\`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's \`dataset\` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element[0].getAttribute('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element[0].setAttribute('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element[0].setAttribute('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';
    var element = $element[0];

    if (element != null && element.getAttribute('id') != null) {
      id = element.getAttribute('id');
    } else if (element != null && element.getAttribute('name') != null) {
      id = element.getAttribute('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\\.|\\[|\\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element[0].getAttribute('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element[0].disabled);

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("enable")\` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element[0].disabled' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element[0].disabled = disabled;
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using \`select2("data")\`. You ' +
        'should consider setting the value instead using \`$element.val()\`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("val")\` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element[0].setAttribute('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element[0].setAttribute('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container[0].setAttribute('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\\'' + options + '\\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning \`this\`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
`;new Function("module","require","window","jQuery",src)({},()=>jQuery$1,window,jQuery$1);function initSelect2(){jQuery$1(".fos-select2").select2({placeholder:"Select a fos"})}function initForm(){jQuery$1(document).on("click","#form_reset_button",function(){resetForm(jQuery$1("#filter_form"))});const n=[["selectAll","attributeform-"],["selectAllAllocations","allocationform-"],["selectAll","userform-"],["selectAll","users"],["selectAll","noteform-"],["selectAll","grantform-"],["selectAll","pubform-"],["selectAll","grantdownloadform-"]];for(const e of n)jQuery$1("#"+e[0]).click(function(){jQuery$1("input[name^='"+e[1]+"']").prop("checked",jQuery$1(this).prop("checked"))}),jQuery$1("input[name^='"+e[1]+"']").click(function(){jQuery$1(this).attr("id")!=e[0]&&jQuery$1("#"+e[0]).prop("checked",!1)})}function resetForm(n){n.find("input:text, input:password, input:file, select, textarea").val(""),n.find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected")}const reFormattedNumeric=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,reHtml=/<([^>]*>)/g,reRegexCharacters=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),reDate=/^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,reNewLines=/[\r\n\u2028]/g,isoTimezone=/[T\s]\d{2}.*?(Z|[+-]\d{2}(?::?\d{2})?)$/;var regex=Object.freeze({__proto__:null,isoTimezone,reDate,reFormattedNumeric,reHtml,reNewLines,reRegexCharacters});const maxStrLen=Math.pow(2,28);let _normalize=function(n,e){if(typeof n!="string")return n;var t=n.normalize?n.normalize("NFD"):n;return t.length!==n.length?(e===!0?n+" ":"")+t.replace(/[\u0300-\u036f]/g,""):t},_stripHtml=function(n,e=""){if(!n||typeof n!="string")return n;if(n.length>maxStrLen)throw new Error("Exceeded max str len");let t,r=n.replace(reHtml,e);do t=r,r=r.replace(/<script/i,"");while(r!==t);return t},_escapeHtml=function(n){let e=Array.isArray(n)?n.join(","):n;return typeof e=="string"?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):e};function escapeRegex(n){return n.replace(reRegexCharacters,"\\$1")}function escapeHtml(n){var e=typeof n;if(e==="function"){_escapeHtml=n;return}else if(e==="string"||Array.isArray(n))return _escapeHtml(n);return n}function normalize(n,e){var t=typeof n;if(t!=="function")return _normalize(n,e);_normalize=n}function stripHtml(n,e){const t=typeof n;if(t==="function"){_stripHtml=n;return}else if(t==="string")return _stripHtml(n,e);return n}var string=Object.freeze({__proto__:null,escapeHtml,escapeRegex,normalize,stripHtml});const _re_dic={};function intVal(n){var e=parseInt(n,10);return!isNaN(e)&&isFinite(n)?e:null}function numToDecimal(n,e){return _re_dic[e]||(_re_dic[e]=new RegExp(escapeRegex(e),"g")),typeof n=="string"&&e!=="."?n.replace(/\./g,"").replace(_re_dic[e],"."):n}var conv=Object.freeze({__proto__:null,intVal,numToDecimal});function arrayLike(n){return n&&typeof n!="string"&&n.length!==void 0&&n.nodeType===void 0}function dom(n){return n&&typeof n=="object"&&n._isDom}function element(n){return typeof n=="object"&&n.nodeName}function empty(n){return!n||n===!0||n==="-"}function html(n){return empty(n)||typeof n=="string"}function htmlNum(n,e,t,r){return r&&empty(n)?!0:typeof n=="string"&&n.match(/<(input|select)/i)?null:html(n)&&num$1(stripHtml(n),e,t,r)?!0:null}function jquery(n){return n&&typeof n.jquery=="string"}function num$1(n,e,t,r){let a=typeof n;return a==="number"||a==="bigint"||r&&empty(n)?!0:(e&&a==="string"&&(n=numToDecimal(n,e)),t&&a==="string"&&(n=n.replace(reFormattedNumeric,"")),!isNaN(parseFloat(n))&&isFinite(n))}function plainObject(n){if(typeof n!="object"||n===null)return!1;let e=Object.getPrototypeOf(n);return e===null||e===Object.prototype}var is=Object.freeze({__proto__:null,arrayLike,dom,element,empty,html,htmlNum,jquery,num:num$1,plainObject});function each$1(n,e){if(!n)return;let t=Object.keys(n);for(let r=0;r<t.length;r++){let a=t[r];e(a,n[a],r)}}function assign(n,...e){let t=Object(n);for(let r=0;r<e.length;r++){let a=e[r];if(a!=null)for(let s in a){let o=a[s];s==="__proto__"||t===o||o!==void 0&&(t[s]=o)}}return t}function assignDeep(n,...e){if(!n)return{};for(let t=0;t<e.length;t++){let r=e[t];if(r)for(const[a,s]of Object.entries(r))Array.isArray(s)?(Array.isArray(n[a])||(n[a]=[]),assignDeep(n[a],s)):plainObject(s)?(plainObject(n[a])||(n[a]={}),assignDeep(n[a],s)):r[a]!==void 0&&(n[a]=r[a])}return n}function assignDeepObjects(n,e,t=!1){let r;for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r=e[a],plainObject(r)?(plainObject(n[a])||(n[a]={}),assignDeep(n[a],r)):t&&a!=="data"&&a!=="aaData"&&Array.isArray(r)?n[a]=r.slice():n[a]=r);return n}function map$1$1(n,e){let t=[];return each$1(n,(r,a)=>{t.push(e(r,a))}),t}var object=Object.freeze({__proto__:null,assign,assignDeep,assignDeepObjects,each:each$1,map:map$1$1});const defaults$5={cache:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",headers:{},traditional:!1,url:location.href};function ajax(n){let e=new XMLHttpRequest,t=assign({},defaults$5,n),r=queryParams(t),a=httpMethod(t),s=null;return t.submitAs==="json"&&t.data&&(t.data=JSON.stringify(t.data),t.contentType||(t.contentType="application/json; charset=utf-8")),e.open(a,t.url+(r?(t.url.includes("?")?"&":"?")+r:""),!0,t.username||null,t.password||null),t.contentType&&!(t.data instanceof FormData)&&e.setRequestHeader("Content-Type",t.contentType),t.headers&&!t.headers["X-Requested-With"]&&!isCrossDomain(t.url)&&(t.headers["X-Requested-With"]="XMLHttpRequest"),t.dataType==="json"&&t.headers&&!t.headers.accepts&&(t.headers.Accept="application/json, text/javascript, */*; q=0.01"),each$1(t.headers,(o,l)=>{e.setRequestHeader(o,l)}),t.data instanceof FormData?s=t.data:a!=="GET"&&t.data&&(typeof t.data=="string"?s=t.data:(s=serialize(t.data,t.traditional),s=convertSpaces(s,t),t.data=s)),e.onreadystatechange=function(){if(e.readyState!=4)return;let o=e.responseText,l="success";if(e.status!==0){if(e.status===204||a==="HEAD"?l="nocontent":e.status===304?l="notmodified":e.status>=400&&(l="error"),t.dataType==="json")try{o=JSON.parse(o)}catch{l="parsererror"}else if(!t.dataType)try{o=JSON.parse(o)}catch{}l==="success"?callback$1(t.success,o,l,e):callback$1(t.error,e,l,e.statusText),callback$1(t.complete,e,l)}},t.beforeSend&&t.beforeSend.call(t,e,t)===!1?(e.abort(),e):(e.send(s),e)}ajax.defaults=defaults$5;ajax.serialize=serialize;function callback$1(n,e,t,r){if(!n)return;let a=Array.isArray(n)?n:[n];for(let s=0;s<a.length;s++)a[s](e,t,r)}function convertSpaces(n,e){return(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0?n.replace(/%20/g,"+"):n}function isCrossDomain(n){return new URL(n,window.location.origin).origin!==window.location.origin}function httpMethod(n){let e="GET";return n.type&&(e=n.type),n.method&&(e=n.method),e.toUpperCase()}function queryParams(n){let e=[];return httpMethod(n)==="GET"&&e.push(serialize(n.data,n.traditional)),httpMethod(n)==="DELETE"&&(n.deleteBody===void 0||n.deleteBody===!0)&&(e.push(serialize(n.data,n.traditional)),delete n.data),n.cache===!1&&e.push(serialize({_:+new Date})),convertSpaces(e.filter(t=>!!t).join("&"),n)}function serialize(n,e=!1){var t=[];return n==null?"":(serializeNested(t,n,e),t.join("&"))}function serializeNested(n,e,t,r=""){let a=Array.isArray(e);for(let s in e){let o=e[s],l=Array.isArray(o)||!t&&plainObject(o);if(r){let c=!a||l?s:"";s=t?r:r+"["+c+"]"}!r&&a?serializeAdd(n,o.name,o.value):l?serializeNested(n,o,t,s):serializeAdd(n,s,o)}}function serializeAdd(n,e,t){let r=typeof t=="function"?t():t;n.push(encodeURIComponent(e)+"="+encodeURIComponent(r===null?"":r))}function allUnique(n){if(n.length<2)return!0;for(var e=n.slice().sort(),t=e[0],r=1,a=e.length;r<a;r++){if(e[r]===t)return!1;t=e[r]}return!0}function flatten(n,e){if(Array.isArray(e)||arrayLike(e))for(var t=0;t<e.length;t++)flatten(n,e[t]);else n.push(e);return n}function intersection(n,e){return n.filter(t=>e.includes(t))}function pluck(n,e,t){let r=[],a=0,s=n.length;if(t!==void 0)for(;a<s;a++)n[a]&&n[a][e]&&r.push(n[a][e][t]);else for(;a<s;a++)n[a]&&r.push(n[a][e]);return r}function pluckOrder(n,e,t,r){let a=[],s=0,o=e.length;if(r!==void 0)for(;s<o;s++)n[e[s]]&&n[e[s]][t]&&a.push(n[e[s]][t][r]);else for(;s<o;s++)n[e[s]]&&a.push(n[e[s]][t]);return a}function range(n,e){var t=[],r;e===void 0?(e=0,r=n):(r=e,e=n);for(var a=e;a<r;a++)t.push(a);return t}function removeEmpty(n){for(var e=[],t=0,r=n.length;t<r;t++)n[t]&&e.push(n[t]);return e}function selectiveJoin(n,e){if(typeof e=="number")return""+n[e];if(e.length===0)return"";let t=""+n[e[0]];for(let r=1;r<e.length;r++)t+="  "+n[e[r]];return t}function unique(n){if(Array.from&&Set)return Array.from(new Set(n));if(allUnique(n))return n.slice();var e=[],t,r,a=n.length,s,o=0;e:for(r=0;r<a;r++){for(t=n[r],s=0;s<o;s++)if(e[s]===t)continue e;e.push(t),o++}return e}var array=Object.freeze({__proto__:null,flatten,intersection,pluck,pluckOrder,range,removeEmpty,selectiveJoin,unique});const __reArray=/\[.*?\]$/,__reFn=/\(\)$/;function splitObjNotation(n){return(n.match(/(\\.|[^.])+/g)||[""]).map(function(t){return t.replace(/\\\./g,".")})}function get$1(n){if(n===null)return function(e){return e};if(typeof n=="function")return function(e,t,r,a){return n(e,t,r,a)};if(typeof n=="string"&&(n.indexOf(".")!==-1||n.indexOf("[")!==-1||n.indexOf("(")!==-1)){let e=function(t,r,a){let s,o,l,c;if(a!==""){let d=splitObjNotation(a);for(let f=0,p=d.length;f<p;f++){if(s=d[f].match(__reArray),o=d[f].match(__reFn),s){if(d[f]=d[f].replace(__reArray,""),d[f]!==""&&(t=t[d[f]]),l=[],d.splice(0,f+1),c=d.join("."),Array.isArray(t))for(let v=0,x=t.length;v<x;v++)l.push(e(t[v],r,c));let b=s[0].substring(1,s[0].length-1);t=b===""?l:l.join(b);break}else if(o){d[f]=d[f].replace(__reFn,""),t=t[d[f]]();continue}if(t===null||t[d[f]]===null)return null;if(t===void 0||t[d[f]]===void 0)return;t=t[d[f]]}}return t};return function(t,r){return e(t,r,n)}}else if(plainObject(n)){let e={};return each$1(n,function(t,r){r&&(e[t]=get$1(r))}),function(t,r,a,s){let o=e[r]||e._;return o!==void 0?o(t,r,a,s):t}}else return function(e){return e[n]}}function set$1(n){if(n===null)return function(){};if(typeof n=="function")return function(e,t,r){n(e,"set",t,r)};if(typeof n=="string"&&(n.indexOf(".")!==-1||n.indexOf("[")!==-1||n.indexOf("(")!==-1)){let e=function(t,r,a){let s=splitObjNotation(a),o,l=s[s.length-1],c,d,f,p;for(let b=0,v=s.length-1;b<v;b++){if(s[b]==="__proto__"||s[b]==="constructor")throw new Error("Cannot set prototype values");if(c=s[b].match(__reArray),d=s[b].match(__reFn),c){if(s[b]=s[b].replace(__reArray,""),t[s[b]]=[],o=s.slice(),o.splice(0,b+1),p=o.join("."),Array.isArray(r))for(let x=0,_=r.length;x<_;x++)f={},e(f,r[x],p),t[s[b]].push(f);else t[s[b]]=r;return}else d&&(s[b]=s[b].replace(__reFn,""),t=t[s[b]](r));(t[s[b]]===null||t[s[b]]===void 0)&&(t[s[b]]={}),t=t[s[b]]}l.match(__reFn)?t=t[l.replace(__reFn,"")](r):t[l.replace(__reArray,"")]=r};return function(t,r){return e(t,r,n)}}else return plainObject(n)?set$1(n._):function(e,t){e[n]=t}}var data=Object.freeze({__proto__:null,get:get$1,set:set$1}),__bootstrap,__foundation,__luxon$1,__moment$1,__dateTime,__dataTable,__jquery;function external(n,e){var t=typeof n=="string"?e:n,r=typeof e=="string"?e:n;if(t===void 0&&typeof r=="string")switch(r){case"lib":case"jq":return __jquery!==void 0?__jquery:window.jQuery||null;case"win":return window;case"datatable":return __dataTable;case"datetime":return __dateTime;case"luxon":return __luxon$1||window.luxon||null;case"moment":return __moment$1||window.moment||null;case"bootstrap":return __bootstrap||window.bootstrap||null;case"foundation":return __foundation||window.Foundation||null;default:return null}r==="lib"||r==="jq"||t&&t.fn&&t.fn.jquery?(__jquery=t,jQuerySetup()):r==="datatable"||t&&t.isDataTable?__dataTable=t:r==="win"||t&&t.document?(window=t,document=t.document):r==="datetime"||t&&t.type==="DateTime"?__dateTime=t:r==="luxon"||t&&t.FixedOffsetZone?__luxon$1=t:r==="moment"||t&&t.isMoment?__moment$1=t:r==="bootstrap"||t&&t.Modal&&t.Modal.NAME==="modal"?__bootstrap=t:(r==="foundation"||t&&t.Reveal)&&(__foundation=t)}function jQuerySetup(){!__dataTable||!__jquery||(__dataTable.$=__jquery,__jquery.fn.dataTable=__dataTable,__jquery.fn.DataTable=function(n){return new __dataTable(this.toArray(),n)},__jquery.fn.dataTableSettings=__dataTable.ext.settings,__jquery.fn.dataTableExt=__dataTable.ext,each$1(__dataTable,function(n,e){__jquery.fn.DataTable[n]=e}))}function debounce$1(n,e=250){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{n.call(this,...r)},e)}}function throttle(n,e=200){let t,r;return function(...a){const s=+new Date;t&&s<t+e?(clearTimeout(r),r=setTimeout(()=>{t=void 0,n.call(this,...a)},e)):(t=s,n.call(this,...a))}}var timer=Object.freeze({__proto__:null,debounce:debounce$1,throttle});function check$1(n,e){let t=external("datatable");for(var r=e?e.split("."):t.ext.version.split("."),a=n.split("."),s,o,l=0,c=a.length;l<c;l++)if(s=parseInt(r[l],10)||0,o=parseInt(a[l],10)||0,s!==o)return s>o;return!0}var version$1=Object.freeze({__proto__:null,check:check$1}),util={ajax,array,conv,data,debounce:debounce$1,diacritics:normalize,escapeHtml,escapeRegex,external,get:get$1,is,object,regex,set:set$1,string,stripHtml,throttle,timer,unique,version:version$1};let _uidCounter=1;const _eventStore=[];function getUid(n){return n._event_uid||(n._event_uid=_uidCounter++),n._event_uid}function get(n){let e=n._event_uid;return!e||!_eventStore[e]?null:_eventStore[e]}function set$2(n,e){let t=getUid(n);_eventStore[t]===void 0&&(_eventStore[t]=[]),_eventStore[t].push(e)}function remove$1(n,e){let t=get(n);if(!t)return;let r=t.indexOf(e);r!==-1&&t.splice(r,1)}const _mouseEvents=["click","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function setEventProp(n,e,t){Object.defineProperty(n,e,{configurable:!0,get(){return t}})}function delegateTarget(n,e,t){let r=Array.from(n.querySelectorAll(e)),a=t.target;for(;a&&a!==this;a=a.parentNode)for(let s of r)if(s===a)return a}function parseEventName(n){if(!n)return{eventName:null,namespaces:[]};let e=n.split("."),t=e.shift(),r=!1,a=!1;return t==="mouseenter"?(t="mouseover",r=!0):t==="mouseleave"?(t="mouseout",r=!0):t==="focus"?(t="focusin",a=!0):t==="blur"?(t="focusout",a=!0):t==="ready"&&(t="DOMContentLoaded"),{eventName:t,isFocus:a,isHover:r,namespaces:e}}function add(n,e,t,r,a){let s=external("jq");if(s){let p=a?"one":"on";r?s(n)[p](e,r,t):s(n)[p](e,t);return}let{eventName:o,namespaces:l,isFocus:c,isHover:d}=parseEventName(e);if(!o)return;if(n===document&&o==="DOMContentLoaded"&&e.includes("ready")&&document.readyState==="complete"){t(new Event("DOMContentLoaded"));return}let f=function(p){let b=n;if(p.namespace&&!intersection(l,p.namespace.split(".")).length||!r&&(c&&p.target!==n||d&&p.relatedTarget&&n.contains(p.relatedTarget)))return;if(r){let x=delegateTarget(n,r,p);if(!x||d&&p.relatedTarget&&x.contains(p.relatedTarget))return;b=x}setEventProp(p,"currentTarget",b),setEventProp(p,"delegateTarget",n),setEventProp(p,"relatedTarget",p.relatedTarget);let v=t.apply(b,[p,...p._args||[]]);a&&remove(n,o,t,r),v===!1&&(p.preventDefault(),p.stopPropagation()),p.result=v};f.delegateSelector=r,f.original=t,f.one=a,f.type=o,f.namespaces=l,set$2(n,f),n.addEventListener(o,f)}function remove(n,e,t,r){let a=external("jq");if(a){r?a(n).off(e,r,t):a(n).off(e,t);return}let{eventName:s,namespaces:o}=parseEventName(e),l=[],c=get(n);c!==null&&(s&&r&&t?l=c.filter(d=>d.type===s&&d.delegateSelector===r&&d.original===t):s&&r?l=c.filter(d=>d.type===s&&d.delegateSelector===r):s&&t?l=c.filter(d=>d.type===s&&d.original===t):s?l=c.filter(d=>d.type===s):l=c,o.length&&(l=l.filter(d=>d.namespaces.filter(f=>o.includes(f)).length===o.length)),l.forEach(d=>{remove$1(n,d),n.removeEventListener(d.type,d)}))}function trigger(n,e,t=!1,r=[],a=null,s=!1){let o=external("jq");if(o){let p=t?"trigger":"triggerHandler",b=o.Event(e);return each$1(a,(v,x)=>{setEventProp(b,v,x)}),o(n)[p](b,r||[]),s?(b.defaultPrevented=b.isDefaultPrevented(),b):!b.isDefaultPrevented()}let{eventName:l,namespaces:c}=parseEventName(e);if(!l)return!1;let f=_mouseEvents.includes(l.toLowerCase())?new MouseEvent(l,{bubbles:t,cancelable:!0}):new Event(l,{bubbles:t,cancelable:!0});return setEventProp(f,"namespace",c.join(".")),setEventProp(f,"_args",r||[]),each$1(a,(p,b)=>setEventProp(f,p,b)),n.dispatchEvent(f),s?f:!f.defaultPrevented}var win={height(){var n;return((n=document.querySelector("html"))===null||n===void 0?void 0:n.clientHeight)||0},off(n,e=null){remove(window,n,e,null)},on(n,e){add(window,n,e,null,!1)},one(n,e){add(window,n,e,null,!0)},scrollLeft(n){return n!==void 0&&(window.scrollX=n),window.scrollX},scrollTop(n){return n!==void 0&&(window.scrollY=n),window.scrollY},width(){var n;return((n=document.querySelector("html"))===null||n===void 0?void 0:n.clientWidth)||0}};function create$3(n){let e=document.createElement(n);return new Dom(e)}function select(n){return new Dom(n)}class Dom{constructor(e){this.length=0,this._isDom=!0,e&&this.add(e)}add(e,t=!0){if(e)if(typeof e=="string"){let r=Array.from(document.querySelectorAll(e));addArray(this,r)}else if(e instanceof Dom)addArray(this,e.get());else if(typeof e=="object"&&!e.nodeName&&e.length!==void 0){let r=e;for(let a=0;a<r.length;a++)addArray(this,r[a]);t=!1}else addArray(this,e);return t&&this.sort(),this}append(e){if(!e)return this;arrayLike(e)||(e=[e]);let t=flatten([],e).filter(r=>!!r);return t.find(r=>typeof r=="string")?this.each(r=>{for(let a=0;a<t.length;a++)typeof t[a]=="string"?r.insertAdjacentHTML("beforeend",t[a]):r.append(t[a])}):this.each(r=>{let a=new DocumentFragment;for(let s=0;s<t.length;s++)a.append(t[s]);r.append(a)})}appendTo(e){return(e instanceof Dom?e:new Dom(e)).append(this),this}attr(e,t){return typeof e=="string"&&t===void 0?this.count()?this[0].getAttribute(e):null:this.each(r=>{typeof e=="string"?t!=null&&r.setAttribute(e,typeof t=="string"?t:t.toString()):each$1(e,(a,s)=>{s!=null&&r.setAttribute(a,s)})})}attrRemove(e){return this.each(t=>t.removeAttribute(e))}blur(){return this.each(e=>e.blur())}children(e){return this.map(t=>{let r=Array.from(t.children);return e?r.filter(a=>a.matches(e)):r})}classAdd(e){if(!e)return this;let t=stringArrays(e);return this.each(r=>{t.filter(a=>a).forEach(a=>r.classList.add(a))})}classHas(e){return this.count()?this[0].classList.contains(e):!1}classRemove(e){if(!e)return this;let t=stringArrays(e);return this.each(r=>{t.filter(a=>a).forEach(a=>r.classList.remove(a))})}classToggle(e,t){let r=Array.isArray(e)?e:e.split(" ");return this.each(a=>{r.filter(s=>s).forEach(s=>a.classList.toggle(s,t))})}clone(e=!1){return this.map(t=>t.cloneNode(e))}closest(e){return typeof e=="string"?this.map(t=>t.closest(e)):this.map(t=>{for(;t.parentElement;){if(t.parentElement===e)return e;t=t.parentElement}return null})}contains(e){return this.find(e).count()!==0}count(){return this.length}css(e,t){return typeof e=="string"&&t===void 0?this.length?getComputedStyle(this[0])[e]:null:this.each(r=>{typeof e=="string"?r.style[e]=t:Object.assign(r.style,e)})}data(e,t){if(!e){let r={};return this.count()&&util.object.each(this[0].dataset,(a,s)=>{r[a]=dataConvert(s)}),r}return typeof e=="string"&&t===void 0?this.length?dataConvert(this[0].dataset[e]):null:(typeof e=="string"?this.each(r=>r.dataset[e]=JSON.stringify(t)):each$1(e,(r,a)=>{this.each(s=>s.dataset[r]=JSON.stringify(a))}),this)}detach(){return this.each(e=>e.remove())}detachChildren(){return this.each(e=>{e.replaceChildren()})}each(e){for(let t=0;t<this.length;t++){let r=this[t];e.call(r,r,t)}return this}eachReverse(e){for(let t=this.length-1;t>=0;t--){let r=this[t];e.call(r,r,t)}return this}empty(){return this.each(e=>{var t;if(e.replaceChildren)e.replaceChildren();else for(;e.childNodes.length;)(t=e.firstChild)===null||t===void 0||t.remove()})}eq(e){return e<this.count()?new Dom(this.get(e)):new Dom}get(e){return e!==void 0?this[e]:Array.from(this)}focus(){return this.each(e=>e.focus())}filter(e){return this.map(t=>e===void 0?t:typeof e=="function"?e(t)?t:null:typeof e!="string"?arrayLike(e)?Array.from(e).includes(t)?t:null:e===t?t:null:!t.matches(e)||!t.parentNode&&(e.match(/:\w+-child/)||e.match(/:\w+-of-type/))?null:t)}find(e){if(e===null)return new Dom;if(typeof e=="string")return this.map(a=>Array.from(a.querySelectorAll(e)));let t=e instanceof Dom?e.get():e,r=!1;return this.each(a=>{new Dom(t).closest(a).count()&&(r=!0)}),new Dom(r?t:[])}first(){return new Dom(this.length?this[0]:null)}height(e){if(!this.count())return 0;if(e===void 0||e==="withPadding"||e==="withBorder"||e==="withMargin"||e==="inner"||e==="outer"){let t=this[0],r=window.getComputedStyle(this[0]),a=t.getBoundingClientRect().height;if(!e||e==="content"){let s=t.offsetHeight-parseFloat(r.borderTop)-parseFloat(r.borderBottom)-t.clientHeight;return a-parseFloat(r.paddingTop)-parseFloat(r.paddingBottom)-parseFloat(r.borderTop)-parseFloat(r.borderBottom)-s}else return e==="withPadding"||e==="inner"?a-parseFloat(r.borderTop)-parseFloat(r.borderBottom):e==="withBorder"?a:a+parseFloat(r.marginTop)+parseFloat(r.marginBottom)}else return this.each(t=>t.style.height=typeof e=="string"?e:e+"px")}hide(){return this.each(e=>{e.style.display="none"})}html(e){return e!==void 0?this.each(t=>{t.innerHTML=e}):this.count()?this[0].innerHTML:null}is(e){return this.filter(e).count()>0}isAttached(){return this.count()===0?!1:document.body.contains(this[0])}isVisible(){if(this.count()===0)return!1;let e=this[0];return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}index(){if(this.count()){let e=this[0];return Array.from(e.parentNode.children).indexOf(e)}return-1}insertAfter(e){let t=elementArray(e);return this.eachReverse(r=>{t.forEach(a=>{var s;return(s=a?.parentNode)===null||s===void 0?void 0:s.insertBefore(r,a.nextSibling)})})}insertBefore(e){let t=elementArray(e);return this.each(r=>{t.forEach(a=>{var s;return(s=a?.parentNode)===null||s===void 0?void 0:s.insertBefore(r,a)})})}last(){let e=this;return new Dom(e.length?e[e.length-1]:null)}map(e){let t=new Dom;return this.each(r=>{t.add(e(r),!1)}),t}mapTo(e){let t=[];return this.each((r,a)=>t.push(e(r,a))),t}off(e,t,r){let{handler:a,names:s,selector:o}=normaliseEventParams(e,t,r);return this.each(l=>{s.forEach(c=>{remove(l,c,a,o)})})}offset(){if(!this.count())return{top:0,left:0};let e=this[0].getBoundingClientRect(),t=document.documentElement;return{top:e.top+window.pageYOffset-t.clientTop,left:e.left+window.pageXOffset-t.clientLeft}}offsetParent(){return this.map(e=>e.offsetParent||document.body)}on(e,t,r){let{handler:a,names:s,selector:o}=normaliseEventParams(e,t,r);return this.each(l=>{s.filter(c=>c!==null).forEach(c=>{add(l,c,a,o,!1)})})}one(e,t,r){let{handler:a,names:s,selector:o}=normaliseEventParams(e,t,r);return this.each(l=>{s.filter(c=>c!==null).forEach(c=>{add(l,c,a,o,!0)})})}parent(e){return this.map(t=>{let r=t.parentElement;return e?r?.matches(e)?r:null:r})}position(){if(!this.count())return{top:0,left:0};let e=this[0],{marginTop:t,marginLeft:r}=getComputedStyle(e);return{top:e.offsetTop-parseInt(t),left:e.offsetLeft-parseInt(r)}}prepend(e){return this.each(t=>{e instanceof Dom?Array.from(e).reverse().forEach(a=>t.prepend(a)):typeof e=="string"?t.insertAdjacentHTML("afterbegin",e):t.prepend(e)})}prependTo(e){return e instanceof Dom?e.prepend(this):new Dom(e).prepend(this),this}prop(e,t){return typeof e=="string"&&t===void 0?this.count()?this[0][e]:null:this.each(r=>{r[e]=t})}propRemove(e){return this.each(t=>{delete t[e]})}remove(){return this.each(e=>e.remove())}replaceWith(e){return this.each(t=>{e instanceof Dom?t.replaceWith(...e.get()):t.replaceWith(e)})}scrollLeft(e){return e===void 0?this.count()?this[0].scrollLeft:0:this.each(t=>t.scrollLeft=e)}scrollTop(e){return e===void 0?this.count()?this[0].scrollTop:0:this.each(t=>t.scrollTop=e)}siblings(){return this.map(e=>e.parentElement?Array.from(e.parentElement.children).filter(t=>t!==e):[])}show(){return this.each(e=>{e.style.display="block"})}sort(){return Array.prototype.sort.call(this,documentOrder),this}text(e){return e===void 0?this.count()?this[0].textContent:null:this.each(t=>{t.textContent=e})}transition(e,t,r,a){if(!this.count())return this;if(!t&&t!==0&&(t=400),r||(r=""),a||(a=()=>{}),Dom.transitions&&t!==0){let s=this[0];s._dom_tra&&(clearTimeout(s._dom_tra),delete s._dom_tra),setTimeout(()=>{this.css("transition","all "+t+"ms "+r),this.css(e)},0),s._dom_tra=setTimeout(()=>{delete s._dom_tra,this.css("transition",""),a.call(this)},t)}else this.css(e),a.call(this);return this}trigger(e,t=!0,r=null,a=null,s=!1){let{names:o}=normaliseEventParams(e),l=[];return this.each(c=>{o.filter(d=>d!==null).forEach(d=>{l.push(trigger(c,d,t,r,a,s))})}),l}val(e){if(e===void 0){if(!this.count())return null;let t=this[0];return t.options&&t.multiple?Array.from(t.options).filter(r=>r.selected).map(r=>r.value):t.value}return this.each(t=>{if(t.options&&t.multiple){let r=Array.isArray(e)?e:[e];Array.from(t.options).forEach(a=>a.selected=r.includes(a.value))}else t.value=e})}width(e){if(!this.count())return 0;if(e===void 0||e==="withPadding"||e==="withBorder"||e==="withMargin"||e==="inner"||e==="outer"){let t=this[0],r=window.getComputedStyle(t),a=t.getBoundingClientRect().width;if(!e||e==="content"){let s=t.offsetWidth-parseFloat(r.borderLeft)-parseFloat(r.borderRight)-t.clientWidth;return a-parseFloat(r.paddingLeft)-parseFloat(r.paddingRight)-parseFloat(r.borderLeft)-parseFloat(r.borderRight)-s}else return e==="withPadding"||e==="inner"?a-parseFloat(r.borderLeft)-parseFloat(r.borderRight):e==="withBorder"?a:a+parseFloat(r.marginLeft)+parseFloat(r.marginRight)}else return this.each(t=>t.style.width=typeof e=="string"?e:e+"px")}}Dom.c=create$3;Dom.create=create$3;Dom.s=select;Dom.select=select;Dom.transitions=!0;Dom.w=win;Dom.prototype.addClass=Dom.prototype.classAdd;Dom.prototype.hasClass=Dom.prototype.classHas;Dom.prototype.removeClass=Dom.prototype.classRemove;function dataConvert(n){if(n===void 0)return null;try{return JSON.parse(n)}catch{return n}}function normaliseEventParams(n,e,t){let r,a,s=n?n.split(" ").map(o=>o.trim()):[null];return typeof e=="string"?(r=e,a=t):(r=null,a=e),{handler:a,names:s,selector:r}}function documentOrder(n,e){if(n===e)return 0;let t=n.compareDocumentPosition(e);return t&Node.DOCUMENT_POSITION_DISCONNECTED?document.body.contains(n)?-1:document.body.contains(e)?1:0:t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS?1:0}function elementArray(n){return dom(n)?n.get():Array.isArray(n)?n:[n]}function addArray(n,e){if(util.is.arrayLike(e))for(var t=0;t<e.length;t++){let r=e[t];r!=null&&(n[n.length]=r,n.length++)}else e!=null&&(n[n.length]=e,n.length++)}function stringArrays(n){let e=[],t=function(r){e.push.apply(e,r.split(" "))};return Array.isArray(n)?n.forEach(r=>t(r)):t(n),e}const features={},legacy=[];function register$2(n,e,t=""){features[n]=e,t&&legacy.push({cFeature:t,fnInit:e})}var classes$1={container:"dt-container",empty:{row:"dt-empty"},info:{container:"dt-info"},layout:{row:"dt-layout-row",cell:"dt-layout-cell",tableRow:"dt-layout-table",tableCell:"",start:"dt-layout-start",end:"dt-layout-end",full:"dt-layout-full"},length:{container:"dt-length",select:"dt-input"},order:{canAsc:"dt-orderable-asc",canDesc:"dt-orderable-desc",isAsc:"dt-ordering-asc",isDesc:"dt-ordering-desc",none:"dt-orderable-none",position:"sorting_"},processing:{container:"dt-processing"},scrolling:{body:"dt-scroll-body",container:"dt-scroll",footer:{self:"dt-scroll-foot",inner:"dt-scroll-footInner"},header:{self:"dt-scroll-head",inner:"dt-scroll-headInner"}},search:{container:"dt-search",input:"dt-input"},table:"dataTable",tbody:{cell:"",row:""},thead:{cell:"",row:""},tfoot:{cell:"",row:""},paging:{active:"current",button:"dt-paging-button",container:"dt-paging",disabled:"disabled",nav:""}};function pagingNumbers(n,e,t,r){let a=[],s=Math.floor(t/2),o=r?2:1,l=r?1:0;return e<=t?a=range(0,e):t===1?a=[n]:t===3?n<=1?a=[0,1,"ellipsis"]:n>=e-2?(a=range(e-2,e),a.unshift("ellipsis")):a=["ellipsis",n,"ellipsis"]:n<=s?(a=range(0,t-o),a.push("ellipsis"),r&&a.push(e-1)):n>=e-1-s?(a=range(e-(t-o),e),a.unshift("ellipsis"),r&&a.unshift(0)):(a=range(n-s+o,n+s-l),a.push("ellipsis"),a.unshift("ellipsis"),r&&(a.push(e-1),a.unshift(0))),a}var pager={simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(){return["numbers"]},simple_numbers:function(){return["previous","numbers","next"]},full_numbers:function(){return["first","previous","numbers","next","last"]},first_last:function(){return["first","last"]},first_last_numbers:function(){return["first","numbers","last"]},_numbers:pagingNumbers,numbers_length:7};const footer=(n,e,t)=>{e.classAdd(t.tfoot.cell)},header=(n,e,t)=>{e.classAdd(t.thead.cell),n.features.ordering||e.classAdd(t.order.none);var r=n.titleRow,a=e.closest("thead").find("tr"),s=e.parent().index();e.attr("data-dt-order")==="disable"||e.parent().attr("data-dt-order")==="disable"||r===!0&&s!==0||r===!1&&s!==a.count()-1||typeof r=="number"&&s!==r||Dom.s(n.table).on("order.dt.DT column-visibility.dt.DT",function(o,l,c){if(n===l){var d=l.sortDetails;if(d){var f=pluck(d,"col");if(!(o.type==="column-visibility"&&!f.includes(c))){var p,b=t.order,v=l.api.columns(e),x=n.columns[v.flatten()[0]],_=v.orderable().includes(!0),E="",A=v.indexes(),O=v.orderable(!0).flatten(),$=n.tabIndex,P=l.orderHandler&&_;e.classRemove(b.isAsc+" "+b.isDesc).classToggle(b.none,!_).classToggle(b.canAsc,P&&O.includes("asc")).classToggle(b.canDesc,P&&O.includes("desc"));var L=!0;for(p=0;p<A.length;p++)f.includes(A[p])||(L=!1);if(L){var B=v.order();e.classAdd((B.includes("asc")?b.isAsc:"")+(B.includes("desc")?b.isDesc:""))}var g=-1;for(p=0;p<f.length;p++)if(n.columns[f[p]].visible){g=f[p];break}if(A[0]==g){var q=d[0],Y=x.orderSequence;e.attr("aria-sort",q.dir==="asc"?"ascending":"descending"),E=Y&&!Y[q.index+1]?"Remove":"Reverse"}else e.attrRemove("aria-sort");if(_){var X=e.find(".dt-column-order");X.attr("role","button").attr("aria-label",_?x.ariaTitle+l.api.i18n("aria.orderable"+E):x.ariaTitle),$!==-1&&X.attr("tabindex",$)}}}}})},layout=(n,e,t)=>{let r=n.classes.layout,a=Dom.c("div").attr("id",t.id||null).classAdd(t.className||r.row).appendTo(e);displayRowCells(t,function(s,o){var l="";o.table&&(a.classAdd(r.tableRow),l+=r.tableCell+" "),s==="start"?l+=r.start:s==="end"?l+=r.end:l+=r.full,Dom.c("div").attr({id:o.id||null,class:o.className?o.className:r.cell+" "+l}).append(o.contents).appendTo(a)})},pagingButton=(n,e,t,r,a)=>{var s=n.classes.paging,o=[s.button],l;return r&&o.push(s.active),a&&o.push(s.disabled),e==="ellipsis"?l=Dom.c("span").classAdd("ellipsis").html(t).get(0):l=Dom.c("button").classAdd(o.join(" ")).attr("role","link").attr("type","button").html(t).get(0),{display:l,clicker:l}},pagingContainer=(n,e)=>e;function displayRowCells(n,e){n.start&&e("start",n.start),n.end&&e("end",n.end),n.full&&e("full",n.full)}const store={className:{},detect:[],render:{},search:{},order:{}};function _filterString(n,e){return function(t){return util.is.empty(t)||typeof t!="string"||(t=t.replace(util.regex.reNewLines," "),n&&(t=util.stripHtml(t)),t=util.diacritics(t,!1)),t}}function __numericReplace(n,e,t,r){return n!==0&&(!n||n==="-")?-1/0:typeof n=="number"||typeof n=="bigint"?n:(e&&(n=util.conv.numToDecimal(n,e)),typeof n=="string"&&(t&&(n=n.replace(t,"")),r&&(n=n.replace(r,""))),n*1)}function register$1(n,e,t){if(!e)return{className:store.className[n],detect:store.detect.find(function(o){return o._name===n}),order:{pre:store.order[n+"-pre"],asc:store.order[n+"-asc"],desc:store.order[n+"-desc"]},render:store.render[n],search:store.search[n]};var r=function(o,l){store[o][n]=l},a=function(o){Object.defineProperty(o,"_name",{value:n});var l=store.detect.findIndex(function(c){return c._name===n});l===-1?store.detect.unshift(o):store.detect.splice(l,1,o)},s=function(o){store.order[n+"-pre"]=o.pre,store.order[n+"-asc"]=o.asc,store.order[n+"-desc"]=o.desc};t===void 0&&(t=e,e=void 0),e==="className"?r("className",t):e==="detect"?a(t):e==="order"?s(t):e==="render"?r("render",t):e==="search"?r("search",t):e||(t.className&&r("className",t.className),t.detect!==void 0&&a(t.detect),t.order&&s(t.order),t.render!==void 0&&r("render",t.render),t.search!==void 0&&r("search",t.search))}function types(){return store.detect.map(function(n){return n._name})}var __diacriticSort=function(n,e){return n=n!=null?n.toString().toLowerCase():"",e=e!=null?e.toString().toLowerCase():"",n.localeCompare(e,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0})},__diacriticHtmlSort=function(n,e){return n=util.stripHtml(n),e=util.stripHtml(e),__diacriticSort(n,e)};register$1("string",{detect:function(){return"string"},order:{pre:function(n){return util.is.empty(n)&&typeof n!="boolean"?"":typeof n=="string"?n.toLowerCase():n.toString?n.toString():""}},search:_filterString(!1)});register$1("string-utf8",{detect:{allOf:function(){return!0},oneOf:function(n){return!util.is.empty(n)&&navigator.languages&&typeof n=="string"&&!!n.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticSort,desc:function(n,e){return __diacriticSort(n,e)*-1}},search:_filterString(!1)});register$1("html",{detect:{allOf:function(n){return util.is.empty(n)||typeof n=="string"&&n.indexOf("<")!==-1},oneOf:function(n){return!util.is.empty(n)&&typeof n=="string"&&n.indexOf("<")!==-1}},order:{pre:function(n){return util.is.empty(n)?"":n.replace?util.stripHtml(n).trim().toLowerCase():n+""}},search:_filterString(!0)});register$1("html-utf8",{detect:{allOf:function(n){return util.is.empty(n)||typeof n=="string"&&n.indexOf("<")!==-1},oneOf:function(n){return navigator.languages&&!util.is.empty(n)&&typeof n=="string"&&n.indexOf("<")!==-1&&typeof n=="string"&&!!n.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticHtmlSort,desc:function(n,e){return __diacriticHtmlSort(n,e)*-1}},search:_filterString(!0)});register$1("date",{className:"dt-type-date",detect:{allOf:function(n){if(n&&!(n instanceof Date)&&!util.regex.reDate.test(n))return null;var e=Date.parse(n);return e!==null&&!isNaN(e)||util.is.empty(n)},oneOf:function(n){return n instanceof Date||typeof n=="string"&&util.regex.reDate.test(n)}},order:{pre:function(n){var e=Date.parse(n);return isNaN(e)?-1/0:e}}});register$1("html-num-fmt",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.language.decimal;return util.is.htmlNum(n,t,!0,!1)},oneOf:function(n,e){var t=e.language.decimal;return util.is.htmlNum(n,t,!0,!1)}},order:{pre:function(n,e){var t=e.language.decimal;return __numericReplace(n,t,util.regex.reHtml,util.regex.reFormattedNumeric)}},search:_filterString(!0)});register$1("html-num",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.language.decimal;return util.is.htmlNum(n,t,!1,!0)},oneOf:function(n,e){var t=e.language.decimal;return util.is.htmlNum(n,t,!1,!1)}},order:{pre:function(n,e){var t=e.language.decimal;return __numericReplace(n,t,util.regex.reHtml)}},search:_filterString(!0)});register$1("num-fmt",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.language.decimal;return util.is.num(n,t,!0,!0)},oneOf:function(n,e){var t=e.language.decimal;return util.is.num(n,t,!0,!1)}},order:{pre:function(n,e){var t=e.language.decimal;return __numericReplace(n,t,util.regex.reFormattedNumeric)}}});register$1("num",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.language.decimal;return util.is.num(n,t,!1,!0)},oneOf:function(n,e){var t=e.language.decimal;return util.is.num(n,t,!1,!1)}},order:{pre:function(n,e){var t=e.language.decimal;return __numericReplace(n,t)}}});const ext={builder:"-source-",buttons:{},ccContent:{},classes:classes$1,errMode:"alert",escape:{attributes:!1},feature:legacy,features,search:[],selector:{cell:[],column:[],row:[]},settings:[],legacy:{ajax:null},pager,renderer:{footer:{_:footer},header:{_:header},layout:{_:layout},pagingButton:{_:pagingButton},pagingContainer:{_:pagingContainer}},rendererDisplayRowCells:displayRowCells,order:{},type:store,_unique:0,version:"3.0.3"};Object.assign(ext,{afnFiltering:ext.search,aTypes:ext.type.detect,ofnSearch:ext.type.search,oSort:ext.type.order,afnSortData:ext.order,aoFeatures:ext.feature,oStdClasses:ext.classes,oPagination:ext.pager,sVersion:ext.version,fnVersionCheck:check$1});function log(n,e,t,r){t="DataTables warning: "+(n?"table id="+n.tableId+" - ":"")+t,r&&(t+=". For more information about this error, please see https://datatables.net/tn/"+r);{var a=ext.sErrMode||ext.errMode;if(n&&callbackFire(n,null,"dt-error",[n,r,t],!0),a=="alert")alert(t);else{if(a=="throw")throw new Error(t);typeof a=="function"&&a(n,r,t)}}}function map$3(n,e,t,r){if(Array.isArray(t)){for(let a=0;a<t.length;a++){let s=t[a];Array.isArray(s)?map$3(n,e,s[0],s[1]):map$3(n,e,s)}return}r===void 0&&(r=t),e[t]!==void 0&&(n[r]=e[t])}function bindAction(n,e,t){Dom.s(n).on("click.DT",e,function(r){t(r)}).on("keypress.DT",e,function(r){r.which===13&&(r.preventDefault(),t(r))}).on("selectstart.DT",e,function(){return!1})}function callbackReg(n,e,t){t&&n.callbacks[e].push(t)}function callbackFire(n,e,t,r,a=!1){var s=[];if(e&&(s=n.callbacks[e].slice().reverse().map(function(o){return o.apply(n.instance,r)})),t!==null){let o=Dom.s(n.table),l=o.trigger(t+".dt",a,r,{dt:n.api});a&&o.closest("body").count()===0&&Dom.s("body").trigger(t+".dt",a,r,{dt:n.api}),s.push(l[0])}return s}function lengthOverflow(n){var e=n.displayStart,t=displayEnd(n),r=n.pageLength;e>=t&&(e=t-r),e-=e%r,(r===-1||e<0)&&(e=0),n.displayStart=e}function dataSource(n){return n.features.serverSide?"ssp":n.ajax?"ajax":"dom"}function macros(n,e,t){var r=n.formatNumber,a=n.displayStart+1,s=n.pageLength,o=recordsDisplay(n),l=recordsTotal(n),c=s===-1;return e.replace(/_START_/g,r(a,n)).replace(/_END_/g,r(displayEnd(n),n)).replace(/_MAX_/g,r(l,n)).replace(/_TOTAL_/g,r(o,n)).replace(/_PAGE_/g,r(c?1:Math.ceil(a/s),n)).replace(/_PAGES_/g,r(c?1:Math.ceil(o/s),n)).replace(/_ENTRIES_/g,n.api.i18n("entries","",t)).replace(/_ENTRIES-MAX_/g,n.api.i18n("entries","",l)).replace(/_ENTRIES-TOTAL_/g,n.api.i18n("entries","",o))}function arrayApply(n,e){if(e)if(e.length<1e4)n.push.apply(n,e);else for(var t=0;t<e.length;t++)n.push(e[t])}function listener(n,e,t){let r=Array.isArray(t)?t:[t];for(var a=0;a<r.length;a++)n.on(e+".dt.DT",r[a])}function escapeObject(n){return ext.escape.attributes&&each$1(n,function(e,t){n[e]=escapeHtml(t)}),n}function __mld(n,e,t,r,a){return __moment?n[e](a):__luxon?n[t](a):r?n[r](a):n}var __mlWarning=!1,__luxon,__moment;function resolveWindowLibs(){__luxon=util.external("luxon"),__moment=util.external("moment")}function __mldObj(n,e,t){var r;if(resolveWindowLibs(),__moment){if(r=__moment(n,e,t,!0),!r.isValid())return null}else if(__luxon){if(r=e&&typeof n=="string"?__luxon.DateTime.fromFormat(n,e):__luxon.DateTime.fromISO(n),!r.isValid)return null;r=r.setLocale(t)}else e?(__mlWarning||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),__mlWarning=!0):r=new Date(n);return r}function __mlHelper(n){return function(e,t,r,a){arguments.length===0?(r="en",t=null,e=null):arguments.length===1?(r="en",t=e,e=null):arguments.length===2&&(r=t,t=e,e=null);var s="datetime"+(t?"-"+t:"");return store.order[s+"-pre"]||register$1(s,{detect:function(o){return o===s?s:!1},order:{pre:function(o){return o.valueOf()}}}),store.className[s]||(store.className[s]="dt-right"),function(o,l){if(o==null)if(a==="--now"){var c=new Date;o=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()))}else o="";if(l==="type")return s;if(o==="")return l!=="sort"?"":__mldObj("0000-01-01 00:00:00",null,r);if(t!==null&&e===t&&l!=="sort"&&l!=="type"&&!(o instanceof Date))return o;let d={},f=typeof o=="string"?o.match(util.regex.isoTimezone):null;f&&(d.timeZone=f[1]==="Z"?"UTC":f[1]);var p=__mldObj(o,e,r);if(p===null)return o;if(l==="sort")return p;var b=t===null?__mld(p,"toDate","toJSDate","")[n](navigator.language,d):__mld(p,"format","toFormat","toISOString",t);return l==="display"?util.escapeHtml(b):b}}}var __thousands=",",__decimal=".";if(window.Intl!==void 0)try{for(var num=new Intl.NumberFormat().formatToParts(100000.1),i=0;i<num.length;i++)num[i].type==="group"?__thousands=num[i].value:num[i].type==="decimal"&&(__decimal=num[i].value)}catch{}function datetime(n,e){var t="datetime-"+n;e||(e="en"),store.order[t]||register$1(t,{detect:function(r){var a=__mldObj(r,n,e);return r===""||a?t:!1},order:{pre:function(r){return __mldObj(r,n,e)||0}}}),store.className[t]||(store.className[t]="dt-right")}var helpers={date:__mlHelper("toLocaleDateString"),datetime:__mlHelper("toLocaleString"),time:__mlHelper("toLocaleTimeString"),number:function(n,e,t,r,a){return n==null&&(n=__thousands),e==null&&(e=__decimal),{display:function(s){if(typeof s!="number"&&typeof s!="string"||s===""||s===null)return s;var o=typeof s=="number"?s:parseFloat(s),l=o<0?"-":"",c=Math.abs(o);if(c>=1e11||c<1e-4&&c!==0){var d=o.toExponential(t).split(/e\+?/);return d[0]+" x 10<sup>"+d[1]+"</sup>"}if(isNaN(o))return util.escapeHtml(s);o=o.toFixed(t);var f=Math.abs(o),p=Math.abs(parseInt(o,10)),b=t?e+(f-p).toFixed(t).substring(2):"";return p===0&&parseFloat(b)===0&&(l=""),l+(r||"")+p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,n)+b+(a||"")}}},text:function(){return{display:util.escapeHtml,filter:util.escapeHtml}}};const defaults$4={ariaTitle:"",cellType:"td",className:"",contentPadding:"",createdCell:null,data:null,defaultContent:null,footer:null,name:"",orderable:!0,orderData:null,orderDataType:"std",orderSequence:["asc","desc",""],render:null,search:null,searchable:!0,title:null,type:null,visible:!0,width:null};class Settings{constructor(){this.attrSrc=!1,this.ariaTitle="",this.className=null,this.contentPadding=null,this.data=null,this.defaultContent=null,this.name=null,this.orderData=[],this.orderDataType="std",this.orderingClass=null,this.orderSequence=[],this.render=null,this.title=null,this.typeManual=null,this.wideStrings=null,this.width=null,this.widthOrig=null}}const defaults$3={boundary:!1,caseInsensitive:!0,columns:null,exact:!1,regex:!1,return:!1,search:"",smart:!0};function create$2(n={}){return util.object.assignDeep({},defaults$3,n)}const browser={barWidth:-1,scrollbarLeft:!1},hungarianToCamelRe=/^(a|aa|ai|ao|as|b|fn|i|m|o|s)([A-Z])([a-z].*$)/;function hungarianToCamel(n){if(!n)return n;let e=Object.keys(n),t=n;for(let r=0;r<e.length;r++){let a=e[r],s=a.match(hungarianToCamelRe);s&&(n[s[2].toLowerCase()+s[3]]=t[a]),util.is.plainObject(t[a])&&hungarianToCamel(t[a])}return n}function compatMap(n,e,t){n[t]!==void 0&&(n[e]=n[t])}function compatOpts(n){hungarianToCamel(n),compatMap(n,"ordering","sort"),compatMap(n,"orderMulti","sortMulti"),compatMap(n,"orderClasses","sortClasses"),compatMap(n,"orderCellsTop","sortCellsTop"),compatMap(n,"order","sorting"),compatMap(n,"orderFixed","sortingFixed"),compatMap(n,"paging","paginate"),compatMap(n,"pagingType","paginationType"),compatMap(n,"pageLength","displayLength"),compatMap(n,"searching","filter"),compatMap(n,"stateDuration","cookieDuration"),typeof n.scrollX=="boolean"&&(n.scrollX=n.scrollX?"100%":""),typeof n.ordering=="object"?(n.orderIndicators=n.ordering.indicators!==void 0?n.ordering.indicators:!0,n.orderHandler=n.ordering.handler!==void 0?n.ordering.handler:!0,n.ordering=!0):n.ordering===!1?(n.orderIndicators=!1,n.orderHandler=!1):n.ordering===!0&&(n.orderIndicators=!0,n.orderHandler=!0),typeof n.orderCellsTop=="boolean"&&(n.titleRow=n.orderCellsTop);var e=n.searchCols;if(e)for(var t=0,r=e.length;t<r;t++)e[t]&&hungarianToCamel(e[t]);n.serverSide&&!n.searchDelay&&(n.searchDelay=400),n.language&&n.language.url&&!n.language.ajax&&(n.language.ajax=n.language.url)}function compatCols(n){hungarianToCamel(n),compatMap(n,"orderable","sortable"),compatMap(n,"orderData","dataSort"),compatMap(n,"orderSequence","sorting"),compatMap(n,"orderDataType","sortDataType"),compatMap(n,"className","class");var e=n.aDataSort,t=n.orderData;typeof e=="number"&&(n.orderData=[e]),typeof t=="number"&&(n.orderData=[t]),n.dataProp!==void 0&&!n.data&&(n.data=n.dataProp)}function browserDetect(n){if(browser.barWidth===-1){var e=Dom.c("div").css({position:"fixed",top:"0",left:-1*window.pageXOffset+"px",height:"1px",width:"1px",overflow:"hidden"}).append(Dom.c("div").css({position:"absolute",top:"1px",left:"1px",width:"100px",overflow:"scroll"}).append(Dom.c("div").css({width:"100%",height:"10px"}))).appendTo("body"),t=e.children(),r=t.children();browser.barWidth=t.get(0).offsetWidth-t.get(0).clientWidth,browser.scrollbarLeft=Math.round(r.offset().left)!==1,e.remove()}Object.assign(n.browser,browser),n.scroll.barWidth=browser.barWidth}const defaults$2={addedClasses:[],cells:[],data:[],details:void 0,detailsShow:void 0,displayData:null,idx:-1,orderCache:null,searchCellCache:null,searchRowCache:null,src:"dom",tr:null};function create$1(n={}){return util.object.assignDeep({},defaults$2,n)}function addData(n,e,t,r){var a=n.data.length,s=create$1({src:t?"dom":"data",idx:a});s.data=e,n.data.push(s);for(var o=n.columns,l=0,c=o.length;l<c;l++)o[l].type=null;n.displayMaster.push(a);var d=n.rowIdFn(e);return d!==void 0&&(n.ids[d]=s),(t||!n.features.deferRender)&&createTr(n,a,t,r),a}function addTr(n,e){return e.mapTo(t=>{let r=getRowElementsFromNode(n,t);return addData(n,r.data,t,r.cells)})}function getCellData(n,e,t,r){r==="search"?r="filter":r==="order"&&(r="sort");var a=n.data[e];if(a){var s=n.drawCount,o=n.columns[t],l=a.data,c=o.defaultContent,d=o.dataGet(l,r,{settings:n,row:e,col:t});if(r!=="display"&&d&&typeof d=="object"&&d.nodeName&&(d=d.innerHTML),d===void 0)return n.drawError!=s&&c===null&&(log(n,0,"Requested unknown parameter "+(typeof o.data=="function"?"{function}":"'"+o.data+"'")+" for row "+e+", column "+t,4),n.drawError=s),c;if((d===l||d===null)&&c!==null&&r!==void 0)d=c;else if(typeof d=="function")return d.call(l);if(d===null&&r==="display")return"";if(r==="filter"){var f=ext.type.search;o.type&&f[o.type]&&(d=f[o.type](d))}return d}}function setCellData(n,e,t,r){let a=n.data[e];if(a){let s=n.columns[t],o=a.data;s.dataSet(o,r,{settings:n,row:e,col:t})}}function writeCell(n,e){let t=Dom.s(n);e&&typeof e=="object"&&e.nodeName?t.empty().append(e):t.html(e)}function getDataMaster(n){return util.array.pluck(n.data,"data")}function clearTable(n){n.data.length=0,n.displayMaster.length=0,n.display.length=0,n.ids={}}function invalidateRow(n,e,t,r){var a=n.data[e],s,o;if(a){if(a.orderCache=null,a.searchCellCache=null,a.displayData=null,t==="dom"||(!t||t==="auto")&&a.src==="dom")a.data=getRowElementsFromModel(n,a,r).data;else{var l=a.cells,c=getRowDisplay(n,e);if(l.length)if(r!==void 0)writeCell(l[r],c[r]);else for(s=0,o=l.length;s<o;s++)writeCell(l[s],c[s])}invalidColumn(n,r),rowAttributes(n,a),callbackFire(n,null,"rowInvalidate",[n,e,r],!1)}}function invalidColumn(n,e){var t=n.columns;if(e!==void 0)t[e].type=null,t[e].wideStrings=null;else for(let r=0,a=t.length;r<a;r++)t[r].type=null,t[r].wideStrings=null;n.containerWidth=-1}function getRowElementsFromNode(n,e){let t=n.rowReadObject?{}:[],r=Dom.s(e).children("th, td"),a=e.getAttribute("id");return r.each((s,o)=>{readCellData(n,s,t,o)}),a&&util.set(n.rowId)(t,a),{data:t,cells:r.get()}}function getRowElementsFromModel(n,e,t){let r=e.cells;for(let a=0;a<r.length;a++)(t===void 0||t===a)&&readCellData(n,r[a],e.data,a);if(e.tr){let a=e.tr.getAttribute("id");a&&util.set(n.rowId)(e.data,a)}return{data:e.data,cells:r}}function readCellData(n,e,t,r){let a=n.columns[r],s=e.innerHTML.trim();if(a.attrSrc){let o=a.data,l=util.set(o._),c=function(d,f){if(typeof d=="string"){let p=d.indexOf("@");if(p!==-1){let b=d.substring(p+1);util.set(d)(t,f.getAttribute(b))}}};l(t,s),c(o.sort,e),c(o.type,e),c(o.filter,e)}else a.setter||(a.setter=util.set(a.data)),a.setter(t,s)}function columnWidths(n){n.columns.map(e=>e.wideStrings).includes(null)&&calculateColumnWidths(n)}function calculateColumnWidths(n){if(n.features.autoWidth){var e=n.table,t=n.columns,r=n.scroll,a=r.y,s=r.x,o=getColumns(n,"visible"),l=e.getAttribute("width"),c=e.parentElement,d,f,p,b,v=e.style.width,x=wrapperWidth(n);if(x===n.containerWidth)return!1;n.containerWidth=x,!v&&!l&&(e.style.width="100%",v="100%"),v&&v.indexOf("%")!==-1&&(l=v),callbackFire(n,null,"column-calc",[{visible:o}],!1);var _=Dom.s(e.cloneNode()).css("visibility","hidden").css("margin","0").attrRemove("id");_.append(Dom.c("tbody")),_.append(n.thead.cloneNode(!0)).append(n.tfoot.cloneNode(!0)),_.find("tfoot th, tfoot td").css("width",""),_.find("thead th, thead td").each(pe=>{var se=columnsSumWidth(n,pe,!0);se?(pe.style.width=se,s&&(pe.style.minWidth=se,Dom.s(pe).append(Dom.c("div").css({width:se,margin:"0",padding:"0",border:"0",height:"1px"})))):pe.style.width=""});var E=[];for(d=0;d<o.length;d++)E.push(getWideStrings(n,o[d]));if(E.length)for(d=0;d<E[0].length;d++){var A=Dom.c("tr").appendTo(_.find("tbody"));for(f=0;f<o.length;f++){b=o[f],p=t[b];var O=E[f][d]||"",$=ext.type.className[p.type],P=p.contentPadding||(s?"-":""),L=O+P,B=Dom.c("td").classAdd($).classAdd(p.className).appendTo(A);O.indexOf("<")===-1&&O.indexOf("&")===-1?B.text(L):B.html(L)}}_.find("[name]").attrRemove("name");var g=Dom.c("div").css(s||a?{position:"absolute",top:"0",left:"0",height:"1px",right:"0",overflow:"hidden"}:{}).append(_).appendTo(c);s?(_.css("width","auto").attrRemove("width"),_.width()<c.clientWidth&&l&&_.width(c.clientWidth)):a?_.width(c.clientWidth):l&&_.width(l);var q=0,Y=_.find("tbody tr").eq(0).children();for(d=0;d<o.length;d++){var X=Y.get(d).getBoundingClientRect().width;q+=X,t[o[d]].width=stringToCss(X)}if(e.style.width=stringToCss(q),g.remove(),l&&(e.style.width=stringToCss(l)),(l||s)&&!n.reszEvt){var ee=util.throttle(function(){var pe=wrapperWidth(n);!n.destroying&&pe!==0&&adjustColumnSizing(n)});if(window.ResizeObserver){var ue=Dom.s(n.tableWrapper).isVisible(),J=Dom.c("div").css({width:"100%",height:"0"}).classAdd("dt-autosize").appendTo(n.tableWrapper);n.resizeObserver=new ResizeObserver(function(pe){ue?ue=!1:ee()}),n.resizeObserver.observe(J.get(0))}else window.addEventListener("resize",ee),n.windowResizeCb=ee;n.reszEvt=!0}}}function wrapperWidth(n){let e=Dom.s(n.tableWrapper);return e.isVisible()?e.width():0}function getWideStrings(n,e){var t=n.columns[e];if(!t.wideStrings){for(var r=[],a=[],s=0,o=n.displayMaster.length;s<o;s++){var l=n.displayMaster[s],c=getRowDisplay(n,l)[e],d=c&&typeof c=="object"&&c.nodeType?c.innerHTML:c+"";d=d.replace(/id=".*?"/g,"").replace(/name=".*?"/g,""),d=d.replace(/<script[\s\S]*?<\/script(?:\s[^>]*)?>/gi," ").replace(/<dialog[\s\S]*?<\/dialog(?:\s[^>]*)?>/gi," ").replace(/<template[\s\S]*?<\/template(?:\s[^>]*)?>/gi," ");var f=util.string.stripHtml(d," ").replace(/&nbsp;/g," ");a.push({str:d,len:f.length}),r.push(f)}a.sort(function(b,v){return v.len-b.len}).splice(3),t.wideStrings=a.map(function(b){return b.str});const p=r.join(" ").split(" ");p.sort(function(b,v){return v.length-b.length}),p.length&&t.wideStrings.push(p[0]),p.length>1&&t.wideStrings.push(p[1]),p.length>2&&t.wideStrings.push(p[3])}return t.wideStrings}function stringToCss(n){return n===null?"0px":typeof n=="number"?n<0?"0px":n+"px":n.match(/\d$/)?n+"px":n}function colGroup(n){var e=n.columns;n.colgroup.empty();for(var t=0;t<e.length;t++)e[t].visible&&n.colgroup.append(e[t].colEl)}function featureTable(n){let e=Dom.s(n.table),t=n.scroll,r=t.x,a=t.y;if(a===""&&r==="")return e.get(0);let s=n.classes.scrolling,o=n.captionNode,l=o?o._captionSide:null,c=e.clone(!1),d=e.clone(!1),f=e.children("tfoot"),p=function(O){return O?stringToCss(O):"100%"},b=Dom.c("div").classAdd(s.container).attr("role","table").append(Dom.c("div").classAdd(s.header.self).css({overflow:"hidden",position:"relative",border:"0",width:r?p(r):"100%"}).attr("role","none").append(Dom.c("div").classAdd(s.header.inner).css({"box-sizing":"content-box",width:t.xInner||"100%"}).attr("role","none").append(c.attrRemove("id").css("margin-left","0").append(l==="top"?o:null).append(e.children("thead"))))).append(Dom.c("div").classAdd(s.body).css({position:"relative",overflow:"auto",width:p(r)}).attr("role","none").append(e));f.count()&&b.append(Dom.c("div").classAdd(s.footer.self).css({overflow:"hidden",border:"0",width:r?p(r):"100%"}).attr("role","none").append(Dom.c("div").classAdd(s.footer.inner).attr("role","none").append(d.attrRemove("id").css("margin-left","0").append(l==="bottom"?o:null).append(e.children("tfoot")))));let v=b.children(),x=v.eq(0),_=v.eq(1),E=v.eq(2);_.on("scroll.DT",()=>{let O=_.scrollLeft();x.scrollLeft(O),E.scrollLeft(O)}),x.on("scroll.DT",()=>{let O=x.scrollLeft();_.scrollLeft(O),E.scrollLeft(O)}),E.on("scroll.DT",()=>{let O=E.scrollLeft();x.scrollLeft(O),_.scrollLeft(O)}),_.css("max-height",p(a)),t.collapse||_.css("height",p(a)),n.scrollHead=x,n.scrollBody=_,n.scrollFoot=E,n.callbacks.draw.push(scrollDraw),e.attr("role","none"),e.find("tbody").attr("role","rowgroup"),c.attr("role","none"),d.attr("role","none"),n.colgroup.find("colgroup").attr("role","none");let A=e.attr("aria-describedby");return A&&(b.attr("aria-describedby",A),e.attrRemove("aria-describedby")),b.get(0)}function scrollDraw(n){let e=n.scroll,t=e.barWidth,r=n.scrollHead,a=r.children("div"),s=a.children("table"),o=n.scrollBody,l=o,c=n.scrollFoot,d=c.children("div"),f=d.children("table"),p=Dom.s(n.thead),b=Dom.s(n.table),v=Dom.s(n.tfoot),x=n.browser,_,E,A=o.get(0).scrollHeight>o.get(0).clientHeight;if(n.scrollBarVis!==A&&n.scrollBarVis!==void 0){n.scrollBarVis=A,adjustColumnSizing(n);return}else n.scrollBarVis=A;if(p.find("thead").attr("role","rowgroup"),v.find("tfoot").attr("role","rowgroup"),b.children("thead, tfoot").remove(),_=p.clone(!0).prependTo(b),_.find("th, td").attrRemove("tabindex"),_.find("[id]").attrRemove("id"),v.count()&&(E=v.clone(!0).prependTo(b),E.find("[id]").attrRemove("id")),n.display.length){let L=null,B=dataSource(n)!=="ssp"?n.displayStart:0;for(let g=B;g<B+n.display.length;g++){let q=n.display[g],Y=n.data[q];if(Y){let X=Y.tr;if(X){L=X;break}}}if(L){let g=Dom.s(L).children("th, td").mapTo(function(q,Y){return{idx:visibleToColumnIndex(n,Y),width:Dom.s(q).width("outer")}});for(let q=0;q<g.length;q++){let Y=n.columns[g[q].idx].colEl;Y.css("width",g[q].width+"px"),e.x&&Y.css("minWidth",g[q].width+"px")}}}s.find("colgroup").remove(),s.append(n.colgroup.clone(!0)),v&&(f.find("colgroup").remove(),f.append(n.colgroup.clone(!0))),_.find("th, td").each(function(L){Dom.c("div").classAdd("dt-scroll-sizing").append(Array.from(L.childNodes)).appendTo(L)}),E&&E.find("th, td").each(function(L){Dom.c("div").classAdd("dt-scroll-sizing").append(Array.from(L.childNodes)).appendTo(L)});let O=Math.floor(b.height())>o.get(0).clientHeight||l.css("overflow-y")=="scroll",$="padding"+(x.scrollbarLeft?"Left":"Right"),P=b.width("withPadding");s.css("width",stringToCss(P)),a.css("width",stringToCss(P)).css($,O?t+"px":"0px"),v.count()&&(f.css("width",stringToCss(P)),d.css("width",stringToCss(P)).css($,O?t+"px":"0px")),b.children("colgroup").prependTo(b),b.find("thead, tfoot").find("[tabindex]").attrRemove("tabindex"),b.find("thead, tfoot").attr("role","none").find("[role]").attrRemove("role"),b.find("tbody tr:not([role])").attr("role","row"),b.find("tbody td:not([role]), tbody th:not([role])").attr("role","cell"),scrollAria(_),scrollAria(E),l.trigger("scroll"),(n.wasOrdered||n.wasFiltered)&&!n.drawHold&&o.scrollTop(0)}function scrollAria(n){n&&(n.find("tfoot:not([role])").attr("role","rowgroup"),n.find("tr:not([role])").attr("role","row"),n.find("th:not([role])").attr("role","columnheader"),n.find("td:not([role])").attr("role","cell"))}function addColumn(n){let e=n.columns.length,t=util.object.assign({},new Settings,defaults$4,{orderData:defaults$4.orderData?defaults$4.orderData:[e],data:defaults$4.data?defaults$4.data:e,idx:e,searchFixed:{},colEl:Dom.c("col").attr("data-dt-column",e)});n.columns.push(t);let r=n.searchCols;n.searches[e]=create$2(r[e]?hungarianToCamel(r[e]):{}),n.searches[e].columns=[e]}function columnOptions(n,e,t){var r=n.columns[e];if(t!=null){compatCols(t),t.type&&(r.typeManual=t.type),t.className&&!t.className&&(t.className=t.className);var a=r.className;util.object.assign(r,t),map$3(r,t,"width","widthOrig"),a!==r.className&&(r.className=a+" "+r.className),map$3(r,t,"orderData"),t.search&&util.object.assign(n.searches[e],t.search)}var s=r.data,o=util.get(s);if(r.render&&Array.isArray(r.render)){var l=r.render.slice(),c=l.shift();r.render=helpers[c].apply(window,l)}r.renderer=r.render?util.get(r.render):null;var d=function(f){return typeof f=="string"&&f.indexOf("@")!==-1};r.attrSrc=!!s&&util.is.plainObject(s)&&(d(s.sort)||d(s.type)||d(s.filter)),r.setter=null,r.dataGet=function(f,p,b){var v=o(f,p,void 0,b);return r.renderer&&p?r.renderer(v,p,f,b):v},r.dataSet=function(f,p,b){return util.set(s)(f,p,b)},typeof s!="number"&&!r._isArrayHost&&(n.rowReadObject=!0),n.features.ordering||(r.orderable=!1)}function adjustColumnSizing(n){calculateColumnWidths(n),columnSizes(n);let e=n.scroll;(e.y!==""||e.x!=="")&&scrollDraw(n),callbackFire(n,null,"column-sizing",[n])}function columnSizes(n){let e=n.columns;for(let t=0;t<e.length;t++){let r=columnsSumWidth(n,[t],!1);r&&(e[t].colEl.css("width",r),n.scroll.x&&e[t].colEl.css("min-width",r))}}function visibleToColumnIndex(n,e){let t=getColumns(n,"visible");return typeof t[e]=="number"?t[e]:null}function columnIndexToVisible(n,e){let r=getColumns(n,"visible").indexOf(e);return r!==-1?r:null}function visibleColumns(n){let e=n.header,t=n.columns,r=0;if(e.length)for(let a=0,s=e[0].length;a<s;a++)t[a].visible&&Dom.s(e[0][a].cell).css("display")!=="none"&&r++;return r}function getColumns(n,e){let t=[];return n.columns.map(function(r,a){r[e]&&t.push(a)}),t}function _typeResult(n,e){return e===!0?n._name:e}function columnTypes(n,e=""){var t=n.columns,r=n.data,a=ext.type.detect,s,o,l,c,d,f,p,b,v;for(e||(e=t.map(A=>A.type).join(",")),s=0,o=t.length;s<o;s++){if(p=t[s],v=[],!p.type&&p.typeManual)p.type=p.typeManual;else if(!p.type){if(!n.typeDetect)return;for(l=0,c=a.length;l<c;l++){let A=a[l],O,$,P,L=!1;if(typeof A=="function"?$=A:(O=A.oneOf,$=A.allOf,P=A.init),b=null,P&&(b=_typeResult(A,P(n,p,s)),b)){p.type=b;break}for(d=0,f=r.length;d<f&&!(r[d]&&(v[d]===void 0&&(v[d]=getCellData(n,d,s,"type")),O&&!L&&(L=_typeResult(A,O(v[d],n))),b=_typeResult(A,$(v[d],n)),!b&&l!==a.length-3||b==="html"&&!util.is.empty(v[d])));d++);if(O&&L&&b||!O&&b){p.type=b;break}}p.type||(p.type="string")}var x=ext.type.className[p.type];x&&(_columnAutoClass(n.header,s,x),_columnAutoClass(n.footer,s,x));var _=ext.type.render[p.type];_&&!p.renderer&&(p.renderer=util.get(_),_columnAutoRender(n,s))}var E=t.map(A=>A.type).join(",");E!==e&&callbackFire(n,null,"columnTypes",[n],!1)}function _columnAutoRender(n,e){let t=n.data;for(let r=0;r<t.length;r++){let a=t[r];if(a&&a.tr){let s=getCellData(n,r,e,"display");a.displayData[e]=s,writeCell(a.cells[e],s)}}}function _columnAutoClass(n,e,t){n.forEach(function(r){r[e]&&r[e].unique&&Dom.s(r[e].cell).classAdd(t)})}function applyColumnDefs(n,e,t,r,a){var s,o,l,c,d,f,p=n.columns;if(t)for(s=0,o=t.length;s<o;s++)t[s]&&t[s].name&&(p[s].name=t[s].name);if(e)for(s=e.length-1;s>=0;s--){let v=e[s],x=v.target!==void 0?v.target:v.targets!==void 0?v.targets:v.aTargets;for(Array.isArray(x)||(x=[x]),l=0,c=x.length;l<c;l++){var b=x[l];if(typeof b=="number"&&b>=0){for(;p.length<=b;)addColumn(n);a(b,v)}else if(typeof b=="number"&&b<0)a(p.length+b,v);else if(typeof b=="string")for(d=0,f=p.length;d<f;d++)b==="_all"?a(d,v):b.indexOf(":name")!==-1?p[d].name===b.replace(":name","")&&a(d,v):r.forEach(function(_){if(_[d]){var E=_[d].cell;b.match(/^[a-z][\w-]*$/i)&&(b="."+b),E.matches(b)&&a(d,v)}})}}if(t)for(s=0,o=t.length;s<o;s++)a(s,t[s])}function columnsSumWidth(n,e,t,r){Array.isArray(e)||(e=columnsFromHeader(e));let a=0,s="px",o=n.columns;for(let l=0,c=e.length;l<c;l++){let d=o[e[l]],f=t?d.widthOrig:d.width;if(d.visible!==!1){if(f==null)return null;if(typeof f=="number")a+=f;else{let p=f.match(/([\d\.]+)([^\d]*)/);p&&(a+=parseFloat(p[1]),s=p.length===3?p[2]:"px")}}}return a+s}function columnsFromHeader(n){let e=Dom.s(n).closest("[data-dt-column]").attr("data-dt-column");return e?e.split(",").map(function(t){return parseInt(t)}):[]}function processingHtml(n){var e=n.table,t=n.scroll.x!==""||n.scroll.y!=="";if(n.features.processing){var r=Dom.c("div").attr("id",n.tableId+"_processing").attr("role","status").classAdd(n.classes.processing.container).html(n.language.processing).append(Dom.c("div").append(Dom.c("div")).append(Dom.c("div")).append(Dom.c("div")).append(Dom.c("div")));t?r.prependTo(Dom.s(n.tableWrapper).find("div.dt-scroll").get(0)):r.insertBefore(e),Dom.s(e).on("processing.dt.DT",(a,s,o)=>{r.css("display",o?"block":"none")})}}function processingDisplay(n,e){n.doingDraw&&e===!1||callbackFire(n,null,"processing",[n,e])}function processingRun(n,e,t){e?(processingDisplay(n,!0),setTimeout(function(){t(),processingDisplay(n,!1)},0)):t()}function renderer(n,e){var t=n.renderer,r=ext.renderer[e];return plainObject(t)&&t[e]?r[t[e]]||r._:typeof t=="string"&&r[t]||r._}function createLayout(n){var e=n.classes,t=Dom.c("div").attr("id",n.tableId+"_wrapper").classAdd(e.container).insertBefore(n.table);if(n.tableWrapper=t.get(0),n.dom)legacyDom(n,n.dom,t);else{var r=convert(n,n.layout,"top"),a=convert(n,n.layout,"bottom"),s=renderer(n,"layout");r.forEach(function(o){s(n,t,o)}),s(n,t,{full:{contents:[featureTable(n)],items:[],table:!0}}),a.forEach(function(o){s(n,t,o)})}processingHtml(n)}function layoutItems(n,e,t){if(Array.isArray(t)){for(var r=0;r<t.length;r++)layoutItems(n,e,t[r]);return}var a=n[e];util.is.plainObject(t)?t.features?(t.rowId&&(n.id=t.rowId),t.rowClass&&(n.className=t.rowClass),a.id=t.id,a.className=t.className,layoutItems(n,e,t.features)):util.object.each(t,(s,o)=>{a.items.push({feature:s,opts:o})}):a.items.push(t)}function getRow(n,e,t){for(var r,a=0;a<n.length;a++)if(r=n[a],r.rowNum===e&&(t==="full"&&r.full||(t==="start"||t==="end")&&(r.start||r.end)))return r[t]||(r[t]={contents:[],items:[]}),r;return r={rowNum:e},r[t]={contents:[],items:[]},n.push(r),r}function convert(n,e,t){var r=[];util.object.each(e,function(s,o){var l=s.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);if(!(o===null||!l)){var c=l[2]?parseInt(l[2]):0,d=l[3]?l[3].toLowerCase():"full";if(l[1]===t&&!(d!=="full"&&d!=="start"&&d!=="end")){var f=getRow(r,c,d);layoutItems(f,d,o)}}}),r.sort(function(s,o){var l=s.rowNum||0,c=o.rowNum||0;if(l===c){var d=s.full&&!o.full?-1:1;return t==="bottom"?d*-1:d}return c-l}),t==="bottom"&&r.reverse();for(var a=0;a<r.length;a++)delete r[a].rowNum,resolve$1(n,r[a]);return r}function resolve$1(n,e){var t=function(a,s){return ext.features[a]||log(n,0,"Unknown feature: "+a),ext.features[a].apply(this,[n,s])},r=function(a){e[a]&&(e[a].contents=e[a].items.filter(s=>!!s).map(s=>{if(typeof s=="string")return t(s,null);if(util.is.plainObject(s))return t(s.feature,s.opts);if(typeof s.node=="function")return s.node(n);if(typeof s=="function"){var o=s(n);return typeof o.node=="function"?o.node():o}else{if(s.nodeName)return s;if(s instanceof Dom)return s.get(0);if(s.length)return s[0]}}))};r("start"),r("end"),r("full")}function legacyDom(n,e,t){let r=e.match(/(".*?")|('.*?')|./g),a,s,o,l,c;if(r)for(let d=0;d<r.length;d++){if(a=null,s=r[d],s=="<"){if(o=Dom.c("div"),l=r[d+1],l[0]=="'"||l[0]=='"'){c=l.replace(/['"]/g,"");let f="",p;if(c.indexOf(".")!=-1){let b=c.split(".");f=b[0],p=b[1]}else c[0]=="#"?f=c:p=c;o.attr("id",f.substring(1)).classAdd(p),d++}t.append(o.get()),t=o}else s==">"?t=t.parent():s=="t"?a=featureTable(n):ext.feature.forEach(function(f){s==f.cFeature&&(a=f.fnInit(n))});a&&t.append(a instanceof Dom?a.get():a)}}function sortInit(n){var e=n.thead,t=e.querySelectorAll("tr"),r=n.titleRow,a=':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';r===!0?e=t[0]:r===!1?e=t[t.length-1]:r!==null&&(e=t[r]),n.orderHandler&&sortAttachListener(n,e,e===n.thead?"tr"+a+" th"+a+", tr"+a+" td"+a:"th"+a+", td"+a);var s=[];sortResolve(n,s,n.order),n.order=s}function sortAttachListener(n,e,t,r,a){bindAction(e,t,function(s){var o=!1,l=r===void 0?columnsFromHeader(s.target):typeof r=="function"?r():Array.isArray(r)?r:[r];if(l.length){for(var c=0,d=l.length;c<d;c++){var f=sortAdd(n,l[c],c,s.shiftKey);if(f!==!1&&(o=!0),n.order.length===1&&n.order[0][1]==="")break}o&&processingRun(n,!0,function(){sort(n),sortDisplay(n,n.display),reDraw(n,!1,!1),a&&a()})}})}function sortDisplay(n,e){if(!(e.length<2)){var t=n.displayMaster,r={},a={},s;for(s=0;s<t.length;s++)r[t[s]]=s;for(s=0;s<e.length;s++)a[e[s]]=r[e[s]];e.sort(function(o,l){return a[o]-a[l]})}}function sortResolve(n,e,t){var r=function(s){if(plainObject(s)){let c=s,d=s;if(c.idx!==void 0)e.push([c.idx,c.dir]);else if(d.name){var o=pluck(n.columns,"name"),l=o.indexOf(d.name);l!==-1&&e.push([l,d.dir])}}else e.push(s)};if(plainObject(t))r(t);else if(Array.isArray(t)&&typeof t[0]=="number")r(t);else if(Array.isArray(t))for(var a=0;a<t.length;a++)r(t[a])}function sortFlatten(n){var e,t,r,a=[],s=ext.type.order,o=n.columns,l,c,d,f,p=n.orderFixed,b=plainObject(p),v=[];if(!n.features.ordering)return a;for(Array.isArray(p)&&sortResolve(n,v,p),b&&p.pre&&sortResolve(n,v,p.pre),sortResolve(n,v,n.order),b&&p.post&&sortResolve(n,v,p.post),e=0;e<v.length;e++)if(f=v[e][0],o[f])for(l=o[f].orderData,t=0,r=l.length;t<r;t++)c=l[t],d=o[c].type||"string",v[e]._idx===void 0&&(v[e]._idx=o[c].orderSequence.indexOf(v[e][1])),v[e][1]&&a.push({src:f,col:c,dir:v[e][1],index:v[e]._idx,type:d,formatter:s[d+"-pre"],sorter:s[d+"-"+v[e][1]]});return a}function sort(n,e,t){var r,a,s=[],o=ext.type.order,l=n.data,c,d=n.displayMaster,f;if(columnTypes(n),e!==void 0){var p=n.columns[e];f=[{src:e,col:e,dir:t||"",index:0,type:p.type,formatter:o[p.type+"-pre"],sorter:o[p.type+"-"+t]}],d=d.slice()}else f=sortFlatten(n);for(r=0,a=f.length;r<a;r++)c=f[r],sortData(n,c.col);if(dataSource(n)!="ssp"&&f.length!==0){for(r=0,a=d.length;r<a;r++)s[r]=r;f.length&&f[0].dir==="desc"&&n.orderDescReverse&&s.reverse(),d.sort(function(b,v){var x,_,E,A,O,$,P,L=f.length,B=(x=l[b])===null||x===void 0?void 0:x.orderCache,g=(_=l[v])===null||_===void 0?void 0:_.orderCache;for(O=0;O<L;O++)if(P=f[O],E=B[P.col],A=g[P.col],P.sorter){if($=P.sorter(E,A),$!==0)return $}else if($=E<A?-1:E>A?1:0,$!==0)return P.dir==="asc"?$:-$;return E=s[b],A=s[v],E<A?-1:E>A?1:0})}else f.length===0&&d.sort(function(b,v){return b<v?-1:b>v?1:0});return e===void 0&&(n.wasOrdered=!0,n.sortDetails=f,callbackFire(n,null,"order",[n,f])),d}function sortAdd(n,e,t,r){var a=n.columns[e],s=n.order,o=a.orderSequence,l,c=function(f,p){var b=f._idx;return b===void 0&&(b=o.indexOf(f[1])),b+1<o.length?b+1:p?null:0};if(!a.orderable)return!1;if(typeof s[0]=="number"&&(s=n.order=[s]),(r||t)&&n.features.orderMulti){var d=pluck(s,"0").indexOf(e);d!==-1?(l=c(s[d],!0),l===null&&s.length===1&&(l=0),l===null||o[l]===""?s.splice(d,1):(s[d][1]=o[l],s[d]._idx=l)):r?(s.push([e,o[0],0]),s[s.length-1]._idx=0):(s.push([e,s[0][1],0]),s[s.length-1]._idx=0)}else s.length&&s[0][0]==e?(l=c(s[0]),l?(s.length=1,s[0][1]=o[l],s[0]._idx=l):(s.length=1,s[0][1]=o[0],s[0]._idx=0)):(s.length=0,s.push([e,o[0]]),s[0]._idx=0)}function sortingClasses(n){var e=n.lastOrder,t=n.classes.order.position,r=sortFlatten(n),a=n.features,s,o,l;if(a.ordering&&a.orderClasses){for(s=0,o=e.length;s<o;s++)l=e[s].src,Dom.s(pluck(n.data,"cells",l)).classRemove(t+(s<2?s+1:3));for(s=0,o=r.length;s<o;s++)l=r[s].src,Dom.s(pluck(n.data,"cells",l)).classAdd(t+(s<2?s+1:3))}n.lastOrder=r}function sortData(n,e){var t=n.columns[e],r=ext.order[t.orderDataType],a;r&&(a=r.call(n.instance,n,e,columnIndexToVisible(n,e)));for(var s,o,l=ext.type.order[t.type+"-pre"],c=n.data,d=0;d<c.length;d++)c[d]&&(s=c[d],s&&!s.orderCache&&(s.orderCache=[]),s&&(!s.orderCache[e]||r)&&(o=r?a[d]:getCellData(n,d,e,"sort"),s.orderCache[e]=l?l(o,n):o))}function pageChange(n,e,t){var r=n.displayStart,a=n.pageLength,s=recordsDisplay(n);if(s===0||a===-1)r=0;else if(typeof e=="number")r=e*a,r>s&&(r=0);else if(e=="first")r=0;else if(e=="previous")r=a>=0?r-a:0,r<0&&(r=0);else if(e=="next")r+a<s&&(r+=a);else if(e=="last")r=Math.floor((s-1)/a)*a;else{if(e==="ellipsis")return;log(n,0,"Unknown paging action: "+e,5)}var o=n.displayStart!==r;return n.displayStart=r,callbackFire(n,null,o?"page":"page-nc",[n]),o&&t&&draw$1(n),o}function saveState(n){if(!n.loadingState){var e=[];sortResolve(n,e,n.order);var t=n.columns,r={columns:n.columns.map(function(a,s){return{name:a.name,visible:a.visible,search:Object.assign({},n.searches[s])}}),length:n.pageLength,order:e.map(function(a){return t[a[0]]&&t[a[0]].name?[t[a[0]].name,a[1]]:a.slice()}),search:Object.assign({},n.searches["*"]),searchGroups:Object.keys(n.searches).filter(a=>a.includes(",")).map(a=>Object.assign({},n.searches[a])),start:n.displayStart,time:+new Date};n.stateSaved=r,callbackFire(n,"stateSaveParams","stateSaveParams",[n,r]),n.features.stateSave&&!n.destroying&&n.stateSaveCallback.call(n.instance,n,r)}}function loadState(n,e){if(!n.features.stateSave){e();return}var t=function(a,s=!1){implementState(n,a,s,e)},r=n.stateLoadCallback.call(n.instance,n,t);return r!==void 0&&implementState(n,r,!1,e),!0}function implementState(n,e,t,r){var a,s,o=n.columns,l=pluck(n.columns,"name");n.loadingState=!0;var c=n.initDone?new Api(n):null;if(!t){if(!e||!e.time){n.loadingState=!1,r();return}var d=n.stateDuration;if(d>0&&e.time<+new Date-d*1e3){n.loadingState=!1,r();return}}var f=callbackFire(n,"stateLoadParams","stateLoadParams",[n,e]);if(f.indexOf(!1)!==-1){n.loadingState=!1,r();return}if(n.stateLoaded=assignDeep({},e),callbackFire(n,null,"stateLoadInit",[n,e],!0),e.length!==void 0&&(c?c.page.len(e.length):n.pageLength=e.length),e.start!==void 0&&(c===null?(n.displayStart=e.start,n.displayStartInit=e.start):pageChange(n,e.start/n.pageLength)),e.order!==void 0){n.order=[];for(let _=0;_<e.order.length;_++){let E=e.order[_],A=[E[0],E[1]];if(typeof E[0]=="string"){let O=l.indexOf(E[0]);if(O<0)continue;A[0]=O}else if(A[0]>=o.length)continue;n.order.push(A)}}if(e.search!==void 0&&Object.assign(n.searches["*"],e.search),e.searchGroups&&e.searchGroups.forEach(_=>{if(_.columns){let E=_.columns.join(",");n.searches[E]=create$2(_)}}),e.columns){var p=e.columns,b=pluck(e.columns,"name");if(b.join("").length&&b.join("")!==l.join(""))for(p=[],a=0;a<l.length;a++)if(l[a]!=""){var v=b.indexOf(l[a]);v>=0?p.push(e.columns[v]):p.push({})}else p.push({});if(p.length===o.length){for(a=0,s=p.length;a<s;a++){var x=p[a];x.visible!==void 0&&(c?c.column(a).visible(x.visible,!1):o[a].visible=x.visible),x.search!==void 0&&(Object.assign(n.searches[a],x.search),n.searches[a].columns=[a])}c&&c.one("draw",function(){c.columns.adjust()})}}n.loadingState=!1,callbackFire(n,"stateLoaded","stateLoaded",[n,e]),r()}function initialise(n){var e,t=n.init,r=n.deferLoading,a=dataSource(n);if(!n.initialised){setTimeout(function(){initialise(n)},200);return}buildHead(n,"header"),buildHead(n,"footer"),loadState(n,function(){drawHead(n,n.header),drawHead(n,n.footer);var s=n.displayStartInit;if(t&&t.data)for(e=0;e<t.data.length;e++)addData(n,t.data[e]);else(r||a=="dom")&&addTr(n,Dom.s(n.tbody).children("tr"));n.display=n.displayMaster.slice(),createLayout(n),sortInit(n),colGroup(n),processingDisplay(n,!0),callbackFire(n,null,"preInit",[n],!0),reDraw(n),(a!="ssp"||r)&&(a=="ajax"?buildAjax(n,{},function(o){var l=ajaxDataSrc(n,o,!1);for(e=0;e<l.length;e++)addData(n,l[e]);n.displayStartInit=s,reDraw(n),processingDisplay(n,!1),initComplete(n)}):(initComplete(n),processingDisplay(n,!1)))})}function initComplete(n){if(n.initDone)return;var e=[n,n.json];n.initDone=!0;let t=Dom.s(n.tfoot);t.children().count()===0&&t.remove(),adjustColumnSizing(n),callbackFire(n,null,"plugin-init",e,!0),callbackFire(n,"init","init",e,!0)}function buildAjax(n,e,t){var r,a=n.ajax,s=n.instance,o=function(f){var p=n.jqXHR?n.jqXHR.status:null;(f===null||typeof p=="number"&&p==204)&&(f={},ajaxDataSrc(n,f,[]));var b=f.error||f.sError;if(b&&log(n,0,b),f.d&&typeof f.d=="string")try{f=JSON.parse(f.d)}catch{}n.json=f,callbackFire(n,null,"xhr",[n,f,n.jqXHR],!0),t(f)};if(util.is.plainObject(a)&&a.data){r=a.data;var l=typeof r=="function"?r(e,n):r;e=typeof r=="function"&&l?l:util.object.assignDeep(e,l),delete a.data}var c={url:typeof a=="string"?a:"",data:e,success:o,dataType:"json",cache:!1,type:n.serverMethod,error:function(f,p){var b=callbackFire(n,null,"xhr",[n,null,n.jqXHR],!0);b.indexOf(!1)===-1&&(p=="parsererror"?log(n,0,"Invalid JSON response",1):f.readyState===4&&log(n,0,"Ajax error",7)),processingDisplay(n,!1)}};if(util.is.plainObject(a)&&util.object.assign(c,a),n.ajaxData=e,callbackFire(n,null,"preXhr",[n,e,c],!0),typeof a=="function")n.jqXHR=a.call(s,e,o,n);else if(a&&typeof a!="string"&&a.url===""){var d={};ajaxDataSrc(n,d,[]),o(d)}else n.jqXHR=util.ajax(c);r&&(a.data=r)}function ajaxUpdate(n){n.drawCount++,processingDisplay(n,!0),buildAjax(n,ajaxParameters(n),function(e){ajaxUpdateDraw(n,e)})}function functionOrValue(n){return typeof n=="function"?"function":n.toString()}function ajaxParameters(n){var e=n.columns,t=n.features,r=n.searches,a=n.searchesFixed,s=function(o,l){return typeof e[o][l]=="function"?"function":e[o][l]};return{draw:n.drawCount,columns:e.map(function(o,l){return{data:s(l,"data"),name:o.name,searchable:o.searchable,orderable:o.orderable,search:{value:r[l]?functionOrValue(r[l].search):"",regex:r[l]?r[l].regex:!1,fixed:a[l]?Object.keys(a[l]).map(c=>({name:c,term:functionOrValue(a[l][c].search)})):[]}}}),order:sortFlatten(n).map(function(o){return{column:o.col,dir:o.dir,name:s(o.col,"name")}}),start:n.displayStart,length:t.paging?n.pageLength:-1,search:{value:functionOrValue(r["*"].search),regex:r["*"].regex,fixed:Object.keys(n.searchesFixed["*"]).map(o=>({name:o,term:functionOrValue(n.searchesFixed["*"][o].search)})),groups:Object.keys(n.searches).filter(o=>o.includes(",")).map(o=>({columns:n.searches[o].columns||[],term:functionOrValue(n.searches[o].search)})),groupsFixed:Object.keys(n.searchesFixed).filter(o=>o.includes(",")).map(o=>{let l=n.searchesFixed[o];return Object.keys(l).map(c=>({columns:l[c].columns||[],name:c,term:functionOrValue(l[c].search)}))}).flat()}}}function ajaxUpdateDraw(n,e){var t=ajaxDataSrc(n,e,!1),r=ajaxDataSrcParam(n,"draw",e),a=ajaxDataSrcParam(n,"recordsTotal",e),s=ajaxDataSrcParam(n,"recordsFiltered",e),o=n.columns.map(d=>d.type).join(",");if(r!==void 0){if(r*1<n.drawCount)return;n.drawCount=r*1}t||(t=[]),clearTable(n),n.recordsTotal=parseInt(a,10),n.recordsDisplay=parseInt(s,10);for(var l=0,c=t.length;l<c;l++)addData(n,t[l]);n.display=n.displayMaster.slice(),columnTypes(n,o),draw$1(n,!0),initComplete(n),processingDisplay(n,!1)}function ajaxDataSrc(n,e,t){var r="data";if(util.is.plainObject(n.ajax)&&n.ajax.dataSrc!==void 0){var a=n.ajax.dataSrc;typeof a=="string"||typeof a=="function"?r=a:a.data!==void 0&&(r=a.data)}if(!t)return r==="data"?e.aaData||e[r]:r!==""?util.get(r)(e):e;util.set(r)(e,t)}function ajaxDataSrcParam(n,e,t){var r=util.is.plainObject(n.ajax)?n.ajax.dataSrc:null;if(r&&r[e])return util.data.get(r[e])(t);var a="";return e==="draw"?a="sEcho":e==="recordsTotal"?a="iTotalRecords":e==="recordsFiltered"&&(a="iTotalDisplayRecords"),t[a]!==void 0?t[a]:t[e]}const __filter_div=Dom.c("div").get(0),__filter_div_textContent=__filter_div.textContent!==void 0;function filterComplete(n){n.columns,dataSource(n)!="ssp"&&(filterData(n),n.display=n.displayMaster.slice(),util.object.each(n.searches,(e,t)=>{filter(n.display,n,t.search,t)}),util.object.each(n.searchesFixed,function(e){util.object.each(n.searchesFixed[e],function(t,r){filter(n.display,n,r.search,r)})}),filterCustom(n)),n.wasFiltered=!0,callbackFire(n,null,"search",[n])}function filterCustom(n){let e=ext.search,t=n.display,r,a;for(let s=0,o=e.length;s<o;s++){let l=[];for(let c=0,d=t.length;c<d;c++)a=t[c],r=n.data[a],r&&e[s](n,r.searchCellCache,a,r.data,c)&&l.push(a);t.length=0,arrayApply(t,l)}}function filter(n,e,t,r){if(t==="")return;let a=0,s=[],o=typeof t=="function"?t:null,l=t instanceof RegExp?t:o?null:filterCreateSearch(t,r),c=r.columns?r.columns:util.array.range(e.columns.length);for(a=0;a<n.length;a++){let d=e.data[n[a]];if(d){let f=util.array.selectiveJoin(d.searchCellCache,c);(o&&o(f,d.data,n[a],c.length===1?c[0]:c)||l&&typeof f=="string"&&l.test(f))&&s.push(n[a])}}for(n.length=s.length,a=0;a<s.length;a++)n[a]=s[a]}function filterCreateSearch(n,e){let t=[],r=Object.assign({},{boundary:!1,caseInsensitive:!0,exact:!1,regex:!1,smart:!0},e),a=typeof n!="string"?n.toString():n;if(a=util.diacritics(a),r.exact)return new RegExp("^"+util.escapeRegex(a)+"$",r.caseInsensitive?"i":"");if(a=r.regex?a:util.escapeRegex(a),r.smart){let o=(a.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""]).map(function(d){let f=!1,p;return d.charAt(0)==="!"&&(f=!0,d=d.substring(1)),d.charAt(0)==='"'?(p=d.match(/^"(.*)"$/),d=p?p[1]:d):d.charAt(0)==="“"&&(p=d.match(/^\u201C(.*)\u201D$/),d=p?p[1]:d),f&&(d.length>1&&t.push("(?!"+d+")"),d=""),d.replace(/"/g,"")}),l=t.length?t.join(""):"",c=r.boundary?"\\b":"";a="^(?=.*?"+c+o.join(")(?=.*?"+c)+")("+l+".)*$"}return new RegExp(a,r.caseInsensitive?"i":"")}function filterData(n){let e=n.columns,t=n.data,r,a,s,o,l,c=!1;for(let d=0;d<t.length;d++)if(t[d]&&(l=t[d],l&&!l.searchCellCache)){const f=[];for(a=0,s=e.length;a<s;a++)r=e[a],r.searchable?(o=getCellData(n,d,a,"filter"),o===null&&(o=""),typeof o!="string"&&o.toString&&(o=o.toString())):o="",o.indexOf&&o.indexOf("&")!==-1&&(__filter_div.innerHTML=o,o=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText),o.replace&&(o=o.replace(/[\r\n\u2028]/g,"")),f.push(o);l.searchCellCache=f,l.searchRowCache=f.join("  "),c=!0}return c}function getRowDisplay(n,e){var t=n.data[e],r=n.columns;if(!t)return[];if(!t.displayData){t.displayData=[];for(var a=0,s=r.length;a<s;a++)t.displayData.push(getCellData(n,e,a,"display"))}return t.displayData}function createTr(n,e,t,r){var a=n.data[e],s=[],o,l,c,d,f,p,b=n.classes.tbody.row;if(a&&a.tr===null){let x=a.data;for(o=t||document.createElement("tr"),a.tr=o,a.cells=s,Dom.s(o).classAdd(b),o._DT_RowIndex=e,rowAttributes(n,a),d=0,f=n.columns.length;d<f;d++){c=n.columns[d],p=!(t&&r&&r[d]),l=p?document.createElement(c.cellType):r[d],l||log(n,0,"Incorrect column count",18),l._DT_CellIndex={row:e,column:d},s.push(l);var v=getRowDisplay(n,e);(p||(c.render||c.data!==d)&&(!util.is.plainObject(c.data)||c.data&&c.data._!==d+".display"))&&writeCell(l,v[d]),Dom.s(l).classAdd(c.className),c.visible&&p?o.appendChild(l):!c.visible&&!p&&l.parentNode.removeChild(l),c.createdCell&&c.createdCell.call(n.instance,l,getCellData(n,e,d),x,e,d)}callbackFire(n,"rowCreated","row-created",[o,x,e,s])}else a&&Dom.s(a.tr).classAdd(b)}function rowAttributes(n,e){var t=e.tr,r=e.data;if(t){var a=n.rowIdFn(r);if(a&&(t.id=a),r.DT_RowClass){var s=r.DT_RowClass.split(" ");e.addedClasses=e.addedClasses?util.unique(e.addedClasses.concat(s)):s,Dom.s(t).classRemove(e.addedClasses.join(" ")).classAdd(r.DT_RowClass)}r.DT_RowAttr&&Dom.s(t).attr(r.DT_RowAttr),r.DT_RowData&&Dom.s(t).data(r.DT_RowData)}}function buildHead(n,e){let t=n.classes,r=n.columns,a,s,o,l=Dom.s(e==="header"?n.thead:n.tfoot),c=e==="header"?"title":e;if(!l)return;if((e==="header"||util.array.pluck(n.columns,c).join(""))&&(o=l.find("tr"),o.count()||(o=Dom.c("tr").appendTo(l)),o.count()===1)){let f=0;for(o.find("td, th").each(p=>{f+=p.colSpan}),a=f,s=r.length;a<s;a++)Dom.c("th").html(r[a][c]||"").appendTo(o)}let d=detectHeader(n,l.get(0),!0);e==="header"?(n.header=d,l.find("tr").classAdd(t.thead.row)):(n.footer=d,l.find("tr").classAdd(t.tfoot.row)),l.children("tr").children("th, td").each(f=>{(e==="header"?renderer(n,"header"):renderer(n,"footer"))(n,Dom.s(f),t)})}function headerLayout(n,e,t){var r,a,s,o=[],l=[],c=n.columns,d=c.length,f,p;if(e){for(t||(t=util.array.range(d).filter(function(x){return c[x].visible})),r=0;r<e.length;r++)o[r]=e[r].slice().filter(function(x,_){return t.includes(_)}),l.push([]);for(r=0;r<o.length;r++)for(a=0;a<o[r].length;a++)if(f=1,p=1,l[r][a]===void 0){for(s=o[r][a].cell;o[r+f]!==void 0&&o[r][a].cell==o[r+f][a].cell;)l[r+f][a]=null,f++;for(;o[r][a+p]!==void 0&&o[r][a].cell==o[r][a+p].cell;){for(var b=0;b<f;b++)l[r+b][a+p]=null;p++}var v=Dom.s(s).find(".dt-column-title");l[r][a]={cell:s,colspan:p,rowspan:f,title:v.count()?v.html():Dom.s(s).html()}}return l}}function drawHead(n,e){let t=headerLayout(n,e),r;if(t)for(let a=0;a<e.length;a++){r=e[a].row,r&&Dom.s(r).detachChildren();for(let s=0;s<t[a].length;s++){let o=t[a][s];o&&Dom.s(o.cell).appendTo(r).attr("rowspan",o.rowspan).attr("colspan",o.colspan)}}}function draw$1(n,e){setStartPosition(n);var t=callbackFire(n,"preDraw","preDraw",[n]);if(t.indexOf(!1)!==-1){processingDisplay(n,!1);return}var r=[],a=0,s=dataSource(n)=="ssp",o=n.display,l=n.displayStart,c=displayEnd(n),d=n.columns,f=Dom.s(n.tbody);if(n.doingDraw=!0,n.deferLoading)n.deferLoading=!1,n.drawCount++,processingDisplay(n,!1);else if(!s)n.drawCount++;else if(!n.destroying&&!e){n.drawCount===0&&f.empty().append(_emptyRow(n)),ajaxUpdate(n);return}if(o.length!==0)for(var p=s?0:l,b=s?n.data.length:c,v=p;v<b;v++){var x=o[v],_=n.data[x];if(_!==null){_.tr===null&&createTr(n,x);for(var E=_.tr,A=0;A<d.length;A++){var O=d[A],$=_.cells[A];Dom.s($).classAdd(O.type?ext.type.className[O.type]:null).classAdd(n.classes.tbody.cell)}callbackFire(n,"row",null,[E,_.data,a,v,x]),r.push(E),a++}}else r[0]=_emptyRow(n);callbackFire(n,"header","header",[Dom.s(n.thead).children("tr").get(0),getDataMaster(n),l,c,o]),callbackFire(n,"footer","footer",[Dom.s(n.tfoot).children("tr").get(0),getDataMaster(n),l,c,o]),f.detachChildren().append(r),Dom.s(n.tableWrapper).classToggle("dt-empty-footer",Dom.s(n.tfoot).find("tr").count()===0),callbackFire(n,"draw","draw",[n],!0),n.wasOrdered=!1,n.wasFiltered=!1,n.doingDraw=!1}function reDraw(n,e,t){let r=n.features,a=r.ordering,s=r.searching;(t===void 0||t===!0)&&(columnTypes(n),columnWidths(n),a&&sort(n),s?filterComplete(n):n.display=n.displayMaster.slice()),e!==!0?n.displayStart=0:lengthOverflow(n),n.drawHold=e,draw$1(n),n.api.one("draw",function(){n.drawHold=!1})}function _emptyRow(n){let e=n.language,t=e.zeroRecords,r=dataSource(n);return(r==="ssp"||r==="ajax")&&!n.json?t=e.loadingRecords:e.emptyTable&&recordsTotal(n)===0&&(t=e.emptyTable),Dom.c("tr").append(Dom.c("td").attr("colSpan",visibleColumns(n)).classAdd(n.classes.empty.row).html(t)).get(0)}function detectHeader(n,e,t){let r=n.columns,a=Dom.s(e).children("tr"),s,o,l,c,d,f,p,b,v,x,_=n.titleRow,E=e&&e.nodeName.toLowerCase()==="thead",A=[],O,$=function(L,B,g){let q=L[B];for(;q[g];)g++;return g};for(l=0,f=a.count();l<f;l++)A.push([]);for(l=0,f=a.count();l<f;l++)for(s=a.get(l),b=0,o=s.firstChild;o;){if(o.nodeName.toUpperCase()=="TD"||o.nodeName.toUpperCase()=="TH"){let L=Dom.s(o),B=[];if(v=parseInt(L.attr("colspan")||"1")||1,x=parseInt(L.attr("rowspan")||"1")||1,v=!v||v===0||v===1?1:v,x=!x||x===0||x===1?1:x,p=$(A,l,b),O=v===1,t){if(O){columnOptions(n,p,escapeObject(L.data()));let g=r[p],q=L.attr("width")||null,Y=L.get(0).style.width.match(/width:\s*(\d+[pxem%]+)/);Y&&(q=Y[1]),g.widthOrig=g.width||q,E?(g.title!==null&&!g.autoTitle&&(_===!0&&l===0||_===!1&&l===a.count()-1||_===l||_===null)&&L.html(g.title),!g.title&&O&&(g.title=util.string.stripHtml(L.html()),g.autoTitle=!0)):g.footer&&L.html(g.footer),g.ariaTitle||(g.ariaTitle=L.attr("aria-label")||g.title),g.className&&L.classAdd(g.className)}L.find("div.dt-column-title").count()===0&&Dom.c("div").classAdd("dt-column-title").append(Array.from(L.get(0).childNodes)).appendTo(L),n.orderIndicators&&E&&L.filter(":not([data-dt-order=disable])").count()!==0&&L.parent(":not([data-dt-order=disable])").count()!==0&&L.find("div.dt-column-order").count()===0&&Dom.c("div").classAdd("dt-column-order").appendTo(L);var P=E?"header":"footer";L.find("div.dt-column-"+P).count()===0&&Dom.c("div").classAdd("dt-column-"+P).append(Array.from(L.get(0).childNodes)).appendTo(L)}for(d=0;d<v;d++){for(c=0;c<x;c++)A[l+c][p+d]={cell:L.get(0),unique:O},A[l+c].row=s;B.push(p+d)}L.attr("data-dt-column",util.unique(B).join(","))}o=o.nextSibling}return A}function setStartPosition(n){var e=dataSource(n)=="ssp",t=n.displayStartInit;t!==void 0&&t!==-1&&(n.displayStart=e?t:t>=recordsDisplay(n)?0:t,n.displayStartInit=-1)}function recordsTotal(n){return dataSource(n)=="ssp"?n.recordsTotal*1:n.displayMaster.length}function recordsDisplay(n){return dataSource(n)=="ssp"?n.recordsDisplay*1:n.display.length}function displayEnd(n){var e=n.pageLength,t=n.displayStart,r=t+e,a=n.display.length,s=n.features,o=s.paging;return s.serverSide?o===!1||e===-1?t+a:Math.min(t+e,n.recordsDisplay):!o||r>a||e===-1?a:r}function selectorRun(n,e,t,r,a){var s=[],o,l,c,d=typeof e;for(e instanceof Dom&&(e=e.get()),(!e||d==="string"||d==="function"||e.length===void 0)&&(e=[e]),l=0,c=e.length;l<c;l++)o=t(typeof e[l]=="string"?e[l].trim():e[l]),o=o.filter(function(p){return p!=null}),o&&o.length&&(s=s.concat(o));var f=ext.selector[n];if(f.length)for(l=0,c=f.length;l<c;l++)s=f[l](r,a,s);return unique(s)}function selectorOpts(n){return n||(n={}),n.filter&&n.search===void 0&&(n.search=n.filter),assign({},{columnOrder:"implied",search:"none",order:"current",page:"all"},n)}function selectorFirst(n){var e=n.inst(n.context[0],null,n._newClass.replace(/s$/,""));return n.length&&e.push(n[0]),e.selector=n.selector,e.length&&e[0].length>1&&e[0].splice(1),e}function selectorRowIndexes(n,e){var t,r,a,s=[],o=n.display,l=n.displayMaster,c=e.search,d=e.order,f=e.page;if(dataSource(n)=="ssp")return c==="removed"?[]:range(0,l.length);if(f=="current")for(t=n.displayStart,r=displayEnd(n);t<r;t++)s.push(o[t]);else if(d=="current"||d=="applied"){if(c=="none")s=l.slice();else if(c=="applied")s=o.slice();else if(c=="removed"){var p={};for(t=0,r=o.length;t<r;t++)p[o[t]]=null;l.forEach(function(v){Object.prototype.hasOwnProperty.call(p,v)||s.push(v)})}}else if(d=="index"||d=="original")for(t=0,r=n.data.length;t<r;t++)n.data[t]&&(c=="none"?s.push(t):(a=o.indexOf(t),(a===-1&&c=="removed"||a>=0&&c=="applied")&&s.push(t)));else if(typeof d=="number"){var b=sort(n,d,"asc");if(c==="none")s=b;else for(t=0;t<b.length;t++)a=o.indexOf(b[t]),(a===-1&&c=="removed"||a>=0&&c=="applied")&&s.push(b[t])}return s}const __arrayProto=Array.prototype,Api=function(n,e){if(!(this instanceof Api))return new Api(n,e);this.context=toContextArray(n),arrayApply(this,e),extendApi(this,"Api")};util.object.assign(Api.prototype,{_newClass:"Api",isDataTableApi:!0,any(){return this.count()!==0},context:[],count(){return this.flatten().length},each(n){for(var e=0,t=this.length;e<t;e++)n.call(this,this[e],e,this);return this},eq(n){var e=this.context;return e.length>n?this.inst(e[n],this[n],"Api"):null},filter(n){var e=__arrayProto.filter.call(this,n,this);return this.inst(this.context,e)},flatten(){var n=[];return this.inst(this.context,n.concat.apply(n,this.toArray()))},get(n){return this[n]},join:__arrayProto.join,includes(n){return this.indexOf(n)!==-1},indexOf:__arrayProto.indexOf,inst(n,e,t){let r=t||this._newClass,a=Api;return classes[r]&&(a=classes[r]),new a(n,e)},iterator(n,e,t,r){var a=[],s,o,l,c,d,f=this.context,p,b,v,x=this.selector;for(typeof n=="string"&&(r=t,t=e,e=n,n=!1),o=0,l=f.length;o<l;o++){var _=this.inst(f[o]);if(e==="table")s=t.call(_,f[o],o),s!==void 0&&a.push(s);else if(e==="columns"||e==="rows")s=t.call(_,f[o],this[o],o),s!==void 0&&a.push(s);else if(e==="every"||e==="column"||e==="column-rows"||e==="row"||e==="cell")for(b=this[o],e==="column-rows"&&(p=selectorRowIndexes(f[o],x.opts)),c=0,d=b.length;c<d;c++)v=b[c],e==="cell"?s=t.call(_,f[o],v.row,v.column,o,c):s=t.call(_,f[o],v,o,c,p),s!==void 0&&a.push(s)}if(a.length||r){var E=this.inst(f,n?a.concat.apply([],a):a),A=E.selector;return A&&(A.rows=x.rows,A.cols=x.cols,A.opts=x.opts),E}return this},lastIndexOf:__arrayProto.lastIndexOf,length:0,map(n){var e=__arrayProto.map.call(this,n,this);return this.inst(this.context,e)},pluck(n){var e=util.get(n);return this.map(t=>e(t))},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce,reduceRight:__arrayProto.reduceRight,reverse:__arrayProto.reverse,selector:{rows:void 0,cols:void 0,opts:void 0},shift:__arrayProto.shift,slice(){return this.inst(this.context,this)},sort:__arrayProto.sort,splice:__arrayProto.splice,toArray(){return __arrayProto.slice.call(this)},to$(){return util.external("jq")(this)},toDom(){return new Dom(this.toArray())},toJQuery:function(){return util.external("jq")(this)},unique:function(){return this.inst(this.context,util.array.unique(this.toArray()))},unshift:__arrayProto.unshift});function register(n,e){if(Array.isArray(n)){for(let r=0;r<n.length;r++)Api.register(n[r],e);return}let t=getPrototypeNames(n);if(classes[t.hostClass]||createApiClass(t.hostClass),t.property)properties[t.propertyHost]||(properties[t.propertyHost]=[]),properties[t.propertyHost].push({couldReturn:t.couldReturn,property:t.property,method:t.methodName,fn:e});else{let r=function(){let a=this._newClass;this._newClass=t.couldReturn;let s=e.apply(this,arguments);return this._newClass=a,s};classes[t.hostClass].prototype[t.methodName]=r,t.hostClass==="Api"&&util.object.each(classes,(a,s)=>{s.prototype[t.methodName]||(s.prototype[t.methodName]=r)})}}function registerPlural(n,e,t){Api.register(n,t),Api.register(e,function(){var r=t.apply(this,arguments);return r===this?this:r&&r.isDataTableApi?r.length?Array.isArray(r[0])?this.inst(r.context,r[0]):r[0]:void 0:r})}Api.register=register;Api.registerPlural=registerPlural;const properties={},classes={Api};window.classes=classes;window.properties=properties;function createApiClass(n){let e=function(t,r){this.context=toContextArray(t),arrayApply(this,r),extendApi(this,"Api"),extendApi(this,this._newClass)};e.prototype=Object.create(Api.prototype),Object.defineProperty(e,"name",{value:n,writable:!1}),e.prototype._newClass=n,classes[n]=e}function extendApi(n,e){let t=properties[e];if(t)for(let r=0;r<t.length;r++){let a=t[r];if(!n[a.property])n[a.property]={};else if(!n.hasOwnProperty(a.property)){let s=n[a.property];n[a.property]=function(){return s.apply(n,arguments)}}n[a.property][a.method]=function(){let s=n._newClass;n._newClass=a.couldReturn;let o=a.fn.apply(n,arguments);return n._newClass=s,o}}}function getPrototypeNames(n){let e=n.split("."),t=null,r="Api",a="Api",s="",o="",l="";for(let c=0;c<e.length;c++){let d=e[c],f=d.replace("()","");r=a,a+=f.charAt(0).toUpperCase()+f.slice(1).toLowerCase(),d.includes("()")?(s=f,l.includes("()")&&(t=null,o="")):(t=d,o=r),l=d}return{couldReturn:a,hostClass:r,property:t,propertyHost:o,methodName:s}}function toContext(n){var e=n,t,r=null,a=ext.settings,s=util.array.pluck(a,"table");if(e){if(e.table&&e.features)return[e];if(e.nodeName&&e.nodeName.toLowerCase()==="table")return t=s.indexOf(e),t!==-1?[a[t]]:null;if(e&&typeof e.settings=="function")return e.settings().toArray();typeof e=="string"?r=Dom.s(e).get():(util.is.jquery(e)||util.is.dom(e))&&(r=e.get())}else return[];if(r)return a.filter(function(o,l){return r.includes(s[l])})}function toContextArray(n){var e,t=[],r=function(a){var s=toContext(a);s&&t.push.apply(t,s)};if(Array.isArray(n))for(e=0;e<n.length;e++)r(n[e]);else r(n);return t.length>1?util.unique(t):t}register("$()",function(n,e){let t=util.external("jq");t||log(this.context[0],0,"No jQuery available. Use `.dom()` or register jQuery");let r=this.rows(e).nodes(),a=t(r);return t([].concat(a.filter(n).toArray(),a.find(n).toArray()))});["on","one","off"].forEach(n=>{register(n+"()",function(){var e=Array.prototype.slice.call(arguments);e[0]=e[0].split(/\s/).map(function(r){return r.match(/\.dt\b/)?r:r+".dt"}).join(" ");var t=Dom.s(this.tables().nodes());return t[n].apply(t,e),this})});register("clear()",function(){return this.iterator("table",function(n){clearTable(n)})});register("error()",function(n){return this.iterator("table",function(e){log(e,0,n)})});register("settings()",function(){return new Api(this.context,this.context)});register("init()",function(){var n=this.context;return n.length?n[0].init:null});register("data()",function(){return this.iterator("table",function(n){return util.array.pluck(n.data,"data")}).flatten()});register("trigger()",function(n,e,t){return this.iterator("table",function(r){return callbackFire(r,null,n,e,t)}).flatten()});register("ready()",function(n){var e=this.context;return n?this.tables().every(function(){var t=this;this.context[0].initDone?n.call(t):this.on("init.dt.DT",function(){n.call(t)})}):e.length&&e[0].initDone||!1});register("destroy()",function(n){return n=n||!1,this.iterator("table",function(e){var t=e.classes,r=e.table,a=e.tbody,s=e.thead,o=e.tfoot,l=Dom.s(r),c=Dom.s(a),d=Dom.s(e.tableWrapper),f=e.data.map(function(E){return E?E.tr:null}).filter(E=>!!E),p=t.order;e.destroying=!0,callbackFire(e,"destroy","destroy",[e],!0),n||new Api(e).columns().visible(),e.resizeObserver&&e.resizeObserver.disconnect(),d.off(".DT").find(":not(tbody *)").off(".DT"),e.windowResizeCb&&window.removeEventListener("resize",e.windowResizeCb),r!=s.parentNode&&(l.children("thead").detach(),l.append(s)),o&&r!=o.parentNode&&(l.children("tfoot").detach(),l.append(o)),cleanHeader(s,"header"),cleanHeader(o,"footer"),e.colgroup.remove(),e.order=[],e.orderFixed=[],sortingClasses(e),l.find("th, td").classRemove(Object.values(ext.type.className).join(" ")),Dom.s(s).find("th, td").classRemove(p.none+" "+p.canAsc+" "+p.canDesc+" "+p.isAsc+" "+p.isDesc).css("width","").attrRemove("aria-sort"),c.children().detach(),c.append(f);var b=e.tableWrapper.parentNode,v=e.tableWrapper.nextSibling,x=n?"remove":"detach";l[x](),d[x](),!n&&b&&(b.insertBefore(r,v),l.css("width",e+"px").classRemove(t.table));var _=ext.settings.indexOf(e);_!==-1&&ext.settings.splice(_,1)})});register("i18n()",function(n,e,t){var r=this.context[0],a=util.get(n)(r.language);return a===void 0&&(a=e),util.is.plainObject(a)&&t!==!1&&(a=t!==void 0&&a[t]!==void 0?a[t]:a._),typeof a=="string"?a.replace("%d",t):a});function cleanHeader(n,e){let t=Dom.s(n);t.find(".dt-column-order").remove(),t.find(".dt-column-title").each(function(r){let a=Dom.s(r);var s=a.html();a.parent().parent().html(s),a.remove()}),t.find("div.dt-column-"+e).remove(),t.find("th, td").attrRemove("data-dt-column")}const __reload=function(n,e,t){if(t){var r=new Api(n);r.one("draw",function(){t(r.ajax.json())})}if(dataSource(n)=="ssp")reDraw(n,e);else{processingDisplay(n,!0);var a=n.jqXHR;a&&a.readyState!==4&&typeof a.abort=="function"&&a.abort(),buildAjax(n,{},function(s){clearTable(n);for(var o=ajaxDataSrc(n,s,!1),l=0,c=o.length;l<c;l++)addData(n,o[l]);reDraw(n,e),initComplete(n),processingDisplay(n,!1)})}};register("ajax.json()",function(){var n=this.context;if(n.length>0)return n[0].json});register("ajax.params()",function(){var n=this.context;if(n.length>0)return n[0].ajaxData});register("ajax.reload()",function(n,e){return this.iterator("table",function(t){__reload(t,e===!1,n)})});register("ajax.url()",function(n){var e=this.context;if(n===void 0){if(e.length===0)return;let t=e[0];return util.is.plainObject(t.ajax)?t.ajax.url:t.ajax}return this.iterator("table",function(t){util.is.plainObject(t.ajax)?t.ajax.url=n:t.ajax=n},!0)});register("ajax.url().load()",function(n,e){return this.iterator("table",function(t){__reload(t,e===!1,n)})});function selectCells(n,e,t){var r=n.data,a=selectorRowIndexes(n,t),s,o,l=n.columns.length,c,d,f,p,b,v,x=function(_){var E=typeof _=="function";if(_==null||E){for(c=[],d=0,f=a.length;d<f;d++)for(o=a[d],p=0;p<l;p++)b={row:o,column:p},E?(v=r[o],_(b,getCellData(n,o,p),v&&v.cells?v.cells[p]:null)&&c.push(b)):c.push(b);return c}if(plainObject(_))return _.column!==void 0&&_.row!==void 0&&a.indexOf(_.row)!==-1?[_]:[];if(!s){let P=removeEmpty(pluckOrder(r,a,"cells"));s=Dom.s(flatten([],P))}let A=s.filter(_).mapTo(P=>({row:P._DT_CellIndex.row,column:P._DT_CellIndex.column}));if(A.length||!_.nodeName)return A;let O=Dom.s(_).closest("*[data-dt-row]"),$=Dom.s(_).closest("*[data-dt-column]");return O.count()?[{row:parseInt(O.attr("data-dt-row")),column:parseInt($.attr("data-dt-column"))}]:[]};return selectorRun("cell",e,x,n,t)}register("cells()",function(n,e,t){let r=null,a=null,s,o;if(plainObject(n)?n.row===void 0?o=n:(s=n,o=e):plainObject(e)||e===void 0?(s=n,o=e):n!==void 0&&(r=n,a=e,o=t),a===null)return this.iterator("table",function(E){return selectCells(E,s,selectorOpts(o))});let l=o?{page:o.page,order:o.order,search:o.search}:{},c=this.columns(a,l),d=this.rows(r,l),f,p,b,v,x=this.iterator("table",function(E,A){let O=[];for(f=0,p=d[A].length;f<p;f++)for(b=0,v=c[A].length;b<v;b++)O.push({row:d[A][f],column:c[A][b]});return O},!0),_=o&&o.selected?this.cells(x.toArray(),o):x;return assign(_.selector,{cols:a,rows:r,opts:o}),_});register("cells().every()",function(n){var e=this.selector.opts,t=0;return this.iterator("every",(r,a,s)=>{let o=this.cell(a,e);n.call(o,o[0][0].row,o[0][0].column,s,t),t++})});registerPlural("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(n,e,t){var r=n.data[e];return r&&r.cells?r.cells[t]:void 0},!0)});register("cells().data()",function(){return this.iterator("cell",function(n,e,t){return getCellData(n,e,t)},!0)});registerPlural("cells().render()","cell().render()",function(n){return this.iterator("cell",function(e,t,r){return getCellData(e,t,r,n)},!0)});registerPlural("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(n,e,t){return{row:e,column:t,columnVisible:columnIndexToVisible(n,t)}},!0)});registerPlural("cells().invalidate()","cell().invalidate()",function(n){return this.iterator("cell",function(e,t,r){invalidateRow(e,t,n,r)})});register("cell()",function(n,e,t){return selectorFirst(this.cells(n,e,t))});register("cell().data()",function(n){var e=this.context,t=this[0];return n===void 0?e.length&&t.length?getCellData(e[0],t[0].row,t[0].column):void 0:(setCellData(e[0],t[0].row,t[0].column,n),invalidateRow(e[0],t[0].row,"data",t[0].column),this)});const __re_column_selector=/^(.*?):(name|title|visIdx|visible)$/;function columnData(n,e,t,r,a,s){let o=[];for(let l=0,c=a.length;l<c;l++)o.push(getCellData(n,a[l],e,s));return o}function columnHeader(n,e,t){var r=n.header,a=n.titleRow,s=0;if(t!==void 0)s=t;else if(a===!0)s=0;else if(a===!1)s=r.length-1;else if(a!==null)s=a;else{for(var o=0;o<r.length;o++)r[o][e].unique&&Dom.s(r[o][e].cell).find(".dt-column-title").text()&&(s=o);s===null&&(s=0)}return r[s][e].cell}function columnHeaderCells(n){for(var e=[],t=0;t<n.length;t++)for(var r=0;r<n[t].length;r++){var a=n[t][r].cell;e.includes(a)||e.push(a)}return e}function selectColumns(n,e,t){var r=n.columns,a,s,o=columnHeaderCells(n.header),l=function(d){var f=intVal(d);if(d==="")return range(r.length);if(f!==null)return[f>=0?f:r.length+f];if(typeof d=="function"){var p=selectorRowIndexes(n,t);return r.map(function(A,O){return d(O,columnData(n,O,0,0,p),columnHeader(n,O))?O:null})}var b=typeof d=="string"?d.match(__re_column_selector):"";if(b)switch(b[2]){case"visIdx":case"visible":if(b[1]&&b[1].match(/^\d+$/)){var v=parseInt(b[1],10);if(v<0){var x=r.map(function(A,O){return A.visible?O:null});return[x[x.length+v]]}return[visibleToColumnIndex(n,v)]}return r.map(function(A,O){return!A.visible||A.responsiveVisible===!1?null:b&&b[1]?Dom.s(o[O]).filter(b[1]).count()>0?O:null:O});case"name":return a||(a=pluck(r,"name")),a.map(function(A,O){return b&&A===b[1]?O:null});case"title":return s||(s=pluck(r,"title")),s.map(function(A,O){return b&&A===b[1]?O:null});default:return[]}if(d.nodeName&&d._DT_CellIndex)return[d._DT_CellIndex.column];var _=Dom.s(o).filter(d).mapTo(A=>columnsFromHeader(A)).flat().sort(function(A,O){return A-O});if(_.length||!d.nodeName)return _;var E=Dom.s(d).closest("*[data-dt-column]");return E.count()?[parseInt(E.attr("data-dt-column"))]:[]},c=selectorRun("column",e,l,n,t);return t.columnOrder&&t.columnOrder==="index"?c.sort(function(d,f){return d-f}):c}function setColumnVis(n,e,t){var r=n.columns,a=r[e],s=n.data,o,l,c,d;if(t===void 0)return a.visible;if(a.visible===t)return!1;if(t){var f=pluck(r,"visible").indexOf(!0,e+1);for(l=0,c=s.length;l<c;l++){let p=s[l];p&&(d=p.tr,o=p.cells,d&&d.insertBefore(o[e],o[f]||null))}}else Dom.s(removeEmpty(pluck(n.data,"cells",e))).detach();return a.visible=t,colGroup(n),!0}register("columns()",function(n,e){let t,r;n===void 0?t="":plainObject(n)?(t="",e=n):t=n,r=selectorOpts(e);let a=this.iterator("table",s=>selectColumns(s,t,r),!0);return a.selector.cols=t,a.selector.opts=r,a});register("columns().every()",function(n){var e=this.selector.opts,t=0;return this.iterator("every",(r,a,s)=>{let o=this.column(a,e);n.call(o,a,s,t),t++})});registerPlural("columns().header()","column().header()",function(n){return this.iterator("column",function(e,t){return columnHeader(e,t,n)},!0)});registerPlural("columns().footer()","column().footer()",function(n){return this.iterator("column",function(e,t){var r=e.footer;return r.length?e.footer[n!==void 0?n:0][t].cell:null},!0)});registerPlural("columns().data()","column().data()",function(){return this.iterator("column-rows",columnData,!0)});registerPlural("columns().render()","column().render()",function(n){return this.iterator("column-rows",function(e,t,r,a,s){return columnData(e,t,r,a,s,n)},!0)});registerPlural("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(n,e){return n.columns[e].data},!0)});registerPlural("columns().init()","column().init()",function(){return this.iterator("column",function(n,e){return n.columns[e]},!0)});registerPlural("columns().names()","column().name()",function(){return this.iterator("column",function(n,e){return n.columns[e].name},!0)});registerPlural("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(n,e,t,r,a){return removeEmpty(pluckOrder(n.data,a,"cells",e))},!0)});registerPlural("columns().titles()","column().title()",function(n,e){return this.iterator("column",function(t,r){typeof n=="number"&&(e=n,n=void 0);var a=Dom.s(this.column(r).header(e)).find(".dt-column-title");return n!==void 0?(a.html(n),this):a.html()},!0)});registerPlural("columns().types()","column().type()",function(){return this.iterator("column",function(n,e){var t=n.columns[e],r=t.type;return r||(columnTypes(n),r=t.type),r},!0)});registerPlural("columns().visible()","column().visible()",function(n,e){var t=this,r=[],a=this.iterator("column",function(s,o){if(n===void 0)return s.columns[o].visible;setColumnVis(s,o,n)&&r.push(o)});return n!==void 0&&this.iterator("table",function(s){drawHead(s,s.header),drawHead(s,s.footer),s.display.length||Dom.s(s.tbody).find("td[colspan]").attr("colspan",visibleColumns(s)),saveState(s),t.iterator("column",function(o,l){r.includes(l)&&callbackFire(o,null,"column-visibility",[o,l,n,e])}),r.length&&(e===void 0||e)&&t.columns.adjust()}),a});registerPlural("columns().widths()","column().width()",function(){var n=this.columns(":visible"),e=Dom.c("tr").html("<td>"+Array(n.count()).join("</td><td>")+"</td>");Dom.s(this.table().body()).append(e);var t=[],r=n.indexes();return e.children().each((a,s)=>{t[r[s]]=Dom.s(a).width("outer")}),e.remove(),this.iterator("column",(a,s)=>t[s]||0,!0)});registerPlural("columns().indexes()","column().index()",function(n){return this.iterator("column",function(e,t){return n==="visible"?columnIndexToVisible(e,t):t},!0)});register("columns.adjust()",function(){return this.iterator("table",function(n){n.containerWidth=-1,adjustColumnSizing(n)},!0)});register("column.index()",function(n,e){if(this.context.length!==0){var t=this.context[0];if(n==="fromVisible"||n==="toData")return visibleToColumnIndex(t,e);if(n==="fromData"||n==="toVisible")return columnIndexToVisible(t,e)}return-1});register("column()",function(n,e){return selectorFirst(this.columns(n,e))});Api.register("draw()",function(n){return this.iterator("table",function(e){n==="page"?draw$1(e):(typeof n=="string"&&(n=n!=="full-hold"),reDraw(e,n===!1))})});register("order()",function(n,e){let t=this.context,r=Array.prototype.slice.call(arguments);return n===void 0?t.length!==0?t[0].order:void 0:(typeof n=="number"&&typeof e=="string"?n=[[n,e]]:r.length>1&&(n=r),this.iterator("table",function(a){let s=[];sortResolve(a,s,n),a.order=s}))});register("order.listener()",function(n,e,t){return this.iterator("table",function(r){sortAttachListener(r,n,"",e,t)})});register("order.fixed()",function(n){if(!n){var e=this.context,t=e.length?e[0].orderFixed:void 0;return Array.isArray(t)?{pre:t}:t}return this.iterator("table",function(r){r.orderFixed=assignDeep({},n)})});register(["columns().order()","column().order()"],function(n){var e=this;return n?this.iterator("table",function(t,r){t.order=e[r].map(function(a){return[a,n]})}):this.iterator("column",function(t,r){for(var a=sortFlatten(t),s=0,o=a.length;s<o;s++)if(a[s].col===r)return a[s].dir;return null},!0)});registerPlural("columns().orderable()","column().orderable()",function(n){return this.iterator("column",function(e,t){var r=e.columns[t];return n?r.orderSequence:r.orderable},!0)});function lengthChange(n,e){let t=typeof e=="string"?parseInt(e,10):e;n.pageLength=t,lengthOverflow(n),callbackFire(n,null,"length",[n,t])}register("page()",function(n){return n===void 0?this.page.info().page:this.iterator("table",function(e){pageChange(e,n)})});register("page.info()",function(){var n=this.context[0],e=n.displayStart,t=n.features.paging?n.pageLength:-1,r=recordsDisplay(n),a=t===-1;return{page:a?0:Math.floor(e/t),pages:a?1:Math.ceil(r/t),start:e,end:displayEnd(n),length:t,recordsTotal:recordsTotal(n),recordsDisplay:r,serverSide:dataSource(n)==="ssp"}});register("page.len()",function(n){return n==null?this.context.length!==0?this.context[0].pageLength:void 0:this.iterator("table",function(e){lengthChange(e,n)})});register("processing()",function(n){return this.iterator("table",e=>processingDisplay(e,n))});Dom.s(document).on("preInit.dt",function(n,e){var t=new Api(e);t.on("stateSaveParams.DT",function(r,a,s){for(var o=a.rowIdFn,l=a.displayMaster,c=[],d=0;d<l.length;d++){var f=l[d],p=a.data[f];p.detailsShow&&c.push("#"+o(p.data))}s.childRows=c}),t.on("stateLoaded.DT",function(r,a,s){detailsStateLoad(t,s)})});Dom.s(document).on("plugin-init.dt",function(n,e){var t=e.api;detailsStateLoad(t,t.state.loaded())});function detailsStateLoad(n,e){e&&e.childRows&&n.rows(e.childRows.map(function(t){return t.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g,"$1\\:")})).every(function(){callbackFire(n.settings()[0],null,"requestChild",[this])})}function detailsAdd(n,e,t,r){if(e){var a=[],s=function(o,l){if(Array.isArray(o)||util.is.jquery(o)){for(var c=0,d=o.length;c<d;c++)s(o[c],l);return}if(o.nodeName&&o.nodeName.toLowerCase()==="tr")o.setAttribute("data-dt-row",e.idx),a.push(o);else{let f=Dom.c("td").classAdd(l),p=Dom.c("tr").append(f).attr("data-dt-row",e.idx).classAdd(l);o.nodeName?f.append(o):f.html(o),f.get(0).colSpan=visibleColumns(n),a.push(p.get(0))}};s(t,r),e.details&&e.details.detach(),e.details=Dom.s(a),e.detailsShow&&e.tr&&e.details.insertAfter(e.tr)}}var detailsState=util.throttle(function(n){saveState(n[0])},500);function detailsRemove(n,e){var t=n.context;if(t.length){var r=t[0].data[e!==void 0?e:n[0]];r&&r.details&&(r.details.detach(),r.detailsShow=void 0,r.details=void 0,Dom.s(r.tr).classRemove("dt-hasChild"),detailsState(t))}}function detailsDisplay(n,e){var t=n.context;if(t.length&&n.length){var r=t[0].data[n[0]];r&&r.details&&(r.detailsShow=e,e&&r.tr?(r.details.insertAfter(r.tr),Dom.s(r.tr).classAdd("dt-hasChild")):e||(r.details.detach(),Dom.s(r.tr).classRemove("dt-hasChild")),callbackFire(t[0],null,"childRow",[e,n.row(n[0])]),detailsEvents(t[0]),detailsState(t))}}function detailsEvents(n){var e=new Api(n),t=".dt.DT_details",r="draw"+t,a="column-sizing"+t,s="destroy"+t,o=n.data;e.off(r+" "+a+" "+s),util.array.pluck(o,"details").length>0&&(e.on(r,function(l,c){n===c&&e.rows({page:"current"}).eq(0).each(function(d){var f=o[d];f&&f.detailsShow&&f.details&&f.tr&&f.details.insertAfter(f.tr)})}),e.on(a,function(l,c){if(n===c)for(var d,f=visibleColumns(c),p=0,b=o.length;p<b;p++)d=o[p],d&&d.details&&d.details.each(function(v){var x=Dom.s(v).children("td");x.count()==1&&x.attr("colspan",f)})}),e.on(s,function(l,c){if(n===c)for(var d=0,f=o.length;d<f;d++){let p=o[d];p&&p.details&&detailsRemove(e,d)}}))}var _emp="",_child_obj=_emp+"row().child",_child_mth=_child_obj+"()";Api.register(_child_mth,function(n,e){var t,r=this.context;return n===void 0?r.length&&this.length&&r[0].data[this[0]]?(t=r[0].data[this[0]])===null||t===void 0?void 0:t.details:void 0:(n===!0?this.child.show():n===!1?detailsRemove(this):r.length&&this.length&&detailsAdd(r[0],r[0].data[this[0]],n,e),this.inst(this.context,this))});Api.register([_child_obj+".show()",_child_mth+".show()"],function(){return detailsDisplay(this,!0),this});Api.register([_child_obj+".hide()",_child_mth+".hide()"],function(){return detailsDisplay(this,!1),this});Api.register([_child_obj+".remove()",_child_mth+".remove()"],function(){return detailsRemove(this),this});Api.register(_child_obj+".isShown()",function(){var n=this.context;return n.length&&this.length&&n[0].data[this[0]]&&n[0].data[this[0]].detailsShow||!1});function selectRows(n,e,t){var r,a=function(o){var l=util.conv.intVal(o),c=n.data;if(l!==null&&!t)return[l];if(r||(r=selectorRowIndexes(n,t)),l!==null&&r.indexOf(l)!==-1)return[l];if(o==null||o==="")return r;if(typeof o=="function")return r.map(function(_){var E=c[_];return E&&o(_,E.data,E.tr)?_:null});if(o.nodeName){var d=o._DT_RowIndex,f=o._DT_CellIndex,p;if(d!==void 0)return p=c[d],p&&p.tr===o?[d]:[];if(f)return p=c[f.row],p&&p.tr===o.parentNode?[f.row]:[];var b=Dom.s(o).closest("*[data-dt-row]");return b.count()?[parseInt(b.attr("data-dt-row"))]:[]}if(typeof o=="string"){if(o.charAt(0)==="#"){var v=n.ids[o.replace(/^#/,"")];if(v!==void 0)return[v.idx]}else if(o.match(/^(tr)?:eq\(\d+\)$/)){let _=parseInt(o.replace(/[^\d]/g,""));return r[_]!==void 0?[r[_]]:[]}}var x=util.array.removeEmpty(util.array.pluckOrder(n.data,r,"tr"));return Dom.s(x).filter(o).mapTo(_=>_._DT_RowIndex)},s=selectorRun("row",e,a,n,t);return(t.order==="current"||t.order==="applied")&&sortDisplay(n,s),s}register("rows()",function(n,e){let t,r;n===void 0?r="":util.is.plainObject(n)?(r="",t=n):(r=n,t=e),t=selectorOpts(t);var a=this.iterator("table",function(s){return selectRows(s,r,t)},!0);return a.selector.rows=r,a.selector.opts=t,a});register("rows().every()",function(n){var e=this.selector.opts,t=0;return this.iterator("every",(r,a,s)=>{let o=this.row(a,e);n.call(o,a,s,t),t++})});register("rows().nodes()",function(){return this.iterator("row",function(n,e){var t;return((t=n.data[e])===null||t===void 0?void 0:t.tr)||void 0},!0)});register("rows().data()",function(){return this.iterator(!0,"rows",function(n,e){return util.array.pluckOrder(n.data,e,"data")},!0)});registerPlural("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(e,t){invalidateRow(e,t,n)})});registerPlural("rows().indexes()","row().index()",function(){return this.iterator("row",function(n,e){return e},!0)});registerPlural("rows().ids()","row().id()",function(n){for(var e,t=[],r=this.context,a=0,s=r.length;a<s;a++)for(var o=0,l=this[a].length;o<l;o++){var c=r[a].rowIdFn((e=r[a].data[this[a][o]])===null||e===void 0?void 0:e.data);t.push((n===!0?"#":"")+c)}return this.inst(r,t)});registerPlural("rows().remove()","row().remove()",function(){return this.iterator("row",function(n,e){var t=n.data,r=t[e],a=n.displayMaster.indexOf(e);a!==-1&&n.displayMaster.splice(a,1),n.recordsDisplay>0&&n.recordsDisplay--,lengthOverflow(n);var s=n.rowIdFn(r?.data);s!==void 0&&delete n.ids[s],t[e]=null}),this});register("rows.add()",function(n){var e=this.iterator("table",function(r){var a,s,o,l=[];for(s=0,o=n.length;s<o;s++)a=n[s],a.nodeName&&a.nodeName.toUpperCase()==="TR"?l.push(addTr(r,Dom.s(a))[0]):l.push(addData(r,a));return l},!0),t=this.rows(-1);return t.pop(),arrayApply(t,e),t});register("row()",function(n,e){return selectorFirst(this.rows(n,e))});register("row().data()",function(n){var e,t=this.context;if(n===void 0)return t.length&&this.length&&this[0].length?(e=t[0].data[this[0]])===null||e===void 0?void 0:e.data:void 0;var r=t[0].data[this[0]];return r.data=n,Array.isArray(n)&&r.tr&&r.tr.id&&util.set(t[0].rowId)(n,r.tr.id),invalidateRow(t[0],this[0][0],"data"),this});register("row().node()",function(){var n=this.context;if(n.length&&this.length&&this[0].length){var e=n[0].data[this[0]];if(e&&e.tr)return e.tr}return null});register("row.add()",function(n){n&&n.fn&&n.length&&(n=n[0]);var e=this.iterator("table",function(t){return invalidColumn(t),n.nodeName&&n.nodeName.toUpperCase()==="TR"?addTr(t,Dom.s(n))[0]:addData(t,n)});return this.row(e[0])});register("search()",function(n,e,t,r){if(n===void 0){let a=this.context;return a.length===0?void 0:a[0].searches["*"].search}return this.iterator("table",function(a){if(!a.features.searching)return;let s=a.searches["*"];s||(s=create$2()),typeof e=="object"?assign(s,e):assign(s,{regex:e===null?!1:e,smart:t===null?!0:t,caseInsensitive:r===null?!0:r}),s.search=n,a.searches["*"]=s,filterComplete(a)})});register("search.fixed()",function(n,e,t){var r=this.iterator(!0,"table",function(a){var s,o=a.searchesFixed["*"];if(n){if(e===void 0)return(s=o[n])===null||s===void 0?void 0:s.search;if(e===null)delete o[n];else{let l=o[n];(!l||!util.is.plainObject(l))&&(l=create$2()),t&&assign(l,t),l.search=e,o[n]=l}}else return Object.keys(o);return this});return n!==void 0&&e===void 0?r[0]:r});register(["columns().search()","column().search()"],function(n,e,t,r){var a;if(n===void 0){let s=this[0].join(",");return this.context.length&&((a=this.context[0].searches[s])===null||a===void 0?void 0:a.search)||""}return this.iterator("columns",function(s,o){let l=o.join(","),c=s.searches[l];if(c||(c=create$2()),(n===""||n===null)&&o.length>1){delete s.searches[l];return}typeof e=="object"?assign(c,e):assign(c,{regex:e===null?!1:e,smart:t===null?!0:t,caseInsensitive:r===null?!0:r}),c.search=n,c.columns=o.slice(),s.searches[l]=c,filterComplete(s)})});register(["columns().search.fixed()","column().search.fixed()"],function(n,e,t){if(!n)return this.iterator(!0,"columns",function(r,a){let s=a.join(","),o=r.searchesFixed[s];return o?Object.keys(o):[]});if(e===void 0)if(this.context.length){let r=this[0].join(","),a=this.context[0].searchesFixed[r];return a&&a[n]?a[n].search:void 0}else return;return this.iterator(!0,"columns",function(r,a){let s=a.join(","),o=r.searchesFixed[s];if(o||(o={},r.searchesFixed[s]=o),e===null)delete o[n];else{let l=o[n];(!l||!util.is.plainObject(l))&&(l=create$2()),t&&assign(l,t),l.search=e,l.columns=a,o[n]=l}return this})});register("state()",function(n,e=!0){if(!n)return this.context.length?this.context[0].stateSaved:null;let t=assignDeep({},n);return this.iterator("table",function(r){implementState(r,t,e,function(){})})});register("state.clear()",function(){return this.iterator("table",function(n){n.stateSaveCallback.call(n.instance,n,{})})});register("state.loaded()",function(){return this.context.length?this.context[0].stateLoaded:null});register("state.save()",function(){return this.iterator("table",function(n){saveState(n)})});function table_selector(n,e){if(Array.isArray(n)){var t=[];return n.forEach(function(a){var s=table_selector(a,e);arrayApply(t,s)}),t.filter(a=>!!a)}if(typeof n=="number")return[e[n]];var r=e.map(function(a){return a.table});return Dom.s(r).filter(n).mapTo(a=>{var s=r.indexOf(a);return e[s]})}register("tables()",function(n){return n!=null?this.inst(table_selector(n,this.context)):this.inst(this.context)});register("table()",function(n){return selectorFirst(this.tables(n))});[["nodes","node","table"],["body","body","tbody"],["header","header","thead"],["footer","footer","tfoot"]].forEach(function(n){registerPlural("tables()."+n[0]+"()","table()."+n[1]+"()",function(){return this.iterator("table",e=>e[n[2]],!0)})});["header","footer"].forEach(function(n){register("table()."+n+".structure()",function(e){var t=this.columns(e).indexes().flatten().toArray(),r=this.context[0],a=headerLayout(r,r[n],t),s=t.slice().sort(function(o,l){return o-l});return a.map(function(o){return t.map(function(l){return o[s.indexOf(l)]})})})});registerPlural("tables().containers()","table().container()",function(){return this.iterator("table",function(n){return n.tableWrapper},!0)});register("tables().every()",function(n){return this.iterator("table",(e,t)=>{n.call(this.table(t),t)})});register("caption()",function(n,e){var t=this.context;if(n===void 0){var r=t[0].captionNode;return r&&t.length?r.innerHTML:null}return this.iterator("table",function(a){var s=Dom.s(a.table),o=Dom.s(a.captionNode),l=Dom.s(a.tableWrapper);if(o.count()||(o=Dom.c("caption").html(n),a.captionNode=o.get(0),e||(s.prepend(o),e=o.css("caption-side"))),o.html(n),e&&(o.css("caption-side",e),o.get(0)._captionSide=e),l.find("div.dt-scroll").count()){var c=e==="top"?"head":"foot";l.find("div.dt-scroll-"+c+" table").prepend(o)}else s.prepend(o)},!0)});register("caption.node()",function(){var n=this.context;return n.length?n[0].captionNode:null});let _ready=!1,_notice,_processingKey=!1,_delayedReleaseDate=null,_delayedSoftware=null;const _licenseInfo={developers:0,type:null,expires:null,valid:null},_wm=Dom.c("div"),_publicKey="BE1A9w9D9U/4s4/TogY+1sW/dLJ8IquzK1PmV70J93ZTIvXMZ0eV2NAb52ntpgwVFySSB2fOI7geLNO737rQAyo=";function b64ToBuf(n){return Uint8Array.from(atob(n),e=>e.charCodeAt(0))}function check(n,e){let t=_licenseInfo.expires;if(!getSubtle())noticePrep("Unable to validate license key"),noticeDisplay();else if(_licenseInfo.valid===!1)noticePrep("License key invalid"),noticeDisplay();else if(_licenseInfo.type==="trial"){let r=t?Math.ceil((t.getTime()-new Date().getTime())/864e5):-1;return r<0?(consoleMsg("Your trial has now expired - https://datatables.net/plus","warn"),noticePrep("Trial expired"),noticeDisplay(),!1):(consoleMsg("Your trial expires in "+r+" day"+(r===1?"":"s")),!0)}else{if(e===null)return!0;if(_licenseInfo.type==="plus"||_licenseInfo.type==="editor"&&e==="editor")return!t||new Date(n)>t?(noticePrep("Upgrade required for this version"),noticeDisplay(),!1):!0;if(_licenseInfo.type==="editor"&&e!=="editor")return noticePrep("License for Editor only. Upgrade for Plus"),noticeDisplay(),!1}return noticePrep(),noticeDisplay(),!1}function consoleMsg(n,e="log"){(e==="log"?console.log:console.warn)("%cDataTables Plus%c "+n,"background: #007bff; color: #fff; padding: 2px 5px;","color: inherit;")}const key=function(n){_processingKey=!0,verify(n).then(e=>{_processingKey=!1,check(_delayedReleaseDate,_delayedSoftware)}).catch(()=>{_processingKey=!1,check(_delayedReleaseDate,_delayedSoftware)})};function noticePrep(n){if(!_ready){let e=_wm[0].attachShadow({mode:"closed"}),t=Dom.c("div").css({position:"fixed",bottom:"1em",right:"1em",border:"1px solid #ffc107",background:"#fff3cd",color:"#856404",padding:"0.5em 1em","font-family":"sans-serif","font-size":"12px","border-radius":"4px","z-index":"10000","box-shadow":"0 2px 5px rgba(0,0,0,0.2)"});Dom.c("a").attr("href","https://datatables.net/tn/25").attr("target","_blank").css({color:"inherit","text-decoration":"none"}).appendTo(t),n||(n="License key required"),e.appendChild(t[0]),_notice=t,_ready=!0}n&&_notice.find("a").html("DataTables Plus: "+n+" - learn more &#187;")}function noticeDisplay(){!_processingKey&&document.body&&!document.body.contains(_wm[0])&&document.body.appendChild(_wm[0])}function verify(n){return new Promise(function(e){try{var t=n.split(":");if(t.length!==2)return _licenseInfo.valid=!1,e();var r=t[0],a=t[1],s=r.match(/(plus|trial|editor)_(\d+)_(\d{4})(\d{2})(\d{2})/);if(!s||s.length!==6)return _licenseInfo.valid=!1,e();_licenseInfo.type=s[1],_licenseInfo.developers=parseInt(s[2]),_licenseInfo.expires=new Date(s[3]+"-"+s[4]+"-"+s[5]);var o=getSubtle(),l=b64ToBuf(_publicKey),c=b64ToBuf(a),d=new TextEncoder().encode(r);if(!o){_licenseInfo.valid=!1,e();return}o.importKey("raw",l,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]).then(function(f){return o.verify({name:"ECDSA",hash:{name:"SHA-256"}},f,c,d)}).then(function(f){_licenseInfo.valid=f,e()}).catch(function(){_licenseInfo.valid=!1,e()})}catch{_licenseInfo.valid=!1,e()}})}function plus(n){Object.defineProperty(n,"plus",{value:function(e,t=""){let r=window.location.hostname;return r==="192.168.234.234"||r.endsWith(".datatables.net")||r==="datatables.net"?!0:_processingKey?(_delayedReleaseDate=e,_delayedSoftware=t,!0):check(e,t)},configurable:!1,enumerable:!1,writable:!1})}function getSubtle(){let n=window.crypto||window.msCrypto;return n.subtle||n.webkitSubtle}function factory(n,e){var t=!1;return n&&n.document&&(window=n,document=n.document),e&&e.fn&&e.fn.jquery&&(t=!0),t}const isDataTable=function(n){if(n instanceof Api)return!0;arrayLike(n)&&(n=Array.from(n));var e=Dom.s(n).get(0),t=!1;for(let s=0;s<ext.settings.length;s++){let o=ext.settings[s];var r=o.scrollHead?o.scrollHead.find("table").get(0):null,a=o.scrollFoot?o.scrollFoot.find("table").get(0):null;(o.table===e||r===e||a===e)&&(t=!0)}return t},tables=function(n){var e=!1;n&&typeof n!="boolean"&&(e=n.api||!1,n=n.visible||!1);var t=ext.settings.filter(function(r){return!!(!n||n&&Dom.s(r.table).isVisible())}).map(function(r){return r.table});return e?new Api(t):t};function _divProp(n,e,t){t&&(n[e]=t)}register$2("div",function(n,e){var t=document.createElement("div");return e&&(_divProp(t,"className",e.className),_divProp(t,"id",e.id),_divProp(t,"innerHTML",e.html),_divProp(t,"textContent",e.text)),t});register$2("info",function(n,e){if(!n.features.info)return null;let t=n.language,r=n.tableId,a=Dom.c("div").classAdd(n.classes.info.container),s=Object.assign({callback:t.infoCallback,empty:t.infoEmpty,postfix:t.infoPostFix,search:t.infoFiltered,text:t.info},e);return n.callbacks.draw.push(function(o){updateInfo(o,s,a)}),n.infoEl||(a.attr({"aria-live":"polite",id:r+"_info",role:"status"}),Dom.s(n.table).attr("aria-describedby",r+"_info"),n.infoEl=a),a},"i");function updateInfo(n,e,t){var r=n.displayStart+1,a=displayEnd(n),s=recordsTotal(n),o=recordsDisplay(n),l=o?e.text:e.empty;o!==s&&(l+=" "+e.search),l+=e.postfix,l=macros(n,l),e.callback&&(l=e.callback.call(n.instance,n,r,a,s,o,l)),t.html(l),callbackFire(n,null,"info",[n,t.get(0),l])}register$2("paging",function(n,e){if(!n.features.paging)return null;let t=Object.assign({buttons:ext.pager.numbers_length,type:n.pagingType,boundaryNumbers:!0,firstLast:!0,previousNext:!0,numbers:!0},e),r=Dom.c("div").classAdd(n.classes.paging.container+(t.type?" paging_"+t.type:"")).append(Dom.c("nav").attr("aria-label","pagination").classAdd(n.classes.paging.nav)),a=function(){_pagingDraw(n,r.children(),t)};return n.callbacks.draw.push(a),Dom.s(n.table).on("column-sizing.dt.DT",a),r},"p");function _pagingDynamic(n){let e=[];return n.numbers&&e.push("numbers"),n.previousNext&&(e.unshift("previous"),e.push("next")),n.firstLast&&(e.unshift("first"),e.push("last")),e}function _pagingDraw(n,e,t){if(!n.initDone)return;let r=t.type?ext.pager[t.type]:_pagingDynamic,a=n.language.aria.paginate||{},s=n.displayStart,o=n.pageLength,l=recordsDisplay(n),c=o===-1,d=c?0:Math.ceil(s/o),f=c?l?1:0:Math.ceil(l/o),p=[],b=[],v=r(t).map(function(E){return E==="numbers"?pagingNumbers(d,f,t.buttons,t.boundaryNumbers):E});p=p.concat.apply(p,v);for(let E=0;E<p.length;E++){let A=p[E],O=_pagingButtonInfo(n,A,d,f),$=renderer(n,"pagingButton")(n,A,O.display,O.active,O.disabled),P=typeof A=="string"?a[A]:a.number?a.number+(A+1):null;Dom.s($.clicker).attr({"aria-controls":n.tableId,"aria-disabled":O.disabled?"true":null,"aria-current":O.active?"page":null,"aria-label":P,"data-dt-idx":A,tabIndex:O.disabled?-1:n.tabIndex&&$.clicker.nodeName.toLowerCase()!=="span"?n.tabIndex:null}),typeof A!="number"&&Dom.s($.clicker).classAdd(A),bindAction($.clicker,"",function(L){L.preventDefault(),pageChange(n,A,!0)}),b.push($.display)}let x=renderer(n,"pagingContainer")(n,b),_=e.find(document.activeElement).attr("data-dt-idx");if(e.empty().append(x),_&&e.find('[data-dt-idx="'+_+'"]').trigger("focus"),b.length){let E=Dom.s(b[0]).height("withBorder");t.buttons>1&&E>0&&e.height()>=E*2-10&&_pagingDraw(n,e,Object.assign({},t,{buttons:t.buttons-2}))}}function _pagingButtonInfo(n,e,t,r){let a=n.language.paginate,s={display:"",active:!1,disabled:!1};switch(e){case"ellipsis":s.display="&#x2026;";break;case"first":s.display=a.first,t===0&&(s.disabled=!0);break;case"previous":s.display=a.previous,t===0&&(s.disabled=!0);break;case"next":s.display=a.next,(r===0||t===r-1)&&(s.disabled=!0);break;case"last":s.display=a.last,(r===0||t===r-1)&&(s.disabled=!0);break;default:typeof e=="number"&&(s.display=n.formatNumber(e+1,n),t===e&&(s.active=!0));break}return s}var __lengthCounter=0;register$2("pageLength",function(n,e){var t=n.features;if(!t.paging||!t.lengthChange)return null;let r=Object.assign({menu:n.lengthMenu,text:n.language.lengthMenu},e),a=n.classes.length,s=n.tableId,o=r.menu,l=[],c=[],d;if(Array.isArray(o[0]))l=o[0],c=o[1];else for(d=0;d<o.length;d++)plainObject(o[d])?(l.push(o[d].value),c.push(o[d].label)):(l.push(o[d]),c.push(o[d]));var f=r.text.match(/_MENU_$/),p=r.text.match(/^_MENU_/),b=r.text.replace(/_MENU_/,""),v="<label>"+r.text+"</label>";p?v="_MENU_<label>"+b+"</label>":f&&(v="<label>"+b+"</label>_MENU_");var x="tmp-"+ +new Date,_=Dom.c("div").classAdd(a.container).html(v.replace("_MENU_",'<span id="'+x+'"></span>')),E=[];Array.prototype.slice.call(_.find("label").get(0).childNodes).forEach(function(P){P.nodeType===Node.TEXT_NODE&&E.push({el:P,text:P.textContent})});var A=function(P){E.forEach(function(L){L.el.textContent=macros(n,L.text,P)})},O=Dom.c("select").attr("aria-controls",s).attr("autocomplete","off").classAdd(a.select);for(d=0;d<l.length;d++){var $=n.api.i18n("lengthLabels."+l[d],null);$===null&&($=typeof c[d]=="number"?n.formatNumber(c[d],n):c[d]),O.get(0)[d]=new Option($,l[d])}return _.find("#"+x).replaceWith(O),_.find("select").attr("id","dt-length-"+__lengthCounter).val(n.pageLength).on("change.DT",function(){lengthChange(n,O.val()),draw$1(n)}),_.find("label").attr("for","dt-length-"+__lengthCounter),__lengthCounter++,Dom.s(n.table).on("length.dt.DT",function(P,L,B){if(n===L){let g=_.find("select");if(g.find("option[data-dt-len-tmp]").remove(),!g.find('option[value="'+B+'"]').length){let Y=findInsertBeforePoint(O,B),X=Dom.c("option").val(B).text(B).attr("data-dt-len-tmp",!0);Y&&Y.length?X.insertBefore(Y):g.append(X)}g.val(B),A(B)}}),A(n.pageLength),_},"l");function findInsertBeforePoint(n,e){let t=n.find("option"),a=t.mapTo(s=>parseInt(s.value)).findIndex(s=>s>e);return a<-1?null:t.eq(a)}let __searchCounter=0;register$2("search",function(n,e){if(!n.features.searching)return null;let t=n.classes.search,r=n.tableId,a=n.language,s='<input type="search" class="'+t.input+'" autocomplete="off"/>',o=util.object.assignDeep({columns:"*",placeholder:a.searchPlaceholder,processing:!1,text:a.search},e);o.text.indexOf("_INPUT_")===-1&&(o.text+="_INPUT_"),o.text=macros(n,o.text);let l=n.api.columns(o.columns).indexes().toArray(),c=o.columns==="*"?"*":l.join(","),d=n.searches[c];d||(d=create$2(),n.searches[c]=d),d.columns=l;let f=o.text.match(/_INPUT_$/),p=o.text.match(/^_INPUT_/),b=o.text.replace(/_INPUT_/,""),v="<label>"+o.text+"</label>";p?v="_INPUT_<label>"+b+"</label>":f&&(v="<label>"+b+"</label>_INPUT_");let x=Dom.c("div").classAdd(t.container).html(v.replace(/_INPUT_/,s));x.find("label").attr("for","dt-search-"+__searchCounter),x.find("input").attr("id","dt-search-"+__searchCounter),__searchCounter++;let _=function(O){let $=this.value;d.return&&O.key!=="Enter"||$!=d.search&&processingRun(n,o.processing,function(){d.search=$,filterComplete(n),n.displayStart=0,draw$1(n)})},E=n.searchDelay,A=x.find("input").val(textValue(d.search)).attr("placeholder",o.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",E?util.debounce(_,E):_).on("mouseup.DT",function(O){setTimeout(function(){_.call(A.get(0),O)},10)}).on("keypress.DT",function(O){if(O.keyCode==13)return!1}).attr("aria-controls",r);return Dom.s(n.table).on("search.dt.DT",function(O,$){if(n===$&&A.get(0)!==document.activeElement){let P=n.searches[c];A.val(textValue(P.search))}}),x},"f");function textValue(n){return n instanceof RegExp?n.toString():typeof n!="function"?n:""}const defaults$1={ajax:null,ajaxDataGet:!1,api:null,browser:{barWidth:0,scrollbarLeft:!1},callbacks:{destroy:[],draw:[],footer:[],header:[],init:[],preDraw:[],row:[],rowCreated:[],stateLoadParams:[],stateLoaded:[],stateSaveParams:[]},caption:"",captionNode:null,classes:{},columns:[],containerWidth:-1,data:[],deferLoading:!1,destroyWidth:0,destroying:!1,display:[],displayMaster:[],displayStart:0,displayStartInit:-1,doingDraw:!1,dom:null,drawCount:0,drawError:-1,drawHold:!1,features:{autoWidth:!1,deferRender:!1,info:!1,lengthChange:!1,orderClasses:!1,orderMulti:!1,ordering:!1,paging:!1,processing:!1,searching:!1,serverSide:!1,stateSave:!1},footer:[],header:[],ids:{},init:{},initDone:!1,initialised:!1,language:{ajax:"",aria:{orderable:"",orderableRemove:"",orderableReverse:"",paginate:{first:"",last:"",next:"",number:"",previous:""}},decimal:"",emptyTable:"",entries:{_:""},info:"",infoEmpty:"",infoFiltered:"",infoPostFix:"",lengthMenu:"",lengthLabels:{},loadingRecords:"",paginate:{first:"",last:"",next:"",previous:""},processing:"",search:"",searchPlaceholder:"",thousands:"",url:"",zeroRecords:""},lastOrder:[],layout:{},loadingState:!1,order:[],orderCellsTop:null,orderDescReverse:!1,orderFixed:[],orderHandler:!0,orderIndicators:!0,pageLength:10,pagingControls:0,pagingType:"two_button",searchCols:[],recordsDisplay:0,recordsTotal:0,renderer:null,resizeObserver:null,reszEvt:!1,rowId:"",rowReadObject:!1,scroll:{barWidth:0,collapse:null,x:"",xInner:"",y:""},scrollBarVis:!1,searchDelay:0,searches:{},searchesFixed:{"*":{}},serverMethod:null,sortDetails:[],stateDuration:0,stateLoadCallback:()=>({}),stateLoaded:null,stateSaveCallback:()=>{},stateSaved:null,tabIndex:0,tableId:"",titleRow:null,typeDetect:!0,unique:"",wasFiltered:!1,wasOrdered:!1,windowResizeCb:()=>{}};function create(n={}){return util.object.assignDeep({},defaults$1,n)}var models={Column:Settings,Row:create$1,Search:create$2,Settings:create};const defaults$6={ajax:null,autoWidth:!0,caption:"",classes:{},column:defaults$4,columnDefs:null,columns:null,createdRow:null,data:null,deferLoading:null,deferRender:!0,destroy:!1,displayStart:0,dom:null,drawCallback:null,footerCallback:null,formatNumber:function(n,e){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,e.language.thousands)},headerCallback:null,info:!0,infoCallback:null,initComplete:null,language:{ajax:"",aria:{orderable:": Activate to sort",orderableRemove:": Activate to remove sorting",orderableReverse:": Activate to invert sorting",paginate:{first:"First",last:"Last",next:"Next",number:"",previous:"Previous"}},decimal:"",emptyTable:"No data available in table",entries:{_:"entries",1:"entry"},info:"Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",infoEmpty:"Showing 0 to 0 of 0 _ENTRIES-TOTAL_",infoFiltered:"(filtered from _MAX_ total _ENTRIES-MAX_)",infoPostFix:"",lengthLabels:{"-1":"All"},lengthMenu:"_MENU_ _ENTRIES_ per page",loadingRecords:"Loading...",paginate:{first:"«",last:"»",next:"›",previous:"‹"},processing:"",search:"Search:",searchPlaceholder:"",thousands:",",url:"",zeroRecords:"No matching records found"},layout:{bottomEnd:"paging",bottomStart:"info",topEnd:"search",topStart:"pageLength"},lengthChange:!0,lengthMenu:[10,25,50,100],on:{},order:[[0,"asc"]],orderCellsTop:null,orderClasses:!0,orderDescReverse:!0,orderFixed:[],orderMulti:!0,ordering:!0,pageLength:10,paging:!0,pagingType:"",preDrawCallback:null,processing:!1,renderer:null,retrieve:!1,rowCallback:null,rowId:"DT_RowId",scrollCollapse:!1,scrollX:"",scrollY:"",search:defaults$3,searchCols:[],searchDelay:0,searching:!0,serverMethod:"GET",serverSide:!1,stateDuration:7200,stateLoadCallback:function(n){try{const e=(n.stateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+n.unique+"_"+location.pathname);return e?JSON.parse(e):{}}catch{return{}}},stateLoadParams:null,stateLoaded:null,stateSave:!1,stateSaveCallback:function(n,e){try{(n.stateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+n.unique+"_"+location.pathname,JSON.stringify(e))}catch{}},stateSaveParams:null,tabIndex:0,titleRow:null,typeDetect:!0},DataTable=function(n,e){if(factory(n,e))return DataTable;if(this.api=()=>new Api(n),typeof this.jquery=="string")return new DataTable(this.toArray(),n),this;var t=e===void 0;let r=Dom.s(n),a=r.count();return t&&(e={}),r.each(s=>{var o={},l=a>1?util.object.assignDeepObjects(o,e,!0):e,c=0,d,f=s.getAttribute("id"),p=Dom.s(s);if(s.nodeName.toLowerCase()!="table"){log(null,0,"Non-table node initialisation ("+s.nodeName+")",2);return}l.on&&l.on.options&&listener(p,"options",l.on.options),p.trigger("options.dt",!0,[l]),compatOpts(defaults$6),compatCols(defaults$4),util.object.assign(l,escapeObject(p.data())),compatOpts(l);var b=ext.settings;for(c=0,d=b.length;c<d;c++){var v=b[c];if(v.table==s||v.thead&&v.thead.parentNode==s||v.tfoot&&v.tfoot.parentNode==s){var x=l.retrieve||!1,_=l.destroy||!1;if(t||x)return v.instance;if(_){new Api(v).destroy();break}else{log(v,0,"Cannot reinitialise DataTable",3);return}}if(v.tableId==s.id){b.splice(c,1);break}}(f===null||f==="")&&(f="DataTables_Table_"+ext._unique++,s.id=f),p.children("colgroup").remove();var E=create({destroyWidth:p.width(),unique:f,tableId:f,colgroup:Dom.c("colgroup"),fastData:function(se,re,oe){return getCellData(E,se,re,oe)}});E.table=s,E.init=l,b.push(E),E.api=new Api(E),E.instance=Dom.s(s),E.instance.api=()=>E.api,l.lengthMenu&&!l.pageLength&&(l.pageLength=typeof l.lengthMenu[0]=="number"?l.lengthMenu[0]:Array.isArray(l.lengthMenu[0])?l.lengthMenu[0][0]:l.lengthMenu[0].value);let A=util.object.assignDeepObjects(util.object.assignDeep({},defaults$6),l);map$3(E.features,A,["autoWidth","deferRender","info","lengthChange","orderClasses","ordering","orderMulti","paging","processing","searching","serverSide"]),map$3(E,A,["ajax","formatNumber","serverMethod","order","orderFixed","lengthMenu","pagingType","stateDuration","orderCellsTop","tabIndex","dom","stateLoadCallback","stateSaveCallback","renderer","searchDelay","rowId","caption","layout","orderDescReverse","orderIndicators","orderHandler","titleRow","typeDetect","pageLength","searchCols"]),map$3(E.scroll,A,[["scrollX","x"],["scrollY","y"],["scrollCollapse","collapse"]]),map$3(E.language,A,"infoCallback"),E.searches["*"]=create$2(A.search),callbackReg(E,"draw",A.drawCallback),callbackReg(E,"stateSaveParams",A.stateSaveParams),callbackReg(E,"stateLoadParams",A.stateLoadParams),callbackReg(E,"stateLoaded",A.stateLoaded),callbackReg(E,"row",A.rowCallback),callbackReg(E,"rowCreated",A.createdRow),callbackReg(E,"header",A.headerCallback),callbackReg(E,"footer",A.footerCallback),callbackReg(E,"init",A.initComplete),callbackReg(E,"preDraw",A.preDrawCallback),E.rowIdFn=util.get(E.rowId),A.on&&Object.keys(A.on).forEach(function(se){listener(p,se,A.on[se])}),browserDetect(E);var O=E.classes;util.object.assignDeep(O,ext.classes,A.classes),p.classAdd(O.table),E.features.paging||(A.displayStart=0),E.displayStartInit===-1&&(E.displayStartInit=A.displayStart,E.displayStart=A.displayStart);var $=A.deferLoading;$!==null&&(E.deferLoading=!0,Array.isArray($)?(E.recordsDisplay=$[0],E.recordsTotal=$[1]):(E.recordsDisplay=$,E.recordsTotal=$));var P=[],L=p.children("thead"),B=detectHeader(E,L.get(0),!1);if(A.columns)P=A.columns;else if(B.length)for(c=0,d=B[0].length;c<d;c++)P.push(null);for(c=0,d=P.length;c<d;c++)addColumn(E);applyColumnDefs(E,A.columnDefs,P,B,function(se,re){columnOptions(E,se,re)});var g=p.children("tbody").find("tr:first-child").eq(0);if(g.count()){var q=function(se,re){return se.getAttribute("data-"+re)!==null?re:null};g.eq(0).children("th, td").each(function(se,re){var oe=E.columns[re];if(oe||log(E,0,"Incorrect column count",18),oe.data===re){var Oe=q(se,"sort")||q(se,"order"),Ee=q(se,"filter")||q(se,"search");(Oe!==null||Ee!==null)&&(oe.data={_:re+".display",sort:Oe!==null?re+".@data-"+Oe:void 0,type:Oe!==null?re+".@data-"+Oe:void 0,filter:Ee!==null?re+".@data-"+Ee:void 0},oe._isArrayHost=!0,columnOptions(E,re))}})}callbackReg(E,"draw",saveState);var Y=E.features;if(A.stateSave&&(Y.stateSave=!0),A.order===void 0){var X=E.order;for(c=0,d=X.length;c<d;c++)X[c][1]=E.columns[c].orderSequence[0]}sortingClasses(E),callbackReg(E,"draw",function(){(E.wasOrdered||dataSource(E)==="ssp"||Y.deferRender)&&sortingClasses(E)});var ee=p.children("caption");E.caption&&(ee.count()===0&&(ee=Dom.c("caption").prependTo(p)),ee.html(E.caption)),ee.count()&&(ee.get(0)._captionSide=ee.css("caption-side"),E.captionNode=ee.get(0)),ee.count()?E.colgroup.insertAfter(ee.get(0)):E.colgroup.prependTo(s),L.count()===0&&(L=Dom.c("thead").appendTo(p)),E.thead=L.get(0);var ue=p.children("tbody");ue.count()===0&&(ue=Dom.c("tbody").insertAfter(L.get(0))),E.tbody=ue.get(0);var J=p.children("tfoot");J.count()===0&&(J=Dom.c("tfoot").appendTo(s)),E.tfoot=J.get(0),E.display=E.displayMaster.slice(),E.initialised=!0;var pe=E.language;if(A.language&&util.object.assignDeep(pe,A.language),pe.ajax){let se=function(re){hungarianToCamel(re),util.object.assignDeep(pe,re,E.init.language),callbackFire(E,null,"i18n",[E],!0),initialise(E)};if(typeof pe.ajax=="function")pe.ajax(E,se);else{let re={dataType:"json",url:"",success:se,error:function(){log(E,0,"i18n file loading error",21),initialise(E)}};typeof pe.ajax=="string"?re.url=pe.ajax:re=util.object.assign(re,pe.ajax),util.ajax(re)}}else callbackFire(E,null,"i18n",[E],!0),initialise(E)}),this.api()};DataTable.type=register$1;DataTable.types=types;DataTable.render=helpers;DataTable.ext=ext;DataTable.use=util.external;DataTable.factory=factory;DataTable.versionCheck=util.version.check;DataTable.version=ext.version;DataTable.isDataTable=isDataTable;DataTable.tables=tables;DataTable.util=util;DataTable.Api=Api;DataTable.datetime=datetime;DataTable.__browser=browser;DataTable.Dom=Dom;DataTable.ajax=util.ajax;DataTable.key=key;plus(DataTable);DataTable.settings=ext.settings;DataTable.models=models;DataTable.defaults=defaults$6;DataTable.feature={register:register$2};util.external(DataTable);window.jQuery&&util.external(window.jQuery);DataTable.util.object.assignDeep(DataTable.defaults,{renderer:"bootstrap"});DataTable.util.object.assignDeep(DataTable.ext.classes,{container:"dt-container dt-bootstrap5",search:{input:"form-control form-control-sm"},length:{select:"form-select form-select-sm"},processing:{container:"dt-processing card"},layout:{row:"row mt-2 justify-content-between",cell:"d-md-flex justify-content-between align-items-center",tableCell:"col-12",start:"dt-layout-start col-md-auto me-auto",end:"dt-layout-end col-md-auto ms-auto",full:"dt-layout-full col-md"}});DataTable.ext.renderer.pagingButton.bootstrap=function(n,e,t,r,a){var s=["dt-paging-button","page-item"];r&&s.push("active"),a&&s.push("disabled");var o=DataTable.Dom.c("li").classAdd(s.join(" ")),l=DataTable.Dom.c("button").classAdd("page-link").attr("role","link").attr("type","button").html(t).appendTo(o);return{display:o.get(0),clicker:l.get(0)}};DataTable.ext.renderer.pagingContainer.bootstrap=function(n,e){return DataTable.Dom.c("ul").classAdd("pagination").append(e).get(0)};function initDataTable(){const n=document.querySelectorAll("div.table-responsive > table.datatable");for(const t of n)t!==null&&new DataTable(t,{pageLength:10,orderClasses:!1,order:[[1,"desc"]]});const e=document.querySelectorAll("div.table-responsive > table.datatable-long");for(const t of e)t!==null&&new DataTable(t,{pageLength:50,orderClasses:!1,order:[[1,"desc"]]})}function round(n){return n+.5|0}const lim=(n,e,t)=>Math.max(Math.min(n,t),e);function p2b(n){return lim(round(n*2.55),0,255)}function n2b(n){return lim(round(n*255),0,255)}function b2n(n){return lim(round(n/2.55)/100,0,1)}function n2p(n){return lim(round(n*100),0,100)}const map$1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hex=[..."0123456789ABCDEF"],h1=n=>hex[n&15],h2=n=>hex[(n&240)>>4]+hex[n&15],eq=n=>(n&240)>>4===(n&15),isShort=n=>eq(n.r)&&eq(n.g)&&eq(n.b)&&eq(n.a);function hexParse(n){var e=n.length,t;return n[0]==="#"&&(e===4||e===5?t={r:255&map$1[n[1]]*17,g:255&map$1[n[2]]*17,b:255&map$1[n[3]]*17,a:e===5?map$1[n[4]]*17:255}:(e===7||e===9)&&(t={r:map$1[n[1]]<<4|map$1[n[2]],g:map$1[n[3]]<<4|map$1[n[4]],b:map$1[n[5]]<<4|map$1[n[6]],a:e===9?map$1[n[7]]<<4|map$1[n[8]]:255})),t}const alpha=(n,e)=>n<255?e(n):"";function hexString(n){var e=isShort(n)?h1:h2;return n?"#"+e(n.r)+e(n.g)+e(n.b)+alpha(n.a,e):void 0}const HUE_RE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(n,e,t){const r=e*Math.min(t,1-t),a=(s,o=(s+n/30)%12)=>t-r*Math.max(Math.min(o-3,9-o,1),-1);return[a(0),a(8),a(4)]}function hsv2rgbn(n,e,t){const r=(a,s=(a+n/60)%6)=>t-t*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function hwb2rgbn(n,e,t){const r=hsl2rgbn(n,1,.5);let a;for(e+t>1&&(a=1/(e+t),e*=a,t*=a),a=0;a<3;a++)r[a]*=1-e-t,r[a]+=e;return r}function hueValue(n,e,t,r,a){return n===a?(e-t)/r+(e<t?6:0):e===a?(t-n)/r+2:(n-e)/r+4}function rgb2hsl(n){const t=n.r/255,r=n.g/255,a=n.b/255,s=Math.max(t,r,a),o=Math.min(t,r,a),l=(s+o)/2;let c,d,f;return s!==o&&(f=s-o,d=l>.5?f/(2-s-o):f/(s+o),c=hueValue(t,r,a,f,s),c=c*60+.5),[c|0,d||0,l]}function calln(n,e,t,r){return(Array.isArray(e)?n(e[0],e[1],e[2]):n(e,t,r)).map(n2b)}function hsl2rgb(n,e,t){return calln(hsl2rgbn,n,e,t)}function hwb2rgb(n,e,t){return calln(hwb2rgbn,n,e,t)}function hsv2rgb(n,e,t){return calln(hsv2rgbn,n,e,t)}function hue(n){return(n%360+360)%360}function hueParse(n){const e=HUE_RE.exec(n);let t=255,r;if(!e)return;e[5]!==r&&(t=e[6]?p2b(+e[5]):n2b(+e[5]));const a=hue(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=hwb2rgb(a,s,o):e[1]==="hsv"?r=hsv2rgb(a,s,o):r=hsl2rgb(a,s,o),{r:r[0],g:r[1],b:r[2],a:t}}function rotate(n,e){var t=rgb2hsl(n);t[0]=hue(t[0]+e),t=hsl2rgb(t),n.r=t[0],n.g=t[1],n.b=t[2]}function hslString(n){if(!n)return;const e=rgb2hsl(n),t=e[0],r=n2p(e[1]),a=n2p(e[2]);return n.a<255?`hsla(${t}, ${r}%, ${a}%, ${b2n(n.a)})`:`hsl(${t}, ${r}%, ${a}%)`}const map$2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},names$1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function unpack(){const n={},e=Object.keys(names$1),t=Object.keys(map$2);let r,a,s,o,l;for(r=0;r<e.length;r++){for(o=l=e[r],a=0;a<t.length;a++)s=t[a],l=l.replace(s,map$2[s]);s=parseInt(names$1[o],16),n[l]=[s>>16&255,s>>8&255,s&255]}return n}let names;function nameParse(n){names||(names=unpack(),names.transparent=[0,0,0,0]);const e=names[n.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const RGB_RE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(n){const e=RGB_RE.exec(n);let t=255,r,a,s;if(e){if(e[7]!==r){const o=+e[7];t=e[8]?p2b(o):lim(o*255,0,255)}return r=+e[1],a=+e[3],s=+e[5],r=255&(e[2]?p2b(r):lim(r,0,255)),a=255&(e[4]?p2b(a):lim(a,0,255)),s=255&(e[6]?p2b(s):lim(s,0,255)),{r,g:a,b:s,a:t}}}function rgbString(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${b2n(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const to=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,from=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function interpolate$1(n,e,t){const r=from(b2n(n.r)),a=from(b2n(n.g)),s=from(b2n(n.b));return{r:n2b(to(r+t*(from(b2n(e.r))-r))),g:n2b(to(a+t*(from(b2n(e.g))-a))),b:n2b(to(s+t*(from(b2n(e.b))-s))),a:n.a+t*(e.a-n.a)}}function modHSL(n,e,t){if(n){let r=rgb2hsl(n);r[e]=Math.max(0,Math.min(r[e]+r[e]*t,e===0?360:1)),r=hsl2rgb(r),n.r=r[0],n.g=r[1],n.b=r[2]}}function clone$1(n,e){return n&&Object.assign(e||{},n)}function fromObject(n){var e={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(e={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(e.a=n2b(n[3]))):(e=clone$1(n,{r:0,g:0,b:0,a:1}),e.a=n2b(e.a)),e}function functionParse(n){return n.charAt(0)==="r"?rgbParse(n):hueParse(n)}class Color{constructor(e){if(e instanceof Color)return e;const t=typeof e;let r;t==="object"?r=fromObject(e):t==="string"&&(r=hexParse(e)||nameParse(e)||functionParse(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=clone$1(this._rgb);return e&&(e.a=b2n(e.a)),e}set rgb(e){this._rgb=fromObject(e)}rgbString(){return this._valid?rgbString(this._rgb):void 0}hexString(){return this._valid?hexString(this._rgb):void 0}hslString(){return this._valid?hslString(this._rgb):void 0}mix(e,t){if(e){const r=this.rgb,a=e.rgb;let s;const o=t===s?.5:t,l=2*o-1,c=r.a-a.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;s=1-d,r.r=255&d*r.r+s*a.r+.5,r.g=255&d*r.g+s*a.g+.5,r.b=255&d*r.b+s*a.b+.5,r.a=o*r.a+(1-o)*a.a,this.rgb=r}return this}interpolate(e,t){return e&&(this._rgb=interpolate$1(this._rgb,e._rgb,t)),this}clone(){return new Color(this.rgb)}alpha(e){return this._rgb.a=n2b(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=round(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return modHSL(this._rgb,2,e),this}darken(e){return modHSL(this._rgb,2,-e),this}saturate(e){return modHSL(this._rgb,1,e),this}desaturate(e){return modHSL(this._rgb,1,-e),this}rotate(e){return rotate(this._rgb,e),this}}function noop(){}const uid=(()=>{let n=0;return()=>n++})();function isNullOrUndef(n){return n==null}function isArray(n){if(Array.isArray&&Array.isArray(n))return!0;const e=Object.prototype.toString.call(n);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function isObject(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function isNumberFinite(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function finiteOrDefault(n,e){return isNumberFinite(n)?n:e}function valueOrDefault(n,e){return typeof n>"u"?e:n}const toPercentage=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/e,toDimension=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*e:+n;function callback(n,e,t){if(n&&typeof n.call=="function")return n.apply(t,e)}function each(n,e,t,r){let a,s,o;if(isArray(n))for(s=n.length,a=0;a<s;a++)e.call(t,n[a],a);else if(isObject(n))for(o=Object.keys(n),s=o.length,a=0;a<s;a++)e.call(t,n[o[a]],o[a])}function _elementsEqual(n,e){let t,r,a,s;if(!n||!e||n.length!==e.length)return!1;for(t=0,r=n.length;t<r;++t)if(a=n[t],s=e[t],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function clone(n){if(isArray(n))return n.map(clone);if(isObject(n)){const e=Object.create(null),t=Object.keys(n),r=t.length;let a=0;for(;a<r;++a)e[t[a]]=clone(n[t[a]]);return e}return n}function isValidKey(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function _merger(n,e,t,r){if(!isValidKey(n))return;const a=e[n],s=t[n];isObject(a)&&isObject(s)?merge(a,s,r):e[n]=clone(s)}function merge(n,e,t){const r=isArray(e)?e:[e],a=r.length;if(!isObject(n))return n;t=t||{};const s=t.merger||_merger;let o;for(let l=0;l<a;++l){if(o=r[l],!isObject(o))continue;const c=Object.keys(o);for(let d=0,f=c.length;d<f;++d)s(c[d],n,o,t)}return n}function mergeIf(n,e){return merge(n,e,{merger:_mergerIf})}function _mergerIf(n,e,t){if(!isValidKey(n))return;const r=e[n],a=t[n];isObject(r)&&isObject(a)?mergeIf(r,a):Object.prototype.hasOwnProperty.call(e,n)||(e[n]=clone(a))}const keyResolvers={"":n=>n,x:n=>n.x,y:n=>n.y};function _splitKey(n){const e=n.split("."),t=[];let r="";for(const a of e)r+=a,r.endsWith("\\")?r=r.slice(0,-1)+".":(t.push(r),r="");return t}function _getKeyResolver(n){const e=_splitKey(n);return t=>{for(const r of e){if(r==="")break;t=t&&t[r]}return t}}function resolveObjectKey(n,e){return(keyResolvers[e]||(keyResolvers[e]=_getKeyResolver(e)))(n)}function _capitalize(n){return n.charAt(0).toUpperCase()+n.slice(1)}const defined=n=>typeof n<"u",isFunction=n=>typeof n=="function",setsEqual=(n,e)=>{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0};function _isClickEvent(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const PI=Math.PI,TAU=2*PI,PITAU=TAU+PI,INFINITY=Number.POSITIVE_INFINITY,RAD_PER_DEG=PI/180,HALF_PI=PI/2,QUARTER_PI=PI/4,TWO_THIRDS_PI=PI*2/3,log10=Math.log10,sign=Math.sign;function almostEquals(n,e,t){return Math.abs(n-e)<t}function niceNum(n){const e=Math.round(n);n=almostEquals(n,e,n/1e3)?e:n;const t=Math.pow(10,Math.floor(log10(n))),r=n/t;return(r<=1?1:r<=2?2:r<=5?5:10)*t}function _factorize(n){const e=[],t=Math.sqrt(n);let r;for(r=1;r<t;r++)n%r===0&&(e.push(r),e.push(n/r));return t===(t|0)&&e.push(t),e.sort((a,s)=>a-s).pop(),e}function isNonPrimitive(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function isNumber(n){return!isNonPrimitive(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function almostWhole(n,e){const t=Math.round(n);return t-e<=n&&t+e>=n}function _setMinAndMaxByKey(n,e,t){let r,a,s;for(r=0,a=n.length;r<a;r++)s=n[r][t],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function toRadians(n){return n*(PI/180)}function toDegrees(n){return n*(180/PI)}function _decimalPlaces(n){if(!isNumberFinite(n))return;let e=1,t=0;for(;Math.round(n*e)/e!==n;)e*=10,t++;return t}function getAngleFromPoint(n,e){const t=e.x-n.x,r=e.y-n.y,a=Math.sqrt(t*t+r*r);let s=Math.atan2(r,t);return s<-.5*PI&&(s+=TAU),{angle:s,distance:a}}function distanceBetweenPoints(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function _angleDiff(n,e){return(n-e+PITAU)%TAU-PI}function _normalizeAngle(n){return(n%TAU+TAU)%TAU}function _angleBetween(n,e,t,r){const a=_normalizeAngle(n),s=_normalizeAngle(e),o=_normalizeAngle(t),l=_normalizeAngle(s-a),c=_normalizeAngle(o-a),d=_normalizeAngle(a-s),f=_normalizeAngle(a-o);return a===s||a===o||r&&s===o||l>c&&d<f}function _limitValue(n,e,t){return Math.max(e,Math.min(t,n))}function _int16Range(n){return _limitValue(n,-32768,32767)}function _isBetween(n,e,t,r=1e-6){return n>=Math.min(e,t)-r&&n<=Math.max(e,t)+r}function _lookup(n,e,t){t=t||(o=>n[o]<e);let r=n.length-1,a=0,s;for(;r-a>1;)s=a+r>>1,t(s)?a=s:r=s;return{lo:a,hi:r}}const _lookupByKey=(n,e,t,r)=>_lookup(n,t,r?a=>{const s=n[a][e];return s<t||s===t&&n[a+1][e]===t}:a=>n[a][e]<t),_rlookupByKey=(n,e,t)=>_lookup(n,t,r=>n[r][e]>=t);function _filterBetween(n,e,t){let r=0,a=n.length;for(;r<a&&n[r]<e;)r++;for(;a>r&&n[a-1]>t;)a--;return r>0||a<n.length?n.slice(r,a):n}const arrayEvents=["push","pop","shift","splice","unshift"];function listenArrayEvents(n,e){if(n._chartjs){n._chartjs.listeners.push(e);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),arrayEvents.forEach(t=>{const r="_onData"+_capitalize(t),a=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...s){const o=a.apply(this,s);return n._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...s)}),o}})})}function unlistenArrayEvents(n,e){const t=n._chartjs;if(!t)return;const r=t.listeners,a=r.indexOf(e);a!==-1&&r.splice(a,1),!(r.length>0)&&(arrayEvents.forEach(s=>{delete n[s]}),delete n._chartjs)}function _arrayUnique(n){const e=new Set(n);return e.size===n.length?n:Array.from(e)}const requestAnimFrame=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function throttled(n,e){let t=[],r=!1;return function(...a){t=a,r||(r=!0,requestAnimFrame.call(window,()=>{r=!1,n.apply(e,t)}))}}function debounce(n,e){let t;return function(...r){return e?(clearTimeout(t),t=setTimeout(n,e,r)):n.apply(this,r),e}}const _toLeftRightCenter=n=>n==="start"?"left":n==="end"?"right":"center",_alignStartEnd=(n,e,t)=>n==="start"?e:n==="end"?t:(e+t)/2,_textX=(n,e,t,r)=>n===(r?"left":"right")?t:n==="center"?(e+t)/2:e;function _getStartAndCountOfVisiblePoints(n,e,t){const r=e.length;let a=0,s=r;if(n._sorted){const{iScale:o,vScale:l,_parsed:c}=n,d=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,f=o.axis,{min:p,max:b,minDefined:v,maxDefined:x}=o.getUserBounds();if(v){if(a=Math.min(_lookupByKey(c,f,p).lo,t?r:_lookupByKey(e,f,o.getPixelForValue(p)).lo),d){const _=c.slice(0,a+1).reverse().findIndex(E=>!isNullOrUndef(E[l.axis]));a-=Math.max(0,_)}a=_limitValue(a,0,r-1)}if(x){let _=Math.max(_lookupByKey(c,o.axis,b,!0).hi+1,t?0:_lookupByKey(e,f,o.getPixelForValue(b),!0).hi+1);if(d){const E=c.slice(_-1).findIndex(A=>!isNullOrUndef(A[l.axis]));_+=Math.max(0,E)}s=_limitValue(_,a,r)-a}else s=r-a}return{start:a,count:s}}function _scaleRangesChanged(n){const{xScale:e,yScale:t,_scaleRanges:r}=n,a={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!r)return n._scaleRanges=a,!0;const s=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==t.min||r.ymax!==t.max;return Object.assign(r,a),s}const atEdge=n=>n===0||n===1,elasticIn=(n,e,t)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-e)*TAU/t)),elasticOut=(n,e,t)=>Math.pow(2,-10*n)*Math.sin((n-e)*TAU/t)+1,effects={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*HALF_PI)+1,easeOutSine:n=>Math.sin(n*HALF_PI),easeInOutSine:n=>-.5*(Math.cos(PI*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>atEdge(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>atEdge(n)?n:elasticIn(n,.075,.3),easeOutElastic:n=>atEdge(n)?n:elasticOut(n,.075,.3),easeInOutElastic(n){return atEdge(n)?n:n<.5?.5*elasticIn(n*2,.1125,.45):.5+.5*elasticOut(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let e=1.70158;return(n/=.5)<1?.5*(n*n*(((e*=1.525)+1)*n-e)):.5*((n-=2)*n*(((e*=1.525)+1)*n+e)+2)},easeInBounce:n=>1-effects.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?effects.easeInBounce(n*2)*.5:effects.easeOutBounce(n*2-1)*.5+.5};function isPatternOrGradient(n){if(n&&typeof n=="object"){const e=n.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function color(n){return isPatternOrGradient(n)?n:new Color(n)}function getHoverColor(n){return isPatternOrGradient(n)?n:new Color(n).saturate(.5).darken(.1).hexString()}const numbers=["x","y","borderWidth","radius","tension"],colors=["color","borderColor","backgroundColor"];function applyAnimationsDefaults(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),n.set("animations",{colors:{type:"color",properties:colors},numbers:{type:"number",properties:numbers}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function applyLayoutsDefaults(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const intlCache=new Map;function getNumberFormat(n,e){e=e||{};const t=n+JSON.stringify(e);let r=intlCache.get(t);return r||(r=new Intl.NumberFormat(n,e),intlCache.set(t,r)),r}function formatNumber(n,e,t){return getNumberFormat(e,t).format(n)}const formatters$1={values(n){return isArray(n)?n:""+n},numeric(n,e,t){if(n===0)return"0";const r=this.chart.options.locale;let a,s=n;if(t.length>1){const d=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(d<1e-4||d>1e15)&&(a="scientific"),s=calculateDelta(n,t)}const o=log10(Math.abs(s)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:a,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(c,this.options.ticks.format),formatNumber(n,r,c)},logarithmic(n,e,t){if(n===0)return"0";const r=t[e].significand||n/Math.pow(10,Math.floor(log10(n)));return[1,2,3,5,10,15].includes(r)||e>.8*t.length?formatters$1.numeric.call(this,n,e,t):""}};function calculateDelta(n,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&n!==Math.floor(n)&&(t=n-Math.floor(n)),t}var Ticks={formatters:formatters$1};function applyScaleDefaults(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ticks.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const overrides=Object.create(null),descriptors=Object.create(null);function getScope$1(n,e){if(!e)return n;const t=e.split(".");for(let r=0,a=t.length;r<a;++r){const s=t[r];n=n[s]||(n[s]=Object.create(null))}return n}function set(n,e,t){return typeof e=="string"?merge(getScope$1(n,e),t):merge(getScope$1(n,""),e)}class Defaults{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,a)=>getHoverColor(a.backgroundColor),this.hoverBorderColor=(r,a)=>getHoverColor(a.borderColor),this.hoverColor=(r,a)=>getHoverColor(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return set(this,e,t)}get(e){return getScope$1(this,e)}describe(e,t){return set(descriptors,e,t)}override(e,t){return set(overrides,e,t)}route(e,t,r,a){const s=getScope$1(this,e),o=getScope$1(this,r),l="_"+t;Object.defineProperties(s,{[l]:{value:s[t],writable:!0},[t]:{enumerable:!0,get(){const c=this[l],d=o[a];return isObject(c)?Object.assign({},d,c):valueOrDefault(c,d)},set(c){this[l]=c}}})}apply(e){e.forEach(t=>t(this))}}var defaults=new Defaults({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[applyAnimationsDefaults,applyLayoutsDefaults,applyScaleDefaults]);function toFontString(n){return!n||isNullOrUndef(n.size)||isNullOrUndef(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function _measureText(n,e,t,r,a){let s=e[a];return s||(s=e[a]=n.measureText(a).width,t.push(a)),s>r&&(r=s),r}function _longestText(n,e,t,r){r=r||{};let a=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(a=r.data={},s=r.garbageCollect=[],r.font=e),n.save(),n.font=e;let o=0;const l=t.length;let c,d,f,p,b;for(c=0;c<l;c++)if(p=t[c],p!=null&&!isArray(p))o=_measureText(n,a,s,o,p);else if(isArray(p))for(d=0,f=p.length;d<f;d++)b=p[d],b!=null&&!isArray(b)&&(o=_measureText(n,a,s,o,b));n.restore();const v=s.length/2;if(v>t.length){for(c=0;c<v;c++)delete a[s[c]];s.splice(0,v)}return o}function _alignPixel(n,e,t){const r=n.currentDevicePixelRatio,a=t!==0?Math.max(t/2,.5):0;return Math.round((e-a)*r)/r+a}function clearCanvas(n,e){!e&&!n||(e=e||n.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,n.width,n.height),e.restore())}function drawPoint(n,e,t,r){drawPointLegend(n,e,t,r,null)}function drawPointLegend(n,e,t,r,a){let s,o,l,c,d,f,p,b;const v=e.pointStyle,x=e.rotation,_=e.radius;let E=(x||0)*RAD_PER_DEG;if(v&&typeof v=="object"&&(s=v.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){n.save(),n.translate(t,r),n.rotate(E),n.drawImage(v,-v.width/2,-v.height/2,v.width,v.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),v){default:a?n.ellipse(t,r,a/2,_,0,0,TAU):n.arc(t,r,_,0,TAU),n.closePath();break;case"triangle":f=a?a/2:_,n.moveTo(t+Math.sin(E)*f,r-Math.cos(E)*_),E+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(E)*f,r-Math.cos(E)*_),E+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(E)*f,r-Math.cos(E)*_),n.closePath();break;case"rectRounded":d=_*.516,c=_-d,o=Math.cos(E+QUARTER_PI)*c,p=Math.cos(E+QUARTER_PI)*(a?a/2-d:c),l=Math.sin(E+QUARTER_PI)*c,b=Math.sin(E+QUARTER_PI)*(a?a/2-d:c),n.arc(t-p,r-l,d,E-PI,E-HALF_PI),n.arc(t+b,r-o,d,E-HALF_PI,E),n.arc(t+p,r+l,d,E,E+HALF_PI),n.arc(t-b,r+o,d,E+HALF_PI,E+PI),n.closePath();break;case"rect":if(!x){c=Math.SQRT1_2*_,f=a?a/2:c,n.rect(t-f,r-c,2*f,2*c);break}E+=QUARTER_PI;case"rectRot":p=Math.cos(E)*(a?a/2:_),o=Math.cos(E)*_,l=Math.sin(E)*_,b=Math.sin(E)*(a?a/2:_),n.moveTo(t-p,r-l),n.lineTo(t+b,r-o),n.lineTo(t+p,r+l),n.lineTo(t-b,r+o),n.closePath();break;case"crossRot":E+=QUARTER_PI;case"cross":p=Math.cos(E)*(a?a/2:_),o=Math.cos(E)*_,l=Math.sin(E)*_,b=Math.sin(E)*(a?a/2:_),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+b,r-o),n.lineTo(t-b,r+o);break;case"star":p=Math.cos(E)*(a?a/2:_),o=Math.cos(E)*_,l=Math.sin(E)*_,b=Math.sin(E)*(a?a/2:_),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+b,r-o),n.lineTo(t-b,r+o),E+=QUARTER_PI,p=Math.cos(E)*(a?a/2:_),o=Math.cos(E)*_,l=Math.sin(E)*_,b=Math.sin(E)*(a?a/2:_),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+b,r-o),n.lineTo(t-b,r+o);break;case"line":o=a?a/2:Math.cos(E)*_,l=Math.sin(E)*_,n.moveTo(t-o,r-l),n.lineTo(t+o,r+l);break;case"dash":n.moveTo(t,r),n.lineTo(t+Math.cos(E)*(a?a/2:_),r+Math.sin(E)*_);break;case!1:n.closePath();break}n.fill(),e.borderWidth>0&&n.stroke()}}function _isPointInArea(n,e,t){return t=t||.5,!e||n&&n.x>e.left-t&&n.x<e.right+t&&n.y>e.top-t&&n.y<e.bottom+t}function clipArea(n,e){n.save(),n.beginPath(),n.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),n.clip()}function unclipArea(n){n.restore()}function _steppedLineTo(n,e,t,r,a){if(!e)return n.lineTo(t.x,t.y);if(a==="middle"){const s=(e.x+t.x)/2;n.lineTo(s,e.y),n.lineTo(s,t.y)}else a==="after"!=!!r?n.lineTo(e.x,t.y):n.lineTo(t.x,e.y);n.lineTo(t.x,t.y)}function _bezierCurveTo(n,e,t,r){if(!e)return n.lineTo(t.x,t.y);n.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?t.cp2x:t.cp1x,r?t.cp2y:t.cp1y,t.x,t.y)}function setRenderOpts(n,e){e.translation&&n.translate(e.translation[0],e.translation[1]),isNullOrUndef(e.rotation)||n.rotate(e.rotation),e.color&&(n.fillStyle=e.color),e.textAlign&&(n.textAlign=e.textAlign),e.textBaseline&&(n.textBaseline=e.textBaseline)}function decorateText(n,e,t,r,a){if(a.strikethrough||a.underline){const s=n.measureText(r),o=e-s.actualBoundingBoxLeft,l=e+s.actualBoundingBoxRight,c=t-s.actualBoundingBoxAscent,d=t+s.actualBoundingBoxDescent,f=a.strikethrough?(c+d)/2:d;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=a.decorationWidth||2,n.moveTo(o,f),n.lineTo(l,f),n.stroke()}}function drawBackdrop(n,e){const t=n.fillStyle;n.fillStyle=e.color,n.fillRect(e.left,e.top,e.width,e.height),n.fillStyle=t}function renderText(n,e,t,r,a,s={}){const o=isArray(e)?e:[e],l=s.strokeWidth>0&&s.strokeColor!=="";let c,d;for(n.save(),n.font=a.string,setRenderOpts(n,s),c=0;c<o.length;++c)d=o[c],s.backdrop&&drawBackdrop(n,s.backdrop),l&&(s.strokeColor&&(n.strokeStyle=s.strokeColor),isNullOrUndef(s.strokeWidth)||(n.lineWidth=s.strokeWidth),n.strokeText(d,t,r,s.maxWidth)),n.fillText(d,t,r,s.maxWidth),decorateText(n,t,r,d,s),r+=Number(a.lineHeight);n.restore()}function addRoundedRectPath(n,e){const{x:t,y:r,w:a,h:s,radius:o}=e;n.arc(t+o.topLeft,r+o.topLeft,o.topLeft,1.5*PI,PI,!0),n.lineTo(t,r+s-o.bottomLeft),n.arc(t+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,PI,HALF_PI,!0),n.lineTo(t+a-o.bottomRight,r+s),n.arc(t+a-o.bottomRight,r+s-o.bottomRight,o.bottomRight,HALF_PI,0,!0),n.lineTo(t+a,r+o.topRight),n.arc(t+a-o.topRight,r+o.topRight,o.topRight,0,-HALF_PI,!0),n.lineTo(t+o.topLeft,r)}const LINE_HEIGHT=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,FONT_STYLE=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function toLineHeight(n,e){const t=(""+n).match(LINE_HEIGHT);if(!t||t[1]==="normal")return e*1.2;switch(n=+t[2],t[3]){case"px":return n;case"%":n/=100;break}return e*n}const numberOrZero=n=>+n||0;function _readValueToProps(n,e){const t={},r=isObject(e),a=r?Object.keys(e):e,s=isObject(n)?r?o=>valueOrDefault(n[o],n[e[o]]):o=>n[o]:()=>n;for(const o of a)t[o]=numberOrZero(s(o));return t}function toTRBL(n){return _readValueToProps(n,{top:"y",right:"x",bottom:"y",left:"x"})}function toTRBLCorners(n){return _readValueToProps(n,["topLeft","topRight","bottomLeft","bottomRight"])}function toPadding(n){const e=toTRBL(n);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function toFont(n,e){n=n||{},e=e||defaults.font;let t=valueOrDefault(n.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let r=valueOrDefault(n.style,e.style);r&&!(""+r).match(FONT_STYLE)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const a={family:valueOrDefault(n.family,e.family),lineHeight:toLineHeight(valueOrDefault(n.lineHeight,e.lineHeight),t),size:t,style:r,weight:valueOrDefault(n.weight,e.weight),string:""};return a.string=toFontString(a),a}function resolve(n,e,t,r){let a,s,o;for(a=0,s=n.length;a<s;++a)if(o=n[a],o!==void 0&&o!==void 0)return o}function _addGrace(n,e,t){const{min:r,max:a}=n,s=toDimension(e,(a-r)/2),o=(l,c)=>t&&l===0?0:l+c;return{min:o(r,-Math.abs(s)),max:o(a,s)}}function createContext(n,e){return Object.assign(Object.create(n),e)}function _createResolver(n,e=[""],t,r,a=()=>n[0]){const s=t||n;typeof r>"u"&&(r=_resolve("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:s,_fallback:r,_getTarget:a,override:l=>_createResolver([l,...n],e,s,r)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete l._keys,delete n[0][c],!0},get(l,c){return _cached(l,c,()=>_resolveWithPrefixes(c,e,n,l))},getOwnPropertyDescriptor(l,c){return Reflect.getOwnPropertyDescriptor(l._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(l,c){return getKeysFromAllScopes(l).includes(c)},ownKeys(l){return getKeysFromAllScopes(l)},set(l,c,d){const f=l._storage||(l._storage=a());return l[c]=f[c]=d,delete l._keys,!0}})}function _attachContext(n,e,t,r){const a={_cacheable:!1,_proxy:n,_context:e,_subProxy:t,_stack:new Set,_descriptors:_descriptors(n,r),setContext:s=>_attachContext(n,s,t,r),override:s=>_attachContext(n.override(s),e,t,r)};return new Proxy(a,{deleteProperty(s,o){return delete s[o],delete n[o],!0},get(s,o,l){return _cached(s,o,()=>_resolveWithContext(s,o,l))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(s,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(s,o,l){return n[o]=l,delete s[o],!0}})}function _descriptors(n,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:r=e.indexable,_allKeys:a=e.allKeys}=n;return{allKeys:a,scriptable:t,indexable:r,isScriptable:isFunction(t)?t:()=>t,isIndexable:isFunction(r)?r:()=>r}}const readKey=(n,e)=>n?n+_capitalize(e):e,needsSubResolver=(n,e)=>isObject(e)&&n!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function _cached(n,e,t){if(Object.prototype.hasOwnProperty.call(n,e)||e==="constructor")return n[e];const r=t();return n[e]=r,r}function _resolveWithContext(n,e,t){const{_proxy:r,_context:a,_subProxy:s,_descriptors:o}=n;let l=r[e];return isFunction(l)&&o.isScriptable(e)&&(l=_resolveScriptable(e,l,n,t)),isArray(l)&&l.length&&(l=_resolveArray(e,l,n,o.isIndexable)),needsSubResolver(e,l)&&(l=_attachContext(l,a,s&&s[e],o)),l}function _resolveScriptable(n,e,t,r){const{_proxy:a,_context:s,_subProxy:o,_stack:l}=t;if(l.has(n))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+n);l.add(n);let c=e(s,o||r);return l.delete(n),needsSubResolver(n,c)&&(c=createSubResolver(a._scopes,a,n,c)),c}function _resolveArray(n,e,t,r){const{_proxy:a,_context:s,_subProxy:o,_descriptors:l}=t;if(typeof s.index<"u"&&r(n))return e[s.index%e.length];if(isObject(e[0])){const c=e,d=a._scopes.filter(f=>f!==c);e=[];for(const f of c){const p=createSubResolver(d,a,n,f);e.push(_attachContext(p,s,o&&o[n],l))}}return e}function resolveFallback(n,e,t){return isFunction(n)?n(e,t):n}const getScope=(n,e)=>n===!0?e:typeof n=="string"?resolveObjectKey(e,n):void 0;function addScopes(n,e,t,r,a){for(const s of e){const o=getScope(t,s);if(o){n.add(o);const l=resolveFallback(o._fallback,t,a);if(typeof l<"u"&&l!==t&&l!==r)return l}else if(o===!1&&typeof r<"u"&&t!==r)return null}return!1}function createSubResolver(n,e,t,r){const a=e._rootScopes,s=resolveFallback(e._fallback,t,r),o=[...n,...a],l=new Set;l.add(r);let c=addScopesFromKey(l,o,t,s||t,r);return c===null||typeof s<"u"&&s!==t&&(c=addScopesFromKey(l,o,s,c,r),c===null)?!1:_createResolver(Array.from(l),[""],a,s,()=>subGetTarget(e,t,r))}function addScopesFromKey(n,e,t,r,a){for(;t;)t=addScopes(n,e,t,r,a);return t}function subGetTarget(n,e,t){const r=n._getTarget();e in r||(r[e]={});const a=r[e];return isArray(a)&&isObject(t)?t:a||{}}function _resolveWithPrefixes(n,e,t,r){let a;for(const s of e)if(a=_resolve(readKey(s,n),t),typeof a<"u")return needsSubResolver(n,a)?createSubResolver(t,r,n,a):a}function _resolve(n,e){for(const t of e){if(!t)continue;const r=t[n];if(typeof r<"u")return r}}function getKeysFromAllScopes(n){let e=n._keys;return e||(e=n._keys=resolveKeysFromAllScopes(n._scopes)),e}function resolveKeysFromAllScopes(n){const e=new Set;for(const t of n)for(const r of Object.keys(t).filter(a=>!a.startsWith("_")))e.add(r);return Array.from(e)}function _parseObjectDataRadialScale(n,e,t,r){const{iScale:a}=n,{key:s="r"}=this._parsing,o=new Array(r);let l,c,d,f;for(l=0,c=r;l<c;++l)d=l+t,f=e[d],o[l]={r:a.parse(resolveObjectKey(f,s),d)};return o}const EPSILON=Number.EPSILON||1e-14,getPoint=(n,e)=>e<n.length&&!n[e].skip&&n[e],getValueAxis=n=>n==="x"?"y":"x";function splineCurve(n,e,t,r){const a=n.skip?e:n,s=e,o=t.skip?e:t,l=distanceBetweenPoints(s,a),c=distanceBetweenPoints(o,s);let d=l/(l+c),f=c/(l+c);d=isNaN(d)?0:d,f=isNaN(f)?0:f;const p=r*d,b=r*f;return{previous:{x:s.x-p*(o.x-a.x),y:s.y-p*(o.y-a.y)},next:{x:s.x+b*(o.x-a.x),y:s.y+b*(o.y-a.y)}}}function monotoneAdjust(n,e,t){const r=n.length;let a,s,o,l,c,d=getPoint(n,0);for(let f=0;f<r-1;++f)if(c=d,d=getPoint(n,f+1),!(!c||!d)){if(almostEquals(e[f],0,EPSILON)){t[f]=t[f+1]=0;continue}a=t[f]/e[f],s=t[f+1]/e[f],l=Math.pow(a,2)+Math.pow(s,2),!(l<=9)&&(o=3/Math.sqrt(l),t[f]=a*o*e[f],t[f+1]=s*o*e[f])}}function monotoneCompute(n,e,t="x"){const r=getValueAxis(t),a=n.length;let s,o,l,c=getPoint(n,0);for(let d=0;d<a;++d){if(o=l,l=c,c=getPoint(n,d+1),!l)continue;const f=l[t],p=l[r];o&&(s=(f-o[t])/3,l[`cp1${t}`]=f-s,l[`cp1${r}`]=p-s*e[d]),c&&(s=(c[t]-f)/3,l[`cp2${t}`]=f+s,l[`cp2${r}`]=p+s*e[d])}}function splineCurveMonotone(n,e="x"){const t=getValueAxis(e),r=n.length,a=Array(r).fill(0),s=Array(r);let o,l,c,d=getPoint(n,0);for(o=0;o<r;++o)if(l=c,c=d,d=getPoint(n,o+1),!!c){if(d){const f=d[e]-c[e];a[o]=f!==0?(d[t]-c[t])/f:0}s[o]=l?d?sign(a[o-1])!==sign(a[o])?0:(a[o-1]+a[o])/2:a[o-1]:a[o]}monotoneAdjust(n,a,s),monotoneCompute(n,s,e)}function capControlPoint(n,e,t){return Math.max(Math.min(n,t),e)}function capBezierPoints(n,e){let t,r,a,s,o,l=_isPointInArea(n[0],e);for(t=0,r=n.length;t<r;++t)o=s,s=l,l=t<r-1&&_isPointInArea(n[t+1],e),s&&(a=n[t],o&&(a.cp1x=capControlPoint(a.cp1x,e.left,e.right),a.cp1y=capControlPoint(a.cp1y,e.top,e.bottom)),l&&(a.cp2x=capControlPoint(a.cp2x,e.left,e.right),a.cp2y=capControlPoint(a.cp2y,e.top,e.bottom)))}function _updateBezierControlPoints(n,e,t,r,a){let s,o,l,c;if(e.spanGaps&&(n=n.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")splineCurveMonotone(n,a);else{let d=r?n[n.length-1]:n[0];for(s=0,o=n.length;s<o;++s)l=n[s],c=splineCurve(d,l,n[Math.min(s+1,o-(r?0:1))%o],e.tension),l.cp1x=c.previous.x,l.cp1y=c.previous.y,l.cp2x=c.next.x,l.cp2y=c.next.y,d=l}e.capBezierPoints&&capBezierPoints(n,t)}function _isDomSupported(){return typeof window<"u"&&typeof document<"u"}function _getParentNode(n){let e=n.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function parseMaxStyle(n,e,t){let r;return typeof n=="string"?(r=parseInt(n,10),n.indexOf("%")!==-1&&(r=r/100*e.parentNode[t])):r=n,r}const getComputedStyle$1=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function getStyle(n,e){return getComputedStyle$1(n).getPropertyValue(e)}const positions=["top","right","bottom","left"];function getPositionedStyle(n,e,t){const r={};t=t?"-"+t:"";for(let a=0;a<4;a++){const s=positions[a];r[s]=parseFloat(n[e+"-"+s+t])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const useOffsetPos=(n,e,t)=>(n>0||e>0)&&(!t||!t.shadowRoot);function getCanvasPosition(n,e){const t=n.touches,r=t&&t.length?t[0]:n,{offsetX:a,offsetY:s}=r;let o=!1,l,c;if(useOffsetPos(a,s,n.target))l=a,c=s;else{const d=e.getBoundingClientRect();l=r.clientX-d.left,c=r.clientY-d.top,o=!0}return{x:l,y:c,box:o}}function getRelativePosition(n,e){if("native"in n)return n;const{canvas:t,currentDevicePixelRatio:r}=e,a=getComputedStyle$1(t),s=a.boxSizing==="border-box",o=getPositionedStyle(a,"padding"),l=getPositionedStyle(a,"border","width"),{x:c,y:d,box:f}=getCanvasPosition(n,t),p=o.left+(f&&l.left),b=o.top+(f&&l.top);let{width:v,height:x}=e;return s&&(v-=o.width+l.width,x-=o.height+l.height),{x:Math.round((c-p)/v*t.width/r),y:Math.round((d-b)/x*t.height/r)}}function getContainerSize(n,e,t){let r,a;if(e===void 0||t===void 0){const s=n&&_getParentNode(n);if(!s)e=n.clientWidth,t=n.clientHeight;else{const o=s.getBoundingClientRect(),l=getComputedStyle$1(s),c=getPositionedStyle(l,"border","width"),d=getPositionedStyle(l,"padding");e=o.width-d.width-c.width,t=o.height-d.height-c.height,r=parseMaxStyle(l.maxWidth,s,"clientWidth"),a=parseMaxStyle(l.maxHeight,s,"clientHeight")}}return{width:e,height:t,maxWidth:r||INFINITY,maxHeight:a||INFINITY}}const round1=n=>Math.round(n*10)/10;function getMaximumSize(n,e,t,r){const a=getComputedStyle$1(n),s=getPositionedStyle(a,"margin"),o=parseMaxStyle(a.maxWidth,n,"clientWidth")||INFINITY,l=parseMaxStyle(a.maxHeight,n,"clientHeight")||INFINITY,c=getContainerSize(n,e,t);let{width:d,height:f}=c;if(a.boxSizing==="content-box"){const b=getPositionedStyle(a,"border","width"),v=getPositionedStyle(a,"padding");d-=v.width+b.width,f-=v.height+b.height}return d=Math.max(0,d-s.width),f=Math.max(0,r?d/r:f-s.height),d=round1(Math.min(d,o,c.maxWidth)),f=round1(Math.min(f,l,c.maxHeight)),d&&!f&&(f=round1(d/2)),(e!==void 0||t!==void 0)&&r&&c.height&&f>c.height&&(f=c.height,d=round1(Math.floor(f*r))),{width:d,height:f}}function retinaScale(n,e,t){const r=e||1,a=round1(n.height*r),s=round1(n.width*r);n.height=round1(n.height),n.width=round1(n.width);const o=n.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==r||o.height!==a||o.width!==s?(n.currentDevicePixelRatio=r,o.height=a,o.width=s,n.ctx.setTransform(r,0,0,r,0,0),!0):!1}const supportsEventListenerOptions=(function(){let n=!1;try{const e={get passive(){return n=!0,!1}};_isDomSupported()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return n})();function readUsedSize(n,e){const t=getStyle(n,e),r=t&&t.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function _pointInLine(n,e,t,r){return{x:n.x+t*(e.x-n.x),y:n.y+t*(e.y-n.y)}}function _steppedInterpolation(n,e,t,r){return{x:n.x+t*(e.x-n.x),y:r==="middle"?t<.5?n.y:e.y:r==="after"?t<1?n.y:e.y:t>0?e.y:n.y}}function _bezierInterpolation(n,e,t,r){const a={x:n.cp2x,y:n.cp2y},s={x:e.cp1x,y:e.cp1y},o=_pointInLine(n,a,t),l=_pointInLine(a,s,t),c=_pointInLine(s,e,t),d=_pointInLine(o,l,t),f=_pointInLine(l,c,t);return _pointInLine(d,f,t)}const getRightToLeftAdapter=function(n,e){return{x(t){return n+n+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,r){return t-r},leftForLtr(t,r){return t-r}}},getLeftToRightAdapter=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,e){return n+e},leftForLtr(n,e){return n}}};function getRtlAdapter(n,e,t){return n?getRightToLeftAdapter(e,t):getLeftToRightAdapter()}function overrideTextDirection(n,e){let t,r;(e==="ltr"||e==="rtl")&&(t=n.canvas.style,r=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),n.prevTextDirection=r)}function restoreTextDirection(n,e){e!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",e[0],e[1]))}function propertyFn(n){return n==="angle"?{between:_angleBetween,compare:_angleDiff,normalize:_normalizeAngle}:{between:_isBetween,compare:(e,t)=>e-t,normalize:e=>e}}function normalizeSegment({start:n,end:e,count:t,loop:r,style:a}){return{start:n%t,end:e%t,loop:r&&(e-n+1)%t===0,style:a}}function getSegment(n,e,t){const{property:r,start:a,end:s}=t,{between:o,normalize:l}=propertyFn(r),c=e.length;let{start:d,end:f,loop:p}=n,b,v;if(p){for(d+=c,f+=c,b=0,v=c;b<v&&o(l(e[d%c][r]),a,s);++b)d--,f--;d%=c,f%=c}return f<d&&(f+=c),{start:d,end:f,loop:p,style:n.style}}function _boundSegment(n,e,t){if(!t)return[n];const{property:r,start:a,end:s}=t,o=e.length,{compare:l,between:c,normalize:d}=propertyFn(r),{start:f,end:p,loop:b,style:v}=getSegment(n,e,t),x=[];let _=!1,E=null,A,O,$;const P=()=>c(a,$,A)&&l(a,$)!==0,L=()=>l(s,A)===0||c(s,$,A),B=()=>_||P(),g=()=>!_||L();for(let q=f,Y=f;q<=p;++q)O=e[q%o],!O.skip&&(A=d(O[r]),A!==$&&(_=c(A,a,s),E===null&&B()&&(E=l(A,a)===0?q:Y),E!==null&&g()&&(x.push(normalizeSegment({start:E,end:q,loop:b,count:o,style:v})),E=null),Y=q,$=A));return E!==null&&x.push(normalizeSegment({start:E,end:p,loop:b,count:o,style:v})),x}function _boundSegments(n,e){const t=[],r=n.segments;for(let a=0;a<r.length;a++){const s=_boundSegment(r[a],n.points,e);s.length&&t.push(...s)}return t}function findStartAndEnd(n,e,t,r){let a=0,s=e-1;if(t&&!r)for(;a<e&&!n[a].skip;)a++;for(;a<e&&n[a].skip;)a++;for(a%=e,t&&(s+=a);s>a&&n[s%e].skip;)s--;return s%=e,{start:a,end:s}}function solidSegments(n,e,t,r){const a=n.length,s=[];let o=e,l=n[e],c;for(c=e+1;c<=t;++c){const d=n[c%a];d.skip||d.stop?l.skip||(r=!1,s.push({start:e%a,end:(c-1)%a,loop:r}),e=o=d.stop?c:null):(o=c,l.skip&&(e=c)),l=d}return o!==null&&s.push({start:e%a,end:o%a,loop:r}),s}function _computeSegments(n,e){const t=n.points,r=n.options.spanGaps,a=t.length;if(!a)return[];const s=!!n._loop,{start:o,end:l}=findStartAndEnd(t,a,s,r);if(r===!0)return splitByStyles(n,[{start:o,end:l,loop:s}],t,e);const c=l<o?l+a:l,d=!!n._fullLoop&&o===0&&l===a-1;return splitByStyles(n,solidSegments(t,o,c,d),t,e)}function splitByStyles(n,e,t,r){return!r||!r.setContext||!t?e:doSplitByStyles(n,e,t,r)}function doSplitByStyles(n,e,t,r){const a=n._chart.getContext(),s=readStyle(n.options),{_datasetIndex:o,options:{spanGaps:l}}=n,c=t.length,d=[];let f=s,p=e[0].start,b=p;function v(x,_,E,A){const O=l?-1:1;if(x!==_){for(x+=c;t[x%c].skip;)x-=O;for(;t[_%c].skip;)_+=O;x%c!==_%c&&(d.push({start:x%c,end:_%c,loop:E,style:A}),f=A,p=_%c)}}for(const x of e){p=l?p:x.start;let _=t[p%c],E;for(b=p+1;b<=x.end;b++){const A=t[b%c];E=readStyle(r.setContext(createContext(a,{type:"segment",p0:_,p1:A,p0DataIndex:(b-1)%c,p1DataIndex:b%c,datasetIndex:o}))),styleChanged(E,f)&&v(p,b-1,x.loop,f),_=A,f=E}p<b-1&&v(p,b-1,x.loop,f)}return d}function readStyle(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function styleChanged(n,e){if(!e)return!1;const t=[],r=function(a,s){return isPatternOrGradient(s)?(t.includes(s)||t.push(s),t.indexOf(s)):s};return JSON.stringify(n,r)!==JSON.stringify(e,r)}function getSizeForArea(n,e,t){return n.options.clip?n[t]:e[t]}function getDatasetArea(n,e){const{xScale:t,yScale:r}=n;return t&&r?{left:getSizeForArea(t,e,"left"),right:getSizeForArea(t,e,"right"),top:getSizeForArea(r,e,"top"),bottom:getSizeForArea(r,e,"bottom")}:e}function getDatasetClipArea(n,e){const t=e._clip;if(t.disabled)return!1;const r=getDatasetArea(e,n.chartArea);return{left:t.left===!1?0:r.left-(t.left===!0?0:t.left),right:t.right===!1?n.width:r.right+(t.right===!0?0:t.right),top:t.top===!1?0:r.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?n.height:r.bottom+(t.bottom===!0?0:t.bottom)}}class Animator{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,r,a){const s=t.listeners[a],o=t.duration;s.forEach(l=>l({chart:e,initial:t.initial,numSteps:o,currentStep:Math.min(r-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=requestAnimFrame.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((r,a)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,l=!1,c;for(;o>=0;--o)c=s[o],c._active?(c._total>r.duration&&(r.duration=c._total),c.tick(e),l=!0):(s[o]=s[s.length-1],s.pop());l&&(a.draw(),this._notify(a,r,e,"progress")),s.length||(r.running=!1,this._notify(a,r,e,"complete"),r.initial=!1),t+=s.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let r=t.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,r)),r}listen(e,t,r){this._getAnims(e).listeners[t].push(r)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((r,a)=>Math.max(r,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const r=t.items;let a=r.length-1;for(;a>=0;--a)r[a].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var animator=new Animator;const transparent="transparent",interpolators={boolean(n,e,t){return t>.5?e:n},color(n,e,t){const r=color(n||transparent),a=r.valid&&color(e||transparent);return a&&a.valid?a.mix(r,t).hexString():e},number(n,e,t){return n+(e-n)*t}};class Animation{constructor(e,t,r,a){const s=t[r];a=resolve([e.to,a,s,e.from]);const o=resolve([e.from,s,a]);this._active=!0,this._fn=e.fn||interpolators[e.type||typeof o],this._easing=effects[e.easing]||effects.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=r,this._from=o,this._to=a,this._promises=void 0}active(){return this._active}update(e,t,r){if(this._active){this._notify(!1);const a=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=resolve([e.to,t,a,e.from]),this._from=resolve([e.from,a,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,r=this._duration,a=this._prop,s=this._from,o=this._loop,l=this._to;let c;if(this._active=s!==l&&(o||t<r),!this._active){this._target[a]=l,this._notify(!0);return}if(t<0){this._target[a]=s;return}c=t/r%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[a]=this._fn(s,l,c)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,r)=>{e.push({res:t,rej:r})})}_notify(e){const t=e?"res":"rej",r=this._promises||[];for(let a=0;a<r.length;a++)r[a][t]()}}class Animations{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!isObject(e))return;const t=Object.keys(defaults.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const s=e[a];if(!isObject(s))return;const o={};for(const l of t)o[l]=s[l];(isArray(s.properties)&&s.properties||[a]).forEach(l=>{(l===a||!r.has(l))&&r.set(l,o)})})}_animateOptions(e,t){const r=t.options,a=resolveTargetOptions(e,r);if(!a)return[];const s=this._createAnimations(a,r);return r.$shared&&awaitAll(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,t){const r=this._properties,a=[],s=e.$animations||(e.$animations={}),o=Object.keys(t),l=Date.now();let c;for(c=o.length-1;c>=0;--c){const d=o[c];if(d.charAt(0)==="$")continue;if(d==="options"){a.push(...this._animateOptions(e,t));continue}const f=t[d];let p=s[d];const b=r.get(d);if(p)if(b&&p.active()){p.update(b,f,l);continue}else p.cancel();if(!b||!b.duration){e[d]=f;continue}s[d]=p=new Animation(b,e,d,f),a.push(p)}return a}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const r=this._createAnimations(e,t);if(r.length)return animator.add(this._chart,r),!0}}function awaitAll(n,e){const t=[],r=Object.keys(e);for(let a=0;a<r.length;a++){const s=n[r[a]];s&&s.active()&&t.push(s.wait())}return Promise.all(t)}function resolveTargetOptions(n,e){if(!e)return;let t=n.options;if(!t){n.options=e;return}return t.$shared&&(n.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function scaleClip(n,e){const t=n&&n.options||{},r=t.reverse,a=t.min===void 0?e:0,s=t.max===void 0?e:0;return{start:r?s:a,end:r?a:s}}function defaultClip(n,e,t){if(t===!1)return!1;const r=scaleClip(n,t),a=scaleClip(e,t);return{top:a.end,right:r.end,bottom:a.start,left:r.start}}function toClip(n){let e,t,r,a;return isObject(n)?(e=n.top,t=n.right,r=n.bottom,a=n.left):e=t=r=a=n,{top:e,right:t,bottom:r,left:a,disabled:n===!1}}function getSortedDatasetIndices(n,e){const t=[],r=n._getSortedDatasetMetas(e);let a,s;for(a=0,s=r.length;a<s;++a)t.push(r[a].index);return t}function applyStack(n,e,t,r={}){const a=n.keys,s=r.mode==="single";let o,l,c,d;if(e===null)return;let f=!1;for(o=0,l=a.length;o<l;++o){if(c=+a[o],c===t){if(f=!0,r.all)continue;break}d=n.values[c],isNumberFinite(d)&&(s||e===0||sign(e)===sign(d))&&(e+=d)}return!f&&!r.all?0:e}function convertObjectDataToArray(n,e){const{iScale:t,vScale:r}=e,a=t.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(n),l=new Array(o.length);let c,d,f;for(c=0,d=o.length;c<d;++c)f=o[c],l[c]={[a]:f,[s]:n[f]};return l}function isStacked(n,e){const t=n&&n.options.stacked;return t||t===void 0&&e.stack!==void 0}function getStackKey(n,e,t){return`${n.id}.${e.id}.${t.stack||t.type}`}function getUserBounds(n){const{min:e,max:t,minDefined:r,maxDefined:a}=n.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:a?t:Number.POSITIVE_INFINITY}}function getOrCreateStack(n,e,t){const r=n[e]||(n[e]={});return r[t]||(r[t]={})}function getLastIndexInStack(n,e,t,r){for(const a of e.getMatchingVisibleMetas(r).reverse()){const s=n[a.index];if(t&&s>0||!t&&s<0)return a.index}return null}function updateStacks(n,e){const{chart:t,_cachedMeta:r}=n,a=t._stacks||(t._stacks={}),{iScale:s,vScale:o,index:l}=r,c=s.axis,d=o.axis,f=getStackKey(s,o,r),p=e.length;let b;for(let v=0;v<p;++v){const x=e[v],{[c]:_,[d]:E}=x,A=x._stacks||(x._stacks={});b=A[d]=getOrCreateStack(a,f,_),b[l]=E,b._top=getLastIndexInStack(b,o,!0,r.type),b._bottom=getLastIndexInStack(b,o,!1,r.type);const O=b._visualValues||(b._visualValues={});O[l]=E}}function getFirstScaleId(n,e){const t=n.scales;return Object.keys(t).filter(r=>t[r].axis===e).shift()}function createDatasetContext(n,e){return createContext(n,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function createDataContext(n,e,t){return createContext(n,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function clearStacks(n,e){const t=n.controller.index,r=n.vScale&&n.vScale.axis;if(r){e=e||n._parsed;for(const a of e){const s=a._stacks;if(!s||s[r]===void 0||s[r][t]===void 0)return;delete s[r][t],s[r]._visualValues!==void 0&&s[r]._visualValues[t]!==void 0&&delete s[r]._visualValues[t]}}}const isDirectUpdateMode=n=>n==="reset"||n==="none",cloneIfNotShared=(n,e)=>e?n:Object.assign({},n),createStack=(n,e,t)=>n&&!e.hidden&&e._stacked&&{keys:getSortedDatasetIndices(t,!0),values:null};class DatasetController{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=isStacked(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&clearStacks(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,r=this.getDataset(),a=(p,b,v,x)=>p==="x"?b:p==="r"?x:v,s=t.xAxisID=valueOrDefault(r.xAxisID,getFirstScaleId(e,"x")),o=t.yAxisID=valueOrDefault(r.yAxisID,getFirstScaleId(e,"y")),l=t.rAxisID=valueOrDefault(r.rAxisID,getFirstScaleId(e,"r")),c=t.indexAxis,d=t.iAxisID=a(c,s,o,l),f=t.vAxisID=a(c,o,s,l);t.xScale=this.getScaleForId(s),t.yScale=this.getScaleForId(o),t.rScale=this.getScaleForId(l),t.iScale=this.getScaleForId(d),t.vScale=this.getScaleForId(f)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&unlistenArrayEvents(this._data,this),e._stacked&&clearStacks(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),r=this._data;if(isObject(t)){const a=this._cachedMeta;this._data=convertObjectDataToArray(t,a)}else if(r!==t){if(r){unlistenArrayEvents(r,this);const a=this._cachedMeta;clearStacks(a),a._parsed=[]}t&&Object.isExtensible(t)&&listenArrayEvents(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,r=this.getDataset();let a=!1;this._dataCheck();const s=t._stacked;t._stacked=isStacked(t.vScale,t),t.stack!==r.stack&&(a=!0,clearStacks(t),t.stack=r.stack),this._resyncElements(e),(a||s!==t._stacked)&&(updateStacks(this,t._parsed),t._stacked=isStacked(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:r,_data:a}=this,{iScale:s,_stacked:o}=r,l=s.axis;let c=e===0&&t===a.length?!0:r._sorted,d=e>0&&r._parsed[e-1],f,p,b;if(this._parsing===!1)r._parsed=a,r._sorted=!0,b=a;else{isArray(a[e])?b=this.parseArrayData(r,a,e,t):isObject(a[e])?b=this.parseObjectData(r,a,e,t):b=this.parsePrimitiveData(r,a,e,t);const v=()=>p[l]===null||d&&p[l]<d[l];for(f=0;f<t;++f)r._parsed[f+e]=p=b[f],c&&(v()&&(c=!1),d=p);r._sorted=c}o&&updateStacks(this,b)}parsePrimitiveData(e,t,r,a){const{iScale:s,vScale:o}=e,l=s.axis,c=o.axis,d=s.getLabels(),f=s===o,p=new Array(a);let b,v,x;for(b=0,v=a;b<v;++b)x=b+r,p[b]={[l]:f||s.parse(d[x],x),[c]:o.parse(t[x],x)};return p}parseArrayData(e,t,r,a){const{xScale:s,yScale:o}=e,l=new Array(a);let c,d,f,p;for(c=0,d=a;c<d;++c)f=c+r,p=t[f],l[c]={x:s.parse(p[0],f),y:o.parse(p[1],f)};return l}parseObjectData(e,t,r,a){const{xScale:s,yScale:o}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(a);let f,p,b,v;for(f=0,p=a;f<p;++f)b=f+r,v=t[b],d[f]={x:s.parse(resolveObjectKey(v,l),b),y:o.parse(resolveObjectKey(v,c),b)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,r){const a=this.chart,s=this._cachedMeta,o=t[e.axis],l={keys:getSortedDatasetIndices(a,!0),values:t._stacks[e.axis]._visualValues};return applyStack(l,o,s.index,{mode:r})}updateRangeFromParsed(e,t,r,a){const s=r[t.axis];let o=s===null?NaN:s;const l=a&&r._stacks[t.axis];a&&l&&(a.values=l,o=applyStack(a,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,t){const r=this._cachedMeta,a=r._parsed,s=r._sorted&&e===r.iScale,o=a.length,l=this._getOtherScale(e),c=createStack(t,r,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:f,max:p}=getUserBounds(l);let b,v;function x(){v=a[b];const _=v[l.axis];return!isNumberFinite(v[e.axis])||f>_||p<_}for(b=0;b<o&&!(!x()&&(this.updateRangeFromParsed(d,e,v,c),s));++b);if(s){for(b=o-1;b>=0;--b)if(!x()){this.updateRangeFromParsed(d,e,v,c);break}}return d}getAllParsedValues(e){const t=this._cachedMeta._parsed,r=[];let a,s,o;for(a=0,s=t.length;a<s;++a)o=t[a][e.axis],isNumberFinite(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,r=t.iScale,a=t.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=toClip(valueOrDefault(this.options.clip,defaultClip(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,r=this._cachedMeta,a=r.data||[],s=t.chartArea,o=[],l=this._drawStart||0,c=this._drawCount||a.length-l,d=this.options.drawActiveElementsOnTop;let f;for(r.dataset&&r.dataset.draw(e,s,l,c),f=l;f<l+c;++f){const p=a[f];p.hidden||(p.active&&d?o.push(p):p.draw(e,s))}for(f=0;f<o.length;++f)o[f].draw(e,s)}getStyle(e,t){const r=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,t,r){const a=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=createDataContext(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=a.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=createDatasetContext(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!t,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",r){const a=t==="active",s=this._cachedDataOpts,o=e+"-"+t,l=s[o],c=this.enableOptionSharing&&defined(r);if(l)return cloneIfNotShared(l,c);const d=this.chart.config,f=d.datasetElementScopeKeys(this._type,e),p=a?[`${e}Hover`,"hover",e,""]:[e,""],b=d.getOptionScopes(this.getDataset(),f),v=Object.keys(defaults.elements[e]),x=()=>this.getContext(r,a,t),_=d.resolveNamedOptions(b,v,x,p);return _.$shared&&(_.$shared=c,s[o]=Object.freeze(cloneIfNotShared(_,c))),_}_resolveAnimations(e,t,r){const a=this.chart,s=this._cachedDataOpts,o=`animation-${t}`,l=s[o];if(l)return l;let c;if(a.options.animation!==!1){const f=this.chart.config,p=f.datasetAnimationScopeKeys(this._type,t),b=f.getOptionScopes(this.getDataset(),p);c=f.createResolver(b,this.getContext(e,r,t))}const d=new Animations(a,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||isDirectUpdateMode(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const r=this.resolveDataElementOptions(e,t),a=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(t,s)||s!==a;return this.updateSharedOptions(s,t,r),{sharedOptions:s,includeOptions:o}}updateElement(e,t,r,a){isDirectUpdateMode(a)?Object.assign(e,r):this._resolveAnimations(t,a).update(e,r)}updateSharedOptions(e,t,r){e&&!isDirectUpdateMode(t)&&this._resolveAnimations(void 0,t).update(e,r)}_setStyle(e,t,r,a){e.active=a;const s=this.getStyle(t,a);this._resolveAnimations(t,r,a).update(e,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(e,t,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,t,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,r=this._cachedMeta.data;for(const[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];const a=r.length,s=t.length,o=Math.min(s,a);o&&this.parse(0,o),s>a?this._insertElements(a,s-a,e):s<a&&this._removeElements(s,a-s)}_insertElements(e,t,r=!0){const a=this._cachedMeta,s=a.data,o=e+t;let l;const c=d=>{for(d.length+=t,l=d.length-1;l>=o;l--)d[l]=d[l-t]};for(c(s),l=e;l<o;++l)s[l]=new this.dataElementType;this._parsing&&c(a._parsed),this.parse(e,t),r&&this.updateElements(s,e,t,"reset")}updateElements(e,t,r,a){}_removeElements(e,t){const r=this._cachedMeta;if(this._parsing){const a=r._parsed.splice(e,t);r._stacked&&clearStacks(r,a)}r.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,r,a]=e;this[t](r,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function getAllScaleValues(n,e){if(!n._cache.$bar){const t=n.getMatchingVisibleMetas(e);let r=[];for(let a=0,s=t.length;a<s;a++)r=r.concat(t[a].controller.getAllParsedValues(n));n._cache.$bar=_arrayUnique(r.sort((a,s)=>a-s))}return n._cache.$bar}function computeMinSampleSize(n){const e=n.iScale,t=getAllScaleValues(e,n.type);let r=e._length,a,s,o,l;const c=()=>{o===32767||o===-32768||(defined(l)&&(r=Math.min(r,Math.abs(o-l)||r)),l=o)};for(a=0,s=t.length;a<s;++a)o=e.getPixelForValue(t[a]),c();for(l=void 0,a=0,s=e.ticks.length;a<s;++a)o=e.getPixelForTick(a),c();return r}function computeFitCategoryTraits(n,e,t,r){const a=t.barThickness;let s,o;return isNullOrUndef(a)?(s=e.min*t.categoryPercentage,o=t.barPercentage):(s=a*r,o=1),{chunk:s/r,ratio:o,start:e.pixels[n]-s/2}}function computeFlexCategoryTraits(n,e,t,r){const a=e.pixels,s=a[n];let o=n>0?a[n-1]:null,l=n<a.length-1?a[n+1]:null;const c=t.categoryPercentage;o===null&&(o=s-(l===null?e.end-e.start:l-s)),l===null&&(l=s+s-o);const d=s-(s-Math.min(o,l))/2*c;return{chunk:Math.abs(l-o)/2*c/r,ratio:t.barPercentage,start:d}}function parseFloatBar(n,e,t,r){const a=t.parse(n[0],r),s=t.parse(n[1],r),o=Math.min(a,s),l=Math.max(a,s);let c=o,d=l;Math.abs(o)>Math.abs(l)&&(c=l,d=o),e[t.axis]=d,e._custom={barStart:c,barEnd:d,start:a,end:s,min:o,max:l}}function parseValue(n,e,t,r){return isArray(n)?parseFloatBar(n,e,t,r):e[t.axis]=t.parse(n,r),e}function parseArrayOrPrimitive(n,e,t,r){const a=n.iScale,s=n.vScale,o=a.getLabels(),l=a===s,c=[];let d,f,p,b;for(d=t,f=t+r;d<f;++d)b=e[d],p={},p[a.axis]=l||a.parse(o[d],d),c.push(parseValue(b,p,s,d));return c}function isFloatBar(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function barSign(n,e,t){return n!==0?sign(n):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function borderProps(n){let e,t,r,a,s;return n.horizontal?(e=n.base>n.x,t="left",r="right"):(e=n.base<n.y,t="bottom",r="top"),e?(a="end",s="start"):(a="start",s="end"),{start:t,end:r,reverse:e,top:a,bottom:s}}function setBorderSkipped(n,e,t,r){let a=e.borderSkipped;const s={};if(!a){n.borderSkipped=s;return}if(a===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:c,top:d,bottom:f}=borderProps(n);a==="middle"&&t&&(n.enableBorderRadius=!0,(t._top||0)===r?a=d:(t._bottom||0)===r?a=f:(s[parseEdge(f,o,l,c)]=!0,a=d)),s[parseEdge(a,o,l,c)]=!0,n.borderSkipped=s}function parseEdge(n,e,t,r){return r?(n=swap(n,e,t),n=startEnd(n,t,e)):n=startEnd(n,e,t),n}function swap(n,e,t){return n===e?t:n===t?e:n}function startEnd(n,e,t){return n==="start"?e:n==="end"?t:n}function setInflateAmount(n,{inflateAmount:e},t){n.inflateAmount=e==="auto"?t===1?.33:0:e}class BarController extends DatasetController{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(e,t,r,a){return parseArrayOrPrimitive(e,t,r,a)}parseArrayData(e,t,r,a){return parseArrayOrPrimitive(e,t,r,a)}parseObjectData(e,t,r,a){const{iScale:s,vScale:o}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=s.axis==="x"?l:c,f=o.axis==="x"?l:c,p=[];let b,v,x,_;for(b=r,v=r+a;b<v;++b)_=t[b],x={},x[s.axis]=s.parse(resolveObjectKey(_,d),b),p.push(parseValue(resolveObjectKey(_,f),x,o,b));return p}updateRangeFromParsed(e,t,r,a){super.updateRangeFromParsed(e,t,r,a);const s=r._custom;s&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:r,vScale:a}=t,s=this.getParsed(e),o=s._custom,l=isFloatBar(o)?"["+o.start+", "+o.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,r,a){const s=a==="reset",{index:o,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),f=this._getRuler(),{sharedOptions:p,includeOptions:b}=this._getSharedOptions(t,a);for(let v=t;v<t+r;v++){const x=this.getParsed(v),_=s||isNullOrUndef(x[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(v),E=this._calculateBarIndexPixels(v,f),A=(x._stacks||{})[l.axis],O={horizontal:d,base:_.base,enableBorderRadius:!A||isFloatBar(x._custom)||o===A._top||o===A._bottom,x:d?_.head:E.center,y:d?E.center:_.head,height:d?E.size:Math.abs(_.size),width:d?Math.abs(_.size):E.size};b&&(O.options=p||this.resolveDataElementOptions(v,e[v].active?"active":a));const $=O.options||e[v].options;setBorderSkipped(O,$,A,o),setInflateAmount(O,$,f.ratio),this.updateElement(e[v],v,O,a)}}_getStacks(e,t){const{iScale:r}=this._cachedMeta,a=r.getMatchingVisibleMetas(this._type).filter(f=>f.controller.options.grouped),s=r.options.stacked,o=[],l=this._cachedMeta.controller.getParsed(t),c=l&&l[r.axis],d=f=>{const p=f._parsed.find(v=>v[r.axis]===c),b=p&&p[f.vScale.axis];if(isNullOrUndef(b)||isNaN(b))return!0};for(const f of a)if(!(t!==void 0&&d(f))&&((s===!1||o.indexOf(f.stack)===-1||s===void 0&&f.stack===void 0)&&o.push(f.stack),f.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===t).shift()}_getAxis(){const e={},t=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[valueOrDefault(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,r){const a=this._getStacks(e,r),s=t!==void 0?a.indexOf(t):-1;return s===-1?a.length-1:s}_getRuler(){const e=this.options,t=this._cachedMeta,r=t.iScale,a=[];let s,o;for(s=0,o=t.data.length;s<o;++s)a.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const l=e.barThickness;return{min:l||computeMinSampleSize(t),pixels:a,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:l?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:r,index:a},options:{base:s,minBarLength:o}}=this,l=s||0,c=this.getParsed(e),d=c._custom,f=isFloatBar(d);let p=c[t.axis],b=0,v=r?this.applyStack(t,c,r):p,x,_;v!==p&&(b=v-p,v=p),f&&(p=d.barStart,v=d.barEnd-d.barStart,p!==0&&sign(p)!==sign(d.barEnd)&&(b=0),b+=p);const E=!isNullOrUndef(s)&&!f?s:b;let A=t.getPixelForValue(E);if(this.chart.getDataVisibility(e)?x=t.getPixelForValue(b+v):x=A,_=x-A,Math.abs(_)<o){_=barSign(_,t,l)*o,p===l&&(A-=_/2);const O=t.getPixelForDecimal(0),$=t.getPixelForDecimal(1),P=Math.min(O,$),L=Math.max(O,$);A=Math.max(Math.min(A,L),P),x=A+_,r&&!f&&(c._stacks[t.axis]._visualValues[a]=t.getValueForPixel(x)-t.getValueForPixel(A))}if(A===t.getPixelForValue(l)){const O=sign(_)*t.getLineWidthForValue(l)/2;A+=O,_-=O}return{size:_,base:A,head:x,center:x+_/2}}_calculateBarIndexPixels(e,t){const r=t.scale,a=this.options,s=a.skipNull,o=valueOrDefault(a.maxBarThickness,1/0);let l,c;const d=this._getAxisCount();if(t.grouped){const f=s?this._getStackCount(e):t.stackCount,p=a.barThickness==="flex"?computeFlexCategoryTraits(e,t,a,f*d):computeFitCategoryTraits(e,t,a,f*d),b=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,v=this._getAxis().indexOf(valueOrDefault(b,this.getFirstScaleIdForIndexAxis())),x=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0)+v;l=p.start+p.chunk*x+p.chunk/2,c=Math.min(o,p.chunk*p.ratio)}else l=r.getPixelForValue(this.getParsed(e)[r.axis],e),c=Math.min(o,t.min*t.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const e=this._cachedMeta,t=e.vScale,r=e.data,a=r.length;let s=0;for(;s<a;++s)this.getParsed(s)[t.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}class BubbleController extends DatasetController{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,r,a){const s=super.parsePrimitiveData(e,t,r,a);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+r).radius;return s}parseArrayData(e,t,r,a){const s=super.parseArrayData(e,t,r,a);for(let o=0;o<s.length;o++){const l=t[r+o];s[o]._custom=valueOrDefault(l[2],this.resolveDataElementOptions(o+r).radius)}return s}parseObjectData(e,t,r,a){const s=super.parseObjectData(e,t,r,a);for(let o=0;o<s.length;o++){const l=t[r+o];s[o]._custom=valueOrDefault(l&&l.r&&+l.r,this.resolveDataElementOptions(o+r).radius)}return s}getMaxOverflow(){const e=this._cachedMeta.data;let t=0;for(let r=e.length-1;r>=0;--r)t=Math.max(t,e[r].size(this.resolveDataElementOptions(r))/2);return t>0&&t}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),l=a.getLabelForValue(o.x),c=s.getLabelForValue(o.y),d=o._custom;return{label:r[e]||"",value:"("+l+", "+c+(d?", "+d:"")+")"}}update(e){const t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,r,a){const s=a==="reset",{iScale:o,vScale:l}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(t,a),f=o.axis,p=l.axis;for(let b=t;b<t+r;b++){const v=e[b],x=!s&&this.getParsed(b),_={},E=_[f]=s?o.getPixelForDecimal(.5):o.getPixelForValue(x[f]),A=_[p]=s?l.getBasePixel():l.getPixelForValue(x[p]);_.skip=isNaN(E)||isNaN(A),d&&(_.options=c||this.resolveDataElementOptions(b,v.active?"active":a),s&&(_.options.radius=0)),this.updateElement(v,b,_,a)}}resolveDataElementOptions(e,t){const r=this.getParsed(e);let a=super.resolveDataElementOptions(e,t);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return t!=="active"&&(a.radius=0),a.radius+=valueOrDefault(r&&r._custom,s),a}}function getRatioAndOffset(n,e,t){let r=1,a=1,s=0,o=0;if(e<TAU){const l=n,c=l+e,d=Math.cos(l),f=Math.sin(l),p=Math.cos(c),b=Math.sin(c),v=($,P,L)=>_angleBetween($,l,c,!0)?1:Math.max(P,P*t,L,L*t),x=($,P,L)=>_angleBetween($,l,c,!0)?-1:Math.min(P,P*t,L,L*t),_=v(0,d,p),E=v(HALF_PI,f,b),A=x(PI,d,p),O=x(PI+HALF_PI,f,b);r=(_-A)/2,a=(E-O)/2,s=-(_+A)/2,o=-(E+O)/2}return{ratioX:r,ratioY:a,offsetX:s,offsetY:o}}class DoughnutController extends DatasetController{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data,{labels:{pointStyle:r,textAlign:a,color:s,useBorderRadius:o,borderRadius:l}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((c,d)=>{const p=e.getDatasetMeta(0).controller.getStyle(d);return{text:c,fillStyle:p.backgroundColor,fontColor:s,hidden:!e.getDataVisibility(d),lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,textAlign:a,pointStyle:r,borderRadius:o&&(l||p.borderRadius),index:d}}):[]}},onClick(e,t,r){r.chart.toggleDataVisibility(t.index),r.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){const r=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=r;else{let s=c=>+r[c];if(isObject(r[e])){const{key:c="value"}=this._parsing;s=d=>+resolveObjectKey(r[d],c)}let o,l;for(o=e,l=e+t;o<l;++o)a._parsed[o]=s(o)}}_getRotation(){return toRadians(this.options.rotation-90)}_getCircumference(){return toRadians(this.options.circumference)}_getRotationExtents(){let e=TAU,t=-TAU;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const a=this.chart.getDatasetMeta(r).controller,s=a._getRotation(),o=a._getCircumference();e=Math.min(e,s),t=Math.max(t,s+o)}return{rotation:e,circumference:t-e}}update(e){const t=this.chart,{chartArea:r}=t,a=this._cachedMeta,s=a.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,l=Math.max((Math.min(r.width,r.height)-o)/2,0),c=Math.min(toPercentage(this.options.cutout,l),1),d=this._getRingWeight(this.index),{circumference:f,rotation:p}=this._getRotationExtents(),{ratioX:b,ratioY:v,offsetX:x,offsetY:_}=getRatioAndOffset(p,f,c),E=(r.width-o)/b,A=(r.height-o)/v,O=Math.max(Math.min(E,A)/2,0),$=toDimension(this.options.radius,O),P=Math.max($*c,0),L=($-P)/this._getVisibleDatasetWeightTotal();this.offsetX=x*$,this.offsetY=_*$,a.total=this.calculateTotal(),this.outerRadius=$-L*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-L*d,0),this.updateElements(s,0,s.length,e)}_circumference(e,t){const r=this.options,a=this._cachedMeta,s=this._getCircumference();return t&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*s/TAU)}updateElements(e,t,r,a){const s=a==="reset",o=this.chart,l=o.chartArea,d=o.options.animation,f=(l.left+l.right)/2,p=(l.top+l.bottom)/2,b=s&&d.animateScale,v=b?0:this.innerRadius,x=b?0:this.outerRadius,{sharedOptions:_,includeOptions:E}=this._getSharedOptions(t,a);let A=this._getRotation(),O;for(O=0;O<t;++O)A+=this._circumference(O,s);for(O=t;O<t+r;++O){const $=this._circumference(O,s),P=e[O],L={x:f+this.offsetX,y:p+this.offsetY,startAngle:A,endAngle:A+$,circumference:$,outerRadius:x,innerRadius:v};E&&(L.options=_||this.resolveDataElementOptions(O,P.active?"active":a)),A+=$,this.updateElement(P,O,L,a)}}calculateTotal(){const e=this._cachedMeta,t=e.data;let r=0,a;for(a=0;a<t.length;a++){const s=e._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!t[a].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(e){const t=this._cachedMeta.total;return t>0&&!isNaN(e)?TAU*(Math.abs(e)/t):0}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart,a=r.data.labels||[],s=formatNumber(t._parsed[e],r.options.locale);return{label:a[e]||"",value:s}}getMaxBorderWidth(e){let t=0;const r=this.chart;let a,s,o,l,c;if(!e){for(a=0,s=r.data.datasets.length;a<s;++a)if(r.isDatasetVisible(a)){o=r.getDatasetMeta(a),e=o.data,l=o.controller;break}}if(!e)return 0;for(a=0,s=e.length;a<s;++a)c=l.resolveDataElementOptions(a),c.borderAlign!=="inner"&&(t=Math.max(t,c.borderWidth||0,c.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let r=0,a=e.length;r<a;++r){const s=this.resolveDataElementOptions(r);t=Math.max(t,s.offset||0,s.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(t+=this._getRingWeight(r));return t}_getRingWeight(e){return Math.max(valueOrDefault(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class LineController extends DatasetController{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:r,data:a=[],_dataset:s}=t,o=this.chart._animationsDisabled;let{start:l,count:c}=_getStartAndCountOfVisiblePoints(t,a,o);this._drawStart=l,this._drawCount=c,_scaleRangesChanged(t)&&(l=0,c=a.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=a;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:d},e),this.updateElements(a,l,c,e)}updateElements(e,t,r,a){const s=a==="reset",{iScale:o,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:f,includeOptions:p}=this._getSharedOptions(t,a),b=o.axis,v=l.axis,{spanGaps:x,segment:_}=this.options,E=isNumber(x)?x:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||s||a==="none",O=t+r,$=e.length;let P=t>0&&this.getParsed(t-1);for(let L=0;L<$;++L){const B=e[L],g=A?B:{};if(L<t||L>=O){g.skip=!0;continue}const q=this.getParsed(L),Y=isNullOrUndef(q[v]),X=g[b]=o.getPixelForValue(q[b],L),ee=g[v]=s||Y?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,q,c):q[v],L);g.skip=isNaN(X)||isNaN(ee)||Y,g.stop=L>0&&Math.abs(q[b]-P[b])>E,_&&(g.parsed=q,g.raw=d.data[L]),p&&(g.options=f||this.resolveDataElementOptions(L,B.active?"active":a)),A||this.updateElement(B,L,g,a),P=q}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,r=t.options&&t.options.borderWidth||0,a=e.data||[];if(!a.length)return r;const s=a[0].size(this.resolveDataElementOptions(0)),o=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(r,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}class PolarAreaController extends DatasetController{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:r,color:a}}=e.legend.options;return t.labels.map((s,o)=>{const c=e.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:a,lineWidth:c.borderWidth,pointStyle:r,hidden:!e.getDataVisibility(o),index:o}})}return[]}},onClick(e,t,r){r.chart.toggleDataVisibility(t.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart,a=r.data.labels||[],s=formatNumber(t._parsed[e].r,r.options.locale);return{label:a[e]||"",value:s}}parseObjectData(e,t,r,a){return _parseObjectDataRadialScale.bind(this)(e,t,r,a)}update(e){const t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){const e=this._cachedMeta,t={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((r,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<t.min&&(t.min=s),s>t.max&&(t.max=s))}),t}_updateRadius(){const e=this.chart,t=e.chartArea,r=e.options,a=Math.min(t.right-t.left,t.bottom-t.top),s=Math.max(a/2,0),o=Math.max(r.cutoutPercentage?s/100*r.cutoutPercentage:1,0),l=(s-o)/e.getVisibleDatasetCount();this.outerRadius=s-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(e,t,r,a){const s=a==="reset",o=this.chart,c=o.options.animation,d=this._cachedMeta.rScale,f=d.xCenter,p=d.yCenter,b=d.getIndexAngle(0)-.5*PI;let v=b,x;const _=360/this.countVisibleElements();for(x=0;x<t;++x)v+=this._computeAngle(x,a,_);for(x=t;x<t+r;x++){const E=e[x];let A=v,O=v+this._computeAngle(x,a,_),$=o.getDataVisibility(x)?d.getDistanceFromCenterForValue(this.getParsed(x).r):0;v=O,s&&(c.animateScale&&($=0),c.animateRotate&&(A=O=b));const P={x:f,y:p,innerRadius:0,outerRadius:$,startAngle:A,endAngle:O,options:this.resolveDataElementOptions(x,E.active?"active":a)};this.updateElement(E,x,P,a)}}countVisibleElements(){const e=this._cachedMeta;let t=0;return e.data.forEach((r,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&t++}),t}_computeAngle(e,t,r){return this.chart.getDataVisibility(e)?toRadians(this.resolveDataElementOptions(e,t).angle||r):0}}class PieController extends DoughnutController{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class RadarController extends DatasetController{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(e){const t=this._cachedMeta.vScale,r=this.getParsed(e);return{label:t.getLabels()[e],value:""+t.getLabelForValue(r[t.axis])}}parseObjectData(e,t,r,a){return _parseObjectDataRadialScale.bind(this)(e,t,r,a)}update(e){const t=this._cachedMeta,r=t.dataset,a=t.data||[],s=t.iScale.getLabels();if(r.points=a,e!=="resize"){const o=this.resolveDatasetElementOptions(e);this.options.showLine||(o.borderWidth=0);const l={_loop:!0,_fullLoop:s.length===a.length,options:o};this.updateElement(r,void 0,l,e)}this.updateElements(a,0,a.length,e)}updateElements(e,t,r,a){const s=this._cachedMeta.rScale,o=a==="reset";for(let l=t;l<t+r;l++){const c=e[l],d=this.resolveDataElementOptions(l,c.active?"active":a),f=s.getPointPositionForValue(l,this.getParsed(l).r),p=o?s.xCenter:f.x,b=o?s.yCenter:f.y,v={x:p,y:b,angle:f.angle,skip:isNaN(p)||isNaN(b),options:d};this.updateElement(c,l,v,a)}}}class ScatterController extends DatasetController{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(e){const t=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:s}=t,o=this.getParsed(e),l=a.getLabelForValue(o.x),c=s.getLabelForValue(o.y);return{label:r[e]||"",value:"("+l+", "+c+")"}}update(e){const t=this._cachedMeta,{data:r=[]}=t,a=this.chart._animationsDisabled;let{start:s,count:o}=_getStartAndCountOfVisiblePoints(t,r,a);if(this._drawStart=s,this._drawCount=o,_scaleRangesChanged(t)&&(s=0,o=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:l,_dataset:c}=t;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!c._decimated,l.points=r;const d=this.resolveDatasetElementOptions(e);d.segment=this.options.segment,this.updateElement(l,void 0,{animated:!a,options:d},e)}else this.datasetElementType&&(delete t.dataset,this.datasetElementType=!1);this.updateElements(r,s,o,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,t,r,a){const s=a==="reset",{iScale:o,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,f=this.resolveDataElementOptions(t,a),p=this.getSharedOptions(f),b=this.includeOptions(a,p),v=o.axis,x=l.axis,{spanGaps:_,segment:E}=this.options,A=isNumber(_)?_:Number.POSITIVE_INFINITY,O=this.chart._animationsDisabled||s||a==="none";let $=t>0&&this.getParsed(t-1);for(let P=t;P<t+r;++P){const L=e[P],B=this.getParsed(P),g=O?L:{},q=isNullOrUndef(B[x]),Y=g[v]=o.getPixelForValue(B[v],P),X=g[x]=s||q?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,B,c):B[x],P);g.skip=isNaN(Y)||isNaN(X)||q,g.stop=P>0&&Math.abs(B[v]-$[v])>A,E&&(g.parsed=B,g.raw=d.data[P]),b&&(g.options=p||this.resolveDataElementOptions(P,L.active?"active":a)),O||this.updateElement(L,P,g,a),$=B}this.updateSharedOptions(p,a,f)}getMaxOverflow(){const e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let l=0;for(let c=t.length-1;c>=0;--c)l=Math.max(l,t[c].size(this.resolveDataElementOptions(c))/2);return l>0&&l}const r=e.dataset,a=r.options&&r.options.borderWidth||0;if(!t.length)return a;const s=t[0].size(this.resolveDataElementOptions(0)),o=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(a,s,o)/2}}var controllers=Object.freeze({__proto__:null,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController});function abstract(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class DateAdapterBase{static override(e){Object.assign(DateAdapterBase.prototype,e)}options;constructor(e){this.options=e||{}}init(){}formats(){return abstract()}parse(){return abstract()}format(){return abstract()}add(){return abstract()}diff(){return abstract()}startOf(){return abstract()}endOf(){return abstract()}}var adapters={_date:DateAdapterBase};function binarySearch(n,e,t,r){const{controller:a,data:s,_sorted:o}=n,l=a._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(l&&e===l.axis&&e!=="r"&&o&&s.length){const d=l._reversePixels?_rlookupByKey:_lookupByKey;if(r){if(a._sharedOptions){const f=s[0],p=typeof f.getRange=="function"&&f.getRange(e);if(p){const b=d(s,e,t-p),v=d(s,e,t+p);return{lo:b.lo,hi:v.hi}}}}else{const f=d(s,e,t);if(c){const{vScale:p}=a._cachedMeta,{_parsed:b}=n,v=b.slice(0,f.lo+1).reverse().findIndex(_=>!isNullOrUndef(_[p.axis]));f.lo-=Math.max(0,v);const x=b.slice(f.hi).findIndex(_=>!isNullOrUndef(_[p.axis]));f.hi+=Math.max(0,x)}return f}}return{lo:0,hi:s.length-1}}function evaluateInteractionItems(n,e,t,r,a){const s=n.getSortedVisibleDatasetMetas(),o=t[e];for(let l=0,c=s.length;l<c;++l){const{index:d,data:f}=s[l],{lo:p,hi:b}=binarySearch(s[l],e,o,a);for(let v=p;v<=b;++v){const x=f[v];x.skip||r(x,d,v)}}}function getDistanceMetricForAxis(n){const e=n.indexOf("x")!==-1,t=n.indexOf("y")!==-1;return function(r,a){const s=e?Math.abs(r.x-a.x):0,o=t?Math.abs(r.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function getIntersectItems(n,e,t,r,a){const s=[];return!a&&!n.isPointInArea(e)||evaluateInteractionItems(n,t,e,function(l,c,d){!a&&!_isPointInArea(l,n.chartArea,0)||l.inRange(e.x,e.y,r)&&s.push({element:l,datasetIndex:c,index:d})},!0),s}function getNearestRadialItems(n,e,t,r){let a=[];function s(o,l,c){const{startAngle:d,endAngle:f}=o.getProps(["startAngle","endAngle"],r),{angle:p}=getAngleFromPoint(o,{x:e.x,y:e.y});_angleBetween(p,d,f)&&a.push({element:o,datasetIndex:l,index:c})}return evaluateInteractionItems(n,t,e,s),a}function getNearestCartesianItems(n,e,t,r,a,s){let o=[];const l=getDistanceMetricForAxis(t);let c=Number.POSITIVE_INFINITY;function d(f,p,b){const v=f.inRange(e.x,e.y,a);if(r&&!v)return;const x=f.getCenterPoint(a);if(!(!!s||n.isPointInArea(x))&&!v)return;const E=l(e,x);E<c?(o=[{element:f,datasetIndex:p,index:b}],c=E):E===c&&o.push({element:f,datasetIndex:p,index:b})}return evaluateInteractionItems(n,t,e,d),o}function getNearestItems(n,e,t,r,a,s){return!s&&!n.isPointInArea(e)?[]:t==="r"&&!r?getNearestRadialItems(n,e,t,a):getNearestCartesianItems(n,e,t,r,a,s)}function getAxisItems(n,e,t,r,a){const s=[],o=t==="x"?"inXRange":"inYRange";let l=!1;return evaluateInteractionItems(n,t,e,(c,d,f)=>{c[o]&&c[o](e[t],a)&&(s.push({element:c,datasetIndex:d,index:f}),l=l||c.inRange(e.x,e.y,a))}),r&&!l?[]:s}var Interaction={modes:{index(n,e,t,r){const a=getRelativePosition(e,n),s=t.axis||"x",o=t.includeInvisible||!1,l=t.intersect?getIntersectItems(n,a,s,r,o):getNearestItems(n,a,s,!1,r,o),c=[];return l.length?(n.getSortedVisibleDatasetMetas().forEach(d=>{const f=l[0].index,p=d.data[f];p&&!p.skip&&c.push({element:p,datasetIndex:d.index,index:f})}),c):[]},dataset(n,e,t,r){const a=getRelativePosition(e,n),s=t.axis||"xy",o=t.includeInvisible||!1;let l=t.intersect?getIntersectItems(n,a,s,r,o):getNearestItems(n,a,s,!1,r,o);if(l.length>0){const c=l[0].datasetIndex,d=n.getDatasetMeta(c).data;l=[];for(let f=0;f<d.length;++f)l.push({element:d[f],datasetIndex:c,index:f})}return l},point(n,e,t,r){const a=getRelativePosition(e,n),s=t.axis||"xy",o=t.includeInvisible||!1;return getIntersectItems(n,a,s,r,o)},nearest(n,e,t,r){const a=getRelativePosition(e,n),s=t.axis||"xy",o=t.includeInvisible||!1;return getNearestItems(n,a,s,t.intersect,r,o)},x(n,e,t,r){const a=getRelativePosition(e,n);return getAxisItems(n,a,"x",t.intersect,r)},y(n,e,t,r){const a=getRelativePosition(e,n);return getAxisItems(n,a,"y",t.intersect,r)}}};const STATIC_POSITIONS=["left","top","right","bottom"];function filterByPosition(n,e){return n.filter(t=>t.pos===e)}function filterDynamicPositionByAxis(n,e){return n.filter(t=>STATIC_POSITIONS.indexOf(t.pos)===-1&&t.box.axis===e)}function sortByWeight(n,e){return n.sort((t,r)=>{const a=e?r:t,s=e?t:r;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function wrapBoxes(n){const e=[];let t,r,a,s,o,l;for(t=0,r=(n||[]).length;t<r;++t)a=n[t],{position:s,options:{stack:o,stackWeight:l=1}}=a,e.push({index:t,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:o&&s+o,stackWeight:l});return e}function buildStacks(n){const e={};for(const t of n){const{stack:r,pos:a,stackWeight:s}=t;if(!r||!STATIC_POSITIONS.includes(a))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function setLayoutDims(n,e){const t=buildStacks(n),{vBoxMaxWidth:r,hBoxMaxHeight:a}=e;let s,o,l;for(s=0,o=n.length;s<o;++s){l=n[s];const{fullSize:c}=l.box,d=t[l.stack],f=d&&l.stackWeight/d.weight;l.horizontal?(l.width=f?f*r:c&&e.availableWidth,l.height=a):(l.width=r,l.height=f?f*a:c&&e.availableHeight)}return t}function buildLayoutBoxes(n){const e=wrapBoxes(n),t=sortByWeight(e.filter(d=>d.box.fullSize),!0),r=sortByWeight(filterByPosition(e,"left"),!0),a=sortByWeight(filterByPosition(e,"right")),s=sortByWeight(filterByPosition(e,"top"),!0),o=sortByWeight(filterByPosition(e,"bottom")),l=filterDynamicPositionByAxis(e,"x"),c=filterDynamicPositionByAxis(e,"y");return{fullSize:t,leftAndTop:r.concat(s),rightAndBottom:a.concat(c).concat(o).concat(l),chartArea:filterByPosition(e,"chartArea"),vertical:r.concat(a).concat(c),horizontal:s.concat(o).concat(l)}}function getCombinedMax(n,e,t,r){return Math.max(n[t],e[t])+Math.max(n[r],e[r])}function updateMaxPadding(n,e){n.top=Math.max(n.top,e.top),n.left=Math.max(n.left,e.left),n.bottom=Math.max(n.bottom,e.bottom),n.right=Math.max(n.right,e.right)}function updateDims(n,e,t,r){const{pos:a,box:s}=t,o=n.maxPadding;if(!isObject(a)){t.size&&(n[a]-=t.size);const p=r[t.stack]||{size:0,count:1};p.size=Math.max(p.size,t.horizontal?s.height:s.width),t.size=p.size/p.count,n[a]+=t.size}s.getPadding&&updateMaxPadding(o,s.getPadding());const l=Math.max(0,e.outerWidth-getCombinedMax(o,n,"left","right")),c=Math.max(0,e.outerHeight-getCombinedMax(o,n,"top","bottom")),d=l!==n.w,f=c!==n.h;return n.w=l,n.h=c,t.horizontal?{same:d,other:f}:{same:f,other:d}}function handleMaxPadding(n){const e=n.maxPadding;function t(r){const a=Math.max(e[r]-n[r],0);return n[r]+=a,a}n.y+=t("top"),n.x+=t("left"),t("right"),t("bottom")}function getMargins(n,e){const t=e.maxPadding;function r(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(o=>{s[o]=Math.max(e[o],t[o])}),s}return r(n?["left","right"]:["top","bottom"])}function fitBoxes(n,e,t,r){const a=[];let s,o,l,c,d,f;for(s=0,o=n.length,d=0;s<o;++s){l=n[s],c=l.box,c.update(l.width||e.w,l.height||e.h,getMargins(l.horizontal,e));const{same:p,other:b}=updateDims(e,t,l,r);d|=p&&a.length,f=f||b,c.fullSize||a.push(l)}return d&&fitBoxes(a,e,t,r)||f}function setBoxDims(n,e,t,r,a){n.top=t,n.left=e,n.right=e+r,n.bottom=t+a,n.width=r,n.height=a}function placeBoxes(n,e,t,r){const a=t.padding;let{x:s,y:o}=e;for(const l of n){const c=l.box,d=r[l.stack]||{placed:0,weight:1},f=l.stackWeight/d.weight||1;if(l.horizontal){const p=e.w*f,b=d.size||c.height;defined(d.start)&&(o=d.start),c.fullSize?setBoxDims(c,a.left,o,t.outerWidth-a.right-a.left,b):setBoxDims(c,e.left+d.placed,o,p,b),d.start=o,d.placed+=p,o=c.bottom}else{const p=e.h*f,b=d.size||c.width;defined(d.start)&&(s=d.start),c.fullSize?setBoxDims(c,s,a.top,b,t.outerHeight-a.bottom-a.top):setBoxDims(c,s,e.top+d.placed,b,p),d.start=s,d.placed+=p,s=c.right}}e.x=s,e.y=o}var layouts={addBox(n,e){n.boxes||(n.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},n.boxes.push(e)},removeBox(n,e){const t=n.boxes?n.boxes.indexOf(e):-1;t!==-1&&n.boxes.splice(t,1)},configure(n,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(n,e,t,r){if(!n)return;const a=toPadding(n.options.layout.padding),s=Math.max(e-a.width,0),o=Math.max(t-a.height,0),l=buildLayoutBoxes(n.boxes),c=l.vertical,d=l.horizontal;each(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const f=c.reduce((_,E)=>E.box.options&&E.box.options.display===!1?_:_+1,0)||1,p=Object.freeze({outerWidth:e,outerHeight:t,padding:a,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/f,hBoxMaxHeight:o/2}),b=Object.assign({},a);updateMaxPadding(b,toPadding(r));const v=Object.assign({maxPadding:b,w:s,h:o,x:a.left,y:a.top},a),x=setLayoutDims(c.concat(d),p);fitBoxes(l.fullSize,v,p,x),fitBoxes(c,v,p,x),fitBoxes(d,v,p,x)&&fitBoxes(c,v,p,x),handleMaxPadding(v),placeBoxes(l.leftAndTop,v,p,x),v.x+=v.w,v.y+=v.h,placeBoxes(l.rightAndBottom,v,p,x),n.chartArea={left:v.left,top:v.top,right:v.left+v.w,bottom:v.top+v.h,height:v.h,width:v.w},each(l.chartArea,_=>{const E=_.box;Object.assign(E,n.chartArea),E.update(v.w,v.h,{left:0,top:0,right:0,bottom:0})})}};class BasePlatform{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,r){}removeEventListener(e,t,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,r,a){return t=Math.max(0,t||e.width),r=r||e.height,{width:t,height:Math.max(0,a?Math.floor(t/a):r)}}isAttached(e){return!0}updateConfig(e){}}class BasicPlatform extends BasePlatform{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const EXPANDO_KEY="$chartjs",EVENT_TYPES={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},isNullOrEmpty=n=>n===null||n==="";function initCanvas(n,e){const t=n.style,r=n.getAttribute("height"),a=n.getAttribute("width");if(n[EXPANDO_KEY]={initial:{height:r,width:a,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",isNullOrEmpty(a)){const s=readUsedSize(n,"width");s!==void 0&&(n.width=s)}if(isNullOrEmpty(r))if(n.style.height==="")n.height=n.width/(e||2);else{const s=readUsedSize(n,"height");s!==void 0&&(n.height=s)}return n}const eventListenerOptions=supportsEventListenerOptions?{passive:!0}:!1;function addListener(n,e,t){n&&n.addEventListener(e,t,eventListenerOptions)}function removeListener(n,e,t){n&&n.canvas&&n.canvas.removeEventListener(e,t,eventListenerOptions)}function fromNativeEvent(n,e){const t=EVENT_TYPES[n.type]||n.type,{x:r,y:a}=getRelativePosition(n,e);return{type:t,chart:e,native:n,x:r!==void 0?r:null,y:a!==void 0?a:null}}function nodeListContains(n,e){for(const t of n)if(t===e||t.contains(e))return!0}function createAttachObserver(n,e,t){const r=n.canvas,a=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||nodeListContains(l.addedNodes,r),o=o&&!nodeListContains(l.removedNodes,r);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}function createDetachObserver(n,e,t){const r=n.canvas,a=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||nodeListContains(l.removedNodes,r),o=o&&!nodeListContains(l.addedNodes,r);o&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}const drpListeningCharts=new Map;let oldDevicePixelRatio=0;function onWindowResize(){const n=window.devicePixelRatio;n!==oldDevicePixelRatio&&(oldDevicePixelRatio=n,drpListeningCharts.forEach((e,t)=>{t.currentDevicePixelRatio!==n&&e()}))}function listenDevicePixelRatioChanges(n,e){drpListeningCharts.size||window.addEventListener("resize",onWindowResize),drpListeningCharts.set(n,e)}function unlistenDevicePixelRatioChanges(n){drpListeningCharts.delete(n),drpListeningCharts.size||window.removeEventListener("resize",onWindowResize)}function createResizeObserver(n,e,t){const r=n.canvas,a=r&&_getParentNode(r);if(!a)return;const s=throttled((l,c)=>{const d=a.clientWidth;t(l,c),d<a.clientWidth&&t()},window),o=new ResizeObserver(l=>{const c=l[0],d=c.contentRect.width,f=c.contentRect.height;d===0&&f===0||s(d,f)});return o.observe(a),listenDevicePixelRatioChanges(n,s),o}function releaseObserver(n,e,t){t&&t.disconnect(),e==="resize"&&unlistenDevicePixelRatioChanges(n)}function createProxyAndListen(n,e,t){const r=n.canvas,a=throttled(s=>{n.ctx!==null&&t(fromNativeEvent(s,n))},n);return addListener(r,e,a),a}class DomPlatform extends BasePlatform{acquireContext(e,t){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(initCanvas(e,t),r):null}releaseContext(e){const t=e.canvas;if(!t[EXPANDO_KEY])return!1;const r=t[EXPANDO_KEY].initial;["height","width"].forEach(s=>{const o=r[s];isNullOrUndef(o)?t.removeAttribute(s):t.setAttribute(s,o)});const a=r.style||{};return Object.keys(a).forEach(s=>{t.style[s]=a[s]}),t.width=t.width,delete t[EXPANDO_KEY],!0}addEventListener(e,t,r){this.removeEventListener(e,t);const a=e.$proxies||(e.$proxies={}),o={attach:createAttachObserver,detach:createDetachObserver,resize:createResizeObserver}[t]||createProxyAndListen;a[t]=o(e,t,r)}removeEventListener(e,t){const r=e.$proxies||(e.$proxies={}),a=r[t];if(!a)return;({attach:releaseObserver,detach:releaseObserver,resize:releaseObserver}[t]||removeListener)(e,t,a),r[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,r,a){return getMaximumSize(e,t,r,a)}isAttached(e){const t=e&&_getParentNode(e);return!!(t&&t.isConnected)}}function _detectPlatform(n){return!_isDomSupported()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?BasicPlatform:DomPlatform}let Element$1=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){const{x:t,y:r}=this.getProps(["x","y"],e);return{x:t,y:r}}hasValue(){return isNumber(this.x)&&isNumber(this.y)}getProps(e,t){const r=this.$animations;if(!t||!r)return this;const a={};return e.forEach(s=>{a[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),a}};function autoSkip(n,e){const t=n.options.ticks,r=determineMaxTicks(n),a=Math.min(t.maxTicksLimit||r,r),s=t.major.enabled?getMajorIndices(e):[],o=s.length,l=s[0],c=s[o-1],d=[];if(o>a)return skipMajors(e,d,s,o/a),d;const f=calculateSpacing(s,e,a);if(o>0){let p,b;const v=o>1?Math.round((c-l)/(o-1)):null;for(skip(e,d,f,isNullOrUndef(v)?0:l-v,l),p=0,b=o-1;p<b;p++)skip(e,d,f,s[p],s[p+1]);return skip(e,d,f,c,isNullOrUndef(v)?e.length:c+v),d}return skip(e,d,f),d}function determineMaxTicks(n){const e=n.options.offset,t=n._tickSize(),r=n._length/t+(e?0:1),a=n._maxLength/t;return Math.floor(Math.min(r,a))}function calculateSpacing(n,e,t){const r=getEvenSpacing(n),a=e.length/t;if(!r)return Math.max(a,1);const s=_factorize(r);for(let o=0,l=s.length-1;o<l;o++){const c=s[o];if(c>a)return c}return Math.max(a,1)}function getMajorIndices(n){const e=[];let t,r;for(t=0,r=n.length;t<r;t++)n[t].major&&e.push(t);return e}function skipMajors(n,e,t,r){let a=0,s=t[0],o;for(r=Math.ceil(r),o=0;o<n.length;o++)o===s&&(e.push(n[o]),a++,s=t[a*r])}function skip(n,e,t,r,a){const s=valueOrDefault(r,0),o=Math.min(valueOrDefault(a,n.length),n.length);let l=0,c,d,f;for(t=Math.ceil(t),a&&(c=a-r,t=c/Math.floor(c/t)),f=s;f<0;)l++,f=Math.round(s+l*t);for(d=Math.max(s,0);d<o;d++)d===f&&(e.push(n[d]),l++,f=Math.round(s+l*t))}function getEvenSpacing(n){const e=n.length;let t,r;if(e<2)return!1;for(r=n[0],t=1;t<e;++t)if(n[t]-n[t-1]!==r)return!1;return r}const reverseAlign=n=>n==="left"?"right":n==="right"?"left":n,offsetFromEdge=(n,e,t)=>e==="top"||e==="left"?n[e]+t:n[e]-t,getTicksLimit=(n,e)=>Math.min(e||n,n);function sample(n,e){const t=[],r=n.length/e,a=n.length;let s=0;for(;s<a;s+=r)t.push(n[Math.floor(s)]);return t}function getPixelForGridLine(n,e,t){const r=n.ticks.length,a=Math.min(e,r-1),s=n._startPixel,o=n._endPixel,l=1e-6;let c=n.getPixelForTick(a),d;if(!(t&&(r===1?d=Math.max(c-s,o-c):e===0?d=(n.getPixelForTick(1)-c)/2:d=(c-n.getPixelForTick(a-1))/2,c+=a<e?d:-d,c<s-l||c>o+l)))return c}function garbageCollect(n,e){each(n,t=>{const r=t.gc,a=r.length/2;let s;if(a>e){for(s=0;s<a;++s)delete t.data[r[s]];r.splice(0,a)}})}function getTickMarkLength(n){return n.drawTicks?n.tickLength:0}function getTitleHeight(n,e){if(!n.display)return 0;const t=toFont(n.font,e),r=toPadding(n.padding);return(isArray(n.text)?n.text.length:1)*t.lineHeight+r.height}function createScaleContext(n,e){return createContext(n,{scale:e,type:"scale"})}function createTickContext(n,e,t){return createContext(n,{tick:t,index:e,type:"tick"})}function titleAlign(n,e,t){let r=_toLeftRightCenter(n);return(t&&e!=="right"||!t&&e==="right")&&(r=reverseAlign(r)),r}function titleArgs(n,e,t,r){const{top:a,left:s,bottom:o,right:l,chart:c}=n,{chartArea:d,scales:f}=c;let p=0,b,v,x;const _=o-a,E=l-s;if(n.isHorizontal()){if(v=_alignStartEnd(r,s,l),isObject(t)){const A=Object.keys(t)[0],O=t[A];x=f[A].getPixelForValue(O)+_-e}else t==="center"?x=(d.bottom+d.top)/2+_-e:x=offsetFromEdge(n,t,e);b=l-s}else{if(isObject(t)){const A=Object.keys(t)[0],O=t[A];v=f[A].getPixelForValue(O)-E+e}else t==="center"?v=(d.left+d.right)/2-E+e:v=offsetFromEdge(n,t,e);x=_alignStartEnd(r,o,a),p=t==="left"?-HALF_PI:HALF_PI}return{titleX:v,titleY:x,maxWidth:b,rotation:p}}class Scale extends Element$1{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:r,_suggestedMax:a}=this;return e=finiteOrDefault(e,Number.POSITIVE_INFINITY),t=finiteOrDefault(t,Number.NEGATIVE_INFINITY),r=finiteOrDefault(r,Number.POSITIVE_INFINITY),a=finiteOrDefault(a,Number.NEGATIVE_INFINITY),{min:finiteOrDefault(e,r),max:finiteOrDefault(t,a),minDefined:isNumberFinite(e),maxDefined:isNumberFinite(t)}}getMinMax(e){let{min:t,max:r,minDefined:a,maxDefined:s}=this.getUserBounds(),o;if(a&&s)return{min:t,max:r};const l=this.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)o=l[c].controller.getMinMax(this,e),a||(t=Math.min(t,o.min)),s||(r=Math.max(r,o.max));return t=s&&t>r?r:t,r=a&&t>r?t:r,{min:finiteOrDefault(t,finiteOrDefault(r,t)),max:finiteOrDefault(r,finiteOrDefault(t,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){callback(this.options.beforeUpdate,[this])}update(e,t,r){const{beginAtZero:a,grace:s,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=_addGrace(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=l<this.ticks.length;this._convertTicksToLabels(c?sample(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=autoSkip(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,r;this.isHorizontal()?(t=this.left,r=this.right):(t=this.top,r=this.bottom,e=!e),this._startPixel=t,this._endPixel=r,this._reversePixels=e,this._length=r-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){callback(this.options.afterUpdate,[this])}beforeSetDimensions(){callback(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){callback(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),callback(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){callback(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let r,a,s;for(r=0,a=e.length;r<a;r++)s=e[r],s.label=callback(t.callback,[s.value,r,e],this)}afterTickToLabelConversion(){callback(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){callback(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,r=getTicksLimit(this.ticks.length,e.ticks.maxTicksLimit),a=t.minRotation||0,s=t.maxRotation;let o=a,l,c,d;if(!this._isVisible()||!t.display||a>=s||r<=1||!this.isHorizontal()){this.labelRotation=a;return}const f=this._getLabelSizes(),p=f.widest.width,b=f.highest.height,v=_limitValue(this.chart.width-p,0,this.maxWidth);l=e.offset?this.maxWidth/r:v/(r-1),p+6>l&&(l=v/(r-(e.offset?.5:1)),c=this.maxHeight-getTickMarkLength(e.grid)-t.padding-getTitleHeight(e.title,this.chart.options.font),d=Math.sqrt(p*p+b*b),o=toDegrees(Math.min(Math.asin(_limitValue((f.highest.height+6)/l,-1,1)),Math.asin(_limitValue(c/d,-1,1))-Math.asin(_limitValue(b/d,-1,1)))),o=Math.max(a,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){callback(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){callback(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:r,title:a,grid:s}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const c=getTitleHeight(a,t.options.font);if(l?(e.width=this.maxWidth,e.height=getTickMarkLength(s)+c):(e.height=this.maxHeight,e.width=getTickMarkLength(s)+c),r.display&&this.ticks.length){const{first:d,last:f,widest:p,highest:b}=this._getLabelSizes(),v=r.padding*2,x=toRadians(this.labelRotation),_=Math.cos(x),E=Math.sin(x);if(l){const A=r.mirror?0:E*p.width+_*b.height;e.height=Math.min(this.maxHeight,e.height+A+v)}else{const A=r.mirror?0:_*p.width+E*b.height;e.width=Math.min(this.maxWidth,e.width+A+v)}this._calculatePadding(d,f,E,_)}}this._handleMargins(),l?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,r,a){const{ticks:{align:s,padding:o},position:l}=this.options,c=this.labelRotation!==0,d=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const f=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let b=0,v=0;c?d?(b=a*e.width,v=r*t.height):(b=r*e.height,v=a*t.width):s==="start"?v=t.width:s==="end"?b=e.width:s!=="inner"&&(b=e.width/2,v=t.width/2),this.paddingLeft=Math.max((b-f+o)*this.width/(this.width-f),0),this.paddingRight=Math.max((v-p+o)*this.width/(this.width-p),0)}else{let f=t.height/2,p=e.height/2;s==="start"?(f=0,p=e.height):s==="end"&&(f=t.height,p=0),this.paddingTop=f+o,this.paddingBottom=p+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){callback(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,r;for(t=0,r=e.length;t<r;t++)isNullOrUndef(e[t].label)&&(e.splice(t,1),r--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let r=this.ticks;t<r.length&&(r=sample(r,t)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,r){const{ctx:a,_longestTextCache:s}=this,o=[],l=[],c=Math.floor(t/getTicksLimit(t,r));let d=0,f=0,p,b,v,x,_,E,A,O,$,P,L;for(p=0;p<t;p+=c){if(x=e[p].label,_=this._resolveTickFontOptions(p),a.font=E=_.string,A=s[E]=s[E]||{data:{},gc:[]},O=_.lineHeight,$=P=0,!isNullOrUndef(x)&&!isArray(x))$=_measureText(a,A.data,A.gc,$,x),P=O;else if(isArray(x))for(b=0,v=x.length;b<v;++b)L=x[b],!isNullOrUndef(L)&&!isArray(L)&&($=_measureText(a,A.data,A.gc,$,L),P+=O);o.push($),l.push(P),d=Math.max($,d),f=Math.max(P,f)}garbageCollect(s,t);const B=o.indexOf(d),g=l.indexOf(f),q=Y=>({width:o[Y]||0,height:l[Y]||0});return{first:q(0),last:q(t-1),widest:q(B),highest:q(g),widths:o,heights:l}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return _int16Range(this._alignToPixels?_alignPixel(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const r=t[e];return r.$context||(r.$context=createTickContext(this.getContext(),e,r))}return this.$context||(this.$context=createScaleContext(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=toRadians(this.labelRotation),r=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,l=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return this.isHorizontal()?c*r>l*a?l/r:c/a:c*a<l*r?c/r:l/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,r=this.chart,a=this.options,{grid:s,position:o,border:l}=a,c=s.offset,d=this.isHorizontal(),p=this.ticks.length+(c?1:0),b=getTickMarkLength(s),v=[],x=l.setContext(this.getContext()),_=x.display?x.width:0,E=_/2,A=function(re){return _alignPixel(r,re,_)};let O,$,P,L,B,g,q,Y,X,ee,ue,J;if(o==="top")O=A(this.bottom),g=this.bottom-b,Y=O-E,ee=A(e.top)+E,J=e.bottom;else if(o==="bottom")O=A(this.top),ee=e.top,J=A(e.bottom)-E,g=O+E,Y=this.top+b;else if(o==="left")O=A(this.right),B=this.right-b,q=O-E,X=A(e.left)+E,ue=e.right;else if(o==="right")O=A(this.left),X=e.left,ue=A(e.right)-E,B=O+E,q=this.left+b;else if(t==="x"){if(o==="center")O=A((e.top+e.bottom)/2+.5);else if(isObject(o)){const re=Object.keys(o)[0],oe=o[re];O=A(this.chart.scales[re].getPixelForValue(oe))}ee=e.top,J=e.bottom,g=O+E,Y=g+b}else if(t==="y"){if(o==="center")O=A((e.left+e.right)/2);else if(isObject(o)){const re=Object.keys(o)[0],oe=o[re];O=A(this.chart.scales[re].getPixelForValue(oe))}B=O-E,q=B-b,X=e.left,ue=e.right}const pe=valueOrDefault(a.ticks.maxTicksLimit,p),se=Math.max(1,Math.ceil(p/pe));for($=0;$<p;$+=se){const re=this.getContext($),oe=s.setContext(re),Oe=l.setContext(re),Ee=oe.lineWidth,Be=oe.color,$e=Oe.dash||[],Se=Oe.dashOffset,je=oe.tickWidth,Re=oe.tickColor,Fe=oe.tickBorderDash||[],ge=oe.tickBorderDashOffset;P=getPixelForGridLine(this,$,c),P!==void 0&&(L=_alignPixel(r,P,Ee),d?B=q=X=ue=L:g=Y=ee=J=L,v.push({tx1:B,ty1:g,tx2:q,ty2:Y,x1:X,y1:ee,x2:ue,y2:J,width:Ee,color:Be,borderDash:$e,borderDashOffset:Se,tickWidth:je,tickColor:Re,tickBorderDash:Fe,tickBorderDashOffset:ge}))}return this._ticksLength=p,this._borderValue=O,v}_computeLabelItems(e){const t=this.axis,r=this.options,{position:a,ticks:s}=r,o=this.isHorizontal(),l=this.ticks,{align:c,crossAlign:d,padding:f,mirror:p}=s,b=getTickMarkLength(r.grid),v=b+f,x=p?-f:v,_=-toRadians(this.labelRotation),E=[];let A,O,$,P,L,B,g,q,Y,X,ee,ue,J="middle";if(a==="top")B=this.bottom-x,g=this._getXAxisLabelAlignment();else if(a==="bottom")B=this.top+x,g=this._getXAxisLabelAlignment();else if(a==="left"){const se=this._getYAxisLabelAlignment(b);g=se.textAlign,L=se.x}else if(a==="right"){const se=this._getYAxisLabelAlignment(b);g=se.textAlign,L=se.x}else if(t==="x"){if(a==="center")B=(e.top+e.bottom)/2+v;else if(isObject(a)){const se=Object.keys(a)[0],re=a[se];B=this.chart.scales[se].getPixelForValue(re)+v}g=this._getXAxisLabelAlignment()}else if(t==="y"){if(a==="center")L=(e.left+e.right)/2-v;else if(isObject(a)){const se=Object.keys(a)[0],re=a[se];L=this.chart.scales[se].getPixelForValue(re)}g=this._getYAxisLabelAlignment(b).textAlign}t==="y"&&(c==="start"?J="top":c==="end"&&(J="bottom"));const pe=this._getLabelSizes();for(A=0,O=l.length;A<O;++A){$=l[A],P=$.label;const se=s.setContext(this.getContext(A));q=this.getPixelForTick(A)+s.labelOffset,Y=this._resolveTickFontOptions(A),X=Y.lineHeight,ee=isArray(P)?P.length:1;const re=ee/2,oe=se.color,Oe=se.textStrokeColor,Ee=se.textStrokeWidth;let Be=g;o?(L=q,g==="inner"&&(A===O-1?Be=this.options.reverse?"left":"right":A===0?Be=this.options.reverse?"right":"left":Be="center"),a==="top"?d==="near"||_!==0?ue=-ee*X+X/2:d==="center"?ue=-pe.highest.height/2-re*X+X:ue=-pe.highest.height+X/2:d==="near"||_!==0?ue=X/2:d==="center"?ue=pe.highest.height/2-re*X:ue=pe.highest.height-ee*X,p&&(ue*=-1),_!==0&&!se.showLabelBackdrop&&(L+=X/2*Math.sin(_))):(B=q,ue=(1-ee)*X/2);let $e;if(se.showLabelBackdrop){const Se=toPadding(se.backdropPadding),je=pe.heights[A],Re=pe.widths[A];let Fe=ue-Se.top,ge=0-Se.left;switch(J){case"middle":Fe-=je/2;break;case"bottom":Fe-=je;break}switch(g){case"center":ge-=Re/2;break;case"right":ge-=Re;break;case"inner":A===O-1?ge-=Re:A>0&&(ge-=Re/2);break}$e={left:ge,top:Fe,width:Re+Se.width,height:je+Se.height,color:se.backdropColor}}E.push({label:P,font:Y,textOffset:ue,options:{rotation:_,color:oe,strokeColor:Oe,strokeWidth:Ee,textAlign:Be,textBaseline:J,translation:[L,B],backdrop:$e}})}return E}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-toRadians(this.labelRotation))return e==="top"?"left":"right";let a="center";return t.align==="start"?a="left":t.align==="end"?a="right":t.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:r,mirror:a,padding:s}}=this.options,o=this._getLabelSizes(),l=e+s,c=o.widest.width;let d,f;return t==="left"?a?(f=this.right+s,r==="near"?d="left":r==="center"?(d="center",f+=c/2):(d="right",f+=c)):(f=this.right-l,r==="near"?d="right":r==="center"?(d="center",f-=c/2):(d="left",f=this.left)):t==="right"?a?(f=this.left+s,r==="near"?d="right":r==="center"?(d="center",f-=c/2):(d="left",f-=c)):(f=this.left+l,r==="near"?d="left":r==="center"?(d="center",f+=c/2):(d="right",f=this.right)):d="right",{textAlign:d,x:f}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:r,top:a,width:s,height:o}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(r,a,s,o),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const a=this.ticks.findIndex(s=>s.value===e);return a>=0?t.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const t=this.options.grid,r=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const l=(c,d,f)=>{!f.width||!f.color||(r.save(),r.lineWidth=f.width,r.strokeStyle=f.color,r.setLineDash(f.borderDash||[]),r.lineDashOffset=f.borderDashOffset,r.beginPath(),r.moveTo(c.x,c.y),r.lineTo(d.x,d.y),r.stroke(),r.restore())};if(t.display)for(s=0,o=a.length;s<o;++s){const c=a[s];t.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),t.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:r,grid:a}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const l=a.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,f,p,b;this.isHorizontal()?(d=_alignPixel(e,this.left,o)-o/2,f=_alignPixel(e,this.right,l)+l/2,p=b=c):(p=_alignPixel(e,this.top,o)-o/2,b=_alignPixel(e,this.bottom,l)+l/2,d=f=c),t.save(),t.lineWidth=s.width,t.strokeStyle=s.color,t.beginPath(),t.moveTo(d,p),t.lineTo(f,b),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,a=this._computeLabelArea();a&&clipArea(r,a);const s=this.getLabelItems(e);for(const o of s){const l=o.options,c=o.font,d=o.label,f=o.textOffset;renderText(r,d,0,f,c,l)}a&&unclipArea(r)}drawTitle(){const{ctx:e,options:{position:t,title:r,reverse:a}}=this;if(!r.display)return;const s=toFont(r.font),o=toPadding(r.padding),l=r.align;let c=s.lineHeight/2;t==="bottom"||t==="center"||isObject(t)?(c+=o.bottom,isArray(r.text)&&(c+=s.lineHeight*(r.text.length-1))):c+=o.top;const{titleX:d,titleY:f,maxWidth:p,rotation:b}=titleArgs(this,c,t,l);renderText(e,r.text,0,0,s,{color:r.color,maxWidth:p,rotation:b,textAlign:titleAlign(l,t,a),textBaseline:"middle",translation:[d,f]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,r=valueOrDefault(e.grid&&e.grid.z,-1),a=valueOrDefault(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Scale.prototype.draw?[{z:t,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:t,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",a=[];let s,o;for(s=0,o=t.length;s<o;++s){const l=t[s];l[r]===this.id&&(!e||l.type===e)&&a.push(l)}return a}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return toFont(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class TypedRegistry{constructor(e,t,r){this.type=e,this.scope=t,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let r;isIChartComponent(t)&&(r=this.register(t));const a=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in a||(a[s]=e,registerDefaults(e,o,r),this.override&&defaults.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const t=this.items,r=e.id,a=this.scope;r in t&&delete t[r],a&&r in defaults[a]&&(delete defaults[a][r],this.override&&delete overrides[r])}}function registerDefaults(n,e,t){const r=merge(Object.create(null),[t?defaults.get(t):{},defaults.get(e),n.defaults]);defaults.set(e,r),n.defaultRoutes&&routeDefaults(e,n.defaultRoutes),n.descriptors&&defaults.describe(e,n.descriptors)}function routeDefaults(n,e){Object.keys(e).forEach(t=>{const r=t.split("."),a=r.pop(),s=[n].concat(r).join("."),o=e[t].split("."),l=o.pop(),c=o.join(".");defaults.route(s,a,c,l)})}function isIChartComponent(n){return"id"in n&&"defaults"in n}class Registry{constructor(){this.controllers=new TypedRegistry(DatasetController,"datasets",!0),this.elements=new TypedRegistry(Element$1,"elements"),this.plugins=new TypedRegistry(Object,"plugins"),this.scales=new TypedRegistry(Scale,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,r){[...t].forEach(a=>{const s=r||this._getRegistryForType(a);r||s.isForType(a)||s===this.plugins&&a.id?this._exec(e,s,a):each(a,o=>{const l=r||this._getRegistryForType(o);this._exec(e,l,o)})})}_exec(e,t,r){const a=_capitalize(e);callback(r["before"+a],[],r),t[e](r),callback(r["after"+a],[],r)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const r=this._typedRegistries[t];if(r.isForType(e))return r}return this.plugins}_get(e,t,r){const a=t.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return a}}var registry=new Registry;class PluginService{constructor(){this._init=void 0}notify(e,t,r,a){if(t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const s=a?this._descriptors(e).filter(a):this._descriptors(e),o=this._notify(s,e,t,r);return t==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),o}_notify(e,t,r,a){a=a||{};for(const s of e){const o=s.plugin,l=o[r],c=[t,a,s.options];if(callback(l,c,o)===!1&&a.cancelable)return!1}return!0}invalidate(){isNullOrUndef(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const r=e&&e.config,a=valueOrDefault(r.options&&r.options.plugins,{}),s=allPlugins(r);return a===!1&&!t?[]:createDescriptors(e,s,a,t)}_notifyStateChanges(e){const t=this._oldCache||[],r=this._cache,a=(s,o)=>s.filter(l=>!o.some(c=>l.plugin.id===c.plugin.id));this._notify(a(t,r),e,"stop"),this._notify(a(r,t),e,"start")}}function allPlugins(n){const e={},t=[],r=Object.keys(registry.plugins.items);for(let s=0;s<r.length;s++)t.push(registry.getPlugin(r[s]));const a=n.plugins||[];for(let s=0;s<a.length;s++){const o=a[s];t.indexOf(o)===-1&&(t.push(o),e[o.id]=!0)}return{plugins:t,localIds:e}}function getOpts(n,e){return!e&&n===!1?null:n===!0?{}:n}function createDescriptors(n,{plugins:e,localIds:t},r,a){const s=[],o=n.getContext();for(const l of e){const c=l.id,d=getOpts(r[c],a);d!==null&&s.push({plugin:l,options:pluginOpts(n.config,{plugin:l,local:t[c]},d,o)})}return s}function pluginOpts(n,{plugin:e,local:t},r,a){const s=n.pluginScopeKeys(e),o=n.getOptionScopes(r,s);return t&&e.defaults&&o.push(e.defaults),n.createResolver(o,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function getIndexAxis(n,e){const t=defaults.datasets[n]||{};return((e.datasets||{})[n]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function getAxisFromDefaultScaleID(n,e){let t=n;return n==="_index_"?t=e:n==="_value_"&&(t=e==="x"?"y":"x"),t}function getDefaultScaleIDFromAxis(n,e){return n===e?"_index_":"_value_"}function idMatchesAxis(n){if(n==="x"||n==="y"||n==="r")return n}function axisFromPosition(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function determineAxis(n,...e){if(idMatchesAxis(n))return n;for(const t of e){const r=t.axis||axisFromPosition(t.position)||n.length>1&&idMatchesAxis(n[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function getAxisFromDataset(n,e,t){if(t[e+"AxisID"]===n)return{axis:e}}function retrieveAxisFromDatasets(n,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(r=>r.xAxisID===n||r.yAxisID===n);if(t.length)return getAxisFromDataset(n,"x",t[0])||getAxisFromDataset(n,"y",t[0])}return{}}function mergeScaleConfig(n,e){const t=overrides[n.type]||{scales:{}},r=e.scales||{},a=getIndexAxis(n.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const l=r[o];if(!isObject(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=determineAxis(o,l,retrieveAxisFromDatasets(o,n),defaults.scales[l.type]),d=getDefaultScaleIDFromAxis(c,a),f=t.scales||{};s[o]=mergeIf(Object.create(null),[{axis:c},l,f[c],f[d]])}),n.data.datasets.forEach(o=>{const l=o.type||n.type,c=o.indexAxis||getIndexAxis(l,e),f=(overrides[l]||{}).scales||{};Object.keys(f).forEach(p=>{const b=getAxisFromDefaultScaleID(p,c),v=o[b+"AxisID"]||b;s[v]=s[v]||Object.create(null),mergeIf(s[v],[{axis:b},r[v],f[p]])})}),Object.keys(s).forEach(o=>{const l=s[o];mergeIf(l,[defaults.scales[l.type],defaults.scale])}),s}function initOptions(n){const e=n.options||(n.options={});e.plugins=valueOrDefault(e.plugins,{}),e.scales=mergeScaleConfig(n,e)}function initData(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function initConfig(n){return n=n||{},n.data=initData(n.data),initOptions(n),n}const keyCache=new Map,keysCached=new Set;function cachedKeys(n,e){let t=keyCache.get(n);return t||(t=e(),keyCache.set(n,t),keysCached.add(t)),t}const addIfFound=(n,e,t)=>{const r=resolveObjectKey(e,t);r!==void 0&&n.add(r)};class Config{constructor(e){this._config=initConfig(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=initData(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),initOptions(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return cachedKeys(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return cachedKeys(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return cachedKeys(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,r=this.type;return cachedKeys(`${r}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const r=this._scopeCache;let a=r.get(e);return(!a||t)&&(a=new Map,r.set(e,a)),a}getOptionScopes(e,t,r){const{options:a,type:s}=this,o=this._cachedScopes(e,r),l=o.get(t);if(l)return l;const c=new Set;t.forEach(f=>{e&&(c.add(e),f.forEach(p=>addIfFound(c,e,p))),f.forEach(p=>addIfFound(c,a,p)),f.forEach(p=>addIfFound(c,overrides[s]||{},p)),f.forEach(p=>addIfFound(c,defaults,p)),f.forEach(p=>addIfFound(c,descriptors,p))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),keysCached.has(t)&&o.set(t,d),d}chartOptionScopes(){const{options:e,type:t}=this;return[e,overrides[t]||{},defaults.datasets[t]||{},{type:t},defaults,descriptors]}resolveNamedOptions(e,t,r,a=[""]){const s={$shared:!0},{resolver:o,subPrefixes:l}=getResolver(this._resolverCache,e,a);let c=o;if(needContext(o,t)){s.$shared=!1,r=isFunction(r)?r():r;const d=this.createResolver(e,r,l);c=_attachContext(o,r,d)}for(const d of t)s[d]=c[d];return s}createResolver(e,t,r=[""],a){const{resolver:s}=getResolver(this._resolverCache,e,r);return isObject(t)?_attachContext(s,t,void 0,a):s}}function getResolver(n,e,t){let r=n.get(e);r||(r=new Map,n.set(e,r));const a=t.join();let s=r.get(a);return s||(s={resolver:_createResolver(e,t),subPrefixes:t.filter(l=>!l.toLowerCase().includes("hover"))},r.set(a,s)),s}const hasFunction=n=>isObject(n)&&Object.getOwnPropertyNames(n).some(e=>isFunction(n[e]));function needContext(n,e){const{isScriptable:t,isIndexable:r}=_descriptors(n);for(const a of e){const s=t(a),o=r(a),l=(o||s)&&n[a];if(s&&(isFunction(l)||hasFunction(l))||o&&isArray(l))return!0}return!1}var version="4.5.1";const KNOWN_POSITIONS=["top","bottom","left","right","chartArea"];function positionIsHorizontal(n,e){return n==="top"||n==="bottom"||KNOWN_POSITIONS.indexOf(n)===-1&&e==="x"}function compare2Level(n,e){return function(t,r){return t[n]===r[n]?t[e]-r[e]:t[n]-r[n]}}function onAnimationsComplete(n){const e=n.chart,t=e.options.animation;e.notifyPlugins("afterRender"),callback(t&&t.onComplete,[n],e)}function onAnimationProgress(n){const e=n.chart,t=e.options.animation;callback(t&&t.onProgress,[n],e)}function getCanvas(n){return _isDomSupported()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const instances={},getChart=n=>{const e=getCanvas(n);return Object.values(instances).filter(t=>t.canvas===e).pop()};function moveNumericKeys(n,e,t){const r=Object.keys(n);for(const a of r){const s=+a;if(s>=e){const o=n[a];delete n[a],(t>0||s>e)&&(n[s+t]=o)}}}function determineLastEvent(n,e,t,r){return!t||n.type==="mouseout"?null:r?e:n}class Chart{static defaults=defaults;static instances=instances;static overrides=overrides;static registry=registry;static version=version;static getChart=getChart;static register(...e){registry.add(...e),invalidatePlugins()}static unregister(...e){registry.remove(...e),invalidatePlugins()}constructor(e,t){const r=this.config=new Config(t),a=getCanvas(e),s=getChart(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||_detectPlatform(a)),this.platform.updateConfig(r);const l=this.platform.acquireContext(a,o.aspectRatio),c=l&&l.canvas,d=c&&c.height,f=c&&c.width;if(this.id=uid(),this.ctx=l,this.canvas=c,this.width=f,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PluginService,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=debounce(p=>this.update(p),o.resizeDelay||0),this._dataChanges=[],instances[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}animator.listen(this,"complete",onAnimationsComplete),animator.listen(this,"progress",onAnimationProgress),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:r,height:a,_aspectRatio:s}=this;return isNullOrUndef(e)?t&&s?s:a?r/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return registry}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():retinaScale(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return clearCanvas(this.canvas,this.ctx),this}stop(){return animator.stop(this),this}resize(e,t){animator.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const r=this.options,a=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(a,e,t,s),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,retinaScale(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),callback(r.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};each(t,(r,a)=>{r.id=a})}buildOrUpdateScales(){const e=this.options,t=e.scales,r=this.scales,a=Object.keys(r).reduce((o,l)=>(o[l]=!1,o),{});let s=[];t&&(s=s.concat(Object.keys(t).map(o=>{const l=t[o],c=determineAxis(o,l),d=c==="r",f=c==="x";return{options:l,dposition:d?"chartArea":f?"bottom":"left",dtype:d?"radialLinear":f?"category":"linear"}}))),each(s,o=>{const l=o.options,c=l.id,d=determineAxis(c,l),f=valueOrDefault(l.type,o.dtype);(l.position===void 0||positionIsHorizontal(l.position,d)!==positionIsHorizontal(o.dposition))&&(l.position=o.dposition),a[c]=!0;let p=null;if(c in r&&r[c].type===f)p=r[c];else{const b=registry.getScale(f);p=new b({id:c,type:f,ctx:this.ctx,chart:this}),r[p.id]=p}p.init(l,e)}),each(a,(o,l)=>{o||delete r[l]}),each(r,o=>{layouts.configure(this,o,o.options),layouts.addBox(this,o)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,r=e.length;if(e.sort((a,s)=>a.index-s.index),r>t){for(let a=t;a<r;++a)this._destroyDatasetMeta(a);e.splice(t,r-t)}this._sortedMetasets=e.slice(0).sort(compare2Level("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((r,a)=>{t.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let r,a;for(this._removeUnreferencedMetasets(),r=0,a=t.length;r<a;r++){const s=t[r];let o=this.getDatasetMeta(r);const l=s.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=l,o.indexAxis=s.indexAxis||getIndexAxis(l,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const c=registry.getController(l),{datasetElementType:d,dataElementType:f}=defaults.datasets[l];Object.assign(c,{dataElementType:registry.getElement(f),datasetElementType:d&&registry.getElement(d)}),o.controller=new c(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){each(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const r=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,f=this.data.datasets.length;d<f;d++){const{controller:p}=this.getDatasetMeta(d),b=!a&&s.indexOf(p)===-1;p.buildOrUpdateElements(b),o=Math.max(+p.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),a||each(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(compare2Level("z","_idx"));const{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){each(this.scales,e=>{layouts.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!setsEqual(t,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:r,start:a,count:s}of t){const o=r==="_removeElements"?-s:s;moveNumericKeys(e,a,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,l)=>l+","+o.splice(1).join(","))),a=r(0);for(let s=1;s<t;s++)if(!setsEqual(a,r(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;layouts.update(this,this.width,this.height,e);const t=this.chartArea,r=t.width<=0||t.height<=0;this._layers=[],each(this.boxes,a=>{r&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,r=this.data.datasets.length;t<r;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,r=this.data.datasets.length;t<r;++t)this._updateDataset(t,isFunction(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const r=this.getDatasetMeta(e),a={meta:r,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(r.controller._update(t),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(animator.has(this)?this.attached&&!animator.running(this)&&animator.start(this):(this.draw(),onAnimationsComplete({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:a}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,a)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,r=[];let a,s;for(a=0,s=t.length;a<s;++a){const o=t[a];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,r={meta:e,index:e.index,cancelable:!0},a=getDatasetClipArea(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(a&&clipArea(t,a),e.controller.draw(),a&&unclipArea(t),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return _isPointInArea(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,r,a){const s=Interaction.modes[t];return typeof s=="function"?s(this,e,r,a):[]}getDatasetMeta(e){const t=this.data.datasets[e],r=this._metasets;let a=r.filter(s=>s&&s._dataset===t).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},r.push(a)),a}getContext(){return this.$context||(this.$context=createContext(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!t.hidden}setDatasetVisibility(e,t){const r=this.getDatasetMeta(e);r.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,r){const a=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,a);defined(t)?(s.data[t].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(l=>l.datasetIndex===e?a:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),animator.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),clearCanvas(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete instances[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,r=(s,o)=>{t.addEventListener(this,s,o),e[s]=o},a=(s,o,l)=>{s.offsetX=o,s.offsetY=l,this._eventHandler(s)};each(this.options.events,s=>r(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,r=(c,d)=>{t.addEventListener(this,c,d),e[c]=d},a=(c,d)=>{e[c]&&(t.removeEventListener(this,c,d),delete e[c])},s=(c,d)=>{this.canvas&&this.resize(c,d)};let o;const l=()=>{a("attach",l),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),r("attach",l)},t.isAttached(this.canvas)?l():o()}unbindEvents(){each(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},each(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,r){const a=r?"set":"remove";let s,o,l,c;for(t==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),l=0,c=e.length;l<c;++l){o=e[l];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[a+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const l=this.getDatasetMeta(s);if(!l)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:l.data[o],index:o}});!_elementsEqual(r,t)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,t))}notifyPlugins(e,t,r){return this._plugins.notify(this,e,t,r)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,r){const a=this.options.hover,s=(c,d)=>c.filter(f=>!d.some(p=>f.datasetIndex===p.datasetIndex&&f.index===p.index)),o=s(t,e),l=r?e:s(e,t);o.length&&this.updateHoverStyle(o,a.mode,!1),l.length&&a.mode&&this.updateHoverStyle(l,a.mode,!0)}_eventHandler(e,t){const r={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},a=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,a)===!1)return;const s=this._handleEvent(e,t,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,a),(s||r.changed)&&this.render(),this}_handleEvent(e,t,r){const{_active:a=[],options:s}=this,o=t,l=this._getActiveElements(e,a,r,o),c=_isClickEvent(e),d=determineLastEvent(e,this._lastEvent,r,c);r&&(this._lastEvent=null,callback(s.onHover,[e,l,this],this),c&&callback(s.onClick,[e,l,this],this));const f=!_elementsEqual(l,a);return(f||t)&&(this._active=l,this._updateHoverStyles(l,a,t)),this._lastEvent=d,f}_getActiveElements(e,t,r,a){if(e.type==="mouseout")return[];if(!r)return t;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,a)}}function invalidatePlugins(){return each(Chart.instances,n=>n._plugins.invalidate())}function clipSelf(n,e,t){const{startAngle:r,x:a,y:s,outerRadius:o,innerRadius:l,options:c}=e,{borderWidth:d,borderJoinStyle:f}=c,p=Math.min(d/o,_normalizeAngle(r-t));if(n.beginPath(),n.arc(a,s,o-d/2,r+p/2,t-p/2),l>0){const b=Math.min(d/l,_normalizeAngle(r-t));n.arc(a,s,l+d/2,t-b/2,r+b/2,!0)}else{const b=Math.min(d/2,o*_normalizeAngle(r-t));if(f==="round")n.arc(a,s,b,t-PI/2,r+PI/2,!0);else if(f==="bevel"){const v=2*b*b,x=-v*Math.cos(t+PI/2)+a,_=-v*Math.sin(t+PI/2)+s,E=v*Math.cos(r+PI/2)+a,A=v*Math.sin(r+PI/2)+s;n.lineTo(x,_),n.lineTo(E,A)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function clipArc(n,e,t){const{startAngle:r,pixelMargin:a,x:s,y:o,outerRadius:l,innerRadius:c}=e;let d=a/l;n.beginPath(),n.arc(s,o,l,r-d,t+d),c>a?(d=a/c,n.arc(s,o,c,t+d,r-d,!0)):n.arc(s,o,a,t+HALF_PI,r-HALF_PI),n.closePath(),n.clip()}function toRadiusCorners(n){return _readValueToProps(n,["outerStart","outerEnd","innerStart","innerEnd"])}function parseBorderRadius$1(n,e,t,r){const a=toRadiusCorners(n.options.borderRadius),s=(t-e)/2,o=Math.min(s,r*e/2),l=c=>{const d=(t-Math.min(s,c))*r/2;return _limitValue(c,0,Math.min(s,d))};return{outerStart:l(a.outerStart),outerEnd:l(a.outerEnd),innerStart:_limitValue(a.innerStart,0,o),innerEnd:_limitValue(a.innerEnd,0,o)}}function rThetaToXY(n,e,t,r){return{x:t+n*Math.cos(e),y:r+n*Math.sin(e)}}function pathArc(n,e,t,r,a,s){const{x:o,y:l,startAngle:c,pixelMargin:d,innerRadius:f}=e,p=Math.max(e.outerRadius+r+t-d,0),b=f>0?f+r+t+d:0;let v=0;const x=a-c;if(r){const se=f>0?f-r:0,re=p>0?p-r:0,oe=(se+re)/2,Oe=oe!==0?x*oe/(oe+r):x;v=(x-Oe)/2}const _=Math.max(.001,x*p-t/PI)/p,E=(x-_)/2,A=c+E+v,O=a-E-v,{outerStart:$,outerEnd:P,innerStart:L,innerEnd:B}=parseBorderRadius$1(e,b,p,O-A),g=p-$,q=p-P,Y=A+$/g,X=O-P/q,ee=b+L,ue=b+B,J=A+L/ee,pe=O-B/ue;if(n.beginPath(),s){const se=(Y+X)/2;if(n.arc(o,l,p,Y,se),n.arc(o,l,p,se,X),P>0){const Ee=rThetaToXY(q,X,o,l);n.arc(Ee.x,Ee.y,P,X,O+HALF_PI)}const re=rThetaToXY(ue,O,o,l);if(n.lineTo(re.x,re.y),B>0){const Ee=rThetaToXY(ue,pe,o,l);n.arc(Ee.x,Ee.y,B,O+HALF_PI,pe+Math.PI)}const oe=(O-B/b+(A+L/b))/2;if(n.arc(o,l,b,O-B/b,oe,!0),n.arc(o,l,b,oe,A+L/b,!0),L>0){const Ee=rThetaToXY(ee,J,o,l);n.arc(Ee.x,Ee.y,L,J+Math.PI,A-HALF_PI)}const Oe=rThetaToXY(g,A,o,l);if(n.lineTo(Oe.x,Oe.y),$>0){const Ee=rThetaToXY(g,Y,o,l);n.arc(Ee.x,Ee.y,$,A-HALF_PI,Y)}}else{n.moveTo(o,l);const se=Math.cos(Y)*p+o,re=Math.sin(Y)*p+l;n.lineTo(se,re);const oe=Math.cos(X)*p+o,Oe=Math.sin(X)*p+l;n.lineTo(oe,Oe)}n.closePath()}function drawArc(n,e,t,r,a){const{fullCircles:s,startAngle:o,circumference:l}=e;let c=e.endAngle;if(s){pathArc(n,e,t,r,c,a);for(let d=0;d<s;++d)n.fill();isNaN(l)||(c=o+(l%TAU||TAU))}return pathArc(n,e,t,r,c,a),n.fill(),c}function drawBorder(n,e,t,r,a){const{fullCircles:s,startAngle:o,circumference:l,options:c}=e,{borderWidth:d,borderJoinStyle:f,borderDash:p,borderDashOffset:b,borderRadius:v}=c,x=c.borderAlign==="inner";if(!d)return;n.setLineDash(p||[]),n.lineDashOffset=b,x?(n.lineWidth=d*2,n.lineJoin=f||"round"):(n.lineWidth=d,n.lineJoin=f||"bevel");let _=e.endAngle;if(s){pathArc(n,e,t,r,_,a);for(let E=0;E<s;++E)n.stroke();isNaN(l)||(_=o+(l%TAU||TAU))}x&&clipArc(n,e,_),c.selfJoin&&_-o>=PI&&v===0&&f!=="miter"&&clipSelf(n,e,_),s||(pathArc(n,e,t,r,_,a),n.stroke())}class ArcElement extends Element$1{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,r){const a=this.getProps(["x","y"],r),{angle:s,distance:o}=getAngleFromPoint(a,{x:e,y:t}),{startAngle:l,endAngle:c,innerRadius:d,outerRadius:f,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),b=(this.options.spacing+this.options.borderWidth)/2,v=valueOrDefault(p,c-l),x=_angleBetween(s,l,c)&&l!==c,_=v>=TAU||x,E=_isBetween(o,d+b,f+b);return _&&E}getCenterPoint(e){const{x:t,y:r,startAngle:a,endAngle:s,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:d}=this.options,f=(a+s)/2,p=(o+l+d+c)/2;return{x:t+Math.cos(f)*p,y:r+Math.sin(f)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:t,circumference:r}=this,a=(t.offset||0)/4,s=(t.spacing||0)/2,o=t.circular;if(this.pixelMargin=t.borderAlign==="inner"?.33:0,this.fullCircles=r>TAU?Math.floor(r/TAU):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*a,Math.sin(l)*a);const c=1-Math.sin(Math.min(PI,r||0)),d=a*c;e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,drawArc(e,this,d,s,o),drawBorder(e,this,d,s,o),e.restore()}}function setStyle(n,e,t=e){n.lineCap=valueOrDefault(t.borderCapStyle,e.borderCapStyle),n.setLineDash(valueOrDefault(t.borderDash,e.borderDash)),n.lineDashOffset=valueOrDefault(t.borderDashOffset,e.borderDashOffset),n.lineJoin=valueOrDefault(t.borderJoinStyle,e.borderJoinStyle),n.lineWidth=valueOrDefault(t.borderWidth,e.borderWidth),n.strokeStyle=valueOrDefault(t.borderColor,e.borderColor)}function lineTo(n,e,t){n.lineTo(t.x,t.y)}function getLineMethod(n){return n.stepped?_steppedLineTo:n.tension||n.cubicInterpolationMode==="monotone"?_bezierCurveTo:lineTo}function pathVars(n,e,t={}){const r=n.length,{start:a=0,end:s=r-1}=t,{start:o,end:l}=e,c=Math.max(a,o),d=Math.min(s,l),f=a<o&&s<o||a>l&&s>l;return{count:r,start:c,loop:e.loop,ilen:d<c&&!f?r+d-c:d-c}}function pathSegment(n,e,t,r){const{points:a,options:s}=e,{count:o,start:l,loop:c,ilen:d}=pathVars(a,t,r),f=getLineMethod(s);let{move:p=!0,reverse:b}=r||{},v,x,_;for(v=0;v<=d;++v)x=a[(l+(b?d-v:v))%o],!x.skip&&(p?(n.moveTo(x.x,x.y),p=!1):f(n,_,x,b,s.stepped),_=x);return c&&(x=a[(l+(b?d:0))%o],f(n,_,x,b,s.stepped)),!!c}function fastPathSegment(n,e,t,r){const a=e.points,{count:s,start:o,ilen:l}=pathVars(a,t,r),{move:c=!0,reverse:d}=r||{};let f=0,p=0,b,v,x,_,E,A;const O=P=>(o+(d?l-P:P))%s,$=()=>{_!==E&&(n.lineTo(f,E),n.lineTo(f,_),n.lineTo(f,A))};for(c&&(v=a[O(0)],n.moveTo(v.x,v.y)),b=0;b<=l;++b){if(v=a[O(b)],v.skip)continue;const P=v.x,L=v.y,B=P|0;B===x?(L<_?_=L:L>E&&(E=L),f=(p*f+P)/++p):($(),n.lineTo(P,L),x=B,p=0,_=E=L),A=L}$()}function _getSegmentMethod(n){const e=n.options,t=e.borderDash&&e.borderDash.length;return!n._decimated&&!n._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?fastPathSegment:pathSegment}function _getInterpolationMethod(n){return n.stepped?_steppedInterpolation:n.tension||n.cubicInterpolationMode==="monotone"?_bezierInterpolation:_pointInLine}function strokePathWithCache(n,e,t,r){let a=e._path;a||(a=e._path=new Path2D,e.path(a,t,r)&&a.closePath()),setStyle(n,e.options),n.stroke(a)}function strokePathDirect(n,e,t,r){const{segments:a,options:s}=e,o=_getSegmentMethod(e);for(const l of a)setStyle(n,s,l.style),n.beginPath(),o(n,e,l,{start:t,end:t+r-1})&&n.closePath(),n.stroke()}const usePath2D=typeof Path2D=="function";function draw(n,e,t,r){usePath2D&&!e.options.segment?strokePathWithCache(n,e,t,r):strokePathDirect(n,e,t,r)}class LineElement extends Element$1{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const a=r.spanGaps?this._loop:this._fullLoop;_updateBezierControlPoints(this._points,r,e,a,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=_computeSegments(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,r=e.length;return r&&t[e[r-1].end]}interpolate(e,t){const r=this.options,a=e[t],s=this.points,o=_boundSegments(this,{property:t,start:a,end:a});if(!o.length)return;const l=[],c=_getInterpolationMethod(r);let d,f;for(d=0,f=o.length;d<f;++d){const{start:p,end:b}=o[d],v=s[p],x=s[b];if(v===x){l.push(v);continue}const _=Math.abs((a-v[t])/(x[t]-v[t])),E=c(v,x,_,r.stepped);E[t]=e[t],l.push(E)}return l.length===1?l[0]:l}pathSegment(e,t,r){return _getSegmentMethod(this)(e,this,t,r)}path(e,t,r){const a=this.segments,s=_getSegmentMethod(this);let o=this._loop;t=t||0,r=r||this.points.length-t;for(const l of a)o&=s(e,this,l,{start:t,end:t+r-1});return!!o}draw(e,t,r,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),draw(e,this,r,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function inRange$1(n,e,t,r){const a=n.options,{[t]:s}=n.getProps([t],r);return Math.abs(e-s)<a.radius+a.hitRadius}class PointElement extends Element$1{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,r){const a=this.options,{x:s,y:o}=this.getProps(["x","y"],r);return Math.pow(e-s,2)+Math.pow(t-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,t){return inRange$1(this,e,"x",t)}inYRange(e,t){return inRange$1(this,e,"y",t)}getCenterPoint(e){const{x:t,y:r}=this.getProps(["x","y"],e);return{x:t,y:r}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);const r=t&&e.borderWidth||0;return(t+r)*2}draw(e,t){const r=this.options;this.skip||r.radius<.1||!_isPointInArea(this,t,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,drawPoint(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}function getBarBounds(n,e){const{x:t,y:r,base:a,width:s,height:o}=n.getProps(["x","y","base","width","height"],e);let l,c,d,f,p;return n.horizontal?(p=o/2,l=Math.min(t,a),c=Math.max(t,a),d=r-p,f=r+p):(p=s/2,l=t-p,c=t+p,d=Math.min(r,a),f=Math.max(r,a)),{left:l,top:d,right:c,bottom:f}}function skipOrLimit(n,e,t,r){return n?0:_limitValue(e,t,r)}function parseBorderWidth(n,e,t){const r=n.options.borderWidth,a=n.borderSkipped,s=toTRBL(r);return{t:skipOrLimit(a.top,s.top,0,t),r:skipOrLimit(a.right,s.right,0,e),b:skipOrLimit(a.bottom,s.bottom,0,t),l:skipOrLimit(a.left,s.left,0,e)}}function parseBorderRadius(n,e,t){const{enableBorderRadius:r}=n.getProps(["enableBorderRadius"]),a=n.options.borderRadius,s=toTRBLCorners(a),o=Math.min(e,t),l=n.borderSkipped,c=r||isObject(a);return{topLeft:skipOrLimit(!c||l.top||l.left,s.topLeft,0,o),topRight:skipOrLimit(!c||l.top||l.right,s.topRight,0,o),bottomLeft:skipOrLimit(!c||l.bottom||l.left,s.bottomLeft,0,o),bottomRight:skipOrLimit(!c||l.bottom||l.right,s.bottomRight,0,o)}}function boundingRects(n){const e=getBarBounds(n),t=e.right-e.left,r=e.bottom-e.top,a=parseBorderWidth(n,t/2,r/2),s=parseBorderRadius(n,t/2,r/2);return{outer:{x:e.left,y:e.top,w:t,h:r,radius:s},inner:{x:e.left+a.l,y:e.top+a.t,w:t-a.l-a.r,h:r-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function inRange(n,e,t,r){const a=e===null,s=t===null,l=n&&!(a&&s)&&getBarBounds(n,r);return l&&(a||_isBetween(e,l.left,l.right))&&(s||_isBetween(t,l.top,l.bottom))}function hasRadius(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function addNormalRectPath(n,e){n.rect(e.x,e.y,e.w,e.h)}function inflateRect(n,e,t={}){const r=n.x!==t.x?-e:0,a=n.y!==t.y?-e:0,s=(n.x+n.w!==t.x+t.w?e:0)-r,o=(n.y+n.h!==t.y+t.h?e:0)-a;return{x:n.x+r,y:n.y+a,w:n.w+s,h:n.h+o,radius:n.radius}}class BarElement extends Element$1{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:r,backgroundColor:a}}=this,{inner:s,outer:o}=boundingRects(this),l=hasRadius(o.radius)?addRoundedRectPath:addNormalRectPath;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),l(e,inflateRect(o,t,s)),e.clip(),l(e,inflateRect(s,-t,o)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),l(e,inflateRect(s,t)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,t,r){return inRange(this,e,t,r)}inXRange(e,t){return inRange(this,e,null,t)}inYRange(e,t){return inRange(this,null,e,t)}getCenterPoint(e){const{x:t,y:r,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(t+a)/2:t,y:s?r:(r+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}var elements=Object.freeze({__proto__:null,ArcElement,BarElement,LineElement,PointElement});const BORDER_COLORS=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],BACKGROUND_COLORS=BORDER_COLORS.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function getBorderColor(n){return BORDER_COLORS[n%BORDER_COLORS.length]}function getBackgroundColor(n){return BACKGROUND_COLORS[n%BACKGROUND_COLORS.length]}function colorizeDefaultDataset(n,e){return n.borderColor=getBorderColor(e),n.backgroundColor=getBackgroundColor(e),++e}function colorizeDoughnutDataset(n,e){return n.backgroundColor=n.data.map(()=>getBorderColor(e++)),e}function colorizePolarAreaDataset(n,e){return n.backgroundColor=n.data.map(()=>getBackgroundColor(e++)),e}function getColorizer(n){let e=0;return(t,r)=>{const a=n.getDatasetMeta(r).controller;a instanceof DoughnutController?e=colorizeDoughnutDataset(t,e):a instanceof PolarAreaController?e=colorizePolarAreaDataset(t,e):a&&(e=colorizeDefaultDataset(t,e))}}function containsColorsDefinitions(n){let e;for(e in n)if(n[e].borderColor||n[e].backgroundColor)return!0;return!1}function containsColorsDefinition(n){return n&&(n.borderColor||n.backgroundColor)}function containsDefaultColorsDefenitions(){return defaults.borderColor!=="rgba(0,0,0,0.1)"||defaults.backgroundColor!=="rgba(0,0,0,0.1)"}var plugin_colors={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,e,t){if(!t.enabled)return;const{data:{datasets:r},options:a}=n.config,{elements:s}=a,o=containsColorsDefinitions(r)||containsColorsDefinition(a)||s&&containsColorsDefinitions(s)||containsDefaultColorsDefenitions();if(!t.forceOverride&&o)return;const l=getColorizer(n);r.forEach(l)}};function lttbDecimation(n,e,t,r,a){const s=a.samples||r;if(s>=t)return n.slice(e,e+t);const o=[],l=(t-2)/(s-2);let c=0;const d=e+t-1;let f=e,p,b,v,x,_;for(o[c++]=n[f],p=0;p<s-2;p++){let E=0,A=0,O;const $=Math.floor((p+1)*l)+1+e,P=Math.min(Math.floor((p+2)*l)+1,t)+e,L=P-$;for(O=$;O<P;O++)E+=n[O].x,A+=n[O].y;E/=L,A/=L;const B=Math.floor(p*l)+1+e,g=Math.min(Math.floor((p+1)*l)+1,t)+e,{x:q,y:Y}=n[f];for(v=x=-1,O=B;O<g;O++)x=.5*Math.abs((q-E)*(n[O].y-Y)-(q-n[O].x)*(A-Y)),x>v&&(v=x,b=n[O],_=O);o[c++]=b,f=_}return o[c++]=n[d],o}function minMaxDecimation(n,e,t,r){let a=0,s=0,o,l,c,d,f,p,b,v,x,_;const E=[],A=e+t-1,O=n[e].x,P=n[A].x-O;for(o=e;o<e+t;++o){l=n[o],c=(l.x-O)/P*r,d=l.y;const L=c|0;if(L===f)d<x?(x=d,p=o):d>_&&(_=d,b=o),a=(s*a+l.x)/++s;else{const B=o-1;if(!isNullOrUndef(p)&&!isNullOrUndef(b)){const g=Math.min(p,b),q=Math.max(p,b);g!==v&&g!==B&&E.push({...n[g],x:a}),q!==v&&q!==B&&E.push({...n[q],x:a})}o>0&&B!==v&&E.push(n[B]),E.push(l),f=L,s=0,x=_=d,p=b=v=o}}return E}function cleanDecimatedDataset(n){if(n._decimated){const e=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function cleanDecimatedData(n){n.data.datasets.forEach(e=>{cleanDecimatedDataset(e)})}function getStartAndCountOfVisiblePointsSimplified(n,e){const t=e.length;let r=0,a;const{iScale:s}=n,{min:o,max:l,minDefined:c,maxDefined:d}=s.getUserBounds();return c&&(r=_limitValue(_lookupByKey(e,s.axis,o).lo,0,t-1)),d?a=_limitValue(_lookupByKey(e,s.axis,l).hi+1,r,t)-r:a=t-r,{start:r,count:a}}var plugin_decimation={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,e,t)=>{if(!t.enabled){cleanDecimatedData(n);return}const r=n.width;n.data.datasets.forEach((a,s)=>{const{_data:o,indexAxis:l}=a,c=n.getDatasetMeta(s),d=o||a.data;if(resolve([l,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const f=n.scales[c.xAxisID];if(f.type!=="linear"&&f.type!=="time"||n.options.parsing)return;let{start:p,count:b}=getStartAndCountOfVisiblePointsSimplified(c,d);const v=t.threshold||4*r;if(b<=v){cleanDecimatedDataset(a);return}isNullOrUndef(o)&&(a._data=d,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(_){this._data=_}}));let x;switch(t.algorithm){case"lttb":x=lttbDecimation(d,p,b,r,t);break;case"min-max":x=minMaxDecimation(d,p,b,r);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}a._decimated=x})},destroy(n){cleanDecimatedData(n)}};function _segments(n,e,t){const r=n.segments,a=n.points,s=e.points,o=[];for(const l of r){let{start:c,end:d}=l;d=_findSegmentEnd(c,d,a);const f=_getBounds(t,a[c],a[d],l.loop);if(!e.segments){o.push({source:l,target:f,start:a[c],end:a[d]});continue}const p=_boundSegments(e,f);for(const b of p){const v=_getBounds(t,s[b.start],s[b.end],b.loop),x=_boundSegment(l,a,v);for(const _ of x)o.push({source:_,target:b,start:{[t]:_getEdge(f,v,"start",Math.max)},end:{[t]:_getEdge(f,v,"end",Math.min)}})}}return o}function _getBounds(n,e,t,r){if(r)return;let a=e[n],s=t[n];return n==="angle"&&(a=_normalizeAngle(a),s=_normalizeAngle(s)),{property:n,start:a,end:s}}function _pointsFromSegments(n,e){const{x:t=null,y:r=null}=n||{},a=e.points,s=[];return e.segments.forEach(({start:o,end:l})=>{l=_findSegmentEnd(o,l,a);const c=a[o],d=a[l];r!==null?(s.push({x:c.x,y:r}),s.push({x:d.x,y:r})):t!==null&&(s.push({x:t,y:c.y}),s.push({x:t,y:d.y}))}),s}function _findSegmentEnd(n,e,t){for(;e>n;e--){const r=t[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function _getEdge(n,e,t,r){return n&&e?r(n[t],e[t]):n?n[t]:e?e[t]:0}function _createBoundaryLine(n,e){let t=[],r=!1;return isArray(n)?(r=!0,t=n):t=_pointsFromSegments(n,e),t.length?new LineElement({points:t,options:{tension:0},_loop:r,_fullLoop:r}):null}function _shouldApplyFill(n){return n&&n.fill!==!1}function _resolveTarget(n,e,t){let a=n[e].fill;const s=[e];let o;if(!t)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!isNumberFinite(a))return a;if(o=n[a],!o)return!1;if(o.visible)return a;s.push(a),a=o.fill}return!1}function _decodeFill(n,e,t){const r=parseFillOption(n);if(isObject(r))return isNaN(r.value)?!1:r;let a=parseFloat(r);return isNumberFinite(a)&&Math.floor(a)===a?decodeTargetIndex(r[0],e,a,t):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function decodeTargetIndex(n,e,t,r){return(n==="-"||n==="+")&&(t=e+t),t===e||t<0||t>=r?!1:t}function _getTargetPixel(n,e){let t=null;return n==="start"?t=e.bottom:n==="end"?t=e.top:isObject(n)?t=e.getPixelForValue(n.value):e.getBasePixel&&(t=e.getBasePixel()),t}function _getTargetValue(n,e,t){let r;return n==="start"?r=t:n==="end"?r=e.options.reverse?e.min:e.max:isObject(n)?r=n.value:r=e.getBaseValue(),r}function parseFillOption(n){const e=n.options,t=e.fill;let r=valueOrDefault(t&&t.target,t);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function _buildStackLine(n){const{scale:e,index:t,line:r}=n,a=[],s=r.segments,o=r.points,l=getLinesBelow(e,t);l.push(_createBoundaryLine({x:null,y:e.bottom},r));for(let c=0;c<s.length;c++){const d=s[c];for(let f=d.start;f<=d.end;f++)addPointsBelow(a,o[f],l)}return new LineElement({points:a,options:{}})}function getLinesBelow(n,e){const t=[],r=n.getMatchingVisibleMetas("line");for(let a=0;a<r.length;a++){const s=r[a];if(s.index===e)break;s.hidden||t.unshift(s.dataset)}return t}function addPointsBelow(n,e,t){const r=[];for(let a=0;a<t.length;a++){const s=t[a],{first:o,last:l,point:c}=findPoint(s,e,"x");if(!(!c||o&&l)){if(o)r.unshift(c);else if(n.push(c),!l)break}}n.push(...r)}function findPoint(n,e,t){const r=n.interpolate(e,t);if(!r)return{};const a=r[t],s=n.segments,o=n.points;let l=!1,c=!1;for(let d=0;d<s.length;d++){const f=s[d],p=o[f.start][t],b=o[f.end][t];if(_isBetween(a,p,b)){l=a===p,c=a===b;break}}return{first:l,last:c,point:r}}class simpleArc{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,r){const{x:a,y:s,radius:o}=this;return t=t||{start:0,end:TAU},e.arc(a,s,o,t.end,t.start,!0),!r.bounds}interpolate(e){const{x:t,y:r,radius:a}=this,s=e.angle;return{x:t+Math.cos(s)*a,y:r+Math.sin(s)*a,angle:s}}}function _getTarget(n){const{chart:e,fill:t,line:r}=n;if(isNumberFinite(t))return getLineByIndex(e,t);if(t==="stack")return _buildStackLine(n);if(t==="shape")return!0;const a=computeBoundary(n);return a instanceof simpleArc?a:_createBoundaryLine(a,r)}function getLineByIndex(n,e){const t=n.getDatasetMeta(e);return t&&n.isDatasetVisible(e)?t.dataset:null}function computeBoundary(n){return(n.scale||{}).getPointPositionForValue?computeCircularBoundary(n):computeLinearBoundary(n)}function computeLinearBoundary(n){const{scale:e={},fill:t}=n,r=_getTargetPixel(t,e);if(isNumberFinite(r)){const a=e.isHorizontal();return{x:a?r:null,y:a?null:r}}return null}function computeCircularBoundary(n){const{scale:e,fill:t}=n,r=e.options,a=e.getLabels().length,s=r.reverse?e.max:e.min,o=_getTargetValue(t,e,s),l=[];if(r.grid.circular){const c=e.getPointPositionForValue(0,s);return new simpleArc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(o)})}for(let c=0;c<a;++c)l.push(e.getPointPositionForValue(c,o));return l}function _drawfill(n,e,t){const r=_getTarget(e),{chart:a,index:s,line:o,scale:l,axis:c}=e,d=o.options,f=d.fill,p=d.backgroundColor,{above:b=p,below:v=p}=f||{},x=a.getDatasetMeta(s),_=getDatasetClipArea(a,x);r&&o.points.length&&(clipArea(n,t),doFill(n,{line:o,target:r,above:b,below:v,area:t,scale:l,axis:c,clip:_}),unclipArea(n))}function doFill(n,e){const{line:t,target:r,above:a,below:s,area:o,scale:l,clip:c}=e,d=t._loop?"angle":e.axis;n.save();let f=s;s!==a&&(d==="x"?(clipVertical(n,r,o.top),fill(n,{line:t,target:r,color:a,scale:l,property:d,clip:c}),n.restore(),n.save(),clipVertical(n,r,o.bottom)):d==="y"&&(clipHorizontal(n,r,o.left),fill(n,{line:t,target:r,color:s,scale:l,property:d,clip:c}),n.restore(),n.save(),clipHorizontal(n,r,o.right),f=a)),fill(n,{line:t,target:r,color:f,scale:l,property:d,clip:c}),n.restore()}function clipVertical(n,e,t){const{segments:r,points:a}=e;let s=!0,o=!1;n.beginPath();for(const l of r){const{start:c,end:d}=l,f=a[c],p=a[_findSegmentEnd(c,d,a)];s?(n.moveTo(f.x,f.y),s=!1):(n.lineTo(f.x,t),n.lineTo(f.x,f.y)),o=!!e.pathSegment(n,l,{move:o}),o?n.closePath():n.lineTo(p.x,t)}n.lineTo(e.first().x,t),n.closePath(),n.clip()}function clipHorizontal(n,e,t){const{segments:r,points:a}=e;let s=!0,o=!1;n.beginPath();for(const l of r){const{start:c,end:d}=l,f=a[c],p=a[_findSegmentEnd(c,d,a)];s?(n.moveTo(f.x,f.y),s=!1):(n.lineTo(t,f.y),n.lineTo(f.x,f.y)),o=!!e.pathSegment(n,l,{move:o}),o?n.closePath():n.lineTo(t,p.y)}n.lineTo(t,e.first().y),n.closePath(),n.clip()}function fill(n,e){const{line:t,target:r,property:a,color:s,scale:o,clip:l}=e,c=_segments(t,r,a);for(const{source:d,target:f,start:p,end:b}of c){const{style:{backgroundColor:v=s}={}}=d,x=r!==!0;n.save(),n.fillStyle=v,clipBounds(n,o,l,x&&_getBounds(a,p,b)),n.beginPath();const _=!!t.pathSegment(n,d);let E;if(x){_?n.closePath():interpolatedLineTo(n,r,b,a);const A=!!r.pathSegment(n,f,{move:_,reverse:!0});E=_&&A,E||interpolatedLineTo(n,r,p,a)}n.closePath(),n.fill(E?"evenodd":"nonzero"),n.restore()}}function clipBounds(n,e,t,r){const a=e.chart.chartArea,{property:s,start:o,end:l}=r||{};if(s==="x"||s==="y"){let c,d,f,p;s==="x"?(c=o,d=a.top,f=l,p=a.bottom):(c=a.left,d=o,f=a.right,p=l),n.beginPath(),t&&(c=Math.max(c,t.left),f=Math.min(f,t.right),d=Math.max(d,t.top),p=Math.min(p,t.bottom)),n.rect(c,d,f-c,p-d),n.clip()}}function interpolatedLineTo(n,e,t,r){const a=e.interpolate(t,r);a&&n.lineTo(a.x,a.y)}var index={id:"filler",afterDatasetsUpdate(n,e,t){const r=(n.data.datasets||[]).length,a=[];let s,o,l,c;for(o=0;o<r;++o)s=n.getDatasetMeta(o),l=s.dataset,c=null,l&&l.options&&l instanceof LineElement&&(c={visible:n.isDatasetVisible(o),index:o,fill:_decodeFill(l,o,r),chart:n,axis:s.controller.options.indexAxis,scale:s.vScale,line:l}),s.$filler=c,a.push(c);for(o=0;o<r;++o)c=a[o],!(!c||c.fill===!1)&&(c.fill=_resolveTarget(a,o,t.propagate))},beforeDraw(n,e,t){const r=t.drawTime==="beforeDraw",a=n.getSortedVisibleDatasetMetas(),s=n.chartArea;for(let o=a.length-1;o>=0;--o){const l=a[o].$filler;l&&(l.line.updateControlPoints(s,l.axis),r&&l.fill&&_drawfill(n.ctx,l,s))}},beforeDatasetsDraw(n,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const r=n.getSortedVisibleDatasetMetas();for(let a=r.length-1;a>=0;--a){const s=r[a].$filler;_shouldApplyFill(s)&&_drawfill(n.ctx,s,n.chartArea)}},beforeDatasetDraw(n,e,t){const r=e.meta.$filler;!_shouldApplyFill(r)||t.drawTime!=="beforeDatasetDraw"||_drawfill(n.ctx,r,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const getBoxSize=(n,e)=>{let{boxHeight:t=e,boxWidth:r=e}=n;return n.usePointStyle&&(t=Math.min(t,e),r=n.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:t,itemHeight:Math.max(e,t)}},itemsEqual=(n,e)=>n!==null&&e!==null&&n.datasetIndex===e.datasetIndex&&n.index===e.index;class Legend extends Element$1{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,r){this.maxWidth=e,this.maxHeight=t,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=callback(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(r=>e.filter(r,this.chart.data))),e.sort&&(t=t.sort((r,a)=>e.sort(r,a,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,a=toFont(r.font),s=a.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:c}=getBoxSize(r,s);let d,f;t.font=a.string,this.isHorizontal()?(d=this.maxWidth,f=this._fitRows(o,s,l,c)+10):(f=this.maxHeight,d=this._fitCols(o,a,l,c)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(f,e.maxHeight||this.maxHeight)}_fitRows(e,t,r,a){const{ctx:s,maxWidth:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],f=a+l;let p=e;s.textAlign="left",s.textBaseline="middle";let b=-1,v=-f;return this.legendItems.forEach((x,_)=>{const E=r+t/2+s.measureText(x.text).width;(_===0||d[d.length-1]+E+2*l>o)&&(p+=f,d[d.length-(_>0?0:1)]=0,v+=f,b++),c[_]={left:0,top:v,row:b,width:E,height:a},d[d.length-1]+=E+l}),p}_fitCols(e,t,r,a){const{ctx:s,maxHeight:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],f=o-e;let p=l,b=0,v=0,x=0,_=0;return this.legendItems.forEach((E,A)=>{const{itemWidth:O,itemHeight:$}=calculateItemSize(r,t,s,E,a);A>0&&v+$+2*l>f&&(p+=b+l,d.push({width:b,height:v}),x+=b+l,_++,b=v=0),c[A]={left:x,top:v,col:_,width:O,height:$},b=Math.max(b,O),v+=$+l}),p+=b,d.push({width:b,height:v}),p}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:r,labels:{padding:a},rtl:s}}=this,o=getRtlAdapter(s,this.left,this.width);if(this.isHorizontal()){let l=0,c=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l]);for(const d of t)l!==d.row&&(l=d.row,c=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l])),d.top+=this.top+e+a,d.left=o.leftForLtr(o.x(c),d.width),c+=d.width+a}else{let l=0,c=_alignStartEnd(r,this.top+e+a,this.bottom-this.columnSizes[l].height);for(const d of t)d.col!==l&&(l=d.col,c=_alignStartEnd(r,this.top+e+a,this.bottom-this.columnSizes[l].height)),d.top=c,d.left+=this.left+a,d.left=o.leftForLtr(o.x(d.left),d.width),c+=d.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;clipArea(e,this),this._draw(),unclipArea(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:r,ctx:a}=this,{align:s,labels:o}=e,l=defaults.color,c=getRtlAdapter(e.rtl,this.left,this.width),d=toFont(o.font),{padding:f}=o,p=d.size,b=p/2;let v;this.drawTitle(),a.textAlign=c.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=d.string;const{boxWidth:x,boxHeight:_,itemHeight:E}=getBoxSize(o,p),A=function(B,g,q){if(isNaN(x)||x<=0||isNaN(_)||_<0)return;a.save();const Y=valueOrDefault(q.lineWidth,1);if(a.fillStyle=valueOrDefault(q.fillStyle,l),a.lineCap=valueOrDefault(q.lineCap,"butt"),a.lineDashOffset=valueOrDefault(q.lineDashOffset,0),a.lineJoin=valueOrDefault(q.lineJoin,"miter"),a.lineWidth=Y,a.strokeStyle=valueOrDefault(q.strokeStyle,l),a.setLineDash(valueOrDefault(q.lineDash,[])),o.usePointStyle){const X={radius:_*Math.SQRT2/2,pointStyle:q.pointStyle,rotation:q.rotation,borderWidth:Y},ee=c.xPlus(B,x/2),ue=g+b;drawPointLegend(a,X,ee,ue,o.pointStyleWidth&&x)}else{const X=g+Math.max((p-_)/2,0),ee=c.leftForLtr(B,x),ue=toTRBLCorners(q.borderRadius);a.beginPath(),Object.values(ue).some(J=>J!==0)?addRoundedRectPath(a,{x:ee,y:X,w:x,h:_,radius:ue}):a.rect(ee,X,x,_),a.fill(),Y!==0&&a.stroke()}a.restore()},O=function(B,g,q){renderText(a,q.text,B,g+E/2,d,{strikethrough:q.hidden,textAlign:c.textAlign(q.textAlign)})},$=this.isHorizontal(),P=this._computeTitleHeight();$?v={x:_alignStartEnd(s,this.left+f,this.right-r[0]),y:this.top+f+P,line:0}:v={x:this.left+f,y:_alignStartEnd(s,this.top+P+f,this.bottom-t[0].height),line:0},overrideTextDirection(this.ctx,e.textDirection);const L=E+f;this.legendItems.forEach((B,g)=>{a.strokeStyle=B.fontColor,a.fillStyle=B.fontColor;const q=a.measureText(B.text).width,Y=c.textAlign(B.textAlign||(B.textAlign=o.textAlign)),X=x+b+q;let ee=v.x,ue=v.y;c.setWidth(this.width),$?g>0&&ee+X+f>this.right&&(ue=v.y+=L,v.line++,ee=v.x=_alignStartEnd(s,this.left+f,this.right-r[v.line])):g>0&&ue+L>this.bottom&&(ee=v.x=ee+t[v.line].width+f,v.line++,ue=v.y=_alignStartEnd(s,this.top+P+f,this.bottom-t[v.line].height));const J=c.x(ee);if(A(J,ue,B),ee=_textX(Y,ee+x+b,$?ee+X:this.right,e.rtl),O(c.x(ee),ue,B),$)v.x+=X+f;else if(typeof B.text!="string"){const pe=d.lineHeight;v.y+=calculateLegendItemHeight(B,pe)+f}else v.y+=L}),restoreTextDirection(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,r=toFont(t.font),a=toPadding(t.padding);if(!t.display)return;const s=getRtlAdapter(e.rtl,this.left,this.width),o=this.ctx,l=t.position,c=r.size/2,d=a.top+c;let f,p=this.left,b=this.width;if(this.isHorizontal())b=Math.max(...this.lineWidths),f=this.top+d,p=_alignStartEnd(e.align,p,this.right-b);else{const x=this.columnSizes.reduce((_,E)=>Math.max(_,E.height),0);f=d+_alignStartEnd(e.align,this.top,this.bottom-x-e.labels.padding-this._computeTitleHeight())}const v=_alignStartEnd(l,p,p+b);o.textAlign=s.textAlign(_toLeftRightCenter(l)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=r.string,renderText(o,t.text,v,f,r)}_computeTitleHeight(){const e=this.options.title,t=toFont(e.font),r=toPadding(e.padding);return e.display?t.lineHeight+r.height:0}_getLegendItemAt(e,t){let r,a,s;if(_isBetween(e,this.left,this.right)&&_isBetween(t,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(a=s[r],_isBetween(e,a.left,a.left+a.width)&&_isBetween(t,a.top,a.top+a.height))return this.legendItems[r]}return null}handleEvent(e){const t=this.options;if(!isListened(e.type,t))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,s=itemsEqual(a,r);a&&!s&&callback(t.onLeave,[e,a,this],this),this._hoveredItem=r,r&&!s&&callback(t.onHover,[e,r,this],this)}else r&&callback(t.onClick,[e,r,this],this)}}function calculateItemSize(n,e,t,r,a){const s=calculateItemWidth(r,n,e,t),o=calculateItemHeight(a,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function calculateItemWidth(n,e,t,r){let a=n.text;return a&&typeof a!="string"&&(a=a.reduce((s,o)=>s.length>o.length?s:o)),e+t.size/2+r.measureText(a).width}function calculateItemHeight(n,e,t){let r=n;return typeof e.text!="string"&&(r=calculateLegendItemHeight(e,t)),r}function calculateLegendItemHeight(n,e){const t=n.text?n.text.length:0;return e*t}function isListened(n,e){return!!((n==="mousemove"||n==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(n==="click"||n==="mouseup"))}var plugin_legend={id:"legend",_element:Legend,start(n,e,t){const r=n.legend=new Legend({ctx:n.ctx,options:t,chart:n});layouts.configure(n,r,t),layouts.addBox(n,r)},stop(n){layouts.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,e,t){const r=n.legend;layouts.configure(n,r,t),r.options=t},afterUpdate(n){const e=n.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(n,e){e.replay||n.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,e,t){const r=e.datasetIndex,a=t.chart;a.isDatasetVisible(r)?(a.hide(r),e.hidden=!0):(a.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const e=n.data.datasets,{labels:{usePointStyle:t,pointStyle:r,textAlign:a,color:s,useBorderRadius:o,borderRadius:l}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(t?0:void 0),f=toPadding(d.borderWidth);return{text:e[c.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(f.width+f.height)/4,strokeStyle:d.borderColor,pointStyle:r||d.pointStyle,rotation:d.rotation,textAlign:a||d.textAlign,borderRadius:o&&(l||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Title extends Element$1{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const a=isArray(r.text)?r.text.length:1;this._padding=toPadding(r.padding);const s=a*toFont(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:r,bottom:a,right:s,options:o}=this,l=o.align;let c=0,d,f,p;return this.isHorizontal()?(f=_alignStartEnd(l,r,s),p=t+e,d=s-r):(o.position==="left"?(f=r+e,p=_alignStartEnd(l,a,t),c=PI*-.5):(f=s-e,p=_alignStartEnd(l,t,a),c=PI*.5),d=a-t),{titleX:f,titleY:p,maxWidth:d,rotation:c}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const r=toFont(t.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:c,rotation:d}=this._drawArgs(s);renderText(e,t.text,0,0,r,{color:t.color,maxWidth:c,rotation:d,textAlign:_toLeftRightCenter(t.align),textBaseline:"middle",translation:[o,l]})}}function createTitle(n,e){const t=new Title({ctx:n.ctx,options:e,chart:n});layouts.configure(n,t,e),layouts.addBox(n,t),n.titleBlock=t}var plugin_title={id:"title",_element:Title,start(n,e,t){createTitle(n,t)},stop(n){const e=n.titleBlock;layouts.removeBox(n,e),delete n.titleBlock},beforeUpdate(n,e,t){const r=n.titleBlock;layouts.configure(n,r,t),r.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const map=new WeakMap;var plugin_subtitle={id:"subtitle",start(n,e,t){const r=new Title({ctx:n.ctx,options:t,chart:n});layouts.configure(n,r,t),layouts.addBox(n,r),map.set(n,r)},stop(n){layouts.removeBox(n,map.get(n)),map.delete(n)},beforeUpdate(n,e,t){const r=map.get(n);layouts.configure(n,r,t),r.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const positioners={average(n){if(!n.length)return!1;let e,t,r=new Set,a=0,s=0;for(e=0,t=n.length;e<t;++e){const l=n[e].element;if(l&&l.hasValue()){const c=l.tooltipPosition();r.add(c.x),a+=c.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((l,c)=>l+c)/r.size,y:a/s}},nearest(n,e){if(!n.length)return!1;let t=e.x,r=e.y,a=Number.POSITIVE_INFINITY,s,o,l;for(s=0,o=n.length;s<o;++s){const c=n[s].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),f=distanceBetweenPoints(e,d);f<a&&(a=f,l=c)}}if(l){const c=l.tooltipPosition();t=c.x,r=c.y}return{x:t,y:r}}};function pushOrConcat(n,e){return e&&(isArray(e)?Array.prototype.push.apply(n,e):n.push(e)),n}function splitNewlines(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function createTooltipItem(n,e){const{element:t,datasetIndex:r,index:a}=e,s=n.getDatasetMeta(r).controller,{label:o,value:l}=s.getLabelAndValue(a);return{chart:n,label:o,parsed:s.getParsed(a),raw:n.data.datasets[r].data[a],formattedValue:l,dataset:s.getDataset(),dataIndex:a,datasetIndex:r,element:t}}function getTooltipSize(n,e){const t=n.chart.ctx,{body:r,footer:a,title:s}=n,{boxWidth:o,boxHeight:l}=e,c=toFont(e.bodyFont),d=toFont(e.titleFont),f=toFont(e.footerFont),p=s.length,b=a.length,v=r.length,x=toPadding(e.padding);let _=x.height,E=0,A=r.reduce((P,L)=>P+L.before.length+L.lines.length+L.after.length,0);if(A+=n.beforeBody.length+n.afterBody.length,p&&(_+=p*d.lineHeight+(p-1)*e.titleSpacing+e.titleMarginBottom),A){const P=e.displayColors?Math.max(l,c.lineHeight):c.lineHeight;_+=v*P+(A-v)*c.lineHeight+(A-1)*e.bodySpacing}b&&(_+=e.footerMarginTop+b*f.lineHeight+(b-1)*e.footerSpacing);let O=0;const $=function(P){E=Math.max(E,t.measureText(P).width+O)};return t.save(),t.font=d.string,each(n.title,$),t.font=c.string,each(n.beforeBody.concat(n.afterBody),$),O=e.displayColors?o+2+e.boxPadding:0,each(r,P=>{each(P.before,$),each(P.lines,$),each(P.after,$)}),O=0,t.font=f.string,each(n.footer,$),t.restore(),E+=x.width,{width:E,height:_}}function determineYAlign(n,e){const{y:t,height:r}=e;return t<r/2?"top":t>n.height-r/2?"bottom":"center"}function doesNotFitWithAlign(n,e,t,r){const{x:a,width:s}=r,o=t.caretSize+t.caretPadding;if(n==="left"&&a+s+o>e.width||n==="right"&&a-s-o<0)return!0}function determineXAlign(n,e,t,r){const{x:a,width:s}=t,{width:o,chartArea:{left:l,right:c}}=n;let d="center";return r==="center"?d=a<=(l+c)/2?"left":"right":a<=s/2?d="left":a>=o-s/2&&(d="right"),doesNotFitWithAlign(d,n,e,t)&&(d="center"),d}function determineAlignment(n,e,t){const r=t.yAlign||e.yAlign||determineYAlign(n,t);return{xAlign:t.xAlign||e.xAlign||determineXAlign(n,e,t,r),yAlign:r}}function alignX(n,e){let{x:t,width:r}=n;return e==="right"?t-=r:e==="center"&&(t-=r/2),t}function alignY(n,e,t){let{y:r,height:a}=n;return e==="top"?r+=t:e==="bottom"?r-=a+t:r-=a/2,r}function getBackgroundPoint(n,e,t,r){const{caretSize:a,caretPadding:s,cornerRadius:o}=n,{xAlign:l,yAlign:c}=t,d=a+s,{topLeft:f,topRight:p,bottomLeft:b,bottomRight:v}=toTRBLCorners(o);let x=alignX(e,l);const _=alignY(e,c,d);return c==="center"?l==="left"?x+=d:l==="right"&&(x-=d):l==="left"?x-=Math.max(f,b)+a:l==="right"&&(x+=Math.max(p,v)+a),{x:_limitValue(x,0,r.width-e.width),y:_limitValue(_,0,r.height-e.height)}}function getAlignedX(n,e,t){const r=toPadding(t.padding);return e==="center"?n.x+n.width/2:e==="right"?n.x+n.width-r.right:n.x+r.left}function getBeforeAfterBodyLines(n){return pushOrConcat([],splitNewlines(n))}function createTooltipContext(n,e,t){return createContext(n,{tooltip:e,tooltipItems:t,type:"tooltip"})}function overrideCallbacks(n,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?n.override(t):n}const defaultCallbacks={beforeTitle:noop,title(n){if(n.length>0){const e=n[0],t=e.chart.data.labels,r=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return t[e.dataIndex]}return""},afterTitle:noop,beforeBody:noop,beforeLabel:noop,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let e=n.dataset.label||"";e&&(e+=": ");const t=n.formattedValue;return isNullOrUndef(t)||(e+=t),e},labelColor(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:noop,afterBody:noop,beforeFooter:noop,footer:noop,afterFooter:noop};function invokeCallbackWithFallback(n,e,t,r){const a=n[e].call(t,r);return typeof a>"u"?defaultCallbacks[e].call(t,r):a}class Tooltip extends Element$1{static positioners=positioners;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,r=this.options.setContext(this.getContext()),a=r.enabled&&t.options.animation&&r.animations,s=new Animations(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=createTooltipContext(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:r}=t,a=invokeCallbackWithFallback(r,"beforeTitle",this,e),s=invokeCallbackWithFallback(r,"title",this,e),o=invokeCallbackWithFallback(r,"afterTitle",this,e);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(s)),l=pushOrConcat(l,splitNewlines(o)),l}getBeforeBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:r}=t,a=[];return each(e,s=>{const o={before:[],lines:[],after:[]},l=overrideCallbacks(r,s);pushOrConcat(o.before,splitNewlines(invokeCallbackWithFallback(l,"beforeLabel",this,s))),pushOrConcat(o.lines,invokeCallbackWithFallback(l,"label",this,s)),pushOrConcat(o.after,splitNewlines(invokeCallbackWithFallback(l,"afterLabel",this,s))),a.push(o)}),a}getAfterBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:r}=t,a=invokeCallbackWithFallback(r,"beforeFooter",this,e),s=invokeCallbackWithFallback(r,"footer",this,e),o=invokeCallbackWithFallback(r,"afterFooter",this,e);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(s)),l=pushOrConcat(l,splitNewlines(o)),l}_createItems(e){const t=this._active,r=this.chart.data,a=[],s=[],o=[];let l=[],c,d;for(c=0,d=t.length;c<d;++c)l.push(createTooltipItem(this.chart,t[c]));return e.filter&&(l=l.filter((f,p,b)=>e.filter(f,p,b,r))),e.itemSort&&(l=l.sort((f,p)=>e.itemSort(f,p,r))),each(l,f=>{const p=overrideCallbacks(e.callbacks,f);a.push(invokeCallbackWithFallback(p,"labelColor",this,f)),s.push(invokeCallbackWithFallback(p,"labelPointStyle",this,f)),o.push(invokeCallbackWithFallback(p,"labelTextColor",this,f))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=l,l}update(e,t){const r=this.options.setContext(this.getContext()),a=this._active;let s,o=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const l=positioners[r.position].call(this,a,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const c=this._size=getTooltipSize(this,r),d=Object.assign({},l,c),f=determineAlignment(this.chart,r,d),p=getBackgroundPoint(r,d,f,this.chart);this.xAlign=f.xAlign,this.yAlign=f.yAlign,s={opacity:1,x:p.x,y:p.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,r,a){const s=this.getCaretPosition(e,r,a);t.lineTo(s.x1,s.y1),t.lineTo(s.x2,s.y2),t.lineTo(s.x3,s.y3)}getCaretPosition(e,t,r){const{xAlign:a,yAlign:s}=this,{caretSize:o,cornerRadius:l}=r,{topLeft:c,topRight:d,bottomLeft:f,bottomRight:p}=toTRBLCorners(l),{x:b,y:v}=e,{width:x,height:_}=t;let E,A,O,$,P,L;return s==="center"?(P=v+_/2,a==="left"?(E=b,A=E-o,$=P+o,L=P-o):(E=b+x,A=E+o,$=P-o,L=P+o),O=E):(a==="left"?A=b+Math.max(c,f)+o:a==="right"?A=b+x-Math.max(d,p)-o:A=this.caretX,s==="top"?($=v,P=$-o,E=A-o,O=A+o):($=v+_,P=$+o,E=A+o,O=A-o),L=$),{x1:E,x2:A,x3:O,y1:$,y2:P,y3:L}}drawTitle(e,t,r){const a=this.title,s=a.length;let o,l,c;if(s){const d=getRtlAdapter(r.rtl,this.x,this.width);for(e.x=getAlignedX(this,r.titleAlign,r),t.textAlign=d.textAlign(r.titleAlign),t.textBaseline="middle",o=toFont(r.titleFont),l=r.titleSpacing,t.fillStyle=r.titleColor,t.font=o.string,c=0;c<s;++c)t.fillText(a[c],d.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+l,c+1===s&&(e.y+=r.titleMarginBottom-l)}}_drawColorBox(e,t,r,a,s){const o=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:c,boxWidth:d}=s,f=toFont(s.bodyFont),p=getAlignedX(this,"left",s),b=a.x(p),v=c<f.lineHeight?(f.lineHeight-c)/2:0,x=t.y+v;if(s.usePointStyle){const _={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},E=a.leftForLtr(b,d)+d/2,A=x+c/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,drawPoint(e,_,E,A),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,drawPoint(e,_,E,A)}else{e.lineWidth=isObject(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const _=a.leftForLtr(b,d),E=a.leftForLtr(a.xPlus(b,1),d-2),A=toTRBLCorners(o.borderRadius);Object.values(A).some(O=>O!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,addRoundedRectPath(e,{x:_,y:x,w:d,h:c,radius:A}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),addRoundedRectPath(e,{x:E,y:x+1,w:d-2,h:c-2,radius:A}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(_,x,d,c),e.strokeRect(_,x,d,c),e.fillStyle=o.backgroundColor,e.fillRect(E,x+1,d-2,c-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,t,r){const{body:a}=this,{bodySpacing:s,bodyAlign:o,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:f}=r,p=toFont(r.bodyFont);let b=p.lineHeight,v=0;const x=getRtlAdapter(r.rtl,this.x,this.width),_=function(q){t.fillText(q,x.x(e.x+v),e.y+b/2),e.y+=b+s},E=x.textAlign(o);let A,O,$,P,L,B,g;for(t.textAlign=o,t.textBaseline="middle",t.font=p.string,e.x=getAlignedX(this,E,r),t.fillStyle=r.bodyColor,each(this.beforeBody,_),v=l&&E!=="right"?o==="center"?d/2+f:d+2+f:0,P=0,B=a.length;P<B;++P){for(A=a[P],O=this.labelTextColors[P],t.fillStyle=O,each(A.before,_),$=A.lines,l&&$.length&&(this._drawColorBox(t,e,P,x,r),b=Math.max(p.lineHeight,c)),L=0,g=$.length;L<g;++L)_($[L]),b=p.lineHeight;each(A.after,_)}v=0,b=p.lineHeight,each(this.afterBody,_),e.y-=s}drawFooter(e,t,r){const a=this.footer,s=a.length;let o,l;if(s){const c=getRtlAdapter(r.rtl,this.x,this.width);for(e.x=getAlignedX(this,r.footerAlign,r),e.y+=r.footerMarginTop,t.textAlign=c.textAlign(r.footerAlign),t.textBaseline="middle",o=toFont(r.footerFont),t.fillStyle=r.footerColor,t.font=o.string,l=0;l<s;++l)t.fillText(a[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,t,r,a){const{xAlign:s,yAlign:o}=this,{x:l,y:c}=e,{width:d,height:f}=r,{topLeft:p,topRight:b,bottomLeft:v,bottomRight:x}=toTRBLCorners(a.cornerRadius);t.fillStyle=a.backgroundColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.beginPath(),t.moveTo(l+p,c),o==="top"&&this.drawCaret(e,t,r,a),t.lineTo(l+d-b,c),t.quadraticCurveTo(l+d,c,l+d,c+b),o==="center"&&s==="right"&&this.drawCaret(e,t,r,a),t.lineTo(l+d,c+f-x),t.quadraticCurveTo(l+d,c+f,l+d-x,c+f),o==="bottom"&&this.drawCaret(e,t,r,a),t.lineTo(l+v,c+f),t.quadraticCurveTo(l,c+f,l,c+f-v),o==="center"&&s==="left"&&this.drawCaret(e,t,r,a),t.lineTo(l,c+p),t.quadraticCurveTo(l,c,l+p,c),t.closePath(),t.fill(),a.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,r=this.$animations,a=r&&r.x,s=r&&r.y;if(a||s){const o=positioners[e.position].call(this,this._active,this._eventPosition);if(!o)return;const l=this._size=getTooltipSize(this,e),c=Object.assign({},o,this._size),d=determineAlignment(t,e,c),f=getBackgroundPoint(e,c,d,t);(a._to!==f.x||s._to!==f.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,f))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(t);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=toPadding(t.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&l&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,a,t),overrideTextDirection(e,t.textDirection),s.y+=o.top,this.drawTitle(s,e,t),this.drawBody(s,e,t),this.drawFooter(s,e,t),restoreTextDirection(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const r=this._active,a=e.map(({datasetIndex:l,index:c})=>{const d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),s=!_elementsEqual(r,a),o=this._positionChanged(a,t);(s||o)&&(this._active=a,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,r=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],o=this._getActiveElements(e,s,t,r),l=this._positionChanged(o,e),c=t||!_elementsEqual(o,s)||l;return c&&(this._active=o,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),c}_getActiveElements(e,t,r,a){const s=this.options;if(e.type==="mouseout")return[];if(!a)return t.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,t){const{caretX:r,caretY:a,options:s}=this,o=positioners[s.position].call(this,e,t);return o!==!1&&(r!==o.x||a!==o.y)}}var plugin_tooltip={id:"tooltip",_element:Tooltip,positioners,afterInit(n,e,t){t&&(n.tooltip=new Tooltip({chart:n,options:t}))},beforeUpdate(n,e,t){n.tooltip&&n.tooltip.initialize(t)},reset(n,e,t){n.tooltip&&n.tooltip.initialize(t)},afterDraw(n){const e=n.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(n.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",t)}},afterEvent(n,e){if(n.tooltip){const t=e.replay;n.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,e)=>e.bodyFont.size,boxWidth:(n,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:defaultCallbacks},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},plugins=Object.freeze({__proto__:null,Colors:plugin_colors,Decimation:plugin_decimation,Filler:index,Legend:plugin_legend,SubTitle:plugin_subtitle,Title:plugin_title,Tooltip:plugin_tooltip});const addIfString=(n,e,t,r)=>(typeof e=="string"?(t=n.push(e)-1,r.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function findOrAddLabel(n,e,t,r){const a=n.indexOf(e);if(a===-1)return addIfString(n,e,t,r);const s=n.lastIndexOf(e);return a!==s?t:a}const validIndex=(n,e)=>n===null?null:_limitValue(Math.round(n),0,e);function _getLabelForValue(n){const e=this.getLabels();return n>=0&&n<e.length?e[n]:n}class CategoryScale extends Scale{static id="category";static defaults={ticks:{callback:_getLabelForValue}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const r=this.getLabels();for(const{index:a,label:s}of t)r[a]===s&&r.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(isNullOrUndef(e))return null;const r=this.getLabels();return t=isFinite(t)&&r[t]===e?t:findOrAddLabel(r,e,valueOrDefault(t,e),this._addedLabels),validIndex(t,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:r,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),t||(a=this.getLabels().length-1)),this.min=r,this.max=a}buildTicks(){const e=this.min,t=this.max,r=this.options.offset,a=[];let s=this.getLabels();s=e===0&&t===s.length-1?s:s.slice(e,t+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=e;o<=t;o++)a.push({value:o});return a}getLabelForValue(e){return _getLabelForValue.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}function generateTicks$1(n,e){const t=[],{bounds:a,step:s,min:o,max:l,precision:c,count:d,maxTicks:f,maxDigits:p,includeBounds:b}=n,v=s||1,x=f-1,{min:_,max:E}=e,A=!isNullOrUndef(o),O=!isNullOrUndef(l),$=!isNullOrUndef(d),P=(E-_)/(p+1);let L=niceNum((E-_)/x/v)*v,B,g,q,Y;if(L<1e-14&&!A&&!O)return[{value:_},{value:E}];Y=Math.ceil(E/L)-Math.floor(_/L),Y>x&&(L=niceNum(Y*L/x/v)*v),isNullOrUndef(c)||(B=Math.pow(10,c),L=Math.ceil(L*B)/B),a==="ticks"?(g=Math.floor(_/L)*L,q=Math.ceil(E/L)*L):(g=_,q=E),A&&O&&s&&almostWhole((l-o)/s,L/1e3)?(Y=Math.round(Math.min((l-o)/L,f)),L=(l-o)/Y,g=o,q=l):$?(g=A?o:g,q=O?l:q,Y=d-1,L=(q-g)/Y):(Y=(q-g)/L,almostEquals(Y,Math.round(Y),L/1e3)?Y=Math.round(Y):Y=Math.ceil(Y));const X=Math.max(_decimalPlaces(L),_decimalPlaces(g));B=Math.pow(10,isNullOrUndef(c)?X:c),g=Math.round(g*B)/B,q=Math.round(q*B)/B;let ee=0;for(A&&(b&&g!==o?(t.push({value:o}),g<o&&ee++,almostEquals(Math.round((g+ee*L)*B)/B,o,relativeLabelSize(o,P,n))&&ee++):g<o&&ee++);ee<Y;++ee){const ue=Math.round((g+ee*L)*B)/B;if(O&&ue>l)break;t.push({value:ue})}return O&&b&&q!==l?t.length&&almostEquals(t[t.length-1].value,l,relativeLabelSize(l,P,n))?t[t.length-1].value=l:t.push({value:l}):(!O||q===l)&&t.push({value:q}),t}function relativeLabelSize(n,e,{horizontal:t,minRotation:r}){const a=toRadians(r),s=(t?Math.sin(a):Math.cos(a))||.001,o=.75*e*(""+n).length;return Math.min(e/s,o)}class LinearScaleBase extends Scale{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return isNullOrUndef(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:r}=this.getUserBounds();let{min:a,max:s}=this;const o=c=>a=t?a:c,l=c=>s=r?s:c;if(e){const c=sign(a),d=sign(s);c<0&&d<0?l(0):c>0&&d>0&&o(0)}if(a===s){let c=s===0?1:Math.abs(s*.05);l(s+c),e||o(a-c)}this.min=a,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:r}=e,a;return r?(a=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),t=t||11),t&&(a=Math.min(t,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const a={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},s=this._range||this,o=generateTicks$1(a,s);return e.bounds==="ticks"&&_setMinAndMaxByKey(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let t=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const a=(r-t)/Math.max(e.length-1,1)/2;t-=a,r+=a}this._startValue=t,this._endValue=r,this._valueRange=r-t}getLabelForValue(e){return formatNumber(e,this.chart.options.locale,this.options.ticks.format)}}class LinearScale extends LinearScaleBase{static id="linear";static defaults={ticks:{callback:Ticks.formatters.numeric}};determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?e:0,this.max=isNumberFinite(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,r=toRadians(this.options.ticks.minRotation),a=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,s.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}const log10Floor=n=>Math.floor(log10(n)),changeExponent=(n,e)=>Math.pow(10,log10Floor(n)+e);function isMajor(n){return n/Math.pow(10,log10Floor(n))===1}function steps(n,e,t){const r=Math.pow(10,t),a=Math.floor(n/r);return Math.ceil(e/r)-a}function startExp(n,e){const t=e-n;let r=log10Floor(t);for(;steps(n,e,r)>10;)r++;for(;steps(n,e,r)<10;)r--;return Math.min(r,log10Floor(n))}function generateTicks(n,{min:e,max:t}){e=finiteOrDefault(n.min,e);const r=[],a=log10Floor(e);let s=startExp(e,t),o=s<0?Math.pow(10,Math.abs(s)):1;const l=Math.pow(10,s),c=a>s?Math.pow(10,a):0,d=Math.round((e-c)*o)/o,f=Math.floor((e-c)/l/10)*l*10;let p=Math.floor((d-f)/Math.pow(10,s)),b=finiteOrDefault(n.min,Math.round((c+f+p*Math.pow(10,s))*o)/o);for(;b<t;)r.push({value:b,major:isMajor(b),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(s++,p=2,o=s>=0?1:o),b=Math.round((c+f+p*Math.pow(10,s))*o)/o;const v=finiteOrDefault(n.max,b);return r.push({value:v,major:isMajor(v),significand:p}),r}class LogarithmicScale extends Scale{static id="logarithmic";static defaults={ticks:{callback:Ticks.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const r=LinearScaleBase.prototype.parse.apply(this,[e,t]);if(r===0){this._zero=!0;return}return isNumberFinite(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?Math.max(0,e):null,this.max=isNumberFinite(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!isNumberFinite(this._userMin)&&(this.min=e===changeExponent(this.min,0)?changeExponent(this.min,-1):changeExponent(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let r=this.min,a=this.max;const s=l=>r=e?r:l,o=l=>a=t?a:l;r===a&&(r<=0?(s(1),o(10)):(s(changeExponent(r,-1)),o(changeExponent(a,1)))),r<=0&&s(changeExponent(a,-1)),a<=0&&o(changeExponent(r,1)),this.min=r,this.max=a}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},r=generateTicks(t,this);return e.bounds==="ticks"&&_setMinAndMaxByKey(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":formatNumber(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=log10(e),this._valueRange=log10(this.max)-log10(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(log10(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}function getTickBackdropHeight(n){const e=n.ticks;if(e.display&&n.display){const t=toPadding(e.backdropPadding);return valueOrDefault(e.font&&e.font.size,defaults.font.size)+t.height}return 0}function measureLabelSize(n,e,t){return t=isArray(t)?t:[t],{w:_longestText(n,e.string,t),h:t.length*e.lineHeight}}function determineLimits(n,e,t,r,a){return n===r||n===a?{start:e-t/2,end:e+t/2}:n<r||n>a?{start:e-t,end:e}:{start:e,end:e+t}}function fitWithPointLabels(n){const e={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},t=Object.assign({},e),r=[],a=[],s=n._pointLabels.length,o=n.options.pointLabels,l=o.centerPointLabels?PI/s:0;for(let c=0;c<s;c++){const d=o.setContext(n.getPointLabelContext(c));a[c]=d.padding;const f=n.getPointPosition(c,n.drawingArea+a[c],l),p=toFont(d.font),b=measureLabelSize(n.ctx,p,n._pointLabels[c]);r[c]=b;const v=_normalizeAngle(n.getIndexAngle(c)+l),x=Math.round(toDegrees(v)),_=determineLimits(x,f.x,b.w,0,180),E=determineLimits(x,f.y,b.h,90,270);updateLimits(t,e,v,_,E)}n.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),n._pointLabelItems=buildPointLabelItems(n,r,a)}function updateLimits(n,e,t,r,a){const s=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t));let l=0,c=0;r.start<e.l?(l=(e.l-r.start)/s,n.l=Math.min(n.l,e.l-l)):r.end>e.r&&(l=(r.end-e.r)/s,n.r=Math.max(n.r,e.r+l)),a.start<e.t?(c=(e.t-a.start)/o,n.t=Math.min(n.t,e.t-c)):a.end>e.b&&(c=(a.end-e.b)/o,n.b=Math.max(n.b,e.b+c))}function createPointLabelItem(n,e,t){const r=n.drawingArea,{extra:a,additionalAngle:s,padding:o,size:l}=t,c=n.getPointPosition(e,r+a+o,s),d=Math.round(toDegrees(_normalizeAngle(c.angle+HALF_PI))),f=yForAngle(c.y,l.h,d),p=getTextAlignForAngle(d),b=leftForTextAlign(c.x,l.w,p);return{visible:!0,x:c.x,y:f,textAlign:p,left:b,top:f,right:b+l.w,bottom:f+l.h}}function isNotOverlapped(n,e){if(!e)return!0;const{left:t,top:r,right:a,bottom:s}=n;return!(_isPointInArea({x:t,y:r},e)||_isPointInArea({x:t,y:s},e)||_isPointInArea({x:a,y:r},e)||_isPointInArea({x:a,y:s},e))}function buildPointLabelItems(n,e,t){const r=[],a=n._pointLabels.length,s=n.options,{centerPointLabels:o,display:l}=s.pointLabels,c={extra:getTickBackdropHeight(s)/2,additionalAngle:o?PI/a:0};let d;for(let f=0;f<a;f++){c.padding=t[f],c.size=e[f];const p=createPointLabelItem(n,f,c);r.push(p),l==="auto"&&(p.visible=isNotOverlapped(p,d),p.visible&&(d=p))}return r}function getTextAlignForAngle(n){return n===0||n===180?"center":n<180?"left":"right"}function leftForTextAlign(n,e,t){return t==="right"?n-=e:t==="center"&&(n-=e/2),n}function yForAngle(n,e,t){return t===90||t===270?n-=e/2:(t>270||t<90)&&(n-=e),n}function drawPointLabelBox(n,e,t){const{left:r,top:a,right:s,bottom:o}=t,{backdropColor:l}=e;if(!isNullOrUndef(l)){const c=toTRBLCorners(e.borderRadius),d=toPadding(e.backdropPadding);n.fillStyle=l;const f=r-d.left,p=a-d.top,b=s-r+d.width,v=o-a+d.height;Object.values(c).some(x=>x!==0)?(n.beginPath(),addRoundedRectPath(n,{x:f,y:p,w:b,h:v,radius:c}),n.fill()):n.fillRect(f,p,b,v)}}function drawPointLabels(n,e){const{ctx:t,options:{pointLabels:r}}=n;for(let a=e-1;a>=0;a--){const s=n._pointLabelItems[a];if(!s.visible)continue;const o=r.setContext(n.getPointLabelContext(a));drawPointLabelBox(t,o,s);const l=toFont(o.font),{x:c,y:d,textAlign:f}=s;renderText(t,n._pointLabels[a],c,d+l.lineHeight/2,l,{color:o.color,textAlign:f,textBaseline:"middle"})}}function pathRadiusLine(n,e,t,r){const{ctx:a}=n;if(t)a.arc(n.xCenter,n.yCenter,e,0,TAU);else{let s=n.getPointPosition(0,e);a.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=n.getPointPosition(o,e),a.lineTo(s.x,s.y)}}function drawRadiusLine(n,e,t,r,a){const s=n.ctx,o=e.circular,{color:l,lineWidth:c}=e;!o&&!r||!l||!c||t<0||(s.save(),s.strokeStyle=l,s.lineWidth=c,s.setLineDash(a.dash||[]),s.lineDashOffset=a.dashOffset,s.beginPath(),pathRadiusLine(n,t,o,r),s.closePath(),s.stroke(),s.restore())}function createPointLabelContext(n,e,t){return createContext(n,{label:t,index:e,type:"pointLabel"})}class RadialLinearScale extends LinearScaleBase{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ticks.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=toPadding(getTickBackdropHeight(this.options)/2),t=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(t,r)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=isNumberFinite(e)&&!isNaN(e)?e:0,this.max=isNumberFinite(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/getTickBackdropHeight(this.options))}generateTickLabels(e){LinearScaleBase.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,r)=>{const a=callback(this.options.pointLabels.callback,[t,r],this);return a||a===0?a:""}).filter((t,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?fitWithPointLabels(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,r,a){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((r-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,r,a))}getIndexAngle(e){const t=TAU/(this._pointLabels.length||1),r=this.options.startAngle||0;return _normalizeAngle(e*t+toRadians(r))}getDistanceFromCenterForValue(e){if(isNullOrUndef(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(isNullOrUndef(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const r=t[e];return createPointLabelContext(this.getContext(),e,r)}}getPointPosition(e,t,r=0){const a=this.getIndexAngle(e)-HALF_PI+r;return{x:Math.cos(a)*t+this.xCenter,y:Math.sin(a)*t+this.yCenter,angle:a}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:r,right:a,bottom:s}=this._pointLabelItems[e];return{left:t,top:r,right:a,bottom:s}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),pathRadiusLine(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:r,grid:a,border:s}=t,o=this._pointLabels.length;let l,c,d;if(t.pointLabels.display&&drawPointLabels(this,o),a.display&&this.ticks.forEach((f,p)=>{if(p!==0||p===0&&this.min<0){c=this.getDistanceFromCenterForValue(f.value);const b=this.getContext(p),v=a.setContext(b),x=s.setContext(b);drawRadiusLine(this,v,c,o,x)}}),r.display){for(e.save(),l=o-1;l>=0;l--){const f=r.setContext(this.getPointLabelContext(l)),{color:p,lineWidth:b}=f;!b||!p||(e.lineWidth=b,e.strokeStyle=p,e.setLineDash(f.borderDash),e.lineDashOffset=f.borderDashOffset,c=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),d=this.getPointPosition(l,c),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(d.x,d.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,r=t.ticks;if(!r.display)return;const a=this.getIndexAngle(0);let s,o;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((l,c)=>{if(c===0&&this.min>=0&&!t.reverse)return;const d=r.setContext(this.getContext(c)),f=toFont(d.font);if(s=this.getDistanceFromCenterForValue(this.ticks[c].value),d.showLabelBackdrop){e.font=f.string,o=e.measureText(l.label).width,e.fillStyle=d.backdropColor;const p=toPadding(d.backdropPadding);e.fillRect(-o/2-p.left,-s-f.size/2-p.top,o+p.width,f.size+p.height)}renderText(e,l.label,0,-s,f,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),e.restore()}drawTitle(){}}const INTERVALS={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},UNITS=Object.keys(INTERVALS);function sorter(n,e){return n-e}function parse$1(n,e){if(isNullOrUndef(e))return null;const t=n._adapter,{parser:r,round:a,isoWeekday:s}=n._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),isNumberFinite(o)||(o=typeof r=="string"?t.parse(o,r):t.parse(o)),o===null?null:(a&&(o=a==="week"&&(isNumber(s)||s===!0)?t.startOf(o,"isoWeek",s):t.startOf(o,a)),+o)}function determineUnitForAutoTicks(n,e,t,r){const a=UNITS.length;for(let s=UNITS.indexOf(n);s<a-1;++s){const o=INTERVALS[UNITS[s]],l=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-e)/(l*o.size))<=r)return UNITS[s]}return UNITS[a-1]}function determineUnitForFormatting(n,e,t,r,a){for(let s=UNITS.length-1;s>=UNITS.indexOf(t);s--){const o=UNITS[s];if(INTERVALS[o].common&&n._adapter.diff(a,r,o)>=e-1)return o}return UNITS[t?UNITS.indexOf(t):0]}function determineMajorUnit(n){for(let e=UNITS.indexOf(n)+1,t=UNITS.length;e<t;++e)if(INTERVALS[UNITS[e]].common)return UNITS[e]}function addTick(n,e,t){if(!t)n[e]=!0;else if(t.length){const{lo:r,hi:a}=_lookup(t,e),s=t[r]>=e?t[r]:t[a];n[s]=!0}}function setMajorTicks(n,e,t,r){const a=n._adapter,s=+a.startOf(e[0].value,r),o=e[e.length-1].value;let l,c;for(l=s;l<=o;l=+a.add(l,1,r))c=t[l],c>=0&&(e[c].major=!0);return e}function ticksFromTimestamps(n,e,t){const r=[],a={},s=e.length;let o,l;for(o=0;o<s;++o)l=e[o],a[l]=o,r.push({value:l,major:!1});return s===0||!t?r:setMajorTicks(n,r,a,t)}class TimeScale extends Scale{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const r=e.time||(e.time={}),a=this._adapter=new adapters._date(e.adapters.date);a.init(t),mergeIf(r.displayFormats,a.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:parse$1(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,r=e.time.unit||"day";let{min:a,max:s,minDefined:o,maxDefined:l}=this.getUserBounds();function c(d){!o&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!l&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!o||!l)&&(c(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&c(this.getMinMax(!1))),a=isNumberFinite(a)&&!isNaN(a)?a:+t.startOf(Date.now(),r),s=isNumberFinite(s)&&!isNaN(s)?s:+t.endOf(Date.now(),r)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],r=e[e.length-1]),{min:t,max:r}}buildTicks(){const e=this.options,t=e.time,r=e.ticks,a=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,o=this.max,l=_filterBetween(a,s,o);return this._unit=t.unit||(r.autoSkip?determineUnitForAutoTicks(t.minUnit,this.min,this.max,this._getLabelCapacity(s)):determineUnitForFormatting(this,l.length,t.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:determineMajorUnit(this._unit),this.initOffsets(a),e.reverse&&l.reverse(),ticksFromTimestamps(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,r=0,a,s;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?t=1-a:t=(this.getDecimalForValue(e[1])-a)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;t=_limitValue(t,0,o),r=_limitValue(r,0,o),this._offsets={start:t,end:r,factor:1/(t+1+r)}}_generate(){const e=this._adapter,t=this.min,r=this.max,a=this.options,s=a.time,o=s.unit||determineUnitForAutoTicks(s.minUnit,t,r,this._getLabelCapacity(t)),l=valueOrDefault(a.ticks.stepSize,1),c=o==="week"?s.isoWeekday:!1,d=isNumber(c)||c===!0,f={};let p=t,b,v;if(d&&(p=+e.startOf(p,"isoWeek",c)),p=+e.startOf(p,d?"day":o),e.diff(r,t,o)>1e5*l)throw new Error(t+" and "+r+" are too far apart with stepSize of "+l+" "+o);const x=a.ticks.source==="data"&&this.getDataTimestamps();for(b=p,v=0;b<r;b=+e.add(b,l,o),v++)addTick(f,b,x);return(b===r||a.bounds==="ticks"||v===1)&&addTick(f,b,x),Object.keys(f).sort(sorter).map(_=>+_)}getLabelForValue(e){const t=this._adapter,r=this.options.time;return r.tooltipFormat?t.format(e,r.tooltipFormat):t.format(e,r.displayFormats.datetime)}format(e,t){const a=this.options.time.displayFormats,s=this._unit,o=t||a[s];return this._adapter.format(e,o)}_tickFormatFunction(e,t,r,a){const s=this.options,o=s.ticks.callback;if(o)return callback(o,[e,t,r],this);const l=s.time.displayFormats,c=this._unit,d=this._majorUnit,f=c&&l[c],p=d&&l[d],b=r[t],v=d&&p&&b&&b.major;return this._adapter.format(e,a||(v?p:f))}generateTickLabels(e){let t,r,a;for(t=0,r=e.length;t<r;++t)a=e[t],a.label=this._tickFormatFunction(a.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+r)*t.factor)}getValueForPixel(e){const t=this._offsets,r=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,r=this.ctx.measureText(e).width,a=toRadians(this.isHorizontal()?t.maxRotation:t.minRotation),s=Math.cos(a),o=Math.sin(a),l=this._resolveTickFontOptions(0).size;return{w:r*s+l*o,h:r*o+l*s}}_getLabelCapacity(e){const t=this.options.time,r=t.displayFormats,a=r[t.unit]||r.millisecond,s=this._tickFormatFunction(e,0,ticksFromTimestamps(this,[e],this._majorUnit),a),o=this._getLabelSize(s),l=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return l>0?l:1}getDataTimestamps(){let e=this._cache.data||[],t,r;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(t=0,r=a.length;t<r;++t)e=e.concat(a[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,r;if(e.length)return e;const a=this.getLabels();for(t=0,r=a.length;t<r;++t)e.push(parse$1(this,a[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return _arrayUnique(e.sort(sorter))}}function interpolate(n,e,t){let r=0,a=n.length-1,s,o,l,c;t?(e>=n[r].pos&&e<=n[a].pos&&({lo:r,hi:a}=_lookupByKey(n,"pos",e)),{pos:s,time:l}=n[r],{pos:o,time:c}=n[a]):(e>=n[r].time&&e<=n[a].time&&({lo:r,hi:a}=_lookupByKey(n,"time",e)),{time:s,pos:l}=n[r],{time:o,pos:c}=n[a]);const d=o-s;return d?l+(c-l)*(e-s)/d:l}class TimeSeriesScale extends TimeScale{static id="timeseries";static defaults=TimeScale.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=interpolate(t,this.min),this._tableRange=interpolate(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:r}=this,a=[],s=[];let o,l,c,d,f;for(o=0,l=e.length;o<l;++o)d=e[o],d>=t&&d<=r&&a.push(d);if(a.length<2)return[{time:t,pos:0},{time:r,pos:1}];for(o=0,l=a.length;o<l;++o)f=a[o+1],c=a[o-1],d=a[o],Math.round((f+c)/2)!==d&&s.push({time:d,pos:o/(l-1)});return s}_generate(){const e=this.min,t=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(t)||r.length===1)&&r.push(t),r.sort((a,s)=>a-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),r=this.getLabelTimestamps();return t.length&&r.length?e=this.normalize(t.concat(r)):e=t.length?t:r,e=this._cache.all=e,e}getDecimalForValue(e){return(interpolate(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,r=this.getDecimalForPixel(e)/t.factor-t.end;return interpolate(this._table,r*this._tableRange+this._minPos,!0)}}var scales=Object.freeze({__proto__:null,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale});const registerables=[controllers,elements,plugins,scales];Chart.register(...registerables);class ColorPalette{static PRIMARY=["#1f78b4","#a6cee3","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]}function renderChart(n,e){const t=document.getElementById(n);if(t!==null){const r=t.getAttribute("data-url");if(r==null)return;fetchChartData(r).then(a=>{e(t,a)}).catch(a=>{console.log("Error loading chart data: "+a);const s=t.getContext("2d");s&&(s.fillStyle="red",s.font="16px Arial",s.fillText("Error loading chart data",10,15))})}}async function fetchChartData(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}function getCSSVariable(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}function initPubChart(){renderChart("pubs-by-year-chart",createPubChart)}function createPubChart(n,e){new Chart(n,{type:"bar",data:{labels:e.data.map(t=>t.name),datasets:[{label:"Publications",data:e.data.map(t=>t.total)}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,suggestedMax:10,ticks:{stepSize:1},grid:{display:!1}},x:{grid:{display:!1}}},plugins:{title:{display:!1},legend:{display:!1}}}})}function initGrantChart(){renderChart("grant-summary-chart",createGrantChart)}function createGrantChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"60%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initAllocationChart(){renderChart("allocation-summary-chart",createAllocationChart)}function createAllocationChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initResourceChart(){renderChart("resource-summary-chart",createResourceChart)}function createResourceChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initGaugeChart(){const n=document.querySelectorAll("div.chart-container > canvas.gauge-chart");for(const e of n)if(e!==null){const t=Number(e?.getAttribute("data-used")||0);let r=Number(e?.getAttribute("data-total")||0)-t;const a=String(e?.getAttribute("data-title")||"");r<0&&(r=0),createGaugeChart(e,a,t,r)}}function createGaugeChart(n,e,t,r){new Chart(n,{type:"doughnut",data:{labels:["Used","Available"],datasets:[{data:[t,r],backgroundColor:[getCSSVariable("--bs-success"),getCSSVariable("--bs-secondary")],borderColor:[getCSSVariable("--bs-success"),getCSSVariable("--bs-secondary")],borderWidth:1}]},options:{radius:"70%",rotation:270,circumference:180,responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:e,position:"bottom"}}}})}function initCharts(){for(const n of[initPubChart,initGrantChart,initAllocationChart,initResourceChart,initGaugeChart])n()}function initDepedencies(){initDataTable()}function initHtmx(){document.addEventListener("htmx:afterSettle",initDepedencies)}function getCookie(n){let e="";if(document.cookie&&document.cookie!=""){const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const a=jQuery.trim(t[r]);if(a.substring(0,n.length+1)==n+"="){e=decodeURIComponent(a.substring(n.length+1));break}}}return e}function*getElementsByQueryGenerator(n,e=document){const t=e.querySelectorAll(n);for(let r=0;r<t.length;r++)yield t[r]}function initTooltips(){for(const n of getElementsByQueryGenerator('[data-bs-toggle="tooltip"]'))new Tooltip$1(n,{container:"body"})}function initPopovers(){for(const n of getElementsByQueryGenerator('[data-bs-toggle="popover"]'))new Popover(n)}function initBootstrap(){for(const n of[initTooltips,initPopovers])n()}function renderGenericChart(n,e,t){const r=document.getElementById(n);r!==null&&fetchGenericChartData(e).then(a=>{t(r,a)}).catch(a=>{console.log("Error loading chart data: "+a);const s=r.getContext("2d");s&&(s.fillStyle="red",s.font="16px Arial",s.fillText("Error loading chart data",10,15))})}async function fetchGenericChartData(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}function initStorageHistoryChart(n,e){renderGenericChart(n,e,createStorageHistoryChart)}function createStorageHistoryChart(n,e){const t=e.datasets;t[0].type="line",t[0].fill=!1,t[0].stepped=!0,t[0].borderColor=ColorPalette.PRIMARY[0],t[1].type="line",t[1].fill=!1,t[1].stepped=!1,t[1].borderColor=ColorPalette.PRIMARY[1],new Chart(n,{type:"line",data:{datasets:t},options:{responsive:!0,scales:{x:{type:"time"}},interaction:{intersect:!1,axis:"x"},plugins:{legend:{position:"bottom"},title:{display:!1}}}})}const millisecondsInWeek=6048e5,millisecondsInDay=864e5,millisecondsInMinute=6e4,millisecondsInHour=36e5,millisecondsInSecond=1e3,constructFromSymbol=Symbol.for("constructDateFrom");function constructFrom(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&constructFromSymbol in n?n[constructFromSymbol](e):n instanceof Date?new n.constructor(e):new Date(e)}function toDate(n,e){return constructFrom(e||n,n)}function addDays(n,e,t){const r=toDate(n,t?.in);return isNaN(e)?constructFrom(t?.in||n,NaN):(e&&r.setDate(r.getDate()+e),r)}function addMonths(n,e,t){const r=toDate(n,t?.in);if(isNaN(e))return constructFrom(n,NaN);if(!e)return r;const a=r.getDate(),s=constructFrom(n,r.getTime());s.setMonth(r.getMonth()+e+1,0);const o=s.getDate();return a>=o?s:(r.setFullYear(s.getFullYear(),s.getMonth(),a),r)}function addMilliseconds(n,e,t){return constructFrom(n,+toDate(n)+e)}function addHours(n,e,t){return addMilliseconds(n,e*millisecondsInHour)}let defaultOptions={};function getDefaultOptions$1(){return defaultOptions}function startOfWeek(n,e){const t=getDefaultOptions$1(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=toDate(n,e?.in),s=a.getDay(),o=(s<r?7:0)+s-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function startOfISOWeek(n,e){return startOfWeek(n,{...e,weekStartsOn:1})}function getISOWeekYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear(),a=constructFrom(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const s=startOfISOWeek(a),o=constructFrom(t,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const l=startOfISOWeek(o);return t.getTime()>=s.getTime()?r+1:t.getTime()>=l.getTime()?r:r-1}function getTimezoneOffsetInMilliseconds(n){const e=toDate(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function normalizeDates(n,...e){const t=constructFrom.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function startOfDay(n,e){const t=toDate(n,e?.in);return t.setHours(0,0,0,0),t}function differenceInCalendarDays(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),s=startOfDay(r),o=startOfDay(a),l=+s-getTimezoneOffsetInMilliseconds(s),c=+o-getTimezoneOffsetInMilliseconds(o);return Math.round((l-c)/millisecondsInDay)}function startOfISOWeekYear(n,e){const t=getISOWeekYear(n,e),r=constructFrom(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),startOfISOWeek(r)}function addMinutes(n,e,t){const r=toDate(n,t?.in);return r.setTime(r.getTime()+e*millisecondsInMinute),r}function addQuarters(n,e,t){return addMonths(n,e*3,t)}function addSeconds(n,e,t){return addMilliseconds(n,e*1e3)}function addWeeks(n,e,t){return addDays(n,e*7,t)}function addYears(n,e,t){return addMonths(n,e*12,t)}function compareAsc(n,e){const t=+toDate(n)-+toDate(e);return t<0?-1:t>0?1:t}function isDate(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function isValid(n){return!(!isDate(n)&&typeof n!="number"||isNaN(+toDate(n)))}function differenceInCalendarMonths(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),s=r.getFullYear()-a.getFullYear(),o=r.getMonth()-a.getMonth();return s*12+o}function differenceInCalendarYears(n,e,t){const[r,a]=normalizeDates(t?.in,n,e);return r.getFullYear()-a.getFullYear()}function differenceInDays(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),s=compareLocalAsc(r,a),o=Math.abs(differenceInCalendarDays(r,a));r.setDate(r.getDate()-s*o);const l=+(compareLocalAsc(r,a)===-s),c=s*(o-l);return c===0?0:c}function compareLocalAsc(n,e){const t=n.getFullYear()-e.getFullYear()||n.getMonth()-e.getMonth()||n.getDate()-e.getDate()||n.getHours()-e.getHours()||n.getMinutes()-e.getMinutes()||n.getSeconds()-e.getSeconds()||n.getMilliseconds()-e.getMilliseconds();return t<0?-1:t>0?1:t}function getRoundingMethod(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function differenceInHours(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),s=(+r-+a)/millisecondsInHour;return getRoundingMethod(t?.roundingMethod)(s)}function differenceInMilliseconds(n,e){return+toDate(n)-+toDate(e)}function differenceInMinutes(n,e,t){const r=differenceInMilliseconds(n,e)/millisecondsInMinute;return getRoundingMethod(t?.roundingMethod)(r)}function endOfDay(n,e){const t=toDate(n,e?.in);return t.setHours(23,59,59,999),t}function endOfMonth(n,e){const t=toDate(n,e?.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function isLastDayOfMonth(n,e){const t=toDate(n,e?.in);return+endOfDay(t,e)==+endOfMonth(t,e)}function differenceInMonths(n,e,t){const[r,a,s]=normalizeDates(t?.in,n,n,e),o=compareAsc(a,s),l=Math.abs(differenceInCalendarMonths(a,s));if(l<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*l);let c=compareAsc(a,s)===-o;isLastDayOfMonth(r)&&l===1&&compareAsc(r,s)===1&&(c=!1);const d=o*(l-+c);return d===0?0:d}function differenceInQuarters(n,e,t){const r=differenceInMonths(n,e,t)/3;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInSeconds(n,e,t){const r=differenceInMilliseconds(n,e)/1e3;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInWeeks(n,e,t){const r=differenceInDays(n,e,t)/7;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInYears(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),s=compareAsc(r,a),o=Math.abs(differenceInCalendarYears(r,a));r.setFullYear(1584),a.setFullYear(1584);const l=compareAsc(r,a)===-s,c=s*(o-+l);return c===0?0:c}function startOfQuarter(n,e){const t=toDate(n,e?.in),r=t.getMonth(),a=r-r%3;return t.setMonth(a,1),t.setHours(0,0,0,0),t}function startOfMonth(n,e){const t=toDate(n,e?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function endOfYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function startOfYear(n,e){const t=toDate(n,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function endOfHour(n,e){const t=toDate(n,e?.in);return t.setMinutes(59,59,999),t}function endOfWeek(n,e){const t=getDefaultOptions$1(),r=t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=toDate(n,e?.in),s=a.getDay(),o=(s<r?-7:0)+6-(s-r);return a.setDate(a.getDate()+o),a.setHours(23,59,59,999),a}function endOfMinute(n,e){const t=toDate(n,e?.in);return t.setSeconds(59,999),t}function endOfQuarter(n,e){const t=toDate(n,e?.in),r=t.getMonth(),a=r-r%3+3;return t.setMonth(a,0),t.setHours(23,59,59,999),t}function endOfSecond(n,e){const t=toDate(n,e?.in);return t.setMilliseconds(999),t}const formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},formatDistance=(n,e,t)=>{let r;const a=formatDistanceLocale[n];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function buildFormatLongFn(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},formatRelative=(n,e,t,r)=>formatRelativeLocale[n];function buildLocalizeFn(n){return(e,t)=>{const r=t?.context?String(t.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,l=t?.width?String(t.width):o;a=n.formattingValues[l]||n.formattingValues[o]}else{const o=n.defaultWidth,l=t?.width?String(t.width):n.defaultWidth;a=n.values[l]||n.values[o]}const s=n.argumentCallback?n.argumentCallback(e):e;return a[s]}}const eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ordinalNumber=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},localize={ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:n=>n-1}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};function buildMatchFn(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=e.match(a);if(!s)return null;const o=s[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(l)?findIndex(l,p=>p.test(o)):findKey(l,p=>p.test(o));let d;d=n.valueCallback?n.valueCallback(c):c,d=t.valueCallback?t.valueCallback(d):d;const f=e.slice(o.length);return{value:d,rest:f}}}function findKey(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function findIndex(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function buildMatchPatternFn(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const a=r[0],s=e.match(n.parsePattern);if(!s)return null;let o=n.valueCallback?n.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;const l=e.slice(a.length);return{value:o,rest:l}}}const matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:n=>parseInt(n,10)}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:n=>n+1}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})},enUS={code:"en-US",formatDistance,formatLong,formatRelative,localize,match,options:{weekStartsOn:0,firstWeekContainsDate:1}};function getDayOfYear(n,e){const t=toDate(n,e?.in);return differenceInCalendarDays(t,startOfYear(t))+1}function getISOWeek(n,e){const t=toDate(n,e?.in),r=+startOfISOWeek(t)-+startOfISOWeekYear(t);return Math.round(r/millisecondsInWeek)+1}function getWeekYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear(),a=getDefaultOptions$1(),s=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=constructFrom(e?.in||n,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const l=startOfWeek(o,e),c=constructFrom(e?.in||n,0);c.setFullYear(r,0,s),c.setHours(0,0,0,0);const d=startOfWeek(c,e);return+t>=+l?r+1:+t>=+d?r:r-1}function startOfWeekYear(n,e){const t=getDefaultOptions$1(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=getWeekYear(n,e),s=constructFrom(e?.in||n,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),startOfWeek(s,e)}function getWeek(n,e){const t=toDate(n,e?.in),r=+startOfWeek(t,e)-+startOfWeekYear(t,e);return Math.round(r/millisecondsInWeek)+1}function addLeadingZeros(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const lightFormatters={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return addLeadingZeros(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):addLeadingZeros(t+1,2)},d(n,e){return addLeadingZeros(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];default:return t==="am"?"a.m.":"p.m."}},h(n,e){return addLeadingZeros(n.getHours()%12||12,e.length)},H(n,e){return addLeadingZeros(n.getHours(),e.length)},m(n,e){return addLeadingZeros(n.getMinutes(),e.length)},s(n,e){return addLeadingZeros(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return addLeadingZeros(a,e.length)}},dayPeriodEnum={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},formatters={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return lightFormatters.y(n,e)},Y:function(n,e,t,r){const a=getWeekYear(n,r),s=a>0?a:1-a;if(e==="YY"){const o=s%100;return addLeadingZeros(o,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):addLeadingZeros(s,e.length)},R:function(n,e){const t=getISOWeekYear(n);return addLeadingZeros(t,e.length)},u:function(n,e){const t=n.getFullYear();return addLeadingZeros(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return addLeadingZeros(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return addLeadingZeros(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return lightFormatters.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return addLeadingZeros(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=getWeek(n,r);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):addLeadingZeros(a,e.length)},I:function(n,e,t){const r=getISOWeek(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):addLeadingZeros(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):lightFormatters.d(n,e)},D:function(n,e,t){const r=getDayOfYear(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):addLeadingZeros(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return addLeadingZeros(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return addLeadingZeros(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return addLeadingZeros(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const a=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(r===12?a=dayPeriodEnum.noon:r===0?a=dayPeriodEnum.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(r>=17?a=dayPeriodEnum.evening:r>=12?a=dayPeriodEnum.afternoon:r>=4?a=dayPeriodEnum.morning:a=dayPeriodEnum.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return lightFormatters.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):lightFormatters.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):addLeadingZeros(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):addLeadingZeros(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):lightFormatters.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):lightFormatters.s(n,e)},S:function(n,e){return lightFormatters.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return formatTimezoneWithOptionalMinutes(r);case"XXXX":case"XX":return formatTimezone(r);default:return formatTimezone(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return formatTimezoneWithOptionalMinutes(r);case"xxxx":case"xx":return formatTimezone(r);default:return formatTimezone(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(r,":");default:return"GMT"+formatTimezone(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(r,":");default:return"GMT"+formatTimezone(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return addLeadingZeros(r,e.length)},T:function(n,e,t){return addLeadingZeros(+n,e.length)}};function formatTimezoneShort(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),s=r%60;return s===0?t+String(a):t+String(a)+e+addLeadingZeros(s,2)}function formatTimezoneWithOptionalMinutes(n,e){return n%60===0?(n>0?"-":"+")+addLeadingZeros(Math.abs(n)/60,2):formatTimezone(n,e)}function formatTimezone(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=addLeadingZeros(Math.trunc(r/60),2),s=addLeadingZeros(r%60,2);return t+a+e+s}const dateLongFormatter=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},timeLongFormatter=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},dateTimeLongFormatter=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return dateLongFormatter(n,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",dateLongFormatter(r,e)).replace("{{time}}",timeLongFormatter(a,e))},longFormatters={p:timeLongFormatter,P:dateTimeLongFormatter},dayOfYearTokenRE=/^D+$/,weekYearTokenRE=/^Y+$/,throwTokens=["D","DD","YY","YYYY"];function isProtectedDayOfYearToken(n){return dayOfYearTokenRE.test(n)}function isProtectedWeekYearToken(n){return weekYearTokenRE.test(n)}function warnOrThrowProtectedError(n,e,t){const r=message(n,e,t);if(console.warn(r),throwTokens.includes(n))throw new RangeError(r)}function message(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const formattingTokensRegExp$1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp$1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp$1=/^'([^]*?)'?$/,doubleQuoteRegExp$1=/''/g,unescapedLatinCharacterRegExp$1=/[a-zA-Z]/;function format(n,e,t){const r=getDefaultOptions$1(),a=t?.locale??r.locale??enUS,s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=toDate(n,t?.in);if(!isValid(l))throw new RangeError("Invalid time value");let c=e.match(longFormattingTokensRegExp$1).map(f=>{const p=f[0];if(p==="p"||p==="P"){const b=longFormatters[p];return b(f,a.formatLong)}return f}).join("").match(formattingTokensRegExp$1).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const p=f[0];if(p==="'")return{isToken:!1,value:cleanEscapedString$1(f)};if(formatters[p])return{isToken:!0,value:f};if(p.match(unescapedLatinCharacterRegExp$1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(c=a.localize.preprocessor(l,c));const d={firstWeekContainsDate:s,weekStartsOn:o,locale:a};return c.map(f=>{if(!f.isToken)return f.value;const p=f.value;(!t?.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(p)||!t?.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(p))&&warnOrThrowProtectedError(p,e,String(n));const b=formatters[p[0]];return b(l,p,a.localize,d)}).join("")}function cleanEscapedString$1(n){const e=n.match(escapedStringRegExp$1);return e?e[1].replace(doubleQuoteRegExp$1,"'"):n}function getDefaultOptions(){return Object.assign({},getDefaultOptions$1())}function getISODay(n,e){const t=toDate(n,e?.in).getDay();return t===0?7:t}function transpose(n,e){const t=isConstructor(e)?new e(0):constructFrom(e,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}function isConstructor(n){return typeof n=="function"&&n.prototype?.constructor===n}const TIMEZONE_UNIT_PRIORITY=10;class Setter{subPriority=0;validate(e,t){return!0}}class ValueSetter extends Setter{constructor(e,t,r,a,s){super(),this.value=e,this.validateValue=t,this.setValue=r,this.priority=a,s&&(this.subPriority=s)}validate(e,t){return this.validateValue(e,this.value,t)}set(e,t,r){return this.setValue(e,t,this.value,r)}}class DateTimezoneSetter extends Setter{priority=TIMEZONE_UNIT_PRIORITY;subPriority=-1;constructor(e,t){super(),this.context=e||(r=>constructFrom(t,r))}set(e,t){return t.timestampIsSet?e:constructFrom(e,transpose(e,this.context))}}class Parser{run(e,t,r,a){const s=this.parse(e,t,r,a);return s?{setter:new ValueSetter(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(e,t,r){return!0}}class EraParser extends Parser{priority=140;parse(e,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,t,r){return t.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["R","u","t","T"]}const numericPatterns={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},timezonePatterns={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function mapValue(n,e){return n&&{value:e(n.value),rest:n.rest}}function parseNumericPattern(n,e){const t=e.match(n);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function parseTimezonePattern(n,e){const t=e.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,o=t[5]?parseInt(t[5],10):0;return{value:r*(a*millisecondsInHour+s*millisecondsInMinute+o*millisecondsInSecond),rest:e.slice(t[0].length)}}function parseAnyDigitsSigned(n){return parseNumericPattern(numericPatterns.anyDigitsSigned,n)}function parseNDigits(n,e){switch(n){case 1:return parseNumericPattern(numericPatterns.singleDigit,e);case 2:return parseNumericPattern(numericPatterns.twoDigits,e);case 3:return parseNumericPattern(numericPatterns.threeDigits,e);case 4:return parseNumericPattern(numericPatterns.fourDigits,e);default:return parseNumericPattern(new RegExp("^\\d{1,"+n+"}"),e)}}function parseNDigitsSigned(n,e){switch(n){case 1:return parseNumericPattern(numericPatterns.singleDigitSigned,e);case 2:return parseNumericPattern(numericPatterns.twoDigitsSigned,e);case 3:return parseNumericPattern(numericPatterns.threeDigitsSigned,e);case 4:return parseNumericPattern(numericPatterns.fourDigitsSigned,e);default:return parseNumericPattern(new RegExp("^-?\\d{1,"+n+"}"),e)}}function dayPeriodEnumToHours(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;default:return 0}}function normalizeTwoDigitYear(n,e){const t=e>0,r=t?e:1-e;let a;if(r<=50)a=n||100;else{const s=r+50,o=Math.trunc(s/100)*100,l=n>=s%100;a=n+o-(l?100:0)}return t?a:1-a}function isLeapYearIndex$1(n){return n%400===0||n%4===0&&n%100!==0}class YearParser extends Parser{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(e,t,r){const a=s=>({year:s,isTwoDigitYear:t==="yy"});switch(t){case"y":return mapValue(parseNDigits(4,e),a);case"yo":return mapValue(r.ordinalNumber(e,{unit:"year"}),a);default:return mapValue(parseNDigits(t.length,e),a)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r){const a=e.getFullYear();if(r.isTwoDigitYear){const o=normalizeTwoDigitYear(r.year,a);return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}const s=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(s,0,1),e.setHours(0,0,0,0),e}}class LocalWeekYearParser extends Parser{priority=130;parse(e,t,r){const a=s=>({year:s,isTwoDigitYear:t==="YY"});switch(t){case"Y":return mapValue(parseNDigits(4,e),a);case"Yo":return mapValue(r.ordinalNumber(e,{unit:"year"}),a);default:return mapValue(parseNDigits(t.length,e),a)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r,a){const s=getWeekYear(e,a);if(r.isTwoDigitYear){const l=normalizeTwoDigitYear(r.year,s);return e.setFullYear(l,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),startOfWeek(e,a)}const o=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(o,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),startOfWeek(e,a)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class ISOWeekYearParser extends Parser{priority=130;parse(e,t){return parseNDigitsSigned(t==="R"?4:t.length,e)}set(e,t,r){const a=constructFrom(e,0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),startOfISOWeek(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class ExtendedYearParser extends Parser{priority=130;parse(e,t){return parseNDigitsSigned(t==="u"?4:t.length,e)}set(e,t,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class QuarterParser extends Parser{priority=120;parse(e,t,r){switch(t){case"Q":case"QQ":return parseNDigits(t.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class StandAloneQuarterParser extends Parser{priority=120;parse(e,t,r){switch(t){case"q":case"qq":return parseNDigits(t.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class MonthParser extends Parser{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(e,t,r){const a=s=>s-1;switch(t){case"M":return mapValue(parseNumericPattern(numericPatterns.month,e),a);case"MM":return mapValue(parseNDigits(2,e),a);case"Mo":return mapValue(r.ordinalNumber(e,{unit:"month"}),a);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class StandAloneMonthParser extends Parser{priority=110;parse(e,t,r){const a=s=>s-1;switch(t){case"L":return mapValue(parseNumericPattern(numericPatterns.month,e),a);case"LL":return mapValue(parseNDigits(2,e),a);case"Lo":return mapValue(r.ordinalNumber(e,{unit:"month"}),a);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function setWeek(n,e,t){const r=toDate(n,t?.in),a=getWeek(r,t)-e;return r.setDate(r.getDate()-a*7),toDate(r,t?.in)}class LocalWeekParser extends Parser{priority=100;parse(e,t,r){switch(t){case"w":return parseNumericPattern(numericPatterns.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r,a){return startOfWeek(setWeek(e,r,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function setISOWeek(n,e,t){const r=toDate(n,t?.in),a=getISOWeek(r,t)-e;return r.setDate(r.getDate()-a*7),r}class ISOWeekParser extends Parser{priority=100;parse(e,t,r){switch(t){case"I":return parseNumericPattern(numericPatterns.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r){return startOfISOWeek(setISOWeek(e,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const DAYS_IN_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31],DAYS_IN_MONTH_LEAP_YEAR=[31,29,31,30,31,30,31,31,30,31,30,31];class DateParser extends Parser{priority=90;subPriority=1;parse(e,t,r){switch(t){case"d":return parseNumericPattern(numericPatterns.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return parseNDigits(t.length,e)}}validate(e,t){const r=e.getFullYear(),a=isLeapYearIndex$1(r),s=e.getMonth();return a?t>=1&&t<=DAYS_IN_MONTH_LEAP_YEAR[s]:t>=1&&t<=DAYS_IN_MONTH[s]}set(e,t,r){return e.setDate(r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class DayOfYearParser extends Parser{priority=90;subpriority=1;parse(e,t,r){switch(t){case"D":case"DD":return parseNumericPattern(numericPatterns.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return parseNDigits(t.length,e)}}validate(e,t){const r=e.getFullYear();return isLeapYearIndex$1(r)?t>=1&&t<=366:t>=1&&t<=365}set(e,t,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function setDay(n,e,t){const r=getDefaultOptions$1(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=toDate(n,t?.in),o=s.getDay(),c=(e%7+7)%7,d=7-a,f=e<0||e>6?e-(o+d)%7:(c+d)%7-(o+d)%7;return addDays(s,f,t)}class DayParser extends Parser{priority=90;parse(e,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["D","i","e","c","t","T"]}class LocalDayParser extends Parser{priority=90;parse(e,t,r,a){const s=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(t){case"e":case"ee":return mapValue(parseNDigits(t.length,e),s);case"eo":return mapValue(r.ordinalNumber(e,{unit:"day"}),s);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class StandAloneLocalDayParser extends Parser{priority=90;parse(e,t,r,a){const s=o=>{const l=Math.floor((o-1)/7)*7;return(o+a.weekStartsOn+6)%7+l};switch(t){case"c":case"cc":return mapValue(parseNDigits(t.length,e),s);case"co":return mapValue(r.ordinalNumber(e,{unit:"day"}),s);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function setISODay(n,e,t){const r=toDate(n,t?.in),a=getISODay(r,t),s=e-a;return addDays(r,s,t)}class ISODayParser extends Parser{priority=90;parse(e,t,r){const a=s=>s===0?7:s;switch(t){case"i":case"ii":return parseNDigits(t.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return mapValue(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a);case"iiiii":return mapValue(r.day(e,{width:"narrow",context:"formatting"}),a);case"iiiiii":return mapValue(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a);default:return mapValue(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a)}}validate(e,t){return t>=1&&t<=7}set(e,t,r){return e=setISODay(e,r),e.setHours(0,0,0,0),e}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class AMPMParser extends Parser{priority=80;parse(e,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["b","B","H","k","t","T"]}class AMPMMidnightParser extends Parser{priority=80;parse(e,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["a","B","H","k","t","T"]}class DayPeriodParser extends Parser{priority=80;parse(e,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["a","b","t","T"]}class Hour1to12Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"h":return parseNumericPattern(numericPatterns.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=12}set(e,t,r){const a=e.getHours()>=12;return a&&r<12?e.setHours(r+12,0,0,0):!a&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["H","K","k","t","T"]}class Hour0to23Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"H":return parseNumericPattern(numericPatterns.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=23}set(e,t,r){return e.setHours(r,0,0,0),e}incompatibleTokens=["a","b","h","K","k","t","T"]}class Hour0To11Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"K":return parseNumericPattern(numericPatterns.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["h","H","k","t","T"]}class Hour1To24Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"k":return parseNumericPattern(numericPatterns.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=24}set(e,t,r){const a=r<=24?r%24:r;return e.setHours(a,0,0,0),e}incompatibleTokens=["a","b","h","H","K","t","T"]}class MinuteParser extends Parser{priority=60;parse(e,t,r){switch(t){case"m":return parseNumericPattern(numericPatterns.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setMinutes(r,0,0),e}incompatibleTokens=["t","T"]}class SecondParser extends Parser{priority=50;parse(e,t,r){switch(t){case"s":return parseNumericPattern(numericPatterns.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setSeconds(r,0),e}incompatibleTokens=["t","T"]}class FractionOfSecondParser extends Parser{priority=30;parse(e,t){const r=a=>Math.trunc(a*Math.pow(10,-t.length+3));return mapValue(parseNDigits(t.length,e),r)}set(e,t,r){return e.setMilliseconds(r),e}incompatibleTokens=["t","T"]}class ISOTimezoneWithZParser extends Parser{priority=10;parse(e,t){switch(t){case"X":return parseTimezonePattern(timezonePatterns.basicOptionalMinutes,e);case"XX":return parseTimezonePattern(timezonePatterns.basic,e);case"XXXX":return parseTimezonePattern(timezonePatterns.basicOptionalSeconds,e);case"XXXXX":return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds,e);default:return parseTimezonePattern(timezonePatterns.extended,e)}}set(e,t,r){return t.timestampIsSet?e:constructFrom(e,e.getTime()-getTimezoneOffsetInMilliseconds(e)-r)}incompatibleTokens=["t","T","x"]}class ISOTimezoneParser extends Parser{priority=10;parse(e,t){switch(t){case"x":return parseTimezonePattern(timezonePatterns.basicOptionalMinutes,e);case"xx":return parseTimezonePattern(timezonePatterns.basic,e);case"xxxx":return parseTimezonePattern(timezonePatterns.basicOptionalSeconds,e);case"xxxxx":return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds,e);default:return parseTimezonePattern(timezonePatterns.extended,e)}}set(e,t,r){return t.timestampIsSet?e:constructFrom(e,e.getTime()-getTimezoneOffsetInMilliseconds(e)-r)}incompatibleTokens=["t","T","X"]}class TimestampSecondsParser extends Parser{priority=40;parse(e){return parseAnyDigitsSigned(e)}set(e,t,r){return[constructFrom(e,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class TimestampMillisecondsParser extends Parser{priority=20;parse(e){return parseAnyDigitsSigned(e)}set(e,t,r){return[constructFrom(e,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const parsers={G:new EraParser,y:new YearParser,Y:new LocalWeekYearParser,R:new ISOWeekYearParser,u:new ExtendedYearParser,Q:new QuarterParser,q:new StandAloneQuarterParser,M:new MonthParser,L:new StandAloneMonthParser,w:new LocalWeekParser,I:new ISOWeekParser,d:new DateParser,D:new DayOfYearParser,E:new DayParser,e:new LocalDayParser,c:new StandAloneLocalDayParser,i:new ISODayParser,a:new AMPMParser,b:new AMPMMidnightParser,B:new DayPeriodParser,h:new Hour1to12Parser,H:new Hour0to23Parser,K:new Hour0To11Parser,k:new Hour1To24Parser,m:new MinuteParser,s:new SecondParser,S:new FractionOfSecondParser,X:new ISOTimezoneWithZParser,x:new ISOTimezoneParser,t:new TimestampSecondsParser,T:new TimestampMillisecondsParser},formattingTokensRegExp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp=/^'([^]*?)'?$/,doubleQuoteRegExp=/''/g,notWhitespaceRegExp=/\S/,unescapedLatinCharacterRegExp=/[a-zA-Z]/;function parse(n,e,t,r){const a=()=>constructFrom(r?.in||t,NaN),s=getDefaultOptions(),o=r?.locale??s.locale??enUS,l=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,c=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(!e)return n?a():toDate(t,r?.in);const d={firstWeekContainsDate:l,weekStartsOn:c,locale:o},f=[new DateTimezoneSetter(r?.in,t)],p=e.match(longFormattingTokensRegExp).map(E=>{const A=E[0];if(A in longFormatters){const O=longFormatters[A];return O(E,o.formatLong)}return E}).join("").match(formattingTokensRegExp),b=[];for(let E of p){!r?.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(E)&&warnOrThrowProtectedError(E,e,n),!r?.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(E)&&warnOrThrowProtectedError(E,e,n);const A=E[0],O=parsers[A];if(O){const{incompatibleTokens:$}=O;if(Array.isArray($)){const L=b.find(B=>$.includes(B.token)||B.token===A);if(L)throw new RangeError(`The format string mustn't contain \`${L.fullToken}\` and \`${E}\` at the same time`)}else if(O.incompatibleTokens==="*"&&b.length>0)throw new RangeError(`The format string mustn't contain \`${E}\` and any other token at the same time`);b.push({token:A,fullToken:E});const P=O.run(n,E,o.match,d);if(!P)return a();f.push(P.setter),n=P.rest}else{if(A.match(unescapedLatinCharacterRegExp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");if(E==="''"?E="'":A==="'"&&(E=cleanEscapedString(E)),n.indexOf(E)===0)n=n.slice(E.length);else return a()}}if(n.length>0&&notWhitespaceRegExp.test(n))return a();const v=f.map(E=>E.priority).sort((E,A)=>A-E).filter((E,A,O)=>O.indexOf(E)===A).map(E=>f.filter(A=>A.priority===E).sort((A,O)=>O.subPriority-A.subPriority)).map(E=>E[0]);let x=toDate(t,r?.in);if(isNaN(+x))return a();const _={};for(const E of v){if(!E.validate(x,d))return a();const A=E.set(x,_,d);Array.isArray(A)?(x=A[0],Object.assign(_,A[1])):x=A}return x}function cleanEscapedString(n){return n.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp,"'")}function startOfHour(n,e){const t=toDate(n,e?.in);return t.setMinutes(0,0,0),t}function startOfMinute(n,e){const t=toDate(n,e?.in);return t.setSeconds(0,0),t}function startOfSecond(n,e){const t=toDate(n,e?.in);return t.setMilliseconds(0),t}function parseISO(n,e){const t=()=>constructFrom(e?.in,NaN),r=e?.additionalDigits??2,a=splitDateString(n);let s;if(a.date){const d=parseYear(a.date,r);s=parseDate(d.restDateString,d.year)}if(!s||isNaN(+s))return t();const o=+s;let l=0,c;if(a.time&&(l=parseTime(a.time),isNaN(l)))return t();if(a.timezone){if(c=parseTimezone(a.timezone),isNaN(c))return t()}else{const d=new Date(o+l),f=toDate(0,e?.in);return f.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),f.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),f}return toDate(o+l+c,e?.in)}const patterns={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dateRegex=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,timeRegex=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,timezoneRegex=/^([+-])(\d{2})(?::?(\d{2}))?$/;function splitDateString(n){const e={},t=n.split(patterns.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],patterns.timeZoneDelimiter.test(e.date)&&(e.date=n.split(patterns.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const a=patterns.timezone.exec(r);a?(e.time=r.replace(a[1],""),e.timezone=a[1]):e.time=r}return e}function parseYear(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,s=r[2]?parseInt(r[2]):null;return{year:s===null?a:s*100,restDateString:n.slice((r[1]||r[2]).length)}}function parseDate(n,e){if(e===null)return new Date(NaN);const t=n.match(dateRegex);if(!t)return new Date(NaN);const r=!!t[4],a=parseDateUnit(t[1]),s=parseDateUnit(t[2])-1,o=parseDateUnit(t[3]),l=parseDateUnit(t[4]),c=parseDateUnit(t[5])-1;if(r)return validateWeekDate(e,l,c)?dayOfISOWeekYear(e,l,c):new Date(NaN);{const d=new Date(0);return!validateDate(e,s,o)||!validateDayOfYearDate(e,a)?new Date(NaN):(d.setUTCFullYear(e,s,Math.max(a,o)),d)}}function parseDateUnit(n){return n?parseInt(n):1}function parseTime(n){const e=n.match(timeRegex);if(!e)return NaN;const t=parseTimeUnit(e[1]),r=parseTimeUnit(e[2]),a=parseTimeUnit(e[3]);return validateTime(t,r,a)?t*millisecondsInHour+r*millisecondsInMinute+a*1e3:NaN}function parseTimeUnit(n){return n&&parseFloat(n.replace(",","."))||0}function parseTimezone(n){if(n==="Z")return 0;const e=n.match(timezoneRegex);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return validateTimezone(r,a)?t*(r*millisecondsInHour+a*millisecondsInMinute):NaN}function dayOfISOWeekYear(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const a=r.getUTCDay()||7,s=(e-1)*7+t+1-a;return r.setUTCDate(r.getUTCDate()+s),r}const daysInMonths=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(n){return n%400===0||n%4===0&&n%100!==0}function validateDate(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(daysInMonths[e]||(isLeapYearIndex(n)?29:28))}function validateDayOfYearDate(n,e){return e>=1&&e<=(isLeapYearIndex(n)?366:365)}function validateWeekDate(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function validateTime(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function validateTimezone(n,e){return e>=0&&e<=59}const FORMATS={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};adapters._date.override({_id:"date-fns",formats:function(){return FORMATS},parse:function(n,e){if(n===null||typeof n>"u")return null;const t=typeof n;return t==="number"||n instanceof Date?n=toDate(n):t==="string"&&(typeof e=="string"?n=parse(n,e,new Date,this.options):n=parseISO(n,this.options)),isValid(n)?n.getTime():null},format:function(n,e){return format(n,e,this.options)},add:function(n,e,t){switch(t){case"millisecond":return addMilliseconds(n,e);case"second":return addSeconds(n,e);case"minute":return addMinutes(n,e);case"hour":return addHours(n,e);case"day":return addDays(n,e);case"week":return addWeeks(n,e);case"month":return addMonths(n,e);case"quarter":return addQuarters(n,e);case"year":return addYears(n,e);default:return n}},diff:function(n,e,t){switch(t){case"millisecond":return differenceInMilliseconds(n,e);case"second":return differenceInSeconds(n,e);case"minute":return differenceInMinutes(n,e);case"hour":return differenceInHours(n,e);case"day":return differenceInDays(n,e);case"week":return differenceInWeeks(n,e);case"month":return differenceInMonths(n,e);case"quarter":return differenceInQuarters(n,e);case"year":return differenceInYears(n,e);default:return 0}},startOf:function(n,e,t){switch(e){case"second":return startOfSecond(n);case"minute":return startOfMinute(n);case"hour":return startOfHour(n);case"day":return startOfDay(n);case"week":return startOfWeek(n);case"isoWeek":return startOfWeek(n,{weekStartsOn:+t});case"month":return startOfMonth(n);case"quarter":return startOfQuarter(n);case"year":return startOfYear(n);default:return n}},endOf:function(n,e){switch(e){case"second":return endOfSecond(n);case"minute":return endOfMinute(n);case"hour":return endOfHour(n);case"day":return endOfDay(n);case"week":return endOfWeek(n);case"month":return endOfMonth(n);case"quarter":return endOfQuarter(n);case"year":return endOfYear(n);default:return n}}});Object.assign(window,{getCookie:function(n){getCookie(n)},$:jQuery$1,jQuery:jQuery$1,coldfront:{initStorageHistoryChart}});function initDocument(){for(const n of[initDateSelector,initSelect2,initForm,initDataTable,initBootstrap,initCharts,initHtmx])n()}document.readyState!=="loading"?initDocument():document.addEventListener("DOMContentLoaded",initDocument);
