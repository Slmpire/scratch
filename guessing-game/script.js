class EtherGuess {
    constructor() {
        this.ranges = [10, 50, 100];
        this.currentRange = 10;
        this.targetNumber = 0;
        this.attempts = 0;
        this.history = [];
        this.isGameOver = false;

        // DOM Elements
        this.feedbackEl = document.getElementById('feedback');
        this.attemptsEl = document.getElementById('attempts');
        this.inputEl = document.getElementById('guess-input');
        this.guessBtn = document.getElementById('guess-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.historyEl = document.getElementById('history-list');
        this.rangeBtns = document.querySelectorAll('.range-btn');
        this.gameCard = document.querySelector('.glass-card');

        this.init();
    }

    init() {
        this.startNewGame();

        // Event Listeners
        this.guessBtn.addEventListener('click', () => this.makeGuess());
        this.resetBtn.addEventListener('click', () => this.startNewGame());
        this.inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.makeGuess();
        });

        this.rangeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (this.attempts > 0 && !this.isGameOver) {
                    if (!confirm('Start a new game with the new range?')) return;
                }
                this.updateRange(parseInt(e.target.dataset.range));
                this.setActiveRangeBtn(e.target);
            });
        });
    }

    startNewGame() {
        this.targetNumber = Math.floor(Math.random() * this.currentRange) + 1;
        this.attempts = 0;
        this.history = [];
        this.isGameOver = false;

        // Reset UI
        this.updateAttempts();
        this.feedbackEl.textContent = `I'm thinking of a number between 1 and ${this.currentRange}`;
        this.feedbackEl.style.color = 'var(--text-main)';
        this.historyEl.innerHTML = '';
        this.inputEl.value = '';
        this.inputEl.disabled = false;
        this.guessBtn.disabled = false;
        this.gameCard.classList.remove('win-pulse');

        // Focus input
        this.inputEl.focus();
    }

    updateRange(newRange) {
        this.currentRange = newRange;
        this.inputEl.max = newRange;
        this.startNewGame();
    }

    setActiveRangeBtn(activeBtn) {
        this.rangeBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    makeGuess() {
        if (this.isGameOver) return;

        const guess = parseInt(this.inputEl.value);

        if (isNaN(guess) || guess < 1 || guess > this.currentRange) {
            this.setFeedback('Please enter a valid number within the range', 'var(--error)');
            this.triggerShake();
            return;
        }

        this.attempts++;
        this.updateAttempts();
        this.history.push(guess);
        this.addHistoryItem(guess);

        if (guess === this.targetNumber) {
            this.handleWin();
        } else if (guess < this.targetNumber) {
            this.setFeedback('Higher...', 'var(--secondary)');
            this.inputEl.value = '';
            this.inputEl.focus();
        } else {
            this.setFeedback('Lower...', '#0ea5e9');
            this.inputEl.value = '';
            this.inputEl.focus();
        }
    }

    handleWin() {
        this.isGameOver = true;
        this.setFeedback(`Correct! The number was ${this.targetNumber}`, 'var(--success)');
        this.inputEl.disabled = true;
        this.guessBtn.disabled = true;
        this.gameCard.classList.add('win-pulse');

        // Sparkle effect placeholder or more intense feedback
        this.feedbackEl.style.fontSize = '1.4rem';
        this.feedbackEl.style.fontWeight = '800';
    }

    setFeedback(msg, color) {
        this.feedbackEl.textContent = msg;
        this.feedbackEl.style.color = color;
    }

    updateAttempts() {
        this.attemptsEl.textContent = this.attempts;
    }

    addHistoryItem(guess) {
        const item = document.createElement('div');
        item.classList.add('history-item');

        if (guess === this.targetNumber) {
            item.classList.add('correct');
        } else if (guess < this.targetNumber) {
            item.classList.add('lower'); // Meaning the guess was lower than target
            item.title = "Go higher";
        } else {
            item.classList.add('higher'); // Meaning the guess was higher than target
            item.title = "Go lower";
        }

        item.textContent = guess;
        this.historyEl.prepend(item);
    }

    triggerShake() {
        this.gameCard.classList.add('shake');
        setTimeout(() => {
            this.gameCard.classList.remove('shake');
        }, 400);
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.game = new EtherGuess();
});
