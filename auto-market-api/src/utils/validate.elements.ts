export const isValid = (element: string) => {
  if(element && element.trim() !== ""){
    return true
  }else{
    return false
  }
}