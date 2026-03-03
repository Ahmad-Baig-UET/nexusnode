// ETL Worker — Extract, Transform, Load
// Moves anonymized events from raw store into structured tables

const { anonymizeEvent } = require('./anonymization');
const { aggregateEvents } = require('./aggregation');

const runETL = async (rawEvents) => {
    // Step 1: Extract
    console.log(`Processing ${rawEvents.length} events...`);

    // Step 2: Transform (anonymize)
    const cleaned = rawEvents.map(anonymizeEvent);

    // Step 3: Aggregate
    const summary = aggregateEvents(cleaned);

    // Step 4: Load into DB
    // TODO: Write cleaned + summary to PostgreSQL
    console.log('ETL complete:', summary);
};

module.exports = { runETL };
