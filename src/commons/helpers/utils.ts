const getAccessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
}

const setAccessToken = (token: string) => {
  localStorage.setItem("ACCESS_TOKEN", token);
}

const getRefreshToken = () => {
  return localStorage.getItem("REFRESH_TOKEN");
}

const setRefreshToken = (token: string) => {
  localStorage.setItem("REFRESH_TOKEN", token);
}

export {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken
}