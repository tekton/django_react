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
        alert("all fields required");
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
            <div className="form-group">
                <label htmlFor="color" className="control-label">
                    Chart Color*
                </label>
                <div className="select-color">
                    <input id="color" name="color" type="text"
                           className="required"
                           value=""/>
                    <label htmlFor="sensor-def-color">Select</label>
                </div>
            </div>
            <div className="form-group inline clearfix">
                <label>
                    <input type="checkbox"
                           Nameid="mon" />
                    Mon
                </label>
                <div className='input-group datepicker'>
                    <input id=""
                           name=""
                           className="form-control required"
                           type="text"
                           placeholder="09:00:00" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
                <p>to</p>
                <div className='input-group datepicker'>
                    <input id=""
                           name=""
                           className="form-control required"
                           type="text"
                           placeholder="17:00:00" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>

            <div className="form-group">
                <label className="control-label">Urgency</label>
                <select id="escalation-urgency"
                        className="form-control selectpicker required"
                        name="escalation-urgency" title="Select">
                    <option value="24">24 hour</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div className="form-group">
                <label className="control-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Playbook Name"
                    value={this.state.playbook_name}
                    onChange={this.handleNameChange} />
            </div>
            
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