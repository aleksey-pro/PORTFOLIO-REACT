import React, { Component } from 'react'
import Link from 'next/link'

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <p className="customHeaderStyle" style={{ "fontSize": "20px" }}>Header Component</p>
          <Link href="/">
            <a>Index</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/portfolios">
            <a>Portfolios</a>
          </Link>
          <style jsx>
            {`
              a {
                display: block
              }
            `}
          </style>
      </React.Fragment>
    )
  }
}

export default Header
