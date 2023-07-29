import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwKaxyhepISRXI9BTgIT-JyrIcomOznc8",
  authDomain: "its-box.firebaseapp.com",
  projectId: "its-box",
  storageBucket: "its-box.appspot.com",
  messagingSenderId: "564967741711",
  appId: "1:564967741711:web:9f88ec504cdd94fe51467a",
  measurementId: "G-Z62P3SLRSQ"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
getAuth(app);
const Landing_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1w7casm{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}img.svelte-1w7casm{width:20rem;height:auto}.title.svelte-1w7casm{font-size:3rem;margin-block:1rem}a.svelte-1w7casm{text-decoration:none;color:#1e1e1e}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new GoogleAuthProvider();
  $$result.css.add(css);
  return `<main class="svelte-1w7casm"><img src="/cox.png" alt="Cat in a box" class="svelte-1w7casm"> <h1 class="fancy title svelte-1w7casm" data-svelte-h="svelte-e6rz1j">ITS Box</h1> <div><button data-svelte-h="svelte-aqtr0f">Login</button> <button class="secondary" data-svelte-h="svelte-1t65v28"><a href="/about" class="svelte-1w7casm">About</a></button></div> </main>`;
});
const CardModal_svelte_svelte_type_style_lang = "";
const Card_svelte_svelte_type_style_lang = "";
const IdeaModal_svelte_svelte_type_style_lang = "";
const Ideas_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${` ${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
