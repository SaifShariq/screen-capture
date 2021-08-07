const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream, pass to video element and then play.
async function selectMediaStream() {
    try {
        // Screen Capture Web API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        // On loaded metadata will equal to True once loaded
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        console.log('Ooops! You\'ve faced a', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();