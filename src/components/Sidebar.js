import React from 'react'
import { Container, Typography, Button, Checkbox, FormControlLabel,
    FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    buttonContainer: {
        display: 'grid',
    },
    buttonSpacing: {
        marginTop: '10px'
    },
    headerSpacing: {
        marginTop: '25px',
        marginBottom: '25px',
        paddingLeft: '20px',
        textAlign: 'left'
    },
    buttonAlignment: {
        marginTop: '10px',
        alignItems: 'flex-start',
        display: 'flex',
        paddingLeft: '0px'
    }
}))

const Sidebar = ({ clearAll, undoClear, linkText,
    options, setOptions }) => {

    const classes = useStyles()
    return (
        <Container>
            <Typography variant='h4' className={classes.headerSpacing}>Options</Typography>
            <Container className={classes.buttonContainer}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Summary Type</InputLabel>
                    <Select
                        value={options.summaryType}
                        onChange={(event) => setOptions({ ...options, summaryType: event.target.value })}
                    >
                        <MenuItem value='Standard'>Standard summary</MenuItem>
                        <MenuItem value='Industry'>Industry summary</MenuItem>
                        <MenuItem value='Coles'>Coles style summary</MenuItem>
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setOptions({ ...options, boldCheck: !options.boldCheck })}
                            color='primary'
                        />
                    }
                    label='Bold'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setOptions({ ...options, boldCheck: !options.italicCheck })}
                            color='primary'
                        />
                    }
                    label='Italic'
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setOptions({ ...options, boldCheck: !options.linkTheCheck })}
                            color='primary'
                        />
                    }
                    label={'Link \'The\''}
                />
                <Container className={classes.buttonAlignment}>
                    <Button variant="contained" onClick={linkText}>Link</Button>
                </Container>
                <Container className={classes.buttonAlignment}>
                    <Button variant="contained" onClick={clearAll}>Clear</Button>
                </Container>
                <Container className={classes.buttonAlignment}>
                    <Button variant="contained" onClick={undoClear}>Undo</Button>
                </Container>
            </Container>
        </Container >
    )
}

export default Sidebar