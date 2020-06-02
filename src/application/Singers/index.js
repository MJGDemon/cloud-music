import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from './config'
import { NavContainer, ListContainer } from './style'
import SingerList from '../../components/singerList/index'
import Scroll from '../../baseUI/scroll/index'
import Loading from '../../baseUI/loading'
import LazyLoad from '../../baseUI/lazyLoad'
import {
  changeCategory,
  changeAlpha,
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  refreshMoreSingerList,
  changePullUpLoading,
  changePullDownLoading,
  refreshMoreHotSingerList,
} from './store/actionCreators'

function Singers(props) {
  const {
    category, alpha, pageCount, singerList, pullDownLoading, pullUpLoading, enterLoading,
  } = props
  const {
    updateCategoryDisPatch,
    updateAlphaDisPatch,
    getHotSingerDispatch,
    updateDispatch,
    pullUpRefreshDispatch,
    pullDownRefreshDispatch,
  } = props

  useEffect(() => {
    getHotSingerDispatch()
  }, [getHotSingerDispatch])
  const handleUpdateAlpha = (val) => {
    if (alpha === val) {
      updateAlphaDisPatch('')
      updateDispatch(category, '')
    } else {
      updateAlphaDisPatch(val)
      updateDispatch(category, val)
    }
  }

  const handleUpdateCategory = (val) => {
    if (category === val) {
      updateCategoryDisPatch('')
      updateDispatch('', alpha)
    } else {
      updateCategoryDisPatch(val)
      updateDispatch(val, alpha)
    }
  }

  const handlePullUpRefresh = () => {
    pullUpRefreshDispatch(category, alpha, category === '', pageCount)
  }

  const handlePullDownRefresh = () => {
    pullDownRefreshDispatch(category, alpha)
  }

  return (
    <NavContainer>
      <Horizen
        list={categoryTypes}
        title="分类 (默认热门):"
        handleClick={handleUpdateCategory}
        oldVal={category}
      >
      </Horizen>
      <Horizen
        list={alphaTypes}
        title="首字母:"
        handleClick={handleUpdateAlpha}
        oldVal={alpha}
      >
      </Horizen>
      <ListContainer>
        <Scroll
          pullDownLoading={pullDownLoading}
          pullUpLoading={pullUpLoading}
          enterLoading={enterLoading}
          pullUp={handlePullUpRefresh}
          pullDown={handlePullDownRefresh}
        >
          <LazyLoad>
            <SingerList singerList={singerList}></SingerList>
          </LazyLoad>
        </Scroll>
        <Loading show={enterLoading}></Loading>
      </ListContainer>
    </NavContainer>
  )
}

const mapStateToProps = (state) => ({
  category: state.getIn(['singers', 'category']),
  alpha: state.getIn(['singers', 'alpha']),
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount']),
})
const mapDispatchToProps = (dispatch) => ({
  updateCategoryDisPatch(category) {
    dispatch(changeCategory(category))
  },
  updateAlphaDisPatch(alpha) {
    dispatch(changeAlpha(alpha))
  },
  getHotSingerDispatch() {
    dispatch(getHotSingerList())
  },
  updateDispatch(category, alpha) {
    dispatch(changePageCount(0))// 由于改变了分类，所以pageCount清零
    dispatch(changeEnterLoading(true))// loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
    dispatch(getSingerList(category, alpha))
  },
  // 滑到最底部刷新部分的处理
  pullUpRefreshDispatch(category, alpha, hot, count) {
    dispatch(changePullUpLoading(true))
    dispatch(changePageCount(count + 1))
    if (hot) {
      dispatch(refreshMoreHotSingerList())
    } else {
      dispatch(refreshMoreSingerList(category, alpha))
    }
  },
  // 顶部下拉刷新
  pullDownRefreshDispatch(category, alpha) {
    dispatch(changePullDownLoading(true))
    dispatch(changePageCount(0))// 属于重新获取数据
    if (category === '' && alpha === '') {
      dispatch(getHotSingerList())
    } else {
      dispatch(getSingerList(category, alpha))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))
