import React, { Component } from 'react'
import { messageService } from "./message.service";

export default class KurumSec extends Component {

    sec=(sayi)=>
    {
        messageService.sendMessage("kurumeklendi" + sayi);
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.sec(1)}>Seç</button>
            </div>
        )
    }
}
