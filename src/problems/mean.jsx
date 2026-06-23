export default function mean(array) {

  const sum = array.reduce((acc, current) => acc + current, 0);
  const average = sum / array.length;
  return average;
}

