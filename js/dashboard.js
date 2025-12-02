// Dashboard page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Update dashboard stats
    updateDashboardStats();
    
    // Set up reset button
    const resetBtn = document.getElementById('resetProgress');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                resetProgress();
                updateDashboardStats();
                
                // Show reset confirmation
                alert('Progress has been reset! Starting fresh.');
                
                // Redirect to home page
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            }
        });
    }
});

// Update dashboard statistics
function updateDashboardStats() {
    const score = getScore();
    const progressPercentage = getProgressPercentage();
    const completedLevels = getCompletedLevels();
    const streak = getStreak();
    const currentLevel = getCurrentLevel();
    
    // Update circular progress
    const circularProgress = document.querySelector('.circle-progress');
    const circularProgressPercent = document.getElementById('circularProgressPercent');
    
    if (circularProgress) {
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (progressPercentage / 100) * circumference;
        circularProgress.style.strokeDashoffset = offset;
    }
    
    if (circularProgressPercent) {
        circularProgressPercent.textContent = `${progressPercentage}%`;
    }
    
    // Update completed levels count
    const completedLevelsCount = document.getElementById('completedLevelsCount');
    const remainingLevelsCount = document.getElementById('remainingLevelsCount');
    
    if (completedLevelsCount) {
        completedLevelsCount.textContent = completedLevels.length;
    }
    
    if (remainingLevelsCount) {
        remainingLevelsCount.textContent = 60 - completedLevels.length;
    }
    
    // Update dashboard score
    const dashboardScore = document.getElementById('dashboardScore');
    if (dashboardScore) {
        dashboardScore.textContent = score;
    }
    
    // Update dashboard streak
    const dashboardStreak = document.getElementById('dashboardStreak');
    if (dashboardStreak) {
        dashboardStreak.textContent = streak;
    }
    
    // Update current level
    const dashboardCurrentLevel = document.getElementById('dashboardCurrentLevel');
    if (dashboardCurrentLevel) {
        dashboardCurrentLevel.textContent = currentLevel;
    }
    
    // Update average level time
    const avgLevelTime = document.getElementById('avgLevelTime');
    if (avgLevelTime) {
        // Simple calculation: assume each completed level took 1 day
        avgLevelTime.textContent = completedLevels.length > 0 ? '1' : '0';
    }
    
    // Update streak count
    const streakCount = document.getElementById('streakCount');
    if (streakCount) {
        streakCount.textContent = streak;
    }
    
    // Update streak history
    updateStreakHistory();
    
    // Update timeline
    updateTimeline();
}

// Update streak history
function updateStreakHistory() {
    const streakHistory = document.getElementById('streakHistory');
    if (!streakHistory) return;
    
    streakHistory.innerHTML = '';
    
    const completedLevels = getCompletedLevels();
    
    // Create some sample history entries based on completed levels
    if (completedLevels.length > 0) {
        const today = new Date();
        
        // Show last 5 days of activity
        for (let i = 4; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            
            const dateStr = date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            });
            
            // Simulate activity for days with completed levels
            // In a real app, you would track actual completion dates
            const hasActivity = i === 0 || Math.random() > 0.5;
            
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const historyDate = document.createElement('span');
            historyDate.className = 'history-date';
            historyDate.textContent = dateStr;
            
            const historyStatus = document.createElement('span');
            historyStatus.className = 'history-status';
            historyStatus.textContent = hasActivity ? 'Completed' : 'No activity';
            historyStatus.style.color = hasActivity ? 'var(--neon-green)' : 'var(--text-dim)';
            
            historyItem.appendChild(historyDate);
            historyItem.appendChild(historyStatus);
            streakHistory.appendChild(historyItem);
        }
    } else {
        const noHistory = document.createElement('div');
        noHistory.className = 'history-item';
        noHistory.textContent = 'No activity yet. Start your journey!';
        noHistory.style.textAlign = 'center';
        noHistory.style.color = 'var(--text-dim)';
        streakHistory.appendChild(noHistory);
    }
}

// Update progress timeline
function updateTimeline() {
    const timelineBars = document.getElementById('timelineBars');
    if (!timelineBars) return;
    
    timelineBars.innerHTML = '';
    
    const completedLevels = getCompletedLevels();
    const currentLevel = getCurrentLevel();
    
    for (let i = 1; i <= 60; i++) {
        const timelineBar = document.createElement('div');
        timelineBar.className = 'timeline-bar';
        
        if (completedLevels.includes(i)) {
            timelineBar.classList.add('completed');
        } else if (i === currentLevel) {
            timelineBar.classList.add('in-progress');
        } else {
            timelineBar.classList.add('locked');
        }
        
        // Add tooltip
        timelineBar.title = `Level ${i}: ${completedLevels.includes(i) ? 'Completed' : (i === currentLevel ? 'In Progress' : 'Locked')}`;
        
        timelineBars.appendChild(timelineBar);
    }
}