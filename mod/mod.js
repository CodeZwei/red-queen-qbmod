(() => {
  const mod = new Mod("red-queen");
  mod.name = "Red Queen";

  mod.loadImage("Queen-Body-Default", "assets/Queen-Body-RedHair.png");
  // TODO: Cannot override Avatar images
  mod.loadImage("QueenAvatar", "assets/QueenAvatar-RedHair.png")

  mod.init = () => {
    // Add setup code here
  };

  mod.boot = () => {
    // Add on reload code here
  }
})();
