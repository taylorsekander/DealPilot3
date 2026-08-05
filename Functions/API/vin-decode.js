/* Cloudflare Pages Functions wrapper.

   File-based routing: this file answers /api/vin-decode.

   Workers has no process.env — bindings arrive on context.env, which is why the
   core takes env as a parameter rather than reading globals. Same core module as
   the Netlify build, so a fix in shared/vin-core.js lands on both platforms. */
import { handleVinDecode } from "../../shared/vin-core.js";

export const onRequest = (context) => handleVinDecode(context.request, context.env);
