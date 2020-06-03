import React from 'react'
import PropTypes from 'prop-types'
import { BottomWrap } from './style'

function Bottom(props) {
  const { show } = props
  const displayStyle = show ? { display: '' } : { display: 'none' }
  return (
    <BottomWrap style={displayStyle}>
      <div>到底啦！</div>
    </BottomWrap>
  )
}

export default React.memo(Bottom)

Bottom.propType = {
  show: PropTypes.bool.isRequired,
}
