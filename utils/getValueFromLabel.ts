export function getValueFromLabel(label: string) {
  return label?.toString().toLowerCase().replace(/ /g, "_");
}
