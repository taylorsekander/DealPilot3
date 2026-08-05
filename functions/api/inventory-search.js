/* Cloudflare Pages Functions wrapper.

   File-based routing: this file answers /api/inventory-search.

   Workers has no process.env — bindings arrive on context.env, which is why the
   core takes env as a parameter rather than reading globals. Same core module as
   the Netlify build, so a fix in shared/inventory-core.js lands on both platforms. */
import { handleInventorySearch } from "../../shared/inventory-core.js";

export const onRequest = (context) => handleInventorySearch(context.request, context.env);
