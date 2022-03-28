import React from 'react';
import pfp from "./images/pfp.png"
import star from "./images/star.png"

function Rev(props) {
    return (
        <div className='revc'>
        <div className='revb'>
            <div className='pics'>
            <img src={pfp} alt="pfp" id='pfp' />
            <img src={star} alt ="stars" className='rimage'/>
            </div>
            <p>Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna Magna eu pariatur non pariatur consectetur sint  eu pariatur non pariatur consectetur sint </p>
        </div>

        <div className='revb'>
            <div className='pics'>
            <img src={pfp} alt="pfp" id='pfp' />
            <img src={star} alt ="stars" className='rimage'/>
            </div>
            <p>Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna Magna eu pariatur non pariatur consectetur sint  eu pariatur non pariatur consectetur sint </p>
        </div> 

        <div className='revb'>
            <div className='pics'>
            <img src={pfp} alt="pfp" id='pfp' />
            <img src={star} alt ="stars" className='rimage'/>
            </div>
            <p>Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna Magna eu pariatur non pariatur consectetur sint  eu pariatur non pariatur consectetur sint </p>
        </div> 
        
        </div>

        
    );
}

export default Rev;