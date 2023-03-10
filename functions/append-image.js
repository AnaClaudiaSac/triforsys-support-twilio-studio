exports.handler = function (context, event, callback) {

    if (event.image.includes('https://api.twilio.com/')) {
        let images = [];

        if (event.ticket_images) {
            images = JSON.parse(event.ticket_images)
        }

        images.push(event.image.trim())

        return callback(null, images);
    }

    return callback(true, null);
};