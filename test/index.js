var expect = require('chai').expect,
    wechatPlacekitten = require('..');

describe('wechat-placekitten', function() {
  it('should create a handler', function(done) {
    expect(wechatPlacekitten()).to.be.a('function');
    done();
  });
});
