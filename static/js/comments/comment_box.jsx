// tutorial1
var CommentBox = React.createClass({
    // tutorial13, tutorial14
    loadCommentsFromServer: function() {
      // console.log("calling data"); // custom code added for debug
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    handleCommentSubmit: function(comment) { // tutorial18.js
      // tutorial21.js
      var comments = this.state.data;
      // Optimistically set an id on the new comment. It will be replaced by an
      // id generated by the server. In a production application you would likely
      // not use Date.now() for this and would have a more robust system in place.
      comment.id = Date.now();
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
      // tutorial20.js, custom
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(comment),
        contentType: "application/json",
        success: function(data) {
          console.log(data);
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    getInitialState: function() { //tutorial12
      // this executes EXACTLY once
      return {data: []};
    },
    // tutorial14
    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() { // tutorial3, tutorial9.js, tutorial12, tutorial18.js
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
});