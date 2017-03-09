var ContentEditable = React.createClass({
	render() {
		return (
			<div>
				<div contentEditable className="editable form-control input-mentionable" placeholder={ this.props.placeholder }></div>
				<input type="hidden"></input>
			</div>
		)
	}
});
