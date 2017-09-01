import { connect } from 'react-redux';
import { changeSnippet, resetOptions, updateOptions } from '../../actions/demo';

import OptionsSample from '../OptionsSample';
import { loadRoute } from "../../../core/actions/demo";

const mapStateToProps = ({ routes, snippetType, options }) => ({
  routes,
  snippetType,
  options
});

const mapDispatchToProps = (dispatch) => ({
  loadRoute: (route) => dispatch(loadRoute(route)),
  changeSnippet: (type) => dispatch(changeSnippet(type)),
  updateOptions: (options) => dispatch(updateOptions(options)),
  resetOptions: () => dispatch(resetOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSample);