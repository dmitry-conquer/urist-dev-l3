import MicroModal from "micromodal";

const videosWrapper = document.querySelectorAll("[data-video]");
const videoHolder = document.getElementById("video-holder");

videosWrapper.forEach(el => {
  const video = el.querySelector("video");
  el.addEventListener("click", () => {
    videoHolder.innerHTML = "";
    videoHolder.append(video);
    video.play();
    MicroModal.show("popup", {
      disableScroll: true,
      onClose: modal => video.pause(),
    });
  });
});
