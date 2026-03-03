// Anonymization Worker
// Strips personal identifiers from raw events

const anonymizeEvent = (event) => {
    const anonymized = { ...event };
    
    // Remove personal identifiers
    delete anonymized.ip_address;
    delete anonymized.user_agent;
    delete anonymized.email;

    // Hash any remaining user ID
    if (anonymized.user_id) {
        anonymized.user_id = require('crypto')
            .createHash('sha256')
            .update(anonymized.user_id.toString())
            .digest('hex');
    }

    return anonymized;
};

// TODO: Connect to message queue and process incoming events
module.exports = { anonymizeEvent };
