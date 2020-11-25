import React, { useState } from 'react'
import './App.css'
import { Drawer, AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from './components/Sidebar'
import Input from './components/Input'
import Output from './components/Output'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center',
        maxWidth: '1500px'
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
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: '75vh'
    },
    parentGrid: {
        display: 'grid',
        gridTemplateColumns: 'auto 10vh auto',
        gridTemplateRows: 'auto'
    },
    linkedOutput: {
        display: 'inline-block',
        textAlign: 'left'
    }
}))

function App() {
    const classes = useStyles()
    const [textInput, setTextInput] = useState('')
    const [linkedOutput, setOutput] = useState(null)
    const [prevState, setPrevState] = useState(null)
    const [options, setOptions] = useState({
        summaryType: 'Standard',
        boldCheck: false,
        italicCheck: false,
        linkTheCheck: false
    })

    const clearAll = () => {
        setPrevState(linkedOutput)
        setOutput(null)

    }

    const undoClear = () => {
        setOutput(prevState)
    }

    function linkText() {
        clearAll()
        let strippedInput = textInput
            .split('\n')
            .filter(x => x.replace(/\n| /g, '').length > 0)

        let links = strippedInput.filter(x => x.startsWith('http'))
        let summs = strippedInput.filter(x => !x.startsWith('http') && x.length > 10)
        let combinedParas = []
        console.log(links, summs)

        for (let i = 0, j = 0; i < summs.length && j < links.length; i++) {
            let text = summs[i].replace(/–/g, '-')
            let para = []
            let links = []
            if (options.summaryType === 'Standard') {
                if (!options.linkTheCheck && text.startsWith('The')) {
                    text = text.slice(4)
                    links.push(
                        <Typography className={classes.linkedOutput}>
                        The&nbsp;
                        </Typography>)
                }

                if (!text.match(/^.*?(?= report)|(?= reports)/)) {
                    continue
                }
                let textMatch = text.match(/^.*?(?= report)|(?= reports)/)[0]
                let textSplit = textMatch.split(/ and |, /)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        appendLinks(links[j], textSplit[x], links)
                        if (separators[x]) {
                            if (options.platformCheck) separators[x] = separators[x].trim()
                            links.push(<Typography className={classes.linkedOutput}>{separators[x]}</Typography>)
                        }
                    }
                } else {
                    appendLinks(links[j], textMatch, links)
                    j++
                }
                appendText(text, para, links)
                para.push(<br />)
                combinedParas.push(para)
            } else if (options.summaryType === 'Industry') {
                appendText(text, para)
                if (!text.match(/( - )(.*)$/)) continue
                appendLinks(links[j], text.match(/( - )(.*)$/)[2], para)
                para.push(<br />)
                combinedParas.push(para)
                j++
            } else if (options.summaryType === 'Coles') {
                if (!text.match(/( - )(.*)$/)) continue
                let textMatch = text.match(/( - )(.*)$/)[2]
                let textSplit = textMatch.split(/ and |, /)
                appendText(text, para)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        appendLinks(links[j], textSplit[x], para)
                        if (separators[x]) {
                            if (options.platformCheck.checked) separators[x] = separators[x].trim()
                            para.push(<Typography className={classes.linkedOutput}>{separators[x]}</Typography>)
                        }
                    }
                } else {
                    appendLinks(links[j], textMatch, para)
                    j++
                }
                para.push(<br />)
                combinedParas.push(para)
            }
        }
        setOutput(combinedParas)
    }


    function appendLinks(link, text, para) {
        if (options.boldCheck) {
            para.push(
                <b>
                    <Link href={link} className={classes.linkedOutput}>{text}</Link>
                </b>)
        } else if (options.italicCheck) {
            para.push(
                <i>
                    <Link href={link} className={classes.linkedOutput}>{text}</Link>
                </i>)
        } else {
            para.push(<Link href={link} className={classes.linkedOutput}>{text.trim()}</Link>)
        }
    }

    function appendText(text, para, links) {
        let textComb
        if (options.summaryType === 'Standard' || options.summaryType === '') {
            textComb = text.split(/^.*?(?= report)|(?= reports)/)[1]
            if (options.platformCheck) textComb = textComb.trim()
            para.push(
                <Typography className={classes.linkedOutput}>
                    {links}{' '}{textComb}
                </Typography>)
        } else if (options.summaryType === 'Industry' || options.summaryType === 'Coles') {
            var match = text.match(/( - )(.*)$/)
            if (!match) return
            textComb = text.slice(0, match.index + 3)
            if (options.platformCheck && options.summaryType === 'Industry') textComb = textComb.trim()
            para.push(<Typography className={classes.linkedOutput}>{textComb}</Typography>)
        }
    }

    return (
        <Container className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Summaries Linker
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Sidebar
                    clearAll={clearAll}
                    undoClear={undoClear}
                    linkText={linkText}
                    options={options}
                    setOptions={setOptions}
                />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container className={classes.parentGrid}>
                    <Input
                        handleChange={setTextInput}
                        textInput={textInput}
                    />
                    <div></div>
                    <Output outputData={linkedOutput} />
                </Container>
            </main>
        </Container>
    )
}

export default App
