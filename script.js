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

const allProvinces = [
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "BalearicIslands",
  "Barcelona",
  "Bizkaia",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "CiudadReal",
  "Córdoba",
  "Cuenca",
  "Gipuzkoa",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Huelva",
  "Huesca",
  "Jaén",
  "LaCoruña",
  "LaRioja",
  "LasPalmas",
  "León",
  "Lérida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarre",
  "Orense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "SantaCruzdeTenerife",
  "Segovia",
  "Seville",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Zamora",
  "Zaragoza",
];

// console.log(allProvinces.length);

const ProvincesObj = {
  Álava: {
    population: 333626,
  },
  Albacete: {
    population: 386464,
  },
  Alicante: {
    population: 1881762,
  },
  Almería: {
    population: 731792,
  },
  Asturias: {
    population: 1011792,
  },
  Ávila: {
    population: 158421,
  },
  Badajoz: {
    population: 669943,
  },
  BalearicIslands: {
    population: 1173008,
  },
  Barcelona: {
    population: 5714730,
  },
  Bizkaia: {
    population: 1154334,
  },
  Burgos: {
    population: 356055,
  },
  Cáceres: {
    population: 389558,
  },
  Cádiz: {
    population: 1245960,
  },
  Cantabria: {
    population: 584507,
  },
  Castellón: {
    population: 587064,
  },
  CiudadReal: {
    population: 492591,
  },
  Córdoba: {
    population: 776789,
  },
  Cuenca: {
    population: 195516,
  },
  Gipuzkoa: {
    population: 726033,
  },
  Gerona: {
    population: 786596,
  },
  Granada: {
    population: 921338,
  },
  Guadalajara: {
    population: 265588,
  },
  Huelva: {
    population: 525835,
  },
  Huesca: {
    population: 224264,
  },
  Jaén: {
    population: 627190,
  },
  LaCoruña: {
    population: 1120134,
  },
  LaRioja: {
    population: 319796,
  },
  LasPalmas: {
    population: 1128539,
  },
  León: {
    population: 451706,
  },
  Lérida: {
    population: 439727,
  },
  Lugo: {
    population: 326013,
  },
  Madrid: {
    population: 6751251,
  },
  Málaga: {
    population: 1695651,
  },
  Murcia: {
    population: 1518486,
  },
  Navarre: {
    population: 661537,
  },
  Orense: {
    population: 305223,
  },
  Palencia: {
    population: 159123,
  },
  Pontevedra: {
    population: 944275,
  },
  Salamanca: {
    population: 327338,
  },
  SantaCruzdeTenerife: {
    population: 1044405,
  },
  Segovia: {
    population: 153663,
  },
  Seville: {
    population: 1947852,
  },
  Soria: {
    population: 88747,
  },
  Tarragona: {
    population: 822309,
  },
  Teruel: {
    population: 134545,
  },
  Toledo: {
    population: 709403,
  },
  Valencia: {
    population: 2589312,
  },
  Valladolid: {
    population: 519361,
  },
  Zamora: {
    population: 168725,
  },
  Zaragoza: {
    population: 967452,
  },
};

// console.log(Object.keys(ProvincesObj).length);

