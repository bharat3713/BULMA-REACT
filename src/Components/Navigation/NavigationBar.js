import React from "react";
import { Link } from "react-router";


class NavigationBar extends React.Component {
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
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <section className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
             <div className="logo"></div>
            </Link>
            <span className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Dashboard
              </Link>
              <Link to="/charts" className="navbar-item">
                Charts
              </Link>
              <Link to="/portfolio" className="navbar-item">
              Portfolio
              </Link>
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </div>
          </div>
        </section>
      </nav>
    );
  }
}

export default NavigationBar;
