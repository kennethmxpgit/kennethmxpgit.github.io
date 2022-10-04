import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function MyBackground({darkMode}){
    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };

    const primary=(darkMode?"#1f1f1f":"FFF");
    const secondary=(darkMode?"#f8f8f8":"1f1f1f");



    return <div>
        {console.log(primary)}
        <Particles
    id="tsparticles"
    init={particlesInit}

    options=
    {
        {
      "fullScreen": {
          "enable": true,
          "zIndex": -1
      },
      "particles": {
          "number": {
              "value":20,
              "density": {
                  "enable": false,
                  "value_area": 800
              }
          },
          "color": {
              "value": secondary
          },
          "shape": {
              "type": "circle",
              "options": {
                  "sides": 5
              }
          },
          "opacity": {
              "value": 0.8,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 4,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "rotate": {
              "value": 0,
              "random": true,
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
        //   "line_linked": {
        //       "enable": true,
        //       "distance": 600,
        //       "color": secondary,
        //       "opacity": 0.4,
        //       "width": 0.5
        //   },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": ["grab"]
              },
            //   "onclick": {
            //       "enable": true,
            //       "mode": "attract"
            //   },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 300,
                  "line_linked": {
                      "opacity": 0.35,
                      "color":secondary
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true,
      "background": {
          "color": primary,
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  }
}
  />

    </div>
    
}