const islandsAndEnclaves = [
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
    population: 2695645,
  },
  Asturias: {
    listClass: ".AsturiasListItem",
    boxId: "#AsturiasBox",
    textClass: ".AsturiasLegendText",
    provinceNodeList: AsturiasRegionNodeList,
    lighterColourChange: "#ffa633",
    strokeColour: "black",
    population: 1011792,
  },
  Cantabria: {
    listClass: ".CantabriaListItem",
    boxId: "#CantabriaBox",
    textClass: ".CantabriaLegendText",
    provinceNodeList: CantabriaRegionNodeList,
    lighterColourChange: "#ff66ff",
    strokeColour: "white",
    population: 584507,
  },
  BasqueCountry: {
    listClass: ".BasqueCountryListItem",
    boxId: "#BasqueCountryBox",
    textClass: ".BasqueCountryLegendText",
    provinceNodeList: BasqueCountryRegionNodeList,
    lighterColourChange: "#44c7bc",
    strokeColour: "white",
    population: 2213993,
  },
  Navarra: {
    listClass: ".NavarraListItem",
    boxId: "#NavarraBox",
    textClass: ".NavarraLegendText",
    provinceNodeList: NavarraRegionNodeList,
    lighterColourChange: "#ffeac3",
    strokeColour: "black",
    population: 661537,
  },
  Aragon: {
    listClass: ".AragonListItem",
    boxId: "#AragonBox",
    textClass: ".AragonLegendText",
    provinceNodeList: AragonRegionNodeList,
    lighterColourChange: "#c05cff",
    strokeColour: "white",
    population: 1326261,
  },
  Catalonia: {
    listClass: ".CataloniaListItem",
    boxId: "#CataloniaBox",
    textClass: ".CataloniaLegendText",
    provinceNodeList: CataloniaRegionNodeList,
    lighterColourChange: "#f4626e",
    strokeColour: "white",
    population: 7763362,
  },
  LaRioja: {
    listClass: ".LaRiojaListItem",
    boxId: "#LaRiojaBox",
    textClass: ".LaRiojaLegendText",
    provinceNodeList: LaRiojaRegionNodeList,
    lighterColourChange: "#cdc6bf",
    strokeColour: "#cdc6bf",
    population: 319796,
  },
  CastileYLeon: {
    listClass: ".CastileYLeonListItem",
    boxId: "#CastileYLeonBox",
    textClass: ".CastileYLeonLegendText",
    provinceNodeList: CastileYLeonRegionNodeList,
    lighterColourChange: "#635bd2",
    strokeColour: "white",
    population: 2383139,
  },
  Madrid: {
    listClass: ".MadridListItem",
    boxId: "#MadridBox",
    textClass: ".MadridLegendText",
    provinceNodeList: MadridRegionNodeList,
    lighterColourChange: "#ffff33",
    strokeColour: "black",
    population: 6751251,
  },
  Extremadura: {
    listClass: ".ExtremaduraListItem",
    boxId: "#ExtremaduraBox",
    textClass: ".ExtremaduraLegendText",
    provinceNodeList: ExtremaduraRegionNodeList,
    lighterColourChange: "#3fd9ff",
    strokeColour: "black",
    population: 1059501,
  },
  CastileLaMancha: {
    listClass: ".CastileLaManchaListItem",
    boxId: "#CastileLaManchaBox",
    textClass: ".CastileLaManchaLegendText",
    provinceNodeList: CastileLaManchaRegionNodeList,
    lighterColourChange: "#ffc1d3",
    strokeColour: "black",
    population: 2049562,
  },
  Valencia: {
    listClass: ".ValenciaListItem",
    boxId: "#ValenciaBox",
    textClass: ".ValenciaLegendText",
    provinceNodeList: ValenciaRegionNodeList,
    lighterColourChange: "#547254",
    strokeColour: "white",
    population: 5058138,
  },
  Murcia: {
    listClass: ".MurciaListItem",
    boxId: "#MurciaBox",
    textClass: ".MurciaLegendText",
    provinceNodeList: MurciaRegionNodeList,
    lighterColourChange: "#bd864f",
    strokeColour: "black",
    population: 1518486,
  },
  Andalusia: {
    listClass: ".AndalusiaListItem",
    boxId: "#AndalusiaBox",
    textClass: ".AndalusiaLegendText",
    provinceNodeList: AndalusiaRegionNodeList,
    lighterColourChange: "#cc4444",
    strokeColour: "white",
    population: 8472407,
  },
  BalearicIslands: {
    listClass: ".BalearicIslandsListItem",
    boxId: "#BalearicIslandsBox",
    textClass: ".BalearicIslandsLegendText",
    provinceNodeList: BalearicIslandsNodeList,
    lighterColourChange: "#80b350",
    strokeColour: "#3d2b1f",
    islandRect: ".BalearicRect",
    population: 1173008,
  },
  ProvincesOfLasPalmas: {
    listClass: ".ProvincesOfLasPalmasListItem",
    boxId: "#ProvincesOfLasPalmasBox",
    textClass: ".ProvincesOfLasPalmasLegendText",
    provinceNodeList: ProvincesOfLasPalmasNodeList,
    lighterColourChange: "#ffc74d",
    strokeColour: "#000000",
    islandRect: ".GranCanariaRect",
    population: 1128539,
  },
  ProvincesOfSantaCruzDeTenerife: {
    listClass: ".ProvincesOfSantaCruzDeTenerifeListItem",
    boxId: "#ProvincesOfSantaCruzDeTenerifeBox",
    textClass: ".ProvincesOfSantaCruzDeTenerifeLegendText",
    provinceNodeList: ProvincesOfSantaCruzDeTenerifeNodeList,
    lighterColourChange: "#FF67C0",
    strokeColour: "#000000",
    islandRect: ".GranCanariaRect",
    population: 1044405,
  },
  Enclaves: {
    listClass: ".EnclavesListItem",
    boxId: "#EnclavesBox",
    textClass: ".EnclavesLegendText",
    provinceNodeList: EnclavesNodeList,
    lighterColourChange: "#67dfff",
    strokeColour: "#000000",
    islandRect: ".CeutaMelillaRect",
    population: 0,
  },
};

////////////////////////////////////////// Legend Effect Function Creation /////////////////////////////////

const legendHoverEffects = function (
  regionListItem,
  regionBox,
  regionLegendText,
  regionNodeList,
  lighterColourChange,
  strokeColour,
  islandRect = null
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
      $(islandRect).css("stroke", "red"); // only works for islands as default parameter is none
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
      $(islandRect).css("stroke", "black");
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
    regionsObj[region].strokeColour,
    regionsObj[region].islandRect
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
    regionsObj[region].strokeColour,
    regionsObj[region].islandRect
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

////////////////////////////////// Highlighting Island/Enclave Boxes on Map

const boxHighlightHover = function (box, nodelist) {
  $(box).hover(
    function () {
      $(box).css("stroke", "red");
      nodelist.forEach((element) => {
        $(`[id='${element.id}']`).hover(
          // https://stackoverflow.com/questions/596314/jquery-ids-with-spaces - ids with spaces are illegal, had to break code regulations slightly here
          function () {
            $(box).css("stroke", "red");
          },
          function () {
            $(box).css("stroke", "black");
          }
        );
      });
    },
    function () {
      $(box).css("stroke", "black");
    }
  );
};

for (let i = 0; i < islandsAndEnclaves.length; i++) {
  let boxRegion = islandsAndEnclaves[i];
  console.log(regionsObj[boxRegion].islandRect);
  console.log(regionsObj[boxRegion].provinceNodeList);

  boxHighlightHover(
    regionsObj[boxRegion].islandRect,
    regionsObj[boxRegion].provinceNodeList
  );
}
