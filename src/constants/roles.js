export const LEVEL_1 = 'level_1';
export const LEVEL_2 = 'level_2';
export const LEVEL_3 = 'level_3';
export const LEVEL_4 = 'level_4';
export const LEVEL_5 = 'level_5';

export const convertRoleUI = (role) => {
  let level;
  switch (role) {
    case LEVEL_1:
      level = 'Bronze';
      break;
    case LEVEL_2:
      level = 'Silver';
      break;
    case LEVEL_3:
      level = 'Gold';
      break;
    case LEVEL_4:
      level = 'Master';
      break;
    case LEVEL_5:
      level = 'Supreme';
      break;
    default:
      level = 'Wood';
  }
  return level;
};
