import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';

class TallyApp extends LitElement {
  // Define CSS styles for the component
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
      height: 100vh; 
      font-family: Arial, sans-serif;
      background-color: grey
    }


    h1 {
      margin: 0;
      font-weight: bold;
      font-size: 100px;
    }
    p {
      font-weight: bold;
      font-size: 24px;
      margin: 10px 0;
    }
    button {
      font-size: 30px;
      padding: 10px 20px;
      margin: 5px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
    }
    button:disabled {
      background-color: red;
    }
  `;

  // Define properties for the component
  static properties = {
    count: { type: Number }, // Property to store the count value
    state: { type: String }, // Property to store the state (Normal, Minimum Reached, Maximum Reached)
  };

  // Constructor for initializing the component
  constructor() {
    super();
    this.count = 0;
    this.state = 'Normal'; // Initial state is 'Normal'
  }

  // Method to increment the count and update the state
  increment() {
    if (this.count < 10) { // Check if count is less than 10
      this.count++; // Increment count
      this.updateState(); // Update the state
    }
  }

  // Method to decrement the count and update the state
  decrement() {
    this.count--; // Decrement count
    this.updateState(); // Update the state
  }

  // Method to update the state based on the current count value
  updateState() {
    if (this.count === 0) {
      this.state = 'Minimum Reached';
    } else if (this.count === 10) {
      this.state = 'Maximum Reached';
    } else {
      this.state = 'Normal';
    }
  }

  // Method to define the component's HTML structure using LitHTML template literal
  render() {
    return html`
      <h1>Tally App</h1>
      <p style="font-weight: bold; font-size: 50px; color: white">Count: ${this.count}</p>
      <p style="font-weight: bold; font-size: 50px">Status: ${this.state}</p>
      
      <!-- Button to increment count (disabled when count is 10) -->
      <button @click="${this.increment}" ?disabled="${this.count === 10}">Increment</button>

      <!-- Button to decrement count (disabled when count is 0) -->
      <button @click="${this.decrement}" ?disabled="${this.count === 0}">Decrement</button>
    `;
  }
}

// Define the custom HTML element 'Tally-app'
customElements.define('tally-app', TallyApp);

