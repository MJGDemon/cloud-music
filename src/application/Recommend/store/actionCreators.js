import * as actionTypes from './constants'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data,
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
})

export const getBannerList = () => async (dispatch) => {
  try {
    const result = await getBannerRequest()
    dispatch(changeBannerList(result.banners))
  } catch {
    console.log('轮播图数据传输错误')
  }
}

export const getRecommendList = () => async (dispatch) => {
  try {
    const result = await getRecommendListRequest()
    dispatch(changeRecommendList(result.result))
  } catch {
    console.log('推荐歌单数据传输错误')
  }
  dispatch(changeEnterLoading(false))
}
