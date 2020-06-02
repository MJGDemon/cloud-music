import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'

import {
  CHANGE_SINGER_LIST,
  CHANGE_CATEGORY,
  CHANGE_ALPHA,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_ENTER_LOADING,
  CHANGE_HASMORE,
} from './constants'


export const changeCategory = (data) => ({
  type: CHANGE_CATEGORY,
  data,
})

export const changeAlpha = (data) => ({
  type: CHANGE_ALPHA,
  data,
})

export const changeHasMore = (data) => ({
  type: CHANGE_HASMORE,
  data,
})

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data,
})

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data,
})

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data,
})

export const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data,
})

export const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data,
})

export const getHotSingerList = () => async (dispatch) => {
  try {
    dispatch(changeEnterLoading(true))
    const result = await getHotSingerListRequest(0)
    dispatch(changeHasMore(result.more))
    dispatch(changeSingerList(result.artists))
    dispatch(changeEnterLoading(false))
    dispatch(changePullDownLoading(false))
  } catch {
    console.log('热门歌手数据获取失败')
  }
}

export const refreshMoreHotSingerList = () => async (dispatch, getState) => {
  try {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList'])
    const result = await getHotSingerListRequest((pageCount + 1) * 50)
    dispatch(changeHasMore(result.more))
    dispatch(changePageCount(pageCount + 1))
    dispatch(changeSingerList([...singerList, ...result.artists]))
    dispatch(changePullUpLoading(false))
  } catch {
    console.log('热门歌手数据获取失败')
  }
}

export const getSingerList = (category, alpha) => async (dispatch) => {
  try {
    const result = await getSingerListRequest(category, alpha, 0)
    dispatch(changeHasMore(result.more))
    dispatch(changeSingerList([...result.artists]))
    dispatch(changeEnterLoading(false))
    dispatch(changePullDownLoading(false))
  } catch {
    console.log('歌手数据获取失败')
  }
}

export const refreshMoreSingerList = (category, alpha) => async (dispatch, getState) => {
  try {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList'])
    const result = await getSingerListRequest(category, alpha, (pageCount + 1) * 30)
    dispatch(changeHasMore(result.more))
    dispatch(changePageCount(pageCount + 1))
    dispatch(changeSingerList([...singerList, ...result.artists]))
    dispatch(changePullUpLoading(false))
  } catch {
    console.log('歌手数据获取失败')
  }
}
