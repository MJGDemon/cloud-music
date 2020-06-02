import React from 'react'
import { List, ListItem } from './style'
import singer from './singer.png'

function SingerList(props) {
  const { singerList } = props
  return (
    <List>
      {
        singerList.map((item) => (
          <ListItem key={item.id}>
            <div className="img-wrapper">
              <img data-src={`${item.picUrl}?param=300x300`} src={singer} width="100%" height="100%" alt="music" />
            </div>
            <span className="name">{item.name}</span>
          </ListItem>
        ))
      }
    </List>
  )
}

export default SingerList
