import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1e8gc80.svelte-1e8gc80{background-color:#212431}.wrapper.svelte-1e8gc80.svelte-1e8gc80{display:flex;flex-direction:row;min-height:0;flex-wrap:wrap;justify-content:space-between;gap:2rem;padding:1rem;color:white}.wrapper.svelte-1e8gc80 div.svelte-1e8gc80{min-width:10rem;flex:1}.wrapper.svelte-1e8gc80 a.svelte-1e8gc80{color:white}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="footer svelte-1e8gc80" data-svelte-h="svelte-vlgjis"><div class="wrapper svelte-1e8gc80"><div class="wrapper svelte-1e8gc80"><div class="svelte-1e8gc80"><h4>The Box</h4> <p>An online tool for sharing your ideas for the council of Intertots Trillingual School.</p></div> <div class="svelte-1e8gc80"><p>Made with 😿 by <a href="https://bento.me/patato" class="svelte-1e8gc80">Patato</a></p></div> <div class="svelte-1e8gc80"><a href="/about" class="svelte-1e8gc80">About</a></div> <div class="svelte-1e8gc80"><a href="https://github.com/patatobit/its-box" target="_blank" class="svelte-1e8gc80">Source Code</a></div></div></div> </footer>`;
});
const globals = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
