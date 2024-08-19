import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Success from './pages/Success';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Cart from './components/Cart';
import { StoreProvider } from "./utils/GlobalState";
import OrderHistory from './pages/OrderHistory';
import JshopBusiness from './pages/JshopBusiness';
import ShopWithExpert from './pages/ShopWithExpert';
import Contact from './pages/Contact';
import About from './pages/About';
import BackToSchool from './pages/BackToSchool';
import TopDeals from './pages/TopDeals';
import DealOfTheDay from './pages/DealOfTheDay';
import JshoppingCoupons from './pages/JshoppingCoupons';
import AllProducts from './pages/AllProducts';
import Support from './pages/Support';
import Shipping from './pages/Shipping';
import RecentlyViewed from './pages/RecentlyViewed';
import OrderStatus from './pages/OrderStatus';
import SavedItems from './pages/SavedItems';
import Trending from './pages/Trending';
import Footer from './components/Footer';

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
            <Nav />
            <Switch>
              <Route exact path="/success" component={Success} />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/order-history" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/jshop-business" component={JshopBusiness} />
              <Route exact path="/shop-with-expert" component={ShopWithExpert} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/back-to-school" component={BackToSchool} />
              <Route exact path="/top-deals" component={TopDeals} />
              <Route exact path="/deal-of-the-day" component={DealOfTheDay} />
              <Route exact path="/jshopping-coupons" component={JshoppingCoupons} />
              <Route exact path="/all-products" component={AllProducts} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/shipping-and-delivery" component={Shipping} />
              <Route exact path="/recently-viewed" component={RecentlyViewed} />
              <Route exact path="/order-status" component={OrderStatus} />
              <Route exact path="/saved-items" component={SavedItems} />
              <Route exact path="/trending" component={Trending} />
              <Route component={NoMatch} />
            </Switch>
            <Cart />
            <Footer/>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
