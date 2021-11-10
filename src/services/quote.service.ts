import axios from "axios";

export const getRandomQuote = async () => {
  const request = axios.get("https://animechan.vercel.app/api/random");
  const data = await request.then((res) => {
    return res.data;
  });
  return data;
};

export const getAnimePoster = (animeTitle: string | undefined) => {
  const request = axios
    .get("https://kitsu.io/api/edge/anime?filter[text]=" + animeTitle)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return request;
};
