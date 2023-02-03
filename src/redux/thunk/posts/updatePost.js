import { cl } from '../../../helpers/helpers';
import { updatePost } from '../../actionCreators/postActions';

const updatePostData = (post, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(cl(`/post/${id}`), {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await res.json();

    if (data._id) {
      dispatch(updatePost(post));
    }
  };
};

export default updatePostData;
