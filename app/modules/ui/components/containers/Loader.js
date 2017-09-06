import { connect } from 'react-redux';
import Loader from '../stateless/Loader';

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(Loader);