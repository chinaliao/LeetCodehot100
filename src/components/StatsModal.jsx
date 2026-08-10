import React, { useMemo } from 'react';
import { Award, Brain, CheckCircle, Clock, PieChart, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export function StatsModal({ problems, progressMap }) {
  const stats = useMemo(() => {
    let unlearned = 0;
    let learning = 0;
    let mastered = 0;
    let totalReviews = 0;

    const categoryStats = {};
    CATEGORIES.filter(c => c.id !== 'all').forEach(c => {
      categoryStats[c.id] = { total: 0, learned: 0 };
    });

    problems.forEach((p) => {
      const prog = progressMap[p.id];
      if (categoryStats[p.category]) {
        categoryStats[p.category].total += 1;
      }

      if (!prog || prog.repetition === 0) {
        unlearned += 1;
      } else {
        totalReviews += prog.repetition || 0;
        if (categoryStats[p.category]) {
          categoryStats[p.category].learned += 1;
        }

        if (prog.status === 'mastered') {
          mastered += 1;
        } else {
          learning += 1;
        }
      }
    });

    const masteredPercent = Math.round((mastered / problems.length) * 100);
    const learningPercent = Math.round((learning / problems.length) * 100);

    return {
      unlearned,
      learning,
      mastered,
      totalReviews,
      masteredPercent,
      learningPercent,
      categoryStats,
    };
  }, [problems, progressMap]);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.9rem', borderRadius: 14, background: 'var(--apple-blue-light)', color: 'var(--apple-blue)' }}>
            <Award size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>精通掌握率</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--apple-blue)' }}>{stats.masteredPercent}%</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.9rem', borderRadius: 14, background: 'var(--color-green-bg)', color: 'var(--color-green-text)' }}>
            <CheckCircle size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>已精通题目</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-green-text)' }}>{stats.mastered} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.9rem', borderRadius: 14, background: 'var(--color-orange-bg)', color: 'var(--color-orange-text)' }}>
            <Clock size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>记忆巩固中</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-orange-text)' }}>{stats.learning} 道</div>
          </div>
        </div>

        <div className="apple-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.9rem', borderRadius: 14, background: 'var(--bg-subtle)', color: 'var(--text-main)' }}>
            <Brain size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>累计抗遗忘演练</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>{stats.totalReviews} 次</div>
          </div>
        </div>
      </div>

      {/* Progress Bar Panel */}
      <div className="apple-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PieChart size={18} color="var(--apple-blue)" />
          <span>Hot 100 整体掌握分布</span>
        </h3>

        <div style={{ height: 24, borderRadius: 12, background: 'var(--bg-subtle)', overflow: 'hidden', display: 'flex', marginBottom: '1rem' }}>
          <div style={{ width: `${stats.masteredPercent}%`, background: 'var(--color-green-text)', transition: 'width 0.4s ease' }} title={`已精通: ${stats.mastered}道`} />
          <div style={{ width: `${stats.learningPercent}%`, background: 'var(--apple-blue)', transition: 'width 0.4s ease' }} title={`学习中: ${stats.learning}道`} />
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--color-green-text)' }} />
            <span>已精通 ({stats.mastered} 道)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--apple-blue)' }} />
            <span>学习中 ({stats.learning} 道)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#cbd5e1' }} />
            <span>未开始 ({stats.unlearned} 道)</span>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="apple-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Layers size={18} color="var(--apple-blue)" />
          <span>各算法大类记忆完成度</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {Object.entries(stats.categoryStats).map(([catName, data]) => {
            const pct = data.total > 0 ? Math.round((data.learned / data.total) * 100) : 0;
            return (
              <div key={catName} style={{ padding: '0.875rem', borderRadius: 12, background: 'var(--bg-subtle)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  <span>{catName}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{data.learned} / {data.total} 道 ({pct}%)</span>
                </div>

                <div style={{ height: 8, borderRadius: 4, background: '#cbd5e1', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: 'var(--apple-blue)', borderRadius: 4, transition: 'width 0.3s ease' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
