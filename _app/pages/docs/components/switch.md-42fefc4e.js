import{S as D,i as J,s as N,a2 as O,a3 as Q,e as g,t as H,k as h,w as S,c as d,a as w,h as K,d as o,m as b,x as y,b as U,g as f,I as M,y as E,a4 as W,q as C,o as P,B as j}from"../../../chunks/index-da373a61.js";/* empty css                                                            */import{S as R}from"../../../chunks/Switch-851b5591.js";import{F as X,G as Y}from"../../../chunks/Group-1704fce1.js";import{K as Z}from"../../../chunks/_knobs-c9843754.js";import"../../../chunks/uuid-770ab681.js";import"../../../chunks/Col-e8f8ed06.js";import"../../../chunks/_media-edb24bbd.js";import"../../../chunks/index-774eb2e3.js";function x(i){let a;return{c(){a=H("Switch")},l(e){a=K(e,"Switch")},m(e,n){f(e,a,n)},d(e){e&&o(a)}}}function ss(i){let a;return{c(){a=H("Switch")},l(e){a=K(e,"Switch")},m(e,n){f(e,a,n)},d(e){e&&o(a)}}}function as(i){let a,e,n,l;return a=new R({props:{inline:i[0].inline,validity:i[0].validity,$$slots:{default:[x]},$$scope:{ctx:i}}}),n=new R({props:{inline:i[0].inline,validity:i[0].validity,$$slots:{default:[ss]},$$scope:{ctx:i}}}),{c(){S(a.$$.fragment),e=h(),S(n.$$.fragment)},l(t){y(a.$$.fragment,t),e=b(t),y(n.$$.fragment,t)},m(t,p){E(a,t,p),f(t,e,p),E(n,t,p),l=!0},p(t,p){const u={};p&1&&(u.inline=t[0].inline),p&1&&(u.validity=t[0].validity),p&4&&(u.$$scope={dirty:p,ctx:t}),a.$set(u);const r={};p&1&&(r.inline=t[0].inline),p&1&&(r.validity=t[0].validity),p&4&&(r.$$scope={dirty:p,ctx:t}),n.$set(r)},i(t){l||(C(a.$$.fragment,t),C(n.$$.fragment,t),l=!0)},o(t){P(a.$$.fragment,t),P(n.$$.fragment,t),l=!1},d(t){j(a,t),t&&o(e),j(n,t)}}}function ns(i){let a,e;return a=new Y({props:{$$slots:{default:[as]},$$scope:{ctx:i}}}),{c(){S(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,l){E(a,n,l),e=!0},p(n,l){const t={};l&5&&(t.$$scope={dirty:l,ctx:n}),a.$set(t)},i(n){e||(C(a.$$.fragment,n),e=!0)},o(n){P(a.$$.fragment,n),e=!1},d(n){j(a,n)}}}function ts(i){let a,e,n,l,t,p,u,r,q,k,$,B,F,m,V=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Switch <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token boolean">false</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span> <span class="token attr-name">inline</span> <span class="token attr-name">validity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">null</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>Switch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Switch</span><span class="token punctuation">></span></span></code>`,G;r=new X({props:{$$slots:{default:[ns]},$$scope:{ctx:i}}});function z(s){i[1](s)}let I={config:ls};return i[0]!==void 0&&(I.state=i[0]),$=new Z({props:I}),O.push(()=>Q($,"state",z)),{c(){a=g("h1"),e=H(T),n=h(),l=g("p"),t=H("Switch component."),p=h(),u=g("p"),S(r.$$.fragment),q=h(),k=g("p"),S($.$$.fragment),F=h(),m=g("pre"),this.h()},l(s){a=d(s,"H1",{});var c=w(a);e=K(c,T),c.forEach(o),n=b(s),l=d(s,"P",{});var _=w(l);t=K(_,"Switch component."),_.forEach(o),p=b(s),u=d(s,"P",{});var v=w(u);y(r.$$.fragment,v),v.forEach(o),q=b(s),k=d(s,"P",{});var L=w(k);y($.$$.fragment,L),L.forEach(o),F=b(s),m=d(s,"PRE",{class:!0});var A=w(m);A.forEach(o),this.h()},h(){U(m,"class","language-sv")},m(s,c){f(s,a,c),M(a,e),f(s,n,c),f(s,l,c),M(l,t),f(s,p,c),f(s,u,c),E(r,u,null),f(s,q,c),f(s,k,c),E($,k,null),f(s,F,c),f(s,m,c),m.innerHTML=V,G=!0},p(s,[c]){const _={};c&5&&(_.$$scope={dirty:c,ctx:s}),r.$set(_);const v={};!B&&c&1&&(B=!0,v.state=s[0],W(()=>B=!1)),$.$set(v)},i(s){G||(C(r.$$.fragment,s),C($.$$.fragment,s),G=!0)},o(s){P(r.$$.fragment,s),P($.$$.fragment,s),G=!1},d(s){s&&o(a),s&&o(n),s&&o(l),s&&o(p),s&&o(u),j(r),s&&o(q),s&&o(k),j($),s&&o(F),s&&o(m)}}}const es={file:"switch.md",title:"Switch",api:[{title:"value: boolean = false",description:"Checkbox value",variables:"true | false"},{title:"inline: boolean = false",description:"Checkbox inline",variables:"true | false"},{title:"validity: Validity = null",description:"Checkbox validity",variables:"null | success | error"}],config:{inline:{type:"checkbox"},validity:{options:[null,"success","error"]}}},{file:_s,title:T,api:vs,config:ls}=es;function is(i,a,e){let n={inline:!1,validity:null};function l(t){n=t,e(0,n)}return[n,l]}class gs extends D{constructor(a){super();J(this,a,is,ts,N,{})}}export{gs as default,es as metadata};
