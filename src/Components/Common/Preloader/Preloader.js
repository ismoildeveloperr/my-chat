import React from "react";
import preloader from '../../../assets/images/loader.svg'

let Preloader = (props) => {
    return <div style={{ background: 'black' }}>
        <img src={preloader} alt=""/>
    </div>
}
export default Preloader;