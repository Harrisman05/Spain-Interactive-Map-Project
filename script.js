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
const ValencianCommunityRegionNodeList = document.querySelectorAll(
  ".ValencianCommunityRegion"
);
const MurciaRegionNodeList = document.querySelectorAll(".MurciaRegion");
const AndalusiaRegionNodeList = document.querySelectorAll(".AndalusiaRegion");
const BalearicIslandsNodeList = document.querySelectorAll(
  ".BalearicIslandsRegion"
);
const ProvincesOfLasPalmasNodeList = document.querySelectorAll(
  ".ProvincesOfLasPalmasRegion"
);
const ProvincesOfSantaCruzDeTenerifeNodeList = document.querySelectorAll(
  ".ProvincesOfSantaCruzDeTenerifeRegion"
);
const CeutaNodeList = document.querySelectorAll(".CeutaRegion");
const MelillaNodeList = document.querySelectorAll(".MelillaRegion");

$(".tooltip").hide();
$(".modalOverlay").hide();
$(".infoboxes").hide();

const allRegionsMap = [
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
  "ValencianCommunity",
  "Murcia",
  "Andalusia",
  "BalearicIslands",
  "ProvincesOfLasPalmas",
  "ProvincesOfSantaCruzDeTenerife",
  "Melilla",
  "Ceuta",
];

const allProvincesAndRegionsInfoArr = [
  "Alava",
  "Albacete",
  "Alicante",
  "Almeria",
  "Andalusia",
  "Aragon",
  "Asturias",
  "Avila",
  "Badajoz",
  "BalearicIslands",
  "Barcelona",
  "BasqueCountry",
  "Bizkaia",
  "Burgos",
  "Caceres",
  "Cadiz",
  "Cantabria",
  "Castellon",
  "CastileLaMancha",
  "CastileYLeon",
  "Catalonia",
  "Ceuta",
  "CiudadReal",
  "Cordoba",
  "Cuenca",
  "Extremadura",
  "Galicia",
  "Gipuzkoa",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Huelva",
  "Huesca",
  "Jaen",
  "LaCoruna",
  "LaRioja",
  "ProvincesOfLasPalmas",
  "ProvincesOfSantaCruzdeTenerife",
  "Leon",
  "Lerida",
  "Lugo",
  "Madrid",
  "Malaga",
  "Melilla",
  "Murcia",
  "Navarre",
  "Orense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Segovia",
  "Seville",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "ValencianCommunity",
  "Valladolid",
  "Zamora",
  "Zaragoza",
];

console.log(allProvincesAndRegionsInfoArr.length);

