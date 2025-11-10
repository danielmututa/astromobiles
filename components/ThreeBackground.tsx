"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: '#8b5cf6',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create geometric shapes
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({
      color: '#6366f1',
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)

    // Add sphere
    const sphereGeometry = new THREE.SphereGeometry(5, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: '#a855f7',
      wireframe: true,
      transparent: true,
      opacity: 0.1
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(-20, 10, -20)
    scene.add(sphere)

    // Add octahedron
    const octaGeometry = new THREE.OctahedronGeometry(7, 0)
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: '#ec4899',
      wireframe: true,
      transparent: true,
      opacity: 0.12
    })
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial)
    octahedron.position.set(25, -15, -30)
    scene.add(octahedron)

    camera.position.z = 30

    // Mouse movement
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Scroll effect
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    // Animation
    const clock = new THREE.Clock()
    
    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.05

      // Rotate torus
      torus.rotation.x = elapsedTime * 0.1 + scrollY * 0.0005
      torus.rotation.y = elapsedTime * 0.15 + scrollY * 0.0003

      // Rotate sphere
      sphere.rotation.x = elapsedTime * 0.08
      sphere.rotation.y = elapsedTime * 0.12

      // Rotate octahedron
      octahedron.rotation.x = elapsedTime * 0.06
      octahedron.rotation.y = elapsedTime * 0.09
      octahedron.rotation.z = elapsedTime * 0.04

      // Camera follows mouse smoothly
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05
      
      // Scroll effect on camera
      camera.position.z = 30 + scrollY * 0.01

      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
      octaGeometry.dispose()
      octaMaterial.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}