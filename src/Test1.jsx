import React, { Component } from "react";
import confirm from "./Confirm";
import mytext from "./MyTextBox";

export default class Test1 extends Component {
  async Onayla() {
    var frm = confirm.create();
    var x = await frm.show({
      title: "Başlama/Erteleme Bildirimi Gereken İşler",
      showFooter: true,
      okText: "Tamam",
      cancelText: "İptal",
    });

    console.log(x);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.Onayla()}>Onayla</button>
      </div>
    );
  }
}
