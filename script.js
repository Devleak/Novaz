/* External scripts (not fetched):
 - /~flock.js
 - /assets/index-DREMnh1I.js
*/

(function(a,f){let l;try{l=JSON.parse(sessionStorage.getItem(a)||"{}")}catch{return}const n=l?.[f||history.state?.__TSR_key];let c=!1;for(const t in n){const e=n[t],o=e?.scrollX,s=e?.scrollY;if(Number.isFinite(o)&&Number.isFinite(s)){if(t==="window")scrollTo(o,s),c=!0;else if(t)try{const r=document.querySelector(t);r&&(r.scrollLeft=o,r.scrollTop=s)}catch{}}}if(c)return;const i=location.hash.slice(1);if(i){const t=history.state?.__hashScrollIntoViewOptions??!0;if(t){const e=document.getElementById(i);e&&e.scrollIntoView(t)}return}scrollTo(0,0)})("tsr-scroll-restoration-v1_3");document.currentScript.remove()

(self.$R=self.$R||{})["tsr"]=[];self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]};$_TSR.router=($R=>$R[0]={manifest:$R[1]={routes:$R[2]={__root__:$R[3]={preloads:$R[4]=["/assets/index-DREMnh1I.js"],scripts:$R[5]=[$R[6]={attrs:$R[7]={type:"module",async:!0,src:"/assets/index-DREMnh1I.js"}}]},"/":$R[8]={preloads:$R[9]=["/assets/routes-BOdC8TgC.js"]}}},matches:$R[10]=[$R[11]={i:"__root__",u:1790605583371,s:"success",ssr:!0},$R[12]={i:"",u:1790605583371,s:"success",ssr:!0}],lastMatchId:""})($R["tsr"]);$_TSR.e();document.currentScript.remove()

// Don't show the lovable-badge if the page is in an iframe or if it's being rendered by puppeteer (screenshot service)
	if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
		var badge = document.getElementById('lovable-badge');
		if (badge) {
			badge.style.display = 'none';
		}
	}

	// Add click event listener to close button with animation
	var closeButton = document.getElementById('lovable-badge-close');
	if (closeButton) {
		closeButton.addEventListener('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			var badge = document.getElementById('lovable-badge');
			if (badge) {
				badge.classList.add('closing');
				setTimeout(function() {
					if (badge) {
						badge.style.display = 'none';
					}
				}, 240);
			}
		});
	}
