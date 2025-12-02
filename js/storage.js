// Storage keys
const STORAGE_KEYS = {
    COMPLETED_LEVELS: 'levelUp_completedLevels',
    CURRENT_LEVEL: 'levelUp_currentLevel',
    SCORE: 'levelUp_score',
    TASKS_COMPLETED: 'levelUp_tasksCompleted',
    STREAK_DATA: 'levelUp_streakData'
};

// Initialize storage with default values if not present
function initializeStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.COMPLETED_LEVELS)) {
        localStorage.setItem(STORAGE_KEYS.COMPLETED_LEVELS, JSON.stringify([]));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_LEVEL)) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, '1');
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.SCORE)) {
        localStorage.setItem(STORAGE_KEYS.SCORE, '0');
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.TASKS_COMPLETED)) {
        localStorage.setItem(STORAGE_KEYS.TASKS_COMPLETED, JSON.stringify({}));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.STREAK_DATA)) {
        localStorage.setItem(STORAGE_KEYS.STREAK_DATA, JSON.stringify({
            currentStreak: 0,
            longestStreak: 0,
            lastCompletionDate: null,
            completionDates: []
        }));
    }
}

// Get completed levels
function getCompletedLevels() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_LEVELS) || '[]');
}

// Get current level
// Get current level (next level to complete)
function getCurrentLevel() {
    const completedLevels = getCompletedLevels();
    const storedCurrentLevel = parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_LEVEL) || '1');
    
    // If stored current level is completed, find the next uncompleted level
    if (completedLevels.includes(storedCurrentLevel)) {
        for (let i = 1; i <= 60; i++) {
            if (!completedLevels.includes(i)) {
                return i;
            }
        }
        return 60; // All levels completed
    }
    
    return storedCurrentLevel;
}

// Get next level (same as current level logic usually)
// Get next level (for navigation)
function getNextLevel() {
    const currentLevel = getCurrentLevel();
    const completedLevels = getCompletedLevels();
    
    // Find the next uncompleted level after current
    for (let i = currentLevel + 1; i <= 60; i++) {
        if (!completedLevels.includes(i)) {
            return i;
        }
    }
    
    // If all next levels are completed, return current level
    return currentLevel;
}
// Get score
function getScore() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.SCORE) || '0');
}

// Get progress percentage
function getProgressPercentage() {
    const completedLevels = getCompletedLevels();
    return Math.round((completedLevels.length / 60) * 100);
}

// Get task completion status for a level
function getTaskCompletion(level) {
    const allTasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS_COMPLETED) || '{}');
    return allTasks[level] || {};
}

// Update task completion status
// Update task completion status
function updateTaskCompletion(level, taskIndex, isCompleted) {
    const allTasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS_COMPLETED) || '{}');
    
    if (!allTasks[level]) {
        allTasks[level] = {};
    }
    
    allTasks[level][taskIndex] = isCompleted;
    localStorage.setItem(STORAGE_KEYS.TASKS_COMPLETED, JSON.stringify(allTasks));
    
    // Check if all tasks for this level are completed
    const tasks = TASKS[level] || [];
    const levelTasksCompleted = allTasks[level] || {};
    
    const allTasksCompleted = tasks.every((_, index) => levelTasksCompleted[index] === true);
    
    if (allTasksCompleted && !isLevelCompleted(level)) {
        // Mark level as completed
        completeLevel(level);
        return true; // Level was just completed
    }
    
    return false; // Level was not completed
}

// Add this helper function to check if a level is completed
function isLevelCompleted(level) {
    const completedLevels = getCompletedLevels();
    return completedLevels.includes(level);
}
// Get streak data
function getStreakData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK_DATA) || '{}');
}

// Get current streak
function getStreak() {
    const streakData = getStreakData();
    return streakData.currentStreak || 0;
}

// Get longest streak
function getLongestStreak() {
    const streakData = getStreakData();
    return streakData.longestStreak || 0;
}

// Update streak when a level is completed
function updateStreakOnCompletion(level) {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
    
    const streakData = getStreakData();
    
    if (!streakData.completionDates) {
        streakData.completionDates = [];
    }
    
    // Add today's date to completion dates if not already there
    if (!streakData.completionDates.includes(todayStr)) {
        streakData.completionDates.push(todayStr);
        
        // Sort dates
        streakData.completionDates.sort();
        
        // Calculate current streak
        let currentStreak = 0;
        let longestStreak = streakData.longestStreak || 0;
        
        // If we have completion dates, calculate streak
        if (streakData.completionDates.length > 0) {
            let prevDate = null;
            let tempStreak = 0;
            
            // Check consecutive days
            for (let i = streakData.completionDates.length - 1; i >= 0; i--) {
                const currentDate = new Date(streakData.completionDates[i]);
                
                if (prevDate === null) {
                    tempStreak = 1;
                } else {
                    const diffTime = Math.abs(prevDate - currentDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    if (diffDays === 1) {
                        tempStreak++;
                    } else {
                        break; // Streak broken
                    }
                }
                
                prevDate = currentDate;
            }
            
            currentStreak = tempStreak;
            longestStreak = Math.max(longestStreak, currentStreak);
        }
        
        streakData.currentStreak = currentStreak;
        streakData.longestStreak = longestStreak;
        streakData.lastCompletionDate = todayStr;
        
        localStorage.setItem(STORAGE_KEYS.STREAK_DATA, JSON.stringify(streakData));
        
        return currentStreak;
    }
    
    return streakData.currentStreak || 0;
}

// Complete a level
// Complete a level
function completeLevel(level) {
    const completedLevels = getCompletedLevels();
    if (!completedLevels.includes(level)) {
        completedLevels.push(level);
        localStorage.setItem(STORAGE_KEYS.COMPLETED_LEVELS, JSON.stringify(completedLevels));
        
        // Update current level to next uncompleted level
        let nextLevel = level + 1;
        // Find the next uncompleted level
        for (let i = 1; i <= 60; i++) {
            if (!completedLevels.includes(i)) {
                nextLevel = i;
                break;
            }
        }
        localStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, nextLevel.toString());
        
        // Update score
        const currentScore = getScore();
        localStorage.setItem(STORAGE_KEYS.SCORE, (currentScore + 10).toString());
        
        // Update streak
        updateStreakOnCompletion(level);
        
        return true;
    }
    return false;
}
// Reset progress
function resetProgress() {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LEVELS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.SCORE, '0');
    localStorage.setItem(STORAGE_KEYS.TASKS_COMPLETED, JSON.stringify({}));
    localStorage.setItem(STORAGE_KEYS.CURRENT_LEVEL, '1');
    localStorage.setItem(STORAGE_KEYS.STREAK_DATA, JSON.stringify({
        currentStreak: 0,
        longestStreak: 0,
        lastCompletionDate: null,
        completionDates: []
    }));
    
    return true;
}

// Initialize on load
initializeStorage();