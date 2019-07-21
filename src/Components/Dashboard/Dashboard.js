import React from "react";
// import Charts from "../charts/charts";
// import { Link } from "react-router";

import "../../assets/scss/base.scss";

class Dashboard extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classNameNameNameList.toggle("is-active");
            $target.classNameNameNameList.toggle("is-active");
          });
        });
      }
    });
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Hello World</p>
              <p className="subtitle">What is up?</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Hello World</p>
              <p className="subtitle">What is up?</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Third column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child box">
                  <p className="title">Vertical tiles</p>
                  <p className="subtitle">Top box</p>
                </article>
                <article className="tile is-child box">
                  <p className="title">Vertical tiles</p>
                  <p className="subtitle">Bottom box</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Middle box</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img alt="place" src="https://bulma.io/images/placeholders/640x480.png" />
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Wide column</p>
                <p className="subtitle">Aligned with the right column</p>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div className="content">
                <p className="title">Tall column</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                  <p>
                  The following tiles/widgets should be present:
Candlestick chart with the historical price of the chosen currency. It should have options for configuring it (like the ones in the reference)
Table with current buy orders
Table with current sell orders
Table with my own order history
A form for placing orders
A form for withdrawing to your bank account
Table with my withdrawal history
A list of "watched" currencies, with their current price and indication if they are going up or down
A list of "watched" conversion rates, and indication if they are going up or down

It is not required to provide realistic form fields, column names and things like this, but doing so (after maybe you do some research) will be counted as a plus.

                  </p>
                  <p>
                    Suspendisse varius ligula in molestie lacinia. Maecenas
                    varius eget ligula a sagittis. Pellentesque interdum, nisl
                    nec interdum maximus, augue diam porttitor lorem, et
                    sollicitudin felis neque sit amet erat. Maecenas imperdiet
                    felis nisi, fringilla luctus felis hendrerit sit amet.
                    Aenean vitae gravida diam, finibus dignissim turpis. Sed
                    eget varius ligula, at volutpat tortor.
                  </p>
                  <p>
                    Integer sollicitudin, tortor a mattis commodo, velit urna
                    rhoncus erat, vitae congue lectus dolor consequat libero.
                    Donec leo ligula, maximus et pellentesque sed, gravida a
                    metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                    lacus, quis faucibus libero. Quisque non semper leo.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Side column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-8">
            <article className="tile is-child box">
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
