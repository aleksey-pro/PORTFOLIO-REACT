import Axios from 'axios'

export function postsHasErrored(bool) {
  return {
      type: 'FETCH_POSTS_ERROR',
      hasErrored: bool
  };
}

export function postsIsLoading(bool) {
  return {
      type: 'FETCH_POSTS_LOADING',
      isLoading: bool
  };
}

export function postsFetchDataSuccess(data) {
  return {
      type: 'FETCH_POSTS_SUCCESS',
      payload: data.splice(0, 10)
  };
}

export const getPosts = url => async dispatch => {
  dispatch(postsIsLoading(true))
  try {
    const { data, statusText } = await Axios.get(url);
    dispatch(postsIsLoading(false));
    dispatch(postsFetchDataSuccess(data));
  } catch(err) {
    dispatch(postsHasErrored(true))
    throw new Error(err);
  }
}

// export const getPosts = url => dispatch => {
//     dispatch(postsIsLoading(true))
//     Axios.get(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText);
//         }  
//         dispatch(postsIsLoading(false))
//         console.log(response)
//         return response
//     })
//     .then((response) => response.json())
//     .then(data => dispatch(postsFetchDataSuccess(data)))
//     .catch(() => dispatch(postsHasErrored(true)))
// }
