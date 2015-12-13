var CommentForm = React.createClass({
  getInitialState: function() { // tutorial16.js
    return {author: '', comment: ''};
  },
  handleAuthorChange: function(e) { // tutorial16.js
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) { // tutorial16.js
    this.setState({comment: e.target.value});
  },
  handleSubmit: function(e) { // tutorial17.js
    e.preventDefault();
    var author = this.state.author.trim();
    var comment = this.state.comment.trim();
    if (!comment || !author) {
      return;
    }
    // tutorial19.js
    this.props.onCommentSubmit({author: author, comment: comment});
    this.setState({author: '', comment: ''});
  },
  render: function() { // tutorial15.js, tutorial17.js
    return (
      <div className="commentForm" className="commentForm" onSubmit={this.handleSubmit}>
        <form className="commentForm">
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Say nothing?!"
            value={this.state.comment}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});