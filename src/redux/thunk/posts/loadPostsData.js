import { cl } from '../../../helpers/helpers';
import { loadPosts } from '../../actionCreators/postActions';

const loadPostsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(cl('/posts'));
    const data = await res.json();

    if (data.length) {
      dispatch(loadPosts(data));
    }
  };
};

export default loadPostsData;
