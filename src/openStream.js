const playVideo = require('./playVideo');

function openStream(cb) {
	console.log("I;m trying to stream")
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            cb(stream);
        })
        .catch(err => console.log(err));
}

module.exports = openStream;
