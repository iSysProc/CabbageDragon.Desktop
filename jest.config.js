module.exports = {
    projects: [
        {
            clearMocks: true,
            coverageDirectory: "coverage",
            testEnvironment: "node",
            testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
            transform: {
                "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
            },
        },
        {
            clearMocks: true,
            coverageDirectory: "coverage",
            testEnvironment: "jsdom",
            testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx$",
            transform: {
                "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
            },
        }
    ]
};