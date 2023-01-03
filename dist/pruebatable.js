'use strict';

class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}


class ListItems extends React.Component {

  constructor(props) {

    super(props);

    this.state = {};
    this.state.list_items = [
      {
        id: 1,
        name: 'PHP'
      }, {
        id: 2,
        name: 'MYSQL'
      }
    ];

  }

  handleUserInput(userInput) {

  };

  handleRowDel(list_item) {
    var index = this.state.list_items.indexOf(list_item);
    this.state.list_items.splice(index, 1);
    this.setState(this.state.list_items);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var list_item = {
      id: id,
      name: "",
    }
    this.state.list_items.push(list_item);
    this.setState(this.state.list_items);

  }

  handlelistItemTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var list_items = this.state.list_items.slice();
    var newlist_items = list_items.map(function(list_item) {

    for (var key in list_item) {
      if (key == item.name && list_item.id == item.id) {
        list_item[key] = item.value;

      }
    }
    return list_item;
  });
    this.setState({list_items:newlist_items});
  };

  render() {

    var list_item = this.state.list_items.map(function(list_item) {

      return (

<tr className="eachRow">

        <EditableCell onlistItemTableUpdate={(e)=>this.handlelistItemTable(e)} cellData={{
          "type": "name",
          value: list_item.name,
          id: list_item.id
        }}/>


        <td className="del-cell">
          <input type="button" onClick={(list_item)=>this.handleRowDel(list_item)} value="X" className="del-btn"/>
        </td>
      </tr>

      )

    });

    return (
      <div>

      <button type="button" onClick={(e)=>this.handleAddEvent(e)} className="btn btn-success pull-right">Add</button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>

            {list_item}

          </tbody>

        </table>
      </div>
    );

  }

}


ReactDOM.render( < ListItems / > , document.getElementById('container'));
