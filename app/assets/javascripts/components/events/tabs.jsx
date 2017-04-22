var EventTabs = React.createClass({
  getDefaultProps() {
    return {
      tabItems: [
        { label: 'Explore', value: 0, icon: 'icon-compass' },
        { label: 'Invited', value: 1, icon: 'icon-users' },
        { label: 'Created By You', value: 2, icon: 'icon-user' }
      ]
    }
  },
  getInitialState() {
    return {
      currentActiveItem: 0
    }
  },
  constructClassName(value) {
    return ((this.state.currentActiveItem == value) ? 'active' : '');
  },
  handleClick(e, value) {
    e.preventDefault();
    var url = '/events?mode=' + value;
    $.getScript(url);
    this.setState({currentActiveItem: value});
  },
  render() {
    var _this = this;
    var tabItems = this.props.tabItems.map(function(tabItem) {
      return (
        <li key={tabItem.value} className={_this.constructClassName(tabItem.value)}>
          <a href="#" onClick={(evt) => _this.handleClick(evt, tabItem.value)}><i className={tabItem.icon}></i> {tabItem.label}</a>
        </li>
      );
    });
    return (
      <ul className="nav nav-pills">
        {tabItems}
      </ul>
    );
  }
});

module.exports = EventTabs;
