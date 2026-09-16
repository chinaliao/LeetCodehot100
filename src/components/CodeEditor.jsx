import React, { useMemo } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';

// Apple Minimalist White Theme
const appleLightTheme = EditorView.theme({
  '&': {
    color: '#0f172a',
    backgroundColor: '#ffffff',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-mono)',
    height: '100%',
  },
  '.cm-scroller': {
    fontFamily: 'var(--font-mono)',
    lineHeight: '1.65',
    overflow: 'auto',
  },
  '.cm-content': {
    caretColor: '#0071e3',
    padding: '12px 6px',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: '#0071e3',
    borderLeftWidth: '2px',
  },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#b4d5fe !important',
  },
  '.cm-gutters': {
    backgroundColor: '#f8fafc',
    color: '#94a3b8',
    border: 'none',
    borderRight: '1px solid rgba(0, 0, 0, 0.06)',
    paddingRight: '6px',
    userSelect: 'none',
  },
  '.cm-activeLine': {
    backgroundColor: '#f8fafc',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#f1f5f9',
    color: '#0071e3',
    fontWeight: '600',
  },
  '.cm-matchingBracket': {
    backgroundColor: '#e0f2fe',
    color: '#0284c7 !important',
    outline: '1px solid #7dd3fc',
    borderRadius: '2px',
  },
  '.cm-nonmatchingBracket': {
    backgroundColor: '#fee2e2',
    color: '#dc2626 !important',
  },
  '.cm-tooltip': {
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'var(--font-mono)',
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li': {
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.85rem',
    },
    '& > ul > li[aria-selected]': {
      backgroundColor: '#0071e3',
      color: '#ffffff',
    },
  },
}, { dark: false });

// Apple Light Syntax Highlighting Style
const appleLightHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: '#ad3da4', fontWeight: '600' },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '#0f172a' },
  { tag: [t.function(t.variableName), t.labelName], color: '#0071e3', fontWeight: '500' },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#1d4ed8' },
  { tag: [t.definition(t.name), t.separator], color: '#0f172a' },
  { tag: [t.typeName, t.className, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#0369a1', fontWeight: '500' },
  { tag: [t.number], color: '#1c00cf' },
  { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '#475569' },
  { tag: [t.meta, t.comment], color: '#94a3b8', fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: '#0071e3', textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: '#0f172a' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#ad3da4' },
  { tag: [t.processingInstruction, t.string, t.inserted], color: '#c41a16' },
  { tag: t.invalid, color: '#dc2626' },
]);

export function CodeEditor({ value, onChange, language = 'java', placeholder = '', wrapLines = true }) {
  const extensions = useMemo(() => {
    const exts = [
      appleLightTheme,
      syntaxHighlighting(appleLightHighlightStyle),
    ];

    if (wrapLines) {
      exts.push(EditorView.lineWrapping);
    }

    if (language === 'python') {
      exts.push(python());
    } else {
      exts.push(java());
    }

    return exts;
  }, [language, wrapLines]);

  return (
    <div className="code-editor-container">
      <CodeMirror
        value={value}
        height="100%"
        minHeight="320px"
        extensions={extensions}
        onChange={onChange}
        placeholder={placeholder}
        indentWithTab={true}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          history: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: false, // handled by custom appleLightHighlightStyle
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
}
