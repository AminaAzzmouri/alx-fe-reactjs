import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent.jsx";

// Create the QueryClient once for the whole app
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app" style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>React Query Demo — Posts</h1>
        <PostsComponent />
      </div>
      {/* Devtools (optional, but very helpful) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
