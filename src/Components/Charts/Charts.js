import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../Application/Actions/BitcoinMonthHistory";
// import PropTypes from "prop-types";
// import loadjs from "loadjs";
import { bindActionCreators } from "redux";

const CandleStickChartWithBrush = lazy(() => import("./Chartbtc"));
class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidMount() {}
  render() {
    var charatData = this.props.dest[1];
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="chart-container">
        <Suspense fallback={<div>Loading...</div>}>
          <CandleStickChartWithBrush data={charatData} />
        </Suspense>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    dest: state.BTCMReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(
  mapStateToProps,

  mapDispatchToProps
)(Charts);
