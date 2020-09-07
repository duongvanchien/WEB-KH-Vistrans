import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
} from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../style/styleHeader.css';

const menu=["A","B","C","D","E"];
const styles = {
    color: "#6FA8DC"
};

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState("A");

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar light expand="md" className="sticky-top" style={{backgroundColor: "#EEE"}}>
            <NavbarToggler onClick={toggle} />
            <Nav>
                <NavItem className="logo_1">
                        <NavLink href="/"><img src={logo}></img></NavLink>
                </NavItem>
            </Nav>
            <Collapse isOpen={isOpen} navbar className="menu_special">
                <Nav className="header">
                    <NavItem className="logo_2">
                        <NavLink href="/"><img src={logo}></img></NavLink>
                    </NavItem>
                    <NavItem className="menu">

                        <NavLink >
                            <Link to="/" style={state === "A" ? styles : {}} onClick={() => setState("A")}>TRANG CHỦ</Link>
                        </NavLink>


                        <NavLink>
                            <Link to="/gioithieu" style={state === "B" ? styles : {}} onClick={() => setState("B")}>GIỚI THIỆU</Link>
                        </NavLink>


                        <NavLink>
                            <Link to="/tracuu" style={state === "C" ? styles : {}} onClick={() => setState("C")}>TRA CỨU ĐƠN HÀNG</Link>
                        </NavLink>


                        <NavLink>
                            <Link to="/banggia" style={state === "D" ? styles : {}} onClick={() => setState("D")}>BẢNG GIÁ VẬN CHUYỂN</Link>
                        </NavLink>

                        <NavLink>
                            <Link to="/lienhe" style={state === "E" ? styles : {}} onClick={() => setState("E")}>LIÊN HỆ</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;

