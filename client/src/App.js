import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NewItem from './pages/NewItem';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
// ----------Added by Cody-----------------
import Store from './pages/Store';
import Footer from './components/Footer/footer'
import Drag from './pages/Dnd'
//-----------------------------------------
import Navbar from './components/Navbar';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
//Added by Eric ----------------
import Closet from './pages/Closet';
import ViewMyCloset from './pages/viewMyCloset.js';
import Outfits from './pages/Outfits';
//Added by Eric ----------------
// Storage engine ----------------
// const multer = require('multer');
// const express = require('express');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/uploadphoto', upload.single('picture'), (req, res) => {
//   var img =fs.readFileSync(req.file.path);
//   var encode_image = img.toString('base64');
import ImageUpload from './pages/ImageUpload';

// ---------------------------------
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              {/*added by Eric-----------------------------------*/}
              <Route exact path="/closet" component={Closet} />
              <Route exact path="/viewMyCloset" component={ViewMyCloset} />
              <Route exact path="/outfits" component={Outfits} />
              {/*-------------------------------------------------*/}
              <Route exact path="/products/:id" component={Detail} />
              {/*added by Cody-----------------------------------*/}
              <Route exact path="/store" component={Store} />
              <Route exact path="/drag" component={Drag} />
              {/*-------------------------------------------------*/}
              {/* Image upload path ------------------------------------------------------------------------------------------------------------ */}
              <Route exact path="/imageUpload" component={ImageUpload} />
              <Route exact path="/newItem" component={NewItem} />
              <Route component={NoMatch} />
            </Switch>
						<Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
