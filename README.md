# Spain-Interactive-Map-Project

## An interactive map of Spain which can generate information on its regions and provinces 

This project was bespokely built and takes advantage of using JavaScript to manipulate attributes of an SVG html tag. A source SVG from Wikicommons Media was 
used as a template for the map, but it had to be deconstructed manually so province data was able to be displayed.

## How to install and run project

* Clone this repository
* Simply open index.html on a browser and the project will load

## How it works:

* Map legend interactivity - jQuery.hover():
  * Hover function used to interactively light up the map legend when the mouse is over a region. CSS transition property used for smooth transitions.

<p align="center">
  <img src="https://github.com/Harrisman05/Spain-Interactive-Map-Project/blob/master/hover_legend_gif.gif" width="40%" height="40%"/>
</p>

* Map interactivity - jQuery.hover():
  * Hover function used with this key word to target the specific province (element) in the region (nodelist) using forEach loop. This gives the appearance 
  that the user is focussed on a specific region, coupled with the generation of a tooltip which displays the name of the targetted province.
  
<p align="center">
  <img src="https://github.com/Harrisman05/Spain-Interactive-Map-Project/blob/master/hover_map_gif.gif" width="40%" height="40%"/>
</p>

* Full demo of interactive map project
  * The user can click on any region/province to generate basic information about that area. They can then further click the widgets to initiate a google search 
regarding weather, accomodation, restaurants, shopping centres or landmarks   

<p align="center">
  <img src="https://github.com/Harrisman05/Spain-Interactive-Map-Project/blob/master/full_demo.gif"/>
</p>


