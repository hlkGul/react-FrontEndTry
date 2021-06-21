import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import Signedin from "./Signedin";
import SignedOut from "./SignedOut";
import { useSelector } from "react-redux";


export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  const history = useHistory()
  
  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")

  }
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top" size="tiny">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? <Signedin signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
