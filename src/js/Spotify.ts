import Axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index";

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById('LoginBtn')
buttonElement.addEventListener('click', PerformLogin)
let client_id = '' // Get client id on dashboard
let response_type = "token"
let redirect_uri = "http://bilhuset.azurewebsites.net/" // virker ikke med localhost - skift når det er lagt op til azure
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

function PerformLogin() {
  let accessToken;
  let outputElement = document.getElementById('output');
  outputElement.innerHTML = '';
  Axios({
    method: 'get',
    url: "https://accounts.spotify.com/authorize",
    params:
    {
      client_id,
      redirect_uri,
      response_type
    }
  })
  console.log("Forsøg 1");
  var URLRedirect = "https://accounts.spotify.com/authorize?client_id=5010d7b27a714aa3940a634ecd2c0b32&response_type=token&redirect_uri=http://bilhuset.azurewebsites.net/" // ændre localhost til azure delen
  document.location.href = URLRedirect

  console.log(getHashParams());
}

function getHashParams() {
  //var hash = window.location.hash.substring(1, 2) // Skaffer hashen efter # i urlen
  var hash1 = window.location.hash.split("=&") // overvej om split er værd at bruge istedet med karaktere til at sepererer
  var hash = decodeURIComponent(hash1[1])
  console.log(hash)
  return hash
}

function getCurrentPlayingSong() {
  let access_token = getHashParams();
  let outputElement = document.getElementById("output");
  outputElement.innerHTML = "";
  Axios({
    method: 'get',
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    params: { Authorization: access_token }
  })
    .then((response: AxiosResponse) => {
      let data = response.data;
      outputElement.innerHTML = JSON.stringify(data)
    })
    .catch((error: AxiosError) => { console.log(error.message) });
}

