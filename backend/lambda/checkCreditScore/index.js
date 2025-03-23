exports.handler = async (event) => {
    const creditScore = event.creditScore;

    if (creditScore >= 650) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Approved",
                creditScore: creditScore,
                approval: true
            }),
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "We can help you secure a student loan.",
                creditScore: creditScore,
                approval: false
            }),
        };
    }
};