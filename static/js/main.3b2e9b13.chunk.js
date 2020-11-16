(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{25:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),s=a.n(n),c=a(28),r=a.n(c),o=(a(36),a(13)),l=a(15),d=a(16),u=a(27),p=a(14),m="\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  ",g="\n  varying vec2 vUv;\n  uniform sampler2D texture;\n  uniform sampler2D texture2;\n  uniform sampler2D disp;\n  uniform float _rot;\n  uniform float dispFactor;\n  uniform float effectFactor;\n\n   vec2 rotate(vec2 v, float a) {\n    float s = sin(a);\n    float c = cos(a);\n    mat2 m = mat2(c, -s, s, c);\n    return m * v;\n   }\n\n  void main() {\n\n    vec2 uv = vUv;\n\n    vec4 disp = texture2D(disp, uv);\n\n    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n\n    vec4 _texture = texture2D(texture, distortedPosition);\n    vec4 _texture2 = texture2D(texture2, distortedPosition2);\n\n    vec4 finalTexture = mix(_texture, _texture2, dispFactor);\n\n    gl_FragColor = finalTexture;\n  }\n",b=a(12),h=a(18),f=a.p+"static/media/Chrome.9baed56a.gif",j=a.p+"static/media/Particle1.d5e7ca82.gif",v=a.p+"static/media/contemplations1.5bb7be16.png",x=a.p+"static/media/contemplations2.d1db0cba.png",O=a.p+"static/media/FDO1.d979ae88.png",y=a.p+"static/media/FDO2.99561720.png",F=(a.p,a.p+"static/media/Group2.e6af12ad.gif"),S=a.p+"static/media/RUST1.61baee64.png",w=a.p+"static/media/RUST2.a6007fb3.png",N=a.p+"static/media/Song1.056d61e6.png",k=a.p+"static/media/Song2.4ac8fda9.png",P=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/8.8f4bcb91.jpg"),C=(a.p,a.p,a.p,a.p,a.p,[[v,x,P,-.65,{title:"Contemplation Book App",info:["Created a mobile IOS application that uses OpenStreetMap API to allocate benches in users vicinity as contemplation book geocaches","Constructed a cascading system that would use a Swift Native module to tag sentiment of an user\u2019s entry and spread the data up to the entire book and geolocation, creating a time series of sentiment"],langauges:"React Native, Swift, MongoDB",link:"https://github.com/isengupt/ContemplationApp"}],[O,y,P,-.65,{title:"FDO Website",info:["Built a React, Meteor.js full stack web application that uses the publication and subscription pattern to dynamically update data from a MongoDB database to the client","Created multiple schemas for the events, announcements, and auxiliary data that would be produced by administrators and consumed by members of the club","Utilized Meteor\u2019s global state capabilities to create a interface that would change for specified role and school at login and assign editing and event adding capabilities accordingly"],langauges:"React, Meteor.js",link:"https://github.com/isengupt/FDOPages"}],[{title:"Political Classifier Chrome Extension",info:["Chrome Extension that labels reddit posts based on democratic / republican sentiment using a political classifier keras model"],langauges:"Javascript, Python",link:"https://github.com/isengupt/PoliticalClassifierChome"},f],[{title:"Group Theory Visualizations",info:["Used p5.js sound and canvas libraries to create Tonnetz square and circle of chords visualization program on top of triad classes and functions","Leveraged research in applications of abstract algebra on chord mapping to transform and manipulate musical triads and sevenths in algorithmic fashion"],langauges:"Javascript, P5.js",link:"https://github.com/isengupt/Music-Group-Theory"},F],[S,w,P,-.65,{title:"Rust Dependencies Graph",langauges:"Javascript",info:["Modeled a dependency graph of science-based rust crates to four-level depth with Graph.gl and utilized D3 to visualize dependencies and reverse-dependencies in a tree based format"],link:"https://github.com/isengupt/Rust-Dependencies"}],[{title:"Epidemic Particle Simulation",info:["Simulated the spread of an infection through elastic interactions of particles in a closed space with the Matplotlib Animation program","Utilized insights in epidemiology in order to accurately portray interactions between particles and gauge statistical chance of infection spread"],langauges:"Python",link:"https://github.com/isengupt/ParticleSimulation"},j],[N,k,P,-.65,{title:"Song Map Visualizer",info:["A visualization of all songs on Wikipedia with their song attributes collected from the Spotify API along with their frequencies at the artists; primary location queried from a postgreSQL database"],langauges:"React, PostgreSQL",link:"https://github.com/isengupt/Wikipedia-Data-Projects"}],[{title:"Ishan Sengupta",number:"443-760-1159",email:"ishan6060@gmail.com",github:"https://github.com/isengupt"}]]);a(25),new p.c;console.log(C.length);var M=function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}},D=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")},T=new p.c;function z(e){var t=e.url1,a=e.url2,s=e.disp,c=e.intensity,r=e.hovered,o=Object(h.b)({progress:r?1:0}).progress,l=Object(b.e)().invalidate,d=Object(n.useMemo)((function(){var e=T.load(t,l),i=T.load(a,l),n=T.load(s,l);return n.wrapS=n.wrapT=p.b,e.magFilter=i.magFilter=p.a,e.minFilter=i.minFilter=p.a,{uniforms:{effectFactor:{type:"f",value:c},dispFactor:{type:"f",value:0},texture:{type:"t",value:e},texture2:{type:"t",value:i},disp:{type:"t",value:n}},vertexShader:m,fragmentShader:g}}),[t,a,s,c,l]);return Object(i.jsxs)("mesh",{children:[Object(i.jsx)("planeBufferGeometry",{name:"geometry",args:[8,8]}),Object(i.jsx)(h.a.shaderMaterial,{name:"material",args:[d],"uniforms-dispFactor-value":o})]})}function U(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(n.useCallback)((function(){return c(!0)}),[]),d=Object(n.useCallback)((function(){return c(!1)}),[]);return Object(i.jsx)("div",{className:"item",onMouseEnter:r,onMouseLeave:d,onTouchStart:r,onTouchEnd:d,onTouchCancel:d,children:Object(i.jsx)(b.a,{className:"canvas",invalidateFrameloop:!0,props:{antialias:!1,stencil:!1},children:Object(i.jsx)(z,Object(o.a)(Object(o.a)({},e),{},{hovered:s}))})})}function L(e){return console.log(e.data),1===e.data.length?Object(i.jsxs)("div",{className:"title-card",children:[Object(i.jsx)("div",{className:"title-name",children:e.data[0].title}),Object(i.jsx)("div",{className:"subtitle-card",children:e.data[0].number}),Object(i.jsx)("div",{className:"subtitle-card",children:e.data[0].email}),Object(i.jsx)("a",{href:e.data[0].github,className:"subtitle-card",children:"Github"})]}):5===e.data.length?Object(i.jsxs)("div",{className:"resume-card",children:[Object(i.jsx)("a",{href:e.data[4].link,className:"title-name",children:e.data[4].title}),Object(i.jsxs)("div",{className:"resume-langaunge",children:[" ",Object(i.jsx)("span",{className:"header-subtitle",children:"Languages: "}),e.data[4].langauges]}),e.data[4].info.map((function(e){return Object(i.jsx)("p",{className:"resume-bullets",children:e})})),Object(i.jsx)(U,{className:"faze-image",url1:e.data[0],url2:e.data[1],disp:e.data[2],intensity:e.data[3]})]}):2===e.data.length?Object(i.jsxs)("div",{className:"resume-card",children:[Object(i.jsx)("a",{href:e.data[0].link,className:"title-name",children:e.data[0].title}),Object(i.jsxs)("div",{className:"resume-langaunge",children:[" ",Object(i.jsx)("span",{className:"header-subtitle",children:"Languages: "}),e.data[0].langauges]}),e.data[0].info.map((function(e){return Object(i.jsx)("p",{className:"resume-bullets",children:e})})),Object(i.jsx)("div",{style:{maxWidth:"100%"},children:Object(i.jsx)("img",{className:"faze-image",src:e.data[1],alt:"loading..."})})]}):Object(i.jsx)(i.Fragment,{})}var R=function(){var e=Object(n.useState)((function(){return new Set})),t=Object(l.a)(e,1)[0],a=Object(d.c)(C.length,(function(e){return Object(o.a)(Object(o.a)({},M(e)),{},{from:{x:0,rot:0,scale:1.5,y:-1e3}})})),s=Object(l.a)(a,2),c=s[0],r=s[1],p=Object(u.a)((function(e){var a=Object(l.a)(e.args,1)[0],i=e.down,n=Object(l.a)(e.delta,1)[0],s=(e.distance,Object(l.a)(e.direction,1)[0]),c=e.velocity,o=s<0?-1:1;!i&&c>.2&&t.add(a),r((function(e){if(a===e){var s=t.has(a);return{x:s?(200+window.innerWidth)*o:i?n:0,rot:n/100+(s?10*o*c:0),scale:i?1.1:1,delay:void 0,config:{friction:50,tension:i?800:s?200:500}}}})),i||t.size!==C.length||setTimeout((function(){return t.clear()||r((function(e){return M(e)}))}),600)}));return c.map((function(e,t){var a=e.x,n=e.y,s=e.rot,c=e.scale;return Object(i.jsx)(d.a.div,{style:{transform:Object(d.b)([a,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))},children:Object(i.jsx)(d.a.div,Object(o.a)(Object(o.a)({},p(t)),{},{style:{padding:10,transform:Object(d.b)([s,c],D)},children:Object(i.jsx)(L,{data:C[t]})}))},t)}))};var B=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(R,{})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),G()}},[[42,1,2]]]);
//# sourceMappingURL=main.3b2e9b13.chunk.js.map