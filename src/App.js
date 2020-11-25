import React, { useState } from 'react'
import './App.css'
import { Drawer, AppBar, Toolbar, Typography, Container } from '@material-ui/core'
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
        let strippedInput = textInput
            .split('\n')
            .filter(x => x.replace(/\n| /g, '').length > 0)

        let links = strippedInput.filter(x => x.startsWith('http'))
        let summs = strippedInput.filter(x => !x.startsWith('http') && x.length > 10)
        let combinedParas = []

        for (let i = 0, j = 0; i < summs.length && j < links.length; i++) {
            let text = summs[i].replace(/–/g, '-')
            let para = []
            let link = document.createElement('a')
            if (boldCheck.checked) var bold = document.createElement('b')
            if (italicCheck.checked) var italic = document.createElement('i')

            if (summaryType.value === 'Standard' || summaryType.value === '') {
                if (!linkTheCheck.checked && text.startsWith('The')) {
                    text = text.slice(4)
                    para.push(document.createTextNode('The '))
                }

                if (text.match(/^.*?(?= report)|(?= reports)/) === null) {
                    continue
                }
                let textMatch = text.match(/^.*?(?= report)|(?= reports)/)[0]
                let textSplit = textMatch.split(/ and |, /)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        let newLink = document.createElement('a')
                        newLink.href = links[j]
                        newLink.text = textSplit[x]
                        if (bold) bold = document.createElement('b')
                        if (italic) italic = document.createElement('i')
                        appendLinks(newLink, para, bold, italic)
                        if (separators[x]) {
                            if (platformCheck.checked) separators[x] = separators[x].trim()
                            para.push(document.createTextNode(separators[x]))
                        }
                    }
                } else {
                    link.text = textMatch
                    link.href = links[j]
                    appendLinks(link, para, bold, italic)
                    j++
                }
                appendText(text, para)
                para.push(document.createElement('br'))
                combinedParas.push(para)
            } else if (summaryType.value === 'Industry') {
                appendText(text, para)
                link.text = text.match(/( - )(.*)$/)[2]
                link.href = links[j]
                appendLinks(link, para, bold, italic)
                para.push(document.createElement('br'))
                combinedParas.push(para)
                j++
            } else if (summaryType.value === 'Coles') {
                let textMatch = text.match(/( - )(.*)$/)[2]
                let textSplit = textMatch.split(/ and |, /)
                appendText(text, para)
                if (textSplit.length > 1) {
                    let separators = textMatch.match(/,(?:[^,])| and /g)
                    for (let x = 0; x < textSplit.length; x++, j++) {
                        let newLink = document.createElement('a')
                        if (links[j]) newLink.href = links[j]
                        newLink.text = textSplit[x]
                        if (bold) bold = document.createElement('b')
                        if (italic) italic = document.createElement('i')
                        appendLinks(newLink, para, bold, italic)
                        if (separators[x]) {
                            console.log(separators[x])
                            if (platformCheck.checked) separators[x] = separators[x].trim()
                            para.push(document.createTextNode(separators[x]))
                        }
                    }
                } else {
                    link.text = textMatch
                    link.href = links[j]
                    appendLinks(link, para, bold, italic)
                    j++
                }
                para.push(document.createElement('br'))
                combinedParas.push(para)
            }
        }
        setOutput(combinedParas)
    }


    function appendLinks(link, para, bold, italic) {
        if (bold) {
            if (italic) {
                italic.appendChild(link)
                bold.appendChild(italic)
            } else { bold.appendChild(link) }
            para.push(bold)
        } else if (italic) {
            italic.appendChild(link)
            para.push(italic)
        } else {
            para.push(link)
        }
    }

    function appendText(text, para) {
        let textComb
        if (summaryType.value === 'Standard' || summaryType.value === '') {
            textComb = text.split(/^.*?(?= report)|(?= reports)/)[1]
            if (platformCheck.checked) textComb = textComb.trim()
            para.push(document.createTextNode(textComb))
        } else if (summaryType.value === 'Industry' || summaryType.value === 'Coles') {
            var match = text.match(/( - )(.*)$/)
            textComb = text.slice(0, match.index + 3)
            if (platformCheck.checked && summaryType.value === 'Industry') textComb = textComb.trim()
            para.push(document.createTextNode(textComb))
        }
    }


    return (
        <Container className={classes.root}>
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
            <Input
                handleChange={setTextInput}
                textInput={textInput}
            />
            <Output outputData={linkedOutput} />
        </Container>
    )
}

export default App
