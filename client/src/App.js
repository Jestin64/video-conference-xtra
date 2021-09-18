import './App.css';
import React, { Suspense, lazy } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"


function App() {
  const Home = lazy(() => import("./components/Home.js"))
  const Host = lazy(() => import("./components/Host.page.js"))
  const Participant = lazy(() => import("./components/Participant.page.js"))

  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/Host" component={Host} />
            <Route exact path="/Participant" component={Participant} />
            <Route path="*" component={() => <h1>404 error, page not found</h1>} />
          </Switch>
        </Suspense>
      </BrowserRouter>

    </div>
  );
}

export default App;
