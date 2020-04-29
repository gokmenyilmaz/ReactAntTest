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
      <div className={!isOpen ? "modal" : "modal is-active"}>
        <div className="modal-content card">
          <header>
            Başlık
          </header>

          <div className="container">
            İçi
          </div>

          <footer
            style={{ justifyContent: "flex-end", height: "55px" }}
          >
            <button onClick={this.handleCancel}>
              İptal
            </button>
            <button  onClick={this.handleConfirm}>
              Ok
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Confirm;
