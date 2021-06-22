let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".inner-record");
let capturePhoto = document.querySelector(".inner-capture");
let recordingState = false;
let mediaRecorder;

(async function () {
  let constraint = { video: true };
  let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
  videoElement.srcObject = mediaStream;
  mediaRecorder = new MediaRecorder(mediaStream);
  mediaRecorder.onstart = function () {
    console.log("Inside on start");
  };
  mediaRecorder.ondataavailable = function (e) {
    console.log("Inside on data available");
    console.log(e.data);
    let videoObject = new Blob([e.data], { type: "video/mp4" });
    // console.log(videoObject);
    // videoObject/imageObject => URL
    // aTag

    let videoURL = URL.createObjectURL(videoObject);
    let aTag = document.createElement("a");
    aTag.download = `Video${Date.now()}.mp4`;
    aTag.href = videoURL;
    aTag.click();
  };
  mediaRecorder.onstop = function () {
    console.log("Inside on stop");
  };

  recordButton.addEventListener("click", function () {
    if (recordingState) {
      // already recording is going on
      // stop the recording
      mediaRecorder.stop();
      recordingState = false;
      recordButton.classList.remove("animate-record");
    } else {
      // start the recording
      mediaRecorder.start();
      recordingState = true;
      recordButton.classList.add("animate-record");      
    }
  });

  capturePhoto.addEventListener("click", function () {
    capturePhoto.classList.add("animate-capture");

    setTimeout( function(){
      capturePhoto.classList.remove("animate-capture");
    }   , 1000  );

    //   canvas
    let canvas = document.createElement("canvas");
    canvas.width = 640; //video width
    canvas.height = 480; // video height

    let ctx = canvas.getContext("2d");

    ctx.drawImage(videoElement, 0, 0);
    
    // download canvas as an image
    let aTag = document.createElement("a");
    aTag.download = `Image${Date.now()}.jpg`;
    aTag.href = canvas.toDataURL("image/jpg");
    aTag.click();
  });
})();
