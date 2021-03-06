import React, { Component, Fragment } from "react";

import styled from "@emotion/styled";

import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // 不必要に再レンダリングされていないか確認
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <Wrapper
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </Wrapper>
      </Fragment>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default Modal;