const allProvincesAndRegionsInfoObj = {
  Alava: {
    population: "333,626",
    area: "3,038 km²",
    provinceFlag: "/images/ProvinceFlags/Álava.svg",
  },
  Albacete: {
    population: "386,464",
    area: "14,926 km²",
    provinceFlag: "/images/ProvinceFlags/Albacete.svg",
  },
  Alicante: {
    population: "1,881,762",
    area: "5,817 km²",
    provinceFlag: "/images/ProvinceFlags/Alicante.svg",
  },
  Almeria: {
    population: "731,792",
    area: "8,775 km²",
    provinceFlag: "/images/ProvinceFlags/Almería.svg",
  },
  Andalusia: {
    population: "8,472,407",
    area: "87,598 km²",
    regionFlag: "/images/RegionFlags/Andalusia.svg",
  },
  Aragon: {
    population: "1,326,261",
    area: "47,720 km²",
    regionFlag: "/images/RegionFlags/Aragon.svg",
  },
  Asturias: {
    population: "1,011,792",
    area: "10,604 km²",
    regionFlag: "/images/RegionFlags/Asturias.svg",
    provinceFlag: "/images/provinceFlags/Asturias.svg",
  },
  Avila: {
    population: "158,421",
    area: "8,050 km²",
    provinceFlag: "/images/ProvinceFlags/Ávila.svg",
  },
  Badajoz: {
    population: "669,943",
    area: "21,766 km²",
    provinceFlag: "/images/ProvinceFlags/Badajoz.svg",
  },
  BalearicIslands: {
    population: "1,173,008",
    area: "4,992 km²",
    regionFlag: "/images/RegionFlags/BalearicIslands.svg",
  },
  Barcelona: {
    population: "5,714,730",
    area: "7,728 km²",
    provinceFlag: "/images/ProvinceFlags/Barcelona.svg",
  },
  BasqueCountry: {
    population: "2,213,993",
    area: "7,235 km²",
    regionFlag: "/images/RegionFlags/BasqueCountry.svg",
  },
  Bizkaia: {
    population: "1,154,334",
    area: "2,217 km²",
    provinceFlag: "/images/ProvinceFlags/Bizkaia.svg",
  },
  Burgos: {
    population: "356,055",
    area: "14,291 km²",
    provinceFlag: "/images/ProvinceFlags/Burgos.svg",
  },
  Cabrera: {
    population: "???",
    area: "8.9 km²",
    provinceFlag: "/images/ProvinceFlags/no_flag.svg",
  },
  Caceres: {
    population: "389,558",
    area: "19,868 km²",
    provinceFlag: "/images/ProvinceFlags/Cáceres.svg",
  },
  Cadiz: {
    population: "1,245,960",
    area: "7,436 km²",
    provinceFlag: "/images/ProvinceFlags/Cádiz.svg",
  },
  Cantabria: {
    population: "584,507",
    area: "5,321 km²",
    regionFlag: "/images/RegionFlags/Cantabria.svg",
    provinceFlag: "/images/ProvinceFlags/Cantabria.svg",
  },
  Castellon: {
    population: "587,064",
    area: "6,632 km²",
    provinceFlag: "/images/ProvinceFlags/Castellón.svg",
  },
  CastileLaMancha: {
    population: "2,049,562",
    area: "79,462 km²",
    regionFlag: "/images/RegionFlags/CastillaLaMancha.svg",
  },
  CastileYLeon: {
    population: "2,383,139",
    area: "94,225 km²",
    regionFlag: "/images/RegionFlags/CastileYLeón.svg",
  },
  Catalonia: {
    population: "7,763,362",
    area: "32,113 km²",
    regionFlag: "/images/RegionFlags/Catalonia.svg",
  },
  Ceuta: {
    population: "83,517",
    area: "19.48 km²",
    regionFlag: "/images/RegionFlags/Ceuta.svg",
    provinceFlag: "/images/ProvinceFlags/Ceuta.svg",
  },
  CiudadReal: {
    population: "492,591",
    area: "19,813 km²",
    provinceFlag: "/images/ProvinceFlags/CiudadReal.svg",
  },
  Cordoba: {
    population: "776,789",
    area: "13,771 km²",
    provinceFlag: "/images/ProvinceFlags/Córdoba.svg",
  },
  Cuenca: {
    population: "195,516",
    area: "17,141 km²",
    provinceFlag: "/images/ProvinceFlags/Cuenca.svg",
  },
  Fuerteventura: {
    population: "126,227",
    area: "70.42 km²",
    provinceFlag: "/images/ProvinceFlags/Fuerteventura.svg",
  },
  Formentera: {
    population: "13,333",
    area: "83.24 km²",
    provinceFlag: "/images/ProvinceFlags/Formentera.svg",
  },
  Galicia: {
    population: "2,695,645",
    area: "29,574 km²",
    regionFlag: "/images/RegionFlags/Galicia.svg",
  },
  Gerona: {
    population: "786,596",
    area: "5,910 km²",
    provinceFlag: "/images/ProvinceFlags/Gerona.svg",
  },
  Gipuzkoa: {
    population: "726,033",
    area: "1,980 km²",
    provinceFlag: "/images/ProvinceFlags/Gipuzkoa.svg",
  },
  Granada: {
    population: "921,338",
    area: "12,647 km²",
    provinceFlag: "/images/ProvinceFlags/Granada.svg",
  },
  GranCanaria: {
    population: "870,595",
    area: "	1,560 km²",
    provinceFlag: "/images/ProvinceFlags/GranCanaria.svg",
  },
  Guadalajara: {
    population: "265,588",
    area: "12,212 km²",
    provinceFlag: "/images/ProvinceFlags/Guadalajara.svg",
  },
  Huelva: {
    population: "525835",
    area: "10,128 km²",
    provinceFlag: "/images/ProvinceFlags/Huelva.svg",
  },
  Huesca: {
    population: "224,264",
    area: "15,636 km²",
    provinceFlag: "/images/ProvinceFlags/Huesca.svg",
  },
  Ibiza: {
    population: "159,249",
    area: "571.6 km²",
    provinceFlag: "/images/ProvinceFlags/Ibiza.svg",
  },
  ElHierro: {
    population: "11,338",
    area: "268 km²",
    provinceFlag: "/images/ProvinceFlags/ElHierro.svg",
  },
  Extremadura: {
    population: "1,059,501",
    area: "41,635 km²",
    regionFlag: "/images/RegionFlags/Extremadura.svg",
  },
  Jaen: {
    population: "627,190",
    area: "13,496 km²",
    provinceFlag: "/images/ProvinceFlags/Jaén.svg",
  },
  LaCoruna: {
    population: "1,120,134",
    area: "7,950 km²",
    provinceFlag: "/images/ProvinceFlags/LaCoruña.svg",
  },
  LaGraciosa: {
    population: "700",
    area: "29.05 km²",
    provinceFlag: "/images/ProvinceFlags/no_Flag.svg",
  },
  Lanzarote: {
    population: "154,530",
    area: "845.94 km²",
    provinceFlag: "/images/ProvinceFlags/Lanzarote.svg",
  },
  LaRioja: {
    population: "319,796",
    area: "5,045 km²",
    regionFlag: "/images/RegionFlags/LaRioja.svg",
    provinceFlag: "/images/ProvinceFlags/LaRioja.svg",
  },
  ProvincesOfLasPalmas: {
    population: "1,128,539",
    area: "4,066 km²",
    provinceFlag: "/images/ProvinceFlags/LasPalmas.svg",
    regionFlag: "/images/RegionFlags/LasPalmas.svg",
  },
  LaGomera: {
    population: "22,426",
    area: "370 km²",
    provinceFlag: "/images/ProvinceFlags/LaGomera.svg",
  },
  LaPalma: {
    population: "85,840",
    area: "708 km²",
    provinceFlag: "/images/ProvinceFlags/LaPalma.svg",
  },
  Leon: {
    population: "451,706",
    area: "15,581 km²",
    provinceFlag: "/images/ProvinceFlags/León.svg",
  },
  Lerida: {
    population: "439,727",
    area: "12,172 km²",
    provinceFlag: "/images/ProvinceFlags/Lérida.svg",
  },
  Lugo: {
    population: "326,013",
    area: "9,856 km²",
    provinceFlag: "/images/ProvinceFlags/Lugo.svg",
  },
  Madrid: {
    population: "6,751,251",
    area: "8,028 km²",
    regionFlag: "/images/RegionFlags/Madrid.svg",
    provinceFlag: "/images/ProvinceFlags/Madrid.svg",
  },
  Malaga: {
    population: "1,695,651",
    area: "7,308 km²",
    provinceFlag: "/images/ProvinceFlags/Málaga.svg",
  },
  Mallorca: {
    population: "947,804",
    area: "3,640 km²",
    provinceFlag: "/images/ProvinceFlags/Mallorca.svg",
  },
  Melilla: {
    population: "86,261",
    area: "13.41 km²",
    regionFlag: "/images/RegionFlags/Melilla.svg",
    provinceFlag: "/images/ProvinceFlags/Melilla.svg",
  },
  Menorca: {
    population: "99,037",
    area: "695.7 km²",
    provinceFlag: "/images/ProvinceFlags/Menorca.svg",
  },
  Murcia: {
    population: "1,518,486",
    area: "11,313 km²",
    regionFlag: "/images/RegionFlags/Murcia.svg",
    provinceFlag: "/images/ProvinceFlags/Murcia.svg",
  },
  Navarra: {
    population: "661,537",
    area: "10,390 km² ",
    regionFlag: "/images/RegionFlags/Navarra.svg",
    provinceFlag: "/images/ProvinceFlags/Navarra.svg",
  },
  Orense: {
    population: "305,223",
    area: "7,273 km²",
    provinceFlag: "/images/ProvinceFlags/Ourense.svg",
  },
  Palencia: {
    population: "159,123",
    area: "8,053 km²",
    provinceFlag: "/images/ProvinceFlags/Palencia.svg",
  },
  Pontevedra: {
    population: "944,275",
    area: "4,495 km²",
    provinceFlag: "/images/ProvinceFlags/Pontevedra.svg",
  },
  Salamanca: {
    population: "327,338",
    area: "12,350 km²",
    provinceFlag: "/images/ProvinceFlags/Salamanca.svg",
  },
  ProvincesOfSantaCruzDeTenerife: {
    population: "1,044,405",
    area: "3,381 km²",
    provinceFlag: "/images/ProvinceFlags/SantaCruzdeTenerife.svg",
    regionFlag: "/images/RegionFlags/SantaCruzdeTenerife.svg",
  },
  Segovia: {
    population: "153,663",
    area: "6,923 km²",
    provinceFlag: "/images/ProvinceFlags/Segovia.svg",
  },
  Sevilla: {
    population: "1,947,852",
    area: "14,036 km²",
    provinceFlag: "/images/ProvinceFlags/Seville.svg",
  },
  Soria: {
    population: "88,747",
    area: "10,306 km²",
    provinceFlag: "/images/ProvinceFlags/Soria.svg",
  },
  Tarragona: {
    population: "822,309",
    area: "6,303 km²",
    provinceFlag: "/images/ProvinceFlags/Tarragona.svg",
  },
  Teruel: {
    population: "134,545",
    area: "14,810 km²",
    provinceFlag: "/images/ProvinceFlags/Teruel.svg",
  },
  Tenerife: {
    population: "966,354",
    area: "2,034 km²",
    provinceFlag: "/images/ProvinceFlags/Tenerife.svg",
  },
  Toledo: {
    population: "709,403",
    area: "15,370 km²",
    provinceFlag: "/images/ProvinceFlags/Toledo.svg",
  },
  Valencia: {
    population: "2,589,312",
    area: "10,806 km²",
    provinceFlag: "/images/ProvinceFlags/Valencia.svg",
  },
  ValencianCommunity: {
    population: "5,058,138",
    area: "23,255 km²",
    regionFlag: "/images/RegionFlags/ValencianCommunity.svg",
  },
  Valladolid: {
    population: "519,361",
    area: "8,110 km²",
    provinceFlag: "/images/ProvinceFlags/Valladolid.svg",
  },
  Zamora: {
    population: "168,725",
    area: "10,561 km²",
    provinceFlag: "/images/ProvinceFlags/Zamora.svg",
  },
  Zaragoza: {
    population: "967,452",
    area: "17,275 km²",
    provinceFlag: "/images/ProvinceFlags/Zaragoza.svg",
  },
};

