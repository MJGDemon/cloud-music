
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useHistory } from 'react-router'
import { Container } from './style'
import Header from '../../baseUI/header'

function Album(props) {
  const [showStatus, setShowStatus] = useState(true)
  const history = useHistory()

  const handleBack = () => {
    setShowStatus(false)
  }
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear
      unmountOnExit
      onExited={history.goBack}
    >
      <Container>
        <Header title="返回" handleClick={handleBack}></Header>
      </Container>
    </CSSTransition>
  )
}

export default React.memo(Album)
