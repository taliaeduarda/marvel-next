import axios from "axios";
import MD5 from "crypto-js/md5";

const url = "https://gateway.marvel.com/v1/public/comics"
const publicKey = "3f98d6bd580f71c1d6ac771b20dd4f07"
const privateKey = 'cffc60d400965fcaa5a5cc9310e48eae02ff51c9'

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
