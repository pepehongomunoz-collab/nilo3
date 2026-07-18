import { useRef, useMemo } from 'react';

interface SplitTextProps {
  children: string;
  type?: 'words' | 'chars';
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export function SplitText({
  children,
  type = 'words',
  className = '',
  wordClassName = '',
  charClassName = '',
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  const elements = useMemo(() => {
    const words = children.split(' ');

    if (type === 'words') {
      return words.map((word, i) => (
        <span key={i} className={`inline-block overflow-hidden ${wordClassName}`}>
          <span className={`inline-block split-word ${charClassName}`}>
            {word}
          </span>
          {i < words.length - 1 && <>&nbsp;</>}
        </span>
      ));
    }

    return words.map((word, wi) => (
      <span key={wi} className={`inline-block ${wordClassName}`}>
        {word.split('').map((char, ci) => (
          <span key={ci} className={`inline-block overflow-hidden`}>
            <span className={`inline-block split-char ${charClassName}`}>
              {char}
            </span>
          </span>
        ))}
        {wi < words.length - 1 && <>&nbsp;</>}
      </span>
    ));
  }, [children, type, wordClassName, charClassName]);

  return (
    <span ref={containerRef} className={className} aria-label={children}>
      {elements}
    </span>
  );
}
