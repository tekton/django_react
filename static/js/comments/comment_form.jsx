var CommentForm = React.createClass({
  getInitialState: function() { // tutorial16.js
    return {author: '', comment: '', playbook_name: ''};
  },
  handleAuthorChange: function(e) { // tutorial16.js
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) { // tutorial16.js
    this.setState({comment: e.target.value});
  },
  handleNameChange: function(e) { // tutorial16.js
    this.setState({playbook_name: e.target.value});
  },
  handleSubmit: function(e) { // tutorial17.js
    e.preventDefault();
    var author = this.state.author.trim();
    var comment = this.state.comment.trim();
    var playbook_name = this.state.playbook_name.trim();
    if (!comment || !author || !playbook_name) {  
      return;
    }
    // tutorial19.js
    this.props.onCommentSubmit({author: author, comment: comment, playbook_name: playbook_name});
    this.setState({author: '', comment: '', playbook_name: ''});
  },
  render: function() { // tutorial15.js, tutorial17.js
    return (
      <div className="commentForm" className="commentForm" onSubmit={this.handleSubmit}>
        <form className="commentForm">
            <input
            type="text"
            placeholder="Playbook Name"
            value={this.state.playbook_name}
            onChange={this.handleNameChange} />
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange} />
          <input
            type="text"
            placeholder="Say nothing?!"
            value={this.state.comment}
            onChange={this.handleTextChange} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});