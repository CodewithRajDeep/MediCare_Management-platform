import * as Sentry from "@sentry/nextjs";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://b26c6a15680e1034e9e2f2d4c9580ca4@o4508009062727680.ingest.de.sentry.io/4509202509004880",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1, // Capture 100% of traces. Adjust as necessary.

  // Enable profiling with the nodeProfilingIntegration
  integrations: [
    nodeProfilingIntegration(), // Add the profiling integration
  ],

  // Profile session sampling rate (this will control how many sessions are profiled)
  profileSessionSampleRate: 1.0, // Profile 100% of sessions. You can adjust this value based on your needs.

  // Lifecycle of the profiling: Automatically enable profiling during active traces
  profileLifecycle: 'trace', // Profiling will be attached to active traces

  // Optional: Set to true for debugging information in the console during setup
  debug: false,
});
