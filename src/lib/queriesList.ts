import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

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
