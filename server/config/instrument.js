// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
// import {nodeProfilingIntegration } from "@sentry/profiling-node"


Sentry.init({
  dsn: "https://eeab24ef30cf03edffb3d51e751074ba@o4509549385875457.ingest.us.sentry.io/4509549800849408",
  integrations: [Sentry.mongooseIntegration()], 


  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});