import{S as B,i as I,s as q,C as r,w as b,x as h,y as z,z as C,A as j,q as u,o as f,B as S,M as d,$ as v,O as A,a8 as p,_ as M,W as O,X as P,Y as W}from"./index-da373a61.js";import{I as X}from"./Icon-1f6ad2bb.js";import{B as Y}from"./Button-a35aa2d9.js";function D(s){let t;const l=s[5].default,e=M(l,s,s[8],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){e&&e.p&&(!t||o&256)&&O(e,l,n,n[8],t?W(l,n[8],o,null):P(n[8]),null)},i(n){t||(u(e,n),t=!0)},o(n){f(e,n),t=!1},d(n){e&&e.d(n)}}}function E(s){let t,l;return t=new X({props:{icon:s[0],color:s[2],size:s[1],svg:s[4].default,$$slots:{default:[D]},$$scope:{ctx:s}}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){z(t,e,n),l=!0},p(e,n){const o={};n&1&&(o.icon=e[0]),n&4&&(o.color=e[2]),n&2&&(o.size=e[1]),n&16&&(o.svg=e[4].default),n&256&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){l||(u(t.$$.fragment,e),l=!0)},o(e){f(t.$$.fragment,e),l=!1},d(e){S(t,e)}}}function F(s){let t,l;const e=[{shape:"square"},{variant:"link"},s[3]];let n={$$slots:{default:[E]},$$scope:{ctx:s}};for(let o=0;o<e.length;o+=1)n=r(n,e[o]);return t=new Y({props:n}),t.$on("click",s[6]),t.$on("dblclick",s[7]),{c(){b(t.$$.fragment)},l(o){h(t.$$.fragment,o)},m(o,c){z(t,o,c),l=!0},p(o,[c]){const i=c&8?C(e,[e[0],e[1],j(o[3])]):{};c&279&&(i.$$scope={dirty:c,ctx:o}),t.$set(i)},i(o){l||(u(t.$$.fragment,o),l=!0)},o(o){f(t.$$.fragment,o),l=!1},d(o){S(t,o)}}}function G(s,t,l){const e=["icon","iconSize","color"];let n=d(t,e),{$$slots:o={},$$scope:c}=t;const i=v(o);let{icon:_}=t,{iconSize:m="1x"}=t,{color:g=""}=t;function k(a){p.call(this,s,a)}function $(a){p.call(this,s,a)}return s.$$set=a=>{t=r(r({},t),A(a)),l(3,n=d(t,e)),"icon"in a&&l(0,_=a.icon),"iconSize"in a&&l(1,m=a.iconSize),"color"in a&&l(2,g=a.color),"$$scope"in a&&l(8,c=a.$$scope)},[_,m,g,n,i,o,k,$,c]}class L extends B{constructor(t){super();I(this,t,G,F,q,{icon:0,iconSize:1,color:2})}}export{L as I};
