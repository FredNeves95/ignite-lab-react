import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./contexts/sidebarMenu/useSidebarMenuContext";
import SubscriberContextProvider from "./contexts/subscriberContext/useSubscriberNameContext";
import { client } from "./lib/apollo";

import Router from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <SidebarContextProvider>
        <SubscriberContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SubscriberContextProvider>
      </SidebarContextProvider>
    </ApolloProvider>
  );
}

export default App;
