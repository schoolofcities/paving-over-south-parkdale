const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}};Oe();function M(){}function Ie(e){return e()}function Me(){return Object.create(null)}function oe(e){e.forEach(Ie)}function Re(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let pe;function B(e,t){return pe||(pe=document.createElement("a")),pe.href=t,e===pe.href}function Be(e){return Object.keys(e).length===0}function Ge(e,...t){if(e==null)return M;const s=e.subscribe(...t);return s.unsubscribe?()=>s.unsubscribe():s}function m(e,t){e.appendChild(t)}function y(e,t,s){e.insertBefore(t,s||null)}function v(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function We(e){return document.createTextNode(e)}function L(){return We(" ")}function N(e,t,s,i){return e.addEventListener(t,s,i),()=>e.removeEventListener(t,s,i)}function Pe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function n(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function ze(e){return Array.from(e.childNodes)}function R(e,t,s,i){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,i?"important":"")}let xe;function ie(e){xe=e}const ne=[],X=[],ge=[],Ee=[],Ne=Promise.resolve();let Ae=!1;function Je(){Ae||(Ae=!0,Ne.then(He))}function Te(e){ge.push(e)}const Le=new Set;let ve=0;function He(){const e=xe;do{for(;ve<ne.length;){const t=ne[ve];ve++,ie(t),Ke(t.$$)}for(ie(null),ne.length=0,ve=0;X.length;)X.pop()();for(let t=0;t<ge.length;t+=1){const s=ge[t];Le.has(s)||(Le.add(s),s())}ge.length=0}while(ne.length);for(;Ee.length;)Ee.pop()();Ae=!1,Le.clear(),ie(e)}function Ke(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Te)}}const _e=new Set;let Qe;function F(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function ye(e,t,s,i){if(e&&e.o){if(_e.has(e))return;_e.add(e),Qe.c.push(()=>{_e.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}}function Ue(e,t){e.d(1),t.delete(e.key)}function Xe(e,t,s,i,r,l,o,c,f,d,T,k){let g=e.length,_=l.length,p=g;const P={};for(;p--;)P[e[p].key]=p;const w=[],q=new Map,C=new Map;for(p=_;p--;){const b=k(r,l,p),x=s(b);let A=o.get(x);A?i&&A.p(b,t):(A=d(x,b),A.c()),q.set(x,w[p]=A),x in P&&C.set(x,Math.abs(p-P[x]))}const E=new Set,H=new Set;function O(b){F(b,1),b.m(c,T),o.set(b.key,b),T=b.first,_--}for(;g&&_;){const b=w[_-1],x=e[g-1],A=b.key,D=x.key;b===x?(T=b.first,g--,_--):q.has(D)?!o.has(A)||E.has(A)?O(b):H.has(D)?g--:C.get(A)>C.get(D)?(H.add(A),O(b)):(E.add(D),g--):(f(x,o),g--)}for(;g--;){const b=e[g];q.has(b.key)||f(b,o)}for(;_;)O(w[_-1]);return w}function we(e){e&&e.c()}function re(e,t,s,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:c}=e.$$;r&&r.m(t,s),i||Te(()=>{const f=l.map(Ie).filter(Re);o?o.push(...f):oe(f),e.$$.on_mount=[]}),c.forEach(Te)}function le(e,t){const s=e.$$;s.fragment!==null&&(oe(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(ne.push(e),Je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,s,i,r,l,o,c=[-1]){const f=xe;ie(e);const d=e.$$={fragment:null,ctx:null,props:l,update:M,not_equal:r,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Me(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};o&&o(d.root);let T=!1;if(d.ctx=s?s(e,t.props||{},(k,g,..._)=>{const p=_.length?_[0]:g;return d.ctx&&r(d.ctx[k],d.ctx[k]=p)&&(!d.skip_bound&&d.bound[k]&&d.bound[k](p),T&&Fe(e,k)),g}):[],d.update(),T=!0,oe(d.before_update),d.fragment=i?i(d.ctx):!1,t.target){if(t.hydrate){const k=ze(t.target);d.fragment&&d.fragment.l(k),k.forEach(v)}else d.fragment&&d.fragment.c();t.intro&&F(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),He()}ie(f)}class ce{$destroy(){le(this,1),this.$destroy=M}$on(t,s){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const r=i.indexOf(s);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Ve="/highways-in-south-parkdale/assets/top-logo.ac79f871.svg";function $e(e){let t,s,i,r;return{c(){t=h("div"),s=h("a"),i=h("img"),B(i.src,r=Ve)||n(i,"src",r),n(i,"alt","School of Cities"),n(i,"class","svelte-1q3s23j"),n(s,"href","https://www.schoolofcities.utoronto.ca/"),n(t,"id","bar"),n(t,"class","svelte-1q3s23j")},m(l,o){y(l,t,o),m(t,s),m(s,i)},p:M,i:M,o:M,d(l){l&&v(t)}}}class Ye extends ce{constructor(t){super(),ae(this,t,null,$e,V,{})}}const U=[];function Ze(e,t=M){let s;const i=new Set;function r(c){if(V(e,c)&&(e=c,s)){const f=!U.length;for(const d of i)d[1](),U.push(d,e);if(f){for(let d=0;d<U.length;d+=2)U[d][0](U[d+1]);U.length=0}}}function l(c){r(c(e))}function o(c,f=M){const d=[c,f];return i.add(d),i.size===1&&(s=t(r)||M),c(e),()=>{i.delete(d),i.size===0&&(s(),s=null)}}return{set:r,update:l,subscribe:o}}function et(e){let t,s,i,r,l,o,c,f,d,T,k,g,_,p,P;return{c(){t=h("div"),s=h("img"),r=L(),l=h("img"),c=L(),f=h("div"),d=h("div"),T=L(),k=h("div"),g=L(),_=h("div"),B(s.src,i=e[0])||n(s,"src",i),n(s,"alt",e[1]),n(s,"class","left-img svelte-qgpj5s"),B(l.src,o=e[2])||n(l,"src",o),n(l,"alt",e[3]),n(l,"class","right-img svelte-qgpj5s"),n(d,"class","line svelte-qgpj5s"),n(k,"class","handle svelte-qgpj5s"),n(_,"class","line svelte-qgpj5s"),n(f,"class","slider svelte-qgpj5s"),n(f,"role","slider"),n(f,"aria-valuemin",0),n(f,"aria-valuemax",1),n(f,"aria-valuenow",e[12]),n(f,"aria-label","Compare image"),n(f,"tabindex","0"),n(t,"class","svelte-compare-image-container svelte-qgpj5s"),R(t,"--container-height",e[10]+"px"),R(t,"--container-width",e[9]+"px"),R(t,"--slider-position",e[12]),n(t,"data-testid","svelte-compare-image")},m(w,q){y(w,t,q),m(t,s),e[17](s),m(t,r),m(t,l),e[19](l),m(t,c),m(t,f),m(f,d),m(f,T),m(f,k),m(f,g),m(f,_),e[21](f),e[22](t),p||(P=[N(s,"load",e[18]),N(l,"load",e[20]),N(f,"keydown",e[16]),N(t,"touchstart",Pe(e[14])),N(t,"touchend",e[15],{passive:!0}),N(t,"mousedown",Pe(e[14])),N(t,"mouseup",e[15])],p=!0)},p(w,[q]){q&1&&!B(s.src,i=w[0])&&n(s,"src",i),q&2&&n(s,"alt",w[1]),q&4&&!B(l.src,o=w[2])&&n(l,"src",o),q&8&&n(l,"alt",w[3]),q&4096&&n(f,"aria-valuenow",w[12]),q&1024&&R(t,"--container-height",w[10]+"px"),q&512&&R(t,"--container-width",w[9]+"px"),q&4096&&R(t,"--slider-position",w[12])},i:M,o:M,d(w){w&&v(t),e[17](null),e[19](null),e[21](null),e[22](null),p=!1,oe(P)}}}function tt(e,t,s){let i,r,l=M,o=()=>(l(),l=Ge(i,u=>s(9,r=u)),i);e.$$.on_destroy.push(()=>l());let{imageLeftSrc:c=""}=t,{imageLeftAlt:f=""}=t,{imageRightSrc:d=""}=t,{imageRightAlt:T=""}=t;function k(u){return Ze(0,I=>{if(!u)return;let G=new ResizeObserver(([W])=>{I(W.target.getBoundingClientRect().width)});return G.observe(u),()=>G.disconnect()})}let g=null,_=null,p=null,P,w,q=0,C=null,E=.5;function H(u){var Y;const I="touches"in u?u.touches[0].clientX:u.clientX,G=(Y=p==null?void 0:p.getBoundingClientRect().left)!=null?Y:0,W=I-G,z=Math.min(Math.max(W,0),r);s(12,E=z/r)}function O(u){C==null||C.focus(),H(u),window.addEventListener("mousemove",H),window.addEventListener("touchmove",H)}function b(){window.removeEventListener("mousemove",H),window.removeEventListener("touchmove",H)}function x(u){u.key==="ArrowLeft"||u.key==="ArrowDown"?(u.preventDefault(),s(12,E=Math.max((E*10-1)/10,0))):(u.key==="ArrowRight"||u.key==="ArrowUp")&&(u.preventDefault(),s(12,E=Math.min((E*10+1)/10,1)))}function A(u){X[u?"unshift":"push"](()=>{_=u,s(5,_)})}const D=()=>{s(7,P=!0)};function fe(u){X[u?"unshift":"push"](()=>{p=u,s(6,p)})}const $=()=>{s(8,w=!0)};function j(u){X[u?"unshift":"push"](()=>{C=u,s(11,C)})}function J(u){X[u?"unshift":"push"](()=>{g=u,s(4,g)})}return e.$$set=u=>{"imageLeftSrc"in u&&s(0,c=u.imageLeftSrc),"imageLeftAlt"in u&&s(1,f=u.imageLeftAlt),"imageRightSrc"in u&&s(2,d=u.imageRightSrc),"imageRightAlt"in u&&s(3,T=u.imageRightAlt)},e.$$.update=()=>{var u,I;if(e.$$.dirty&16&&o(s(13,i=k(g))),e.$$.dirty&33&&s(7,P=(u=_==null?void 0:_.complete)!=null?u:!1),e.$$.dirty&68&&s(8,w=(I=p==null?void 0:p.complete)!=null?I:!1),e.$$.dirty&997&&_&&p){const G=_.naturalHeight/_.naturalWidth,W=p.naturalHeight/p.naturalWidth,z=Math.max(G,W);s(10,q=r*z)}},[c,f,d,T,g,_,p,P,w,r,q,C,E,i,O,b,x,A,D,fe,$,j,J]}class st extends ce{constructor(t){super(),ae(this,t,tt,et,V,{imageLeftSrc:0,imageLeftAlt:1,imageRightSrc:2,imageRightAlt:3})}}var nt="/highways-in-south-parkdale/assets/Q_1947.0cd50e3b.png",it="/highways-in-south-parkdale/assets/Q_1964.3fea26ed.png";function rt(e){let t,s,i,r,l,o;return r=new st({props:{imageLeftSrc:nt,imageLeftAlt:"left",imageRightSrc:it,imageRightAlt:"right"}}),{c(){t=h("div"),s=h("div"),s.innerHTML=`<div id="left-year" class="svelte-1mietnf">1947</div> 
		<div id="right-year" class="svelte-1mietnf">1964</div>`,i=L(),l=h("div"),we(r.$$.fragment),n(s,"id","years"),n(s,"class","svelte-1mietnf"),R(l,"display","contents"),R(l,"--handle-size","3rem"),R(l,"--slider-color","white"),R(l,"--slider-width","0.17rem"),n(t,"id","compare-images"),n(t,"class","svelte-1mietnf")},m(c,f){y(c,t,f),m(t,s),m(t,i),m(t,l),re(r,l,null),o=!0},p:M,i(c){o||(F(r.$$.fragment,c),o=!0)},o(c){ye(r.$$.fragment,c),o=!1},d(c){c&&v(t),le(r)}}}class lt extends ce{constructor(t){super(),ae(this,t,null,rt,V,{})}}var ot="/highways-in-south-parkdale/assets/plan_1979_A.8880080b.jpg",at="/highways-in-south-parkdale/assets/plan_1979_B.7ba62ba7.jpg";function Ce(e,t,s){const i=e.slice();return i[3]=t[s],i}function De(e,t){let s,i,r,l;return{key:e,first:null,c(){s=h("img"),B(s.src,i=t[3])||n(s,"src",i),n(s,"alt",""),n(s,"class","svelte-5zkagd"),this.first=s},m(o,c){y(o,s,c),r||(l=N(s,"click",t[2]),r=!0)},p(o,c){t=o,c&1&&!B(s.src,i=t[3])&&n(s,"src",i)},d(o){o&&v(s),r=!1,l()}}}function ct(e){let t,s=[],i=new Map,r=[e[1][e[0]]];const l=o=>o[0];for(let o=0;o<1;o+=1){let c=Ce(e,r,o),f=l(c);i.set(f,s[o]=De(f,c))}return{c(){t=h("div");for(let o=0;o<1;o+=1)s[o].c();n(t,"id","compare-images"),n(t,"class","svelte-5zkagd")},m(o,c){y(o,t,c);for(let f=0;f<1;f+=1)s[f].m(t,null)},p(o,[c]){c&7&&(r=[o[1][o[0]]],s=Xe(s,c,l,1,o,r,i,t,Ue,De,null,Ce))},i:M,o:M,d(o){o&&v(t);for(let c=0;c<1;c+=1)s[c].d()}}}function ft(e,t,s){const i=[at,ot];let r=0;return[r,i,()=>{s(0,r=(r+1)%i.length)}]}class ut extends ce{constructor(t){super(),ae(this,t,ft,ct,V,{})}}var dt="/highways-in-south-parkdale/assets/TA_1957_screenshot.3f063274.png",je="/highways-in-south-parkdale/assets/1955dec1globe.07fc442c.png",ht="/highways-in-south-parkdale/assets/mini-map.fc6682c4.png";function mt(e){let t,s,i,r,l,o,c,f,d,T,k,g,_,p,P,w,q,C,E,H,O,b,x,A,D,fe,$,j,J,u,I,G,W,z,Y,ue,be,Z,de,K,ke,ee,qe,te,he,Q,Se,se,me;return l=new Ye({}),K=new lt({}),Q=new ut({}),{c(){t=h("link"),s=h("link"),i=h("meta"),r=L(),we(l.$$.fragment),o=L(),c=h("div"),f=L(),d=h("div"),T=h("div"),k=h("div"),g=h("img"),p=L(),P=h("h1"),P.textContent="Paving Over South Parkdale",w=L(),q=h("div"),q.innerHTML='<h3 class="svelte-cfqmv1">A series of maps documenting the loss of a neighbourhood</h3>',C=L(),E=h("div"),E.innerHTML=`<p class="svelte-cfqmv1">The mid-20th century was a time of contentious highway construction. By
		the mid-1950s, there were already several intra-urban expressways in
		southern Ontario (Highways 400, 401, and the QEW), and Metro Toronto
		officials were in the process of planning five additional expressways to
		connect these existing these to the downtown core.</p> 
	<p class="svelte-cfqmv1">Here&#39;s an excerpt from the The Globe and Mail from December 1, 1955,
		showing their approximate location and priority.</p>`,H=L(),O=h("div"),b=h("div"),x=h("div"),A=h("a"),D=h("img"),$=L(),j=h("div"),J=h("p"),J.textContent=`The two top priority highways, the Don Valley Parkway and The Lakeshore
		Expressway (later renamed after the first chair of the Metro Council,
		Frederick G. Gardiner) were built during the late 1950s and early 1960s.
		The routes of these expressways generally followed green-space and
		industrial land, and not primarily through residential neighbourhoods.
		(The other three planned expressways on this map were to traverse a
		number residential neighbourhoods, and were eventually halted due to
		strong public opposition).`,u=L(),I=h("img"),W=L(),z=h("p"),z.innerHTML=`However, there was a neighbourhood along the route of the Lakeshore
		Expressway that was destroyed during this process, <span class="bold svelte-cfqmv1">South Parkdale</span>, located between the railway and Lake Ontario. The neighbourhood
		primarily consisted of single-detached homes, similar in style to those
		still found north of the railroad tracks.`,Y=L(),ue=h("p"),ue.textContent=`The following air photos show South Parkdale in 1947, several years
		before the construction of the Lakeshore Expressway, and what the newly
		finished roadway looked like in 1964. The 1947 image also shows how the
		neighbourhood had already undergone some deformant in the 1920s, when
		Lakeshore Boulavard was extended through the neighbourhood. By the early
		1960s, all houses below the railway were gone, replaced by 12+ lanes of
		traffic and swaths of manicured grass.`,be=L(),Z=h("div"),de=h("div"),we(K.$$.fragment),ke=L(),ee=h("div"),ee.innerHTML=`<p class="svelte-cfqmv1">In 1979, <a href="https://en.wikipedia.org/wiki/John_Sewell" class="svelte-cfqmv1">John Sewell</a> (mayor of Toronto from 1978 to 1980) and his staff released a plan for
		covering the expressway in aims to reduce it&#39;s noise, better connect Parkdale
		to the waterfront, as well as create space for residential development. Due
		to high costs, the plans never came to fruition, but they do illustrate how
		some of the detriments of the expressway could be converted into needed green
		space and public housing in the future.</p>`,qe=L(),te=h("div"),he=h("div"),we(Q.$$.fragment),Se=L(),se=h("div"),se.innerHTML=`<p><b>More information:</b></p> 

	<p>This page and its content were compiled by <a href="https://jamaps.github.io" target="_blank" class="svelte-cfqmv1">Jeff Allen</a>. The
		<a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/access-city-information-or-records/city-of-toronto-archives/whats-online/maps/aerial-photographs/" target="_blank" class="svelte-cfqmv1">air photos</a>
		and the
		<a href="https://gencat4.eloquent-systems.com/webcat/request/Action?ClientSession=2de590be:18165c1105c:-7ec2&amp;UniqueID=6000_3355_2&amp;TemplateProcessID=6000_3355&amp;PromptID=&amp;ParamID=&amp;CMD_(DetailRequest)[0]=&amp;ProcessID=6000_3363(0)&amp;KeyValues=KEY_450943" target="_blank" class="svelte-cfqmv1">1979 plans</a> were sourced from the Toronto Archives. The image from the Globe and Mail
		was sourced from the University of Toronto Library. Check out the following
		links for further reading on South Parkdale and the history of the Lakeshore
		(Gardiner) Expressway:</p> 
	<ul><li><a href="http://www.gettorontomoving.ca/gardiner-expressway.html" target="_blank" class="svelte-cfqmv1">The Gardiner Expressway</a></li> 
		<li><a href="https://torontoguardian.com/2012/07/south-parkdale-vintage-fitted-tees-dont-exist/" target="_blank" class="svelte-cfqmv1">\u201CSouth Parkdale\u201D vintage fitted tees don\u2019t exist</a></li> 
		<li><a href="http://spacing.ca/toronto/2017/03/04/lost-streets-south-parkdale/" target="_blank" class="svelte-cfqmv1">The lost streets of South Parkdale</a></li></ul>`,n(t,"href","https://fonts.googleapis.com/css2?family=Bitter&family=Playfair+Display&display=swap"),n(t,"rel","stylesheet"),n(s,"href","https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"),n(s,"rel","stylesheet"),n(i,"name","viewport"),n(i,"content","width=device-width, initial-scale=1, minimum-scale=1"),n(c,"id","top-space"),n(c,"class","svelte-cfqmv1"),B(g.src,_=dt)||n(g,"src",_),n(g,"alt","Air Photo 1957"),n(g,"class","svelte-cfqmv1"),n(P,"class","svelte-cfqmv1"),n(k,"id","title"),n(k,"class","svelte-cfqmv1"),n(T,"class","white svelte-cfqmv1"),n(d,"class","road svelte-cfqmv1"),n(q,"class","subtitle svelte-cfqmv1"),n(E,"class","body-text svelte-cfqmv1"),B(D.src,fe=je)||n(D,"src",fe),n(D,"alt","Globe and Mail, Dec 1, 1955"),n(D,"class","svelte-cfqmv1"),n(A,"href",je),n(A,"target","_blank"),n(x,"class","image svelte-cfqmv1"),n(b,"class","white svelte-cfqmv1"),n(O,"class","road svelte-cfqmv1"),n(J,"class","svelte-cfqmv1"),B(I.src,G=ht)||n(I,"src",G),n(I,"alt","Globe and Mail, Dec 1, 1955"),n(I,"class","svelte-cfqmv1"),n(z,"class","svelte-cfqmv1"),n(ue,"class","svelte-cfqmv1"),n(j,"class","body-text svelte-cfqmv1"),n(de,"class","white svelte-cfqmv1"),n(Z,"class","road svelte-cfqmv1"),n(ee,"class","body-text svelte-cfqmv1"),n(he,"class","white svelte-cfqmv1"),n(te,"class","road svelte-cfqmv1"),n(se,"class","info svelte-cfqmv1")},m(a,S){m(document.head,t),m(document.head,s),m(document.head,i),y(a,r,S),re(l,a,S),y(a,o,S),y(a,c,S),y(a,f,S),y(a,d,S),m(d,T),m(T,k),m(k,g),m(k,p),m(k,P),y(a,w,S),y(a,q,S),y(a,C,S),y(a,E,S),y(a,H,S),y(a,O,S),m(O,b),m(b,x),m(x,A),m(A,D),y(a,$,S),y(a,j,S),m(j,J),m(j,u),m(j,I),m(j,W),m(j,z),m(j,Y),m(j,ue),y(a,be,S),y(a,Z,S),m(Z,de),re(K,de,null),y(a,ke,S),y(a,ee,S),y(a,qe,S),y(a,te,S),m(te,he),re(Q,he,null),y(a,Se,S),y(a,se,S),me=!0},p:M,i(a){me||(F(l.$$.fragment,a),F(K.$$.fragment,a),F(Q.$$.fragment,a),me=!0)},o(a){ye(l.$$.fragment,a),ye(K.$$.fragment,a),ye(Q.$$.fragment,a),me=!1},d(a){v(t),v(s),v(i),a&&v(r),le(l,a),a&&v(o),a&&v(c),a&&v(f),a&&v(d),a&&v(w),a&&v(q),a&&v(C),a&&v(E),a&&v(H),a&&v(O),a&&v($),a&&v(j),a&&v(be),a&&v(Z),le(K),a&&v(ke),a&&v(ee),a&&v(qe),a&&v(te),le(Q),a&&v(Se),a&&v(se)}}}class pt extends ce{constructor(t){super(),ae(this,t,null,mt,V,{})}}new pt({target:document.getElementById("app")});
