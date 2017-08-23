import {PureComponent} from "react";
import {connect} from "react-redux";
import {loadRoute} from "../actions/demo";
import Map from "./Map";

const mapStateToProps = (state) => ({
    route: state.routes.data['route-1']
});

const mapDispatchToProps = (dispatch) => ({
    loadRoute: () => dispatch(loadRoute("route-1"))
});

class OptionsSample extends PureComponent{
    componentWillMount() {
        this.props.loadRoute();
    }

    render() {
        const {route} = this.props;

        return (
            <div>
                {route? <Map route={route} /> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsSample);