import { produce } from 'immer'
import * as actionTypes from './constants'

const defaultState = {
  rankList: [],
  loading: false,
}

const reducer = produce((draft = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      draft.rankList = action.data
      return draft
    default:
      return draft
  }
})

export default reducer
