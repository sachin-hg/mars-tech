document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName)return;let e=t.target;if("A"!==e.tagName){const t=e.closest("a");if(!t)return;e=t}if("A"===e.tagName){const n=e.getAttribute("href");n?n.startsWith("#")?(t.preventDefault(),function(t){const e=document.getElementById(`block-${t}`);e&&e.scrollIntoView()}(n.slice(1))):!window._site.renderForPublish&&(n.startsWith("http://")||n.startsWith("https://")||n.startsWith("www."))&&(t.preventDefault(),window.open(n,"_blank","noopener,noreferrer")):t.preventDefault()}})),window._site.enableAnimations&&new window.WOW({boxClass:"animate-on-scroll",animateClass:"animated",offset:-100,mobile:!1,live:!0}).init()}));