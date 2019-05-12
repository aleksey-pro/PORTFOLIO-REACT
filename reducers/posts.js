export const reducer = (state = {}, action) => {
  switch (action.type) {
      case 'FETCH_POSTS_LOADING':
        return {...state, loading: action.isLoading }
      case 'FETCH_POSTS_SUCCESS':
          return {...state, posts: action.payload}
      case 'FETCH_POSTS_ERROR':
          return {...state, errored: action.hasErrored }
      case 'FETCH_POST_SUCCESS':
          return {...state, portfolio: action.payload}       
      default:
          return state;
  }
}