import {
  createDataAccessContext,
  createDataAccessProvider,
  DataAccessProviderProps,
  useDataAccessContext,
} from "./DataAccessProvider";

interface Pokemon {
  name: string;
}

const defaultHook = {
  useGet: (_: string) => ({
    dto: { name: "Pikachu" },
    isError: false,
    isLoading: false,
  }),
};

const Context = createDataAccessContext<Pokemon, string>(defaultHook);

export const usePokemonDataAccess = () => useDataAccessContext(Context);

export const PokemonDataAccessProvider = (
  props: DataAccessProviderProps<Pokemon, string>
) => createDataAccessProvider(props, Context);
