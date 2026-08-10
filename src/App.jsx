import React, { useState, useEffect, useMemo } from 'react';
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
    setQueueState(null);
    setCurrentTab('practice');
  };

  // Start single item from queue
  const handleStartQueueItem = (queueList, index) => {
    setSelectedProblem(queueList[index]);
    setQueueState({ queue: queueList, index });
    setCurrentTab('practice');
  };

  // Start all queue items sequentially
  const handleStartQueueAll = (queueList) => {
    if (queueList.length === 0) return;
    setSelectedProblem(queueList[0]);
    setQueueState({ queue: queueList, index: 0 });
    setCurrentTab('practice');
  };

  // Queue Next problem trigger
  const handleQueueNext = () => {
    if (!queueState) return;
    const nextIdx = queueState.index + 1;
    if (nextIdx < queueState.queue.length) {
      setSelectedProblem(queueState.queue[nextIdx]);
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
    </div>
  );
}
