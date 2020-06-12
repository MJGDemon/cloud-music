import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { HeaderContainer } from './style'

const Header = forwardRef((props, ref) => {
  const { handleClick, title } = props
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      <h1>{title}</h1>
    </HeaderContainer>
  )
})

Header.defaultProps = {
  handleClick: () => {},
  title: '标题',
}

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
}

export default React.memo(Header)
