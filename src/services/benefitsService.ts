import mockBenefits from '../data/mockBenefits.json';

export interface Benefit {
    id: string;
    title: string;
    category: string;
    description: string;
    coverage: string;
    provider: string;
}

export const getBenefitsByCategory = async (category: string): Promise<Benefit[]> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockBenefits.filter(b => b.category === category);
};

export const getAllBenefits = async (): Promise<Benefit[]> => {
    return mockBenefits;
}
