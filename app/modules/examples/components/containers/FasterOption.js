import { connect } from 'react-redux';
import FasterOption from '../FasterOption';
import { loadRoute } from "modules/core/actions/demo";

const mapStateToProps = ({ routes }) => ({
  routes
});

const mapDispatchToProps = (dispatch) => ({
  loadRoute: (routeName) => dispatch(loadRoute(routeName))
});

export default connect(mapStateToProps, mapDispatchToProps)(FasterOption);