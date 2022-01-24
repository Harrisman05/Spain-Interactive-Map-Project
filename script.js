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
const BalearicIslandsNodeList = document.querySelectorAll(".BalearicIslands");
const ProvincesOfLasPalmasNodeList = document.querySelectorAll(
  ".ProvincesOfLasPalmas"
);
const ProvincesOfSantaCruzDeTenerifeNodeList = document.querySelectorAll(
  ".ProvincesOfSantaCruzDeTenerife"
);
const EnclavesNodeList = document.querySelectorAll(".Enclaves");

$(".tooltip").hide();
$(".modalOverlay").hide();

const allRegions = [
  "Galicia",
  "Asturias",
  "Cantabria",
  "BasqueCountry",
  "Navarra",
  "Aragon",
  "Catalonia",
  "LaRioja",
  "CastileYLeon",
  "Madrid",
  "Extremadura",
  "CastileLaMancha",
  "Valencia",
  "Murcia",
  "Andalusia",
  "BalearicIslands",
  "ProvincesOfLasPalmas",
  "ProvincesOfSantaCruzDeTenerife",
  "Enclaves",
];

const regionsObj = {
  Galicia: {
    listClass: ".GaliciaListItem",
    boxId: "#GaliciaBox",
    textClass: ".GaliciaLegendText",
    provinceNodeList: GaliciaRegionNodeList,
    lighterColourChange: "#26a626",
    strokeColour: "white",
  },
  Asturias: {
    listClass: ".AsturiasListItem",
    boxId: "#AsturiasBox",
    textClass: ".AsturiasLegendText",
    provinceNodeList: AsturiasRegionNodeList,
    lighterColourChange: "#ffa633",
    strokeColour: "black",
  },
  Cantabria: {
    listClass: ".CantabriaListItem",
    boxId: "#CantabriaBox",
    textClass: ".CantabriaLegendText",
    provinceNodeList: CantabriaRegionNodeList,
    lighterColourChange: "#ff66ff",
    strokeColour: "white",
  },
  BasqueCountry: {
    listClass: ".BasqueCountryListItem",
    boxId: "#BasqueCountryBox",
    textClass: ".BasqueCountryLegendText",
    provinceNodeList: BasqueCountryRegionNodeList,
    lighterColourChange: "#44c7bc",
    strokeColour: "white",
  },
  Navarra: {
    listClass: ".NavarraListItem",
    boxId: "#NavarraBox",
    textClass: ".NavarraLegendText",
    provinceNodeList: NavarraRegionNodeList,
    lighterColourChange: "#ffeac3",
    strokeColour: "black",
  },
  Aragon: {
    listClass: ".AragonListItem",
    boxId: "#AragonBox",
    textClass: ".AragonLegendText",
    provinceNodeList: AragonRegionNodeList,
    lighterColourChange: "#c05cff",
    strokeColour: "white",
  },
  Catalonia: {
    listClass: ".CataloniaListItem",
    boxId: "#CataloniaBox",
    textClass: ".CataloniaLegendText",
    provinceNodeList: CataloniaRegionNodeList,
    lighterColourChange: "#f4626e",
    strokeColour: "white",
  },
  LaRioja: {
    listClass: ".LaRiojaListItem",
    boxId: "#LaRiojaBox",
    textClass: ".LaRiojaLegendText",
    provinceNodeList: LaRiojaRegionNodeList,
    lighterColourChange: "#cdc6bf",
    strokeColour: "#cdc6bf",
  },
  CastileYLeon: {
    listClass: ".CastileYLeonListItem",
    boxId: "#CastileYLeonBox",
    textClass: ".CastileYLeonLegendText",
    provinceNodeList: CastileYLeonRegionNodeList,
    lighterColourChange: "#635bd2",
    strokeColour: "white",
  },
  Madrid: {
    listClass: ".MadridListItem",
    boxId: "#MadridBox",
    textClass: ".MadridLegendText",
    provinceNodeList: MadridRegionNodeList,
    lighterColourChange: "#ffff33",
    strokeColour: "black",
  },
  Extremadura: {
    listClass: ".ExtremaduraListItem",
    boxId: "#ExtremaduraBox",
    textClass: ".ExtremaduraLegendText",
    provinceNodeList: ExtremaduraRegionNodeList,
    lighterColourChange: "#3fd9ff",
    strokeColour: "black",
  },
  CastileLaMancha: {
    listClass: ".CastileLaManchaListItem",
    boxId: "#CastileLaManchaBox",
    textClass: ".CastileLaManchaLegendText",
    provinceNodeList: CastileLaManchaRegionNodeList,
    lighterColourChange: "#ffc1d3",
    strokeColour: "black",
  },
  Valencia: {
    listClass: ".ValenciaListItem",
    boxId: "#ValenciaBox",
    textClass: ".ValenciaLegendText",
    provinceNodeList: ValenciaRegionNodeList,
    lighterColourChange: "#547254",
    strokeColour: "white",
  },
  Murcia: {
    listClass: ".MurciaListItem",
    boxId: "#MurciaBox",
    textClass: ".MurciaLegendText",
    provinceNodeList: MurciaRegionNodeList,
    lighterColourChange: "#bd864f",
    strokeColour: "black",
  },
  Andalusia: {
    listClass: ".AndalusiaListItem",
    boxId: "#AndalusiaBox",
    textClass: ".AndalusiaLegendText",
    provinceNodeList: AndalusiaRegionNodeList,
    lighterColourChange: "#cc4444",
    strokeColour: "white",
  },
  BalearicIslands: {
    listClass: ".BalearicIslandsListItem",
    boxId: "#BalearicIslandsBox",
    textClass: ".BalearicIslandsLegendText",
    provinceNodeList: BalearicIslandsNodeList,
    lighterColourChange: "#80b350",
    strokeColour: "#3d2b1f",
  },
  ProvincesOfLasPalmas: {
    listClass: ".ProvincesOfLasPalmasListItem",
    boxId: "#ProvincesOfLasPalmasBox",
    textClass: ".ProvincesOfLasPalmasLegendText",
    provinceNodeList: ProvincesOfLasPalmasNodeList,
    lighterColourChange: "#ffc74d",
    strokeColour: "#000000",
  },
  ProvincesOfSantaCruzDeTenerife: {
    listClass: ".ProvincesOfSantaCruzDeTenerifeListItem",
    boxId: "#ProvincesOfSantaCruzDeTenerifeBox",
    textClass: ".ProvincesOfSantaCruzDeTenerifeLegendText",
    provinceNodeList: ProvincesOfSantaCruzDeTenerifeNodeList,
    lighterColourChange: "#ff4da6",
    strokeColour: "#000000",
  },
  Enclaves: {
    listClass: ".EnclavesListItem",
    boxId: "#EnclavesBox",
    textClass: ".EnclavesLegendText",
    provinceNodeList: EnclavesNodeList,
    lighterColourChange: "#67dfff",
    strokeColour: "#000000",
  },
};

