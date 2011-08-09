/*
    qBoot : The bootstrap object for dynamically injecting QUnit into existing pages
    Copyright (C) 2011  Bill Turner

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

	version: 0.2
	    - Added ability to specify selectors or page urls as triggers for tests
	    paths = Array() of (partial) path object
	        paths[0].uri = string
	        paths[0].tests = Array() of test JS files

	    selectors = Array() of item object
	        selectors[0].selector = string representing selector
	        selectors[0].tests = Array() of test JS files



 */

/*** Sizzle JS by John Resig - used for selector based test inclusion ***/
(function(){function r(a,b,c,d,e,f){for(var g=0,i=d.length;g<i;g++){var j=d[g];if(j){var k=false;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){if(!f){j.sizcache=c;j.sizset=g}if(typeof b!=="string"){if(j===b){k=true;break}}else if(h.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function q(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=false;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1&&!f){i.sizcache=c;i.sizset=g}if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,b=0,c=Object.prototype.toString,d=false,e=true,f=/\\/g,g=/\W/;[0,0].sort(function(){e=false;return 0});var h=function(b,d,e,f){e=e||[];d=d||document;var g=d;if(d.nodeType!==1&&d.nodeType!==9){return[]}if(!b||typeof b!=="string"){return e}var k,l,n,o,p,q,r,t,u=true,v=h.isXML(d),w=[],x=b;do{a.exec("");k=a.exec(x);if(k){x=k[3];w.push(k[1]);if(k[2]){o=k[3];break}}}while(k);if(w.length>1&&j.exec(b)){if(w.length===2&&i.relative[w[0]]){l=s(w[0]+w[1],d)}else{l=i.relative[w[0]]?[d]:h(w.shift(),d);while(w.length){b=w.shift();if(i.relative[b]){b+=w.shift()}l=s(b,l)}}}else{if(!f&&w.length>1&&d.nodeType===9&&!v&&i.match.ID.test(w[0])&&!i.match.ID.test(w[w.length-1])){p=h.find(w.shift(),d,v);d=p.expr?h.filter(p.expr,p.set)[0]:p.set[0]}if(d){p=f?{expr:w.pop(),set:m(f)}:h.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v);l=p.expr?h.filter(p.expr,p.set):p.set;if(w.length>0){n=m(l)}else{u=false}while(w.length){q=w.pop();r=q;if(!i.relative[q]){q=""}else{r=w.pop()}if(r==null){r=d}i.relative[q](n,r,v)}}else{n=w=[]}}if(!n){n=l}if(!n){h.error(q||b)}if(c.call(n)==="[object Array]"){if(!u){e.push.apply(e,n)}else if(d&&d.nodeType===1){for(t=0;n[t]!=null;t++){if(n[t]&&(n[t]===true||n[t].nodeType===1&&h.contains(d,n[t]))){e.push(l[t])}}}else{for(t=0;n[t]!=null;t++){if(n[t]&&n[t].nodeType===1){e.push(l[t])}}}}else{m(n,e)}if(o){h(o,g,e,f);h.uniqueSort(e)}return e};h.uniqueSort=function(a){if(o){d=e;a.sort(o);if(d){for(var b=1;b<a.length;b++){if(a[b]===a[b-1]){a.splice(b--,1)}}}}return a};h.matches=function(a,b){return h(a,null,null,b)};h.matchesSelector=function(a,b){return h(b,null,null,[a]).length>0};h.find=function(a,b,c){var d;if(!a){return[]}for(var e=0,g=i.order.length;e<g;e++){var h,j=i.order[e];if(h=i.leftMatch[j].exec(a)){var k=h[1];h.splice(1,1);if(k.substr(k.length-1)!=="\\"){h[1]=(h[1]||"").replace(f,"");d=i.find[j](h,b,c);if(d!=null){a=a.replace(i.match[j],"");break}}}}if(!d){d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]}return{set:d,expr:a}};h.filter=function(a,b,c,d){var e,f,g=a,j=[],k=b,l=b&&b[0]&&h.isXML(b[0]);while(a&&b.length){for(var m in i.filter){if((e=i.leftMatch[m].exec(a))!=null&&e[2]){var n,o,p=i.filter[m],q=e[1];f=false;e.splice(1,1);if(q.substr(q.length-1)==="\\"){continue}if(k===j){j=[]}if(i.preFilter[m]){e=i.preFilter[m](e,k,c,j,d,l);if(!e){f=n=true}else if(e===true){continue}}if(e){for(var r=0;(o=k[r])!=null;r++){if(o){n=p(o,e,r,k);var s=d^!!n;if(c&&n!=null){if(s){f=true}else{k[r]=false}}else if(s){j.push(o);f=true}}}}if(n!==undefined){if(!c){k=j}a=a.replace(i.match[m],"");if(!f){return[]}break}}}if(a===g){if(f==null){h.error(a)}else{break}}g=a}return k};h.error=function(a){throw"Syntax error, unrecognized expression: "+a};var i=h.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!g.test(b),e=c&&!d;if(d){b=b.toLowerCase()}for(var f=0,i=a.length,j;f<i;f++){if(j=a[f]){while((j=j.previousSibling)&&j.nodeType!==1){}a[f]=e||j&&j.nodeName.toLowerCase()===b?j||false:j===b}}if(e){h.filter(b,a,true)}},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!g.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var i=c.parentNode;a[e]=i.nodeName.toLowerCase()===b?i:false}}}else{for(;e<f;e++){c=a[e];if(c){a[e]=d?c.parentNode:c.parentNode===b}}if(d){h.filter(b,a,true)}}},"":function(a,c,d){var e,f=b++,h=r;if(typeof c==="string"&&!g.test(c)){c=c.toLowerCase();e=c;h=q}h("parentNode",c,f,a,e,d)},"~":function(a,c,d){var e,f=b++,h=r;if(typeof c==="string"&&!g.test(c)){c=c.toLowerCase();e=c;h=q}h("previousSibling",c,f,a,e,d)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++){if(d[e].getAttribute("name")===a[1]){c.push(d[e])}}return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined"){return b.getElementsByTagName(a[1])}}},preFilter:{CLASS:function(a,b,c,d,e,g){a=" "+a[1].replace(f,"")+" ";if(g){return a}for(var h=0,i;(i=b[h])!=null;h++){if(i){if(e^(i.className&&(" "+i.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)){if(!c){d.push(i)}}else if(c){b[h]=false}}}return false},ID:function(a){return a[1].replace(f,"")},TAG:function(a,b){return a[1].replace(f,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){if(!a[2]){h.error(a[0])}a[2]=a[2].replace(/^\+|\s*/g,"");var c=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=c[1]+(c[2]||1)-0;a[3]=c[3]-0}else if(a[2]){h.error(a[0])}a[0]=b++;return a},ATTR:function(a,b,c,d,e,g){var h=a[1]=a[1].replace(f,"");if(!g&&i.attrMap[h]){a[1]=i.attrMap[h]}a[4]=(a[4]||a[5]||"").replace(f,"");if(a[2]==="~="){a[4]=" "+a[4]+" "}return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not"){if((a.exec(b[3])||"").length>1||/^\w/.test(b[3])){b[3]=h(b[3],null,null,c)}else{var g=h.filter(b[3],c,d,true^f);if(!d){e.push.apply(e,g)}return false}}else if(i.match.POS.test(b[0])||i.match.CHILD.test(b[0])){return true}return b},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){if(a.parentNode){a.parentNode.selectedIndex}return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!h(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=i.filters[e];if(f){return f(a,c,b,d)}else if(e==="contains"){return(a.textContent||a.innerText||h.getText([a])||"").indexOf(b[3])>=0}else if(e==="not"){var g=b[3];for(var j=0,k=g.length;j<k;j++){if(g[j]===a){return false}}return true}else{h.error(e)}},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling){if(d.nodeType===1){return false}}if(c==="first"){return true}d=a;case"last":while(d=d.nextSibling){if(d.nodeType===1){return false}}return true;case"nth":var e=b[2],f=b[3];if(e===1&&f===0){return true}var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling){if(d.nodeType===1){d.nodeIndex=++i}}h.sizcache=g}var j=a.nodeIndex-f;if(e===0){return j===0}else{return j%e===0&&j/e>=0}}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=i.attrHandle[c]?i.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:!g?e&&d!==false:f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":false},POS:function(a,b,c,d){var e=b[2],f=i.setFilters[e];if(f){return f(a,c,b,d)}}}};var j=i.match.POS,k=function(a,b){return"\\"+(b-0+1)};for(var l in i.match){i.match[l]=new RegExp(i.match[l].source+/(?![^\[]*\])(?![^\(]*\))/.source);i.leftMatch[l]=new RegExp(/(^(?:.|\r|\n)*?)/.source+i.match[l].source.replace(/\\(\d+)/g,k))}var m=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(n){m=function(a,b){var d=0,e=b||[];if(c.call(a)==="[object Array]"){Array.prototype.push.apply(e,a)}else{if(typeof a.length==="number"){for(var f=a.length;d<f;d++){e.push(a[d])}}else{for(;a[d];d++){e.push(a[d])}}}return e}}var o,p;if(document.documentElement.compareDocumentPosition){o=function(a,b){if(a===b){d=true;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1}return a.compareDocumentPosition(b)&4?-1:1}}else{o=function(a,b){if(a===b){d=true;return 0}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex}var c,e,f=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i){return p(a,b)}else if(!h){return-1}else if(!i){return 1}while(j){f.unshift(j);j=j.parentNode}j=i;while(j){g.unshift(j);j=j.parentNode}c=f.length;e=g.length;for(var k=0;k<c&&k<e;k++){if(f[k]!==g[k]){return p(f[k],g[k])}}return k===c?p(a,g[k],-1):p(f[k],b,1)};p=function(a,b,c){if(a===b){return c}var d=a.nextSibling;while(d){if(d===b){return-1}d=d.nextSibling}return 1}}h.getText=function(a){var b="",c;for(var d=0;a[d];d++){c=a[d];if(c.nodeType===3||c.nodeType===4){b+=c.nodeValue}else if(c.nodeType!==8){b+=h.getText(c.childNodes)}}return b};(function(){var a=document.createElement("div"),b="script"+(new Date).getTime(),c=document.documentElement;a.innerHTML="<a name='"+b+"'/>";c.insertBefore(a,c.firstChild);if(document.getElementById(b)){i.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d?d.id===a[1]||typeof d.getAttributeNode!=="undefined"&&d.getAttributeNode("id").nodeValue===a[1]?[d]:undefined:[]}};i.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}}c.removeChild(a);c=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0){i.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++){if(c[e].nodeType===1){d.push(c[e])}}c=d}return c}}a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"){i.attrHandle.href=function(a){return a.getAttribute("href",2)}}a=null})();if(document.querySelectorAll){(function(){var a=h,b=document.createElement("div"),c="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0){return}h=function(b,d,e,f){d=d||document;if(!f&&!h.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(g&&(d.nodeType===1||d.nodeType===9)){if(g[1]){return m(d.getElementsByTagName(b),e)}else if(g[2]&&i.find.CLASS&&d.getElementsByClassName){return m(d.getElementsByClassName(g[2]),e)}}if(d.nodeType===9){if(b==="body"&&d.body){return m([d.body],e)}else if(g&&g[3]){var j=d.getElementById(g[3]);if(j&&j.parentNode){if(j.id===g[3]){return m([j],e)}}else{return m([],e)}}try{return m(d.querySelectorAll(b),e)}catch(k){}}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var l=d,n=d.getAttribute("id"),o=n||c,p=d.parentNode,q=/^\s*[+~]/.test(b);if(!n){d.setAttribute("id",o)}else{o=o.replace(/'/g,"\\$&")}if(q&&p){d=d.parentNode}try{if(!q||p){return m(d.querySelectorAll("[id='"+o+"'] "+b),e)}}catch(r){}finally{if(!n){l.removeAttribute("id")}}}}return a(b,d,e,f)};for(var d in a){h[d]=a[d]}b=null})()}(function(){var a=document.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(document.createElement("div"),"div"),d=false;try{b.call(document.documentElement,"[test!='']:sizzle")}catch(e){d=true}h.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!h.isXML(a)){try{if(d||!i.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&a.document.nodeType!==11){return f}}}catch(g){}}return h(e,null,null,[a]).length>0}}})();(function(){var a=document.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0){return}a.lastChild.className="e";if(a.getElementsByClassName("e").length===1){return}i.order.splice(1,0,"CLASS");i.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c){return b.getElementsByClassName(a[1])}};a=null})();if(document.documentElement.contains){h.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true)}}else if(document.documentElement.compareDocumentPosition){h.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}}else{h.contains=function(){return false}}h.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":false};var s=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=i.match.PSEUDO.exec(a)){e+=c[0];a=a.replace(i.match.PSEUDO,"")}a=i.relative[a]?a+"*":a;for(var g=0,j=f.length;g<j;g++){h(a,f[g],d)}return h.filter(e,d)};window.Sizzle=h})()

