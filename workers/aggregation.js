// Aggregation Worker
// Summarizes raw events into meaningful metrics

const aggregateEvents = (events) => {
    const summary = {
        total_events: events.length,
        by_type: {},
        by_website: {}
    };

    events.forEach(event => {
        // Count by event type
        summary.by_type[event.event_type] = 
            (summary.by_type[event.event_type] || 0) + 1;

        // Count by website
        summary.by_website[event.website_id] = 
            (summary.by_website[event.website_id] || 0) + 1;
    });

    return summary;
};

// TODO: Connect to message queue and process incoming events
module.exports = { aggregateEvents };
