(() => {
  const mod = new Mod("red-queen");
  mod.name = "Red Queen";

  mod.loadImage("Queen-Body-Default", "assets/Queen-Body-RedHair.png");

  mod.init = () => {
    // Add setup code here
  };

  mod.boot = () => {
    // Add on reload code here
  }
})();
