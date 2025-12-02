// Task data for all 60 levels
const TASKS = {
    // WEEK 1 → OS WEEK + DSA BASICS + EDA + LINUX
    1: [
        "DSA: Learn Time & Space Complexity + 3 easy array problems",
        "ML: Revise Python + Numpy basics",
        "DevOps: Linux commands (cd/ls/mkdir/rm)",
        "Aptitude: Percentages (10 mins)",
        "OS: Processes vs Threads"
    ],
    2: [
        "DSA: Sliding Window (fixed) + 2 medium",
        "ML: Pandas operations (filter, groupby)",
        "DevOps: File permissions, chmod",
        "Aptitude: Ratios & Proportions",
        "OS: CPU Scheduling algorithms"
    ],
    3: [
        "DSA: Sliding Window (variable) + 2 medium",
        "ML: Visualization (matplotlib/seaborn)",
        "DevOps: grep, awk basics",
        "Aptitude: Averages",
        "OS: Deadlocks (conditions & handling)"
    ],
    4: [
        "DSA: Two Pointer + 3 easy",
        "ML: EDA on Titanic Dataset",
        "DevOps: Linux package managers (apt)",
        "Aptitude: Simple interest",
        "OS: Memory Management basics"
    ],
    5: [
        "DSA: Hashmaps + 2 medium",
        "ML: Continue EDA + Insights writing",
        "DevOps: Linux networking basics",
        "Aptitude: Compound interest",
        "OS: File Systems"
    ],
    6: [
        "DSA: String patterns + 3 easy",
        "ML: Stats basics (mean, var)",
        "DevOps: What is DevOps? SDLC vs DevOps",
        "Aptitude: Profit & loss",
        "OS: Virtual Memory (Paging)"
    ],
    7: [
        "DSA: Weekly Review + contest",
        "ML: EDA Project Finalization",
        "DevOps: Review Linux",
        "Aptitude: Weekly mock",
        "OS: Revision"
    ],

    // WEEK 2 → DBMS + DSA LL/STACK/QUEUE + Stats + Git
    8: [
        "DSA: Linked List basics + 2 easy",
        "ML: Probability basics",
        "DevOps: Git init, clone, add, commit",
        "Aptitude: Time & work intro",
        "DBMS: ER diagrams"
    ],
    9: [
        "DSA: Fast/slow pointer + 2 medium",
        "ML: Normal distribution + sampling",
        "DevOps: Git branching & merging",
        "Aptitude: Time & work problems",
        "DBMS: Relational model"
    ],
    10: [
        "DSA: Stack + monotonic stack",
        "ML: Hypothesis testing (t-test)",
        "DevOps: GitHub push/pull/PR",
        "Aptitude: Ages problems",
        "DBMS: Keys & constraints"
    ],
    11: [
        "DSA: Queue + Deque + 2 medium",
        "ML: Regression intro",
        "DevOps: Git rebase & merge conflicts",
        "Aptitude: Time & distance",
        "DBMS: Joins"
    ],
    12: [
        "DSA: Binary Search basics",
        "ML: Gradient descent + regularization",
        "DevOps: Git workflows",
        "Aptitude: Boats & streams",
        "DBMS: Normalization"
    ],
    13: [
        "DSA: Binary Search on answer",
        "ML: Linear vs logistic regression",
        "DevOps: Git stash, revert",
        "Aptitude: Practice MCQs",
        "DBMS: Transactions & ACID"
    ],
    14: [
        "DSA: Weekly test",
        "ML: Regression summary",
        "DevOps: Git revision",
        "Aptitude: Weekly mock",
        "DBMS: Revision"
    ],

    // WEEK 3 → CN + DSA TREES + ML ALGO + DOCKER
    15: [
        "DSA: Recursion basics + 2 easy",
        "ML: Decision Trees",
        "DevOps: Intro to Docker",
        "Aptitude: Clocks",
        "CN: OSI Model"
    ],
    16: [
        "DSA: Tree traversals",
        "ML: Random Forest",
        "DevOps: Docker pull/run",
        "Aptitude: Calendars",
        "CN: TCP/IP"
    ],
    17: [
        "DSA: BFS/DFS",
        "ML: KNN",
        "DevOps: Docker ps, stop, rm",
        "Aptitude: Blood relations",
        "CN: IP addressing"
    ],
    18: [
        "DSA: BST operations",
        "ML: Naive Bayes",
        "DevOps: Docker images",
        "Aptitude: Syllogism",
        "CN: Subnetting"
    ],
    19: [
        "DSA: Tree mediums",
        "ML: SVM",
        "DevOps: Docker volumes",
        "Aptitude: Ranking",
        "CN: Routing basics"
    ],
    20: [
        "DSA: Mixed tree questions",
        "ML: Evaluation metrics",
        "DevOps: Docker networks",
        "Aptitude: Coding-decoding",
        "CN: DNS, DHCP"
    ],
    21: [
        "DSA: Weekly mock",
        "ML: Mini project planning",
        "DevOps: Docker revision",
        "Aptitude: Weekly mock",
        "CN: Revision"
    ],

    // WEEK 4 → COA + DSA GRAPHS+DP + ML MINI PROJECTS
    22: [
        "DSA: Graph intro",
        "ML: K-means",
        "DevOps: Dockerfile basics",
        "Aptitude: Pipes & cisterns",
        "COA: Number systems"
    ],
    23: [
        "DSA: BFS/DFS graphs",
        "ML: PCA",
        "DevOps: Writing Dockerfile",
        "Aptitude: Series",
        "COA: Boolean algebra"
    ],
    24: [
        "DSA: Topological sort",
        "ML: Mini project #1",
        "DevOps: Build images",
        "Aptitude: Missing numbers",
        "COA: Combinational circuits"
    ],
    25: [
        "DSA: Greedy basics",
        "ML: Mini project #1",
        "DevOps: Docker compose",
        "Aptitude: Directions",
        "COA: Sequential circuits"
    ],
    26: [
        "DSA: DP intro",
        "ML: Mini project #2",
        "DevOps: Docker compose advanced",
        "Aptitude: Puzzles",
        "COA: Memory organization"
    ],
    27: [
        "DSA: 1D DP",
        "ML: Mini project #2",
        "DevOps: Docker revision",
        "Aptitude: Non-verbal reasoning",
        "COA: CPU organization"
    ],
    28: [
        "DSA: Weekly test",
        "ML: Project upload",
        "DevOps: Dockerfile revision",
        "Aptitude: Weekly mock",
        "COA: Revision"
    ],

    // WEEK 5 + 6 → BIG PROJECT + ADVANCED DSA + CI/CD
    29: [
        "DSA: Medium graph problems",
        "ML: Big project — dataset setup",
        "DevOps: Intro CI/CD",
        "Aptitude: Revise",
        "Core: OS + DBMS recap"
    ],
    30: [
        "DSA: Medium DP problems",
        "ML: Data cleaning",
        "DevOps: GitHub Actions intro",
        "Aptitude: MCQs",
        "Core: CN + COA recap"
    ],
    31: [
        "DSA: Hard DP problems",
        "ML: Feature engineering",
        "DevOps: Create workflow.yml",
        "Aptitude: Mock",
        "Core: OS important topics"
    ],
    32: [
        "DSA: Mixed mediums",
        "ML: Model training",
        "DevOps: Build CI pipeline",
        "Aptitude: LR",
        "Core: DBMS important topics"
    ],
    33: [
        "DSA: Recap + patterns",
        "ML: Model evaluation",
        "DevOps: Deploy with CI/CD",
        "Aptitude: Practice",
        "Core: CN theory"
    ],
    34: [
        "DSA: Hard problems",
        "ML: Flask backend",
        "DevOps: CI/CD fixes",
        "Aptitude: Practice",
        "Core: COA theory"
    ],
    35: [
        "DSA: Weekly mock",
        "ML: Frontend + integration",
        "DevOps: Pipeline polish",
        "Aptitude: Mock",
        "Core: Revision"
    ],

    // WEEK 7 + 8 → INTERVIEW PHASE
    36: [
        "DSA: 3 medium problems",
        "ML: Deployment",
        "DevOps: Review all",
        "Aptitude: Mock test",
        "Core: OS MCQs"
    ],
    37: [
        "DSA: 2 medium + 1 hard",
        "ML: Explain project",
        "DevOps: Docker review",
        "Aptitude: MCQs",
        "Core: DBMS MCQs"
    ],
    38: [
        "DSA: Patterns revision",
        "ML: Algorithm revision",
        "DevOps: CI/CD revision",
        "Aptitude: Quick revision",
        "Core: CN MCQs"
    ],
    39: [
        "DSA: Mixed practice",
        "ML: Interview prep",
        "DevOps: Review",
        "Aptitude: Mock",
        "Core: COA MCQs"
    ],
    40: [
        "DSA: Contest",
        "ML: Project polish",
        "DevOps: Final pipeline check",
        "Aptitude: Practice",
        "Core: All subjects revision"
    ],
    41: [
        "DSA: Must-do problems",
        "ML: Statistics recap",
        "DevOps: Dockerfile recap",
        "Aptitude: Practice",
        "Core: OS+DBMS notes"
    ],
    42: [
        "DSA: Interview set",
        "ML: ML model recap",
        "DevOps: Deployment recap",
        "Aptitude: Mock",
        "Core: CN+COA notes"
    ],
    43: [
        "DSA: Mock test",
        "ML: Q&A prep",
        "DevOps: Monitoring basics",
        "Aptitude: Revision",
        "Core: Revision"
    ],
    44: [
        "DSA: Patterns revision",
        "ML: ML interview Q/A",
        "DevOps: Final CI/CD revision",
        "Aptitude: Practice",
        "Core: Important formulas"
    ],
    45: [
        "DSA: Solve 4 mediums",
        "ML: Final theory polish",
        "DevOps: Overview recap",
        "Aptitude: Practice",
        "Core: MCQ pack"
    ],
    46: [
        "DSA: Tree/graph revision",
        "ML: Project explanation practice",
        "DevOps: Docker recap",
        "Aptitude: Mock",
        "Core: Summary"
    ],
    47: [
        "DSA: DP revision",
        "ML: Stats revision",
        "DevOps: Recap",
        "Aptitude: Quick problems",
        "Core: Final notes"
    ],
    48: [
        "DSA: 2 medium + 1 hard",
        "ML: Interview polishing",
        "DevOps: Review",
        "Aptitude: Practice",
        "Core: Revision"
    ],
    49: [
        "DSA: Contest",
        "ML: ML Q/A",
        "DevOps: Recap",
        "Aptitude: Practice",
        "Core: MCQ review"
    ],
    50: [
        "DSA: Final hard problems",
        "ML: Big project final review",
        "DevOps: CI/CD recap",
        "Aptitude: Mock",
        "Core: Final revision"
    ],

    51: [
        "DSA: Medium problems",
        "ML: Interview questions",
        "DevOps: Review",
        "Aptitude: Daily test",
        "Core: OS MCQs"
    ],
    52: [
        "DSA: Medium problems",
        "ML: Theory revision",
        "DevOps: Recap",
        "Aptitude: Test",
        "Core: DBMS MCQs"
    ],
    53: [
        "DSA: Medium problems",
        "ML: Case studies",
        "DevOps: Recap",
        "Aptitude: Test",
        "Core: CN MCQs"
    ],
    54: [
        "DSA: Patterns revision",
        "ML: Final revision",
        "DevOps: Recap",
        "Aptitude: Test",
        "Core: COA MCQs"
    ],
    55: [
        "DSA: Mixed problems",
        "ML: Project explanation",
        "DevOps: Recap",
        "Aptitude: Test",
        "Core: All subjects"
    ],
    56: [
        "DSA: Contest",
        "ML: ML interview prep",
        "DevOps: Recap",
        "Aptitude: Test",
        "Core: Summary"
    ],
    57: [
        "DSA: Medium problems",
        "ML: ML refresher",
        "DevOps: Recap",
        "Aptitude: MCQs",
        "Core: Mixed MCQs"
    ],
    58: [
        "DSA: Patterns",
        "ML: Quick revision",
        "DevOps: Recap",
        "Aptitude: Quick test",
        "Core: Concepts"
    ],
    59: [
        "DSA: Final mocks",
        "ML: Final theories",
        "DevOps: Recap",
        "Aptitude: Mock",
        "Core: MCQs"
    ],
    60: [
        "Final: DSA complete revision",
        "Final: ML complete revision",
        "Final: DevOps review",
        "Final: Aptitude overview",
        "Final: All core subjects overview"
    ]
};

// Level selection page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the levels page
    if (document.querySelector('.levels-grid')) {
        renderLevelsGrid();
        updateLevelsPageStats();
    }
    
    // Check if we're on the level detail page
    if (document.getElementById('levelNumber')) {
        const urlParams = new URLSearchParams(window.location.search);
        const level = parseInt(urlParams.get('level')) || getNextLevel();
        renderLevelDetail(level);
    }
    
    // Check if we're on the home page
    if (document.getElementById('homeScore')) {
        updateHomePageStats();
    }
});

// Render the levels grid with modern CSS
// Render the levels grid with modern CSS
function renderLevelsGrid() {
    const levelsGrid = document.getElementById('levelsGrid');
    if (!levelsGrid) return;
    
    levelsGrid.innerHTML = '';
    
    const completedLevels = getCompletedLevels();
    const currentLevel = getCurrentLevel();
    
    for (let i = 1; i <= 60; i++) {
        const levelCard = document.createElement('div');
        levelCard.className = 'level-card';
        
        // Determine level status
        if (completedLevels.includes(i)) {
            levelCard.classList.add('completed');
        } else if (i === currentLevel) {
            levelCard.classList.add('current');
        } else if (i > currentLevel) {
            levelCard.classList.add('locked');
        }
        // Note: If level is less than current level but not completed, it's accessible for review
        
        // Level content
        const levelContent = document.createElement('div');
        levelContent.className = 'level-card-content';
        
        const levelNumber = document.createElement('div');
        levelNumber.className = 'level-number';
        levelNumber.textContent = i;
        
        const levelLabel = document.createElement('div');
        levelLabel.className = 'level-label';
        levelLabel.textContent = 'DAY';
        
        levelContent.appendChild(levelNumber);
        levelContent.appendChild(levelLabel);
        
        // Status icon
        const statusIcon = document.createElement('div');
        statusIcon.className = 'level-status';
        
        if (completedLevels.includes(i)) {
            statusIcon.textContent = '✔';
        } else if (i === currentLevel) {
            statusIcon.textContent = '⭐';
        } else if (levelCard.classList.contains('locked')) {
            statusIcon.textContent = '🔒';
        }
        
        levelCard.appendChild(levelContent);
        levelCard.appendChild(statusIcon);
        
        // Add click event - allow clicking on completed, current, and accessible levels
        if (!levelCard.classList.contains('locked')) {
            levelCard.addEventListener('click', function() {
                window.location.href = `level-detail.html?level=${i}`;
            });
        }
        
        levelsGrid.appendChild(levelCard);
    }
}
// Update levels page statistics
function updateLevelsPageStats() {
    const score = getScore();
    const progressPercentage = getProgressPercentage();
    const completedLevels = getCompletedLevels();
    const currentLevel = getCurrentLevel();
    
    // Update score
    const scoreElement = document.getElementById('levelsScore');
    if (scoreElement) {
        scoreElement.textContent = score;
    }
    
    // Update progress bar
    const progressBar = document.getElementById('levelsProgressBar');
    const progressPercent = document.getElementById('levelsProgressPercent');
    
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
    
    if (progressPercent) {
        progressPercent.textContent = `${progressPercentage}%`;
    }
    
    // Update completed count
    const completedCount = document.getElementById('completedCountDisplay');
    if (completedCount) {
        completedCount.textContent = completedLevels.length;
    }
    
    // Update current level
    const currentLevelDisplay = document.getElementById('currentLevelDisplay');
    if (currentLevelDisplay) {
        currentLevelDisplay.textContent = currentLevel;
    }
}

