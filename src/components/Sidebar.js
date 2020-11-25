import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    buttonContainer: {
        display: 'grid',
    },
    buttonSpacing: {
        marginTop: '10px'
    }
}))

const Sidebar = ({ clearAll, undoClear, linkText,
    setSummary, bold, setBold, italic, setItalic, linkThe,
    setLink, platform, setPlatform }) => {

    const classes = useStyles()
    return (
        <Container>
            <Typography variant='h4'>Options</Typography>
            <Container className={classes.buttonContainer}>
                <label className={classes.buttonSpacing}>Summary style:
                    <select
                        size='3'
                        onChange={(event) => setSummary(event.target.value)}
                    >
                        <option value='Standard'>Standard summary</option>
                        <option value='Industry'>Industry summary</option>
                        <option value='Coles'>Coles style summary</option>
                    </select>
                </label>
                <label className={classes.buttonSpacing}>Bold
                    <input
                        type='checkbox'
                        onChange={() => setBold(!bold)}
                    />
                </label>
                <label className={classes.buttonSpacing}>Italic
                    <input
                        type='checkbox'
                        onChange={() => setItalic(!italic)}
                    />
                </label>
                <label className={classes.buttonSpacing}>Link &apos;The&apos;
                    <input
                        type='checkbox'
                        defaultChecked={true}
                        onChange={() => setLink(!linkThe)}
                    />
                </label>
                <label className={classes.buttonSpacing}>For a platform briefing?
                    <input
                        type='checkbox'
                        defaultChecked={true}
                        onChange={() => setPlatform(!platform)}
                    />
                </label>
                <Container className={classes.buttonSpacing}>
                    <Button variant="contained" onClick={linkText}>Link</Button>
                </Container>
                <Container className={classes.buttonSpacing}>
                    <Button variant="contained" onClick={clearAll}>Clear</Button>
                </Container>
                <Container className={classes.buttonSpacing}>
                    <Button variant="contained" onClick={undoClear}>Undo</Button>
                </Container>
            </Container>
        </Container>
    )
}

export default Sidebar