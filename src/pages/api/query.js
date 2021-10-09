import axios from "axios";
import MD5 from "crypto-js/md5";

export default async function queryCharacters({ query: { query } }, res) {
  const { name } = JSON.parse(query)
  const url = "http://gateway.marvel.com/v1/public/characters";
  const publicKey = "3f98d6bd580f71c1d6ac771b20dd4f07";
  const privateKey = "cffc60d400965fcaa5a5cc9310e48eae02ff51c9";

  const timestamp = Date.now();
  const hash = MD5(timestamp + privateKey + publicKey).toString();

  try {
    let response;
    if (name) {
      response = await axios.get(url, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          nameStartsWith: name,
        },
      });
    }
    if (response) {
      res.status(200).json({ message: response.data });
    } else {
      res
        .status(500)
        .json({ message: "Something went wrong, we got no response" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}
