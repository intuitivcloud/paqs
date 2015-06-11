/* global describe, it */
'use strict';

var expect = require('expect.js'),
    paqs = require('./');

describe('paqs', function () {

  it('should parse query string', function () {
    expect(paqs('foo=bar')).to.be.eql({foo: 'bar'});
  });

  it('should parse multiple query string', function () {
    expect(paqs('foo=bar&key=val')).to.be.eql({foo: 'bar', key: 'val'});
  });

  it('should parse query string without a value', function () {
    expect(paqs('foo')).to.be.eql({foo: undefined});
  });

  it('should parse multiple query string without values', function () {
    expect(paqs('foo&key')).to.be.eql({foo: undefined, key: undefined});
  });

  it('should parse multiple query string without some values', function () {
    expect(paqs('foo=bar&key')).to.be.eql({foo: 'bar', key: undefined});
  });

  it('should parse query string starting with \'?\'', function () {
    expect(paqs('?foo=bar')).to.be.eql({foo: 'bar'});
  });

  it('should parse query string starting with \'#\'', function () {
    expect(paqs('#foo=bar')).to.be.eql({foo: 'bar'});
  });

  it('should parse query string starting with \'&\'', function () {
    expect(paqs('&foo=bar')).to.be.eql({foo: 'bar'});
  });

  it('should return an empty object if query string cannot be found', function () {
    expect(paqs('?')).to.be.eql({});
    expect(paqs('&')).to.be.eql({});
    expect(paqs('#')).to.be.eql({});
    expect(paqs(' ')).to.be.eql({});
  });

  it('should handle \'+\' correctly', function () {
    expect(paqs('foo+faz=bar+baz++')).to.be.eql({'foo faz': 'bar baz  '});
  });

  it('should handle multiple values for the same key', function () {
    expect(paqs('foo=bar&foo=baz')).to.be.eql({foo: ['bar', 'baz']});
  });

  it('should parse query string which include encoded \'=\' symbols', function () {
    expect(paqs('?param=http%3A%2F%2Fsomeurl%3Fid%3D2837')).to.be.eql({param: 'http://someurl?id=2837'});
  });

});
