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
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: '75vh'
    },
    parentGrid: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
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
    const [summaryType, setSummaryType] = useState('Standard')
    const [boldCheck, setBold] = useState(false)
    const [italicCheck, setItalic] = useState(false)
    const [linkTheCheck, setLinkThe] = useState(false)
    const [platformCheck, setPlatform] = useState(true)

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
            if (summaryType === 'Standard') {
                if (!linkTheCheck && text.startsWith('The')) {
                    text = text.slice(4)
                    para.push(<Typography className={classes.linkedOutput}>The&nbsp;</Typography>)
                }
                console.log(text, para)

                if (text.match(/^.*?(?= report)|(?= reports)/) === null) {
                    continue
                }
                let textMatch = text.match(/^.*?(?= report)|(?= reports)/)[0]
                let textSplit = textMatch.split(/ and |, /)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        appendLinks(links[j], textSplit[x], para)
                        if (separators[x]) {
                            if (platformCheck.checked) separators[x] = separators[x].trim()
                            para.push(<Typography className={classes.linkedOutput}>{separators[x]}</Typography>)
                        }
                    }
                } else {
                    appendLinks(links[j], textMatch, para)
                    j++
                }
                appendText(text, para)
                para.push(<br />)
                combinedParas.push(para)
            } else if (summaryType === 'Industry') {
                appendText(text, para)
                appendLinks(links[j], text.match(/( - )(.*)$/)[2], para)
                para.push(<br />)
                combinedParas.push(para)
                j++
            } else if (summaryType === 'Coles') {
                let textMatch = text.match(/( - )(.*)$/)[2]
                let textSplit = textMatch.split(/ and |, /)
                appendText(text, para)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        appendLinks(links[j], textSplit[x], para)
                        if (separators[x]) {
                            if (platformCheck.checked) separators[x] = separators[x].trim()
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
        if (boldCheck) {
            para.push(
                <b>
                    <Link href={link} className={classes.linkedOutput}>{text}</Link>
                </b>)
        } else if (italicCheck) {
            para.push(
                <i>
                    <Link href={link} className={classes.linkedOutput}>{text}</Link>
                </i>)
        } else {
            para.push(<Link href={link} className={classes.linkedOutput}>{text}</Link>)
        }
    }

    function appendText(text, para) {
        let textComb
        if (summaryType === 'Standard' || summaryType === '') {
            textComb = text.split(/^.*?(?= report)|(?= reports)/)[1]
            if (platformCheck) textComb = textComb.trim()
            para.push(<Typography className={classes.linkedOutput}>{textComb}</Typography>)
        } else if (summaryType === 'Industry' || summaryType === 'Coles') {
            var match = text.match(/( - )(.*)$/)
            textComb = text.slice(0, match.index + 3)
            if (platformCheck && summaryType === 'Industry') textComb = textComb.trim()
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
                    summaryType={summaryType}
                    setSummary={setSummaryType}
                    bold={boldCheck}
                    setBold={setBold}
                    italic={italicCheck}
                    setItalic={setItalic}
                    linkThe={linkTheCheck}
                    setLink={setLinkThe}
                    platform={platformCheck}
                    setPlatform={setPlatform}
                />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container className={classes.parentGrid}>
                    <Input
                        handleChange={setTextInput}
                        textInput={textInput}
                    />
                    <Output outputData={linkedOutput} />
                </Container>
            </main>
        </Container>
    )
}

export default App
