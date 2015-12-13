// tutorial4.js
var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    console.log(rawMarkup);
    return { __html: rawMarkup };
  },
  render: function() { 
    return ( //tutrial6 && 7
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});