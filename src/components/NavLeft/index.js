import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from './../../config/menuConfig.js'
import './index.less'
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
  render () {
    // var style = {
    //   backgroundColor: red
    // }
    return (
      <div style={{ backgroundColor: 'red' }}>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item key="1">子菜单项</Menu.Item>
            <Menu.Item key="2">子菜单项</Menu.Item>
            <Menu.Item key="3">子菜单项</Menu.Item>

          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default NavLeft