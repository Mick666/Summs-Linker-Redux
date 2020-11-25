import React from 'react'
import { Typography } from '@material-ui/core'

const Input = ({ handleChange, textInput }) => {
    return (
        <div>
            <Typography variant='h4'>Text and Links</Typography>
            <textarea
                rows='25'
                cols='60'
                value={textInput}
                onChange={(e) => handleChange(e.value)}
            />
        </div>
    )
}

export default Input