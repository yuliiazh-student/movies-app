export default async function authFetch(url, method="GET", body=null) {
  try {
    const fetchUrl = import.meta.env.VITE_FETCH_MODE !== 'dev'
      ? import.meta.env.VITE_BASE_URL + url
      : url

    const options = {
      method,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN
      },
    }

    if(body){
      options.body = JSON.stringify(body)
    }

    const resp = await fetch(fetchUrl, options)
    if (!resp.ok) {
      throw new Error(resp.status)
    }
    const data = await resp.json()
    return {
      isOK: true,
      data
    }
  } catch (error) {
    console.error(error)
    return {
      isOK: false,
      data: null
    }
  }
}