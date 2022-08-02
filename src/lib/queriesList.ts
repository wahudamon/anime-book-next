import useSWR from "swr";
import { apiUrl, fetcher } from "./constants";

export function getUpcoming() {
  const { data, error } = useSWR(
    `${apiUrl}/seasons/upcoming?page=1&sfw`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getTodayReleases() {
  const day = Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date());

  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/schedules/${day}`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getPopularAnime() {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function searchAnimeByTitle(title) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime?q=${title.toLowerCase()}&orderBy=title`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getAnimeDetails(id) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/full`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getAnimeCharacters(id) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/characters`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getAnimeEpisodes(id) {
  const { data, error } = useSWR(
    `https://api.jikan.moe/v4/anime/${id}/episodes`,
    fetcher
  );

  return {
    data,
    error,
  };
}
