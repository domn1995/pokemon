import { usePokemonDataAccess } from "./PokemonDataAccessProvider";

function App() {
  const { useGet: usePokemon } = usePokemonDataAccess();
  const name = "pikachu";
  const { dto, isLoading, isError } = usePokemon(name);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || dto === undefined) {
    return <p>Unable to fetch pokemon named "{name}"</p>;
  }

  return <p>Name: {dto?.name}</p>;
}

export default App;
