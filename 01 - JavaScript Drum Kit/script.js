// Function to synthesize drum sounds using the Web Audio API
function createDrumSound(context, frequency) {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, context.currentTime);

  gainNode.gain.setValueAtTime(1, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.5);
}

// Map drum names to their corresponding frequencies (you can adjust these values for different sounds)
const drumFrequencies = {
  'Hi Hats': 1000,    // High-frequency metallic sound
  'Boom': 150,        // Deep and low-frequency sound
  'Open Hats': 800,   // Similar to Hi Hats, but more open and sustained
  'Snare': 200,       // Snappy and short burst sound
  'Kick': 80,         // Deep and low-frequency kick drum
  'Tom 1': 300,       // Mid-frequency tom drum
  'Tom 2': 350,       // Mid-frequency tom drum
  'Tom 3': 400,       // Mid-frequency tom drum
  'Clap': 250,        // Short, sharp hand-clap sound
  'Ride': 1200,       // Metallic, sustained ride cymbal sound
};

// Function to attach click event listeners to each drum container
function attachEventListeners() {
  const drums = document.querySelectorAll('.drum');
  drums.forEach(drum => {
    drum.addEventListener('click', () => {
      const drumName = drum.textContent;
      const frequency = drumFrequencies[drumName];
      if (frequency) {
        // Create an AudioContext if supported
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const context = new AudioContext();

        // Play the drum sound
        createDrumSound(context, frequency);
      }
    });
  });
}

// Function to attach keyboard event listener for drum sounds
function attachKeyboardListener() {
  window.addEventListener('keydown', event => {
    const drum = document.querySelector(`.drum[data-key="${event.key}"]`);
    if (drum) {
      drum.click();
    }
  });
}

// Create drum buttons and attach event listeners once the page loads
document.addEventListener('DOMContentLoaded', () => {
  attachEventListeners();
  attachKeyboardListener();
});