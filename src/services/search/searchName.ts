export const searchName = (value: string, array: any, searching: string) => {
  if (value === '') {
    return array;
  } else if (searching.toLowerCase().includes(value.toLowerCase())) {
    return array;
  }
};
