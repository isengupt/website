import ChromeGIF from "./data/Chrome.gif";
import Particle1 from './data/Particle1.gif'
import cont1 from "./data/contemplations1.png";
import cont2 from "./data/contemplations2.png";
import FDO1 from "./data/FDO1.png";
import FDO2 from "./data/FDO2.png";
import Group1 from "./data/Group1.png";
import Group2 from "./data/Group2.gif";
import RUST1 from "./data/RUST1.png";
import RUST2 from "./data/RUST2.png";
import Song1 from "./data/Song1.png";
import Song2 from "./data/Song2.png";


import disp1 from "./img/displacement/1.jpg";
import disp2 from "./img/displacement/2.jpg";
import disp3 from "./img/displacement/3.jpg";
import disp4 from "./img/displacement/4.png";
import disp5 from "./img/displacement/5.png";
import disp6 from "./img/displacement/6.jpg";
import disp7 from "./img/displacement/7.jpg";
import disp8 from "./img/displacement/8.jpg";
import disp9 from "./img/displacement/9.jpg";
import disp10 from "./img/displacement/10.jpg";
import disp11 from "./img/displacement/11.jpg";
import disp13 from "./img/displacement/13.jpg";
import disp15 from "./img/displacement/15.jpg";

let ContemplationsInfo = {
  title: "Contemplation Book App",
  info: [
    "Created a mobile IOS application that uses OpenStreetMap API to allocate benches in users vicinity as contemplation book geocaches",
    "Constructed a cascading system that would use a Swift Native module to tag sentiment of an user’s entry and spread the data up to the entire book and geolocation, creating a time series of sentiment",
  ],
  langauges: 'React Native, Swift, MongoDB',
  link: "https://github.com/isengupt/ContemplationApp"
};

let FDOInfo = {
  title: 'FDO Website',
  info: [
    "Built a React, Meteor.js full stack web application that uses the publication and subscription pattern to dynamically update data from a MongoDB database to the client",
    "Created multiple schemas for the events, announcements, and auxiliary data that would be produced by administrators and consumed by members of the club",
    "Utilized Meteor’s global state capabilities to create a interface that would change for specified role and school at login and assign editing and event adding capabilities accordingly"
  ],
  langauges: 'React, Meteor.js',
  link: 'https://github.com/isengupt/FDOPages'
} 


let SongInfo = {
  title: 'Song Map Visualizer',
  info: ['A visualization of all songs on Wikipedia with their song attributes collected from the Spotify API along with their frequencies at the artists; primary location queried from a postgreSQL database'],
  langauges: 'React, PostgreSQL',
  link: 'https://github.com/isengupt/Wikipedia-Data-Projects'
}

let RustInfo = {
  title: 'Rust Dependencies Graph',
  langauges: 'Javascript',
  info: ['Modeled a dependency graph of science-based rust crates to four-level depth with Graph.gl and utilized D3 to visualize dependencies and reverse-dependencies in a tree based format'],
  link: 'https://github.com/isengupt/Rust-Dependencies'
}

let ParticleInfo = {
  title: 'Epidemic Particle Simulation',

  info: ['Simulated the spread of an infection through elastic interactions of particles in a closed space with the Matplotlib Animation program',
'Utilized insights in epidemiology in order to accurately portray interactions between particles and gauge statistical chance of infection spread'
],
langauges: 'Python',
  link: 'https://github.com/isengupt/ParticleSimulation'
}

let GroupInfo = {
  title: 'Group Theory Visualizations',

  info: ['Used p5.js sound and canvas libraries to create Tonnetz square and circle of chords visualization program on top of triad classes and functions',
'Leveraged research in applications of abstract algebra on chord mapping to transform and manipulate musical triads and sevenths in algorithmic fashion'
],
  langauges: 'Javascript, P5.js',
  link: 'https://github.com/isengupt/Music-Group-Theory'
}

let ChromeInfo = {
  title: 'Political Classifier Chrome Extension',

  info: ['Chrome Extension that labels reddit posts based on democratic / republican sentiment using a political classifier keras model'],
  langauges: 'Javascript, Python',
  link: 'https://github.com/isengupt/PoliticalClassifierChome'
}


let titleInfo = {
  title: 'Ishan Sengupta',
  number: '443-760-1159',
  email: 'ishan6060@gmail.com',
  github: 'https://github.com/isengupt'
}



export default [

  [cont1, cont2, disp8, -0.65, ContemplationsInfo],
  [FDO1, FDO2, disp8, -0.65, FDOInfo],
  [ChromeInfo, ChromeGIF],
[GroupInfo, Group2],

  [RUST1, RUST2, disp8, -0.65, RustInfo],

  [ ParticleInfo, Particle1],
  [Song1, Song2, disp8, -0.65, SongInfo],
  [titleInfo]


]
