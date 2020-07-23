export const findCardPosition = (data, card) => {
  const pos = data.indexOf(card)
  switch (pos) {
    case 0:
      return "1 col-start / span 24"
      break
    case 1:
      return "span 12"
      break
    case 2:
      return "span 12"
      break
    default:
      return "span 8"
      break
  }
}

export const thirdSizeCard = (data, card) => {
  if (data.indexOf(card) > 2) return true
  else return false
}
