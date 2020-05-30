import React, { useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'
import Scroll from '../scroll/index'
import { List, ListItem } from './style'

function Horizen(props) {
  const { list, oldVal, title } = props
  const { handleClick } = props
  const Category = useRef(null)
  useEffect(() => {
    const categoryDOM = Category.current
    const tagElems = categoryDOM.querySelectorAll('span')
    let totalWidth = 0
    Array.from(tagElems).forEach((ele) => {
      totalWidth += ele.offsetWidth
    })
    categoryDOM.style.width = `${totalWidth}px`
  }, [])
  return (
    <Scroll direction="horizental">
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {
            list.map((item) => (
              <ListItem
                key={item.key}
                className={`${oldVal === item.key ? 'selected' : ''}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            ))
          }
        </List>
      </div>
    </Scroll>
  )
}

Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null,
}

Horizen.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isrequired,
    name: PropTypes.string.isrequired,
  })),
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Horizen
