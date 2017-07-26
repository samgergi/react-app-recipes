export const UPDATE_RECIPE = 'UPDATE_RECIPE'

export default (_id, updates) => {
  return {
    type: UPDATE_RECIPE,
    payload: {
      _id,
      updates
    }
  }
}
