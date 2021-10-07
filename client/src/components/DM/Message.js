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

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function UsersList(props) {

    let messageClassName = "message from-me";
    // Replace bottom with session userId instead of Username
    if(props.user != "Peach"){
        messageClassName = "message from-them"
    }

    // RENDER FUNCTION
    if(messageClassName == "message from-them"){
        return (
                <Row>
                        <Col xs="6" sm="6" lg="2">
                            <div>
                                <img
                                    alt="..."
                                    className="img-center img-fluid rounded-circle "
                                    src={require("assets/img/mike.jpg").default}
                                    // SRC MUST BE PASSED AS A PROP LATER ON
                                />
                            </div>
                            {/* Have it display username only when the screen is large enough */}
                            <div style={{"fontSize":"20px"}}>
                                {/* {props.user} */}
                            </div>
                        </Col>
                        <Col xs="6" sm="6" lg="5" style={{"fontSize":"20px"}}>
                            <div className={messageClassName} style={{"fontSize":"20px"}}>
                                {props.message}
                            </div>
                        </Col>
                </Row>
        );
    }
    else {
        return (
                <Row>
                    <Col lg="5"></Col>
                    <Col xs="6" sm="6" lg="5" style={{"fontSize":"20px"}}>
                        <div className={messageClassName} style={{"fontSize":"20px"}}>
                            {props.message}
                        </div>
                    </Col>
                    <Col xs="6" sm="6" lg="2">
                        <div>
                            <img
                                alt="..."
                                className="img-center img-fluid rounded-circle "
                                src={require("assets/img/mike.jpg").default}
                                // SRC MUST BE PASSED AS A PROP LATER ON
                            />
                        </div>
                        {/* Have it display username only when the screen is large enough */}
                        <div style={{"fontSize":"20px"}}>
                            {/* {props.user} */}
                        </div>
                    </Col>
                </Row>
        );
    }
}
