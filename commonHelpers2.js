import"./assets/styles-51917637.js";const s="feedback-form-state",t=document.querySelector(".feedback-form");t.querySelector("textarea");t.addEventListener("input",l);t.addEventListener("submit",o);function o(e){e.preventDefault();const a=t.elements.email.value,n=t.elements.message.value;a===""||n===""?alert("All form fields must be filled in"):(console.log({email:a,message:n}),localStorage.removeItem(s),t.reset())}function l(){const e=t.elements.email.value.trim(),a=t.elements.message.value.trim();m(s,{email:e,message:a})}function m(e,a){const n=JSON.stringify(a);localStorage.setItem(e,n)}function r(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}function i(){const e=r(s)||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}i();
//# sourceMappingURL=commonHelpers2.js.map
