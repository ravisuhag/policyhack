particlesJS('canvaswrap', {
    particles: {
        color: '#fff',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: .8,
        size: 2,
        size_random: true,
        nb: 850,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: .4,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 3
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .2
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove" (particles)
                nb: 4
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});
