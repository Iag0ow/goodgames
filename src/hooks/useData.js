import { useFetch } from "./useFetch";

export const GetAll = () => {
  const { data, loading } = useFetch(`/games`);
  return { data, loading };
};

export const GetById = (id) => {
  const { data } = useFetch(`/game?id=${id}`);
  return { data };
};

export const GetByGenre = (category) => {
  const { data, loading } = useFetch(`/games?category=${category}`);
  return { data, loading };
};

export const GetByPopularity = () => {
  const { data, loading } = useFetch("/games?sort-by=popularity");
  return { data, loading };
};
