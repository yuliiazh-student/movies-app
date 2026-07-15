export default function useStorage(type){ //type = 'local' | 'session'
  const storage = type === 'local' ? localStorage : sessionStorage
  const get = (key) => {
    try {
      return JSON.parse(storage.getItem(key))
    } catch(_err){
      return storage.getItem(key)
    }
  }

  const set = (key, value) => {
    storage.setItem(key, typeof(value) === "object" ? JSON.stringify(value) : value)
  }

  const del = (key) => {
    storage.removeItem(key)
  }

  return {
    get,
    set,
    del
  }
}