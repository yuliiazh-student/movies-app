export const loader = {
  show(){
    document.body.classList.add('loader')
  },
  hide(timeout = 0){
    setTimeout(() => {
      document.body.classList.remove('loader')
    }, timeout)
  }
}

export const formatDate = (dateStr) => {
  if(!dateStr) return '-'
  const arDate = dateStr.split('-')
  return `${arDate[2]}.${arDate[1]}.${arDate[0]}`
}