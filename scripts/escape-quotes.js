import fs from 'fs';
import path from 'path';

// JSXタグ内テキストのクォートをHTMLエスケープ（中括弧の中は除外）
function escapeQuotesInJSX(content) {
  return content.replace(
    /(<[^/][^>]*>)(.*?)(<\/[^>]+>)/gs,
    (_, openTag, innerText, closeTag) => {
      const processed = innerText
        .split(/({.*?})/g)
        .map((part) => {
          if (part.startsWith('{') && part.endsWith('}')) {
            return part; // 中括弧の中はスキップ
          }
          return part.replace(/['’]/g, '&#39;').replace(/["“”]/g, '&#34;');
        })
        .join('');

      return `${openTag}${processed}${closeTag}`;
    }
  );
}

// --- 引数処理 ---
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    '❌ ファイルパスを引数で指定してください。例: node escape-quotes.js src/page.jsx'
  );
  process.exit(1);
}

const filePath = path.resolve(args[0]);
if (!fs.existsSync(filePath)) {
  console.error(`❌ ファイルが見つかりません: ${filePath}`);
  process.exit(1);
}

const original = fs.readFileSync(filePath, 'utf-8');
const escaped = escapeQuotesInJSX(original);
fs.writeFileSync(filePath, escaped, 'utf-8');

console.log(`✅ クォートのエスケープが完了しました: ${filePath}`);
