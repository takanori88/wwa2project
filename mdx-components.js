export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-7 mb-3 inline-block border-b-2 border-gray-400 pb-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 text-lg font-semibold">{children}</h4>
    ),
    p: ({ children }) => <p className="mt-1 leading-relaxed">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside mt-3">{children}</ul>
    ),
    li: ({ children }) => <li className="ml-6">{children}</li>,
    table: ({ children }) => (
      <table className="border-collapse table-auto w-full mt-3">
        {children}
      </table>
    ),
    thead: ({ children }) => <thead className="bg-gray-100">{children}</thead>,
    tbody: ({ children }) => (
      <tbody className="[&_td]:border-t">{children}</tbody>
    ),
    th: ({ children }) => (
      <th className="border-b px-4 py-2 text-left font-semibold text-gray-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-t px-4 py-2 text-gray-700">{children}</td>
    ),
    ...components
    // ここにオーバーライドしたいコンポーネントを書ける（今はデフォルトでOK）
  };
}
