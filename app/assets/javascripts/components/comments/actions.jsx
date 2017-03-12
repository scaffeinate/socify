var CommentActions = React.createClass({
  render() {
    return (
      <div className="dropdown">
        <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <i className="icon-down-open-big"></i>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href='#'>Delete</a>
          </li>
        </ul>
      </div>
    )
  }
});
