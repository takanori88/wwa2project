import { slugify } from '@/utils/slugify';

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
            <span className="absolute -right-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100 ease-in-out text-gray-300 text-sm">
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
