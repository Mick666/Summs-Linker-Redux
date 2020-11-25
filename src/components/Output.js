import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles(() => ({
    outputContainer: {
        display: 'inline-block'
    }
}))

const Output = ({ outputData }) => {
    console.log(outputData)
    const classes = useStyles()
    if (!outputData) return (
        <div></div>
    )
    return (
        <Container>
            {outputData}
        </Container>
    )
}

export default Output