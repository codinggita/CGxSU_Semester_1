# Topic 25 — Logging & Monitoring Assignment

## Objective
Add basic logging, error monitoring, and performance/availability checks to the E-commerce application.

## Requirements

1. **Application logging**
   - Add useful logs to at least two important server-side operations (for example, product retrieval and order creation).
   - Use consistent event names and avoid logging sensitive information.

2. **Error handling**
   - Implement or review an appropriate `error.tsx` fallback for a relevant route segment.
   - Ensure API errors return safe, user-facing messages without exposing stack traces or internal details.

3. **Error monitoring**
   - Integrate Sentry (or another instructor-approved error monitoring service) into the Next.js application.
   - Verify that a test error can be captured and viewed in the monitoring dashboard.

4. **Health check**
   - Create a `/api/health` endpoint that returns a simple status response indicating that the application is running.
   - If practical, check database connectivity and report the result without exposing credentials or internal connection details.

5. **Performance review**
   - Identify one page or operation that could be slow.
   - Measure or inspect its loading/request performance and document one improvement you made or would recommend.

## Submission

- Commit the implementation to your project repository.
- Add a `README.md` section describing the monitoring setup, how to verify the test error, the health-check endpoint, and the performance observation.
- Include screenshots of the monitoring dashboard/test error and health-check response.
