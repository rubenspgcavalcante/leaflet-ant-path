import { connect } from 'react-redux';
import { loadRoute, updateOptions } from '../../actions/demo';

import OptionsSample from '../OptionsSample';

const mapStateToProps = ({ routes, options }) => ({
  route: routes.data['route-1'],
  options
});

const mapDispatchToProps = (dispatch) => ({
  loadRoute: () => dispatch(loadRoute("route-1")),
  updateOptions: (options) => dispatch(updateOptions(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSample);