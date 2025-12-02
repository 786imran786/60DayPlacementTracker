// Responsive UI Updates
function updateResponsiveUI() {
    // Update home page stats
    updateHomePageStats();
    
    // Update progress bars
    const progressPercentage = getProgressPercentage();
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        bar.style.width = `${progressPercentage}%`;
    });
    
    // Update progress text
    const progressTexts = document.querySelectorAll('.progress-percent, .progress-label span:last-child');
    progressTexts.forEach(el => {
        if (el.id.includes('ProgressPercent') || el.textContent.includes('%')) {
            el.textContent = `${progressPercentage}%`;
        }
    });
    
    // Update current level display
    const currentLevel = getCurrentLevel();
    const levelDisplays = document.querySelectorAll('[id*="currentLevel"], [id*="CurrentLevel"]');
    levelDisplays.forEach(el => {
        el.textContent = currentLevel;
    });
    
    // Update completed count
    const completedLevels = getCompletedLevels();
    const completedDisplays = document.querySelectorAll('[id*="completedCount"], [id*="CompletedCount"]');
    completedDisplays.forEach(el => {
        el.textContent = completedLevels.length;
    });
    
    // Update streak
    const streak = getStreak();
    const streakDisplays = document.querySelectorAll('[id*="streakCount"], [id*="Streak"]');
    streakDisplays.forEach(el => {
        el.textContent = streak;
    });
    
    // Update next milestone
    const nextMilestone = document.getElementById('nextMilestone');
    if (nextMilestone) {
        if (completedLevels.length >= 60) {
            nextMilestone.textContent = 'Journey Complete!';
            nextMilestone.className = 'text-secondary';
        } else {
            nextMilestone.textContent = `Complete Level ${currentLevel}`;
            nextMilestone.className = 'text-muted';
        }
    }
}

// Initialize responsive UI on load
document.addEventListener('DOMContentLoaded', function() {
    updateResponsiveUI();
    
    // Update UI on storage changes
    window.addEventListener('storage', updateResponsiveUI);
    
    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});