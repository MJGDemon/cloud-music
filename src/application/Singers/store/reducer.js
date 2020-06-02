import { produce } from 'immer'
import * as actionTypes from './constants'

const defaultState = {
  alpha: '',
  category: '',
  singerList: [],
  enterLoading: false,
  pullUploading: false,
  pullDownLoading: false,
  pageCount: 0,
  hasMore: true,
}

const reducer = produce((draft = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ALPHA:
      draft.alpha = action.data
      return draft
    case actionTypes.CHANGE_CATEGORY:
      draft.category = action.data
      return draft
    case actionTypes.CHANGE_SINGER_LIST:
      draft.singerList = action.data
      return draft
    case actionTypes.CHANGE_PAGE_COUNT:
      draft.pageCount = action.data
      return draft
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      draft.pullDownLoading = action.data
      return draft
    case actionTypes.CHANGE_PULLUP_LOADING:
      draft.pullUpLoading = action.data
      return draft
    case actionTypes.CHANGE_ENTER_LOADING:
      draft.enterLoading = action.data
      return draft
    case actionTypes.CHANGE_HASMORE:
      draft.hasMore = action.data
      return draft
    default:
      return draft
  }
})

export default reducer
