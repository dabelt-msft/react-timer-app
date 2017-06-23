var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Should exist', () => {
    expect(Countdown).toExist()
  });
  describe('handleSetCountdown', () => {
    //Done is passed so that Mocha can handle async calls. Is called in setTimeOut
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10)
      expect(countdown.state.countDownStatus).toBe('started')

      setTimeOut(() => {
        expect(countdown.state.count).toBe(9)
        done();
      }, 1001)
    });
    it('should equal zero when done', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeOut(() => {
        expect(countdown.state.count).toBe(0)
        done();
      }, 3001)
    })
  })

});
