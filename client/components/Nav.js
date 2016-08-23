import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render() {
    const {links} = this.props
    return (
      <div className="nav">
        {
          links.map((q, i) =>
            <Link to={'/' + i}>
              {q}
            </Link>
          )
        }
      </div>
    )
  }
});

export default Nav;
