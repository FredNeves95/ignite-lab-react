import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import SubscriberContextProvider from "./contexts/subscriberContext/useSubscriberNameContext";
import { client } from "./lib/apollo";

import Router from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <SubscriberContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SubscriberContextProvider>
    </ApolloProvider>
  );
}

export default App;
