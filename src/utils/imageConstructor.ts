export function getImgUrl(sufix: string): string {
  console.log(`${process.env.API_URL}/${sufix}`);
  return `${process.env.API_URL}/${sufix}`;
}
