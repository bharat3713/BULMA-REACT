import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {
  BarSeries,
  AreaSeries,
  CandlestickSeries,
  // LineSeries,
  MACDSeries
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
 // EdgeIndicator,
 // CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY
} from "react-stockcharts/lib/coordinates";
import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
//  MovingAverageTooltip,
  MACDTooltip
} from "react-stockcharts/lib/tooltip";
import { ema, macd, sma } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

const macdAppearance = {
  stroke: {
    macd: "#FF0000",
    signal: "#00F300"
  },
  fill: {
    divergence: "#4682B4"
  }
};

const mouseEdgeAppearance = {
  textFill: "#542605",
  stroke: "#05233B",
  strokeOpacity: 1,
  strokeWidth: 3,
  arrowWidth: 5,
  fill: "#BCDEFA"
};

class CandleStickChartWithMACDIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.saveNode = this.saveNode.bind(this);
    this.resetYDomain = this.resetYDomain.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
    this.setState({
      suffix: 1
    });
  }

  saveNode(node) {
    this.node = node;
  }

  resetYDomain() {
    this.node.resetYDomain();
  }

  handleReset() {
    this.setState({
      suffix: this.state.suffix + 1
    });
  }

  render() {
    const { type, data: initialData, width, ratio } = this.props;
    const ema26 = ema()
      .id(0)
      .options({ windowSize: 26 })
      .merge((d, c) => {
        d.ema26 = c;
      })
      .accessor(d => d.ema26);

    const ema12 = ema()
      .id(1)
      .options({ windowSize: 12 })
      .merge((d, c) => {
        d.ema12 = c;
      })
      .accessor(d => d.ema12);

    const macdCalculator = macd()
      .options({
        fast: 12,
        slow: 26,
        signal: 9
      })
      .merge((d, c) => {
        d.macd = c;
      })
      .accessor(d => d.macd);

    const smaVolume50 = sma()
      .id(3)
      .options({
        windowSize: 50,
        sourcePath: "volume"
      })
      .merge((d, c) => {
        d.smaVolume50 = c;
      })
      .accessor(d => d.smaVolume50);

    const calculatedData = smaVolume50(
      macdCalculator(ema12(ema26(initialData)))
    );
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    const { mouseMoveEvent, panEvent, zoomEvent, zoomAnchor } = this.props;
    const { clamp } = this.props;
    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];
    const margin = { left: 70, right: 70, top: 20, bottom: 30 };
    const height = 400;
    const gridHeight = height - margin.top - margin.bottom;
    const gridWidth = width - margin.left - margin.right;
    const showGrid = true;
    const yGrid = showGrid
      ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 }
      : {};
    const xGrid = showGrid
      ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 }
      : {};

    return (
      <ChartCanvas
        height={620}
        width={width}
        ratio={ratio}
        margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
        type={type}
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        mouseMoveEvent={mouseMoveEvent}
        panEvent={panEvent}
        zoomEvent={zoomEvent}
        clamp={clamp}
        zoomAnchor={zoomAnchor}
        seriesName={`MSFT_${this.state.suffix}`}
        xExtents={xExtents}
      >
        <Chart id={1} height={245} yExtents={d => [d.high, d.low]}>
          <XAxis
            axisAt="bottom"
            orient="bottom"
            zoomEnabled={zoomEvent}
            {...xGrid}
          />
          <YAxis
            axisAt="right"
            orient="right"
            ticks={5}
            zoomEnabled={zoomEvent}
            {...yGrid}
          />

          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
          />

          <CandlestickSeries />
          <OHLCTooltip origin={[-40, 0]} />
          <ZoomButtons onReset={this.handleReset} />
        </Chart>
        <Chart
          id={2}
          height={100}
          yExtents={[d => d.volume, smaVolume50.accessor()]}
          origin={(w, h) => [0, h - 300]}
        >
          <YAxis
            axisAt="left"
            orient="left"
            ticks={5}
            tickFormat={format(".2s")}
          />

          <MouseCoordinateY
            at="left"
            orient="left"
            displayFormat={format(".4s")}
            {...mouseEdgeAppearance}
          />

          <BarSeries
            yAccessor={d => d.volume}
            fill={d => (d.close > d.open ? "#6BA583" : "#FF0000")}
          />
          <AreaSeries
            yAccessor={smaVolume50.accessor()}
            stroke={smaVolume50.stroke()}
            fill={smaVolume50.fill()}
          />
        </Chart>
        <Chart
          id={3}
          height={100}
          yExtents={macdCalculator.accessor()}
          origin={(w, h) => [0, h - 150]}
          padding={{ top: 10, bottom: 10 }}
        >
          <XAxis axisAt="bottom" orient="bottom" />
          <YAxis axisAt="right" orient="right" ticks={2} />

          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={timeFormat("%Y-%m-%d")}
            rectRadius={5}
            {...mouseEdgeAppearance}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format(".2f")}
            {...mouseEdgeAppearance}
          />

          <MACDSeries yAccessor={d => d.macd} {...macdAppearance} />
          <MACDTooltip
            origin={[-38, 15]}
            yAccessor={d => d.macd}
            options={macdCalculator.options()}
            appearance={macdAppearance}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    );
  }
}

CandleStickChartWithMACDIndicator.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickChartWithMACDIndicator.defaultProps = {
  type: "svg"
};

CandleStickChartWithMACDIndicator = fitWidth(CandleStickChartWithMACDIndicator);

export default CandleStickChartWithMACDIndicator;
