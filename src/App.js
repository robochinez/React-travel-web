import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ModelProvider from "./context/Providers/ModelProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DestinationsProvider from "./context/Providers/DestinationsProvider";
import NavProvider from "./context/Providers/NavProvider";
import ServicesProvider from "./context/Providers/ServicesProvider";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import Details from "./pages/Details";
import GalleryProvider from "./context/Providers/GalleryProvider";
import AnimationsProvider from "./context/Providers/AnimationsProvider";
function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <ServicesProvider>
                <AnimationsProvider>
                  <Toggle />
                  <Nav />
                  <HelmetProvider>
                    <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/details/:id" component={Details} />
                      <Route component={NotFound} />
                    </Switch>
                  </HelmetProvider>
                </AnimationsProvider>
              </ServicesProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
