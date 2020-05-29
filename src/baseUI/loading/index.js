import React from 'react'
import { LoadingWrapper } from './style'

function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
}

export default React.memo(Loading)
