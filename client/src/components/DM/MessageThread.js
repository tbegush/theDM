/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/DMNavbar.js";
import Footer from "components/Footer/DMFooter.js";

// DM components
import UsersList from "components/DM/UsersList";
import Message from "components/DM/Message";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function MessageThread() {
  
  return (
    <>
        <div className="imessage">
          <Message user="Mario" message="Wyd?"></Message>
          <Message user="Peach" message="Good. Hbu?"></Message>
          <Message user="Mario" message="that's good. So... how's the weather?"></Message>
        </div>
    </>
  );
}