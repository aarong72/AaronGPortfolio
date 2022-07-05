import React from 'react'
import './projects.css'
import MSP from './msp.png';
import Calc from './pythonCalcUpdated.png';
import Game from './pythonGame.png';

const Projects = () => {
  return (
    <div class="aboutme-container">        
    <div class="projects-header">
    <h1>Project Gallery</h1>
        <p>Hover over the images to get a larger view and a brief description of what they do</p>
    </div>
    <div class="row">
        <div class="col">
            <div class="box-projects">  
                <img id="image-3" src={MSP} class="gallery-projects" height = '300px' width='300px'/>  
                <span class="caption fade-caption">  
                    <h3> Python Calculator Project</h3>  
                    <p>Calculator with GUI created from scratch. Caclulator has self-defined functions along with API pulls and file read/writing. Was a part of a final project where I was tasked to create my own application. </p>  
                </span>  
            </div>
        </div>
        <div class="col">
            <div class="box-projects">  
                <img id="image-3" src={Calc} class="gallery-projects" height = '300px' width='300px'/>  
                <span class="caption fade-caption">  
                    <h3> MSP Black Knight Macro (C#)</h3>  
                    <p>Created an internal application that runs on a daily cycle in order to generate reports for one of our member-facing departments. Application interacts with member data, writes to files, and pulls data from the screen. This project was done in a professional setting so I am not able to share pictures of what was done.</p>  
                </span>  
            </div>
        </div>    
        <div class="col">
            <div class="box-projects">  
                <img id="image-3" src={Game} class="gallery-projects" height = '300px' width='300px'/>  
                <span class="caption fade-caption">  
                    <h3> Python Space Invaders Game</h3>  
                    <p>This project is a another final project I had done for school where I was tasked with creating a game. This game is reminiscent of Galaga or Space Invaders, and includes score keeping, level progression, and a multitude of self-made classes.</p>  
                </span>  
            </div>
        </div>
    </div>    
    </div>
  )
}

export default Projects