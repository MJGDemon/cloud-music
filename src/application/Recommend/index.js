import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Slider from '../../components/slider'
import * as actionTypes from './store/actionCreators'
import RecommendList from '../../components/recommendList/index'
import Scroll from '../../baseUI/scroll/index'
import { Content } from './style'
import LazyLoad from '../../baseUI/lazyLoad'
import Loading from '../../baseUI/loading/index'

function Recommend(props) {
  const {
    bannerList, recommendList, enterLoading, route,
  } = props

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  useEffect(() => {
    getBannerDataDispatch()
    getRecommendListDataDispatch()
  }, [getBannerDataDispatch, getRecommendListDataDispatch])

  return (
    <Content className="list">
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <LazyLoad>
            <RecommendList recommendList={recommendList}></RecommendList>
          </LazyLoad>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
      {renderRoutes(route.routes) }
    </Content>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading']),
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => ({
  getBannerDataDispatch() {
    dispatch(actionTypes.getBannerList())
  },
  getRecommendListDataDispatch() {
    dispatch(actionTypes.getRecommendList())
  },
})

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))
