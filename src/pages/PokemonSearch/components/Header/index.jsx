import React from "react";
import PixelTitle from "../../../../components/PixelTitle";
import SearchComponent from "../SearchComponent";
import { MdPersonOutline, MdExitToApp } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'
import "./index.css"

export default function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col xxs={6}>
            <div className="title">
              <PixelTitle color="white" font_weight="500" font_size="41px">
                POKEDEX
              </PixelTitle>
            </div>
          </Col>
          <Col xxs={6}>
            <div className="userButtons">
              <div class="icons">
                <MdPersonOutline />
                <MdExitToApp />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="search">
              <h4>Procure seu Pokemon favorito</h4>
              <SearchComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
