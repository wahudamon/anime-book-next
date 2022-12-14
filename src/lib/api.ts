import useSWR from "swr";
import { apiUrl, fetcher } from "./constants";

export function getUpcoming() {
  const { data, error } = useSWR(`${apiUrl}/seasons/upcoming?sfw`, fetcher);

  return {
    upcomingDatas: data,
    upcomingError: error,
  };
}

export function getSeasonsList() {
  const { data, error } = useSWR(`${apiUrl}/seasons`, fetcher);

  return {
    data,
    error,
  };
}

export function getSeasonalAnimeList(year, season, num) {
  const { data, error } = useSWR(
    `${apiUrl}/seasons/${year}/${season}?page=${num}&sfw`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getAiringAnimes() {
  const { data, error } = useSWR(`${apiUrl}/seasons/now?sfw`, fetcher);

  return {
    data,
    error,
  };
}

export function getTodayReleases() {
  const day = Intl.DateTimeFormat("en", { weekday: "long" }).format(new Date());

  const { data, error } = useSWR(`${apiUrl}/schedules/${day}`, fetcher);

  return {
    todayDatas: data,
    todayError: error,
  };
}

export function getPopularAnime() {
  const { data, error } = useSWR(`${apiUrl}top/anime`, fetcher);

  return {
    data,
    error,
  };
}

export function searchAnimeByTitle(title: string) {
  const { data, error } = useSWR(
    `${apiUrl}/anime?q=${title.toLowerCase()}&orderBy=title`,
    fetcher
  );

  return {
    data,
    error,
  };
}

export function getAnimeDetails(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/full`, fetcher);

  return {
    detailsData: data,
    detailsError: error,
  };
}

export function getAnimeCharacters(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/characters`, fetcher);

  return {
    charactersData: data,
    charactersError: error,
  };
}

export function getAnimeEpisodes(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/episodes`, fetcher);

  return {
    episodesData: data,
    episodesError: error,
  };
}

export function getAnimeVideos(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/videos`, fetcher);

  return {
    data,
    error,
  };
}

export function getAnimeRecommendations(id: string) {
  const { data, error } = useSWR(
    `${apiUrl}/anime/${id}/recommendations`,
    fetcher
  );

  return {
    recommendationsData: data,
    recommendationsError: error,
  };
}

export function getAnimeStaffs(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/staff`, fetcher);

  return {
    staffsData: data,
    staffsError: error,
  };
}

export function getAnimeReviews(id: string) {
  const { data, error } = useSWR(`${apiUrl}/anime/${id}/reviews`, fetcher);

  return {
    data,
    error,
  };
}
