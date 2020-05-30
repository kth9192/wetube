const recoderContainer = document.getElementById('jsRecordContainer');
const recordBtn = document.getElementById('jsRecordBtn');
const videoPreview = document.getElementById('jsVideoPreview');
let streamObject;
let vidoeRecoder;

const handleVideoData = (event) => {
  const { data: videoFile } = event;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(videoFile);
  link.download = 'record.webm';
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  vidoeRecoder.stop();
  recordBtn.removeEventListener('click', stopRecording);
  recordBtn.addEventListener('click', getVideo);
  recordBtn.innerHTML = 'Start Recording';
};
const startRecording = () => {
  vidoeRecoder = new MediaRecorder(streamObject);
  vidoeRecoder.start();
  vidoeRecoder.addEventListener('dataavailable', handleVideoData);
  recordBtn.addEventListener('click', stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = 'Stop Recording';
    streamObject = stream;
    startRecording();
  } catch (error) {
    console.log(error);

    recordBtn.innerHTML = '💦 현재 pc에 장비 없음';
  } finally {
    recordBtn.removeEventListener('click', getVideo);
  }
};

function init() {
  recordBtn.addEventListener('click', getVideo);
}

if (recoderContainer) {
  init();
}