// Render level detail page with modern CSS
function renderLevelDetail(level) {
    if (level < 1 || level > 60) {
        window.location.href = 'levels.html';
        return;
    }
    
    // Update level number and title
    document.getElementById('levelNumber').textContent = level;
    document.getElementById('dayTitle').textContent = `Day ${level} of 60`;
    document.getElementById('nextLevelNumber').textContent = Math.min(60, level + 1);
    
    // Update page stats
    updateDetailPageStats();
    
    // Check if level is accessible
    const completedLevels = getCompletedLevels();
    const currentLevel = getCurrentLevel();
    
    if (level > currentLevel && !completedLevels.includes(level) && level > 1 && !completedLevels.includes(level-1)) {
        // Level is locked, redirect to levels page
        window.location.href = 'levels.html';
        return;
    }
    
    // Update level status
    const levelStatus = document.getElementById('levelStatus');
    if (completedLevels.includes(level)) {
        levelStatus.textContent = 'COMPLETED';
        levelStatus.style.background = 'var(--secondary)';
        levelStatus.style.color = 'white';
        
        // Show completion section
        document.getElementById('completionSection').style.display = 'block';
        document.getElementById('nextLevelBtn').disabled = false;
    } else if (level === currentLevel) {
        levelStatus.textContent = 'IN PROGRESS';
        levelStatus.style.background = 'var(--primary)';
        levelStatus.style.color = 'white';
    } else {
        levelStatus.textContent = 'REVIEW';
        levelStatus.style.background = 'var(--accent)';
        levelStatus.style.color = 'white';
    }
    
    // Render tasks
    renderTasks(level);
    
    // Set up next level button
    const nextLevelBtn = document.getElementById('nextLevelBtn');
    if (nextLevelBtn) {
        nextLevelBtn.addEventListener('click', function() {
            const nextLevel = Math.min(60, level + 1);
            window.location.href = `level-detail.html?level=${nextLevel}`;
        });
    }
}

