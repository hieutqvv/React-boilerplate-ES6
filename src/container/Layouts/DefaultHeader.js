import React, {Component} from 'react';
import {DropdownMenu, DropdownToggle, Nav, DropdownItem, UncontrolledDropdown} from 'reactstrap';
import {Link} from 'react-router-dom';

import {AppSidebarToggler} from '@coreui/react';
import sygnet from '../../assets/img/brand/sygnet.svg';
import avatar from '../../assets/avatars/4.jpg';

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <span className="navbar-brand">
        <img src={sygnet} width="32" height="35" alt="Core-ui app" />
        <span>My CoreUI App</span>
        </span>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={avatar}
                className="img-avatar"
                alt='avatar'
              />
            </DropdownToggle>
            <DropdownMenu
              right
              style={{
                right: 'auto',
                height: 'auto',
                position: 'absolute',
                willChange: 'transform',
                top: '0px',
                left: '0px',
                transform: 'translate3d(-132px, 35px, 0px)'
              }}
            >
              <DropdownItem tag={Link} to="/logout">Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    )
  }
}

export default DefaultHeader
