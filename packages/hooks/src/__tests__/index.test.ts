import * as frogHooks from '..';

describe('frogHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(frogHooks).forEach((module) => {
      expect(frogHooks[module]).toBeDefined();
    });
  });
});
