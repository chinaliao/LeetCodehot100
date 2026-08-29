import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { AllProblems } from './components/AllProblems';
import { MemoryQueue } from './components/MemoryQueue';
import { PracticeStudio } from './components/PracticeStudio';
import { StatsModal } from './components/StatsModal';
import { HOT_100_PROBLEMS } from './data/hot100Data';
import { loadAllProgress, saveAllProgress, getInitialProblemState, isProblemDueToday } from './services/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState('all'); // 'all' | 'memory' | 'stats' | 'practice'
  const [progressMap, setProgressMap] = useState(() => loadAllProgress());
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [lastActiveProblemId, setLastActiveProblemId] = useState(null);

  // Session-scoped filter state (cleared when browser tab/window is closed)
  const [filterState, setFilterState] = useState(() => {
    try {
      const saved = sessionStorage.getItem('leetcode_filter_state');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      searchTerm: '',
      selectedDifficulty: 'all',
      selectedCategory: 'all',
      selectedStatus: 'all'
    };
  });

  const handleFilterChange = (newFilters) => {
    setFilterState(newFilters);
    try {
      sessionStorage.setItem('leetcode_filter_state', JSON.stringify(newFilters));
    } catch {
      // ignore
    }
  };

  // Queue mode state
  const [queueState, setQueueState] = useState(null); // { queue: [...], index: 0 }

  // Sync progress storage
  const handleSaveProgress = (updatedProblemProgress) => {
    const newMap = { ...progressMap, [updatedProblemProgress.problemId]: updatedProblemProgress };
    setProgressMap(newMap);
    saveAllProgress(newMap);
  };

  const handleDataImported = () => {
    setProgressMap(loadAllProgress());
  };

  // Count due problems today
  const dueProblemsCount = useMemo(() => {
    return HOT_100_PROBLEMS.filter((p) => {
      const prog = progressMap[p.id];
      return isProblemDueToday(prog);
    }).length;
  }, [progressMap]);

  // Open problem in Practice Studio
  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    setLastActiveProblemId(problem.id);
    setQueueState(null);
    setCurrentTab('practice');
  };

  // Start single item from queue
  const handleStartQueueItem = (queueList, index) => {
    setSelectedProblem(queueList[index]);
    setLastActiveProblemId(queueList[index].id);
    setQueueState({ queue: queueList, index });
    setCurrentTab('practice');
  };

  // Start all queue items sequentially
  const handleStartQueueAll = (queueList) => {
    if (queueList.length === 0) return;
    setSelectedProblem(queueList[0]);
    setLastActiveProblemId(queueList[0].id);
    setQueueState({ queue: queueList, index: 0 });
    setCurrentTab('practice');
  };

  // Queue Next problem trigger
  const handleQueueNext = () => {
    if (!queueState) return;
    const nextIdx = queueState.index + 1;
    if (nextIdx < queueState.queue.length) {
      setSelectedProblem(queueState.queue[nextIdx]);
      setLastActiveProblemId(queueState.queue[nextIdx].id);
      setQueueState({ queue: queueState.queue, index: nextIdx });
    } else {
      setQueueState(null);
      setCurrentTab('memory');
    }
  };

  return (
    <div className="app-container">
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setQueueState(null);
          setCurrentTab(tab);
        }}
        dueCount={dueProblemsCount}
        onDataImported={handleDataImported}
      />

      <main className="main-content">
        {currentTab === 'all' && (
          <AllProblems
            problems={HOT_100_PROBLEMS}
            progressMap={progressMap}
            filterState={filterState}
            onFilterChange={handleFilterChange}
            lastActiveProblemId={lastActiveProblemId}
            onSelectProblem={handleSelectProblem}
          />
        )}

        {currentTab === 'memory' && (
          <MemoryQueue
            problems={HOT_100_PROBLEMS}
            progressMap={progressMap}
            onStartQueueItem={handleStartQueueItem}
            onStartQueueAll={handleStartQueueAll}
          />
        )}

        {currentTab === 'stats' && (
          <StatsModal
            problems={HOT_100_PROBLEMS}
            progressMap={progressMap}
          />
        )}

        {currentTab === 'practice' && selectedProblem && (
          <PracticeStudio
            problem={selectedProblem}
            progress={progressMap[selectedProblem.id] || getInitialProblemState(selectedProblem.id)}
            onSaveProgress={handleSaveProgress}
            onBack={() => {
              if (queueState) {
                setCurrentTab('memory');
              } else {
                setCurrentTab('all');
              }
              setQueueState(null);
            }}
            queueContext={queueState ? {
              currentIndex: queueState.index,
              totalQueue: queueState.queue.length,
              hasNext: queueState.index + 1 < queueState.queue.length,
              onNext: handleQueueNext,
            } : null}
          />
        )}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '1.5rem 1rem',
        borderTop: '1px solid var(--border-light)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        background: 'var(--bg-card)',
        marginTop: '2rem'
      }}>
        <span>Crafted with ❤️ by </span>
        <a
          href="https://github.com/chinaliao"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--apple-blue)', fontWeight: 600, textDecoration: 'none' }}
        >
          chinaliao
        </a>
        <span style={{ margin: '0 0.5rem' }}>•</span>
        <span>LeetCode Hot 100 极速记忆 & 艾宾浩斯刷题工坊</span>
      </footer>
    </div>
  );
}
