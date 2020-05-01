import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

export default class TestReactTable extends React.Component {
  veri = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  constructor()
  {
      super();
      this.state={data:this.veri};
  }

  ekle=()=>{
      var x={
        key: "3",
        firstName: "Joe",
        lastName: "Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      };

      var liste=this.state.data;

      liste.push(x);

      this.setState({data:liste})

  }

  render() {



    return (
      <div>

        <button onClick={()=>this.ekle()}>Ekle</button>

        <Table dataSource={[...this.state.data]}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
        </Table>
      </div>
    );
  }
}
