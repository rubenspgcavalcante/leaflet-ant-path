import { connect } from 'react-redux';
import { loading } from "../../actions/loading";
import AsyncComponent from "../AsyncComponent";

const mapDispatchToProps = (dispatch) => ({
  loading: (on) => dispatch(loading(on))
});

export default connect(null, mapDispatchToProps)(AsyncComponent);