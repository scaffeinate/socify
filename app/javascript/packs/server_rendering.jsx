//= require turbolinks
import ReactRailsUJS from 'react_ujs';

const componentRequireContext = require.context('static_components', true);
ReactRailsUJS.useContext(componentRequireContext);
