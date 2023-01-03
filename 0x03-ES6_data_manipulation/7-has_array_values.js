export default function hasValuesFromArray(Set, inputArray) {
  return inputArray.every((value) => Set.has(value));
}
