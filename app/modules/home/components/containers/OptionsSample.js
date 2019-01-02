import { connect } from "react-redux";
import { changeSnippet, resetOptions, updateOptions } from "../../actions/demo";

import OptionsSample from "../OptionsSample";
import { loadVector } from "modules/core/actions/demo";

const mapStateToProps = ({ vectors, snippetType, options }) => ({
  vectors,
  snippetType,
  options
});

const mapDispatchToProps = {
  loadVector,
  changeSnippet,
  updateOptions,
  resetOptions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsSample);
