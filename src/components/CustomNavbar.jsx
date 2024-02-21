import { useState,useEffect } from "react";
import {NavLink as ReactLink, useNavigate} from "react-router-dom";
import{getCurrentUserDetail, isLoggedIn, dologout} from "../Auth";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,NavLink, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from "reactstrap";

const CustomNavbar=()=>{

    let navigate=useNavigate()
    const [isOpen,setIsOpen]=useState(false)

    const[login,setLogin]=useState(false)
    const[user,setUser]=useState(undefined)

    useEffect(()=>{

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())

    },[login])

    const logout=()=>{
        dologout(()=>{
            //logged out
            setLogin(false)
            navigate("/")
        })
    }


    return(
        <div >
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                className="px-5">

                <NavbarBrand tag={ReactLink} to="/">
                    BMS
                </NavbarBrand>

                <NavbarToggler onClick={()=>setIsOpen(!isOpen)}  />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/"> 
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/about"> 
                                About
                            </NavLink>
                        </NavItem>
                        </Nav>

                        <Nav navbar>

                            {
                                login &&(
                                    <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/profile_info" >
                                            Profile
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/dashboard">
                                            {user.email}
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink onClick={logout}>
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                    </>
                                )

                            }
                        
                            {
                                !login &&(
                                    <>
                                        <NavItem>
                                            <NavLink tag={ReactLink} to="/login">
                                                Login
                                            </NavLink>
                                        </NavItem>
                        
                                        <NavItem>
                                            <NavLink tag={ReactLink} to="/signup"> 
                                                Signup
                                            </NavLink>
                                        </NavItem>

                                    </>
                                )
                            }

                        <UncontrolledDropdown
                            inNavbar
                            nav>

                                <DropdownToggle
                                    caret
                                    nav>  
                                    Profile    
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={ReactLink} to="/Feedback">
                                        Feedback
                                    </DropdownItem>

                                    <DropdownItem tag={ReactLink} to="/Contact_Us">
                                        Contact Us
                                    </DropdownItem>
                                </DropdownMenu>


                        </UncontrolledDropdown>
                        </Nav>

                        {/* <NavbarText>
                            Profile
                        </NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;