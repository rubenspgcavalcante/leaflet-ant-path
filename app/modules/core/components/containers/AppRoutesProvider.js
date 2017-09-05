import { connect } from 'react-redux';
import AppRoutesProvider from '../AppRoutesProvider';

const mapStateToProps = ({ appRoutes }) => ({ appRoutes });

export default connect(mapStateToProps)(AppRoutesProvider);