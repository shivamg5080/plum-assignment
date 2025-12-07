import type { Benefit } from './benefitsService';

// Simulated AI Service
// In a real app, this would call an LLM API (OpenAI, Gemini, etc.)

const DELAY_MS = 1500;

export const classifyNeed = async (text: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lowerText = text.toLowerCase();
            if (lowerText.includes('tooth') || lowerText.includes('dental') || lowerText.includes('mouth') || lowerText.includes('gum')) {
                resolve('Dental');
            } else if (lowerText.includes('eye') || lowerText.includes('vision') || lowerText.includes('glasses') || lowerText.includes('blur')) {
                resolve('Vision');
            } else if (lowerText.includes('stress') || lowerText.includes('anxiety') || lowerText.includes('depress') || lowerText.includes('mental') || lowerText.includes('sad')) {
                resolve('Mental Health');
            } else if (lowerText.includes('fever') || lowerText.includes('pain') || lowerText.includes('doctor') || lowerText.includes('sick')) {
                resolve('OPD');
            } else {
                // Default fallback or "General"
                resolve('General');
            }
        }, DELAY_MS);
    });
};

export const generateActionPlan = async (benefit: Benefit): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Return a structured 3-step plan based on the benefit
            resolve([
                `Log in to the ${benefit.provider} portal using your employee ID.`,
                `Search for "Network Providers" to find a clinic near you that accepts ${benefit.title}.`,
                `Book an appointment and present your digital insurance card (Group ID: PLUM-123) at the reception.`
            ]);
        }, DELAY_MS);
    });
};
