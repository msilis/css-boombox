addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const stopButton = document.getElementById("stopButton");
  const leftSpool = document.getElementById("leftSpoolInner");
  const rightSpool = document.getElementById("rightSpoolInner");
  const ejectButton = document.getElementById("ejectButton");
  const cassetteContainer = document.querySelector(".cassetteContainer");
  const cassetteSpoolRight = document.querySelector(".cassetteSpoolRight");
  const cassetteSpoolLeft = document.querySelector(".cassetteSpoolLeft");

  const getCssRules = (selector) => {
    const allRules = document.styleSheets;

    for (const sheet of allRules) {
      try {
        const rules = sheet.cssRules;
        const rule = [...rules].find((rule) => rule.selectorText === selector);
        if (rule) return rule;
      } catch (error) {
        console.error(
          (`Error accessing CSS rule for selector '${selector}':`, error),
        );
      }
      return null;
    }
  };

  const stylesheet = document.styleSheets;
  let doorOpen = false;

  const handlePlayClick = () => {
    leftSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
    );
    rightSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
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
  };

  const handleEjectClick = () => {
    cassetteContainer.classList.add("cassetteContainerOpen");
    cassetteSpoolLeft.classList.add("cassetteSpoolAnimation");
    cassetteSpoolRight.classList.add("cassetteSpoolAnimation");
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
      doorOpen = false;
    }
  };

  playButton.addEventListener("click", handlePlayClick);
  stopButton.addEventListener("click", handleStopClick);
  ejectButton.addEventListener("click", handleEjectClick);
  cassetteContainer.addEventListener("mouseover", handleCassetteHover);
  cassetteContainer.addEventListener("click", handleCassetteClose);
});
