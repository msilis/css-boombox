addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const stopButton = document.getElementById("stopButton");
  const leftSpool = document.getElementById("leftSpoolInner");
  const rightSpool = document.getElementById("rightSpoolInner");
  const ejectButton = document.getElementById("ejectButton");
  const cassetteContainer = document.querySelector(".cassetteContainer");
  const cassetteSpoolRight = document.querySelector(".cassetteSpoolRight");
  const cassetteSpoolLeft = document.querySelector(".cassetteSpoolLeft");
  const leftWoofer = document.querySelector(".boomboxWooferLeft");
  const rightWoofer = document.querySelector(".boomboxWooferRight");

  const stylesheet = document.styleSheets;
  let doorOpen = false;

  const handlePlayClick = () => {
    if (doorOpen) return;
    leftSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
    );
    rightSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
    );
    leftWoofer.style.setProperty(
      "animation",
      "wooferAnimation 0.5s linear infinite",
    );
    rightWoofer.style.setProperty(
      "animation",
      "wooferAnimation 0.5s linear infinite",
    );

    playButton.style.setProperty("transform", "rotateX(-20deg)");
    playButton.style.setProperty("transform-origin", "top");
    playButton.style.setProperty("box-shadow", "5px 5px 5px gray");
  };

  const handleStopClick = () => {
    leftSpool.style.removeProperty("animation");
    rightSpool.style.removeProperty("animation");
    playButton.style.removeProperty("transform");
    playButton.style.removeProperty("box-shadow");
    leftWoofer.style.removeProperty("animation");
    rightWoofer.style.removeProperty("animation");
  };

  const handleEjectClick = () => {
    if (cassetteContainer.classList.contains("cassetteContainerClosed")) {
      cassetteContainer.classList.remove("cassetteContainerClosed");
      cassetteSpoolLeft.classList.remove("cassetteSpoolAnimationClose");
      cassetteSpoolRight.classList.remove("cassetteSpoolAnimationClose");
    }

    if (leftSpool.style.animation) {
      leftSpool.style.removeProperty("animation");
      rightSpool.style.removeProperty("animation");
      playButton.style.removeProperty("transform");
      playButton.style.removeProperty("box-shadow");
    }
    cassetteContainer.classList.add("cassetteContainerOpen");
    cassetteSpoolLeft.classList.add("cassetteSpoolAnimationOpen");
    cassetteSpoolRight.classList.add("cassetteSpoolAnimationOpen");
    doorOpen = true;
  };

  const handleCassetteHover = () => {
    if (doorOpen) {
      cassetteContainer.style.setProperty("cursor", "pointer");
    }
    return;
  };

  const handleCassetteClose = () => {
    if (doorOpen) {
      cassetteContainer.style.removeProperty("cursor");
      cassetteContainer.classList.remove(".cassetteContainerOpen");
      cassetteContainer.classList.add("cassetteContainerClosed");
      cassetteSpoolLeft.classList.add("cassetteSpoolAnimationClose");
      cassetteSpoolRight.classList.add("cassetteSpoolAnimationClose");
      doorOpen = false;
    }
    return;
  };

  playButton.addEventListener("click", handlePlayClick);
  stopButton.addEventListener("click", handleStopClick);
  ejectButton.addEventListener("click", handleEjectClick);
  cassetteContainer.addEventListener("mouseover", handleCassetteHover);
  cassetteContainer.addEventListener("click", handleCassetteClose);
});
