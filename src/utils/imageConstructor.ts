export function getImgUrl(sufix: string): string {
  // console.log(process.env.API_URL)
  // console.log(`${process.env.API_URL}/images/${sufix}`);
  return `${process.env.API_URL}/images/${sufix}`;
}
