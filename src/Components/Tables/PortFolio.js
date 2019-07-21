import React from "react";
import Chart from "react-google-charts";
class PortFolio extends React.Component {
  render() {
    return (
      <div className="portfolio-bg">
        <Chart
          width={"70%"}
          height={350}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Scrip", "Total Holdings"],
            ["Bitcoin (BTC)", 11],
            ["Zcash (ZEC)", 2],
            ["Dash (DASH)", 2],
            ["Ethereum (ETH)", 2],
            ["Ripple (XRP)", 7]
          ]}
          options={{
            title: "My Portfolio",
            is3D: true
          }}
          rootProps={{ "data-testid": "1" }}
        />

        <table className="table is-bordered pricing__table is-fullwidth">
          <thead>
            <tr>
              <th>Scrip Name</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bitcoin (BTC)</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
            </tr>
            <tr>
              <td>Zcash (ZEC)</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
            </tr>
            <tr>
              <td> Dash (DASH) </td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
            </tr>
            <tr>
              <td>Ethereum (ETH)</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
              <td>70,523.90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default PortFolio;
