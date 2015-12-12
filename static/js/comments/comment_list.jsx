// tutorial2.js
var CommentList = React.createClass({
  // render: function() { // tutorial5.js
  //   return ( 
  //     <div className="commentList">
  //       <Comment author="Pete Hunt">This is one comment</Comment>
  //       <Comment author="Jordan Walke">This is *another* comment</Comment>
  //     </div>
  //   );
  // }
  // tutorial10.js
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.comment}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});