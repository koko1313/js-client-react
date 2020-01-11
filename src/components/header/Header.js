import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {NavLink as RRNavLink} from 'react-router-dom';
import Container from "../../../node_modules/reactstrap/lib/Container";

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    // при arrow финкциите, контекста се запазва и ще може да извикваме това като this.toggleIsOpen
    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">ST 2020</NavbarBrand>
                <NavbarToggler onClick={this.toggleIsOpen} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/gallery" activeClassName="active">Gallery</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    }

}

export default Header;