import * as actionTypes from './constants'
import { getRankListRequest } from '../../../api/request'

const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data,
})

const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data,
})

export const getRankList = async (dispatch) => {
  try {
    const result = await getRankListRequest()
    dispatch(changeRankList(result.data))
    dispatch(changeLoading(false))
  } catch {
    console.log('获取排行榜数据失败')
  }
}
