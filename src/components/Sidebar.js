import React from 'react'
import { Drawer, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))

const Sidebar = ({ clearAll, undoClear, linkText, summaryType,
    setSummary, bold, setBold, italic, setItalic, linkThe,
    setLink, platform, setPlatform }) => {

    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Typography variant='h4'>Options</Typography>
            <div>
                <label>Summary style:
                    <select
                        size='3'
                        onChange={(event) => console.log(event)}
                    >
                        <option value='Standard'>Standard summary</option>
                        <option value='Industry'>Industry summary</option>
                        <option value='Coles'>Coles style summary</option>
                    </select>
                </label>
                <div>
                    <label>Bold
                        <input
                            type='checkbox'
                            onChange={() => setBold(!bold)}
                        />
                    </label>
                    <label>Italic
                        <input
                            type='checkbox'
                            onChange={() => setItalic(!italic)}
                        />
                    </label>
                    <label >Link &apos;The&apos;
                        <input
                            type='checkbox'
                            defaultChecked={true}
                            onChange={() => linkThe(!setLink)}
                        />
                    </label>
                    <label>For a platform briefing?
                        <input
                            type='checkbox'
                            defaultChecked={true}
                            onChange={() => platform(!setPlatform)}
                        />
                    </label>
                </div>
                <Button variant="contained" onClick={linkText}>Link All</Button>
                <Button variant="contained" onClick={clearAll}>Clear All</Button>
                <Button variant="contained" onClick={undoClear}>Undo Clear</Button>
            </div>
        </Drawer>
    )
}

export default Sidebar