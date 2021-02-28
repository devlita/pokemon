import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './components/Navbar';
import Pokemon from './contents/Pokemon';
import MyPokemon from './contents/MyPokemon';
import PokemonDetail from './contents/PokemonDetail';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  })
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/pokemon" component={Pokemon} />
            <Route exact path="/my-pokemon" component={MyPokemon} />
            <Route exact path="/pokemon-detail" component={PokemonDetail} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
