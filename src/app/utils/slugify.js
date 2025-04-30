export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s+]/g, '-') // スペースをハイフンに
    .replace(/[^\w\-]+/g, '') // 記号除去
    .replace(/\-\-+/g, '-'); // ハイフン連続→1つに
}
