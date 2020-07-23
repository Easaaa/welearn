export const LEVEL_1 = "level_1"
export const LEVEL_2 = "level_2"
export const LEVEL_3 = "level_3"
export const LEVEL_4 = "level_4"
export const LEVEL_5 = "level_5"

export const convertRoleUI = role => {
  let level
  switch (role) {
    case LEVEL_1:
      level = "Principiante"
      break
    case LEVEL_2:
      level = "Intermedio"
      break
    case LEVEL_3:
      level = "Avanzato"
      break
    case LEVEL_4:
      level = "Insegnante"
      break
    case LEVEL_5:
      level = "Proprietario"
      break
    default:
      level = "Guardone"
  }
  return level
}
