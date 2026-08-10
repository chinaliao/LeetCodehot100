import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-clike';

export function CodeBlock({ code, language = 'java' }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const langClass = language === 'java' ? 'language-java' : 'language-python';

  return (
    <div className="idea-code-container">
      <pre className={`idea-code-pre ${langClass}`}>
        <code className={langClass}>{code}</code>
      </pre>
    </div>
  );
}
