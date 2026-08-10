import React, { useRef } from 'react';
import { BookOpen, Brain, BarChart3, Download, Upload, Sparkles } from 'lucide-react';
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
      <div className="header-brand">
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #0071e3, #42a5f5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          <Sparkles size={18} />
        </div>
        <span>LeetCode Hot 100</span>
        <span className="header-brand-badge">极速记忆</span>
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

      <div className="header-actions">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".json"
          style={{ display: 'none' }}
        />
        
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
    </header>
  );
}
