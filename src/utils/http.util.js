export const  request = (baseUrl, method, endpoint) => {
  console.log('kepanggil gk?', baseUrl+endpoint)
  return fetch(baseUrl+endpoint, {
      method: method,
  }).then((res)=>{
     return res.json();
  }).then(res=>{
    return res;
  });
}
