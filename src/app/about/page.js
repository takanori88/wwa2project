export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pb-20 bg-white text-gray-900 text-center">
      <h1 className="text-4xl font-bold mb-6">About WWA² Project</h1>
      <p className="max-w-xl text-lg leading-relaxed">
        WWA² Project explores the human spirit through dialogue with AI,
        uncovering new possibilities for understanding, expression, and being. A
        thousand dialogues, but only one question echoes through them all.
      </p>
      <p className="text-sm text-gray-500 mt-8 max-w-md leading-relaxed mx-auto">
        This project takes the form of a ZINE — a quiet record of reflections{' '}
        between the human spirit and the mirror&nbsp;of&nbsp;AI.
      </p>
      <p className="text-xs text-gray-400 italic mt-4">
        No analytics. No tracking. Just quiet dialogue.
      </p>
    </div>
  );
}
