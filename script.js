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

////////////////////////////////////////// Legend Effect Function Creation /////////////////////////////////

const LegendHoverEffects = function (
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

//////////////////////////////////////////////// Legend Effects Function Calls ////////////////////////////////////////

LegendHoverEffects(
  ".GaliciaListItem",
  "#GaliciaBox",
  ".GaliciaLegendText",
  GaliciaRegionNodeList,
  "#26a626",
  "white"
);

LegendHoverEffects(
  ".AsturiasListItem",
  "#AsturiasBox",
  ".AsturiasLegendText",
  AsturiasRegionNodeList,
  "#ffa633",
  "black"
);

LegendHoverEffects(
  ".CantabriaListItem",
  "#CantabriaBox",
  ".CantabriaLegendText",
  CantabriaRegionNodeList,
  "#ff66ff",
  "white"
);

LegendHoverEffects(
  ".BasqueCountryListItem",
  "#BasqueCountryBox",
  ".BasqueCountryLegendText",
  BasqueCountryRegionNodeList,
  "#44c7bc",
  "white"
);

LegendHoverEffects(
  ".NavarraListItem",
  "#NavarraBox",
  ".NavarraLegendText",
  NavarraRegionNodeList,
  "#ffeac3",
  "black"
);

LegendHoverEffects(
  ".AragonListItem",
  "#AragonBox",
  ".AragonLegendText",
  AragonRegionNodeList,
  "#c05cff",
  "white"
);

LegendHoverEffects(
  ".CataloniaListItem",
  "#CataloniaBox",
  ".CataloniaLegendText",
  CataloniaRegionNodeList,
  "#f4626e",
  "white"
);

LegendHoverEffects(
  ".LaRiojaListItem",
  "#LaRiojaBox",
  ".LaRiojaLegendText",
  LaRiojaRegionNodeList,
  "#cdc6bf",
  "#cdc6bf"
);

LegendHoverEffects(
  ".CastileYLeonListItem",
  "#CastileYLeonBox",
  ".CastileYLeonLegendText",
  CastileYLeonRegionNodeList,
  "#635bd2",
  "white"
);

LegendHoverEffects(
  ".MadridListItem",
  "#MadridBox",
  ".MadridLegendText",
  MadridRegionNodeList,
  "#ffff33",
  "black"
);

LegendHoverEffects(
  ".ExtremaduraListItem",
  "#ExtremaduraBox",
  ".ExtremaduraLegendText",
  ExtremaduraRegionNodeList,
  "#3fd9ff",
  "black"
);

LegendHoverEffects(
  ".CastileLaManchaListItem",
  "#CastileLaManchaBox",
  ".CastileLaManchaLegendText",
  CastileLaManchaRegionNodeList,
  "#ffc1d3",
  "black"
);

LegendHoverEffects(
  ".ValenciaListItem",
  "#ValenciaBox",
  ".ValenciaLegendText",
  ValenciaRegionNodeList,
  "#547254",
  "white"
);

LegendHoverEffects(
  ".MurciaListItem",
  "#MurciaBox",
  ".MurciaLegendText",
  MurciaRegionNodeList,
  "#bd864f",
  "black"
);

LegendHoverEffects(
  ".AndalusiaListItem",
  "#AndalusiaBox",
  ".AndalusiaLegendText",
  AndalusiaRegionNodeList,
  "#cc4444",
  "white"
);

//////////////////////////////////////////// Map Hover Function Creation ////////////////////////////////////

const MapHoverEffects = function (
  regionNodeList,
  provinceFillColour,
  strokeColour
) {
  $(regionNodeList).hover(
    function () {
      $(this).css("fill", provinceFillColour);
      regionNodeList.forEach((element) => {
        element.style.stroke = strokeColour;
        element.style.transition = "0.6s";
      });
    },
    function () {
      $(this).css("fill", "");
      regionNodeList.forEach((element) => {
        element.style.stroke = "";
        element.style.transition = "0.6s";
      });
    }
  );
};

MapHoverEffects(GaliciaRegionNodeList, "#26a626", "white");
MapHoverEffects(AsturiasRegionNodeList, "#ffa633", "black");
MapHoverEffects(CantabriaRegionNodeList, "#ff66ff", "white");
MapHoverEffects(BasqueCountryRegionNodeList, "#44c7bc", "white");
MapHoverEffects(NavarraRegionNodeList, "#ffeac3", "black");
MapHoverEffects(AragonRegionNodeList, "#c05cff", "white");
MapHoverEffects(LaRiojaRegionNodeList, "#cdc6bf", "");
MapHoverEffects(CataloniaRegionNodeList, "#f4626e", "white");
MapHoverEffects(CastileYLeonRegionNodeList, "#635bd2", "white");
MapHoverEffects(MadridRegionNodeList, "#ffff33", "black");
MapHoverEffects(ExtremaduraRegionNodeList, "#3fd9ff", "white");
MapHoverEffects(CastileLaManchaRegionNodeList, "#ffc1d3", "black");
MapHoverEffects(ValenciaRegionNodeList, "#547254", "white");
MapHoverEffects(MurciaRegionNodeList, "#bd864f", "black");
MapHoverEffects(AndalusiaRegionNodeList, "#cc4444", "white");
