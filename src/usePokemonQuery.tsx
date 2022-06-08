import { useQuery } from "react-query";

export const usePokemonQuery = (pokemonName: string) => {
  const { data, isError, isLoading } = useQuery(["pokemon", pokemonName], () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>
      res.json()
    )
  );
  return { dto: data, isError, isLoading };
};
