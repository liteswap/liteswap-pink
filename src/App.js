import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useSpring, animated } from 'react-spring'

import { ReactComponent as GitHub } from './assets/github.svg'

const Background = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dc6be5;
`

const Body = styled.div`
  padding: 0;
  margin: 0;
  color: white;
`

const Text = styled.h1`
  padding: 2rem;
  margin: 0;
  text-align: center;
  font-size: 10vw;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
`

const Copied = styled(animated.h1)`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 4vw;
  font-weight: 300;
  user-select: none;
`
const GitHubLogo = styled(GitHub)`
  padding: 1rem;
  margin: 0;
  width: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  user-select: none;
`

const uniswapPink = '#DC6BE5'
const duration = 200

export default function App() {
  const [showCopied, setShowCopied] = useState(false)
  const props = useSpring({ config: { duration }, opacity: showCopied ? 1 : 0, from: { opacity: 0 } })

  useEffect(() => {
    if (showCopied) {
      const hide = setTimeout(() => {
        setShowCopied(false)
      }, duration)

      return () => {
        clearTimeout(hide)
      }
    }
  }, [showCopied])

  return (
    <Background>
      <Body>
        <CopyToClipboard
          text={uniswapPink}
          onCopy={() => {
            setShowCopied(true)
          }}
        >
          <Text>{uniswapPink}</Text>
        </CopyToClipboard>
        <Copied style={props}>Copied ✓</Copied>
      </Body>
      <a href="https://github.com/Uniswap/uniswap-pink" target="_blank" rel="noopener noreferrer">
        <GitHubLogo />
      </a>
    </Background>
  )
}
