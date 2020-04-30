import React, { Component } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "./DialogService.css";

let resolve;

class DialogService extends Component {
  static create(props = {}) {
    const containerElement = document.createElement("div");
    containerElement.setAttribute("id", "gk-modal1");
    document.body.appendChild(containerElement);
    return render(<DialogService />, containerElement);
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalParams: {},
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);

    this.show = this.show.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandle, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandle, false);
  }

  close() {
    this.setState({ isOpen: false });
    const containerElement = document.getElementById("gk-modal1");

    unmountComponentAtNode(containerElement);
    document.body.removeChild(containerElement);
  }

  keydownHandle = (e) => {
    if (e.keyCode === 27) this.handleCancel();
  };
  handleCancel() {
    this.close();
    resolve(false);
  }

  handleConfirm() {
    this.close();
    resolve(true);
  }

  show(params = {}) {
    this.setState({ isOpen: true, modalParams: params });
    return new Promise((res) => {
      resolve = res;
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className={!isOpen ? "gk-modal" : "gk-modal gk-is-active"}>
        <div className="gk-modal-content gk-card">
          <header className="gk-modal-header">
            <div className="gk-modal-title"> {this.state.modalParams.title}</div>
            <button onClick={this.handleCancel} className="gk-close">
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div className="gk-modal-body">{this.state.modalParams.formBody}</div>

          <footer className="gk-modal-footer">
            <button
              style={{
                display: this.state.modalParams.cancelText
                  ? "inline-block"
                  : "none",
              }}
              className="gk-btn gk-btn-secondary"
              onClick={this.handleCancel}
            >
              {this.state.modalParams.cancelText}
            </button>
            <button
              style={{
                display: this.state.modalParams.okText
                  ? "inline-block"
                  : "none",
              }}
              className="gk-btn gk-btn-primary"
              onClick={this.handleConfirm}
            >
              {this.state.modalParams.okText}
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default DialogService;
