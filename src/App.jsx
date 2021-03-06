import { useState } from 'react'
import * as THREE from 'three';
import './App.css'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <canvas id="bg"></canvas>

      <header className="App-header">

      </header>
    </div>
  )
}

export default App
