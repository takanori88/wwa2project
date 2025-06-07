export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s+]/g, '-') // スペースをハイフンに
    .replace(/[^\w\-]+/g, '') // 記号除去
    .replace(/\-\-+/g, '-'); // ハイフン連続→1つに
}
