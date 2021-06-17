import LeftPanel from './leftpanel'
import RightPanel from './rightpanel'
import Center from './middlepannel'

import Checkbox from '@material-ui/core/Checkbox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FolderIcon from '@material-ui/icons/Folder';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import ImageIcon from '@material-ui/icons/Image';

import React from 'react';

export default function Screen(){

    return(<>
        <div className='background'>
            <div className="box">    
             <LeftPanel></LeftPanel>
               
              <div className="container">
                <div className="search">
                    <i class="fas fa-search"></i>
                    <input type="search" 
                       className="searchItem"    
                       placeholder="search your content"                      
                     />
                 </div> 
                    <h1>Home</h1>

                    <div className="container4">
                    <img className="imgg" src="https://source.unsplash.com/user/erondu/100x100" alt=""></img>
                    <div className="project">
                        <h1>Project</h1>
                        <p>We should be ready to reveal the new project next week and we are very excited</p>
                        <br />
                        <div className="chk">
                            <Checkbox />
                            <p className="icon">Creating storyboard</p>
                        </div>
                        <div className="chk2">
                            <Checkbox />
                            <p className="icon" style={{ textDecoration: 'line-through' }}>Creating storyboard</p>
                        </div>
                    </div>
                </div>

                <div className="chk3">
                    <h1 >Recent </h1>
                    <div className="rec">
                        <i class="fab fa-elementor"></i>
                        <i class="fas fa-bars"></i>
                        <i class="fas fa-plus-square"></i>
                    </div>
                </div>

                <div className="fold">
                    <FolderIcon />
                    <h5>Project venue</h5>
                    <h5>Folder</h5>
                </div>
                <div className="fold">
                    <MusicVideoIcon />
                    <h5 >Billie Eilish</h5>
                    <h5 >Music</h5>
                </div>
                <div className="fold">
                    <ImageIcon />
                    <h5 >City Skyline</h5>
                    <h5 >Gallery</h5>
                </div>

                </div>
                
                


                
                <RightPanel></RightPanel>
            </div>
        </div>
    </>)
}