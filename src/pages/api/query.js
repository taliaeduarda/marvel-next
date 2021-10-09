import axios from "axios";
import md5 from "md5";

export default async function queryCharacters({ query: { query } }, res) {
  const { name } = JSON.parse(query);
  const url = "http://gateway.marvel.com/v1/public/characters";
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY

  const timestamp = Number(new Date());
  const hash = md5(timestamp + privateKey + publicKey);

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
