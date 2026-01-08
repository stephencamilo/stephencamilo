document.addEventListener('alpine:init', () => {
    Alpine.data('textRotator', () => ({
        words: [
            'Senior PHP Developer.',
            'Drupal Expert.',
            'Full Stack Engineer.'
        ],
        currentWordIndex: 0,
        displayText: '',
        charIndex: 0,
        isDeleting: false,
        isTyping: false,
        
        init() {
            this.startTyping();
        },
        
        startTyping() {
            const word = this.words[this.currentWordIndex];
            
            if (!this.isDeleting) {
                // Typing mode
                this.isTyping = true;
                this.displayText = word.substring(0, this.charIndex + 1);
                this.charIndex++;
                
                if (this.charIndex === word.length) {
                    // Word is complete
                    this.isTyping = false;
                    setTimeout(() => {
                        this.isDeleting = true;
                        this.startDeleting();
                    }, 2000); // Wait 2 seconds before deleting
                    return;
                }
                
                setTimeout(() => this.startTyping(), 100); // Typing speed
            }
        },
        
        startDeleting() {
            const word = this.words[this.currentWordIndex];
            
            if (this.isDeleting) {
                this.displayText = word.substring(0, this.charIndex - 1);
                this.charIndex--;
                
                if (this.charIndex === 0) {
                    // Word is deleted
                    this.isDeleting = false;
                    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
                    setTimeout(() => this.startTyping(), 500); // Wait before next word
                    return;
                }
                
                setTimeout(() => this.startDeleting(), 50); // Deleting speed
            }
        }
    }));
});