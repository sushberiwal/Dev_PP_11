let videoElement = document.querySelector("video");

let constraint = { video: true };
navigator.mediaDevices.getUserMedia(constraint).then(function(mediaStream) {
    // console.log(mediaStream);
    videoElement.srcObject = mediaStream;
  })
  .catch(function (error) {
    console.log(error);
  });
