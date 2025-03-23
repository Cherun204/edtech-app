export const checkLoanEligibility = async (creditScore: number, otherCriteria: boolean): Promise<boolean> => {
    const response = await fetch('http://localhost:3000/checkLoanEligibility', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ creditScore, otherCriteria }),
    });
    const data = await response.json();
    return data.eligibility;
};
