import React, { Component } from "react";
import { render } from "react-dom";
import "./confirm.css";

let resolve;

class Confirm extends Component {
  static create(props = {}) {
    const containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
    return render(<Confirm />, containerElement);
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);

    this.show = this.show.bind(this);
  }

  handleCancel() {
    this.setState({ isOpen: false });
    resolve(false);
  }

  handleConfirm() {
    this.setState({ isOpen: false });
    resolve(true);
  }

  show(props = {}) {
    this.setState({ isOpen: true });
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
          <h5 className="gk-modal-title">Modal title</h5>
          <button onClick={this.handleCancel} className="gk-close">
            <span aria-hidden="true">×</span>
          </button>
        </header>

          <div className="gk-modal-body">İçi</div>

          <footer className="gk-modal-footer">
            <button className="gk-btn gk-btn-secondary" onClick={this.handleCancel}>İptal</button>
            <button className="gk-btn gk-btn-primary" onClick={this.handleConfirm}>Ok</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Confirm;
