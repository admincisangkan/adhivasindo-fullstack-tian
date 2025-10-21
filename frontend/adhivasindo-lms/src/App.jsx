import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <Header />
        <IonRouterOutlet>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect exact from="/" to="/dashboard" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
