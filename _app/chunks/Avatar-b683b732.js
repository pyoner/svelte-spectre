import{S as Q,i as V,s as w,_ as G,e as C,c as j,a as I,d as m,b as B,f as E,W as L,X as P,Y as T,x as p,u as M,B as H,k as N,n as R,D as U,E as Z,F as q,ac as x,r as D,w as J,p as $,a7 as ee,J as O,$ as te,L as se,an as ae,t as le,g as ie,h as ne,T as W}from"./vendor-996752fe.js";/* empty css                                              */import{a as oe}from"./action-63149ef0.js";function fe(s){const e=256,t=256,i=256;let a=s.charCodeAt(0)^s.charCodeAt(1);const o=Math.abs(Math.sin(a++)*1e4)%256,f=Math.abs(Math.sin(a++)*1e4)%256,r=Math.abs(Math.sin(a++)*1e4)%256,d=Math.round((o+e)/2),g=Math.round((f+t)/2),_=Math.round((r+i)/2);return`rgb(${[d,g,_].join(",")})`}const ue={xs:16,sm:24,md:32,lg:40,xl:48,xxl:64},re=s=>({}),X=s=>({}),ce=s=>({}),Y=s=>({});function _e(s){let e,t;const i=s[17].sub,a=G(i,s,s[16],Y);return{c(){e=C("span"),a&&a.c(),this.h()},l(o){e=j(o,"SPAN",{class:!0});var f=I(e);a&&a.l(f),f.forEach(m),this.h()},h(){B(e,"class","avatar-icon svelte-1m4p47z")},m(o,f){E(o,e,f),a&&a.m(e,null),t=!0},p(o,f){a&&a.p&&(!t||f&65536)&&L(a,i,o,o[16],t?T(i,o[16],f,ce):P(o[16]),Y)},i(o){t||(p(a,o),t=!0)},o(o){M(a,o),t=!1},d(o){o&&m(e),a&&a.d(o)}}}function ge(s){let e,t;return{c(){e=C("i"),this.h()},l(i){e=j(i,"I",{class:!0}),I(e).forEach(m),this.h()},h(){B(e,"class",t="avatar-presence "+s[4]+" svelte-1m4p47z")},m(i,a){E(i,e,a)},p(i,a){a&16&&t!==(t="avatar-presence "+i[4]+" svelte-1m4p47z")&&B(e,"class",t)},i:W,o:W,d(i){i&&m(e)}}}function K(s){let e,t;const i=s[17].caption,a=G(i,s,s[16],X),o=a||he(s);return{c(){e=C("figcaption"),o&&o.c(),this.h()},l(f){e=j(f,"FIGCAPTION",{class:!0});var r=I(e);o&&o.l(r),r.forEach(m),this.h()},h(){B(e,"class","text-dark svelte-1m4p47z")},m(f,r){E(f,e,r),o&&o.m(e,null),t=!0},p(f,r){a?a.p&&(!t||r&65536)&&L(a,i,f,f[16],t?T(i,f[16],r,re):P(f[16]),X):o&&o.p&&(!t||r&1)&&o.p(f,t?r:-1)},i(f){t||(p(o,f),t=!0)},o(f){M(o,f),t=!1},d(f){f&&m(e),o&&o.d(f)}}}function he(s){let e;return{c(){e=le(s[0])},l(t){e=ie(t,s[0])},m(t,i){E(t,e,i)},p(t,i){i&1&&ne(e,t[0])},d(t){t&&m(e)}}}function me(s){let e,t,i,a,o,f,r,d,g,_,k,S;const z=s[17].default,c=G(z,s,s[16],null),y=[ge,_e],h=[];function A(n,l){return n[4]?0:n[10].sub?1:-1}~(i=A(s))&&(a=h[i]=y[i](s));let u=(s[1]||s[10].caption)&&K(s),b=[s[9],{class:f="avatar avatar-"+s[2]+" text-"+s[3]},{"data-initial":r=`${s[7]}`},{style:d="background-color: "+s[8].toHexString()+"; font-size: "+s[6]+"px; color: "+(s[8].isLight()?"#000":"#fff")+""}],v={};for(let n=0;n<b.length;n+=1)v=H(v,b[n]);return{c(){e=C("figure"),c&&c.c(),t=N(),a&&a.c(),o=N(),u&&u.c(),this.h()},l(n){e=j(n,"FIGURE",{class:!0,"data-initial":!0,style:!0});var l=I(e);c&&c.l(l),t=R(l),a&&a.l(l),o=R(l),u&&u.l(l),l.forEach(m),this.h()},h(){U(e,v),Z(e,"svelte-1m4p47z",!0)},m(n,l){E(n,e,l),c&&c.m(e,null),q(e,t),~i&&h[i].m(e,null),q(e,o),u&&u.m(e,null),_=!0,k||(S=x(g=oe.call(null,e,s[5])),k=!0)},p(n,[l]){c&&c.p&&(!_||l&65536)&&L(c,z,n,n[16],_?T(z,n[16],l,null):P(n[16]),null);let F=i;i=A(n),i===F?~i&&h[i].p(n,l):(a&&(D(),M(h[F],1,1,()=>{h[F]=null}),J()),~i?(a=h[i],a?a.p(n,l):(a=h[i]=y[i](n),a.c()),p(a,1),a.m(e,o)):a=null),n[1]||n[10].caption?u?(u.p(n,l),l&1026&&p(u,1)):(u=K(n),u.c(),p(u,1),u.m(e,null)):u&&(D(),M(u,1,1,()=>{u=null}),J()),U(e,v=$(b,[l&512&&n[9],(!_||l&12&&f!==(f="avatar avatar-"+n[2]+" text-"+n[3]))&&{class:f},(!_||l&128&&r!==(r=`${n[7]}`))&&{"data-initial":r},(!_||l&320&&d!==(d="background-color: "+n[8].toHexString()+"; font-size: "+n[6]+"px; color: "+(n[8].isLight()?"#000":"#fff")+""))&&{style:d}])),g&&ee(g.update)&&l&32&&g.update.call(null,n[5]),Z(e,"svelte-1m4p47z",!0)},i(n){_||(p(c,n),p(a),p(u),_=!0)},o(n){M(c,n),M(a),M(u),_=!1},d(n){n&&m(e),c&&c.d(n),~i&&h[i].d(),u&&u.d(),k=!1,S()}}}function de(s,e,t){let i;const a=["name","bg","len","caption","custom","size","weight","status","badge"];let o=O(e,a),{$$slots:f={},$$scope:r}=e;const d=te(f);let{name:g=""}=e,{bg:_=""}=e,{len:k=0}=e,{caption:S=!1}=e,{custom:z=!1}=e,{size:c="md"}=e,{weight:y="normal"}=e,{status:h=null}=e,{badge:A=""}=e,u,b,v,n;return s.$$set=l=>{e=H(H({},e),se(l)),t(9,o=O(e,a)),"name"in l&&t(0,g=l.name),"bg"in l&&t(11,_=l.bg),"len"in l&&t(12,k=l.len),"caption"in l&&t(1,S=l.caption),"custom"in l&&t(13,z=l.custom),"size"in l&&t(2,c=l.size),"weight"in l&&t(3,y=l.weight),"status"in l&&t(4,h=l.status),"badge"in l&&t(5,A=l.badge),"$$scope"in l&&t(16,r=l.$$scope)},s.$$.update=()=>{s.$$.dirty&2049&&t(8,i=new ae(_||fe(g))),s.$$.dirty&1&&t(14,u=g.length&&g.replace(".","/").match(/\b(\w)|([A-Z])|(\/)/g)),s.$$.dirty&20480&&t(15,b=k||u.length),s.$$.dirty&32772&&t(6,v=ue[c]*(1/b)),s.$$.dirty&57345&&t(7,n=z?g:u.length&&u.slice(0,b).join("").toUpperCase())},[g,S,c,y,h,A,v,n,i,o,d,_,k,z,u,b,r,f]}class ze extends Q{constructor(e){super();V(this,e,de,me,w,{name:0,bg:11,len:12,caption:1,custom:13,size:2,weight:3,status:4,badge:5})}}export{ze as A};
