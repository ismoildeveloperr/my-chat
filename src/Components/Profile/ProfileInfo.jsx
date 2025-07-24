import React from 'react'
import Preloader from "../Common/Preloader/Preloader";

const ProfileInfo=(props)=>{
    if (!props.profile) {
    return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s" alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
            </div>
        </div>
    )
}
export default ProfileInfo;