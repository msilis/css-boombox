addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const stopButton = document.getElementById("stopButton");
  const leftSpool = document.getElementById("leftSpoolInner");
  const rightSpool = document.getElementById("rightSpoolInner");

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

  const handlePlayClick = () => {
    leftSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
    );
    rightSpool.style.setProperty(
      "animation",
      "cassettePlayAnimation 2s linear infinite",
    );
    playButton.style.setProperty("transform", "perspective(500px')");

    playButton.style.setProperty("transform", "rotateX(-20deg)");

    playButton.style.setProperty("transform-origin", "top");
  };

  const handleStopClick = () => {
    leftSpool.style.removeProperty("animation");
    rightSpool.style.removeProperty("animation");
    playButton.style.removeProperty("transform");
  };

  playButton.addEventListener("click", handlePlayClick);
  stopButton.addEventListener("click", handleStopClick);
});
