'use strict';

const logger = require('../src/middleware/logger');


describe('Logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // mocking the next method

  beforeEach(() => {
    //attach a spy to console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    //Remove spy
    consoleSpy.mockRestore();
  });

  it('adds a timestamp', () => {
    logger(req, res, next);
    expect(req.timestamp).toBeTruthy();
    expect(req.timestamp).toBeInstanceOf(Date);
    expect(typeof(req.timestamp)).toEqual('object');
  });

  it('logs as expected', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled('logged at:', req.timestamp);
  });
});
