import { connect } from 'react-redux';
import Header from '../stateless/Header';

const mapStateToProps = ({ repository }) => ({
  repository
});

export default connect(mapStateToProps)(Header);