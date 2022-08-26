
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from './Login.js';
import {useEffect} from 'react';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment.js';
import {loadStripe} from '@stripe/stripe-js';
import {Elements}  from '@stripe/react-stripe-js';
function App() {

  const promise=loadStripe('pk_test_51KAsyXSE6VKo6O98HZerXfI96SL3xqp2eYykIn9ewrJGCQWCtd12EfOOrvurdsdk2LMY8WT7DLbJW0gV3U1e3PMY009nETUqa6');



  const [{},dispatch] = useStateValue();
  useEffect (
    () => {
        // Only runs once when the app gets loaded.
        auth.onAuthStateChanged(authUser =>{
          if(authUser){
            //if user just logged in /was allready logged
            dispatch({
              type:'SET_USER',
              user:authUser
            })
          }else{
            //the user is logged out.
            dispatch({
              type:'SET_USER',
              user:null
            })
          }
        })
    },[]
  )
  return (
     <Router>
          <div className="app">
              <Switch>
              <Route path="/login">
                  <Login />
                </Route>
                <Route path="/checkout">
                  <Header/>
                  <Checkout />
                </Route>
                <Route path="/payment">
                  <Header />
                  <Elements stripe={promise}>
                      <Payment />  
                  </Elements>
                </Route>
                  <Route path="/">
                      <Header/>
                      <Home/>
                  </Route>
              </Switch>
          </div>
     </Router>
  );
}
export default App;