console.log(Object.keys(allProvincesAndRegionsInfoObj).length);

const islandsAndEnclaves = [
  "BalearicIslands",
  "ProvincesOfLasPalmas",
  "ProvincesOfSantaCruzDeTenerife",
  "Melilla",
  "Ceuta",
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
  ValencianCommunity: {
    listClass: ".ValencianCommunityListItem",
    boxId: "#ValencianCommunityBox",
    textClass: ".ValencianCommunityLegendText",
    provinceNodeList: ValencianCommunityRegionNodeList,
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
    islandRect: ".BalearicRect",
  },
  ProvincesOfLasPalmas: {
    listClass: ".ProvincesOfLasPalmasListItem",
    boxId: "#ProvincesOfLasPalmasBox",
    textClass: ".ProvincesOfLasPalmasLegendText",
    provinceNodeList: ProvincesOfLasPalmasNodeList,
    lighterColourChange: "#ffc74d",
    strokeColour: "#000000",
    islandRect: ".GranCanariaRect",
  },
  ProvincesOfSantaCruzDeTenerife: {
    listClass: ".ProvincesOfSantaCruzDeTenerifeListItem",
    boxId: "#ProvincesOfSantaCruzDeTenerifeBox",
    textClass: ".ProvincesOfSantaCruzDeTenerifeLegendText",
    provinceNodeList: ProvincesOfSantaCruzDeTenerifeNodeList,
    lighterColourChange: "#FF67C0",
    strokeColour: "#000000",
    islandRect: ".GranCanariaRect",
  },
  Melilla: {
    listClass: ".MelillaListItem",
    boxId: "#MelillaBox",
    textClass: ".MelillasLegendText",
    provinceNodeList: MelillaNodeList,
    lighterColourChange: "#67dfff",
    strokeColour: "#000000",
    islandRect: ".CeutaMelillaRect",
  },
  Ceuta: {
    listClass: ".CeutaListItem",
    boxId: "#CeutaBox",
    textClass: ".CeutaLegendText",
    provinceNodeList: CeutaNodeList,
    lighterColourChange: "#ffb85e",
    strokeColour: "#000000",
    islandRect: ".CeutaMelillaRect",
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

for (let i = 0; i < allRegionsMap.length; i++) {
  let region = allRegionsMap[i];

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

for (let i = 0; i < allRegionsMap.length; i++) {
  let region = allRegionsMap[i];

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

for (let i = 0; i < allRegionsMap.length; i++) {
  let region = allRegionsMap[i];

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

  boxHighlightHover(
    regionsObj[boxRegion].islandRect,
    regionsObj[boxRegion].provinceNodeList
  );
}

///////////////////////////////////////// remove spaces and accents on the region/province names

const removeSpacesAndAccents = function (str) {
  str = str.replace(/\s+/g, ""); // remove spaces
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove accents
  return str;
};

////////////////////////////////// generate population and areakm2 info for regions

$(".mapLegendList li").click(function () {
  $(".infoboxes").show();
  $(".clickOnMap").hide();

  let clickedRegion = this.lastElementChild.innerText;

  clickedRegion = removeSpacesAndAccents(clickedRegion);

  console.log(clickedRegion);

  $(".population").text(
    `Population ${allProvincesAndRegionsInfoObj[clickedRegion].population}`
  );

  $(".areakm2").text(
    `Area ${allProvincesAndRegionsInfoObj[clickedRegion].area}`
  );

  $(".infoboxTitle").text(`${this.lastElementChild.innerText} (Region)`);

  $(".flagSVG").attr(
    "src",
    `${allProvincesAndRegionsInfoObj[clickedRegion].regionFlag}`
  );

  clickedRegion = clickedRegion + " spain region";

  googleSearches(clickedRegion);
});

/////////////////////////////// generate population and areakm2 info for provinces

for (let i = 0; i < allRegionsMap.length; i++) {
  $(`.${allRegionsMap[i]}Region`).click(function () {
    $(".infoboxes").show();
    $(".clickOnMap").hide();

    let clickedProvince = this.id;

    clickedProvince = removeSpacesAndAccents(clickedProvince);

    console.log(clickedProvince);

    $(".population").text(
      `Population: ${allProvincesAndRegionsInfoObj[clickedProvince].population}`
    );

    $(".areakm2").text(
      `Area: ${allProvincesAndRegionsInfoObj[clickedProvince].area}`
    );

    $(".infoboxTitle").text(`${this.id} (Province)`);

    console.log(allProvincesAndRegionsInfoObj[clickedProvince]);

    $(".flagSVG").attr(
      "src",
      `${allProvincesAndRegionsInfoObj[clickedProvince].provinceFlag}`
    );

    clickedProvince = clickedProvince + " spain province";

    googleSearches(clickedProvince);
  });
}

//////////////////////////////////////// create google search function

const googleSearches = function (query) {
  document.querySelector(".fa-google").onclick = function () {
    window.open(`http://google.com/search?q=${query}`);
  };
  document.querySelector(".fa-sun").onclick = function () {
    window.open(`http://google.com/search?q=${query} weather`);
  };
  document.querySelector(".fa-bed").onclick = function () {
    window.open(`http://google.com/search?q=${query} hotels`);
  };
  document.querySelector(".fa-utensils").onclick = function () {
    window.open(`http://google.com/search?q=${query} restaurants`);
  };
  document.querySelector(".fa-shopping-cart").onclick = function () {
    window.open(`http://google.com/search?q=${query} shopping centres`);
  };
  document.querySelector(".fa-landmark").onclick = function () {
    window.open(`http://google.com/search?q=${query} landmarks`);
  };
};
