'use strict';
var expect = require('chai').expect;
var validator = require('../dist/index.js');

describe('if all the fields are undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isValid();
            
        expect(isValid).to.equal(false);
    });    
});

describe('IRD example 1 Algorithm A', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isValid("01-0902-68389-00");
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 2 Algorithm D', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isValid("08-6523-1954512-01");
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 3 Algorithm G', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isValid("26-2600-320871-32");
            
        expect(isValid).to.equal(true);
    });    
});
