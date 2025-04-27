export default function Note({ children }) {
  return (
    <div className="text-sm text-gray-500 border-l-4 border-gray-300 pl-4 italic my-6">
      {children}
    </div>
  );
}