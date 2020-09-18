import React from 'react'

import helpIcon from '../../../assets/images/help.png'
import startIcon from '../../../assets/images/start.png'

import './styles.css'

const GridHeader = () => {
    return(
        <div className="grid-header">
            <button className="icon-btn">
                <img src={startIcon} className="icon"/>
            </button>
            <button className="icon-btn">
                <img src={helpIcon} className="icon"/>
            </button>
        </div>
    )
}

export default GridHeader