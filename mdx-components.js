export function useMDXComponents(components) {
  return {
    ...components
    // ここにオーバーライドしたいコンポーネントを書ける（今はデフォルトでOK）
  };
}
