import axios from "axios";
import MD5 from "crypto-js/md5";

export default async function getHeros(id) {
  const url = "http://gateway.marvel.com/v1/public/characters";
  const publicKey = "3f98d6bd580f71c1d6ac771b20dd4f07";
  const privateKey = "cffc60d400965fcaa5a5cc9310e48eae02ff51c9";

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
        console.log(response);
        characters = response.data.data.results[0];
      }
    } else {
      const response = await axios.get(`${url}`, {
        params: {
          ts: timestamp,
          orderBy: "name",
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
