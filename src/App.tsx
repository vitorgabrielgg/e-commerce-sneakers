import { SneakerProvider } from "./context";
import { Page } from "./pages/Page";

function App() {
  return (
    <SneakerProvider>
      <Page />
    </SneakerProvider>
  );
}

export default App;
