export function User({ children }) {
  return (
    <div className="bg-gray-100 rounded-md p-6 my-4 max-w-2xl w-full text-left">
      <div className="font-bold mb-2">You:</div>
      <div className="prose prose-sm break-words">
        {children}
      </div>
    </div>
  );
}