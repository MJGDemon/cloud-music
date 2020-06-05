import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from './style'
import SongList from '../songList'

function RankList(props) {
  const { list, global } = props

  return (
    <List globalRank={global}>
      {
        list.map((item) => (
          <ListItem
            key={item.coverImgUrl}
            tracks={item.tracks}
          >
            <div className="img-wrapper">
              <img src={item.coverImgUrl} />
              <div className="decorate"></div>
              <span className="update_frequecy">{item.updateFrequency}</span>
            </div>
            <SongList list={item.tracks}></SongList>
          </ListItem>
        ))
      }
    </List>
  )
}

RankList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    coverImgId: PropTypes.number.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.shape({
      first: PropTypes.string.isRequired,
      second: PropTypes.string.isRequired,
    })),
    coverImgUrl: PropTypes.string.isRequired,
    updateFrequency: PropTypes.string.isRequired,
  })).isRequired,
}

export default RankList
