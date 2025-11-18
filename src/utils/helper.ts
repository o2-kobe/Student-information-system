export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function capitalizeInitial(values: string[]) {
  return values.map((value) => value.replace(value[0], value[0].toUpperCase()));
}
