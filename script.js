"Use strict";

// Not using jquery with nodelists, so they need to be targetted

const GaliciaRegionNodeList = document.querySelectorAll(".GaliciaRegion");
const AsturiasRegionNodeList = document.querySelectorAll(".AsturiasRegion");
const CantabriaRegionNodeList = document.querySelectorAll(".CantabriaRegion");
const BasqueCountryRegionNodeList = document.querySelectorAll(
  ".BasqueCountryRegion"
);
const NavarraRegionNodeList = document.querySelectorAll(".NavarraRegion");
const AragonRegionNodeList = document.querySelectorAll(".AragonRegion");
const CataloniaRegionNodeList = document.querySelectorAll(".CataloniaRegion");
const LaRiojaRegionNodeList = document.querySelectorAll(".LaRiojaRegion");
const CastileYLeonRegionNodeList = document.querySelectorAll(
  ".CastileYLeonRegion"
);
const MadridRegionNodeList = document.querySelectorAll(".MadridRegion");
const ExtremaduraRegionNodeList =
  document.querySelectorAll(".ExtremaduraRegion");
const CastileLaManchaRegionNodeList = document.querySelectorAll(
  ".CastileLaManchaRegion"
);
const ValenciaRegionNodeList = document.querySelectorAll(".ValenciaRegion");
const MurciaRegionNodeList = document.querySelectorAll(".MurciaRegion");
const AndalusiaRegionNodeList = document.querySelectorAll(".AndalusiaRegion");

const RegionHoverEffects = function (
  regionListItem = null,
  regionBox = null,
  regionLegendText = null,
  regionNodeList = null,
  lighterColourChange = null,
  strokeColour = null
) {
  $(regionListItem).hover(
    function () {
      console.log("Hovering list item");
      $(regionBox).css({
        "background-color": lighterColourChange,
        transition: "0.6s",
      });
      $(regionLegendText).css("font-weight", "bold");
      regionNodeList.forEach((element) => {
        element.style.fill = lighterColourChange;
        element.style.stroke = strokeColour;
        element.style.transition = "0.6s";
      });
    },
    function () {
      console.log("Hovering elsewhere");
      $(regionBox).css({ "background-color": "", transition: "0.6s" });
      $(regionLegendText).css("font-weight", "");
      regionNodeList.forEach((element) => {
        element.style.fill = "";
        element.style.stroke = ""; // set fill and stroke to nothing so orignal mouse hovering on map is not overwritten - GENIUS - https://stackoverflow.com/questions/4252496/jquery-hover-overwrite-the-css-ahover-color
        element.style.transition = "0.6s";
      });
    }
  );
};

RegionHoverEffects(
  ".GaliciaListItem",
  "#GaliciaBox",
  ".GaliciaLegendText",
  GaliciaRegionNodeList,
  "#26a626",
  "white"
);

RegionHoverEffects(
  ".AsturiasListItem",
  "#AsturiasBox",
  ".AsturiasLegendText",
  AsturiasRegionNodeList,
  "#ffa633",
  "black"
);

RegionHoverEffects(
  ".CantabriaListItem",
  "#CantabriaBox",
  ".CantabriaLegendText",
  CantabriaRegionNodeList,
  "#ff66ff",
  "white"
);

RegionHoverEffects(
  ".BasqueCountryListItem",
  "#BasqueCountryBox",
  ".BasqueCountryLegendText",
  BasqueCountryRegionNodeList,
  "#44c7bc",
  "white"
);

RegionHoverEffects(
  ".NavarraListItem",
  "#NavarraBox",
  ".NavarraLegendText",
  NavarraRegionNodeList,
  "#ffeac3",
  "black"
);

RegionHoverEffects(
  ".AragonListItem",
  "#AragonBox",
  ".AragonLegendText",
  AragonRegionNodeList,
  "#c05cff",
  "white"
);

RegionHoverEffects(
  ".CataloniaListItem",
  "#CataloniaBox",
  ".CataloniaLegendText",
  CataloniaRegionNodeList,
  "#f4626e",
  "white"
);

RegionHoverEffects(
  ".LaRiojaListItem",
  "#LaRiojaBox",
  ".LaRiojaLegendText",
  LaRiojaRegionNodeList,
  "#cdc6bf",
  "#cdc6bf"
);

RegionHoverEffects(
  ".CastileYLeonListItem",
  "#CastileYLeonBox",
  ".CastileYLeonLegendText",
  CastileYLeonRegionNodeList,
  "#635bd2",
  "white"
);

RegionHoverEffects(
  ".MadridListItem",
  "#MadridBox",
  ".MadridLegendText",
  MadridRegionNodeList,
  "#62ff6b",
  "#62ff6b"
);

RegionHoverEffects(
  ".ExtremaduraListItem",
  "#ExtremaduraBox",
  ".ExtremaduraLegendText",
  ExtremaduraRegionNodeList,
  "#3fd9ff",
  "black"
);

RegionHoverEffects(
  ".CastileLaManchaListItem",
  "#CastileLaManchaBox",
  ".CastileLaManchaLegendText",
  CastileLaManchaRegionNodeList,
  "#ffc1d3",
  "black"
);

RegionHoverEffects(
  ".ValenciaListItem",
  "#ValenciaBox",
  ".ValenciaLegendText",
  ValenciaRegionNodeList,
  "#ffff33",
  "black"
);

RegionHoverEffects(
  ".MurciaListItem",
  "#MurciaBox",
  ".MurciaLegendText",
  MurciaRegionNodeList,
  "#bd864f",
  "black"
);

RegionHoverEffects(
  ".AndalusiaListItem",
  "#AndalusiaBox",
  ".AndalusiaLegendText",
  AndalusiaRegionNodeList,
  "#cc4444",
  "black"
);
