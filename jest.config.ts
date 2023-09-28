export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // process `*.tsx` files with `ts-jest`
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleDirectories: ['node_modules', 'src'],
}
