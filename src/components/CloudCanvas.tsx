'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface CloudCanvasProps {
  scrollY: number
}

export function CloudCanvas({ scrollY }: CloudCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    // Ensure video is playing
    video.play().catch(() => {
      // Autoplay fallbacks handled by attributes
    })

    // 1. Scene setup
    const scene = new THREE.Scene()
    
    const aspect = container.clientWidth / container.clientHeight
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
    camera.position.set(0, -0.5, 5)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // 2. Video Texture & Shader Material
    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBAFormat

    // Shader for Screen blending & subtle 3D cloud distortion
    const cloudMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: videoTexture },
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uOpacity: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uScroll;

        void main() {
          vUv = uv;
          vec3 pos = position;
          // Add gentle 3D wave motion to the clouds
          pos.z += sin(pos.x * 2.0 + uTime * 0.8) * 0.15;
          pos.z += cos(pos.y * 2.0 + uTime * 0.6) * 0.15;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uOpacity;

        void main() {
          vec4 texColor = texture2D(uTexture, vUv);
          // Screen blend: luminance controls alpha for seamless transparency over background
          float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
          float alpha = smoothstep(0.05, 0.8, luminance) * uOpacity;
          
          gl_FragColor = vec4(texColor.rgb, alpha);
        }
      `,
      transparent: true,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      depthWrite: false
    })

    // 3. Geometry & Mesh
    // Create plane sized to camera view
    const planeGeo = new THREE.PlaneGeometry(8, 4.5, 32, 32)
    const cloudMesh = new THREE.Mesh(planeGeo, cloudMaterial)
    cloudMesh.position.set(0, -1.2, 0)
    scene.add(cloudMesh)

    // 4. Animation loop & Parallax update
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()
      cloudMaterial.uniforms.uTime.value = elapsedTime

      // Smoothly update 3D position based on scroll
      const targetY = -1.2 + (scrollY * 0.003)
      const targetRotX = (scrollY * 0.0005)
      const targetZ = Math.min(1.5, scrollY * 0.002)

      cloudMesh.position.y += (targetY - cloudMesh.position.y) * 0.1
      cloudMesh.rotation.x += (targetRotX - cloudMesh.rotation.x) * 0.1
      cloudMesh.position.z += (targetZ - cloudMesh.position.z) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // 5. Window Resize Handler
    const handleResize = () => {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      planeGeo.dispose()
      cloudMaterial.dispose()
      videoTexture.dispose()
    }
  }, [])

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Hidden video element serving as Three.js VideoTexture source */}
      <video
        ref={videoRef}
        src="/videos/clouds-transcode.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hidden"
      />
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}
