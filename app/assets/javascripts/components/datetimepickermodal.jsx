InputMoment = require('input-moment');
var DateTimePickerModal = React.createClass({
  getInitialState() {
    return {
      moment: Moment()
    }
  },
  handleChange(moment) {
    this.setState({moment: moment});
  },
  handleSave() {

  },
  render() {
    return (
      <div id="datetimepickermodal" className="modal fade" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Pick Date &amp; Time</h4>
            </div>
            <div className="modal-body">
              <InputMoment
                moment={this.state.moment}
                onChange={this.handleChange}
                onSave={this.handleSave}
                prevMonthIcon="icon-left-open"
                nextMonthIcon="icon-right-open" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DateTimePickerModal;
