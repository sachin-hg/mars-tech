!function(){const e="site_visit_count",t=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(e){}};function n(){const e=new Date;return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())).getTime()}function o(){const e=new Date,t=(e.getUTCDay()+6)%7,n=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()-t));return n.setUTCHours(0,0,0,0),n.getTime()}function i(){const e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),1));return t.setUTCHours(0,0,0,0),t.getTime()}const r=()=>{const r=t(e)||{},{day_visit_count:s=0,week_visit_count:c=0,month_visit_count:a=0,current_ts:u}=r;var d,_;u?(u-n()>=0&&u-n()<=864e5?r.day_visit_count=s+1:r.day_visit_count=1,u-o()>=0&&u-o()<=6048e5?r.week_visit_count=c+1:r.week_visit_count=1,u-i()>=0&&u-i()<=26784e5?r.month_visit_count=a+1:r.month_visit_count=1):(r.day_visit_count=1,r.week_visit_count=1,r.month_visit_count=1),r.current_ts=(new Date).getTime(),d=e,_=r,localStorage.setItem(d,JSON.stringify(_))},s=()=>{const{current_ts:n}=t(e)||{};return r(),(n=>{const o=t(e)||{},{day_visit_count:i=0,week_visit_count:r=0,month_visit_count:s=0}=o;let c=15;return i>1&&(c&=14),r>1&&(c&=13),s>1&&(c&=11),n||(c&=7),c})(!n)},c="production"===(window._site.siteAppEnv||"").toLowerCase(),a=c?"https://api.flockmail.com/m":"https://flockmail-backend.flock-staging.com/m",u=e=>"true"===e||"false"!==e&&e;function d(){h("site_whatsapp_clicked",{section:"Contact",contact_name:document.querySelector('input[name="visitor-name"]').value})}document.addEventListener("DOMContentLoaded",(function(){window.sendMedusa=h,async function(){const e=new URLSearchParams(document.location.search),t=e.get("source_hook")?.trim(),n={state:s()};t&&(n.source_hook=t),h("site_viewed",n);const o=new URL(window.location.href);o.searchParams.has("updated")&&(o.searchParams.delete("updated"),window.history.replaceState({},document.title,o.href))}(),document.querySelectorAll("section").forEach((e=>{const t=e.parentNode.dataset.blockName||"Unknown",n=e.querySelectorAll("a");e.addEventListener("click",(e=>{const o=e.target.closest("a");if(o){const e=Array.from(n).indexOf(o),i=(e=>{if((e=>e.hostname===window.location.hostname)(e)){const t=document.getElementById(`block-${e.hash.split("#")[1]}`);return t?`Block - ${t.dataset.blockName.replace(/ /g,"-")}`:e.href}return e.href})(o);h("site_link_clicked",{link_label:o.innerText,link_url:i,position:e+1,section:t,intro_spotlight:"introduction"===t})}}))})),(()=>{const e=document.querySelector(".connect-on-whatsapp");e&&e.addEventListener("click",d)})()}));const _=(()=>{let e={};try{const t=new UAParser;return e=t.getResult(),()=>({device:e.device.type||"desktop",browser:e.browser.name,browser_version:e.browser.version,os:e.os.name,os_version:e.os.version,screen_height_pixel:window.innerHeight,screen_width_pixel:window.innerWidth})}catch(e){return()=>{}}})(),l=(()=>{let e=null;return()=>{if(!e&&document.referrer){const t=new URL(document.referrer);e={referring_domain:t.hostname,referrer:t.href}}return e}})();function m(){const{siteDomainName:e,templateId:t,templateDisplayName:n,getVisitorId:o,siteDomainId:i}=window._site;return{device_id:o(),domain_id:+i,site_domain:e,neo_site_status:"Published",user_type:"Visitor",partner_id:c?54:71,brand:"Neo",neo_product:"Business",site_template_id:t,template_name:n,..._(),...l()}}async function h(e,t={}){const{renderForPublish:n}=window._site;if(!u(n))return;const o={entityId:"dummy_entity_id",service:"site",product:"email",eventName:e,eventTs:Date.now(),type:"flock_account",attrs:{...m(),...t}};fetch(`${a}/addPreAuthEvent`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)})}}();