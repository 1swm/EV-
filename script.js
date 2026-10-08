const videoInput = document.getElementById("videoInput");
const processButton = document.getElementById("processButton");
const fileName = document.getElementById("fileName");
const status = document.getElementById("status");

videoInput.addEventListener("change", () => {
  if (videoInput.files.length > 0) {
    const video = videoInput.files[0];
    
    fileName.textContent = video.name;
    status.textContent = "Video loaded ✓";
  }
});

processButton.addEventListener("click", () => {
  if (!videoInput.files.length) {
    status.textContent = "Select a video first";
    return;
  }
  
  const video = videoInput.files[0];
  
  status.textContent = `Ready: ${video.name}`;
});