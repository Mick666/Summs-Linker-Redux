import React from 'react'

const Output = ({ outputData }) => {
    if (!outputData) return (
        <div></div>
    )

    return (
        <div id='outputParentDiv'>
            {outputData.forEach(x => document.getElementById('outputParentDiv').appendChild(x))}
        </div>
    )
}

export default Output