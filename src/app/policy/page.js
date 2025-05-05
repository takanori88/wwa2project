import Link from 'next/link';

export default function PolicyPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-gray-700">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold">1. We don’t track you.</h2>
          <p className="mt-2 text-sm text-gray-600">
            No analytics. No cookies. No identifiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            2. We use Google Search Console
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            …only to see what kind of questions led people here.
            <br />
            We don’t see who you are.
            <br />
            We don’t store or share anything.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            3. We store nothing on our servers.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Accordion states are remembered locally — only by your browser.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            4. This is not a product. This is a conversation.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Our only interest is in what this dialogue might awaken.
          </p>
        </div>
      </div>

      <div className="mt-12 text-sm text-center">
        <Link
          href="/about"
          className="text-gray-500 underline hover:text-gray-700 transition"
        >
          ← Back to About
        </Link>
      </div>
    </div>
  );
}
