(window.webpackJsonp=window.webpackJsonp||[]).push([["npm._css-what5.0.1@css-what"],{"34db":function(e,t,r){"use strict";var n=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.isTraversal=void 0;var a=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,i=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,s=new Map([["~","element"],["^","start"],["$","end"],["*","any"],["!","not"],["|","hyphen"]]),o={">":"child","<":"parent","~":"sibling","+":"adjacent"},c={"#":["id","equals"],".":["class","element"]},u=new Set(["has","not","matches","is","host","host-context"]),l=new Set(n(["descendant"],Object.keys(o).map((function(e){return o[e]})))),h=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function f(e){return l.has(e.type)}t.isTraversal=f;var d=new Set(["contains","icontains"]),p=new Set(['"',"'"]);function v(e,t,r){var n=parseInt(t,16)-65536;return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function m(e){return e.replace(i,v)}function w(e){return" "===e||"\n"===e||"\t"===e||"\f"===e||"\r"===e}function g(e,t){if(e.length>0&&0===t.length)throw new Error("Empty sub-selector");e.push(t)}t.default=function(e,t){var r=[],n=function e(t,r,n,i){var l,v;void 0===n&&(n={});var y=[],b=!1;function A(e){var t=r.slice(i+e).match(a);if(!t)throw new Error("Expected name, found "+r.slice(i));var n=t[0];return i+=e+n.length,m(n)}function _(e){for(;w(r.charAt(i+e));)e++;i+=e}function C(e){for(var t=0;"\\"===r.charAt(--e);)t++;return 1==(1&t)}function E(){if(y.length>0&&f(y[y.length-1]))throw new Error("Did not expect successive traversals.")}_(0);for(;""!==r;){var j=r.charAt(i);if(w(j))b=!0,_(1);else if(j in o)E(),y.push({type:o[j]}),b=!1,_(1);else if(","===j){if(0===y.length)throw new Error("Empty sub-selector");t.push(y),y=[],b=!1,_(1)}else if(r.startsWith("/*",i)){var x=r.indexOf("*/",i+2);if(x<0)throw new Error("Comment was not terminated");i=x+2}else if(b&&(E(),y.push({type:"descendant"}),b=!1),j in c){var O=c[j],M=O[0],S=O[1];y.push({type:"attribute",name:M,action:S,value:A(1),namespace:null,ignoreCase:!!n.xmlMode&&null})}else if("["===j){_(1);var P=void 0,k=null;"|"===r.charAt(i)&&(k="",i+=1),r.startsWith("*|",i)&&(k="*",i+=2),P=A(0),null===k&&"|"===r.charAt(i)&&"="!==r.charAt(i+1)&&(k=P,P=A(1)),(null!==(l=n.lowerCaseAttributeNames)&&void 0!==l?l:!n.xmlMode)&&(P=P.toLowerCase()),_(0);S="exists";var q=s.get(r.charAt(i));if(q){if(S=q,"="!==r.charAt(i+1))throw new Error("Expected `=`");_(2)}else"="===r.charAt(i)&&(S="equals",_(1));var F="",L=null;if("exists"!==S){if(p.has(r.charAt(i))){for(var T=r.charAt(i),B=i+1;B<r.length&&(r.charAt(B)!==T||C(B));)B+=1;if(r.charAt(B)!==T)throw new Error("Attribute value didn't end");F=m(r.slice(i+1,B)),i=B+1}else{for(var D=i;i<r.length&&(!w(r.charAt(i))&&"]"!==r.charAt(i)||C(i));)i+=1;F=m(r.slice(D,i))}_(0);var I=r.charAt(i);"s"===I||"S"===I?(L=!1,_(1)):"i"!==I&&"I"!==I||(L=!0,_(1))}if(n.xmlMode||null!=L||(L=h.has(P)),"]"!==r.charAt(i))throw new Error("Attribute selector didn't terminate");i+=1;var J={type:"attribute",name:P,action:S,value:F,namespace:k,ignoreCase:L};y.push(J)}else if(":"===j){if(":"===r.charAt(i+1)){y.push({type:"pseudo-element",name:A(2).toLowerCase()});continue}var W=A(1).toLowerCase(),$=null;if("("===r.charAt(i))if(u.has(W)){if(p.has(r.charAt(i+1)))throw new Error("Pseudo-selector "+W+" cannot be quoted");if(i=e($=[],r,n,i+1),")"!==r.charAt(i))throw new Error("Missing closing parenthesis in :"+W+" ("+r+")");i+=1}else{for(var z=i+=1,N=1;N>0&&i<r.length;i++)"("!==r.charAt(i)||C(i)?")"!==r.charAt(i)||C(i)||N--:N++;if(N)throw new Error("Parenthesis not matched");if($=r.slice(z,i-1),d.has(W)){var U=$.charAt(0);U===$.slice(-1)&&p.has(U)&&($=$.slice(1,-1)),$=m($)}}y.push({type:"pseudo",name:W,data:$})}else{k=null;var G=void 0;if("*"===j)i+=1,G="*";else{if(!a.test(r.slice(i)))return y.length&&"descendant"===y[y.length-1].type&&y.pop(),g(t,y),i;"|"===r.charAt(i)&&(k="",i+=1),G=A(0)}"|"===r.charAt(i)&&(k=G,"*"===r.charAt(i+1)?(G="*",i+=2):G=A(1)),"*"===G?y.push({type:"universal",namespace:k}):((null!==(v=n.lowerCaseTags)&&void 0!==v?v:!n.xmlMode)&&(G=G.toLowerCase()),y.push({type:"tag",name:G,namespace:k}))}}return g(t,y),i}(r,""+e,t,0);if(n<e.length)throw new Error("Unmatched selector: "+e.slice(n));return r}},"9e1e":function(e,t,r){"use strict";var n=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0});var a={equals:"",element:"~",start:"^",end:"$",any:"*",not:"!",hyphen:"|"},i=new Set(n(n([],Object.keys(a).map((function(e){return a[e]})).filter(Boolean)),[":","[","]"," ","\\","(",")","'"]));function s(e){return e.map(o).join(", ")}function o(e){return e.map(c).join("")}function c(e){switch(e.type){case"child":return" > ";case"parent":return" < ";case"sibling":return" ~ ";case"adjacent":return" + ";case"descendant":return" ";case"universal":return l(e.namespace)+"*";case"tag":return u(e);case"pseudo-element":return"::"+h(e.name);case"pseudo":return null===e.data?":"+h(e.name):"string"==typeof e.data?":"+h(e.name)+"("+h(e.data)+")":":"+h(e.name)+"("+s(e.data)+")";case"attribute":if("id"===e.name&&"equals"===e.action&&!e.ignoreCase&&!e.namespace)return"#"+h(e.value);if("class"===e.name&&"element"===e.action&&!e.ignoreCase&&!e.namespace)return"."+h(e.value);var t=u(e);return"exists"===e.action?"["+t+"]":"["+t+a[e.action]+"='"+h(e.value)+"'"+(e.ignoreCase?"i":!1===e.ignoreCase?"s":"")+"]"}}function u(e){return""+l(e.namespace)+h(e.name)}function l(e){return null!==e?("*"===e?"*":h(e))+"|":""}function h(e){return e.split("").map((function(e){return i.has(e)?"\\"+e:e})).join("")}t.default=s},b9f2:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.stringify=t.parse=void 0,a(r("34db"),t);var s=r("34db");Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return i(s).default}});var o=r("9e1e");Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return i(o).default}})}}]);