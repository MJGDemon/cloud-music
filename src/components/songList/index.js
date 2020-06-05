import React from 'react'
import PropTypes from 'prop-types'

function SongList(props) {
  const { list } = props
  return (
    list.map((item, index) => (
      <li>
        {index + 1}. {item.first} - {item.second}
      </li>
    ))
  )
}

SongList.propType = {
  list: PropTypes.arrayOf(PropTypes.shape({
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
  })),
}

export default SongList
