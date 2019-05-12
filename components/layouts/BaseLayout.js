import React from 'react'
import Header from "../shared/Header"
import Head from 'next/head'
import '../../styles/layout.scss'

const BaseLayout = (props) => {
  return (
      <React.Fragment>
        <Head>
          <link href="/static/main.css" rel="stylesheet" />
          <meta name="title" content="Peaky Blinder's e-commerce" />
          <meta name="description" content='Find the best Peaky Blinders products online.'  />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        <Header/>
        {props.children}
      </React.Fragment>
  )
}

export default BaseLayout

