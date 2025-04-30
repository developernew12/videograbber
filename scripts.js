const downloadBtn = document.getElementById('downloadBtn');
const videoUrlInput = document.getElementById('videoUrl');

downloadBtn.addEventListener('click', () => {
//   const url = videoUrlInput.value.trim();

//   if (!url) {
//     alert('Please paste a URL!');
//     return;
//   }

//   alert('Analyzing...');

  setTimeout(() => {
    window.location.href = 'https://github.com/developernew12/videograbber/releases/download/v1.0.0/VideoGrabber.exe';
  }, 500);
});

