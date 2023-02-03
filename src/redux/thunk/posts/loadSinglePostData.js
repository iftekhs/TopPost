import { cl } from '../../../helpers/helpers';
import { loadSinglePost } from '../../actionCreators/postActions';

const loadSinglePostData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(cl(`/post/${id}`));
    const data = await res.json();
    if (data._id) {
      dispatch(loadSinglePost(data));
    }
  };
};

export default loadSinglePostData;
