
export default function RightPanel(){

    return(<>
        <div className="rightpanel">            
            <div className="header">
                <a href="#"><i class="far fa-bell" style={{margin:'10px'}}></i></a>
                <a href="#"><i class="fas fa-user-circle"></i></a>
                
                
            </div>

            <div className="container1">
            <img src="https://source.unsplash.com/collection/190727/50x50" className="img"/>            
            <h2>Billie Eilish</h2>
            <p>1.5 MB Modified 3 hours ago</p>
            <i class="fas fa-wave-square"></i><i class="fas fa-wave-square"></i><i class="fas fa-wave-square"></i><i class="fas fa-wave-square"></i><i class="fas fa-wave-square"></i>
                 <div></div>
            <i class="fas fa-link" style={{margin:'5px'}}></i>
            <i class="fas fa-ellipsis-v" style={{margin:'5px'}}></i>
            <i class="fas fa-play" style={{margin:'5px'}}></i>
            <hr />
            </div>


            <div className="container2">
                <img src="https://source.unsplash.com/collection/190727/10x10" alt="" className="img1"/>
                <img src="https://source.unsplash.com/collection/190727/10x10" alt="" className="img1"/>
                <img src="https://source.unsplash.com/collection/190727/10x10" alt="" className="img1"/>
                <i class="fas fa-plus-circle img1" ></i>
            </div>  
                
            <div className="message">
                <div className="message-icon">
                     <img src="https://source.unsplash.com/collection/190727/20x20" alt="" className="img2"/>
                     
                 </div>
                <p>@Marie  We  need  to  make  sure  to  review  the  cover</p>
            </div>
            <div className="comment">
                <div className="message-icon comment">
                     <img src="https://source.unsplash.com/collection/190727/20x20" alt="" className="img2"/>
                     
                 </div>
                <input type="text" 
                       className="comment-text" 
                       placeholder="write a comment"
                       />
            </div>                    
        
        </div>         
</>)
}