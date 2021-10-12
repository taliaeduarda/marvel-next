import axios from "axios";
import MD5 from "crypto-js/md5";

const url = "https://gateway.marvel.com/v1/public/comics";
const publicKey = process.env.MARVEL_PUBLIC;
const privateKey = process.env.MARVEL_PRIVATE;

export default async function getComics({ comicId, title }) {
 
  const timestamp = Date.now();
  const hash = MD5(timestamp + privateKey + publicKey).toString();

  let comics;
  try {
    if (title) {
      const response = await axios.get(url, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          titleStartsWith: title,
        },
      });
      if (response) {
        comics = response.data.data.results;
      }
    } else if (comicId) {
      const response = await axios.get(`${url}/${comicId}`, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      });
      if (response) {
        comics = response.data.data.results[0];
      }
    } else {
      const response = await axios.get(url, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          format: "comic",
          limit: 10,
          orderBy: "focDate",
        },
      });
      if (response) {
        comics = response.data.data.results;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return comics;
}
