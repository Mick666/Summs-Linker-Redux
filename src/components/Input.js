import React from 'react'
import { Typography, TextareaAutosize } from '@material-ui/core'

const Input = ({ handleChange, textInput }) => {
    return (
        <div>
            <Typography variant='h4'>Text and Links</Typography>
            <TextareaAutosize
                rows='25'
                cols='60'
                value={textInput}
                onChange={(e) => handleChange(e.target.value) }
            />
        </div>
    )
}

export default Input