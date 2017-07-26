// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/recipes/seed'
import { UPDATE_RECIPE } from '../actions/recipes/update'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEED_RECIPES :
      return [].concat(payload)

    case UPDATE_RECIPE :
      const { _id, updates } = payload

      return state.map((recipe) => {
        if (recipe._id !== _id) return recipe
        return Object.assign({}, recipe, updates)
      })

    default :
      return state
  }
}
