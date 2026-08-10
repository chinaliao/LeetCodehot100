import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, CheckCircle2, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';
import { CATEGORIES, DIFFICULTIES } from '../data/categories';
import { isProblemDueToday } from '../services/storage';

export function AllProblems({ problems, progressMap, onSelectProblem }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
  }, [problems, selectedDifficulty, selectedCategory, searchTerm]);

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

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Stats Summary Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem'
      }}>
        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--bg-subtle)', color: 'var(--apple-blue)' }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>题库总数</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{stats.total} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--color-orange-bg)', color: 'var(--color-orange-text)' }}>
            <AlertCircle size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>今日到期推送</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-orange-text)' }}>{stats.dueToday} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--apple-blue-light)', color: 'var(--apple-blue)' }}>
            <Clock size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>记忆学习中</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{stats.learning} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--color-green-bg)', color: 'var(--color-green-text)' }}>
            <CheckCircle2 size={20} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>已熟练精通</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-green-text)' }}>{stats.mastered} 道</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="apple-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', minWidth: 260, flex: 1 }}>
          <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-light)' }} />
          <input
            type="text"
            className="apple-input"
            style={{ paddingLeft: 36 }}
            placeholder="搜索题号、名称、考点关键词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Difficulty Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '0.2rem' }}>难度:</span>
          {DIFFICULTIES.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDifficulty(d.id)}
              style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.8rem',
                fontWeight: selectedDifficulty === d.id ? 600 : 400,
                borderRadius: '999px',
                border: '1px solid var(--border-light)',
                background: selectedDifficulty === d.id ? 'var(--apple-blue)' : 'var(--bg-subtle)',
                color: selectedDifficulty === d.id ? '#fff' : 'var(--text-main)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Filter size={14} style={{ color: 'var(--text-muted)' }} />
          <select
            className="apple-input"
            style={{ width: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
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
        <div className="apple-card" style={{ textAlign: 'center', padding: '3rem 1.5rem', color: 'var(--text-muted)' }}>
          未找到匹配筛选条件的题目
        </div>
      )}
    </div>
  );
}
