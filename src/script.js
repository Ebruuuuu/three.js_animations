import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { AxesHelper, Mesh } from 'three'

//Canvas
const canvas = document.querySelector('.webgl')

//Scene
const scene = new THREE.Scene()

//Object

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

//sizes
const sizes = {
  width: 1060,
  height: 800,
}
//Camera

//vertical vision angle:75 degrees = 1st parameter
//the aspect ratio = sizes.width / sizes.height = 2nd parameter
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.x = -1
camera.position.z = 7

scene.add(camera)

// camera.lookAt(new THREE.Vector3(1, 1, -15))
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position)) //2.449489742783178

//Renderer

const renderer = new THREE.WebGLRenderer({
  /*if the object is equal to its property,
    we only use the object */
  canvas, // canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)

//Animate

//Create a tween
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 0.5, delay: 2, x: 0 })

const tick = () => {
  //Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  // Loop is created
  window.requestAnimationFrame(tick)
}

tick()
