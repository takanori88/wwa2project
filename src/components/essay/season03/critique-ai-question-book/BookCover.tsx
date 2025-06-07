import Image from 'next/image';

export default function BookCover() {
  return (
    <div className="flex flex-col items-center my-6">
      <Image
        src="/images/essays/critique-ai-question-book/book-cover.png"
        alt="Cover image of the book 'AIが答えを出せない 問いの設定力'"
        width={170}
        height={400}
        className="rounded shadow-md"
      />
      <div className="text-sm text-gray-500 text-center mt-2">
        Source: Cover image from
        <a
          href="https://www.amazon.co.jp/dp/B0CZDKBZ5V"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Amazon.co.jp
        </a>
        , for the book titled <br />
        &#34;AIが答えを出せない 問いの設定力&#34; <br />
        （鳥潟幸志、クロスメディア・パブリッシング（インプレス）、2024年）.
      </div>
    </div>
  );
}
