import React, { Component } from "react";
import dialogService from "./DialogService";
import KurumSec from "./KurumSec"

import { messageService } from "./message.service";

export default class Test1 extends Component {

  componentDidMount()
  {
    messageService.getMessage().subscribe(message => {
      if (message) {
        console.log(message);
      }});
  }



  async Onayla() {
    var frm = dialogService.create();
    
    var x = await frm.show({
      title: "Başlama/Erteleme Bildirimi Gereken İşler",
      formComponent:(<KurumSec/>)

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
