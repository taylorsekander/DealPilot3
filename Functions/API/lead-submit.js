/* Cloudflare Pages Functions wrapper.

   File-based routing: this file answers /api/lead-submit.

   Workers has no process.env — bindings arrive on context.env, which is why the
   core takes env as a parameter rather than reading globals. Same core module as
   the Netlify build, so a fix in shared/lead-core.js lands on both platforms. */
import { handleLeadSubmit } from "../../shared/lead-core.js";

export const onRequest = (context) => handleLeadSubmit(context.request, context.env);
