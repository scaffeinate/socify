window.InputMoment = require('input-moment');

var EventsForm = React.createClass({
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
    return(
      <InputMoment
        moment={this.state.moment}
        onChange={this.handleChange}
        onSave={this.handleSave}
        prevMonthIcon="ion-ios-arrow-left"
        nextMonthIcon="ion-ios-arrow-right" />
    );
  }
});

module.exports = EventsForm;
