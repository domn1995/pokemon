import React, { createContext, useContext } from "react";

export interface QueryResult<TDto> {
  dto: TDto | undefined;
  isError: boolean;
  isLoading: boolean;
}

export interface QueryHook<TDto, TArg = void> {
  useGet: (arg: TArg) => QueryResult<TDto>;
}

export interface DataAccessProviderProps<TDto, TArg = void> {
  value: QueryHook<TDto, TArg>;
  children: React.ReactNode;
}

export const useDataAccessContext = <TDto, TArg>(
  context: React.Context<QueryHook<TDto, TArg>>
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error(
      "Unable to create context. Are you inside of a data access provider created with `createDataAccessProvider`?"
    );
  }
  return value;
};

export const createDataAccessContext = <TDto, TArg = void>(
  initialValue: QueryHook<TDto, TArg>
) => createContext<QueryHook<TDto, TArg>>(initialValue);

export const createDataAccessProvider = <TDto, TArg = void>(
  props: DataAccessProviderProps<TDto, TArg>,
  Context: React.Context<QueryHook<TDto, TArg>>
) => {
  const { children, value } = props;
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
