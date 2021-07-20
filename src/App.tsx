import { QueryClient, QueryClientProvider } from "react-query";
import { Posts } from "./components/posts";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Posts />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}
