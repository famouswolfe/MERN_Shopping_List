import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Shoppinglist from './components/ShoppingList';
import store from './store';
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      <Shoppinglist />
      </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
