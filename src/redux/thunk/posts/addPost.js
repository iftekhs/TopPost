import { cl } from '../../../helpers/helpers';
import { addPost } from '../../actionCreators/postActions';

const addPostData = (post) => {
  return async (dispatch, getState) => {
    const res = await fetch(cl('/post'), {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await res.json();

    if (data._id) {
      dispatch(
        addPost({
          _id: data._id,
          ...post,
        })
      );
    }
  };
};

export default addPostData;
