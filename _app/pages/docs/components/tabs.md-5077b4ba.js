import{S as Gs,i as Ns,s as Ks,e as y,k as P,c as w,a as E,m as A,d as i,b as D,H as J,g as m,I,a9 as js,q as $,w as M,x as S,y as Y,o as d,B as q,n as us,p as fs,t as H,h as L,j as Fs,F as st,a6 as tt,W as at,X as nt,Y as et,C as vs,G as Cs,z as lt,L as pt,M as Hs,$ as ot,O as ct,_ as it,a2 as Vs,a3 as rt,a4 as ut,N as ft,v as kt,l as Ls,E as Ts}from"../../../chunks/index-da373a61.js";import{c as K}from"../../../chunks/singletons-d1fb5791.js";import{p as mt}from"../../../chunks/stores-3c7a3d5c.js";import{b as bt}from"../../../chunks/paths-396f020f.js";/* empty css                                                            */import{a as _t}from"../../../chunks/action-63149ef0.js";import{B as gt}from"../../../chunks/Button-a35aa2d9.js";import{I as $t}from"../../../chunks/Icon-1f6ad2bb.js";import{G as Ds,C as ks}from"../../../chunks/Col-e8f8ed06.js";import{K as ht}from"../../../chunks/_knobs-c9843754.js";import"../../../chunks/_media-edb24bbd.js";import"../../../chunks/index-774eb2e3.js";const dt=p=>({}),Ms=p=>({});function Ss(p,s,n){const t=p.slice();return t[11]=s[n],t[12]=s,t[13]=n,t}function Ys(p){let s,n;return s=new $t({props:{icon:p[11].icon}}),{c(){M(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){Y(s,t,l),n=!0},p(t,l){const a={};l&2&&(a.icon=t[11].icon),s.$set(a)},i(t){n||($(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){q(s,t)}}}function qs(p){let s=p[11].title+"",n;return{c(){n=H(s)},l(t){n=L(t,s)},m(t,l){m(t,n,l)},p(t,l){l&2&&s!==(s=t[11].title+"")&&Fs(n,s)},d(t){t&&i(n)}}}function zs(p){let s,n;return s=new gt({props:{variant:"clear"}}),{c(){M(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){Y(s,t,l),n=!0},i(t){n||($(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){q(s,t)}}}function Os(p){let s,n,t,l,a,o,r,b=p[13],v,u,f,c=p[11].icon&&Ys(p),g=p[11].title&&qs(p),_=p[11].clear&&zs();const T=()=>p[9](s,b),j=()=>p[9](null,b);return{c(){s=y("li"),n=y("a"),c&&c.c(),t=P(),g&&g.c(),l=P(),_&&_.c(),this.h()},l(h){s=w(h,"LI",{class:!0,tabindex:!0});var B=E(s);n=w(B,"A",{href:!0,class:!0});var C=E(n);c&&c.l(C),t=A(C),g&&g.l(C),l=A(C),_&&_.l(C),C.forEach(i),B.forEach(i),this.h()},h(){var h,B;D(n,"href",a=p[11].path),D(n,"class","svelte-1vfmrx3"),D(s,"class","tab-item svelte-1vfmrx3"),D(s,"tabindex","0"),J(s,"active",p[0]===p[13]||((B=(h=p[11])==null?void 0:h.path)==null?void 0:B.includes(`${p[0]}`)))},m(h,B){m(h,s,B),I(s,n),c&&c.m(n,null),I(n,t),g&&g.m(n,null),I(n,l),_&&_.m(n,null),T(),v=!0,u||(f=[js(o=_t.call(null,n,p[11].badge)),js(r=p[4].call(null,s,p[13]))],u=!0)},p(h,B){var C,O;p=h,p[11].icon?c?(c.p(p,B),B&2&&$(c,1)):(c=Ys(p),c.c(),$(c,1),c.m(n,t)):c&&(us(),d(c,1,1,()=>{c=null}),fs()),p[11].title?g?g.p(p,B):(g=qs(p),g.c(),g.m(n,l)):g&&(g.d(1),g=null),p[11].clear?_?B&2&&$(_,1):(_=zs(),_.c(),$(_,1),_.m(n,null)):_&&(us(),d(_,1,1,()=>{_=null}),fs()),(!v||B&2&&a!==(a=p[11].path))&&D(n,"href",a),o&&st(o.update)&&B&2&&o.update.call(null,p[11].badge),b!==p[13]&&(j(),b=p[13],T()),B&3&&J(s,"active",p[0]===p[13]||((O=(C=p[11])==null?void 0:C.path)==null?void 0:O.includes(`${p[0]}`)))},i(h){v||($(c),$(_),v=!0)},o(h){d(c),d(_),v=!1},d(h){h&&i(s),c&&c.d(),g&&g.d(),_&&_.d(),j(),u=!1,tt(f)}}}function Rs(p){let s,n;const t=p[8].action,l=it(t,p,p[7],Ms);return{c(){s=y("li"),l&&l.c(),this.h()},l(a){s=w(a,"LI",{class:!0});var o=E(s);l&&l.l(o),o.forEach(i),this.h()},h(){D(s,"class","tab-item tab-action svelte-1vfmrx3")},m(a,o){m(a,s,o),l&&l.m(s,null),n=!0},p(a,o){l&&l.p&&(!n||o&128)&&at(l,t,a,a[7],n?et(t,a[7],o,dt):nt(a[7]),Ms)},i(a){n||($(l,a),n=!0)},o(a){d(l,a),n=!1},d(a){a&&i(s),l&&l.d(a)}}}function vt(p){let s,n,t,l=p[1],a=[];for(let u=0;u<l.length;u+=1)a[u]=Os(Ss(p,l,u));const o=u=>d(a[u],1,1,()=>{a[u]=null});let r=p[6].action&&Rs(p),b=[p[5],{class:"tab"}],v={};for(let u=0;u<b.length;u+=1)v=vs(v,b[u]);return{c(){s=y("ul");for(let u=0;u<a.length;u+=1)a[u].c();n=P(),r&&r.c(),this.h()},l(u){s=w(u,"UL",{class:!0});var f=E(s);for(let c=0;c<a.length;c+=1)a[c].l(f);n=A(f),r&&r.l(f),f.forEach(i),this.h()},h(){Cs(s,v),J(s,"tab-block",p[2]),J(s,"svelte-1vfmrx3",!0)},m(u,f){m(u,s,f);for(let c=0;c<a.length;c+=1)a[c].m(s,null);I(s,n),r&&r.m(s,null),t=!0},p(u,[f]){if(f&11){l=u[1];let c;for(c=0;c<l.length;c+=1){const g=Ss(u,l,c);a[c]?(a[c].p(g,f),$(a[c],1)):(a[c]=Os(g),a[c].c(),$(a[c],1),a[c].m(s,n))}for(us(),c=l.length;c<a.length;c+=1)o(c);fs()}u[6].action?r?(r.p(u,f),f&64&&$(r,1)):(r=Rs(u),r.c(),$(r,1),r.m(s,null)):r&&(us(),d(r,1,1,()=>{r=null}),fs()),Cs(s,v=lt(b,[f&32&&u[5],{class:"tab"}])),J(s,"tab-block",u[2]),J(s,"svelte-1vfmrx3",!0)},i(u){if(!t){for(let f=0;f<l.length;f+=1)$(a[f]);$(r),t=!0}},o(u){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)d(a[f]);d(r),t=!1},d(u){u&&i(s),pt(a,u),r&&r.d()}}}function Tt(p,s,n){const t=["items","active","block"];let l=Hs(s,t),{$$slots:a={},$$scope:o}=s;const r=ot(a);let{items:b=[]}=s,{active:v=0}=s,{block:u=!1}=s,f=v,c=[];function g(T,j){T.onkeydown=h=>{switch(h.key){case"Tab":h.preventDefault(),f=f<b.length-1?f+1:0,c[f].focus();break;case" ":case"Enter":h.preventDefault(),c[j].firstChild.click(),typeof v=="number"&&n(0,v=j),f=j;break;case"Escape":h.preventDefault(),c[f].blur();break}},T.onclick=h=>{typeof v=="number"&&n(0,v=j),f=j,c[f].focus()}}function _(T,j){Vs[T?"unshift":"push"](()=>{c[j]=T,n(3,c)})}return p.$$set=T=>{s=vs(vs({},s),ct(T)),n(5,l=Hs(s,t)),"items"in T&&n(1,b=T.items),"active"in T&&n(0,v=T.active),"block"in T&&n(2,u=T.block),"$$scope"in T&&n(7,o=T.$$scope)},[v,b,u,c,g,l,r,o,a,_]}class ns extends Gs{constructor(s){super();Ns(this,s,Tt,vt,Ks,{items:1,active:0,block:2})}}K.disable_scroll_handling;const yt=K.goto;K.invalidate;K.prefetch;K.prefetch_routes;K.before_navigate;K.after_navigate;function wt(p){let s,n,t=p[2].url.searchParams+"",l,a;return s=new ns({props:{active:p[2].url.searchParams,items:p[1],block:p[0].block}}),{c(){M(s.$$.fragment),n=H(`
            active: `),l=H(t)},l(o){S(s.$$.fragment,o),n=L(o,`
            active: `),l=L(o,t)},m(o,r){Y(s,o,r),m(o,n,r),m(o,l,r),a=!0},p(o,r){const b={};r&4&&(b.active=o[2].url.searchParams),r&2&&(b.items=o[1]),r&1&&(b.block=o[0].block),s.$set(b),(!a||r&4)&&t!==(t=o[2].url.searchParams+"")&&Fs(l,t)},i(o){a||($(s.$$.fragment,o),a=!0)},o(o){d(s.$$.fragment,o),a=!1},d(o){q(s,o),o&&i(n),o&&i(l)}}}function Et(p){let s,n,t=wt(p);return{c(){t&&t.c(),s=Ls()},l(l){t&&t.l(l),s=Ls()},m(l,a){t&&t.m(l,a),m(l,s,a),n=!0},p(l,a){t.p(l,a)},i(l){n||($(t),n=!0)},o(l){d(t),n=!1},d(l){t&&t.d(l),l&&i(s)}}}function It(p){let s,n;return s=new ns({props:{items:p[3],block:!0}}),{c(){M(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){Y(s,t,l),n=!0},p:Ts,i(t){n||($(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){q(s,t)}}}function Pt(p){let s,n,t,l;return s=new ks({props:{xs:"12",$$slots:{default:[Et]},$$scope:{ctx:p}}}),t=new ks({props:{xs:"12",$$slots:{default:[It]},$$scope:{ctx:p}}}),{c(){M(s.$$.fragment),n=P(),M(t.$$.fragment)},l(a){S(s.$$.fragment,a),n=A(a),S(t.$$.fragment,a)},m(a,o){Y(s,a,o),m(a,n,o),Y(t,a,o),l=!0},p(a,o){const r={};o&71&&(r.$$scope={dirty:o,ctx:a}),s.$set(r);const b={};o&64&&(b.$$scope={dirty:o,ctx:a}),t.$set(b)},i(a){l||($(s.$$.fragment,a),$(t.$$.fragment,a),l=!0)},o(a){d(s.$$.fragment,a),d(t.$$.fragment,a),l=!1},d(a){q(s,a),a&&i(n),q(t,a)}}}function At(p){let s,n;return s=new ns({props:{items:p[3]}}),{c(){M(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){Y(s,t,l),n=!0},p:Ts,i(t){n||($(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){q(s,t)}}}function Bt(p){let s,n;return s=new ns({props:{items:p[3],block:!0}}),{c(){M(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){Y(s,t,l),n=!0},p:Ts,i(t){n||($(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){q(s,t)}}}function jt(p){let s,n,t,l;return s=new ks({props:{xs:"12",$$slots:{default:[At]},$$scope:{ctx:p}}}),t=new ks({props:{xs:"12",$$slots:{default:[Bt]},$$scope:{ctx:p}}}),{c(){M(s.$$.fragment),n=P(),M(t.$$.fragment)},l(a){S(s.$$.fragment,a),n=A(a),S(t.$$.fragment,a)},m(a,o){Y(s,a,o),m(a,n,o),Y(t,a,o),l=!0},p(a,o){const r={};o&64&&(r.$$scope={dirty:o,ctx:a}),s.$set(r);const b={};o&64&&(b.$$scope={dirty:o,ctx:a}),t.$set(b)},i(a){l||($(s.$$.fragment,a),$(t.$$.fragment,a),l=!0)},o(a){d(s.$$.fragment,a),d(t.$$.fragment,a),l=!1},d(a){q(s,a),a&&i(n),q(t,a)}}}function Ct(p){let s,n,t,l,a;return{c(){s=y("div"),n=y("input"),t=P(),l=y("button"),a=H("Search"),this.h()},l(o){s=w(o,"DIV",{slot:!0,class:!0});var r=E(s);n=w(r,"INPUT",{class:!0,type:!0}),t=A(r),l=w(r,"BUTTON",{class:!0});var b=E(l);a=L(b,"Search"),b.forEach(i),r.forEach(i),this.h()},h(){D(n,"class","form-input input-sm"),D(n,"type","text"),D(l,"class","btn btn-primary btn-sm input-group-btn"),D(s,"slot","action"),D(s,"class","input-group input-inline")},m(o,r){m(o,s,r),I(s,n),I(s,t),I(s,l),I(l,a)},d(o){o&&i(s)}}}function Ht(p){let s,n,t,l,a,o,r,b,v,u,f,c,g,_,T,j,h,B=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span> <span class="token literal-property property">clear</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#1'</span><span class="token punctuation">,</span> <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token string">'0'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab3'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#2'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span></code>`,C,O,ms,es,F,R,ls,G,Ws=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Tabs <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab1'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span> <span class="token literal-property property">clear</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab2'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#1'</span><span class="token punctuation">,</span> <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token string">'0'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#123;</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tab3'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'#2'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span></code>`,ps,V,bs,os,z,_s,Q,gs,$s,Z,hs,ds,cs,W,U,is,N,Xs=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>items<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>action<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>input-group input-inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-input input-sm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary btn-sm input-group-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span></code>`,rs;f=new Ds({props:{stack:!0,$$slots:{default:[Pt]},$$scope:{ctx:p}}});function Js(e){p[4](e)}let ys={config:Dt};return p[0]!==void 0&&(ys.state=p[0]),_=new ht({props:ys}),Vs.push(()=>rt(_,"state",Js)),R=new Ds({props:{stack:!0,$$slots:{default:[jt]},$$scope:{ctx:p}}}),U=new ns({props:{items:p[3],block:!0,$$slots:{action:[Ct]},$$scope:{ctx:p}}}),{c(){s=y("h1"),n=H(Us),t=P(),l=y("p"),a=H("Tabs enable quick switch between different views."),o=P(),r=y("p"),b=H(`Add a container element with the tab class. And add child elements with the
tab-item class. You can add the tab-block class for a full-width tab. The
tab-item or its child with the active class will be highlighted.`),v=P(),u=y("p"),M(f.$$.fragment),c=P(),g=y("p"),M(_.$$.fragment),j=P(),h=y("pre"),C=P(),O=y("h2"),ms=H("Badge"),es=P(),F=y("p"),M(R.$$.fragment),ls=P(),G=y("pre"),ps=P(),V=y("h2"),bs=H("Action"),os=P(),z=y("p"),_s=H("You could add a search box or buttons inside a tab. Add the "),Q=y("code"),gs=H("tab-action"),$s=H(` class
to the `),Z=y("code"),hs=H("tab-item"),ds=H("."),cs=P(),W=y("p"),M(U.$$.fragment),is=P(),N=y("pre"),this.h()},l(e){s=w(e,"H1",{});var k=E(s);n=L(k,Us),k.forEach(i),t=A(e),l=w(e,"P",{});var x=E(l);a=L(x,"Tabs enable quick switch between different views."),x.forEach(i),o=A(e),r=w(e,"P",{});var ss=E(r);b=L(ss,`Add a container element with the tab class. And add child elements with the
tab-item class. You can add the tab-block class for a full-width tab. The
tab-item or its child with the active class will be highlighted.`),ss.forEach(i),v=A(e),u=w(e,"P",{});var ts=E(u);S(f.$$.fragment,ts),ts.forEach(i),c=A(e),g=w(e,"P",{});var as=E(g);S(_.$$.fragment,as),as.forEach(i),j=A(e),h=w(e,"PRE",{class:!0});var Qs=E(h);Qs.forEach(i),C=A(e),O=w(e,"H2",{});var ws=E(O);ms=L(ws,"Badge"),ws.forEach(i),es=A(e),F=w(e,"P",{});var Es=E(F);S(R.$$.fragment,Es),Es.forEach(i),ls=A(e),G=w(e,"PRE",{class:!0});var Zs=E(G);Zs.forEach(i),ps=A(e),V=w(e,"H2",{});var Is=E(V);bs=L(Is,"Action"),Is.forEach(i),os=A(e),z=w(e,"P",{});var X=E(z);_s=L(X,"You could add a search box or buttons inside a tab. Add the "),Q=w(X,"CODE",{});var Ps=E(Q);gs=L(Ps,"tab-action"),Ps.forEach(i),$s=L(X,` class
to the `),Z=w(X,"CODE",{});var As=E(Z);hs=L(As,"tab-item"),As.forEach(i),ds=L(X,"."),X.forEach(i),cs=A(e),W=w(e,"P",{});var Bs=E(W);S(U.$$.fragment,Bs),Bs.forEach(i),is=A(e),N=w(e,"PRE",{class:!0});var xs=E(N);xs.forEach(i),this.h()},h(){D(h,"class","language-sv"),D(G,"class","language-sv"),D(N,"class","language-sv")},m(e,k){m(e,s,k),I(s,n),m(e,t,k),m(e,l,k),I(l,a),m(e,o,k),m(e,r,k),I(r,b),m(e,v,k),m(e,u,k),Y(f,u,null),m(e,c,k),m(e,g,k),Y(_,g,null),m(e,j,k),m(e,h,k),h.innerHTML=B,m(e,C,k),m(e,O,k),I(O,ms),m(e,es,k),m(e,F,k),Y(R,F,null),m(e,ls,k),m(e,G,k),G.innerHTML=Ws,m(e,ps,k),m(e,V,k),I(V,bs),m(e,os,k),m(e,z,k),I(z,_s),I(z,Q),I(Q,gs),I(z,$s),I(z,Z),I(Z,hs),I(z,ds),m(e,cs,k),m(e,W,k),Y(U,W,null),m(e,is,k),m(e,N,k),N.innerHTML=Xs,rs=!0},p(e,[k]){const x={};k&71&&(x.$$scope={dirty:k,ctx:e}),f.$set(x);const ss={};!T&&k&1&&(T=!0,ss.state=e[0],ut(()=>T=!1)),_.$set(ss);const ts={};k&64&&(ts.$$scope={dirty:k,ctx:e}),R.$set(ts);const as={};k&64&&(as.$$scope={dirty:k,ctx:e}),U.$set(as)},i(e){rs||($(f.$$.fragment,e),$(_.$$.fragment,e),$(R.$$.fragment,e),$(U.$$.fragment,e),rs=!0)},o(e){d(f.$$.fragment,e),d(_.$$.fragment,e),d(R.$$.fragment,e),d(U.$$.fragment,e),rs=!1},d(e){e&&i(s),e&&i(t),e&&i(l),e&&i(o),e&&i(r),e&&i(v),e&&i(u),q(f),e&&i(c),e&&i(g),q(_),e&&i(j),e&&i(h),e&&i(C),e&&i(O),e&&i(es),e&&i(F),q(R),e&&i(ls),e&&i(G),e&&i(ps),e&&i(V),e&&i(os),e&&i(z),e&&i(cs),e&&i(W),q(U),e&&i(is),e&&i(N)}}}const Lt={file:"tabs.md",title:"Tabs",api:[{title:"badge.item: interface Item",description:"",variables:"interface Item { title: string; path?: string; pos?: number; icon?: Icons; badge?: string; clear?: boolean; }"},{title:"Item.title: string",description:"Tab item title",variables:"any string"},{title:"Item.path: string",description:"Tab item path",variables:"URI string"},{title:"Item.icon: Icons",description:"Tab item icon",variables:"icons"},{title:"Item.badge: string",description:"Tab item badge",variables:"any string"},{title:"Item.clear: boolean",description:"Tab item close button",variables:"true | false"},{title:"block: boolean",description:"Tabs block",variables:"true | false"},{title:'<slot name="action">',description:"Tab item action",variables:"true | false"}],config:{title:{size:10},path:{size:10},icon:{options:[null,"emoji","home","location"]},badge:{size:10},clear:{type:"checkbox"},block:{type:"checkbox"}}},{file:Wt,title:Us,api:Xt,config:Dt}=Lt;function Mt(p,s,n){let t;ft(p,mt,b=>n(2,t=b));let l=[{title:"Tab1",path:"?tab=1",clear:!0},{title:"Tab2",path:"?tab=2"},{title:"Tab3",path:"?tab=3"}],a=[{title:"Tab4",path:"?tab=4",clear:!0},{title:"Tab5",path:"?tab=5",badge:"0"},{title:"Tab6",path:"?tab=6"}],o={title:"Tab1",path:"?tab=1",pos:0,icon:"emoji",badge:"0",clear:!0,block:!1};kt(()=>yt(`${bt+t.url.pathname}${o.path}`,{keepfocus:!0}));function r(b){o=b,n(0,o)}return p.$$.update=()=>{p.$$.dirty&1&&n(1,l[0]=o,l)},[o,l,t,a,r]}class Jt extends Gs{constructor(s){super();Ns(this,s,Mt,Ht,Ks,{})}}export{Jt as default,Lt as metadata};