////////////////////////////////////////// Legend Effect Function Creation /////////////////////////////////

const legendHoverEffects = function (
  regionListItem,
  regionBox,
  regionLegendText,
  regionNodeList,
  lighterColourChange,
  strokeColour
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

//////////////////////////////////////////////// Legend Effects Function Calls in for loop ////////////////////////////////////////

for (let i = 0; i < allRegions.length; i++) {
  let region = allRegions[i];

  legendHoverEffects(
    regionsObj[region].listClass,
    regionsObj[region].boxId,
    regionsObj[region].textClass,
    regionsObj[region].provinceNodeList,
    regionsObj[region].lighterColourChange,
    regionsObj[region].strokeColour
  );
}

//////////////////////////////////////////// Map Hover Function Creation ////////////////////////////////////

const mapHoverEffects = function (
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

////////////////////////////////// Map Hover effects function calls in for loop

for (let i = 0; i < allRegions.length; i++) {
  let region = allRegions[i];

  mapHoverEffects(
    regionsObj[region].provinceNodeList,
    regionsObj[region].lighterColourChange,
    regionsObj[region].strokeColour
  );
}

////////////////////////////////// Tooltip function on Map Hover

const mapToolTipHover = function (regionNodeList) {
  //https://stackoverflow.com/questions/42791168/how-to-make-tooltip-follow-cursor
  $(regionNodeList).hover(
    function () {
      $(this).on("mousemove", (e) => {
        $(".tooltip").show();
        $(".tooltip").text(this.id); //https://stackoverflow.com/questions/30570638/get-id-attribute-from-a-node-in-nodelist

        let xOffset = e.pageX;
        let yOffset = 30 + e.pageY;

        $(".tooltip").css({
          left: xOffset,
          top: yOffset,
        });
      });
    },
    function () {
      $(".tooltip").hide();
    }
  );
};

///////////////////////////////// Tooltip function calls on all regions

for (let i = 0; i < allRegions.length; i++) {
  let region = allRegions[i];

  mapToolTipHover(regionsObj[region].provinceNodeList);
}

//////////////////////////////////// Open and Closing of Modal

const showAndCloseModal = function () {
  $(".howToUseButton").click(function () {
    $(".modalOverlay").show();

    $(".mapContainer").click(function () {
      $(".modalOverlay").hide();
    });

    window.onclick = function (e) {
      if (
        e.target.className === "modalFlexContainer" ||
        e.target.className === "closeModalButton"
      ) {
        $(".modalOverlay").hide();
      }
    };

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        $(".modalOverlay").hide();
      }
    });
  });
};

showAndCloseModal();
