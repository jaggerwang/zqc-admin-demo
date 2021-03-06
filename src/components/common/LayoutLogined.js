/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as rs from 'reactstrap'

import * as actions from '../../actions'
import * as cmp from '../'

class Layout extends Component {
  render () {
    let {children, logout} = this.props

    return (
      <cmp.Layout>
        <div>
          <rs.Navbar className='d-flex flex-row justify-content-between bg-inverse' inverse>
            <rs.NavbarBrand tag={Link} to='/'>
              <img alt='' src={require('../../assets/zqc-icon.png')} style={styles.logo} />在球场
            </rs.NavbarBrand>

            <rs.NavLink onClick={e => logout()}>
              <rs.Button outline size='sm'>退出</rs.Button>
            </rs.NavLink>
          </rs.Navbar>

          <div className='container'>
            <div className='row'>
              <div className='col-3 bg-darker'>
                <rs.Nav className='d-flex flex-column' style={styles.menu}>
                  <rs.NavItem>
                    <rs.NavLink tag={Link} to='/'>首页</rs.NavLink>
                  </rs.NavItem>
                  <rs.NavItem>
                    <rs.NavLink tag={Link} to='/posts'>动态列表</rs.NavLink>
                  </rs.NavItem>
                </rs.Nav>
              </div>

              <div id='main' className='col-9 bg-normal'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </cmp.Layout>
    )
  }
}

function mapStateToProps (state) {
  let {account} = state
  return {
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

const styles = {
  logo: {
    marginRight: '5px',
    width: '30px',
    height: '30px'
  },
  menu: {
    minHeight: '1080px'
  }
}
