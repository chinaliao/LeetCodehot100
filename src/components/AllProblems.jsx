import React, { useMemo, useEffect } from 'react';
import { Search, Filter, Clock, CheckCircle2, AlertCircle, ArrowRight, BookOpen, XCircle } from 'lucide-react';
import { CATEGORIES, DIFFICULTIES } from '../data/categories';
import { isProblemDueToday } from '../services/storage';

export function AllProblems({
  problems,
  progressMap,
  onSelectProblem,
  filterState = { searchTerm: '', selectedDifficulty: 'all', selectedCategory: 'all', selectedStatus: 'all' },
  onFilterChange,
  lastActiveProblemId
}) {
  const {
    searchTerm = '',
    selectedDifficulty = 'all',
    selectedCategory = 'all',
    selectedStatus = 'all'
  } = filterState;

  const setSearchTerm = (term) => onFilterChange && onFilterChange({ ...filterState, searchTerm: term });
  const setSelectedDifficulty = (diff) => onFilterChange && onFilterChange({ ...filterState, selectedDifficulty: diff });
  const setSelectedCategory = (cat) => onFilterChange && onFilterChange({ ...filterState, selectedCategory: cat });
  const setSelectedStatus = (status) => onFilterChange && onFilterChange({ ...filterState, selectedStatus: status });

  // Auto-scroll to last practiced problem
  useEffect(() => {
    if (lastActiveProblemId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`problem-card-${lastActiveProblemId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [lastActiveProblemId]);

  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      // Difficulty match
      if (selectedDifficulty !== 'all' && p.difficulty !== selectedDifficulty) {
        return false;
      }
      
      // Category match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      
      // Status match
      if (selectedStatus !== 'all') {
        const prog = progressMap[p.id];
        const due = isProblemDueToday(prog);
        const isMastered = prog && prog.status === 'mastered';
        const isUnlearned = !prog || prog.repetition === 0;
        
        if (selectedStatus === 'due' && !due) return false;
        if (selectedStatus === 'unlearned' && !isUnlearned) return false;
        if (selectedStatus === 'learning' && (isUnlearned || isMastered)) return false;
        if (selectedStatus === 'mastered' && !isMastered) return false;
      }

      // Search match
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(term);
        const matchEng = p.englishTitle.toLowerCase().includes(term);
        const matchId = p.id.toString() === term;
        const matchIntuition = p.intuition.toLowerCase().includes(term);
        return matchTitle || matchEng || matchId || matchIntuition;
      }
      return true;
    });
  }, [problems, progressMap, selectedDifficulty, selectedCategory, selectedStatus, searchTerm]);

  // Overall Stats
  const stats = useMemo(() => {
    let unlearned = 0;
    let learning = 0;
    let mastered = 0;
    let dueToday = 0;

    problems.forEach((p) => {
      const prog = progressMap[p.id];
      if (!prog || prog.repetition === 0) {
        unlearned++;
      } else if (prog.status === 'mastered') {
        mastered++;
      } else {
        learning++;
      }

      if (isProblemDueToday(prog)) {
        dueToday++;
      }
    });

    return { total: problems.length, unlearned, learning, mastered, dueToday };
  }, [problems, progressMap]);

  const hasActiveFilters = searchTerm !== '' || selectedDifficulty !== 'all' || selectedCategory !== 'all' || selectedStatus !== 'all';

  const clearFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        searchTerm: '',
        selectedDifficulty: 'all',
        selectedCategory: 'all',
        selectedStatus: 'all'
      });
    }
  };

  const STATUS_OPTIONS = [
    { id: 'all', name: '全部状态' },
    { id: 'due', name: '今日待复习', color: 'var(--color-orange-text)' },
    { id: 'unlearned', name: '未开始' },
    { id: 'learning', name: '学习中', color: 'var(--apple-blue)' },
    { id: 'mastered', name: '已精通', color: 'var(--color-green-text)' }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Stats Summary Bar */}
      <div className="stats-summary-grid">
        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--bg-subtle)', color: 'var(--apple-blue)', flexShrink: 0 }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>题库总数</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{stats.total} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setSelectedStatus('due')}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--color-orange-bg)', color: 'var(--color-orange-text)', flexShrink: 0 }}>
            <AlertCircle size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>今日到期推送</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-orange-text)' }}>{stats.dueToday} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setSelectedStatus('learning')}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--apple-blue-light)', color: 'var(--apple-blue)', flexShrink: 0 }}>
            <Clock size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>记忆学习中</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{stats.learning} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setSelectedStatus('mastered')}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--color-green-bg)', color: 'var(--color-green-text)', flexShrink: 0 }}>
            <CheckCircle2 size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>已熟练精通</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-green-text)' }}>{stats.mastered} 道</div>
          </div>
        </div>
      </div>

      {/* Modern Filter & Search Toolbar */}
      <div className="apple-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Top Row: Search & Status Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ position: 'relative', flex: '1 1 300px', width: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-light)' }} />
            <input
              type="text"
              className="apple-input"
              style={{ paddingLeft: 36, width: '100%', border: '1px solid var(--border-light)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
              placeholder="搜索题号、题目、考察重点..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {STATUS_OPTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStatus(s.id)}
                style={{
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.85rem',
                  fontWeight: selectedStatus === s.id ? 600 : 500,
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: selectedStatus === s.id ? (s.color || 'var(--apple-blue)') : 'transparent',
                  background: selectedStatus === s.id ? 'var(--bg-card)' : 'var(--bg-subtle)',
                  color: selectedStatus === s.id ? (s.color || 'var(--apple-blue)') : 'var(--text-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedStatus === s.id ? '0 2px 6px rgba(0,0,0,0.04)' : 'none'
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row: Difficulty & Category Chips */}
        <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
          
          <div className="filter-row">
            <span className="filter-label">难度筛选:</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {DIFFICULTIES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    fontSize: '0.8rem',
                    fontWeight: selectedDifficulty === d.id ? 600 : 400,
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: selectedDifficulty === d.id ? 'var(--apple-blue)' : 'var(--border-light)',
                    background: selectedDifficulty === d.id ? 'var(--apple-blue)' : 'transparent',
                    color: selectedDifficulty === d.id ? '#fff' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-label">题型考点:</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.8rem',
                    fontWeight: selectedCategory === c.id ? 600 : 400,
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: selectedCategory === c.id ? 'var(--apple-blue)' : 'var(--border-light)',
                    background: selectedCategory === c.id ? 'rgba(0, 122, 255, 0.08)' : 'transparent',
                    color: selectedCategory === c.id ? 'var(--apple-blue)' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Clear Filters Indicator */}
        {hasActiveFilters && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-0.5rem' }}>
            <button 
              onClick={clearFilters}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.3rem', 
                background: 'none', border: 'none', color: 'var(--text-light)', 
                fontSize: '0.8rem', cursor: 'pointer', padding: '0.2rem 0.5rem',
                borderRadius: '4px'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-subtle)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'none'}
            >
              <XCircle size={14} /> 清除所有筛选条件
            </button>
          </div>
        )}
      </div>

      {/* Active Filters Summary count */}
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
        找到 {filteredProblems.length} 道题目
      </div>

      {/* Problems Grid */}
      <div className="grid-problems">
        {filteredProblems.map((p) => {
          const prog = progressMap[p.id];
          const due = isProblemDueToday(prog);
          const diffBadge = p.difficulty === '简单' ? 'badge-easy' : p.difficulty === '中等' ? 'badge-medium' : 'badge-hard';

          return (
            <div
              key={p.id}
              id={`problem-card-${p.id}`}
              className="apple-card apple-card-hover"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                position: 'relative',
                borderColor: due ? 'rgba(255, 149, 0, 0.4)' : undefined
              }}
              onClick={() => onSelectProblem(p)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', fontFamily: 'var(--font-mono)' }}>
                      #{p.id}
                    </span>
                    <span className={`badge ${diffBadge}`}>{p.difficulty}</span>
                    <span className="badge badge-category">{p.category}</span>
                  </div>

                  {due && (
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--color-orange-text)',
                      background: 'var(--color-orange-bg)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '999px',
                      border: '1px solid var(--color-orange-border)'
                    }}>
                      今日到期
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '0.75rem' }}>
                  {p.englishTitle}
                </div>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: 1.4
                }}>
                  {p.intuition}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-light)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                <div>
                  {!prog || prog.repetition === 0 ? (
                    <span style={{ color: 'var(--text-light)' }}>⚪ 未开始学习</span>
                  ) : prog.status === 'mastered' ? (
                    <span style={{ color: 'var(--color-green-text)', fontWeight: 600 }}>🟢 已精通 ({prog.interval}天)</span>
                  ) : (
                    <span>🔵 下次复习: {prog.nextReviewDate}</span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--apple-blue)', fontWeight: 600 }}>
                  <span>开始演练</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProblems.length === 0 && (
        <div className="apple-card" style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '1rem',
          background: 'var(--bg-subtle)' 
        }}>
          <Filter size={48} style={{ color: 'var(--text-light)', opacity: 0.5 }} />
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>未找到匹配题库</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>尝试调整分类或难度，或者清除筛选条件</p>
          </div>
          <button 
            onClick={clearFilters}
            style={{
              marginTop: '1rem',
              padding: '0.6rem 1.2rem',
              background: 'var(--apple-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            重置所有筛选
          </button>
        </div>
      )}
    </div>
  );
}
