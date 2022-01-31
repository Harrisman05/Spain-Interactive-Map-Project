// LegendHoverEffects(
//   regionsObj.Galicia.listClass,
//   regionsObj.Galicia.boxId,
//   regionsObj.Galicia.textClass,
//   regionsObj.Galicia.provinceNodeList,
//   regionsObj.Galicia.lighterColourChange,
//   regionsObj.Galicia.strokeColour
// );

// LegendHoverEffects(
//   ".GaliciaListItem",
//   "#GaliciaBox",
//   ".GaliciaLegendText",
//   GaliciaRegionNodeList,
//   "#26a626",
//   "white"
// );

// LegendHoverEffects(
//   ".AsturiasListItem",
//   "#AsturiasBox",
//   ".AsturiasLegendText",
//   AsturiasRegionNodeList,
//   "#ffa633",
//   "black"
// );

// LegendHoverEffects(
//   ".CantabriaListItem",
//   "#CantabriaBox",
//   ".CantabriaLegendText",
//   CantabriaRegionNodeList,
//   "#ff66ff",
//   "white"
// );

// LegendHoverEffects(
//     ".BasqueCountryListItem",
//     "#BasqueCountryBox",
//     ".BasqueCountryLegendText",
//     BasqueCountryRegionNodeList,
//     "#44c7bc",
//     "white"
//   );

// LegendHoverEffects(
//     ".NavarraListItem",
//     "#NavarraBox",
//     ".NavarraLegendText",
//     NavarraRegionNodeList,
//     "#ffeac3",
//     "black"
//   );

// LegendHoverEffects(
//   ".AragonListItem",
//   "#AragonBox",
//   ".AragonLegendText",
//   AragonRegionNodeList,
//   "#c05cff",
//   "white"
// );

// LegendHoverEffects(
//     ".CataloniaListItem",
//     "#CataloniaBox",
//     ".CataloniaLegendText",
//     CataloniaRegionNodeList,
//     "#f4626e",
//     "white"
//   );

// LegendHoverEffects(
//   ".LaRiojaListItem",
//   "#LaRiojaBox",
//   ".LaRiojaLegendText",
//   LaRiojaRegionNodeList,
//   "#cdc6bf",
//   "#cdc6bf"
// );

// LegendHoverEffects(
//   ".CastileYLeonListItem",
//   "#CastileYLeonBox",
//   ".CastileYLeonLegendText",
//   CastileYLeonRegionNodeList,
//   "#635bd2",
//   "white"
// );

// LegendHoverEffects(
//   ".MadridListItem",
//   "#MadridBox",
//   ".MadridLegendText",
//   MadridRegionNodeList,
//   "#ffff33",
//   "black"
// );

// LegendHoverEffects(
//   ".ExtremaduraListItem",
//   "#ExtremaduraBox",
//   ".ExtremaduraLegendText",
//   ExtremaduraRegionNodeList,
//   "#3fd9ff",
//   "black"
// );

// LegendHoverEffects(
//     ".CastileLaManchaListItem",
//     "#CastileLaManchaBox",
//     ".CastileLaManchaLegendText",
//     CastileLaManchaRegionNodeList,
//     "#ffc1d3",
//     "black"
//   );

// LegendHoverEffects(
//     ".ValenciaListItem",
//     "#ValenciaBox",
//     ".ValenciaLegendText",
//     ValenciaRegionNodeList,
//     "#547254",
//     "white"
//   );

// LegendHoverEffects(
//     ".MurciaListItem",
//     "#MurciaBox",
//     ".MurciaLegendText",
//     MurciaRegionNodeList,
//     "#bd864f",
//     "black"
//   );

// LegendHoverEffects(
//     ".AndalusiaListItem",
//     "#AndalusiaBox",
//     ".AndalusiaLegendText",
//     AndalusiaRegionNodeList,
//     "#cc4444",
//     "white"
//   );

