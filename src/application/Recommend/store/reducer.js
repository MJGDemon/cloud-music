// reducer.js
import { produce } from 'immer'
import * as actionTypes from './constants'

const defaultState = ({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
})

export default produce((draft = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      draft.bannerList = action.data
      return draft
    case actionTypes.CHANGE_RECOMMEND_LIST:
      draft.recommendList = action.data
      return draft
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
      return draft
    default:
      return draft
  }
})
