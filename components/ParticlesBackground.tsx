'use client'

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

interface ParticlesBackgroundProps {
  className?: string
}

export default function ParticlesBackground({ className = "" }: ParticlesBackgroundProps) {
  const [isReady, setIsReady] = useState(false)

  // Initialize particles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadSlim(engine)
      console.log('Particles initialized successfully')
    } catch (error) {
      console.error('Failed to initialize particles:', error)
      // Try once more
      try {
        await loadSlim(engine)
        console.log('Particles initialized on retry')
      } catch (retryError) {
        console.error('Retry failed:', retryError)
      }
    }
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      setIsReady(true)
      console.log('Particles loaded and ready')
    }
  }, [])

  // Reset ready state on mount
  useEffect(() => {
    setIsReady(false)
    
    // Ensure particles appear after a reasonable delay if they haven't loaded
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <Particles
        id="tsparticles-hero"
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          zIndex: 0,
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
        autoPlay: true,
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        pauseOnBlur: false,
        pauseOnOutsideViewport: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.8,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#1840BA", "#3F92FA"],
          },
          links: {
            color: "#1840BA",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1.2,
            triangles: {
              enable: false,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 0.4,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: {
              enable: true,
              minimumValue: 1,
            },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
        },
        detectRetina: true,
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 25,
                },
                move: {
                  speed: 0.5,
                },
                links: {
                  distance: 100,
                },
              },
            },
          },
          {
            maxWidth: 480,
            options: {
              particles: {
                number: {
                  value: 15,
                },
                move: {
                  speed: 0.3,
                },
                links: {
                  distance: 80,
                },
              },
            },
          },
        ],
      }}
    />
    </div>
  )
}
