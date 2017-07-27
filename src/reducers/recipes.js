// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/recipes/seed'
import { UPDATE_RECIPE } from '../actions/recipes/update'
import { CREATE_RECIPE } from '../actions/recipes/create'
const initialState = []
export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SEED_RECIPES :
      return [].concat(payload)
    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)
    case UPDATE_RECIPE :
      const { _id, updates } = payload
      return state.map((recipe) => {
        if (recipe._id !== _id) return recipe
        return Object.assign({}, recipe, updates)
      })
    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)
   default :
      return state
  }
}
