import React from "react"
import Particles from 'react-particles-js';

function IndexPage(){
  return(
    <main>
      <div style={{
        background: 'gray',
        color:' #fffbf7',
        position: 'relative',
        height: '600px'
      }}>
       <Particles style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
       }}
       params={{
        particles: {
          move: {
            speed:2,
          },
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            }
          },
        }
      }}
       />
        asdhakjd
      </div>


     
    </main>
  )
}

export default IndexPage
