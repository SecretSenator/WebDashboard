import React from 'react'
import './style1.css'
import '../App.css'
import Checkbox from '@material-ui/core/Checkbox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FolderIcon from '@material-ui/icons/Folder';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import ImageIcon from '@material-ui/icons/Image';

const Center = () => {
    return (
        <>


            <div className="big">


                <div className="search">
                    <i class="fas fa-search"></i>
                    <input type="search"
                        className="searchItem"
                        placeholder="search your content"
                    />

                </div>


                <h1 >Home</h1>

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
                
                <br />
                <div className="chk3">
                    <h1>Recent</h1>
                    <div className="rec">
                        <AddBoxIcon />
                        <AddBoxIcon />
                        <AddBoxIcon />
                    </div>
                </div>
                <div className="fold">
                    <FolderIcon />
                    <h1 >Project venue</h1>
                    <h1 >Folder</h1>
                </div>
                <div className="fold">
                    <MusicVideoIcon />
                    <h1 >Billie Eilish</h1>
                    <h1 >Music</h1>
                </div>
                <div className="fold">
                    <ImageIcon />
                    <h1 >City Skyline</h1>
                    <h1 >Gallery</h1>
                </div>
            </div>
        </>
    )
}

export default Center