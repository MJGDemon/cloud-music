import React from 'react'
import PropTypes from 'prop-types'

function Bottom(props) {
  const { show } = props
  console.log(show)
  const displayStyle = show ? { display: '' } : { display: 'none' }
  return (
    <div>到底啦！</div>
  )
}

export default React.memo(Bottom)

Bottom.propType = {
  show: PropTypes.bool.isRequired,
}
