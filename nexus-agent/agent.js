(function() {
    const INGEST_URL = 'https://your-api-url.com/ingest';
    const WEBSITE_ID = 'REPLACE_WITH_YOUR_WEBSITE_ID';

    const sendEvent = (eventType, payload) => {
        const data = JSON.stringify({
            website_id: WEBSITE_ID,
            event_type: eventType,
            payload: payload,
            timestamp: new Date().toISOString()
        });

        if (navigator.sendBeacon) {
            navigator.sendBeacon(INGEST_URL, data);
        } else {
            fetch(INGEST_URL, {
                method: 'POST',
                body: data,
                headers: { 'Content-Type': 'application/json' },


cat > nexus-agent/agent.min.js << 'EOF'
// Minified version — run: npx terser agent.js -o agent.min.js
