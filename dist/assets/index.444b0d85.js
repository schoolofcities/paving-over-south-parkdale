const He=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}};He();function P(){}function qe(e){return e()}function xe(){return Object.create(null)}function oe(e){e.forEach(qe)}function Oe(e){return typeof e=="function"}function $(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let me;function R(e,t){return me||(me=document.createElement("a")),me.href=t,e===me.href}function Re(e){return Object.keys(e).length===0}function Be(e,...t){if(e==null)return P;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function m(e,t){e.appendChild(t)}function y(e,t,s){e.insertBefore(t,s||null)}function g(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function Ge(e){return document.createTextNode(e)}function A(){return Ge(" ")}function z(e,t,s,r){return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)}function Me(e){return function(t){return t.preventDefault(),e.call(this,t)}}function n(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function We(e){return Array.from(e.childNodes)}function O(e,t,s,r){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,r?"important":"")}let Te;function ie(e){Te=e}const ne=[],F=[],ge=[],Pe=[],ze=Promise.resolve();let Le=!1;function Ne(){Le||(Le=!0,ze.then(Ie))}function Ae(e){ge.push(e)}const Se=new Set;let pe=0;function Ie(){const e=Te;do{for(;pe<ne.length;){const t=ne[pe];pe++,ie(t),Je(t.$$)}for(ie(null),ne.length=0,pe=0;F.length;)F.pop()();for(let t=0;t<ge.length;t+=1){const s=ge[t];Se.has(s)||(Se.add(s),s())}ge.length=0}while(ne.length);for(;Pe.length;)Pe.pop()();Le=!1,Se.clear(),ie(e)}function Je(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ae)}}const ve=new Set;let Ke;function V(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function _e(e,t,s,r){if(e&&e.o){if(ve.has(e))return;ve.add(e),Ke.c.push(()=>{ve.delete(e),r&&(s&&e.d(1),r())}),e.o(t)}}function Qe(e,t){e.d(1),t.delete(e.key)}function Ue(e,t,s,r,i,o,l,u,c,d,L,b){let j=e.length,v=o.length,p=j;const E={};for(;p--;)E[e[p].key]=p;const _=[],S=new Map,M=new Map;for(p=v;p--;){const w=b(i,o,p),x=s(w);let T=l.get(x);T?r&&T.p(w,t):(T=d(x,w),T.c()),S.set(x,_[p]=T),x in E&&M.set(x,Math.abs(p-E[x]))}const D=new Set,C=new Set;function I(w){V(w,1),w.m(u,L),l.set(w.key,w),L=w.first,v--}for(;j&&v;){const w=_[v-1],x=e[j-1],T=w.key,B=x.key;w===x?(L=w.first,j--,v--):S.has(B)?!l.has(T)||D.has(T)?I(w):C.has(B)?j--:M.get(T)>M.get(B)?(C.add(T),I(w)):(D.add(B),j--):(c(x,l),j--)}for(;j--;){const w=e[j];S.has(w.key)||c(w,l)}for(;v;)I(_[v-1]);return _}function ye(e){e&&e.c()}function re(e,t,s,r){const{fragment:i,on_mount:o,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),r||Ae(()=>{const c=o.map(qe).filter(Oe);l?l.push(...c):oe(c),e.$$.on_mount=[]}),u.forEach(Ae)}function le(e,t){const s=e.$$;s.fragment!==null&&(oe(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Xe(e,t){e.$$.dirty[0]===-1&&(ne.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,s,r,i,o,l,u=[-1]){const c=Te;ie(e);const d=e.$$={fragment:null,ctx:null,props:o,update:P,not_equal:i,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:xe(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};l&&l(d.root);let L=!1;if(d.ctx=s?s(e,t.props||{},(b,j,...v)=>{const p=v.length?v[0]:j;return d.ctx&&i(d.ctx[b],d.ctx[b]=p)&&(!d.skip_bound&&d.bound[b]&&d.bound[b](p),L&&Xe(e,b)),j}):[],d.update(),L=!0,oe(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const b=We(t.target);d.fragment&&d.fragment.l(b),b.forEach(g)}else d.fragment&&d.fragment.c();t.intro&&V(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),Ie()}ie(c)}class ce{$destroy(){le(this,1),this.$destroy=P}$on(t,s){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(s),()=>{const i=r.indexOf(s);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Fe="/highways-in-south-parkdale/assets/top-logo.ac79f871.svg";function Ve(e){let t,s,r,i;return{c(){t=h("div"),s=h("a"),r=h("img"),R(r.src,i=Fe)||n(r,"src",i),n(r,"alt","School of Cities"),n(r,"class","svelte-1l0obcu"),n(s,"href","https://www.schoolofcities.utoronto.ca/"),n(t,"id","bar"),n(t,"class","svelte-1l0obcu")},m(o,l){y(o,t,l),m(t,s),m(s,r)},p:P,i:P,o:P,d(o){o&&g(t)}}}class $e extends ce{constructor(t){super(),ae(this,t,null,Ve,$,{})}}const X=[];function Ye(e,t=P){let s;const r=new Set;function i(u){if($(e,u)&&(e=u,s)){const c=!X.length;for(const d of r)d[1](),X.push(d,e);if(c){for(let d=0;d<X.length;d+=2)X[d][0](X[d+1]);X.length=0}}}function o(u){i(u(e))}function l(u,c=P){const d=[u,c];return r.add(d),r.size===1&&(s=t(i)||P),u(e),()=>{r.delete(d),r.size===0&&(s(),s=null)}}return{set:i,update:o,subscribe:l}}function Ze(e){let t,s,r,i,o,l,u,c,d,L,b,j,v,p,E;return{c(){t=h("div"),s=h("img"),i=A(),o=h("img"),u=A(),c=h("div"),d=h("div"),L=A(),b=h("div"),j=A(),v=h("div"),R(s.src,r=e[0])||n(s,"src",r),n(s,"alt",e[1]),n(s,"class","left-img svelte-qgpj5s"),R(o.src,l=e[2])||n(o,"src",l),n(o,"alt",e[3]),n(o,"class","right-img svelte-qgpj5s"),n(d,"class","line svelte-qgpj5s"),n(b,"class","handle svelte-qgpj5s"),n(v,"class","line svelte-qgpj5s"),n(c,"class","slider svelte-qgpj5s"),n(c,"role","slider"),n(c,"aria-valuemin",0),n(c,"aria-valuemax",1),n(c,"aria-valuenow",e[12]),n(c,"aria-label","Compare image"),n(c,"tabindex","0"),n(t,"class","svelte-compare-image-container svelte-qgpj5s"),O(t,"--container-height",e[10]+"px"),O(t,"--container-width",e[9]+"px"),O(t,"--slider-position",e[12]),n(t,"data-testid","svelte-compare-image")},m(_,S){y(_,t,S),m(t,s),e[17](s),m(t,i),m(t,o),e[19](o),m(t,u),m(t,c),m(c,d),m(c,L),m(c,b),m(c,j),m(c,v),e[21](c),e[22](t),p||(E=[z(s,"load",e[18]),z(o,"load",e[20]),z(c,"keydown",e[16]),z(t,"touchstart",Me(e[14])),z(t,"touchend",e[15],{passive:!0}),z(t,"mousedown",Me(e[14])),z(t,"mouseup",e[15])],p=!0)},p(_,[S]){S&1&&!R(s.src,r=_[0])&&n(s,"src",r),S&2&&n(s,"alt",_[1]),S&4&&!R(o.src,l=_[2])&&n(o,"src",l),S&8&&n(o,"alt",_[3]),S&4096&&n(c,"aria-valuenow",_[12]),S&1024&&O(t,"--container-height",_[10]+"px"),S&512&&O(t,"--container-width",_[9]+"px"),S&4096&&O(t,"--slider-position",_[12])},i:P,o:P,d(_){_&&g(t),e[17](null),e[19](null),e[21](null),e[22](null),p=!1,oe(E)}}}function et(e,t,s){let r,i,o=P,l=()=>(o(),o=Be(r,f=>s(9,i=f)),r);e.$$.on_destroy.push(()=>o());let{imageLeftSrc:u=""}=t,{imageLeftAlt:c=""}=t,{imageRightSrc:d=""}=t,{imageRightAlt:L=""}=t;function b(f){return Ye(0,G=>{if(!f)return;let W=new ResizeObserver(([H])=>{G(H.target.getBoundingClientRect().width)});return W.observe(f),()=>W.disconnect()})}let j=null,v=null,p=null,E,_,S=0,M=null,D=.5;function C(f){var N;const G="touches"in f?f.touches[0].clientX:f.clientX,W=(N=p==null?void 0:p.getBoundingClientRect().left)!=null?N:0,H=G-W,K=Math.min(Math.max(H,0),i);s(12,D=K/i)}function I(f){M==null||M.focus(),C(f),window.addEventListener("mousemove",C),window.addEventListener("touchmove",C)}function w(){window.removeEventListener("mousemove",C),window.removeEventListener("touchmove",C)}function x(f){f.key==="ArrowLeft"||f.key==="ArrowDown"?(f.preventDefault(),s(12,D=Math.max((D*10-1)/10,0))):(f.key==="ArrowRight"||f.key==="ArrowUp")&&(f.preventDefault(),s(12,D=Math.min((D*10+1)/10,1)))}function T(f){F[f?"unshift":"push"](()=>{v=f,s(5,v)})}const B=()=>{s(7,E=!0)};function Y(f){F[f?"unshift":"push"](()=>{p=f,s(6,p)})}const q=()=>{s(8,_=!0)};function J(f){F[f?"unshift":"push"](()=>{M=f,s(11,M)})}function fe(f){F[f?"unshift":"push"](()=>{j=f,s(4,j)})}return e.$$set=f=>{"imageLeftSrc"in f&&s(0,u=f.imageLeftSrc),"imageLeftAlt"in f&&s(1,c=f.imageLeftAlt),"imageRightSrc"in f&&s(2,d=f.imageRightSrc),"imageRightAlt"in f&&s(3,L=f.imageRightAlt)},e.$$.update=()=>{var f,G;if(e.$$.dirty&16&&l(s(13,r=b(j))),e.$$.dirty&33&&s(7,E=(f=v==null?void 0:v.complete)!=null?f:!1),e.$$.dirty&68&&s(8,_=(G=p==null?void 0:p.complete)!=null?G:!1),e.$$.dirty&997&&v&&p){const W=v.naturalHeight/v.naturalWidth,H=p.naturalHeight/p.naturalWidth,K=Math.max(W,H);s(10,S=i*K)}},[u,c,d,L,j,v,p,E,_,i,S,M,D,r,I,w,x,T,B,Y,q,J,fe]}class tt extends ce{constructor(t){super(),ae(this,t,et,Ze,$,{imageLeftSrc:0,imageLeftAlt:1,imageRightSrc:2,imageRightAlt:3})}}var st="/highways-in-south-parkdale/assets/Q_1947.0cd50e3b.png",nt="/highways-in-south-parkdale/assets/Q_1964.3fea26ed.png";function it(e){let t,s,r,i,o,l;return i=new tt({props:{imageLeftSrc:st,imageLeftAlt:"left",imageRightSrc:nt,imageRightAlt:"right"}}),{c(){t=h("div"),s=h("div"),s.innerHTML=`<div id="left-year" class="svelte-1mietnf">1947</div> 
		<div id="right-year" class="svelte-1mietnf">1964</div>`,r=A(),o=h("div"),ye(i.$$.fragment),n(s,"id","years"),n(s,"class","svelte-1mietnf"),O(o,"display","contents"),O(o,"--handle-size","3rem"),O(o,"--slider-color","white"),O(o,"--slider-width","0.17rem"),n(t,"id","compare-images"),n(t,"class","svelte-1mietnf")},m(u,c){y(u,t,c),m(t,s),m(t,r),m(t,o),re(i,o,null),l=!0},p:P,i(u){l||(V(i.$$.fragment,u),l=!0)},o(u){_e(i.$$.fragment,u),l=!1},d(u){u&&g(t),le(i)}}}class rt extends ce{constructor(t){super(),ae(this,t,null,it,$,{})}}var lt="/highways-in-south-parkdale/assets/plan_1979_A.8880080b.jpg",ot="/highways-in-south-parkdale/assets/plan_1979_B.7ba62ba7.jpg";function Ee(e,t,s){const r=e.slice();return r[3]=t[s],r}function Ce(e,t){let s,r,i,o;return{key:e,first:null,c(){s=h("img"),R(s.src,r=t[3])||n(s,"src",r),n(s,"alt",""),n(s,"class","svelte-5zkagd"),this.first=s},m(l,u){y(l,s,u),i||(o=z(s,"click",t[2]),i=!0)},p(l,u){t=l,u&1&&!R(s.src,r=t[3])&&n(s,"src",r)},d(l){l&&g(s),i=!1,o()}}}function at(e){let t,s=[],r=new Map,i=[e[1][e[0]]];const o=l=>l[0];for(let l=0;l<1;l+=1){let u=Ee(e,i,l),c=o(u);r.set(c,s[l]=Ce(c,u))}return{c(){t=h("div");for(let l=0;l<1;l+=1)s[l].c();n(t,"id","compare-images"),n(t,"class","svelte-5zkagd")},m(l,u){y(l,t,u);for(let c=0;c<1;c+=1)s[c].m(t,null)},p(l,[u]){u&7&&(i=[l[1][l[0]]],s=Ue(s,u,o,1,l,i,r,t,Qe,Ce,null,Ee))},i:P,o:P,d(l){l&&g(t);for(let u=0;u<1;u+=1)s[u].d()}}}function ct(e,t,s){const r=[ot,lt];let i=0;return[i,r,()=>{s(0,i=(i+1)%r.length)}]}class ft extends ce{constructor(t){super(),ae(this,t,ct,at,$,{})}}var ut="/highways-in-south-parkdale/assets/TA_1957_screenshot.3f063274.png",De="/highways-in-south-parkdale/assets/1955dec1globe.07fc442c.png",dt="/highways-in-south-parkdale/assets/mini-map.fc6682c4.png";function ht(e){let t,s,r,i,o,l,u,c,d,L,b,j,v,p,E,_,S,M,D,C,I,w,x,T,B,Y,q,J,fe,f,G,W,H,K,N,we,Z,ue,Q,be,ee,je,te,de,U,ke,se,he;return i=new $e({}),Q=new rt({}),U=new ft({}),{c(){t=h("link"),s=h("link"),r=A(),ye(i.$$.fragment),o=A(),l=h("div"),u=A(),c=h("div"),d=h("div"),L=h("div"),b=h("img"),v=A(),p=h("h1"),p.textContent="Paving Over South Parkdale",E=A(),_=h("div"),_.innerHTML="<h3>A series of maps documenting the loss of a neighbourhood</h3>",S=A(),M=h("div"),M.innerHTML=`<p class="svelte-jrhj2t">The mid-20th century was a time of contentious highway construction.

	By the mid-1950s, there were already several intra-urban expressways in southern Ontario (Highways 400, 401, and the QEW), and Metro Toronto officials were in the process of planning five additional expressways to connect these existing these to the downtown core.</p> 
	<p class="svelte-jrhj2t">Here&#39;s an excerpt from the The Globe and Mail from December 1, 1955, showing their approximate location and priority.</p>`,D=A(),C=h("div"),I=h("div"),w=h("div"),x=h("a"),T=h("img"),Y=A(),q=h("div"),J=h("p"),J.textContent=`The two top priority highways, the Don Valley Parkway and The Lakeshore Expressway (later renamed after the first chair of the Metro Council, Frederick G. Gardiner) were built during the late 1950s and early 1960s.

		The routes of these expressways generally followed green-space and industrial land, and not primarily through residential neighbourhoods. (The other three planned expressways on this map were to traverse a number residential neighbourhoods, and were eventually halted due to strong public opposition).`,fe=A(),f=h("img"),W=A(),H=h("p"),H.innerHTML='However, there was a neighbourhood along the route of the Lakeshore Expressway that was destroyed during this process, <span class="bold svelte-jrhj2t">South Parkdale</span>, located between the railway and Lake Ontario. The neighbourhood primarily consisted of single-detached homes, similar in style to those still found north of the railroad tracks.',K=A(),N=h("p"),N.textContent="The following air photos show South Parkdale in 1947, several years before the construction of the Lakeshore Expressway, and what the newly finished roadway looked like in 1964. The 1947 image also shows how the neighbourhood had already undergone some deformant in the 1920s, when Lakeshore Boulavard was extended through the neighbourhood. By the early 1960s, all houses below the railway were gone, replaced by 12+ lanes of traffic and swaths of manicured grass.",we=A(),Z=h("div"),ue=h("div"),ye(Q.$$.fragment),be=A(),ee=h("div"),ee.innerHTML='<p class="svelte-jrhj2t">In 1979, <a href="https://en.wikipedia.org/wiki/John_Sewell" class="svelte-jrhj2t">John Sewell</a> (mayor of Toronto from 1978 to 1980) and his staff released a plan for covering the expressway in aims to reduce it&#39;s noise, better connect Parkdale to the waterfront, as well as create space for residential development. Due to high costs, the plans never came to fruition, but they do illustrate how some of the detriments of the expressway could be converted into needed green space and public housing in the future.</p>',je=A(),te=h("div"),de=h("div"),ye(U.$$.fragment),ke=A(),se=h("div"),se.innerHTML=`<p><b>More information:</b></p> 

	<p>This page and its content were compiled by <a href="https://jamaps.github.io" target="_blank" class="svelte-jrhj2t">Jeff Allen</a>. 
		
	The <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/access-city-information-or-records/city-of-toronto-archives/whats-online/maps/aerial-photographs/" target="_blank" class="svelte-jrhj2t">air photos</a> and the <a href="https://gencat4.eloquent-systems.com/webcat/request/Action?ClientSession=2de590be:18165c1105c:-7ec2&amp;UniqueID=6000_3355_2&amp;TemplateProcessID=6000_3355&amp;PromptID=&amp;ParamID=&amp;CMD_(DetailRequest)[0]=&amp;ProcessID=6000_3363(0)&amp;KeyValues=KEY_450943" target="_blank" class="svelte-jrhj2t">1979 plans</a> were sourced from the Toronto Archives. 
	
	The image from the Globe and Mail was sourced from the University of Toronto Library.
	
	Check out the following links for further reading on South Parkdale and the history of the Lakeshore (Gardiner) Expressway:</p> 
	<ul><li><a href="http://www.gettorontomoving.ca/gardiner-expressway.html" target="_blank" class="svelte-jrhj2t">The Gardiner Expressway</a></li> 
		<li><a href="https://torontoguardian.com/2012/07/south-parkdale-vintage-fitted-tees-dont-exist/" target="_blank" class="svelte-jrhj2t">\u201CSouth Parkdale\u201D vintage fitted tees don\u2019t exist</a></li> 
		<li><a href="http://spacing.ca/toronto/2017/03/04/lost-streets-south-parkdale/" target="_blank" class="svelte-jrhj2t">The lost streets of South Parkdale</a></li></ul>`,n(t,"href","https://fonts.googleapis.com/css2?family=Bitter&family=Playfair+Display&display=swap"),n(t,"rel","stylesheet"),n(s,"href","https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"),n(s,"rel","stylesheet"),n(l,"id","top-space"),n(l,"class","svelte-jrhj2t"),R(b.src,j=ut)||n(b,"src",j),n(b,"alt","Air Photo 1957"),n(b,"class","svelte-jrhj2t"),n(p,"class","svelte-jrhj2t"),n(L,"id","title"),n(L,"class","svelte-jrhj2t"),n(d,"class","white svelte-jrhj2t"),n(c,"class","road svelte-jrhj2t"),n(_,"class","subtitle svelte-jrhj2t"),n(M,"class","body-text svelte-jrhj2t"),R(T.src,B=De)||n(T,"src",B),n(T,"alt","Globe and Mail, Dec 1, 1955"),n(T,"class","svelte-jrhj2t"),n(x,"href",De),n(x,"target","_blank"),n(w,"class","image svelte-jrhj2t"),n(I,"class","white svelte-jrhj2t"),n(C,"class","road svelte-jrhj2t"),n(J,"class","svelte-jrhj2t"),R(f.src,G=dt)||n(f,"src",G),n(f,"alt","Globe and Mail, Dec 1, 1955"),n(f,"class","svelte-jrhj2t"),n(H,"class","svelte-jrhj2t"),n(N,"class","svelte-jrhj2t"),n(q,"class","body-text svelte-jrhj2t"),n(ue,"class","white svelte-jrhj2t"),n(Z,"class","road svelte-jrhj2t"),n(ee,"class","body-text svelte-jrhj2t"),n(de,"class","white svelte-jrhj2t"),n(te,"class","road svelte-jrhj2t"),n(se,"class","info svelte-jrhj2t")},m(a,k){m(document.head,t),m(document.head,s),y(a,r,k),re(i,a,k),y(a,o,k),y(a,l,k),y(a,u,k),y(a,c,k),m(c,d),m(d,L),m(L,b),m(L,v),m(L,p),y(a,E,k),y(a,_,k),y(a,S,k),y(a,M,k),y(a,D,k),y(a,C,k),m(C,I),m(I,w),m(w,x),m(x,T),y(a,Y,k),y(a,q,k),m(q,J),m(q,fe),m(q,f),m(q,W),m(q,H),m(q,K),m(q,N),y(a,we,k),y(a,Z,k),m(Z,ue),re(Q,ue,null),y(a,be,k),y(a,ee,k),y(a,je,k),y(a,te,k),m(te,de),re(U,de,null),y(a,ke,k),y(a,se,k),he=!0},p:P,i(a){he||(V(i.$$.fragment,a),V(Q.$$.fragment,a),V(U.$$.fragment,a),he=!0)},o(a){_e(i.$$.fragment,a),_e(Q.$$.fragment,a),_e(U.$$.fragment,a),he=!1},d(a){g(t),g(s),a&&g(r),le(i,a),a&&g(o),a&&g(l),a&&g(u),a&&g(c),a&&g(E),a&&g(_),a&&g(S),a&&g(M),a&&g(D),a&&g(C),a&&g(Y),a&&g(q),a&&g(we),a&&g(Z),le(Q),a&&g(be),a&&g(ee),a&&g(je),a&&g(te),le(U),a&&g(ke),a&&g(se)}}}class mt extends ce{constructor(t){super(),ae(this,t,null,ht,$,{})}}new mt({target:document.getElementById("app")});
