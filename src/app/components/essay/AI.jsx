export function AI({ children }) {
  return (
    <div className="bg-blue-100 rounded-md p-6 my-4 max-w-2xl w-full text-left">
      <div className="font-bold mb-2">AI:</div>
      <div className="prose prose-sm break-words [&_pre]:overflow-x-auto [&_pre]:text-sm">
        {children}
      </div>
    </div>
  );
}