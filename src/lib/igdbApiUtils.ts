const clientId = import.meta.env.VITE_IGDBCLIENTID;
const clientSecret = import.meta.env.VITE_IGDBCLIENTSECRET;

export const getToken = async () => {
  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export async function getGames () {
  const response = await fetch("https://api.rawg.io/api/games?key=3c1a67e228c84ce880cc6c35b8464dab", {
    method: "GET",
  })
  const data = await response.json();
  console.log(data);
}
