import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="left brand-logo">
            Logo
          </a>
          <ul class="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
