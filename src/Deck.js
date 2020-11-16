import React, { useState, useCallback, useMemo } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Project from './Project'


import * as THREE from 'three/src/Three'

import { vertexShader, fragmentShader } from './shaders/XFadeShader'

import { Canvas, useThree } from 'react-three-fiber'
import { useSpring, animated as anim } from 'react-spring/three'


import data from './data'

import './styles.css'

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',

]

console.log(data.length)


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const loader = new THREE.TextureLoader()

function ImageWebgl({ url1, url2, disp, intensity, hovered }) {
  const { progress } = useSpring({ progress: hovered ? 1 : 0 })
  const { invalidate } = useThree()
  const args = useMemo(
    () => {
      const texture1 = loader.load(url1, invalidate)
      const texture2 = loader.load(url2, invalidate)
      const dispTexture = loader.load(disp, invalidate)

      dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping
      texture1.magFilter = texture2.magFilter = THREE.LinearFilter
      texture1.minFilter = texture2.minFilter = THREE.LinearFilter

      return {
        uniforms: {
          effectFactor: { type: 'f', value: intensity },
          dispFactor: { type: 'f', value: 0 },
          texture: { type: 't', value: texture1 },
          texture2: { type: 't', value: texture2 },
          disp: { type: 't', value: dispTexture }
        },
        vertexShader,
        fragmentShader
      }
    },
    [url1, url2, disp, intensity, invalidate]
  )

  return (
    <mesh>
      <planeBufferGeometry name="geometry" args={[8, 8]} />
      <anim.shaderMaterial name="material" args={[args]} uniforms-dispFactor-value={progress} />
    </mesh>
  )
}

function Image(props) {
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const unhover = useCallback(() => setHover(false), [])
  return (
    <div
      className="item"
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onTouchStart={hover}
      onTouchEnd={unhover}
      onTouchCancel={unhover}
    >
      <Canvas
        className="canvas"
        invalidateFrameloop={true}
        props={{ antialias: false, stencil: false }}
      >
        <ImageWebgl {...props} hovered={hovered} />
      </Canvas>
    </div>
  )
}

function InfoCard(props) {

  console.log(props.data)

  if (props.data.length === 1) {
    return (
      <div className="title-card">
        <div className="title-name">
          {props.data[0].title}
        </div>
        <div className="subtitle-card">
          {props.data[0].number}
        </div>
        <div className="subtitle-card">
          {props.data[0].email}
        </div>
        <a href={props.data[0].github} className="subtitle-card">
Github
        </a>
      </div>
    )
  } else if (props.data.length === 5) {
return (
  <div className="resume-card">
  <a href={props.data[4].link} className="title-name">{props.data[4].title}</a>
  <div className="resume-langaunge"> <span className="header-subtitle">Languages: </span>{props.data[4].langauges}</div>
 {props.data[4].info.map((item) => 
 <p className="resume-bullets">
   {item}
 </p>
 )}
  <Image className="faze-image" url1={props.data[0]} url2={props.data[1]} disp={props.data[2]} intensity={props.data[3]} />
  </div>
)
  }

   else if (props.data.length === 2) {
     return (

      <div className="resume-card">
  <a href={props.data[0].link} className="title-name">{props.data[0].title}</a>
  <div className="resume-langaunge"> <span className="header-subtitle">Languages: </span>{props.data[0].langauges}</div>
 {props.data[0].info.map((item) => 
 <p className="resume-bullets">
   {item}
 </p>
 )}
 <div style={{maxWidth: '100%'}}> 
 <img className="faze-image" src={props.data[1]} alt="loading..." />
 </div>
 
  </div>

        


     )
   } else {
     return (
       <>
       </>
     )
   }
}


function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(data.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === data.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
   
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ padding: 10, transform: interpolate([rot, scale], trans)}}>
      <InfoCard data={data[i]}/>

      </animated.div>

    </animated.div>
  ))
}

//backgroundImage: `url(${cards[i]})` 
export default Deck;
