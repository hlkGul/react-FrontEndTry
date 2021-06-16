import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'
import CartSummary from "./CartSummary";
import Signedin from "./Signedin";
import SignedOut from "./SignedOut";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  function handleSignOut(params) {
    setIsAuthenticated(false)
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
            <CartSummary />
            {isAuthenticated ? <Signedin signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
