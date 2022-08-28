export function serialize(item: any) {
  return `(${Object.entries(item)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join(',')})`;
}
