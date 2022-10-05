export let getHeaderWithToken = function(token) {
  return { 
    headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
    },
    withCredentials: true,
  }
}