import { cl } from '../../../helpers/helpers';
import { deletePost } from '../../actionCreators/postActions';

const deletePostData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(cl(`/post/${id}`), { method: 'DELETE' });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deletePost(id));
    }
  };
};

export default deletePostData;
