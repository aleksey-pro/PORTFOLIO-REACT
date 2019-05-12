import Axios from 'axios'

export function postHasErrored(bool) {
    return {
        type: 'FETCH_POSTS_ERROR',
        hasErrored: bool
    };
  }

export function postFetchDataSuccess(data) {
    return {
        type: 'FETCH_POST_SUCCESS',
        payload: data
    };
  }

export const getPost = url => async dispatch => {
    try {
      const { data, statusText } = await Axios.get(url);
      dispatch(postFetchDataSuccess(data))
    } catch(err) {
      dispatch(postHasErrored(true))
      throw new Error(err);
    }
}