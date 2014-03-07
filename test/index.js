var expect = require('chai').expect,
    wechatPlacekitten = require('..');

describe('wechat-placekitten', function() {
  it('should say hello', function(done) {
    expect(wechatPlacekitten()).to.equal('Hello, world');
    done();
  });
});
