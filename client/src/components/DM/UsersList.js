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
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function UsersList() {

    // RENDER FUNCTION
    return (
        <ListGroup>
            <ListGroupItem>
                <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/mike.jpg").default}
                />
                <h2>Steve Long</h2>
                <div>
                    BIO: Maybe a short blurb to let users know why they want to talk to this person.
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/mike.jpg").default}
                />
                <h2>Steve Long</h2>
                <div>
                    BIO: Maybe a short blurb to let users know why they want to talk to this person.
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/mike.jpg").default}
                />
                <h2>Steve Long</h2>
                <div>
                    BIO: Maybe a short blurb to let users know why they want to talk to this person.
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/mike.jpg").default}
                />
                <h2>Steve Long</h2>
                <div>
                    BIO: Maybe a short blurb to let users know why they want to talk to this person.
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/mike.jpg").default}
                />
                <h2>Steve Long</h2>
                <div>
                    BIO: Maybe a short blurb to let users know why they want to talk to this person.
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}
