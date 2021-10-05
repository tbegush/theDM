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

    // RENDER FUNCTION
    return (
        <Container>
            <Row>
                <Col l="2">
                    <div>
                        <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/mike.jpg").default}
                            // SRC MUST BE PASSED AS A PROP LATER ON
                        />
                    </div>
                    <div>
                        {props.user}
                    </div>
                </Col>
                <Col l="10">
                    {props.message}
                </Col>
            </Row>
        </Container>
    );
}