// MapHoverEffects(GaliciaRegionNodeList, "#26a626", "white");
// MapHoverEffects(AsturiasRegionNodeList, "#ffa633", "black");
// MapHoverEffects(CantabriaRegionNodeList, "#ff66ff", "white");
// MapHoverEffects(BasqueCountryRegionNodeList, "#44c7bc", "white");
// MapHoverEffects(NavarraRegionNodeList, "#ffeac3", "black");
// MapHoverEffects(AragonRegionNodeList, "#c05cff", "white");
// MapHoverEffects(LaRiojaRegionNodeList, "#cdc6bf", "");
// MapHoverEffects(CataloniaRegionNodeList, "#f4626e", "white");
// MapHoverEffects(CastileYLeonRegionNodeList, "#635bd2", "white");
// MapHoverEffects(MadridRegionNodeList, "#ffff33", "black");
// MapHoverEffects(ExtremaduraRegionNodeList, "#3fd9ff", "white");
// MapHoverEffects(CastileLaManchaRegionNodeList, "#ffc1d3", "black");
// MapHoverEffects(ValenciaRegionNodeList, "#547254", "white");
// MapHoverEffects(MurciaRegionNodeList, "#bd864f", "black");
// MapHoverEffects(AndalusiaRegionNodeList, "#cc4444", "white");

// $(".mapContainer").on("mousemove", (e) => {
//   $("#log").text("pageX: " + e.pageX + ", pageY; " + e.pageY);

//   let xOffset = 15 + e.pageX;
//   let yOffset = 15 + e.pageY;

//   $(".tooltip").css({
//     left: xOffset,
//     top: yOffset,
//   });
// });

// console.log($(".mapLegendList"));
// console.log(
//   $(".mapLegendList").forEach((element) => {
//     console.log(element);
//   })
// );

// console.log(mapLegendList);

// console.log(
//   Array.from(mapLegendList).forEach((element) => {
//     console.log(element);
//     console.log(element.lastElementChild.innerText);
//   })
// );

// // list item population generation

// $(".population").click(function () {
//   console.log("pop clicked");
//   $(".population").text("pop");
// });

// // region list item, allProvincesAndRegionsInfoObj. region . population

// $(".GaliciaListItem").click(() => {
//   console.log("galicica list item clicked");
//   console.log(allProvincesAndRegionsInfoObj.Galicia.population);
//   $(".population").text(allProvincesAndRegionsInfoObj.Galicia.population);
// });

// GaliciaRegionNodeList.forEach((element) => {
//   console.log(element.id);

//   let clickedProvince = element.id;

//   clickedProvince = removeSpacesAndAccents(clickedProvince);

//   console.log(clickedProvince);

// $(".population").text(
//   allProvincesAndRegionsInfoObj[clickedProvince].population
// );

// $(".areakm2").text(allProvincesAndRegionsInfoObj[clickedProvince].area);
// });

// console.log(
//   Array.from($(".GaliciaRegion")).forEach((element) => {
//     console.log(element.id);

//     let clickedProvince = element.id;

//     clickedProvince = removeSpacesAndAccents(clickedProvince);

//     console.log(clickedProvince);

//     $(".population").text(
//       allProvincesAndRegionsInfoObj[clickedProvince].population
//     );

//     $(".areakm2").text(allProvincesAndRegionsInfoObj[clickedProvince].area);
//   })
// );

// const googleSearchesHover = function () {
//   //https://stackoverflow.com/questions/42791168/how-to-make-tooltip-follow-cursor
//   $(".searchIcons").hover(
//     function () {
//       $(this).on("mousemove", (e) => {
//         $(".tooltip").show();
//         $(".tooltip").text(query + " " + this.title); //https://stackoverflow.com/questions/30570638/get-id-attribute-from-a-node-in-nodelist
//         console.log(this.title);
//         let xOffset = e.pageX;
//         let yOffset = 30 + e.pageY;

//         $(".tooltip").css({
//           left: xOffset,
//           top: yOffset,
//         });
//       });
//     },
//     function () {
//       $(".tooltip").hide();
//     }
//   );
// };

// googleSearchesHover();
