'use client'

import { useCallback, useEffect, useState, useRef } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

interface ParticlesBackgroundProps {
  className?: string
}

export default function ParticlesBackground({ className = "" }: ParticlesBackgroundProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const initAttempts = useRef(0)
  const maxAttempts = 3

  // Initialize particles engine with retry logic
  const particlesInit = useCallback(async (engine: Engine) => {
    initAttempts.current += 1
    
    try {
      await loadSlim(engine)
      setIsInitialized(true)
      console.log('Particles initialized successfully')
    } catch (error) {
      console.error(`Failed to initialize particles (attempt ${initAttempts.current}):`, error)
      
      // Retry initialization up to maxAttempts
      if (initAttempts.current < maxAttempts) {
        setTimeout(async () => {
          try {
            await loadSlim(engine)
            setIsInitialized(true)
            console.log('Particles initialized on retry')
          } catch (retryError) {
            console.error('Retry failed:', retryError)
          }
        }, 500 * initAttempts.current) // Exponential backoff
      }
    }
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      setIsLoaded(true)
      console.log('Particles loaded successfully')
    }
  }, [])

  // Force re-initialization on mount
  useEffect(() => {
    initAttempts.current = 0
    setIsInitialized(false)
    setIsLoaded(false)

    // Fallback: Force particles to show after 3 seconds if they haven't loaded
    const fallbackTimer = setTimeout(() => {
      if (!isLoaded) {
        console.log('Particles fallback: forcing visibility')
        setIsLoaded(true)
      }
    }, 3000)

    return () => clearTimeout(fallbackTimer)
  }, [isLoaded])

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
          opacity: isLoaded ? 1 : 0,
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
