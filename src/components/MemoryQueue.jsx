import React, { useMemo } from 'react';
import { Brain, Play, CheckCircle2, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { isProblemDueToday } from '../services/storage';

export function MemoryQueue({ problems, progressMap, onStartQueueItem, onStartQueueAll }) {
  // Find all problems due today
  const dueProblems = useMemo(() => {
    return problems.filter((p) => {
      const prog = progressMap[p.id];
      return isProblemDueToday(prog);
    });
  }, [problems, progressMap]);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header Banner */}
      <div className="apple-card" style={{
        background: 'linear-gradient(135deg, #ffffff, #f0f7ff)',
        border: '1px solid #cce5ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: 'var(--apple-blue)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Brain size={26} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
              艾宾浩斯记忆曲线每日推送
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              基于 SM-2 间隔重复算法，为您精确定时推送今日需要抗遗忘复习的题目。
            </p>
          </div>
        </div>

        {dueProblems.length > 0 && (
          <button
            className="btn-primary"
            style={{ fontSize: '0.95rem', padding: '0.75rem 1.5rem' }}
            onClick={() => onStartQueueAll(dueProblems)}
          >
            <Play size={18} />
            <span>一键顺序开始今日复习 ({dueProblems.length} 道)</span>
          </button>
        )}
      </div>

      {/* Due Queue List or Empty State */}
      {dueProblems.length === 0 ? (
        <div className="apple-card" style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--color-green-bg)',
            color: 'var(--color-green-text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)' }}>
            🎉 太棒了！今日复习任务已全部完成！
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: 460 }}>
            你已成功抗击了艾宾浩斯遗忘曲线。今天没有到期的待复习题目，可以去【全量题目】中探索新题或自由练习！
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={16} />
            <span>今日到期待复习题目列表 ({dueProblems.length})：</span>
          </div>

          <div className="grid-problems">
            {dueProblems.map((p, idx) => {
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
                    borderColor: 'rgba(255, 149, 0, 0.4)'
                  }}
                  onClick={() => onStartQueueItem(dueProblems, idx)}
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

                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange-text)' }}>
                        到期需复习
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {p.intuition}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-light)',
                    fontSize: '0.85rem',
                    color: 'var(--apple-blue)',
                    fontWeight: 600
                  }}>
                    <span>开始复习</span>
                    <ArrowRight size={15} style={{ marginLeft: 4 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
