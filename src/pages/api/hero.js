import md5 from "md5";
import { api } from "../../services/api";
const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

export default async function getHeros(id) {
  let characters;
  try {
    if (id) {
      const response = await api.get(
        `/v1/public/characters/${id}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );
      characters = response.data.data.results[0];
    } else {
      const response = await api.get(
        `/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${publicKey}&hash=${hash}`
      );
      characters = response.data.data.results;
    }
  } catch (error) {
    console.log(error);
  }
  return characters;
}