var qboot = function(){

        //private set of options definitions. Override with the init public method
        var options = {
            host : "",
            basepath : "",
            paths : null,
            selectors : null,
            tests : null
        };

        //internal instance of extend used to map parameters to the private options object
        function extend(a, b) {
            for ( var prop in b ) {
                if ( b[prop] === undefined ) {
                    delete a[prop];
                } else {
                    a[prop] = b[prop];
                }
            }

            return a;
        }

        //initialize page Bootstrap - actually add all the functionality to the page here.
        function initPage(){
            console.log("host: %s", options.host);
            console.log("basepath: %s", options.basepath);
            loadCSS(options.host + options.basepath + "qunit.css", "qunit_css");

            var markup = '<h1 id="qunit-header">QUnit Test Suite</h1><h2 id="qunit-banner"></h2>' +
                    '<div id="qunit-testrunner-toolbar"></div><h2 id="qunit-userAgent"></h2>' +
                    '<ol id="qunit-tests"></ol><div id="qunit-fixture">test markup, will be hidden</div>' +
                    '<script language="javascript">qRun();</script>';
            var wrapper = document.createElement("div");
            wrapper.setAttribute("id","qunit-report");
            wrapper.innerHTML = markup;
            document.getElementsByTagName("body")[0].appendChild(wrapper);

            loadJS(options.host + options.basepath + "qunit.js", "qunit_js", function(){
                qRun();
                //load tests
                //load via paths
                if(options.paths && options.paths.length > 0){
                    for(var i=0;i<options.paths.length;i++){
                        if(document.location.href.indexOf(options.paths[i].uri) >0){
                            for(var x=0;x<options.paths[i].tests.length;x++){
                                loadJS(options.paths[i].tests[x], getRandom());
                            }
                        }
                    }
                }

                //load via selectors
                if(options.selectors && options.selectors.length > 0){
                    for(var i=0;i<options.selectors.length;i++){
                        if(Sizzle(options.selectors[i].selector).length > 0){
                            for(var x=0;x<options.selectors[i].tests.length;x++){
                                loadJS(options.selectors[i].tests[x], getRandom());
                            }
                        }
                    }
                }

                //load via tests only
                if(options.tests && options.tests.length > 0){
                    loadJS(options.host + options.tests, getRandom());
                }


            });
        }

        //dynamically add CSS to the document head element
        function loadCSS(filename, id) {

            if (!id || (id && !document.getElementById(id))) {
                console.log("loadCSS");
                var lnk = document.createElement('link');
                lnk.setAttribute("rel", "stylesheet");
                lnk.setAttribute("type", "text/css");
                lnk.setAttribute("href", filename + "?" + getRandom());
                if(id) lnk.setAttribute("id", id);

                document.getElementsByTagName('head')[0].appendChild(lnk);

           }

        }

        //dynamically add Javascript to the document head element and support callback functionality
        function loadJS(filename, id, cb) {

            if (!id || (id && !document.getElementById(id))) {

                var script = document.createElement( 'script' );
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", filename +'?'+ getRandom());
                if(cb) script.onload = script.onreadystatechange = function(){
                    var rs = this.readyState;
                    if(rs && rs != 'complete' && rs!='loaded') return;
                    cb.apply(document);
                };
                if(id) script.id = id;
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        }

        //random number generator
        function getRandom(){
            return Math.floor(Math.random()*10000000);
        }

         /* public methods */
        return {

            //public init function.
            init: function(param){
                extend(options, param);
                if(options.tests || options.paths || options.selectors){ initPage();}
            }
        }

}();

/*

Trigger qBoot by calling  qboot.init(options);
 - Where options is the array of supported options

*/

