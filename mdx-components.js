import { slugify } from '@/app/utils/slugify';

export function useMDXComponents(components) {
  return {
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    h2: ({ children }) => {
      const text =
        typeof children === 'string' ? children : children?.toString?.() || '';
      const id = slugify(text);

      return (
        <a href={`#${id}`} className="group block pb-1 no-underline">
          <h2 id={id} className="relative flex items-center cursor-pointer">
            {children}
            <span className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 text-md">
              🔗
            </span>
          </h2>
        </a>
      );
    },

    ...components
    // ここにオーバーライドしたいコンポーネントを書ける（今はデフォルトでOK）
  };
}