// Update detail page statistics
function updateDetailPageStats() {
    const score = getScore();
    const progressPercentage = getProgressPercentage();
    
    // Update score
    const scoreElement = document.getElementById('detailScore');
    if (scoreElement) {
        scoreElement.textContent = score;
    }
    
    // Update progress bar
    const progressBar = document.getElementById('detailProgressBar');
    const progressPercent = document.getElementById('detailProgressPercent');
    
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
    
    if (progressPercent) {
        progressPercent.textContent = `${progressPercentage}%`;
    }
}

// Render tasks for a level with modern CSS
function renderTasks(level) {
    const tasksContainer = document.getElementById('tasksContainer');
    if (!tasksContainer) return;
    
    tasksContainer.innerHTML = '';
    
    const tasks = TASKS[level] || ["Task data not available", "Check back later", "Tasks being updated"];
    const taskCompletion = getTaskCompletion(level);
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        if (taskCompletion[index] === true) {
            taskItem.classList.add('completed');
        }
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = taskCompletion[index] === true;
        checkbox.id = `task-${level}-${index}`;
        
checkbox.addEventListener('change', function() {
    const isCompleted = this.checked;
    const levelJustCompleted = updateTaskCompletion(level, index, isCompleted);
    
    if (isCompleted) {
        taskItem.classList.add('completed');
        
        // Check if all tasks are now completed
        const allTasksCompleted = tasks.every((_, i) => {
            const currentCompletion = getTaskCompletion(level);
            return i === index ? true : currentCompletion[i] === true;
        });
        
        if (allTasksCompleted) {
            // Show completion section
            document.getElementById('completionSection').style.display = 'block';
            document.getElementById('nextLevelBtn').disabled = false;
            
            // Update level status
            document.getElementById('levelStatus').textContent = 'COMPLETED';
            document.getElementById('levelStatus').style.background = 'var(--secondary)';
            
            // Update page stats
            updateDetailPageStats();
            
            // Trigger confetti effect
            triggerConfetti();
            
            // Show notification
            showNotification('Level completed! +10 points earned', 'success');
            
            // Refresh the page to update unlocked levels
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    } else {
        taskItem.classList.remove('completed');
        
        // Hide completion section if tasks are no longer all completed
        document.getElementById('completionSection').style.display = 'none';
        document.getElementById('nextLevelBtn').disabled = true;
        
        // Update level status
        document.getElementById('levelStatus').textContent = 'IN PROGRESS';
        document.getElementById('levelStatus').style.background = 'var(--primary)';
    }
    
    // Update score display
    const score = getScore();
    document.getElementById('detailScore').textContent = score;
});
        const taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.textContent = task;
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        
        tasksContainer.appendChild(taskItem);
    });
    
    // Check if all tasks are already completed
    const allTasksCompleted = tasks.every((_, index) => taskCompletion[index] === true);
    if (allTasksCompleted) {
        document.getElementById('completionSection').style.display = 'block';
        document.getElementById('nextLevelBtn').disabled = false;
    } else {
        document.getElementById('completionSection').style.display = 'none';
        document.getElementById('nextLevelBtn').disabled = true;
    }
}

// Simple confetti effect for level completion
function triggerConfetti() {
    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', '#ffffff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-20px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animation
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-fade-in';
    
    switch(type) {
        case 'success':
            notification.style.background = 'var(--secondary)';
            break;
        case 'error':
            notification.style.background = 'var(--danger)';
            break;
        default:
            notification.style.background = 'var(--primary)';
    }
    
    notification.style.color = 'white';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px)';
        notification.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}