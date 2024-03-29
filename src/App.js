import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
class App extends Component {
  state = {  }
  render() { 
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Reading List</h1>
          <BookList/>
          <AddBook/>
      </div>
      </ApolloProvider>
     );
  }
}
 
export default App;

