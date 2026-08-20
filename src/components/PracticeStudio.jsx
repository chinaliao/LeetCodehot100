import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, Copy, Check, ExternalLink, Code2, FileText, Sparkles, RotateCcw } from 'lucide-react';
import { loadUserCodeMap, saveUserCode, loadUserNotesMap, saveUserNotes, calculateSM2 } from '../services/storage';
import { CodeBlock } from './CodeBlock';
import confetti from 'canvas-confetti';

export function PracticeStudio({ problem, progress, onSaveProgress, onBack, queueContext }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeLang, setActiveLang] = useState('java');
  const [copied, setCopied] = useState(false);
  
  // Right panel tabs: 'code' | 'notes'
  const [activeRightTab, setActiveRightTab] = useState('code');

  // User inputs
  const [userCode, setUserCode] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [savedStatus, setSavedStatus] = useState('saved');

  // Load existing code/notes for this problem
  useEffect(() => {
    if (problem) {
      const codeMap = loadUserCodeMap();
      const notesMap = loadUserNotesMap();
      setUserCode(codeMap[problem.id] || problem.codeTemplates.java);
      setUserNotes(notesMap[problem.id] || '');
      setShowAnswer(false);
    }
  }, [problem]);

  // Save code with debounce
  const handleCodeChange = (e) => {
    const val = e.target.value;
    setUserCode(val);
    setSavedStatus('saving');
    saveUserCode(problem.id, val);
    setTimeout(() => setSavedStatus('saved'), 400);
  };

  // Handle Tab key in code editor
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const val = e.target.value;
      const newVal = val.substring(0, start) + '    ' + val.substring(end);
      setUserCode(newVal);
      saveUserCode(problem.id, newVal);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  // Save notes
  const handleNotesChange = (e) => {
    const val = e.target.value;
    setUserNotes(val);
    saveUserNotes(problem.id, val);
  };

  // Copy code snippet
  const handleCopy = () => {
    const snippet = problem.codeTemplates[activeLang];
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Handle SM-2 Rating
  const handleRating = (ratingScore) => {
    const updated = calculateSM2(progress, ratingScore);
    onSaveProgress(updated);

    if (ratingScore >= 3) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    }

    if (queueContext && queueContext.hasNext) {
      queueContext.onNext();
    } else {
      onBack();
    }
  };

  const diffBadge = problem.difficulty === '简单' ? 'badge-easy' : problem.difficulty === '中等' ? 'badge-medium' : 'badge-hard';

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navigation Header */}
      <div className="practice-top-bar">
        <button className="btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>返回题目列表</span>
        </button>

        {queueContext && (
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--apple-blue)', background: 'var(--apple-blue-light)', padding: '0.3rem 0.8rem', borderRadius: '999px', textAlign: 'center' }}>
            今日到期推送: {queueContext.currentIndex + 1} / {queueContext.totalQueue}
          </div>
        )}

        <a
          href={`https://leetcode.cn/problems/${problem.englishTitle ? problem.englishTitle.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-') : ''}/`}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          <span>LeetCode 官网上查看</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Main Practice 2-Column Grid */}
      <div className="practice-container">
        {/* Left Column: Problem & Standard Solution */}
        <div className="practice-panel">
          <div className="practice-panel-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-light)' }}>
                  #{problem.id}
                </span>
                <span className={`badge ${diffBadge}`}>{problem.difficulty}</span>
                <span className="badge badge-category">{problem.category}</span>
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{problem.title}</h2>
            </div>
          </div>

          <div className="practice-panel-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Problem Description */}
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              <div style={{ fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>题目概述：</div>
              {problem.description}
            </div>

            {/* Quick Answer Reveal Section */}
            <div>
              <button
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: showAnswer ? 'var(--bg-subtle)' : 'var(--apple-blue)',
                  color: showAnswer ? 'var(--text-main)' : '#fff',
                  border: showAnswer ? '1px solid var(--border-light)' : 'none'
                }}
                onClick={() => setShowAnswer(!showAnswer)}
              >
                {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />}
                <span>{showAnswer ? '隐藏标准答案与思路' : '快速查看标准答案与考点'}</span>
              </button>

              {showAnswer && (
                <div className="animate-fade-in" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Intuition Box */}
                  <div style={{ background: '#e8f2ff', border: '1px solid #b3d7ff', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--apple-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                      <Sparkles size={16} />
                      <span>核心记忆直觉 & 避坑技巧：</span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#004085', fontWeight: 500 }}>
                      {problem.intuition}
                    </div>
                  </div>

                  {/* Code Snippet Container with Language Selector and IntelliJ Highlighting */}
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #3c3f41' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', background: '#212121', borderBottom: '1px solid #3c3f41' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {['java', 'python'].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => setActiveLang(lang)}
                            style={{
                              padding: '0.2rem 0.65rem',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              borderRadius: 4,
                              border: 'none',
                              background: activeLang === lang ? 'var(--apple-blue)' : 'transparent',
                              color: '#fff',
                              cursor: 'pointer'
                            }}
                          >
                            {lang.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={handleCopy}
                        style={{ background: 'transparent', border: 'none', color: '#a9b7c6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}
                      >
                        {copied ? <Check size={14} color="#34c759" /> : <Copy size={14} />}
                        <span>{copied ? '已复制' : '复制代码'}</span>
                      </button>
                    </div>

                    <CodeBlock code={problem.codeTemplates[activeLang]} language={activeLang} />
                  </div>

                  {/* Complexity */}
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div>⏱️ 时间复杂度: <strong style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>{problem.timeComplexity}</strong></div>
                    <div>💾 空间复杂度: <strong style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>{problem.spaceComplexity}</strong></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Editor & My Notes */}
        <div className="practice-panel">
          <div className="practice-panel-header">
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setActiveRightTab('code')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: activeRightTab === 'code' ? 600 : 400,
                  background: activeRightTab === 'code' ? 'var(--bg-card)' : 'transparent',
                  color: activeRightTab === 'code' ? 'var(--apple-blue)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <Code2 size={15} />
                <span>手写代码演练</span>
              </button>

              <button
                onClick={() => setActiveRightTab('notes')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: activeRightTab === 'notes' ? 600 : 400,
                  background: activeRightTab === 'notes' ? 'var(--bg-card)' : 'transparent',
                  color: activeRightTab === 'notes' ? 'var(--apple-blue)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <FileText size={15} />
                <span>解题笔记</span>
              </button>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                title="重置为模板代码"
                onClick={() => {
                  if (confirm('是否重置为默认模板代码？')) {
                    setUserCode(problem.codeTemplates.java);
                    saveUserCode(problem.id, problem.codeTemplates.java);
                  }
                }}
              >
                <RotateCcw size={13} />
                <span>重置代码</span>
              </button>
              <span>• {savedStatus === 'saving' ? '保存中...' : '已自动保存'}</span>
            </div>
          </div>

          <div className="practice-panel-body" style={{ padding: 0 }}>
            {activeRightTab === 'code' ? (
              <textarea
                className="code-editor-textarea"
                placeholder="// 在此输入你默写的算法代码... (支持 Tab 缩进)"
                value={userCode}
                onChange={handleCodeChange}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <textarea
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: 280,
                  padding: '1.25rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  background: 'var(--bg-card)',
                  color: 'var(--text-main)',
                  lineHeight: 1.6
                }}
                placeholder="记录你自己的思考心得、总结或容易踩坑的地方..."
                value={userNotes}
                onChange={handleNotesChange}
              />
            )}
          </div>

          {/* Bottom SM-2 Ebbinghaus Memory Rating Bar */}
          <div className="rating-bar">
            <button className="rating-btn rating-btn-forgot" onClick={() => handleRating(1)}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-red-text)' }}>🔴 遗忘 / 重学</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>1 天后再次推送</span>
            </button>

            <button className="rating-btn rating-btn-hard" onClick={() => handleRating(2)}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-orange-text)' }}>🟠 模糊 / 困难</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>2 天后再次推送</span>
            </button>

            <button className="rating-btn rating-btn-good" onClick={() => handleRating(3)}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--apple-blue)' }}>🟢 良好 / 掌握</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>4 天后再次推送</span>
            </button>

            <button className="rating-btn rating-btn-easy" onClick={() => handleRating(4)}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-green-text)' }}>🔵 熟练 / 专家</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>7~15 天后推送</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
