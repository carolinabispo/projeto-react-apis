import { ModalPokemon } from "./components/modal/ModalPokemon";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Router />
      <ModalPokemon/>
    </ChakraProvider>
  );
}

export default App;
