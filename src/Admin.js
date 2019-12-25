import React, { Component } from 'react'

import { Row, Col } from 'antd'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'
import NavLeft from './components/NavLeft/index.js'
import './styles/common.less'
class Admin extends Component {
  render () {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft></NavLeft>
        </Col>
        <Col span={21} className="main">
          <Header>

          </Header>
          <Row className="content">
            {/* {this.props.children} */}
            content
          </Row>
          <Footer>

          </Footer>
        </Col>
      </Row>
    )
  }
}
export default Admin