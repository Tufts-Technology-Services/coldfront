function getDefaultExportFromCjs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function getAugmentedNamespace(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){var a=!1;try{a=this instanceof r}catch{}return a?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var a=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return n[r]}})}),t}var bootstrap$1={exports:{}},jquery$1={exports:{}};var jquery=jquery$1.exports,hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:jquery,function(e,t){var r=[],a=Object.getPrototypeOf,o=r.slice,s=r.flat?function(c){return r.flat.call(c)}:function(c){return r.concat.apply([],c)},l=r.push,u=r.indexOf,f={},d=f.toString,p=f.hasOwnProperty,v=p.toString,y=v.call(Object),x={},E=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},C=function(h){return h!=null&&h===h.window},A=e.document,M={type:!0,src:!0,nonce:!0,noModule:!0};function V(c,h,g){g=g||A;var _,w,D=g.createElement("script");if(D.text=c,h)for(_ in M)w=h[_]||h.getAttribute&&h.getAttribute(_),w&&D.setAttribute(_,w);g.head.appendChild(D).parentNode.removeChild(D)}function R(c){return c==null?c+"":typeof c=="object"||typeof c=="function"?f[d.call(c)]||"object":typeof c}var q="3.7.1",Q=/HTML$/i,m=function(c,h){return new m.fn.init(c,h)};m.fn=m.prototype={jquery:q,constructor:m,length:0,toArray:function(){return o.call(this)},get:function(c){return c==null?o.call(this):c<0?this[c+this.length]:this[c]},pushStack:function(c){var h=m.merge(this.constructor(),c);return h.prevObject=this,h},each:function(c){return m.each(this,c)},map:function(c){return this.pushStack(m.map(this,function(h,g){return c.call(h,g,h)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(c,h){return(h+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(c,h){return h%2}))},eq:function(c){var h=this.length,g=+c+(c<0?h:0);return this.pushStack(g>=0&&g<h?[this[g]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:r.sort,splice:r.splice},m.extend=m.fn.extend=function(){var c,h,g,_,w,D,S=arguments[0]||{},F=1,L=arguments.length,W=!1;for(typeof S=="boolean"&&(W=S,S=arguments[F]||{},F++),typeof S!="object"&&!E(S)&&(S={}),F===L&&(S=this,F--);F<L;F++)if((c=arguments[F])!=null)for(h in c)_=c[h],!(h==="__proto__"||S===_)&&(W&&_&&(m.isPlainObject(_)||(w=Array.isArray(_)))?(g=S[h],w&&!Array.isArray(g)?D=[]:!w&&!m.isPlainObject(g)?D={}:D=g,w=!1,S[h]=m.extend(W,D,_)):_!==void 0&&(S[h]=_));return S},m.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(c){throw new Error(c)},noop:function(){},isPlainObject:function(c){var h,g;return!c||d.call(c)!=="[object Object]"?!1:(h=a(c),h?(g=p.call(h,"constructor")&&h.constructor,typeof g=="function"&&v.call(g)===y):!0)},isEmptyObject:function(c){var h;for(h in c)return!1;return!0},globalEval:function(c,h,g){V(c,{nonce:h&&h.nonce},g)},each:function(c,h){var g,_=0;if(ne(c))for(g=c.length;_<g&&h.call(c[_],_,c[_])!==!1;_++);else for(_ in c)if(h.call(c[_],_,c[_])===!1)break;return c},text:function(c){var h,g="",_=0,w=c.nodeType;if(!w)for(;h=c[_++];)g+=m.text(h);return w===1||w===11?c.textContent:w===9?c.documentElement.textContent:w===3||w===4?c.nodeValue:g},makeArray:function(c,h){var g=h||[];return c!=null&&(ne(Object(c))?m.merge(g,typeof c=="string"?[c]:c):l.call(g,c)),g},inArray:function(c,h,g){return h==null?-1:u.call(h,c,g)},isXMLDoc:function(c){var h=c&&c.namespaceURI,g=c&&(c.ownerDocument||c).documentElement;return!Q.test(h||g&&g.nodeName||"HTML")},merge:function(c,h){for(var g=+h.length,_=0,w=c.length;_<g;_++)c[w++]=h[_];return c.length=w,c},grep:function(c,h,g){for(var _,w=[],D=0,S=c.length,F=!g;D<S;D++)_=!h(c[D],D),_!==F&&w.push(c[D]);return w},map:function(c,h,g){var _,w,D=0,S=[];if(ne(c))for(_=c.length;D<_;D++)w=h(c[D],D,g),w!=null&&S.push(w);else for(D in c)w=h(c[D],D,g),w!=null&&S.push(w);return s(S)},guid:1,support:x}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=r[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(c,h){f["[object "+h+"]"]=h.toLowerCase()});function ne(c){var h=!!c&&"length"in c&&c.length,g=R(c);return E(c)||C(c)?!1:g==="array"||h===0||typeof h=="number"&&h>0&&h-1 in c}function re(c,h){return c.nodeName&&c.nodeName.toLowerCase()===h.toLowerCase()}var ge=r.pop,ve=r.sort,_e=r.splice,ue="[\\x20\\t\\r\\n\\f]",He=new RegExp("^"+ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ue+"+$","g");m.contains=function(c,h){var g=h&&h.parentNode;return c===g||!!(g&&g.nodeType===1&&(c.contains?c.contains(g):c.compareDocumentPosition&&c.compareDocumentPosition(g)&16))};var pe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Se(c,h){return h?c==="\0"?"�":c.slice(0,-1)+"\\"+c.charCodeAt(c.length-1).toString(16)+" ":"\\"+c}m.escapeSelector=function(c){return(c+"").replace(pe,Se)};var xe=A,je=l;(function(){var c,h,g,_,w,D=je,S,F,L,W,K,ee=m.expando,Y=0,ie=0,Ee=Zn(),Ne=Zn(),ke=Zn(),it=Zn(),Ze=function(k,j){return k===j&&(w=!0),0},$t="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",It="(?:\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Re="\\["+ue+"*("+It+")(?:"+ue+"*([*^$|!~]?=)"+ue+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+It+"))|)"+ue+"*\\]",mn=":("+It+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Re+")*)|.*)\\)|)",Fe=new RegExp(ue+"+","g"),Qe=new RegExp("^"+ue+"*,"+ue+"*"),Tn=new RegExp("^"+ue+"*([>+~]|"+ue+")"+ue+"*"),Wn=new RegExp(ue+"|>"),Lt=new RegExp(mn),jt=new RegExp("^"+It+"$"),Nt={ID:new RegExp("^#("+It+")"),CLASS:new RegExp("^\\.("+It+")"),TAG:new RegExp("^("+It+"|[*])"),ATTR:new RegExp("^"+Re),PSEUDO:new RegExp("^"+mn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ue+"*(even|odd|(([+-]|)(\\d*)n|)"+ue+"*(?:([+-]|)"+ue+"*(\\d+)|))"+ue+"*\\)|)","i"),bool:new RegExp("^(?:"+$t+")$","i"),needsContext:new RegExp("^"+ue+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ue+"*((?:-\\d)?\\d*)"+ue+"*\\)|)(?=[^-]|$)","i")},tn=/^(?:input|select|textarea|button)$/i,nn=/^h\d$/i,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wr=/[+~]/,Bt=new RegExp("\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\([^\\r\\n\\f])","g"),Rt=function(k,j){var U="0x"+k.slice(1)-65536;return j||(U<0?String.fromCharCode(U+65536):String.fromCharCode(U>>10|55296,U&1023|56320))},vn=function(){rn()},fi=er(function(k){return k.disabled===!0&&re(k,"fieldset")},{dir:"parentNode",next:"legend"});function Jn(){try{return S.activeElement}catch{}}try{D.apply(r=o.call(xe.childNodes),xe.childNodes),r[xe.childNodes.length].nodeType}catch{D={apply:function(j,U){je.apply(j,o.call(U))},call:function(j){je.apply(j,o.call(arguments,1))}}}function $e(k,j,U,X){var te,se,ce,be,fe,Ie,De,Ae=j&&j.ownerDocument,Me=j?j.nodeType:9;if(U=U||[],typeof k!="string"||!k||Me!==1&&Me!==9&&Me!==11)return U;if(!X&&(rn(j),j=j||S,L)){if(Me!==11&&(fe=vt.exec(k)))if(te=fe[1]){if(Me===9)if(ce=j.getElementById(te)){if(ce.id===te)return D.call(U,ce),U}else return U;else if(Ae&&(ce=Ae.getElementById(te))&&$e.contains(j,ce)&&ce.id===te)return D.call(U,ce),U}else{if(fe[2])return D.apply(U,j.getElementsByTagName(k)),U;if((te=fe[3])&&j.getElementsByClassName)return D.apply(U,j.getElementsByClassName(te)),U}if(!it[k+" "]&&(!W||!W.test(k))){if(De=k,Ae=j,Me===1&&(Wn.test(k)||Tn.test(k))){for(Ae=wr.test(k)&&qn(j.parentNode)||j,(Ae!=j||!x.scope)&&((be=j.getAttribute("id"))?be=m.escapeSelector(be):j.setAttribute("id",be=ee)),Ie=Wt(k),se=Ie.length;se--;)Ie[se]=(be?"#"+be:":scope")+" "+Pn(Ie[se]);De=Ie.join(",")}try{return D.apply(U,Ae.querySelectorAll(De)),U}catch{it(k,!0)}finally{be===ee&&j.removeAttribute("id")}}}return Xr(k.replace(He,"$1"),j,U,X)}function Zn(){var k=[];function j(U,X){return k.push(U+" ")>h.cacheLength&&delete j[k.shift()],j[U+" "]=X}return j}function _t(k){return k[ee]=!0,k}function An(k){var j=S.createElement("fieldset");try{return!!k(j)}catch{return!1}finally{j.parentNode&&j.parentNode.removeChild(j),j=null}}function di(k){return function(j){return re(j,"input")&&j.type===k}}function Vn(k){return function(j){return(re(j,"input")||re(j,"button"))&&j.type===k}}function On(k){return function(j){return"form"in j?j.parentNode&&j.disabled===!1?"label"in j?"label"in j.parentNode?j.parentNode.disabled===k:j.disabled===k:j.isDisabled===k||j.isDisabled!==!k&&fi(j)===k:j.disabled===k:"label"in j?j.disabled===k:!1}}function Ct(k){return _t(function(j){return j=+j,_t(function(U,X){for(var te,se=k([],U.length,j),ce=se.length;ce--;)U[te=se[ce]]&&(U[te]=!(X[te]=U[te]))})})}function qn(k){return k&&typeof k.getElementsByTagName<"u"&&k}function rn(k){var j,U=k?k.ownerDocument||k:xe;return U==S||U.nodeType!==9||!U.documentElement||(S=U,F=S.documentElement,L=!m.isXMLDoc(S),K=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&xe!=S&&(j=S.defaultView)&&j.top!==j&&j.addEventListener("unload",vn),x.getById=An(function(X){return F.appendChild(X).id=m.expando,!S.getElementsByName||!S.getElementsByName(m.expando).length}),x.disconnectedMatch=An(function(X){return K.call(X,"*")}),x.scope=An(function(){return S.querySelectorAll(":scope")}),x.cssHas=An(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),x.getById?(h.filter.ID=function(X){var te=X.replace(Bt,Rt);return function(se){return se.getAttribute("id")===te}},h.find.ID=function(X,te){if(typeof te.getElementById<"u"&&L){var se=te.getElementById(X);return se?[se]:[]}}):(h.filter.ID=function(X){var te=X.replace(Bt,Rt);return function(se){var ce=typeof se.getAttributeNode<"u"&&se.getAttributeNode("id");return ce&&ce.value===te}},h.find.ID=function(X,te){if(typeof te.getElementById<"u"&&L){var se,ce,be,fe=te.getElementById(X);if(fe){if(se=fe.getAttributeNode("id"),se&&se.value===X)return[fe];for(be=te.getElementsByName(X),ce=0;fe=be[ce++];)if(se=fe.getAttributeNode("id"),se&&se.value===X)return[fe]}return[]}}),h.find.TAG=function(X,te){return typeof te.getElementsByTagName<"u"?te.getElementsByTagName(X):te.querySelectorAll(X)},h.find.CLASS=function(X,te){if(typeof te.getElementsByClassName<"u"&&L)return te.getElementsByClassName(X)},W=[],An(function(X){var te;F.appendChild(X).innerHTML="<a id='"+ee+"' href='' disabled='disabled'></a><select id='"+ee+"-\r\\' disabled='disabled'><option selected=''></option></select>",X.querySelectorAll("[selected]").length||W.push("\\["+ue+"*(?:value|"+$t+")"),X.querySelectorAll("[id~="+ee+"-]").length||W.push("~="),X.querySelectorAll("a#"+ee+"+*").length||W.push(".#.+[+~]"),X.querySelectorAll(":checked").length||W.push(":checked"),te=S.createElement("input"),te.setAttribute("type","hidden"),X.appendChild(te).setAttribute("name","D"),F.appendChild(X).disabled=!0,X.querySelectorAll(":disabled").length!==2&&W.push(":enabled",":disabled"),te=S.createElement("input"),te.setAttribute("name",""),X.appendChild(te),X.querySelectorAll("[name='']").length||W.push("\\["+ue+"*name"+ue+"*="+ue+`*(?:''|"")`)}),x.cssHas||W.push(":has"),W=W.length&&new RegExp(W.join("|")),Ze=function(X,te){if(X===te)return w=!0,0;var se=!X.compareDocumentPosition-!te.compareDocumentPosition;return se||(se=(X.ownerDocument||X)==(te.ownerDocument||te)?X.compareDocumentPosition(te):1,se&1||!x.sortDetached&&te.compareDocumentPosition(X)===se?X===S||X.ownerDocument==xe&&$e.contains(xe,X)?-1:te===S||te.ownerDocument==xe&&$e.contains(xe,te)?1:_?u.call(_,X)-u.call(_,te):0:se&4?-1:1)}),S}$e.matches=function(k,j){return $e(k,null,null,j)},$e.matchesSelector=function(k,j){if(rn(k),L&&!it[j+" "]&&(!W||!W.test(j)))try{var U=K.call(k,j);if(U||x.disconnectedMatch||k.document&&k.document.nodeType!==11)return U}catch{it(j,!0)}return $e(j,S,null,[k]).length>0},$e.contains=function(k,j){return(k.ownerDocument||k)!=S&&rn(k),m.contains(k,j)},$e.attr=function(k,j){(k.ownerDocument||k)!=S&&rn(k);var U=h.attrHandle[j.toLowerCase()],X=U&&p.call(h.attrHandle,j.toLowerCase())?U(k,j,!L):void 0;return X!==void 0?X:k.getAttribute(j)},$e.error=function(k){throw new Error("Syntax error, unrecognized expression: "+k)},m.uniqueSort=function(k){var j,U=[],X=0,te=0;if(w=!x.sortStable,_=!x.sortStable&&o.call(k,0),ve.call(k,Ze),w){for(;j=k[te++];)j===k[te]&&(X=U.push(te));for(;X--;)_e.call(k,U[X],1)}return _=null,k},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(o.apply(this)))},h=m.expr={cacheLength:50,createPseudo:_t,match:Nt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(k){return k[1]=k[1].replace(Bt,Rt),k[3]=(k[3]||k[4]||k[5]||"").replace(Bt,Rt),k[2]==="~="&&(k[3]=" "+k[3]+" "),k.slice(0,4)},CHILD:function(k){return k[1]=k[1].toLowerCase(),k[1].slice(0,3)==="nth"?(k[3]||$e.error(k[0]),k[4]=+(k[4]?k[5]+(k[6]||1):2*(k[3]==="even"||k[3]==="odd")),k[5]=+(k[7]+k[8]||k[3]==="odd")):k[3]&&$e.error(k[0]),k},PSEUDO:function(k){var j,U=!k[6]&&k[2];return Nt.CHILD.test(k[0])?null:(k[3]?k[2]=k[4]||k[5]||"":U&&Lt.test(U)&&(j=Wt(U,!0))&&(j=U.indexOf(")",U.length-j)-U.length)&&(k[0]=k[0].slice(0,j),k[2]=U.slice(0,j)),k.slice(0,3))}},filter:{TAG:function(k){var j=k.replace(Bt,Rt).toLowerCase();return k==="*"?function(){return!0}:function(U){return re(U,j)}},CLASS:function(k){var j=Ee[k+" "];return j||(j=new RegExp("(^|"+ue+")"+k+"("+ue+"|$)"))&&Ee(k,function(U){return j.test(typeof U.className=="string"&&U.className||typeof U.getAttribute<"u"&&U.getAttribute("class")||"")})},ATTR:function(k,j,U){return function(X){var te=$e.attr(X,k);return te==null?j==="!=":j?(te+="",j==="="?te===U:j==="!="?te!==U:j==="^="?U&&te.indexOf(U)===0:j==="*="?U&&te.indexOf(U)>-1:j==="$="?U&&te.slice(-U.length)===U:j==="~="?(" "+te.replace(Fe," ")+" ").indexOf(U)>-1:j==="|="?te===U||te.slice(0,U.length+1)===U+"-":!1):!0}},CHILD:function(k,j,U,X,te){var se=k.slice(0,3)!=="nth",ce=k.slice(-4)!=="last",be=j==="of-type";return X===1&&te===0?function(fe){return!!fe.parentNode}:function(fe,Ie,De){var Ae,Me,ye,Xe,at,nt=se!==ce?"nextSibling":"previousSibling",bt=fe.parentNode,Ft=be&&fe.nodeName.toLowerCase(),kn=!De&&!be,Je=!1;if(bt){if(se){for(;nt;){for(ye=fe;ye=ye[nt];)if(be?re(ye,Ft):ye.nodeType===1)return!1;at=nt=k==="only"&&!at&&"nextSibling"}return!0}if(at=[ce?bt.firstChild:bt.lastChild],ce&&kn){for(Me=bt[ee]||(bt[ee]={}),Ae=Me[k]||[],Xe=Ae[0]===Y&&Ae[1],Je=Xe&&Ae[2],ye=Xe&&bt.childNodes[Xe];ye=++Xe&&ye&&ye[nt]||(Je=Xe=0)||at.pop();)if(ye.nodeType===1&&++Je&&ye===fe){Me[k]=[Y,Xe,Je];break}}else if(kn&&(Me=fe[ee]||(fe[ee]={}),Ae=Me[k]||[],Xe=Ae[0]===Y&&Ae[1],Je=Xe),Je===!1)for(;(ye=++Xe&&ye&&ye[nt]||(Je=Xe=0)||at.pop())&&!((be?re(ye,Ft):ye.nodeType===1)&&++Je&&(kn&&(Me=ye[ee]||(ye[ee]={}),Me[k]=[Y,Je]),ye===fe)););return Je-=te,Je===X||Je%X===0&&Je/X>=0}}},PSEUDO:function(k,j){var U,X=h.pseudos[k]||h.setFilters[k.toLowerCase()]||$e.error("unsupported pseudo: "+k);return X[ee]?X(j):X.length>1?(U=[k,k,"",j],h.setFilters.hasOwnProperty(k.toLowerCase())?_t(function(te,se){for(var ce,be=X(te,j),fe=be.length;fe--;)ce=u.call(te,be[fe]),te[ce]=!(se[ce]=be[fe])}):function(te){return X(te,0,U)}):X}},pseudos:{not:_t(function(k){var j=[],U=[],X=an(k.replace(He,"$1"));return X[ee]?_t(function(te,se,ce,be){for(var fe,Ie=X(te,null,be,[]),De=te.length;De--;)(fe=Ie[De])&&(te[De]=!(se[De]=fe))}):function(te,se,ce){return j[0]=te,X(j,null,ce,U),j[0]=null,!U.pop()}}),has:_t(function(k){return function(j){return $e(k,j).length>0}}),contains:_t(function(k){return k=k.replace(Bt,Rt),function(j){return(j.textContent||m.text(j)).indexOf(k)>-1}}),lang:_t(function(k){return jt.test(k||"")||$e.error("unsupported lang: "+k),k=k.replace(Bt,Rt).toLowerCase(),function(j){var U;do if(U=L?j.lang:j.getAttribute("xml:lang")||j.getAttribute("lang"))return U=U.toLowerCase(),U===k||U.indexOf(k+"-")===0;while((j=j.parentNode)&&j.nodeType===1);return!1}}),target:function(k){var j=e.location&&e.location.hash;return j&&j.slice(1)===k.id},root:function(k){return k===F},focus:function(k){return k===Jn()&&S.hasFocus()&&!!(k.type||k.href||~k.tabIndex)},enabled:On(!1),disabled:On(!0),checked:function(k){return re(k,"input")&&!!k.checked||re(k,"option")&&!!k.selected},selected:function(k){return k.parentNode&&k.parentNode.selectedIndex,k.selected===!0},empty:function(k){for(k=k.firstChild;k;k=k.nextSibling)if(k.nodeType<6)return!1;return!0},parent:function(k){return!h.pseudos.empty(k)},header:function(k){return nn.test(k.nodeName)},input:function(k){return tn.test(k.nodeName)},button:function(k){return re(k,"input")&&k.type==="button"||re(k,"button")},text:function(k){var j;return re(k,"input")&&k.type==="text"&&((j=k.getAttribute("type"))==null||j.toLowerCase()==="text")},first:Ct(function(){return[0]}),last:Ct(function(k,j){return[j-1]}),eq:Ct(function(k,j,U){return[U<0?U+j:U]}),even:Ct(function(k,j){for(var U=0;U<j;U+=2)k.push(U);return k}),odd:Ct(function(k,j){for(var U=1;U<j;U+=2)k.push(U);return k}),lt:Ct(function(k,j,U){var X;for(U<0?X=U+j:U>j?X=j:X=U;--X>=0;)k.push(X);return k}),gt:Ct(function(k,j,U){for(var X=U<0?U+j:U;++X<j;)k.push(X);return k})}},h.pseudos.nth=h.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[c]=di(c);for(c in{submit:!0,reset:!0})h.pseudos[c]=Vn(c);function Yr(){}Yr.prototype=h.filters=h.pseudos,h.setFilters=new Yr;function Wt(k,j){var U,X,te,se,ce,be,fe,Ie=Ne[k+" "];if(Ie)return j?0:Ie.slice(0);for(ce=k,be=[],fe=h.preFilter;ce;){(!U||(X=Qe.exec(ce)))&&(X&&(ce=ce.slice(X[0].length)||ce),be.push(te=[])),U=!1,(X=Tn.exec(ce))&&(U=X.shift(),te.push({value:U,type:X[0].replace(He," ")}),ce=ce.slice(U.length));for(se in h.filter)(X=Nt[se].exec(ce))&&(!fe[se]||(X=fe[se](X)))&&(U=X.shift(),te.push({value:U,type:se,matches:X}),ce=ce.slice(U.length));if(!U)break}return j?ce.length:ce?$e.error(k):Ne(k,be).slice(0)}function Pn(k){for(var j=0,U=k.length,X="";j<U;j++)X+=k[j].value;return X}function er(k,j,U){var X=j.dir,te=j.next,se=te||X,ce=U&&se==="parentNode",be=ie++;return j.first?function(fe,Ie,De){for(;fe=fe[X];)if(fe.nodeType===1||ce)return k(fe,Ie,De);return!1}:function(fe,Ie,De){var Ae,Me,ye=[Y,be];if(De){for(;fe=fe[X];)if((fe.nodeType===1||ce)&&k(fe,Ie,De))return!0}else for(;fe=fe[X];)if(fe.nodeType===1||ce)if(Me=fe[ee]||(fe[ee]={}),te&&re(fe,te))fe=fe[X]||fe;else{if((Ae=Me[se])&&Ae[0]===Y&&Ae[1]===be)return ye[2]=Ae[2];if(Me[se]=ye,ye[2]=k(fe,Ie,De))return!0}return!1}}function Dr(k){return k.length>1?function(j,U,X){for(var te=k.length;te--;)if(!k[te](j,U,X))return!1;return!0}:k[0]}function hi(k,j,U){for(var X=0,te=j.length;X<te;X++)$e(k,j[X],U);return U}function tr(k,j,U,X,te){for(var se,ce=[],be=0,fe=k.length,Ie=j!=null;be<fe;be++)(se=k[be])&&(!U||U(se,X,te))&&(ce.push(se),Ie&&j.push(be));return ce}function Er(k,j,U,X,te,se){return X&&!X[ee]&&(X=Er(X)),te&&!te[ee]&&(te=Er(te,se)),_t(function(ce,be,fe,Ie){var De,Ae,Me,ye,Xe=[],at=[],nt=be.length,bt=ce||hi(j||"*",fe.nodeType?[fe]:fe,[]),Ft=k&&(ce||!j)?tr(bt,Xe,k,fe,Ie):bt;if(U?(ye=te||(ce?k:nt||X)?[]:be,U(Ft,ye,fe,Ie)):ye=Ft,X)for(De=tr(ye,at),X(De,[],fe,Ie),Ae=De.length;Ae--;)(Me=De[Ae])&&(ye[at[Ae]]=!(Ft[at[Ae]]=Me));if(ce){if(te||k){if(te){for(De=[],Ae=ye.length;Ae--;)(Me=ye[Ae])&&De.push(Ft[Ae]=Me);te(null,ye=[],De,Ie)}for(Ae=ye.length;Ae--;)(Me=ye[Ae])&&(De=te?u.call(ce,Me):Xe[Ae])>-1&&(ce[De]=!(be[De]=Me))}}else ye=tr(ye===be?ye.splice(nt,ye.length):ye),te?te(null,be,ye,Ie):D.apply(be,ye)})}function Cr(k){for(var j,U,X,te=k.length,se=h.relative[k[0].type],ce=se||h.relative[" "],be=se?1:0,fe=er(function(Ae){return Ae===j},ce,!0),Ie=er(function(Ae){return u.call(j,Ae)>-1},ce,!0),De=[function(Ae,Me,ye){var Xe=!se&&(ye||Me!=g)||((j=Me).nodeType?fe(Ae,Me,ye):Ie(Ae,Me,ye));return j=null,Xe}];be<te;be++)if(U=h.relative[k[be].type])De=[er(Dr(De),U)];else{if(U=h.filter[k[be].type].apply(null,k[be].matches),U[ee]){for(X=++be;X<te&&!h.relative[k[X].type];X++);return Er(be>1&&Dr(De),be>1&&Pn(k.slice(0,be-1).concat({value:k[be-2].type===" "?"*":""})).replace(He,"$1"),U,be<X&&Cr(k.slice(be,X)),X<te&&Cr(k=k.slice(X)),X<te&&Pn(k))}De.push(U)}return Dr(De)}function _n(k,j){var U=j.length>0,X=k.length>0,te=function(se,ce,be,fe,Ie){var De,Ae,Me,ye=0,Xe="0",at=se&&[],nt=[],bt=g,Ft=se||X&&h.find.TAG("*",Ie),kn=Y+=bt==null?1:Math.random()||.1,Je=Ft.length;for(Ie&&(g=ce==S||ce||Ie);Xe!==Je&&(De=Ft[Xe])!=null;Xe++){if(X&&De){for(Ae=0,!ce&&De.ownerDocument!=S&&(rn(De),be=!L);Me=k[Ae++];)if(Me(De,ce||S,be)){D.call(fe,De);break}Ie&&(Y=kn)}U&&((De=!Me&&De)&&ye--,se&&at.push(De))}if(ye+=Xe,U&&Xe!==ye){for(Ae=0;Me=j[Ae++];)Me(at,nt,ce,be);if(se){if(ye>0)for(;Xe--;)at[Xe]||nt[Xe]||(nt[Xe]=ge.call(fe));nt=tr(nt)}D.apply(fe,nt),Ie&&!se&&nt.length>0&&ye+j.length>1&&m.uniqueSort(fe)}return Ie&&(Y=kn,g=bt),at};return U?_t(te):te}function an(k,j){var U,X=[],te=[],se=ke[k+" "];if(!se){for(j||(j=Wt(k)),U=j.length;U--;)se=Cr(j[U]),se[ee]?X.push(se):te.push(se);se=ke(k,_n(te,X)),se.selector=k}return se}function Xr(k,j,U,X){var te,se,ce,be,fe,Ie=typeof k=="function"&&k,De=!X&&Wt(k=Ie.selector||k);if(U=U||[],De.length===1){if(se=De[0]=De[0].slice(0),se.length>2&&(ce=se[0]).type==="ID"&&j.nodeType===9&&L&&h.relative[se[1].type]){if(j=(h.find.ID(ce.matches[0].replace(Bt,Rt),j)||[])[0],j)Ie&&(j=j.parentNode);else return U;k=k.slice(se.shift().value.length)}for(te=Nt.needsContext.test(k)?0:se.length;te--&&(ce=se[te],!h.relative[be=ce.type]);)if((fe=h.find[be])&&(X=fe(ce.matches[0].replace(Bt,Rt),wr.test(se[0].type)&&qn(j.parentNode)||j))){if(se.splice(te,1),k=X.length&&Pn(se),!k)return D.apply(U,X),U;break}}return(Ie||an(k,De))(X,j,!L,U,!j||wr.test(k)&&qn(j.parentNode)||j),U}x.sortStable=ee.split("").sort(Ze).join("")===ee,rn(),x.sortDetached=An(function(k){return k.compareDocumentPosition(S.createElement("fieldset"))&1}),m.find=$e,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,$e.compile=an,$e.select=Xr,$e.setDocument=rn,$e.tokenize=Wt,$e.escape=m.escapeSelector,$e.getText=m.text,$e.isXML=m.isXMLDoc,$e.selectors=m.expr,$e.support=m.support,$e.uniqueSort=m.uniqueSort})();var Le=function(c,h,g){for(var _=[],w=g!==void 0;(c=c[h])&&c.nodeType!==9;)if(c.nodeType===1){if(w&&m(c).is(g))break;_.push(c)}return _},ct=function(c,h){for(var g=[];c;c=c.nextSibling)c.nodeType===1&&c!==h&&g.push(c);return g},Ge=m.expr.match.needsContext,We=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function et(c,h,g){return E(h)?m.grep(c,function(_,w){return!!h.call(_,w,_)!==g}):h.nodeType?m.grep(c,function(_){return _===h!==g}):typeof h!="string"?m.grep(c,function(_){return u.call(h,_)>-1!==g}):m.filter(h,c,g)}m.filter=function(c,h,g){var _=h[0];return g&&(c=":not("+c+")"),h.length===1&&_.nodeType===1?m.find.matchesSelector(_,c)?[_]:[]:m.find.matches(c,m.grep(h,function(w){return w.nodeType===1}))},m.fn.extend({find:function(c){var h,g,_=this.length,w=this;if(typeof c!="string")return this.pushStack(m(c).filter(function(){for(h=0;h<_;h++)if(m.contains(w[h],this))return!0}));for(g=this.pushStack([]),h=0;h<_;h++)m.find(c,w[h],g);return _>1?m.uniqueSort(g):g},filter:function(c){return this.pushStack(et(this,c||[],!1))},not:function(c){return this.pushStack(et(this,c||[],!0))},is:function(c){return!!et(this,typeof c=="string"&&Ge.test(c)?m(c):c||[],!1).length}});var rt,Ke=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Pe=m.fn.init=function(c,h,g){var _,w;if(!c)return this;if(g=g||rt,typeof c=="string")if(c[0]==="<"&&c[c.length-1]===">"&&c.length>=3?_=[null,c,null]:_=Ke.exec(c),_&&(_[1]||!h))if(_[1]){if(h=h instanceof m?h[0]:h,m.merge(this,m.parseHTML(_[1],h&&h.nodeType?h.ownerDocument||h:A,!0)),We.test(_[1])&&m.isPlainObject(h))for(_ in h)E(this[_])?this[_](h[_]):this.attr(_,h[_]);return this}else return w=A.getElementById(_[2]),w&&(this[0]=w,this.length=1),this;else return!h||h.jquery?(h||g).find(c):this.constructor(h).find(c);else{if(c.nodeType)return this[0]=c,this.length=1,this;if(E(c))return g.ready!==void 0?g.ready(c):c(m)}return m.makeArray(c,this)};Pe.prototype=m.fn,rt=m(A);var ze=/^(?:parents|prev(?:Until|All))/,tt={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(c){var h=m(c,this),g=h.length;return this.filter(function(){for(var _=0;_<g;_++)if(m.contains(this,h[_]))return!0})},closest:function(c,h){var g,_=0,w=this.length,D=[],S=typeof c!="string"&&m(c);if(!Ge.test(c)){for(;_<w;_++)for(g=this[_];g&&g!==h;g=g.parentNode)if(g.nodeType<11&&(S?S.index(g)>-1:g.nodeType===1&&m.find.matchesSelector(g,c))){D.push(g);break}}return this.pushStack(D.length>1?m.uniqueSort(D):D)},index:function(c){return c?typeof c=="string"?u.call(m(c),this[0]):u.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,h){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(c,h))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}});function sn(c,h){for(;(c=c[h])&&c.nodeType!==1;);return c}m.each({parent:function(c){var h=c.parentNode;return h&&h.nodeType!==11?h:null},parents:function(c){return Le(c,"parentNode")},parentsUntil:function(c,h,g){return Le(c,"parentNode",g)},next:function(c){return sn(c,"nextSibling")},prev:function(c){return sn(c,"previousSibling")},nextAll:function(c){return Le(c,"nextSibling")},prevAll:function(c){return Le(c,"previousSibling")},nextUntil:function(c,h,g){return Le(c,"nextSibling",g)},prevUntil:function(c,h,g){return Le(c,"previousSibling",g)},siblings:function(c){return ct((c.parentNode||{}).firstChild,c)},children:function(c){return ct(c.firstChild)},contents:function(c){return c.contentDocument!=null&&a(c.contentDocument)?c.contentDocument:(re(c,"template")&&(c=c.content||c),m.merge([],c.childNodes))}},function(c,h){m.fn[c]=function(g,_){var w=m.map(this,h,g);return c.slice(-5)!=="Until"&&(_=g),_&&typeof _=="string"&&(w=m.filter(_,w)),this.length>1&&(tt[c]||m.uniqueSort(w),ze.test(c)&&w.reverse()),this.pushStack(w)}});var gt=/[^\x20\t\r\n\f]+/g;function Mn(c){var h={};return m.each(c.match(gt)||[],function(g,_){h[_]=!0}),h}m.Callbacks=function(c){c=typeof c=="string"?Mn(c):m.extend({},c);var h,g,_,w,D=[],S=[],F=-1,L=function(){for(w=w||c.once,_=h=!0;S.length;F=-1)for(g=S.shift();++F<D.length;)D[F].apply(g[0],g[1])===!1&&c.stopOnFalse&&(F=D.length,g=!1);c.memory||(g=!1),h=!1,w&&(g?D=[]:D="")},W={add:function(){return D&&(g&&!h&&(F=D.length-1,S.push(g)),(function K(ee){m.each(ee,function(Y,ie){E(ie)?(!c.unique||!W.has(ie))&&D.push(ie):ie&&ie.length&&R(ie)!=="string"&&K(ie)})})(arguments),g&&!h&&L()),this},remove:function(){return m.each(arguments,function(K,ee){for(var Y;(Y=m.inArray(ee,D,Y))>-1;)D.splice(Y,1),Y<=F&&F--}),this},has:function(K){return K?m.inArray(K,D)>-1:D.length>0},empty:function(){return D&&(D=[]),this},disable:function(){return w=S=[],D=g="",this},disabled:function(){return!D},lock:function(){return w=S=[],!g&&!h&&(D=g=""),this},locked:function(){return!!w},fireWith:function(K,ee){return w||(ee=ee||[],ee=[K,ee.slice?ee.slice():ee],S.push(ee),h||L()),this},fire:function(){return W.fireWith(this,arguments),this},fired:function(){return!!_}};return W};function yt(c){return c}function bn(c){throw c}function Un(c,h,g,_){var w;try{c&&E(w=c.promise)?w.call(c).done(h).fail(g):c&&E(w=c.then)?w.call(c,h,g):h.apply(void 0,[c].slice(_))}catch(D){g.apply(void 0,[D])}}m.extend({Deferred:function(c){var h=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],g="pending",_={state:function(){return g},always:function(){return w.done(arguments).fail(arguments),this},catch:function(D){return _.then(null,D)},pipe:function(){var D=arguments;return m.Deferred(function(S){m.each(h,function(F,L){var W=E(D[L[4]])&&D[L[4]];w[L[1]](function(){var K=W&&W.apply(this,arguments);K&&E(K.promise)?K.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[L[0]+"With"](this,W?[K]:arguments)})}),D=null}).promise()},then:function(D,S,F){var L=0;function W(K,ee,Y,ie){return function(){var Ee=this,Ne=arguments,ke=function(){var Ze,$t;if(!(K<L)){if(Ze=Y.apply(Ee,Ne),Ze===ee.promise())throw new TypeError("Thenable self-resolution");$t=Ze&&(typeof Ze=="object"||typeof Ze=="function")&&Ze.then,E($t)?ie?$t.call(Ze,W(L,ee,yt,ie),W(L,ee,bn,ie)):(L++,$t.call(Ze,W(L,ee,yt,ie),W(L,ee,bn,ie),W(L,ee,yt,ee.notifyWith))):(Y!==yt&&(Ee=void 0,Ne=[Ze]),(ie||ee.resolveWith)(Ee,Ne))}},it=ie?ke:function(){try{ke()}catch(Ze){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(Ze,it.error),K+1>=L&&(Y!==bn&&(Ee=void 0,Ne=[Ze]),ee.rejectWith(Ee,Ne))}};K?it():(m.Deferred.getErrorHook?it.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&(it.error=m.Deferred.getStackHook()),e.setTimeout(it))}}return m.Deferred(function(K){h[0][3].add(W(0,K,E(F)?F:yt,K.notifyWith)),h[1][3].add(W(0,K,E(D)?D:yt)),h[2][3].add(W(0,K,E(S)?S:bn))}).promise()},promise:function(D){return D!=null?m.extend(D,_):_}},w={};return m.each(h,function(D,S){var F=S[2],L=S[5];_[S[1]]=F.add,L&&F.add(function(){g=L},h[3-D][2].disable,h[3-D][3].disable,h[0][2].lock,h[0][3].lock),F.add(S[3].fire),w[S[0]]=function(){return w[S[0]+"With"](this===w?void 0:this,arguments),this},w[S[0]+"With"]=F.fireWith}),_.promise(w),c&&c.call(w,w),w},when:function(c){var h=arguments.length,g=h,_=Array(g),w=o.call(arguments),D=m.Deferred(),S=function(F){return function(L){_[F]=this,w[F]=arguments.length>1?o.call(arguments):L,--h||D.resolveWith(_,w)}};if(h<=1&&(Un(c,D.done(S(g)).resolve,D.reject,!h),D.state()==="pending"||E(w[g]&&w[g].then)))return D.then();for(;g--;)Un(w[g],S(g),D.reject);return D.promise()}});var yn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(c,h){e.console&&e.console.warn&&c&&yn.test(c.name)&&e.console.warn("jQuery.Deferred exception: "+c.message,c.stack,h)},m.readyException=function(c){e.setTimeout(function(){throw c})};var $n=m.Deferred();m.fn.ready=function(c){return $n.then(c).catch(function(h){m.readyException(h)}),this},m.extend({isReady:!1,readyWait:1,ready:function(c){(c===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(c!==!0&&--m.readyWait>0)&&$n.resolveWith(A,[m]))}}),m.ready.then=$n.then;function qt(){A.removeEventListener("DOMContentLoaded",qt),e.removeEventListener("load",qt),m.ready()}A.readyState==="complete"||A.readyState!=="loading"&&!A.documentElement.doScroll?e.setTimeout(m.ready):(A.addEventListener("DOMContentLoaded",qt),e.addEventListener("load",qt));var ot=function(c,h,g,_,w,D,S){var F=0,L=c.length,W=g==null;if(R(g)==="object"){w=!0;for(F in g)ot(c,h,F,g[F],!0,D,S)}else if(_!==void 0&&(w=!0,E(_)||(S=!0),W&&(S?(h.call(c,_),h=null):(W=h,h=function(K,ee,Y){return W.call(m(K),Y)})),h))for(;F<L;F++)h(c[F],g,S?_:_.call(c[F],F,h(c[F],g)));return w?c:W?h.call(c):L?h(c[0],g):D},xt=/^-ms-/,ir=/-([a-z])/g;function ln(c,h){return h.toUpperCase()}function Ye(c){return c.replace(xt,"ms-").replace(ir,ln)}var St=function(c){return c.nodeType===1||c.nodeType===9||!+c.nodeType};function Ut(){this.expando=m.expando+Ut.uid++}Ut.uid=1,Ut.prototype={cache:function(c){var h=c[this.expando];return h||(h={},St(c)&&(c.nodeType?c[this.expando]=h:Object.defineProperty(c,this.expando,{value:h,configurable:!0}))),h},set:function(c,h,g){var _,w=this.cache(c);if(typeof h=="string")w[Ye(h)]=g;else for(_ in h)w[Ye(_)]=h[_];return w},get:function(c,h){return h===void 0?this.cache(c):c[this.expando]&&c[this.expando][Ye(h)]},access:function(c,h,g){return h===void 0||h&&typeof h=="string"&&g===void 0?this.get(c,h):(this.set(c,h,g),g!==void 0?g:h)},remove:function(c,h){var g,_=c[this.expando];if(_!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(Ye):(h=Ye(h),h=h in _?[h]:h.match(gt)||[]),g=h.length;g--;)delete _[h[g]];(h===void 0||m.isEmptyObject(_))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var h=c[this.expando];return h!==void 0&&!m.isEmptyObject(h)}};var me=new Ut,st=new Ut,zn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ar=/[A-Z]/g;function Yn(c){return c==="true"?!0:c==="false"?!1:c==="null"?null:c===+c+""?+c:zn.test(c)?JSON.parse(c):c}function Tt(c,h,g){var _;if(g===void 0&&c.nodeType===1)if(_="data-"+h.replace(ar,"-$&").toLowerCase(),g=c.getAttribute(_),typeof g=="string"){try{g=Yn(g)}catch{}st.set(c,h,g)}else g=void 0;return g}m.extend({hasData:function(c){return st.hasData(c)||me.hasData(c)},data:function(c,h,g){return st.access(c,h,g)},removeData:function(c,h){st.remove(c,h)},_data:function(c,h,g){return me.access(c,h,g)},_removeData:function(c,h){me.remove(c,h)}}),m.fn.extend({data:function(c,h){var g,_,w,D=this[0],S=D&&D.attributes;if(c===void 0){if(this.length&&(w=st.get(D),D.nodeType===1&&!me.get(D,"hasDataAttrs"))){for(g=S.length;g--;)S[g]&&(_=S[g].name,_.indexOf("data-")===0&&(_=Ye(_.slice(5)),Tt(D,_,w[_])));me.set(D,"hasDataAttrs",!0)}return w}return typeof c=="object"?this.each(function(){st.set(this,c)}):ot(this,function(F){var L;if(D&&F===void 0)return L=st.get(D,c),L!==void 0||(L=Tt(D,c),L!==void 0)?L:void 0;this.each(function(){st.set(this,c,F)})},null,h,arguments.length>1,null,!0)},removeData:function(c){return this.each(function(){st.remove(this,c)})}}),m.extend({queue:function(c,h,g){var _;if(c)return h=(h||"fx")+"queue",_=me.get(c,h),g&&(!_||Array.isArray(g)?_=me.access(c,h,m.makeArray(g)):_.push(g)),_||[]},dequeue:function(c,h){h=h||"fx";var g=m.queue(c,h),_=g.length,w=g.shift(),D=m._queueHooks(c,h),S=function(){m.dequeue(c,h)};w==="inprogress"&&(w=g.shift(),_--),w&&(h==="fx"&&g.unshift("inprogress"),delete D.stop,w.call(c,S,D)),!_&&D&&D.empty.fire()},_queueHooks:function(c,h){var g=h+"queueHooks";return me.get(c,g)||me.access(c,g,{empty:m.Callbacks("once memory").add(function(){me.remove(c,[h+"queue",g])})})}}),m.fn.extend({queue:function(c,h){var g=2;return typeof c!="string"&&(h=c,c="fx",g--),arguments.length<g?m.queue(this[0],c):h===void 0?this:this.each(function(){var _=m.queue(this,c,h);m._queueHooks(this,c),c==="fx"&&_[0]!=="inprogress"&&m.dequeue(this,c)})},dequeue:function(c){return this.each(function(){m.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,h){var g,_=1,w=m.Deferred(),D=this,S=this.length,F=function(){--_||w.resolveWith(D,[D])};for(typeof c!="string"&&(h=c,c=void 0),c=c||"fx";S--;)g=me.get(D[S],c+"queueHooks"),g&&g.empty&&(_++,g.empty.add(F));return F(),w.promise(h)}});var Xn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,zt=new RegExp("^(?:([+-])=|)("+Xn+")([a-z%]*)$","i"),wt=["Top","Right","Bottom","Left"],Ht=A.documentElement,Ve=function(c){return m.contains(c.ownerDocument,c)},In={composed:!0};Ht.getRootNode&&(Ve=function(c){return m.contains(c.ownerDocument,c)||c.getRootNode(In)===c.ownerDocument});var Dt=function(c,h){return c=h||c,c.style.display==="none"||c.style.display===""&&Ve(c)&&m.css(c,"display")==="none"};function un(c,h,g,_){var w,D,S=20,F=_?function(){return _.cur()}:function(){return m.css(c,h,"")},L=F(),W=g&&g[3]||(m.cssNumber[h]?"":"px"),K=c.nodeType&&(m.cssNumber[h]||W!=="px"&&+L)&&zt.exec(m.css(c,h));if(K&&K[3]!==W){for(L=L/2,W=W||K[3],K=+L||1;S--;)m.style(c,h,K+W),(1-D)*(1-(D=F()/L||.5))<=0&&(S=0),K=K/D;K=K*2,m.style(c,h,K+W),g=g||[]}return g&&(K=+K||+L||0,w=g[1]?K+(g[1]+1)*g[2]:+g[2],_&&(_.unit=W,_.start=K,_.end=w)),w}var cn={};function Ln(c){var h,g=c.ownerDocument,_=c.nodeName,w=cn[_];return w||(h=g.body.appendChild(g.createElement(_)),w=m.css(h,"display"),h.parentNode.removeChild(h),w==="none"&&(w="block"),cn[_]=w,w)}function lt(c,h){for(var g,_,w=[],D=0,S=c.length;D<S;D++)_=c[D],_.style&&(g=_.style.display,h?(g==="none"&&(w[D]=me.get(_,"display")||null,w[D]||(_.style.display="")),_.style.display===""&&Dt(_)&&(w[D]=Ln(_))):g!=="none"&&(w[D]="none",me.set(_,"display",g)));for(D=0;D<S;D++)w[D]!=null&&(c[D].style.display=w[D]);return c}m.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(c){return typeof c=="boolean"?c?this.show():this.hide():this.each(function(){Dt(this)?m(this).show():m(this).hide()})}});var Yt=/^(?:checkbox|radio)$/i,Gn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,O=/^$|^module$|\/(?:java|ecma)script/i;(function(){var c=A.createDocumentFragment(),h=c.appendChild(A.createElement("div")),g=A.createElement("input");g.setAttribute("type","radio"),g.setAttribute("checked","checked"),g.setAttribute("name","t"),h.appendChild(g),x.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",x.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",x.option=!!h.lastChild})();var P={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};P.tbody=P.tfoot=P.colgroup=P.caption=P.thead,P.th=P.td,x.option||(P.optgroup=P.option=[1,"<select multiple='multiple'>","</select>"]);function B(c,h){var g;return typeof c.getElementsByTagName<"u"?g=c.getElementsByTagName(h||"*"):typeof c.querySelectorAll<"u"?g=c.querySelectorAll(h||"*"):g=[],h===void 0||h&&re(c,h)?m.merge([c],g):g}function J(c,h){for(var g=0,_=c.length;g<_;g++)me.set(c[g],"globalEval",!h||me.get(h[g],"globalEval"))}var oe=/<|&#?\w+;/;function le(c,h,g,_,w){for(var D,S,F,L,W,K,ee=h.createDocumentFragment(),Y=[],ie=0,Ee=c.length;ie<Ee;ie++)if(D=c[ie],D||D===0)if(R(D)==="object")m.merge(Y,D.nodeType?[D]:D);else if(!oe.test(D))Y.push(h.createTextNode(D));else{for(S=S||ee.appendChild(h.createElement("div")),F=(Gn.exec(D)||["",""])[1].toLowerCase(),L=P[F]||P._default,S.innerHTML=L[1]+m.htmlPrefilter(D)+L[2],K=L[0];K--;)S=S.lastChild;m.merge(Y,S.childNodes),S=ee.firstChild,S.textContent=""}for(ee.textContent="",ie=0;D=Y[ie++];){if(_&&m.inArray(D,_)>-1){w&&w.push(D);continue}if(W=Ve(D),S=B(ee.appendChild(D),"script"),W&&J(S),g)for(K=0;D=S[K++];)O.test(D.type||"")&&g.push(D)}return ee}var Oe=/^([^.]*)(?:\.(.+)|)/;function de(){return!0}function Te(){return!1}function he(c,h,g,_,w,D){var S,F;if(typeof h=="object"){typeof g!="string"&&(_=_||g,g=void 0);for(F in h)he(c,F,g,_,h[F],D);return c}if(_==null&&w==null?(w=g,_=g=void 0):w==null&&(typeof g=="string"?(w=_,_=void 0):(w=_,_=g,g=void 0)),w===!1)w=Te;else if(!w)return c;return D===1&&(S=w,w=function(L){return m().off(L),S.apply(this,arguments)},w.guid=S.guid||(S.guid=m.guid++)),c.each(function(){m.event.add(this,h,w,_,g)})}m.event={global:{},add:function(c,h,g,_,w){var D,S,F,L,W,K,ee,Y,ie,Ee,Ne,ke=me.get(c);if(St(c))for(g.handler&&(D=g,g=D.handler,w=D.selector),w&&m.find.matchesSelector(Ht,w),g.guid||(g.guid=m.guid++),(L=ke.events)||(L=ke.events=Object.create(null)),(S=ke.handle)||(S=ke.handle=function(it){return typeof m<"u"&&m.event.triggered!==it.type?m.event.dispatch.apply(c,arguments):void 0}),h=(h||"").match(gt)||[""],W=h.length;W--;)F=Oe.exec(h[W])||[],ie=Ne=F[1],Ee=(F[2]||"").split(".").sort(),ie&&(ee=m.event.special[ie]||{},ie=(w?ee.delegateType:ee.bindType)||ie,ee=m.event.special[ie]||{},K=m.extend({type:ie,origType:Ne,data:_,handler:g,guid:g.guid,selector:w,needsContext:w&&m.expr.match.needsContext.test(w),namespace:Ee.join(".")},D),(Y=L[ie])||(Y=L[ie]=[],Y.delegateCount=0,(!ee.setup||ee.setup.call(c,_,Ee,S)===!1)&&c.addEventListener&&c.addEventListener(ie,S)),ee.add&&(ee.add.call(c,K),K.handler.guid||(K.handler.guid=g.guid)),w?Y.splice(Y.delegateCount++,0,K):Y.push(K),m.event.global[ie]=!0)},remove:function(c,h,g,_,w){var D,S,F,L,W,K,ee,Y,ie,Ee,Ne,ke=me.hasData(c)&&me.get(c);if(!(!ke||!(L=ke.events))){for(h=(h||"").match(gt)||[""],W=h.length;W--;){if(F=Oe.exec(h[W])||[],ie=Ne=F[1],Ee=(F[2]||"").split(".").sort(),!ie){for(ie in L)m.event.remove(c,ie+h[W],g,_,!0);continue}for(ee=m.event.special[ie]||{},ie=(_?ee.delegateType:ee.bindType)||ie,Y=L[ie]||[],F=F[2]&&new RegExp("(^|\\.)"+Ee.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=D=Y.length;D--;)K=Y[D],(w||Ne===K.origType)&&(!g||g.guid===K.guid)&&(!F||F.test(K.namespace))&&(!_||_===K.selector||_==="**"&&K.selector)&&(Y.splice(D,1),K.selector&&Y.delegateCount--,ee.remove&&ee.remove.call(c,K));S&&!Y.length&&((!ee.teardown||ee.teardown.call(c,Ee,ke.handle)===!1)&&m.removeEvent(c,ie,ke.handle),delete L[ie])}m.isEmptyObject(L)&&me.remove(c,"handle events")}},dispatch:function(c){var h,g,_,w,D,S,F=new Array(arguments.length),L=m.event.fix(c),W=(me.get(this,"events")||Object.create(null))[L.type]||[],K=m.event.special[L.type]||{};for(F[0]=L,h=1;h<arguments.length;h++)F[h]=arguments[h];if(L.delegateTarget=this,!(K.preDispatch&&K.preDispatch.call(this,L)===!1)){for(S=m.event.handlers.call(this,L,W),h=0;(w=S[h++])&&!L.isPropagationStopped();)for(L.currentTarget=w.elem,g=0;(D=w.handlers[g++])&&!L.isImmediatePropagationStopped();)(!L.rnamespace||D.namespace===!1||L.rnamespace.test(D.namespace))&&(L.handleObj=D,L.data=D.data,_=((m.event.special[D.origType]||{}).handle||D.handler).apply(w.elem,F),_!==void 0&&(L.result=_)===!1&&(L.preventDefault(),L.stopPropagation()));return K.postDispatch&&K.postDispatch.call(this,L),L.result}},handlers:function(c,h){var g,_,w,D,S,F=[],L=h.delegateCount,W=c.target;if(L&&W.nodeType&&!(c.type==="click"&&c.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(c.type==="click"&&W.disabled===!0)){for(D=[],S={},g=0;g<L;g++)_=h[g],w=_.selector+" ",S[w]===void 0&&(S[w]=_.needsContext?m(w,this).index(W)>-1:m.find(w,this,null,[W]).length),S[w]&&D.push(_);D.length&&F.push({elem:W,handlers:D})}}return W=this,L<h.length&&F.push({elem:W,handlers:h.slice(L)}),F},addProp:function(c,h){Object.defineProperty(m.Event.prototype,c,{enumerable:!0,configurable:!0,get:E(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[c]},set:function(g){Object.defineProperty(this,c,{enumerable:!0,configurable:!0,writable:!0,value:g})}})},fix:function(c){return c[m.expando]?c:new m.Event(c)},special:{load:{noBubble:!0},click:{setup:function(c){var h=this||c;return Yt.test(h.type)&&h.click&&re(h,"input")&&we(h,"click",!0),!1},trigger:function(c){var h=this||c;return Yt.test(h.type)&&h.click&&re(h,"input")&&we(h,"click"),!0},_default:function(c){var h=c.target;return Yt.test(h.type)&&h.click&&re(h,"input")&&me.get(h,"click")||re(h,"a")}},beforeunload:{postDispatch:function(c){c.result!==void 0&&c.originalEvent&&(c.originalEvent.returnValue=c.result)}}}};function we(c,h,g){if(!g){me.get(c,h)===void 0&&m.event.add(c,h,de);return}me.set(c,h,!1),m.event.add(c,h,{namespace:!1,handler:function(_){var w,D=me.get(this,h);if(_.isTrigger&1&&this[h]){if(D)(m.event.special[h]||{}).delegateType&&_.stopPropagation();else if(D=o.call(arguments),me.set(this,h,D),this[h](),w=me.get(this,h),me.set(this,h,!1),D!==w)return _.stopImmediatePropagation(),_.preventDefault(),w}else D&&(me.set(this,h,m.event.trigger(D[0],D.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=de)}})}m.removeEvent=function(c,h,g){c.removeEventListener&&c.removeEventListener(h,g)},m.Event=function(c,h){if(!(this instanceof m.Event))return new m.Event(c,h);c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||c.defaultPrevented===void 0&&c.returnValue===!1?de:Te,this.target=c.target&&c.target.nodeType===3?c.target.parentNode:c.target,this.currentTarget=c.currentTarget,this.relatedTarget=c.relatedTarget):this.type=c,h&&m.extend(this,h),this.timeStamp=c&&c.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var c=this.originalEvent;this.isDefaultPrevented=de,c&&!this.isSimulated&&c.preventDefault()},stopPropagation:function(){var c=this.originalEvent;this.isPropagationStopped=de,c&&!this.isSimulated&&c.stopPropagation()},stopImmediatePropagation:function(){var c=this.originalEvent;this.isImmediatePropagationStopped=de,c&&!this.isSimulated&&c.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(c,h){function g(_){if(A.documentMode){var w=me.get(this,"handle"),D=m.event.fix(_);D.type=_.type==="focusin"?"focus":"blur",D.isSimulated=!0,w(_),D.target===D.currentTarget&&w(D)}else m.event.simulate(h,_.target,m.event.fix(_))}m.event.special[c]={setup:function(){var _;if(we(this,c,!0),A.documentMode)_=me.get(this,h),_||this.addEventListener(h,g),me.set(this,h,(_||0)+1);else return!1},trigger:function(){return we(this,c),!0},teardown:function(){var _;if(A.documentMode)_=me.get(this,h)-1,_?me.set(this,h,_):(this.removeEventListener(h,g),me.remove(this,h));else return!1},_default:function(_){return me.get(_.target,c)},delegateType:h},m.event.special[h]={setup:function(){var _=this.ownerDocument||this.document||this,w=A.documentMode?this:_,D=me.get(w,h);D||(A.documentMode?this.addEventListener(h,g):_.addEventListener(c,g,!0)),me.set(w,h,(D||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,w=A.documentMode?this:_,D=me.get(w,h)-1;D?me.set(w,h,D):(A.documentMode?this.removeEventListener(h,g):_.removeEventListener(c,g,!0),me.remove(w,h))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(c,h){m.event.special[c]={delegateType:h,bindType:h,handle:function(g){var _,w=this,D=g.relatedTarget,S=g.handleObj;return(!D||D!==w&&!m.contains(w,D))&&(g.type=S.origType,_=S.handler.apply(this,arguments),g.type=h),_}}}),m.fn.extend({on:function(c,h,g,_){return he(this,c,h,g,_)},one:function(c,h,g,_){return he(this,c,h,g,_,1)},off:function(c,h,g){var _,w;if(c&&c.preventDefault&&c.handleObj)return _=c.handleObj,m(c.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof c=="object"){for(w in c)this.off(w,h,c[w]);return this}return(h===!1||typeof h=="function")&&(g=h,h=void 0),g===!1&&(g=Te),this.each(function(){m.event.remove(this,c,g,h)})}});var Be=/<script|<style|<link/i,mt=/checked\s*(?:[^=]|=\s*.checked.)/i,ft=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Xt(c,h){return re(c,"table")&&re(h.nodeType!==11?h:h.firstChild,"tr")&&m(c).children("tbody")[0]||c}function Gt(c){return c.type=(c.getAttribute("type")!==null)+"/"+c.type,c}function or(c){return(c.type||"").slice(0,5)==="true/"?c.type=c.type.slice(5):c.removeAttribute("type"),c}function xn(c,h){var g,_,w,D,S,F,L;if(h.nodeType===1){if(me.hasData(c)&&(D=me.get(c),L=D.events,L)){me.remove(h,"handle events");for(w in L)for(g=0,_=L[w].length;g<_;g++)m.event.add(h,w,L[w][g])}st.hasData(c)&&(S=st.access(c),F=m.extend({},S),st.set(h,F))}}function Nn(c,h){var g=h.nodeName.toLowerCase();g==="input"&&Yt.test(c.type)?h.checked=c.checked:(g==="input"||g==="textarea")&&(h.defaultValue=c.defaultValue)}function Kt(c,h,g,_){h=s(h);var w,D,S,F,L,W,K=0,ee=c.length,Y=ee-1,ie=h[0],Ee=E(ie);if(Ee||ee>1&&typeof ie=="string"&&!x.checkClone&&mt.test(ie))return c.each(function(Ne){var ke=c.eq(Ne);Ee&&(h[0]=ie.call(this,Ne,ke.html())),Kt(ke,h,g,_)});if(ee&&(w=le(h,c[0].ownerDocument,!1,c,_),D=w.firstChild,w.childNodes.length===1&&(w=D),D||_)){for(S=m.map(B(w,"script"),Gt),F=S.length;K<ee;K++)L=w,K!==Y&&(L=m.clone(L,!0,!0),F&&m.merge(S,B(L,"script"))),g.call(c[K],L,K);if(F)for(W=S[S.length-1].ownerDocument,m.map(S,or),K=0;K<F;K++)L=S[K],O.test(L.type||"")&&!me.access(L,"globalEval")&&m.contains(W,L)&&(L.src&&(L.type||"").toLowerCase()!=="module"?m._evalUrl&&!L.noModule&&m._evalUrl(L.src,{nonce:L.nonce||L.getAttribute("nonce")},W):V(L.textContent.replace(ft,""),L,W))}return c}function Rn(c,h,g){for(var _,w=h?m.filter(h,c):c,D=0;(_=w[D])!=null;D++)!g&&_.nodeType===1&&m.cleanData(B(_)),_.parentNode&&(g&&Ve(_)&&J(B(_,"script")),_.parentNode.removeChild(_));return c}m.extend({htmlPrefilter:function(c){return c},clone:function(c,h,g){var _,w,D,S,F=c.cloneNode(!0),L=Ve(c);if(!x.noCloneChecked&&(c.nodeType===1||c.nodeType===11)&&!m.isXMLDoc(c))for(S=B(F),D=B(c),_=0,w=D.length;_<w;_++)Nn(D[_],S[_]);if(h)if(g)for(D=D||B(c),S=S||B(F),_=0,w=D.length;_<w;_++)xn(D[_],S[_]);else xn(c,F);return S=B(F,"script"),S.length>0&&J(S,!L&&B(c,"script")),F},cleanData:function(c){for(var h,g,_,w=m.event.special,D=0;(g=c[D])!==void 0;D++)if(St(g)){if(h=g[me.expando]){if(h.events)for(_ in h.events)w[_]?m.event.remove(g,_):m.removeEvent(g,_,h.handle);g[me.expando]=void 0}g[st.expando]&&(g[st.expando]=void 0)}}}),m.fn.extend({detach:function(c){return Rn(this,c,!0)},remove:function(c){return Rn(this,c)},text:function(c){return ot(this,function(h){return h===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,c,arguments.length)},append:function(){return Kt(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Xt(this,c);h.appendChild(c)}})},prepend:function(){return Kt(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Xt(this,c);h.insertBefore(c,h.firstChild)}})},before:function(){return Kt(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this)})},after:function(){return Kt(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this.nextSibling)})},empty:function(){for(var c,h=0;(c=this[h])!=null;h++)c.nodeType===1&&(m.cleanData(B(c,!1)),c.textContent="");return this},clone:function(c,h){return c=c??!1,h=h??c,this.map(function(){return m.clone(this,c,h)})},html:function(c){return ot(this,function(h){var g=this[0]||{},_=0,w=this.length;if(h===void 0&&g.nodeType===1)return g.innerHTML;if(typeof h=="string"&&!Be.test(h)&&!P[(Gn.exec(h)||["",""])[1].toLowerCase()]){h=m.htmlPrefilter(h);try{for(;_<w;_++)g=this[_]||{},g.nodeType===1&&(m.cleanData(B(g,!1)),g.innerHTML=h);g=0}catch{}}g&&this.empty().append(h)},null,c,arguments.length)},replaceWith:function(){var c=[];return Kt(this,arguments,function(h){var g=this.parentNode;m.inArray(this,c)<0&&(m.cleanData(B(this)),g&&g.replaceChild(h,this))},c)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,h){m.fn[c]=function(g){for(var _,w=[],D=m(g),S=D.length-1,F=0;F<=S;F++)_=F===S?this:this.clone(!0),m(D[F])[h](_),l.apply(w,_.get());return this.pushStack(w)}});var At=new RegExp("^("+Xn+")(?!px)[a-z%]+$","i"),Ot=/^--/,wn=function(c){var h=c.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(c)},Pt=function(c,h,g){var _,w,D={};for(w in h)D[w]=c.style[w],c.style[w]=h[w];_=g.call(c);for(w in h)c.style[w]=D[w];return _},fn=new RegExp(wt.join("|"),"i");(function(){function c(){if(W){L.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",W.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ht.appendChild(L).appendChild(W);var K=e.getComputedStyle(W);g=K.top!=="1%",F=h(K.marginLeft)===12,W.style.right="60%",D=h(K.right)===36,_=h(K.width)===36,W.style.position="absolute",w=h(W.offsetWidth/3)===12,Ht.removeChild(L),W=null}}function h(K){return Math.round(parseFloat(K))}var g,_,w,D,S,F,L=A.createElement("div"),W=A.createElement("div");W.style&&(W.style.backgroundClip="content-box",W.cloneNode(!0).style.backgroundClip="",x.clearCloneStyle=W.style.backgroundClip==="content-box",m.extend(x,{boxSizingReliable:function(){return c(),_},pixelBoxStyles:function(){return c(),D},pixelPosition:function(){return c(),g},reliableMarginLeft:function(){return c(),F},scrollboxSize:function(){return c(),w},reliableTrDimensions:function(){var K,ee,Y,ie;return S==null&&(K=A.createElement("table"),ee=A.createElement("tr"),Y=A.createElement("div"),K.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ee.style.cssText="box-sizing:content-box;border:1px solid",ee.style.height="1px",Y.style.height="9px",Y.style.display="block",Ht.appendChild(K).appendChild(ee).appendChild(Y),ie=e.getComputedStyle(ee),S=parseInt(ie.height,10)+parseInt(ie.borderTopWidth,10)+parseInt(ie.borderBottomWidth,10)===ee.offsetHeight,Ht.removeChild(K)),S}}))})();function Fn(c,h,g){var _,w,D,S,F=Ot.test(h),L=c.style;return g=g||wn(c),g&&(S=g.getPropertyValue(h)||g[h],F&&S&&(S=S.replace(He,"$1")||void 0),S===""&&!Ve(c)&&(S=m.style(c,h)),!x.pixelBoxStyles()&&At.test(S)&&fn.test(h)&&(_=L.width,w=L.minWidth,D=L.maxWidth,L.minWidth=L.maxWidth=L.width=S,S=g.width,L.width=_,L.minWidth=w,L.maxWidth=D)),S!==void 0?S+"":S}function $r(c,h){return{get:function(){if(c()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var Qt=["Webkit","Moz","ms"],Dn=A.createElement("div").style,Hn={};function sr(c){for(var h=c[0].toUpperCase()+c.slice(1),g=Qt.length;g--;)if(c=Qt[g]+h,c in Dn)return c}function Kn(c){var h=m.cssProps[c]||Hn[c];return h||(c in Dn?c:Hn[c]=sr(c)||c)}var Jr=/^(none|table(?!-c[ea]).+)/,Zr={position:"absolute",visibility:"hidden",display:"block"},Ir={letterSpacing:"0",fontWeight:"400"};function Lr(c,h,g){var _=zt.exec(h);return _?Math.max(0,_[2]-(g||0))+(_[3]||"px"):h}function lr(c,h,g,_,w,D){var S=h==="width"?1:0,F=0,L=0,W=0;if(g===(_?"border":"content"))return 0;for(;S<4;S+=2)g==="margin"&&(W+=m.css(c,g+wt[S],!0,w)),_?(g==="content"&&(L-=m.css(c,"padding"+wt[S],!0,w)),g!=="margin"&&(L-=m.css(c,"border"+wt[S]+"Width",!0,w))):(L+=m.css(c,"padding"+wt[S],!0,w),g!=="padding"?L+=m.css(c,"border"+wt[S]+"Width",!0,w):F+=m.css(c,"border"+wt[S]+"Width",!0,w));return!_&&D>=0&&(L+=Math.max(0,Math.ceil(c["offset"+h[0].toUpperCase()+h.slice(1)]-D-L-F-.5))||0),L+W}function Nr(c,h,g){var _=wn(c),w=!x.boxSizingReliable()||g,D=w&&m.css(c,"boxSizing",!1,_)==="border-box",S=D,F=Fn(c,h,_),L="offset"+h[0].toUpperCase()+h.slice(1);if(At.test(F)){if(!g)return F;F="auto"}return(!x.boxSizingReliable()&&D||!x.reliableTrDimensions()&&re(c,"tr")||F==="auto"||!parseFloat(F)&&m.css(c,"display",!1,_)==="inline")&&c.getClientRects().length&&(D=m.css(c,"boxSizing",!1,_)==="border-box",S=L in c,S&&(F=c[L])),F=parseFloat(F)||0,F+lr(c,h,g||(D?"border":"content"),S,_,F)+"px"}m.extend({cssHooks:{opacity:{get:function(c,h){if(h){var g=Fn(c,"opacity");return g===""?"1":g}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(c,h,g,_){if(!(!c||c.nodeType===3||c.nodeType===8||!c.style)){var w,D,S,F=Ye(h),L=Ot.test(h),W=c.style;if(L||(h=Kn(F)),S=m.cssHooks[h]||m.cssHooks[F],g!==void 0){if(D=typeof g,D==="string"&&(w=zt.exec(g))&&w[1]&&(g=un(c,h,w),D="number"),g==null||g!==g)return;D==="number"&&!L&&(g+=w&&w[3]||(m.cssNumber[F]?"":"px")),!x.clearCloneStyle&&g===""&&h.indexOf("background")===0&&(W[h]="inherit"),(!S||!("set"in S)||(g=S.set(c,g,_))!==void 0)&&(L?W.setProperty(h,g):W[h]=g)}else return S&&"get"in S&&(w=S.get(c,!1,_))!==void 0?w:W[h]}},css:function(c,h,g,_){var w,D,S,F=Ye(h),L=Ot.test(h);return L||(h=Kn(F)),S=m.cssHooks[h]||m.cssHooks[F],S&&"get"in S&&(w=S.get(c,!0,g)),w===void 0&&(w=Fn(c,h,_)),w==="normal"&&h in Ir&&(w=Ir[h]),g===""||g?(D=parseFloat(w),g===!0||isFinite(D)?D||0:w):w}}),m.each(["height","width"],function(c,h){m.cssHooks[h]={get:function(g,_,w){if(_)return Jr.test(m.css(g,"display"))&&(!g.getClientRects().length||!g.getBoundingClientRect().width)?Pt(g,Zr,function(){return Nr(g,h,w)}):Nr(g,h,w)},set:function(g,_,w){var D,S=wn(g),F=!x.scrollboxSize()&&S.position==="absolute",L=F||w,W=L&&m.css(g,"boxSizing",!1,S)==="border-box",K=w?lr(g,h,w,W,S):0;return W&&F&&(K-=Math.ceil(g["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(S[h])-lr(g,h,"border",!1,S)-.5)),K&&(D=zt.exec(_))&&(D[3]||"px")!=="px"&&(g.style[h]=_,_=m.css(g,h)),Lr(g,_,K)}}}),m.cssHooks.marginLeft=$r(x.reliableMarginLeft,function(c,h){if(h)return(parseFloat(Fn(c,"marginLeft"))||c.getBoundingClientRect().left-Pt(c,{marginLeft:0},function(){return c.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(c,h){m.cssHooks[c+h]={expand:function(g){for(var _=0,w={},D=typeof g=="string"?g.split(" "):[g];_<4;_++)w[c+wt[_]+h]=D[_]||D[_-2]||D[0];return w}},c!=="margin"&&(m.cssHooks[c+h].set=Lr)}),m.fn.extend({css:function(c,h){return ot(this,function(g,_,w){var D,S,F={},L=0;if(Array.isArray(_)){for(D=wn(g),S=_.length;L<S;L++)F[_[L]]=m.css(g,_[L],!1,D);return F}return w!==void 0?m.style(g,_,w):m.css(g,_)},c,h,arguments.length>1)}});function ht(c,h,g,_,w){return new ht.prototype.init(c,h,g,_,w)}m.Tween=ht,ht.prototype={constructor:ht,init:function(c,h,g,_,w,D){this.elem=c,this.prop=g,this.easing=w||m.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=_,this.unit=D||(m.cssNumber[g]?"":"px")},cur:function(){var c=ht.propHooks[this.prop];return c&&c.get?c.get(this):ht.propHooks._default.get(this)},run:function(c){var h,g=ht.propHooks[this.prop];return this.options.duration?this.pos=h=m.easing[this.easing](c,this.options.duration*c,0,1,this.options.duration):this.pos=h=c,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),g&&g.set?g.set(this):ht.propHooks._default.set(this),this}},ht.prototype.init.prototype=ht.prototype,ht.propHooks={_default:{get:function(c){var h;return c.elem.nodeType!==1||c.elem[c.prop]!=null&&c.elem.style[c.prop]==null?c.elem[c.prop]:(h=m.css(c.elem,c.prop,""),!h||h==="auto"?0:h)},set:function(c){m.fx.step[c.prop]?m.fx.step[c.prop](c):c.elem.nodeType===1&&(m.cssHooks[c.prop]||c.elem.style[Kn(c.prop)]!=null)?m.style(c.elem,c.prop,c.now+c.unit):c.elem[c.prop]=c.now}}},ht.propHooks.scrollTop=ht.propHooks.scrollLeft={set:function(c){c.elem.nodeType&&c.elem.parentNode&&(c.elem[c.prop]=c.now)}},m.easing={linear:function(c){return c},swing:function(c){return .5-Math.cos(c*Math.PI)/2},_default:"swing"},m.fx=ht.prototype.init,m.fx.step={};var dn,En,ei=/^(?:toggle|show|hide)$/,jn=/queueHooks$/;function Jt(){En&&(A.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Jt):e.setTimeout(Jt,m.fx.interval),m.fx.tick())}function Rr(){return e.setTimeout(function(){dn=void 0}),dn=Date.now()}function Zt(c,h){var g,_=0,w={height:c};for(h=h?1:0;_<4;_+=2-h)g=wt[_],w["margin"+g]=w["padding"+g]=c;return h&&(w.opacity=w.width=c),w}function kt(c,h,g){for(var _,w=(dt.tweeners[h]||[]).concat(dt.tweeners["*"]),D=0,S=w.length;D<S;D++)if(_=w[D].call(g,h,c))return _}function ur(c,h,g){var _,w,D,S,F,L,W,K,ee="width"in h||"height"in h,Y=this,ie={},Ee=c.style,Ne=c.nodeType&&Dt(c),ke=me.get(c,"fxshow");g.queue||(S=m._queueHooks(c,"fx"),S.unqueued==null&&(S.unqueued=0,F=S.empty.fire,S.empty.fire=function(){S.unqueued||F()}),S.unqueued++,Y.always(function(){Y.always(function(){S.unqueued--,m.queue(c,"fx").length||S.empty.fire()})}));for(_ in h)if(w=h[_],ei.test(w)){if(delete h[_],D=D||w==="toggle",w===(Ne?"hide":"show"))if(w==="show"&&ke&&ke[_]!==void 0)Ne=!0;else continue;ie[_]=ke&&ke[_]||m.style(c,_)}if(L=!m.isEmptyObject(h),!(!L&&m.isEmptyObject(ie))){ee&&c.nodeType===1&&(g.overflow=[Ee.overflow,Ee.overflowX,Ee.overflowY],W=ke&&ke.display,W==null&&(W=me.get(c,"display")),K=m.css(c,"display"),K==="none"&&(W?K=W:(lt([c],!0),W=c.style.display||W,K=m.css(c,"display"),lt([c]))),(K==="inline"||K==="inline-block"&&W!=null)&&m.css(c,"float")==="none"&&(L||(Y.done(function(){Ee.display=W}),W==null&&(K=Ee.display,W=K==="none"?"":K)),Ee.display="inline-block")),g.overflow&&(Ee.overflow="hidden",Y.always(function(){Ee.overflow=g.overflow[0],Ee.overflowX=g.overflow[1],Ee.overflowY=g.overflow[2]})),L=!1;for(_ in ie)L||(ke?"hidden"in ke&&(Ne=ke.hidden):ke=me.access(c,"fxshow",{display:W}),D&&(ke.hidden=!Ne),Ne&&lt([c],!0),Y.done(function(){Ne||lt([c]),me.remove(c,"fxshow");for(_ in ie)m.style(c,_,ie[_])})),L=kt(Ne?ke[_]:0,_,Y),_ in ke||(ke[_]=L.start,Ne&&(L.end=L.start,L.start=0))}}function ti(c,h){var g,_,w,D,S;for(g in c)if(_=Ye(g),w=h[_],D=c[g],Array.isArray(D)&&(w=D[1],D=c[g]=D[0]),g!==_&&(c[_]=D,delete c[g]),S=m.cssHooks[_],S&&"expand"in S){D=S.expand(D),delete c[_];for(g in D)g in c||(c[g]=D[g],h[g]=w)}else h[_]=w}function dt(c,h,g){var _,w,D=0,S=dt.prefilters.length,F=m.Deferred().always(function(){delete L.elem}),L=function(){if(w)return!1;for(var ee=dn||Rr(),Y=Math.max(0,W.startTime+W.duration-ee),ie=Y/W.duration||0,Ee=1-ie,Ne=0,ke=W.tweens.length;Ne<ke;Ne++)W.tweens[Ne].run(Ee);return F.notifyWith(c,[W,Ee,Y]),Ee<1&&ke?Y:(ke||F.notifyWith(c,[W,1,0]),F.resolveWith(c,[W]),!1)},W=F.promise({elem:c,props:m.extend({},h),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},g),originalProperties:h,originalOptions:g,startTime:dn||Rr(),duration:g.duration,tweens:[],createTween:function(ee,Y){var ie=m.Tween(c,W.opts,ee,Y,W.opts.specialEasing[ee]||W.opts.easing);return W.tweens.push(ie),ie},stop:function(ee){var Y=0,ie=ee?W.tweens.length:0;if(w)return this;for(w=!0;Y<ie;Y++)W.tweens[Y].run(1);return ee?(F.notifyWith(c,[W,1,0]),F.resolveWith(c,[W,ee])):F.rejectWith(c,[W,ee]),this}}),K=W.props;for(ti(K,W.opts.specialEasing);D<S;D++)if(_=dt.prefilters[D].call(W,c,K,W.opts),_)return E(_.stop)&&(m._queueHooks(W.elem,W.opts.queue).stop=_.stop.bind(_)),_;return m.map(K,kt,W),E(W.opts.start)&&W.opts.start.call(c,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),m.fx.timer(m.extend(L,{elem:c,anim:W,queue:W.opts.queue})),W}m.Animation=m.extend(dt,{tweeners:{"*":[function(c,h){var g=this.createTween(c,h);return un(g.elem,c,zt.exec(h),g),g}]},tweener:function(c,h){E(c)?(h=c,c=["*"]):c=c.match(gt);for(var g,_=0,w=c.length;_<w;_++)g=c[_],dt.tweeners[g]=dt.tweeners[g]||[],dt.tweeners[g].unshift(h)},prefilters:[ur],prefilter:function(c,h){h?dt.prefilters.unshift(c):dt.prefilters.push(c)}}),m.speed=function(c,h,g){var _=c&&typeof c=="object"?m.extend({},c):{complete:g||!g&&h||E(c)&&c,duration:c,easing:g&&h||h&&!E(h)&&h};return m.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in m.fx.speeds?_.duration=m.fx.speeds[_.duration]:_.duration=m.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){E(_.old)&&_.old.call(this),_.queue&&m.dequeue(this,_.queue)},_},m.fn.extend({fadeTo:function(c,h,g,_){return this.filter(Dt).css("opacity",0).show().end().animate({opacity:h},c,g,_)},animate:function(c,h,g,_){var w=m.isEmptyObject(c),D=m.speed(h,g,_),S=function(){var F=dt(this,m.extend({},c),D);(w||me.get(this,"finish"))&&F.stop(!0)};return S.finish=S,w||D.queue===!1?this.each(S):this.queue(D.queue,S)},stop:function(c,h,g){var _=function(w){var D=w.stop;delete w.stop,D(g)};return typeof c!="string"&&(g=h,h=c,c=void 0),h&&this.queue(c||"fx",[]),this.each(function(){var w=!0,D=c!=null&&c+"queueHooks",S=m.timers,F=me.get(this);if(D)F[D]&&F[D].stop&&_(F[D]);else for(D in F)F[D]&&F[D].stop&&jn.test(D)&&_(F[D]);for(D=S.length;D--;)S[D].elem===this&&(c==null||S[D].queue===c)&&(S[D].anim.stop(g),w=!1,S.splice(D,1));(w||!g)&&m.dequeue(this,c)})},finish:function(c){return c!==!1&&(c=c||"fx"),this.each(function(){var h,g=me.get(this),_=g[c+"queue"],w=g[c+"queueHooks"],D=m.timers,S=_?_.length:0;for(g.finish=!0,m.queue(this,c,[]),w&&w.stop&&w.stop.call(this,!0),h=D.length;h--;)D[h].elem===this&&D[h].queue===c&&(D[h].anim.stop(!0),D.splice(h,1));for(h=0;h<S;h++)_[h]&&_[h].finish&&_[h].finish.call(this);delete g.finish})}}),m.each(["toggle","show","hide"],function(c,h){var g=m.fn[h];m.fn[h]=function(_,w,D){return _==null||typeof _=="boolean"?g.apply(this,arguments):this.animate(Zt(h,!0),_,w,D)}}),m.each({slideDown:Zt("show"),slideUp:Zt("hide"),slideToggle:Zt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(c,h){m.fn[c]=function(g,_,w){return this.animate(h,g,_,w)}}),m.timers=[],m.fx.tick=function(){var c,h=0,g=m.timers;for(dn=Date.now();h<g.length;h++)c=g[h],!c()&&g[h]===c&&g.splice(h--,1);g.length||m.fx.stop(),dn=void 0},m.fx.timer=function(c){m.timers.push(c),m.fx.start()},m.fx.interval=13,m.fx.start=function(){En||(En=!0,Jt())},m.fx.stop=function(){En=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(c,h){return c=m.fx&&m.fx.speeds[c]||c,h=h||"fx",this.queue(h,function(g,_){var w=e.setTimeout(g,c);_.stop=function(){e.clearTimeout(w)}})},(function(){var c=A.createElement("input"),h=A.createElement("select"),g=h.appendChild(A.createElement("option"));c.type="checkbox",x.checkOn=c.value!=="",x.optSelected=g.selected,c=A.createElement("input"),c.value="t",c.type="radio",x.radioValue=c.value==="t"})();var cr,Cn=m.expr.attrHandle;m.fn.extend({attr:function(c,h){return ot(this,m.attr,c,h,arguments.length>1)},removeAttr:function(c){return this.each(function(){m.removeAttr(this,c)})}}),m.extend({attr:function(c,h,g){var _,w,D=c.nodeType;if(!(D===3||D===8||D===2)){if(typeof c.getAttribute>"u")return m.prop(c,h,g);if((D!==1||!m.isXMLDoc(c))&&(w=m.attrHooks[h.toLowerCase()]||(m.expr.match.bool.test(h)?cr:void 0)),g!==void 0){if(g===null){m.removeAttr(c,h);return}return w&&"set"in w&&(_=w.set(c,g,h))!==void 0?_:(c.setAttribute(h,g+""),g)}return w&&"get"in w&&(_=w.get(c,h))!==null?_:(_=m.find.attr(c,h),_??void 0)}},attrHooks:{type:{set:function(c,h){if(!x.radioValue&&h==="radio"&&re(c,"input")){var g=c.value;return c.setAttribute("type",h),g&&(c.value=g),h}}}},removeAttr:function(c,h){var g,_=0,w=h&&h.match(gt);if(w&&c.nodeType===1)for(;g=w[_++];)c.removeAttribute(g)}}),cr={set:function(c,h,g){return h===!1?m.removeAttr(c,g):c.setAttribute(g,g),g}},m.each(m.expr.match.bool.source.match(/\w+/g),function(c,h){var g=Cn[h]||m.find.attr;Cn[h]=function(_,w,D){var S,F,L=w.toLowerCase();return D||(F=Cn[L],Cn[L]=S,S=g(_,w,D)!=null?L:null,Cn[L]=F),S}});var fr=/^(?:input|select|textarea|button)$/i,dr=/^(?:a|area)$/i;m.fn.extend({prop:function(c,h){return ot(this,m.prop,c,h,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[m.propFix[c]||c]})}}),m.extend({prop:function(c,h,g){var _,w,D=c.nodeType;if(!(D===3||D===8||D===2))return(D!==1||!m.isXMLDoc(c))&&(h=m.propFix[h]||h,w=m.propHooks[h]),g!==void 0?w&&"set"in w&&(_=w.set(c,g,h))!==void 0?_:c[h]=g:w&&"get"in w&&(_=w.get(c,h))!==null?_:c[h]},propHooks:{tabIndex:{get:function(c){var h=m.find.attr(c,"tabindex");return h?parseInt(h,10):fr.test(c.nodeName)||dr.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),x.optSelected||(m.propHooks.selected={get:function(c){var h=c.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(c){var h=c.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function hn(c){var h=c.match(gt)||[];return h.join(" ")}function pn(c){return c.getAttribute&&c.getAttribute("class")||""}function Sn(c){return Array.isArray(c)?c:typeof c=="string"?c.match(gt)||[]:[]}m.fn.extend({addClass:function(c){var h,g,_,w,D,S;return E(c)?this.each(function(F){m(this).addClass(c.call(this,F,pn(this)))}):(h=Sn(c),h.length?this.each(function(){if(_=pn(this),g=this.nodeType===1&&" "+hn(_)+" ",g){for(D=0;D<h.length;D++)w=h[D],g.indexOf(" "+w+" ")<0&&(g+=w+" ");S=hn(g),_!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(c){var h,g,_,w,D,S;return E(c)?this.each(function(F){m(this).removeClass(c.call(this,F,pn(this)))}):arguments.length?(h=Sn(c),h.length?this.each(function(){if(_=pn(this),g=this.nodeType===1&&" "+hn(_)+" ",g){for(D=0;D<h.length;D++)for(w=h[D];g.indexOf(" "+w+" ")>-1;)g=g.replace(" "+w+" "," ");S=hn(g),_!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(c,h){var g,_,w,D,S=typeof c,F=S==="string"||Array.isArray(c);return E(c)?this.each(function(L){m(this).toggleClass(c.call(this,L,pn(this),h),h)}):typeof h=="boolean"&&F?h?this.addClass(c):this.removeClass(c):(g=Sn(c),this.each(function(){if(F)for(D=m(this),w=0;w<g.length;w++)_=g[w],D.hasClass(_)?D.removeClass(_):D.addClass(_);else(c===void 0||S==="boolean")&&(_=pn(this),_&&me.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||c===!1?"":me.get(this,"__className__")||""))}))},hasClass:function(c){var h,g,_=0;for(h=" "+c+" ";g=this[_++];)if(g.nodeType===1&&(" "+hn(pn(g))+" ").indexOf(h)>-1)return!0;return!1}});var Et=/\r/g;m.fn.extend({val:function(c){var h,g,_,w=this[0];return arguments.length?(_=E(c),this.each(function(D){var S;this.nodeType===1&&(_?S=c.call(this,D,m(this).val()):S=c,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=m.map(S,function(F){return F==null?"":F+""})),h=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,S,"value")===void 0)&&(this.value=S))})):w?(h=m.valHooks[w.type]||m.valHooks[w.nodeName.toLowerCase()],h&&"get"in h&&(g=h.get(w,"value"))!==void 0?g:(g=w.value,typeof g=="string"?g.replace(Et,""):g??"")):void 0}}),m.extend({valHooks:{option:{get:function(c){var h=m.find.attr(c,"value");return h??hn(m.text(c))}},select:{get:function(c){var h,g,_,w=c.options,D=c.selectedIndex,S=c.type==="select-one",F=S?null:[],L=S?D+1:w.length;for(D<0?_=L:_=S?D:0;_<L;_++)if(g=w[_],(g.selected||_===D)&&!g.disabled&&(!g.parentNode.disabled||!re(g.parentNode,"optgroup"))){if(h=m(g).val(),S)return h;F.push(h)}return F},set:function(c,h){for(var g,_,w=c.options,D=m.makeArray(h),S=w.length;S--;)_=w[S],(_.selected=m.inArray(m.valHooks.option.get(_),D)>-1)&&(g=!0);return g||(c.selectedIndex=-1),D}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(c,h){if(Array.isArray(h))return c.checked=m.inArray(m(c).val(),h)>-1}},x.checkOn||(m.valHooks[this].get=function(c){return c.getAttribute("value")===null?"on":c.value})});var Bn=e.location,Fr={guid:Date.now()},hr=/\?/;m.parseXML=function(c){var h,g;if(!c||typeof c!="string")return null;try{h=new e.DOMParser().parseFromString(c,"text/xml")}catch{}return g=h&&h.getElementsByTagName("parsererror")[0],(!h||g)&&m.error("Invalid XML: "+(g?m.map(g.childNodes,function(_){return _.textContent}).join(`
`):c)),h};var pr=/^(?:focusinfocus|focusoutblur)$/,Hr=function(c){c.stopPropagation()};m.extend(m.event,{trigger:function(c,h,g,_){var w,D,S,F,L,W,K,ee,Y=[g||A],ie=p.call(c,"type")?c.type:c,Ee=p.call(c,"namespace")?c.namespace.split("."):[];if(D=ee=S=g=g||A,!(g.nodeType===3||g.nodeType===8)&&!pr.test(ie+m.event.triggered)&&(ie.indexOf(".")>-1&&(Ee=ie.split("."),ie=Ee.shift(),Ee.sort()),L=ie.indexOf(":")<0&&"on"+ie,c=c[m.expando]?c:new m.Event(ie,typeof c=="object"&&c),c.isTrigger=_?2:3,c.namespace=Ee.join("."),c.rnamespace=c.namespace?new RegExp("(^|\\.)"+Ee.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=void 0,c.target||(c.target=g),h=h==null?[c]:m.makeArray(h,[c]),K=m.event.special[ie]||{},!(!_&&K.trigger&&K.trigger.apply(g,h)===!1))){if(!_&&!K.noBubble&&!C(g)){for(F=K.delegateType||ie,pr.test(F+ie)||(D=D.parentNode);D;D=D.parentNode)Y.push(D),S=D;S===(g.ownerDocument||A)&&Y.push(S.defaultView||S.parentWindow||e)}for(w=0;(D=Y[w++])&&!c.isPropagationStopped();)ee=D,c.type=w>1?F:K.bindType||ie,W=(me.get(D,"events")||Object.create(null))[c.type]&&me.get(D,"handle"),W&&W.apply(D,h),W=L&&D[L],W&&W.apply&&St(D)&&(c.result=W.apply(D,h),c.result===!1&&c.preventDefault());return c.type=ie,!_&&!c.isDefaultPrevented()&&(!K._default||K._default.apply(Y.pop(),h)===!1)&&St(g)&&L&&E(g[ie])&&!C(g)&&(S=g[L],S&&(g[L]=null),m.event.triggered=ie,c.isPropagationStopped()&&ee.addEventListener(ie,Hr),g[ie](),c.isPropagationStopped()&&ee.removeEventListener(ie,Hr),m.event.triggered=void 0,S&&(g[L]=S)),c.result}},simulate:function(c,h,g){var _=m.extend(new m.Event,g,{type:c,isSimulated:!0});m.event.trigger(_,null,h)}}),m.fn.extend({trigger:function(c,h){return this.each(function(){m.event.trigger(c,h,this)})},triggerHandler:function(c,h){var g=this[0];if(g)return m.event.trigger(c,h,g,!0)}});var jr=/\[\]$/,gr=/\r?\n/g,ni=/^(?:submit|button|image|reset|file)$/i,ri=/^(?:input|select|textarea|keygen)/i;function mr(c,h,g,_){var w;if(Array.isArray(h))m.each(h,function(D,S){g||jr.test(c)?_(c,S):mr(c+"["+(typeof S=="object"&&S!=null?D:"")+"]",S,g,_)});else if(!g&&R(h)==="object")for(w in h)mr(c+"["+w+"]",h[w],g,_);else _(c,h)}m.param=function(c,h){var g,_=[],w=function(D,S){var F=E(S)?S():S;_[_.length]=encodeURIComponent(D)+"="+encodeURIComponent(F??"")};if(c==null)return"";if(Array.isArray(c)||c.jquery&&!m.isPlainObject(c))m.each(c,function(){w(this.name,this.value)});else for(g in c)mr(g,c[g],h,w);return _.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var c=m.prop(this,"elements");return c?m.makeArray(c):this}).filter(function(){var c=this.type;return this.name&&!m(this).is(":disabled")&&ri.test(this.nodeName)&&!ni.test(c)&&(this.checked||!Yt.test(c))}).map(function(c,h){var g=m(this).val();return g==null?null:Array.isArray(g)?m.map(g,function(_){return{name:h.name,value:_.replace(gr,`\r
`)}}):{name:h.name,value:g.replace(gr,`\r
`)}}).get()}});var vr=/%20/g,Br=/#.*$/,ii=/([?&])_=[^&]*/,Qn=/^(.*?):[ \t]*([^\r\n]*)$/mg,ai=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_r=/^(?:GET|HEAD)$/,oi=/^\/\//,Wr={},br={},Vr="*/".concat("*"),yr=A.createElement("a");yr.href=Bn.href;function qr(c){return function(h,g){typeof h!="string"&&(g=h,h="*");var _,w=0,D=h.toLowerCase().match(gt)||[];if(E(g))for(;_=D[w++];)_[0]==="+"?(_=_.slice(1)||"*",(c[_]=c[_]||[]).unshift(g)):(c[_]=c[_]||[]).push(g)}}function Ur(c,h,g,_){var w={},D=c===br;function S(F){var L;return w[F]=!0,m.each(c[F]||[],function(W,K){var ee=K(h,g,_);if(typeof ee=="string"&&!D&&!w[ee])return h.dataTypes.unshift(ee),S(ee),!1;if(D)return!(L=ee)}),L}return S(h.dataTypes[0])||!w["*"]&&S("*")}function xr(c,h){var g,_,w=m.ajaxSettings.flatOptions||{};for(g in h)h[g]!==void 0&&((w[g]?c:_||(_={}))[g]=h[g]);return _&&m.extend(!0,c,_),c}function si(c,h,g){for(var _,w,D,S,F=c.contents,L=c.dataTypes;L[0]==="*";)L.shift(),_===void 0&&(_=c.mimeType||h.getResponseHeader("Content-Type"));if(_){for(w in F)if(F[w]&&F[w].test(_)){L.unshift(w);break}}if(L[0]in g)D=L[0];else{for(w in g){if(!L[0]||c.converters[w+" "+L[0]]){D=w;break}S||(S=w)}D=D||S}if(D)return D!==L[0]&&L.unshift(D),g[D]}function li(c,h,g,_){var w,D,S,F,L,W={},K=c.dataTypes.slice();if(K[1])for(S in c.converters)W[S.toLowerCase()]=c.converters[S];for(D=K.shift();D;)if(c.responseFields[D]&&(g[c.responseFields[D]]=h),!L&&_&&c.dataFilter&&(h=c.dataFilter(h,c.dataType)),L=D,D=K.shift(),D){if(D==="*")D=L;else if(L!=="*"&&L!==D){if(S=W[L+" "+D]||W["* "+D],!S){for(w in W)if(F=w.split(" "),F[1]===D&&(S=W[L+" "+F[0]]||W["* "+F[0]],S)){S===!0?S=W[w]:W[w]!==!0&&(D=F[0],K.unshift(F[1]));break}}if(S!==!0)if(S&&c.throws)h=S(h);else try{h=S(h)}catch(ee){return{state:"parsererror",error:S?ee:"No conversion from "+L+" to "+D}}}}return{state:"success",data:h}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bn.href,type:"GET",isLocal:ai.test(Bn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Vr,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(c,h){return h?xr(xr(c,m.ajaxSettings),h):xr(m.ajaxSettings,c)},ajaxPrefilter:qr(Wr),ajaxTransport:qr(br),ajax:function(c,h){typeof c=="object"&&(h=c,c=void 0),h=h||{};var g,_,w,D,S,F,L,W,K,ee,Y=m.ajaxSetup({},h),ie=Y.context||Y,Ee=Y.context&&(ie.nodeType||ie.jquery)?m(ie):m.event,Ne=m.Deferred(),ke=m.Callbacks("once memory"),it=Y.statusCode||{},Ze={},$t={},It="canceled",Re={readyState:0,getResponseHeader:function(Fe){var Qe;if(L){if(!D)for(D={};Qe=Qn.exec(w);)D[Qe[1].toLowerCase()+" "]=(D[Qe[1].toLowerCase()+" "]||[]).concat(Qe[2]);Qe=D[Fe.toLowerCase()+" "]}return Qe==null?null:Qe.join(", ")},getAllResponseHeaders:function(){return L?w:null},setRequestHeader:function(Fe,Qe){return L==null&&(Fe=$t[Fe.toLowerCase()]=$t[Fe.toLowerCase()]||Fe,Ze[Fe]=Qe),this},overrideMimeType:function(Fe){return L==null&&(Y.mimeType=Fe),this},statusCode:function(Fe){var Qe;if(Fe)if(L)Re.always(Fe[Re.status]);else for(Qe in Fe)it[Qe]=[it[Qe],Fe[Qe]];return this},abort:function(Fe){var Qe=Fe||It;return g&&g.abort(Qe),mn(0,Qe),this}};if(Ne.promise(Re),Y.url=((c||Y.url||Bn.href)+"").replace(oi,Bn.protocol+"//"),Y.type=h.method||h.type||Y.method||Y.type,Y.dataTypes=(Y.dataType||"*").toLowerCase().match(gt)||[""],Y.crossDomain==null){F=A.createElement("a");try{F.href=Y.url,F.href=F.href,Y.crossDomain=yr.protocol+"//"+yr.host!=F.protocol+"//"+F.host}catch{Y.crossDomain=!0}}if(Y.data&&Y.processData&&typeof Y.data!="string"&&(Y.data=m.param(Y.data,Y.traditional)),Ur(Wr,Y,h,Re),L)return Re;W=m.event&&Y.global,W&&m.active++===0&&m.event.trigger("ajaxStart"),Y.type=Y.type.toUpperCase(),Y.hasContent=!_r.test(Y.type),_=Y.url.replace(Br,""),Y.hasContent?Y.data&&Y.processData&&(Y.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Y.data=Y.data.replace(vr,"+")):(ee=Y.url.slice(_.length),Y.data&&(Y.processData||typeof Y.data=="string")&&(_+=(hr.test(_)?"&":"?")+Y.data,delete Y.data),Y.cache===!1&&(_=_.replace(ii,"$1"),ee=(hr.test(_)?"&":"?")+"_="+Fr.guid+++ee),Y.url=_+ee),Y.ifModified&&(m.lastModified[_]&&Re.setRequestHeader("If-Modified-Since",m.lastModified[_]),m.etag[_]&&Re.setRequestHeader("If-None-Match",m.etag[_])),(Y.data&&Y.hasContent&&Y.contentType!==!1||h.contentType)&&Re.setRequestHeader("Content-Type",Y.contentType),Re.setRequestHeader("Accept",Y.dataTypes[0]&&Y.accepts[Y.dataTypes[0]]?Y.accepts[Y.dataTypes[0]]+(Y.dataTypes[0]!=="*"?", "+Vr+"; q=0.01":""):Y.accepts["*"]);for(K in Y.headers)Re.setRequestHeader(K,Y.headers[K]);if(Y.beforeSend&&(Y.beforeSend.call(ie,Re,Y)===!1||L))return Re.abort();if(It="abort",ke.add(Y.complete),Re.done(Y.success),Re.fail(Y.error),g=Ur(br,Y,h,Re),!g)mn(-1,"No Transport");else{if(Re.readyState=1,W&&Ee.trigger("ajaxSend",[Re,Y]),L)return Re;Y.async&&Y.timeout>0&&(S=e.setTimeout(function(){Re.abort("timeout")},Y.timeout));try{L=!1,g.send(Ze,mn)}catch(Fe){if(L)throw Fe;mn(-1,Fe)}}function mn(Fe,Qe,Tn,Wn){var Lt,jt,Nt,tn,nn,vt=Qe;L||(L=!0,S&&e.clearTimeout(S),g=void 0,w=Wn||"",Re.readyState=Fe>0?4:0,Lt=Fe>=200&&Fe<300||Fe===304,Tn&&(tn=si(Y,Re,Tn)),!Lt&&m.inArray("script",Y.dataTypes)>-1&&m.inArray("json",Y.dataTypes)<0&&(Y.converters["text script"]=function(){}),tn=li(Y,tn,Re,Lt),Lt?(Y.ifModified&&(nn=Re.getResponseHeader("Last-Modified"),nn&&(m.lastModified[_]=nn),nn=Re.getResponseHeader("etag"),nn&&(m.etag[_]=nn)),Fe===204||Y.type==="HEAD"?vt="nocontent":Fe===304?vt="notmodified":(vt=tn.state,jt=tn.data,Nt=tn.error,Lt=!Nt)):(Nt=vt,(Fe||!vt)&&(vt="error",Fe<0&&(Fe=0))),Re.status=Fe,Re.statusText=(Qe||vt)+"",Lt?Ne.resolveWith(ie,[jt,vt,Re]):Ne.rejectWith(ie,[Re,vt,Nt]),Re.statusCode(it),it=void 0,W&&Ee.trigger(Lt?"ajaxSuccess":"ajaxError",[Re,Y,Lt?jt:Nt]),ke.fireWith(ie,[Re,vt]),W&&(Ee.trigger("ajaxComplete",[Re,Y]),--m.active||m.event.trigger("ajaxStop")))}return Re},getJSON:function(c,h,g){return m.get(c,h,g,"json")},getScript:function(c,h){return m.get(c,void 0,h,"script")}}),m.each(["get","post"],function(c,h){m[h]=function(g,_,w,D){return E(_)&&(D=D||w,w=_,_=void 0),m.ajax(m.extend({url:g,type:h,dataType:D,data:_,success:w},m.isPlainObject(g)&&g))}}),m.ajaxPrefilter(function(c){var h;for(h in c.headers)h.toLowerCase()==="content-type"&&(c.contentType=c.headers[h]||"")}),m._evalUrl=function(c,h,g){return m.ajax({url:c,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){m.globalEval(_,h,g)}})},m.fn.extend({wrapAll:function(c){var h;return this[0]&&(E(c)&&(c=c.call(this[0])),h=m(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var g=this;g.firstElementChild;)g=g.firstElementChild;return g}).append(this)),this},wrapInner:function(c){return E(c)?this.each(function(h){m(this).wrapInner(c.call(this,h))}):this.each(function(){var h=m(this),g=h.contents();g.length?g.wrapAll(c):h.append(c)})},wrap:function(c){var h=E(c);return this.each(function(g){m(this).wrapAll(h?c.call(this,g):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(c){return!m.expr.pseudos.visible(c)},m.expr.pseudos.visible=function(c){return!!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var en={0:200,1223:204},Mt=m.ajaxSettings.xhr();x.cors=!!Mt&&"withCredentials"in Mt,x.ajax=Mt=!!Mt,m.ajaxTransport(function(c){var h,g;if(x.cors||Mt&&!c.crossDomain)return{send:function(_,w){var D,S=c.xhr();if(S.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields)for(D in c.xhrFields)S[D]=c.xhrFields[D];c.mimeType&&S.overrideMimeType&&S.overrideMimeType(c.mimeType),!c.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(D in _)S.setRequestHeader(D,_[D]);h=function(F){return function(){h&&(h=g=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,F==="abort"?S.abort():F==="error"?typeof S.status!="number"?w(0,"error"):w(S.status,S.statusText):w(en[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=h(),g=S.onerror=S.ontimeout=h("error"),S.onabort!==void 0?S.onabort=g:S.onreadystatechange=function(){S.readyState===4&&e.setTimeout(function(){h&&g()})},h=h("abort");try{S.send(c.hasContent&&c.data||null)}catch(F){if(h)throw F}},abort:function(){h&&h()}}}),m.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return m.globalEval(c),c}}}),m.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),m.ajaxTransport("script",function(c){if(c.crossDomain||c.scriptAttrs){var h,g;return{send:function(_,w){h=m("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",g=function(D){h.remove(),g=null,D&&w(D.type==="error"?404:200,D.type)}),A.head.appendChild(h[0])},abort:function(){g&&g()}}}});var zr=[],gn=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var c=zr.pop()||m.expando+"_"+Fr.guid++;return this[c]=!0,c}}),m.ajaxPrefilter("json jsonp",function(c,h,g){var _,w,D,S=c.jsonp!==!1&&(gn.test(c.url)?"url":typeof c.data=="string"&&(c.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&gn.test(c.data)&&"data");if(S||c.dataTypes[0]==="jsonp")return _=c.jsonpCallback=E(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,S?c[S]=c[S].replace(gn,"$1"+_):c.jsonp!==!1&&(c.url+=(hr.test(c.url)?"&":"?")+c.jsonp+"="+_),c.converters["script json"]=function(){return D||m.error(_+" was not called"),D[0]},c.dataTypes[0]="json",w=e[_],e[_]=function(){D=arguments},g.always(function(){w===void 0?m(e).removeProp(_):e[_]=w,c[_]&&(c.jsonpCallback=h.jsonpCallback,zr.push(_)),D&&E(w)&&w(D[0]),D=w=void 0}),"script"}),x.createHTMLDocument=(function(){var c=A.implementation.createHTMLDocument("").body;return c.innerHTML="<form></form><form></form>",c.childNodes.length===2})(),m.parseHTML=function(c,h,g){if(typeof c!="string")return[];typeof h=="boolean"&&(g=h,h=!1);var _,w,D;return h||(x.createHTMLDocument?(h=A.implementation.createHTMLDocument(""),_=h.createElement("base"),_.href=A.location.href,h.head.appendChild(_)):h=A),w=We.exec(c),D=!g&&[],w?[h.createElement(w[1])]:(w=le([c],h,D),D&&D.length&&m(D).remove(),m.merge([],w.childNodes))},m.fn.load=function(c,h,g){var _,w,D,S=this,F=c.indexOf(" ");return F>-1&&(_=hn(c.slice(F)),c=c.slice(0,F)),E(h)?(g=h,h=void 0):h&&typeof h=="object"&&(w="POST"),S.length>0&&m.ajax({url:c,type:w||"GET",dataType:"html",data:h}).done(function(L){D=arguments,S.html(_?m("<div>").append(m.parseHTML(L)).find(_):L)}).always(g&&function(L,W){S.each(function(){g.apply(this,D||[L.responseText,W,L])})}),this},m.expr.pseudos.animated=function(c){return m.grep(m.timers,function(h){return c===h.elem}).length},m.offset={setOffset:function(c,h,g){var _,w,D,S,F,L,W,K=m.css(c,"position"),ee=m(c),Y={};K==="static"&&(c.style.position="relative"),F=ee.offset(),D=m.css(c,"top"),L=m.css(c,"left"),W=(K==="absolute"||K==="fixed")&&(D+L).indexOf("auto")>-1,W?(_=ee.position(),S=_.top,w=_.left):(S=parseFloat(D)||0,w=parseFloat(L)||0),E(h)&&(h=h.call(c,g,m.extend({},F))),h.top!=null&&(Y.top=h.top-F.top+S),h.left!=null&&(Y.left=h.left-F.left+w),"using"in h?h.using.call(c,Y):ee.css(Y)}},m.fn.extend({offset:function(c){if(arguments.length)return c===void 0?this:this.each(function(w){m.offset.setOffset(this,c,w)});var h,g,_=this[0];if(_)return _.getClientRects().length?(h=_.getBoundingClientRect(),g=_.ownerDocument.defaultView,{top:h.top+g.pageYOffset,left:h.left+g.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var c,h,g,_=this[0],w={top:0,left:0};if(m.css(_,"position")==="fixed")h=_.getBoundingClientRect();else{for(h=this.offset(),g=_.ownerDocument,c=_.offsetParent||g.documentElement;c&&(c===g.body||c===g.documentElement)&&m.css(c,"position")==="static";)c=c.parentNode;c&&c!==_&&c.nodeType===1&&(w=m(c).offset(),w.top+=m.css(c,"borderTopWidth",!0),w.left+=m.css(c,"borderLeftWidth",!0))}return{top:h.top-w.top-m.css(_,"marginTop",!0),left:h.left-w.left-m.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent;c&&m.css(c,"position")==="static";)c=c.offsetParent;return c||Ht})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,h){var g=h==="pageYOffset";m.fn[c]=function(_){return ot(this,function(w,D,S){var F;if(C(w)?F=w:w.nodeType===9&&(F=w.defaultView),S===void 0)return F?F[h]:w[D];F?F.scrollTo(g?F.pageXOffset:S,g?S:F.pageYOffset):w[D]=S},c,_,arguments.length)}}),m.each(["top","left"],function(c,h){m.cssHooks[h]=$r(x.pixelPosition,function(g,_){if(_)return _=Fn(g,h),At.test(_)?m(g).position()[h]+"px":_})}),m.each({Height:"height",Width:"width"},function(c,h){m.each({padding:"inner"+c,content:h,"":"outer"+c},function(g,_){m.fn[_]=function(w,D){var S=arguments.length&&(g||typeof w!="boolean"),F=g||(w===!0||D===!0?"margin":"border");return ot(this,function(L,W,K){var ee;return C(L)?_.indexOf("outer")===0?L["inner"+c]:L.document.documentElement["client"+c]:L.nodeType===9?(ee=L.documentElement,Math.max(L.body["scroll"+c],ee["scroll"+c],L.body["offset"+c],ee["offset"+c],ee["client"+c])):K===void 0?m.css(L,W,F):m.style(L,W,K,F)},h,S?w:void 0,S)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,h){m.fn[h]=function(g){return this.on(h,g)}}),m.fn.extend({bind:function(c,h,g){return this.on(c,null,h,g)},unbind:function(c,h){return this.off(c,null,h)},delegate:function(c,h,g,_){return this.on(h,c,g,_)},undelegate:function(c,h,g){return arguments.length===1?this.off(c,"**"):this.off(h,c||"**",g)},hover:function(c,h){return this.on("mouseenter",c).on("mouseleave",h||c)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(c,h){m.fn[h]=function(g,_){return arguments.length>0?this.on(h,null,g,_):this.trigger(h)}});var pt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(c,h){var g,_,w;if(typeof h=="string"&&(g=c[h],h=c,c=g),!!E(c))return _=o.call(arguments,2),w=function(){return c.apply(h||this,_.concat(o.call(arguments)))},w.guid=c.guid=c.guid||m.guid++,w},m.holdReady=function(c){c?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=re,m.isFunction=E,m.isWindow=C,m.camelCase=Ye,m.type=R,m.now=Date.now,m.isNumeric=function(c){var h=m.type(c);return(h==="number"||h==="string")&&!isNaN(c-parseFloat(c))},m.trim=function(c){return c==null?"":(c+"").replace(pt,"$1")};var ui=e.jQuery,ci=e.$;return m.noConflict=function(c){return e.$===m&&(e.$=ci),c&&e.jQuery===m&&(e.jQuery=ui),m},typeof t>"u"&&(e.jQuery=e.$=m),m})})(jquery$1)),jquery$1.exports}var isBrowser=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",timeoutDuration=(function(){for(var n=["Edge","Trident","Firefox"],e=0;e<n.length;e+=1)if(isBrowser&&navigator.userAgent.indexOf(n[e])>=0)return 1;return 0})();function microtaskDebounce(n){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,n()}))}}function taskDebounce(n){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,n()},timeoutDuration))}}var supportsMicroTasks=isBrowser&&window.Promise,debounce$2=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction$1(n){var e={};return n&&e.toString.call(n)==="[object Function]"}function getStyleComputedProperty(n,e){if(n.nodeType!==1)return[];var t=n.ownerDocument.defaultView,r=t.getComputedStyle(n,null);return e?r[e]:r}function getParentNode(n){return n.nodeName==="HTML"?n:n.parentNode||n.host}function getScrollParent(n){if(!n)return document.body;switch(n.nodeName){case"HTML":case"BODY":return n.ownerDocument.body;case"#document":return n.body}var e=getStyleComputedProperty(n),t=e.overflow,r=e.overflowX,a=e.overflowY;return/(auto|scroll|overlay)/.test(t+a+r)?n:getScrollParent(getParentNode(n))}function getReferenceNode(n){return n&&n.referenceNode?n.referenceNode:n}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode),isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);function isIE(n){return n===11?isIE11:n===10?isIE10:isIE11||isIE10}function getOffsetParent(n){if(!n)return document.documentElement;for(var e=isIE(10)?document.body:null,t=n.offsetParent||null;t===e&&n.nextElementSibling;)t=(n=n.nextElementSibling).offsetParent;var r=t&&t.nodeName;return!r||r==="BODY"||r==="HTML"?n?n.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(t.nodeName)!==-1&&getStyleComputedProperty(t,"position")==="static"?getOffsetParent(t):t}function isOffsetContainer(n){var e=n.nodeName;return e==="BODY"?!1:e==="HTML"||getOffsetParent(n.firstElementChild)===n}function getRoot(n){return n.parentNode!==null?getRoot(n.parentNode):n}function findCommonOffsetParent(n,e){if(!n||!n.nodeType||!e||!e.nodeType)return document.documentElement;var t=n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=t?n:e,a=t?e:n,o=document.createRange();o.setStart(r,0),o.setEnd(a,0);var s=o.commonAncestorContainer;if(n!==s&&e!==s||r.contains(a))return isOffsetContainer(s)?s:getOffsetParent(s);var l=getRoot(n);return l.host?findCommonOffsetParent(l.host,e):findCommonOffsetParent(n,getRoot(e).host)}function getScroll(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",t=e==="top"?"scrollTop":"scrollLeft",r=n.nodeName;if(r==="BODY"||r==="HTML"){var a=n.ownerDocument.documentElement,o=n.ownerDocument.scrollingElement||a;return o[t]}return n[t]}function includeScroll(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=getScroll(e,"top"),a=getScroll(e,"left"),o=t?-1:1;return n.top+=r*o,n.bottom+=r*o,n.left+=a*o,n.right+=a*o,n}function getBordersSize(n,e){var t=e==="x"?"Left":"Top",r=t==="Left"?"Right":"Bottom";return parseFloat(n["border"+t+"Width"])+parseFloat(n["border"+r+"Width"])}function getSize(n,e,t,r){return Math.max(e["offset"+n],e["scroll"+n],t["client"+n],t["offset"+n],t["scroll"+n],isIE(10)?parseInt(t["offset"+n])+parseInt(r["margin"+(n==="Height"?"Top":"Left")])+parseInt(r["margin"+(n==="Height"?"Bottom":"Right")]):0)}function getWindowSizes(n){var e=n.body,t=n.documentElement,r=isIE(10)&&getComputedStyle(t);return{height:getSize("Height",e,t,r),width:getSize("Width",e,t,r)}}var classCallCheck=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=(function(){function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}})(),defineProperty=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n},_extends=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};function getClientRect(n){return _extends({},n,{right:n.left+n.width,bottom:n.top+n.height})}function getBoundingClientRect(n){var e={};try{if(isIE(10)){e=n.getBoundingClientRect();var t=getScroll(n,"top"),r=getScroll(n,"left");e.top+=t,e.left+=r,e.bottom+=t,e.right+=r}else e=n.getBoundingClientRect()}catch{}var a={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o=n.nodeName==="HTML"?getWindowSizes(n.ownerDocument):{},s=o.width||n.clientWidth||a.width,l=o.height||n.clientHeight||a.height,u=n.offsetWidth-s,f=n.offsetHeight-l;if(u||f){var d=getStyleComputedProperty(n);u-=getBordersSize(d,"x"),f-=getBordersSize(d,"y"),a.width-=u,a.height-=f}return getClientRect(a)}function getOffsetRectRelativeToArbitraryNode(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=isIE(10),a=e.nodeName==="HTML",o=getBoundingClientRect(n),s=getBoundingClientRect(e),l=getScrollParent(n),u=getStyleComputedProperty(e),f=parseFloat(u.borderTopWidth),d=parseFloat(u.borderLeftWidth);t&&a&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var p=getClientRect({top:o.top-s.top-f,left:o.left-s.left-d,width:o.width,height:o.height});if(p.marginTop=0,p.marginLeft=0,!r&&a){var v=parseFloat(u.marginTop),y=parseFloat(u.marginLeft);p.top-=f-v,p.bottom-=f-v,p.left-=d-y,p.right-=d-y,p.marginTop=v,p.marginLeft=y}return(r&&!t?e.contains(l):e===l&&l.nodeName!=="BODY")&&(p=includeScroll(p,e)),p}function getViewportOffsetRectRelativeToArtbitraryNode(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=n.ownerDocument.documentElement,r=getOffsetRectRelativeToArbitraryNode(n,t),a=Math.max(t.clientWidth,window.innerWidth||0),o=Math.max(t.clientHeight,window.innerHeight||0),s=e?0:getScroll(t),l=e?0:getScroll(t,"left"),u={top:s-r.top+r.marginTop,left:l-r.left+r.marginLeft,width:a,height:o};return getClientRect(u)}function isFixed(n){var e=n.nodeName;if(e==="BODY"||e==="HTML")return!1;if(getStyleComputedProperty(n,"position")==="fixed")return!0;var t=getParentNode(n);return t?isFixed(t):!1}function getFixedPositionOffsetParent(n){if(!n||!n.parentElement||isIE())return document.documentElement;for(var e=n.parentElement;e&&getStyleComputedProperty(e,"transform")==="none";)e=e.parentElement;return e||document.documentElement}function getBoundaries(n,e,t,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,o={top:0,left:0},s=a?getFixedPositionOffsetParent(n):findCommonOffsetParent(n,getReferenceNode(e));if(r==="viewport")o=getViewportOffsetRectRelativeToArtbitraryNode(s,a);else{var l=void 0;r==="scrollParent"?(l=getScrollParent(getParentNode(e)),l.nodeName==="BODY"&&(l=n.ownerDocument.documentElement)):r==="window"?l=n.ownerDocument.documentElement:l=r;var u=getOffsetRectRelativeToArbitraryNode(l,s,a);if(l.nodeName==="HTML"&&!isFixed(s)){var f=getWindowSizes(n.ownerDocument),d=f.height,p=f.width;o.top+=u.top-u.marginTop,o.bottom=d+u.top,o.left+=u.left-u.marginLeft,o.right=p+u.left}else o=u}t=t||0;var v=typeof t=="number";return o.left+=v?t:t.left||0,o.top+=v?t:t.top||0,o.right-=v?t:t.right||0,o.bottom-=v?t:t.bottom||0,o}function getArea(n){var e=n.width,t=n.height;return e*t}function computeAutoPlacement(n,e,t,r,a){var o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(n.indexOf("auto")===-1)return n;var s=getBoundaries(t,r,o,a),l={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},u=Object.keys(l).map(function(v){return _extends({key:v},l[v],{area:getArea(l[v])})}).sort(function(v,y){return y.area-v.area}),f=u.filter(function(v){var y=v.width,x=v.height;return y>=t.clientWidth&&x>=t.clientHeight}),d=f.length>0?f[0].key:u[0].key,p=n.split("-")[1];return d+(p?"-"+p:"")}function getReferenceOffsets(n,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,a=r?getFixedPositionOffsetParent(e):findCommonOffsetParent(e,getReferenceNode(t));return getOffsetRectRelativeToArbitraryNode(t,a,r)}function getOuterSizes(n){var e=n.ownerDocument.defaultView,t=e.getComputedStyle(n),r=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),a=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0),o={width:n.offsetWidth+a,height:n.offsetHeight+r};return o}function getOppositePlacement(n){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return n.replace(/left|right|bottom|top/g,function(t){return e[t]})}function getPopperOffsets(n,e,t){t=t.split("-")[0];var r=getOuterSizes(n),a={width:r.width,height:r.height},o=["right","left"].indexOf(t)!==-1,s=o?"top":"left",l=o?"left":"top",u=o?"height":"width",f=o?"width":"height";return a[s]=e[s]+e[u]/2-r[u]/2,t===l?a[l]=e[l]-r[f]:a[l]=e[getOppositePlacement(l)],a}function find(n,e){return Array.prototype.find?n.find(e):n.filter(e)[0]}function findIndex$1(n,e,t){if(Array.prototype.findIndex)return n.findIndex(function(a){return a[e]===t});var r=find(n,function(a){return a[e]===t});return n.indexOf(r)}function runModifiers(n,e,t){var r=t===void 0?n:n.slice(0,findIndex$1(n,"name",t));return r.forEach(function(a){a.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=a.function||a.fn;a.enabled&&isFunction$1(o)&&(e.offsets.popper=getClientRect(e.offsets.popper),e.offsets.reference=getClientRect(e.offsets.reference),e=o(e,a))}),e}function update(){if(!this.state.isDestroyed){var n={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};n.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed),n.placement=computeAutoPlacement(this.options.placement,n.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),n.originalPlacement=n.placement,n.positionFixed=this.options.positionFixed,n.offsets.popper=getPopperOffsets(this.popper,n.offsets.reference,n.placement),n.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",n=runModifiers(this.modifiers,n),this.state.isCreated?this.options.onUpdate(n):(this.state.isCreated=!0,this.options.onCreate(n))}}function isModifierEnabled(n,e){return n.some(function(t){var r=t.name,a=t.enabled;return a&&r===e})}function getSupportedPropertyName(n){for(var e=[!1,"ms","Webkit","Moz","O"],t=n.charAt(0).toUpperCase()+n.slice(1),r=0;r<e.length;r++){var a=e[r],o=a?""+a+t:n;if(typeof document.body.style[o]<"u")return o}return null}function destroy(){return this.state.isDestroyed=!0,isModifierEnabled(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[getSupportedPropertyName("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function getWindow(n){var e=n.ownerDocument;return e?e.defaultView:window}function attachToScrollParents(n,e,t,r){var a=n.nodeName==="BODY",o=a?n.ownerDocument.defaultView:n;o.addEventListener(e,t,{passive:!0}),a||attachToScrollParents(getScrollParent(o.parentNode),e,t,r),r.push(o)}function setupEventListeners(n,e,t,r){t.updateBound=r,getWindow(n).addEventListener("resize",t.updateBound,{passive:!0});var a=getScrollParent(n);return attachToScrollParents(a,"scroll",t.updateBound,t.scrollParents),t.scrollElement=a,t.eventsEnabled=!0,t}function enableEventListeners(){this.state.eventsEnabled||(this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate))}function removeEventListeners(n,e){return getWindow(n).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function disableEventListeners(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=removeEventListeners(this.reference,this.state))}function isNumeric(n){return n!==""&&!isNaN(parseFloat(n))&&isFinite(n)}function setStyles(n,e){Object.keys(e).forEach(function(t){var r="";["width","height","top","right","bottom","left"].indexOf(t)!==-1&&isNumeric(e[t])&&(r="px"),n.style[t]=e[t]+r})}function setAttributes(n,e){Object.keys(e).forEach(function(t){var r=e[t];r!==!1?n.setAttribute(t,e[t]):n.removeAttribute(t)})}function applyStyle(n){return setStyles(n.instance.popper,n.styles),setAttributes(n.instance.popper,n.attributes),n.arrowElement&&Object.keys(n.arrowStyles).length&&setStyles(n.arrowElement,n.arrowStyles),n}function applyStyleOnLoad(n,e,t,r,a){var o=getReferenceOffsets(a,e,n,t.positionFixed),s=computeAutoPlacement(t.placement,o,e,n,t.modifiers.flip.boundariesElement,t.modifiers.flip.padding);return e.setAttribute("x-placement",s),setStyles(e,{position:t.positionFixed?"fixed":"absolute"}),t}function getRoundedOffsets(n,e){var t=n.offsets,r=t.popper,a=t.reference,o=Math.round,s=Math.floor,l=function(A){return A},u=o(a.width),f=o(r.width),d=["left","right"].indexOf(n.placement)!==-1,p=n.placement.indexOf("-")!==-1,v=u%2===f%2,y=u%2===1&&f%2===1,x=e?d||p||v?o:s:l,E=e?o:l;return{left:x(y&&!p&&e?r.left-1:r.left),top:E(r.top),bottom:E(r.bottom),right:x(r.right)}}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);function computeStyle(n,e){var t=e.x,r=e.y,a=n.offsets.popper,o=find(n.instance.modifiers,function(V){return V.name==="applyStyle"}).gpuAcceleration;o!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=o!==void 0?o:e.gpuAcceleration,l=getOffsetParent(n.instance.popper),u=getBoundingClientRect(l),f={position:a.position},d=getRoundedOffsets(n,window.devicePixelRatio<2||!isFirefox),p=t==="bottom"?"top":"bottom",v=r==="right"?"left":"right",y=getSupportedPropertyName("transform"),x=void 0,E=void 0;if(p==="bottom"?l.nodeName==="HTML"?E=-l.clientHeight+d.bottom:E=-u.height+d.bottom:E=d.top,v==="right"?l.nodeName==="HTML"?x=-l.clientWidth+d.right:x=-u.width+d.right:x=d.left,s&&y)f[y]="translate3d("+x+"px, "+E+"px, 0)",f[p]=0,f[v]=0,f.willChange="transform";else{var C=p==="bottom"?-1:1,A=v==="right"?-1:1;f[p]=E*C,f[v]=x*A,f.willChange=p+", "+v}var M={"x-placement":n.placement};return n.attributes=_extends({},M,n.attributes),n.styles=_extends({},f,n.styles),n.arrowStyles=_extends({},n.offsets.arrow,n.arrowStyles),n}function isModifierRequired(n,e,t){var r=find(n,function(l){var u=l.name;return u===e}),a=!!r&&n.some(function(l){return l.name===t&&l.enabled&&l.order<r.order});if(!a){var o="`"+e+"`",s="`"+t+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return a}function arrow(n,e){var t;if(!isModifierRequired(n.instance.modifiers,"arrow","keepTogether"))return n;var r=e.element;if(typeof r=="string"){if(r=n.instance.popper.querySelector(r),!r)return n}else if(!n.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),n;var a=n.placement.split("-")[0],o=n.offsets,s=o.popper,l=o.reference,u=["left","right"].indexOf(a)!==-1,f=u?"height":"width",d=u?"Top":"Left",p=d.toLowerCase(),v=u?"left":"top",y=u?"bottom":"right",x=getOuterSizes(r)[f];l[y]-x<s[p]&&(n.offsets.popper[p]-=s[p]-(l[y]-x)),l[p]+x>s[y]&&(n.offsets.popper[p]+=l[p]+x-s[y]),n.offsets.popper=getClientRect(n.offsets.popper);var E=l[p]+l[f]/2-x/2,C=getStyleComputedProperty(n.instance.popper),A=parseFloat(C["margin"+d]),M=parseFloat(C["border"+d+"Width"]),V=E-n.offsets.popper[p]-A-M;return V=Math.max(Math.min(s[f]-x,V),0),n.arrowElement=r,n.offsets.arrow=(t={},defineProperty(t,p,Math.round(V)),defineProperty(t,v,""),t),n}function getOppositeVariation(n){return n==="end"?"start":n==="start"?"end":n}var placements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],validPlacements=placements.slice(3);function clockwise(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=validPlacements.indexOf(n),r=validPlacements.slice(t+1).concat(validPlacements.slice(0,t));return e?r.reverse():r}var BEHAVIORS={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function flip(n,e){if(isModifierEnabled(n.instance.modifiers,"inner")||n.flipped&&n.placement===n.originalPlacement)return n;var t=getBoundaries(n.instance.popper,n.instance.reference,e.padding,e.boundariesElement,n.positionFixed),r=n.placement.split("-")[0],a=getOppositePlacement(r),o=n.placement.split("-")[1]||"",s=[];switch(e.behavior){case BEHAVIORS.FLIP:s=[r,a];break;case BEHAVIORS.CLOCKWISE:s=clockwise(r);break;case BEHAVIORS.COUNTERCLOCKWISE:s=clockwise(r,!0);break;default:s=e.behavior}return s.forEach(function(l,u){if(r!==l||s.length===u+1)return n;r=n.placement.split("-")[0],a=getOppositePlacement(r);var f=n.offsets.popper,d=n.offsets.reference,p=Math.floor,v=r==="left"&&p(f.right)>p(d.left)||r==="right"&&p(f.left)<p(d.right)||r==="top"&&p(f.bottom)>p(d.top)||r==="bottom"&&p(f.top)<p(d.bottom),y=p(f.left)<p(t.left),x=p(f.right)>p(t.right),E=p(f.top)<p(t.top),C=p(f.bottom)>p(t.bottom),A=r==="left"&&y||r==="right"&&x||r==="top"&&E||r==="bottom"&&C,M=["top","bottom"].indexOf(r)!==-1,V=!!e.flipVariations&&(M&&o==="start"&&y||M&&o==="end"&&x||!M&&o==="start"&&E||!M&&o==="end"&&C),R=!!e.flipVariationsByContent&&(M&&o==="start"&&x||M&&o==="end"&&y||!M&&o==="start"&&C||!M&&o==="end"&&E),q=V||R;(v||A||q)&&(n.flipped=!0,(v||A)&&(r=s[u+1]),q&&(o=getOppositeVariation(o)),n.placement=r+(o?"-"+o:""),n.offsets.popper=_extends({},n.offsets.popper,getPopperOffsets(n.instance.popper,n.offsets.reference,n.placement)),n=runModifiers(n.instance.modifiers,n,"flip"))}),n}function keepTogether(n){var e=n.offsets,t=e.popper,r=e.reference,a=n.placement.split("-")[0],o=Math.floor,s=["top","bottom"].indexOf(a)!==-1,l=s?"right":"bottom",u=s?"left":"top",f=s?"width":"height";return t[l]<o(r[u])&&(n.offsets.popper[u]=o(r[u])-t[f]),t[u]>o(r[l])&&(n.offsets.popper[u]=o(r[l])),n}function toValue(n,e,t,r){var a=n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+a[1],s=a[2];if(!o)return n;if(s.indexOf("%")===0){var l=void 0;s==="%p"?l=t:l=r;var u=getClientRect(l);return u[e]/100*o}else if(s==="vh"||s==="vw"){var f=void 0;return s==="vh"?f=Math.max(document.documentElement.clientHeight,window.innerHeight||0):f=Math.max(document.documentElement.clientWidth,window.innerWidth||0),f/100*o}else return o}function parseOffset(n,e,t,r){var a=[0,0],o=["right","left"].indexOf(r)!==-1,s=n.split(/(\+|\-)/).map(function(d){return d.trim()}),l=s.indexOf(find(s,function(d){return d.search(/,|\s/)!==-1}));s[l]&&s[l].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,f=l!==-1?[s.slice(0,l).concat([s[l].split(u)[0]]),[s[l].split(u)[1]].concat(s.slice(l+1))]:[s];return f=f.map(function(d,p){var v=(p===1?!o:o)?"height":"width",y=!1;return d.reduce(function(x,E){return x[x.length-1]===""&&["+","-"].indexOf(E)!==-1?(x[x.length-1]=E,y=!0,x):y?(x[x.length-1]+=E,y=!1,x):x.concat(E)},[]).map(function(x){return toValue(x,v,e,t)})}),f.forEach(function(d,p){d.forEach(function(v,y){isNumeric(v)&&(a[p]+=v*(d[y-1]==="-"?-1:1))})}),a}function offset(n,e){var t=e.offset,r=n.placement,a=n.offsets,o=a.popper,s=a.reference,l=r.split("-")[0],u=void 0;return isNumeric(+t)?u=[+t,0]:u=parseOffset(t,o,s,l),l==="left"?(o.top+=u[0],o.left-=u[1]):l==="right"?(o.top+=u[0],o.left+=u[1]):l==="top"?(o.left+=u[0],o.top-=u[1]):l==="bottom"&&(o.left+=u[0],o.top+=u[1]),n.popper=o,n}function preventOverflow(n,e){var t=e.boundariesElement||getOffsetParent(n.instance.popper);n.instance.reference===t&&(t=getOffsetParent(t));var r=getSupportedPropertyName("transform"),a=n.instance.popper.style,o=a.top,s=a.left,l=a[r];a.top="",a.left="",a[r]="";var u=getBoundaries(n.instance.popper,n.instance.reference,e.padding,t,n.positionFixed);a.top=o,a.left=s,a[r]=l,e.boundaries=u;var f=e.priority,d=n.offsets.popper,p={primary:function(y){var x=d[y];return d[y]<u[y]&&!e.escapeWithReference&&(x=Math.max(d[y],u[y])),defineProperty({},y,x)},secondary:function(y){var x=y==="right"?"left":"top",E=d[x];return d[y]>u[y]&&!e.escapeWithReference&&(E=Math.min(d[x],u[y]-(y==="right"?d.width:d.height))),defineProperty({},x,E)}};return f.forEach(function(v){var y=["left","top"].indexOf(v)!==-1?"primary":"secondary";d=_extends({},d,p[y](v))}),n.offsets.popper=d,n}function shift(n){var e=n.placement,t=e.split("-")[0],r=e.split("-")[1];if(r){var a=n.offsets,o=a.reference,s=a.popper,l=["bottom","top"].indexOf(t)!==-1,u=l?"left":"top",f=l?"width":"height",d={start:defineProperty({},u,o[u]),end:defineProperty({},u,o[u]+o[f]-s[f])};n.offsets.popper=_extends({},s,d[r])}return n}function hide(n){if(!isModifierRequired(n.instance.modifiers,"hide","preventOverflow"))return n;var e=n.offsets.reference,t=find(n.instance.modifiers,function(r){return r.name==="preventOverflow"}).boundaries;if(e.bottom<t.top||e.left>t.right||e.top>t.bottom||e.right<t.left){if(n.hide===!0)return n;n.hide=!0,n.attributes["x-out-of-boundaries"]=""}else{if(n.hide===!1)return n;n.hide=!1,n.attributes["x-out-of-boundaries"]=!1}return n}function inner(n){var e=n.placement,t=e.split("-")[0],r=n.offsets,a=r.popper,o=r.reference,s=["left","right"].indexOf(t)!==-1,l=["top","left"].indexOf(t)===-1;return a[s?"left":"top"]=o[t]-(l?a[s?"width":"height"]:0),n.placement=getOppositePlacement(e),n.offsets.popper=getClientRect(a),n}var modifiers={shift:{order:100,enabled:!0,fn:shift},offset:{order:200,enabled:!0,fn:offset,offset:0},preventOverflow:{order:300,enabled:!0,fn:preventOverflow,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:keepTogether},arrow:{order:500,enabled:!0,fn:arrow,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:flip,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:inner},hide:{order:800,enabled:!0,fn:hide},computeStyle:{order:850,enabled:!0,fn:computeStyle,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:void 0}},Defaults$1={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers},Popper=(function(){function n(e,t){var r=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};classCallCheck(this,n),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=debounce$2(this.update.bind(this)),this.options=_extends({},n.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(_extends({},n.Defaults.modifiers,a.modifiers)).forEach(function(s){r.options.modifiers[s]=_extends({},n.Defaults.modifiers[s]||{},a.modifiers?a.modifiers[s]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(s){return _extends({name:s},r.options.modifiers[s])}).sort(function(s,l){return s.order-l.order}),this.modifiers.forEach(function(s){s.enabled&&isFunction$1(s.onLoad)&&s.onLoad(r.reference,r.popper,r.options,s,r.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return createClass(n,[{key:"update",value:function(){return update.call(this)}},{key:"destroy",value:function(){return destroy.call(this)}},{key:"enableEventListeners",value:function(){return enableEventListeners.call(this)}},{key:"disableEventListeners",value:function(){return disableEventListeners.call(this)}}]),n})();Popper.Utils=(typeof window<"u"?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults$1;const popper=Object.freeze(Object.defineProperty({__proto__:null,default:Popper},Symbol.toStringTag,{value:"Module"})),require$$1=getAugmentedNamespace(popper);var bootstrap=bootstrap$1.exports,hasRequiredBootstrap;function requireBootstrap(){return hasRequiredBootstrap||(hasRequiredBootstrap=1,(function(n,e){(function(t,r){r(e,requireJquery(),require$$1)})(bootstrap,(function(t,r,a){function o(z){return z&&typeof z=="object"&&"default"in z?z:{default:z}}var s=o(r),l=o(a);function u(z,H){for(var N=0;N<H.length;N++){var b=H[N];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(z,b.key,b)}}function f(z,H,N){return N&&u(z,N),Object.defineProperty(z,"prototype",{writable:!1}),z}function d(){return d=Object.assign?Object.assign.bind():function(z){for(var H=1;H<arguments.length;H++){var N=arguments[H];for(var b in N)Object.prototype.hasOwnProperty.call(N,b)&&(z[b]=N[b])}return z},d.apply(this,arguments)}function p(z,H){z.prototype=Object.create(H.prototype),z.prototype.constructor=z,v(z,H)}function v(z,H){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,T){return b.__proto__=T,b},v(z,H)}var y="transitionend",x=1e6,E=1e3;function C(z){return z===null||typeof z>"u"?""+z:{}.toString.call(z).match(/\s([a-z]+)/i)[1].toLowerCase()}function A(){return{bindType:y,delegateType:y,handle:function(H){if(s.default(H.target).is(this))return H.handleObj.handler.apply(this,arguments)}}}function M(z){var H=this,N=!1;return s.default(this).one(R.TRANSITION_END,function(){N=!0}),setTimeout(function(){N||R.triggerTransitionEnd(H)},z),this}function V(){s.default.fn.emulateTransitionEnd=M,s.default.event.special[R.TRANSITION_END]=A()}var R={TRANSITION_END:"bsTransitionEnd",getUID:function(H){do H+=~~(Math.random()*x);while(document.getElementById(H));return H},getSelectorFromElement:function(H){var N=H.getAttribute("data-target");if(!N||N==="#"){var b=H.getAttribute("href");N=b&&b!=="#"?b.trim():""}try{return document.querySelector(N)?N:null}catch{return null}},getTransitionDurationFromElement:function(H){if(!H)return 0;var N=s.default(H).css("transition-duration"),b=s.default(H).css("transition-delay"),T=parseFloat(N),I=parseFloat(b);return!T&&!I?0:(N=N.split(",")[0],b=b.split(",")[0],(parseFloat(N)+parseFloat(b))*E)},reflow:function(H){return H.offsetHeight},triggerTransitionEnd:function(H){s.default(H).trigger(y)},supportsTransitionEnd:function(){return!!y},isElement:function(H){return(H[0]||H).nodeType},typeCheckConfig:function(H,N,b){for(var T in b)if(Object.prototype.hasOwnProperty.call(b,T)){var I=b[T],G=N[T],Z=G&&R.isElement(G)?"element":C(G);if(!new RegExp(I).test(Z))throw new Error(H.toUpperCase()+": "+('Option "'+T+'" provided type "'+Z+'" ')+('but expected type "'+I+'".'))}},findShadowRoot:function(H){if(!document.documentElement.attachShadow)return null;if(typeof H.getRootNode=="function"){var N=H.getRootNode();return N instanceof ShadowRoot?N:null}return H instanceof ShadowRoot?H:H.parentNode?R.findShadowRoot(H.parentNode):null},jQueryDetection:function(){if(typeof s.default>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var H=s.default.fn.jquery.split(" ")[0].split("."),N=1,b=2,T=9,I=1,G=4;if(H[0]<b&&H[1]<T||H[0]===N&&H[1]===T&&H[2]<I||H[0]>=G)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};R.jQueryDetection(),V();var q="alert",Q="4.6.2",m="bs.alert",ne="."+m,re=".data-api",ge=s.default.fn[q],ve="alert",_e="fade",ue="show",He="close"+ne,pe="closed"+ne,Se="click"+ne+re,xe='[data-dismiss="alert"]',je=(function(){function z(N){this._element=N}var H=z.prototype;return H.close=function(b){var T=this._element;b&&(T=this._getRootElement(b));var I=this._triggerCloseEvent(T);I.isDefaultPrevented()||this._removeElement(T)},H.dispose=function(){s.default.removeData(this._element,m),this._element=null},H._getRootElement=function(b){var T=R.getSelectorFromElement(b),I=!1;return T&&(I=document.querySelector(T)),I||(I=s.default(b).closest("."+ve)[0]),I},H._triggerCloseEvent=function(b){var T=s.default.Event(He);return s.default(b).trigger(T),T},H._removeElement=function(b){var T=this;if(s.default(b).removeClass(ue),!s.default(b).hasClass(_e)){this._destroyElement(b);return}var I=R.getTransitionDurationFromElement(b);s.default(b).one(R.TRANSITION_END,function(G){return T._destroyElement(b,G)}).emulateTransitionEnd(I)},H._destroyElement=function(b){s.default(b).detach().trigger(pe).remove()},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this),I=T.data(m);I||(I=new z(this),T.data(m,I)),b==="close"&&I[b](this)})},z._handleDismiss=function(b){return function(T){T&&T.preventDefault(),b.close(this)}},f(z,null,[{key:"VERSION",get:function(){return Q}}]),z})();s.default(document).on(Se,xe,je._handleDismiss(new je)),s.default.fn[q]=je._jQueryInterface,s.default.fn[q].Constructor=je,s.default.fn[q].noConflict=function(){return s.default.fn[q]=ge,je._jQueryInterface};var Le="button",ct="4.6.2",Ge="bs.button",We="."+Ge,et=".data-api",rt=s.default.fn[Le],Ke="active",Pe="btn",ze="focus",tt="click"+We+et,sn="focus"+We+et+" "+("blur"+We+et),gt="load"+We+et,Mn='[data-toggle^="button"]',yt='[data-toggle="buttons"]',bn='[data-toggle="button"]',Un='[data-toggle="buttons"] .btn',yn='input:not([type="hidden"])',$n=".active",qt=".btn",ot=(function(){function z(N){this._element=N,this.shouldAvoidTriggerChange=!1}var H=z.prototype;return H.toggle=function(){var b=!0,T=!0,I=s.default(this._element).closest(yt)[0];if(I){var G=this._element.querySelector(yn);if(G){if(G.type==="radio")if(G.checked&&this._element.classList.contains(Ke))b=!1;else{var Z=I.querySelector($n);Z&&s.default(Z).removeClass(Ke)}b&&((G.type==="checkbox"||G.type==="radio")&&(G.checked=!this._element.classList.contains(Ke)),this.shouldAvoidTriggerChange||s.default(G).trigger("change")),G.focus(),T=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(T&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Ke)),b&&s.default(this._element).toggleClass(Ke))},H.dispose=function(){s.default.removeData(this._element,Ge),this._element=null},z._jQueryInterface=function(b,T){return this.each(function(){var I=s.default(this),G=I.data(Ge);G||(G=new z(this),I.data(Ge,G)),G.shouldAvoidTriggerChange=T,b==="toggle"&&G[b]()})},f(z,null,[{key:"VERSION",get:function(){return ct}}]),z})();s.default(document).on(tt,Mn,function(z){var H=z.target,N=H;if(s.default(H).hasClass(Pe)||(H=s.default(H).closest(qt)[0]),!H||H.hasAttribute("disabled")||H.classList.contains("disabled"))z.preventDefault();else{var b=H.querySelector(yn);if(b&&(b.hasAttribute("disabled")||b.classList.contains("disabled"))){z.preventDefault();return}(N.tagName==="INPUT"||H.tagName!=="LABEL")&&ot._jQueryInterface.call(s.default(H),"toggle",N.tagName==="INPUT")}}).on(sn,Mn,function(z){var H=s.default(z.target).closest(qt)[0];s.default(H).toggleClass(ze,/^focus(in)?$/.test(z.type))}),s.default(window).on(gt,function(){for(var z=[].slice.call(document.querySelectorAll(Un)),H=0,N=z.length;H<N;H++){var b=z[H],T=b.querySelector(yn);T.checked||T.hasAttribute("checked")?b.classList.add(Ke):b.classList.remove(Ke)}z=[].slice.call(document.querySelectorAll(bn));for(var I=0,G=z.length;I<G;I++){var Z=z[I];Z.getAttribute("aria-pressed")==="true"?Z.classList.add(Ke):Z.classList.remove(Ke)}}),s.default.fn[Le]=ot._jQueryInterface,s.default.fn[Le].Constructor=ot,s.default.fn[Le].noConflict=function(){return s.default.fn[Le]=rt,ot._jQueryInterface};var xt="carousel",ir="4.6.2",ln="bs.carousel",Ye="."+ln,St=".data-api",Ut=s.default.fn[xt],me=37,st=39,zn=500,ar=40,Yn="carousel",Tt="active",Xn="slide",zt="carousel-item-right",wt="carousel-item-left",Ht="carousel-item-next",Ve="carousel-item-prev",In="pointer-event",Dt="next",un="prev",cn="left",Ln="right",lt="slide"+Ye,Yt="slid"+Ye,Gn="keydown"+Ye,O="mouseenter"+Ye,P="mouseleave"+Ye,B="touchstart"+Ye,J="touchmove"+Ye,oe="touchend"+Ye,le="pointerdown"+Ye,Oe="pointerup"+Ye,de="dragstart"+Ye,Te="load"+Ye+St,he="click"+Ye+St,we=".active",Be=".active.carousel-item",mt=".carousel-item",ft=".carousel-item img",Xt=".carousel-item-next, .carousel-item-prev",Gt=".carousel-indicators",or="[data-slide], [data-slide-to]",xn='[data-ride="carousel"]',Nn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Kt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Rn={TOUCH:"touch",PEN:"pen"},At=(function(){function z(N,b){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(b),this._element=N,this._indicatorsElement=this._element.querySelector(Gt),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var H=z.prototype;return H.next=function(){this._isSliding||this._slide(Dt)},H.nextWhenVisible=function(){var b=s.default(this._element);!document.hidden&&b.is(":visible")&&b.css("visibility")!=="hidden"&&this.next()},H.prev=function(){this._isSliding||this._slide(un)},H.pause=function(b){b||(this._isPaused=!0),this._element.querySelector(Xt)&&(R.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},H.cycle=function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},H.to=function(b){var T=this;this._activeElement=this._element.querySelector(Be);var I=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding){s.default(this._element).one(Yt,function(){return T.to(b)});return}if(I===b){this.pause(),this.cycle();return}var G=b>I?Dt:un;this._slide(G,this._items[b])}},H.dispose=function(){s.default(this._element).off(Ye),s.default.removeData(this._element,ln),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},H._getConfig=function(b){return b=d({},Nn,b),R.typeCheckConfig(xt,b,Kt),b},H._handleSwipe=function(){var b=Math.abs(this.touchDeltaX);if(!(b<=ar)){var T=b/this.touchDeltaX;this.touchDeltaX=0,T>0&&this.prev(),T<0&&this.next()}},H._addEventListeners=function(){var b=this;this._config.keyboard&&s.default(this._element).on(Gn,function(T){return b._keydown(T)}),this._config.pause==="hover"&&s.default(this._element).on(O,function(T){return b.pause(T)}).on(P,function(T){return b.cycle(T)}),this._config.touch&&this._addTouchEventListeners()},H._addTouchEventListeners=function(){var b=this;if(this._touchSupported){var T=function(ae){b._pointerEvent&&Rn[ae.originalEvent.pointerType.toUpperCase()]?b.touchStartX=ae.originalEvent.clientX:b._pointerEvent||(b.touchStartX=ae.originalEvent.touches[0].clientX)},I=function(ae){b.touchDeltaX=ae.originalEvent.touches&&ae.originalEvent.touches.length>1?0:ae.originalEvent.touches[0].clientX-b.touchStartX},G=function(ae){b._pointerEvent&&Rn[ae.originalEvent.pointerType.toUpperCase()]&&(b.touchDeltaX=ae.originalEvent.clientX-b.touchStartX),b._handleSwipe(),b._config.pause==="hover"&&(b.pause(),b.touchTimeout&&clearTimeout(b.touchTimeout),b.touchTimeout=setTimeout(function(Ce){return b.cycle(Ce)},zn+b._config.interval))};s.default(this._element.querySelectorAll(ft)).on(de,function(Z){return Z.preventDefault()}),this._pointerEvent?(s.default(this._element).on(le,function(Z){return T(Z)}),s.default(this._element).on(Oe,function(Z){return G(Z)}),this._element.classList.add(In)):(s.default(this._element).on(B,function(Z){return T(Z)}),s.default(this._element).on(J,function(Z){return I(Z)}),s.default(this._element).on(oe,function(Z){return G(Z)}))}},H._keydown=function(b){if(!/input|textarea/i.test(b.target.tagName))switch(b.which){case me:b.preventDefault(),this.prev();break;case st:b.preventDefault(),this.next();break}},H._getItemIndex=function(b){return this._items=b&&b.parentNode?[].slice.call(b.parentNode.querySelectorAll(mt)):[],this._items.indexOf(b)},H._getItemByDirection=function(b,T){var I=b===Dt,G=b===un,Z=this._getItemIndex(T),ae=this._items.length-1,Ce=G&&Z===0||I&&Z===ae;if(Ce&&!this._config.wrap)return T;var qe=b===un?-1:1,Ue=(Z+qe)%this._items.length;return Ue===-1?this._items[this._items.length-1]:this._items[Ue]},H._triggerSlideEvent=function(b,T){var I=this._getItemIndex(b),G=this._getItemIndex(this._element.querySelector(Be)),Z=s.default.Event(lt,{relatedTarget:b,direction:T,from:G,to:I});return s.default(this._element).trigger(Z),Z},H._setActiveIndicatorElement=function(b){if(this._indicatorsElement){var T=[].slice.call(this._indicatorsElement.querySelectorAll(we));s.default(T).removeClass(Tt);var I=this._indicatorsElement.children[this._getItemIndex(b)];I&&s.default(I).addClass(Tt)}},H._updateInterval=function(){var b=this._activeElement||this._element.querySelector(Be);if(b){var T=parseInt(b.getAttribute("data-interval"),10);T?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=T):this._config.interval=this._config.defaultInterval||this._config.interval}},H._slide=function(b,T){var I=this,G=this._element.querySelector(Be),Z=this._getItemIndex(G),ae=T||G&&this._getItemByDirection(b,G),Ce=this._getItemIndex(ae),qe=!!this._interval,Ue,ut,on;if(b===Dt?(Ue=wt,ut=Ht,on=cn):(Ue=zt,ut=Ve,on=Ln),ae&&s.default(ae).hasClass(Tt)){this._isSliding=!1;return}var Vt=this._triggerSlideEvent(ae,on);if(!Vt.isDefaultPrevented()&&!(!G||!ae)){this._isSliding=!0,qe&&this.pause(),this._setActiveIndicatorElement(ae),this._activeElement=ae;var rr=s.default.Event(Yt,{relatedTarget:ae,direction:on,from:Z,to:Ce});if(s.default(this._element).hasClass(Xn)){s.default(ae).addClass(ut),R.reflow(ae),s.default(G).addClass(Ue),s.default(ae).addClass(Ue);var gi=R.getTransitionDurationFromElement(G);s.default(G).one(R.TRANSITION_END,function(){s.default(ae).removeClass(Ue+" "+ut).addClass(Tt),s.default(G).removeClass(Tt+" "+ut+" "+Ue),I._isSliding=!1,setTimeout(function(){return s.default(I._element).trigger(rr)},0)}).emulateTransitionEnd(gi)}else s.default(G).removeClass(Tt),s.default(ae).addClass(Tt),this._isSliding=!1,s.default(this._element).trigger(rr);qe&&this.cycle()}},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this).data(ln),I=d({},Nn,s.default(this).data());typeof b=="object"&&(I=d({},I,b));var G=typeof b=="string"?b:I.slide;if(T||(T=new z(this,I),s.default(this).data(ln,T)),typeof b=="number")T.to(b);else if(typeof G=="string"){if(typeof T[G]>"u")throw new TypeError('No method named "'+G+'"');T[G]()}else I.interval&&I.ride&&(T.pause(),T.cycle())})},z._dataApiClickHandler=function(b){var T=R.getSelectorFromElement(this);if(T){var I=s.default(T)[0];if(!(!I||!s.default(I).hasClass(Yn))){var G=d({},s.default(I).data(),s.default(this).data()),Z=this.getAttribute("data-slide-to");Z&&(G.interval=!1),z._jQueryInterface.call(s.default(I),G),Z&&s.default(I).data(ln).to(Z),b.preventDefault()}}},f(z,null,[{key:"VERSION",get:function(){return ir}},{key:"Default",get:function(){return Nn}}]),z})();s.default(document).on(he,or,At._dataApiClickHandler),s.default(window).on(Te,function(){for(var z=[].slice.call(document.querySelectorAll(xn)),H=0,N=z.length;H<N;H++){var b=s.default(z[H]);At._jQueryInterface.call(b,b.data())}}),s.default.fn[xt]=At._jQueryInterface,s.default.fn[xt].Constructor=At,s.default.fn[xt].noConflict=function(){return s.default.fn[xt]=Ut,At._jQueryInterface};var Ot="collapse",wn="4.6.2",Pt="bs.collapse",fn="."+Pt,Fn=".data-api",$r=s.default.fn[Ot],Qt="show",Dn="collapse",Hn="collapsing",sr="collapsed",Kn="width",Jr="height",Zr="show"+fn,Ir="shown"+fn,Lr="hide"+fn,lr="hidden"+fn,Nr="click"+fn+Fn,ht=".show, .collapsing",dn='[data-toggle="collapse"]',En={toggle:!0,parent:""},ei={toggle:"boolean",parent:"(string|element)"},jn=(function(){function z(N,b){this._isTransitioning=!1,this._element=N,this._config=this._getConfig(b),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+N.id+'"],'+('[data-toggle="collapse"][data-target="#'+N.id+'"]')));for(var T=[].slice.call(document.querySelectorAll(dn)),I=0,G=T.length;I<G;I++){var Z=T[I],ae=R.getSelectorFromElement(Z),Ce=[].slice.call(document.querySelectorAll(ae)).filter(function(qe){return qe===N});ae!==null&&Ce.length>0&&(this._selector=ae,this._triggerArray.push(Z))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var H=z.prototype;return H.toggle=function(){s.default(this._element).hasClass(Qt)?this.hide():this.show()},H.show=function(){var b=this;if(!(this._isTransitioning||s.default(this._element).hasClass(Qt))){var T,I;if(this._parent&&(T=[].slice.call(this._parent.querySelectorAll(ht)).filter(function(ut){return typeof b._config.parent=="string"?ut.getAttribute("data-parent")===b._config.parent:ut.classList.contains(Dn)}),T.length===0&&(T=null)),!(T&&(I=s.default(T).not(this._selector).data(Pt),I&&I._isTransitioning))){var G=s.default.Event(Zr);if(s.default(this._element).trigger(G),!G.isDefaultPrevented()){T&&(z._jQueryInterface.call(s.default(T).not(this._selector),"hide"),I||s.default(T).data(Pt,null));var Z=this._getDimension();s.default(this._element).removeClass(Dn).addClass(Hn),this._element.style[Z]=0,this._triggerArray.length&&s.default(this._triggerArray).removeClass(sr).attr("aria-expanded",!0),this.setTransitioning(!0);var ae=function(){s.default(b._element).removeClass(Hn).addClass(Dn+" "+Qt),b._element.style[Z]="",b.setTransitioning(!1),s.default(b._element).trigger(Ir)},Ce=Z[0].toUpperCase()+Z.slice(1),qe="scroll"+Ce,Ue=R.getTransitionDurationFromElement(this._element);s.default(this._element).one(R.TRANSITION_END,ae).emulateTransitionEnd(Ue),this._element.style[Z]=this._element[qe]+"px"}}}},H.hide=function(){var b=this;if(!(this._isTransitioning||!s.default(this._element).hasClass(Qt))){var T=s.default.Event(Lr);if(s.default(this._element).trigger(T),!T.isDefaultPrevented()){var I=this._getDimension();this._element.style[I]=this._element.getBoundingClientRect()[I]+"px",R.reflow(this._element),s.default(this._element).addClass(Hn).removeClass(Dn+" "+Qt);var G=this._triggerArray.length;if(G>0)for(var Z=0;Z<G;Z++){var ae=this._triggerArray[Z],Ce=R.getSelectorFromElement(ae);if(Ce!==null){var qe=s.default([].slice.call(document.querySelectorAll(Ce)));qe.hasClass(Qt)||s.default(ae).addClass(sr).attr("aria-expanded",!1)}}this.setTransitioning(!0);var Ue=function(){b.setTransitioning(!1),s.default(b._element).removeClass(Hn).addClass(Dn).trigger(lr)};this._element.style[I]="";var ut=R.getTransitionDurationFromElement(this._element);s.default(this._element).one(R.TRANSITION_END,Ue).emulateTransitionEnd(ut)}}},H.setTransitioning=function(b){this._isTransitioning=b},H.dispose=function(){s.default.removeData(this._element,Pt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},H._getConfig=function(b){return b=d({},En,b),b.toggle=!!b.toggle,R.typeCheckConfig(Ot,b,ei),b},H._getDimension=function(){var b=s.default(this._element).hasClass(Kn);return b?Kn:Jr},H._getParent=function(){var b=this,T;R.isElement(this._config.parent)?(T=this._config.parent,typeof this._config.parent.jquery<"u"&&(T=this._config.parent[0])):T=document.querySelector(this._config.parent);var I='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',G=[].slice.call(T.querySelectorAll(I));return s.default(G).each(function(Z,ae){b._addAriaAndCollapsedClass(z._getTargetFromElement(ae),[ae])}),T},H._addAriaAndCollapsedClass=function(b,T){var I=s.default(b).hasClass(Qt);T.length&&s.default(T).toggleClass(sr,!I).attr("aria-expanded",I)},z._getTargetFromElement=function(b){var T=R.getSelectorFromElement(b);return T?document.querySelector(T):null},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this),I=T.data(Pt),G=d({},En,T.data(),typeof b=="object"&&b?b:{});if(!I&&G.toggle&&typeof b=="string"&&/show|hide/.test(b)&&(G.toggle=!1),I||(I=new z(this,G),T.data(Pt,I)),typeof b=="string"){if(typeof I[b]>"u")throw new TypeError('No method named "'+b+'"');I[b]()}})},f(z,null,[{key:"VERSION",get:function(){return wn}},{key:"Default",get:function(){return En}}]),z})();s.default(document).on(Nr,dn,function(z){z.currentTarget.tagName==="A"&&z.preventDefault();var H=s.default(this),N=R.getSelectorFromElement(this),b=[].slice.call(document.querySelectorAll(N));s.default(b).each(function(){var T=s.default(this),I=T.data(Pt),G=I?"toggle":H.data();jn._jQueryInterface.call(T,G)})}),s.default.fn[Ot]=jn._jQueryInterface,s.default.fn[Ot].Constructor=jn,s.default.fn[Ot].noConflict=function(){return s.default.fn[Ot]=$r,jn._jQueryInterface};var Jt="dropdown",Rr="4.6.2",Zt="bs.dropdown",kt="."+Zt,ur=".data-api",ti=s.default.fn[Jt],dt=27,cr=32,Cn=9,fr=38,dr=40,hn=3,pn=new RegExp(fr+"|"+dr+"|"+dt),Sn="disabled",Et="show",Bn="dropup",Fr="dropright",hr="dropleft",pr="dropdown-menu-right",Hr="position-static",jr="hide"+kt,gr="hidden"+kt,ni="show"+kt,ri="shown"+kt,mr="click"+kt,vr="click"+kt+ur,Br="keydown"+kt+ur,ii="keyup"+kt+ur,Qn='[data-toggle="dropdown"]',ai=".dropdown form",_r=".dropdown-menu",oi=".navbar-nav",Wr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",br="top-start",Vr="top-end",yr="bottom-start",qr="bottom-end",Ur="right-start",xr="left-start",si={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},li={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=(function(){function z(N,b){this._element=N,this._popper=null,this._config=this._getConfig(b),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var H=z.prototype;return H.toggle=function(){if(!(this._element.disabled||s.default(this._element).hasClass(Sn))){var b=s.default(this._menu).hasClass(Et);z._clearMenus(),!b&&this.show(!0)}},H.show=function(b){if(b===void 0&&(b=!1),!(this._element.disabled||s.default(this._element).hasClass(Sn)||s.default(this._menu).hasClass(Et))){var T={relatedTarget:this._element},I=s.default.Event(ni,T),G=z._getParentFromElement(this._element);if(s.default(G).trigger(I),!I.isDefaultPrevented()){if(!this._inNavbar&&b){if(typeof l.default>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var Z=this._element;this._config.reference==="parent"?Z=G:R.isElement(this._config.reference)&&(Z=this._config.reference,typeof this._config.reference.jquery<"u"&&(Z=this._config.reference[0])),this._config.boundary!=="scrollParent"&&s.default(G).addClass(Hr),this._popper=new l.default(Z,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&s.default(G).closest(oi).length===0&&s.default(document.body).children().on("mouseover",null,s.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),s.default(this._menu).toggleClass(Et),s.default(G).toggleClass(Et).trigger(s.default.Event(ri,T))}}},H.hide=function(){if(!(this._element.disabled||s.default(this._element).hasClass(Sn)||!s.default(this._menu).hasClass(Et))){var b={relatedTarget:this._element},T=s.default.Event(jr,b),I=z._getParentFromElement(this._element);s.default(I).trigger(T),!T.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),s.default(this._menu).toggleClass(Et),s.default(I).toggleClass(Et).trigger(s.default.Event(gr,b)))}},H.dispose=function(){s.default.removeData(this._element,Zt),s.default(this._element).off(kt),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},H.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},H._addEventListeners=function(){var b=this;s.default(this._element).on(mr,function(T){T.preventDefault(),T.stopPropagation(),b.toggle()})},H._getConfig=function(b){return b=d({},this.constructor.Default,s.default(this._element).data(),b),R.typeCheckConfig(Jt,b,this.constructor.DefaultType),b},H._getMenuElement=function(){if(!this._menu){var b=z._getParentFromElement(this._element);b&&(this._menu=b.querySelector(_r))}return this._menu},H._getPlacement=function(){var b=s.default(this._element.parentNode),T=yr;return b.hasClass(Bn)?T=s.default(this._menu).hasClass(pr)?Vr:br:b.hasClass(Fr)?T=Ur:b.hasClass(hr)?T=xr:s.default(this._menu).hasClass(pr)&&(T=qr),T},H._detectNavbar=function(){return s.default(this._element).closest(".navbar").length>0},H._getOffset=function(){var b=this,T={};return typeof this._config.offset=="function"?T.fn=function(I){return I.offsets=d({},I.offsets,b._config.offset(I.offsets,b._element)),I}:T.offset=this._config.offset,T},H._getPopperConfig=function(){var b={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(b.modifiers.applyStyle={enabled:!1}),d({},b,this._config.popperConfig)},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this).data(Zt),I=typeof b=="object"?b:null;if(T||(T=new z(this,I),s.default(this).data(Zt,T)),typeof b=="string"){if(typeof T[b]>"u")throw new TypeError('No method named "'+b+'"');T[b]()}})},z._clearMenus=function(b){if(!(b&&(b.which===hn||b.type==="keyup"&&b.which!==Cn)))for(var T=[].slice.call(document.querySelectorAll(Qn)),I=0,G=T.length;I<G;I++){var Z=z._getParentFromElement(T[I]),ae=s.default(T[I]).data(Zt),Ce={relatedTarget:T[I]};if(b&&b.type==="click"&&(Ce.clickEvent=b),!!ae){var qe=ae._menu;if(s.default(Z).hasClass(Et)&&!(b&&(b.type==="click"&&/input|textarea/i.test(b.target.tagName)||b.type==="keyup"&&b.which===Cn)&&s.default.contains(Z,b.target))){var Ue=s.default.Event(jr,Ce);s.default(Z).trigger(Ue),!Ue.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&s.default(document.body).children().off("mouseover",null,s.default.noop),T[I].setAttribute("aria-expanded","false"),ae._popper&&ae._popper.destroy(),s.default(qe).removeClass(Et),s.default(Z).removeClass(Et).trigger(s.default.Event(gr,Ce)))}}}},z._getParentFromElement=function(b){var T,I=R.getSelectorFromElement(b);return I&&(T=document.querySelector(I)),T||b.parentNode},z._dataApiKeydownHandler=function(b){if(!(/input|textarea/i.test(b.target.tagName)?b.which===cr||b.which!==dt&&(b.which!==dr&&b.which!==fr||s.default(b.target).closest(_r).length):!pn.test(b.which))&&!(this.disabled||s.default(this).hasClass(Sn))){var T=z._getParentFromElement(this),I=s.default(T).hasClass(Et);if(!(!I&&b.which===dt)){if(b.preventDefault(),b.stopPropagation(),!I||b.which===dt||b.which===cr){b.which===dt&&s.default(T.querySelector(Qn)).trigger("focus"),s.default(this).trigger("click");return}var G=[].slice.call(T.querySelectorAll(Wr)).filter(function(ae){return s.default(ae).is(":visible")});if(G.length!==0){var Z=G.indexOf(b.target);b.which===fr&&Z>0&&Z--,b.which===dr&&Z<G.length-1&&Z++,Z<0&&(Z=0),G[Z].focus()}}}},f(z,null,[{key:"VERSION",get:function(){return Rr}},{key:"Default",get:function(){return si}},{key:"DefaultType",get:function(){return li}}]),z})();s.default(document).on(Br,Qn,en._dataApiKeydownHandler).on(Br,_r,en._dataApiKeydownHandler).on(vr+" "+ii,en._clearMenus).on(vr,Qn,function(z){z.preventDefault(),z.stopPropagation(),en._jQueryInterface.call(s.default(this),"toggle")}).on(vr,ai,function(z){z.stopPropagation()}),s.default.fn[Jt]=en._jQueryInterface,s.default.fn[Jt].Constructor=en,s.default.fn[Jt].noConflict=function(){return s.default.fn[Jt]=ti,en._jQueryInterface};var Mt="modal",zr="4.6.2",gn="bs.modal",pt="."+gn,ui=".data-api",ci=s.default.fn[Mt],c=27,h="modal-dialog-scrollable",g="modal-scrollbar-measure",_="modal-backdrop",w="modal-open",D="fade",S="show",F="modal-static",L="hide"+pt,W="hidePrevented"+pt,K="hidden"+pt,ee="show"+pt,Y="shown"+pt,ie="focusin"+pt,Ee="resize"+pt,Ne="click.dismiss"+pt,ke="keydown.dismiss"+pt,it="mouseup.dismiss"+pt,Ze="mousedown.dismiss"+pt,$t="click"+pt+ui,It=".modal-dialog",Re=".modal-body",mn='[data-toggle="modal"]',Fe='[data-dismiss="modal"]',Qe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Tn=".sticky-top",Wn={backdrop:!0,keyboard:!0,focus:!0,show:!0},Lt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},jt=(function(){function z(N,b){this._config=this._getConfig(b),this._element=N,this._dialog=N.querySelector(It),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var H=z.prototype;return H.toggle=function(b){return this._isShown?this.hide():this.show(b)},H.show=function(b){var T=this;if(!(this._isShown||this._isTransitioning)){var I=s.default.Event(ee,{relatedTarget:b});s.default(this._element).trigger(I),!I.isDefaultPrevented()&&(this._isShown=!0,s.default(this._element).hasClass(D)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),s.default(this._element).on(Ne,Fe,function(G){return T.hide(G)}),s.default(this._dialog).on(Ze,function(){s.default(T._element).one(it,function(G){s.default(G.target).is(T._element)&&(T._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return T._showElement(b)}))}},H.hide=function(b){var T=this;if(b&&b.preventDefault(),!(!this._isShown||this._isTransitioning)){var I=s.default.Event(L);if(s.default(this._element).trigger(I),!(!this._isShown||I.isDefaultPrevented())){this._isShown=!1;var G=s.default(this._element).hasClass(D);if(G&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),s.default(document).off(ie),s.default(this._element).removeClass(S),s.default(this._element).off(Ne),s.default(this._dialog).off(Ze),G){var Z=R.getTransitionDurationFromElement(this._element);s.default(this._element).one(R.TRANSITION_END,function(ae){return T._hideModal(ae)}).emulateTransitionEnd(Z)}else this._hideModal()}}},H.dispose=function(){[window,this._element,this._dialog].forEach(function(b){return s.default(b).off(pt)}),s.default(document).off(ie),s.default.removeData(this._element,gn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},H.handleUpdate=function(){this._adjustDialog()},H._getConfig=function(b){return b=d({},Wn,b),R.typeCheckConfig(Mt,b,Lt),b},H._triggerBackdropTransition=function(){var b=this,T=s.default.Event(W);if(s.default(this._element).trigger(T),!T.isDefaultPrevented()){var I=this._element.scrollHeight>document.documentElement.clientHeight;I||(this._element.style.overflowY="hidden"),this._element.classList.add(F);var G=R.getTransitionDurationFromElement(this._dialog);s.default(this._element).off(R.TRANSITION_END),s.default(this._element).one(R.TRANSITION_END,function(){b._element.classList.remove(F),I||s.default(b._element).one(R.TRANSITION_END,function(){b._element.style.overflowY=""}).emulateTransitionEnd(b._element,G)}).emulateTransitionEnd(G),this._element.focus()}},H._showElement=function(b){var T=this,I=s.default(this._element).hasClass(D),G=this._dialog?this._dialog.querySelector(Re):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),s.default(this._dialog).hasClass(h)&&G?G.scrollTop=0:this._element.scrollTop=0,I&&R.reflow(this._element),s.default(this._element).addClass(S),this._config.focus&&this._enforceFocus();var Z=s.default.Event(Y,{relatedTarget:b}),ae=function(){T._config.focus&&T._element.focus(),T._isTransitioning=!1,s.default(T._element).trigger(Z)};if(I){var Ce=R.getTransitionDurationFromElement(this._dialog);s.default(this._dialog).one(R.TRANSITION_END,ae).emulateTransitionEnd(Ce)}else ae()},H._enforceFocus=function(){var b=this;s.default(document).off(ie).on(ie,function(T){document!==T.target&&b._element!==T.target&&s.default(b._element).has(T.target).length===0&&b._element.focus()})},H._setEscapeEvent=function(){var b=this;this._isShown?s.default(this._element).on(ke,function(T){b._config.keyboard&&T.which===c?(T.preventDefault(),b.hide()):!b._config.keyboard&&T.which===c&&b._triggerBackdropTransition()}):this._isShown||s.default(this._element).off(ke)},H._setResizeEvent=function(){var b=this;this._isShown?s.default(window).on(Ee,function(T){return b.handleUpdate(T)}):s.default(window).off(Ee)},H._hideModal=function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){s.default(document.body).removeClass(w),b._resetAdjustments(),b._resetScrollbar(),s.default(b._element).trigger(K)})},H._removeBackdrop=function(){this._backdrop&&(s.default(this._backdrop).remove(),this._backdrop=null)},H._showBackdrop=function(b){var T=this,I=s.default(this._element).hasClass(D)?D:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=_,I&&this._backdrop.classList.add(I),s.default(this._backdrop).appendTo(document.body),s.default(this._element).on(Ne,function(Ce){if(T._ignoreBackdropClick){T._ignoreBackdropClick=!1;return}Ce.target===Ce.currentTarget&&(T._config.backdrop==="static"?T._triggerBackdropTransition():T.hide())}),I&&R.reflow(this._backdrop),s.default(this._backdrop).addClass(S),!b)return;if(!I){b();return}var G=R.getTransitionDurationFromElement(this._backdrop);s.default(this._backdrop).one(R.TRANSITION_END,b).emulateTransitionEnd(G)}else if(!this._isShown&&this._backdrop){s.default(this._backdrop).removeClass(S);var Z=function(){T._removeBackdrop(),b&&b()};if(s.default(this._element).hasClass(D)){var ae=R.getTransitionDurationFromElement(this._backdrop);s.default(this._backdrop).one(R.TRANSITION_END,Z).emulateTransitionEnd(ae)}else Z()}else b&&b()},H._adjustDialog=function(){var b=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&b&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!b&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},H._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},H._checkScrollbar=function(){var b=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(b.left+b.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},H._setScrollbar=function(){var b=this;if(this._isBodyOverflowing){var T=[].slice.call(document.querySelectorAll(Qe)),I=[].slice.call(document.querySelectorAll(Tn));s.default(T).each(function(ae,Ce){var qe=Ce.style.paddingRight,Ue=s.default(Ce).css("padding-right");s.default(Ce).data("padding-right",qe).css("padding-right",parseFloat(Ue)+b._scrollbarWidth+"px")}),s.default(I).each(function(ae,Ce){var qe=Ce.style.marginRight,Ue=s.default(Ce).css("margin-right");s.default(Ce).data("margin-right",qe).css("margin-right",parseFloat(Ue)-b._scrollbarWidth+"px")});var G=document.body.style.paddingRight,Z=s.default(document.body).css("padding-right");s.default(document.body).data("padding-right",G).css("padding-right",parseFloat(Z)+this._scrollbarWidth+"px")}s.default(document.body).addClass(w)},H._resetScrollbar=function(){var b=[].slice.call(document.querySelectorAll(Qe));s.default(b).each(function(G,Z){var ae=s.default(Z).data("padding-right");s.default(Z).removeData("padding-right"),Z.style.paddingRight=ae||""});var T=[].slice.call(document.querySelectorAll(""+Tn));s.default(T).each(function(G,Z){var ae=s.default(Z).data("margin-right");typeof ae<"u"&&s.default(Z).css("margin-right",ae).removeData("margin-right")});var I=s.default(document.body).data("padding-right");s.default(document.body).removeData("padding-right"),document.body.style.paddingRight=I||""},H._getScrollbarWidth=function(){var b=document.createElement("div");b.className=g,document.body.appendChild(b);var T=b.getBoundingClientRect().width-b.clientWidth;return document.body.removeChild(b),T},z._jQueryInterface=function(b,T){return this.each(function(){var I=s.default(this).data(gn),G=d({},Wn,s.default(this).data(),typeof b=="object"&&b?b:{});if(I||(I=new z(this,G),s.default(this).data(gn,I)),typeof b=="string"){if(typeof I[b]>"u")throw new TypeError('No method named "'+b+'"');I[b](T)}else G.show&&I.show(T)})},f(z,null,[{key:"VERSION",get:function(){return zr}},{key:"Default",get:function(){return Wn}}]),z})();s.default(document).on($t,mn,function(z){var H=this,N,b=R.getSelectorFromElement(this);b&&(N=document.querySelector(b));var T=s.default(N).data(gn)?"toggle":d({},s.default(N).data(),s.default(this).data());(this.tagName==="A"||this.tagName==="AREA")&&z.preventDefault();var I=s.default(N).one(ee,function(G){G.isDefaultPrevented()||I.one(K,function(){s.default(H).is(":visible")&&H.focus()})});jt._jQueryInterface.call(s.default(N),T,this)}),s.default.fn[Mt]=jt._jQueryInterface,s.default.fn[Mt].Constructor=jt,s.default.fn[Mt].noConflict=function(){return s.default.fn[Mt]=ci,jt._jQueryInterface};var Nt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],tn=/^aria-[\w-]*$/i,nn={"*":["class","dir","id","lang","role",tn],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vt=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,wr=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Bt(z,H){var N=z.nodeName.toLowerCase();if(H.indexOf(N)!==-1)return Nt.indexOf(N)!==-1?!!(vt.test(z.nodeValue)||wr.test(z.nodeValue)):!0;for(var b=H.filter(function(G){return G instanceof RegExp}),T=0,I=b.length;T<I;T++)if(b[T].test(N))return!0;return!1}function Rt(z,H,N){if(z.length===0)return z;if(N&&typeof N=="function")return N(z);for(var b=new window.DOMParser,T=b.parseFromString(z,"text/html"),I=Object.keys(H),G=[].slice.call(T.body.querySelectorAll("*")),Z=function(ut,on){var Vt=G[ut],rr=Vt.nodeName.toLowerCase();if(I.indexOf(Vt.nodeName.toLowerCase())===-1)return Vt.parentNode.removeChild(Vt),"continue";var gi=[].slice.call(Vt.attributes),ua=[].concat(H["*"]||[],H[rr]||[]);gi.forEach(function(Ai){Bt(Ai,ua)||Vt.removeAttribute(Ai.nodeName)})},ae=0,Ce=G.length;ae<Ce;ae++)var qe=Z(ae);return T.body.innerHTML}var vn="tooltip",fi="4.6.2",Jn="bs.tooltip",$e="."+Jn,Zn=s.default.fn[vn],_t="bs-tooltip",An=new RegExp("(^|\\s)"+_t+"\\S+","g"),di=["sanitize","whiteList","sanitizeFn"],Vn="fade",On="show",Ct="show",qn="out",rn=".tooltip-inner",Yr=".arrow",Wt="hover",Pn="focus",er="click",Dr="manual",hi={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},tr={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:nn,popperConfig:null},Er={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Cr={HIDE:"hide"+$e,HIDDEN:"hidden"+$e,SHOW:"show"+$e,SHOWN:"shown"+$e,INSERTED:"inserted"+$e,CLICK:"click"+$e,FOCUSIN:"focusin"+$e,FOCUSOUT:"focusout"+$e,MOUSEENTER:"mouseenter"+$e,MOUSELEAVE:"mouseleave"+$e},_n=(function(){function z(N,b){if(typeof l.default>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=N,this.config=this._getConfig(b),this.tip=null,this._setListeners()}var H=z.prototype;return H.enable=function(){this._isEnabled=!0},H.disable=function(){this._isEnabled=!1},H.toggleEnabled=function(){this._isEnabled=!this._isEnabled},H.toggle=function(b){if(this._isEnabled)if(b){var T=this.constructor.DATA_KEY,I=s.default(b.currentTarget).data(T);I||(I=new this.constructor(b.currentTarget,this._getDelegateConfig()),s.default(b.currentTarget).data(T,I)),I._activeTrigger.click=!I._activeTrigger.click,I._isWithActiveTrigger()?I._enter(null,I):I._leave(null,I)}else{if(s.default(this.getTipElement()).hasClass(On)){this._leave(null,this);return}this._enter(null,this)}},H.dispose=function(){clearTimeout(this._timeout),s.default.removeData(this.element,this.constructor.DATA_KEY),s.default(this.element).off(this.constructor.EVENT_KEY),s.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&s.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},H.show=function(){var b=this;if(s.default(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var T=s.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){s.default(this.element).trigger(T);var I=R.findShadowRoot(this.element),G=s.default.contains(I!==null?I:this.element.ownerDocument.documentElement,this.element);if(T.isDefaultPrevented()||!G)return;var Z=this.getTipElement(),ae=R.getUID(this.constructor.NAME);Z.setAttribute("id",ae),this.element.setAttribute("aria-describedby",ae),this.setContent(),this.config.animation&&s.default(Z).addClass(Vn);var Ce=typeof this.config.placement=="function"?this.config.placement.call(this,Z,this.element):this.config.placement,qe=this._getAttachment(Ce);this.addAttachmentClass(qe);var Ue=this._getContainer();s.default(Z).data(this.constructor.DATA_KEY,this),s.default.contains(this.element.ownerDocument.documentElement,this.tip)||s.default(Z).appendTo(Ue),s.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new l.default(this.element,Z,this._getPopperConfig(qe)),s.default(Z).addClass(On),s.default(Z).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&s.default(document.body).children().on("mouseover",null,s.default.noop);var ut=function(){b.config.animation&&b._fixTransition();var rr=b._hoverState;b._hoverState=null,s.default(b.element).trigger(b.constructor.Event.SHOWN),rr===qn&&b._leave(null,b)};if(s.default(this.tip).hasClass(Vn)){var on=R.getTransitionDurationFromElement(this.tip);s.default(this.tip).one(R.TRANSITION_END,ut).emulateTransitionEnd(on)}else ut()}},H.hide=function(b){var T=this,I=this.getTipElement(),G=s.default.Event(this.constructor.Event.HIDE),Z=function(){T._hoverState!==Ct&&I.parentNode&&I.parentNode.removeChild(I),T._cleanTipClass(),T.element.removeAttribute("aria-describedby"),s.default(T.element).trigger(T.constructor.Event.HIDDEN),T._popper!==null&&T._popper.destroy(),b&&b()};if(s.default(this.element).trigger(G),!G.isDefaultPrevented()){if(s.default(I).removeClass(On),"ontouchstart"in document.documentElement&&s.default(document.body).children().off("mouseover",null,s.default.noop),this._activeTrigger[er]=!1,this._activeTrigger[Pn]=!1,this._activeTrigger[Wt]=!1,s.default(this.tip).hasClass(Vn)){var ae=R.getTransitionDurationFromElement(I);s.default(I).one(R.TRANSITION_END,Z).emulateTransitionEnd(ae)}else Z();this._hoverState=""}},H.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},H.isWithContent=function(){return!!this.getTitle()},H.addAttachmentClass=function(b){s.default(this.getTipElement()).addClass(_t+"-"+b)},H.getTipElement=function(){return this.tip=this.tip||s.default(this.config.template)[0],this.tip},H.setContent=function(){var b=this.getTipElement();this.setElementContent(s.default(b.querySelectorAll(rn)),this.getTitle()),s.default(b).removeClass(Vn+" "+On)},H.setElementContent=function(b,T){if(typeof T=="object"&&(T.nodeType||T.jquery)){this.config.html?s.default(T).parent().is(b)||b.empty().append(T):b.text(s.default(T).text());return}this.config.html?(this.config.sanitize&&(T=Rt(T,this.config.whiteList,this.config.sanitizeFn)),b.html(T)):b.text(T)},H.getTitle=function(){var b=this.element.getAttribute("data-original-title");return b||(b=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),b},H._getPopperConfig=function(b){var T=this,I={placement:b,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Yr},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(Z){Z.originalPlacement!==Z.placement&&T._handlePopperPlacementChange(Z)},onUpdate:function(Z){return T._handlePopperPlacementChange(Z)}};return d({},I,this.config.popperConfig)},H._getOffset=function(){var b=this,T={};return typeof this.config.offset=="function"?T.fn=function(I){return I.offsets=d({},I.offsets,b.config.offset(I.offsets,b.element)),I}:T.offset=this.config.offset,T},H._getContainer=function(){return this.config.container===!1?document.body:R.isElement(this.config.container)?s.default(this.config.container):s.default(document).find(this.config.container)},H._getAttachment=function(b){return hi[b.toUpperCase()]},H._setListeners=function(){var b=this,T=this.config.trigger.split(" ");T.forEach(function(I){if(I==="click")s.default(b.element).on(b.constructor.Event.CLICK,b.config.selector,function(ae){return b.toggle(ae)});else if(I!==Dr){var G=I===Wt?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,Z=I===Wt?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;s.default(b.element).on(G,b.config.selector,function(ae){return b._enter(ae)}).on(Z,b.config.selector,function(ae){return b._leave(ae)})}}),this._hideModalHandler=function(){b.element&&b.hide()},s.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=d({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},H._fixTitle=function(){var b=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||b!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},H._enter=function(b,T){var I=this.constructor.DATA_KEY;if(T=T||s.default(b.currentTarget).data(I),T||(T=new this.constructor(b.currentTarget,this._getDelegateConfig()),s.default(b.currentTarget).data(I,T)),b&&(T._activeTrigger[b.type==="focusin"?Pn:Wt]=!0),s.default(T.getTipElement()).hasClass(On)||T._hoverState===Ct){T._hoverState=Ct;return}if(clearTimeout(T._timeout),T._hoverState=Ct,!T.config.delay||!T.config.delay.show){T.show();return}T._timeout=setTimeout(function(){T._hoverState===Ct&&T.show()},T.config.delay.show)},H._leave=function(b,T){var I=this.constructor.DATA_KEY;if(T=T||s.default(b.currentTarget).data(I),T||(T=new this.constructor(b.currentTarget,this._getDelegateConfig()),s.default(b.currentTarget).data(I,T)),b&&(T._activeTrigger[b.type==="focusout"?Pn:Wt]=!1),!T._isWithActiveTrigger()){if(clearTimeout(T._timeout),T._hoverState=qn,!T.config.delay||!T.config.delay.hide){T.hide();return}T._timeout=setTimeout(function(){T._hoverState===qn&&T.hide()},T.config.delay.hide)}},H._isWithActiveTrigger=function(){for(var b in this._activeTrigger)if(this._activeTrigger[b])return!0;return!1},H._getConfig=function(b){var T=s.default(this.element).data();return Object.keys(T).forEach(function(I){di.indexOf(I)!==-1&&delete T[I]}),b=d({},this.constructor.Default,T,typeof b=="object"&&b?b:{}),typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),typeof b.title=="number"&&(b.title=b.title.toString()),typeof b.content=="number"&&(b.content=b.content.toString()),R.typeCheckConfig(vn,b,this.constructor.DefaultType),b.sanitize&&(b.template=Rt(b.template,b.whiteList,b.sanitizeFn)),b},H._getDelegateConfig=function(){var b={};if(this.config)for(var T in this.config)this.constructor.Default[T]!==this.config[T]&&(b[T]=this.config[T]);return b},H._cleanTipClass=function(){var b=s.default(this.getTipElement()),T=b.attr("class").match(An);T!==null&&T.length&&b.removeClass(T.join(""))},H._handlePopperPlacementChange=function(b){this.tip=b.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(b.placement))},H._fixTransition=function(){var b=this.getTipElement(),T=this.config.animation;b.getAttribute("x-placement")===null&&(s.default(b).removeClass(Vn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=T)},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this),I=T.data(Jn),G=typeof b=="object"&&b;if(!(!I&&/dispose|hide/.test(b))&&(I||(I=new z(this,G),T.data(Jn,I)),typeof b=="string")){if(typeof I[b]>"u")throw new TypeError('No method named "'+b+'"');I[b]()}})},f(z,null,[{key:"VERSION",get:function(){return fi}},{key:"Default",get:function(){return tr}},{key:"NAME",get:function(){return vn}},{key:"DATA_KEY",get:function(){return Jn}},{key:"Event",get:function(){return Cr}},{key:"EVENT_KEY",get:function(){return $e}},{key:"DefaultType",get:function(){return Er}}]),z})();s.default.fn[vn]=_n._jQueryInterface,s.default.fn[vn].Constructor=_n,s.default.fn[vn].noConflict=function(){return s.default.fn[vn]=Zn,_n._jQueryInterface};var an="popover",Xr="4.6.2",k="bs.popover",j="."+k,U=s.default.fn[an],X="bs-popover",te=new RegExp("(^|\\s)"+X+"\\S+","g"),se="fade",ce="show",be=".popover-header",fe=".popover-body",Ie=d({},_n.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),De=d({},_n.DefaultType,{content:"(string|element|function)"}),Ae={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},Me=(function(z){p(H,z);function H(){return z.apply(this,arguments)||this}var N=H.prototype;return N.isWithContent=function(){return this.getTitle()||this._getContent()},N.addAttachmentClass=function(T){s.default(this.getTipElement()).addClass(X+"-"+T)},N.getTipElement=function(){return this.tip=this.tip||s.default(this.config.template)[0],this.tip},N.setContent=function(){var T=s.default(this.getTipElement());this.setElementContent(T.find(be),this.getTitle());var I=this._getContent();typeof I=="function"&&(I=I.call(this.element)),this.setElementContent(T.find(fe),I),T.removeClass(se+" "+ce)},N._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},N._cleanTipClass=function(){var T=s.default(this.getTipElement()),I=T.attr("class").match(te);I!==null&&I.length>0&&T.removeClass(I.join(""))},H._jQueryInterface=function(T){return this.each(function(){var I=s.default(this).data(k),G=typeof T=="object"?T:null;if(!(!I&&/dispose|hide/.test(T))&&(I||(I=new H(this,G),s.default(this).data(k,I)),typeof T=="string")){if(typeof I[T]>"u")throw new TypeError('No method named "'+T+'"');I[T]()}})},f(H,null,[{key:"VERSION",get:function(){return Xr}},{key:"Default",get:function(){return Ie}},{key:"NAME",get:function(){return an}},{key:"DATA_KEY",get:function(){return k}},{key:"Event",get:function(){return Ae}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return De}}]),H})(_n);s.default.fn[an]=Me._jQueryInterface,s.default.fn[an].Constructor=Me,s.default.fn[an].noConflict=function(){return s.default.fn[an]=U,Me._jQueryInterface};var ye="scrollspy",Xe="4.6.2",at="bs.scrollspy",nt="."+at,bt=".data-api",Ft=s.default.fn[ye],kn="dropdown-item",Je="active",Oi="activate"+nt,Pi="scroll"+nt,ki="load"+nt+bt,Mi="offset",mi="position",$i='[data-spy="scroll"]',vi=".nav, .list-group",pi=".nav-link",Ii=".nav-item",_i=".list-group-item",Li=".dropdown",Ni=".dropdown-item",Ri=".dropdown-toggle",bi={offset:10,method:"auto",target:""},Fi={offset:"number",method:"string",target:"(string|element)"},Sr=(function(){function z(N,b){var T=this;this._element=N,this._scrollElement=N.tagName==="BODY"?window:N,this._config=this._getConfig(b),this._selector=this._config.target+" "+pi+","+(this._config.target+" "+_i+",")+(this._config.target+" "+Ni),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,s.default(this._scrollElement).on(Pi,function(I){return T._process(I)}),this.refresh(),this._process()}var H=z.prototype;return H.refresh=function(){var b=this,T=this._scrollElement===this._scrollElement.window?Mi:mi,I=this._config.method==="auto"?T:this._config.method,G=I===mi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var Z=[].slice.call(document.querySelectorAll(this._selector));Z.map(function(ae){var Ce,qe=R.getSelectorFromElement(ae);if(qe&&(Ce=document.querySelector(qe)),Ce){var Ue=Ce.getBoundingClientRect();if(Ue.width||Ue.height)return[s.default(Ce)[I]().top+G,qe]}return null}).filter(Boolean).sort(function(ae,Ce){return ae[0]-Ce[0]}).forEach(function(ae){b._offsets.push(ae[0]),b._targets.push(ae[1])})},H.dispose=function(){s.default.removeData(this._element,at),s.default(this._scrollElement).off(nt),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},H._getConfig=function(b){if(b=d({},bi,typeof b=="object"&&b?b:{}),typeof b.target!="string"&&R.isElement(b.target)){var T=s.default(b.target).attr("id");T||(T=R.getUID(ye),s.default(b.target).attr("id",T)),b.target="#"+T}return R.typeCheckConfig(ye,b,Fi),b},H._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},H._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},H._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},H._process=function(){var b=this._getScrollTop()+this._config.offset,T=this._getScrollHeight(),I=this._config.offset+T-this._getOffsetHeight();if(this._scrollHeight!==T&&this.refresh(),b>=I){var G=this._targets[this._targets.length-1];this._activeTarget!==G&&this._activate(G);return}if(this._activeTarget&&b<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var Z=this._offsets.length;Z--;){var ae=this._activeTarget!==this._targets[Z]&&b>=this._offsets[Z]&&(typeof this._offsets[Z+1]>"u"||b<this._offsets[Z+1]);ae&&this._activate(this._targets[Z])}},H._activate=function(b){this._activeTarget=b,this._clear();var T=this._selector.split(",").map(function(G){return G+'[data-target="'+b+'"],'+G+'[href="'+b+'"]'}),I=s.default([].slice.call(document.querySelectorAll(T.join(","))));I.hasClass(kn)?(I.closest(Li).find(Ri).addClass(Je),I.addClass(Je)):(I.addClass(Je),I.parents(vi).prev(pi+", "+_i).addClass(Je),I.parents(vi).prev(Ii).children(pi).addClass(Je)),s.default(this._scrollElement).trigger(Oi,{relatedTarget:b})},H._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(b){return b.classList.contains(Je)}).forEach(function(b){return b.classList.remove(Je)})},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this).data(at),I=typeof b=="object"&&b;if(T||(T=new z(this,I),s.default(this).data(at,T)),typeof b=="string"){if(typeof T[b]>"u")throw new TypeError('No method named "'+b+'"');T[b]()}})},f(z,null,[{key:"VERSION",get:function(){return Xe}},{key:"Default",get:function(){return bi}}]),z})();s.default(window).on(ki,function(){for(var z=[].slice.call(document.querySelectorAll($i)),H=z.length,N=H;N--;){var b=s.default(z[N]);Sr._jQueryInterface.call(b,b.data())}}),s.default.fn[ye]=Sr._jQueryInterface,s.default.fn[ye].Constructor=Sr,s.default.fn[ye].noConflict=function(){return s.default.fn[ye]=Ft,Sr._jQueryInterface};var Tr="tab",Hi="4.6.2",Gr="bs.tab",Ar="."+Gr,ji=".data-api",Bi=s.default.fn[Tr],Wi="dropdown-menu",Or="active",Vi="disabled",yi="fade",xi="show",qi="hide"+Ar,Ui="hidden"+Ar,zi="show"+Ar,Yi="shown"+Ar,Xi="click"+Ar+ji,Gi=".dropdown",Ki=".nav, .list-group",wi=".active",Di="> li > .active",Qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ji=".dropdown-toggle",Zi="> .dropdown-menu .active",Pr=(function(){function z(N){this._element=N}var H=z.prototype;return H.show=function(){var b=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&s.default(this._element).hasClass(Or)||s.default(this._element).hasClass(Vi)||this._element.hasAttribute("disabled"))){var T,I,G=s.default(this._element).closest(Ki)[0],Z=R.getSelectorFromElement(this._element);if(G){var ae=G.nodeName==="UL"||G.nodeName==="OL"?Di:wi;I=s.default.makeArray(s.default(G).find(ae)),I=I[I.length-1]}var Ce=s.default.Event(qi,{relatedTarget:this._element}),qe=s.default.Event(zi,{relatedTarget:I});if(I&&s.default(I).trigger(Ce),s.default(this._element).trigger(qe),!(qe.isDefaultPrevented()||Ce.isDefaultPrevented())){Z&&(T=document.querySelector(Z)),this._activate(this._element,G);var Ue=function(){var on=s.default.Event(Ui,{relatedTarget:b._element}),Vt=s.default.Event(Yi,{relatedTarget:I});s.default(I).trigger(on),s.default(b._element).trigger(Vt)};T?this._activate(T,T.parentNode,Ue):Ue()}}},H.dispose=function(){s.default.removeData(this._element,Gr),this._element=null},H._activate=function(b,T,I){var G=this,Z=T&&(T.nodeName==="UL"||T.nodeName==="OL")?s.default(T).find(Di):s.default(T).children(wi),ae=Z[0],Ce=I&&ae&&s.default(ae).hasClass(yi),qe=function(){return G._transitionComplete(b,ae,I)};if(ae&&Ce){var Ue=R.getTransitionDurationFromElement(ae);s.default(ae).removeClass(xi).one(R.TRANSITION_END,qe).emulateTransitionEnd(Ue)}else qe()},H._transitionComplete=function(b,T,I){if(T){s.default(T).removeClass(Or);var G=s.default(T.parentNode).find(Zi)[0];G&&s.default(G).removeClass(Or),T.getAttribute("role")==="tab"&&T.setAttribute("aria-selected",!1)}s.default(b).addClass(Or),b.getAttribute("role")==="tab"&&b.setAttribute("aria-selected",!0),R.reflow(b),b.classList.contains(yi)&&b.classList.add(xi);var Z=b.parentNode;if(Z&&Z.nodeName==="LI"&&(Z=Z.parentNode),Z&&s.default(Z).hasClass(Wi)){var ae=s.default(b).closest(Gi)[0];if(ae){var Ce=[].slice.call(ae.querySelectorAll(Ji));s.default(Ce).addClass(Or)}b.setAttribute("aria-expanded",!0)}I&&I()},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this),I=T.data(Gr);if(I||(I=new z(this),T.data(Gr,I)),typeof b=="string"){if(typeof I[b]>"u")throw new TypeError('No method named "'+b+'"');I[b]()}})},f(z,null,[{key:"VERSION",get:function(){return Hi}}]),z})();s.default(document).on(Xi,Qi,function(z){z.preventDefault(),Pr._jQueryInterface.call(s.default(this),"show")}),s.default.fn[Tr]=Pr._jQueryInterface,s.default.fn[Tr].Constructor=Pr,s.default.fn[Tr].noConflict=function(){return s.default.fn[Tr]=Bi,Pr._jQueryInterface};var nr="toast",ea="4.6.2",Kr="bs.toast",kr="."+Kr,ta=s.default.fn[nr],na="fade",Ei="hide",Mr="show",Ci="showing",Si="click.dismiss"+kr,ra="hide"+kr,ia="hidden"+kr,aa="show"+kr,oa="shown"+kr,sa='[data-dismiss="toast"]',Ti={animation:!0,autohide:!0,delay:500},la={animation:"boolean",autohide:"boolean",delay:"number"},Qr=(function(){function z(N,b){this._element=N,this._config=this._getConfig(b),this._timeout=null,this._setListeners()}var H=z.prototype;return H.show=function(){var b=this,T=s.default.Event(aa);if(s.default(this._element).trigger(T),!T.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add(na);var I=function(){b._element.classList.remove(Ci),b._element.classList.add(Mr),s.default(b._element).trigger(oa),b._config.autohide&&(b._timeout=setTimeout(function(){b.hide()},b._config.delay))};if(this._element.classList.remove(Ei),R.reflow(this._element),this._element.classList.add(Ci),this._config.animation){var G=R.getTransitionDurationFromElement(this._element);s.default(this._element).one(R.TRANSITION_END,I).emulateTransitionEnd(G)}else I()}},H.hide=function(){if(this._element.classList.contains(Mr)){var b=s.default.Event(ra);s.default(this._element).trigger(b),!b.isDefaultPrevented()&&this._close()}},H.dispose=function(){this._clearTimeout(),this._element.classList.contains(Mr)&&this._element.classList.remove(Mr),s.default(this._element).off(Si),s.default.removeData(this._element,Kr),this._element=null,this._config=null},H._getConfig=function(b){return b=d({},Ti,s.default(this._element).data(),typeof b=="object"&&b?b:{}),R.typeCheckConfig(nr,b,this.constructor.DefaultType),b},H._setListeners=function(){var b=this;s.default(this._element).on(Si,sa,function(){return b.hide()})},H._close=function(){var b=this,T=function(){b._element.classList.add(Ei),s.default(b._element).trigger(ia)};if(this._element.classList.remove(Mr),this._config.animation){var I=R.getTransitionDurationFromElement(this._element);s.default(this._element).one(R.TRANSITION_END,T).emulateTransitionEnd(I)}else T()},H._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},z._jQueryInterface=function(b){return this.each(function(){var T=s.default(this),I=T.data(Kr),G=typeof b=="object"&&b;if(I||(I=new z(this,G),T.data(Kr,I)),typeof b=="string"){if(typeof I[b]>"u")throw new TypeError('No method named "'+b+'"');I[b](this)}})},f(z,null,[{key:"VERSION",get:function(){return ea}},{key:"DefaultType",get:function(){return la}},{key:"Default",get:function(){return Ti}}]),z})();s.default.fn[nr]=Qr._jQueryInterface,s.default.fn[nr].Constructor=Qr,s.default.fn[nr].noConflict=function(){return s.default.fn[nr]=ta,Qr._jQueryInterface},t.Alert=je,t.Button=ot,t.Carousel=At,t.Collapse=jn,t.Dropdown=en,t.Modal=jt,t.Popover=Me,t.Scrollspy=Sr,t.Tab=Pr,t.Toast=Qr,t.Tooltip=_n,t.Util=R,Object.defineProperty(t,"__esModule",{value:!0})}))})(bootstrap$1,bootstrap$1.exports)),bootstrap$1.exports}requireBootstrap();(function(){const htmx={onLoad:null,process:null,on:null,off:null,trigger:null,ajax:null,find:null,findAll:null,closest:null,values:function(n,e){return getInputValues(n,e||"post").values},remove:null,addClass:null,removeClass:null,toggleClass:null,takeClass:null,swap:null,defineExtension:null,removeExtension:null,logAll:null,logNone:null,logger:null,config:{historyEnabled:!0,historyCacheSize:10,refreshOnHistoryMiss:!1,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:!0,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:!0,allowScriptTags:!0,inlineScriptNonce:"",inlineStyleNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:!1,timeout:0,wsReconnectDelay:"full-jitter",wsBinaryType:"blob",disableSelector:"[hx-disable], [data-hx-disable]",scrollBehavior:"instant",defaultFocusScroll:!1,getCacheBusterParam:!1,globalViewTransitions:!1,methodsThatUseUrlParams:["get","delete"],selfRequestsOnly:!0,ignoreTitle:!1,scrollIntoViewOnBoost:!0,triggerSpecsCache:null,disableInheritance:!1,responseHandling:[{code:"204",swap:!1},{code:"[23]..",swap:!0},{code:"[45]..",swap:!1,error:!0}],allowNestedOobSwaps:!0,historyRestoreAsHxRequest:!0,reportValidityOfForms:!1},parseInterval:null,location,_:null,version:"2.0.8"};htmx.onLoad=onLoadHelper,htmx.process=processNode,htmx.on=addEventListenerImpl,htmx.off=removeEventListenerImpl,htmx.trigger=triggerEvent,htmx.ajax=ajaxHelper,htmx.find=find,htmx.findAll=findAll,htmx.closest=closest,htmx.remove=removeElement,htmx.addClass=addClassToElement,htmx.removeClass=removeClassFromElement,htmx.toggleClass=toggleClassOnElement,htmx.takeClass=takeClassForElement,htmx.swap=swap,htmx.defineExtension=defineExtension,htmx.removeExtension=removeExtension,htmx.logAll=logAll,htmx.logNone=logNone,htmx.parseInterval=parseInterval,htmx._=internalEval;const internalAPI={addTriggerHandler,bodyContains,canAccessLocalStorage,findThisElement,filterValues,swap,hasAttribute,getAttributeValue,getClosestAttributeValue,getClosestMatch,getExpressionVars,getHeaders,getInputValues,getInternalData,getSwapSpecification,getTriggerSpecs,getTarget,makeFragment,mergeObjects,makeSettleInfo,oobSwap,querySelectorExt,settleImmediately,shouldCancel,triggerEvent,triggerErrorEvent,withExtensions},VERBS=["get","post","put","delete","patch"],VERB_SELECTOR=VERBS.map(function(n){return"[hx-"+n+"], [data-hx-"+n+"]"}).join(", ");function parseInterval(n){if(n==null)return;let e=NaN;return n.slice(-2)=="ms"?e=parseFloat(n.slice(0,-2)):n.slice(-1)=="s"?e=parseFloat(n.slice(0,-1))*1e3:n.slice(-1)=="m"?e=parseFloat(n.slice(0,-1))*1e3*60:e=parseFloat(n),isNaN(e)?void 0:e}function getRawAttribute(n,e){return n instanceof Element&&n.getAttribute(e)}function hasAttribute(n,e){return!!n.hasAttribute&&(n.hasAttribute(e)||n.hasAttribute("data-"+e))}function getAttributeValue(n,e){return getRawAttribute(n,e)||getRawAttribute(n,"data-"+e)}function parentElt(n){const e=n.parentElement;return!e&&n.parentNode instanceof ShadowRoot?n.parentNode:e}function getDocument(){return document}function getRootNode(n,e){return n.getRootNode?n.getRootNode({composed:e}):getDocument()}function getClosestMatch(n,e){for(;n&&!e(n);)n=parentElt(n);return n||null}function getAttributeValueWithDisinheritance(n,e,t){const r=getAttributeValue(e,t),a=getAttributeValue(e,"hx-disinherit");var o=getAttributeValue(e,"hx-inherit");if(n!==e){if(htmx.config.disableInheritance)return o&&(o==="*"||o.split(" ").indexOf(t)>=0)?r:null;if(a&&(a==="*"||a.split(" ").indexOf(t)>=0))return"unset"}return r}function getClosestAttributeValue(n,e){let t=null;if(getClosestMatch(n,function(r){return!!(t=getAttributeValueWithDisinheritance(n,asElement(r),e))}),t!=="unset")return t}function matches(n,e){return n instanceof Element&&n.matches(e)}function getStartTag(n){const t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(n);return t?t[1].toLowerCase():""}function parseHTML(n){return"parseHTMLUnsafe"in Document?Document.parseHTMLUnsafe(n):new DOMParser().parseFromString(n,"text/html")}function takeChildrenFor(n,e){for(;e.childNodes.length>0;)n.append(e.childNodes[0])}function duplicateScript(n){const e=getDocument().createElement("script");return forEach(n.attributes,function(t){e.setAttribute(t.name,t.value)}),e.textContent=n.textContent,e.async=!1,htmx.config.inlineScriptNonce&&(e.nonce=htmx.config.inlineScriptNonce),e}function isJavaScriptScriptNode(n){return n.matches("script")&&(n.type==="text/javascript"||n.type==="module"||n.type==="")}function normalizeScriptTags(n){Array.from(n.querySelectorAll("script")).forEach(e=>{if(isJavaScriptScriptNode(e)){const t=duplicateScript(e),r=e.parentNode;try{r.insertBefore(t,e)}catch(a){logError(a)}finally{e.remove()}}})}function makeFragment(n){const e=n.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i,""),t=getStartTag(e);let r;if(t==="html"){r=new DocumentFragment;const o=parseHTML(n);takeChildrenFor(r,o.body),r.title=o.title}else if(t==="body"){r=new DocumentFragment;const o=parseHTML(e);takeChildrenFor(r,o.body),r.title=o.title}else{const o=parseHTML('<body><template class="internal-htmx-wrapper">'+e+"</template></body>");r=o.querySelector("template").content,r.title=o.title;var a=r.querySelector("title");a&&a.parentNode===r&&(a.remove(),r.title=a.innerText)}return r&&(htmx.config.allowScriptTags?normalizeScriptTags(r):r.querySelectorAll("script").forEach(o=>o.remove())),r}function maybeCall(n){n&&n()}function isType(n,e){return Object.prototype.toString.call(n)==="[object "+e+"]"}function isFunction(n){return typeof n=="function"}function isRawObject(n){return isType(n,"Object")}function getInternalData(n){const e="htmx-internal-data";let t=n[e];return t||(t=n[e]={}),t}function toArray(n){const e=[];if(n)for(let t=0;t<n.length;t++)e.push(n[t]);return e}function forEach(n,e){if(n)for(let t=0;t<n.length;t++)e(n[t])}function isScrolledIntoView(n){const e=n.getBoundingClientRect(),t=e.top,r=e.bottom;return t<window.innerHeight&&r>=0}function bodyContains(n){return n.getRootNode({composed:!0})===document}function splitOnWhitespace(n){return n.trim().split(/\s+/)}function mergeObjects(n,e){for(const t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function parseJSON(n){try{return JSON.parse(n)}catch(e){return logError(e),null}}function canAccessLocalStorage(){const n="htmx:sessionStorageTest";try{return sessionStorage.setItem(n,n),sessionStorage.removeItem(n),!0}catch{return!1}}function normalizePath(n){const e=new URL(n,"http://x");return e&&(n=e.pathname+e.search),n!="/"&&(n=n.replace(/\/+$/,"")),n}function internalEval(str){return maybeEval(getDocument().body,function(){return eval(str)})}function onLoadHelper(n){return htmx.on("htmx:load",function(t){n(t.detail.elt)})}function logAll(){htmx.logger=function(n,e,t){console&&console.log(e,n,t)}}function logNone(){htmx.logger=null}function find(n,e){return typeof n!="string"?n.querySelector(e):find(getDocument(),n)}function findAll(n,e){return typeof n!="string"?n.querySelectorAll(e):findAll(getDocument(),n)}function getWindow(){return window}function removeElement(n,e){n=resolveTarget(n),e?getWindow().setTimeout(function(){removeElement(n),n=null},e):parentElt(n).removeChild(n)}function asElement(n){return n instanceof Element?n:null}function asHtmlElement(n){return n instanceof HTMLElement?n:null}function asString(n){return typeof n=="string"?n:null}function asParentNode(n){return n instanceof Element||n instanceof Document||n instanceof DocumentFragment?n:null}function addClassToElement(n,e,t){n=asElement(resolveTarget(n)),n&&(t?getWindow().setTimeout(function(){addClassToElement(n,e),n=null},t):n.classList&&n.classList.add(e))}function removeClassFromElement(n,e,t){let r=asElement(resolveTarget(n));r&&(t?getWindow().setTimeout(function(){removeClassFromElement(r,e),r=null},t):r.classList&&(r.classList.remove(e),r.classList.length===0&&r.removeAttribute("class")))}function toggleClassOnElement(n,e){n=resolveTarget(n),n.classList.toggle(e)}function takeClassForElement(n,e){n=resolveTarget(n),forEach(n.parentElement.children,function(t){removeClassFromElement(t,e)}),addClassToElement(asElement(n),e)}function closest(n,e){return n=asElement(resolveTarget(n)),n?n.closest(e):null}function startsWith(n,e){return n.substring(0,e.length)===e}function endsWith(n,e){return n.substring(n.length-e.length)===e}function normalizeSelector(n){const e=n.trim();return startsWith(e,"<")&&endsWith(e,"/>")?e.substring(1,e.length-2):e}function querySelectorAllExt(n,e,t){if(e.indexOf("global ")===0)return querySelectorAllExt(n,e.slice(7),!0);n=resolveTarget(n);const r=[];{let s=0,l=0;for(let u=0;u<e.length;u++){const f=e[u];if(f===","&&s===0){r.push(e.substring(l,u)),l=u+1;continue}f==="<"?s++:f==="/"&&u<e.length-1&&e[u+1]===">"&&s--}l<e.length&&r.push(e.substring(l))}const a=[],o=[];for(;r.length>0;){const s=normalizeSelector(r.shift());let l;s.indexOf("closest ")===0?l=closest(asElement(n),normalizeSelector(s.slice(8))):s.indexOf("find ")===0?l=find(asParentNode(n),normalizeSelector(s.slice(5))):s==="next"||s==="nextElementSibling"?l=asElement(n).nextElementSibling:s.indexOf("next ")===0?l=scanForwardQuery(n,normalizeSelector(s.slice(5)),!!t):s==="previous"||s==="previousElementSibling"?l=asElement(n).previousElementSibling:s.indexOf("previous ")===0?l=scanBackwardsQuery(n,normalizeSelector(s.slice(9)),!!t):s==="document"?l=document:s==="window"?l=window:s==="body"?l=document.body:s==="root"?l=getRootNode(n,!!t):s==="host"?l=n.getRootNode().host:o.push(s),l&&a.push(l)}if(o.length>0){const s=o.join(","),l=asParentNode(getRootNode(n,!!t));a.push(...toArray(l.querySelectorAll(s)))}return a}var scanForwardQuery=function(n,e,t){const r=asParentNode(getRootNode(n,t)).querySelectorAll(e);for(let a=0;a<r.length;a++){const o=r[a];if(o.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_PRECEDING)return o}},scanBackwardsQuery=function(n,e,t){const r=asParentNode(getRootNode(n,t)).querySelectorAll(e);for(let a=r.length-1;a>=0;a--){const o=r[a];if(o.compareDocumentPosition(n)===Node.DOCUMENT_POSITION_FOLLOWING)return o}};function querySelectorExt(n,e){return typeof n!="string"?querySelectorAllExt(n,e)[0]:querySelectorAllExt(getDocument().body,n)[0]}function resolveTarget(n,e){return typeof n=="string"?find(asParentNode(e)||document,n):n}function processEventArgs(n,e,t,r){return isFunction(e)?{target:getDocument().body,event:asString(n),listener:e,options:t}:{target:resolveTarget(n),event:asString(e),listener:t,options:r}}function addEventListenerImpl(n,e,t,r){return ready(function(){const o=processEventArgs(n,e,t,r);o.target.addEventListener(o.event,o.listener,o.options)}),isFunction(e)?e:t}function removeEventListenerImpl(n,e,t){return ready(function(){const r=processEventArgs(n,e,t);r.target.removeEventListener(r.event,r.listener)}),isFunction(e)?e:t}const DUMMY_ELT=getDocument().createElement("output");function findAttributeTargets(n,e){const t=getClosestAttributeValue(n,e);if(t){if(t==="this")return[findThisElement(n,e)];{const r=querySelectorAllExt(n,t);if(/(^|,)(\s*)inherit(\s*)($|,)/.test(t)){const o=asElement(getClosestMatch(n,function(s){return s!==n&&hasAttribute(asElement(s),e)}));o&&r.push(...findAttributeTargets(o,e))}return r.length===0?(logError('The selector "'+t+'" on '+e+" returned no matches!"),[DUMMY_ELT]):r}}}function findThisElement(n,e){return asElement(getClosestMatch(n,function(t){return getAttributeValue(asElement(t),e)!=null}))}function getTarget(n){const e=getClosestAttributeValue(n,"hx-target");return e?e==="this"?findThisElement(n,"hx-target"):querySelectorExt(n,e):getInternalData(n).boosted?getDocument().body:n}function shouldSettleAttribute(n){return htmx.config.attributesToSettle.includes(n)}function cloneAttributes(n,e){forEach(Array.from(n.attributes),function(t){!e.hasAttribute(t.name)&&shouldSettleAttribute(t.name)&&n.removeAttribute(t.name)}),forEach(e.attributes,function(t){shouldSettleAttribute(t.name)&&n.setAttribute(t.name,t.value)})}function isInlineSwap(n,e){const t=getExtensions(e);for(let r=0;r<t.length;r++){const a=t[r];try{if(a.isInlineSwap(n))return!0}catch(o){logError(o)}}return n==="outerHTML"}function oobSwap(n,e,t,r){r=r||getDocument();let a="#"+CSS.escape(getRawAttribute(e,"id")),o="outerHTML";n==="true"||(n.indexOf(":")>0?(o=n.substring(0,n.indexOf(":")),a=n.substring(n.indexOf(":")+1)):o=n),e.removeAttribute("hx-swap-oob"),e.removeAttribute("data-hx-swap-oob");const s=querySelectorAllExt(r,a,!1);return s.length?(forEach(s,function(l){let u;const f=e.cloneNode(!0);u=getDocument().createDocumentFragment(),u.appendChild(f),isInlineSwap(o,l)||(u=asParentNode(f));const d={shouldSwap:!0,target:l,fragment:u};triggerEvent(l,"htmx:oobBeforeSwap",d)&&(l=d.target,d.shouldSwap&&(handlePreservedElements(u),swapWithStyle(o,l,l,u,t),restorePreservedElements()),forEach(t.elts,function(p){triggerEvent(p,"htmx:oobAfterSwap",d)}))}),e.parentNode.removeChild(e)):(e.parentNode.removeChild(e),triggerErrorEvent(getDocument().body,"htmx:oobErrorNoTarget",{content:e})),n}function restorePreservedElements(){const n=find("#--htmx-preserve-pantry--");if(n){for(const e of[...n.children]){const t=find("#"+e.id);t.parentNode.moveBefore(e,t),t.remove()}n.remove()}}function handlePreservedElements(n){forEach(findAll(n,"[hx-preserve], [data-hx-preserve]"),function(e){const t=getAttributeValue(e,"id"),r=getDocument().getElementById(t);if(r!=null)if(e.moveBefore){let a=find("#--htmx-preserve-pantry--");a==null&&(getDocument().body.insertAdjacentHTML("afterend","<div id='--htmx-preserve-pantry--'></div>"),a=find("#--htmx-preserve-pantry--")),a.moveBefore(r,null)}else e.parentNode.replaceChild(r,e)})}function handleAttributes(n,e,t){forEach(e.querySelectorAll("[id]"),function(r){const a=getRawAttribute(r,"id");if(a&&a.length>0){const o=a.replace("'","\\'"),s=r.tagName.replace(":","\\:"),l=asParentNode(n),u=l&&l.querySelector(s+"[id='"+o+"']");if(u&&u!==l){const f=r.cloneNode();cloneAttributes(r,u),t.tasks.push(function(){cloneAttributes(r,f)})}}})}function makeAjaxLoadTask(n){return function(){removeClassFromElement(n,htmx.config.addedClass),processNode(asElement(n)),processFocus(asParentNode(n)),triggerEvent(n,"htmx:load")}}function processFocus(n){const e="[autofocus]",t=asHtmlElement(matches(n,e)?n:n.querySelector(e));t?.focus()}function insertNodesBefore(n,e,t,r){for(handleAttributes(n,t,r);t.childNodes.length>0;){const a=t.firstChild;addClassToElement(asElement(a),htmx.config.addedClass),n.insertBefore(a,e),a.nodeType!==Node.TEXT_NODE&&a.nodeType!==Node.COMMENT_NODE&&r.tasks.push(makeAjaxLoadTask(a))}}function stringHash(n,e){let t=0;for(;t<n.length;)e=(e<<5)-e+n.charCodeAt(t++)|0;return e}function attributeHash(n){let e=0;for(let t=0;t<n.attributes.length;t++){const r=n.attributes[t];r.value&&(e=stringHash(r.name,e),e=stringHash(r.value,e))}return e}function deInitOnHandlers(n){const e=getInternalData(n);if(e.onHandlers){for(let t=0;t<e.onHandlers.length;t++){const r=e.onHandlers[t];removeEventListenerImpl(n,r.event,r.listener)}delete e.onHandlers}}function deInitNode(n){const e=getInternalData(n);e.timeout&&clearTimeout(e.timeout),e.listenerInfos&&forEach(e.listenerInfos,function(t){t.on&&removeEventListenerImpl(t.on,t.trigger,t.listener)}),deInitOnHandlers(n),forEach(Object.keys(e),function(t){t!=="firstInitCompleted"&&delete e[t]})}function cleanUpElement(n){triggerEvent(n,"htmx:beforeCleanupElement"),deInitNode(n),forEach(n.children,function(e){cleanUpElement(e)})}function swapOuterHTML(n,e,t){if(n.tagName==="BODY")return swapInnerHTML(n,e,t);let r;const a=n.previousSibling,o=parentElt(n);if(o){for(insertNodesBefore(o,n,e,t),a==null?r=o.firstChild:r=a.nextSibling,t.elts=t.elts.filter(function(s){return s!==n});r&&r!==n;)r instanceof Element&&t.elts.push(r),r=r.nextSibling;cleanUpElement(n),n.remove()}}function swapAfterBegin(n,e,t){return insertNodesBefore(n,n.firstChild,e,t)}function swapBeforeBegin(n,e,t){return insertNodesBefore(parentElt(n),n,e,t)}function swapBeforeEnd(n,e,t){return insertNodesBefore(n,null,e,t)}function swapAfterEnd(n,e,t){return insertNodesBefore(parentElt(n),n.nextSibling,e,t)}function swapDelete(n){cleanUpElement(n);const e=parentElt(n);if(e)return e.removeChild(n)}function swapInnerHTML(n,e,t){const r=n.firstChild;if(insertNodesBefore(n,r,e,t),r){for(;r.nextSibling;)cleanUpElement(r.nextSibling),n.removeChild(r.nextSibling);cleanUpElement(r),n.removeChild(r)}}function swapWithStyle(n,e,t,r,a){switch(n){case"none":return;case"outerHTML":swapOuterHTML(t,r,a);return;case"afterbegin":swapAfterBegin(t,r,a);return;case"beforebegin":swapBeforeBegin(t,r,a);return;case"beforeend":swapBeforeEnd(t,r,a);return;case"afterend":swapAfterEnd(t,r,a);return;case"delete":swapDelete(t);return;default:var o=getExtensions(e);for(let s=0;s<o.length;s++){const l=o[s];try{const u=l.handleSwap(n,t,r,a);if(u){if(Array.isArray(u))for(let f=0;f<u.length;f++){const d=u[f];d.nodeType!==Node.TEXT_NODE&&d.nodeType!==Node.COMMENT_NODE&&a.tasks.push(makeAjaxLoadTask(d))}return}}catch(u){logError(u)}}n==="innerHTML"?swapInnerHTML(t,r,a):swapWithStyle(htmx.config.defaultSwapStyle,e,t,r,a)}}function findAndSwapOobElements(n,e,t){var r=findAll(n,"[hx-swap-oob], [data-hx-swap-oob]");return forEach(r,function(a){if(htmx.config.allowNestedOobSwaps||a.parentElement===null){const o=getAttributeValue(a,"hx-swap-oob");o!=null&&oobSwap(o,a,e,t)}else a.removeAttribute("hx-swap-oob"),a.removeAttribute("data-hx-swap-oob")}),r.length>0}function swap(n,e,t,r){r||(r={});let a=null,o=null,s=function(){maybeCall(r.beforeSwapCallback),n=resolveTarget(n);const f=r.contextElement?getRootNode(r.contextElement,!1):getDocument(),d=document.activeElement;let p={};p={elt:d,start:d?d.selectionStart:null,end:d?d.selectionEnd:null};const v=makeSettleInfo(n);if(t.swapStyle==="textContent")n.textContent=e;else{let x=makeFragment(e);if(v.title=r.title||x.title,r.historyRequest&&(x=x.querySelector("[hx-history-elt],[data-hx-history-elt]")||x),r.selectOOB){const E=r.selectOOB.split(",");for(let C=0;C<E.length;C++){const A=E[C].split(":",2);let M=A[0].trim();M.indexOf("#")===0&&(M=M.substring(1));const V=A[1]||"true",R=x.querySelector("#"+M);R&&oobSwap(V,R,v,f)}}if(findAndSwapOobElements(x,v,f),forEach(findAll(x,"template"),function(E){E.content&&findAndSwapOobElements(E.content,v,f)&&E.remove()}),r.select){const E=getDocument().createDocumentFragment();forEach(x.querySelectorAll(r.select),function(C){E.appendChild(C)}),x=E}handlePreservedElements(x),swapWithStyle(t.swapStyle,r.contextElement,n,x,v),restorePreservedElements()}if(p.elt&&!bodyContains(p.elt)&&getRawAttribute(p.elt,"id")){const x=document.getElementById(getRawAttribute(p.elt,"id")),E={preventScroll:t.focusScroll!==void 0?!t.focusScroll:!htmx.config.defaultFocusScroll};if(x){if(p.start&&x.setSelectionRange)try{x.setSelectionRange(p.start,p.end)}catch{}x.focus(E)}}n.classList.remove(htmx.config.swappingClass),forEach(v.elts,function(x){x.classList&&x.classList.add(htmx.config.settlingClass),triggerEvent(x,"htmx:afterSwap",r.eventInfo)}),maybeCall(r.afterSwapCallback),t.ignoreTitle||handleTitle(v.title);const y=function(){if(forEach(v.tasks,function(x){x.call()}),forEach(v.elts,function(x){x.classList&&x.classList.remove(htmx.config.settlingClass),triggerEvent(x,"htmx:afterSettle",r.eventInfo)}),r.anchor){const x=asElement(resolveTarget("#"+r.anchor));x&&x.scrollIntoView({block:"start",behavior:"auto"})}updateScrollState(v.elts,t),maybeCall(r.afterSettleCallback),maybeCall(a)};t.settleDelay>0?getWindow().setTimeout(y,t.settleDelay):y()},l=htmx.config.globalViewTransitions;t.hasOwnProperty("transition")&&(l=t.transition);const u=r.contextElement||getDocument();if(l&&triggerEvent(u,"htmx:beforeTransition",r.eventInfo)&&typeof Promise<"u"&&document.startViewTransition){const f=new Promise(function(p,v){a=p,o=v}),d=s;s=function(){document.startViewTransition(function(){return d(),f})}}try{t?.swapDelay&&t.swapDelay>0?getWindow().setTimeout(s,t.swapDelay):s()}catch(f){throw triggerErrorEvent(u,"htmx:swapError",r.eventInfo),maybeCall(o),f}}function handleTriggerHeader(n,e,t){const r=n.getResponseHeader(e);if(r.indexOf("{")===0){const a=parseJSON(r);for(const o in a)if(a.hasOwnProperty(o)){let s=a[o];isRawObject(s)?t=s.target!==void 0?s.target:t:s={value:s},triggerEvent(t,o,s)}}else{const a=r.split(",");for(let o=0;o<a.length;o++)triggerEvent(t,a[o].trim(),[])}}const WHITESPACE_OR_COMMA=/[\s,]/,SYMBOL_START=/[_$a-zA-Z]/,SYMBOL_CONT=/[_$a-zA-Z0-9]/,STRINGISH_START=['"',"'","/"],NOT_WHITESPACE=/[^\s]/,COMBINED_SELECTOR_START=/[{(]/,COMBINED_SELECTOR_END=/[})]/;function tokenizeString(n){const e=[];let t=0;for(;t<n.length;){if(SYMBOL_START.exec(n.charAt(t))){for(var r=t;SYMBOL_CONT.exec(n.charAt(t+1));)t++;e.push(n.substring(r,t+1))}else if(STRINGISH_START.indexOf(n.charAt(t))!==-1){const a=n.charAt(t);var r=t;for(t++;t<n.length&&n.charAt(t)!==a;)n.charAt(t)==="\\"&&t++,t++;e.push(n.substring(r,t+1))}else{const a=n.charAt(t);e.push(a)}t++}return e}function isPossibleRelativeReference(n,e,t){return SYMBOL_START.exec(n.charAt(0))&&n!=="true"&&n!=="false"&&n!=="this"&&n!==t&&e!=="."}function maybeGenerateConditional(n,e,t){if(e[0]==="["){e.shift();let r=1,a=" return (function("+t+"){ return (",o=null;for(;e.length>0;){const s=e[0];if(s==="]"){if(r--,r===0){o===null&&(a=a+"true"),e.shift(),a+=")})";try{const l=maybeEval(n,function(){return Function(a)()},function(){return!0});return l.source=a,l}catch(l){return triggerErrorEvent(getDocument().body,"htmx:syntax:error",{error:l,source:a}),null}}}else s==="["&&r++;isPossibleRelativeReference(s,o,t)?a+="(("+t+"."+s+") ? ("+t+"."+s+") : (window."+s+"))":a=a+s,o=e.shift()}}}function consumeUntil(n,e){let t="";for(;n.length>0&&!e.test(n[0]);)t+=n.shift();return t}function consumeCSSSelector(n){let e;return n.length>0&&COMBINED_SELECTOR_START.test(n[0])?(n.shift(),e=consumeUntil(n,COMBINED_SELECTOR_END).trim(),n.shift()):e=consumeUntil(n,WHITESPACE_OR_COMMA),e}const INPUT_SELECTOR="input, textarea, select";function parseAndCacheTrigger(n,e,t){const r=[],a=tokenizeString(e);do{consumeUntil(a,NOT_WHITESPACE);const l=a.length,u=consumeUntil(a,/[,\[\s]/);if(u!=="")if(u==="every"){const f={trigger:"every"};consumeUntil(a,NOT_WHITESPACE),f.pollInterval=parseInterval(consumeUntil(a,/[,\[\s]/)),consumeUntil(a,NOT_WHITESPACE);var o=maybeGenerateConditional(n,a,"event");o&&(f.eventFilter=o),r.push(f)}else{const f={trigger:u};var o=maybeGenerateConditional(n,a,"event");for(o&&(f.eventFilter=o),consumeUntil(a,NOT_WHITESPACE);a.length>0&&a[0]!==",";){const p=a.shift();if(p==="changed")f.changed=!0;else if(p==="once")f.once=!0;else if(p==="consume")f.consume=!0;else if(p==="delay"&&a[0]===":")a.shift(),f.delay=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA));else if(p==="from"&&a[0]===":"){if(a.shift(),COMBINED_SELECTOR_START.test(a[0]))var s=consumeCSSSelector(a);else{var s=consumeUntil(a,WHITESPACE_OR_COMMA);if(s==="closest"||s==="find"||s==="next"||s==="previous"){a.shift();const y=consumeCSSSelector(a);y.length>0&&(s+=" "+y)}}f.from=s}else p==="target"&&a[0]===":"?(a.shift(),f.target=consumeCSSSelector(a)):p==="throttle"&&a[0]===":"?(a.shift(),f.throttle=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA))):p==="queue"&&a[0]===":"?(a.shift(),f.queue=consumeUntil(a,WHITESPACE_OR_COMMA)):p==="root"&&a[0]===":"?(a.shift(),f[p]=consumeCSSSelector(a)):p==="threshold"&&a[0]===":"?(a.shift(),f[p]=consumeUntil(a,WHITESPACE_OR_COMMA)):triggerErrorEvent(n,"htmx:syntax:error",{token:a.shift()});consumeUntil(a,NOT_WHITESPACE)}r.push(f)}a.length===l&&triggerErrorEvent(n,"htmx:syntax:error",{token:a.shift()}),consumeUntil(a,NOT_WHITESPACE)}while(a[0]===","&&a.shift());return t&&(t[e]=r),r}function getTriggerSpecs(n){const e=getAttributeValue(n,"hx-trigger");let t=[];if(e){const r=htmx.config.triggerSpecsCache;t=r&&r[e]||parseAndCacheTrigger(n,e,r)}return t.length>0?t:matches(n,"form")?[{trigger:"submit"}]:matches(n,'input[type="button"], input[type="submit"]')?[{trigger:"click"}]:matches(n,INPUT_SELECTOR)?[{trigger:"change"}]:[{trigger:"click"}]}function cancelPolling(n){getInternalData(n).cancelled=!0}function processPolling(n,e,t){const r=getInternalData(n);r.timeout=getWindow().setTimeout(function(){bodyContains(n)&&r.cancelled!==!0&&(maybeFilterEvent(t,n,makeEvent("hx:poll:trigger",{triggerSpec:t,target:n}))||e(n),processPolling(n,e,t))},t.pollInterval)}function isLocalLink(n){return location.hostname===n.hostname&&getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")!==0}function eltIsDisabled(n){return closest(n,htmx.config.disableSelector)}function boostElement(n,e,t){if(n instanceof HTMLAnchorElement&&isLocalLink(n)&&(n.target===""||n.target==="_self")||n.tagName==="FORM"&&String(getRawAttribute(n,"method")).toLowerCase()!=="dialog"){e.boosted=!0;let r,a;if(n.tagName==="A")r="get",a=getRawAttribute(n,"href");else{const o=getRawAttribute(n,"method");r=o?o.toLowerCase():"get",a=getRawAttribute(n,"action"),(a==null||a==="")&&(a=location.href),r==="get"&&a.includes("?")&&(a=a.replace(/\?[^#]+/,""))}t.forEach(function(o){addEventListener(n,function(s,l){const u=asElement(s);if(eltIsDisabled(u)){cleanUpElement(u);return}issueAjaxRequest(r,a,u,l)},e,o,!0)})}}function shouldCancel(n,e){if(n.type==="submit"&&e.tagName==="FORM")return!0;if(n.type==="click"){const t=e.closest('input[type="submit"], button');if(t&&t.form&&t.type==="submit")return!0;const r=e.closest("a"),a=/^#.+/;if(r&&r.href&&!a.test(r.getAttribute("href")))return!0}return!1}function ignoreBoostedAnchorCtrlClick(n,e){return getInternalData(n).boosted&&n instanceof HTMLAnchorElement&&e.type==="click"&&(e.ctrlKey||e.metaKey)}function maybeFilterEvent(n,e,t){const r=n.eventFilter;if(r)try{return r.call(e,t)!==!0}catch(a){const o=r.source;return triggerErrorEvent(getDocument().body,"htmx:eventFilter:error",{error:a,source:o}),!0}return!1}function addEventListener(n,e,t,r,a){const o=getInternalData(n);let s;r.from?s=querySelectorAllExt(n,r.from):s=[n],r.changed&&("lastValue"in o||(o.lastValue=new WeakMap),s.forEach(function(l){o.lastValue.has(r)||o.lastValue.set(r,new WeakMap),o.lastValue.get(r).set(l,l.value)})),forEach(s,function(l){const u=function(f){if(!bodyContains(n)){l.removeEventListener(r.trigger,u);return}if(ignoreBoostedAnchorCtrlClick(n,f)||((a||shouldCancel(f,l))&&f.preventDefault(),maybeFilterEvent(r,n,f)))return;const d=getInternalData(f);if(d.triggerSpec=r,d.handledFor==null&&(d.handledFor=[]),d.handledFor.indexOf(n)<0){if(d.handledFor.push(n),r.consume&&f.stopPropagation(),r.target&&f.target&&!matches(asElement(f.target),r.target))return;if(r.once){if(o.triggeredOnce)return;o.triggeredOnce=!0}if(r.changed){const p=f.target,v=p.value,y=o.lastValue.get(r);if(y.has(p)&&y.get(p)===v)return;y.set(p,v)}if(o.delayed&&clearTimeout(o.delayed),o.throttle)return;r.throttle>0?o.throttle||(triggerEvent(n,"htmx:trigger"),e(n,f),o.throttle=getWindow().setTimeout(function(){o.throttle=null},r.throttle)):r.delay>0?o.delayed=getWindow().setTimeout(function(){triggerEvent(n,"htmx:trigger"),e(n,f)},r.delay):(triggerEvent(n,"htmx:trigger"),e(n,f))}};t.listenerInfos==null&&(t.listenerInfos=[]),t.listenerInfos.push({trigger:r.trigger,listener:u,on:l}),l.addEventListener(r.trigger,u)})}let windowIsScrolling=!1,scrollHandler=null;function initScrollHandler(){scrollHandler||(scrollHandler=function(){windowIsScrolling=!0},window.addEventListener("scroll",scrollHandler),window.addEventListener("resize",scrollHandler),setInterval(function(){windowIsScrolling&&(windowIsScrolling=!1,forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),function(n){maybeReveal(n)}))},200))}function maybeReveal(n){!hasAttribute(n,"data-hx-revealed")&&isScrolledIntoView(n)&&(n.setAttribute("data-hx-revealed","true"),getInternalData(n).initHash?triggerEvent(n,"revealed"):n.addEventListener("htmx:afterProcessNode",function(){triggerEvent(n,"revealed")},{once:!0}))}function loadImmediately(n,e,t,r){const a=function(){t.loaded||(t.loaded=!0,triggerEvent(n,"htmx:trigger"),e(n))};r>0?getWindow().setTimeout(a,r):a()}function processVerbs(n,e,t){let r=!1;return forEach(VERBS,function(a){if(hasAttribute(n,"hx-"+a)){const o=getAttributeValue(n,"hx-"+a);r=!0,e.path=o,e.verb=a,t.forEach(function(s){addTriggerHandler(n,s,e,function(l,u){const f=asElement(l);if(eltIsDisabled(f)){cleanUpElement(f);return}issueAjaxRequest(a,o,f,u)})})}}),r}function addTriggerHandler(n,e,t,r){if(e.trigger==="revealed")initScrollHandler(),addEventListener(n,r,t,e),maybeReveal(asElement(n));else if(e.trigger==="intersect"){const a={};e.root&&(a.root=querySelectorExt(n,e.root)),e.threshold&&(a.threshold=parseFloat(e.threshold)),new IntersectionObserver(function(s){for(let l=0;l<s.length;l++)if(s[l].isIntersecting){triggerEvent(n,"intersect");break}},a).observe(asElement(n)),addEventListener(asElement(n),r,t,e)}else!t.firstInitCompleted&&e.trigger==="load"?maybeFilterEvent(e,n,makeEvent("load",{elt:n}))||loadImmediately(asElement(n),r,t,e.delay):e.pollInterval>0?(t.polling=!0,processPolling(asElement(n),r,e)):addEventListener(n,r,t,e)}function shouldProcessHxOn(n){const e=asElement(n);if(!e)return!1;const t=e.attributes;for(let r=0;r<t.length;r++){const a=t[r].name;if(startsWith(a,"hx-on:")||startsWith(a,"data-hx-on:")||startsWith(a,"hx-on-")||startsWith(a,"data-hx-on-"))return!0}return!1}const HX_ON_QUERY=new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');function processHXOnRoot(n,e){shouldProcessHxOn(n)&&e.push(asElement(n));const t=HX_ON_QUERY.evaluate(n);let r=null;for(;r=t.iterateNext();)e.push(asElement(r))}function findHxOnWildcardElements(n){const e=[];if(n instanceof DocumentFragment)for(const t of n.childNodes)processHXOnRoot(t,e);else processHXOnRoot(n,e);return e}function findElementsToProcess(n){if(n.querySelectorAll){const t=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",r=[];for(const o in extensions){const s=extensions[o];if(s.getSelectors){var e=s.getSelectors();e&&r.push(e)}}return n.querySelectorAll(VERB_SELECTOR+t+", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]"+r.flat().map(o=>", "+o).join(""))}else return[]}function maybeSetLastButtonClicked(n){const e=getTargetButton(n.target),t=getRelatedFormData(n);t&&(t.lastButtonClicked=e)}function maybeUnsetLastButtonClicked(n){const e=getRelatedFormData(n);e&&(e.lastButtonClicked=null)}function getTargetButton(n){return closest(asElement(n),"button, input[type='submit']")}function getRelatedForm(n){return n.form||closest(n,"form")}function getRelatedFormData(n){const e=getTargetButton(n.target);if(!e)return;const t=getRelatedForm(e);if(t)return getInternalData(t)}function initButtonTracking(n){n.addEventListener("click",maybeSetLastButtonClicked),n.addEventListener("focusin",maybeSetLastButtonClicked),n.addEventListener("focusout",maybeUnsetLastButtonClicked)}function addHxOnEventHandler(n,e,t){const r=getInternalData(n);Array.isArray(r.onHandlers)||(r.onHandlers=[]);let a;const o=function(s){maybeEval(n,function(){eltIsDisabled(n)||(a||(a=new Function("event",t)),a.call(n,s))})};n.addEventListener(e,o),r.onHandlers.push({event:e,listener:o})}function processHxOnWildcard(n){deInitOnHandlers(n);for(let e=0;e<n.attributes.length;e++){const t=n.attributes[e].name,r=n.attributes[e].value;if(startsWith(t,"hx-on")||startsWith(t,"data-hx-on")){const a=t.indexOf("-on")+3,o=t.slice(a,a+1);if(o==="-"||o===":"){let s=t.slice(a+1);startsWith(s,":")?s="htmx"+s:startsWith(s,"-")?s="htmx:"+s.slice(1):startsWith(s,"htmx-")&&(s="htmx:"+s.slice(5)),addHxOnEventHandler(n,s,r)}}}}function initNode(n){triggerEvent(n,"htmx:beforeProcessNode");const e=getInternalData(n),t=getTriggerSpecs(n);processVerbs(n,e,t)||(getClosestAttributeValue(n,"hx-boost")==="true"?boostElement(n,e,t):hasAttribute(n,"hx-trigger")&&t.forEach(function(a){addTriggerHandler(n,a,e,function(){})})),(n.tagName==="FORM"||getRawAttribute(n,"type")==="submit"&&hasAttribute(n,"form"))&&initButtonTracking(n),e.firstInitCompleted=!0,triggerEvent(n,"htmx:afterProcessNode")}function maybeDeInitAndHash(n){if(!(n instanceof Element))return!1;const e=getInternalData(n),t=attributeHash(n);return e.initHash!==t?(deInitNode(n),e.initHash=t,!0):!1}function processNode(n){if(n=resolveTarget(n),eltIsDisabled(n)){cleanUpElement(n);return}const e=[];maybeDeInitAndHash(n)&&e.push(n),forEach(findElementsToProcess(n),function(t){if(eltIsDisabled(t)){cleanUpElement(t);return}maybeDeInitAndHash(t)&&e.push(t)}),forEach(findHxOnWildcardElements(n),processHxOnWildcard),forEach(e,initNode)}function kebabEventName(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function makeEvent(n,e){return new CustomEvent(n,{bubbles:!0,cancelable:!0,composed:!0,detail:e})}function triggerErrorEvent(n,e,t){triggerEvent(n,e,mergeObjects({error:e},t))}function ignoreEventForLogging(n){return n==="htmx:afterProcessNode"}function withExtensions(n,e,t){forEach(getExtensions(n,[],t),function(r){try{e(r)}catch(a){logError(a)}})}function logError(n){console.error(n)}function triggerEvent(n,e,t){n=resolveTarget(n),t==null&&(t={}),t.elt=n;const r=makeEvent(e,t);htmx.logger&&!ignoreEventForLogging(e)&&htmx.logger(n,e,t),t.error&&(logError(t.error),triggerEvent(n,"htmx:error",{errorInfo:t}));let a=n.dispatchEvent(r);const o=kebabEventName(e);if(a&&o!==e){const s=makeEvent(o,r.detail);a=a&&n.dispatchEvent(s)}return withExtensions(asElement(n),function(s){a=a&&s.onEvent(e,r)!==!1&&!r.defaultPrevented}),a}let currentPathForHistory;function setCurrentPathForHistory(n){currentPathForHistory=n,canAccessLocalStorage()&&sessionStorage.setItem("htmx-current-path-for-history",n)}setCurrentPathForHistory(location.pathname+location.search);function getHistoryElement(){return getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]")||getDocument().body}function saveToHistoryCache(n,e){if(!canAccessLocalStorage())return;const t=cleanInnerHtmlForHistory(e),r=getDocument().title,a=window.scrollY;if(htmx.config.historyCacheSize<=0){sessionStorage.removeItem("htmx-history-cache");return}n=normalizePath(n);const o=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let l=0;l<o.length;l++)if(o[l].url===n){o.splice(l,1);break}const s={url:n,content:t,title:r,scroll:a};for(triggerEvent(getDocument().body,"htmx:historyItemCreated",{item:s,cache:o}),o.push(s);o.length>htmx.config.historyCacheSize;)o.shift();for(;o.length>0;)try{sessionStorage.setItem("htmx-history-cache",JSON.stringify(o));break}catch(l){triggerErrorEvent(getDocument().body,"htmx:historyCacheError",{cause:l,cache:o}),o.shift()}}function getCachedHistory(n){if(!canAccessLocalStorage())return null;n=normalizePath(n);const e=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let t=0;t<e.length;t++)if(e[t].url===n)return e[t];return null}function cleanInnerHtmlForHistory(n){const e=htmx.config.requestClass,t=n.cloneNode(!0);return forEach(findAll(t,"."+e),function(r){removeClassFromElement(r,e)}),forEach(findAll(t,"[data-disabled-by-htmx]"),function(r){r.removeAttribute("disabled")}),t.innerHTML}function saveCurrentPageToHistory(){const n=getHistoryElement();let e=currentPathForHistory;canAccessLocalStorage()&&(e=sessionStorage.getItem("htmx-current-path-for-history")),e=e||location.pathname+location.search,getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')||(triggerEvent(getDocument().body,"htmx:beforeHistorySave",{path:e,historyElt:n}),saveToHistoryCache(e,n)),htmx.config.historyEnabled&&history.replaceState({htmx:!0},getDocument().title,location.href)}function pushUrlIntoHistory(n){htmx.config.getCacheBusterParam&&(n=n.replace(/org\.htmx\.cache-buster=[^&]*&?/,""),(endsWith(n,"&")||endsWith(n,"?"))&&(n=n.slice(0,-1))),htmx.config.historyEnabled&&history.pushState({htmx:!0},"",n),setCurrentPathForHistory(n)}function replaceUrlInHistory(n){htmx.config.historyEnabled&&history.replaceState({htmx:!0},"",n),setCurrentPathForHistory(n)}function settleImmediately(n){forEach(n,function(e){e.call(void 0)})}function loadHistoryFromServer(n){const e=new XMLHttpRequest,t={swapStyle:"innerHTML",swapDelay:0,settleDelay:0},r={path:n,xhr:e,historyElt:getHistoryElement(),swapSpec:t};e.open("GET",n,!0),htmx.config.historyRestoreAsHxRequest&&e.setRequestHeader("HX-Request","true"),e.setRequestHeader("HX-History-Restore-Request","true"),e.setRequestHeader("HX-Current-URL",location.href),e.onload=function(){this.status>=200&&this.status<400?(r.response=this.response,triggerEvent(getDocument().body,"htmx:historyCacheMissLoad",r),swap(r.historyElt,r.response,t,{contextElement:r.historyElt,historyRequest:!0}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",{path:n,cacheMiss:!0,serverResponse:r.response})):triggerErrorEvent(getDocument().body,"htmx:historyCacheMissLoadError",r)},triggerEvent(getDocument().body,"htmx:historyCacheMiss",r)&&e.send()}function restoreHistory(n){saveCurrentPageToHistory(),n=n||location.pathname+location.search;const e=getCachedHistory(n);if(e){const t={swapStyle:"innerHTML",swapDelay:0,settleDelay:0,scroll:e.scroll},r={path:n,item:e,historyElt:getHistoryElement(),swapSpec:t};triggerEvent(getDocument().body,"htmx:historyCacheHit",r)&&(swap(r.historyElt,e.content,t,{contextElement:r.historyElt,title:e.title}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",r))}else htmx.config.refreshOnHistoryMiss?htmx.location.reload(!0):loadHistoryFromServer(n)}function addRequestIndicatorClasses(n){let e=findAttributeTargets(n,"hx-indicator");return e==null&&(e=[n]),forEach(e,function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||0)+1,t.classList.add.call(t.classList,htmx.config.requestClass)}),e}function disableElements(n){let e=findAttributeTargets(n,"hx-disabled-elt");return e==null&&(e=[]),forEach(e,function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||0)+1,t.setAttribute("disabled",""),t.setAttribute("data-disabled-by-htmx","")}),e}function removeRequestIndicators(n,e){forEach(n.concat(e),function(t){const r=getInternalData(t);r.requestCount=(r.requestCount||1)-1}),forEach(n,function(t){getInternalData(t).requestCount===0&&t.classList.remove.call(t.classList,htmx.config.requestClass)}),forEach(e,function(t){getInternalData(t).requestCount===0&&(t.removeAttribute("disabled"),t.removeAttribute("data-disabled-by-htmx"))})}function haveSeenNode(n,e){for(let t=0;t<n.length;t++)if(n[t].isSameNode(e))return!0;return!1}function shouldInclude(n){const e=n;return e.name===""||e.name==null||e.disabled||closest(e,"fieldset[disabled]")||e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"?!1:e.type==="checkbox"||e.type==="radio"?e.checked:!0}function addValueToFormData(n,e,t){n!=null&&e!=null&&(Array.isArray(e)?e.forEach(function(r){t.append(n,r)}):t.append(n,e))}function removeValueFromFormData(n,e,t){if(n!=null&&e!=null){let r=t.getAll(n);Array.isArray(e)?r=r.filter(a=>e.indexOf(a)<0):r=r.filter(a=>a!==e),t.delete(n),forEach(r,a=>t.append(n,a))}}function getValueFromInput(n){return n instanceof HTMLSelectElement&&n.multiple?toArray(n.querySelectorAll("option:checked")).map(function(e){return e.value}):n instanceof HTMLInputElement&&n.files?toArray(n.files):n.value}function processInputValue(n,e,t,r,a){if(!(r==null||haveSeenNode(n,r))){if(n.push(r),shouldInclude(r)){const o=getRawAttribute(r,"name");addValueToFormData(o,getValueFromInput(r),e),a&&validateElement(r,t)}r instanceof HTMLFormElement&&(forEach(r.elements,function(o){n.indexOf(o)>=0?removeValueFromFormData(o.name,getValueFromInput(o),e):n.push(o),a&&validateElement(o,t)}),new FormData(r).forEach(function(o,s){o instanceof File&&o.name===""||addValueToFormData(s,o,e)}))}}function validateElement(n,e){const t=n;t.willValidate&&(triggerEvent(t,"htmx:validation:validate"),t.checkValidity()||(triggerEvent(t,"htmx:validation:failed",{message:t.validationMessage,validity:t.validity})&&!e.length&&htmx.config.reportValidityOfForms&&t.reportValidity(),e.push({elt:t,message:t.validationMessage,validity:t.validity})))}function overrideFormData(n,e){for(const t of e.keys())n.delete(t);return e.forEach(function(t,r){n.append(r,t)}),n}function getInputValues(n,e){const t=[],r=new FormData,a=new FormData,o=[],s=getInternalData(n);s.lastButtonClicked&&!bodyContains(s.lastButtonClicked)&&(s.lastButtonClicked=null);let l=n instanceof HTMLFormElement&&n.noValidate!==!0||getAttributeValue(n,"hx-validate")==="true";if(s.lastButtonClicked&&(l=l&&s.lastButtonClicked.formNoValidate!==!0),e!=="get"&&processInputValue(t,a,o,getRelatedForm(n),l),processInputValue(t,r,o,n,l),s.lastButtonClicked||n.tagName==="BUTTON"||n.tagName==="INPUT"&&getRawAttribute(n,"type")==="submit"){const f=s.lastButtonClicked||n,d=getRawAttribute(f,"name");addValueToFormData(d,f.value,a)}const u=findAttributeTargets(n,"hx-include");return forEach(u,function(f){processInputValue(t,r,o,asElement(f),l),matches(f,"form")||forEach(asParentNode(f).querySelectorAll(INPUT_SELECTOR),function(d){processInputValue(t,r,o,d,l)})}),overrideFormData(r,a),{errors:o,formData:r,values:formDataProxy(r)}}function appendParam(n,e,t){n!==""&&(n+="&"),String(t)==="[object Object]"&&(t=JSON.stringify(t));const r=encodeURIComponent(t);return n+=encodeURIComponent(e)+"="+r,n}function urlEncode(n){n=formDataFromObject(n);let e="";return n.forEach(function(t,r){e=appendParam(e,r,t)}),e}function getHeaders(n,e,t){const r={"HX-Request":"true","HX-Trigger":getRawAttribute(n,"id"),"HX-Trigger-Name":getRawAttribute(n,"name"),"HX-Target":getAttributeValue(e,"id"),"HX-Current-URL":location.href};return getValuesForElement(n,"hx-headers",!1,r),t!==void 0&&(r["HX-Prompt"]=t),getInternalData(n).boosted&&(r["HX-Boosted"]="true"),r}function filterValues(n,e){const t=getClosestAttributeValue(e,"hx-params");if(t){if(t==="none")return new FormData;if(t==="*")return n;if(t.indexOf("not ")===0)return forEach(t.slice(4).split(","),function(r){r=r.trim(),n.delete(r)}),n;{const r=new FormData;return forEach(t.split(","),function(a){a=a.trim(),n.has(a)&&n.getAll(a).forEach(function(o){r.append(a,o)})}),r}}else return n}function isAnchorLink(n){return!!getRawAttribute(n,"href")&&getRawAttribute(n,"href").indexOf("#")>=0}function getSwapSpecification(n,e){const t=e||getClosestAttributeValue(n,"hx-swap"),r={swapStyle:getInternalData(n).boosted?"innerHTML":htmx.config.defaultSwapStyle,swapDelay:htmx.config.defaultSwapDelay,settleDelay:htmx.config.defaultSettleDelay};if(htmx.config.scrollIntoViewOnBoost&&getInternalData(n).boosted&&!isAnchorLink(n)&&(r.show="top"),t){const s=splitOnWhitespace(t);if(s.length>0)for(let l=0;l<s.length;l++){const u=s[l];if(u.indexOf("swap:")===0)r.swapDelay=parseInterval(u.slice(5));else if(u.indexOf("settle:")===0)r.settleDelay=parseInterval(u.slice(7));else if(u.indexOf("transition:")===0)r.transition=u.slice(11)==="true";else if(u.indexOf("ignoreTitle:")===0)r.ignoreTitle=u.slice(12)==="true";else if(u.indexOf("scroll:")===0){var a=u.slice(7).split(":");const d=a.pop();var o=a.length>0?a.join(":"):null;r.scroll=d,r.scrollTarget=o}else if(u.indexOf("show:")===0){var a=u.slice(5).split(":");const p=a.pop();var o=a.length>0?a.join(":"):null;r.show=p,r.showTarget=o}else if(u.indexOf("focus-scroll:")===0){const f=u.slice(13);r.focusScroll=f=="true"}else l==0?r.swapStyle=u:logError("Unknown modifier in hx-swap: "+u)}}return r}function usesFormData(n){return getClosestAttributeValue(n,"hx-encoding")==="multipart/form-data"||matches(n,"form")&&getRawAttribute(n,"enctype")==="multipart/form-data"}function encodeParamsForBody(n,e,t){let r=null;return withExtensions(e,function(a){r==null&&(r=a.encodeParameters(n,t,e))}),r??(usesFormData(e)?overrideFormData(new FormData,formDataFromObject(t)):urlEncode(t))}function makeSettleInfo(n){return{tasks:[],elts:[n]}}function updateScrollState(n,e){const t=n[0],r=n[n.length-1];if(e.scroll){var a=null;e.scrollTarget&&(a=asElement(querySelectorExt(t,e.scrollTarget))),e.scroll==="top"&&(t||a)&&(a=a||t,a.scrollTop=0),e.scroll==="bottom"&&(r||a)&&(a=a||r,a.scrollTop=a.scrollHeight),typeof e.scroll=="number"&&getWindow().setTimeout(function(){window.scrollTo(0,e.scroll)},0)}if(e.show){var a=null;if(e.showTarget){let s=e.showTarget;e.showTarget==="window"&&(s="body"),a=asElement(querySelectorExt(t,s))}e.show==="top"&&(t||a)&&(a=a||t,a.scrollIntoView({block:"start",behavior:htmx.config.scrollBehavior})),e.show==="bottom"&&(r||a)&&(a=a||r,a.scrollIntoView({block:"end",behavior:htmx.config.scrollBehavior}))}}function getValuesForElement(n,e,t,r,a){if(r==null&&(r={}),n==null)return r;const o=getAttributeValue(n,e);if(o){let s=o.trim(),l=t;if(s==="unset")return null;s.indexOf("javascript:")===0?(s=s.slice(11),l=!0):s.indexOf("js:")===0&&(s=s.slice(3),l=!0),s.indexOf("{")!==0&&(s="{"+s+"}");let u;l?u=maybeEval(n,function(){return a?Function("event","return ("+s+")").call(n,a):Function("return ("+s+")").call(n)},{}):u=parseJSON(s);for(const f in u)u.hasOwnProperty(f)&&r[f]==null&&(r[f]=u[f])}return getValuesForElement(asElement(parentElt(n)),e,t,r,a)}function maybeEval(n,e,t){return htmx.config.allowEval?e():(triggerErrorEvent(n,"htmx:evalDisallowedError"),t)}function getHXVarsForElement(n,e,t){return getValuesForElement(n,"hx-vars",!0,t,e)}function getHXValsForElement(n,e,t){return getValuesForElement(n,"hx-vals",!1,t,e)}function getExpressionVars(n,e){return mergeObjects(getHXVarsForElement(n,e),getHXValsForElement(n,e))}function safelySetHeaderValue(n,e,t){if(t!==null)try{n.setRequestHeader(e,t)}catch{n.setRequestHeader(e,encodeURIComponent(t)),n.setRequestHeader(e+"-URI-AutoEncoded","true")}}function getPathFromResponse(n){if(n.responseURL)try{const e=new URL(n.responseURL);return e.pathname+e.search}catch{triggerErrorEvent(getDocument().body,"htmx:badResponseUrl",{url:n.responseURL})}}function hasHeader(n,e){return e.test(n.getAllResponseHeaders())}function ajaxHelper(n,e,t){if(n=n.toLowerCase(),t){if(t instanceof Element||typeof t=="string")return issueAjaxRequest(n,e,null,null,{targetOverride:resolveTarget(t)||DUMMY_ELT,returnPromise:!0});{let r=resolveTarget(t.target);return(t.target&&!r||t.source&&!r&&!resolveTarget(t.source))&&(r=DUMMY_ELT),issueAjaxRequest(n,e,resolveTarget(t.source),t.event,{handler:t.handler,headers:t.headers,values:t.values,targetOverride:r,swapOverride:t.swap,select:t.select,returnPromise:!0,push:t.push,replace:t.replace,selectOOB:t.selectOOB})}}else return issueAjaxRequest(n,e,null,null,{returnPromise:!0})}function hierarchyForElt(n){const e=[];for(;n;)e.push(n),n=n.parentElement;return e}function verifyPath(n,e,t){const r=new URL(e,location.protocol!=="about:"?location.href:window.origin),o=(location.protocol!=="about:"?location.origin:window.origin)===r.origin;return htmx.config.selfRequestsOnly&&!o?!1:triggerEvent(n,"htmx:validateUrl",mergeObjects({url:r,sameHost:o},t))}function formDataFromObject(n){if(n instanceof FormData)return n;const e=new FormData;for(const t in n)n.hasOwnProperty(t)&&(n[t]&&typeof n[t].forEach=="function"?n[t].forEach(function(r){e.append(t,r)}):typeof n[t]=="object"&&!(n[t]instanceof Blob)?e.append(t,JSON.stringify(n[t])):e.append(t,n[t]));return e}function formDataArrayProxy(n,e,t){return new Proxy(t,{get:function(r,a){return typeof a=="number"?r[a]:a==="length"?r.length:a==="push"?function(o){r.push(o),n.append(e,o)}:typeof r[a]=="function"?function(){r[a].apply(r,arguments),n.delete(e),r.forEach(function(o){n.append(e,o)})}:r[a]&&r[a].length===1?r[a][0]:r[a]},set:function(r,a,o){return r[a]=o,n.delete(e),r.forEach(function(s){n.append(e,s)}),!0}})}function formDataProxy(n){return new Proxy(n,{get:function(e,t){if(typeof t=="symbol"){const a=Reflect.get(e,t);return typeof a=="function"?function(){return a.apply(n,arguments)}:a}if(t==="toJSON")return()=>Object.fromEntries(n);if(t in e&&typeof e[t]=="function")return function(){return n[t].apply(n,arguments)};const r=n.getAll(t);if(r.length!==0)return r.length===1?r[0]:formDataArrayProxy(e,t,r)},set:function(e,t,r){return typeof t!="string"?!1:(e.delete(t),r&&typeof r.forEach=="function"?r.forEach(function(a){e.append(t,a)}):typeof r=="object"&&!(r instanceof Blob)?e.append(t,JSON.stringify(r)):e.append(t,r),!0)},deleteProperty:function(e,t){return typeof t=="string"&&e.delete(t),!0},ownKeys:function(e){return Reflect.ownKeys(Object.fromEntries(e))},getOwnPropertyDescriptor:function(e,t){return Reflect.getOwnPropertyDescriptor(Object.fromEntries(e),t)}})}function issueAjaxRequest(n,e,t,r,a,o){let s=null,l=null;if(a=a??{},a.returnPromise&&typeof Promise<"u")var u=new Promise(function(Pe,ze){s=Pe,l=ze});t==null&&(t=getDocument().body);const f=a.handler||handleAjaxResponse,d=a.select||null;if(!bodyContains(t))return maybeCall(s),u;const p=a.targetOverride||asElement(getTarget(t));if(p==null||p==DUMMY_ELT)return triggerErrorEvent(t,"htmx:targetError",{target:getClosestAttributeValue(t,"hx-target")}),maybeCall(l),u;let v=getInternalData(t);const y=v.lastButtonClicked;if(y){const Pe=getRawAttribute(y,"formaction");Pe!=null&&(e=Pe);const ze=getRawAttribute(y,"formmethod");if(ze!=null)if(VERBS.includes(ze.toLowerCase()))n=ze;else return maybeCall(s),u}const x=getClosestAttributeValue(t,"hx-confirm");if(o===void 0&&triggerEvent(t,"htmx:confirm",{target:p,elt:t,path:e,verb:n,triggeringEvent:r,etc:a,issueRequest:function(tt){return issueAjaxRequest(n,e,t,r,a,!!tt)},question:x})===!1)return maybeCall(s),u;let E=t,C=getClosestAttributeValue(t,"hx-sync"),A=null,M=!1;if(C){const Pe=C.split(":"),ze=Pe[0].trim();if(ze==="this"?E=findThisElement(t,"hx-sync"):E=asElement(querySelectorExt(t,ze)),C=(Pe[1]||"drop").trim(),v=getInternalData(E),C==="drop"&&v.xhr&&v.abortable!==!0)return maybeCall(s),u;if(C==="abort"){if(v.xhr)return maybeCall(s),u;M=!0}else C==="replace"?triggerEvent(E,"htmx:abort"):C.indexOf("queue")===0&&(A=(C.split(" ")[1]||"last").trim())}if(v.xhr)if(v.abortable)triggerEvent(E,"htmx:abort");else{if(A==null){if(r){const Pe=getInternalData(r);Pe&&Pe.triggerSpec&&Pe.triggerSpec.queue&&(A=Pe.triggerSpec.queue)}A==null&&(A="last")}return v.queuedRequests==null&&(v.queuedRequests=[]),A==="first"&&v.queuedRequests.length===0?v.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)}):A==="all"?v.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)}):A==="last"&&(v.queuedRequests=[],v.queuedRequests.push(function(){issueAjaxRequest(n,e,t,r,a)})),maybeCall(s),u}const V=new XMLHttpRequest;v.xhr=V,v.abortable=M;const R=function(){v.xhr=null,v.abortable=!1,v.queuedRequests!=null&&v.queuedRequests.length>0&&v.queuedRequests.shift()()},q=getClosestAttributeValue(t,"hx-prompt");if(q){var Q=prompt(q);if(Q===null||!triggerEvent(t,"htmx:prompt",{prompt:Q,target:p}))return maybeCall(s),R(),u}if(x&&!o&&!confirm(x))return maybeCall(s),R(),u;let m=getHeaders(t,p,Q);n!=="get"&&!usesFormData(t)&&(m["Content-Type"]="application/x-www-form-urlencoded"),a.headers&&(m=mergeObjects(m,a.headers));const ne=getInputValues(t,n);let re=ne.errors;const ge=ne.formData;a.values&&overrideFormData(ge,formDataFromObject(a.values));const ve=formDataFromObject(getExpressionVars(t,r)),_e=overrideFormData(ge,ve);let ue=filterValues(_e,t);htmx.config.getCacheBusterParam&&n==="get"&&ue.set("org.htmx.cache-buster",getRawAttribute(p,"id")||"true"),(e==null||e==="")&&(e=location.href);const He=getValuesForElement(t,"hx-request"),pe=getInternalData(t).boosted;let Se=htmx.config.methodsThatUseUrlParams.indexOf(n)>=0;const xe={boosted:pe,useUrlParams:Se,formData:ue,parameters:formDataProxy(ue),unfilteredFormData:_e,unfilteredParameters:formDataProxy(_e),headers:m,elt:t,target:p,verb:n,errors:re,withCredentials:a.credentials||He.credentials||htmx.config.withCredentials,timeout:a.timeout||He.timeout||htmx.config.timeout,path:e,triggeringEvent:r};if(!triggerEvent(t,"htmx:configRequest",xe))return maybeCall(s),R(),u;if(e=xe.path,n=xe.verb,m=xe.headers,ue=formDataFromObject(xe.parameters),re=xe.errors,Se=xe.useUrlParams,re&&re.length>0)return triggerEvent(t,"htmx:validation:halted",xe),maybeCall(s),R(),u;const je=e.split("#"),Le=je[0],ct=je[1];let Ge=e;if(Se&&(Ge=Le,!ue.keys().next().done&&(Ge.indexOf("?")<0?Ge+="?":Ge+="&",Ge+=urlEncode(ue),ct&&(Ge+="#"+ct))),!verifyPath(t,Ge,xe))return triggerErrorEvent(t,"htmx:invalidPath",xe),maybeCall(l),R(),u;if(V.open(n.toUpperCase(),Ge,!0),V.overrideMimeType("text/html"),V.withCredentials=xe.withCredentials,V.timeout=xe.timeout,!He.noHeaders){for(const Pe in m)if(m.hasOwnProperty(Pe)){const ze=m[Pe];safelySetHeaderValue(V,Pe,ze)}}const We={xhr:V,target:p,requestConfig:xe,etc:a,boosted:pe,select:d,pathInfo:{requestPath:e,finalRequestPath:Ge,responsePath:null,anchor:ct}};if(V.onload=function(){try{const Pe=hierarchyForElt(t);if(We.pathInfo.responsePath=getPathFromResponse(V),f(t,We),We.keepIndicators!==!0&&removeRequestIndicators(et,rt),triggerEvent(t,"htmx:afterRequest",We),triggerEvent(t,"htmx:afterOnLoad",We),!bodyContains(t)){let ze=null;for(;Pe.length>0&&ze==null;){const tt=Pe.shift();bodyContains(tt)&&(ze=tt)}ze&&(triggerEvent(ze,"htmx:afterRequest",We),triggerEvent(ze,"htmx:afterOnLoad",We))}maybeCall(s)}catch(Pe){throw triggerErrorEvent(t,"htmx:onLoadError",mergeObjects({error:Pe},We)),Pe}finally{R()}},V.onerror=function(){removeRequestIndicators(et,rt),triggerErrorEvent(t,"htmx:afterRequest",We),triggerErrorEvent(t,"htmx:sendError",We),maybeCall(l),R()},V.onabort=function(){removeRequestIndicators(et,rt),triggerErrorEvent(t,"htmx:afterRequest",We),triggerErrorEvent(t,"htmx:sendAbort",We),maybeCall(l),R()},V.ontimeout=function(){removeRequestIndicators(et,rt),triggerErrorEvent(t,"htmx:afterRequest",We),triggerErrorEvent(t,"htmx:timeout",We),maybeCall(l),R()},!triggerEvent(t,"htmx:beforeRequest",We))return maybeCall(s),R(),u;var et=addRequestIndicatorClasses(t),rt=disableElements(t);forEach(["loadstart","loadend","progress","abort"],function(Pe){forEach([V,V.upload],function(ze){ze.addEventListener(Pe,function(tt){triggerEvent(t,"htmx:xhr:"+Pe,{lengthComputable:tt.lengthComputable,loaded:tt.loaded,total:tt.total})})})}),triggerEvent(t,"htmx:beforeSend",We);const Ke=Se?null:encodeParamsForBody(V,t,ue);return V.send(Ke),u}function determineHistoryUpdates(n,e){const t=e.xhr;let r=null,a=null;if(hasHeader(t,/HX-Push:/i)?(r=t.getResponseHeader("HX-Push"),a="push"):hasHeader(t,/HX-Push-Url:/i)?(r=t.getResponseHeader("HX-Push-Url"),a="push"):hasHeader(t,/HX-Replace-Url:/i)&&(r=t.getResponseHeader("HX-Replace-Url"),a="replace"),r)return r==="false"?{}:{type:a,path:r};const o=e.pathInfo.finalRequestPath,s=e.pathInfo.responsePath,l=e.etc.push||getClosestAttributeValue(n,"hx-push-url"),u=e.etc.replace||getClosestAttributeValue(n,"hx-replace-url"),f=getInternalData(n).boosted;let d=null,p=null;return l?(d="push",p=l):u?(d="replace",p=u):f&&(d="push",p=s||o),p?p==="false"?{}:(p==="true"&&(p=s||o),e.pathInfo.anchor&&p.indexOf("#")===-1&&(p=p+"#"+e.pathInfo.anchor),{type:d,path:p}):{}}function codeMatches(n,e){var t=new RegExp(n.code);return t.test(e.toString(10))}function resolveResponseHandling(n){for(var e=0;e<htmx.config.responseHandling.length;e++){var t=htmx.config.responseHandling[e];if(codeMatches(t,n.status))return t}return{swap:!1}}function handleTitle(n){if(n){const e=find("title");e?e.textContent=n:window.document.title=n}}function resolveRetarget(n,e){if(e==="this")return n;const t=asElement(querySelectorExt(n,e));if(t==null)throw triggerErrorEvent(n,"htmx:targetError",{target:e}),new Error(`Invalid re-target ${e}`);return t}function handleAjaxResponse(n,e){const t=e.xhr;let r=e.target;const a=e.etc,o=e.select;if(!triggerEvent(n,"htmx:beforeOnLoad",e))return;if(hasHeader(t,/HX-Trigger:/i)&&handleTriggerHeader(t,"HX-Trigger",n),hasHeader(t,/HX-Location:/i)){let M=t.getResponseHeader("HX-Location");var s={};M.indexOf("{")===0&&(s=parseJSON(M),M=s.path,delete s.path),s.push=s.push||"true",ajaxHelper("get",M,s);return}const l=hasHeader(t,/HX-Refresh:/i)&&t.getResponseHeader("HX-Refresh")==="true";if(hasHeader(t,/HX-Redirect:/i)){e.keepIndicators=!0,htmx.location.href=t.getResponseHeader("HX-Redirect"),l&&htmx.location.reload();return}if(l){e.keepIndicators=!0,htmx.location.reload();return}const u=determineHistoryUpdates(n,e),f=resolveResponseHandling(t),d=f.swap;let p=!!f.error,v=htmx.config.ignoreTitle||f.ignoreTitle,y=f.select;f.target&&(e.target=resolveRetarget(n,f.target));var x=a.swapOverride;x==null&&f.swapOverride&&(x=f.swapOverride),hasHeader(t,/HX-Retarget:/i)&&(e.target=resolveRetarget(n,t.getResponseHeader("HX-Retarget"))),hasHeader(t,/HX-Reswap:/i)&&(x=t.getResponseHeader("HX-Reswap"));var E=t.response,C=mergeObjects({shouldSwap:d,serverResponse:E,isError:p,ignoreTitle:v,selectOverride:y,swapOverride:x},e);if(!(f.event&&!triggerEvent(r,f.event,C))&&triggerEvent(r,"htmx:beforeSwap",C)){if(r=C.target,E=C.serverResponse,p=C.isError,v=C.ignoreTitle,y=C.selectOverride,x=C.swapOverride,e.target=r,e.failed=p,e.successful=!p,C.shouldSwap){t.status===286&&cancelPolling(n),withExtensions(n,function(R){E=R.transformResponse(E,t,n)}),u.type&&saveCurrentPageToHistory();var A=getSwapSpecification(n,x);A.hasOwnProperty("ignoreTitle")||(A.ignoreTitle=v),r.classList.add(htmx.config.swappingClass),o&&(y=o),hasHeader(t,/HX-Reselect:/i)&&(y=t.getResponseHeader("HX-Reselect"));const M=a.selectOOB||getClosestAttributeValue(n,"hx-select-oob"),V=getClosestAttributeValue(n,"hx-select");swap(r,E,A,{select:y==="unset"?null:y||V,selectOOB:M,eventInfo:e,anchor:e.pathInfo.anchor,contextElement:n,afterSwapCallback:function(){if(hasHeader(t,/HX-Trigger-After-Swap:/i)){let R=n;bodyContains(n)||(R=getDocument().body),handleTriggerHeader(t,"HX-Trigger-After-Swap",R)}},afterSettleCallback:function(){if(hasHeader(t,/HX-Trigger-After-Settle:/i)){let R=n;bodyContains(n)||(R=getDocument().body),handleTriggerHeader(t,"HX-Trigger-After-Settle",R)}},beforeSwapCallback:function(){u.type&&(triggerEvent(getDocument().body,"htmx:beforeHistoryUpdate",mergeObjects({history:u},e)),u.type==="push"?(pushUrlIntoHistory(u.path),triggerEvent(getDocument().body,"htmx:pushedIntoHistory",{path:u.path})):(replaceUrlInHistory(u.path),triggerEvent(getDocument().body,"htmx:replacedInHistory",{path:u.path})))}})}p&&triggerErrorEvent(n,"htmx:responseError",mergeObjects({error:"Response Status Error Code "+t.status+" from "+e.pathInfo.requestPath},e))}}const extensions={};function extensionBase(){return{init:function(n){return null},getSelectors:function(){return null},onEvent:function(n,e){return!0},transformResponse:function(n,e,t){return n},isInlineSwap:function(n){return!1},handleSwap:function(n,e,t,r){return!1},encodeParameters:function(n,e,t){return null}}}function defineExtension(n,e){e.init&&e.init(internalAPI),extensions[n]=mergeObjects(extensionBase(),e)}function removeExtension(n){delete extensions[n]}function getExtensions(n,e,t){if(e==null&&(e=[]),n==null)return e;t==null&&(t=[]);const r=getAttributeValue(n,"hx-ext");return r&&forEach(r.split(","),function(a){if(a=a.replace(/ /g,""),a.slice(0,7)=="ignore:"){t.push(a.slice(7));return}if(t.indexOf(a)<0){const o=extensions[a];o&&e.indexOf(o)<0&&e.push(o)}}),getExtensions(asElement(parentElt(n)),e,t)}var isReady=!1;getDocument().addEventListener("DOMContentLoaded",function(){isReady=!0});function ready(n){isReady||getDocument().readyState==="complete"?n():getDocument().addEventListener("DOMContentLoaded",n)}function insertIndicatorStyles(){if(htmx.config.includeIndicatorStyles!==!1){const n=htmx.config.inlineStyleNonce?` nonce="${htmx.config.inlineStyleNonce}"`:"",e=htmx.config.indicatorClass,t=htmx.config.requestClass;getDocument().head.insertAdjacentHTML("beforeend",`<style${n}>.${e}{opacity:0;visibility: hidden} .${t} .${e}, .${t}.${e}{opacity:1;visibility: visible;transition: opacity 200ms ease-in}</style>`)}}function getMetaConfig(){const n=getDocument().querySelector('meta[name="htmx-config"]');return n?parseJSON(n.content):null}function mergeMetaConfig(){const n=getMetaConfig();n&&(htmx.config=mergeObjects(htmx.config,n))}return ready(function(){mergeMetaConfig(),insertIndicatorStyles();let n=getDocument().body;processNode(n);const e=getDocument().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");n.addEventListener("htmx:abort",function(r){const a=r.detail.elt||r.target,o=getInternalData(a);o&&o.xhr&&o.xhr.abort()});const t=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(r){r.state&&r.state.htmx?(restoreHistory(),forEach(e,function(a){triggerEvent(a,"htmx:restored",{document:getDocument(),triggerEvent})})):t&&t(r)},getWindow().setTimeout(function(){triggerEvent(n,"htmx:load",{}),n=null},0)}),htmx})();var HOOKS=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],defaults$1={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var e=new Date(n.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},english={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var e=n%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},pad=function(n,e){return e===void 0&&(e=2),("000"+n).slice(e*-1)},int=function(n){return n===!0?1:0};function debounce$1(n,e){var t;return function(){var r=this,a=arguments;clearTimeout(t),t=setTimeout(function(){return n.apply(r,a)},e)}}var arrayify=function(n){return n instanceof Array?n:[n]};function toggleClass(n,e,t){if(t===!0)return n.classList.add(e);n.classList.remove(e)}function createElement(n,e,t){var r=window.document.createElement(n);return e=e||"",t=t||"",r.className=e,t!==void 0&&(r.textContent=t),r}function clearNode(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function findParent(n,e){if(e(n))return n;if(n.parentNode)return findParent(n.parentNode,e)}function createNumberInput(n,e){var t=createElement("div","numInputWrapper"),r=createElement("input","numInput "+n),a=createElement("span","arrowUp"),o=createElement("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),e!==void 0)for(var s in e)r.setAttribute(s,e[s]);return t.appendChild(r),t.appendChild(a),t.appendChild(o),t}function getEventTarget(n){try{if(typeof n.composedPath=="function"){var e=n.composedPath();return e[0]}return n.target}catch{return n.target}}var doNothing=function(){},monthToStr=function(n,e,t){return t.months[e?"shorthand":"longhand"][n]},revFormat={D:doNothing,F:function(n,e,t){n.setMonth(t.months.longhand.indexOf(e))},G:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},H:function(n,e){n.setHours(parseFloat(e))},J:function(n,e){n.setDate(parseFloat(e))},K:function(n,e,t){n.setHours(n.getHours()%12+12*int(new RegExp(t.amPM[1],"i").test(e)))},M:function(n,e,t){n.setMonth(t.months.shorthand.indexOf(e))},S:function(n,e){n.setSeconds(parseFloat(e))},U:function(n,e){return new Date(parseFloat(e)*1e3)},W:function(n,e,t){var r=parseInt(e),a=new Date(n.getFullYear(),0,2+(r-1)*7,0,0,0,0);return a.setDate(a.getDate()-a.getDay()+t.firstDayOfWeek),a},Y:function(n,e){n.setFullYear(parseFloat(e))},Z:function(n,e){return new Date(e)},d:function(n,e){n.setDate(parseFloat(e))},h:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},i:function(n,e){n.setMinutes(parseFloat(e))},j:function(n,e){n.setDate(parseFloat(e))},l:doNothing,m:function(n,e){n.setMonth(parseFloat(e)-1)},n:function(n,e){n.setMonth(parseFloat(e)-1)},s:function(n,e){n.setSeconds(parseFloat(e))},u:function(n,e){return new Date(parseFloat(e))},w:doNothing,y:function(n,e){n.setFullYear(2e3+parseFloat(e))}},tokenRegex={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},formats={Z:function(n){return n.toISOString()},D:function(n,e,t){return e.weekdays.shorthand[formats.w(n,e,t)]},F:function(n,e,t){return monthToStr(formats.n(n,e,t)-1,!1,e)},G:function(n,e,t){return pad(formats.h(n,e,t))},H:function(n){return pad(n.getHours())},J:function(n,e){return e.ordinal!==void 0?n.getDate()+e.ordinal(n.getDate()):n.getDate()},K:function(n,e){return e.amPM[int(n.getHours()>11)]},M:function(n,e){return monthToStr(n.getMonth(),!0,e)},S:function(n){return pad(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,e,t){return t.getWeek(n)},Y:function(n){return pad(n.getFullYear(),4)},d:function(n){return pad(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return pad(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,e){return e.weekdays.longhand[n.getDay()]},m:function(n){return pad(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},createDateFormatter=function(n){var e=n.config,t=e===void 0?defaults$1:e,r=n.l10n,a=r===void 0?english:r,o=n.isMobile,s=o===void 0?!1:o;return function(l,u,f){var d=f||a;return t.formatDate!==void 0&&!s?t.formatDate(l,u,d):u.split("").map(function(p,v,y){return formats[p]&&y[v-1]!=="\\"?formats[p](l,d,t):p!=="\\"?p:""}).join("")}},createDateParser=function(n){var e=n.config,t=e===void 0?defaults$1:e,r=n.l10n,a=r===void 0?english:r;return function(o,s,l,u){if(!(o!==0&&!o)){var f=u||a,d,p=o;if(o instanceof Date)d=new Date(o.getTime());else if(typeof o!="string"&&o.toFixed!==void 0)d=new Date(o);else if(typeof o=="string"){var v=s||(t||defaults$1).dateFormat,y=String(o).trim();if(y==="today")d=new Date,l=!0;else if(t&&t.parseDate)d=t.parseDate(o,v);else if(/Z$/.test(y)||/GMT$/.test(y))d=new Date(o);else{for(var x=void 0,E=[],C=0,A=0,M="";C<v.length;C++){var V=v[C],R=V==="\\",q=v[C-1]==="\\"||R;if(tokenRegex[V]&&!q){M+=tokenRegex[V];var Q=new RegExp(M).exec(o);Q&&(x=!0)&&E[V!=="Y"?"push":"unshift"]({fn:revFormat[V],val:Q[++A]})}else R||(M+=".")}d=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),E.forEach(function(m){var ne=m.fn,re=m.val;return d=ne(d,re,f)||d}),d=x?d:void 0}}if(!(d instanceof Date&&!isNaN(d.getTime()))){t.errorHandler(new Error("Invalid date provided: "+p));return}return l===!0&&d.setHours(0,0,0,0),d}}};function compareDates(n,e,t){return t===void 0&&(t=!0),t!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(e.getTime()).setHours(0,0,0,0):n.getTime()-e.getTime()}var isBetween=function(n,e,t){return n>Math.min(e,t)&&n<Math.max(e,t)},calculateSecondsSinceMidnight=function(n,e,t){return n*3600+e*60+t},parseSeconds=function(n){var e=Math.floor(n/3600),t=(n-e*3600)/60;return[e,t,n-e*3600-t*60]},duration={DAY:864e5};function getDefaultHours(n){var e=n.defaultHour,t=n.defaultMinute,r=n.defaultSeconds;if(n.minDate!==void 0){var a=n.minDate.getHours(),o=n.minDate.getMinutes(),s=n.minDate.getSeconds();e<a&&(e=a),e===a&&t<o&&(t=o),e===a&&t===o&&r<s&&(r=n.minDate.getSeconds())}if(n.maxDate!==void 0){var l=n.maxDate.getHours(),u=n.maxDate.getMinutes();e=Math.min(e,l),e===l&&(t=Math.min(u,t)),e===l&&t===u&&(r=n.maxDate.getSeconds())}return{hours:e,minutes:t,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var r=function(l){l&&Object.keys(l).forEach(function(u){return n[u]=l[u]})},a=0,o=e;a<o.length;a++){var s=o[a];r(s)}return n});var __assign=function(){return __assign=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},__assign.apply(this,arguments)},__spreadArrays=function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),a=0,e=0;e<t;e++)for(var o=arguments[e],s=0,l=o.length;s<l;s++,a++)r[a]=o[s];return r},DEBOUNCED_CHANGE_MS=300;function FlatpickrInstance(n,e){var t={config:__assign(__assign({},defaults$1),flatpickr.defaultConfig),l10n:english};t.parseDate=createDateParser({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=E,t._setHoursFromDate=v,t._positionCalendar=xt,t.changeMonth=Ge,t.changeYear=ze,t.clear=We,t.close=et,t.onMouseOver=yt,t._createElement=createElement,t.createDay=Q,t.destroy=rt,t.isEnabled=tt,t.jumpToDate=M,t.updateValue=lt,t.open=Un,t.redraw=Ye,t.set=st,t.setDate=ar,t.toggle=Ht;function r(){t.utils={getDaysInMonth:function(O,P){return O===void 0&&(O=t.currentMonth),P===void 0&&(P=t.currentYear),O===1&&(P%4===0&&P%100!==0||P%400===0)?29:t.l10n.daysInMonth[O]}}}function a(){t.element=t.input=n,t.isOpen=!1,$n(),ot(),Xn(),Tt(),r(),t.isMobile||q(),A(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&v(t.config.noCalendar?t.latestSelectedDateObj:void 0),lt(!1)),l();var O=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&O&&xt(),Ve("onReady")}function o(){var O;return((O=t.calendarContainer)===null||O===void 0?void 0:O.getRootNode()).activeElement||document.activeElement}function s(O){return O.bind(t)}function l(){var O=t.config;O.weekNumbers===!1&&O.showMonths===1||O.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var P=(t.days.offsetWidth+1)*O.showMonths;t.daysContainer.style.width=P+"px",t.calendarContainer.style.width=P+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function u(O){if(t.selectedDates.length===0){var P=t.config.minDate===void 0||compareDates(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),B=getDefaultHours(t.config);P.setHours(B.hours,B.minutes,B.seconds,P.getMilliseconds()),t.selectedDates=[P],t.latestSelectedDateObj=P}O!==void 0&&O.type!=="blur"&&Gn(O);var J=t._input.value;p(),lt(),t._input.value!==J&&t._debouncedChange()}function f(O,P){return O%12+12*int(P===t.l10n.amPM[1])}function d(O){switch(O%24){case 0:case 12:return 12;default:return O%12}}function p(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var O=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,P=(parseInt(t.minuteElement.value,10)||0)%60,B=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(O=f(O,t.amPM.textContent));var J=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&compareDates(t.latestSelectedDateObj,t.config.minDate,!0)===0,oe=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&compareDates(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var le=calculateSecondsSinceMidnight(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),Oe=calculateSecondsSinceMidnight(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),de=calculateSecondsSinceMidnight(O,P,B);if(de>Oe&&de<le){var Te=parseSeconds(le);O=Te[0],P=Te[1],B=Te[2]}}else{if(oe){var he=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;O=Math.min(O,he.getHours()),O===he.getHours()&&(P=Math.min(P,he.getMinutes())),P===he.getMinutes()&&(B=Math.min(B,he.getSeconds()))}if(J){var we=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;O=Math.max(O,we.getHours()),O===we.getHours()&&P<we.getMinutes()&&(P=we.getMinutes()),P===we.getMinutes()&&(B=Math.max(B,we.getSeconds()))}}y(O,P,B)}}function v(O){var P=O||t.latestSelectedDateObj;P&&P instanceof Date&&y(P.getHours(),P.getMinutes(),P.getSeconds())}function y(O,P,B){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(O%24,P,B||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=pad(t.config.time_24hr?O:(12+O)%12+12*int(O%12===0)),t.minuteElement.value=pad(P),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[int(O>=12)]),t.secondElement!==void 0&&(t.secondElement.value=pad(B)))}function x(O){var P=getEventTarget(O),B=parseInt(P.value)+(O.delta||0);(B/1e3>1||O.key==="Enter"&&!/[^\d]/.test(B.toString()))&&ze(B)}function E(O,P,B,J){if(P instanceof Array)return P.forEach(function(oe){return E(O,oe,B,J)});if(O instanceof Array)return O.forEach(function(oe){return E(oe,P,B,J)});O.addEventListener(P,B,J),t._handlers.push({remove:function(){return O.removeEventListener(P,B,J)}})}function C(){Ve("onChange")}function A(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(B){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+B+"]"),function(J){return E(J,"click",t[B])})}),t.isMobile){wt();return}var O=debounce$1(bn,50);if(t._debouncedChange=debounce$1(C,DEBOUNCED_CHANGE_MS),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&E(t.daysContainer,"mouseover",function(B){t.config.mode==="range"&&yt(getEventTarget(B))}),E(t._input,"keydown",Mn),t.calendarContainer!==void 0&&E(t.calendarContainer,"keydown",Mn),!t.config.inline&&!t.config.static&&E(window,"resize",O),window.ontouchstart!==void 0?E(window.document,"touchstart",Pe):E(window.document,"mousedown",Pe),E(window.document,"focus",Pe,{capture:!0}),t.config.clickOpens===!0&&(E(t._input,"focus",t.open),E(t._input,"click",t.open)),t.daysContainer!==void 0&&(E(t.monthNav,"click",Yt),E(t.monthNav,["keyup","increment"],x),E(t.daysContainer,"click",Ut)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var P=function(B){return getEventTarget(B).select()};E(t.timeContainer,["increment"],u),E(t.timeContainer,"blur",u,{capture:!0}),E(t.timeContainer,"click",V),E([t.hourElement,t.minuteElement],["focus","click"],P),t.secondElement!==void 0&&E(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&E(t.amPM,"click",function(B){u(B)})}t.config.allowInput&&E(t._input,"blur",gt)}function M(O,P){var B=O!==void 0?t.parseDate(O):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),J=t.currentYear,oe=t.currentMonth;try{B!==void 0&&(t.currentYear=B.getFullYear(),t.currentMonth=B.getMonth())}catch(le){le.message="Invalid date supplied: "+B,t.config.errorHandler(le)}P&&t.currentYear!==J&&(Ve("onYearChange"),ue()),P&&(t.currentYear!==J||t.currentMonth!==oe)&&Ve("onMonthChange"),t.redraw()}function V(O){var P=getEventTarget(O);~P.className.indexOf("arrow")&&R(O,P.classList.contains("arrowUp")?1:-1)}function R(O,P,B){var J=O&&getEventTarget(O),oe=B||J&&J.parentNode&&J.parentNode.firstChild,le=In("increment");le.delta=P,oe&&oe.dispatchEvent(le)}function q(){var O=window.document.createDocumentFragment();if(t.calendarContainer=createElement("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(O.appendChild(Se()),t.innerContainer=createElement("div","flatpickr-innerContainer"),t.config.weekNumbers){var P=ct(),B=P.weekWrapper,J=P.weekNumbers;t.innerContainer.appendChild(B),t.weekNumbers=J,t.weekWrapper=B}t.rContainer=createElement("div","flatpickr-rContainer"),t.rContainer.appendChild(je()),t.daysContainer||(t.daysContainer=createElement("div","flatpickr-days"),t.daysContainer.tabIndex=-1),_e(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),O.appendChild(t.innerContainer)}t.config.enableTime&&O.appendChild(xe()),toggleClass(t.calendarContainer,"rangeMode",t.config.mode==="range"),toggleClass(t.calendarContainer,"animate",t.config.animate===!0),toggleClass(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(O);var oe=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!oe&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var le=createElement("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(le,t.element),le.appendChild(t.element),t.altInput&&le.appendChild(t.altInput),le.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function Q(O,P,B,J){var oe=tt(P,!0),le=createElement("span",O,P.getDate().toString());return le.dateObj=P,le.$i=J,le.setAttribute("aria-label",t.formatDate(P,t.config.ariaDateFormat)),O.indexOf("hidden")===-1&&compareDates(P,t.now)===0&&(t.todayDateElem=le,le.classList.add("today"),le.setAttribute("aria-current","date")),oe?(le.tabIndex=-1,Dt(P)&&(le.classList.add("selected"),t.selectedDateElem=le,t.config.mode==="range"&&(toggleClass(le,"startRange",t.selectedDates[0]&&compareDates(P,t.selectedDates[0],!0)===0),toggleClass(le,"endRange",t.selectedDates[1]&&compareDates(P,t.selectedDates[1],!0)===0),O==="nextMonthDay"&&le.classList.add("inRange")))):le.classList.add("flatpickr-disabled"),t.config.mode==="range"&&un(P)&&!Dt(P)&&le.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&O!=="prevMonthDay"&&J%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(P)+"</span>"),Ve("onDayCreate",le),le}function m(O){O.focus(),t.config.mode==="range"&&yt(O)}function ne(O){for(var P=O>0?0:t.config.showMonths-1,B=O>0?t.config.showMonths:-1,J=P;J!=B;J+=O)for(var oe=t.daysContainer.children[J],le=O>0?0:oe.children.length-1,Oe=O>0?oe.children.length:-1,de=le;de!=Oe;de+=O){var Te=oe.children[de];if(Te.className.indexOf("hidden")===-1&&tt(Te.dateObj))return Te}}function re(O,P){for(var B=O.className.indexOf("Month")===-1?O.dateObj.getMonth():t.currentMonth,J=P>0?t.config.showMonths:-1,oe=P>0?1:-1,le=B-t.currentMonth;le!=J;le+=oe)for(var Oe=t.daysContainer.children[le],de=B-t.currentMonth===le?O.$i+P:P<0?Oe.children.length-1:0,Te=Oe.children.length,he=de;he>=0&&he<Te&&he!=(P>0?Te:-1);he+=oe){var we=Oe.children[he];if(we.className.indexOf("hidden")===-1&&tt(we.dateObj)&&Math.abs(O.$i-he)>=Math.abs(P))return m(we)}t.changeMonth(oe),ge(ne(oe),0)}function ge(O,P){var B=o(),J=sn(B||document.body),oe=O!==void 0?O:J?B:t.selectedDateElem!==void 0&&sn(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&sn(t.todayDateElem)?t.todayDateElem:ne(P>0?1:-1);oe===void 0?t._input.focus():J?re(oe,P):m(oe)}function ve(O,P){for(var B=(new Date(O,P,1).getDay()-t.l10n.firstDayOfWeek+7)%7,J=t.utils.getDaysInMonth((P-1+12)%12,O),oe=t.utils.getDaysInMonth(P,O),le=window.document.createDocumentFragment(),Oe=t.config.showMonths>1,de=Oe?"prevMonthDay hidden":"prevMonthDay",Te=Oe?"nextMonthDay hidden":"nextMonthDay",he=J+1-B,we=0;he<=J;he++,we++)le.appendChild(Q("flatpickr-day "+de,new Date(O,P-1,he),he,we));for(he=1;he<=oe;he++,we++)le.appendChild(Q("flatpickr-day",new Date(O,P,he),he,we));for(var Be=oe+1;Be<=42-B&&(t.config.showMonths===1||we%7!==0);Be++,we++)le.appendChild(Q("flatpickr-day "+Te,new Date(O,P+1,Be%oe),Be,we));var mt=createElement("div","dayContainer");return mt.appendChild(le),mt}function _e(){if(t.daysContainer!==void 0){clearNode(t.daysContainer),t.weekNumbers&&clearNode(t.weekNumbers);for(var O=document.createDocumentFragment(),P=0;P<t.config.showMonths;P++){var B=new Date(t.currentYear,t.currentMonth,1);B.setMonth(t.currentMonth+P),O.appendChild(ve(B.getFullYear(),B.getMonth()))}t.daysContainer.appendChild(O),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&yt()}}function ue(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var O=function(J){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&J<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&J>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var P=0;P<12;P++)if(O(P)){var B=createElement("option","flatpickr-monthDropdown-month");B.value=new Date(t.currentYear,P).getMonth().toString(),B.textContent=monthToStr(P,t.config.shorthandCurrentMonth,t.l10n),B.tabIndex=-1,t.currentMonth===P&&(B.selected=!0),t.monthsDropdownContainer.appendChild(B)}}}function He(){var O=createElement("div","flatpickr-month"),P=window.document.createDocumentFragment(),B;t.config.showMonths>1||t.config.monthSelectorType==="static"?B=createElement("span","cur-month"):(t.monthsDropdownContainer=createElement("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),E(t.monthsDropdownContainer,"change",function(Oe){var de=getEventTarget(Oe),Te=parseInt(de.value,10);t.changeMonth(Te-t.currentMonth),Ve("onMonthChange")}),ue(),B=t.monthsDropdownContainer);var J=createNumberInput("cur-year",{tabindex:"-1"}),oe=J.getElementsByTagName("input")[0];oe.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&oe.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(oe.setAttribute("max",t.config.maxDate.getFullYear().toString()),oe.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var le=createElement("div","flatpickr-current-month");return le.appendChild(B),le.appendChild(J),P.appendChild(le),O.appendChild(P),{container:O,yearElement:oe,monthElement:B}}function pe(){clearNode(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var O=t.config.showMonths;O--;){var P=He();t.yearElements.push(P.yearElement),t.monthElements.push(P.monthElement),t.monthNav.appendChild(P.container)}t.monthNav.appendChild(t.nextMonthNav)}function Se(){return t.monthNav=createElement("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=createElement("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=createElement("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,pe(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(O){t.__hidePrevMonthArrow!==O&&(toggleClass(t.prevMonthNav,"flatpickr-disabled",O),t.__hidePrevMonthArrow=O)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(O){t.__hideNextMonthArrow!==O&&(toggleClass(t.nextMonthNav,"flatpickr-disabled",O),t.__hideNextMonthArrow=O)}}),t.currentYearElement=t.yearElements[0],cn(),t.monthNav}function xe(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var O=getDefaultHours(t.config);t.timeContainer=createElement("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var P=createElement("span","flatpickr-time-separator",":"),B=createNumberInput("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=B.getElementsByTagName("input")[0];var J=createNumberInput("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=J.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?O.hours:d(O.hours)),t.minuteElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():O.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(B),t.timeContainer.appendChild(P),t.timeContainer.appendChild(J),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var oe=createNumberInput("flatpickr-second");t.secondElement=oe.getElementsByTagName("input")[0],t.secondElement.value=pad(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():O.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(oe)}return t.config.time_24hr||(t.amPM=createElement("span","flatpickr-am-pm",t.l10n.amPM[int((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function je(){t.weekdayContainer?clearNode(t.weekdayContainer):t.weekdayContainer=createElement("div","flatpickr-weekdays");for(var O=t.config.showMonths;O--;){var P=createElement("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(P)}return Le(),t.weekdayContainer}function Le(){if(t.weekdayContainer){var O=t.l10n.firstDayOfWeek,P=__spreadArrays(t.l10n.weekdays.shorthand);O>0&&O<P.length&&(P=__spreadArrays(P.splice(O,P.length),P.splice(0,O)));for(var B=t.config.showMonths;B--;)t.weekdayContainer.children[B].innerHTML=`
      <span class='flatpickr-weekday'>
        `+P.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function ct(){t.calendarContainer.classList.add("hasWeeks");var O=createElement("div","flatpickr-weekwrapper");O.appendChild(createElement("span","flatpickr-weekday",t.l10n.weekAbbreviation));var P=createElement("div","flatpickr-weeks");return O.appendChild(P),{weekWrapper:O,weekNumbers:P}}function Ge(O,P){P===void 0&&(P=!0);var B=P?O:O-t.currentMonth;B<0&&t._hidePrevMonthArrow===!0||B>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=B,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,Ve("onYearChange"),ue()),_e(),Ve("onMonthChange"),cn())}function We(O,P){if(O===void 0&&(O=!0),P===void 0&&(P=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,P===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var B=getDefaultHours(t.config),J=B.hours,oe=B.minutes,le=B.seconds;y(J,oe,le)}t.redraw(),O&&Ve("onChange")}function et(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),Ve("onClose")}function rt(){t.config!==void 0&&Ve("onDestroy");for(var O=t._handlers.length;O--;)t._handlers[O].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var P=t.calendarContainer.parentNode;if(P.lastChild&&P.removeChild(P.lastChild),P.parentNode){for(;P.firstChild;)P.parentNode.insertBefore(P.firstChild,P);P.parentNode.removeChild(P)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(B){try{delete t[B]}catch{}})}function Ke(O){return t.calendarContainer.contains(O)}function Pe(O){if(t.isOpen&&!t.config.inline){var P=getEventTarget(O),B=Ke(P),J=P===t.input||P===t.altInput||t.element.contains(P)||O.path&&O.path.indexOf&&(~O.path.indexOf(t.input)||~O.path.indexOf(t.altInput)),oe=!J&&!B&&!Ke(O.relatedTarget),le=!t.config.ignoredFocusElements.some(function(Oe){return Oe.contains(P)});oe&&le&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&u(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function ze(O){if(!(!O||t.config.minDate&&O<t.config.minDate.getFullYear()||t.config.maxDate&&O>t.config.maxDate.getFullYear())){var P=O,B=t.currentYear!==P;t.currentYear=P||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),B&&(t.redraw(),Ve("onYearChange"),ue())}}function tt(O,P){var B;P===void 0&&(P=!0);var J=t.parseDate(O,void 0,P);if(t.config.minDate&&J&&compareDates(J,t.config.minDate,P!==void 0?P:!t.minDateHasTime)<0||t.config.maxDate&&J&&compareDates(J,t.config.maxDate,P!==void 0?P:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(J===void 0)return!1;for(var oe=!!t.config.enable,le=(B=t.config.enable)!==null&&B!==void 0?B:t.config.disable,Oe=0,de=void 0;Oe<le.length;Oe++){if(de=le[Oe],typeof de=="function"&&de(J))return oe;if(de instanceof Date&&J!==void 0&&de.getTime()===J.getTime())return oe;if(typeof de=="string"){var Te=t.parseDate(de,void 0,!0);return Te&&Te.getTime()===J.getTime()?oe:!oe}else if(typeof de=="object"&&J!==void 0&&de.from&&de.to&&J.getTime()>=de.from.getTime()&&J.getTime()<=de.to.getTime())return oe}return!oe}function sn(O){return t.daysContainer!==void 0?O.className.indexOf("hidden")===-1&&O.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(O):!1}function gt(O){var P=O.target===t._input,B=t._input.value.trimEnd()!==Ln();P&&B&&!(O.relatedTarget&&Ke(O.relatedTarget))&&t.setDate(t._input.value,!0,O.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function Mn(O){var P=getEventTarget(O),B=t.config.wrap?n.contains(P):P===t._input,J=t.config.allowInput,oe=t.isOpen&&(!J||!B),le=t.config.inline&&B&&!J;if(O.keyCode===13&&B){if(J)return t.setDate(t._input.value,!0,P===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),P.blur();t.open()}else if(Ke(P)||oe||le){var Oe=!!t.timeContainer&&t.timeContainer.contains(P);switch(O.keyCode){case 13:Oe?(O.preventDefault(),u(),St()):Ut(O);break;case 27:O.preventDefault(),St();break;case 8:case 46:B&&!t.config.allowInput&&(O.preventDefault(),t.clear());break;case 37:case 39:if(!Oe&&!B){O.preventDefault();var de=o();if(t.daysContainer!==void 0&&(J===!1||de&&sn(de))){var Te=O.keyCode===39?1:-1;O.ctrlKey?(O.stopPropagation(),Ge(Te),ge(ne(1),0)):ge(void 0,Te)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:O.preventDefault();var he=O.keyCode===40?1:-1;t.daysContainer&&P.$i!==void 0||P===t.input||P===t.altInput?O.ctrlKey?(O.stopPropagation(),ze(t.currentYear-he),ge(ne(1),0)):Oe||ge(void 0,he*7):P===t.currentYearElement?ze(t.currentYear-he):t.config.enableTime&&(!Oe&&t.hourElement&&t.hourElement.focus(),u(O),t._debouncedChange());break;case 9:if(Oe){var we=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(ft){return ft}),Be=we.indexOf(P);if(Be!==-1){var mt=we[Be+(O.shiftKey?-1:1)];O.preventDefault(),(mt||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(P)&&O.shiftKey&&(O.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&P===t.amPM)switch(O.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],p(),lt();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],p(),lt();break}(B||Ke(P))&&Ve("onKeyDown",O)}function yt(O,P){if(P===void 0&&(P="flatpickr-day"),!(t.selectedDates.length!==1||O&&(!O.classList.contains(P)||O.classList.contains("flatpickr-disabled")))){for(var B=O?O.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),J=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),oe=Math.min(B,t.selectedDates[0].getTime()),le=Math.max(B,t.selectedDates[0].getTime()),Oe=!1,de=0,Te=0,he=oe;he<le;he+=duration.DAY)tt(new Date(he),!0)||(Oe=Oe||he>oe&&he<le,he<J&&(!de||he>de)?de=he:he>J&&(!Te||he<Te)&&(Te=he));var we=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+P));we.forEach(function(Be){var mt=Be.dateObj,ft=mt.getTime(),Xt=de>0&&ft<de||Te>0&&ft>Te;if(Xt){Be.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Gt){Be.classList.remove(Gt)});return}else if(Oe&&!Xt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Gt){Be.classList.remove(Gt)}),O!==void 0&&(O.classList.add(B<=t.selectedDates[0].getTime()?"startRange":"endRange"),J<B&&ft===J?Be.classList.add("startRange"):J>B&&ft===J&&Be.classList.add("endRange"),ft>=de&&(Te===0||ft<=Te)&&isBetween(ft,J,B)&&Be.classList.add("inRange"))})}}function bn(){t.isOpen&&!t.config.static&&!t.config.inline&&xt()}function Un(O,P){if(P===void 0&&(P=t._positionElement),t.isMobile===!0){if(O){O.preventDefault();var B=getEventTarget(O);B&&B.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),Ve("onOpen");return}else if(t._input.disabled||t.config.inline)return;var J=t.isOpen;t.isOpen=!0,J||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),Ve("onOpen"),xt(P)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(O===void 0||!t.timeContainer.contains(O.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function yn(O){return function(P){var B=t.config["_"+O+"Date"]=t.parseDate(P,t.config.dateFormat),J=t.config["_"+(O==="min"?"max":"min")+"Date"];B!==void 0&&(t[O==="min"?"minDateHasTime":"maxDateHasTime"]=B.getHours()>0||B.getMinutes()>0||B.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(oe){return tt(oe)}),!t.selectedDates.length&&O==="min"&&v(B),lt()),t.daysContainer&&(Ye(),B!==void 0?t.currentYearElement[O]=B.getFullYear().toString():t.currentYearElement.removeAttribute(O),t.currentYearElement.disabled=!!J&&B!==void 0&&J.getFullYear()===B.getFullYear())}}function $n(){var O=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],P=__assign(__assign({},JSON.parse(JSON.stringify(n.dataset||{}))),e),B={};t.config.parseDate=P.parseDate,t.config.formatDate=P.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(we){t.config._enable=Yn(we)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(we){t.config._disable=Yn(we)}});var J=P.mode==="time";if(!P.dateFormat&&(P.enableTime||J)){var oe=flatpickr.defaultConfig.dateFormat||defaults$1.dateFormat;B.dateFormat=P.noCalendar||J?"H:i"+(P.enableSeconds?":S":""):oe+" H:i"+(P.enableSeconds?":S":"")}if(P.altInput&&(P.enableTime||J)&&!P.altFormat){var le=flatpickr.defaultConfig.altFormat||defaults$1.altFormat;B.altFormat=P.noCalendar||J?"h:i"+(P.enableSeconds?":S K":" K"):le+(" h:i"+(P.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:yn("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:yn("max")});var Oe=function(we){return function(Be){t.config[we==="min"?"_minTime":"_maxTime"]=t.parseDate(Be,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:Oe("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:Oe("max")}),P.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,B,P);for(var de=0;de<O.length;de++)t.config[O[de]]=t.config[O[de]]===!0||t.config[O[de]]==="true";HOOKS.filter(function(we){return t.config[we]!==void 0}).forEach(function(we){t.config[we]=arrayify(t.config[we]||[]).map(s)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var de=0;de<t.config.plugins.length;de++){var Te=t.config.plugins[de](t)||{};for(var he in Te)HOOKS.indexOf(he)>-1?t.config[he]=arrayify(Te[he]).map(s).concat(t.config[he]):typeof P[he]>"u"&&(t.config[he]=Te[he])}P.altInputClass||(t.config.altInputClass=qt().className+" "+t.config.altInputClass),Ve("onParseConfig")}function qt(){return t.config.wrap?n.querySelector("[data-input]"):n}function ot(){typeof t.config.locale!="object"&&typeof flatpickr.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=__assign(__assign({},flatpickr.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?flatpickr.l10ns[t.config.locale]:void 0),tokenRegex.D="("+t.l10n.weekdays.shorthand.join("|")+")",tokenRegex.l="("+t.l10n.weekdays.longhand.join("|")+")",tokenRegex.M="("+t.l10n.months.shorthand.join("|")+")",tokenRegex.F="("+t.l10n.months.longhand.join("|")+")",tokenRegex.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var O=__assign(__assign({},e),JSON.parse(JSON.stringify(n.dataset||{})));O.time_24hr===void 0&&flatpickr.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=createDateFormatter(t),t.parseDate=createDateParser({config:t.config,l10n:t.l10n})}function xt(O){if(typeof t.config.position=="function")return void t.config.position(t,O);if(t.calendarContainer!==void 0){Ve("onPreCalendarPosition");var P=O||t._positionElement,B=Array.prototype.reduce.call(t.calendarContainer.children,(function(Pt,fn){return Pt+fn.offsetHeight}),0),J=t.calendarContainer.offsetWidth,oe=t.config.position.split(" "),le=oe[0],Oe=oe.length>1?oe[1]:null,de=P.getBoundingClientRect(),Te=window.innerHeight-de.bottom,he=le==="above"||le!=="below"&&Te<B&&de.top>B,we=window.pageYOffset+de.top+(he?-B-2:P.offsetHeight+2);if(toggleClass(t.calendarContainer,"arrowTop",!he),toggleClass(t.calendarContainer,"arrowBottom",he),!t.config.inline){var Be=window.pageXOffset+de.left,mt=!1,ft=!1;Oe==="center"?(Be-=(J-de.width)/2,mt=!0):Oe==="right"&&(Be-=J-de.width,ft=!0),toggleClass(t.calendarContainer,"arrowLeft",!mt&&!ft),toggleClass(t.calendarContainer,"arrowCenter",mt),toggleClass(t.calendarContainer,"arrowRight",ft);var Xt=window.document.body.offsetWidth-(window.pageXOffset+de.right),Gt=Be+J>window.document.body.offsetWidth,or=Xt+J>window.document.body.offsetWidth;if(toggleClass(t.calendarContainer,"rightMost",Gt),!t.config.static)if(t.calendarContainer.style.top=we+"px",!Gt)t.calendarContainer.style.left=Be+"px",t.calendarContainer.style.right="auto";else if(!or)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=Xt+"px";else{var xn=ir();if(xn===void 0)return;var Nn=window.document.body.offsetWidth,Kt=Math.max(0,Nn/2-J/2),Rn=".flatpickr-calendar.centerMost:before",At=".flatpickr-calendar.centerMost:after",Ot=xn.cssRules.length,wn="{left:"+de.left+"px;right:auto;}";toggleClass(t.calendarContainer,"rightMost",!1),toggleClass(t.calendarContainer,"centerMost",!0),xn.insertRule(Rn+","+At+wn,Ot),t.calendarContainer.style.left=Kt+"px",t.calendarContainer.style.right="auto"}}}}function ir(){for(var O=null,P=0;P<document.styleSheets.length;P++){var B=document.styleSheets[P];if(B.cssRules){try{B.cssRules}catch{continue}O=B;break}}return O??ln()}function ln(){var O=document.createElement("style");return document.head.appendChild(O),O.sheet}function Ye(){t.config.noCalendar||t.isMobile||(ue(),cn(),_e())}function St(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function Ut(O){O.preventDefault(),O.stopPropagation();var P=function(we){return we.classList&&we.classList.contains("flatpickr-day")&&!we.classList.contains("flatpickr-disabled")&&!we.classList.contains("notAllowed")},B=findParent(getEventTarget(O),P);if(B!==void 0){var J=B,oe=t.latestSelectedDateObj=new Date(J.dateObj.getTime()),le=(oe.getMonth()<t.currentMonth||oe.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=J,t.config.mode==="single")t.selectedDates=[oe];else if(t.config.mode==="multiple"){var Oe=Dt(oe);Oe?t.selectedDates.splice(parseInt(Oe),1):t.selectedDates.push(oe)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=oe,t.selectedDates.push(oe),compareDates(oe,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(we,Be){return we.getTime()-Be.getTime()}));if(p(),le){var de=t.currentYear!==oe.getFullYear();t.currentYear=oe.getFullYear(),t.currentMonth=oe.getMonth(),de&&(Ve("onYearChange"),ue()),Ve("onMonthChange")}if(cn(),_e(),lt(),!le&&t.config.mode!=="range"&&t.config.showMonths===1?m(J):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var Te=t.config.mode==="single"&&!t.config.enableTime,he=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(Te||he)&&St()}C()}}var me={locale:[ot,Le],showMonths:[pe,l,je],minDate:[M],maxDate:[M],positionElement:[zt],clickOpens:[function(){t.config.clickOpens===!0?(E(t._input,"focus",t.open),E(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function st(O,P){if(O!==null&&typeof O=="object"){Object.assign(t.config,O);for(var B in O)me[B]!==void 0&&me[B].forEach(function(J){return J()})}else t.config[O]=P,me[O]!==void 0?me[O].forEach(function(J){return J()}):HOOKS.indexOf(O)>-1&&(t.config[O]=arrayify(P));t.redraw(),lt(!0)}function zn(O,P){var B=[];if(O instanceof Array)B=O.map(function(J){return t.parseDate(J,P)});else if(O instanceof Date||typeof O=="number")B=[t.parseDate(O,P)];else if(typeof O=="string")switch(t.config.mode){case"single":case"time":B=[t.parseDate(O,P)];break;case"multiple":B=O.split(t.config.conjunction).map(function(J){return t.parseDate(J,P)});break;case"range":B=O.split(t.l10n.rangeSeparator).map(function(J){return t.parseDate(J,P)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(O)));t.selectedDates=t.config.allowInvalidPreload?B:B.filter(function(J){return J instanceof Date&&tt(J,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(J,oe){return J.getTime()-oe.getTime()})}function ar(O,P,B){if(P===void 0&&(P=!1),B===void 0&&(B=t.config.dateFormat),O!==0&&!O||O instanceof Array&&O.length===0)return t.clear(P);zn(O,B),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),M(void 0,P),v(),t.selectedDates.length===0&&t.clear(!1),lt(P),P&&Ve("onChange")}function Yn(O){return O.slice().map(function(P){return typeof P=="string"||typeof P=="number"||P instanceof Date?t.parseDate(P,void 0,!0):P&&typeof P=="object"&&P.from&&P.to?{from:t.parseDate(P.from,void 0),to:t.parseDate(P.to,void 0)}:P}).filter(function(P){return P})}function Tt(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var O=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);O&&zn(O,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function Xn(){if(t.input=qt(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=createElement(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),zt()}function zt(){t._positionElement=t.config.positionElement||t._input}function wt(){var O=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=createElement("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=O,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=O==="datetime-local"?"Y-m-d\\TH:i:S":O==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}E(t.mobileInput,"change",function(P){t.setDate(getEventTarget(P).value,!1,t.mobileFormatStr),Ve("onChange"),Ve("onClose")})}function Ht(O){if(t.isOpen===!0)return t.close();t.open(O)}function Ve(O,P){if(t.config!==void 0){var B=t.config[O];if(B!==void 0&&B.length>0)for(var J=0;B[J]&&J<B.length;J++)B[J](t.selectedDates,t.input.value,t,P);O==="onChange"&&(t.input.dispatchEvent(In("change")),t.input.dispatchEvent(In("input")))}}function In(O){var P=document.createEvent("Event");return P.initEvent(O,!0,!0),P}function Dt(O){for(var P=0;P<t.selectedDates.length;P++){var B=t.selectedDates[P];if(B instanceof Date&&compareDates(B,O)===0)return""+P}return!1}function un(O){return t.config.mode!=="range"||t.selectedDates.length<2?!1:compareDates(O,t.selectedDates[0])>=0&&compareDates(O,t.selectedDates[1])<=0}function cn(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(O,P){var B=new Date(t.currentYear,t.currentMonth,1);B.setMonth(t.currentMonth+P),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[P].textContent=monthToStr(B.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=B.getMonth().toString(),O.value=B.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function Ln(O){var P=O||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(B){return t.formatDate(B,P)}).filter(function(B,J,oe){return t.config.mode!=="range"||t.config.enableTime||oe.indexOf(B)===J}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function lt(O){O===void 0&&(O=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=Ln(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=Ln(t.config.altFormat)),O!==!1&&Ve("onValueUpdate")}function Yt(O){var P=getEventTarget(O),B=t.prevMonthNav.contains(P),J=t.nextMonthNav.contains(P);B||J?Ge(B?-1:1):t.yearElements.indexOf(P)>=0?P.select():P.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):P.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function Gn(O){O.preventDefault();var P=O.type==="keydown",B=getEventTarget(O),J=B;t.amPM!==void 0&&B===t.amPM&&(t.amPM.textContent=t.l10n.amPM[int(t.amPM.textContent===t.l10n.amPM[0])]);var oe=parseFloat(J.getAttribute("min")),le=parseFloat(J.getAttribute("max")),Oe=parseFloat(J.getAttribute("step")),de=parseInt(J.value,10),Te=O.delta||(P?O.which===38?1:-1:0),he=de+Oe*Te;if(typeof J.value<"u"&&J.value.length===2){var we=J===t.hourElement,Be=J===t.minuteElement;he<oe?(he=le+he+int(!we)+(int(we)&&int(!t.amPM)),Be&&R(void 0,-1,t.hourElement)):he>le&&(he=J===t.hourElement?he-le-int(!t.amPM):oe,Be&&R(void 0,1,t.hourElement)),t.amPM&&we&&(Oe===1?he+de===23:Math.abs(he-de)>Oe)&&(t.amPM.textContent=t.l10n.amPM[int(t.amPM.textContent===t.l10n.amPM[0])]),J.value=pad(he)}}return a(),t}function _flatpickr(n,e){for(var t=Array.prototype.slice.call(n).filter(function(s){return s instanceof HTMLElement}),r=[],a=0;a<t.length;a++){var o=t[a];try{if(o.getAttribute("data-fp-omit")!==null)continue;o._flatpickr!==void 0&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=FlatpickrInstance(o,e||{}),r.push(o._flatpickr)}catch(s){console.error(s)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return _flatpickr(this,n)},HTMLElement.prototype.flatpickr=function(n){return _flatpickr([this],n)});var flatpickr=function(n,e){return typeof n=="string"?_flatpickr(window.document.querySelectorAll(n),e):n instanceof Node?_flatpickr([n],e):_flatpickr(n,e)};flatpickr.defaultConfig={};flatpickr.l10ns={en:__assign({},english),default:__assign({},english)};flatpickr.localize=function(n){flatpickr.l10ns.default=__assign(__assign({},flatpickr.l10ns.default),n)};flatpickr.setDefaults=function(n){flatpickr.defaultConfig=__assign(__assign({},flatpickr.defaultConfig),n)};flatpickr.parseDate=createDateParser({});flatpickr.formatDate=createDateFormatter({});flatpickr.compareDates=compareDates;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return _flatpickr(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=flatpickr);function initDateSelector(){flatpickr(".datepicker",{allowInput:!0})}var jqueryExports=requireJquery();const jQuery$1=getDefaultExportFromCjs(jqueryExports),src=`/*!
 * Select2 4.1.0-rc.0
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
  'jquery'
], function ($) {
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

    var $el = $(el);
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

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
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
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
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
      $results.attr('aria-multiselectable', 'true');
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
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
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

    this.$results.attr('id', id);

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
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
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
          self.trigger('close', {});
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

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

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
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

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
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
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

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

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
    $rendered.removeAttr('title'); // clear tooltip on empty
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
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
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
    this.$selection.find('.select2-selection__rendered').attr('id', id);

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
    $rendered.removeAttr('title');
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

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

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
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

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
    if (typeof placeholder === 'string') {
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

    this.$selection.find('.select2-selection__rendered').attr(
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

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
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

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

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

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
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
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

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

    if (this.$search.attr('placeholder') === '') {
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

    $selection.addClass(selectionCssClass);

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
  'jquery',
  'require'
], function ($, require) {
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
    this.dict = $.extend({}, translation.all(), this.dict);
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

    if (this.$element.prop('multiple')) {
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

    if (!this.$element.prop('multiple')) {
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
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
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

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a \`results\` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
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
        if ('status' in $request &&
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
        $option.attr('data-select2-tag', 'true');

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
        $option.attr('data-select2-tag', true);

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

    $dropdown.attr('dir', this.options.get('dir'));

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

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

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
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

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
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
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
    if (typeof placeholder === 'string') {
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
    $dropdown.attr('class', $container.attr('class'));

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

    $dropdown.addClass(dropdownCssClass);

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
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

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
    var camelKey = $.camelCase(key);

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
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

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

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
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

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

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
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
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
      var style = $element.attr('style');

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
    this.options.set('disabled', this.$element.prop('disabled'));

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
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
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
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
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

    $container.attr('dir', this.options.get('dir'));

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
`;new Function("module","require","window","jQuery",src)({},()=>jQuery$1,window,jQuery$1);function initSelect2(){jQuery$1(".fos-select2").select2({placeholder:"Select a fos"})}function initForm(){jQuery$1(document).on("click","#form_reset_button",function(){resetForm(jQuery$1("#filter_form"))}),jQuery$1("#expand_button").click(function(){jQuery$1("#collapseOne").collapse(),jQuery$1("#plus_minus").toggleClass("fa-plus fa-minus")});const n=[["selectAll","attributeform-"],["selectAllAllocations","allocationform-"],["selectAll","userform-"],["selectAll","users"],["selectAll","noteform-"],["selectAll","grantform-"],["selectAll","pubform-"],["selectAll","grantdownloadform-"]];for(const e of n)jQuery$1("#"+e[0]).click(function(){jQuery$1("input[name^='"+e[1]+"']").prop("checked",jQuery$1(this).prop("checked"))}),jQuery$1("input[name^='"+e[1]+"']").click(function(){jQuery$1(this).attr("id")!=e[0]&&jQuery$1("#"+e[0]).prop("checked",!1)})}function resetForm(n){n.find("input:text, input:password, input:file, select, textarea").val(""),n.find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected")}var $$1=jQuery$1,DataTable=function(n,e){if(DataTable.factory(n,e))return DataTable;if(this instanceof DataTable)return $$1(n).DataTable(e);e=n;var t=this,r=e===void 0,a=this.length;return r&&(e={}),this.api=function(){return new _Api(this)},this.each(function(){var o={},s=a>1?_fnExtend(o,e,!0):e,l=0,u,f=this.getAttribute("id"),d=DataTable.defaults,p=$$1(this);if(this.nodeName.toLowerCase()!="table"){_fnLog(null,0,"Non-table node initialisation ("+this.nodeName+")",2);return}s.on&&s.on.options&&_fnListener(p,"options",s.on.options),p.trigger("options.dt",s),_fnCompatOpts(d),_fnCompatCols(d.column),_fnCamelToHungarian(d,d,!0),_fnCamelToHungarian(d.column,d.column,!0),_fnCamelToHungarian(d,$$1.extend(s,_fnEscapeObject(p.data())),!0);var v=DataTable.settings;for(l=0,u=v.length;l<u;l++){var y=v[l];if(y.nTable==this||y.nTHead&&y.nTHead.parentNode==this||y.nTFoot&&y.nTFoot.parentNode==this){var x=s.bRetrieve!==void 0?s.bRetrieve:d.bRetrieve,E=s.bDestroy!==void 0?s.bDestroy:d.bDestroy;if(r||x)return y.oInstance;if(E){new DataTable.Api(y).destroy();break}else{_fnLog(y,0,"Cannot reinitialise DataTable",3);return}}if(y.sTableId==this.id){v.splice(l,1);break}}(f===null||f==="")&&(f="DataTables_Table_"+DataTable.ext._unique++,this.id=f),p.children("colgroup").remove();var C=$$1.extend(!0,{},DataTable.models.oSettings,{sDestroyWidth:p[0].style.width,sInstance:f,sTableId:f,colgroup:$$1("<colgroup>").prependTo(this),fastData:function(pe,Se,xe){return _fnGetCellData(C,pe,Se,xe)}});C.nTable=this,C.oInit=s,v.push(C),C.api=new _Api(C),C.oInstance=t.length===1?t:p.dataTable(),_fnCompatOpts(s),s.aLengthMenu&&!s.iDisplayLength&&(s.iDisplayLength=Array.isArray(s.aLengthMenu[0])?s.aLengthMenu[0][0]:$$1.isPlainObject(s.aLengthMenu[0])?s.aLengthMenu[0].value:s.aLengthMenu[0]),s=_fnExtend($$1.extend(!0,{},d),s),_fnMap(C.oFeatures,s,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),_fnMap(C,s,["ajax","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","iStateDuration","bSortCellsTop","iTabIndex","sDom","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId","caption","layout","orderDescReverse","orderIndicators","orderHandler","titleRow","typeDetect",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),_fnMap(C.oScroll,s,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),_fnMap(C.oLanguage,s,"fnInfoCallback"),_fnCallbackReg(C,"aoDrawCallback",s.fnDrawCallback),_fnCallbackReg(C,"aoStateSaveParams",s.fnStateSaveParams),_fnCallbackReg(C,"aoStateLoadParams",s.fnStateLoadParams),_fnCallbackReg(C,"aoStateLoaded",s.fnStateLoaded),_fnCallbackReg(C,"aoRowCallback",s.fnRowCallback),_fnCallbackReg(C,"aoRowCreatedCallback",s.fnCreatedRow),_fnCallbackReg(C,"aoHeaderCallback",s.fnHeaderCallback),_fnCallbackReg(C,"aoFooterCallback",s.fnFooterCallback),_fnCallbackReg(C,"aoInitComplete",s.fnInitComplete),_fnCallbackReg(C,"aoPreDrawCallback",s.fnPreDrawCallback),C.rowIdFn=_fnGetObjectDataFn(s.rowId),s.on&&Object.keys(s.on).forEach(function(pe){_fnListener(p,pe,s.on[pe])}),_fnBrowserDetect(C);var A=C.oClasses;$$1.extend(A,DataTable.ext.classes,s.oClasses),p.addClass(A.table),C.oFeatures.bPaginate||(s.iDisplayStart=0),C.iInitDisplayStart===void 0&&(C.iInitDisplayStart=s.iDisplayStart,C._iDisplayStart=s.iDisplayStart);var M=s.iDeferLoading;if(M!==null){C.deferLoading=!0;var V=Array.isArray(M);C._iRecordsDisplay=V?M[0]:M,C._iRecordsTotal=V?M[1]:M}var R=[],q=this.getElementsByTagName("thead"),Q=_fnDetectHeader(C,q[0]);if(s.aoColumns)R=s.aoColumns;else if(Q.length)for(l=0,u=Q[0].length;l<u;l++)R.push(null);for(l=0,u=R.length;l<u;l++)_fnAddColumn(C);_fnApplyColumnDefs(C,s.aoColumnDefs,R,Q,function(pe,Se){_fnColumnOptions(C,pe,Se)});var m=p.children("tbody").find("tr:first-child").eq(0);if(m.length){var ne=function(pe,Se){return pe.getAttribute("data-"+Se)!==null?Se:null};$$1(m[0]).children("th, td").each(function(pe,Se){var xe=C.aoColumns[pe];if(xe||_fnLog(C,0,"Incorrect column count",18),xe.mData===pe){var je=ne(Se,"sort")||ne(Se,"order"),Le=ne(Se,"filter")||ne(Se,"search");(je!==null||Le!==null)&&(xe.mData={_:pe+".display",sort:je!==null?pe+".@data-"+je:void 0,type:je!==null?pe+".@data-"+je:void 0,filter:Le!==null?pe+".@data-"+Le:void 0},xe._isArrayHost=!0,_fnColumnOptions(C,pe))}})}_fnCallbackReg(C,"aoDrawCallback",_fnSaveState);var re=C.oFeatures;if(s.bStateSave&&(re.bStateSave=!0),s.aaSorting===void 0){var ge=C.aaSorting;for(l=0,u=ge.length;l<u;l++)ge[l][1]=C.aoColumns[l].asSorting[0]}_fnSortingClasses(C),_fnCallbackReg(C,"aoDrawCallback",function(){(C.bSorted||_fnDataSource(C)==="ssp"||re.bDeferRender)&&_fnSortingClasses(C)});var ve=p.children("caption");C.caption&&(ve.length===0&&(ve=$$1("<caption/>").appendTo(p)),ve.html(C.caption)),ve.length&&(ve[0]._captionSide=ve.css("caption-side"),C.captionNode=ve[0]),q.length===0&&(q=$$1("<thead/>").appendTo(p)),C.nTHead=q[0];var _e=p.children("tbody");_e.length===0&&(_e=$$1("<tbody/>").insertAfter(q)),C.nTBody=_e[0];var ue=p.children("tfoot");ue.length===0&&(ue=$$1("<tfoot/>").appendTo(p)),C.nTFoot=ue[0],C.aiDisplay=C.aiDisplayMaster.slice(),C.bInitialised=!0;var He=C.oLanguage;$$1.extend(!0,He,s.oLanguage),He.sUrl?$$1.ajax({dataType:"json",url:He.sUrl,success:function(pe){_fnCamelToHungarian(d.oLanguage,pe),$$1.extend(!0,He,pe,C.oInit.oLanguage),_fnCallbackFire(C,null,"i18n",[C],!0),_fnInitialise(C)},error:function(){_fnLog(C,0,"i18n file loading error",21),_fnInitialise(C)}}):(_fnCallbackFire(C,null,"i18n",[C],!0),_fnInitialise(C))}),t=null,this};DataTable.ext=_ext={builder:"-source-",buttons:{},ccContent:{},classes:{},errMode:"alert",escape:{attributes:!1},feature:[],features:{},search:[],selector:{cell:[],column:[],row:[]},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{className:{},detect:[],render:{},search:{},order:{}},_unique:0,fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,sVersion:DataTable.version};$$1.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oStdClasses:_ext.classes,oPagination:_ext.pager});$$1.extend(DataTable.ext.classes,{container:"dt-container",empty:{row:"dt-empty"},info:{container:"dt-info"},layout:{row:"dt-layout-row",cell:"dt-layout-cell",tableRow:"dt-layout-table",tableCell:"",start:"dt-layout-start",end:"dt-layout-end",full:"dt-layout-full"},length:{container:"dt-length",select:"dt-input"},order:{canAsc:"dt-orderable-asc",canDesc:"dt-orderable-desc",isAsc:"dt-ordering-asc",isDesc:"dt-ordering-desc",none:"dt-orderable-none",position:"sorting_"},processing:{container:"dt-processing"},scrolling:{body:"dt-scroll-body",container:"dt-scroll",footer:{self:"dt-scroll-foot",inner:"dt-scroll-footInner"},header:{self:"dt-scroll-head",inner:"dt-scroll-headInner"}},search:{container:"dt-search",input:"dt-input"},table:"dataTable",tbody:{cell:"",row:""},thead:{cell:"",row:""},tfoot:{cell:"",row:""},paging:{active:"current",button:"dt-paging-button",container:"dt-paging",disabled:"disabled",nav:""}});var _ext,_Api,_api_register,_api_registerPlural,_re_dic={},_re_new_lines=/[\r\n\u2028]/g,_re_html=/<([^>]*>)/g,_max_str_len=Math.pow(2,28),_re_date=/^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,_re_escape_regex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),_re_formatted_numeric=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,_empty=function(n){return!n||n===!0||n==="-"},_intVal=function(n){var e=parseInt(n,10);return!isNaN(e)&&isFinite(n)?e:null},_numToDecimal=function(n,e){return _re_dic[e]||(_re_dic[e]=new RegExp(_fnEscapeRegex(e),"g")),typeof n=="string"&&e!=="."?n.replace(/\./g,"").replace(_re_dic[e],"."):n},_isNumber=function(n,e,t,r){var a=typeof n,o=a==="string";return a==="number"||a==="bigint"||r&&_empty(n)?!0:(e&&o&&(n=_numToDecimal(n,e)),t&&o&&(n=n.replace(_re_formatted_numeric,"")),!isNaN(parseFloat(n))&&isFinite(n))},_isHtml=function(n){return _empty(n)||typeof n=="string"},_htmlNumeric=function(n,e,t,r){if(r&&_empty(n))return!0;if(typeof n=="string"&&n.match(/<(input|select)/i))return null;var a=_isHtml(n);return a&&_isNumber(_stripHtml(n),e,t,r)?!0:null},_pluck=function(n,e,t){var r=[],a=0,o=n.length;if(t!==void 0)for(;a<o;a++)n[a]&&n[a][e]&&r.push(n[a][e][t]);else for(;a<o;a++)n[a]&&r.push(n[a][e]);return r},_pluck_order=function(n,e,t,r){var a=[],o=0,s=e.length;if(r!==void 0)for(;o<s;o++)n[e[o]]&&n[e[o]][t]&&a.push(n[e[o]][t][r]);else for(;o<s;o++)n[e[o]]&&a.push(n[e[o]][t]);return a},_range=function(n,e){var t=[],r;e===void 0?(e=0,r=n):(r=e,e=n);for(var a=e;a<r;a++)t.push(a);return t},_removeEmpty=function(n){for(var e=[],t=0,r=n.length;t<r;t++)n[t]&&e.push(n[t]);return e},_stripHtml=function(n){if(!n||typeof n!="string")return n;if(n.length>_max_str_len)throw new Error("Exceeded max str len");var e;n=n.replace(_re_html,"");do e=n,n=n.replace(/<script/i,"");while(n!==e);return e},_escapeHtml=function(n){return Array.isArray(n)&&(n=n.join(",")),typeof n=="string"?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):n},_normalize=function(n,e){if(typeof n!="string")return n;var t=n.normalize?n.normalize("NFD"):n;return t.length!==n.length?(e===!0?n+" ":"")+t.replace(/[\u0300-\u036f]/g,""):t},_areAllUnique=function(n){if(n.length<2)return!0;for(var e=n.slice().sort(),t=e[0],r=1,a=e.length;r<a;r++){if(e[r]===t)return!1;t=e[r]}return!0},_unique=function(n){if(Array.from&&Set)return Array.from(new Set(n));if(_areAllUnique(n))return n.slice();var e=[],t,r,a=n.length,o,s=0;e:for(r=0;r<a;r++){for(t=n[r],o=0;o<s;o++)if(e[o]===t)continue e;e.push(t),s++}return e},_flatten=function(n,e){if(Array.isArray(e))for(var t=0;t<e.length;t++)_flatten(n,e[t]);else n.push(e);return n};function _addClass(n,e){e&&e.split(" ").forEach(function(t){t&&n.classList.add(t)})}DataTable.util={diacritics:function(n,e){var t=typeof n;if(t!=="function")return _normalize(n,e);_normalize=n},debounce:function(n,e){var t;return function(){var r=this,a=arguments;clearTimeout(t),t=setTimeout(function(){n.apply(r,a)},e||250)}},throttle:function(n,e){var t=e!==void 0?e:200,r,a;return function(){var o=this,s=+new Date,l=arguments;r&&s<r+t?(clearTimeout(a),a=setTimeout(function(){r=void 0,n.apply(o,l)},t)):(r=s,n.apply(o,l))}},escapeRegex:function(n){return n.replace(_re_escape_regex,"\\$1")},set:function(n){if($$1.isPlainObject(n))return DataTable.util.set(n._);if(n===null)return function(){};if(typeof n=="function")return function(t,r,a){n(t,"set",r,a)};if(typeof n=="string"&&(n.indexOf(".")!==-1||n.indexOf("[")!==-1||n.indexOf("(")!==-1)){var e=function(t,r,a){for(var o=_fnSplitObjNotation(a),s,l=o[o.length-1],u,f,d,p,v=0,y=o.length-1;v<y;v++){if(o[v]==="__proto__"||o[v]==="constructor")throw new Error("Cannot set prototype values");if(u=o[v].match(__reArray),f=o[v].match(__reFn),u){if(o[v]=o[v].replace(__reArray,""),t[o[v]]=[],s=o.slice(),s.splice(0,v+1),p=s.join("."),Array.isArray(r))for(var x=0,E=r.length;x<E;x++)d={},e(d,r[x],p),t[o[v]].push(d);else t[o[v]]=r;return}else f&&(o[v]=o[v].replace(__reFn,""),t=t[o[v]](r));(t[o[v]]===null||t[o[v]]===void 0)&&(t[o[v]]={}),t=t[o[v]]}l.match(__reFn)?t=t[l.replace(__reFn,"")](r):t[l.replace(__reArray,"")]=r};return function(t,r){return e(t,r,n)}}else return function(t,r){t[n]=r}},get:function(n){if($$1.isPlainObject(n)){var e={};return $$1.each(n,function(r,a){a&&(e[r]=DataTable.util.get(a))}),function(r,a,o,s){var l=e[a]||e._;return l!==void 0?l(r,a,o,s):r}}else{if(n===null)return function(r){return r};if(typeof n=="function")return function(r,a,o,s){return n(r,a,o,s)};if(typeof n=="string"&&(n.indexOf(".")!==-1||n.indexOf("[")!==-1||n.indexOf("(")!==-1)){var t=function(r,a,o){var s,l,u,f;if(o!=="")for(var d=_fnSplitObjNotation(o),p=0,v=d.length;p<v;p++){if(s=d[p].match(__reArray),l=d[p].match(__reFn),s){if(d[p]=d[p].replace(__reArray,""),d[p]!==""&&(r=r[d[p]]),u=[],d.splice(0,p+1),f=d.join("."),Array.isArray(r))for(var y=0,x=r.length;y<x;y++)u.push(t(r[y],a,f));var E=s[0].substring(1,s[0].length-1);r=E===""?u:u.join(E);break}else if(l){d[p]=d[p].replace(__reFn,""),r=r[d[p]]();continue}if(r===null||r[d[p]]===null)return null;if(r===void 0||r[d[p]]===void 0)return;r=r[d[p]]}return r};return function(r,a){return t(r,a,n)}}else return function(r){return r[n]}}},stripHtml:function(n){var e=typeof n;if(e==="function"){_stripHtml=n;return}else if(e==="string")return _stripHtml(n);return n},escapeHtml:function(n){var e=typeof n;if(e==="function"){_escapeHtml=n;return}else if(e==="string"||Array.isArray(n))return _escapeHtml(n);return n},unique:_unique};function _fnHungarianMap(n){var e="a aa ai ao as b fn i m o s ",t,r,a={};$$1.each(n,function(o){t=o.match(/^([^A-Z]+?)([A-Z])/),t&&e.indexOf(t[1]+" ")!==-1&&(r=o.replace(t[0],t[2].toLowerCase()),a[r]=o,t[1]==="o"&&_fnHungarianMap(n[o]))}),n._hungarianMap=a}function _fnCamelToHungarian(n,e,t){n._hungarianMap||_fnHungarianMap(n);var r;$$1.each(e,function(a){r=n._hungarianMap[a],r!==void 0&&(t||e[r]===void 0)&&(r.charAt(0)==="o"?(e[r]||(e[r]={}),$$1.extend(!0,e[r],e[a]),_fnCamelToHungarian(n[r],e[r],t)):e[r]=e[a])})}var _fnCompatMap=function(n,e,t){n[e]!==void 0&&(n[t]=n[e])};function _fnCompatOpts(n){_fnCompatMap(n,"ordering","bSort"),_fnCompatMap(n,"orderMulti","bSortMulti"),_fnCompatMap(n,"orderClasses","bSortClasses"),_fnCompatMap(n,"orderCellsTop","bSortCellsTop"),_fnCompatMap(n,"order","aaSorting"),_fnCompatMap(n,"orderFixed","aaSortingFixed"),_fnCompatMap(n,"paging","bPaginate"),_fnCompatMap(n,"pagingType","sPaginationType"),_fnCompatMap(n,"pageLength","iDisplayLength"),_fnCompatMap(n,"searching","bFilter"),typeof n.sScrollX=="boolean"&&(n.sScrollX=n.sScrollX?"100%":""),typeof n.scrollX=="boolean"&&(n.scrollX=n.scrollX?"100%":""),typeof n.bSort=="object"?(n.orderIndicators=n.bSort.indicators!==void 0?n.bSort.indicators:!0,n.orderHandler=n.bSort.handler!==void 0?n.bSort.handler:!0,n.bSort=!0):n.bSort===!1?(n.orderIndicators=!1,n.orderHandler=!1):n.bSort===!0&&(n.orderIndicators=!0,n.orderHandler=!0),typeof n.bSortCellsTop=="boolean"&&(n.titleRow=n.bSortCellsTop);var e=n.aoSearchCols;if(e)for(var t=0,r=e.length;t<r;t++)e[t]&&_fnCamelToHungarian(DataTable.models.oSearch,e[t]);n.serverSide&&!n.searchDelay&&(n.searchDelay=400)}function _fnCompatCols(n){_fnCompatMap(n,"orderable","bSortable"),_fnCompatMap(n,"orderData","aDataSort"),_fnCompatMap(n,"orderSequence","asSorting"),_fnCompatMap(n,"orderDataType","sortDataType");var e=n.aDataSort;typeof e=="number"&&!Array.isArray(e)&&(n.aDataSort=[e])}function _fnBrowserDetect(n){if(!DataTable.__browser){var e={};DataTable.__browser=e;var t=$$1("<div/>").css({position:"fixed",top:0,left:-1*window.pageXOffset,height:1,width:1,overflow:"hidden"}).append($$1("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append($$1("<div/>").css({width:"100%",height:10}))).appendTo("body"),r=t.children(),a=r.children();e.barWidth=r[0].offsetWidth-r[0].clientWidth,e.bScrollbarLeft=Math.round(a.offset().left)!==1,t.remove()}$$1.extend(n.oBrowser,DataTable.__browser),n.oScroll.iBarWidth=DataTable.__browser.barWidth}function _fnAddColumn(n){var e=DataTable.defaults.column,t=n.aoColumns.length,r=$$1.extend({},DataTable.models.oColumn,e,{aDataSort:e.aDataSort?e.aDataSort:[t],mData:e.mData?e.mData:t,idx:t,searchFixed:{},colEl:$$1("<col>").attr("data-dt-column",t)});n.aoColumns.push(r);var a=n.aoPreSearchCols;a[t]=$$1.extend({},DataTable.models.oSearch,a[t])}function _fnColumnOptions(n,e,t){var r=n.aoColumns[e];if(t!=null){_fnCompatCols(t),_fnCamelToHungarian(DataTable.defaults.column,t,!0),t.mDataProp!==void 0&&!t.mData&&(t.mData=t.mDataProp),t.sType&&(r._sManualType=t.sType),t.className&&!t.sClass&&(t.sClass=t.className);var a=r.sClass;$$1.extend(r,t),_fnMap(r,t,"sWidth","sWidthOrig"),a!==r.sClass&&(r.sClass=a+" "+r.sClass),t.iDataSort!==void 0&&(r.aDataSort=[t.iDataSort]),_fnMap(r,t,"aDataSort")}var o=r.mData,s=_fnGetObjectDataFn(o);if(r.mRender&&Array.isArray(r.mRender)){var l=r.mRender.slice(),u=l.shift();r.mRender=DataTable.render[u].apply(window,l)}r._render=r.mRender?_fnGetObjectDataFn(r.mRender):null;var f=function(d){return typeof d=="string"&&d.indexOf("@")!==-1};r._bAttrSrc=$$1.isPlainObject(o)&&(f(o.sort)||f(o.type)||f(o.filter)),r._setter=null,r.fnGetData=function(d,p,v){var y=s(d,p,void 0,v);return r._render&&p?r._render(y,p,d,v):y},r.fnSetData=function(d,p,v){return _fnSetObjectDataFn(o)(d,p,v)},typeof o!="number"&&!r._isArrayHost&&(n._rowReadObject=!0),n.oFeatures.bSort||(r.bSortable=!1)}function _fnAdjustColumnSizing(n){_fnCalculateColumnWidths(n),_fnColumnSizes(n);var e=n.oScroll;(e.sY!==""||e.sX!=="")&&_fnScrollDraw(n),_fnCallbackFire(n,null,"column-sizing",[n])}function _fnColumnSizes(n){for(var e=n.aoColumns,t=0;t<e.length;t++){var r=_fnColumnsSumWidth(n,[t],!1);e[t].colEl.css("width",r),n.oScroll.sX&&e[t].colEl.css("min-width",r)}}function _fnVisibleToColumnIndex(n,e){var t=_fnGetColumns(n,"bVisible");return typeof t[e]=="number"?t[e]:null}function _fnColumnIndexToVisible(n,e){var t=_fnGetColumns(n,"bVisible"),r=t.indexOf(e);return r!==-1?r:null}function _fnVisibleColumns(n){var e=n.aoHeader,t=n.aoColumns,r=0;if(e.length)for(var a=0,o=e[0].length;a<o;a++)t[a].bVisible&&$$1(e[0][a].cell).css("display")!=="none"&&r++;return r}function _fnGetColumns(n,e){var t=[];return n.aoColumns.map(function(r,a){r[e]&&t.push(a)}),t}function _typeResult(n,e){return e===!0?n._name:e}function _fnColumnTypes(n){var e=n.aoColumns,t=n.aoData,r=DataTable.ext.type.detect,a,o,s,l,u,f,d,p,v;for(a=0,o=e.length;a<o;a++){if(d=e[a],v=[],!d.sType&&d._sManualType)d.sType=d._sManualType;else if(!d.sType){if(!n.typeDetect)return;for(s=0,l=r.length;s<l;s++){var y=r[s],x=y.oneOf,E=y.allOf||y,C=y.init,A=!1;if(p=null,C&&(p=_typeResult(y,C(n,d,a)),p)){d.sType=p;break}for(u=0,f=t.length;u<f&&!(t[u]&&(v[u]===void 0&&(v[u]=_fnGetCellData(n,u,a,"type")),x&&!A&&(A=_typeResult(y,x(v[u],n))),p=_typeResult(y,E(v[u],n)),!p&&s!==r.length-3||p==="html"&&!_empty(v[u])));u++);if(x&&A&&p||!x&&p){d.sType=p;break}}d.sType||(d.sType="string")}var M=_ext.type.className[d.sType];M&&(_columnAutoClass(n.aoHeader,a,M),_columnAutoClass(n.aoFooter,a,M));var V=_ext.type.render[d.sType];V&&!d._render&&(d._render=DataTable.util.get(V),_columnAutoRender(n,a))}}function _columnAutoRender(n,e){for(var t=n.aoData,r=0;r<t.length;r++)if(t[r].nTr){var a=_fnGetCellData(n,r,e,"display");t[r].displayData[e]=a,_fnWriteCell(t[r].anCells[e],a)}}function _columnAutoClass(n,e,t){n.forEach(function(r){r[e]&&r[e].unique&&_addClass(r[e].cell,t)})}function _fnApplyColumnDefs(n,e,t,r,a){var o,s,l,u,f,d,p,v=n.aoColumns;if(t)for(o=0,s=t.length;o<s;o++)t[o]&&t[o].name&&(v[o].sName=t[o].name);if(e)for(o=e.length-1;o>=0;o--){p=e[o];var y=p.target!==void 0?p.target:p.targets!==void 0?p.targets:p.aTargets;for(Array.isArray(y)||(y=[y]),l=0,u=y.length;l<u;l++){var x=y[l];if(typeof x=="number"&&x>=0){for(;v.length<=x;)_fnAddColumn(n);a(x,p)}else if(typeof x=="number"&&x<0)a(v.length+x,p);else if(typeof x=="string")for(f=0,d=v.length;f<d;f++)x==="_all"?a(f,p):x.indexOf(":name")!==-1?v[f].sName===x.replace(":name","")&&a(f,p):r.forEach(function(E){if(E[f]){var C=$$1(E[f].cell);x.match(/^[a-z][\w-]*$/i)&&(x="."+x),C.is(x)&&a(f,p)}})}}if(t)for(o=0,s=t.length;o<s;o++)a(o,t[o])}function _fnColumnsSumWidth(n,e,t,r){Array.isArray(e)||(e=_fnColumnsFromHeader(e));for(var a=0,o,s=n.aoColumns,l=0,u=e.length;l<u;l++){var f=s[e[l]],d=t?f.sWidthOrig:f.sWidth;if(f.bVisible!==!1){if(d==null)return null;if(typeof d=="number")o="px",a+=d;else{var p=d.match(/([\d\.]+)([^\d]*)/);p&&(a+=p[1]*1,o=p.length===3?p[2]:"px")}}}return a+o}function _fnColumnsFromHeader(n){var e=$$1(n).closest("[data-dt-column]").attr("data-dt-column");return e?e.split(",").map(function(t){return t*1}):[]}function _fnAddData(n,e,t,r){var a=n.aoData.length,o=$$1.extend(!0,{},DataTable.models.oRow,{src:t?"dom":"data",idx:a});o._aData=e,n.aoData.push(o);for(var s=n.aoColumns,l=0,u=s.length;l<u;l++)s[l].sType=null;n.aiDisplayMaster.push(a);var f=n.rowIdFn(e);return f!==void 0&&(n.aIds[f]=o),(t||!n.oFeatures.bDeferRender)&&_fnCreateTr(n,a,t,r),a}function _fnAddTr(n,e){var t;return e instanceof $$1||(e=$$1(e)),e.map(function(r,a){return t=_fnGetRowElements(n,a),_fnAddData(n,t.data,a,t.cells)})}function _fnGetCellData(n,e,t,r){r==="search"?r="filter":r==="order"&&(r="sort");var a=n.aoData[e];if(a){var o=n.iDraw,s=n.aoColumns[t],l=a._aData,u=s.sDefaultContent,f=s.fnGetData(l,r,{settings:n,row:e,col:t});if(r!=="display"&&f&&typeof f=="object"&&f.nodeName&&(f=f.innerHTML),f===void 0)return n.iDrawError!=o&&u===null&&(_fnLog(n,0,"Requested unknown parameter "+(typeof s.mData=="function"?"{function}":"'"+s.mData+"'")+" for row "+e+", column "+t,4),n.iDrawError=o),u;if((f===l||f===null)&&u!==null&&r!==void 0)f=u;else if(typeof f=="function")return f.call(l);if(f===null&&r==="display")return"";if(r==="filter"){var d=DataTable.ext.type.search;d[s.sType]&&(f=d[s.sType](f))}return f}}function _fnSetCellData(n,e,t,r){var a=n.aoColumns[t],o=n.aoData[e]._aData;a.fnSetData(o,r,{settings:n,row:e,col:t})}function _fnWriteCell(n,e){e&&typeof e=="object"&&e.nodeName?$$1(n).empty().append(e):n.innerHTML=e}var __reArray=/\[.*?\]$/,__reFn=/\(\)$/;function _fnSplitObjNotation(n){var e=n.match(/(\\.|[^.])+/g)||[""];return e.map(function(t){return t.replace(/\\\./g,".")})}var _fnGetObjectDataFn=DataTable.util.get,_fnSetObjectDataFn=DataTable.util.set;function _fnGetDataMaster(n){return _pluck(n.aoData,"_aData")}function _fnClearTable(n){n.aoData.length=0,n.aiDisplayMaster.length=0,n.aiDisplay.length=0,n.aIds={}}function _fnInvalidate(n,e,t,r){var a=n.aoData[e],o,s;if(a._aSortData=null,a._aFilterData=null,a.displayData=null,t==="dom"||(!t||t==="auto")&&a.src==="dom")a._aData=_fnGetRowElements(n,a,r,r===void 0?void 0:a._aData).data;else{var l=a.anCells,u=_fnGetRowDisplay(n,e);if(l)if(r!==void 0)_fnWriteCell(l[r],u[r]);else for(o=0,s=l.length;o<s;o++)_fnWriteCell(l[o],u[o])}var f=n.aoColumns;if(r!==void 0)f[r].sType=null,f[r].wideStrings=null;else{for(o=0,s=f.length;o<s;o++)f[o].sType=null,f[o].wideStrings=null;_fnRowAttributes(n,a)}}function _fnGetRowElements(n,e,t,r){var a=[],o=e.firstChild,s,l,u=0,f,d=n.aoColumns,p=n._rowReadObject;r=r!==void 0?r:p?{}:[];var v=function(M,V){if(typeof M=="string"){var R=M.indexOf("@");if(R!==-1){var q=M.substring(R+1),Q=_fnSetObjectDataFn(M);Q(r,V.getAttribute(q))}}},y=function(M){if(t===void 0||t===u)if(l=d[u],f=M.innerHTML.trim(),l&&l._bAttrSrc){var V=_fnSetObjectDataFn(l.mData._);V(r,f),v(l.mData.sort,M),v(l.mData.type,M),v(l.mData.filter,M)}else p?(l._setter||(l._setter=_fnSetObjectDataFn(l.mData)),l._setter(r,f)):r[u]=f;u++};if(o)for(;o;)s=o.nodeName.toUpperCase(),(s=="TD"||s=="TH")&&(y(o),a.push(o)),o=o.nextSibling;else{a=e.anCells;for(var x=0,E=a.length;x<E;x++)y(a[x])}var C=e.firstChild?e:e.nTr;if(C){var A=C.getAttribute("id");A&&_fnSetObjectDataFn(n.rowId)(r,A)}return{data:r,cells:a}}function _fnGetRowDisplay(n,e){var t=n.aoData[e],r=n.aoColumns;if(!t.displayData){t.displayData=[];for(var a=0,o=r.length;a<o;a++)t.displayData.push(_fnGetCellData(n,e,a,"display"))}return t.displayData}function _fnCreateTr(n,e,t,r){var a=n.aoData[e],o=a._aData,s=[],l,u,f,d,p,v,y=n.oClasses.tbody.row;if(a.nTr===null){for(l=t||document.createElement("tr"),a.nTr=l,a.anCells=s,_addClass(l,y),l._DT_RowIndex=e,_fnRowAttributes(n,a),d=0,p=n.aoColumns.length;d<p;d++){f=n.aoColumns[d],v=!(t&&r[d]),u=v?document.createElement(f.sCellType):r[d],u||_fnLog(n,0,"Incorrect column count",18),u._DT_CellIndex={row:e,column:d},s.push(u);var x=_fnGetRowDisplay(n,e);(v||(f.mRender||f.mData!==d)&&(!$$1.isPlainObject(f.mData)||f.mData._!==d+".display"))&&_fnWriteCell(u,x[d]),_addClass(u,f.sClass),f.bVisible&&v?l.appendChild(u):!f.bVisible&&!v&&u.parentNode.removeChild(u),f.fnCreatedCell&&f.fnCreatedCell.call(n.oInstance,u,_fnGetCellData(n,e,d),o,e,d)}_fnCallbackFire(n,"aoRowCreatedCallback","row-created",[l,o,e,s])}else _addClass(a.nTr,y)}function _fnRowAttributes(n,e){var t=e.nTr,r=e._aData;if(t){var a=n.rowIdFn(r);if(a&&(t.id=a),r.DT_RowClass){var o=r.DT_RowClass.split(" ");e.__rowc=e.__rowc?_unique(e.__rowc.concat(o)):o,$$1(t).removeClass(e.__rowc.join(" ")).addClass(r.DT_RowClass)}r.DT_RowAttr&&$$1(t).attr(r.DT_RowAttr),r.DT_RowData&&$$1(t).data(r.DT_RowData)}}function _fnBuildHead(n,e){var t=n.oClasses,r=n.aoColumns,a,o,s,l=e==="header"?n.nTHead:n.nTFoot,u=e==="header"?"sTitle":e;if(l){if((e==="header"||_pluck(n.aoColumns,u).join(""))&&(s=$$1("tr",l),s.length||(s=$$1("<tr/>").appendTo(l)),s.length===1)){var f=0;for($$1("td, th",s).each(function(){f+=this.colSpan}),a=f,o=r.length;a<o;a++)$$1("<th/>").html(r[a][u]||"").appendTo(s)}var d=_fnDetectHeader(n,l,!0);e==="header"?(n.aoHeader=d,$$1("tr",l).addClass(t.thead.row)):(n.aoFooter=d,$$1("tr",l).addClass(t.tfoot.row)),$$1(l).children("tr").children("th, td").each(function(){_fnRenderer(n,e)(n,$$1(this),t)})}}function _fnHeaderLayout(n,e,t){var r,a,o,s=[],l=[],u=n.aoColumns,f=u.length,d,p;if(e){for(t||(t=_range(f).filter(function(x){return u[x].bVisible})),r=0;r<e.length;r++)s[r]=e[r].slice().filter(function(x,E){return t.includes(E)}),l.push([]);for(r=0;r<s.length;r++)for(a=0;a<s[r].length;a++)if(d=1,p=1,l[r][a]===void 0){for(o=s[r][a].cell;s[r+d]!==void 0&&s[r][a].cell==s[r+d][a].cell;)l[r+d][a]=null,d++;for(;s[r][a+p]!==void 0&&s[r][a].cell==s[r][a+p].cell;){for(var v=0;v<d;v++)l[r+v][a+p]=null;p++}var y=$$1("span.dt-column-title",o);l[r][a]={cell:o,colspan:p,rowspan:d,title:y.length?y.html():$$1(o).html()}}return l}}function _fnDrawHead(n,e){for(var t=_fnHeaderLayout(n,e),r,a,o=0;o<e.length;o++){if(r=e[o].row,r)for(;a=r.firstChild;)r.removeChild(a);for(var s=0;s<t[o].length;s++){var l=t[o][s];l&&$$1(l.cell).appendTo(r).attr("rowspan",l.rowspan).attr("colspan",l.colspan)}}}function _fnDraw(n,e){_fnStart(n);var t=_fnCallbackFire(n,"aoPreDrawCallback","preDraw",[n]);if(t.indexOf(!1)!==-1){_fnProcessingDisplay(n,!1);return}var r=[],a=0,o=_fnDataSource(n)=="ssp",s=n.aiDisplay,l=n._iDisplayStart,u=n.fnDisplayEnd(),f=n.aoColumns,d=$$1(n.nTBody);if(n.bDrawing=!0,n.deferLoading)n.deferLoading=!1,n.iDraw++,_fnProcessingDisplay(n,!1);else if(!o)n.iDraw++;else if(!n.bDestroying&&!e){n.iDraw===0&&d.empty().append(_emptyRow(n)),_fnAjaxUpdate(n);return}if(s.length!==0)for(var p=o?0:l,v=o?n.aoData.length:u,y=p;y<v;y++){var x=s[y],E=n.aoData[x];if(E!==null){E.nTr===null&&_fnCreateTr(n,x);for(var C=E.nTr,A=0;A<f.length;A++){var M=f[A],V=E.anCells[A];_addClass(V,_ext.type.className[M.sType]),_addClass(V,n.oClasses.tbody.cell)}_fnCallbackFire(n,"aoRowCallback",null,[C,E._aData,a,y,x]),r.push(C),a++}}else r[0]=_emptyRow(n);_fnCallbackFire(n,"aoHeaderCallback","header",[$$1(n.nTHead).children("tr")[0],_fnGetDataMaster(n),l,u,s]),_fnCallbackFire(n,"aoFooterCallback","footer",[$$1(n.nTFoot).children("tr")[0],_fnGetDataMaster(n),l,u,s]),d[0].replaceChildren?d[0].replaceChildren.apply(d[0],r):(d.children().detach(),d.append($$1(r))),$$1(n.nTableWrapper).toggleClass("dt-empty-footer",$$1("tr",n.nTFoot).length===0),_fnCallbackFire(n,"aoDrawCallback","draw",[n],!0),n.bSorted=!1,n.bFiltered=!1,n.bDrawing=!1}function _fnReDraw(n,e,t){var r=n.oFeatures,a=r.bSort,o=r.bFilter;(t===void 0||t===!0)&&(_fnColumnTypes(n),a&&_fnSort(n),o?_fnFilterComplete(n,n.oPreviousSearch):n.aiDisplay=n.aiDisplayMaster.slice()),e!==!0&&(n._iDisplayStart=0),n._drawHold=e,_fnDraw(n),n.api.one("draw",function(){n._drawHold=!1})}function _emptyRow(n){var e=n.oLanguage,t=e.sZeroRecords,r=_fnDataSource(n);return(r==="ssp"||r==="ajax")&&!n.json?t=e.sLoadingRecords:e.sEmptyTable&&n.fnRecordsTotal()===0&&(t=e.sEmptyTable),$$1("<tr/>").append($$1("<td />",{colSpan:_fnVisibleColumns(n),class:n.oClasses.empty.row}).html(t))[0]}function _layoutItems(n,e,t){if(Array.isArray(t)){for(var r=0;r<t.length;r++)_layoutItems(n,e,t[r]);return}var a=n[e];$$1.isPlainObject(t)?t.features?(t.rowId&&(n.id=t.rowId),t.rowClass&&(n.className=t.rowClass),a.id=t.id,a.className=t.className,_layoutItems(n,e,t.features)):Object.keys(t).map(function(o){a.contents.push({feature:o,opts:t[o]})}):a.contents.push(t)}function _layoutGetRow(n,e,t){for(var r,a=0;a<n.length;a++)if(r=n[a],r.rowNum===e&&(t==="full"&&r.full||(t==="start"||t==="end")&&(r.start||r.end)))return r[t]||(r[t]={contents:[]}),r;return r={rowNum:e},r[t]={contents:[]},n.push(r),r}function _layoutArray(n,e,t){var r=[];$$1.each(e,function(o,s){if(s!==null){var l=o.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/),u=l[2]?l[2]*1:0,f=l[3]?l[3].toLowerCase():"full";if(l[1]===t){var d=_layoutGetRow(r,u,f);_layoutItems(d,f,s)}}}),r.sort(function(o,s){var l=o.rowNum,u=s.rowNum;if(l===u){var f=o.full&&!s.full?-1:1;return t==="bottom"?f*-1:f}return u-l}),t==="bottom"&&r.reverse();for(var a=0;a<r.length;a++)delete r[a].rowNum,_layoutResolve(n,r[a]);return r}function _layoutResolve(n,e){var t=function(a,o){return _ext.features[a]||_fnLog(n,0,"Unknown feature: "+a),_ext.features[a].apply(this,[n,o])},r=function(a){if(e[a])for(var o=e[a].contents,s=0,l=o.length;s<l;s++)if(o[s]){if(typeof o[s]=="string")o[s]=t(o[s],null);else if($$1.isPlainObject(o[s]))o[s]=t(o[s].feature,o[s].opts);else if(typeof o[s].node=="function")o[s]=o[s].node(n);else if(typeof o[s]=="function"){var u=o[s](n);o[s]=typeof u.node=="function"?u.node():u}}else continue};r("start"),r("end"),r("full")}function _fnAddOptionsHtml(n){var e=n.oClasses,t=$$1(n.nTable),r=$$1("<div/>").attr({id:n.sTableId+"_wrapper",class:e.container}).insertBefore(t);if(n.nTableWrapper=r[0],n.sDom)_fnLayoutDom(n,n.sDom,r);else{var a=_layoutArray(n,n.layout,"top"),o=_layoutArray(n,n.layout,"bottom"),s=_fnRenderer(n,"layout");a.forEach(function(l){s(n,r,l)}),s(n,r,{full:{table:!0,contents:[_fnFeatureHtmlTable(n)]}}),o.forEach(function(l){s(n,r,l)})}_processingHtml(n)}function _fnLayoutDom(n,e,t){for(var r=e.match(/(".*?")|('.*?')|./g),a,o,s,l,u,f=0;f<r.length;f++){if(a=null,o=r[f],o=="<"){if(s=$$1("<div/>"),l=r[f+1],l[0]=="'"||l[0]=='"'){u=l.replace(/['"]/g,"");var d="",p;if(u.indexOf(".")!=-1){var v=u.split(".");d=v[0],p=v[1]}else u[0]=="#"?d=u:p=u;s.attr("id",d.substring(1)).addClass(p),f++}t.append(s),t=s}else o==">"?t=t.parent():o=="t"?a=_fnFeatureHtmlTable(n):DataTable.ext.feature.forEach(function(y){o==y.cFeature&&(a=y.fnInit(n))});a&&t.append(a)}}function _fnDetectHeader(n,e,t){var r=n.aoColumns,a=$$1(e).children("tr"),o,s,l,u,f,d,p,v,y,x,E=n.titleRow,C=e&&e.nodeName.toLowerCase()==="thead",A=[],M,V=function(ge,ve,_e){for(var ue=ge[ve];ue[_e];)_e++;return _e};for(l=0,d=a.length;l<d;l++)A.push([]);for(l=0,d=a.length;l<d;l++)for(o=a[l],v=0,s=o.firstChild;s;){if(s.nodeName.toUpperCase()=="TD"||s.nodeName.toUpperCase()=="TH"){var R=[],q=$$1(s);if(y=s.getAttribute("colspan")*1,x=s.getAttribute("rowspan")*1,y=!y||y===0||y===1?1:y,x=!x||x===0||x===1?1:x,p=V(A,l,v),M=y===1,t){if(M){_fnColumnOptions(n,p,_fnEscapeObject(q.data()));var Q=r[p],m=s.getAttribute("width")||null,ne=s.style.width.match(/width:\s*(\d+[pxem%]+)/);ne&&(m=ne[1]),Q.sWidthOrig=Q.sWidth||m,C?(Q.sTitle!==null&&!Q.autoTitle&&(E===!0&&l===0||E===!1&&l===a.length-1||E===l||E===null)&&(s.innerHTML=Q.sTitle),!Q.sTitle&&M&&(Q.sTitle=_stripHtml(s.innerHTML),Q.autoTitle=!0)):Q.footer&&(s.innerHTML=Q.footer),Q.ariaTitle||(Q.ariaTitle=q.attr("aria-label")||Q.sTitle),Q.className&&q.addClass(Q.className)}$$1("span.dt-column-title",s).length===0&&$$1("<span>").addClass("dt-column-title").append(s.childNodes).appendTo(s),n.orderIndicators&&C&&q.filter(":not([data-dt-order=disable])").length!==0&&q.parent(":not([data-dt-order=disable])").length!==0&&$$1("span.dt-column-order",s).length===0&&$$1("<span>").addClass("dt-column-order").appendTo(s);var re=C?"header":"footer";$$1("span.dt-column-"+re,s).length===0&&$$1("<div>").addClass("dt-column-"+re).append(s.childNodes).appendTo(s)}for(f=0;f<y;f++){for(u=0;u<x;u++)A[l+u][p+f]={cell:s,unique:M},A[l+u].row=o;R.push(p+f)}s.setAttribute("data-dt-column",_unique(R).join(","))}s=s.nextSibling}return A}function _fnStart(n){var e=_fnDataSource(n)=="ssp",t=n.iInitDisplayStart;t!==void 0&&t!==-1&&(n._iDisplayStart=e?t:t>=n.fnRecordsDisplay()?0:t,n.iInitDisplayStart=-1)}function _fnBuildAjax(n,e,t){var r,a=n.ajax,o=n.oInstance,s=function(d){var p=n.jqXHR?n.jqXHR.status:null;(d===null||typeof p=="number"&&p==204)&&(d={},_fnAjaxDataSrc(n,d,[]));var v=d.error||d.sError;if(v&&_fnLog(n,0,v),d.d&&typeof d.d=="string")try{d=JSON.parse(d.d)}catch{}n.json=d,_fnCallbackFire(n,null,"xhr",[n,d,n.jqXHR],!0),t(d)};if($$1.isPlainObject(a)&&a.data){r=a.data;var l=typeof r=="function"?r(e,n):r;e=typeof r=="function"&&l?l:$$1.extend(!0,e,l),delete a.data}var u={url:typeof a=="string"?a:"",data:e,success:s,dataType:"json",cache:!1,type:n.sServerMethod,error:function(d,p){var v=_fnCallbackFire(n,null,"xhr",[n,null,n.jqXHR],!0);v.indexOf(!0)===-1&&(p=="parsererror"?_fnLog(n,0,"Invalid JSON response",1):d.readyState===4&&_fnLog(n,0,"Ajax error",7)),_fnProcessingDisplay(n,!1)}};if($$1.isPlainObject(a)&&$$1.extend(u,a),n.oAjaxData=e,_fnCallbackFire(n,null,"preXhr",[n,e,u],!0),u.submitAs==="json"&&typeof e=="object"&&(u.data=JSON.stringify(e)),typeof a=="function")n.jqXHR=a.call(o,e,s,n);else if(a.url===""){var f={};_fnAjaxDataSrc(n,f,[]),s(f)}else n.jqXHR=$$1.ajax(u);r&&(a.data=r)}function _fnAjaxUpdate(n){n.iDraw++,_fnProcessingDisplay(n,!0),_fnBuildAjax(n,_fnAjaxParameters(n),function(e){_fnAjaxUpdateDraw(n,e)})}function _fnAjaxParameters(n){var e=n.aoColumns,t=n.oFeatures,r=n.oPreviousSearch,a=n.aoPreSearchCols,o=function(s,l){return typeof e[s][l]=="function"?"function":e[s][l]};return{draw:n.iDraw,columns:e.map(function(s,l){return{data:o(l,"mData"),name:s.sName,searchable:s.bSearchable,orderable:s.bSortable,search:{value:a[l].search,regex:a[l].regex,fixed:Object.keys(s.searchFixed).map(function(u){return{name:u,term:typeof s.searchFixed[u]!="function"?s.searchFixed[u].toString():"function"}})}}}),order:_fnSortFlatten(n).map(function(s){return{column:s.col,dir:s.dir,name:o(s.col,"sName")}}),start:n._iDisplayStart,length:t.bPaginate?n._iDisplayLength:-1,search:{value:r.search,regex:r.regex,fixed:Object.keys(n.searchFixed).map(function(s){return{name:s,term:typeof n.searchFixed[s]!="function"?n.searchFixed[s].toString():"function"}})}}}function _fnAjaxUpdateDraw(n,e){var t=_fnAjaxDataSrc(n,e),r=_fnAjaxDataSrcParam(n,"draw",e),a=_fnAjaxDataSrcParam(n,"recordsTotal",e),o=_fnAjaxDataSrcParam(n,"recordsFiltered",e);if(r!==void 0){if(r*1<n.iDraw)return;n.iDraw=r*1}t||(t=[]),_fnClearTable(n),n._iRecordsTotal=parseInt(a,10),n._iRecordsDisplay=parseInt(o,10);for(var s=0,l=t.length;s<l;s++)_fnAddData(n,t[s]);n.aiDisplay=n.aiDisplayMaster.slice(),_fnColumnTypes(n),_fnDraw(n,!0),_fnInitComplete(n),_fnProcessingDisplay(n,!1)}function _fnAjaxDataSrc(n,e,t){var r="data";if($$1.isPlainObject(n.ajax)&&n.ajax.dataSrc!==void 0){var a=n.ajax.dataSrc;typeof a=="string"||typeof a=="function"?r=a:a.data!==void 0&&(r=a.data)}if(!t)return r==="data"?e.aaData||e[r]:r!==""?_fnGetObjectDataFn(r)(e):e;_fnSetObjectDataFn(r)(e,t)}function _fnAjaxDataSrcParam(n,e,t){var r=$$1.isPlainObject(n.ajax)?n.ajax.dataSrc:null;if(r&&r[e])return _fnGetObjectDataFn(r[e])(t);var a="";return e==="draw"?a="sEcho":e==="recordsTotal"?a="iTotalRecords":e==="recordsFiltered"&&(a="iTotalDisplayRecords"),t[a]!==void 0?t[a]:t[e]}function _fnFilterComplete(n,e){var t=n.aoPreSearchCols;if(_fnDataSource(n)!="ssp"){_fnFilterData(n),n.aiDisplay=n.aiDisplayMaster.slice(),_fnFilter(n.aiDisplay,n,e.search,e),$$1.each(n.searchFixed,function(o,s){_fnFilter(n.aiDisplay,n,s,{})});for(var r=0;r<t.length;r++){var a=t[r];_fnFilter(n.aiDisplay,n,a.search,a,r),$$1.each(n.aoColumns[r].searchFixed,function(o,s){_fnFilter(n.aiDisplay,n,s,{},r)})}_fnFilterCustom(n)}n.bFiltered=!0,_fnCallbackFire(n,null,"search",[n])}function _fnFilterCustom(n){for(var e=DataTable.ext.search,t=n.aiDisplay,r,a,o=0,s=e.length;o<s;o++){for(var l=[],u=0,f=t.length;u<f;u++)a=t[u],r=n.aoData[a],e[o](n,r._aFilterData,a,r._aData,u)&&l.push(a);t.length=0,_fnArrayApply(t,l)}}function _fnFilter(n,e,t,r,a){if(t!==""){var o=0,s=[],l=typeof t=="function"?t:null,u=t instanceof RegExp?t:l?null:_fnFilterCreateSearch(t,r);for(o=0;o<n.length;o++){var f=e.aoData[n[o]],d=a===void 0?f._sFilterRow:f._aFilterData[a];(l&&l(d,f._aData,n[o],a)||u&&u.test(d))&&s.push(n[o])}for(n.length=s.length,o=0;o<s.length;o++)n[o]=s[o]}}function _fnFilterCreateSearch(n,e){var t=[],r=$$1.extend({},{boundary:!1,caseInsensitive:!0,exact:!1,regex:!1,smart:!0},e);if(typeof n!="string"&&(n=n.toString()),n=_normalize(n),r.exact)return new RegExp("^"+_fnEscapeRegex(n)+"$",r.caseInsensitive?"i":"");if(n=r.regex?n:_fnEscapeRegex(n),r.smart){var a=n.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""],o=a.map(function(u){var f=!1,d;return u.charAt(0)==="!"&&(f=!0,u=u.substring(1)),u.charAt(0)==='"'?(d=u.match(/^"(.*)"$/),u=d?d[1]:u):u.charAt(0)==="“"&&(d=u.match(/^\u201C(.*)\u201D$/),u=d?d[1]:u),f&&(u.length>1&&t.push("(?!"+u+")"),u=""),u.replace(/"/g,"")}),s=t.length?t.join(""):"",l=r.boundary?"\\b":"";n="^(?=.*?"+l+o.join(")(?=.*?"+l)+")("+s+".)*$"}return new RegExp(n,r.caseInsensitive?"i":"")}var _fnEscapeRegex=DataTable.util.escapeRegex,__filter_div=$$1("<div>")[0],__filter_div_textContent=__filter_div.textContent!==void 0;function _fnFilterData(n){for(var e=n.aoColumns,t=n.aoData,r,a,o,s,l,u,f=!1,d=0;d<t.length;d++)if(t[d]&&(u=t[d],!u._aFilterData)){for(s=[],a=0,o=e.length;a<o;a++)r=e[a],r.bSearchable?(l=_fnGetCellData(n,d,a,"filter"),l===null&&(l=""),typeof l!="string"&&l.toString&&(l=l.toString())):l="",l.indexOf&&l.indexOf("&")!==-1&&(__filter_div.innerHTML=l,l=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText),l.replace&&(l=l.replace(/[\r\n\u2028]/g,"")),s.push(l);u._aFilterData=s,u._sFilterRow=s.join("  "),f=!0}return f}function _fnInitialise(n){var e,t=n.oInit,r=n.deferLoading,a=_fnDataSource(n);if(!n.bInitialised){setTimeout(function(){_fnInitialise(n)},200);return}_fnBuildHead(n,"header"),_fnBuildHead(n,"footer"),_fnLoadState(n,t,function(){_fnDrawHead(n,n.aoHeader),_fnDrawHead(n,n.aoFooter);var o=n.iInitDisplayStart;if(t.aaData)for(e=0;e<t.aaData.length;e++)_fnAddData(n,t.aaData[e]);else(r||a=="dom")&&_fnAddTr(n,$$1(n.nTBody).children("tr"));n.aiDisplay=n.aiDisplayMaster.slice(),_fnAddOptionsHtml(n),_fnSortInit(n),_colGroup(n),_fnProcessingDisplay(n,!0),_fnCallbackFire(n,null,"preInit",[n],!0),_fnReDraw(n),(a!="ssp"||r)&&(a=="ajax"?_fnBuildAjax(n,{},function(s){var l=_fnAjaxDataSrc(n,s);for(e=0;e<l.length;e++)_fnAddData(n,l[e]);n.iInitDisplayStart=o,_fnReDraw(n),_fnProcessingDisplay(n,!1),_fnInitComplete(n)}):(_fnInitComplete(n),_fnProcessingDisplay(n,!1)))})}function _fnInitComplete(n){if(!n._bInitComplete){var e=[n,n.json];n._bInitComplete=!0,_fnAdjustColumnSizing(n),_fnCallbackFire(n,null,"plugin-init",e,!0),_fnCallbackFire(n,"aoInitComplete","init",e,!0)}}function _fnLengthChange(n,e){var t=parseInt(e,10);n._iDisplayLength=t,_fnLengthOverflow(n),_fnCallbackFire(n,null,"length",[n,t])}function _fnPageChange(n,e,t){var r=n._iDisplayStart,a=n._iDisplayLength,o=n.fnRecordsDisplay();if(o===0||a===-1)r=0;else if(typeof e=="number")r=e*a,r>o&&(r=0);else if(e=="first")r=0;else if(e=="previous")r=a>=0?r-a:0,r<0&&(r=0);else if(e=="next")r+a<o&&(r+=a);else if(e=="last")r=Math.floor((o-1)/a)*a;else{if(e==="ellipsis")return;_fnLog(n,0,"Unknown paging action: "+e,5)}var s=n._iDisplayStart!==r;return n._iDisplayStart=r,_fnCallbackFire(n,null,s?"page":"page-nc",[n]),s&&t&&_fnDraw(n),s}function _processingHtml(n){var e=n.nTable,t=n.oScroll.sX!==""||n.oScroll.sY!=="";if(n.oFeatures.bProcessing){var r=$$1("<div/>",{id:n.sTableId+"_processing",class:n.oClasses.processing.container,role:"status"}).html(n.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");t?r.prependTo($$1("div.dt-scroll",n.nTableWrapper)):r.insertBefore(e),$$1(e).on("processing.dt.DT",function(a,o,s){r.css("display",s?"block":"none")})}}function _fnProcessingDisplay(n,e){n.bDrawing&&e===!1||_fnCallbackFire(n,null,"processing",[n,e])}function _fnProcessingRun(n,e,t){e?(_fnProcessingDisplay(n,!0),setTimeout(function(){t(),_fnProcessingDisplay(n,!1)},0)):t()}function _fnFeatureHtmlTable(n){var e=$$1(n.nTable),t=n.oScroll;if(t.sX===""&&t.sY==="")return n.nTable;var r=t.sX,a=t.sY,o=n.oClasses.scrolling,s=n.captionNode,l=s?s._captionSide:null,u=$$1(e[0].cloneNode(!1)),f=$$1(e[0].cloneNode(!1)),d=e.children("tfoot"),p="<div/>",v=function(M){return M?_fnStringToCss(M):null};d.length||(d=null);var y=$$1(p,{class:o.container}).append($$1(p,{class:o.header.self}).css({overflow:"hidden",position:"relative",border:0,width:r?v(r):"100%"}).append($$1(p,{class:o.header.inner}).css({"box-sizing":"content-box",width:t.sXInner||"100%"}).append(u.removeAttr("id").css("margin-left",0).append(l==="top"?s:null).append(e.children("thead"))))).append($$1(p,{class:o.body}).css({position:"relative",overflow:"auto",width:v(r)}).append(e));d&&y.append($$1(p,{class:o.footer.self}).css({overflow:"hidden",border:0,width:r?v(r):"100%"}).append($$1(p,{class:o.footer.inner}).append(f.removeAttr("id").css("margin-left",0).append(l==="bottom"?s:null).append(e.children("tfoot")))));var x=y.children(),E=x[0],C=x[1],A=d?x[2]:null;return $$1(C).on("scroll.DT",function(){var M=this.scrollLeft;E.scrollLeft=M,d&&(A.scrollLeft=M)}),$$1("th, td",E).on("focus",function(){var M=E.scrollLeft;C.scrollLeft=M,d&&(C.scrollLeft=M)}),$$1(C).css("max-height",a),t.bCollapse||$$1(C).css("height",a),n.nScrollHead=E,n.nScrollBody=C,n.nScrollFoot=A,n.aoDrawCallback.push(_fnScrollDraw),y[0]}function _fnScrollDraw(n){var e=n.oScroll,t=e.iBarWidth,r=$$1(n.nScrollHead),a=r.children("div"),o=a.children("table"),s=n.nScrollBody,l=$$1(s),u=$$1(n.nScrollFoot),f=u.children("div"),d=f.children("table"),p=$$1(n.nTHead),v=$$1(n.nTable),y=n.nTFoot&&$$1("th, td",n.nTFoot).length?$$1(n.nTFoot):null,x=n.oBrowser,E,C,A=s.scrollHeight>s.clientHeight;if(n.scrollBarVis!==A&&n.scrollBarVis!==void 0){n.scrollBarVis=A,_fnAdjustColumnSizing(n);return}else n.scrollBarVis=A;if(v.children("thead, tfoot").remove(),E=p.clone().prependTo(v),E.find("th, td").removeAttr("tabindex"),E.find("[id]").removeAttr("id"),y&&(C=y.clone().prependTo(v),C.find("[id]").removeAttr("id")),n.aiDisplay.length){var M=null,V=_fnDataSource(n)!=="ssp"?n._iDisplayStart:0;for(m=V;m<V+n.aiDisplay.length;m++){var R=n.aiDisplay[m],q=n.aoData[R].nTr;if(q){M=q;break}}if(M)for(var Q=$$1(M).children("th, td").map(function(ue){return{idx:_fnVisibleToColumnIndex(n,ue),width:$$1(this).outerWidth()}}),m=0;m<Q.length;m++){var ne=n.aoColumns[Q[m].idx].colEl[0],re=ne.style.width.replace("px","");re!==Q[m].width&&(ne.style.width=Q[m].width+"px",e.sX&&(ne.style.minWidth=Q[m].width+"px"))}}o.find("colgroup").remove(),o.append(n.colgroup.clone()),y&&(d.find("colgroup").remove(),d.append(n.colgroup.clone())),$$1("th, td",E).each(function(){$$1(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')}),y&&$$1("th, td",C).each(function(){$$1(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')});var ge=Math.floor(v.height())>s.clientHeight||l.css("overflow-y")=="scroll",ve="padding"+(x.bScrollbarLeft?"Left":"Right"),_e=v.outerWidth();o.css("width",_fnStringToCss(_e)),a.css("width",_fnStringToCss(_e)).css(ve,ge?t+"px":"0px"),y&&(d.css("width",_fnStringToCss(_e)),f.css("width",_fnStringToCss(_e)).css(ve,ge?t+"px":"0px")),v.children("colgroup").prependTo(v),l.trigger("scroll"),(n.bSorted||n.bFiltered)&&!n._drawHold&&(s.scrollTop=0)}function _fnCalculateColumnWidths(n){if(n.oFeatures.bAutoWidth){var e=n.nTable,t=n.aoColumns,r=n.oScroll,a=r.sY,o=r.sX,s=r.sXInner,l=_fnGetColumns(n,"bVisible"),u=e.getAttribute("width"),f=e.parentNode,d,p,v,y,x=e.style.width,E=_fnWrapperWidth(n);if(E===n.containerWidth)return!1;n.containerWidth=E,!x&&!u&&(e.style.width="100%",x="100%"),x&&x.indexOf("%")!==-1&&(u=x),_fnCallbackFire(n,null,"column-calc",{visible:l},!1);var C=$$1(e.cloneNode()).css("visibility","hidden").css("margin",0).removeAttr("id");C.append("<tbody/>"),C.append($$1(n.nTHead).clone()).append($$1(n.nTFoot).clone()),C.find("tfoot th, tfoot td").css("width",""),C.find("thead th, thead td").each(function(){var pe=_fnColumnsSumWidth(n,this,!0);pe?(this.style.width=pe,o&&(this.style.minWidth=pe,$$1(this).append($$1("<div/>").css({width:pe,margin:0,padding:0,border:0,height:1})))):this.style.width=""});var A=[];for(d=0;d<l.length;d++)A.push(_fnGetWideStrings(n,l[d]));if(A.length)for(d=0;d<A[0].length;d++){var M=$$1("<tr/>").appendTo(C.find("tbody"));for(p=0;p<l.length;p++){y=l[p],v=t[y];var V=A[p][d]||"",R=_ext.type.className[v.sType],q=v.sContentPadding||(o?"-":""),Q=V+q,m=V.indexOf("<")===-1?document.createTextNode(Q):Q;$$1("<td/>").addClass(R).addClass(v.sClass).append(m).appendTo(M)}}$$1("[name]",C).removeAttr("name");var ne=$$1("<div/>").css(o||a?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(C).appendTo(f);o&&s?C.width(s):o?(C.css("width","auto"),C.removeAttr("width"),C.outerWidth()<f.clientWidth&&u&&C.outerWidth(f.clientWidth)):a?C.outerWidth(f.clientWidth):u&&C.outerWidth(u);var re=0,ge=C.find("tbody tr").eq(0).children();for(d=0;d<l.length;d++){var ve=ge[d].getBoundingClientRect().width;re+=ve,t[l[d]].sWidth=_fnStringToCss(ve)}if(e.style.width=_fnStringToCss(re),ne.remove(),u&&(e.style.width=_fnStringToCss(u)),(u||o)&&!n._reszEvt){var _e=DataTable.util.throttle(function(){var pe=_fnWrapperWidth(n);!n.bDestroying&&pe!==0&&_fnAdjustColumnSizing(n)});if(window.ResizeObserver){var ue=$$1(n.nTableWrapper).is(":visible"),He=$$1("<div>").css({width:"100%",height:0}).addClass("dt-autosize").appendTo(n.nTableWrapper);n.resizeObserver=new ResizeObserver(function(pe){ue?ue=!1:_e()}),n.resizeObserver.observe(He[0])}else $$1(window).on("resize.DT-"+n.sInstance,_e);n._reszEvt=!0}}}function _fnWrapperWidth(n){return $$1(n.nTableWrapper).is(":visible")?$$1(n.nTableWrapper).width():0}function _fnGetWideStrings(n,e){var t=n.aoColumns[e];if(!t.wideStrings){for(var r=[],a=[],o=0,s=n.aiDisplayMaster.length;o<s;o++){var l=n.aiDisplayMaster[o],u=_fnGetRowDisplay(n,l)[e],f=u&&typeof u=="object"&&u.nodeType?u.innerHTML:u+"";f=f.replace(/id=".*?"/g,"").replace(/name=".*?"/g,"");var d=_stripHtml(f).replace(/&nbsp;/g," ");a.push({str:d,len:d.length}),r.push(d)}a.sort(function(v,y){return y.len-v.len}).splice(3),t.wideStrings=a.map(function(v){return v.str});let p=r.join(" ").split(" ");p.sort(function(v,y){return y.length-v.length}),p.length&&t.wideStrings.push(p[0]),p.length>1&&t.wideStrings.push(p[1]),p.length>2&&t.wideStrings.push(p[3])}return t.wideStrings}function _fnStringToCss(n){return n===null?"0px":typeof n=="number"?n<0?"0px":n+"px":n.match(/\d$/)?n+"px":n}function _colGroup(n){var e=n.aoColumns;for(n.colgroup.empty(),i=0;i<e.length;i++)e[i].bVisible&&n.colgroup.append(e[i].colEl)}function _fnSortInit(n){var e=n.nTHead,t=e.querySelectorAll("tr"),r=n.titleRow,a=':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';r===!0?e=t[0]:r===!1?e=t[t.length-1]:r!==null&&(e=t[r]),n.orderHandler&&_fnSortAttachListener(n,e,e===n.nTHead?"tr"+a+" th"+a+", tr"+a+" td"+a:"th"+a+", td"+a);var o=[];_fnSortResolve(n,o,n.aaSorting),n.aaSorting=o}function _fnSortAttachListener(n,e,t,r,a){_fnBindAction(e,t,function(o){var s=!1,l=r===void 0?_fnColumnsFromHeader(o.target):typeof r=="function"?r():Array.isArray(r)?r:[r];if(l.length){for(var u=0,f=l.length;u<f;u++){var d=_fnSortAdd(n,l[u],u,o.shiftKey);if(d!==!1&&(s=!0),n.aaSorting.length===1&&n.aaSorting[0][1]==="")break}s&&_fnProcessingRun(n,!0,function(){_fnSort(n),_fnSortDisplay(n,n.aiDisplay),_fnReDraw(n,!1,!1),a&&a()})}})}function _fnSortDisplay(n,e){if(!(e.length<2)){var t=n.aiDisplayMaster,r={},a={},o;for(o=0;o<t.length;o++)r[t[o]]=o;for(o=0;o<e.length;o++)a[e[o]]=r[e[o]];e.sort(function(s,l){return a[s]-a[l]})}}function _fnSortResolve(n,e,t){var r=function(o){if($$1.isPlainObject(o)){if(o.idx!==void 0)e.push([o.idx,o.dir]);else if(o.name){var s=_pluck(n.aoColumns,"sName"),l=s.indexOf(o.name);l!==-1&&e.push([l,o.dir])}}else e.push(o)};if($$1.isPlainObject(t))r(t);else if(t.length&&typeof t[0]=="number")r(t);else if(t.length)for(var a=0;a<t.length;a++)r(t[a])}function _fnSortFlatten(n){var e,t,r,a=[],o=DataTable.ext.type.order,s=n.aoColumns,l,u,f,d,p=n.aaSortingFixed,v=$$1.isPlainObject(p),y=[];if(!n.oFeatures.bSort)return a;for(Array.isArray(p)&&_fnSortResolve(n,y,p),v&&p.pre&&_fnSortResolve(n,y,p.pre),_fnSortResolve(n,y,n.aaSorting),v&&p.post&&_fnSortResolve(n,y,p.post),e=0;e<y.length;e++)if(d=y[e][0],s[d])for(l=s[d].aDataSort,t=0,r=l.length;t<r;t++)u=l[t],f=s[u].sType||"string",y[e]._idx===void 0&&(y[e]._idx=s[u].asSorting.indexOf(y[e][1])),y[e][1]&&a.push({src:d,col:u,dir:y[e][1],index:y[e]._idx,type:f,formatter:o[f+"-pre"],sorter:o[f+"-"+y[e][1]]});return a}function _fnSort(n,e,t){var r,a,o=[],s=DataTable.ext.type.order,l=n.aoData,u,f=n.aiDisplayMaster,d;if(_fnColumnTypes(n),e!==void 0){var p=n.aoColumns[e];d=[{src:e,col:e,dir:t,index:0,type:p.sType,formatter:s[p.sType+"-pre"],sorter:s[p.sType+"-"+t]}],f=f.slice()}else d=_fnSortFlatten(n);for(r=0,a=d.length;r<a;r++)u=d[r],_fnSortData(n,u.col);if(_fnDataSource(n)!="ssp"&&d.length!==0){for(r=0,a=f.length;r<a;r++)o[r]=r;d.length&&d[0].dir==="desc"&&n.orderDescReverse&&o.reverse(),f.sort(function(v,y){var x,E,C,A,M,V=d.length,R=l[v]._aSortData,q=l[y]._aSortData;for(C=0;C<V;C++)if(M=d[C],x=R[M.col],E=q[M.col],M.sorter){if(A=M.sorter(x,E),A!==0)return A}else if(A=x<E?-1:x>E?1:0,A!==0)return M.dir==="asc"?A:-A;return x=o[v],E=o[y],x<E?-1:x>E?1:0})}else d.length===0&&f.sort(function(v,y){return v<y?-1:v>y?1:0});return e===void 0&&(n.bSorted=!0,n.sortDetails=d,_fnCallbackFire(n,null,"order",[n,d])),f}function _fnSortAdd(n,e,t,r){var a=n.aoColumns[e],o=n.aaSorting,s=a.asSorting,l,u=function(d,p){var v=d._idx;return v===void 0&&(v=s.indexOf(d[1])),v+1<s.length?v+1:p?null:0};if(!a.bSortable)return!1;if(typeof o[0]=="number"&&(o=n.aaSorting=[o]),(r||t)&&n.oFeatures.bSortMulti){var f=_pluck(o,"0").indexOf(e);f!==-1?(l=u(o[f],!0),l===null&&o.length===1&&(l=0),l===null||s[l]===""?o.splice(f,1):(o[f][1]=s[l],o[f]._idx=l)):r?(o.push([e,s[0],0]),o[o.length-1]._idx=0):(o.push([e,o[0][1],0]),o[o.length-1]._idx=0)}else o.length&&o[0][0]==e?(l=u(o[0]),o.length=1,o[0][1]=s[l],o[0]._idx=l):(o.length=0,o.push([e,s[0]]),o[0]._idx=0)}function _fnSortingClasses(n){var e=n.aLastSort,t=n.oClasses.order.position,r=_fnSortFlatten(n),a=n.oFeatures,o,s,l;if(a.bSort&&a.bSortClasses){for(o=0,s=e.length;o<s;o++)l=e[o].src,$$1(_pluck(n.aoData,"anCells",l)).removeClass(t+(o<2?o+1:3));for(o=0,s=r.length;o<s;o++)l=r[o].src,$$1(_pluck(n.aoData,"anCells",l)).addClass(t+(o<2?o+1:3))}n.aLastSort=r}function _fnSortData(n,e){var t=n.aoColumns[e],r=DataTable.ext.order[t.sSortDataType],a;r&&(a=r.call(n.oInstance,n,e,_fnColumnIndexToVisible(n,e)));for(var o,s,l=DataTable.ext.type.order[t.sType+"-pre"],u=n.aoData,f=0;f<u.length;f++)u[f]&&(o=u[f],o._aSortData||(o._aSortData=[]),(!o._aSortData[e]||r)&&(s=r?a[f]:_fnGetCellData(n,f,e,"sort"),o._aSortData[e]=l?l(s,n):s))}function _fnSaveState(n){if(!n._bLoadingState){var e=[];_fnSortResolve(n,e,n.aaSorting);var t=n.aoColumns,r={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:e.map(function(a){return t[a[0]]&&t[a[0]].sName?[t[a[0]].sName,a[1]]:a.slice()}),search:$$1.extend({},n.oPreviousSearch),columns:n.aoColumns.map(function(a,o){return{name:a.sName,visible:a.bVisible,search:$$1.extend({},n.aoPreSearchCols[o])}})};n.oSavedState=r,_fnCallbackFire(n,"aoStateSaveParams","stateSaveParams",[n,r]),n.oFeatures.bStateSave&&!n.bDestroying&&n.fnStateSaveCallback.call(n.oInstance,n,r)}}function _fnLoadState(n,e,t){if(!n.oFeatures.bStateSave){t();return}var r=function(o){_fnImplementState(n,o,t)},a=n.fnStateLoadCallback.call(n.oInstance,n,r);return a!==void 0&&_fnImplementState(n,a,t),!0}function _fnImplementState(n,e,t){var r,a,o=n.aoColumns,s=_pluck(n.aoColumns,"sName");n._bLoadingState=!0;var l=n._bInitComplete?new DataTable.Api(n):null;if(!e||!e.time){n._bLoadingState=!1,t();return}var u=n.iStateDuration;if(u>0&&e.time<+new Date-u*1e3){n._bLoadingState=!1,t();return}var f=_fnCallbackFire(n,"aoStateLoadParams","stateLoadParams",[n,e]);if(f.indexOf(!1)!==-1){n._bLoadingState=!1,t();return}if(n.oLoadedState=$$1.extend(!0,{},e),_fnCallbackFire(n,null,"stateLoadInit",[n,e],!0),e.length!==void 0&&(l?l.page.len(e.length):n._iDisplayLength=e.length),e.start!==void 0&&(l===null?(n._iDisplayStart=e.start,n.iInitDisplayStart=e.start):_fnPageChange(n,e.start/n._iDisplayLength)),e.order!==void 0&&(n.aaSorting=[],$$1.each(e.order,function(x,E){var C=[E[0],E[1]];if(typeof E[0]=="string"){var A=s.indexOf(E[0]);if(A<0)return;C[0]=A}else if(C[0]>=o.length)return;n.aaSorting.push(C)})),e.search!==void 0&&$$1.extend(n.oPreviousSearch,e.search),e.columns){var d=e.columns,p=_pluck(e.columns,"name");if(p.join("").length&&p.join("")!==s.join(""))for(d=[],r=0;r<s.length;r++)if(s[r]!=""){var v=p.indexOf(s[r]);v>=0?d.push(e.columns[v]):d.push({})}else d.push({});if(d.length===o.length){for(r=0,a=d.length;r<a;r++){var y=d[r];y.visible!==void 0&&(l?l.column(r).visible(y.visible,!1):o[r].bVisible=y.visible),y.search!==void 0&&$$1.extend(n.aoPreSearchCols[r],y.search)}l&&l.one("draw",function(){l.columns.adjust()})}}n._bLoadingState=!1,_fnCallbackFire(n,"aoStateLoaded","stateLoaded",[n,e]),t()}function _fnLog(n,e,t,r){t="DataTables warning: "+(n?"table id="+n.sTableId+" - ":"")+t,r&&(t+=". For more information about this error, please see https://datatables.net/tn/"+r);{var a=DataTable.ext,o=a.sErrMode||a.errMode;if(n&&_fnCallbackFire(n,null,"dt-error",[n,r,t],!0),o=="alert")alert(t);else{if(o=="throw")throw new Error(t);typeof o=="function"&&o(n,r,t)}}}function _fnMap(n,e,t,r){if(Array.isArray(t)){$$1.each(t,function(a,o){Array.isArray(o)?_fnMap(n,e,o[0],o[1]):_fnMap(n,e,o)});return}r===void 0&&(r=t),e[t]!==void 0&&(n[r]=e[t])}function _fnExtend(n,e,t){var r;for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r=e[a],$$1.isPlainObject(r)?($$1.isPlainObject(n[a])||(n[a]={}),$$1.extend(!0,n[a],r)):t&&a!=="data"&&a!=="aaData"&&Array.isArray(r)?n[a]=r.slice():n[a]=r);return n}function _fnBindAction(n,e,t){$$1(n).on("click.DT",e,function(r){t(r)}).on("keypress.DT",e,function(r){r.which===13&&(r.preventDefault(),t(r))}).on("selectstart.DT",e,function(){return!1})}function _fnCallbackReg(n,e,t){t&&n[e].push(t)}function _fnCallbackFire(n,e,t,r,a){var o=[];if(e&&(o=n[e].slice().reverse().map(function(u){return u.apply(n.oInstance,r)})),t!==null){var s=$$1.Event(t+".dt"),l=$$1(n.nTable);s.dt=n.api,l[a?"trigger":"triggerHandler"](s,r),a&&l.parents("body").length===0&&$$1("body").trigger(s,r),o.push(s.result)}return o}function _fnLengthOverflow(n){var e=n._iDisplayStart,t=n.fnDisplayEnd(),r=n._iDisplayLength;e>=t&&(e=t-r),e-=e%r,(r===-1||e<0)&&(e=0),n._iDisplayStart=e}function _fnRenderer(n,e){var t=n.renderer,r=DataTable.ext.renderer[e];return $$1.isPlainObject(t)&&t[e]?r[t[e]]||r._:typeof t=="string"&&r[t]||r._}function _fnDataSource(n){return n.oFeatures.bServerSide?"ssp":n.ajax?"ajax":"dom"}function _fnMacros(n,e,t){var r=n.fnFormatNumber,a=n._iDisplayStart+1,o=n._iDisplayLength,s=n.fnRecordsDisplay(),l=n.fnRecordsTotal(),u=o===-1;return e.replace(/_START_/g,r.call(n,a)).replace(/_END_/g,r.call(n,n.fnDisplayEnd())).replace(/_MAX_/g,r.call(n,l)).replace(/_TOTAL_/g,r.call(n,s)).replace(/_PAGE_/g,r.call(n,u?1:Math.ceil(a/o))).replace(/_PAGES_/g,r.call(n,u?1:Math.ceil(s/o))).replace(/_ENTRIES_/g,n.api.i18n("entries","",t)).replace(/_ENTRIES-MAX_/g,n.api.i18n("entries","",l)).replace(/_ENTRIES-TOTAL_/g,n.api.i18n("entries","",s))}function _fnArrayApply(n,e){if(e)if(e.length<1e4)n.push.apply(n,e);else for(i=0;i<e.length;i++)n.push(e[i])}function _fnListener(n,e,t){for(Array.isArray(t)||(t=[t]),i=0;i<t.length;i++)n.on(e+".dt",t[i])}function _fnEscapeObject(n){return DataTable.ext.escape.attributes&&$$1.each(n,function(e,t){n[e]=_escapeHtml(t)}),n}var __apiStruct=[],__arrayProto=Array.prototype,_toSettings=function(n){var e,t,r=DataTable.settings,a=_pluck(r,"nTable");if(n){if(n.nTable&&n.oFeatures)return[n];if(n.nodeName&&n.nodeName.toLowerCase()==="table")return e=a.indexOf(n),e!==-1?[r[e]]:null;if(n&&typeof n.settings=="function")return n.settings().toArray();typeof n=="string"?t=$$1(n).get():n instanceof $$1&&(t=n.get())}else return[];if(t)return r.filter(function(o,s){return t.includes(a[s])})};_Api=function(n,e){if(!(this instanceof _Api))return new _Api(n,e);var t,r=[],a=function(o){var s=_toSettings(o);s&&r.push.apply(r,s)};if(Array.isArray(n))for(t=0;t<n.length;t++)a(n[t]);else a(n);this.context=r.length>1?_unique(r):r,_fnArrayApply(this,e),this.selector={rows:null,cols:null,opts:null},_Api.extend(this,this,__apiStruct)};DataTable.Api=_Api;$$1.extend(_Api.prototype,{any:function(){return this.count()!==0},context:[],count:function(){return this.flatten().length},each:function(n){for(var e=0,t=this.length;e<t;e++)n.call(this,this[e],e,this);return this},eq:function(n){var e=this.context;return e.length>n?new _Api(e[n],this[n]):null},filter:function(n){var e=__arrayProto.filter.call(this,n,this);return new _Api(this.context,e)},flatten:function(){var n=[];return new _Api(this.context,n.concat.apply(n,this.toArray()))},get:function(n){return this[n]},join:__arrayProto.join,includes:function(n){return this.indexOf(n)!==-1},indexOf:__arrayProto.indexOf,iterator:function(n,e,t,r){var a=[],o,s,l,u,f,d=this.context,p,v,y,x=this.selector;for(typeof n=="string"&&(r=t,t=e,e=n,n=!1),s=0,l=d.length;s<l;s++){var E=new _Api(d[s]);if(e==="table")o=t.call(E,d[s],s),o!==void 0&&a.push(o);else if(e==="columns"||e==="rows")o=t.call(E,d[s],this[s],s),o!==void 0&&a.push(o);else if(e==="every"||e==="column"||e==="column-rows"||e==="row"||e==="cell")for(v=this[s],e==="column-rows"&&(p=_selector_row_indexes(d[s],x.opts)),u=0,f=v.length;u<f;u++)y=v[u],e==="cell"?o=t.call(E,d[s],y.row,y.column,s,u):o=t.call(E,d[s],y,s,u,p),o!==void 0&&a.push(o)}if(a.length||r){var C=new _Api(d,n?a.concat.apply([],a):a),A=C.selector;return A.rows=x.rows,A.cols=x.cols,A.opts=x.opts,C}return this},lastIndexOf:__arrayProto.lastIndexOf,length:0,map:function(n){var e=__arrayProto.map.call(this,n,this);return new _Api(this.context,e)},pluck:function(n){var e=DataTable.util.get(n);return this.map(function(t){return e(t)})},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce,reduceRight:__arrayProto.reduceRight,reverse:__arrayProto.reverse,selector:null,shift:__arrayProto.shift,slice:function(){return new _Api(this.context,this)},sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function(){return __arrayProto.slice.call(this)},to$:function(){return $$1(this)},toJQuery:function(){return $$1(this)},unique:function(){return new _Api(this.context,_unique(this.toArray()))},unshift:__arrayProto.unshift});function _api_scope(n,e,t){return function(){var r=e.apply(n||this,arguments);return _Api.extend(r,r,t.methodExt),r}}function _api_find(n,e){for(var t=0,r=n.length;t<r;t++)if(n[t].name===e)return n[t];return null}window.__apiStruct=__apiStruct;_Api.extend=function(n,e,t){if(!(!t.length||!e||!(e instanceof _Api)&&!e.__dt_wrapper)){var r,a,o;for(r=0,a=t.length;r<a;r++)o=t[r],o.name!=="__proto__"&&(e[o.name]=o.type==="function"?_api_scope(n,o.val,o):o.type==="object"?{}:o.val,e[o.name].__dt_wrapper=!0,_Api.extend(n,e[o.name],o.propExt))}};_Api.register=_api_register=function(n,e){if(Array.isArray(n)){for(var t=0,r=n.length;t<r;t++)_Api.register(n[t],e);return}var a,o,s=n.split("."),l=__apiStruct,u,f;for(a=0,o=s.length;a<o;a++){f=s[a].indexOf("()")!==-1,u=f?s[a].replace("()",""):s[a];var d=_api_find(l,u);d||(d={name:u,val:{},methodExt:[],propExt:[],type:"object"},l.push(d)),a===o-1?(d.val=e,d.type=typeof e=="function"?"function":$$1.isPlainObject(e)?"object":"other"):l=f?d.methodExt:d.propExt}};_Api.registerPlural=_api_registerPlural=function(n,e,t){_Api.register(n,t),_Api.register(e,function(){var r=t.apply(this,arguments);return r===this?this:r instanceof _Api?r.length?Array.isArray(r[0])?new _Api(r.context,r[0]):r[0]:void 0:r})};var __table_selector=function(n,e){if(Array.isArray(n)){var t=[];return n.forEach(function(a){var o=__table_selector(a,e);_fnArrayApply(t,o)}),t.filter(function(a){return a})}if(typeof n=="number")return[e[n]];var r=e.map(function(a){return a.nTable});return $$1(r).filter(n).map(function(){var a=r.indexOf(this);return e[a]}).toArray()};_api_register("tables()",function(n){return n!=null?new _Api(__table_selector(n,this.context)):this});_api_register("table()",function(n){var e=this.tables(n),t=e.context;return t.length?new _Api(t[0]):e});[["nodes","node","nTable"],["body","body","nTBody"],["header","header","nTHead"],["footer","footer","nTFoot"]].forEach(function(n){_api_registerPlural("tables()."+n[0]+"()","table()."+n[1]+"()",function(){return this.iterator("table",function(e){return e[n[2]]},1)})});[["header","aoHeader"],["footer","aoFooter"]].forEach(function(n){_api_register("table()."+n[0]+".structure()",function(e){var t=this.columns(e).indexes().flatten().toArray(),r=this.context[0],a=_fnHeaderLayout(r,r[n[1]],t),o=t.slice().sort(function(s,l){return s-l});return a.map(function(s){return t.map(function(l){return s[o.indexOf(l)]})})})});_api_registerPlural("tables().containers()","table().container()",function(){return this.iterator("table",function(n){return n.nTableWrapper},1)});_api_register("tables().every()",function(n){var e=this;return this.iterator("table",function(t,r){n.call(e.table(r),r)})});_api_register("caption()",function(n,e){var t=this.context;if(n===void 0){var r=t[0].captionNode;return r&&t.length?r.innerHTML:null}return this.iterator("table",function(a){var o=$$1(a.nTable),s=$$1(a.captionNode),l=$$1(a.nTableWrapper);if(s.length||(s=$$1("<caption/>").html(n),a.captionNode=s[0],e||(o.prepend(s),e=s.css("caption-side"))),s.html(n),e&&(s.css("caption-side",e),s[0]._captionSide=e),l.find("div.dataTables_scroll").length){var u=e==="top"?"Head":"Foot";l.find("div.dataTables_scroll"+u+" table").prepend(s)}else o.prepend(s)},1)});_api_register("caption.node()",function(){var n=this.context;return n.length?n[0].captionNode:null});_api_register("draw()",function(n){return this.iterator("table",function(e){n==="page"?_fnDraw(e):(typeof n=="string"&&(n=n!=="full-hold"),_fnReDraw(e,n===!1))})});_api_register("page()",function(n){return n===void 0?this.page.info().page:this.iterator("table",function(e){_fnPageChange(e,n)})});_api_register("page.info()",function(){if(this.context.length!==0){var n=this.context[0],e=n._iDisplayStart,t=n.oFeatures.bPaginate?n._iDisplayLength:-1,r=n.fnRecordsDisplay(),a=t===-1;return{page:a?0:Math.floor(e/t),pages:a?1:Math.ceil(r/t),start:e,end:n.fnDisplayEnd(),length:t,recordsTotal:n.fnRecordsTotal(),recordsDisplay:r,serverSide:_fnDataSource(n)==="ssp"}}});_api_register("page.len()",function(n){return n===void 0?this.context.length!==0?this.context[0]._iDisplayLength:void 0:this.iterator("table",function(e){_fnLengthChange(e,n)})});var __reload=function(n,e,t){if(t){var r=new _Api(n);r.one("draw",function(){t(r.ajax.json())})}if(_fnDataSource(n)=="ssp")_fnReDraw(n,e);else{_fnProcessingDisplay(n,!0);var a=n.jqXHR;a&&a.readyState!==4&&a.abort(),_fnBuildAjax(n,{},function(o){_fnClearTable(n);for(var s=_fnAjaxDataSrc(n,o),l=0,u=s.length;l<u;l++)_fnAddData(n,s[l]);_fnReDraw(n,e),_fnInitComplete(n),_fnProcessingDisplay(n,!1)})}};_api_register("ajax.json()",function(){var n=this.context;if(n.length>0)return n[0].json});_api_register("ajax.params()",function(){var n=this.context;if(n.length>0)return n[0].oAjaxData});_api_register("ajax.reload()",function(n,e){return this.iterator("table",function(t){__reload(t,e===!1,n)})});_api_register("ajax.url()",function(n){var e=this.context;return n===void 0?e.length===0?void 0:(e=e[0],$$1.isPlainObject(e.ajax)?e.ajax.url:e.ajax):this.iterator("table",function(t){$$1.isPlainObject(t.ajax)?t.ajax.url=n:t.ajax=n})});_api_register("ajax.url().load()",function(n,e){return this.iterator("table",function(t){__reload(t,e===!1,n)})});var _selector_run=function(n,e,t,r,a){var o=[],s,l,u,f=typeof e;for((!e||f==="string"||f==="function"||e.length===void 0)&&(e=[e]),l=0,u=e.length;l<u;l++)s=t(typeof e[l]=="string"?e[l].trim():e[l]),s=s.filter(function(p){return p!=null}),s&&s.length&&(o=o.concat(s));var d=_ext.selector[n];if(d.length)for(l=0,u=d.length;l<u;l++)o=d[l](r,a,o);return _unique(o)},_selector_opts=function(n){return n||(n={}),n.filter&&n.search===void 0&&(n.search=n.filter),$$1.extend({columnOrder:"implied",search:"none",order:"current",page:"all"},n)},_selector_first=function(n){var e=new _Api(n.context[0]);return n.length&&e.push(n[0]),e.selector=n.selector,e.length&&e[0].length>1&&e[0].splice(1),e},_selector_row_indexes=function(n,e){var t,r,a,o=[],s=n.aiDisplay,l=n.aiDisplayMaster,u=e.search,f=e.order,d=e.page;if(_fnDataSource(n)=="ssp")return u==="removed"?[]:_range(0,l.length);if(d=="current")for(t=n._iDisplayStart,r=n.fnDisplayEnd();t<r;t++)o.push(s[t]);else if(f=="current"||f=="applied"){if(u=="none")o=l.slice();else if(u=="applied")o=s.slice();else if(u=="removed"){var p={};for(t=0,r=s.length;t<r;t++)p[s[t]]=null;l.forEach(function(y){Object.prototype.hasOwnProperty.call(p,y)||o.push(y)})}}else if(f=="index"||f=="original")for(t=0,r=n.aoData.length;t<r;t++)n.aoData[t]&&(u=="none"?o.push(t):(a=s.indexOf(t),(a===-1&&u=="removed"||a>=0&&u=="applied")&&o.push(t)));else if(typeof f=="number"){var v=_fnSort(n,f,"asc");if(u==="none")o=v;else for(t=0;t<v.length;t++)a=s.indexOf(v[t]),(a===-1&&u=="removed"||a>=0&&u=="applied")&&o.push(v[t])}return o},__row_selector=function(n,e,t){var r,a=function(s){var l=_intVal(s),u=n.aoData;if(l!==null&&!t)return[l];if(r||(r=_selector_row_indexes(n,t)),l!==null&&r.indexOf(l)!==-1)return[l];if(s==null||s==="")return r;if(typeof s=="function")return r.map(function(x){var E=u[x];return s(x,E._aData,E.nTr)?x:null});if(s.nodeName){var f=s._DT_RowIndex,d=s._DT_CellIndex;if(f!==void 0)return u[f]&&u[f].nTr===s?[f]:[];if(d)return u[d.row]&&u[d.row].nTr===s.parentNode?[d.row]:[];var p=$$1(s).closest("*[data-dt-row]");return p.length?[p.data("dt-row")]:[]}if(typeof s=="string"&&s.charAt(0)==="#"){var v=n.aIds[s.replace(/^#/,"")];if(v!==void 0)return[v.idx]}var y=_removeEmpty(_pluck_order(n.aoData,r,"nTr"));return $$1(y).filter(s).map(function(){return this._DT_RowIndex}).toArray()},o=_selector_run("row",e,a,n,t);return(t.order==="current"||t.order==="applied")&&_fnSortDisplay(n,o),o};_api_register("rows()",function(n,e){n===void 0?n="":$$1.isPlainObject(n)&&(e=n,n=""),e=_selector_opts(e);var t=this.iterator("table",function(r){return __row_selector(r,n,e)},1);return t.selector.rows=n,t.selector.opts=e,t});_api_register("rows().nodes()",function(){return this.iterator("row",function(n,e){return n.aoData[e].nTr||void 0},1)});_api_register("rows().data()",function(){return this.iterator(!0,"rows",function(n,e){return _pluck_order(n.aoData,e,"_aData")},1)});_api_registerPlural("rows().cache()","row().cache()",function(n){return this.iterator("row",function(e,t){var r=e.aoData[t];return n==="search"?r._aFilterData:r._aSortData},1)});_api_registerPlural("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(e,t){_fnInvalidate(e,t,n)})});_api_registerPlural("rows().indexes()","row().index()",function(){return this.iterator("row",function(n,e){return e},1)});_api_registerPlural("rows().ids()","row().id()",function(n){for(var e=[],t=this.context,r=0,a=t.length;r<a;r++)for(var o=0,s=this[r].length;o<s;o++){var l=t[r].rowIdFn(t[r].aoData[this[r][o]]._aData);e.push((n===!0?"#":"")+l)}return new _Api(t,e)});_api_registerPlural("rows().remove()","row().remove()",function(){return this.iterator("row",function(n,e){var t=n.aoData,r=t[e],a=n.aiDisplayMaster.indexOf(e);a!==-1&&n.aiDisplayMaster.splice(a,1),n._iRecordsDisplay>0&&n._iRecordsDisplay--,_fnLengthOverflow(n);var o=n.rowIdFn(r._aData);o!==void 0&&delete n.aIds[o],t[e]=null}),this});_api_register("rows.add()",function(n){var e=this.iterator("table",function(r){var a,o,s,l=[];for(o=0,s=n.length;o<s;o++)a=n[o],a.nodeName&&a.nodeName.toUpperCase()==="TR"?l.push(_fnAddTr(r,a)[0]):l.push(_fnAddData(r,a));return l},1),t=this.rows(-1);return t.pop(),_fnArrayApply(t,e),t});_api_register("row()",function(n,e){return _selector_first(this.rows(n,e))});_api_register("row().data()",function(n){var e=this.context;if(n===void 0)return e.length&&this.length&&this[0].length?e[0].aoData[this[0]]._aData:void 0;var t=e[0].aoData[this[0]];return t._aData=n,Array.isArray(n)&&t.nTr&&t.nTr.id&&_fnSetObjectDataFn(e[0].rowId)(n,t.nTr.id),_fnInvalidate(e[0],this[0],"data"),this});_api_register("row().node()",function(){var n=this.context;if(n.length&&this.length&&this[0].length){var e=n[0].aoData[this[0]];if(e&&e.nTr)return e.nTr}return null});_api_register("row.add()",function(n){n instanceof $$1&&n.length&&(n=n[0]);var e=this.iterator("table",function(t){return n.nodeName&&n.nodeName.toUpperCase()==="TR"?_fnAddTr(t,n)[0]:_fnAddData(t,n)});return this.row(e[0])});$$1(document).on("plugin-init.dt",function(n,e){var t=new _Api(e);t.on("stateSaveParams.DT",function(r,a,o){for(var s=a.rowIdFn,l=a.aiDisplayMaster,u=[],f=0;f<l.length;f++){var d=l[f],p=a.aoData[d];p._detailsShow&&u.push("#"+s(p._aData))}o.childRows=u}),t.on("stateLoaded.DT",function(r,a,o){__details_state_load(t,o)}),__details_state_load(t,t.state.loaded())});var __details_state_load=function(n,e){e&&e.childRows&&n.rows(e.childRows.map(function(t){return t.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g,"$1\\:")})).every(function(){_fnCallbackFire(n.settings()[0],null,"requestChild",[this])})},__details_add=function(n,e,t,r){var a=[],o=function(s,l){if(Array.isArray(s)||s instanceof $$1){for(var u=0,f=s.length;u<f;u++)o(s[u],l);return}if(s.nodeName&&s.nodeName.toLowerCase()==="tr")s.setAttribute("data-dt-row",e.idx),a.push(s);else{var d=$$1("<tr><td></td></tr>").attr("data-dt-row",e.idx).addClass(l);$$1("td",d).addClass(l).html(s)[0].colSpan=_fnVisibleColumns(n),a.push(d[0])}};o(t,r),e._details&&e._details.detach(),e._details=$$1(a),e._detailsShow&&e._details.insertAfter(e.nTr)},__details_state=DataTable.util.throttle(function(n){_fnSaveState(n[0])},500),__details_remove=function(n,e){var t=n.context;if(t.length){var r=t[0].aoData[e!==void 0?e:n[0]];r&&r._details&&(r._details.detach(),r._detailsShow=void 0,r._details=void 0,$$1(r.nTr).removeClass("dt-hasChild"),__details_state(t))}},__details_display=function(n,e){var t=n.context;if(t.length&&n.length){var r=t[0].aoData[n[0]];r._details&&(r._detailsShow=e,e?(r._details.insertAfter(r.nTr),$$1(r.nTr).addClass("dt-hasChild")):(r._details.detach(),$$1(r.nTr).removeClass("dt-hasChild")),_fnCallbackFire(t[0],null,"childRow",[e,n.row(n[0])]),__details_events(t[0]),__details_state(t))}},__details_events=function(n){var e=new _Api(n),t=".dt.DT_details",r="draw"+t,a="column-sizing"+t,o="destroy"+t,s=n.aoData;e.off(r+" "+a+" "+o),_pluck(s,"_details").length>0&&(e.on(r,function(l,u){n===u&&e.rows({page:"current"}).eq(0).each(function(f){var d=s[f];d._detailsShow&&d._details.insertAfter(d.nTr)})}),e.on(a,function(l,u){if(n===u)for(var f,d=_fnVisibleColumns(u),p=0,v=s.length;p<v;p++)f=s[p],f&&f._details&&f._details.each(function(){var y=$$1(this).children("td");y.length==1&&y.attr("colspan",d)})}),e.on(o,function(l,u){if(n===u)for(var f=0,d=s.length;f<d;f++)s[f]&&s[f]._details&&__details_remove(e,f)}))},_emp="",_child_obj=_emp+"row().child",_child_mth=_child_obj+"()";_api_register(_child_mth,function(n,e){var t=this.context;return n===void 0?t.length&&this.length&&t[0].aoData[this[0]]?t[0].aoData[this[0]]._details:void 0:(n===!0?this.child.show():n===!1?__details_remove(this):t.length&&this.length&&__details_add(t[0],t[0].aoData[this[0]],n,e),this)});_api_register([_child_obj+".show()",_child_mth+".show()"],function(){return __details_display(this,!0),this});_api_register([_child_obj+".hide()",_child_mth+".hide()"],function(){return __details_display(this,!1),this});_api_register([_child_obj+".remove()",_child_mth+".remove()"],function(){return __details_remove(this),this});_api_register(_child_obj+".isShown()",function(){var n=this.context;return n.length&&this.length&&n[0].aoData[this[0]]&&n[0].aoData[this[0]]._detailsShow||!1});var __re_column_selector=/^([^:]+)?:(name|title|visIdx|visible)$/,__columnData=function(n,e,t,r,a,o){for(var s=[],l=0,u=a.length;l<u;l++)s.push(_fnGetCellData(n,a[l],e,o));return s},__column_header=function(n,e,t){var r=n.aoHeader,a=n.titleRow,o=null;if(t!==void 0)o=t;else if(a===!0)o=0;else if(a===!1)o=r.length-1;else if(a!==null)o=a;else{for(var s=0;s<r.length;s++)r[s][e].unique&&$$1("span.dt-column-title",r[s][e].cell).text()&&(o=s);o===null&&(o=0)}return r[o][e].cell},__column_header_cells=function(n){for(var e=[],t=0;t<n.length;t++)for(var r=0;r<n[t].length;r++){var a=n[t][r].cell;e.includes(a)||e.push(a)}return e},__column_selector=function(n,e,t){var r=n.aoColumns,a,o,s=__column_header_cells(n.aoHeader),l=function(f){var d=_intVal(f);if(f==="")return _range(r.length);if(d!==null)return[d>=0?d:r.length+d];if(typeof f=="function"){var p=_selector_row_indexes(n,t);return r.map(function(A,M){return f(M,__columnData(n,M,0,0,p),__column_header(n,M))?M:null})}var v=typeof f=="string"?f.match(__re_column_selector):"";if(v)switch(v[2]){case"visIdx":case"visible":if(v[1]&&v[1].match(/^\d+$/)){var y=parseInt(v[1],10);if(y<0){var x=r.map(function(A,M){return A.bVisible?M:null});return[x[x.length+y]]}return[_fnVisibleToColumnIndex(n,y)]}return r.map(function(A,M){return A.bVisible?v[1]?$$1(s[M]).filter(v[1]).length>0?M:null:M:null});case"name":return a||(a=_pluck(r,"sName")),a.map(function(A,M){return A===v[1]?M:null});case"title":return o||(o=_pluck(r,"sTitle")),o.map(function(A,M){return A===v[1]?M:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];var E=$$1(s).filter(f).map(function(){return _fnColumnsFromHeader(this)}).toArray().sort(function(A,M){return A-M});if(E.length||!f.nodeName)return E;var C=$$1(f).closest("*[data-dt-column]");return C.length?[C.data("dt-column")]:[]},u=_selector_run("column",e,l,n,t);return t.columnOrder&&t.columnOrder==="index"?u.sort(function(f,d){return f-d}):u},__setColumnVis=function(n,e,t){var r=n.aoColumns,a=r[e],o=n.aoData,s,l,u,f;if(t===void 0)return a.bVisible;if(a.bVisible===t)return!1;if(t){var d=_pluck(r,"bVisible").indexOf(!0,e+1);for(l=0,u=o.length;l<u;l++)o[l]&&(f=o[l].nTr,s=o[l].anCells,f&&f.insertBefore(s[e],s[d]||null))}else $$1(_pluck(n.aoData,"anCells",e)).detach();return a.bVisible=t,_colGroup(n),!0};_api_register("columns()",function(n,e){n===void 0?n="":$$1.isPlainObject(n)&&(e=n,n=""),e=_selector_opts(e);var t=this.iterator("table",function(r){return __column_selector(r,n,e)},1);return t.selector.cols=n,t.selector.opts=e,t});_api_registerPlural("columns().header()","column().header()",function(n){return this.iterator("column",function(e,t){return __column_header(e,t,n)},1)});_api_registerPlural("columns().footer()","column().footer()",function(n){return this.iterator("column",function(e,t){var r=e.aoFooter;return r.length?e.aoFooter[n!==void 0?n:0][t].cell:null},1)});_api_registerPlural("columns().data()","column().data()",function(){return this.iterator("column-rows",__columnData,1)});_api_registerPlural("columns().render()","column().render()",function(n){return this.iterator("column-rows",function(e,t,r,a,o){return __columnData(e,t,r,a,o,n)},1)});_api_registerPlural("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(n,e){return n.aoColumns[e].mData},1)});_api_registerPlural("columns().cache()","column().cache()",function(n){return this.iterator("column-rows",function(e,t,r,a,o){return _pluck_order(e.aoData,o,n==="search"?"_aFilterData":"_aSortData",t)},1)});_api_registerPlural("columns().init()","column().init()",function(){return this.iterator("column",function(n,e){return n.aoColumns[e]},1)});_api_registerPlural("columns().names()","column().name()",function(){return this.iterator("column",function(n,e){return n.aoColumns[e].sName},1)});_api_registerPlural("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(n,e,t,r,a){return _pluck_order(n.aoData,a,"anCells",e)},1)});_api_registerPlural("columns().titles()","column().title()",function(n,e){return this.iterator("column",function(t,r){typeof n=="number"&&(e=n,n=void 0);var a=$$1("span.dt-column-title",this.column(r).header(e));return n!==void 0?(a.html(n),this):a.html()},1)});_api_registerPlural("columns().types()","column().type()",function(){return this.iterator("column",function(n,e){var t=n.aoColumns[e],r=t.sType;return r||(_fnColumnTypes(n),r=t.sType),r},1)});_api_registerPlural("columns().visible()","column().visible()",function(n,e){var t=this,r=[],a=this.iterator("column",function(o,s){if(n===void 0)return o.aoColumns[s].bVisible;__setColumnVis(o,s,n)&&r.push(s)});return n!==void 0&&this.iterator("table",function(o){_fnDrawHead(o,o.aoHeader),_fnDrawHead(o,o.aoFooter),o.aiDisplay.length||$$1(o.nTBody).find("td[colspan]").attr("colspan",_fnVisibleColumns(o)),_fnSaveState(o),t.iterator("column",function(s,l){r.includes(l)&&_fnCallbackFire(s,null,"column-visibility",[s,l,n,e])}),r.length&&(e===void 0||e)&&t.columns.adjust()}),a});_api_registerPlural("columns().widths()","column().width()",function(){var n=this.columns(":visible").count(),e=$$1("<tr>").html("<td>"+Array(n).join("</td><td>")+"</td>");$$1(this.table().body()).append(e);var t=e.children().map(function(){return $$1(this).outerWidth()});return e.remove(),this.iterator("column",function(r,a){var o=_fnColumnIndexToVisible(r,a);return o!==null?t[o]:0},1)});_api_registerPlural("columns().indexes()","column().index()",function(n){return this.iterator("column",function(e,t){return n==="visible"?_fnColumnIndexToVisible(e,t):t},1)});_api_register("columns.adjust()",function(){return this.iterator("table",function(n){n.containerWidth=-1,_fnAdjustColumnSizing(n)},1)});_api_register("column.index()",function(n,e){if(this.context.length!==0){var t=this.context[0];if(n==="fromVisible"||n==="toData")return _fnVisibleToColumnIndex(t,e);if(n==="fromData"||n==="toVisible")return _fnColumnIndexToVisible(t,e)}});_api_register("column()",function(n,e){return _selector_first(this.columns(n,e))});var __cell_selector=function(n,e,t){var r=n.aoData,a=_selector_row_indexes(n,t),o=_removeEmpty(_pluck_order(r,a,"anCells")),s=$$1(_flatten([],o)),l,u=n.aoColumns.length,f,d,p,v,y,x,E=function(C){var A=typeof C=="function";if(C==null||A){for(f=[],d=0,p=a.length;d<p;d++)for(l=a[d],v=0;v<u;v++)y={row:l,column:v},A?(x=r[l],C(y,_fnGetCellData(n,l,v),x.anCells?x.anCells[v]:null)&&f.push(y)):f.push(y);return f}if($$1.isPlainObject(C))return C.column!==void 0&&C.row!==void 0&&a.indexOf(C.row)!==-1?[C]:[];var M=s.filter(C).map(function(V,R){return{row:R._DT_CellIndex.row,column:R._DT_CellIndex.column}}).toArray();return M.length||!C.nodeName?M:(x=$$1(C).closest("*[data-dt-row]"),x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[])};return _selector_run("cell",e,E,n,t)};_api_register("cells()",function(n,e,t){if($$1.isPlainObject(n)&&(n.row===void 0?(t=n,n=null):(t=e,e=null)),$$1.isPlainObject(e)&&(t=e,e=null),e==null)return this.iterator("table",function(v){return __cell_selector(v,n,_selector_opts(t))});var r=t?{page:t.page,order:t.order,search:t.search}:{},a=this.columns(e,r),o=this.rows(n,r),s,l,u,f,d=this.iterator("table",function(v,y){var x=[];for(s=0,l=o[y].length;s<l;s++)for(u=0,f=a[y].length;u<f;u++)x.push({row:o[y][s],column:a[y][u]});return x},1),p=t&&t.selected?this.cells(d,t):d;return $$1.extend(p.selector,{cols:e,rows:n,opts:t}),p});_api_registerPlural("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(n,e,t){var r=n.aoData[e];return r&&r.anCells?r.anCells[t]:void 0},1)});_api_register("cells().data()",function(){return this.iterator("cell",function(n,e,t){return _fnGetCellData(n,e,t)},1)});_api_registerPlural("cells().cache()","cell().cache()",function(n){return n=n==="search"?"_aFilterData":"_aSortData",this.iterator("cell",function(e,t,r){return e.aoData[t][n][r]},1)});_api_registerPlural("cells().render()","cell().render()",function(n){return this.iterator("cell",function(e,t,r){return _fnGetCellData(e,t,r,n)},1)});_api_registerPlural("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(n,e,t){return{row:e,column:t,columnVisible:_fnColumnIndexToVisible(n,t)}},1)});_api_registerPlural("cells().invalidate()","cell().invalidate()",function(n){return this.iterator("cell",function(e,t,r){_fnInvalidate(e,t,n,r)})});_api_register("cell()",function(n,e,t){return _selector_first(this.cells(n,e,t))});_api_register("cell().data()",function(n){var e=this.context,t=this[0];return n===void 0?e.length&&t.length?_fnGetCellData(e[0],t[0].row,t[0].column):void 0:(_fnSetCellData(e[0],t[0].row,t[0].column,n),_fnInvalidate(e[0],t[0].row,"data",t[0].column),this)});_api_register("order()",function(n,e){var t=this.context,r=Array.prototype.slice.call(arguments);return n===void 0?t.length!==0?t[0].aaSorting:void 0:(typeof n=="number"?n=[[n,e]]:r.length>1&&(n=r),this.iterator("table",function(a){var o=[];_fnSortResolve(a,o,n),a.aaSorting=o}))});_api_register("order.listener()",function(n,e,t){return this.iterator("table",function(r){_fnSortAttachListener(r,n,{},e,t)})});_api_register("order.fixed()",function(n){if(!n){var e=this.context,t=e.length?e[0].aaSortingFixed:void 0;return Array.isArray(t)?{pre:t}:t}return this.iterator("table",function(r){r.aaSortingFixed=$$1.extend(!0,{},n)})});_api_register(["columns().order()","column().order()"],function(n){var e=this;return n?this.iterator("table",function(t,r){t.aaSorting=e[r].map(function(a){return[a,n]})}):this.iterator("column",function(t,r){for(var a=_fnSortFlatten(t),o=0,s=a.length;o<s;o++)if(a[o].col===r)return a[o].dir;return null},1)});_api_registerPlural("columns().orderable()","column().orderable()",function(n){return this.iterator("column",function(e,t){var r=e.aoColumns[t];return n?r.asSorting:r.bSortable},1)});_api_register("processing()",function(n){return this.iterator("table",function(e){_fnProcessingDisplay(e,n)})});_api_register("search()",function(n,e,t,r){var a=this.context;return n===void 0?a.length!==0?a[0].oPreviousSearch.search:void 0:this.iterator("table",function(o){o.oFeatures.bFilter&&(typeof e=="object"?_fnFilterComplete(o,$$1.extend(o.oPreviousSearch,e,{search:n})):_fnFilterComplete(o,$$1.extend(o.oPreviousSearch,{search:n,regex:e===null?!1:e,smart:t===null?!0:t,caseInsensitive:r===null?!0:r})))})});_api_register("search.fixed()",function(n,e){var t=this.iterator(!0,"table",function(r){var a=r.searchFixed;if(n){if(e===void 0)return a[n];e===null?delete a[n]:a[n]=e}else return Object.keys(a);return this});return n!==void 0&&e===void 0?t[0]:t});_api_registerPlural("columns().search()","column().search()",function(n,e,t,r){return this.iterator("column",function(a,o){var s=a.aoPreSearchCols;if(n===void 0)return s[o].search;a.oFeatures.bFilter&&(typeof e=="object"?$$1.extend(s[o],e,{search:n}):$$1.extend(s[o],{search:n,regex:e===null?!1:e,smart:t===null?!0:t,caseInsensitive:r===null?!0:r}),_fnFilterComplete(a,a.oPreviousSearch))})});_api_register(["columns().search.fixed()","column().search.fixed()"],function(n,e){var t=this.iterator(!0,"column",function(r,a){var o=r.aoColumns[a].searchFixed;if(n){if(e===void 0)return o[n]||null;e===null?delete o[n]:o[n]=e}else return Object.keys(o);return this});return n!==void 0&&e===void 0?t[0]:t});_api_register("state()",function(n,e){if(!n)return this.context.length?this.context[0].oSavedState:null;var t=$$1.extend(!0,{},n);return this.iterator("table",function(r){e!==!1&&(t.time=+new Date+100),_fnImplementState(r,t,function(){})})});_api_register("state.clear()",function(){return this.iterator("table",function(n){n.fnStateSaveCallback.call(n.oInstance,n,{})})});_api_register("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});_api_register("state.save()",function(){return this.iterator("table",function(n){_fnSaveState(n)})});var __bootstrap,__foundation;DataTable.use=function(n,e){var t=typeof n=="string"?e:n,r=typeof e=="string"?e:n;if(t===void 0&&typeof r=="string")switch(r){case"lib":case"jq":return $$1;case"win":return window;case"datetime":return DataTable.DateTime;case"luxon":return __luxon;case"moment":return __moment;case"bootstrap":return __bootstrap||window.bootstrap;case"foundation":return __foundation||window.Foundation;default:return null}r==="lib"||r==="jq"||t&&t.fn&&t.fn.jquery?$$1=t:r==="win"||t&&t.document?(window=t,document=t.document):r==="datetime"||t&&t.type==="DateTime"?DataTable.DateTime=t:r==="luxon"||t&&t.FixedOffsetZone?__luxon=t:r==="moment"||t&&t.isMoment?__moment=t:r==="bootstrap"||t&&t.Modal&&t.Modal.NAME==="modal"?__bootstrap=t:(r==="foundation"||t&&t.Reveal)&&(__foundation=t)};DataTable.factory=function(n,e){var t=!1;return n&&n.document&&(window=n,document=n.document),e&&e.fn&&e.fn.jquery&&($$1=e,t=!0),t};DataTable.versionCheck=function(n,e){for(var t=e?e.split("."):DataTable.version.split("."),r=n.split("."),a,o,s=0,l=r.length;s<l;s++)if(a=parseInt(t[s],10)||0,o=parseInt(r[s],10)||0,a!==o)return a>o;return!0};DataTable.isDataTable=function(n){var e=$$1(n).get(0),t=!1;return n instanceof DataTable.Api?!0:($$1.each(DataTable.settings,function(r,a){var o=a.nScrollHead?$$1("table",a.nScrollHead)[0]:null,s=a.nScrollFoot?$$1("table",a.nScrollFoot)[0]:null;(a.nTable===e||o===e||s===e)&&(t=!0)}),t)};DataTable.tables=function(n){var e=!1;$$1.isPlainObject(n)&&(e=n.api,n=n.visible);var t=DataTable.settings.filter(function(r){return!!(!n||n&&$$1(r.nTable).is(":visible"))}).map(function(r){return r.nTable});return e?new _Api(t):t};DataTable.camelToHungarian=_fnCamelToHungarian;_api_register("$()",function(n,e){var t=this.rows(e).nodes(),r=$$1(t);return $$1([].concat(r.filter(n).toArray(),r.find(n).toArray()))});$$1.each(["on","one","off"],function(n,e){_api_register(e+"()",function(){var t=Array.prototype.slice.call(arguments);t[0]=t[0].split(/\s/).map(function(a){return a.match(/\.dt\b/)?a:a+".dt"}).join(" ");var r=$$1(this.tables().nodes());return r[e].apply(r,t),this})});_api_register("clear()",function(){return this.iterator("table",function(n){_fnClearTable(n)})});_api_register("error()",function(n){return this.iterator("table",function(e){_fnLog(e,0,n)})});_api_register("settings()",function(){return new _Api(this.context,this.context)});_api_register("init()",function(){var n=this.context;return n.length?n[0].oInit:null});_api_register("data()",function(){return this.iterator("table",function(n){return _pluck(n.aoData,"_aData")}).flatten()});_api_register("trigger()",function(n,e,t){return this.iterator("table",function(r){return _fnCallbackFire(r,null,n,e,t)}).flatten()});_api_register("ready()",function(n){var e=this.context;return n?this.tables().every(function(){var t=this;this.context[0]._bInitComplete?n.call(t):this.on("init.dt.DT",function(){n.call(t)})}):e.length?e[0]._bInitComplete||!1:null});_api_register("destroy()",function(n){return n=n||!1,this.iterator("table",function(e){var t=e.oClasses,r=e.nTable,a=e.nTBody,o=e.nTHead,s=e.nTFoot,l=$$1(r),u=$$1(a),f=$$1(e.nTableWrapper),d=e.aoData.map(function(C){return C?C.nTr:null}),p=t.order;e.bDestroying=!0,_fnCallbackFire(e,"aoDestroyCallback","destroy",[e],!0),n||new _Api(e).columns().visible(!0),e.resizeObserver&&e.resizeObserver.disconnect(),f.off(".DT").find(":not(tbody *)").off(".DT"),$$1(window).off(".DT-"+e.sInstance),r!=o.parentNode&&(l.children("thead").detach(),l.append(o)),s&&r!=s.parentNode&&(l.children("tfoot").detach(),l.append(s)),cleanHeader(o,"header"),cleanHeader(s,"footer"),e.colgroup.remove(),e.aaSorting=[],e.aaSortingFixed=[],_fnSortingClasses(e),$$1(l).find("th, td").removeClass($$1.map(DataTable.ext.type.className,function(C){return C}).join(" ")),$$1("th, td",o).removeClass(p.none+" "+p.canAsc+" "+p.canDesc+" "+p.isAsc+" "+p.isDesc).css("width","").removeAttr("aria-sort"),u.children().detach(),u.append(d);var v=e.nTableWrapper.parentNode,y=e.nTableWrapper.nextSibling,x=n?"remove":"detach";l[x](),f[x](),!n&&v&&(v.insertBefore(r,y),l.css("width",e.sDestroyWidth).removeClass(t.table));var E=DataTable.settings.indexOf(e);E!==-1&&DataTable.settings.splice(E,1)})});$$1.each(["column","row","cell"],function(n,e){_api_register(e+"s().every()",function(t){var r=this.selector.opts,a=this,o,s=0;return this.iterator("every",function(l,u,f){o=a[e](u,r),e==="cell"?t.call(o,o[0][0].row,o[0][0].column,f,s):t.call(o,u,f,s),s++})})});_api_register("i18n()",function(n,e,t){var r=this.context[0],a=_fnGetObjectDataFn(n)(r.oLanguage);return a===void 0&&(a=e),$$1.isPlainObject(a)&&(a=t!==void 0&&a[t]!==void 0?a[t]:t===!1?a:a._),typeof a=="string"?a.replace("%d",t):a});function cleanHeader(n,e){$$1(n).find("span.dt-column-order").remove(),$$1(n).find("span.dt-column-title").each(function(){var t=$$1(this).html();$$1(this).parent().parent().append(t),$$1(this).remove()}),$$1(n).find("div.dt-column-"+e).remove(),$$1("th, td",n).removeAttr("data-dt-column")}DataTable.version="2.3.5";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={caseInsensitive:!0,search:"",regex:!1,smart:!0,return:!1};DataTable.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,src:null,idx:-1,displayData:null};DataTable.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null,wideStrings:null,searchFixed:null};DataTable.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],bAutoWidth:!0,bDeferRender:!0,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:null,titleRow:null,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnStateLoadCallback:function(n){try{return JSON.parse((n.iStateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+n.sInstance+"_"+location.pathname))}catch{return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(n,e){try{(n.iStateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+n.sInstance+"_"+location.pathname,JSON.stringify(e))}catch{}},fnStateSaveParams:null,iStateDuration:7200,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{orderable:": Activate to sort",orderableReverse:": Activate to invert sorting",orderableRemove:": Activate to remove sorting",paginate:{first:"First",last:"Last",next:"Next",previous:"Previous",number:""}},oPaginate:{sFirst:"«",sLast:"»",sNext:"›",sPrevious:"‹"},entries:{_:"entries",1:"entry"},lengthLabels:{"-1":"All"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",sInfoEmpty:"Showing 0 to 0 of 0 _ENTRIES-TOTAL_",sInfoFiltered:"(filtered from _MAX_ total _ENTRIES-MAX_)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"_MENU_ _ENTRIES_ per page",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},orderDescReverse:!0,oSearch:$$1.extend({},DataTable.models.oSearch),layout:{topStart:"pageLength",topEnd:"search",bottomStart:"info",bottomEnd:"paging"},sDom:null,searchDelay:null,sPaginationType:"",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId",caption:null,iDeferLoading:null,on:null};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={aDataSort:null,iDataSort:-1,ariaTitle:"",asSorting:["asc","desc",""],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:!0,bLengthChange:!0,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollbarLeft:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},searchFixed:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",pagingControls:0,iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,bAjaxDataGet:!0,jqXHR:null,json:void 0,oAjaxData:void 0,sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return _fnDataSource(this)=="ssp"?this._iRecordsTotal*1:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return _fnDataSource(this)=="ssp"?this._iRecordsDisplay*1:this.aiDisplay.length},fnDisplayEnd:function(){var n=this._iDisplayLength,e=this._iDisplayStart,t=e+n,r=this.aiDisplay.length,a=this.oFeatures,o=a.bPaginate;return a.bServerSide?o===!1||n===-1?e+r:Math.min(e+n,this._iRecordsDisplay):!o||t>r||n===-1?r:t},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null,caption:"",captionNode:null,colgroup:null,deferLoading:null,typeDetect:!0,resizeObserver:null,containerWidth:-1,orderDescReverse:null,orderIndicators:!0,orderHandler:!0,titleRow:null};var extPagination=DataTable.ext.pager;$$1.extend(extPagination,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(){return["numbers"]},simple_numbers:function(){return["previous","numbers","next"]},full_numbers:function(){return["first","previous","numbers","next","last"]},first_last:function(){return["first","last"]},first_last_numbers:function(){return["first","numbers","last"]},_numbers:_pagingNumbers,numbers_length:7});$$1.extend(!0,DataTable.ext.renderer,{pagingButton:{_:function(n,e,t,r,a){var o=n.oClasses.paging,s=[o.button],l;return r&&s.push(o.active),a&&s.push(o.disabled),e==="ellipsis"?l=$$1('<span class="ellipsis"></span>').html(t)[0]:l=$$1("<button>",{class:s.join(" "),role:"link",type:"button"}).html(t),{display:l,clicker:l}}},pagingContainer:{_:function(n,e){return e}}});var _filterString=function(n,e){return function(t){return _empty(t)||typeof t!="string"||(t=t.replace(_re_new_lines," "),n&&(t=_stripHtml(t)),t=_normalize(t,!1)),t}};function __mld(n,e,t,r,a){return __moment?n[e](a):__luxon?n[t](a):r?n[r](a):n}var __mlWarning=!1,__luxon,__moment;function resolveWindowLibs(){window.luxon&&!__luxon&&(__luxon=window.luxon),window.moment&&!__moment&&(__moment=window.moment)}function __mldObj(n,e,t){var r;if(resolveWindowLibs(),__moment){if(r=__moment.utc(n,e,t,!0),!r.isValid())return null}else if(__luxon){if(r=e&&typeof n=="string"?__luxon.DateTime.fromFormat(n,e):__luxon.DateTime.fromISO(n),!r.isValid)return null;r=r.setLocale(t)}else e?(__mlWarning||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),__mlWarning=!0):r=new Date(n);return r}function __mlHelper(n){return function(e,t,r,a){arguments.length===0?(r="en",t=null,e=null):arguments.length===1?(r="en",t=e,e=null):arguments.length===2&&(r=t,t=e,e=null);var o="datetime"+(t?"-"+t:"");return DataTable.ext.type.order[o+"-pre"]||DataTable.type(o,{detect:function(s){return s===o?o:!1},order:{pre:function(s){return s.valueOf()}},className:"dt-right"}),function(s,l){if(s==null)if(a==="--now"){var u=new Date;s=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds()))}else s="";if(l==="type")return o;if(s==="")return l!=="sort"?"":__mldObj("0000-01-01 00:00:00",null,r);if(t!==null&&e===t&&l!=="sort"&&l!=="type"&&!(s instanceof Date))return s;var f=__mldObj(s,e,r);if(f===null)return s;if(l==="sort")return f;var d=t===null?__mld(f,"toDate","toJSDate","")[n](navigator.language,{timeZone:"UTC"}):__mld(f,"format","toFormat","toISOString",t);return l==="display"?_escapeHtml(d):d}}}var __thousands=",",__decimal=".";if(window.Intl!==void 0)try{for(var num=new Intl.NumberFormat().formatToParts(100000.1),i=0;i<num.length;i++)num[i].type==="group"?__thousands=num[i].value:num[i].type==="decimal"&&(__decimal=num[i].value)}catch{}DataTable.datetime=function(n,e){var t="datetime-"+n;e||(e="en"),DataTable.ext.type.order[t]||DataTable.type(t,{detect:function(r){var a=__mldObj(r,n,e);return r===""||a?t:!1},order:{pre:function(r){return __mldObj(r,n,e)||0}},className:"dt-right"})};DataTable.render={date:__mlHelper("toLocaleDateString"),datetime:__mlHelper("toLocaleString"),time:__mlHelper("toLocaleTimeString"),number:function(n,e,t,r,a){return n==null&&(n=__thousands),e==null&&(e=__decimal),{display:function(o){if(typeof o!="number"&&typeof o!="string"||o===""||o===null)return o;var s=o<0?"-":"",l=parseFloat(o),u=Math.abs(l);if(u>=1e11||u<1e-4&&u!==0){var f=l.toExponential(t).split(/e\+?/);return f[0]+" x 10<sup>"+f[1]+"</sup>"}if(isNaN(l))return _escapeHtml(o);l=l.toFixed(t),o=Math.abs(l);var d=parseInt(o,10),p=t?e+(o-d).toFixed(t).substring(2):"";return d===0&&parseFloat(p)===0&&(s=""),s+(r||"")+d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,n)+p+(a||"")}}},text:function(){return{display:_escapeHtml,filter:_escapeHtml}}};var _extTypes=DataTable.ext.type;DataTable.type=function(n,e,t){if(!e)return{className:_extTypes.className[n],detect:_extTypes.detect.find(function(s){return s._name===n}),order:{pre:_extTypes.order[n+"-pre"],asc:_extTypes.order[n+"-asc"],desc:_extTypes.order[n+"-desc"]},render:_extTypes.render[n],search:_extTypes.search[n]};var r=function(s,l){_extTypes[s][n]=l},a=function(s){Object.defineProperty(s,"_name",{value:n});var l=_extTypes.detect.findIndex(function(u){return u._name===n});l===-1?_extTypes.detect.unshift(s):_extTypes.detect.splice(l,1,s)},o=function(s){_extTypes.order[n+"-pre"]=s.pre,_extTypes.order[n+"-asc"]=s.asc,_extTypes.order[n+"-desc"]=s.desc};t===void 0&&(t=e,e=null),e==="className"?r("className",t):e==="detect"?a(t):e==="order"?o(t):e==="render"?r("render",t):e==="search"?r("search",t):e||(t.className&&r("className",t.className),t.detect!==void 0&&a(t.detect),t.order&&o(t.order),t.render!==void 0&&r("render",t.render),t.search!==void 0&&r("search",t.search))};DataTable.types=function(){return _extTypes.detect.map(function(n){return n._name})};var __diacriticSort=function(n,e){return n=n!=null?n.toString().toLowerCase():"",e=e!=null?e.toString().toLowerCase():"",n.localeCompare(e,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0})},__diacriticHtmlSort=function(n,e){return n=_stripHtml(n),e=_stripHtml(e),__diacriticSort(n,e)};DataTable.type("string",{detect:function(){return"string"},order:{pre:function(n){return _empty(n)&&typeof n!="boolean"?"":typeof n=="string"?n.toLowerCase():n.toString?n.toString():""}},search:_filterString(!1)});DataTable.type("string-utf8",{detect:{allOf:function(n){return!0},oneOf:function(n){return!_empty(n)&&navigator.languages&&typeof n=="string"&&n.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticSort,desc:function(n,e){return __diacriticSort(n,e)*-1}},search:_filterString(!1)});DataTable.type("html",{detect:{allOf:function(n){return _empty(n)||typeof n=="string"&&n.indexOf("<")!==-1},oneOf:function(n){return!_empty(n)&&typeof n=="string"&&n.indexOf("<")!==-1}},order:{pre:function(n){return _empty(n)?"":n.replace?_stripHtml(n).trim().toLowerCase():n+""}},search:_filterString(!0)});DataTable.type("html-utf8",{detect:{allOf:function(n){return _empty(n)||typeof n=="string"&&n.indexOf("<")!==-1},oneOf:function(n){return navigator.languages&&!_empty(n)&&typeof n=="string"&&n.indexOf("<")!==-1&&typeof n=="string"&&n.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticHtmlSort,desc:function(n,e){return __diacriticHtmlSort(n,e)*-1}},search:_filterString(!0)});DataTable.type("date",{className:"dt-type-date",detect:{allOf:function(n){if(n&&!(n instanceof Date)&&!_re_date.test(n))return null;var e=Date.parse(n);return e!==null&&!isNaN(e)||_empty(n)},oneOf:function(n){return n instanceof Date||typeof n=="string"&&_re_date.test(n)}},order:{pre:function(n){var e=Date.parse(n);return isNaN(e)?-1/0:e}}});DataTable.type("html-num-fmt",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.oLanguage.sDecimal;return _htmlNumeric(n,t,!0,!1)},oneOf:function(n,e){var t=e.oLanguage.sDecimal;return _htmlNumeric(n,t,!0,!1)}},order:{pre:function(n,e){var t=e.oLanguage.sDecimal;return __numericReplace(n,t,_re_html,_re_formatted_numeric)}},search:_filterString(!0)});DataTable.type("html-num",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.oLanguage.sDecimal;return _htmlNumeric(n,t,!1,!0)},oneOf:function(n,e){var t=e.oLanguage.sDecimal;return _htmlNumeric(n,t,!1,!1)}},order:{pre:function(n,e){var t=e.oLanguage.sDecimal;return __numericReplace(n,t,_re_html)}},search:_filterString(!0)});DataTable.type("num-fmt",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.oLanguage.sDecimal;return _isNumber(n,t,!0,!0)},oneOf:function(n,e){var t=e.oLanguage.sDecimal;return _isNumber(n,t,!0,!1)}},order:{pre:function(n,e){var t=e.oLanguage.sDecimal;return __numericReplace(n,t,_re_formatted_numeric)}}});DataTable.type("num",{className:"dt-type-numeric",detect:{allOf:function(n,e){var t=e.oLanguage.sDecimal;return _isNumber(n,t,!1,!0)},oneOf:function(n,e){var t=e.oLanguage.sDecimal;return _isNumber(n,t,!1,!1)}},order:{pre:function(n,e){var t=e.oLanguage.sDecimal;return __numericReplace(n,t)}}});var __numericReplace=function(n,e,t,r){if(n!==0&&(!n||n==="-"))return-1/0;var a=typeof n;return a==="number"||a==="bigint"?n:(e&&(n=_numToDecimal(n,e)),n.replace&&(t&&(n=n.replace(t,"")),r&&(n=n.replace(r,""))),n*1)};$$1.extend(!0,DataTable.ext.renderer,{footer:{_:function(n,e,t){e.addClass(t.tfoot.cell)}},header:{_:function(n,e,t){e.addClass(t.thead.cell),n.oFeatures.bSort||e.addClass(t.order.none);var r=n.titleRow,a=e.closest("thead").find("tr"),o=e.parent().index();e.attr("data-dt-order")==="disable"||e.parent().attr("data-dt-order")==="disable"||r===!0&&o!==0||r===!1&&o!==a.length-1||typeof r=="number"&&o!==r||$$1(n.nTable).on("order.dt.DT column-visibility.dt.DT",function(s,l,u){if(n===l){var f=l.sortDetails;if(f){var d=_pluck(f,"col");if(!(s.type==="column-visibility"&&!d.includes(u))){var p,v=t.order,y=l.api.columns(e),x=n.aoColumns[y.flatten()[0]],E=y.orderable().includes(!0),C="",A=y.indexes(),M=y.orderable(!0).flatten(),V=n.iTabIndex,R=l.orderHandler&&E;e.removeClass(v.isAsc+" "+v.isDesc).toggleClass(v.none,!E).toggleClass(v.canAsc,R&&M.includes("asc")).toggleClass(v.canDesc,R&&M.includes("desc"));var q=!0;for(p=0;p<A.length;p++)d.includes(A[p])||(q=!1);if(q){var Q=y.order();e.addClass(Q.includes("asc")?v.isAsc:""+Q.includes("desc")?v.isDesc:"")}var m=-1;for(p=0;p<d.length;p++)if(n.aoColumns[d[p]].bVisible){m=d[p];break}if(A[0]==m){var ne=f[0],re=x.asSorting;e.attr("aria-sort",ne.dir==="asc"?"ascending":"descending"),C=re[ne.index+1]?"Reverse":"Remove"}else e.removeAttr("aria-sort");if(E){var ge=e.find(".dt-column-order");ge.attr("role","button").attr("aria-label",E?x.ariaTitle+l.api.i18n("oAria.orderable"+C):x.ariaTitle),V!==-1&&ge.attr("tabindex",V)}}}}})}},layout:{_:function(n,e,t){var r=n.oClasses.layout,a=$$1("<div/>").attr("id",t.id||null).addClass(t.className||r.row).appendTo(e);DataTable.ext.renderer.layout._forLayoutRow(t,function(o,s){if(!(o==="id"||o==="className")){var l="";s.table&&(a.addClass(r.tableRow),l+=r.tableCell+" "),o==="start"?l+=r.start:o==="end"?l+=r.end:l+=r.full,$$1("<div/>").attr({id:s.id||null,class:s.className?s.className:r.cell+" "+l}).append(s.contents).appendTo(a)}})},_forLayoutRow:function(n,e){var t=function(r){switch(r){case"":return 0;case"start":return 1;case"end":return 2;default:return 3}};Object.keys(n).sort(function(r,a){return t(r)-t(a)}).forEach(function(r){e(r,n[r])})}}});DataTable.feature={};DataTable.feature.register=function(n,e,t){DataTable.ext.features[n]=e,t&&_ext.feature.push({cFeature:t,fnInit:e})};function _divProp(n,e,t){t&&(n[e]=t)}DataTable.feature.register("div",function(n,e){var t=$$1("<div>")[0];return e&&(_divProp(t,"className",e.className),_divProp(t,"id",e.id),_divProp(t,"innerHTML",e.html),_divProp(t,"textContent",e.text)),t});DataTable.feature.register("info",function(n,e){if(!n.oFeatures.bInfo)return null;var t=n.oLanguage,r=n.sTableId,a=$$1("<div/>",{class:n.oClasses.info.container});return e=$$1.extend({callback:t.fnInfoCallback,empty:t.sInfoEmpty,postfix:t.sInfoPostFix,search:t.sInfoFiltered,text:t.sInfo},e),n.aoDrawCallback.push(function(o){_fnUpdateInfo(o,e,a)}),n._infoEl||(a.attr({"aria-live":"polite",id:r+"_info",role:"status"}),$$1(n.nTable).attr("aria-describedby",r+"_info"),n._infoEl=a),a},"i");function _fnUpdateInfo(n,e,t){var r=n._iDisplayStart+1,a=n.fnDisplayEnd(),o=n.fnRecordsTotal(),s=n.fnRecordsDisplay(),l=s?e.text:e.empty;s!==o&&(l+=" "+e.search),l+=e.postfix,l=_fnMacros(n,l),e.callback&&(l=e.callback.call(n.oInstance,n,r,a,o,s,l)),t.html(l),_fnCallbackFire(n,null,"info",[n,t[0],l])}var __searchCounter=0;DataTable.feature.register("search",function(n,e){if(!n.oFeatures.bFilter)return null;var t=n.oClasses.search,r=n.sTableId,a=n.oLanguage,o=n.oPreviousSearch,s='<input type="search" class="'+t.input+'"/>';e=$$1.extend({placeholder:a.sSearchPlaceholder,processing:!1,text:a.sSearch},e),e.text.indexOf("_INPUT_")===-1&&(e.text+="_INPUT_"),e.text=_fnMacros(n,e.text);var l=e.text.match(/_INPUT_$/),u=e.text.match(/^_INPUT_/),f=e.text.replace(/_INPUT_/,""),d="<label>"+e.text+"</label>";u?d="_INPUT_<label>"+f+"</label>":l&&(d="<label>"+f+"</label>_INPUT_");var p=$$1("<div>").addClass(t.container).append(d.replace(/_INPUT_/,s));p.find("label").attr("for","dt-search-"+__searchCounter),p.find("input").attr("id","dt-search-"+__searchCounter),__searchCounter++;var v=function(E){var C=this.value;o.return&&E.key!=="Enter"||C!=o.search&&_fnProcessingRun(n,e.processing,function(){o.search=C,_fnFilterComplete(n,o),n._iDisplayStart=0,_fnDraw(n)})},y=n.searchDelay!==null?n.searchDelay:0,x=$$1("input",p).val(o.search).attr("placeholder",e.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",y?DataTable.util.debounce(v,y):v).on("mouseup.DT",function(E){setTimeout(function(){v.call(x[0],E)},10)}).on("keypress.DT",function(E){if(E.keyCode==13)return!1}).attr("aria-controls",r);return $$1(n.nTable).on("search.dt.DT",function(E,C){n===C&&x[0]!==document.activeElement&&x.val(typeof o.search!="function"?o.search:"")}),p},"f");DataTable.feature.register("paging",function(n,e){if(!n.oFeatures.bPaginate)return null;e=$$1.extend({buttons:DataTable.ext.pager.numbers_length,type:n.sPaginationType,boundaryNumbers:!0,firstLast:!0,previousNext:!0,numbers:!0},e);var t=$$1("<div/>").addClass(n.oClasses.paging.container+(e.type?" paging_"+e.type:"")).append($$1("<nav>").attr("aria-label","pagination").addClass(n.oClasses.paging.nav)),r=function(){_pagingDraw(n,t.children(),e)};return n.aoDrawCallback.push(r),$$1(n.nTable).on("column-sizing.dt.DT",r),t},"p");function _pagingDynamic(n){var e=[];return n.numbers&&e.push("numbers"),n.previousNext&&(e.unshift("previous"),e.push("next")),n.firstLast&&(e.unshift("first"),e.push("last")),e}function _pagingDraw(n,e,t){if(n._bInitComplete){var r=t.type?DataTable.ext.pager[t.type]:_pagingDynamic,a=n.oLanguage.oAria.paginate||{},o=n._iDisplayStart,s=n._iDisplayLength,l=n.fnRecordsDisplay(),u=s===-1,f=u?0:Math.ceil(o/s),d=u?1:Math.ceil(l/s),p=[],v=[],y=r(t).map(function(Q){return Q==="numbers"?_pagingNumbers(f,d,t.buttons,t.boundaryNumbers):Q});p=p.concat.apply(p,y);for(var x=0;x<p.length;x++){var E=p[x],C=_pagingButtonInfo(n,E,f,d),A=_fnRenderer(n,"pagingButton")(n,E,C.display,C.active,C.disabled),M=typeof E=="string"?a[E]:a.number?a.number+(E+1):null;$$1(A.clicker).attr({"aria-controls":n.sTableId,"aria-disabled":C.disabled?"true":null,"aria-current":C.active?"page":null,"aria-label":M,"data-dt-idx":E,tabIndex:C.disabled?-1:n.iTabIndex&&A.clicker[0].nodeName.toLowerCase()!=="span"?n.iTabIndex:null}),typeof E!="number"&&$$1(A.clicker).addClass(E),_fnBindAction(A.clicker,{action:E},function(Q){Q.preventDefault(),_fnPageChange(n,Q.data.action,!0)}),v.push(A.display)}var V=_fnRenderer(n,"pagingContainer")(n,v),R=e.find(document.activeElement).data("dt-idx");if(e.empty().append(V),R!==void 0&&e.find("[data-dt-idx="+R+"]").trigger("focus"),v.length){var q=$$1(v[0]).outerHeight();t.buttons>1&&q>0&&$$1(e).height()>=q*2-10&&_pagingDraw(n,e,$$1.extend({},t,{buttons:t.buttons-2}))}}}function _pagingButtonInfo(n,e,t,r){var a=n.oLanguage.oPaginate,o={display:"",active:!1,disabled:!1};switch(e){case"ellipsis":o.display="&#x2026;";break;case"first":o.display=a.sFirst,t===0&&(o.disabled=!0);break;case"previous":o.display=a.sPrevious,t===0&&(o.disabled=!0);break;case"next":o.display=a.sNext,(r===0||t===r-1)&&(o.disabled=!0);break;case"last":o.display=a.sLast,(r===0||t===r-1)&&(o.disabled=!0);break;default:typeof e=="number"&&(o.display=n.fnFormatNumber(e+1),t===e&&(o.active=!0));break}return o}function _pagingNumbers(n,e,t,r){var a=[],o=Math.floor(t/2),s=r?2:1,l=r?1:0;return e<=t?a=_range(0,e):t===1?a=[n]:t===3?n<=1?a=[0,1,"ellipsis"]:n>=e-2?(a=_range(e-2,e),a.unshift("ellipsis")):a=["ellipsis",n,"ellipsis"]:n<=o?(a=_range(0,t-s),a.push("ellipsis"),r&&a.push(e-1)):n>=e-1-o?(a=_range(e-(t-s),e),a.unshift("ellipsis"),r&&a.unshift(0)):(a=_range(n-o+s,n+o-l),a.push("ellipsis"),a.unshift("ellipsis"),r&&(a.push(e-1),a.unshift(0))),a}var __lengthCounter=0;DataTable.feature.register("pageLength",function(n,e){var t=n.oFeatures;if(!t.bPaginate||!t.bLengthChange)return null;e=$$1.extend({menu:n.aLengthMenu,text:n.oLanguage.sLengthMenu},e);var r=n.oClasses.length,a=n.sTableId,o=e.menu,s=[],l=[],u;if(Array.isArray(o[0]))s=o[0],l=o[1];else for(u=0;u<o.length;u++)$$1.isPlainObject(o[u])?(s.push(o[u].value),l.push(o[u].label)):(s.push(o[u]),l.push(o[u]));var f=e.text.match(/_MENU_$/),d=e.text.match(/^_MENU_/),p=e.text.replace(/_MENU_/,""),v="<label>"+e.text+"</label>";d?v="_MENU_<label>"+p+"</label>":f&&(v="<label>"+p+"</label>_MENU_");var y="tmp-"+ +new Date,x=$$1("<div/>").addClass(r.container).append(v.replace("_MENU_",'<span id="'+y+'"></span>')),E=[];Array.prototype.slice.call(x.find("label")[0].childNodes).forEach(function(V){V.nodeType===Node.TEXT_NODE&&E.push({el:V,text:V.textContent})});var C=function(V){E.forEach(function(R){R.el.textContent=_fnMacros(n,R.text,V)})},A=$$1("<select/>",{"aria-controls":a,class:r.select});for(u=0;u<s.length;u++){var M=n.api.i18n("lengthLabels."+s[u],null);M===null&&(M=typeof l[u]=="number"?n.fnFormatNumber(l[u]):l[u]),A[0][u]=new Option(M,s[u])}return x.find("label").attr("for","dt-length-"+__lengthCounter),A.attr("id","dt-length-"+__lengthCounter),__lengthCounter++,x.find("#"+y).replaceWith(A),$$1("select",x).val(n._iDisplayLength).on("change.DT",function(){_fnLengthChange(n,$$1(this).val()),_fnDraw(n)}),$$1(n.nTable).on("length.dt.DT",function(V,R,q){n===R&&($$1("select",x).val(q),C(q))}),C(n._iDisplayLength),x},"l");$$1.fn.dataTable=DataTable;DataTable.$=$$1;$$1.fn.dataTableSettings=DataTable.settings;$$1.fn.dataTableExt=DataTable.ext;$$1.fn.DataTable=function(n){return $$1(this).dataTable(n).api()};$$1.each(DataTable,function(n,e){$$1.fn.DataTable[n]=e});let $=jQuery$1;$.extend(!0,DataTable.defaults,{renderer:"bootstrap"});$.extend(!0,DataTable.ext.classes,{container:"dt-container dt-bootstrap4",search:{input:"form-control form-control-sm"},length:{select:"custom-select custom-select-sm form-control form-control-sm"},processing:{container:"dt-processing card"},layout:{row:"row justify-content-between",cell:"d-md-flex justify-content-between align-items-center",tableCell:"col-12",start:"dt-layout-start col-md-auto mr-auto",end:"dt-layout-end col-md-auto ml-auto",full:"dt-layout-full col-md"}});DataTable.ext.renderer.pagingButton.bootstrap=function(n,e,t,r,a){var o=["dt-paging-button","page-item"];r&&o.push("active"),a&&o.push("disabled");var s=$("<li>").addClass(o.join(" ")),l=$("<a>",{href:a?null:"#",class:"page-link"}).html(t).appendTo(s);return{display:s,clicker:l}};DataTable.ext.renderer.pagingContainer.bootstrap=function(n,e){return $("<ul/>").addClass("pagination").append(e)};function initDataTable(){const n=document.querySelectorAll("div.table-responsive > table.datatable");for(const t of n)t!==null&&new DataTable(t,{pageLength:10,orderClasses:!1,order:[[1,"desc"]]});const e=document.querySelectorAll("div.table-responsive > table.datatable-long");for(const t of e)t!==null&&new DataTable(t,{pageLength:50,orderClasses:!1,order:[[1,"desc"]]})}function round(n){return n+.5|0}const lim=(n,e,t)=>Math.max(Math.min(n,t),e);function p2b(n){return lim(round(n*2.55),0,255)}function n2b(n){return lim(round(n*255),0,255)}function b2n(n){return lim(round(n/2.55)/100,0,1)}function n2p(n){return lim(round(n*100),0,100)}const map$1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hex=[..."0123456789ABCDEF"],h1=n=>hex[n&15],h2=n=>hex[(n&240)>>4]+hex[n&15],eq=n=>(n&240)>>4===(n&15),isShort=n=>eq(n.r)&&eq(n.g)&&eq(n.b)&&eq(n.a);function hexParse(n){var e=n.length,t;return n[0]==="#"&&(e===4||e===5?t={r:255&map$1[n[1]]*17,g:255&map$1[n[2]]*17,b:255&map$1[n[3]]*17,a:e===5?map$1[n[4]]*17:255}:(e===7||e===9)&&(t={r:map$1[n[1]]<<4|map$1[n[2]],g:map$1[n[3]]<<4|map$1[n[4]],b:map$1[n[5]]<<4|map$1[n[6]],a:e===9?map$1[n[7]]<<4|map$1[n[8]]:255})),t}const alpha=(n,e)=>n<255?e(n):"";function hexString(n){var e=isShort(n)?h1:h2;return n?"#"+e(n.r)+e(n.g)+e(n.b)+alpha(n.a,e):void 0}const HUE_RE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(n,e,t){const r=e*Math.min(t,1-t),a=(o,s=(o+n/30)%12)=>t-r*Math.max(Math.min(s-3,9-s,1),-1);return[a(0),a(8),a(4)]}function hsv2rgbn(n,e,t){const r=(a,o=(a+n/60)%6)=>t-t*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function hwb2rgbn(n,e,t){const r=hsl2rgbn(n,1,.5);let a;for(e+t>1&&(a=1/(e+t),e*=a,t*=a),a=0;a<3;a++)r[a]*=1-e-t,r[a]+=e;return r}function hueValue(n,e,t,r,a){return n===a?(e-t)/r+(e<t?6:0):e===a?(t-n)/r+2:(n-e)/r+4}function rgb2hsl(n){const t=n.r/255,r=n.g/255,a=n.b/255,o=Math.max(t,r,a),s=Math.min(t,r,a),l=(o+s)/2;let u,f,d;return o!==s&&(d=o-s,f=l>.5?d/(2-o-s):d/(o+s),u=hueValue(t,r,a,d,o),u=u*60+.5),[u|0,f||0,l]}function calln(n,e,t,r){return(Array.isArray(e)?n(e[0],e[1],e[2]):n(e,t,r)).map(n2b)}function hsl2rgb(n,e,t){return calln(hsl2rgbn,n,e,t)}function hwb2rgb(n,e,t){return calln(hwb2rgbn,n,e,t)}function hsv2rgb(n,e,t){return calln(hsv2rgbn,n,e,t)}function hue(n){return(n%360+360)%360}function hueParse(n){const e=HUE_RE.exec(n);let t=255,r;if(!e)return;e[5]!==r&&(t=e[6]?p2b(+e[5]):n2b(+e[5]));const a=hue(+e[2]),o=+e[3]/100,s=+e[4]/100;return e[1]==="hwb"?r=hwb2rgb(a,o,s):e[1]==="hsv"?r=hsv2rgb(a,o,s):r=hsl2rgb(a,o,s),{r:r[0],g:r[1],b:r[2],a:t}}function rotate(n,e){var t=rgb2hsl(n);t[0]=hue(t[0]+e),t=hsl2rgb(t),n.r=t[0],n.g=t[1],n.b=t[2]}function hslString(n){if(!n)return;const e=rgb2hsl(n),t=e[0],r=n2p(e[1]),a=n2p(e[2]);return n.a<255?`hsla(${t}, ${r}%, ${a}%, ${b2n(n.a)})`:`hsl(${t}, ${r}%, ${a}%)`}const map$2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},names$1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function unpack(){const n={},e=Object.keys(names$1),t=Object.keys(map$2);let r,a,o,s,l;for(r=0;r<e.length;r++){for(s=l=e[r],a=0;a<t.length;a++)o=t[a],l=l.replace(o,map$2[o]);o=parseInt(names$1[s],16),n[l]=[o>>16&255,o>>8&255,o&255]}return n}let names;function nameParse(n){names||(names=unpack(),names.transparent=[0,0,0,0]);const e=names[n.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const RGB_RE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(n){const e=RGB_RE.exec(n);let t=255,r,a,o;if(e){if(e[7]!==r){const s=+e[7];t=e[8]?p2b(s):lim(s*255,0,255)}return r=+e[1],a=+e[3],o=+e[5],r=255&(e[2]?p2b(r):lim(r,0,255)),a=255&(e[4]?p2b(a):lim(a,0,255)),o=255&(e[6]?p2b(o):lim(o,0,255)),{r,g:a,b:o,a:t}}}function rgbString(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${b2n(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const to=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,from=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function interpolate$1(n,e,t){const r=from(b2n(n.r)),a=from(b2n(n.g)),o=from(b2n(n.b));return{r:n2b(to(r+t*(from(b2n(e.r))-r))),g:n2b(to(a+t*(from(b2n(e.g))-a))),b:n2b(to(o+t*(from(b2n(e.b))-o))),a:n.a+t*(e.a-n.a)}}function modHSL(n,e,t){if(n){let r=rgb2hsl(n);r[e]=Math.max(0,Math.min(r[e]+r[e]*t,e===0?360:1)),r=hsl2rgb(r),n.r=r[0],n.g=r[1],n.b=r[2]}}function clone$1(n,e){return n&&Object.assign(e||{},n)}function fromObject(n){var e={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(e={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(e.a=n2b(n[3]))):(e=clone$1(n,{r:0,g:0,b:0,a:1}),e.a=n2b(e.a)),e}function functionParse(n){return n.charAt(0)==="r"?rgbParse(n):hueParse(n)}class Color{constructor(e){if(e instanceof Color)return e;const t=typeof e;let r;t==="object"?r=fromObject(e):t==="string"&&(r=hexParse(e)||nameParse(e)||functionParse(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=clone$1(this._rgb);return e&&(e.a=b2n(e.a)),e}set rgb(e){this._rgb=fromObject(e)}rgbString(){return this._valid?rgbString(this._rgb):void 0}hexString(){return this._valid?hexString(this._rgb):void 0}hslString(){return this._valid?hslString(this._rgb):void 0}mix(e,t){if(e){const r=this.rgb,a=e.rgb;let o;const s=t===o?.5:t,l=2*s-1,u=r.a-a.a,f=((l*u===-1?l:(l+u)/(1+l*u))+1)/2;o=1-f,r.r=255&f*r.r+o*a.r+.5,r.g=255&f*r.g+o*a.g+.5,r.b=255&f*r.b+o*a.b+.5,r.a=s*r.a+(1-s)*a.a,this.rgb=r}return this}interpolate(e,t){return e&&(this._rgb=interpolate$1(this._rgb,e._rgb,t)),this}clone(){return new Color(this.rgb)}alpha(e){return this._rgb.a=n2b(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=round(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return modHSL(this._rgb,2,e),this}darken(e){return modHSL(this._rgb,2,-e),this}saturate(e){return modHSL(this._rgb,1,e),this}desaturate(e){return modHSL(this._rgb,1,-e),this}rotate(e){return rotate(this._rgb,e),this}}function noop(){}const uid=(()=>{let n=0;return()=>n++})();function isNullOrUndef(n){return n==null}function isArray(n){if(Array.isArray&&Array.isArray(n))return!0;const e=Object.prototype.toString.call(n);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function isObject(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function isNumberFinite(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function finiteOrDefault(n,e){return isNumberFinite(n)?n:e}function valueOrDefault(n,e){return typeof n>"u"?e:n}const toPercentage=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/e,toDimension=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*e:+n;function callback(n,e,t){if(n&&typeof n.call=="function")return n.apply(t,e)}function each(n,e,t,r){let a,o,s;if(isArray(n))for(o=n.length,a=0;a<o;a++)e.call(t,n[a],a);else if(isObject(n))for(s=Object.keys(n),o=s.length,a=0;a<o;a++)e.call(t,n[s[a]],s[a])}function _elementsEqual(n,e){let t,r,a,o;if(!n||!e||n.length!==e.length)return!1;for(t=0,r=n.length;t<r;++t)if(a=n[t],o=e[t],a.datasetIndex!==o.datasetIndex||a.index!==o.index)return!1;return!0}function clone(n){if(isArray(n))return n.map(clone);if(isObject(n)){const e=Object.create(null),t=Object.keys(n),r=t.length;let a=0;for(;a<r;++a)e[t[a]]=clone(n[t[a]]);return e}return n}function isValidKey(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function _merger(n,e,t,r){if(!isValidKey(n))return;const a=e[n],o=t[n];isObject(a)&&isObject(o)?merge(a,o,r):e[n]=clone(o)}function merge(n,e,t){const r=isArray(e)?e:[e],a=r.length;if(!isObject(n))return n;t=t||{};const o=t.merger||_merger;let s;for(let l=0;l<a;++l){if(s=r[l],!isObject(s))continue;const u=Object.keys(s);for(let f=0,d=u.length;f<d;++f)o(u[f],n,s,t)}return n}function mergeIf(n,e){return merge(n,e,{merger:_mergerIf})}function _mergerIf(n,e,t){if(!isValidKey(n))return;const r=e[n],a=t[n];isObject(r)&&isObject(a)?mergeIf(r,a):Object.prototype.hasOwnProperty.call(e,n)||(e[n]=clone(a))}const keyResolvers={"":n=>n,x:n=>n.x,y:n=>n.y};function _splitKey(n){const e=n.split("."),t=[];let r="";for(const a of e)r+=a,r.endsWith("\\")?r=r.slice(0,-1)+".":(t.push(r),r="");return t}function _getKeyResolver(n){const e=_splitKey(n);return t=>{for(const r of e){if(r==="")break;t=t&&t[r]}return t}}function resolveObjectKey(n,e){return(keyResolvers[e]||(keyResolvers[e]=_getKeyResolver(e)))(n)}function _capitalize(n){return n.charAt(0).toUpperCase()+n.slice(1)}const defined=n=>typeof n<"u",isFunction=n=>typeof n=="function",setsEqual=(n,e)=>{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0};function _isClickEvent(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const PI=Math.PI,TAU=2*PI,PITAU=TAU+PI,INFINITY=Number.POSITIVE_INFINITY,RAD_PER_DEG=PI/180,HALF_PI=PI/2,QUARTER_PI=PI/4,TWO_THIRDS_PI=PI*2/3,log10=Math.log10,sign=Math.sign;function almostEquals(n,e,t){return Math.abs(n-e)<t}function niceNum(n){const e=Math.round(n);n=almostEquals(n,e,n/1e3)?e:n;const t=Math.pow(10,Math.floor(log10(n))),r=n/t;return(r<=1?1:r<=2?2:r<=5?5:10)*t}function _factorize(n){const e=[],t=Math.sqrt(n);let r;for(r=1;r<t;r++)n%r===0&&(e.push(r),e.push(n/r));return t===(t|0)&&e.push(t),e.sort((a,o)=>a-o).pop(),e}function isNonPrimitive(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function isNumber(n){return!isNonPrimitive(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function almostWhole(n,e){const t=Math.round(n);return t-e<=n&&t+e>=n}function _setMinAndMaxByKey(n,e,t){let r,a,o;for(r=0,a=n.length;r<a;r++)o=n[r][t],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function toRadians(n){return n*(PI/180)}function toDegrees(n){return n*(180/PI)}function _decimalPlaces(n){if(!isNumberFinite(n))return;let e=1,t=0;for(;Math.round(n*e)/e!==n;)e*=10,t++;return t}function getAngleFromPoint(n,e){const t=e.x-n.x,r=e.y-n.y,a=Math.sqrt(t*t+r*r);let o=Math.atan2(r,t);return o<-.5*PI&&(o+=TAU),{angle:o,distance:a}}function distanceBetweenPoints(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function _angleDiff(n,e){return(n-e+PITAU)%TAU-PI}function _normalizeAngle(n){return(n%TAU+TAU)%TAU}function _angleBetween(n,e,t,r){const a=_normalizeAngle(n),o=_normalizeAngle(e),s=_normalizeAngle(t),l=_normalizeAngle(o-a),u=_normalizeAngle(s-a),f=_normalizeAngle(a-o),d=_normalizeAngle(a-s);return a===o||a===s||r&&o===s||l>u&&f<d}function _limitValue(n,e,t){return Math.max(e,Math.min(t,n))}function _int16Range(n){return _limitValue(n,-32768,32767)}function _isBetween(n,e,t,r=1e-6){return n>=Math.min(e,t)-r&&n<=Math.max(e,t)+r}function _lookup(n,e,t){t=t||(s=>n[s]<e);let r=n.length-1,a=0,o;for(;r-a>1;)o=a+r>>1,t(o)?a=o:r=o;return{lo:a,hi:r}}const _lookupByKey=(n,e,t,r)=>_lookup(n,t,r?a=>{const o=n[a][e];return o<t||o===t&&n[a+1][e]===t}:a=>n[a][e]<t),_rlookupByKey=(n,e,t)=>_lookup(n,t,r=>n[r][e]>=t);function _filterBetween(n,e,t){let r=0,a=n.length;for(;r<a&&n[r]<e;)r++;for(;a>r&&n[a-1]>t;)a--;return r>0||a<n.length?n.slice(r,a):n}const arrayEvents=["push","pop","shift","splice","unshift"];function listenArrayEvents(n,e){if(n._chartjs){n._chartjs.listeners.push(e);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),arrayEvents.forEach(t=>{const r="_onData"+_capitalize(t),a=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...o){const s=a.apply(this,o);return n._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...o)}),s}})})}function unlistenArrayEvents(n,e){const t=n._chartjs;if(!t)return;const r=t.listeners,a=r.indexOf(e);a!==-1&&r.splice(a,1),!(r.length>0)&&(arrayEvents.forEach(o=>{delete n[o]}),delete n._chartjs)}function _arrayUnique(n){const e=new Set(n);return e.size===n.length?n:Array.from(e)}const requestAnimFrame=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function throttled(n,e){let t=[],r=!1;return function(...a){t=a,r||(r=!0,requestAnimFrame.call(window,()=>{r=!1,n.apply(e,t)}))}}function debounce(n,e){let t;return function(...r){return e?(clearTimeout(t),t=setTimeout(n,e,r)):n.apply(this,r),e}}const _toLeftRightCenter=n=>n==="start"?"left":n==="end"?"right":"center",_alignStartEnd=(n,e,t)=>n==="start"?e:n==="end"?t:(e+t)/2,_textX=(n,e,t,r)=>n===(r?"left":"right")?t:n==="center"?(e+t)/2:e;function _getStartAndCountOfVisiblePoints(n,e,t){const r=e.length;let a=0,o=r;if(n._sorted){const{iScale:s,vScale:l,_parsed:u}=n,f=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=s.axis,{min:p,max:v,minDefined:y,maxDefined:x}=s.getUserBounds();if(y){if(a=Math.min(_lookupByKey(u,d,p).lo,t?r:_lookupByKey(e,d,s.getPixelForValue(p)).lo),f){const E=u.slice(0,a+1).reverse().findIndex(C=>!isNullOrUndef(C[l.axis]));a-=Math.max(0,E)}a=_limitValue(a,0,r-1)}if(x){let E=Math.max(_lookupByKey(u,s.axis,v,!0).hi+1,t?0:_lookupByKey(e,d,s.getPixelForValue(v),!0).hi+1);if(f){const C=u.slice(E-1).findIndex(A=>!isNullOrUndef(A[l.axis]));E+=Math.max(0,C)}o=_limitValue(E,a,r)-a}else o=r-a}return{start:a,count:o}}function _scaleRangesChanged(n){const{xScale:e,yScale:t,_scaleRanges:r}=n,a={xmin:e.min,xmax:e.max,ymin:t.min,ymax:t.max};if(!r)return n._scaleRanges=a,!0;const o=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==t.min||r.ymax!==t.max;return Object.assign(r,a),o}const atEdge=n=>n===0||n===1,elasticIn=(n,e,t)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-e)*TAU/t)),elasticOut=(n,e,t)=>Math.pow(2,-10*n)*Math.sin((n-e)*TAU/t)+1,effects={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*HALF_PI)+1,easeOutSine:n=>Math.sin(n*HALF_PI),easeInOutSine:n=>-.5*(Math.cos(PI*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>atEdge(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>atEdge(n)?n:elasticIn(n,.075,.3),easeOutElastic:n=>atEdge(n)?n:elasticOut(n,.075,.3),easeInOutElastic(n){return atEdge(n)?n:n<.5?.5*elasticIn(n*2,.1125,.45):.5+.5*elasticOut(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let e=1.70158;return(n/=.5)<1?.5*(n*n*(((e*=1.525)+1)*n-e)):.5*((n-=2)*n*(((e*=1.525)+1)*n+e)+2)},easeInBounce:n=>1-effects.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?effects.easeInBounce(n*2)*.5:effects.easeOutBounce(n*2-1)*.5+.5};function isPatternOrGradient(n){if(n&&typeof n=="object"){const e=n.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function color(n){return isPatternOrGradient(n)?n:new Color(n)}function getHoverColor(n){return isPatternOrGradient(n)?n:new Color(n).saturate(.5).darken(.1).hexString()}const numbers=["x","y","borderWidth","radius","tension"],colors=["color","borderColor","backgroundColor"];function applyAnimationsDefaults(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),n.set("animations",{colors:{type:"color",properties:colors},numbers:{type:"number",properties:numbers}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function applyLayoutsDefaults(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const intlCache=new Map;function getNumberFormat(n,e){e=e||{};const t=n+JSON.stringify(e);let r=intlCache.get(t);return r||(r=new Intl.NumberFormat(n,e),intlCache.set(t,r)),r}function formatNumber(n,e,t){return getNumberFormat(e,t).format(n)}const formatters$1={values(n){return isArray(n)?n:""+n},numeric(n,e,t){if(n===0)return"0";const r=this.chart.options.locale;let a,o=n;if(t.length>1){const f=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(f<1e-4||f>1e15)&&(a="scientific"),o=calculateDelta(n,t)}const s=log10(Math.abs(o)),l=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),u={notation:a,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(u,this.options.ticks.format),formatNumber(n,r,u)},logarithmic(n,e,t){if(n===0)return"0";const r=t[e].significand||n/Math.pow(10,Math.floor(log10(n)));return[1,2,3,5,10,15].includes(r)||e>.8*t.length?formatters$1.numeric.call(this,n,e,t):""}};function calculateDelta(n,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&n!==Math.floor(n)&&(t=n-Math.floor(n)),t}var Ticks={formatters:formatters$1};function applyScaleDefaults(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ticks.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const overrides=Object.create(null),descriptors=Object.create(null);function getScope$1(n,e){if(!e)return n;const t=e.split(".");for(let r=0,a=t.length;r<a;++r){const o=t[r];n=n[o]||(n[o]=Object.create(null))}return n}function set(n,e,t){return typeof e=="string"?merge(getScope$1(n,e),t):merge(getScope$1(n,""),e)}class Defaults{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,a)=>getHoverColor(a.backgroundColor),this.hoverBorderColor=(r,a)=>getHoverColor(a.borderColor),this.hoverColor=(r,a)=>getHoverColor(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return set(this,e,t)}get(e){return getScope$1(this,e)}describe(e,t){return set(descriptors,e,t)}override(e,t){return set(overrides,e,t)}route(e,t,r,a){const o=getScope$1(this,e),s=getScope$1(this,r),l="_"+t;Object.defineProperties(o,{[l]:{value:o[t],writable:!0},[t]:{enumerable:!0,get(){const u=this[l],f=s[a];return isObject(u)?Object.assign({},f,u):valueOrDefault(u,f)},set(u){this[l]=u}}})}apply(e){e.forEach(t=>t(this))}}var defaults=new Defaults({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[applyAnimationsDefaults,applyLayoutsDefaults,applyScaleDefaults]);function toFontString(n){return!n||isNullOrUndef(n.size)||isNullOrUndef(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function _measureText(n,e,t,r,a){let o=e[a];return o||(o=e[a]=n.measureText(a).width,t.push(a)),o>r&&(r=o),r}function _longestText(n,e,t,r){r=r||{};let a=r.data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(a=r.data={},o=r.garbageCollect=[],r.font=e),n.save(),n.font=e;let s=0;const l=t.length;let u,f,d,p,v;for(u=0;u<l;u++)if(p=t[u],p!=null&&!isArray(p))s=_measureText(n,a,o,s,p);else if(isArray(p))for(f=0,d=p.length;f<d;f++)v=p[f],v!=null&&!isArray(v)&&(s=_measureText(n,a,o,s,v));n.restore();const y=o.length/2;if(y>t.length){for(u=0;u<y;u++)delete a[o[u]];o.splice(0,y)}return s}function _alignPixel(n,e,t){const r=n.currentDevicePixelRatio,a=t!==0?Math.max(t/2,.5):0;return Math.round((e-a)*r)/r+a}function clearCanvas(n,e){!e&&!n||(e=e||n.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,n.width,n.height),e.restore())}function drawPoint(n,e,t,r){drawPointLegend(n,e,t,r,null)}function drawPointLegend(n,e,t,r,a){let o,s,l,u,f,d,p,v;const y=e.pointStyle,x=e.rotation,E=e.radius;let C=(x||0)*RAD_PER_DEG;if(y&&typeof y=="object"&&(o=y.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){n.save(),n.translate(t,r),n.rotate(C),n.drawImage(y,-y.width/2,-y.height/2,y.width,y.height),n.restore();return}if(!(isNaN(E)||E<=0)){switch(n.beginPath(),y){default:a?n.ellipse(t,r,a/2,E,0,0,TAU):n.arc(t,r,E,0,TAU),n.closePath();break;case"triangle":d=a?a/2:E,n.moveTo(t+Math.sin(C)*d,r-Math.cos(C)*E),C+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(C)*d,r-Math.cos(C)*E),C+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(C)*d,r-Math.cos(C)*E),n.closePath();break;case"rectRounded":f=E*.516,u=E-f,s=Math.cos(C+QUARTER_PI)*u,p=Math.cos(C+QUARTER_PI)*(a?a/2-f:u),l=Math.sin(C+QUARTER_PI)*u,v=Math.sin(C+QUARTER_PI)*(a?a/2-f:u),n.arc(t-p,r-l,f,C-PI,C-HALF_PI),n.arc(t+v,r-s,f,C-HALF_PI,C),n.arc(t+p,r+l,f,C,C+HALF_PI),n.arc(t-v,r+s,f,C+HALF_PI,C+PI),n.closePath();break;case"rect":if(!x){u=Math.SQRT1_2*E,d=a?a/2:u,n.rect(t-d,r-u,2*d,2*u);break}C+=QUARTER_PI;case"rectRot":p=Math.cos(C)*(a?a/2:E),s=Math.cos(C)*E,l=Math.sin(C)*E,v=Math.sin(C)*(a?a/2:E),n.moveTo(t-p,r-l),n.lineTo(t+v,r-s),n.lineTo(t+p,r+l),n.lineTo(t-v,r+s),n.closePath();break;case"crossRot":C+=QUARTER_PI;case"cross":p=Math.cos(C)*(a?a/2:E),s=Math.cos(C)*E,l=Math.sin(C)*E,v=Math.sin(C)*(a?a/2:E),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+v,r-s),n.lineTo(t-v,r+s);break;case"star":p=Math.cos(C)*(a?a/2:E),s=Math.cos(C)*E,l=Math.sin(C)*E,v=Math.sin(C)*(a?a/2:E),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+v,r-s),n.lineTo(t-v,r+s),C+=QUARTER_PI,p=Math.cos(C)*(a?a/2:E),s=Math.cos(C)*E,l=Math.sin(C)*E,v=Math.sin(C)*(a?a/2:E),n.moveTo(t-p,r-l),n.lineTo(t+p,r+l),n.moveTo(t+v,r-s),n.lineTo(t-v,r+s);break;case"line":s=a?a/2:Math.cos(C)*E,l=Math.sin(C)*E,n.moveTo(t-s,r-l),n.lineTo(t+s,r+l);break;case"dash":n.moveTo(t,r),n.lineTo(t+Math.cos(C)*(a?a/2:E),r+Math.sin(C)*E);break;case!1:n.closePath();break}n.fill(),e.borderWidth>0&&n.stroke()}}function _isPointInArea(n,e,t){return t=t||.5,!e||n&&n.x>e.left-t&&n.x<e.right+t&&n.y>e.top-t&&n.y<e.bottom+t}function clipArea(n,e){n.save(),n.beginPath(),n.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),n.clip()}function unclipArea(n){n.restore()}function _steppedLineTo(n,e,t,r,a){if(!e)return n.lineTo(t.x,t.y);if(a==="middle"){const o=(e.x+t.x)/2;n.lineTo(o,e.y),n.lineTo(o,t.y)}else a==="after"!=!!r?n.lineTo(e.x,t.y):n.lineTo(t.x,e.y);n.lineTo(t.x,t.y)}function _bezierCurveTo(n,e,t,r){if(!e)return n.lineTo(t.x,t.y);n.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?t.cp2x:t.cp1x,r?t.cp2y:t.cp1y,t.x,t.y)}function setRenderOpts(n,e){e.translation&&n.translate(e.translation[0],e.translation[1]),isNullOrUndef(e.rotation)||n.rotate(e.rotation),e.color&&(n.fillStyle=e.color),e.textAlign&&(n.textAlign=e.textAlign),e.textBaseline&&(n.textBaseline=e.textBaseline)}function decorateText(n,e,t,r,a){if(a.strikethrough||a.underline){const o=n.measureText(r),s=e-o.actualBoundingBoxLeft,l=e+o.actualBoundingBoxRight,u=t-o.actualBoundingBoxAscent,f=t+o.actualBoundingBoxDescent,d=a.strikethrough?(u+f)/2:f;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=a.decorationWidth||2,n.moveTo(s,d),n.lineTo(l,d),n.stroke()}}function drawBackdrop(n,e){const t=n.fillStyle;n.fillStyle=e.color,n.fillRect(e.left,e.top,e.width,e.height),n.fillStyle=t}function renderText(n,e,t,r,a,o={}){const s=isArray(e)?e:[e],l=o.strokeWidth>0&&o.strokeColor!=="";let u,f;for(n.save(),n.font=a.string,setRenderOpts(n,o),u=0;u<s.length;++u)f=s[u],o.backdrop&&drawBackdrop(n,o.backdrop),l&&(o.strokeColor&&(n.strokeStyle=o.strokeColor),isNullOrUndef(o.strokeWidth)||(n.lineWidth=o.strokeWidth),n.strokeText(f,t,r,o.maxWidth)),n.fillText(f,t,r,o.maxWidth),decorateText(n,t,r,f,o),r+=Number(a.lineHeight);n.restore()}function addRoundedRectPath(n,e){const{x:t,y:r,w:a,h:o,radius:s}=e;n.arc(t+s.topLeft,r+s.topLeft,s.topLeft,1.5*PI,PI,!0),n.lineTo(t,r+o-s.bottomLeft),n.arc(t+s.bottomLeft,r+o-s.bottomLeft,s.bottomLeft,PI,HALF_PI,!0),n.lineTo(t+a-s.bottomRight,r+o),n.arc(t+a-s.bottomRight,r+o-s.bottomRight,s.bottomRight,HALF_PI,0,!0),n.lineTo(t+a,r+s.topRight),n.arc(t+a-s.topRight,r+s.topRight,s.topRight,0,-HALF_PI,!0),n.lineTo(t+s.topLeft,r)}const LINE_HEIGHT=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,FONT_STYLE=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function toLineHeight(n,e){const t=(""+n).match(LINE_HEIGHT);if(!t||t[1]==="normal")return e*1.2;switch(n=+t[2],t[3]){case"px":return n;case"%":n/=100;break}return e*n}const numberOrZero=n=>+n||0;function _readValueToProps(n,e){const t={},r=isObject(e),a=r?Object.keys(e):e,o=isObject(n)?r?s=>valueOrDefault(n[s],n[e[s]]):s=>n[s]:()=>n;for(const s of a)t[s]=numberOrZero(o(s));return t}function toTRBL(n){return _readValueToProps(n,{top:"y",right:"x",bottom:"y",left:"x"})}function toTRBLCorners(n){return _readValueToProps(n,["topLeft","topRight","bottomLeft","bottomRight"])}function toPadding(n){const e=toTRBL(n);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function toFont(n,e){n=n||{},e=e||defaults.font;let t=valueOrDefault(n.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let r=valueOrDefault(n.style,e.style);r&&!(""+r).match(FONT_STYLE)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const a={family:valueOrDefault(n.family,e.family),lineHeight:toLineHeight(valueOrDefault(n.lineHeight,e.lineHeight),t),size:t,style:r,weight:valueOrDefault(n.weight,e.weight),string:""};return a.string=toFontString(a),a}function resolve(n,e,t,r){let a,o,s;for(a=0,o=n.length;a<o;++a)if(s=n[a],s!==void 0&&s!==void 0)return s}function _addGrace(n,e,t){const{min:r,max:a}=n,o=toDimension(e,(a-r)/2),s=(l,u)=>t&&l===0?0:l+u;return{min:s(r,-Math.abs(o)),max:s(a,o)}}function createContext(n,e){return Object.assign(Object.create(n),e)}function _createResolver(n,e=[""],t,r,a=()=>n[0]){const o=t||n;typeof r>"u"&&(r=_resolve("_fallback",n));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:o,_fallback:r,_getTarget:a,override:l=>_createResolver([l,...n],e,o,r)};return new Proxy(s,{deleteProperty(l,u){return delete l[u],delete l._keys,delete n[0][u],!0},get(l,u){return _cached(l,u,()=>_resolveWithPrefixes(u,e,n,l))},getOwnPropertyDescriptor(l,u){return Reflect.getOwnPropertyDescriptor(l._scopes[0],u)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(l,u){return getKeysFromAllScopes(l).includes(u)},ownKeys(l){return getKeysFromAllScopes(l)},set(l,u,f){const d=l._storage||(l._storage=a());return l[u]=d[u]=f,delete l._keys,!0}})}function _attachContext(n,e,t,r){const a={_cacheable:!1,_proxy:n,_context:e,_subProxy:t,_stack:new Set,_descriptors:_descriptors(n,r),setContext:o=>_attachContext(n,o,t,r),override:o=>_attachContext(n.override(o),e,t,r)};return new Proxy(a,{deleteProperty(o,s){return delete o[s],delete n[s],!0},get(o,s,l){return _cached(o,s,()=>_resolveWithContext(o,s,l))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(n,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,s)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(o,s){return Reflect.has(n,s)},ownKeys(){return Reflect.ownKeys(n)},set(o,s,l){return n[s]=l,delete o[s],!0}})}function _descriptors(n,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:r=e.indexable,_allKeys:a=e.allKeys}=n;return{allKeys:a,scriptable:t,indexable:r,isScriptable:isFunction(t)?t:()=>t,isIndexable:isFunction(r)?r:()=>r}}const readKey=(n,e)=>n?n+_capitalize(e):e,needsSubResolver=(n,e)=>isObject(e)&&n!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function _cached(n,e,t){if(Object.prototype.hasOwnProperty.call(n,e)||e==="constructor")return n[e];const r=t();return n[e]=r,r}function _resolveWithContext(n,e,t){const{_proxy:r,_context:a,_subProxy:o,_descriptors:s}=n;let l=r[e];return isFunction(l)&&s.isScriptable(e)&&(l=_resolveScriptable(e,l,n,t)),isArray(l)&&l.length&&(l=_resolveArray(e,l,n,s.isIndexable)),needsSubResolver(e,l)&&(l=_attachContext(l,a,o&&o[e],s)),l}function _resolveScriptable(n,e,t,r){const{_proxy:a,_context:o,_subProxy:s,_stack:l}=t;if(l.has(n))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+n);l.add(n);let u=e(o,s||r);return l.delete(n),needsSubResolver(n,u)&&(u=createSubResolver(a._scopes,a,n,u)),u}function _resolveArray(n,e,t,r){const{_proxy:a,_context:o,_subProxy:s,_descriptors:l}=t;if(typeof o.index<"u"&&r(n))return e[o.index%e.length];if(isObject(e[0])){const u=e,f=a._scopes.filter(d=>d!==u);e=[];for(const d of u){const p=createSubResolver(f,a,n,d);e.push(_attachContext(p,o,s&&s[n],l))}}return e}function resolveFallback(n,e,t){return isFunction(n)?n(e,t):n}const getScope=(n,e)=>n===!0?e:typeof n=="string"?resolveObjectKey(e,n):void 0;function addScopes(n,e,t,r,a){for(const o of e){const s=getScope(t,o);if(s){n.add(s);const l=resolveFallback(s._fallback,t,a);if(typeof l<"u"&&l!==t&&l!==r)return l}else if(s===!1&&typeof r<"u"&&t!==r)return null}return!1}function createSubResolver(n,e,t,r){const a=e._rootScopes,o=resolveFallback(e._fallback,t,r),s=[...n,...a],l=new Set;l.add(r);let u=addScopesFromKey(l,s,t,o||t,r);return u===null||typeof o<"u"&&o!==t&&(u=addScopesFromKey(l,s,o,u,r),u===null)?!1:_createResolver(Array.from(l),[""],a,o,()=>subGetTarget(e,t,r))}function addScopesFromKey(n,e,t,r,a){for(;t;)t=addScopes(n,e,t,r,a);return t}function subGetTarget(n,e,t){const r=n._getTarget();e in r||(r[e]={});const a=r[e];return isArray(a)&&isObject(t)?t:a||{}}function _resolveWithPrefixes(n,e,t,r){let a;for(const o of e)if(a=_resolve(readKey(o,n),t),typeof a<"u")return needsSubResolver(n,a)?createSubResolver(t,r,n,a):a}function _resolve(n,e){for(const t of e){if(!t)continue;const r=t[n];if(typeof r<"u")return r}}function getKeysFromAllScopes(n){let e=n._keys;return e||(e=n._keys=resolveKeysFromAllScopes(n._scopes)),e}function resolveKeysFromAllScopes(n){const e=new Set;for(const t of n)for(const r of Object.keys(t).filter(a=>!a.startsWith("_")))e.add(r);return Array.from(e)}function _parseObjectDataRadialScale(n,e,t,r){const{iScale:a}=n,{key:o="r"}=this._parsing,s=new Array(r);let l,u,f,d;for(l=0,u=r;l<u;++l)f=l+t,d=e[f],s[l]={r:a.parse(resolveObjectKey(d,o),f)};return s}const EPSILON=Number.EPSILON||1e-14,getPoint=(n,e)=>e<n.length&&!n[e].skip&&n[e],getValueAxis=n=>n==="x"?"y":"x";function splineCurve(n,e,t,r){const a=n.skip?e:n,o=e,s=t.skip?e:t,l=distanceBetweenPoints(o,a),u=distanceBetweenPoints(s,o);let f=l/(l+u),d=u/(l+u);f=isNaN(f)?0:f,d=isNaN(d)?0:d;const p=r*f,v=r*d;return{previous:{x:o.x-p*(s.x-a.x),y:o.y-p*(s.y-a.y)},next:{x:o.x+v*(s.x-a.x),y:o.y+v*(s.y-a.y)}}}function monotoneAdjust(n,e,t){const r=n.length;let a,o,s,l,u,f=getPoint(n,0);for(let d=0;d<r-1;++d)if(u=f,f=getPoint(n,d+1),!(!u||!f)){if(almostEquals(e[d],0,EPSILON)){t[d]=t[d+1]=0;continue}a=t[d]/e[d],o=t[d+1]/e[d],l=Math.pow(a,2)+Math.pow(o,2),!(l<=9)&&(s=3/Math.sqrt(l),t[d]=a*s*e[d],t[d+1]=o*s*e[d])}}function monotoneCompute(n,e,t="x"){const r=getValueAxis(t),a=n.length;let o,s,l,u=getPoint(n,0);for(let f=0;f<a;++f){if(s=l,l=u,u=getPoint(n,f+1),!l)continue;const d=l[t],p=l[r];s&&(o=(d-s[t])/3,l[`cp1${t}`]=d-o,l[`cp1${r}`]=p-o*e[f]),u&&(o=(u[t]-d)/3,l[`cp2${t}`]=d+o,l[`cp2${r}`]=p+o*e[f])}}function splineCurveMonotone(n,e="x"){const t=getValueAxis(e),r=n.length,a=Array(r).fill(0),o=Array(r);let s,l,u,f=getPoint(n,0);for(s=0;s<r;++s)if(l=u,u=f,f=getPoint(n,s+1),!!u){if(f){const d=f[e]-u[e];a[s]=d!==0?(f[t]-u[t])/d:0}o[s]=l?f?sign(a[s-1])!==sign(a[s])?0:(a[s-1]+a[s])/2:a[s-1]:a[s]}monotoneAdjust(n,a,o),monotoneCompute(n,o,e)}function capControlPoint(n,e,t){return Math.max(Math.min(n,t),e)}function capBezierPoints(n,e){let t,r,a,o,s,l=_isPointInArea(n[0],e);for(t=0,r=n.length;t<r;++t)s=o,o=l,l=t<r-1&&_isPointInArea(n[t+1],e),o&&(a=n[t],s&&(a.cp1x=capControlPoint(a.cp1x,e.left,e.right),a.cp1y=capControlPoint(a.cp1y,e.top,e.bottom)),l&&(a.cp2x=capControlPoint(a.cp2x,e.left,e.right),a.cp2y=capControlPoint(a.cp2y,e.top,e.bottom)))}function _updateBezierControlPoints(n,e,t,r,a){let o,s,l,u;if(e.spanGaps&&(n=n.filter(f=>!f.skip)),e.cubicInterpolationMode==="monotone")splineCurveMonotone(n,a);else{let f=r?n[n.length-1]:n[0];for(o=0,s=n.length;o<s;++o)l=n[o],u=splineCurve(f,l,n[Math.min(o+1,s-(r?0:1))%s],e.tension),l.cp1x=u.previous.x,l.cp1y=u.previous.y,l.cp2x=u.next.x,l.cp2y=u.next.y,f=l}e.capBezierPoints&&capBezierPoints(n,t)}function _isDomSupported(){return typeof window<"u"&&typeof document<"u"}function _getParentNode(n){let e=n.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function parseMaxStyle(n,e,t){let r;return typeof n=="string"?(r=parseInt(n,10),n.indexOf("%")!==-1&&(r=r/100*e.parentNode[t])):r=n,r}const getComputedStyle$1=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function getStyle(n,e){return getComputedStyle$1(n).getPropertyValue(e)}const positions=["top","right","bottom","left"];function getPositionedStyle(n,e,t){const r={};t=t?"-"+t:"";for(let a=0;a<4;a++){const o=positions[a];r[o]=parseFloat(n[e+"-"+o+t])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const useOffsetPos=(n,e,t)=>(n>0||e>0)&&(!t||!t.shadowRoot);function getCanvasPosition(n,e){const t=n.touches,r=t&&t.length?t[0]:n,{offsetX:a,offsetY:o}=r;let s=!1,l,u;if(useOffsetPos(a,o,n.target))l=a,u=o;else{const f=e.getBoundingClientRect();l=r.clientX-f.left,u=r.clientY-f.top,s=!0}return{x:l,y:u,box:s}}function getRelativePosition(n,e){if("native"in n)return n;const{canvas:t,currentDevicePixelRatio:r}=e,a=getComputedStyle$1(t),o=a.boxSizing==="border-box",s=getPositionedStyle(a,"padding"),l=getPositionedStyle(a,"border","width"),{x:u,y:f,box:d}=getCanvasPosition(n,t),p=s.left+(d&&l.left),v=s.top+(d&&l.top);let{width:y,height:x}=e;return o&&(y-=s.width+l.width,x-=s.height+l.height),{x:Math.round((u-p)/y*t.width/r),y:Math.round((f-v)/x*t.height/r)}}function getContainerSize(n,e,t){let r,a;if(e===void 0||t===void 0){const o=n&&_getParentNode(n);if(!o)e=n.clientWidth,t=n.clientHeight;else{const s=o.getBoundingClientRect(),l=getComputedStyle$1(o),u=getPositionedStyle(l,"border","width"),f=getPositionedStyle(l,"padding");e=s.width-f.width-u.width,t=s.height-f.height-u.height,r=parseMaxStyle(l.maxWidth,o,"clientWidth"),a=parseMaxStyle(l.maxHeight,o,"clientHeight")}}return{width:e,height:t,maxWidth:r||INFINITY,maxHeight:a||INFINITY}}const round1=n=>Math.round(n*10)/10;function getMaximumSize(n,e,t,r){const a=getComputedStyle$1(n),o=getPositionedStyle(a,"margin"),s=parseMaxStyle(a.maxWidth,n,"clientWidth")||INFINITY,l=parseMaxStyle(a.maxHeight,n,"clientHeight")||INFINITY,u=getContainerSize(n,e,t);let{width:f,height:d}=u;if(a.boxSizing==="content-box"){const v=getPositionedStyle(a,"border","width"),y=getPositionedStyle(a,"padding");f-=y.width+v.width,d-=y.height+v.height}return f=Math.max(0,f-o.width),d=Math.max(0,r?f/r:d-o.height),f=round1(Math.min(f,s,u.maxWidth)),d=round1(Math.min(d,l,u.maxHeight)),f&&!d&&(d=round1(f/2)),(e!==void 0||t!==void 0)&&r&&u.height&&d>u.height&&(d=u.height,f=round1(Math.floor(d*r))),{width:f,height:d}}function retinaScale(n,e,t){const r=e||1,a=round1(n.height*r),o=round1(n.width*r);n.height=round1(n.height),n.width=round1(n.width);const s=n.canvas;return s.style&&(t||!s.style.height&&!s.style.width)&&(s.style.height=`${n.height}px`,s.style.width=`${n.width}px`),n.currentDevicePixelRatio!==r||s.height!==a||s.width!==o?(n.currentDevicePixelRatio=r,s.height=a,s.width=o,n.ctx.setTransform(r,0,0,r,0,0),!0):!1}const supportsEventListenerOptions=(function(){let n=!1;try{const e={get passive(){return n=!0,!1}};_isDomSupported()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return n})();function readUsedSize(n,e){const t=getStyle(n,e),r=t&&t.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function _pointInLine(n,e,t,r){return{x:n.x+t*(e.x-n.x),y:n.y+t*(e.y-n.y)}}function _steppedInterpolation(n,e,t,r){return{x:n.x+t*(e.x-n.x),y:r==="middle"?t<.5?n.y:e.y:r==="after"?t<1?n.y:e.y:t>0?e.y:n.y}}function _bezierInterpolation(n,e,t,r){const a={x:n.cp2x,y:n.cp2y},o={x:e.cp1x,y:e.cp1y},s=_pointInLine(n,a,t),l=_pointInLine(a,o,t),u=_pointInLine(o,e,t),f=_pointInLine(s,l,t),d=_pointInLine(l,u,t);return _pointInLine(f,d,t)}const getRightToLeftAdapter=function(n,e){return{x(t){return n+n+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,r){return t-r},leftForLtr(t,r){return t-r}}},getLeftToRightAdapter=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,e){return n+e},leftForLtr(n,e){return n}}};function getRtlAdapter(n,e,t){return n?getRightToLeftAdapter(e,t):getLeftToRightAdapter()}function overrideTextDirection(n,e){let t,r;(e==="ltr"||e==="rtl")&&(t=n.canvas.style,r=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),n.prevTextDirection=r)}function restoreTextDirection(n,e){e!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",e[0],e[1]))}function propertyFn(n){return n==="angle"?{between:_angleBetween,compare:_angleDiff,normalize:_normalizeAngle}:{between:_isBetween,compare:(e,t)=>e-t,normalize:e=>e}}function normalizeSegment({start:n,end:e,count:t,loop:r,style:a}){return{start:n%t,end:e%t,loop:r&&(e-n+1)%t===0,style:a}}function getSegment(n,e,t){const{property:r,start:a,end:o}=t,{between:s,normalize:l}=propertyFn(r),u=e.length;let{start:f,end:d,loop:p}=n,v,y;if(p){for(f+=u,d+=u,v=0,y=u;v<y&&s(l(e[f%u][r]),a,o);++v)f--,d--;f%=u,d%=u}return d<f&&(d+=u),{start:f,end:d,loop:p,style:n.style}}function _boundSegment(n,e,t){if(!t)return[n];const{property:r,start:a,end:o}=t,s=e.length,{compare:l,between:u,normalize:f}=propertyFn(r),{start:d,end:p,loop:v,style:y}=getSegment(n,e,t),x=[];let E=!1,C=null,A,M,V;const R=()=>u(a,V,A)&&l(a,V)!==0,q=()=>l(o,A)===0||u(o,V,A),Q=()=>E||R(),m=()=>!E||q();for(let ne=d,re=d;ne<=p;++ne)M=e[ne%s],!M.skip&&(A=f(M[r]),A!==V&&(E=u(A,a,o),C===null&&Q()&&(C=l(A,a)===0?ne:re),C!==null&&m()&&(x.push(normalizeSegment({start:C,end:ne,loop:v,count:s,style:y})),C=null),re=ne,V=A));return C!==null&&x.push(normalizeSegment({start:C,end:p,loop:v,count:s,style:y})),x}function _boundSegments(n,e){const t=[],r=n.segments;for(let a=0;a<r.length;a++){const o=_boundSegment(r[a],n.points,e);o.length&&t.push(...o)}return t}function findStartAndEnd(n,e,t,r){let a=0,o=e-1;if(t&&!r)for(;a<e&&!n[a].skip;)a++;for(;a<e&&n[a].skip;)a++;for(a%=e,t&&(o+=a);o>a&&n[o%e].skip;)o--;return o%=e,{start:a,end:o}}function solidSegments(n,e,t,r){const a=n.length,o=[];let s=e,l=n[e],u;for(u=e+1;u<=t;++u){const f=n[u%a];f.skip||f.stop?l.skip||(r=!1,o.push({start:e%a,end:(u-1)%a,loop:r}),e=s=f.stop?u:null):(s=u,l.skip&&(e=u)),l=f}return s!==null&&o.push({start:e%a,end:s%a,loop:r}),o}function _computeSegments(n,e){const t=n.points,r=n.options.spanGaps,a=t.length;if(!a)return[];const o=!!n._loop,{start:s,end:l}=findStartAndEnd(t,a,o,r);if(r===!0)return splitByStyles(n,[{start:s,end:l,loop:o}],t,e);const u=l<s?l+a:l,f=!!n._fullLoop&&s===0&&l===a-1;return splitByStyles(n,solidSegments(t,s,u,f),t,e)}function splitByStyles(n,e,t,r){return!r||!r.setContext||!t?e:doSplitByStyles(n,e,t,r)}function doSplitByStyles(n,e,t,r){const a=n._chart.getContext(),o=readStyle(n.options),{_datasetIndex:s,options:{spanGaps:l}}=n,u=t.length,f=[];let d=o,p=e[0].start,v=p;function y(x,E,C,A){const M=l?-1:1;if(x!==E){for(x+=u;t[x%u].skip;)x-=M;for(;t[E%u].skip;)E+=M;x%u!==E%u&&(f.push({start:x%u,end:E%u,loop:C,style:A}),d=A,p=E%u)}}for(const x of e){p=l?p:x.start;let E=t[p%u],C;for(v=p+1;v<=x.end;v++){const A=t[v%u];C=readStyle(r.setContext(createContext(a,{type:"segment",p0:E,p1:A,p0DataIndex:(v-1)%u,p1DataIndex:v%u,datasetIndex:s}))),styleChanged(C,d)&&y(p,v-1,x.loop,d),E=A,d=C}p<v-1&&y(p,v-1,x.loop,d)}return f}function readStyle(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function styleChanged(n,e){if(!e)return!1;const t=[],r=function(a,o){return isPatternOrGradient(o)?(t.includes(o)||t.push(o),t.indexOf(o)):o};return JSON.stringify(n,r)!==JSON.stringify(e,r)}function getSizeForArea(n,e,t){return n.options.clip?n[t]:e[t]}function getDatasetArea(n,e){const{xScale:t,yScale:r}=n;return t&&r?{left:getSizeForArea(t,e,"left"),right:getSizeForArea(t,e,"right"),top:getSizeForArea(r,e,"top"),bottom:getSizeForArea(r,e,"bottom")}:e}function getDatasetClipArea(n,e){const t=e._clip;if(t.disabled)return!1;const r=getDatasetArea(e,n.chartArea);return{left:t.left===!1?0:r.left-(t.left===!0?0:t.left),right:t.right===!1?n.width:r.right+(t.right===!0?0:t.right),top:t.top===!1?0:r.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?n.height:r.bottom+(t.bottom===!0?0:t.bottom)}}class Animator{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,r,a){const o=t.listeners[a],s=t.duration;o.forEach(l=>l({chart:e,initial:t.initial,numSteps:s,currentStep:Math.min(r-t.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=requestAnimFrame.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((r,a)=>{if(!r.running||!r.items.length)return;const o=r.items;let s=o.length-1,l=!1,u;for(;s>=0;--s)u=o[s],u._active?(u._total>r.duration&&(r.duration=u._total),u.tick(e),l=!0):(o[s]=o[o.length-1],o.pop());l&&(a.draw(),this._notify(a,r,e,"progress")),o.length||(r.running=!1,this._notify(a,r,e,"complete"),r.initial=!1),t+=o.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let r=t.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,r)),r}listen(e,t,r){this._getAnims(e).listeners[t].push(r)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((r,a)=>Math.max(r,a._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const r=t.items;let a=r.length-1;for(;a>=0;--a)r[a].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var animator=new Animator;const transparent="transparent",interpolators={boolean(n,e,t){return t>.5?e:n},color(n,e,t){const r=color(n||transparent),a=r.valid&&color(e||transparent);return a&&a.valid?a.mix(r,t).hexString():e},number(n,e,t){return n+(e-n)*t}};class Animation{constructor(e,t,r,a){const o=t[r];a=resolve([e.to,a,o,e.from]);const s=resolve([e.from,o,a]);this._active=!0,this._fn=e.fn||interpolators[e.type||typeof s],this._easing=effects[e.easing]||effects.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=r,this._from=s,this._to=a,this._promises=void 0}active(){return this._active}update(e,t,r){if(this._active){this._notify(!1);const a=this._target[this._prop],o=r-this._start,s=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(s,e.duration)),this._total+=o,this._loop=!!e.loop,this._to=resolve([e.to,t,a,e.from]),this._from=resolve([e.from,a,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,r=this._duration,a=this._prop,o=this._from,s=this._loop,l=this._to;let u;if(this._active=o!==l&&(s||t<r),!this._active){this._target[a]=l,this._notify(!0);return}if(t<0){this._target[a]=o;return}u=t/r%2,u=s&&u>1?2-u:u,u=this._easing(Math.min(1,Math.max(0,u))),this._target[a]=this._fn(o,l,u)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,r)=>{e.push({res:t,rej:r})})}_notify(e){const t=e?"res":"rej",r=this._promises||[];for(let a=0;a<r.length;a++)r[a][t]()}}class Animations{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!isObject(e))return;const t=Object.keys(defaults.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(a=>{const o=e[a];if(!isObject(o))return;const s={};for(const l of t)s[l]=o[l];(isArray(o.properties)&&o.properties||[a]).forEach(l=>{(l===a||!r.has(l))&&r.set(l,s)})})}_animateOptions(e,t){const r=t.options,a=resolveTargetOptions(e,r);if(!a)return[];const o=this._createAnimations(a,r);return r.$shared&&awaitAll(e.options.$animations,r).then(()=>{e.options=r},()=>{}),o}_createAnimations(e,t){const r=this._properties,a=[],o=e.$animations||(e.$animations={}),s=Object.keys(t),l=Date.now();let u;for(u=s.length-1;u>=0;--u){const f=s[u];if(f.charAt(0)==="$")continue;if(f==="options"){a.push(...this._animateOptions(e,t));continue}const d=t[f];let p=o[f];const v=r.get(f);if(p)if(v&&p.active()){p.update(v,d,l);continue}else p.cancel();if(!v||!v.duration){e[f]=d;continue}o[f]=p=new Animation(v,e,f,d),a.push(p)}return a}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const r=this._createAnimations(e,t);if(r.length)return animator.add(this._chart,r),!0}}function awaitAll(n,e){const t=[],r=Object.keys(e);for(let a=0;a<r.length;a++){const o=n[r[a]];o&&o.active()&&t.push(o.wait())}return Promise.all(t)}function resolveTargetOptions(n,e){if(!e)return;let t=n.options;if(!t){n.options=e;return}return t.$shared&&(n.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function scaleClip(n,e){const t=n&&n.options||{},r=t.reverse,a=t.min===void 0?e:0,o=t.max===void 0?e:0;return{start:r?o:a,end:r?a:o}}function defaultClip(n,e,t){if(t===!1)return!1;const r=scaleClip(n,t),a=scaleClip(e,t);return{top:a.end,right:r.end,bottom:a.start,left:r.start}}function toClip(n){let e,t,r,a;return isObject(n)?(e=n.top,t=n.right,r=n.bottom,a=n.left):e=t=r=a=n,{top:e,right:t,bottom:r,left:a,disabled:n===!1}}function getSortedDatasetIndices(n,e){const t=[],r=n._getSortedDatasetMetas(e);let a,o;for(a=0,o=r.length;a<o;++a)t.push(r[a].index);return t}function applyStack(n,e,t,r={}){const a=n.keys,o=r.mode==="single";let s,l,u,f;if(e===null)return;let d=!1;for(s=0,l=a.length;s<l;++s){if(u=+a[s],u===t){if(d=!0,r.all)continue;break}f=n.values[u],isNumberFinite(f)&&(o||e===0||sign(e)===sign(f))&&(e+=f)}return!d&&!r.all?0:e}function convertObjectDataToArray(n,e){const{iScale:t,vScale:r}=e,a=t.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",s=Object.keys(n),l=new Array(s.length);let u,f,d;for(u=0,f=s.length;u<f;++u)d=s[u],l[u]={[a]:d,[o]:n[d]};return l}function isStacked(n,e){const t=n&&n.options.stacked;return t||t===void 0&&e.stack!==void 0}function getStackKey(n,e,t){return`${n.id}.${e.id}.${t.stack||t.type}`}function getUserBounds(n){const{min:e,max:t,minDefined:r,maxDefined:a}=n.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:a?t:Number.POSITIVE_INFINITY}}function getOrCreateStack(n,e,t){const r=n[e]||(n[e]={});return r[t]||(r[t]={})}function getLastIndexInStack(n,e,t,r){for(const a of e.getMatchingVisibleMetas(r).reverse()){const o=n[a.index];if(t&&o>0||!t&&o<0)return a.index}return null}function updateStacks(n,e){const{chart:t,_cachedMeta:r}=n,a=t._stacks||(t._stacks={}),{iScale:o,vScale:s,index:l}=r,u=o.axis,f=s.axis,d=getStackKey(o,s,r),p=e.length;let v;for(let y=0;y<p;++y){const x=e[y],{[u]:E,[f]:C}=x,A=x._stacks||(x._stacks={});v=A[f]=getOrCreateStack(a,d,E),v[l]=C,v._top=getLastIndexInStack(v,s,!0,r.type),v._bottom=getLastIndexInStack(v,s,!1,r.type);const M=v._visualValues||(v._visualValues={});M[l]=C}}function getFirstScaleId(n,e){const t=n.scales;return Object.keys(t).filter(r=>t[r].axis===e).shift()}function createDatasetContext(n,e){return createContext(n,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function createDataContext(n,e,t){return createContext(n,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function clearStacks(n,e){const t=n.controller.index,r=n.vScale&&n.vScale.axis;if(r){e=e||n._parsed;for(const a of e){const o=a._stacks;if(!o||o[r]===void 0||o[r][t]===void 0)return;delete o[r][t],o[r]._visualValues!==void 0&&o[r]._visualValues[t]!==void 0&&delete o[r]._visualValues[t]}}}const isDirectUpdateMode=n=>n==="reset"||n==="none",cloneIfNotShared=(n,e)=>e?n:Object.assign({},n),createStack=(n,e,t)=>n&&!e.hidden&&e._stacked&&{keys:getSortedDatasetIndices(t,!0),values:null};class DatasetController{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=isStacked(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&clearStacks(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,r=this.getDataset(),a=(p,v,y,x)=>p==="x"?v:p==="r"?x:y,o=t.xAxisID=valueOrDefault(r.xAxisID,getFirstScaleId(e,"x")),s=t.yAxisID=valueOrDefault(r.yAxisID,getFirstScaleId(e,"y")),l=t.rAxisID=valueOrDefault(r.rAxisID,getFirstScaleId(e,"r")),u=t.indexAxis,f=t.iAxisID=a(u,o,s,l),d=t.vAxisID=a(u,s,o,l);t.xScale=this.getScaleForId(o),t.yScale=this.getScaleForId(s),t.rScale=this.getScaleForId(l),t.iScale=this.getScaleForId(f),t.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&unlistenArrayEvents(this._data,this),e._stacked&&clearStacks(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),r=this._data;if(isObject(t)){const a=this._cachedMeta;this._data=convertObjectDataToArray(t,a)}else if(r!==t){if(r){unlistenArrayEvents(r,this);const a=this._cachedMeta;clearStacks(a),a._parsed=[]}t&&Object.isExtensible(t)&&listenArrayEvents(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,r=this.getDataset();let a=!1;this._dataCheck();const o=t._stacked;t._stacked=isStacked(t.vScale,t),t.stack!==r.stack&&(a=!0,clearStacks(t),t.stack=r.stack),this._resyncElements(e),(a||o!==t._stacked)&&(updateStacks(this,t._parsed),t._stacked=isStacked(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:r,_data:a}=this,{iScale:o,_stacked:s}=r,l=o.axis;let u=e===0&&t===a.length?!0:r._sorted,f=e>0&&r._parsed[e-1],d,p,v;if(this._parsing===!1)r._parsed=a,r._sorted=!0,v=a;else{isArray(a[e])?v=this.parseArrayData(r,a,e,t):isObject(a[e])?v=this.parseObjectData(r,a,e,t):v=this.parsePrimitiveData(r,a,e,t);const y=()=>p[l]===null||f&&p[l]<f[l];for(d=0;d<t;++d)r._parsed[d+e]=p=v[d],u&&(y()&&(u=!1),f=p);r._sorted=u}s&&updateStacks(this,v)}parsePrimitiveData(e,t,r,a){const{iScale:o,vScale:s}=e,l=o.axis,u=s.axis,f=o.getLabels(),d=o===s,p=new Array(a);let v,y,x;for(v=0,y=a;v<y;++v)x=v+r,p[v]={[l]:d||o.parse(f[x],x),[u]:s.parse(t[x],x)};return p}parseArrayData(e,t,r,a){const{xScale:o,yScale:s}=e,l=new Array(a);let u,f,d,p;for(u=0,f=a;u<f;++u)d=u+r,p=t[d],l[u]={x:o.parse(p[0],d),y:s.parse(p[1],d)};return l}parseObjectData(e,t,r,a){const{xScale:o,yScale:s}=e,{xAxisKey:l="x",yAxisKey:u="y"}=this._parsing,f=new Array(a);let d,p,v,y;for(d=0,p=a;d<p;++d)v=d+r,y=t[v],f[d]={x:o.parse(resolveObjectKey(y,l),v),y:s.parse(resolveObjectKey(y,u),v)};return f}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,r){const a=this.chart,o=this._cachedMeta,s=t[e.axis],l={keys:getSortedDatasetIndices(a,!0),values:t._stacks[e.axis]._visualValues};return applyStack(l,s,o.index,{mode:r})}updateRangeFromParsed(e,t,r,a){const o=r[t.axis];let s=o===null?NaN:o;const l=a&&r._stacks[t.axis];a&&l&&(a.values=l,s=applyStack(a,o,this._cachedMeta.index)),e.min=Math.min(e.min,s),e.max=Math.max(e.max,s)}getMinMax(e,t){const r=this._cachedMeta,a=r._parsed,o=r._sorted&&e===r.iScale,s=a.length,l=this._getOtherScale(e),u=createStack(t,r,this.chart),f={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:p}=getUserBounds(l);let v,y;function x(){y=a[v];const E=y[l.axis];return!isNumberFinite(y[e.axis])||d>E||p<E}for(v=0;v<s&&!(!x()&&(this.updateRangeFromParsed(f,e,y,u),o));++v);if(o){for(v=s-1;v>=0;--v)if(!x()){this.updateRangeFromParsed(f,e,y,u);break}}return f}getAllParsedValues(e){const t=this._cachedMeta._parsed,r=[];let a,o,s;for(a=0,o=t.length;a<o;++a)s=t[a][e.axis],isNumberFinite(s)&&r.push(s);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,r=t.iScale,a=t.vScale,o=this.getParsed(e);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:a?""+a.getLabelForValue(o[a.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=toClip(valueOrDefault(this.options.clip,defaultClip(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,r=this._cachedMeta,a=r.data||[],o=t.chartArea,s=[],l=this._drawStart||0,u=this._drawCount||a.length-l,f=this.options.drawActiveElementsOnTop;let d;for(r.dataset&&r.dataset.draw(e,o,l,u),d=l;d<l+u;++d){const p=a[d];p.hidden||(p.active&&f?s.push(p):p.draw(e,o))}for(d=0;d<s.length;++d)s[d].draw(e,o)}getStyle(e,t){const r=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,t,r){const a=this.getDataset();let o;if(e>=0&&e<this._cachedMeta.data.length){const s=this._cachedMeta.data[e];o=s.$context||(s.$context=createDataContext(this.getContext(),e,s)),o.parsed=this.getParsed(e),o.raw=a.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=createDatasetContext(this.chart.getContext(),this.index)),o.dataset=a,o.index=o.datasetIndex=this.index;return o.active=!!t,o.mode=r,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",r){const a=t==="active",o=this._cachedDataOpts,s=e+"-"+t,l=o[s],u=this.enableOptionSharing&&defined(r);if(l)return cloneIfNotShared(l,u);const f=this.chart.config,d=f.datasetElementScopeKeys(this._type,e),p=a?[`${e}Hover`,"hover",e,""]:[e,""],v=f.getOptionScopes(this.getDataset(),d),y=Object.keys(defaults.elements[e]),x=()=>this.getContext(r,a,t),E=f.resolveNamedOptions(v,y,x,p);return E.$shared&&(E.$shared=u,o[s]=Object.freeze(cloneIfNotShared(E,u))),E}_resolveAnimations(e,t,r){const a=this.chart,o=this._cachedDataOpts,s=`animation-${t}`,l=o[s];if(l)return l;let u;if(a.options.animation!==!1){const d=this.chart.config,p=d.datasetAnimationScopeKeys(this._type,t),v=d.getOptionScopes(this.getDataset(),p);u=d.createResolver(v,this.getContext(e,r,t))}const f=new Animations(a,u&&u.animations);return u&&u._cacheable&&(o[s]=Object.freeze(f)),f}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||isDirectUpdateMode(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const r=this.resolveDataElementOptions(e,t),a=this._sharedOptions,o=this.getSharedOptions(r),s=this.includeOptions(t,o)||o!==a;return this.updateSharedOptions(o,t,r),{sharedOptions:o,includeOptions:s}}updateElement(e,t,r,a){isDirectUpdateMode(a)?Object.assign(e,r):this._resolveAnimations(t,a).update(e,r)}updateSharedOptions(e,t,r){e&&!isDirectUpdateMode(t)&&this._resolveAnimations(void 0,t).update(e,r)}_setStyle(e,t,r,a){e.active=a;const o=this.getStyle(t,a);this._resolveAnimations(t,r,a).update(e,{options:!a&&this.getSharedOptions(o)||o})}removeHoverStyle(e,t,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,t,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,r=this._cachedMeta.data;for(const[l,u,f]of this._syncList)this[l](u,f);this._syncList=[];const a=r.length,o=t.length,s=Math.min(o,a);s&&this.parse(0,s),o>a?this._insertElements(a,o-a,e):o<a&&this._removeElements(o,a-o)}_insertElements(e,t,r=!0){const a=this._cachedMeta,o=a.data,s=e+t;let l;const u=f=>{for(f.length+=t,l=f.length-1;l>=s;l--)f[l]=f[l-t]};for(u(o),l=e;l<s;++l)o[l]=new this.dataElementType;this._parsing&&u(a._parsed),this.parse(e,t),r&&this.updateElements(o,e,t,"reset")}updateElements(e,t,r,a){}_removeElements(e,t){const r=this._cachedMeta;if(this._parsing){const a=r._parsed.splice(e,t);r._stacked&&clearStacks(r,a)}r.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,r,a]=e;this[t](r,a)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function getAllScaleValues(n,e){if(!n._cache.$bar){const t=n.getMatchingVisibleMetas(e);let r=[];for(let a=0,o=t.length;a<o;a++)r=r.concat(t[a].controller.getAllParsedValues(n));n._cache.$bar=_arrayUnique(r.sort((a,o)=>a-o))}return n._cache.$bar}function computeMinSampleSize(n){const e=n.iScale,t=getAllScaleValues(e,n.type);let r=e._length,a,o,s,l;const u=()=>{s===32767||s===-32768||(defined(l)&&(r=Math.min(r,Math.abs(s-l)||r)),l=s)};for(a=0,o=t.length;a<o;++a)s=e.getPixelForValue(t[a]),u();for(l=void 0,a=0,o=e.ticks.length;a<o;++a)s=e.getPixelForTick(a),u();return r}function computeFitCategoryTraits(n,e,t,r){const a=t.barThickness;let o,s;return isNullOrUndef(a)?(o=e.min*t.categoryPercentage,s=t.barPercentage):(o=a*r,s=1),{chunk:o/r,ratio:s,start:e.pixels[n]-o/2}}function computeFlexCategoryTraits(n,e,t,r){const a=e.pixels,o=a[n];let s=n>0?a[n-1]:null,l=n<a.length-1?a[n+1]:null;const u=t.categoryPercentage;s===null&&(s=o-(l===null?e.end-e.start:l-o)),l===null&&(l=o+o-s);const f=o-(o-Math.min(s,l))/2*u;return{chunk:Math.abs(l-s)/2*u/r,ratio:t.barPercentage,start:f}}function parseFloatBar(n,e,t,r){const a=t.parse(n[0],r),o=t.parse(n[1],r),s=Math.min(a,o),l=Math.max(a,o);let u=s,f=l;Math.abs(s)>Math.abs(l)&&(u=l,f=s),e[t.axis]=f,e._custom={barStart:u,barEnd:f,start:a,end:o,min:s,max:l}}function parseValue(n,e,t,r){return isArray(n)?parseFloatBar(n,e,t,r):e[t.axis]=t.parse(n,r),e}function parseArrayOrPrimitive(n,e,t,r){const a=n.iScale,o=n.vScale,s=a.getLabels(),l=a===o,u=[];let f,d,p,v;for(f=t,d=t+r;f<d;++f)v=e[f],p={},p[a.axis]=l||a.parse(s[f],f),u.push(parseValue(v,p,o,f));return u}function isFloatBar(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function barSign(n,e,t){return n!==0?sign(n):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function borderProps(n){let e,t,r,a,o;return n.horizontal?(e=n.base>n.x,t="left",r="right"):(e=n.base<n.y,t="bottom",r="top"),e?(a="end",o="start"):(a="start",o="end"),{start:t,end:r,reverse:e,top:a,bottom:o}}function setBorderSkipped(n,e,t,r){let a=e.borderSkipped;const o={};if(!a){n.borderSkipped=o;return}if(a===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:l,reverse:u,top:f,bottom:d}=borderProps(n);a==="middle"&&t&&(n.enableBorderRadius=!0,(t._top||0)===r?a=f:(t._bottom||0)===r?a=d:(o[parseEdge(d,s,l,u)]=!0,a=f)),o[parseEdge(a,s,l,u)]=!0,n.borderSkipped=o}function parseEdge(n,e,t,r){return r?(n=swap(n,e,t),n=startEnd(n,t,e)):n=startEnd(n,e,t),n}function swap(n,e,t){return n===e?t:n===t?e:n}function startEnd(n,e,t){return n==="start"?e:n==="end"?t:n}function setInflateAmount(n,{inflateAmount:e},t){n.inflateAmount=e==="auto"?t===1?.33:0:e}class BarController extends DatasetController{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(e,t,r,a){return parseArrayOrPrimitive(e,t,r,a)}parseArrayData(e,t,r,a){return parseArrayOrPrimitive(e,t,r,a)}parseObjectData(e,t,r,a){const{iScale:o,vScale:s}=e,{xAxisKey:l="x",yAxisKey:u="y"}=this._parsing,f=o.axis==="x"?l:u,d=s.axis==="x"?l:u,p=[];let v,y,x,E;for(v=r,y=r+a;v<y;++v)E=t[v],x={},x[o.axis]=o.parse(resolveObjectKey(E,f),v),p.push(parseValue(resolveObjectKey(E,d),x,s,v));return p}updateRangeFromParsed(e,t,r,a){super.updateRangeFromParsed(e,t,r,a);const o=r._custom;o&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,o.min),e.max=Math.max(e.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:r,vScale:a}=t,o=this.getParsed(e),s=o._custom,l=isFloatBar(s)?"["+s.start+", "+s.end+"]":""+a.getLabelForValue(o[a.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,r,a){const o=a==="reset",{index:s,_cachedMeta:{vScale:l}}=this,u=l.getBasePixel(),f=l.isHorizontal(),d=this._getRuler(),{sharedOptions:p,includeOptions:v}=this._getSharedOptions(t,a);for(let y=t;y<t+r;y++){const x=this.getParsed(y),E=o||isNullOrUndef(x[l.axis])?{base:u,head:u}:this._calculateBarValuePixels(y),C=this._calculateBarIndexPixels(y,d),A=(x._stacks||{})[l.axis],M={horizontal:f,base:E.base,enableBorderRadius:!A||isFloatBar(x._custom)||s===A._top||s===A._bottom,x:f?E.head:C.center,y:f?C.center:E.head,height:f?C.size:Math.abs(E.size),width:f?Math.abs(E.size):C.size};v&&(M.options=p||this.resolveDataElementOptions(y,e[y].active?"active":a));const V=M.options||e[y].options;setBorderSkipped(M,V,A,s),setInflateAmount(M,V,d.ratio),this.updateElement(e[y],y,M,a)}}_getStacks(e,t){const{iScale:r}=this._cachedMeta,a=r.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),o=r.options.stacked,s=[],l=this._cachedMeta.controller.getParsed(t),u=l&&l[r.axis],f=d=>{const p=d._parsed.find(y=>y[r.axis]===u),v=p&&p[d.vScale.axis];if(isNullOrUndef(v)||isNaN(v))return!0};for(const d of a)if(!(t!==void 0&&f(d))&&((o===!1||s.indexOf(d.stack)===-1||o===void 0&&d.stack===void 0)&&s.push(d.stack),d.index===e))break;return s.length||s.push(void 0),s}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===t).shift()}_getAxis(){const e={},t=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[valueOrDefault(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,r){const a=this._getStacks(e,r),o=t!==void 0?a.indexOf(t):-1;return o===-1?a.length-1:o}_getRuler(){const e=this.options,t=this._cachedMeta,r=t.iScale,a=[];let o,s;for(o=0,s=t.data.length;o<s;++o)a.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const l=e.barThickness;return{min:l||computeMinSampleSize(t),pixels:a,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:l?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:r,index:a},options:{base:o,minBarLength:s}}=this,l=o||0,u=this.getParsed(e),f=u._custom,d=isFloatBar(f);let p=u[t.axis],v=0,y=r?this.applyStack(t,u,r):p,x,E;y!==p&&(v=y-p,y=p),d&&(p=f.barStart,y=f.barEnd-f.barStart,p!==0&&sign(p)!==sign(f.barEnd)&&(v=0),v+=p);const C=!isNullOrUndef(o)&&!d?o:v;let A=t.getPixelForValue(C);if(this.chart.getDataVisibility(e)?x=t.getPixelForValue(v+y):x=A,E=x-A,Math.abs(E)<s){E=barSign(E,t,l)*s,p===l&&(A-=E/2);const M=t.getPixelForDecimal(0),V=t.getPixelForDecimal(1),R=Math.min(M,V),q=Math.max(M,V);A=Math.max(Math.min(A,q),R),x=A+E,r&&!d&&(u._stacks[t.axis]._visualValues[a]=t.getValueForPixel(x)-t.getValueForPixel(A))}if(A===t.getPixelForValue(l)){const M=sign(E)*t.getLineWidthForValue(l)/2;A+=M,E-=M}return{size:E,base:A,head:x,center:x+E/2}}_calculateBarIndexPixels(e,t){const r=t.scale,a=this.options,o=a.skipNull,s=valueOrDefault(a.maxBarThickness,1/0);let l,u;const f=this._getAxisCount();if(t.grouped){const d=o?this._getStackCount(e):t.stackCount,p=a.barThickness==="flex"?computeFlexCategoryTraits(e,t,a,d*f):computeFitCategoryTraits(e,t,a,d*f),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,y=this._getAxis().indexOf(valueOrDefault(v,this.getFirstScaleIdForIndexAxis())),x=this._getStackIndex(this.index,this._cachedMeta.stack,o?e:void 0)+y;l=p.start+p.chunk*x+p.chunk/2,u=Math.min(s,p.chunk*p.ratio)}else l=r.getPixelForValue(this.getParsed(e)[r.axis],e),u=Math.min(s,t.min*t.ratio);return{base:l-u/2,head:l+u/2,center:l,size:u}}draw(){const e=this._cachedMeta,t=e.vScale,r=e.data,a=r.length;let o=0;for(;o<a;++o)this.getParsed(o)[t.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}class BubbleController extends DatasetController{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,r,a){const o=super.parsePrimitiveData(e,t,r,a);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+r).radius;return o}parseArrayData(e,t,r,a){const o=super.parseArrayData(e,t,r,a);for(let s=0;s<o.length;s++){const l=t[r+s];o[s]._custom=valueOrDefault(l[2],this.resolveDataElementOptions(s+r).radius)}return o}parseObjectData(e,t,r,a){const o=super.parseObjectData(e,t,r,a);for(let s=0;s<o.length;s++){const l=t[r+s];o[s]._custom=valueOrDefault(l&&l.r&&+l.r,this.resolveDataElementOptions(s+r).radius)}return o}getMaxOverflow(){const e=this._cachedMeta.data;let t=0;for(let r=e.length-1;r>=0;--r)t=Math.max(t,e[r].size(this.resolveDataElementOptions(r))/2);return t>0&&t}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:o}=t,s=this.getParsed(e),l=a.getLabelForValue(s.x),u=o.getLabelForValue(s.y),f=s._custom;return{label:r[e]||"",value:"("+l+", "+u+(f?", "+f:"")+")"}}update(e){const t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,r,a){const o=a==="reset",{iScale:s,vScale:l}=this._cachedMeta,{sharedOptions:u,includeOptions:f}=this._getSharedOptions(t,a),d=s.axis,p=l.axis;for(let v=t;v<t+r;v++){const y=e[v],x=!o&&this.getParsed(v),E={},C=E[d]=o?s.getPixelForDecimal(.5):s.getPixelForValue(x[d]),A=E[p]=o?l.getBasePixel():l.getPixelForValue(x[p]);E.skip=isNaN(C)||isNaN(A),f&&(E.options=u||this.resolveDataElementOptions(v,y.active?"active":a),o&&(E.options.radius=0)),this.updateElement(y,v,E,a)}}resolveDataElementOptions(e,t){const r=this.getParsed(e);let a=super.resolveDataElementOptions(e,t);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const o=a.radius;return t!=="active"&&(a.radius=0),a.radius+=valueOrDefault(r&&r._custom,o),a}}function getRatioAndOffset(n,e,t){let r=1,a=1,o=0,s=0;if(e<TAU){const l=n,u=l+e,f=Math.cos(l),d=Math.sin(l),p=Math.cos(u),v=Math.sin(u),y=(V,R,q)=>_angleBetween(V,l,u,!0)?1:Math.max(R,R*t,q,q*t),x=(V,R,q)=>_angleBetween(V,l,u,!0)?-1:Math.min(R,R*t,q,q*t),E=y(0,f,p),C=y(HALF_PI,d,v),A=x(PI,f,p),M=x(PI+HALF_PI,d,v);r=(E-A)/2,a=(C-M)/2,o=-(E+A)/2,s=-(C+M)/2}return{ratioX:r,ratioY:a,offsetX:o,offsetY:s}}class DoughnutController extends DatasetController{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data,{labels:{pointStyle:r,textAlign:a,color:o,useBorderRadius:s,borderRadius:l}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((u,f)=>{const p=e.getDatasetMeta(0).controller.getStyle(f);return{text:u,fillStyle:p.backgroundColor,fontColor:o,hidden:!e.getDataVisibility(f),lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,textAlign:a,pointStyle:r,borderRadius:s&&(l||p.borderRadius),index:f}}):[]}},onClick(e,t,r){r.chart.toggleDataVisibility(t.index),r.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){const r=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=r;else{let o=u=>+r[u];if(isObject(r[e])){const{key:u="value"}=this._parsing;o=f=>+resolveObjectKey(r[f],u)}let s,l;for(s=e,l=e+t;s<l;++s)a._parsed[s]=o(s)}}_getRotation(){return toRadians(this.options.rotation-90)}_getCircumference(){return toRadians(this.options.circumference)}_getRotationExtents(){let e=TAU,t=-TAU;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const a=this.chart.getDatasetMeta(r).controller,o=a._getRotation(),s=a._getCircumference();e=Math.min(e,o),t=Math.max(t,o+s)}return{rotation:e,circumference:t-e}}update(e){const t=this.chart,{chartArea:r}=t,a=this._cachedMeta,o=a.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,l=Math.max((Math.min(r.width,r.height)-s)/2,0),u=Math.min(toPercentage(this.options.cutout,l),1),f=this._getRingWeight(this.index),{circumference:d,rotation:p}=this._getRotationExtents(),{ratioX:v,ratioY:y,offsetX:x,offsetY:E}=getRatioAndOffset(p,d,u),C=(r.width-s)/v,A=(r.height-s)/y,M=Math.max(Math.min(C,A)/2,0),V=toDimension(this.options.radius,M),R=Math.max(V*u,0),q=(V-R)/this._getVisibleDatasetWeightTotal();this.offsetX=x*V,this.offsetY=E*V,a.total=this.calculateTotal(),this.outerRadius=V-q*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-q*f,0),this.updateElements(o,0,o.length,e)}_circumference(e,t){const r=this.options,a=this._cachedMeta,o=this._getCircumference();return t&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||a._parsed[e]===null||a.data[e].hidden?0:this.calculateCircumference(a._parsed[e]*o/TAU)}updateElements(e,t,r,a){const o=a==="reset",s=this.chart,l=s.chartArea,f=s.options.animation,d=(l.left+l.right)/2,p=(l.top+l.bottom)/2,v=o&&f.animateScale,y=v?0:this.innerRadius,x=v?0:this.outerRadius,{sharedOptions:E,includeOptions:C}=this._getSharedOptions(t,a);let A=this._getRotation(),M;for(M=0;M<t;++M)A+=this._circumference(M,o);for(M=t;M<t+r;++M){const V=this._circumference(M,o),R=e[M],q={x:d+this.offsetX,y:p+this.offsetY,startAngle:A,endAngle:A+V,circumference:V,outerRadius:x,innerRadius:y};C&&(q.options=E||this.resolveDataElementOptions(M,R.active?"active":a)),A+=V,this.updateElement(R,M,q,a)}}calculateTotal(){const e=this._cachedMeta,t=e.data;let r=0,a;for(a=0;a<t.length;a++){const o=e._parsed[a];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(a)&&!t[a].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(e){const t=this._cachedMeta.total;return t>0&&!isNaN(e)?TAU*(Math.abs(e)/t):0}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart,a=r.data.labels||[],o=formatNumber(t._parsed[e],r.options.locale);return{label:a[e]||"",value:o}}getMaxBorderWidth(e){let t=0;const r=this.chart;let a,o,s,l,u;if(!e){for(a=0,o=r.data.datasets.length;a<o;++a)if(r.isDatasetVisible(a)){s=r.getDatasetMeta(a),e=s.data,l=s.controller;break}}if(!e)return 0;for(a=0,o=e.length;a<o;++a)u=l.resolveDataElementOptions(a),u.borderAlign!=="inner"&&(t=Math.max(t,u.borderWidth||0,u.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let r=0,a=e.length;r<a;++r){const o=this.resolveDataElementOptions(r);t=Math.max(t,o.offset||0,o.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(t+=this._getRingWeight(r));return t}_getRingWeight(e){return Math.max(valueOrDefault(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class LineController extends DatasetController{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const t=this._cachedMeta,{dataset:r,data:a=[],_dataset:o}=t,s=this.chart._animationsDisabled;let{start:l,count:u}=_getStartAndCountOfVisiblePoints(t,a,s);this._drawStart=l,this._drawCount=u,_scaleRangesChanged(t)&&(l=0,u=a.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=a;const f=this.resolveDatasetElementOptions(e);this.options.showLine||(f.borderWidth=0),f.segment=this.options.segment,this.updateElement(r,void 0,{animated:!s,options:f},e),this.updateElements(a,l,u,e)}updateElements(e,t,r,a){const o=a==="reset",{iScale:s,vScale:l,_stacked:u,_dataset:f}=this._cachedMeta,{sharedOptions:d,includeOptions:p}=this._getSharedOptions(t,a),v=s.axis,y=l.axis,{spanGaps:x,segment:E}=this.options,C=isNumber(x)?x:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||o||a==="none",M=t+r,V=e.length;let R=t>0&&this.getParsed(t-1);for(let q=0;q<V;++q){const Q=e[q],m=A?Q:{};if(q<t||q>=M){m.skip=!0;continue}const ne=this.getParsed(q),re=isNullOrUndef(ne[y]),ge=m[v]=s.getPixelForValue(ne[v],q),ve=m[y]=o||re?l.getBasePixel():l.getPixelForValue(u?this.applyStack(l,ne,u):ne[y],q);m.skip=isNaN(ge)||isNaN(ve)||re,m.stop=q>0&&Math.abs(ne[v]-R[v])>C,E&&(m.parsed=ne,m.raw=f.data[q]),p&&(m.options=d||this.resolveDataElementOptions(q,Q.active?"active":a)),A||this.updateElement(Q,q,m,a),R=ne}}getMaxOverflow(){const e=this._cachedMeta,t=e.dataset,r=t.options&&t.options.borderWidth||0,a=e.data||[];if(!a.length)return r;const o=a[0].size(this.resolveDataElementOptions(0)),s=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(r,o,s)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}class PolarAreaController extends DatasetController{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:r,color:a}}=e.legend.options;return t.labels.map((o,s)=>{const u=e.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:u.backgroundColor,strokeStyle:u.borderColor,fontColor:a,lineWidth:u.borderWidth,pointStyle:r,hidden:!e.getDataVisibility(s),index:s}})}return[]}},onClick(e,t,r){r.chart.toggleDataVisibility(t.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){const t=this._cachedMeta,r=this.chart,a=r.data.labels||[],o=formatNumber(t._parsed[e].r,r.options.locale);return{label:a[e]||"",value:o}}parseObjectData(e,t,r,a){return _parseObjectDataRadialScale.bind(this)(e,t,r,a)}update(e){const t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){const e=this._cachedMeta,t={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return e.data.forEach((r,a)=>{const o=this.getParsed(a).r;!isNaN(o)&&this.chart.getDataVisibility(a)&&(o<t.min&&(t.min=o),o>t.max&&(t.max=o))}),t}_updateRadius(){const e=this.chart,t=e.chartArea,r=e.options,a=Math.min(t.right-t.left,t.bottom-t.top),o=Math.max(a/2,0),s=Math.max(r.cutoutPercentage?o/100*r.cutoutPercentage:1,0),l=(o-s)/e.getVisibleDatasetCount();this.outerRadius=o-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(e,t,r,a){const o=a==="reset",s=this.chart,u=s.options.animation,f=this._cachedMeta.rScale,d=f.xCenter,p=f.yCenter,v=f.getIndexAngle(0)-.5*PI;let y=v,x;const E=360/this.countVisibleElements();for(x=0;x<t;++x)y+=this._computeAngle(x,a,E);for(x=t;x<t+r;x++){const C=e[x];let A=y,M=y+this._computeAngle(x,a,E),V=s.getDataVisibility(x)?f.getDistanceFromCenterForValue(this.getParsed(x).r):0;y=M,o&&(u.animateScale&&(V=0),u.animateRotate&&(A=M=v));const R={x:d,y:p,innerRadius:0,outerRadius:V,startAngle:A,endAngle:M,options:this.resolveDataElementOptions(x,C.active?"active":a)};this.updateElement(C,x,R,a)}}countVisibleElements(){const e=this._cachedMeta;let t=0;return e.data.forEach((r,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&t++}),t}_computeAngle(e,t,r){return this.chart.getDataVisibility(e)?toRadians(this.resolveDataElementOptions(e,t).angle||r):0}}class PieController extends DoughnutController{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class RadarController extends DatasetController{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(e){const t=this._cachedMeta.vScale,r=this.getParsed(e);return{label:t.getLabels()[e],value:""+t.getLabelForValue(r[t.axis])}}parseObjectData(e,t,r,a){return _parseObjectDataRadialScale.bind(this)(e,t,r,a)}update(e){const t=this._cachedMeta,r=t.dataset,a=t.data||[],o=t.iScale.getLabels();if(r.points=a,e!=="resize"){const s=this.resolveDatasetElementOptions(e);this.options.showLine||(s.borderWidth=0);const l={_loop:!0,_fullLoop:o.length===a.length,options:s};this.updateElement(r,void 0,l,e)}this.updateElements(a,0,a.length,e)}updateElements(e,t,r,a){const o=this._cachedMeta.rScale,s=a==="reset";for(let l=t;l<t+r;l++){const u=e[l],f=this.resolveDataElementOptions(l,u.active?"active":a),d=o.getPointPositionForValue(l,this.getParsed(l).r),p=s?o.xCenter:d.x,v=s?o.yCenter:d.y,y={x:p,y:v,angle:d.angle,skip:isNaN(p)||isNaN(v),options:f};this.updateElement(u,l,y,a)}}}class ScatterController extends DatasetController{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(e){const t=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:o}=t,s=this.getParsed(e),l=a.getLabelForValue(s.x),u=o.getLabelForValue(s.y);return{label:r[e]||"",value:"("+l+", "+u+")"}}update(e){const t=this._cachedMeta,{data:r=[]}=t,a=this.chart._animationsDisabled;let{start:o,count:s}=_getStartAndCountOfVisiblePoints(t,r,a);if(this._drawStart=o,this._drawCount=s,_scaleRangesChanged(t)&&(o=0,s=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:l,_dataset:u}=t;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!u._decimated,l.points=r;const f=this.resolveDatasetElementOptions(e);f.segment=this.options.segment,this.updateElement(l,void 0,{animated:!a,options:f},e)}else this.datasetElementType&&(delete t.dataset,this.datasetElementType=!1);this.updateElements(r,o,s,e)}addElements(){const{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(e,t,r,a){const o=a==="reset",{iScale:s,vScale:l,_stacked:u,_dataset:f}=this._cachedMeta,d=this.resolveDataElementOptions(t,a),p=this.getSharedOptions(d),v=this.includeOptions(a,p),y=s.axis,x=l.axis,{spanGaps:E,segment:C}=this.options,A=isNumber(E)?E:Number.POSITIVE_INFINITY,M=this.chart._animationsDisabled||o||a==="none";let V=t>0&&this.getParsed(t-1);for(let R=t;R<t+r;++R){const q=e[R],Q=this.getParsed(R),m=M?q:{},ne=isNullOrUndef(Q[x]),re=m[y]=s.getPixelForValue(Q[y],R),ge=m[x]=o||ne?l.getBasePixel():l.getPixelForValue(u?this.applyStack(l,Q,u):Q[x],R);m.skip=isNaN(re)||isNaN(ge)||ne,m.stop=R>0&&Math.abs(Q[y]-V[y])>A,C&&(m.parsed=Q,m.raw=f.data[R]),v&&(m.options=p||this.resolveDataElementOptions(R,q.active?"active":a)),M||this.updateElement(q,R,m,a),V=Q}this.updateSharedOptions(p,a,d)}getMaxOverflow(){const e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let l=0;for(let u=t.length-1;u>=0;--u)l=Math.max(l,t[u].size(this.resolveDataElementOptions(u))/2);return l>0&&l}const r=e.dataset,a=r.options&&r.options.borderWidth||0;if(!t.length)return a;const o=t[0].size(this.resolveDataElementOptions(0)),s=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(a,o,s)/2}}var controllers=Object.freeze({__proto__:null,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController});function abstract(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class DateAdapterBase{static override(e){Object.assign(DateAdapterBase.prototype,e)}options;constructor(e){this.options=e||{}}init(){}formats(){return abstract()}parse(){return abstract()}format(){return abstract()}add(){return abstract()}diff(){return abstract()}startOf(){return abstract()}endOf(){return abstract()}}var adapters={_date:DateAdapterBase};function binarySearch(n,e,t,r){const{controller:a,data:o,_sorted:s}=n,l=a._cachedMeta.iScale,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(l&&e===l.axis&&e!=="r"&&s&&o.length){const f=l._reversePixels?_rlookupByKey:_lookupByKey;if(r){if(a._sharedOptions){const d=o[0],p=typeof d.getRange=="function"&&d.getRange(e);if(p){const v=f(o,e,t-p),y=f(o,e,t+p);return{lo:v.lo,hi:y.hi}}}}else{const d=f(o,e,t);if(u){const{vScale:p}=a._cachedMeta,{_parsed:v}=n,y=v.slice(0,d.lo+1).reverse().findIndex(E=>!isNullOrUndef(E[p.axis]));d.lo-=Math.max(0,y);const x=v.slice(d.hi).findIndex(E=>!isNullOrUndef(E[p.axis]));d.hi+=Math.max(0,x)}return d}}return{lo:0,hi:o.length-1}}function evaluateInteractionItems(n,e,t,r,a){const o=n.getSortedVisibleDatasetMetas(),s=t[e];for(let l=0,u=o.length;l<u;++l){const{index:f,data:d}=o[l],{lo:p,hi:v}=binarySearch(o[l],e,s,a);for(let y=p;y<=v;++y){const x=d[y];x.skip||r(x,f,y)}}}function getDistanceMetricForAxis(n){const e=n.indexOf("x")!==-1,t=n.indexOf("y")!==-1;return function(r,a){const o=e?Math.abs(r.x-a.x):0,s=t?Math.abs(r.y-a.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function getIntersectItems(n,e,t,r,a){const o=[];return!a&&!n.isPointInArea(e)||evaluateInteractionItems(n,t,e,function(l,u,f){!a&&!_isPointInArea(l,n.chartArea,0)||l.inRange(e.x,e.y,r)&&o.push({element:l,datasetIndex:u,index:f})},!0),o}function getNearestRadialItems(n,e,t,r){let a=[];function o(s,l,u){const{startAngle:f,endAngle:d}=s.getProps(["startAngle","endAngle"],r),{angle:p}=getAngleFromPoint(s,{x:e.x,y:e.y});_angleBetween(p,f,d)&&a.push({element:s,datasetIndex:l,index:u})}return evaluateInteractionItems(n,t,e,o),a}function getNearestCartesianItems(n,e,t,r,a,o){let s=[];const l=getDistanceMetricForAxis(t);let u=Number.POSITIVE_INFINITY;function f(d,p,v){const y=d.inRange(e.x,e.y,a);if(r&&!y)return;const x=d.getCenterPoint(a);if(!(!!o||n.isPointInArea(x))&&!y)return;const C=l(e,x);C<u?(s=[{element:d,datasetIndex:p,index:v}],u=C):C===u&&s.push({element:d,datasetIndex:p,index:v})}return evaluateInteractionItems(n,t,e,f),s}function getNearestItems(n,e,t,r,a,o){return!o&&!n.isPointInArea(e)?[]:t==="r"&&!r?getNearestRadialItems(n,e,t,a):getNearestCartesianItems(n,e,t,r,a,o)}function getAxisItems(n,e,t,r,a){const o=[],s=t==="x"?"inXRange":"inYRange";let l=!1;return evaluateInteractionItems(n,t,e,(u,f,d)=>{u[s]&&u[s](e[t],a)&&(o.push({element:u,datasetIndex:f,index:d}),l=l||u.inRange(e.x,e.y,a))}),r&&!l?[]:o}var Interaction={modes:{index(n,e,t,r){const a=getRelativePosition(e,n),o=t.axis||"x",s=t.includeInvisible||!1,l=t.intersect?getIntersectItems(n,a,o,r,s):getNearestItems(n,a,o,!1,r,s),u=[];return l.length?(n.getSortedVisibleDatasetMetas().forEach(f=>{const d=l[0].index,p=f.data[d];p&&!p.skip&&u.push({element:p,datasetIndex:f.index,index:d})}),u):[]},dataset(n,e,t,r){const a=getRelativePosition(e,n),o=t.axis||"xy",s=t.includeInvisible||!1;let l=t.intersect?getIntersectItems(n,a,o,r,s):getNearestItems(n,a,o,!1,r,s);if(l.length>0){const u=l[0].datasetIndex,f=n.getDatasetMeta(u).data;l=[];for(let d=0;d<f.length;++d)l.push({element:f[d],datasetIndex:u,index:d})}return l},point(n,e,t,r){const a=getRelativePosition(e,n),o=t.axis||"xy",s=t.includeInvisible||!1;return getIntersectItems(n,a,o,r,s)},nearest(n,e,t,r){const a=getRelativePosition(e,n),o=t.axis||"xy",s=t.includeInvisible||!1;return getNearestItems(n,a,o,t.intersect,r,s)},x(n,e,t,r){const a=getRelativePosition(e,n);return getAxisItems(n,a,"x",t.intersect,r)},y(n,e,t,r){const a=getRelativePosition(e,n);return getAxisItems(n,a,"y",t.intersect,r)}}};const STATIC_POSITIONS=["left","top","right","bottom"];function filterByPosition(n,e){return n.filter(t=>t.pos===e)}function filterDynamicPositionByAxis(n,e){return n.filter(t=>STATIC_POSITIONS.indexOf(t.pos)===-1&&t.box.axis===e)}function sortByWeight(n,e){return n.sort((t,r)=>{const a=e?r:t,o=e?t:r;return a.weight===o.weight?a.index-o.index:a.weight-o.weight})}function wrapBoxes(n){const e=[];let t,r,a,o,s,l;for(t=0,r=(n||[]).length;t<r;++t)a=n[t],{position:o,options:{stack:s,stackWeight:l=1}}=a,e.push({index:t,box:a,pos:o,horizontal:a.isHorizontal(),weight:a.weight,stack:s&&o+s,stackWeight:l});return e}function buildStacks(n){const e={};for(const t of n){const{stack:r,pos:a,stackWeight:o}=t;if(!r||!STATIC_POSITIONS.includes(a))continue;const s=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return e}function setLayoutDims(n,e){const t=buildStacks(n),{vBoxMaxWidth:r,hBoxMaxHeight:a}=e;let o,s,l;for(o=0,s=n.length;o<s;++o){l=n[o];const{fullSize:u}=l.box,f=t[l.stack],d=f&&l.stackWeight/f.weight;l.horizontal?(l.width=d?d*r:u&&e.availableWidth,l.height=a):(l.width=r,l.height=d?d*a:u&&e.availableHeight)}return t}function buildLayoutBoxes(n){const e=wrapBoxes(n),t=sortByWeight(e.filter(f=>f.box.fullSize),!0),r=sortByWeight(filterByPosition(e,"left"),!0),a=sortByWeight(filterByPosition(e,"right")),o=sortByWeight(filterByPosition(e,"top"),!0),s=sortByWeight(filterByPosition(e,"bottom")),l=filterDynamicPositionByAxis(e,"x"),u=filterDynamicPositionByAxis(e,"y");return{fullSize:t,leftAndTop:r.concat(o),rightAndBottom:a.concat(u).concat(s).concat(l),chartArea:filterByPosition(e,"chartArea"),vertical:r.concat(a).concat(u),horizontal:o.concat(s).concat(l)}}function getCombinedMax(n,e,t,r){return Math.max(n[t],e[t])+Math.max(n[r],e[r])}function updateMaxPadding(n,e){n.top=Math.max(n.top,e.top),n.left=Math.max(n.left,e.left),n.bottom=Math.max(n.bottom,e.bottom),n.right=Math.max(n.right,e.right)}function updateDims(n,e,t,r){const{pos:a,box:o}=t,s=n.maxPadding;if(!isObject(a)){t.size&&(n[a]-=t.size);const p=r[t.stack]||{size:0,count:1};p.size=Math.max(p.size,t.horizontal?o.height:o.width),t.size=p.size/p.count,n[a]+=t.size}o.getPadding&&updateMaxPadding(s,o.getPadding());const l=Math.max(0,e.outerWidth-getCombinedMax(s,n,"left","right")),u=Math.max(0,e.outerHeight-getCombinedMax(s,n,"top","bottom")),f=l!==n.w,d=u!==n.h;return n.w=l,n.h=u,t.horizontal?{same:f,other:d}:{same:d,other:f}}function handleMaxPadding(n){const e=n.maxPadding;function t(r){const a=Math.max(e[r]-n[r],0);return n[r]+=a,a}n.y+=t("top"),n.x+=t("left"),t("right"),t("bottom")}function getMargins(n,e){const t=e.maxPadding;function r(a){const o={left:0,top:0,right:0,bottom:0};return a.forEach(s=>{o[s]=Math.max(e[s],t[s])}),o}return r(n?["left","right"]:["top","bottom"])}function fitBoxes(n,e,t,r){const a=[];let o,s,l,u,f,d;for(o=0,s=n.length,f=0;o<s;++o){l=n[o],u=l.box,u.update(l.width||e.w,l.height||e.h,getMargins(l.horizontal,e));const{same:p,other:v}=updateDims(e,t,l,r);f|=p&&a.length,d=d||v,u.fullSize||a.push(l)}return f&&fitBoxes(a,e,t,r)||d}function setBoxDims(n,e,t,r,a){n.top=t,n.left=e,n.right=e+r,n.bottom=t+a,n.width=r,n.height=a}function placeBoxes(n,e,t,r){const a=t.padding;let{x:o,y:s}=e;for(const l of n){const u=l.box,f=r[l.stack]||{placed:0,weight:1},d=l.stackWeight/f.weight||1;if(l.horizontal){const p=e.w*d,v=f.size||u.height;defined(f.start)&&(s=f.start),u.fullSize?setBoxDims(u,a.left,s,t.outerWidth-a.right-a.left,v):setBoxDims(u,e.left+f.placed,s,p,v),f.start=s,f.placed+=p,s=u.bottom}else{const p=e.h*d,v=f.size||u.width;defined(f.start)&&(o=f.start),u.fullSize?setBoxDims(u,o,a.top,v,t.outerHeight-a.bottom-a.top):setBoxDims(u,o,e.top+f.placed,v,p),f.start=o,f.placed+=p,o=u.right}}e.x=o,e.y=s}var layouts={addBox(n,e){n.boxes||(n.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},n.boxes.push(e)},removeBox(n,e){const t=n.boxes?n.boxes.indexOf(e):-1;t!==-1&&n.boxes.splice(t,1)},configure(n,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(n,e,t,r){if(!n)return;const a=toPadding(n.options.layout.padding),o=Math.max(e-a.width,0),s=Math.max(t-a.height,0),l=buildLayoutBoxes(n.boxes),u=l.vertical,f=l.horizontal;each(n.boxes,E=>{typeof E.beforeLayout=="function"&&E.beforeLayout()});const d=u.reduce((E,C)=>C.box.options&&C.box.options.display===!1?E:E+1,0)||1,p=Object.freeze({outerWidth:e,outerHeight:t,padding:a,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/d,hBoxMaxHeight:s/2}),v=Object.assign({},a);updateMaxPadding(v,toPadding(r));const y=Object.assign({maxPadding:v,w:o,h:s,x:a.left,y:a.top},a),x=setLayoutDims(u.concat(f),p);fitBoxes(l.fullSize,y,p,x),fitBoxes(u,y,p,x),fitBoxes(f,y,p,x)&&fitBoxes(u,y,p,x),handleMaxPadding(y),placeBoxes(l.leftAndTop,y,p,x),y.x+=y.w,y.y+=y.h,placeBoxes(l.rightAndBottom,y,p,x),n.chartArea={left:y.left,top:y.top,right:y.left+y.w,bottom:y.top+y.h,height:y.h,width:y.w},each(l.chartArea,E=>{const C=E.box;Object.assign(C,n.chartArea),C.update(y.w,y.h,{left:0,top:0,right:0,bottom:0})})}};class BasePlatform{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,r){}removeEventListener(e,t,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,r,a){return t=Math.max(0,t||e.width),r=r||e.height,{width:t,height:Math.max(0,a?Math.floor(t/a):r)}}isAttached(e){return!0}updateConfig(e){}}class BasicPlatform extends BasePlatform{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const EXPANDO_KEY="$chartjs",EVENT_TYPES={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},isNullOrEmpty=n=>n===null||n==="";function initCanvas(n,e){const t=n.style,r=n.getAttribute("height"),a=n.getAttribute("width");if(n[EXPANDO_KEY]={initial:{height:r,width:a,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",isNullOrEmpty(a)){const o=readUsedSize(n,"width");o!==void 0&&(n.width=o)}if(isNullOrEmpty(r))if(n.style.height==="")n.height=n.width/(e||2);else{const o=readUsedSize(n,"height");o!==void 0&&(n.height=o)}return n}const eventListenerOptions=supportsEventListenerOptions?{passive:!0}:!1;function addListener(n,e,t){n&&n.addEventListener(e,t,eventListenerOptions)}function removeListener(n,e,t){n&&n.canvas&&n.canvas.removeEventListener(e,t,eventListenerOptions)}function fromNativeEvent(n,e){const t=EVENT_TYPES[n.type]||n.type,{x:r,y:a}=getRelativePosition(n,e);return{type:t,chart:e,native:n,x:r!==void 0?r:null,y:a!==void 0?a:null}}function nodeListContains(n,e){for(const t of n)if(t===e||t.contains(e))return!0}function createAttachObserver(n,e,t){const r=n.canvas,a=new MutationObserver(o=>{let s=!1;for(const l of o)s=s||nodeListContains(l.addedNodes,r),s=s&&!nodeListContains(l.removedNodes,r);s&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}function createDetachObserver(n,e,t){const r=n.canvas,a=new MutationObserver(o=>{let s=!1;for(const l of o)s=s||nodeListContains(l.removedNodes,r),s=s&&!nodeListContains(l.addedNodes,r);s&&t()});return a.observe(document,{childList:!0,subtree:!0}),a}const drpListeningCharts=new Map;let oldDevicePixelRatio=0;function onWindowResize(){const n=window.devicePixelRatio;n!==oldDevicePixelRatio&&(oldDevicePixelRatio=n,drpListeningCharts.forEach((e,t)=>{t.currentDevicePixelRatio!==n&&e()}))}function listenDevicePixelRatioChanges(n,e){drpListeningCharts.size||window.addEventListener("resize",onWindowResize),drpListeningCharts.set(n,e)}function unlistenDevicePixelRatioChanges(n){drpListeningCharts.delete(n),drpListeningCharts.size||window.removeEventListener("resize",onWindowResize)}function createResizeObserver(n,e,t){const r=n.canvas,a=r&&_getParentNode(r);if(!a)return;const o=throttled((l,u)=>{const f=a.clientWidth;t(l,u),f<a.clientWidth&&t()},window),s=new ResizeObserver(l=>{const u=l[0],f=u.contentRect.width,d=u.contentRect.height;f===0&&d===0||o(f,d)});return s.observe(a),listenDevicePixelRatioChanges(n,o),s}function releaseObserver(n,e,t){t&&t.disconnect(),e==="resize"&&unlistenDevicePixelRatioChanges(n)}function createProxyAndListen(n,e,t){const r=n.canvas,a=throttled(o=>{n.ctx!==null&&t(fromNativeEvent(o,n))},n);return addListener(r,e,a),a}class DomPlatform extends BasePlatform{acquireContext(e,t){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(initCanvas(e,t),r):null}releaseContext(e){const t=e.canvas;if(!t[EXPANDO_KEY])return!1;const r=t[EXPANDO_KEY].initial;["height","width"].forEach(o=>{const s=r[o];isNullOrUndef(s)?t.removeAttribute(o):t.setAttribute(o,s)});const a=r.style||{};return Object.keys(a).forEach(o=>{t.style[o]=a[o]}),t.width=t.width,delete t[EXPANDO_KEY],!0}addEventListener(e,t,r){this.removeEventListener(e,t);const a=e.$proxies||(e.$proxies={}),s={attach:createAttachObserver,detach:createDetachObserver,resize:createResizeObserver}[t]||createProxyAndListen;a[t]=s(e,t,r)}removeEventListener(e,t){const r=e.$proxies||(e.$proxies={}),a=r[t];if(!a)return;({attach:releaseObserver,detach:releaseObserver,resize:releaseObserver}[t]||removeListener)(e,t,a),r[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,r,a){return getMaximumSize(e,t,r,a)}isAttached(e){const t=e&&_getParentNode(e);return!!(t&&t.isConnected)}}function _detectPlatform(n){return!_isDomSupported()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?BasicPlatform:DomPlatform}let Element$1=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){const{x:t,y:r}=this.getProps(["x","y"],e);return{x:t,y:r}}hasValue(){return isNumber(this.x)&&isNumber(this.y)}getProps(e,t){const r=this.$animations;if(!t||!r)return this;const a={};return e.forEach(o=>{a[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),a}};function autoSkip(n,e){const t=n.options.ticks,r=determineMaxTicks(n),a=Math.min(t.maxTicksLimit||r,r),o=t.major.enabled?getMajorIndices(e):[],s=o.length,l=o[0],u=o[s-1],f=[];if(s>a)return skipMajors(e,f,o,s/a),f;const d=calculateSpacing(o,e,a);if(s>0){let p,v;const y=s>1?Math.round((u-l)/(s-1)):null;for(skip(e,f,d,isNullOrUndef(y)?0:l-y,l),p=0,v=s-1;p<v;p++)skip(e,f,d,o[p],o[p+1]);return skip(e,f,d,u,isNullOrUndef(y)?e.length:u+y),f}return skip(e,f,d),f}function determineMaxTicks(n){const e=n.options.offset,t=n._tickSize(),r=n._length/t+(e?0:1),a=n._maxLength/t;return Math.floor(Math.min(r,a))}function calculateSpacing(n,e,t){const r=getEvenSpacing(n),a=e.length/t;if(!r)return Math.max(a,1);const o=_factorize(r);for(let s=0,l=o.length-1;s<l;s++){const u=o[s];if(u>a)return u}return Math.max(a,1)}function getMajorIndices(n){const e=[];let t,r;for(t=0,r=n.length;t<r;t++)n[t].major&&e.push(t);return e}function skipMajors(n,e,t,r){let a=0,o=t[0],s;for(r=Math.ceil(r),s=0;s<n.length;s++)s===o&&(e.push(n[s]),a++,o=t[a*r])}function skip(n,e,t,r,a){const o=valueOrDefault(r,0),s=Math.min(valueOrDefault(a,n.length),n.length);let l=0,u,f,d;for(t=Math.ceil(t),a&&(u=a-r,t=u/Math.floor(u/t)),d=o;d<0;)l++,d=Math.round(o+l*t);for(f=Math.max(o,0);f<s;f++)f===d&&(e.push(n[f]),l++,d=Math.round(o+l*t))}function getEvenSpacing(n){const e=n.length;let t,r;if(e<2)return!1;for(r=n[0],t=1;t<e;++t)if(n[t]-n[t-1]!==r)return!1;return r}const reverseAlign=n=>n==="left"?"right":n==="right"?"left":n,offsetFromEdge=(n,e,t)=>e==="top"||e==="left"?n[e]+t:n[e]-t,getTicksLimit=(n,e)=>Math.min(e||n,n);function sample(n,e){const t=[],r=n.length/e,a=n.length;let o=0;for(;o<a;o+=r)t.push(n[Math.floor(o)]);return t}function getPixelForGridLine(n,e,t){const r=n.ticks.length,a=Math.min(e,r-1),o=n._startPixel,s=n._endPixel,l=1e-6;let u=n.getPixelForTick(a),f;if(!(t&&(r===1?f=Math.max(u-o,s-u):e===0?f=(n.getPixelForTick(1)-u)/2:f=(u-n.getPixelForTick(a-1))/2,u+=a<e?f:-f,u<o-l||u>s+l)))return u}function garbageCollect(n,e){each(n,t=>{const r=t.gc,a=r.length/2;let o;if(a>e){for(o=0;o<a;++o)delete t.data[r[o]];r.splice(0,a)}})}function getTickMarkLength(n){return n.drawTicks?n.tickLength:0}function getTitleHeight(n,e){if(!n.display)return 0;const t=toFont(n.font,e),r=toPadding(n.padding);return(isArray(n.text)?n.text.length:1)*t.lineHeight+r.height}function createScaleContext(n,e){return createContext(n,{scale:e,type:"scale"})}function createTickContext(n,e,t){return createContext(n,{tick:t,index:e,type:"tick"})}function titleAlign(n,e,t){let r=_toLeftRightCenter(n);return(t&&e!=="right"||!t&&e==="right")&&(r=reverseAlign(r)),r}function titleArgs(n,e,t,r){const{top:a,left:o,bottom:s,right:l,chart:u}=n,{chartArea:f,scales:d}=u;let p=0,v,y,x;const E=s-a,C=l-o;if(n.isHorizontal()){if(y=_alignStartEnd(r,o,l),isObject(t)){const A=Object.keys(t)[0],M=t[A];x=d[A].getPixelForValue(M)+E-e}else t==="center"?x=(f.bottom+f.top)/2+E-e:x=offsetFromEdge(n,t,e);v=l-o}else{if(isObject(t)){const A=Object.keys(t)[0],M=t[A];y=d[A].getPixelForValue(M)-C+e}else t==="center"?y=(f.left+f.right)/2-C+e:y=offsetFromEdge(n,t,e);x=_alignStartEnd(r,s,a),p=t==="left"?-HALF_PI:HALF_PI}return{titleX:y,titleY:x,maxWidth:v,rotation:p}}class Scale extends Element$1{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:r,_suggestedMax:a}=this;return e=finiteOrDefault(e,Number.POSITIVE_INFINITY),t=finiteOrDefault(t,Number.NEGATIVE_INFINITY),r=finiteOrDefault(r,Number.POSITIVE_INFINITY),a=finiteOrDefault(a,Number.NEGATIVE_INFINITY),{min:finiteOrDefault(e,r),max:finiteOrDefault(t,a),minDefined:isNumberFinite(e),maxDefined:isNumberFinite(t)}}getMinMax(e){let{min:t,max:r,minDefined:a,maxDefined:o}=this.getUserBounds(),s;if(a&&o)return{min:t,max:r};const l=this.getMatchingVisibleMetas();for(let u=0,f=l.length;u<f;++u)s=l[u].controller.getMinMax(this,e),a||(t=Math.min(t,s.min)),o||(r=Math.max(r,s.max));return t=o&&t>r?r:t,r=a&&t>r?t:r,{min:finiteOrDefault(t,finiteOrDefault(r,t)),max:finiteOrDefault(r,finiteOrDefault(t,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){callback(this.options.beforeUpdate,[this])}update(e,t,r){const{beginAtZero:a,grace:o,ticks:s}=this.options,l=s.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=_addGrace(this,o,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const u=l<this.ticks.length;this._convertTicksToLabels(u?sample(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=autoSkip(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),u&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,r;this.isHorizontal()?(t=this.left,r=this.right):(t=this.top,r=this.bottom,e=!e),this._startPixel=t,this._endPixel=r,this._reversePixels=e,this._length=r-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){callback(this.options.afterUpdate,[this])}beforeSetDimensions(){callback(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){callback(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),callback(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){callback(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let r,a,o;for(r=0,a=e.length;r<a;r++)o=e[r],o.label=callback(t.callback,[o.value,r,e],this)}afterTickToLabelConversion(){callback(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){callback(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,r=getTicksLimit(this.ticks.length,e.ticks.maxTicksLimit),a=t.minRotation||0,o=t.maxRotation;let s=a,l,u,f;if(!this._isVisible()||!t.display||a>=o||r<=1||!this.isHorizontal()){this.labelRotation=a;return}const d=this._getLabelSizes(),p=d.widest.width,v=d.highest.height,y=_limitValue(this.chart.width-p,0,this.maxWidth);l=e.offset?this.maxWidth/r:y/(r-1),p+6>l&&(l=y/(r-(e.offset?.5:1)),u=this.maxHeight-getTickMarkLength(e.grid)-t.padding-getTitleHeight(e.title,this.chart.options.font),f=Math.sqrt(p*p+v*v),s=toDegrees(Math.min(Math.asin(_limitValue((d.highest.height+6)/l,-1,1)),Math.asin(_limitValue(u/f,-1,1))-Math.asin(_limitValue(v/f,-1,1)))),s=Math.max(a,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){callback(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){callback(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:r,title:a,grid:o}}=this,s=this._isVisible(),l=this.isHorizontal();if(s){const u=getTitleHeight(a,t.options.font);if(l?(e.width=this.maxWidth,e.height=getTickMarkLength(o)+u):(e.height=this.maxHeight,e.width=getTickMarkLength(o)+u),r.display&&this.ticks.length){const{first:f,last:d,widest:p,highest:v}=this._getLabelSizes(),y=r.padding*2,x=toRadians(this.labelRotation),E=Math.cos(x),C=Math.sin(x);if(l){const A=r.mirror?0:C*p.width+E*v.height;e.height=Math.min(this.maxHeight,e.height+A+y)}else{const A=r.mirror?0:E*p.width+C*v.height;e.width=Math.min(this.maxWidth,e.width+A+y)}this._calculatePadding(f,d,C,E)}}this._handleMargins(),l?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,r,a){const{ticks:{align:o,padding:s},position:l}=this.options,u=this.labelRotation!==0,f=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let v=0,y=0;u?f?(v=a*e.width,y=r*t.height):(v=r*e.height,y=a*t.width):o==="start"?y=t.width:o==="end"?v=e.width:o!=="inner"&&(v=e.width/2,y=t.width/2),this.paddingLeft=Math.max((v-d+s)*this.width/(this.width-d),0),this.paddingRight=Math.max((y-p+s)*this.width/(this.width-p),0)}else{let d=t.height/2,p=e.height/2;o==="start"?(d=0,p=e.height):o==="end"&&(d=t.height,p=0),this.paddingTop=d+s,this.paddingBottom=p+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){callback(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,r;for(t=0,r=e.length;t<r;t++)isNullOrUndef(e[t].label)&&(e.splice(t,1),r--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let r=this.ticks;t<r.length&&(r=sample(r,t)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,r){const{ctx:a,_longestTextCache:o}=this,s=[],l=[],u=Math.floor(t/getTicksLimit(t,r));let f=0,d=0,p,v,y,x,E,C,A,M,V,R,q;for(p=0;p<t;p+=u){if(x=e[p].label,E=this._resolveTickFontOptions(p),a.font=C=E.string,A=o[C]=o[C]||{data:{},gc:[]},M=E.lineHeight,V=R=0,!isNullOrUndef(x)&&!isArray(x))V=_measureText(a,A.data,A.gc,V,x),R=M;else if(isArray(x))for(v=0,y=x.length;v<y;++v)q=x[v],!isNullOrUndef(q)&&!isArray(q)&&(V=_measureText(a,A.data,A.gc,V,q),R+=M);s.push(V),l.push(R),f=Math.max(V,f),d=Math.max(R,d)}garbageCollect(o,t);const Q=s.indexOf(f),m=l.indexOf(d),ne=re=>({width:s[re]||0,height:l[re]||0});return{first:ne(0),last:ne(t-1),widest:ne(Q),highest:ne(m),widths:s,heights:l}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return _int16Range(this._alignToPixels?_alignPixel(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const r=t[e];return r.$context||(r.$context=createTickContext(this.getContext(),e,r))}return this.$context||(this.$context=createScaleContext(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=toRadians(this.labelRotation),r=Math.abs(Math.cos(t)),a=Math.abs(Math.sin(t)),o=this._getLabelSizes(),s=e.autoSkipPadding||0,l=o?o.widest.width+s:0,u=o?o.highest.height+s:0;return this.isHorizontal()?u*r>l*a?l/r:u/a:u*a<l*r?u/r:l/a}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,r=this.chart,a=this.options,{grid:o,position:s,border:l}=a,u=o.offset,f=this.isHorizontal(),p=this.ticks.length+(u?1:0),v=getTickMarkLength(o),y=[],x=l.setContext(this.getContext()),E=x.display?x.width:0,C=E/2,A=function(Se){return _alignPixel(r,Se,E)};let M,V,R,q,Q,m,ne,re,ge,ve,_e,ue;if(s==="top")M=A(this.bottom),m=this.bottom-v,re=M-C,ve=A(e.top)+C,ue=e.bottom;else if(s==="bottom")M=A(this.top),ve=e.top,ue=A(e.bottom)-C,m=M+C,re=this.top+v;else if(s==="left")M=A(this.right),Q=this.right-v,ne=M-C,ge=A(e.left)+C,_e=e.right;else if(s==="right")M=A(this.left),ge=e.left,_e=A(e.right)-C,Q=M+C,ne=this.left+v;else if(t==="x"){if(s==="center")M=A((e.top+e.bottom)/2+.5);else if(isObject(s)){const Se=Object.keys(s)[0],xe=s[Se];M=A(this.chart.scales[Se].getPixelForValue(xe))}ve=e.top,ue=e.bottom,m=M+C,re=m+v}else if(t==="y"){if(s==="center")M=A((e.left+e.right)/2);else if(isObject(s)){const Se=Object.keys(s)[0],xe=s[Se];M=A(this.chart.scales[Se].getPixelForValue(xe))}Q=M-C,ne=Q-v,ge=e.left,_e=e.right}const He=valueOrDefault(a.ticks.maxTicksLimit,p),pe=Math.max(1,Math.ceil(p/He));for(V=0;V<p;V+=pe){const Se=this.getContext(V),xe=o.setContext(Se),je=l.setContext(Se),Le=xe.lineWidth,ct=xe.color,Ge=je.dash||[],We=je.dashOffset,et=xe.tickWidth,rt=xe.tickColor,Ke=xe.tickBorderDash||[],Pe=xe.tickBorderDashOffset;R=getPixelForGridLine(this,V,u),R!==void 0&&(q=_alignPixel(r,R,Le),f?Q=ne=ge=_e=q:m=re=ve=ue=q,y.push({tx1:Q,ty1:m,tx2:ne,ty2:re,x1:ge,y1:ve,x2:_e,y2:ue,width:Le,color:ct,borderDash:Ge,borderDashOffset:We,tickWidth:et,tickColor:rt,tickBorderDash:Ke,tickBorderDashOffset:Pe}))}return this._ticksLength=p,this._borderValue=M,y}_computeLabelItems(e){const t=this.axis,r=this.options,{position:a,ticks:o}=r,s=this.isHorizontal(),l=this.ticks,{align:u,crossAlign:f,padding:d,mirror:p}=o,v=getTickMarkLength(r.grid),y=v+d,x=p?-d:y,E=-toRadians(this.labelRotation),C=[];let A,M,V,R,q,Q,m,ne,re,ge,ve,_e,ue="middle";if(a==="top")Q=this.bottom-x,m=this._getXAxisLabelAlignment();else if(a==="bottom")Q=this.top+x,m=this._getXAxisLabelAlignment();else if(a==="left"){const pe=this._getYAxisLabelAlignment(v);m=pe.textAlign,q=pe.x}else if(a==="right"){const pe=this._getYAxisLabelAlignment(v);m=pe.textAlign,q=pe.x}else if(t==="x"){if(a==="center")Q=(e.top+e.bottom)/2+y;else if(isObject(a)){const pe=Object.keys(a)[0],Se=a[pe];Q=this.chart.scales[pe].getPixelForValue(Se)+y}m=this._getXAxisLabelAlignment()}else if(t==="y"){if(a==="center")q=(e.left+e.right)/2-y;else if(isObject(a)){const pe=Object.keys(a)[0],Se=a[pe];q=this.chart.scales[pe].getPixelForValue(Se)}m=this._getYAxisLabelAlignment(v).textAlign}t==="y"&&(u==="start"?ue="top":u==="end"&&(ue="bottom"));const He=this._getLabelSizes();for(A=0,M=l.length;A<M;++A){V=l[A],R=V.label;const pe=o.setContext(this.getContext(A));ne=this.getPixelForTick(A)+o.labelOffset,re=this._resolveTickFontOptions(A),ge=re.lineHeight,ve=isArray(R)?R.length:1;const Se=ve/2,xe=pe.color,je=pe.textStrokeColor,Le=pe.textStrokeWidth;let ct=m;s?(q=ne,m==="inner"&&(A===M-1?ct=this.options.reverse?"left":"right":A===0?ct=this.options.reverse?"right":"left":ct="center"),a==="top"?f==="near"||E!==0?_e=-ve*ge+ge/2:f==="center"?_e=-He.highest.height/2-Se*ge+ge:_e=-He.highest.height+ge/2:f==="near"||E!==0?_e=ge/2:f==="center"?_e=He.highest.height/2-Se*ge:_e=He.highest.height-ve*ge,p&&(_e*=-1),E!==0&&!pe.showLabelBackdrop&&(q+=ge/2*Math.sin(E))):(Q=ne,_e=(1-ve)*ge/2);let Ge;if(pe.showLabelBackdrop){const We=toPadding(pe.backdropPadding),et=He.heights[A],rt=He.widths[A];let Ke=_e-We.top,Pe=0-We.left;switch(ue){case"middle":Ke-=et/2;break;case"bottom":Ke-=et;break}switch(m){case"center":Pe-=rt/2;break;case"right":Pe-=rt;break;case"inner":A===M-1?Pe-=rt:A>0&&(Pe-=rt/2);break}Ge={left:Pe,top:Ke,width:rt+We.width,height:et+We.height,color:pe.backdropColor}}C.push({label:R,font:re,textOffset:_e,options:{rotation:E,color:xe,strokeColor:je,strokeWidth:Le,textAlign:ct,textBaseline:ue,translation:[q,Q],backdrop:Ge}})}return C}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-toRadians(this.labelRotation))return e==="top"?"left":"right";let a="center";return t.align==="start"?a="left":t.align==="end"?a="right":t.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:r,mirror:a,padding:o}}=this.options,s=this._getLabelSizes(),l=e+o,u=s.widest.width;let f,d;return t==="left"?a?(d=this.right+o,r==="near"?f="left":r==="center"?(f="center",d+=u/2):(f="right",d+=u)):(d=this.right-l,r==="near"?f="right":r==="center"?(f="center",d-=u/2):(f="left",d=this.left)):t==="right"?a?(d=this.left+o,r==="near"?f="right":r==="center"?(f="center",d-=u/2):(f="left",d-=u)):(d=this.left+l,r==="near"?f="left":r==="center"?(f="center",d+=u/2):(f="right",d=this.right)):f="right",{textAlign:f,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:r,top:a,width:o,height:s}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(r,a,o,s),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const a=this.ticks.findIndex(o=>o.value===e);return a>=0?t.setContext(this.getContext(a)).lineWidth:0}drawGrid(e){const t=this.options.grid,r=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let o,s;const l=(u,f,d)=>{!d.width||!d.color||(r.save(),r.lineWidth=d.width,r.strokeStyle=d.color,r.setLineDash(d.borderDash||[]),r.lineDashOffset=d.borderDashOffset,r.beginPath(),r.moveTo(u.x,u.y),r.lineTo(f.x,f.y),r.stroke(),r.restore())};if(t.display)for(o=0,s=a.length;o<s;++o){const u=a[o];t.drawOnChartArea&&l({x:u.x1,y:u.y1},{x:u.x2,y:u.y2},u),t.drawTicks&&l({x:u.tx1,y:u.ty1},{x:u.tx2,y:u.ty2},{color:u.tickColor,width:u.tickWidth,borderDash:u.tickBorderDash,borderDashOffset:u.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:r,grid:a}}=this,o=r.setContext(this.getContext()),s=r.display?o.width:0;if(!s)return;const l=a.setContext(this.getContext(0)).lineWidth,u=this._borderValue;let f,d,p,v;this.isHorizontal()?(f=_alignPixel(e,this.left,s)-s/2,d=_alignPixel(e,this.right,l)+l/2,p=v=u):(p=_alignPixel(e,this.top,s)-s/2,v=_alignPixel(e,this.bottom,l)+l/2,f=d=u),t.save(),t.lineWidth=o.width,t.strokeStyle=o.color,t.beginPath(),t.moveTo(f,p),t.lineTo(d,v),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,a=this._computeLabelArea();a&&clipArea(r,a);const o=this.getLabelItems(e);for(const s of o){const l=s.options,u=s.font,f=s.label,d=s.textOffset;renderText(r,f,0,d,u,l)}a&&unclipArea(r)}drawTitle(){const{ctx:e,options:{position:t,title:r,reverse:a}}=this;if(!r.display)return;const o=toFont(r.font),s=toPadding(r.padding),l=r.align;let u=o.lineHeight/2;t==="bottom"||t==="center"||isObject(t)?(u+=s.bottom,isArray(r.text)&&(u+=o.lineHeight*(r.text.length-1))):u+=s.top;const{titleX:f,titleY:d,maxWidth:p,rotation:v}=titleArgs(this,u,t,l);renderText(e,r.text,0,0,o,{color:r.color,maxWidth:p,rotation:v,textAlign:titleAlign(l,t,a),textBaseline:"middle",translation:[f,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,r=valueOrDefault(e.grid&&e.grid.z,-1),a=valueOrDefault(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Scale.prototype.draw?[{z:t,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:t,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",a=[];let o,s;for(o=0,s=t.length;o<s;++o){const l=t[o];l[r]===this.id&&(!e||l.type===e)&&a.push(l)}return a}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return toFont(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class TypedRegistry{constructor(e,t,r){this.type=e,this.scope=t,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let r;isIChartComponent(t)&&(r=this.register(t));const a=this.items,o=e.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+e);return o in a||(a[o]=e,registerDefaults(e,s,r),this.override&&defaults.override(e.id,e.overrides)),s}get(e){return this.items[e]}unregister(e){const t=this.items,r=e.id,a=this.scope;r in t&&delete t[r],a&&r in defaults[a]&&(delete defaults[a][r],this.override&&delete overrides[r])}}function registerDefaults(n,e,t){const r=merge(Object.create(null),[t?defaults.get(t):{},defaults.get(e),n.defaults]);defaults.set(e,r),n.defaultRoutes&&routeDefaults(e,n.defaultRoutes),n.descriptors&&defaults.describe(e,n.descriptors)}function routeDefaults(n,e){Object.keys(e).forEach(t=>{const r=t.split("."),a=r.pop(),o=[n].concat(r).join("."),s=e[t].split("."),l=s.pop(),u=s.join(".");defaults.route(o,a,u,l)})}function isIChartComponent(n){return"id"in n&&"defaults"in n}class Registry{constructor(){this.controllers=new TypedRegistry(DatasetController,"datasets",!0),this.elements=new TypedRegistry(Element$1,"elements"),this.plugins=new TypedRegistry(Object,"plugins"),this.scales=new TypedRegistry(Scale,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,r){[...t].forEach(a=>{const o=r||this._getRegistryForType(a);r||o.isForType(a)||o===this.plugins&&a.id?this._exec(e,o,a):each(a,s=>{const l=r||this._getRegistryForType(s);this._exec(e,l,s)})})}_exec(e,t,r){const a=_capitalize(e);callback(r["before"+a],[],r),t[e](r),callback(r["after"+a],[],r)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const r=this._typedRegistries[t];if(r.isForType(e))return r}return this.plugins}_get(e,t,r){const a=t.get(e);if(a===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return a}}var registry=new Registry;class PluginService{constructor(){this._init=void 0}notify(e,t,r,a){if(t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const o=a?this._descriptors(e).filter(a):this._descriptors(e),s=this._notify(o,e,t,r);return t==="afterDestroy"&&(this._notify(o,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),s}_notify(e,t,r,a){a=a||{};for(const o of e){const s=o.plugin,l=s[r],u=[t,a,o.options];if(callback(l,u,s)===!1&&a.cancelable)return!1}return!0}invalidate(){isNullOrUndef(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const r=e&&e.config,a=valueOrDefault(r.options&&r.options.plugins,{}),o=allPlugins(r);return a===!1&&!t?[]:createDescriptors(e,o,a,t)}_notifyStateChanges(e){const t=this._oldCache||[],r=this._cache,a=(o,s)=>o.filter(l=>!s.some(u=>l.plugin.id===u.plugin.id));this._notify(a(t,r),e,"stop"),this._notify(a(r,t),e,"start")}}function allPlugins(n){const e={},t=[],r=Object.keys(registry.plugins.items);for(let o=0;o<r.length;o++)t.push(registry.getPlugin(r[o]));const a=n.plugins||[];for(let o=0;o<a.length;o++){const s=a[o];t.indexOf(s)===-1&&(t.push(s),e[s.id]=!0)}return{plugins:t,localIds:e}}function getOpts(n,e){return!e&&n===!1?null:n===!0?{}:n}function createDescriptors(n,{plugins:e,localIds:t},r,a){const o=[],s=n.getContext();for(const l of e){const u=l.id,f=getOpts(r[u],a);f!==null&&o.push({plugin:l,options:pluginOpts(n.config,{plugin:l,local:t[u]},f,s)})}return o}function pluginOpts(n,{plugin:e,local:t},r,a){const o=n.pluginScopeKeys(e),s=n.getOptionScopes(r,o);return t&&e.defaults&&s.push(e.defaults),n.createResolver(s,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function getIndexAxis(n,e){const t=defaults.datasets[n]||{};return((e.datasets||{})[n]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function getAxisFromDefaultScaleID(n,e){let t=n;return n==="_index_"?t=e:n==="_value_"&&(t=e==="x"?"y":"x"),t}function getDefaultScaleIDFromAxis(n,e){return n===e?"_index_":"_value_"}function idMatchesAxis(n){if(n==="x"||n==="y"||n==="r")return n}function axisFromPosition(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function determineAxis(n,...e){if(idMatchesAxis(n))return n;for(const t of e){const r=t.axis||axisFromPosition(t.position)||n.length>1&&idMatchesAxis(n[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function getAxisFromDataset(n,e,t){if(t[e+"AxisID"]===n)return{axis:e}}function retrieveAxisFromDatasets(n,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(r=>r.xAxisID===n||r.yAxisID===n);if(t.length)return getAxisFromDataset(n,"x",t[0])||getAxisFromDataset(n,"y",t[0])}return{}}function mergeScaleConfig(n,e){const t=overrides[n.type]||{scales:{}},r=e.scales||{},a=getIndexAxis(n.type,e),o=Object.create(null);return Object.keys(r).forEach(s=>{const l=r[s];if(!isObject(l))return console.error(`Invalid scale configuration for scale: ${s}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const u=determineAxis(s,l,retrieveAxisFromDatasets(s,n),defaults.scales[l.type]),f=getDefaultScaleIDFromAxis(u,a),d=t.scales||{};o[s]=mergeIf(Object.create(null),[{axis:u},l,d[u],d[f]])}),n.data.datasets.forEach(s=>{const l=s.type||n.type,u=s.indexAxis||getIndexAxis(l,e),d=(overrides[l]||{}).scales||{};Object.keys(d).forEach(p=>{const v=getAxisFromDefaultScaleID(p,u),y=s[v+"AxisID"]||v;o[y]=o[y]||Object.create(null),mergeIf(o[y],[{axis:v},r[y],d[p]])})}),Object.keys(o).forEach(s=>{const l=o[s];mergeIf(l,[defaults.scales[l.type],defaults.scale])}),o}function initOptions(n){const e=n.options||(n.options={});e.plugins=valueOrDefault(e.plugins,{}),e.scales=mergeScaleConfig(n,e)}function initData(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function initConfig(n){return n=n||{},n.data=initData(n.data),initOptions(n),n}const keyCache=new Map,keysCached=new Set;function cachedKeys(n,e){let t=keyCache.get(n);return t||(t=e(),keyCache.set(n,t),keysCached.add(t)),t}const addIfFound=(n,e,t)=>{const r=resolveObjectKey(e,t);r!==void 0&&n.add(r)};class Config{constructor(e){this._config=initConfig(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=initData(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),initOptions(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return cachedKeys(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return cachedKeys(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return cachedKeys(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,r=this.type;return cachedKeys(`${r}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const r=this._scopeCache;let a=r.get(e);return(!a||t)&&(a=new Map,r.set(e,a)),a}getOptionScopes(e,t,r){const{options:a,type:o}=this,s=this._cachedScopes(e,r),l=s.get(t);if(l)return l;const u=new Set;t.forEach(d=>{e&&(u.add(e),d.forEach(p=>addIfFound(u,e,p))),d.forEach(p=>addIfFound(u,a,p)),d.forEach(p=>addIfFound(u,overrides[o]||{},p)),d.forEach(p=>addIfFound(u,defaults,p)),d.forEach(p=>addIfFound(u,descriptors,p))});const f=Array.from(u);return f.length===0&&f.push(Object.create(null)),keysCached.has(t)&&s.set(t,f),f}chartOptionScopes(){const{options:e,type:t}=this;return[e,overrides[t]||{},defaults.datasets[t]||{},{type:t},defaults,descriptors]}resolveNamedOptions(e,t,r,a=[""]){const o={$shared:!0},{resolver:s,subPrefixes:l}=getResolver(this._resolverCache,e,a);let u=s;if(needContext(s,t)){o.$shared=!1,r=isFunction(r)?r():r;const f=this.createResolver(e,r,l);u=_attachContext(s,r,f)}for(const f of t)o[f]=u[f];return o}createResolver(e,t,r=[""],a){const{resolver:o}=getResolver(this._resolverCache,e,r);return isObject(t)?_attachContext(o,t,void 0,a):o}}function getResolver(n,e,t){let r=n.get(e);r||(r=new Map,n.set(e,r));const a=t.join();let o=r.get(a);return o||(o={resolver:_createResolver(e,t),subPrefixes:t.filter(l=>!l.toLowerCase().includes("hover"))},r.set(a,o)),o}const hasFunction=n=>isObject(n)&&Object.getOwnPropertyNames(n).some(e=>isFunction(n[e]));function needContext(n,e){const{isScriptable:t,isIndexable:r}=_descriptors(n);for(const a of e){const o=t(a),s=r(a),l=(s||o)&&n[a];if(o&&(isFunction(l)||hasFunction(l))||s&&isArray(l))return!0}return!1}var version="4.5.1";const KNOWN_POSITIONS=["top","bottom","left","right","chartArea"];function positionIsHorizontal(n,e){return n==="top"||n==="bottom"||KNOWN_POSITIONS.indexOf(n)===-1&&e==="x"}function compare2Level(n,e){return function(t,r){return t[n]===r[n]?t[e]-r[e]:t[n]-r[n]}}function onAnimationsComplete(n){const e=n.chart,t=e.options.animation;e.notifyPlugins("afterRender"),callback(t&&t.onComplete,[n],e)}function onAnimationProgress(n){const e=n.chart,t=e.options.animation;callback(t&&t.onProgress,[n],e)}function getCanvas(n){return _isDomSupported()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const instances={},getChart=n=>{const e=getCanvas(n);return Object.values(instances).filter(t=>t.canvas===e).pop()};function moveNumericKeys(n,e,t){const r=Object.keys(n);for(const a of r){const o=+a;if(o>=e){const s=n[a];delete n[a],(t>0||o>e)&&(n[o+t]=s)}}}function determineLastEvent(n,e,t,r){return!t||n.type==="mouseout"?null:r?e:n}class Chart{static defaults=defaults;static instances=instances;static overrides=overrides;static registry=registry;static version=version;static getChart=getChart;static register(...e){registry.add(...e),invalidatePlugins()}static unregister(...e){registry.remove(...e),invalidatePlugins()}constructor(e,t){const r=this.config=new Config(t),a=getCanvas(e),o=getChart(a);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||_detectPlatform(a)),this.platform.updateConfig(r);const l=this.platform.acquireContext(a,s.aspectRatio),u=l&&l.canvas,f=u&&u.height,d=u&&u.width;if(this.id=uid(),this.ctx=l,this.canvas=u,this.width=d,this.height=f,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PluginService,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=debounce(p=>this.update(p),s.resizeDelay||0),this._dataChanges=[],instances[this.id]=this,!l||!u){console.error("Failed to create chart: can't acquire context from the given item");return}animator.listen(this,"complete",onAnimationsComplete),animator.listen(this,"progress",onAnimationProgress),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:r,height:a,_aspectRatio:o}=this;return isNullOrUndef(e)?t&&o?o:a?r/a:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return registry}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():retinaScale(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return clearCanvas(this.canvas,this.ctx),this}stop(){return animator.stop(this),this}resize(e,t){animator.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const r=this.options,a=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(a,e,t,o),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),u=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,retinaScale(this,l,!0)&&(this.notifyPlugins("resize",{size:s}),callback(r.onResize,[this,s],this),this.attached&&this._doResize(u)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};each(t,(r,a)=>{r.id=a})}buildOrUpdateScales(){const e=this.options,t=e.scales,r=this.scales,a=Object.keys(r).reduce((s,l)=>(s[l]=!1,s),{});let o=[];t&&(o=o.concat(Object.keys(t).map(s=>{const l=t[s],u=determineAxis(s,l),f=u==="r",d=u==="x";return{options:l,dposition:f?"chartArea":d?"bottom":"left",dtype:f?"radialLinear":d?"category":"linear"}}))),each(o,s=>{const l=s.options,u=l.id,f=determineAxis(u,l),d=valueOrDefault(l.type,s.dtype);(l.position===void 0||positionIsHorizontal(l.position,f)!==positionIsHorizontal(s.dposition))&&(l.position=s.dposition),a[u]=!0;let p=null;if(u in r&&r[u].type===d)p=r[u];else{const v=registry.getScale(d);p=new v({id:u,type:d,ctx:this.ctx,chart:this}),r[p.id]=p}p.init(l,e)}),each(a,(s,l)=>{s||delete r[l]}),each(r,s=>{layouts.configure(this,s,s.options),layouts.addBox(this,s)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,r=e.length;if(e.sort((a,o)=>a.index-o.index),r>t){for(let a=t;a<r;++a)this._destroyDatasetMeta(a);e.splice(t,r-t)}this._sortedMetasets=e.slice(0).sort(compare2Level("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((r,a)=>{t.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let r,a;for(this._removeUnreferencedMetasets(),r=0,a=t.length;r<a;r++){const o=t[r];let s=this.getDatasetMeta(r);const l=o.type||this.config.type;if(s.type&&s.type!==l&&(this._destroyDatasetMeta(r),s=this.getDatasetMeta(r)),s.type=l,s.indexAxis=o.indexAxis||getIndexAxis(l,this.options),s.order=o.order||0,s.index=r,s.label=""+o.label,s.visible=this.isDatasetVisible(r),s.controller)s.controller.updateIndex(r),s.controller.linkScales();else{const u=registry.getController(l),{datasetElementType:f,dataElementType:d}=defaults.datasets[l];Object.assign(u,{dataElementType:registry.getElement(d),datasetElementType:f&&registry.getElement(f)}),s.controller=new u(this,r),e.push(s.controller)}}return this._updateMetasets(),e}_resetElements(){each(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const r=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let f=0,d=this.data.datasets.length;f<d;f++){const{controller:p}=this.getDatasetMeta(f),v=!a&&o.indexOf(p)===-1;p.buildOrUpdateElements(v),s=Math.max(+p.getMaxOverflow(),s)}s=this._minPadding=r.layout.autoPadding?s:0,this._updateLayout(s),a||each(o,f=>{f.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(compare2Level("z","_idx"));const{_active:l,_lastEvent:u}=this;u?this._eventHandler(u,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){each(this.scales,e=>{layouts.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!setsEqual(t,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:r,start:a,count:o}of t){const s=r==="_removeElements"?-o:o;moveNumericKeys(e,a,s)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,r=o=>new Set(e.filter(s=>s[0]===o).map((s,l)=>l+","+s.splice(1).join(","))),a=r(0);for(let o=1;o<t;o++)if(!setsEqual(a,r(o)))return;return Array.from(a).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;layouts.update(this,this.width,this.height,e);const t=this.chartArea,r=t.width<=0||t.height<=0;this._layers=[],each(this.boxes,a=>{r&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,o)=>{a._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,r=this.data.datasets.length;t<r;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,r=this.data.datasets.length;t<r;++t)this._updateDataset(t,isFunction(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const r=this.getDatasetMeta(e),a={meta:r,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(r.controller._update(t),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(animator.has(this)?this.attached&&!animator.running(this)&&animator.start(this):(this.draw(),onAnimationsComplete({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:a}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,a)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,r=[];let a,o;for(a=0,o=t.length;a<o;++a){const s=t[a];(!e||s.visible)&&r.push(s)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,r={meta:e,index:e.index,cancelable:!0},a=getDatasetClipArea(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(a&&clipArea(t,a),e.controller.draw(),a&&unclipArea(t),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return _isPointInArea(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,r,a){const o=Interaction.modes[t];return typeof o=="function"?o(this,e,r,a):[]}getDatasetMeta(e){const t=this.data.datasets[e],r=this._metasets;let a=r.filter(o=>o&&o._dataset===t).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},r.push(a)),a}getContext(){return this.$context||(this.$context=createContext(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!t.hidden}setDatasetVisibility(e,t){const r=this.getDatasetMeta(e);r.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,r){const a=r?"show":"hide",o=this.getDatasetMeta(e),s=o.controller._resolveAnimations(void 0,a);defined(t)?(o.data[t].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),s.update(o,{visible:r}),this.update(l=>l.datasetIndex===e?a:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),animator.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),clearCanvas(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete instances[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,r=(o,s)=>{t.addEventListener(this,o,s),e[o]=s},a=(o,s,l)=>{o.offsetX=s,o.offsetY=l,this._eventHandler(o)};each(this.options.events,o=>r(o,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,r=(u,f)=>{t.addEventListener(this,u,f),e[u]=f},a=(u,f)=>{e[u]&&(t.removeEventListener(this,u,f),delete e[u])},o=(u,f)=>{this.canvas&&this.resize(u,f)};let s;const l=()=>{a("attach",l),this.attached=!0,this.resize(),r("resize",o),r("detach",s)};s=()=>{this.attached=!1,a("resize",o),this._stop(),this._resize(0,0),r("attach",l)},t.isAttached(this.canvas)?l():s()}unbindEvents(){each(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},each(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,r){const a=r?"set":"remove";let o,s,l,u;for(t==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+a+"DatasetHoverStyle"]()),l=0,u=e.length;l<u;++l){s=e[l];const f=s&&this.getDatasetMeta(s.datasetIndex).controller;f&&f[a+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],r=e.map(({datasetIndex:o,index:s})=>{const l=this.getDatasetMeta(o);if(!l)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:l.data[s],index:s}});!_elementsEqual(r,t)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,t))}notifyPlugins(e,t,r){return this._plugins.notify(this,e,t,r)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,r){const a=this.options.hover,o=(u,f)=>u.filter(d=>!f.some(p=>d.datasetIndex===p.datasetIndex&&d.index===p.index)),s=o(t,e),l=r?e:o(e,t);s.length&&this.updateHoverStyle(s,a.mode,!1),l.length&&a.mode&&this.updateHoverStyle(l,a.mode,!0)}_eventHandler(e,t){const r={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},a=s=>(s.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,a)===!1)return;const o=this._handleEvent(e,t,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,a),(o||r.changed)&&this.render(),this}_handleEvent(e,t,r){const{_active:a=[],options:o}=this,s=t,l=this._getActiveElements(e,a,r,s),u=_isClickEvent(e),f=determineLastEvent(e,this._lastEvent,r,u);r&&(this._lastEvent=null,callback(o.onHover,[e,l,this],this),u&&callback(o.onClick,[e,l,this],this));const d=!_elementsEqual(l,a);return(d||t)&&(this._active=l,this._updateHoverStyles(l,a,t)),this._lastEvent=f,d}_getActiveElements(e,t,r,a){if(e.type==="mouseout")return[];if(!r)return t;const o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,a)}}function invalidatePlugins(){return each(Chart.instances,n=>n._plugins.invalidate())}function clipSelf(n,e,t){const{startAngle:r,x:a,y:o,outerRadius:s,innerRadius:l,options:u}=e,{borderWidth:f,borderJoinStyle:d}=u,p=Math.min(f/s,_normalizeAngle(r-t));if(n.beginPath(),n.arc(a,o,s-f/2,r+p/2,t-p/2),l>0){const v=Math.min(f/l,_normalizeAngle(r-t));n.arc(a,o,l+f/2,t-v/2,r+v/2,!0)}else{const v=Math.min(f/2,s*_normalizeAngle(r-t));if(d==="round")n.arc(a,o,v,t-PI/2,r+PI/2,!0);else if(d==="bevel"){const y=2*v*v,x=-y*Math.cos(t+PI/2)+a,E=-y*Math.sin(t+PI/2)+o,C=y*Math.cos(r+PI/2)+a,A=y*Math.sin(r+PI/2)+o;n.lineTo(x,E),n.lineTo(C,A)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function clipArc(n,e,t){const{startAngle:r,pixelMargin:a,x:o,y:s,outerRadius:l,innerRadius:u}=e;let f=a/l;n.beginPath(),n.arc(o,s,l,r-f,t+f),u>a?(f=a/u,n.arc(o,s,u,t+f,r-f,!0)):n.arc(o,s,a,t+HALF_PI,r-HALF_PI),n.closePath(),n.clip()}function toRadiusCorners(n){return _readValueToProps(n,["outerStart","outerEnd","innerStart","innerEnd"])}function parseBorderRadius$1(n,e,t,r){const a=toRadiusCorners(n.options.borderRadius),o=(t-e)/2,s=Math.min(o,r*e/2),l=u=>{const f=(t-Math.min(o,u))*r/2;return _limitValue(u,0,Math.min(o,f))};return{outerStart:l(a.outerStart),outerEnd:l(a.outerEnd),innerStart:_limitValue(a.innerStart,0,s),innerEnd:_limitValue(a.innerEnd,0,s)}}function rThetaToXY(n,e,t,r){return{x:t+n*Math.cos(e),y:r+n*Math.sin(e)}}function pathArc(n,e,t,r,a,o){const{x:s,y:l,startAngle:u,pixelMargin:f,innerRadius:d}=e,p=Math.max(e.outerRadius+r+t-f,0),v=d>0?d+r+t+f:0;let y=0;const x=a-u;if(r){const pe=d>0?d-r:0,Se=p>0?p-r:0,xe=(pe+Se)/2,je=xe!==0?x*xe/(xe+r):x;y=(x-je)/2}const E=Math.max(.001,x*p-t/PI)/p,C=(x-E)/2,A=u+C+y,M=a-C-y,{outerStart:V,outerEnd:R,innerStart:q,innerEnd:Q}=parseBorderRadius$1(e,v,p,M-A),m=p-V,ne=p-R,re=A+V/m,ge=M-R/ne,ve=v+q,_e=v+Q,ue=A+q/ve,He=M-Q/_e;if(n.beginPath(),o){const pe=(re+ge)/2;if(n.arc(s,l,p,re,pe),n.arc(s,l,p,pe,ge),R>0){const Le=rThetaToXY(ne,ge,s,l);n.arc(Le.x,Le.y,R,ge,M+HALF_PI)}const Se=rThetaToXY(_e,M,s,l);if(n.lineTo(Se.x,Se.y),Q>0){const Le=rThetaToXY(_e,He,s,l);n.arc(Le.x,Le.y,Q,M+HALF_PI,He+Math.PI)}const xe=(M-Q/v+(A+q/v))/2;if(n.arc(s,l,v,M-Q/v,xe,!0),n.arc(s,l,v,xe,A+q/v,!0),q>0){const Le=rThetaToXY(ve,ue,s,l);n.arc(Le.x,Le.y,q,ue+Math.PI,A-HALF_PI)}const je=rThetaToXY(m,A,s,l);if(n.lineTo(je.x,je.y),V>0){const Le=rThetaToXY(m,re,s,l);n.arc(Le.x,Le.y,V,A-HALF_PI,re)}}else{n.moveTo(s,l);const pe=Math.cos(re)*p+s,Se=Math.sin(re)*p+l;n.lineTo(pe,Se);const xe=Math.cos(ge)*p+s,je=Math.sin(ge)*p+l;n.lineTo(xe,je)}n.closePath()}function drawArc(n,e,t,r,a){const{fullCircles:o,startAngle:s,circumference:l}=e;let u=e.endAngle;if(o){pathArc(n,e,t,r,u,a);for(let f=0;f<o;++f)n.fill();isNaN(l)||(u=s+(l%TAU||TAU))}return pathArc(n,e,t,r,u,a),n.fill(),u}function drawBorder(n,e,t,r,a){const{fullCircles:o,startAngle:s,circumference:l,options:u}=e,{borderWidth:f,borderJoinStyle:d,borderDash:p,borderDashOffset:v,borderRadius:y}=u,x=u.borderAlign==="inner";if(!f)return;n.setLineDash(p||[]),n.lineDashOffset=v,x?(n.lineWidth=f*2,n.lineJoin=d||"round"):(n.lineWidth=f,n.lineJoin=d||"bevel");let E=e.endAngle;if(o){pathArc(n,e,t,r,E,a);for(let C=0;C<o;++C)n.stroke();isNaN(l)||(E=s+(l%TAU||TAU))}x&&clipArc(n,e,E),u.selfJoin&&E-s>=PI&&y===0&&d!=="miter"&&clipSelf(n,e,E),o||(pathArc(n,e,t,r,E,a),n.stroke())}class ArcElement extends Element$1{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,r){const a=this.getProps(["x","y"],r),{angle:o,distance:s}=getAngleFromPoint(a,{x:e,y:t}),{startAngle:l,endAngle:u,innerRadius:f,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),v=(this.options.spacing+this.options.borderWidth)/2,y=valueOrDefault(p,u-l),x=_angleBetween(o,l,u)&&l!==u,E=y>=TAU||x,C=_isBetween(s,f+v,d+v);return E&&C}getCenterPoint(e){const{x:t,y:r,startAngle:a,endAngle:o,innerRadius:s,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:f}=this.options,d=(a+o)/2,p=(s+l+f+u)/2;return{x:t+Math.cos(d)*p,y:r+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:t,circumference:r}=this,a=(t.offset||0)/4,o=(t.spacing||0)/2,s=t.circular;if(this.pixelMargin=t.borderAlign==="inner"?.33:0,this.fullCircles=r>TAU?Math.floor(r/TAU):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*a,Math.sin(l)*a);const u=1-Math.sin(Math.min(PI,r||0)),f=a*u;e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,drawArc(e,this,f,o,s),drawBorder(e,this,f,o,s),e.restore()}}function setStyle(n,e,t=e){n.lineCap=valueOrDefault(t.borderCapStyle,e.borderCapStyle),n.setLineDash(valueOrDefault(t.borderDash,e.borderDash)),n.lineDashOffset=valueOrDefault(t.borderDashOffset,e.borderDashOffset),n.lineJoin=valueOrDefault(t.borderJoinStyle,e.borderJoinStyle),n.lineWidth=valueOrDefault(t.borderWidth,e.borderWidth),n.strokeStyle=valueOrDefault(t.borderColor,e.borderColor)}function lineTo(n,e,t){n.lineTo(t.x,t.y)}function getLineMethod(n){return n.stepped?_steppedLineTo:n.tension||n.cubicInterpolationMode==="monotone"?_bezierCurveTo:lineTo}function pathVars(n,e,t={}){const r=n.length,{start:a=0,end:o=r-1}=t,{start:s,end:l}=e,u=Math.max(a,s),f=Math.min(o,l),d=a<s&&o<s||a>l&&o>l;return{count:r,start:u,loop:e.loop,ilen:f<u&&!d?r+f-u:f-u}}function pathSegment(n,e,t,r){const{points:a,options:o}=e,{count:s,start:l,loop:u,ilen:f}=pathVars(a,t,r),d=getLineMethod(o);let{move:p=!0,reverse:v}=r||{},y,x,E;for(y=0;y<=f;++y)x=a[(l+(v?f-y:y))%s],!x.skip&&(p?(n.moveTo(x.x,x.y),p=!1):d(n,E,x,v,o.stepped),E=x);return u&&(x=a[(l+(v?f:0))%s],d(n,E,x,v,o.stepped)),!!u}function fastPathSegment(n,e,t,r){const a=e.points,{count:o,start:s,ilen:l}=pathVars(a,t,r),{move:u=!0,reverse:f}=r||{};let d=0,p=0,v,y,x,E,C,A;const M=R=>(s+(f?l-R:R))%o,V=()=>{E!==C&&(n.lineTo(d,C),n.lineTo(d,E),n.lineTo(d,A))};for(u&&(y=a[M(0)],n.moveTo(y.x,y.y)),v=0;v<=l;++v){if(y=a[M(v)],y.skip)continue;const R=y.x,q=y.y,Q=R|0;Q===x?(q<E?E=q:q>C&&(C=q),d=(p*d+R)/++p):(V(),n.lineTo(R,q),x=Q,p=0,E=C=q),A=q}V()}function _getSegmentMethod(n){const e=n.options,t=e.borderDash&&e.borderDash.length;return!n._decimated&&!n._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!t?fastPathSegment:pathSegment}function _getInterpolationMethod(n){return n.stepped?_steppedInterpolation:n.tension||n.cubicInterpolationMode==="monotone"?_bezierInterpolation:_pointInLine}function strokePathWithCache(n,e,t,r){let a=e._path;a||(a=e._path=new Path2D,e.path(a,t,r)&&a.closePath()),setStyle(n,e.options),n.stroke(a)}function strokePathDirect(n,e,t,r){const{segments:a,options:o}=e,s=_getSegmentMethod(e);for(const l of a)setStyle(n,o,l.style),n.beginPath(),s(n,e,l,{start:t,end:t+r-1})&&n.closePath(),n.stroke()}const usePath2D=typeof Path2D=="function";function draw(n,e,t,r){usePath2D&&!e.options.segment?strokePathWithCache(n,e,t,r):strokePathDirect(n,e,t,r)}class LineElement extends Element$1{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const a=r.spanGaps?this._loop:this._fullLoop;_updateBezierControlPoints(this._points,r,e,a,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=_computeSegments(this,this.options.segment))}first(){const e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){const e=this.segments,t=this.points,r=e.length;return r&&t[e[r-1].end]}interpolate(e,t){const r=this.options,a=e[t],o=this.points,s=_boundSegments(this,{property:t,start:a,end:a});if(!s.length)return;const l=[],u=_getInterpolationMethod(r);let f,d;for(f=0,d=s.length;f<d;++f){const{start:p,end:v}=s[f],y=o[p],x=o[v];if(y===x){l.push(y);continue}const E=Math.abs((a-y[t])/(x[t]-y[t])),C=u(y,x,E,r.stepped);C[t]=e[t],l.push(C)}return l.length===1?l[0]:l}pathSegment(e,t,r){return _getSegmentMethod(this)(e,this,t,r)}path(e,t,r){const a=this.segments,o=_getSegmentMethod(this);let s=this._loop;t=t||0,r=r||this.points.length-t;for(const l of a)s&=o(e,this,l,{start:t,end:t+r-1});return!!s}draw(e,t,r,a){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),draw(e,this,r,a),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function inRange$1(n,e,t,r){const a=n.options,{[t]:o}=n.getProps([t],r);return Math.abs(e-o)<a.radius+a.hitRadius}class PointElement extends Element$1{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,r){const a=this.options,{x:o,y:s}=this.getProps(["x","y"],r);return Math.pow(e-o,2)+Math.pow(t-s,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,t){return inRange$1(this,e,"x",t)}inYRange(e,t){return inRange$1(this,e,"y",t)}getCenterPoint(e){const{x:t,y:r}=this.getProps(["x","y"],e);return{x:t,y:r}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);const r=t&&e.borderWidth||0;return(t+r)*2}draw(e,t){const r=this.options;this.skip||r.radius<.1||!_isPointInArea(this,t,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,drawPoint(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}function getBarBounds(n,e){const{x:t,y:r,base:a,width:o,height:s}=n.getProps(["x","y","base","width","height"],e);let l,u,f,d,p;return n.horizontal?(p=s/2,l=Math.min(t,a),u=Math.max(t,a),f=r-p,d=r+p):(p=o/2,l=t-p,u=t+p,f=Math.min(r,a),d=Math.max(r,a)),{left:l,top:f,right:u,bottom:d}}function skipOrLimit(n,e,t,r){return n?0:_limitValue(e,t,r)}function parseBorderWidth(n,e,t){const r=n.options.borderWidth,a=n.borderSkipped,o=toTRBL(r);return{t:skipOrLimit(a.top,o.top,0,t),r:skipOrLimit(a.right,o.right,0,e),b:skipOrLimit(a.bottom,o.bottom,0,t),l:skipOrLimit(a.left,o.left,0,e)}}function parseBorderRadius(n,e,t){const{enableBorderRadius:r}=n.getProps(["enableBorderRadius"]),a=n.options.borderRadius,o=toTRBLCorners(a),s=Math.min(e,t),l=n.borderSkipped,u=r||isObject(a);return{topLeft:skipOrLimit(!u||l.top||l.left,o.topLeft,0,s),topRight:skipOrLimit(!u||l.top||l.right,o.topRight,0,s),bottomLeft:skipOrLimit(!u||l.bottom||l.left,o.bottomLeft,0,s),bottomRight:skipOrLimit(!u||l.bottom||l.right,o.bottomRight,0,s)}}function boundingRects(n){const e=getBarBounds(n),t=e.right-e.left,r=e.bottom-e.top,a=parseBorderWidth(n,t/2,r/2),o=parseBorderRadius(n,t/2,r/2);return{outer:{x:e.left,y:e.top,w:t,h:r,radius:o},inner:{x:e.left+a.l,y:e.top+a.t,w:t-a.l-a.r,h:r-a.t-a.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,o.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(a.b,a.r))}}}}function inRange(n,e,t,r){const a=e===null,o=t===null,l=n&&!(a&&o)&&getBarBounds(n,r);return l&&(a||_isBetween(e,l.left,l.right))&&(o||_isBetween(t,l.top,l.bottom))}function hasRadius(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function addNormalRectPath(n,e){n.rect(e.x,e.y,e.w,e.h)}function inflateRect(n,e,t={}){const r=n.x!==t.x?-e:0,a=n.y!==t.y?-e:0,o=(n.x+n.w!==t.x+t.w?e:0)-r,s=(n.y+n.h!==t.y+t.h?e:0)-a;return{x:n.x+r,y:n.y+a,w:n.w+o,h:n.h+s,radius:n.radius}}class BarElement extends Element$1{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:r,backgroundColor:a}}=this,{inner:o,outer:s}=boundingRects(this),l=hasRadius(s.radius)?addRoundedRectPath:addNormalRectPath;e.save(),(s.w!==o.w||s.h!==o.h)&&(e.beginPath(),l(e,inflateRect(s,t,o)),e.clip(),l(e,inflateRect(o,-t,s)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),l(e,inflateRect(o,t)),e.fillStyle=a,e.fill(),e.restore()}inRange(e,t,r){return inRange(this,e,t,r)}inXRange(e,t){return inRange(this,e,null,t)}inYRange(e,t){return inRange(this,null,e,t)}getCenterPoint(e){const{x:t,y:r,base:a,horizontal:o}=this.getProps(["x","y","base","horizontal"],e);return{x:o?(t+a)/2:t,y:o?r:(r+a)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}var elements=Object.freeze({__proto__:null,ArcElement,BarElement,LineElement,PointElement});const BORDER_COLORS=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],BACKGROUND_COLORS=BORDER_COLORS.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function getBorderColor(n){return BORDER_COLORS[n%BORDER_COLORS.length]}function getBackgroundColor(n){return BACKGROUND_COLORS[n%BACKGROUND_COLORS.length]}function colorizeDefaultDataset(n,e){return n.borderColor=getBorderColor(e),n.backgroundColor=getBackgroundColor(e),++e}function colorizeDoughnutDataset(n,e){return n.backgroundColor=n.data.map(()=>getBorderColor(e++)),e}function colorizePolarAreaDataset(n,e){return n.backgroundColor=n.data.map(()=>getBackgroundColor(e++)),e}function getColorizer(n){let e=0;return(t,r)=>{const a=n.getDatasetMeta(r).controller;a instanceof DoughnutController?e=colorizeDoughnutDataset(t,e):a instanceof PolarAreaController?e=colorizePolarAreaDataset(t,e):a&&(e=colorizeDefaultDataset(t,e))}}function containsColorsDefinitions(n){let e;for(e in n)if(n[e].borderColor||n[e].backgroundColor)return!0;return!1}function containsColorsDefinition(n){return n&&(n.borderColor||n.backgroundColor)}function containsDefaultColorsDefenitions(){return defaults.borderColor!=="rgba(0,0,0,0.1)"||defaults.backgroundColor!=="rgba(0,0,0,0.1)"}var plugin_colors={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,e,t){if(!t.enabled)return;const{data:{datasets:r},options:a}=n.config,{elements:o}=a,s=containsColorsDefinitions(r)||containsColorsDefinition(a)||o&&containsColorsDefinitions(o)||containsDefaultColorsDefenitions();if(!t.forceOverride&&s)return;const l=getColorizer(n);r.forEach(l)}};function lttbDecimation(n,e,t,r,a){const o=a.samples||r;if(o>=t)return n.slice(e,e+t);const s=[],l=(t-2)/(o-2);let u=0;const f=e+t-1;let d=e,p,v,y,x,E;for(s[u++]=n[d],p=0;p<o-2;p++){let C=0,A=0,M;const V=Math.floor((p+1)*l)+1+e,R=Math.min(Math.floor((p+2)*l)+1,t)+e,q=R-V;for(M=V;M<R;M++)C+=n[M].x,A+=n[M].y;C/=q,A/=q;const Q=Math.floor(p*l)+1+e,m=Math.min(Math.floor((p+1)*l)+1,t)+e,{x:ne,y:re}=n[d];for(y=x=-1,M=Q;M<m;M++)x=.5*Math.abs((ne-C)*(n[M].y-re)-(ne-n[M].x)*(A-re)),x>y&&(y=x,v=n[M],E=M);s[u++]=v,d=E}return s[u++]=n[f],s}function minMaxDecimation(n,e,t,r){let a=0,o=0,s,l,u,f,d,p,v,y,x,E;const C=[],A=e+t-1,M=n[e].x,R=n[A].x-M;for(s=e;s<e+t;++s){l=n[s],u=(l.x-M)/R*r,f=l.y;const q=u|0;if(q===d)f<x?(x=f,p=s):f>E&&(E=f,v=s),a=(o*a+l.x)/++o;else{const Q=s-1;if(!isNullOrUndef(p)&&!isNullOrUndef(v)){const m=Math.min(p,v),ne=Math.max(p,v);m!==y&&m!==Q&&C.push({...n[m],x:a}),ne!==y&&ne!==Q&&C.push({...n[ne],x:a})}s>0&&Q!==y&&C.push(n[Q]),C.push(l),d=q,o=0,x=E=f,p=v=y=s}}return C}function cleanDecimatedDataset(n){if(n._decimated){const e=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function cleanDecimatedData(n){n.data.datasets.forEach(e=>{cleanDecimatedDataset(e)})}function getStartAndCountOfVisiblePointsSimplified(n,e){const t=e.length;let r=0,a;const{iScale:o}=n,{min:s,max:l,minDefined:u,maxDefined:f}=o.getUserBounds();return u&&(r=_limitValue(_lookupByKey(e,o.axis,s).lo,0,t-1)),f?a=_limitValue(_lookupByKey(e,o.axis,l).hi+1,r,t)-r:a=t-r,{start:r,count:a}}var plugin_decimation={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,e,t)=>{if(!t.enabled){cleanDecimatedData(n);return}const r=n.width;n.data.datasets.forEach((a,o)=>{const{_data:s,indexAxis:l}=a,u=n.getDatasetMeta(o),f=s||a.data;if(resolve([l,n.options.indexAxis])==="y"||!u.controller.supportsDecimation)return;const d=n.scales[u.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:p,count:v}=getStartAndCountOfVisiblePointsSimplified(u,f);const y=t.threshold||4*r;if(v<=y){cleanDecimatedDataset(a);return}isNullOrUndef(s)&&(a._data=f,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(E){this._data=E}}));let x;switch(t.algorithm){case"lttb":x=lttbDecimation(f,p,v,r,t);break;case"min-max":x=minMaxDecimation(f,p,v,r);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}a._decimated=x})},destroy(n){cleanDecimatedData(n)}};function _segments(n,e,t){const r=n.segments,a=n.points,o=e.points,s=[];for(const l of r){let{start:u,end:f}=l;f=_findSegmentEnd(u,f,a);const d=_getBounds(t,a[u],a[f],l.loop);if(!e.segments){s.push({source:l,target:d,start:a[u],end:a[f]});continue}const p=_boundSegments(e,d);for(const v of p){const y=_getBounds(t,o[v.start],o[v.end],v.loop),x=_boundSegment(l,a,y);for(const E of x)s.push({source:E,target:v,start:{[t]:_getEdge(d,y,"start",Math.max)},end:{[t]:_getEdge(d,y,"end",Math.min)}})}}return s}function _getBounds(n,e,t,r){if(r)return;let a=e[n],o=t[n];return n==="angle"&&(a=_normalizeAngle(a),o=_normalizeAngle(o)),{property:n,start:a,end:o}}function _pointsFromSegments(n,e){const{x:t=null,y:r=null}=n||{},a=e.points,o=[];return e.segments.forEach(({start:s,end:l})=>{l=_findSegmentEnd(s,l,a);const u=a[s],f=a[l];r!==null?(o.push({x:u.x,y:r}),o.push({x:f.x,y:r})):t!==null&&(o.push({x:t,y:u.y}),o.push({x:t,y:f.y}))}),o}function _findSegmentEnd(n,e,t){for(;e>n;e--){const r=t[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function _getEdge(n,e,t,r){return n&&e?r(n[t],e[t]):n?n[t]:e?e[t]:0}function _createBoundaryLine(n,e){let t=[],r=!1;return isArray(n)?(r=!0,t=n):t=_pointsFromSegments(n,e),t.length?new LineElement({points:t,options:{tension:0},_loop:r,_fullLoop:r}):null}function _shouldApplyFill(n){return n&&n.fill!==!1}function _resolveTarget(n,e,t){let a=n[e].fill;const o=[e];let s;if(!t)return a;for(;a!==!1&&o.indexOf(a)===-1;){if(!isNumberFinite(a))return a;if(s=n[a],!s)return!1;if(s.visible)return a;o.push(a),a=s.fill}return!1}function _decodeFill(n,e,t){const r=parseFillOption(n);if(isObject(r))return isNaN(r.value)?!1:r;let a=parseFloat(r);return isNumberFinite(a)&&Math.floor(a)===a?decodeTargetIndex(r[0],e,a,t):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function decodeTargetIndex(n,e,t,r){return(n==="-"||n==="+")&&(t=e+t),t===e||t<0||t>=r?!1:t}function _getTargetPixel(n,e){let t=null;return n==="start"?t=e.bottom:n==="end"?t=e.top:isObject(n)?t=e.getPixelForValue(n.value):e.getBasePixel&&(t=e.getBasePixel()),t}function _getTargetValue(n,e,t){let r;return n==="start"?r=t:n==="end"?r=e.options.reverse?e.min:e.max:isObject(n)?r=n.value:r=e.getBaseValue(),r}function parseFillOption(n){const e=n.options,t=e.fill;let r=valueOrDefault(t&&t.target,t);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function _buildStackLine(n){const{scale:e,index:t,line:r}=n,a=[],o=r.segments,s=r.points,l=getLinesBelow(e,t);l.push(_createBoundaryLine({x:null,y:e.bottom},r));for(let u=0;u<o.length;u++){const f=o[u];for(let d=f.start;d<=f.end;d++)addPointsBelow(a,s[d],l)}return new LineElement({points:a,options:{}})}function getLinesBelow(n,e){const t=[],r=n.getMatchingVisibleMetas("line");for(let a=0;a<r.length;a++){const o=r[a];if(o.index===e)break;o.hidden||t.unshift(o.dataset)}return t}function addPointsBelow(n,e,t){const r=[];for(let a=0;a<t.length;a++){const o=t[a],{first:s,last:l,point:u}=findPoint(o,e,"x");if(!(!u||s&&l)){if(s)r.unshift(u);else if(n.push(u),!l)break}}n.push(...r)}function findPoint(n,e,t){const r=n.interpolate(e,t);if(!r)return{};const a=r[t],o=n.segments,s=n.points;let l=!1,u=!1;for(let f=0;f<o.length;f++){const d=o[f],p=s[d.start][t],v=s[d.end][t];if(_isBetween(a,p,v)){l=a===p,u=a===v;break}}return{first:l,last:u,point:r}}class simpleArc{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,r){const{x:a,y:o,radius:s}=this;return t=t||{start:0,end:TAU},e.arc(a,o,s,t.end,t.start,!0),!r.bounds}interpolate(e){const{x:t,y:r,radius:a}=this,o=e.angle;return{x:t+Math.cos(o)*a,y:r+Math.sin(o)*a,angle:o}}}function _getTarget(n){const{chart:e,fill:t,line:r}=n;if(isNumberFinite(t))return getLineByIndex(e,t);if(t==="stack")return _buildStackLine(n);if(t==="shape")return!0;const a=computeBoundary(n);return a instanceof simpleArc?a:_createBoundaryLine(a,r)}function getLineByIndex(n,e){const t=n.getDatasetMeta(e);return t&&n.isDatasetVisible(e)?t.dataset:null}function computeBoundary(n){return(n.scale||{}).getPointPositionForValue?computeCircularBoundary(n):computeLinearBoundary(n)}function computeLinearBoundary(n){const{scale:e={},fill:t}=n,r=_getTargetPixel(t,e);if(isNumberFinite(r)){const a=e.isHorizontal();return{x:a?r:null,y:a?null:r}}return null}function computeCircularBoundary(n){const{scale:e,fill:t}=n,r=e.options,a=e.getLabels().length,o=r.reverse?e.max:e.min,s=_getTargetValue(t,e,o),l=[];if(r.grid.circular){const u=e.getPointPositionForValue(0,o);return new simpleArc({x:u.x,y:u.y,radius:e.getDistanceFromCenterForValue(s)})}for(let u=0;u<a;++u)l.push(e.getPointPositionForValue(u,s));return l}function _drawfill(n,e,t){const r=_getTarget(e),{chart:a,index:o,line:s,scale:l,axis:u}=e,f=s.options,d=f.fill,p=f.backgroundColor,{above:v=p,below:y=p}=d||{},x=a.getDatasetMeta(o),E=getDatasetClipArea(a,x);r&&s.points.length&&(clipArea(n,t),doFill(n,{line:s,target:r,above:v,below:y,area:t,scale:l,axis:u,clip:E}),unclipArea(n))}function doFill(n,e){const{line:t,target:r,above:a,below:o,area:s,scale:l,clip:u}=e,f=t._loop?"angle":e.axis;n.save();let d=o;o!==a&&(f==="x"?(clipVertical(n,r,s.top),fill(n,{line:t,target:r,color:a,scale:l,property:f,clip:u}),n.restore(),n.save(),clipVertical(n,r,s.bottom)):f==="y"&&(clipHorizontal(n,r,s.left),fill(n,{line:t,target:r,color:o,scale:l,property:f,clip:u}),n.restore(),n.save(),clipHorizontal(n,r,s.right),d=a)),fill(n,{line:t,target:r,color:d,scale:l,property:f,clip:u}),n.restore()}function clipVertical(n,e,t){const{segments:r,points:a}=e;let o=!0,s=!1;n.beginPath();for(const l of r){const{start:u,end:f}=l,d=a[u],p=a[_findSegmentEnd(u,f,a)];o?(n.moveTo(d.x,d.y),o=!1):(n.lineTo(d.x,t),n.lineTo(d.x,d.y)),s=!!e.pathSegment(n,l,{move:s}),s?n.closePath():n.lineTo(p.x,t)}n.lineTo(e.first().x,t),n.closePath(),n.clip()}function clipHorizontal(n,e,t){const{segments:r,points:a}=e;let o=!0,s=!1;n.beginPath();for(const l of r){const{start:u,end:f}=l,d=a[u],p=a[_findSegmentEnd(u,f,a)];o?(n.moveTo(d.x,d.y),o=!1):(n.lineTo(t,d.y),n.lineTo(d.x,d.y)),s=!!e.pathSegment(n,l,{move:s}),s?n.closePath():n.lineTo(t,p.y)}n.lineTo(t,e.first().y),n.closePath(),n.clip()}function fill(n,e){const{line:t,target:r,property:a,color:o,scale:s,clip:l}=e,u=_segments(t,r,a);for(const{source:f,target:d,start:p,end:v}of u){const{style:{backgroundColor:y=o}={}}=f,x=r!==!0;n.save(),n.fillStyle=y,clipBounds(n,s,l,x&&_getBounds(a,p,v)),n.beginPath();const E=!!t.pathSegment(n,f);let C;if(x){E?n.closePath():interpolatedLineTo(n,r,v,a);const A=!!r.pathSegment(n,d,{move:E,reverse:!0});C=E&&A,C||interpolatedLineTo(n,r,p,a)}n.closePath(),n.fill(C?"evenodd":"nonzero"),n.restore()}}function clipBounds(n,e,t,r){const a=e.chart.chartArea,{property:o,start:s,end:l}=r||{};if(o==="x"||o==="y"){let u,f,d,p;o==="x"?(u=s,f=a.top,d=l,p=a.bottom):(u=a.left,f=s,d=a.right,p=l),n.beginPath(),t&&(u=Math.max(u,t.left),d=Math.min(d,t.right),f=Math.max(f,t.top),p=Math.min(p,t.bottom)),n.rect(u,f,d-u,p-f),n.clip()}}function interpolatedLineTo(n,e,t,r){const a=e.interpolate(t,r);a&&n.lineTo(a.x,a.y)}var index={id:"filler",afterDatasetsUpdate(n,e,t){const r=(n.data.datasets||[]).length,a=[];let o,s,l,u;for(s=0;s<r;++s)o=n.getDatasetMeta(s),l=o.dataset,u=null,l&&l.options&&l instanceof LineElement&&(u={visible:n.isDatasetVisible(s),index:s,fill:_decodeFill(l,s,r),chart:n,axis:o.controller.options.indexAxis,scale:o.vScale,line:l}),o.$filler=u,a.push(u);for(s=0;s<r;++s)u=a[s],!(!u||u.fill===!1)&&(u.fill=_resolveTarget(a,s,t.propagate))},beforeDraw(n,e,t){const r=t.drawTime==="beforeDraw",a=n.getSortedVisibleDatasetMetas(),o=n.chartArea;for(let s=a.length-1;s>=0;--s){const l=a[s].$filler;l&&(l.line.updateControlPoints(o,l.axis),r&&l.fill&&_drawfill(n.ctx,l,o))}},beforeDatasetsDraw(n,e,t){if(t.drawTime!=="beforeDatasetsDraw")return;const r=n.getSortedVisibleDatasetMetas();for(let a=r.length-1;a>=0;--a){const o=r[a].$filler;_shouldApplyFill(o)&&_drawfill(n.ctx,o,n.chartArea)}},beforeDatasetDraw(n,e,t){const r=e.meta.$filler;!_shouldApplyFill(r)||t.drawTime!=="beforeDatasetDraw"||_drawfill(n.ctx,r,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const getBoxSize=(n,e)=>{let{boxHeight:t=e,boxWidth:r=e}=n;return n.usePointStyle&&(t=Math.min(t,e),r=n.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:t,itemHeight:Math.max(e,t)}},itemsEqual=(n,e)=>n!==null&&e!==null&&n.datasetIndex===e.datasetIndex&&n.index===e.index;class Legend extends Element$1{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,r){this.maxWidth=e,this.maxHeight=t,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=callback(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(r=>e.filter(r,this.chart.data))),e.sort&&(t=t.sort((r,a)=>e.sort(r,a,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,a=toFont(r.font),o=a.size,s=this._computeTitleHeight(),{boxWidth:l,itemHeight:u}=getBoxSize(r,o);let f,d;t.font=a.string,this.isHorizontal()?(f=this.maxWidth,d=this._fitRows(s,o,l,u)+10):(d=this.maxHeight,f=this._fitCols(s,a,l,u)+10),this.width=Math.min(f,e.maxWidth||this.maxWidth),this.height=Math.min(d,e.maxHeight||this.maxHeight)}_fitRows(e,t,r,a){const{ctx:o,maxWidth:s,options:{labels:{padding:l}}}=this,u=this.legendHitBoxes=[],f=this.lineWidths=[0],d=a+l;let p=e;o.textAlign="left",o.textBaseline="middle";let v=-1,y=-d;return this.legendItems.forEach((x,E)=>{const C=r+t/2+o.measureText(x.text).width;(E===0||f[f.length-1]+C+2*l>s)&&(p+=d,f[f.length-(E>0?0:1)]=0,y+=d,v++),u[E]={left:0,top:y,row:v,width:C,height:a},f[f.length-1]+=C+l}),p}_fitCols(e,t,r,a){const{ctx:o,maxHeight:s,options:{labels:{padding:l}}}=this,u=this.legendHitBoxes=[],f=this.columnSizes=[],d=s-e;let p=l,v=0,y=0,x=0,E=0;return this.legendItems.forEach((C,A)=>{const{itemWidth:M,itemHeight:V}=calculateItemSize(r,t,o,C,a);A>0&&y+V+2*l>d&&(p+=v+l,f.push({width:v,height:y}),x+=v+l,E++,v=y=0),u[A]={left:x,top:y,col:E,width:M,height:V},v=Math.max(v,M),y+=V+l}),p+=v,f.push({width:v,height:y}),p}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:r,labels:{padding:a},rtl:o}}=this,s=getRtlAdapter(o,this.left,this.width);if(this.isHorizontal()){let l=0,u=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l]);for(const f of t)l!==f.row&&(l=f.row,u=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l])),f.top+=this.top+e+a,f.left=s.leftForLtr(s.x(u),f.width),u+=f.width+a}else{let l=0,u=_alignStartEnd(r,this.top+e+a,this.bottom-this.columnSizes[l].height);for(const f of t)f.col!==l&&(l=f.col,u=_alignStartEnd(r,this.top+e+a,this.bottom-this.columnSizes[l].height)),f.top=u,f.left+=this.left+a,f.left=s.leftForLtr(s.x(f.left),f.width),u+=f.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;clipArea(e,this),this._draw(),unclipArea(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:r,ctx:a}=this,{align:o,labels:s}=e,l=defaults.color,u=getRtlAdapter(e.rtl,this.left,this.width),f=toFont(s.font),{padding:d}=s,p=f.size,v=p/2;let y;this.drawTitle(),a.textAlign=u.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=f.string;const{boxWidth:x,boxHeight:E,itemHeight:C}=getBoxSize(s,p),A=function(Q,m,ne){if(isNaN(x)||x<=0||isNaN(E)||E<0)return;a.save();const re=valueOrDefault(ne.lineWidth,1);if(a.fillStyle=valueOrDefault(ne.fillStyle,l),a.lineCap=valueOrDefault(ne.lineCap,"butt"),a.lineDashOffset=valueOrDefault(ne.lineDashOffset,0),a.lineJoin=valueOrDefault(ne.lineJoin,"miter"),a.lineWidth=re,a.strokeStyle=valueOrDefault(ne.strokeStyle,l),a.setLineDash(valueOrDefault(ne.lineDash,[])),s.usePointStyle){const ge={radius:E*Math.SQRT2/2,pointStyle:ne.pointStyle,rotation:ne.rotation,borderWidth:re},ve=u.xPlus(Q,x/2),_e=m+v;drawPointLegend(a,ge,ve,_e,s.pointStyleWidth&&x)}else{const ge=m+Math.max((p-E)/2,0),ve=u.leftForLtr(Q,x),_e=toTRBLCorners(ne.borderRadius);a.beginPath(),Object.values(_e).some(ue=>ue!==0)?addRoundedRectPath(a,{x:ve,y:ge,w:x,h:E,radius:_e}):a.rect(ve,ge,x,E),a.fill(),re!==0&&a.stroke()}a.restore()},M=function(Q,m,ne){renderText(a,ne.text,Q,m+C/2,f,{strikethrough:ne.hidden,textAlign:u.textAlign(ne.textAlign)})},V=this.isHorizontal(),R=this._computeTitleHeight();V?y={x:_alignStartEnd(o,this.left+d,this.right-r[0]),y:this.top+d+R,line:0}:y={x:this.left+d,y:_alignStartEnd(o,this.top+R+d,this.bottom-t[0].height),line:0},overrideTextDirection(this.ctx,e.textDirection);const q=C+d;this.legendItems.forEach((Q,m)=>{a.strokeStyle=Q.fontColor,a.fillStyle=Q.fontColor;const ne=a.measureText(Q.text).width,re=u.textAlign(Q.textAlign||(Q.textAlign=s.textAlign)),ge=x+v+ne;let ve=y.x,_e=y.y;u.setWidth(this.width),V?m>0&&ve+ge+d>this.right&&(_e=y.y+=q,y.line++,ve=y.x=_alignStartEnd(o,this.left+d,this.right-r[y.line])):m>0&&_e+q>this.bottom&&(ve=y.x=ve+t[y.line].width+d,y.line++,_e=y.y=_alignStartEnd(o,this.top+R+d,this.bottom-t[y.line].height));const ue=u.x(ve);if(A(ue,_e,Q),ve=_textX(re,ve+x+v,V?ve+ge:this.right,e.rtl),M(u.x(ve),_e,Q),V)y.x+=ge+d;else if(typeof Q.text!="string"){const He=f.lineHeight;y.y+=calculateLegendItemHeight(Q,He)+d}else y.y+=q}),restoreTextDirection(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,r=toFont(t.font),a=toPadding(t.padding);if(!t.display)return;const o=getRtlAdapter(e.rtl,this.left,this.width),s=this.ctx,l=t.position,u=r.size/2,f=a.top+u;let d,p=this.left,v=this.width;if(this.isHorizontal())v=Math.max(...this.lineWidths),d=this.top+f,p=_alignStartEnd(e.align,p,this.right-v);else{const x=this.columnSizes.reduce((E,C)=>Math.max(E,C.height),0);d=f+_alignStartEnd(e.align,this.top,this.bottom-x-e.labels.padding-this._computeTitleHeight())}const y=_alignStartEnd(l,p,p+v);s.textAlign=o.textAlign(_toLeftRightCenter(l)),s.textBaseline="middle",s.strokeStyle=t.color,s.fillStyle=t.color,s.font=r.string,renderText(s,t.text,y,d,r)}_computeTitleHeight(){const e=this.options.title,t=toFont(e.font),r=toPadding(e.padding);return e.display?t.lineHeight+r.height:0}_getLegendItemAt(e,t){let r,a,o;if(_isBetween(e,this.left,this.right)&&_isBetween(t,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(a=o[r],_isBetween(e,a.left,a.left+a.width)&&_isBetween(t,a.top,a.top+a.height))return this.legendItems[r]}return null}handleEvent(e){const t=this.options;if(!isListened(e.type,t))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const a=this._hoveredItem,o=itemsEqual(a,r);a&&!o&&callback(t.onLeave,[e,a,this],this),this._hoveredItem=r,r&&!o&&callback(t.onHover,[e,r,this],this)}else r&&callback(t.onClick,[e,r,this],this)}}function calculateItemSize(n,e,t,r,a){const o=calculateItemWidth(r,n,e,t),s=calculateItemHeight(a,r,e.lineHeight);return{itemWidth:o,itemHeight:s}}function calculateItemWidth(n,e,t,r){let a=n.text;return a&&typeof a!="string"&&(a=a.reduce((o,s)=>o.length>s.length?o:s)),e+t.size/2+r.measureText(a).width}function calculateItemHeight(n,e,t){let r=n;return typeof e.text!="string"&&(r=calculateLegendItemHeight(e,t)),r}function calculateLegendItemHeight(n,e){const t=n.text?n.text.length:0;return e*t}function isListened(n,e){return!!((n==="mousemove"||n==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(n==="click"||n==="mouseup"))}var plugin_legend={id:"legend",_element:Legend,start(n,e,t){const r=n.legend=new Legend({ctx:n.ctx,options:t,chart:n});layouts.configure(n,r,t),layouts.addBox(n,r)},stop(n){layouts.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,e,t){const r=n.legend;layouts.configure(n,r,t),r.options=t},afterUpdate(n){const e=n.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(n,e){e.replay||n.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,e,t){const r=e.datasetIndex,a=t.chart;a.isDatasetVisible(r)?(a.hide(r),e.hidden=!0):(a.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const e=n.data.datasets,{labels:{usePointStyle:t,pointStyle:r,textAlign:a,color:o,useBorderRadius:s,borderRadius:l}}=n.legend.options;return n._getSortedDatasetMetas().map(u=>{const f=u.controller.getStyle(t?0:void 0),d=toPadding(f.borderWidth);return{text:e[u.index].label,fillStyle:f.backgroundColor,fontColor:o,hidden:!u.visible,lineCap:f.borderCapStyle,lineDash:f.borderDash,lineDashOffset:f.borderDashOffset,lineJoin:f.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:f.borderColor,pointStyle:r||f.pointStyle,rotation:f.rotation,textAlign:a||f.textAlign,borderRadius:s&&(l||f.borderRadius),datasetIndex:u.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Title extends Element$1{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const a=isArray(r.text)?r.text.length:1;this._padding=toPadding(r.padding);const o=a*toFont(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:r,bottom:a,right:o,options:s}=this,l=s.align;let u=0,f,d,p;return this.isHorizontal()?(d=_alignStartEnd(l,r,o),p=t+e,f=o-r):(s.position==="left"?(d=r+e,p=_alignStartEnd(l,a,t),u=PI*-.5):(d=o-e,p=_alignStartEnd(l,t,a),u=PI*.5),f=a-t),{titleX:d,titleY:p,maxWidth:f,rotation:u}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const r=toFont(t.font),o=r.lineHeight/2+this._padding.top,{titleX:s,titleY:l,maxWidth:u,rotation:f}=this._drawArgs(o);renderText(e,t.text,0,0,r,{color:t.color,maxWidth:u,rotation:f,textAlign:_toLeftRightCenter(t.align),textBaseline:"middle",translation:[s,l]})}}function createTitle(n,e){const t=new Title({ctx:n.ctx,options:e,chart:n});layouts.configure(n,t,e),layouts.addBox(n,t),n.titleBlock=t}var plugin_title={id:"title",_element:Title,start(n,e,t){createTitle(n,t)},stop(n){const e=n.titleBlock;layouts.removeBox(n,e),delete n.titleBlock},beforeUpdate(n,e,t){const r=n.titleBlock;layouts.configure(n,r,t),r.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const map=new WeakMap;var plugin_subtitle={id:"subtitle",start(n,e,t){const r=new Title({ctx:n.ctx,options:t,chart:n});layouts.configure(n,r,t),layouts.addBox(n,r),map.set(n,r)},stop(n){layouts.removeBox(n,map.get(n)),map.delete(n)},beforeUpdate(n,e,t){const r=map.get(n);layouts.configure(n,r,t),r.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const positioners={average(n){if(!n.length)return!1;let e,t,r=new Set,a=0,o=0;for(e=0,t=n.length;e<t;++e){const l=n[e].element;if(l&&l.hasValue()){const u=l.tooltipPosition();r.add(u.x),a+=u.y,++o}}return o===0||r.size===0?!1:{x:[...r].reduce((l,u)=>l+u)/r.size,y:a/o}},nearest(n,e){if(!n.length)return!1;let t=e.x,r=e.y,a=Number.POSITIVE_INFINITY,o,s,l;for(o=0,s=n.length;o<s;++o){const u=n[o].element;if(u&&u.hasValue()){const f=u.getCenterPoint(),d=distanceBetweenPoints(e,f);d<a&&(a=d,l=u)}}if(l){const u=l.tooltipPosition();t=u.x,r=u.y}return{x:t,y:r}}};function pushOrConcat(n,e){return e&&(isArray(e)?Array.prototype.push.apply(n,e):n.push(e)),n}function splitNewlines(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function createTooltipItem(n,e){const{element:t,datasetIndex:r,index:a}=e,o=n.getDatasetMeta(r).controller,{label:s,value:l}=o.getLabelAndValue(a);return{chart:n,label:s,parsed:o.getParsed(a),raw:n.data.datasets[r].data[a],formattedValue:l,dataset:o.getDataset(),dataIndex:a,datasetIndex:r,element:t}}function getTooltipSize(n,e){const t=n.chart.ctx,{body:r,footer:a,title:o}=n,{boxWidth:s,boxHeight:l}=e,u=toFont(e.bodyFont),f=toFont(e.titleFont),d=toFont(e.footerFont),p=o.length,v=a.length,y=r.length,x=toPadding(e.padding);let E=x.height,C=0,A=r.reduce((R,q)=>R+q.before.length+q.lines.length+q.after.length,0);if(A+=n.beforeBody.length+n.afterBody.length,p&&(E+=p*f.lineHeight+(p-1)*e.titleSpacing+e.titleMarginBottom),A){const R=e.displayColors?Math.max(l,u.lineHeight):u.lineHeight;E+=y*R+(A-y)*u.lineHeight+(A-1)*e.bodySpacing}v&&(E+=e.footerMarginTop+v*d.lineHeight+(v-1)*e.footerSpacing);let M=0;const V=function(R){C=Math.max(C,t.measureText(R).width+M)};return t.save(),t.font=f.string,each(n.title,V),t.font=u.string,each(n.beforeBody.concat(n.afterBody),V),M=e.displayColors?s+2+e.boxPadding:0,each(r,R=>{each(R.before,V),each(R.lines,V),each(R.after,V)}),M=0,t.font=d.string,each(n.footer,V),t.restore(),C+=x.width,{width:C,height:E}}function determineYAlign(n,e){const{y:t,height:r}=e;return t<r/2?"top":t>n.height-r/2?"bottom":"center"}function doesNotFitWithAlign(n,e,t,r){const{x:a,width:o}=r,s=t.caretSize+t.caretPadding;if(n==="left"&&a+o+s>e.width||n==="right"&&a-o-s<0)return!0}function determineXAlign(n,e,t,r){const{x:a,width:o}=t,{width:s,chartArea:{left:l,right:u}}=n;let f="center";return r==="center"?f=a<=(l+u)/2?"left":"right":a<=o/2?f="left":a>=s-o/2&&(f="right"),doesNotFitWithAlign(f,n,e,t)&&(f="center"),f}function determineAlignment(n,e,t){const r=t.yAlign||e.yAlign||determineYAlign(n,t);return{xAlign:t.xAlign||e.xAlign||determineXAlign(n,e,t,r),yAlign:r}}function alignX(n,e){let{x:t,width:r}=n;return e==="right"?t-=r:e==="center"&&(t-=r/2),t}function alignY(n,e,t){let{y:r,height:a}=n;return e==="top"?r+=t:e==="bottom"?r-=a+t:r-=a/2,r}function getBackgroundPoint(n,e,t,r){const{caretSize:a,caretPadding:o,cornerRadius:s}=n,{xAlign:l,yAlign:u}=t,f=a+o,{topLeft:d,topRight:p,bottomLeft:v,bottomRight:y}=toTRBLCorners(s);let x=alignX(e,l);const E=alignY(e,u,f);return u==="center"?l==="left"?x+=f:l==="right"&&(x-=f):l==="left"?x-=Math.max(d,v)+a:l==="right"&&(x+=Math.max(p,y)+a),{x:_limitValue(x,0,r.width-e.width),y:_limitValue(E,0,r.height-e.height)}}function getAlignedX(n,e,t){const r=toPadding(t.padding);return e==="center"?n.x+n.width/2:e==="right"?n.x+n.width-r.right:n.x+r.left}function getBeforeAfterBodyLines(n){return pushOrConcat([],splitNewlines(n))}function createTooltipContext(n,e,t){return createContext(n,{tooltip:e,tooltipItems:t,type:"tooltip"})}function overrideCallbacks(n,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?n.override(t):n}const defaultCallbacks={beforeTitle:noop,title(n){if(n.length>0){const e=n[0],t=e.chart.data.labels,r=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return t[e.dataIndex]}return""},afterTitle:noop,beforeBody:noop,beforeLabel:noop,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let e=n.dataset.label||"";e&&(e+=": ");const t=n.formattedValue;return isNullOrUndef(t)||(e+=t),e},labelColor(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:noop,afterBody:noop,beforeFooter:noop,footer:noop,afterFooter:noop};function invokeCallbackWithFallback(n,e,t,r){const a=n[e].call(t,r);return typeof a>"u"?defaultCallbacks[e].call(t,r):a}class Tooltip extends Element$1{static positioners=positioners;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,r=this.options.setContext(this.getContext()),a=r.enabled&&t.options.animation&&r.animations,o=new Animations(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=createTooltipContext(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:r}=t,a=invokeCallbackWithFallback(r,"beforeTitle",this,e),o=invokeCallbackWithFallback(r,"title",this,e),s=invokeCallbackWithFallback(r,"afterTitle",this,e);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(o)),l=pushOrConcat(l,splitNewlines(s)),l}getBeforeBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:r}=t,a=[];return each(e,o=>{const s={before:[],lines:[],after:[]},l=overrideCallbacks(r,o);pushOrConcat(s.before,splitNewlines(invokeCallbackWithFallback(l,"beforeLabel",this,o))),pushOrConcat(s.lines,invokeCallbackWithFallback(l,"label",this,o)),pushOrConcat(s.after,splitNewlines(invokeCallbackWithFallback(l,"afterLabel",this,o))),a.push(s)}),a}getAfterBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:r}=t,a=invokeCallbackWithFallback(r,"beforeFooter",this,e),o=invokeCallbackWithFallback(r,"footer",this,e),s=invokeCallbackWithFallback(r,"afterFooter",this,e);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(o)),l=pushOrConcat(l,splitNewlines(s)),l}_createItems(e){const t=this._active,r=this.chart.data,a=[],o=[],s=[];let l=[],u,f;for(u=0,f=t.length;u<f;++u)l.push(createTooltipItem(this.chart,t[u]));return e.filter&&(l=l.filter((d,p,v)=>e.filter(d,p,v,r))),e.itemSort&&(l=l.sort((d,p)=>e.itemSort(d,p,r))),each(l,d=>{const p=overrideCallbacks(e.callbacks,d);a.push(invokeCallbackWithFallback(p,"labelColor",this,d)),o.push(invokeCallbackWithFallback(p,"labelPointStyle",this,d)),s.push(invokeCallbackWithFallback(p,"labelTextColor",this,d))}),this.labelColors=a,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=l,l}update(e,t){const r=this.options.setContext(this.getContext()),a=this._active;let o,s=[];if(!a.length)this.opacity!==0&&(o={opacity:0});else{const l=positioners[r.position].call(this,a,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);const u=this._size=getTooltipSize(this,r),f=Object.assign({},l,u),d=determineAlignment(this.chart,r,f),p=getBackgroundPoint(r,f,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,o={opacity:1,x:p.x,y:p.y,width:u.width,height:u.height,caretX:l.x,caretY:l.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,r,a){const o=this.getCaretPosition(e,r,a);t.lineTo(o.x1,o.y1),t.lineTo(o.x2,o.y2),t.lineTo(o.x3,o.y3)}getCaretPosition(e,t,r){const{xAlign:a,yAlign:o}=this,{caretSize:s,cornerRadius:l}=r,{topLeft:u,topRight:f,bottomLeft:d,bottomRight:p}=toTRBLCorners(l),{x:v,y}=e,{width:x,height:E}=t;let C,A,M,V,R,q;return o==="center"?(R=y+E/2,a==="left"?(C=v,A=C-s,V=R+s,q=R-s):(C=v+x,A=C+s,V=R-s,q=R+s),M=C):(a==="left"?A=v+Math.max(u,d)+s:a==="right"?A=v+x-Math.max(f,p)-s:A=this.caretX,o==="top"?(V=y,R=V-s,C=A-s,M=A+s):(V=y+E,R=V+s,C=A+s,M=A-s),q=V),{x1:C,x2:A,x3:M,y1:V,y2:R,y3:q}}drawTitle(e,t,r){const a=this.title,o=a.length;let s,l,u;if(o){const f=getRtlAdapter(r.rtl,this.x,this.width);for(e.x=getAlignedX(this,r.titleAlign,r),t.textAlign=f.textAlign(r.titleAlign),t.textBaseline="middle",s=toFont(r.titleFont),l=r.titleSpacing,t.fillStyle=r.titleColor,t.font=s.string,u=0;u<o;++u)t.fillText(a[u],f.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+l,u+1===o&&(e.y+=r.titleMarginBottom-l)}}_drawColorBox(e,t,r,a,o){const s=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:u,boxWidth:f}=o,d=toFont(o.bodyFont),p=getAlignedX(this,"left",o),v=a.x(p),y=u<d.lineHeight?(d.lineHeight-u)/2:0,x=t.y+y;if(o.usePointStyle){const E={radius:Math.min(f,u)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},C=a.leftForLtr(v,f)+f/2,A=x+u/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,drawPoint(e,E,C,A),e.strokeStyle=s.borderColor,e.fillStyle=s.backgroundColor,drawPoint(e,E,C,A)}else{e.lineWidth=isObject(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,e.strokeStyle=s.borderColor,e.setLineDash(s.borderDash||[]),e.lineDashOffset=s.borderDashOffset||0;const E=a.leftForLtr(v,f),C=a.leftForLtr(a.xPlus(v,1),f-2),A=toTRBLCorners(s.borderRadius);Object.values(A).some(M=>M!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,addRoundedRectPath(e,{x:E,y:x,w:f,h:u,radius:A}),e.fill(),e.stroke(),e.fillStyle=s.backgroundColor,e.beginPath(),addRoundedRectPath(e,{x:C,y:x+1,w:f-2,h:u-2,radius:A}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(E,x,f,u),e.strokeRect(E,x,f,u),e.fillStyle=s.backgroundColor,e.fillRect(C,x+1,f-2,u-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,t,r){const{body:a}=this,{bodySpacing:o,bodyAlign:s,displayColors:l,boxHeight:u,boxWidth:f,boxPadding:d}=r,p=toFont(r.bodyFont);let v=p.lineHeight,y=0;const x=getRtlAdapter(r.rtl,this.x,this.width),E=function(ne){t.fillText(ne,x.x(e.x+y),e.y+v/2),e.y+=v+o},C=x.textAlign(s);let A,M,V,R,q,Q,m;for(t.textAlign=s,t.textBaseline="middle",t.font=p.string,e.x=getAlignedX(this,C,r),t.fillStyle=r.bodyColor,each(this.beforeBody,E),y=l&&C!=="right"?s==="center"?f/2+d:f+2+d:0,R=0,Q=a.length;R<Q;++R){for(A=a[R],M=this.labelTextColors[R],t.fillStyle=M,each(A.before,E),V=A.lines,l&&V.length&&(this._drawColorBox(t,e,R,x,r),v=Math.max(p.lineHeight,u)),q=0,m=V.length;q<m;++q)E(V[q]),v=p.lineHeight;each(A.after,E)}y=0,v=p.lineHeight,each(this.afterBody,E),e.y-=o}drawFooter(e,t,r){const a=this.footer,o=a.length;let s,l;if(o){const u=getRtlAdapter(r.rtl,this.x,this.width);for(e.x=getAlignedX(this,r.footerAlign,r),e.y+=r.footerMarginTop,t.textAlign=u.textAlign(r.footerAlign),t.textBaseline="middle",s=toFont(r.footerFont),t.fillStyle=r.footerColor,t.font=s.string,l=0;l<o;++l)t.fillText(a[l],u.x(e.x),e.y+s.lineHeight/2),e.y+=s.lineHeight+r.footerSpacing}}drawBackground(e,t,r,a){const{xAlign:o,yAlign:s}=this,{x:l,y:u}=e,{width:f,height:d}=r,{topLeft:p,topRight:v,bottomLeft:y,bottomRight:x}=toTRBLCorners(a.cornerRadius);t.fillStyle=a.backgroundColor,t.strokeStyle=a.borderColor,t.lineWidth=a.borderWidth,t.beginPath(),t.moveTo(l+p,u),s==="top"&&this.drawCaret(e,t,r,a),t.lineTo(l+f-v,u),t.quadraticCurveTo(l+f,u,l+f,u+v),s==="center"&&o==="right"&&this.drawCaret(e,t,r,a),t.lineTo(l+f,u+d-x),t.quadraticCurveTo(l+f,u+d,l+f-x,u+d),s==="bottom"&&this.drawCaret(e,t,r,a),t.lineTo(l+y,u+d),t.quadraticCurveTo(l,u+d,l,u+d-y),s==="center"&&o==="left"&&this.drawCaret(e,t,r,a),t.lineTo(l,u+p),t.quadraticCurveTo(l,u,l+p,u),t.closePath(),t.fill(),a.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,r=this.$animations,a=r&&r.x,o=r&&r.y;if(a||o){const s=positioners[e.position].call(this,this._active,this._eventPosition);if(!s)return;const l=this._size=getTooltipSize(this,e),u=Object.assign({},s,this._size),f=determineAlignment(t,e,u),d=getBackgroundPoint(e,u,f,t);(a._to!==d.x||o._to!==d.y)&&(this.xAlign=f.xAlign,this.yAlign=f.yAlign,this.width=l.width,this.height=l.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(t);const a={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const s=toPadding(t.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&l&&(e.save(),e.globalAlpha=r,this.drawBackground(o,e,a,t),overrideTextDirection(e,t.textDirection),o.y+=s.top,this.drawTitle(o,e,t),this.drawBody(o,e,t),this.drawFooter(o,e,t),restoreTextDirection(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const r=this._active,a=e.map(({datasetIndex:l,index:u})=>{const f=this.chart.getDatasetMeta(l);if(!f)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:f.data[u],index:u}}),o=!_elementsEqual(r,a),s=this._positionChanged(a,t);(o||s)&&(this._active=a,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,r=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,o=this._active||[],s=this._getActiveElements(e,o,t,r),l=this._positionChanged(s,e),u=t||!_elementsEqual(s,o)||l;return u&&(this._active=s,(a.enabled||a.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),u}_getActiveElements(e,t,r,a){const o=this.options;if(e.type==="mouseout")return[];if(!a)return t.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const s=this.chart.getElementsAtEventForMode(e,o.mode,o,r);return o.reverse&&s.reverse(),s}_positionChanged(e,t){const{caretX:r,caretY:a,options:o}=this,s=positioners[o.position].call(this,e,t);return s!==!1&&(r!==s.x||a!==s.y)}}var plugin_tooltip={id:"tooltip",_element:Tooltip,positioners,afterInit(n,e,t){t&&(n.tooltip=new Tooltip({chart:n,options:t}))},beforeUpdate(n,e,t){n.tooltip&&n.tooltip.initialize(t)},reset(n,e,t){n.tooltip&&n.tooltip.initialize(t)},afterDraw(n){const e=n.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(n.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",t)}},afterEvent(n,e){if(n.tooltip){const t=e.replay;n.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,e)=>e.bodyFont.size,boxWidth:(n,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:defaultCallbacks},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},plugins=Object.freeze({__proto__:null,Colors:plugin_colors,Decimation:plugin_decimation,Filler:index,Legend:plugin_legend,SubTitle:plugin_subtitle,Title:plugin_title,Tooltip:plugin_tooltip});const addIfString=(n,e,t,r)=>(typeof e=="string"?(t=n.push(e)-1,r.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function findOrAddLabel(n,e,t,r){const a=n.indexOf(e);if(a===-1)return addIfString(n,e,t,r);const o=n.lastIndexOf(e);return a!==o?t:a}const validIndex=(n,e)=>n===null?null:_limitValue(Math.round(n),0,e);function _getLabelForValue(n){const e=this.getLabels();return n>=0&&n<e.length?e[n]:n}class CategoryScale extends Scale{static id="category";static defaults={ticks:{callback:_getLabelForValue}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const r=this.getLabels();for(const{index:a,label:o}of t)r[a]===o&&r.splice(a,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(isNullOrUndef(e))return null;const r=this.getLabels();return t=isFinite(t)&&r[t]===e?t:findOrAddLabel(r,e,valueOrDefault(t,e),this._addedLabels),validIndex(t,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:r,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),t||(a=this.getLabels().length-1)),this.min=r,this.max=a}buildTicks(){const e=this.min,t=this.max,r=this.options.offset,a=[];let o=this.getLabels();o=e===0&&t===o.length-1?o:o.slice(e,t+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let s=e;s<=t;s++)a.push({value:s});return a}getLabelForValue(e){return _getLabelForValue.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}function generateTicks$1(n,e){const t=[],{bounds:a,step:o,min:s,max:l,precision:u,count:f,maxTicks:d,maxDigits:p,includeBounds:v}=n,y=o||1,x=d-1,{min:E,max:C}=e,A=!isNullOrUndef(s),M=!isNullOrUndef(l),V=!isNullOrUndef(f),R=(C-E)/(p+1);let q=niceNum((C-E)/x/y)*y,Q,m,ne,re;if(q<1e-14&&!A&&!M)return[{value:E},{value:C}];re=Math.ceil(C/q)-Math.floor(E/q),re>x&&(q=niceNum(re*q/x/y)*y),isNullOrUndef(u)||(Q=Math.pow(10,u),q=Math.ceil(q*Q)/Q),a==="ticks"?(m=Math.floor(E/q)*q,ne=Math.ceil(C/q)*q):(m=E,ne=C),A&&M&&o&&almostWhole((l-s)/o,q/1e3)?(re=Math.round(Math.min((l-s)/q,d)),q=(l-s)/re,m=s,ne=l):V?(m=A?s:m,ne=M?l:ne,re=f-1,q=(ne-m)/re):(re=(ne-m)/q,almostEquals(re,Math.round(re),q/1e3)?re=Math.round(re):re=Math.ceil(re));const ge=Math.max(_decimalPlaces(q),_decimalPlaces(m));Q=Math.pow(10,isNullOrUndef(u)?ge:u),m=Math.round(m*Q)/Q,ne=Math.round(ne*Q)/Q;let ve=0;for(A&&(v&&m!==s?(t.push({value:s}),m<s&&ve++,almostEquals(Math.round((m+ve*q)*Q)/Q,s,relativeLabelSize(s,R,n))&&ve++):m<s&&ve++);ve<re;++ve){const _e=Math.round((m+ve*q)*Q)/Q;if(M&&_e>l)break;t.push({value:_e})}return M&&v&&ne!==l?t.length&&almostEquals(t[t.length-1].value,l,relativeLabelSize(l,R,n))?t[t.length-1].value=l:t.push({value:l}):(!M||ne===l)&&t.push({value:ne}),t}function relativeLabelSize(n,e,{horizontal:t,minRotation:r}){const a=toRadians(r),o=(t?Math.sin(a):Math.cos(a))||.001,s=.75*e*(""+n).length;return Math.min(e/o,s)}class LinearScaleBase extends Scale{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return isNullOrUndef(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:r}=this.getUserBounds();let{min:a,max:o}=this;const s=u=>a=t?a:u,l=u=>o=r?o:u;if(e){const u=sign(a),f=sign(o);u<0&&f<0?l(0):u>0&&f>0&&s(0)}if(a===o){let u=o===0?1:Math.abs(o*.05);l(o+u),e||s(a-u)}this.min=a,this.max=o}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:r}=e,a;return r?(a=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),t=t||11),t&&(a=Math.min(t,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const a={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},o=this._range||this,s=generateTicks$1(a,o);return e.bounds==="ticks"&&_setMinAndMaxByKey(s,this,"value"),e.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const e=this.ticks;let t=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const a=(r-t)/Math.max(e.length-1,1)/2;t-=a,r+=a}this._startValue=t,this._endValue=r,this._valueRange=r-t}getLabelForValue(e){return formatNumber(e,this.chart.options.locale,this.options.ticks.format)}}class LinearScale extends LinearScaleBase{static id="linear";static defaults={ticks:{callback:Ticks.formatters.numeric}};determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?e:0,this.max=isNumberFinite(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,r=toRadians(this.options.ticks.minRotation),a=(e?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,o.lineHeight/a))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}const log10Floor=n=>Math.floor(log10(n)),changeExponent=(n,e)=>Math.pow(10,log10Floor(n)+e);function isMajor(n){return n/Math.pow(10,log10Floor(n))===1}function steps(n,e,t){const r=Math.pow(10,t),a=Math.floor(n/r);return Math.ceil(e/r)-a}function startExp(n,e){const t=e-n;let r=log10Floor(t);for(;steps(n,e,r)>10;)r++;for(;steps(n,e,r)<10;)r--;return Math.min(r,log10Floor(n))}function generateTicks(n,{min:e,max:t}){e=finiteOrDefault(n.min,e);const r=[],a=log10Floor(e);let o=startExp(e,t),s=o<0?Math.pow(10,Math.abs(o)):1;const l=Math.pow(10,o),u=a>o?Math.pow(10,a):0,f=Math.round((e-u)*s)/s,d=Math.floor((e-u)/l/10)*l*10;let p=Math.floor((f-d)/Math.pow(10,o)),v=finiteOrDefault(n.min,Math.round((u+d+p*Math.pow(10,o))*s)/s);for(;v<t;)r.push({value:v,major:isMajor(v),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(o++,p=2,s=o>=0?1:s),v=Math.round((u+d+p*Math.pow(10,o))*s)/s;const y=finiteOrDefault(n.max,v);return r.push({value:y,major:isMajor(y),significand:p}),r}class LogarithmicScale extends Scale{static id="logarithmic";static defaults={ticks:{callback:Ticks.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const r=LinearScaleBase.prototype.parse.apply(this,[e,t]);if(r===0){this._zero=!0;return}return isNumberFinite(r)&&r>0?r:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?Math.max(0,e):null,this.max=isNumberFinite(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!isNumberFinite(this._userMin)&&(this.min=e===changeExponent(this.min,0)?changeExponent(this.min,-1):changeExponent(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let r=this.min,a=this.max;const o=l=>r=e?r:l,s=l=>a=t?a:l;r===a&&(r<=0?(o(1),s(10)):(o(changeExponent(r,-1)),s(changeExponent(a,1)))),r<=0&&o(changeExponent(a,-1)),a<=0&&s(changeExponent(r,1)),this.min=r,this.max=a}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},r=generateTicks(t,this);return e.bounds==="ticks"&&_setMinAndMaxByKey(r,this,"value"),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(e){return e===void 0?"0":formatNumber(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=log10(e),this._valueRange=log10(this.max)-log10(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(log10(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}function getTickBackdropHeight(n){const e=n.ticks;if(e.display&&n.display){const t=toPadding(e.backdropPadding);return valueOrDefault(e.font&&e.font.size,defaults.font.size)+t.height}return 0}function measureLabelSize(n,e,t){return t=isArray(t)?t:[t],{w:_longestText(n,e.string,t),h:t.length*e.lineHeight}}function determineLimits(n,e,t,r,a){return n===r||n===a?{start:e-t/2,end:e+t/2}:n<r||n>a?{start:e-t,end:e}:{start:e,end:e+t}}function fitWithPointLabels(n){const e={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},t=Object.assign({},e),r=[],a=[],o=n._pointLabels.length,s=n.options.pointLabels,l=s.centerPointLabels?PI/o:0;for(let u=0;u<o;u++){const f=s.setContext(n.getPointLabelContext(u));a[u]=f.padding;const d=n.getPointPosition(u,n.drawingArea+a[u],l),p=toFont(f.font),v=measureLabelSize(n.ctx,p,n._pointLabels[u]);r[u]=v;const y=_normalizeAngle(n.getIndexAngle(u)+l),x=Math.round(toDegrees(y)),E=determineLimits(x,d.x,v.w,0,180),C=determineLimits(x,d.y,v.h,90,270);updateLimits(t,e,y,E,C)}n.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),n._pointLabelItems=buildPointLabelItems(n,r,a)}function updateLimits(n,e,t,r,a){const o=Math.abs(Math.sin(t)),s=Math.abs(Math.cos(t));let l=0,u=0;r.start<e.l?(l=(e.l-r.start)/o,n.l=Math.min(n.l,e.l-l)):r.end>e.r&&(l=(r.end-e.r)/o,n.r=Math.max(n.r,e.r+l)),a.start<e.t?(u=(e.t-a.start)/s,n.t=Math.min(n.t,e.t-u)):a.end>e.b&&(u=(a.end-e.b)/s,n.b=Math.max(n.b,e.b+u))}function createPointLabelItem(n,e,t){const r=n.drawingArea,{extra:a,additionalAngle:o,padding:s,size:l}=t,u=n.getPointPosition(e,r+a+s,o),f=Math.round(toDegrees(_normalizeAngle(u.angle+HALF_PI))),d=yForAngle(u.y,l.h,f),p=getTextAlignForAngle(f),v=leftForTextAlign(u.x,l.w,p);return{visible:!0,x:u.x,y:d,textAlign:p,left:v,top:d,right:v+l.w,bottom:d+l.h}}function isNotOverlapped(n,e){if(!e)return!0;const{left:t,top:r,right:a,bottom:o}=n;return!(_isPointInArea({x:t,y:r},e)||_isPointInArea({x:t,y:o},e)||_isPointInArea({x:a,y:r},e)||_isPointInArea({x:a,y:o},e))}function buildPointLabelItems(n,e,t){const r=[],a=n._pointLabels.length,o=n.options,{centerPointLabels:s,display:l}=o.pointLabels,u={extra:getTickBackdropHeight(o)/2,additionalAngle:s?PI/a:0};let f;for(let d=0;d<a;d++){u.padding=t[d],u.size=e[d];const p=createPointLabelItem(n,d,u);r.push(p),l==="auto"&&(p.visible=isNotOverlapped(p,f),p.visible&&(f=p))}return r}function getTextAlignForAngle(n){return n===0||n===180?"center":n<180?"left":"right"}function leftForTextAlign(n,e,t){return t==="right"?n-=e:t==="center"&&(n-=e/2),n}function yForAngle(n,e,t){return t===90||t===270?n-=e/2:(t>270||t<90)&&(n-=e),n}function drawPointLabelBox(n,e,t){const{left:r,top:a,right:o,bottom:s}=t,{backdropColor:l}=e;if(!isNullOrUndef(l)){const u=toTRBLCorners(e.borderRadius),f=toPadding(e.backdropPadding);n.fillStyle=l;const d=r-f.left,p=a-f.top,v=o-r+f.width,y=s-a+f.height;Object.values(u).some(x=>x!==0)?(n.beginPath(),addRoundedRectPath(n,{x:d,y:p,w:v,h:y,radius:u}),n.fill()):n.fillRect(d,p,v,y)}}function drawPointLabels(n,e){const{ctx:t,options:{pointLabels:r}}=n;for(let a=e-1;a>=0;a--){const o=n._pointLabelItems[a];if(!o.visible)continue;const s=r.setContext(n.getPointLabelContext(a));drawPointLabelBox(t,s,o);const l=toFont(s.font),{x:u,y:f,textAlign:d}=o;renderText(t,n._pointLabels[a],u,f+l.lineHeight/2,l,{color:s.color,textAlign:d,textBaseline:"middle"})}}function pathRadiusLine(n,e,t,r){const{ctx:a}=n;if(t)a.arc(n.xCenter,n.yCenter,e,0,TAU);else{let o=n.getPointPosition(0,e);a.moveTo(o.x,o.y);for(let s=1;s<r;s++)o=n.getPointPosition(s,e),a.lineTo(o.x,o.y)}}function drawRadiusLine(n,e,t,r,a){const o=n.ctx,s=e.circular,{color:l,lineWidth:u}=e;!s&&!r||!l||!u||t<0||(o.save(),o.strokeStyle=l,o.lineWidth=u,o.setLineDash(a.dash||[]),o.lineDashOffset=a.dashOffset,o.beginPath(),pathRadiusLine(n,t,s,r),o.closePath(),o.stroke(),o.restore())}function createPointLabelContext(n,e,t){return createContext(n,{label:t,index:e,type:"pointLabel"})}class RadialLinearScale extends LinearScaleBase{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ticks.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=toPadding(getTickBackdropHeight(this.options)/2),t=this.width=this.maxWidth-e.width,r=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+r/2+e.top),this.drawingArea=Math.floor(Math.min(t,r)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=isNumberFinite(e)&&!isNaN(e)?e:0,this.max=isNumberFinite(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/getTickBackdropHeight(this.options))}generateTickLabels(e){LinearScaleBase.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,r)=>{const a=callback(this.options.pointLabels.callback,[t,r],this);return a||a===0?a:""}).filter((t,r)=>this.chart.getDataVisibility(r))}fit(){const e=this.options;e.display&&e.pointLabels.display?fitWithPointLabels(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,r,a){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((r-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,r,a))}getIndexAngle(e){const t=TAU/(this._pointLabels.length||1),r=this.options.startAngle||0;return _normalizeAngle(e*t+toRadians(r))}getDistanceFromCenterForValue(e){if(isNullOrUndef(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(isNullOrUndef(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const r=t[e];return createPointLabelContext(this.getContext(),e,r)}}getPointPosition(e,t,r=0){const a=this.getIndexAngle(e)-HALF_PI+r;return{x:Math.cos(a)*t+this.xCenter,y:Math.sin(a)*t+this.yCenter,angle:a}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:r,right:a,bottom:o}=this._pointLabelItems[e];return{left:t,top:r,right:a,bottom:o}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const r=this.ctx;r.save(),r.beginPath(),pathRadiusLine(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),r.closePath(),r.fillStyle=e,r.fill(),r.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:r,grid:a,border:o}=t,s=this._pointLabels.length;let l,u,f;if(t.pointLabels.display&&drawPointLabels(this,s),a.display&&this.ticks.forEach((d,p)=>{if(p!==0||p===0&&this.min<0){u=this.getDistanceFromCenterForValue(d.value);const v=this.getContext(p),y=a.setContext(v),x=o.setContext(v);drawRadiusLine(this,y,u,s,x)}}),r.display){for(e.save(),l=s-1;l>=0;l--){const d=r.setContext(this.getPointLabelContext(l)),{color:p,lineWidth:v}=d;!v||!p||(e.lineWidth=v,e.strokeStyle=p,e.setLineDash(d.borderDash),e.lineDashOffset=d.borderDashOffset,u=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),f=this.getPointPosition(l,u),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(f.x,f.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,r=t.ticks;if(!r.display)return;const a=this.getIndexAngle(0);let o,s;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(a),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((l,u)=>{if(u===0&&this.min>=0&&!t.reverse)return;const f=r.setContext(this.getContext(u)),d=toFont(f.font);if(o=this.getDistanceFromCenterForValue(this.ticks[u].value),f.showLabelBackdrop){e.font=d.string,s=e.measureText(l.label).width,e.fillStyle=f.backdropColor;const p=toPadding(f.backdropPadding);e.fillRect(-s/2-p.left,-o-d.size/2-p.top,s+p.width,d.size+p.height)}renderText(e,l.label,0,-o,d,{color:f.color,strokeColor:f.textStrokeColor,strokeWidth:f.textStrokeWidth})}),e.restore()}drawTitle(){}}const INTERVALS={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},UNITS=Object.keys(INTERVALS);function sorter(n,e){return n-e}function parse$1(n,e){if(isNullOrUndef(e))return null;const t=n._adapter,{parser:r,round:a,isoWeekday:o}=n._parseOpts;let s=e;return typeof r=="function"&&(s=r(s)),isNumberFinite(s)||(s=typeof r=="string"?t.parse(s,r):t.parse(s)),s===null?null:(a&&(s=a==="week"&&(isNumber(o)||o===!0)?t.startOf(s,"isoWeek",o):t.startOf(s,a)),+s)}function determineUnitForAutoTicks(n,e,t,r){const a=UNITS.length;for(let o=UNITS.indexOf(n);o<a-1;++o){const s=INTERVALS[UNITS[o]],l=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((t-e)/(l*s.size))<=r)return UNITS[o]}return UNITS[a-1]}function determineUnitForFormatting(n,e,t,r,a){for(let o=UNITS.length-1;o>=UNITS.indexOf(t);o--){const s=UNITS[o];if(INTERVALS[s].common&&n._adapter.diff(a,r,s)>=e-1)return s}return UNITS[t?UNITS.indexOf(t):0]}function determineMajorUnit(n){for(let e=UNITS.indexOf(n)+1,t=UNITS.length;e<t;++e)if(INTERVALS[UNITS[e]].common)return UNITS[e]}function addTick(n,e,t){if(!t)n[e]=!0;else if(t.length){const{lo:r,hi:a}=_lookup(t,e),o=t[r]>=e?t[r]:t[a];n[o]=!0}}function setMajorTicks(n,e,t,r){const a=n._adapter,o=+a.startOf(e[0].value,r),s=e[e.length-1].value;let l,u;for(l=o;l<=s;l=+a.add(l,1,r))u=t[l],u>=0&&(e[u].major=!0);return e}function ticksFromTimestamps(n,e,t){const r=[],a={},o=e.length;let s,l;for(s=0;s<o;++s)l=e[s],a[l]=s,r.push({value:l,major:!1});return o===0||!t?r:setMajorTicks(n,r,a,t)}class TimeScale extends Scale{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const r=e.time||(e.time={}),a=this._adapter=new adapters._date(e.adapters.date);a.init(t),mergeIf(r.displayFormats,a.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:parse$1(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,r=e.time.unit||"day";let{min:a,max:o,minDefined:s,maxDefined:l}=this.getUserBounds();function u(f){!s&&!isNaN(f.min)&&(a=Math.min(a,f.min)),!l&&!isNaN(f.max)&&(o=Math.max(o,f.max))}(!s||!l)&&(u(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&u(this.getMinMax(!1))),a=isNumberFinite(a)&&!isNaN(a)?a:+t.startOf(Date.now(),r),o=isNumberFinite(o)&&!isNaN(o)?o:+t.endOf(Date.now(),r)+1,this.min=Math.min(a,o-1),this.max=Math.max(a+1,o)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],r=e[e.length-1]),{min:t,max:r}}buildTicks(){const e=this.options,t=e.time,r=e.ticks,a=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const o=this.min,s=this.max,l=_filterBetween(a,o,s);return this._unit=t.unit||(r.autoSkip?determineUnitForAutoTicks(t.minUnit,this.min,this.max,this._getLabelCapacity(o)):determineUnitForFormatting(this,l.length,t.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:determineMajorUnit(this._unit),this.initOffsets(a),e.reverse&&l.reverse(),ticksFromTimestamps(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,r=0,a,o;this.options.offset&&e.length&&(a=this.getDecimalForValue(e[0]),e.length===1?t=1-a:t=(this.getDecimalForValue(e[1])-a)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?r=o:r=(o-this.getDecimalForValue(e[e.length-2]))/2);const s=e.length<3?.5:.25;t=_limitValue(t,0,s),r=_limitValue(r,0,s),this._offsets={start:t,end:r,factor:1/(t+1+r)}}_generate(){const e=this._adapter,t=this.min,r=this.max,a=this.options,o=a.time,s=o.unit||determineUnitForAutoTicks(o.minUnit,t,r,this._getLabelCapacity(t)),l=valueOrDefault(a.ticks.stepSize,1),u=s==="week"?o.isoWeekday:!1,f=isNumber(u)||u===!0,d={};let p=t,v,y;if(f&&(p=+e.startOf(p,"isoWeek",u)),p=+e.startOf(p,f?"day":s),e.diff(r,t,s)>1e5*l)throw new Error(t+" and "+r+" are too far apart with stepSize of "+l+" "+s);const x=a.ticks.source==="data"&&this.getDataTimestamps();for(v=p,y=0;v<r;v=+e.add(v,l,s),y++)addTick(d,v,x);return(v===r||a.bounds==="ticks"||y===1)&&addTick(d,v,x),Object.keys(d).sort(sorter).map(E=>+E)}getLabelForValue(e){const t=this._adapter,r=this.options.time;return r.tooltipFormat?t.format(e,r.tooltipFormat):t.format(e,r.displayFormats.datetime)}format(e,t){const a=this.options.time.displayFormats,o=this._unit,s=t||a[o];return this._adapter.format(e,s)}_tickFormatFunction(e,t,r,a){const o=this.options,s=o.ticks.callback;if(s)return callback(s,[e,t,r],this);const l=o.time.displayFormats,u=this._unit,f=this._majorUnit,d=u&&l[u],p=f&&l[f],v=r[t],y=f&&p&&v&&v.major;return this._adapter.format(e,a||(y?p:d))}generateTickLabels(e){let t,r,a;for(t=0,r=e.length;t<r;++t)a=e[t],a.label=this._tickFormatFunction(a.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+r)*t.factor)}getValueForPixel(e){const t=this._offsets,r=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,r=this.ctx.measureText(e).width,a=toRadians(this.isHorizontal()?t.maxRotation:t.minRotation),o=Math.cos(a),s=Math.sin(a),l=this._resolveTickFontOptions(0).size;return{w:r*o+l*s,h:r*s+l*o}}_getLabelCapacity(e){const t=this.options.time,r=t.displayFormats,a=r[t.unit]||r.millisecond,o=this._tickFormatFunction(e,0,ticksFromTimestamps(this,[e],this._majorUnit),a),s=this._getLabelSize(o),l=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return l>0?l:1}getDataTimestamps(){let e=this._cache.data||[],t,r;if(e.length)return e;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(t=0,r=a.length;t<r;++t)e=e.concat(a[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,r;if(e.length)return e;const a=this.getLabels();for(t=0,r=a.length;t<r;++t)e.push(parse$1(this,a[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return _arrayUnique(e.sort(sorter))}}function interpolate(n,e,t){let r=0,a=n.length-1,o,s,l,u;t?(e>=n[r].pos&&e<=n[a].pos&&({lo:r,hi:a}=_lookupByKey(n,"pos",e)),{pos:o,time:l}=n[r],{pos:s,time:u}=n[a]):(e>=n[r].time&&e<=n[a].time&&({lo:r,hi:a}=_lookupByKey(n,"time",e)),{time:o,pos:l}=n[r],{time:s,pos:u}=n[a]);const f=s-o;return f?l+(u-l)*(e-o)/f:l}class TimeSeriesScale extends TimeScale{static id="timeseries";static defaults=TimeScale.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=interpolate(t,this.min),this._tableRange=interpolate(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:r}=this,a=[],o=[];let s,l,u,f,d;for(s=0,l=e.length;s<l;++s)f=e[s],f>=t&&f<=r&&a.push(f);if(a.length<2)return[{time:t,pos:0},{time:r,pos:1}];for(s=0,l=a.length;s<l;++s)d=a[s+1],u=a[s-1],f=a[s],Math.round((d+u)/2)!==f&&o.push({time:f,pos:s/(l-1)});return o}_generate(){const e=this.min,t=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(t)||r.length===1)&&r.push(t),r.sort((a,o)=>a-o)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),r=this.getLabelTimestamps();return t.length&&r.length?e=this.normalize(t.concat(r)):e=t.length?t:r,e=this._cache.all=e,e}getDecimalForValue(e){return(interpolate(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,r=this.getDecimalForPixel(e)/t.factor-t.end;return interpolate(this._table,r*this._tableRange+this._minPos,!0)}}var scales=Object.freeze({__proto__:null,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale});const registerables=[controllers,elements,plugins,scales];Chart.register(...registerables);class ColorPalette{static PRIMARY=["#1f78b4","#a6cee3","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]}function renderChart(n,e,t){const r=document.getElementById(n);r!==null&&fetchChartData(e).then(a=>{t(r,a)}).catch(a=>{console.log("Error loading chart data: "+a);const o=r.getContext("2d");o&&(o.fillStyle="red",o.font="16px Arial",o.fillText("Error loading chart data",10,15))})}async function fetchChartData(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}function getCSSVariable(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}function initPubChart(){renderChart("pubs-by-year-chart","/publication/data/by-year",createPubChart)}function createPubChart(n,e){new Chart(n,{type:"bar",data:{labels:e.data.map(t=>t.name),datasets:[{label:"Publications",data:e.data.map(t=>t.total)}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,suggestedMax:10,ticks:{stepSize:1},grid:{display:!1}},x:{grid:{display:!1}}},plugins:{title:{display:!1},legend:{display:!1}}}})}function initGrantChart(){renderChart("grant-summary-chart","/grant/data/summary",createGrantChart)}function createGrantChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"60%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initAllocationChart(){renderChart("allocation-summary-chart","/portal/data/allocation-by-status",createAllocationChart)}function createAllocationChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initResourceChart(){renderChart("resource-summary-chart","/portal/data/resource-by-type",createResourceChart)}function createResourceChart(n,e){new Chart(n,{type:"doughnut",data:{labels:e.data.map(t=>t.name),datasets:[{data:e.data.map(t=>t.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(t=>t+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initGaugeChart(){const n=document.querySelectorAll("div.chart-container > canvas.gauge-chart");for(const e of n)if(e!==null){const t=Number(e?.getAttribute("data-used")||0);let r=Number(e?.getAttribute("data-total")||0)-t;const a=String(e?.getAttribute("data-title")||"");r<0&&(r=0),createGaugeChart(e,a,t,r)}}function createGaugeChart(n,e,t,r){new Chart(n,{type:"doughnut",data:{labels:["Used","Available"],datasets:[{data:[t,r],backgroundColor:[getCSSVariable("--success"),getCSSVariable("--secondary")],borderColor:[getCSSVariable("--success"),getCSSVariable("--secondary")],borderWidth:1}]},options:{radius:"70%",rotation:270,circumference:180,responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:e,position:"bottom"}}}})}function initCharts(){for(const n of[initPubChart,initGrantChart,initAllocationChart,initResourceChart,initGaugeChart])n()}function initDepedencies(){initDataTable()}function initHtmx(){document.addEventListener("htmx:afterSettle",initDepedencies)}function getCookie(n){let e="";if(document.cookie&&document.cookie!=""){const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const a=jQuery.trim(t[r]);if(a.substring(0,n.length+1)==n+"="){e=decodeURIComponent(a.substring(n.length+1));break}}}return e}function renderGenericChart(n,e,t){const r=document.getElementById(n);r!==null&&fetchGenericChartData(e).then(a=>{t(r,a)}).catch(a=>{console.log("Error loading chart data: "+a);const o=r.getContext("2d");o&&(o.fillStyle="red",o.font="16px Arial",o.fillText("Error loading chart data",10,15))})}async function fetchGenericChartData(n){try{const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}function initStorageHistoryChart(n,e){renderGenericChart(n,e,createStorageHistoryChart)}function createStorageHistoryChart(n,e){const t=e.datasets;t[0].type="line",t[0].fill=!1,t[0].stepped=!0,t[0].borderColor=ColorPalette.PRIMARY[0],t[1].type="line",t[1].fill=!1,t[1].stepped=!1,t[1].borderColor=ColorPalette.PRIMARY[1],new Chart(n,{type:"line",data:{datasets:t},options:{responsive:!0,scales:{x:{type:"time"}},interaction:{intersect:!1,axis:"x"},plugins:{legend:{position:"bottom"},title:{display:!1}}}})}const millisecondsInWeek=6048e5,millisecondsInDay=864e5,millisecondsInMinute=6e4,millisecondsInHour=36e5,millisecondsInSecond=1e3,constructFromSymbol=Symbol.for("constructDateFrom");function constructFrom(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&constructFromSymbol in n?n[constructFromSymbol](e):n instanceof Date?new n.constructor(e):new Date(e)}function toDate(n,e){return constructFrom(e||n,n)}function addDays(n,e,t){const r=toDate(n,t?.in);return isNaN(e)?constructFrom(t?.in||n,NaN):(e&&r.setDate(r.getDate()+e),r)}function addMonths(n,e,t){const r=toDate(n,t?.in);if(isNaN(e))return constructFrom(n,NaN);if(!e)return r;const a=r.getDate(),o=constructFrom(n,r.getTime());o.setMonth(r.getMonth()+e+1,0);const s=o.getDate();return a>=s?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}function addMilliseconds(n,e,t){return constructFrom(n,+toDate(n)+e)}function addHours(n,e,t){return addMilliseconds(n,e*millisecondsInHour)}let defaultOptions={};function getDefaultOptions$1(){return defaultOptions}function startOfWeek(n,e){const t=getDefaultOptions$1(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=toDate(n,e?.in),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function startOfISOWeek(n,e){return startOfWeek(n,{...e,weekStartsOn:1})}function getISOWeekYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear(),a=constructFrom(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=startOfISOWeek(a),s=constructFrom(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const l=startOfISOWeek(s);return t.getTime()>=o.getTime()?r+1:t.getTime()>=l.getTime()?r:r-1}function getTimezoneOffsetInMilliseconds(n){const e=toDate(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function normalizeDates(n,...e){const t=constructFrom.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function startOfDay(n,e){const t=toDate(n,e?.in);return t.setHours(0,0,0,0),t}function differenceInCalendarDays(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),o=startOfDay(r),s=startOfDay(a),l=+o-getTimezoneOffsetInMilliseconds(o),u=+s-getTimezoneOffsetInMilliseconds(s);return Math.round((l-u)/millisecondsInDay)}function startOfISOWeekYear(n,e){const t=getISOWeekYear(n,e),r=constructFrom(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),startOfISOWeek(r)}function addMinutes(n,e,t){const r=toDate(n,t?.in);return r.setTime(r.getTime()+e*millisecondsInMinute),r}function addQuarters(n,e,t){return addMonths(n,e*3,t)}function addSeconds(n,e,t){return addMilliseconds(n,e*1e3)}function addWeeks(n,e,t){return addDays(n,e*7,t)}function addYears(n,e,t){return addMonths(n,e*12,t)}function compareAsc(n,e){const t=+toDate(n)-+toDate(e);return t<0?-1:t>0?1:t}function isDate(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function isValid(n){return!(!isDate(n)&&typeof n!="number"||isNaN(+toDate(n)))}function differenceInCalendarMonths(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),o=r.getFullYear()-a.getFullYear(),s=r.getMonth()-a.getMonth();return o*12+s}function differenceInCalendarYears(n,e,t){const[r,a]=normalizeDates(t?.in,n,e);return r.getFullYear()-a.getFullYear()}function differenceInDays(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),o=compareLocalAsc(r,a),s=Math.abs(differenceInCalendarDays(r,a));r.setDate(r.getDate()-o*s);const l=+(compareLocalAsc(r,a)===-o),u=o*(s-l);return u===0?0:u}function compareLocalAsc(n,e){const t=n.getFullYear()-e.getFullYear()||n.getMonth()-e.getMonth()||n.getDate()-e.getDate()||n.getHours()-e.getHours()||n.getMinutes()-e.getMinutes()||n.getSeconds()-e.getSeconds()||n.getMilliseconds()-e.getMilliseconds();return t<0?-1:t>0?1:t}function getRoundingMethod(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function differenceInHours(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),o=(+r-+a)/millisecondsInHour;return getRoundingMethod(t?.roundingMethod)(o)}function differenceInMilliseconds(n,e){return+toDate(n)-+toDate(e)}function differenceInMinutes(n,e,t){const r=differenceInMilliseconds(n,e)/millisecondsInMinute;return getRoundingMethod(t?.roundingMethod)(r)}function endOfDay(n,e){const t=toDate(n,e?.in);return t.setHours(23,59,59,999),t}function endOfMonth(n,e){const t=toDate(n,e?.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function isLastDayOfMonth(n,e){const t=toDate(n,e?.in);return+endOfDay(t,e)==+endOfMonth(t,e)}function differenceInMonths(n,e,t){const[r,a,o]=normalizeDates(t?.in,n,n,e),s=compareAsc(a,o),l=Math.abs(differenceInCalendarMonths(a,o));if(l<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-s*l);let u=compareAsc(a,o)===-s;isLastDayOfMonth(r)&&l===1&&compareAsc(r,o)===1&&(u=!1);const f=s*(l-+u);return f===0?0:f}function differenceInQuarters(n,e,t){const r=differenceInMonths(n,e,t)/3;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInSeconds(n,e,t){const r=differenceInMilliseconds(n,e)/1e3;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInWeeks(n,e,t){const r=differenceInDays(n,e,t)/7;return getRoundingMethod(t?.roundingMethod)(r)}function differenceInYears(n,e,t){const[r,a]=normalizeDates(t?.in,n,e),o=compareAsc(r,a),s=Math.abs(differenceInCalendarYears(r,a));r.setFullYear(1584),a.setFullYear(1584);const l=compareAsc(r,a)===-o,u=o*(s-+l);return u===0?0:u}function startOfQuarter(n,e){const t=toDate(n,e?.in),r=t.getMonth(),a=r-r%3;return t.setMonth(a,1),t.setHours(0,0,0,0),t}function startOfMonth(n,e){const t=toDate(n,e?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function endOfYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function startOfYear(n,e){const t=toDate(n,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function endOfHour(n,e){const t=toDate(n,e?.in);return t.setMinutes(59,59,999),t}function endOfWeek(n,e){const t=getDefaultOptions$1(),r=t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=toDate(n,e?.in),o=a.getDay(),s=(o<r?-7:0)+6-(o-r);return a.setDate(a.getDate()+s),a.setHours(23,59,59,999),a}function endOfMinute(n,e){const t=toDate(n,e?.in);return t.setSeconds(59,999),t}function endOfQuarter(n,e){const t=toDate(n,e?.in),r=t.getMonth(),a=r-r%3+3;return t.setMonth(a,0),t.setHours(23,59,59,999),t}function endOfSecond(n,e){const t=toDate(n,e?.in);return t.setMilliseconds(999),t}const formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},formatDistance=(n,e,t)=>{let r;const a=formatDistanceLocale[n];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function buildFormatLongFn(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},formatRelative=(n,e,t,r)=>formatRelativeLocale[n];function buildLocalizeFn(n){return(e,t)=>{const r=t?.context?String(t.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const s=n.defaultFormattingWidth||n.defaultWidth,l=t?.width?String(t.width):s;a=n.formattingValues[l]||n.formattingValues[s]}else{const s=n.defaultWidth,l=t?.width?String(t.width):n.defaultWidth;a=n.values[l]||n.values[s]}const o=n.argumentCallback?n.argumentCallback(e):e;return a[o]}}const eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ordinalNumber=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},localize={ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:n=>n-1}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};function buildMatchFn(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(l)?findIndex(l,p=>p.test(s)):findKey(l,p=>p.test(s));let f;f=n.valueCallback?n.valueCallback(u):u,f=t.valueCallback?t.valueCallback(f):f;const d=e.slice(s.length);return{value:f,rest:d}}}function findKey(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function findIndex(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function buildMatchPatternFn(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const a=r[0],o=e.match(n.parsePattern);if(!o)return null;let s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;const l=e.slice(a.length);return{value:s,rest:l}}}const matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:n=>parseInt(n,10)}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:n=>n+1}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})},enUS={code:"en-US",formatDistance,formatLong,formatRelative,localize,match,options:{weekStartsOn:0,firstWeekContainsDate:1}};function getDayOfYear(n,e){const t=toDate(n,e?.in);return differenceInCalendarDays(t,startOfYear(t))+1}function getISOWeek(n,e){const t=toDate(n,e?.in),r=+startOfISOWeek(t)-+startOfISOWeekYear(t);return Math.round(r/millisecondsInWeek)+1}function getWeekYear(n,e){const t=toDate(n,e?.in),r=t.getFullYear(),a=getDefaultOptions$1(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=constructFrom(e?.in||n,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const l=startOfWeek(s,e),u=constructFrom(e?.in||n,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const f=startOfWeek(u,e);return+t>=+l?r+1:+t>=+f?r:r-1}function startOfWeekYear(n,e){const t=getDefaultOptions$1(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=getWeekYear(n,e),o=constructFrom(e?.in||n,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),startOfWeek(o,e)}function getWeek(n,e){const t=toDate(n,e?.in),r=+startOfWeek(t,e)-+startOfWeekYear(t,e);return Math.round(r/millisecondsInWeek)+1}function addLeadingZeros(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const lightFormatters={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return addLeadingZeros(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):addLeadingZeros(t+1,2)},d(n,e){return addLeadingZeros(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];default:return t==="am"?"a.m.":"p.m."}},h(n,e){return addLeadingZeros(n.getHours()%12||12,e.length)},H(n,e){return addLeadingZeros(n.getHours(),e.length)},m(n,e){return addLeadingZeros(n.getMinutes(),e.length)},s(n,e){return addLeadingZeros(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return addLeadingZeros(a,e.length)}},dayPeriodEnum={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},formatters={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return lightFormatters.y(n,e)},Y:function(n,e,t,r){const a=getWeekYear(n,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return addLeadingZeros(s,2)}return e==="Yo"?t.ordinalNumber(o,{unit:"year"}):addLeadingZeros(o,e.length)},R:function(n,e){const t=getISOWeekYear(n);return addLeadingZeros(t,e.length)},u:function(n,e){const t=n.getFullYear();return addLeadingZeros(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return addLeadingZeros(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return addLeadingZeros(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return lightFormatters.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return addLeadingZeros(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=getWeek(n,r);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):addLeadingZeros(a,e.length)},I:function(n,e,t){const r=getISOWeek(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):addLeadingZeros(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):lightFormatters.d(n,e)},D:function(n,e,t){const r=getDayOfYear(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):addLeadingZeros(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return addLeadingZeros(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return addLeadingZeros(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return addLeadingZeros(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const a=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(r===12?a=dayPeriodEnum.noon:r===0?a=dayPeriodEnum.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(r>=17?a=dayPeriodEnum.evening:r>=12?a=dayPeriodEnum.afternoon:r>=4?a=dayPeriodEnum.morning:a=dayPeriodEnum.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return lightFormatters.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):lightFormatters.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):addLeadingZeros(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):addLeadingZeros(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):lightFormatters.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):lightFormatters.s(n,e)},S:function(n,e){return lightFormatters.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return formatTimezoneWithOptionalMinutes(r);case"XXXX":case"XX":return formatTimezone(r);default:return formatTimezone(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return formatTimezoneWithOptionalMinutes(r);case"xxxx":case"xx":return formatTimezone(r);default:return formatTimezone(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(r,":");default:return"GMT"+formatTimezone(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(r,":");default:return"GMT"+formatTimezone(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return addLeadingZeros(r,e.length)},T:function(n,e,t){return addLeadingZeros(+n,e.length)}};function formatTimezoneShort(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),o=r%60;return o===0?t+String(a):t+String(a)+e+addLeadingZeros(o,2)}function formatTimezoneWithOptionalMinutes(n,e){return n%60===0?(n>0?"-":"+")+addLeadingZeros(Math.abs(n)/60,2):formatTimezone(n,e)}function formatTimezone(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=addLeadingZeros(Math.trunc(r/60),2),o=addLeadingZeros(r%60,2);return t+a+e+o}const dateLongFormatter=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},timeLongFormatter=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},dateTimeLongFormatter=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return dateLongFormatter(n,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",dateLongFormatter(r,e)).replace("{{time}}",timeLongFormatter(a,e))},longFormatters={p:timeLongFormatter,P:dateTimeLongFormatter},dayOfYearTokenRE=/^D+$/,weekYearTokenRE=/^Y+$/,throwTokens=["D","DD","YY","YYYY"];function isProtectedDayOfYearToken(n){return dayOfYearTokenRE.test(n)}function isProtectedWeekYearToken(n){return weekYearTokenRE.test(n)}function warnOrThrowProtectedError(n,e,t){const r=message(n,e,t);if(console.warn(r),throwTokens.includes(n))throw new RangeError(r)}function message(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const formattingTokensRegExp$1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp$1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp$1=/^'([^]*?)'?$/,doubleQuoteRegExp$1=/''/g,unescapedLatinCharacterRegExp$1=/[a-zA-Z]/;function format(n,e,t){const r=getDefaultOptions$1(),a=t?.locale??r.locale??enUS,o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=toDate(n,t?.in);if(!isValid(l))throw new RangeError("Invalid time value");let u=e.match(longFormattingTokensRegExp$1).map(d=>{const p=d[0];if(p==="p"||p==="P"){const v=longFormatters[p];return v(d,a.formatLong)}return d}).join("").match(formattingTokensRegExp$1).map(d=>{if(d==="''")return{isToken:!1,value:"'"};const p=d[0];if(p==="'")return{isToken:!1,value:cleanEscapedString$1(d)};if(formatters[p])return{isToken:!0,value:d};if(p.match(unescapedLatinCharacterRegExp$1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:d}});a.localize.preprocessor&&(u=a.localize.preprocessor(l,u));const f={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return u.map(d=>{if(!d.isToken)return d.value;const p=d.value;(!t?.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(p)||!t?.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(p))&&warnOrThrowProtectedError(p,e,String(n));const v=formatters[p[0]];return v(l,p,a.localize,f)}).join("")}function cleanEscapedString$1(n){const e=n.match(escapedStringRegExp$1);return e?e[1].replace(doubleQuoteRegExp$1,"'"):n}function getDefaultOptions(){return Object.assign({},getDefaultOptions$1())}function getISODay(n,e){const t=toDate(n,e?.in).getDay();return t===0?7:t}function transpose(n,e){const t=isConstructor(e)?new e(0):constructFrom(e,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t}function isConstructor(n){return typeof n=="function"&&n.prototype?.constructor===n}const TIMEZONE_UNIT_PRIORITY=10;class Setter{subPriority=0;validate(e,t){return!0}}class ValueSetter extends Setter{constructor(e,t,r,a,o){super(),this.value=e,this.validateValue=t,this.setValue=r,this.priority=a,o&&(this.subPriority=o)}validate(e,t){return this.validateValue(e,this.value,t)}set(e,t,r){return this.setValue(e,t,this.value,r)}}class DateTimezoneSetter extends Setter{priority=TIMEZONE_UNIT_PRIORITY;subPriority=-1;constructor(e,t){super(),this.context=e||(r=>constructFrom(t,r))}set(e,t){return t.timestampIsSet?e:constructFrom(e,transpose(e,this.context))}}class Parser{run(e,t,r,a){const o=this.parse(e,t,r,a);return o?{setter:new ValueSetter(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(e,t,r){return!0}}class EraParser extends Parser{priority=140;parse(e,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,t,r){return t.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["R","u","t","T"]}const numericPatterns={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},timezonePatterns={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function mapValue(n,e){return n&&{value:e(n.value),rest:n.rest}}function parseNumericPattern(n,e){const t=e.match(n);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function parseTimezonePattern(n,e){const t=e.match(n);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,o=t[3]?parseInt(t[3],10):0,s=t[5]?parseInt(t[5],10):0;return{value:r*(a*millisecondsInHour+o*millisecondsInMinute+s*millisecondsInSecond),rest:e.slice(t[0].length)}}function parseAnyDigitsSigned(n){return parseNumericPattern(numericPatterns.anyDigitsSigned,n)}function parseNDigits(n,e){switch(n){case 1:return parseNumericPattern(numericPatterns.singleDigit,e);case 2:return parseNumericPattern(numericPatterns.twoDigits,e);case 3:return parseNumericPattern(numericPatterns.threeDigits,e);case 4:return parseNumericPattern(numericPatterns.fourDigits,e);default:return parseNumericPattern(new RegExp("^\\d{1,"+n+"}"),e)}}function parseNDigitsSigned(n,e){switch(n){case 1:return parseNumericPattern(numericPatterns.singleDigitSigned,e);case 2:return parseNumericPattern(numericPatterns.twoDigitsSigned,e);case 3:return parseNumericPattern(numericPatterns.threeDigitsSigned,e);case 4:return parseNumericPattern(numericPatterns.fourDigitsSigned,e);default:return parseNumericPattern(new RegExp("^-?\\d{1,"+n+"}"),e)}}function dayPeriodEnumToHours(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;default:return 0}}function normalizeTwoDigitYear(n,e){const t=e>0,r=t?e:1-e;let a;if(r<=50)a=n||100;else{const o=r+50,s=Math.trunc(o/100)*100,l=n>=o%100;a=n+s-(l?100:0)}return t?a:1-a}function isLeapYearIndex$1(n){return n%400===0||n%4===0&&n%100!==0}class YearParser extends Parser{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(e,t,r){const a=o=>({year:o,isTwoDigitYear:t==="yy"});switch(t){case"y":return mapValue(parseNDigits(4,e),a);case"yo":return mapValue(r.ordinalNumber(e,{unit:"year"}),a);default:return mapValue(parseNDigits(t.length,e),a)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r){const a=e.getFullYear();if(r.isTwoDigitYear){const s=normalizeTwoDigitYear(r.year,a);return e.setFullYear(s,0,1),e.setHours(0,0,0,0),e}const o=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class LocalWeekYearParser extends Parser{priority=130;parse(e,t,r){const a=o=>({year:o,isTwoDigitYear:t==="YY"});switch(t){case"Y":return mapValue(parseNDigits(4,e),a);case"Yo":return mapValue(r.ordinalNumber(e,{unit:"year"}),a);default:return mapValue(parseNDigits(t.length,e),a)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r,a){const o=getWeekYear(e,a);if(r.isTwoDigitYear){const l=normalizeTwoDigitYear(r.year,o);return e.setFullYear(l,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),startOfWeek(e,a)}const s=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(s,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),startOfWeek(e,a)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class ISOWeekYearParser extends Parser{priority=130;parse(e,t){return parseNDigitsSigned(t==="R"?4:t.length,e)}set(e,t,r){const a=constructFrom(e,0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),startOfISOWeek(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class ExtendedYearParser extends Parser{priority=130;parse(e,t){return parseNDigitsSigned(t==="u"?4:t.length,e)}set(e,t,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class QuarterParser extends Parser{priority=120;parse(e,t,r){switch(t){case"Q":case"QQ":return parseNDigits(t.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class StandAloneQuarterParser extends Parser{priority=120;parse(e,t,r){switch(t){case"q":case"qq":return parseNDigits(t.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class MonthParser extends Parser{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(e,t,r){const a=o=>o-1;switch(t){case"M":return mapValue(parseNumericPattern(numericPatterns.month,e),a);case"MM":return mapValue(parseNDigits(2,e),a);case"Mo":return mapValue(r.ordinalNumber(e,{unit:"month"}),a);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class StandAloneMonthParser extends Parser{priority=110;parse(e,t,r){const a=o=>o-1;switch(t){case"L":return mapValue(parseNumericPattern(numericPatterns.month,e),a);case"LL":return mapValue(parseNDigits(2,e),a);case"Lo":return mapValue(r.ordinalNumber(e,{unit:"month"}),a);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function setWeek(n,e,t){const r=toDate(n,t?.in),a=getWeek(r,t)-e;return r.setDate(r.getDate()-a*7),toDate(r,t?.in)}class LocalWeekParser extends Parser{priority=100;parse(e,t,r){switch(t){case"w":return parseNumericPattern(numericPatterns.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r,a){return startOfWeek(setWeek(e,r,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function setISOWeek(n,e,t){const r=toDate(n,t?.in),a=getISOWeek(r,t)-e;return r.setDate(r.getDate()-a*7),r}class ISOWeekParser extends Parser{priority=100;parse(e,t,r){switch(t){case"I":return parseNumericPattern(numericPatterns.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r){return startOfISOWeek(setISOWeek(e,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const DAYS_IN_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31],DAYS_IN_MONTH_LEAP_YEAR=[31,29,31,30,31,30,31,31,30,31,30,31];class DateParser extends Parser{priority=90;subPriority=1;parse(e,t,r){switch(t){case"d":return parseNumericPattern(numericPatterns.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return parseNDigits(t.length,e)}}validate(e,t){const r=e.getFullYear(),a=isLeapYearIndex$1(r),o=e.getMonth();return a?t>=1&&t<=DAYS_IN_MONTH_LEAP_YEAR[o]:t>=1&&t<=DAYS_IN_MONTH[o]}set(e,t,r){return e.setDate(r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class DayOfYearParser extends Parser{priority=90;subpriority=1;parse(e,t,r){switch(t){case"D":case"DD":return parseNumericPattern(numericPatterns.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return parseNDigits(t.length,e)}}validate(e,t){const r=e.getFullYear();return isLeapYearIndex$1(r)?t>=1&&t<=366:t>=1&&t<=365}set(e,t,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function setDay(n,e,t){const r=getDefaultOptions$1(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,o=toDate(n,t?.in),s=o.getDay(),u=(e%7+7)%7,f=7-a,d=e<0||e>6?e-(s+f)%7:(u+f)%7-(s+f)%7;return addDays(o,d,t)}class DayParser extends Parser{priority=90;parse(e,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["D","i","e","c","t","T"]}class LocalDayParser extends Parser{priority=90;parse(e,t,r,a){const o=s=>{const l=Math.floor((s-1)/7)*7;return(s+a.weekStartsOn+6)%7+l};switch(t){case"e":case"ee":return mapValue(parseNDigits(t.length,e),o);case"eo":return mapValue(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class StandAloneLocalDayParser extends Parser{priority=90;parse(e,t,r,a){const o=s=>{const l=Math.floor((s-1)/7)*7;return(s+a.weekStartsOn+6)%7+l};switch(t){case"c":case"cc":return mapValue(parseNDigits(t.length,e),o);case"co":return mapValue(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,a){return e=setDay(e,r,a),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function setISODay(n,e,t){const r=toDate(n,t?.in),a=getISODay(r,t),o=e-a;return addDays(r,o,t)}class ISODayParser extends Parser{priority=90;parse(e,t,r){const a=o=>o===0?7:o;switch(t){case"i":case"ii":return parseNDigits(t.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return mapValue(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a);case"iiiii":return mapValue(r.day(e,{width:"narrow",context:"formatting"}),a);case"iiiiii":return mapValue(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a);default:return mapValue(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),a)}}validate(e,t){return t>=1&&t<=7}set(e,t,r){return e=setISODay(e,r),e.setHours(0,0,0,0),e}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class AMPMParser extends Parser{priority=80;parse(e,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["b","B","H","k","t","T"]}class AMPMMidnightParser extends Parser{priority=80;parse(e,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["a","B","H","k","t","T"]}class DayPeriodParser extends Parser{priority=80;parse(e,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(dayPeriodEnumToHours(r),0,0,0),e}incompatibleTokens=["a","b","t","T"]}class Hour1to12Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"h":return parseNumericPattern(numericPatterns.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=12}set(e,t,r){const a=e.getHours()>=12;return a&&r<12?e.setHours(r+12,0,0,0):!a&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["H","K","k","t","T"]}class Hour0to23Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"H":return parseNumericPattern(numericPatterns.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=23}set(e,t,r){return e.setHours(r,0,0,0),e}incompatibleTokens=["a","b","h","K","k","t","T"]}class Hour0To11Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"K":return parseNumericPattern(numericPatterns.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["h","H","k","t","T"]}class Hour1To24Parser extends Parser{priority=70;parse(e,t,r){switch(t){case"k":return parseNumericPattern(numericPatterns.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=1&&t<=24}set(e,t,r){const a=r<=24?r%24:r;return e.setHours(a,0,0,0),e}incompatibleTokens=["a","b","h","H","K","t","T"]}class MinuteParser extends Parser{priority=60;parse(e,t,r){switch(t){case"m":return parseNumericPattern(numericPatterns.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setMinutes(r,0,0),e}incompatibleTokens=["t","T"]}class SecondParser extends Parser{priority=50;parse(e,t,r){switch(t){case"s":return parseNumericPattern(numericPatterns.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return parseNDigits(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setSeconds(r,0),e}incompatibleTokens=["t","T"]}class FractionOfSecondParser extends Parser{priority=30;parse(e,t){const r=a=>Math.trunc(a*Math.pow(10,-t.length+3));return mapValue(parseNDigits(t.length,e),r)}set(e,t,r){return e.setMilliseconds(r),e}incompatibleTokens=["t","T"]}class ISOTimezoneWithZParser extends Parser{priority=10;parse(e,t){switch(t){case"X":return parseTimezonePattern(timezonePatterns.basicOptionalMinutes,e);case"XX":return parseTimezonePattern(timezonePatterns.basic,e);case"XXXX":return parseTimezonePattern(timezonePatterns.basicOptionalSeconds,e);case"XXXXX":return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds,e);default:return parseTimezonePattern(timezonePatterns.extended,e)}}set(e,t,r){return t.timestampIsSet?e:constructFrom(e,e.getTime()-getTimezoneOffsetInMilliseconds(e)-r)}incompatibleTokens=["t","T","x"]}class ISOTimezoneParser extends Parser{priority=10;parse(e,t){switch(t){case"x":return parseTimezonePattern(timezonePatterns.basicOptionalMinutes,e);case"xx":return parseTimezonePattern(timezonePatterns.basic,e);case"xxxx":return parseTimezonePattern(timezonePatterns.basicOptionalSeconds,e);case"xxxxx":return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds,e);default:return parseTimezonePattern(timezonePatterns.extended,e)}}set(e,t,r){return t.timestampIsSet?e:constructFrom(e,e.getTime()-getTimezoneOffsetInMilliseconds(e)-r)}incompatibleTokens=["t","T","X"]}class TimestampSecondsParser extends Parser{priority=40;parse(e){return parseAnyDigitsSigned(e)}set(e,t,r){return[constructFrom(e,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class TimestampMillisecondsParser extends Parser{priority=20;parse(e){return parseAnyDigitsSigned(e)}set(e,t,r){return[constructFrom(e,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const parsers={G:new EraParser,y:new YearParser,Y:new LocalWeekYearParser,R:new ISOWeekYearParser,u:new ExtendedYearParser,Q:new QuarterParser,q:new StandAloneQuarterParser,M:new MonthParser,L:new StandAloneMonthParser,w:new LocalWeekParser,I:new ISOWeekParser,d:new DateParser,D:new DayOfYearParser,E:new DayParser,e:new LocalDayParser,c:new StandAloneLocalDayParser,i:new ISODayParser,a:new AMPMParser,b:new AMPMMidnightParser,B:new DayPeriodParser,h:new Hour1to12Parser,H:new Hour0to23Parser,K:new Hour0To11Parser,k:new Hour1To24Parser,m:new MinuteParser,s:new SecondParser,S:new FractionOfSecondParser,X:new ISOTimezoneWithZParser,x:new ISOTimezoneParser,t:new TimestampSecondsParser,T:new TimestampMillisecondsParser},formattingTokensRegExp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp=/^'([^]*?)'?$/,doubleQuoteRegExp=/''/g,notWhitespaceRegExp=/\S/,unescapedLatinCharacterRegExp=/[a-zA-Z]/;function parse(n,e,t,r){const a=()=>constructFrom(r?.in||t,NaN),o=getDefaultOptions(),s=r?.locale??o.locale??enUS,l=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,u=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0;if(!e)return n?a():toDate(t,r?.in);const f={firstWeekContainsDate:l,weekStartsOn:u,locale:s},d=[new DateTimezoneSetter(r?.in,t)],p=e.match(longFormattingTokensRegExp).map(C=>{const A=C[0];if(A in longFormatters){const M=longFormatters[A];return M(C,s.formatLong)}return C}).join("").match(formattingTokensRegExp),v=[];for(let C of p){!r?.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(C)&&warnOrThrowProtectedError(C,e,n),!r?.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(C)&&warnOrThrowProtectedError(C,e,n);const A=C[0],M=parsers[A];if(M){const{incompatibleTokens:V}=M;if(Array.isArray(V)){const q=v.find(Q=>V.includes(Q.token)||Q.token===A);if(q)throw new RangeError(`The format string mustn't contain \`${q.fullToken}\` and \`${C}\` at the same time`)}else if(M.incompatibleTokens==="*"&&v.length>0)throw new RangeError(`The format string mustn't contain \`${C}\` and any other token at the same time`);v.push({token:A,fullToken:C});const R=M.run(n,C,s.match,f);if(!R)return a();d.push(R.setter),n=R.rest}else{if(A.match(unescapedLatinCharacterRegExp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");if(C==="''"?C="'":A==="'"&&(C=cleanEscapedString(C)),n.indexOf(C)===0)n=n.slice(C.length);else return a()}}if(n.length>0&&notWhitespaceRegExp.test(n))return a();const y=d.map(C=>C.priority).sort((C,A)=>A-C).filter((C,A,M)=>M.indexOf(C)===A).map(C=>d.filter(A=>A.priority===C).sort((A,M)=>M.subPriority-A.subPriority)).map(C=>C[0]);let x=toDate(t,r?.in);if(isNaN(+x))return a();const E={};for(const C of y){if(!C.validate(x,f))return a();const A=C.set(x,E,f);Array.isArray(A)?(x=A[0],Object.assign(E,A[1])):x=A}return x}function cleanEscapedString(n){return n.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp,"'")}function startOfHour(n,e){const t=toDate(n,e?.in);return t.setMinutes(0,0,0),t}function startOfMinute(n,e){const t=toDate(n,e?.in);return t.setSeconds(0,0),t}function startOfSecond(n,e){const t=toDate(n,e?.in);return t.setMilliseconds(0),t}function parseISO(n,e){const t=()=>constructFrom(e?.in,NaN),r=e?.additionalDigits??2,a=splitDateString(n);let o;if(a.date){const f=parseYear(a.date,r);o=parseDate(f.restDateString,f.year)}if(!o||isNaN(+o))return t();const s=+o;let l=0,u;if(a.time&&(l=parseTime(a.time),isNaN(l)))return t();if(a.timezone){if(u=parseTimezone(a.timezone),isNaN(u))return t()}else{const f=new Date(s+l),d=toDate(0,e?.in);return d.setFullYear(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()),d.setHours(f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds()),d}return toDate(s+l+u,e?.in)}const patterns={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dateRegex=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,timeRegex=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,timezoneRegex=/^([+-])(\d{2})(?::?(\d{2}))?$/;function splitDateString(n){const e={},t=n.split(patterns.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],patterns.timeZoneDelimiter.test(e.date)&&(e.date=n.split(patterns.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const a=patterns.timezone.exec(r);a?(e.time=r.replace(a[1],""),e.timezone=a[1]):e.time=r}return e}function parseYear(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:o===null?a:o*100,restDateString:n.slice((r[1]||r[2]).length)}}function parseDate(n,e){if(e===null)return new Date(NaN);const t=n.match(dateRegex);if(!t)return new Date(NaN);const r=!!t[4],a=parseDateUnit(t[1]),o=parseDateUnit(t[2])-1,s=parseDateUnit(t[3]),l=parseDateUnit(t[4]),u=parseDateUnit(t[5])-1;if(r)return validateWeekDate(e,l,u)?dayOfISOWeekYear(e,l,u):new Date(NaN);{const f=new Date(0);return!validateDate(e,o,s)||!validateDayOfYearDate(e,a)?new Date(NaN):(f.setUTCFullYear(e,o,Math.max(a,s)),f)}}function parseDateUnit(n){return n?parseInt(n):1}function parseTime(n){const e=n.match(timeRegex);if(!e)return NaN;const t=parseTimeUnit(e[1]),r=parseTimeUnit(e[2]),a=parseTimeUnit(e[3]);return validateTime(t,r,a)?t*millisecondsInHour+r*millisecondsInMinute+a*1e3:NaN}function parseTimeUnit(n){return n&&parseFloat(n.replace(",","."))||0}function parseTimezone(n){if(n==="Z")return 0;const e=n.match(timezoneRegex);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return validateTimezone(r,a)?t*(r*millisecondsInHour+a*millisecondsInMinute):NaN}function dayOfISOWeekYear(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const a=r.getUTCDay()||7,o=(e-1)*7+t+1-a;return r.setUTCDate(r.getUTCDate()+o),r}const daysInMonths=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(n){return n%400===0||n%4===0&&n%100!==0}function validateDate(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(daysInMonths[e]||(isLeapYearIndex(n)?29:28))}function validateDayOfYearDate(n,e){return e>=1&&e<=(isLeapYearIndex(n)?366:365)}function validateWeekDate(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function validateTime(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function validateTimezone(n,e){return e>=0&&e<=59}const FORMATS={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};adapters._date.override({_id:"date-fns",formats:function(){return FORMATS},parse:function(n,e){if(n===null||typeof n>"u")return null;const t=typeof n;return t==="number"||n instanceof Date?n=toDate(n):t==="string"&&(typeof e=="string"?n=parse(n,e,new Date,this.options):n=parseISO(n,this.options)),isValid(n)?n.getTime():null},format:function(n,e){return format(n,e,this.options)},add:function(n,e,t){switch(t){case"millisecond":return addMilliseconds(n,e);case"second":return addSeconds(n,e);case"minute":return addMinutes(n,e);case"hour":return addHours(n,e);case"day":return addDays(n,e);case"week":return addWeeks(n,e);case"month":return addMonths(n,e);case"quarter":return addQuarters(n,e);case"year":return addYears(n,e);default:return n}},diff:function(n,e,t){switch(t){case"millisecond":return differenceInMilliseconds(n,e);case"second":return differenceInSeconds(n,e);case"minute":return differenceInMinutes(n,e);case"hour":return differenceInHours(n,e);case"day":return differenceInDays(n,e);case"week":return differenceInWeeks(n,e);case"month":return differenceInMonths(n,e);case"quarter":return differenceInQuarters(n,e);case"year":return differenceInYears(n,e);default:return 0}},startOf:function(n,e,t){switch(e){case"second":return startOfSecond(n);case"minute":return startOfMinute(n);case"hour":return startOfHour(n);case"day":return startOfDay(n);case"week":return startOfWeek(n);case"isoWeek":return startOfWeek(n,{weekStartsOn:+t});case"month":return startOfMonth(n);case"quarter":return startOfQuarter(n);case"year":return startOfYear(n);default:return n}},endOf:function(n,e){switch(e){case"second":return endOfSecond(n);case"minute":return endOfMinute(n);case"hour":return endOfHour(n);case"day":return endOfDay(n);case"week":return endOfWeek(n);case"month":return endOfMonth(n);case"quarter":return endOfQuarter(n);case"year":return endOfYear(n);default:return n}}});Object.assign(window,{getCookie:function(n){getCookie(n)},$:jQuery$1,jQuery:jQuery$1,coldfront:{initStorageHistoryChart}});function initDocument(){for(const n of[initDateSelector,initSelect2,initForm,initDataTable,initCharts,initHtmx])n()}document.readyState!=="loading"?initDocument():document.addEventListener("DOMContentLoaded",initDocument);
