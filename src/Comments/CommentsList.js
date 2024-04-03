import { useComments } from './CommentsContext.js';

import PropTypes from 'prop-types';

export default function CommentsList() {
  const comments = useComments();

  return (
    <ul>
      {comments.map(comment => (
        <ul key ={comment.id} className="comment">
          <Comment comment={comment} />
        </ul>
        ))
      }
    </ul>
  )
}

function Comment({ comment }) {
  console.log(comment);
  return (
    <>
      {comment.content}
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.number.isRequired,
})};
