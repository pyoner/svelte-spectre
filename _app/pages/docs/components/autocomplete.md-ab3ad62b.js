var Ye=Object.defineProperty,Ze=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var je=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ee=(n,e,t)=>e in n?Ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,De=(n,e)=>{for(var t in e||(e={}))$e.call(e,t)&&Ee(n,t,e[t]);if(je)for(var t of je(e))et.call(e,t)&&Ee(n,t,e[t]);return n},Ie=(n,e)=>Ze(n,xe(e));import{S as qe,i as Fe,s as We,w as le,x as oe,y as ce,q as C,o as M,B as pe,e as A,c as O,a as N,d as _,b,g as E,n as x,p as $,C as me,k as z,m as K,G as q,F as Be,H as I,al as Ae,W as V,am as tt,z as nt,K as Xe,aa as ve,L as Oe,N as st,l as Q,I as at,an as lt,V as re,X as Z,ad as ot,t as W,h as X,j as be,a5 as ke,a6 as ge,a7 as he}from"../../../chunks/vendor-d8afbd78.js";/* empty css                                                            */import{I as ct}from"../../../chunks/IconButton-d5912d76.js";import{C as pt}from"../../../chunks/Chip-20564065.js";import{K as rt}from"../../../chunks/_knobs-dd5dffe2.js";import"../../../chunks/Icon-c2990a68.js";import"../../../chunks/Button-57efc875.js";import"../../../chunks/action-63149ef0.js";import"../../../chunks/Avatar-a22efb26.js";import"../../../chunks/Col-b3dbe0a0.js";import"../../../chunks/_media-67435c9b.js";function ut(n,e,t){return n.filter(s=>Je(s.label,t)>=0&&!e.some(l=>l.label===s.label))}function it(n,e,t){var s;return Je((s=n[t])==null?void 0:s.label,e)===0?n[t].label:""}function Je(n,e){const t=new RegExp(e,"i");return n==null?void 0:n.search(t)}function ft(n,e){const t=new RegExp(e,"i");return n==null?void 0:n.match(t).join("")}function ue(n,e){const t=ft(n,e);return n.replace(t,`<mark>${t}</mark>`)}function Ne(n,e,t){return{index:t>=0?t:e.length,value:n,label:`${n||""}`}}function dt(n){return n!=null&&n.some(e=>!(e!=null&&e.hasOwnProperty("index")))?n.map((e,t)=>Ie(De({},e),{index:t})):n}function Se(n){return!n||!n.length?(console.warn("Autocomplete haven't items"),[]):n.reduce((e,t)=>{var s;return e[t.group]=e[t.group]||[],(s=e[t.group])==null||s.push(t),e},{})}function Ce(n,e,t){const s=n.slice();return s[34]=e[t][0],s[35]=e[t][1],s[37]=t,s}function Te(n,e,t){const s=n.slice();return s[38]=e[t],s[37]=t,s}function Le(n,e,t){const s=n.slice();return s[40]=e[t],s[37]=t,s}function _t(n){let e=n[40].label+"",t;return{c(){t=W(e)},l(s){t=X(s,e)},m(s,l){E(s,t,l)},p(s,l){l[0]&4&&e!==(e=s[40].label+"")&&be(t,e)},d(s){s&&_(t)}}}function Pe(n){let e,t;function s(){return n[20](n[37])}return e=new pt({props:{style:n[40].style||"",closable:!0,color:n[40].type||"",$$slots:{default:[_t]},$$scope:{ctx:n}}}),e.$on("close",s),{c(){le(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,c){ce(e,l,c),t=!0},p(l,c){n=l;const o={};c[0]&4&&(o.style=n[40].style||""),c[0]&4&&(o.color=n[40].type||""),c[0]&4|c[1]&2048&&(o.$$scope={dirty:c,ctx:n}),e.$set(o)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){M(e.$$.fragment,l),t=!1},d(l){pe(e,l)}}}function kt(n){let e,t,s;return{c(){e=A("button"),this.h()},l(l){e=O(l,"BUTTON",{class:!0,"aria-label":!0}),N(e).forEach(_),this.h()},h(){b(e,"class","btn btn-clear mr--1 svelte-iumxev"),b(e,"aria-label","Close")},m(l,c){E(l,e,c),t||(s=V(e,"click",n[23]),t=!0)},p:re,d(l){l&&_(e),t=!1,s()}}}function gt(n){let e;return{c(){e=A("i"),this.h()},l(t){e=O(t,"I",{class:!0}),N(e).forEach(_),this.h()},h(){b(e,"class","form-icon loading svelte-iumxev")},m(t,s){E(t,e,s)},p:re,d(t){t&&_(e)}}}function Me(n){let e,t,s,l;const c=[mt,ht],o=[];function u(p,r){return p[1].length?1:0}return t=u(n),s=o[t]=c[t](n),{c(){e=A("dl"),s.c(),this.h()},l(p){e=O(p,"DL",{class:!0,tabindex:!0});var r=N(e);s.l(r),r.forEach(_),this.h()},h(){b(e,"class","menu svelte-iumxev"),b(e,"tabindex","0")},m(p,r){E(p,e,r),o[t].m(e,null),l=!0},p(p,r){let f=t;t=u(p),t===f?o[t].p(p,r):(x(),M(o[f],1,1,()=>{o[f]=null}),$(),s=o[t],s?s.p(p,r):(s=o[t]=c[t](p),s.c()),C(s,1),s.m(e,null))},i(p){l||(C(s),l=!0)},o(p){M(s),l=!1},d(p){p&&_(e),o[t].d()}}}function ht(n){let e,t,s=Object.entries(Se(n[1])),l=[];for(let o=0;o<s.length;o+=1)l[o]=Ke(Ce(n,s,o));const c=o=>M(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=Q()},l(o){for(let u=0;u<l.length;u+=1)l[u].l(o);e=Q()},m(o,u){for(let p=0;p<l.length;p+=1)l[p].m(o,u);E(o,e,u),t=!0},p(o,u){if(u[0]&21003){s=Object.entries(Se(o[1]));let p;for(p=0;p<s.length;p+=1){const r=Ce(o,s,p);l[p]?(l[p].p(r,u),C(l[p],1)):(l[p]=Ke(r),l[p].c(),C(l[p],1),l[p].m(e.parentNode,e))}for(x(),p=s.length;p<l.length;p+=1)c(p);$()}},i(o){if(!t){for(let u=0;u<s.length;u+=1)C(l[u]);t=!0}},o(o){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)M(l[u]);t=!1},d(o){Xe(l,o),o&&_(e)}}}function mt(n){let e;function t(c,o){return c[6]&&c[0].length?vt:bt}let s=t(n),l=s(n);return{c(){l.c(),e=Q()},l(c){l.l(c),e=Q()},m(c,o){l.m(c,o),E(c,e,o)},p(c,o){s===(s=t(c))&&l?l.p(c,o):(l.d(1),l=s(c),l&&(l.c(),l.m(e.parentNode,e)))},i:re,o:re,d(c){l.d(c),c&&_(e)}}}function we(n){let e,t;return{c(){e=A("dt"),this.h()},l(s){e=O(s,"DT",{class:!0,"data-content":!0}),N(e).forEach(_),this.h()},h(){b(e,"class","divider svelte-iumxev"),b(e,"data-content",t=n[34]||"")},m(s,l){E(s,e,l)},p(s,l){l[0]&2&&t!==(t=s[34]||"")&&b(e,"data-content",t)},d(s){s&&_(e)}}}function He(n){let e,t,s;function l(){return n[30](n[38])}return t=new ct({props:{icon:"delete",size:"sm"}}),t.$on("click",l),{c(){e=A("div"),le(t.$$.fragment),this.h()},l(c){e=O(c,"DIV",{class:!0});var o=N(e);oe(t.$$.fragment,o),o.forEach(_),this.h()},h(){b(e,"class","menu-badge svelte-iumxev")},m(c,o){E(c,e,o),ce(t,e,null),s=!0},p(c,o){n=c},i(c){s||(C(t.$$.fragment,c),s=!0)},o(c){M(t.$$.fragment,c),s=!1},d(c){c&&_(e),pe(t)}}}function ze(n,e){let t,s,l=ue(e[38].label,e[0])+"",c,o=e[3].indexOf(e[38])>=0,u,p,r,f;function v(){return e[27](e[38])}function T(){return e[28](e[38])}function D(){return e[29](e[38])}let d=o&&He(e);return{key:n,first:null,c(){t=A("dd"),s=A("a"),c=z(),d&&d.c(),u=z(),this.h()},l(S){t=O(S,"DD",{class:!0,tabindex:!0});var y=N(t);s=O(y,"A",{href:!0,class:!0});var h=N(s);h.forEach(_),c=K(y),d&&d.l(y),u=K(y),y.forEach(_),this.h()},h(){b(s,"href","#_"),b(s,"class","svelte-iumxev"),q(s,"active",e[9]===e[1].indexOf(e[38])),b(t,"class","menu-item svelte-iumxev"),b(t,"tabindex","0"),this.first=t},m(S,y){E(S,t,y),I(t,s),s.innerHTML=l,I(t,c),d&&d.m(t,null),I(t,u),p=!0,r||(f=[V(s,"click",Z(v)),V(s,"mouseover",Z(T)),V(s,"focus",Z(D))],r=!0)},p(S,y){e=S,(!p||y[0]&3)&&l!==(l=ue(e[38].label,e[0])+"")&&(s.innerHTML=l),y[0]&514&&q(s,"active",e[9]===e[1].indexOf(e[38])),y[0]&10&&(o=e[3].indexOf(e[38])>=0),o?d?(d.p(e,y),y[0]&10&&C(d,1)):(d=He(e),d.c(),C(d,1),d.m(t,u)):d&&(x(),M(d,1,1,()=>{d=null}),$())},i(S){p||(C(d),p=!0)},o(S){M(d),p=!1},d(S){S&&_(t),d&&d.d(),r=!1,ve(f)}}}function Ke(n){let e,t=[],s=new Map,l,c,o=n[34]&&n[35].length&&we(n),u=n[35].filter(Re);const p=r=>r[38].index;for(let r=0;r<u.length;r+=1){let f=Te(n,u,r),v=p(f);s.set(v,t[r]=ze(v,f))}return{c(){o&&o.c(),e=Q();for(let r=0;r<t.length;r+=1)t[r].c();l=Q()},l(r){o&&o.l(r),e=Q();for(let f=0;f<t.length;f+=1)t[f].l(r);l=Q()},m(r,f){o&&o.m(r,f),E(r,e,f);for(let v=0;v<t.length;v+=1)t[v].m(r,f);E(r,l,f),c=!0},p(r,f){r[34]&&r[35].length?o?o.p(r,f):(o=we(r),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),f[0]&21003&&(u=r[35].filter(Re),x(),t=at(t,f,p,1,r,u,s,l.parentNode,lt,ze,l,Te),$())},i(r){if(!c){for(let f=0;f<u.length;f+=1)C(t[f]);c=!0}},o(r){for(let f=0;f<t.length;f+=1)M(t[f]);c=!1},d(r){o&&o.d(r),r&&_(e);for(let f=0;f<t.length;f+=1)t[f].d(r);r&&_(l)}}}function bt(n){let e,t;return{c(){e=A("dt"),this.h()},l(s){e=O(s,"DT",{class:!0,"data-content":!0}),N(e).forEach(_),this.h()},h(){b(e,"class","divider svelte-iumxev"),b(e,"data-content",t=n[4]||"No suggested")},m(s,l){E(s,e,l)},p(s,l){l[0]&16&&t!==(t=s[4]||"No suggested")&&b(e,"data-content",t)},d(s){s&&_(e)}}}function vt(n){let e,t,s,l=ue(n[0],n[0])+"",c,o;return{c(){e=A("dt"),t=A("dd"),s=A("a"),this.h()},l(u){e=O(u,"DT",{class:!0,"data-content":!0}),N(e).forEach(_),t=O(u,"DD",{class:!0});var p=N(t);s=O(p,"A",{href:!0,class:!0});var r=N(s);r.forEach(_),p.forEach(_),this.h()},h(){b(e,"class","divider svelte-iumxev"),b(e,"data-content","Add:"),b(s,"href","#_"),b(s,"class","svelte-iumxev"),q(s,"active",n[0].length),b(t,"class","menu-item svelte-iumxev")},m(u,p){E(u,e,p),E(u,t,p),I(t,s),s.innerHTML=l,c||(o=[V(s,"click",Z(n[24])),V(s,"mouseover",Z(n[25])),V(s,"focus",Z(n[26]))],c=!0)},p(u,p){p[0]&1&&l!==(l=ue(u[0],u[0])+"")&&(s.innerHTML=l),p[0]&1&&q(s,"active",u[0].length)},d(u){u&&_(e),u&&_(t),c=!1,ve(o)}}}function yt(n){let e,t,s,l,c,o,u,p,r,f,v,T,D=n[2],d=[];for(let i=0;i<D.length;i+=1)d[i]=Pe(Le(n,D,i));const S=i=>M(d[i],1,1,()=>{d[i]=null});function y(i,k){if(i[0].length)return gt;if(i[2].length)return kt}let h=y(n),B=h&&h(n),j=n[8]&&(!n[7]||n[0].length)&&Me(n),H=[n[15],{class:"form-autocomplete"}],U={};for(let i=0;i<H.length;i+=1)U=me(U,H[i]);return{c(){e=A("div"),t=A("div");for(let i=0;i<d.length;i+=1)d[i].c();s=z(),l=A("div"),c=A("input"),o=z(),B&&B.c(),p=z(),j&&j.c(),r=z(),this.h()},l(i){e=O(i,"DIV",{class:!0});var k=N(e);t=O(k,"DIV",{class:!0});var m=N(t);for(let R=0;R<d.length;R+=1)d[R].l(m);s=K(m),l=O(m,"DIV",{class:!0,"data-active":!0});var w=N(l);c=O(w,"INPUT",{class:!0,type:!0,tabindex:!0,placeholder:!0}),o=K(w),B&&B.l(w),w.forEach(_),m.forEach(_),p=K(k),j&&j.l(k),k.forEach(_),r=K(i),this.h()},h(){b(c,"class","form-input svelte-iumxev"),b(c,"type","text"),b(c,"tabindex","0"),b(c,"placeholder",n[5]),b(l,"class","form-input-icon-wrap svelte-iumxev"),b(l,"data-active",u=n[0].length?n[10]:""),q(l,"has-icon-right",n[0].length||n[2].length),b(t,"class","form-autocomplete-input form-input svelte-iumxev"),q(t,"is-focused",n[8]),Be(e,U),q(e,"svelte-iumxev",!0)},m(i,k){E(i,e,k),I(e,t);for(let m=0;m<d.length;m+=1)d[m].m(t,null);I(t,s),I(t,l),I(l,c),Ae(c,n[0]),I(l,o),B&&B.m(l,null),I(e,p),j&&j.m(e,null),E(i,r,k),f=!0,v||(T=[V(c,"input",n[21]),V(c,"focus",n[22]),V(c,"keydown",n[11]),V(c,"click",tt(n[19])),V(document.body,"click",n[31])],v=!0)},p(i,k){if(k[0]&8196){D=i[2];let m;for(m=0;m<D.length;m+=1){const w=Le(i,D,m);d[m]?(d[m].p(w,k),C(d[m],1)):(d[m]=Pe(w),d[m].c(),C(d[m],1),d[m].m(t,s))}for(x(),m=D.length;m<d.length;m+=1)S(m);$()}(!f||k[0]&32)&&b(c,"placeholder",i[5]),k[0]&1&&c.value!==i[0]&&Ae(c,i[0]),h===(h=y(i))&&B?B.p(i,k):(B&&B.d(1),B=h&&h(i),B&&(B.c(),B.m(l,null))),(!f||k[0]&1025&&u!==(u=i[0].length?i[10]:""))&&b(l,"data-active",u),k[0]&5&&q(l,"has-icon-right",i[0].length||i[2].length),k[0]&256&&q(t,"is-focused",i[8]),i[8]&&(!i[7]||i[0].length)?j?(j.p(i,k),k[0]&385&&C(j,1)):(j=Me(i),j.c(),C(j,1),j.m(e,null)):j&&(x(),M(j,1,1,()=>{j=null}),$()),Be(e,U=nt(H,[k[0]&32768&&i[15],{class:"form-autocomplete"}])),q(e,"svelte-iumxev",!0)},i(i){if(!f){for(let k=0;k<D.length;k+=1)C(d[k]);C(j),f=!0}},o(i){d=d.filter(Boolean);for(let k=0;k<d.length;k+=1)M(d[k]);M(j),f=!1},d(i){i&&_(e),Xe(d,i),B&&B.d(),j&&j.d(),i&&_(r),v=!1,ve(T)}}}const Re=n=>n.label;function jt(n,e,t){const s=["value","empty","placeholder","predefined","suggested","selected","created","creatable","predictable","objectable","groupBy"];let l=Oe(e,s),{value:c=""}=e,{empty:o=""}=e,{placeholder:u="typing here"}=e,{predefined:p=[]}=e,{suggested:r=[]}=e,{selected:f=[]}=e,{created:v=[]}=e,{creatable:T=!1}=e,{predictable:D=!1}=e,{objectable:d=!1}=e,{groupBy:S}=e,y=!1,h=0,B="";function j(a){return a.some(g=>typeof g=="string")?H(a):dt(a)}function H(a){return a.map((g,L)=>{const P=Ne(g,a,L);return P.group=S(P)||"",P})}function U(a){switch(a.key){case"Backspace":c||(a.metaKey||a.ctrlKey?t(2,f=[]):k(f.length-1));break;case"Tab":case"Enter":a.preventDefault(),(r.length||c)&&i(r[h]||c);break;case"ArrowRight":a.preventDefault(),r.length&&i(r[h]);break;case"ArrowDown":a.preventDefault(),h<r.length-1?t(9,h++,h):t(9,h=0);break;case"ArrowUp":a.preventDefault(),h>0?t(9,h--,h):t(9,h=r.length-1);break;case"Escape":a.preventDefault(),t(0,c=""),t(9,h=0),t(8,y=!1),a.target.blur();break}}function i(a){a=typeof a=="string"?Ne(a,p):a,t(2,f=[...f,a]),t(3,v=v.indexOf(a)===-1&&r.indexOf(a)===-1?[...v,a]:v),t(16,p=v.some(g=>p.indexOf(g)===-1)?[...p,a]:p),t(1,r=[]),t(9,h=0),t(0,c="")}function k(a){t(2,f=f.filter((g,L)=>L!==a))}function m(a){t(16,p=p.filter(g=>g.index!==a)),t(1,r=r.filter(g=>g.index!==a)),t(3,v=v.filter(g=>g.index!==a))}function w(a){ot.call(this,n,a)}const R=a=>k(a);function G(){c=this.value,t(0,c)}const ee=()=>t(8,y=!0),Y=()=>t(2,f=[]),F=()=>i(c),ie=()=>t(9,h=0),J=()=>t(9,h=0),fe=a=>i(a),de=a=>t(9,h=r.indexOf(a)),te=a=>t(9,h=r.indexOf(a)),_e=a=>m(a.index),ne=()=>t(8,y=!1);return n.$$set=a=>{e=me(me({},e),st(a)),t(15,l=Oe(e,s)),"value"in a&&t(0,c=a.value),"empty"in a&&t(4,o=a.empty),"placeholder"in a&&t(5,u=a.placeholder),"predefined"in a&&t(16,p=a.predefined),"suggested"in a&&t(1,r=a.suggested),"selected"in a&&t(2,f=a.selected),"created"in a&&t(3,v=a.created),"creatable"in a&&t(6,T=a.creatable),"predictable"in a&&t(7,D=a.predictable),"objectable"in a&&t(17,d=a.objectable),"groupBy"in a&&t(18,S=a.groupBy)},n.$$.update=()=>{n.$$.dirty[0]&66311&&y&&(t(16,p=j(p)),t(1,r=ut(p,f,c)),t(10,B=it(r,c,h)))},[c,r,f,v,o,u,T,D,y,h,B,U,i,k,m,l,p,d,S,w,R,G,ee,Y,F,ie,J,fe,de,te,_e,ne]}class Et extends qe{constructor(e){super();Fe(this,e,jt,yt,We,{value:0,empty:4,placeholder:5,predefined:16,suggested:1,selected:2,created:3,creatable:6,predictable:7,objectable:17,groupBy:18},null,[-1,-1])}}function Dt(n){let e,t,s,l,c,o,u,p,r,f,v,T,D,d=n[1].map(Ge).join(", ")+"",S,y,h,B,j,H,U,i=n[2].map(Ue).join(", ")+"",k,m,w,R,G,ee,Y,F,ie=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Autocomplete <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> predefined <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'top_left'</span><span class="token punctuation">,</span>
            <span class="token string">'top_center'</span><span class="token punctuation">,</span>
            <span class="token string">'top_right'</span><span class="token punctuation">,</span>
            <span class="token string">'center_left'</span><span class="token punctuation">,</span>
            <span class="token string">'center_center'</span><span class="token punctuation">,</span>
            <span class="token string">'center_right'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_left'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_center'</span><span class="token punctuation">,</span>
            <span class="token string">'bottom_right'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        groups <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'\u2196 top_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2191 top_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2197 top_right'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2190 center_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u271B center_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2192 center_right'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2199 bottom_left'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2193 bottom_center'</span><span class="token punctuation">,</span>
            <span class="token string">'\u2198 bottom_right'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        seleted <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> <span class="token function-variable function">groupsBy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> groups<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">g</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Autocomplete</span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>predefined<span class="token punctuation">&#125;</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>selected</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>created</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>type here<span class="token punctuation">"</span></span>
    <span class="token attr-name">empty</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>No suggested<span class="token punctuation">"</span></span>
    <span class="token language-javascript"><span class="token punctuation">&#123;</span>groupBy<span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Selected: [ <span class="token language-javascript"><span class="token punctuation">&#123;</span>selected<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> s<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> ]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>Created: [ <span class="token language-javascript"><span class="token punctuation">&#123;</span>created<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> s<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> ]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span></code>`,J;function fe(a){n[5](a)}function de(a){n[6](a)}let te={predefined:n[3],placeholder:n[0].placeholder,creatable:n[0].creatable,predictable:n[0].predictable,empty:n[0].empty,groupBy:n[4]};n[1]!==void 0&&(te.selected=n[1]),n[2]!==void 0&&(te.created=n[2]),p=new Et({props:te}),ke.push(()=>ge(p,"selected",fe)),ke.push(()=>ge(p,"created",de));function _e(a){n[7](a)}let ne={config:Bt};return n[0]!==void 0&&(ne.state=n[0]),G=new rt({props:ne}),ke.push(()=>ge(G,"state",_e)),{c(){e=A("h1"),t=W(Ve),s=z(),l=A("p"),c=W(`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),o=z(),u=A("p"),le(p.$$.fragment),v=z(),T=A("small"),D=W("Selected: [ "),S=W(d),y=W(" ]"),h=z(),B=A("br"),j=z(),H=A("small"),U=W("Created: [ "),k=W(i),m=W(" ]"),w=z(),R=A("p"),le(G.$$.fragment),Y=z(),F=A("pre"),this.h()},l(a){e=O(a,"H1",{});var g=N(e);t=X(g,Ve),g.forEach(_),s=K(a),l=O(a,"P",{});var L=N(l);c=X(L,`Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.`),L.forEach(_),o=K(a),u=O(a,"P",{});var P=N(u);oe(p.$$.fragment,P),v=K(P),T=O(P,"SMALL",{});var se=N(T);D=X(se,"Selected: [ "),S=X(se,d),y=X(se," ]"),se.forEach(_),h=K(P),B=O(P,"BR",{}),j=K(P),H=O(P,"SMALL",{});var ae=N(H);U=X(ae,"Created: [ "),k=X(ae,i),m=X(ae," ]"),ae.forEach(_),P.forEach(_),w=K(a),R=O(a,"P",{});var ye=N(R);oe(G.$$.fragment,ye),ye.forEach(_),Y=K(a),F=O(a,"PRE",{class:!0});var Qe=N(F);Qe.forEach(_),this.h()},h(){b(F,"class","language-sv")},m(a,g){E(a,e,g),I(e,t),E(a,s,g),E(a,l,g),I(l,c),E(a,o,g),E(a,u,g),ce(p,u,null),I(u,v),I(u,T),I(T,D),I(T,S),I(T,y),I(u,h),I(u,B),I(u,j),I(u,H),I(H,U),I(H,k),I(H,m),E(a,w,g),E(a,R,g),ce(G,R,null),E(a,Y,g),E(a,F,g),F.innerHTML=ie,J=!0},p(a,[g]){const L={};g&8&&(L.predefined=a[3]),g&1&&(L.placeholder=a[0].placeholder),g&1&&(L.creatable=a[0].creatable),g&1&&(L.predictable=a[0].predictable),g&1&&(L.empty=a[0].empty),!r&&g&2&&(r=!0,L.selected=a[1],he(()=>r=!1)),!f&&g&4&&(f=!0,L.created=a[2],he(()=>f=!1)),p.$set(L),(!J||g&2)&&d!==(d=a[1].map(Ge).join(", ")+"")&&be(S,d),(!J||g&4)&&i!==(i=a[2].map(Ue).join(", ")+"")&&be(k,i);const P={};!ee&&g&1&&(ee=!0,P.state=a[0],he(()=>ee=!1)),G.$set(P)},i(a){J||(C(p.$$.fragment,a),C(G.$$.fragment,a),J=!0)},o(a){M(p.$$.fragment,a),M(G.$$.fragment,a),J=!1},d(a){a&&_(e),a&&_(s),a&&_(l),a&&_(o),a&&_(u),pe(p),a&&_(w),a&&_(R),pe(G),a&&_(Y),a&&_(F)}}}const It={file:"autocomplete.md",title:"Autocomplete",api:[{title:"predefined: string | Item = []",description:"Predefined values array input",variables:"type Item = { index: number; label: string; value?: any; group?: string; type?: Color; style?: string; }"},{title:"selected: Item[] = []",description:"Selected values array output",variables:"[]"},{title:"created: Item[] = []",description:"Created values array output",variables:"[]"},{title:"groupBy: (item: Item) => item = undefined",description:"Groupping condition \u2013 returns headers strings",variables:"groups headers"},{title:"predictable: boolean = false",description:"Open suggested values list only on search match",variables:"true | false"},{title:"creatable: boolean = false",description:"Can add to suggested list new values",variables:"true | false"},{title:'placeholder: string = "type here"',description:"Placeholder",variables:"any string"},{title:'empty: string = "No suggested"',description:"No suggested message",variables:"any string"}],config:{placeholder:{size:12},empty:{size:12},predictable:{type:"checkbox"},creatable:{type:"checkbox"},objects:{type:"checkbox"},groups:{size:"auto"}}},{file:Rt,title:Ve,api:Vt,config:Bt}=It,Ge=n=>n.label,Ue=n=>n.label;function At(n,e,t){let s,l=[{label:"{ top_left }",value:"top_left",group:"top"},{label:"{ top_center }",value:"top_center",group:"top"},{label:"{ top_right }",value:"top_right",group:"top"},{label:"{ center_left }",value:"center_left",group:"center"},{label:"{ center_center }",value:"center_center",group:"center"},{label:"{ center_right }",value:"center_right",group:"center"},{label:"{ bottom_left }",value:"bottom_left",group:"bottom"},{label:"{ bottom_center }",value:"bottom_center",group:"bottom"},{label:"{ bottom_right }",value:"bottom_right",group:"bottom"}],c=["\u2196 top_left","\u2191 top_center","\u2197 top_right","\u2190 center_left","\u271B center_center","\u2192 center_right","\u2199 bottom_left","\u2193 bottom_center","\u2198 bottom_right"],o={placeholder:"type here",empty:"No suggested",predictable:!1,creatable:!1,groups:"top_, center_, bottom_",objects:!1},u=[{label:"\u2198 bottom_right"}],p=[];const r=D=>o.groups.split(", ").find(d=>D.value.includes(d));function f(D){u=D,t(1,u)}function v(D){p=D,t(2,p)}function T(D){o=D,t(0,o)}return n.$$.update=()=>{n.$$.dirty&1&&t(3,s=o.objects?l:c)},[o,u,p,s,r,f,v,T]}class Gt extends qe{constructor(e){super();Fe(this,e,At,Dt,We,{})}}export{Gt as default,It as metadata};