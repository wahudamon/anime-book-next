import { useRouter } from "next/router";
import { getAnimeDetails } from "../../lib/api";

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { animeDetailsData, animeDetailsError } = getAnimeDetails(
    id.toString()
  );

  if (animeDetailsData) {
    return (
      <div>
        <p>Hello World, {animeDetailsData.data.title}!</p>
      </div>
    );
  }
}
