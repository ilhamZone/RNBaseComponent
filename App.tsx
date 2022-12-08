/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import NavigationApp from "./src/navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationApp />
  </QueryClientProvider>
);

export default App;
