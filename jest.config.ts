import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // This points to your setup file
};

export default config;
