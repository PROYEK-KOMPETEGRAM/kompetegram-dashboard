const getAccessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
}

const setAccessToken = (token: string) => {
  localStorage.setItem("ACCESS_TOKEN", token);
}

const removeAccessToken = () => {
  localStorage.removeItem("ACCESS_TOKEN");
}

const getRefreshToken = () => {
  return localStorage.getItem("REFRESH_TOKEN");
}

const setRefreshToken = (token: string) => {
  localStorage.setItem("REFRESH_TOKEN", token);
}

const removeRefreshToken = () => {
  localStorage.removeItem("REFRESH_TOKEN");
}


export {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken
}