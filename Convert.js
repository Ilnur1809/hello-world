const convert = (first, ...massive) => {
  const date = first;
  let result = [];
  if (date === undefined) {
  return [];
}
  const a = new Date(...date).toDateString();
  result.push(a);
  for (const item of massive) {
    const b = new Date(...item).toDateString();
    result.push(b);
  }
  return result;
};
export default convert;

const convert = (...massive) => {
  let result = [];
  for (const item of massive){
    const formated = new Date(...item);
    const formatedItem = formated.toDateString();
    result.push(formatedItem);
  }
  return result;
};
export default convert;
