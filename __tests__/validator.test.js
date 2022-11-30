'use strict';

const validator = require('../src/middleware/validator.js')


describe('Validator middleware', () => {
  let req = { query: { name: 'Trace' } };
  let res = {};
  let next = jest.fn();

  it('validates query as expected', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  it('fails appropriatesly if no query name property', () => {
    let req = { query: { notName: 'Trace' } };
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Query Name Require');
  });

});
