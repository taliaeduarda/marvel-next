import axios from "axios";
import MD5 from "crypto-js/md5";

const url = "http://gateway.marvel.com/v1/public/characters";

export default async function getHeros({ hero, id }) {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE;

  const timestamp = Date.now();
  const hash = MD5(timestamp + privateKey + publicKey).toString();

  let characters;
  try {
    if (id) {
      const response = await axios.get(`${url}/${id}`, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      });
      if (response) {
        characters = response.data.data.results[0];
      }
    } else if (hero) {
      const response = await axios.get(url, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          nameStartsWith: hero,
        },
      });
      if (response) {
        characters = response.data.data.results;
      }
    } else {
      const response = await axios.get(`${url}`, {
        params: {
          ts: timestamp,
          limit: 20,
          apikey: publicKey,
          hash: hash,
        },
      });
      if (response) {
        characters = response.data.data.results;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return characters;
}
