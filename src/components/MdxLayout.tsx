// app/components/MdxLayout.tsx

import type { WithChildren } from '@/types/components';

export default function MdxLayout({ children }: WithChildren) {
  return <div className="markdown-content mx-auto mb-8">{children}</div>;
}
