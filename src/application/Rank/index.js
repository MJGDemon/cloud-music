import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import { filterIndex } from '../../api/utils'
import Scroll from '../../baseUI/scroll/index'
import { Container } from './style'
import RankList from '../../components/rankList/index'
import Loading from '../../baseUI/loading'

function Rank(props) {
  const { rankList, loading } = props
  const { getRankListDispatch } = props
  const globalStartIndex = filterIndex(rankList)
  const officialList = rankList.slice(0, globalStartIndex)
  const globalList = rankList.slice(globalStartIndex)
  const displayStyle = loading ? { display: 'none' } : { display: '' }
  useEffect(() => {
    getRankListDispatch()
  }, [getRankListDispatch])
  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>官方榜</h1>
          <RankList list={officialList}></RankList>
          <h1 className="global" style={displayStyle}>全球榜</h1>
          <RankList list={globalList} global={global}></RankList>
          {loading ? <Loading></Loading> : null}
        </div>
      </Scroll>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  rankList: state.getIn(['rank', 'rankList']),
})

const mapDispatchToProps = (dispatch) => ({
  getRankListDispatch() {
    dispatch(actionTypes.getRankList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))
