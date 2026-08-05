/* Cloudflare Pages Functions wrapper.

   File-based routing: this file answers /api/ai-summary.

   Workers has no process.env — bindings arrive on context.env, which is why the
   core takes env as a parameter rather than reading globals. Same core module as
   the Netlify build, so a fix in shared/ai-core.js lands on both platforms. */
import { handleAiSummary } from "../../shared/ai-core.js";

export const onRequest = (context) => handleAiSummary(context.request, context.env);
