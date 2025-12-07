# AI-Powered Benefits Discovery Flow

A multi-screen React application that helps employees discover health benefits using AI classification and action plan generation.

## Project Setup & Demo

### Web
1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start the application**:
    ```bash
    npm start
    ```
    (or `npm run dev`)
3.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## Problem Understanding
**Goal**: Classify employee health needs into categories (Dental, Mental Health, Vision, OPD) and display relevant benefits with actionable steps.
**Assumption**: Benefits are loaded from mock JSON data. AI interactions are simulated to ensure reliability without an API key.

## Architecture & Code Structure
- **`App.tsx`**: Manages routing using `react-router-dom`.
- **`screens/`**:
    - `InputScreen`: Free-text input for health needs.
    - `ProcessingScreen`: Simulates AI analysis with a loading state.
    - `BenefitListScreen`: Displays categorized benefit cards.
    - `ActionPlanScreen`: Shows a generated 3-step action plan.
- **`services/`**:
    - `aiService.ts`: Mock AI service that classifies text and generates plans with simulated delays.
    - `benefitsService.ts`: Fetches benefits from the mock data.
- **`data/`**: `mockBenefits.json` containing sample benefit data.

## AI Prompts & Iterations (Simulated)
The application simulates the following AI behavior:
- **Classification**: Matches keywords (e.g., "tooth" -> Dental, "stress" -> Mental Health).
- **Action Plan**: Generates structured steps based on the selected benefit provider and type.

## Known Issues / Improvements
- The AI is currently a keyword-based simulation. In a production environment, this would be replaced by calls to an LLM (e.g., OpenAI GPT-4 or Gemini).
- Input validation is basic.
