import React from 'react'
import { LoadingWrapper } from './style'

function Loading(props) {
  const { show } = props
  return (
    <LoadingWrapper style={show ? { display: '' } : { display: 'none' }}>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}

export default React.memo(Loading)
