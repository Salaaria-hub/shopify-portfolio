'use client';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TOCItem[];
  activeSection: string;
  className?: string;
}

export default function TableOfContents({ toc, activeSection, className = '' }: TableOfContentsProps) {
  if (!toc || toc.length === 0) return null;

  return (
    <div className={`sticky top-24 ${className}`}>
      <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Table of Contents</h3>
        <nav className="space-y-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition-colors hover:text-blue-400 ${
                activeSection === item.id
                  ? 'text-blue-400 font-medium'
                  : 'text-gray-400'
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}