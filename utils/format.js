// Function to format the current timestamp
function getCurrentTimestamp() {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    }).format(date);
}

module.exports.getCurrentTimestamp = getCurrentTimestamp;