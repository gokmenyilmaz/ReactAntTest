import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state={
      Personeller:[{ad:"musa",soyad:"aydın"}, {ad:"kamil",soyad:"uzun"}]
    }
  }

  onEkle=()=>{
    var liste=this.state.Personeller;

    liste.push({ad:"cem",soyad:"ozer"});

    this.setState({Personeller:liste});

  }

  render() {
    return <div>

      <button onClick={()=>this.onEkle()}>Ekle</button>

      {
         this.state.Personeller.map(c =>
        <li>{c.ad}</li>
      )}

    </div>;
  }
 
}


