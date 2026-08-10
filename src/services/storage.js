// Storage service with Ebbinghaus SM-2 algorithm persistence

const STORAGE_KEY_PROGRESS = 'leetcode_hot100_progress_v1';
const STORAGE_KEY_USER_CODE = 'leetcode_hot100_user_code_v1';
const STORAGE_KEY_USER_NOTES = 'leetcode_hot100_user_notes_v1';

// Initial default state for a problem
export function getInitialProblemState(problemId) {
  return {
    problemId,
    status: 'unlearned', // 'unlearned' | 'learning' | 'mastered'
    interval: 0, // days until next review
    repetition: 0, // total review count
    easeFactor: 2.5,
    lastReviewed: null,
    nextReviewDate: null, // ISO string YYYY-MM-DD
  };
}

// Load all user progress from localStorage
export function loadAllProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load progress', e);
    return {};
  }
}

// Save all progress
export function saveAllProgress(progressMap) {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressMap));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

// Ebbinghaus SM-2 Rating Calculation
// Rating values:
// 1 = FORGOT (遗忘/重学)
// 2 = HARD (模糊/困难)
// 3 = GOOD (良好/掌握)
// 4 = EASY (熟练/专家)
export function calculateSM2(currentState, rating) {
  let { repetition, interval, easeFactor } = currentState || { repetition: 0, interval: 0, easeFactor: 2.5 };

  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  // We map rating 1->2, 2->3, 3->4, 4->5 for standard SM-2 formula
  const q = rating + 1; // map 1..4 to 2..5
  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));

  if (rating === 1) {
    // Forgot
    repetition = 0;
    interval = 1;
  } else {
    repetition += 1;
    if (repetition === 1) {
      interval = rating === 2 ? 1 : rating === 3 ? 2 : 4;
    } else if (repetition === 2) {
      interval = rating === 2 ? 2 : rating === 3 ? 4 : 7;
    } else {
      interval = Math.round(interval * easeFactor);
    }
  }

  const now = new Date();
  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + interval);

  const status = interval >= 15 ? 'mastered' : 'learning';

  return {
    problemId: currentState.problemId,
    status,
    interval,
    repetition,
    easeFactor,
    lastReviewed: now.toISOString().split('T')[0],
    nextReviewDate: nextDate.toISOString().split('T')[0],
  };
}

// Check if a problem is due today for review
export function isProblemDueToday(problemState) {
  if (!problemState || !problemState.nextReviewDate) return false;
  const today = new Date().toISOString().split('T')[0];
  return problemState.nextReviewDate <= today;
}

// Load user self-written code
export function loadUserCodeMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER_CODE);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

// Save user code for a problem
export function saveUserCode(problemId, code) {
  try {
    const map = loadUserCodeMap();
    map[problemId] = code;
    localStorage.setItem(STORAGE_KEY_USER_CODE, JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save user code', e);
  }
}

// Load user notes
export function loadUserNotesMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER_NOTES);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

// Save user notes for a problem
export function saveUserNotes(problemId, notes) {
  try {
    const map = loadUserNotesMap();
    map[problemId] = notes;
    localStorage.setItem(STORAGE_KEY_USER_NOTES, JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save user notes', e);
  }
}

// Export backup
export function exportBackupJSON() {
  const data = {
    progress: loadAllProgress(),
    userCode: loadUserCodeMap(),
    userNotes: loadUserNotesMap(),
    exportedAt: new Date().toISOString(),
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `LeetCode_Hot100_Backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Import backup
export function importBackupJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (data.progress) localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(data.progress));
    if (data.userCode) localStorage.setItem(STORAGE_KEY_USER_CODE, JSON.stringify(data.userCode));
    if (data.userNotes) localStorage.setItem(STORAGE_KEY_USER_NOTES, JSON.stringify(data.userNotes));
    return true;
  } catch (e) {
    console.error('Failed to import backup', e);
    return false;
  }
}
