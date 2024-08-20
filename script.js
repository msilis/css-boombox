addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const stopButton = document.getElementById("stopButton");
  const leftSpool = document.getElementById("leftSpoolInner");
  const rightSpool = document.getElementById("rightSpoolInner");
  const ejectButton = document.getElementById("ejectButton");
  const forwardButton = document.getElementById("forwardButton");
  const rewindButton = document.getElementById("rewindButton");
  const cassetteContainer = document.querySelector(".cassetteContainer");
  const cassetteSpoolRight = document.querySelector(".cassetteSpoolRight");
  const cassetteSpoolLeft = document.querySelector(".cassetteSpoolLeft");
  const leftWoofer = document.querySelector(".boomboxWooferLeft");
  const rightWoofer = document.querySelector(".boomboxWooferRight");
  const powerButton = document.getElementById("powerButton");
  const powerLight = document.querySelector(".powerLight");

  const stylesheet = document.styleSheets;
  let doorOpen = false;
  let power = false;

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
    if (forwardButton.style.transform) {
      forwardButton.style.removeProperty("transform");
      forwardButton.style.removeProperty("box-shadow");
    }
    if (rewindButton.style.transform) {
      rewindButton.style.removeProperty("transform");
      rewindButton.style.removeProperty("box-shadow");
    }
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
      leftWoofer.style.removeProperty("animation");
      rightWoofer.style.removeProperty("animation");
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

  const handleFastForwardClick = () => {
    handleStopClick();
    leftSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation .5s linear infinite",
    );
    rightSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation .5s linear infinite",
    );
    forwardButton.style.setProperty("transform", "rotateX(-20deg)");
    forwardButton.style.setProperty("transform-origin", "top");
    forwardButton.style.setProperty("box-shadow", "5px 5px 5px gray");
  };
  const handleRewindClick = () => {
    handleStopClick();
    leftSpool.style.setProperty(
      "animation",
      "cassetteRewindAnimation .5s linear infinite",
    );
    rightSpool.style.setProperty(
      "animation",
      "cassetteRewindAnimation .5s linear infinite",
    );
    rewindButton.style.setProperty("transform", "rotateX(-20deg)");
    rewindButton.style.setProperty("transform-origin", "top");
    rewindButton.style.setProperty("box-shadow", "5px 5px 5px gray");
  };

  const handlePowerClick = () => {
    console.log(power, "POWER");
    if (power === false) {
      console.log("power on");
      powerButton.style.setProperty("transform", "rotateX(-20deg)");
      powerButton.style.setProperty("box-shadow", "5px 5px 5px gray");
      powerLight.style.setProperty("box-shadow", "3px 3px 3px red");
      powerLight.style.setProperty("background-color", "red");
      power = true;
    } else {
      console.log("power off");
      powerButton.style.removeProperty("transform");
      powerButton.style.removeProperty("box-shadow");
      powerLight.style.removeProperty("box-shadow");
      powerLight.style.setProperty("background-color", "darkred");
      power = false;
    }
  };

  playButton.addEventListener("click", handlePlayClick);
  stopButton.addEventListener("click", handleStopClick);
  ejectButton.addEventListener("click", handleEjectClick);
  forwardButton.addEventListener("click", handleFastForwardClick);
  rewindButton.addEventListener("click", handleRewindClick);
  cassetteContainer.addEventListener("mouseover", handleCassetteHover);
  cassetteContainer.addEventListener("click", handleCassetteClose);
  powerButton.addEventListener("click", handlePowerClick);
});
