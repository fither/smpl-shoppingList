import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';

export default class App extends Component {
  state = {
    shoppingList: [],
    inputValue: ""
  }

  changeInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addToList = () => {
    let itemName = this.state.inputValue;
    let newShoppingList = this.state.shoppingList;
    let addedItem = this.state.shoppingList.find(listItem => (itemName === listItem.name));
    if(addedItem) {
      addedItem.quantity += 1;
    } else {
      let newID = newShoppingList.length > 0 ? newShoppingList[newShoppingList.length-1].id + 1 : 1;
      newShoppingList.push({
        id: newID,
        name: itemName,
        quantity: 1
      });
    }

    this.setState({
      shoppingList: newShoppingList,
      inputValue: ""
    });

    localStorage.setItem("shoppingList", JSON.stringify(newShoppingList));
  }

  deleteFromList = (item) =>  {
    let newShoppingList = this.state.shoppingList;
    let deletedItem = this.state.shoppingList.find(listItem => (item.id === listItem.id));
    if(deletedItem) {
      deletedItem.quantity -= 1;
    }

    this.setState({
      shoppingList: newShoppingList
    });

    localStorage.setItem("shoppingList", JSON.stringify(newShoppingList));
  }

  componentDidMount() {
    let localItems = localStorage.getItem("shoppingList")
    if(localItems) {
      let shopItems = JSON.parse(localItems);
      this.setState({shoppingList: shopItems});
    }
  }

  render() {
    return (
      <div>
        <ShoppingList 
          shoppingList={this.state.shoppingList}
          inputValue={this.state.inputValue}
          addToList={this.addToList}
          deleteFromList={this.deleteFromList} 
          changeInputValue={this.changeInputValue}/>
      </div>
    )
  }
}
