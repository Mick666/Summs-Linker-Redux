import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    outputContainer: {
        display: 'inline-block',
        textAlign: 'left',
        wordWrap: 'break-word',
        maxWidth: '1500px'
    }
}))

const Output = ({ outputData }) => {
    console.log(outputData)
    const classes = useStyles()
    if (!outputData) return (
        <div></div>
    )
    return (
        <Container className={classes.outputContainer}>
            <Typography variant='h4'>Linked text</Typography>
            {outputData.map((summ, i) => {
                return (<Box key={i} whiteSpace="normal">
                    {summ.map(x => x)}
                </Box>
                )
            })}
        </Container>
    )
}

export default Output