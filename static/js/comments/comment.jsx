// tutorial4.js
var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() { 
    return ( //tutrial6 && 7
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          <div dangerouslySetInnerHTML={this.rawMarkup()} />
          <span className="playbook_legend">Playbook:</span> <span clasName="playbbok">{this.props.playbook_name}</span>
      </div>
    );
  }
});