import React, { useRef } from 'react';
import { BookOpen, Brain, BarChart3, Download, Upload, Sparkles, User } from 'lucide-react';
import { exportBackupJSON, importBackupJSON } from '../services/storage';

export function Header({ currentTab, setCurrentTab, dueCount, onDataImported }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const success = importBackupJSON(event.target.result);
      if (success) {
        alert('数据导入成功！');
        if (onDataImported) onDataImported();
      } else {
        alert('数据格式不正确，导入失败。');
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="app-header">
      <div className="header-top-row">
        <div className="header-brand">
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #0071e3, #42a5f5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0
          }}>
            <Sparkles size={18} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>LeetCode Hot 100</span>
              <span className="header-brand-badge">极速记忆</span>
            </div>
            <a
              href="https://github.com/chinaliao"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontWeight: 500
              }}
            >
              <User size={11} color="var(--apple-blue)" />
              <span>Author: <strong style={{ color: 'var(--apple-blue)' }}>chinaliao</strong></span>
            </a>
          </div>
        </div>

        <div className="header-actions">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            style={{ display: 'none' }}
          />
          
          <a
            href="https://github.com/chinaliao/LeetCodehot100"
            target="_blank"
            rel="noreferrer"
            className="icon-button"
            title="作者 GitHub 仓库 (chinaliao)"
            style={{ textDecoration: 'none' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <button
            className="icon-button"
            title="导出进度备份 JSON"
            onClick={exportBackupJSON}
          >
            <Download size={16} />
          </button>

          <button
            className="icon-button"
            title="导入进度备份 JSON"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            <Upload size={16} />
          </button>
        </div>
      </div>

      <nav className="header-nav">
        <button
          className={`nav-item ${currentTab === 'all' ? 'active' : ''}`}
          onClick={() => setCurrentTab('all')}
        >
          <BookOpen size={16} />
          <span>全量题目</span>
        </button>

        <button
          className={`nav-item ${currentTab === 'memory' ? 'active' : ''}`}
          onClick={() => setCurrentTab('memory')}
        >
          <Brain size={16} />
          <span>艾宾浩斯复习</span>
          {dueCount > 0 && (
            <span style={{
              background: '#ff3b30',
              color: '#fff',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.1rem 0.45rem',
              borderRadius: '999px',
              marginLeft: '0.2rem'
            }}>
              {dueCount}
            </span>
          )}
        </button>

        <button
          className={`nav-item ${currentTab === 'stats' ? 'active' : ''}`}
          onClick={() => setCurrentTab('stats')}
        >
          <BarChart3 size={16} />
          <span>学习统计</span>
        </button>
      </nav>
    </header>
  );
}
