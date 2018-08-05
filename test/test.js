'use strict';
var expect = require('chai').expect;
var validator = require('../dist/index.js');

describe('if all the fields are undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountValid();
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank id is undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountValid(undefined, validator.Bank.anz.bankId, 1, 902, 68389, 0);
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank id does not exist', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountValid(9999, 1, 902, 68389, 0);
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank number is undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountValid(validator.Bank.anz.bankId,  undefined, 902, 68389, 0);
            
        expect(isValid).to.equal(false);
    });    
});


describe('IRD example 1 Algorithm A', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountValid(validator.Bank.anz.bankId,  1, 902, 68389, 0);
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 2 Algorithm D', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountValid(validator.Bank.Bnz.bankId,  8, 6523, 1954512, 1);
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 3 Algorithm G', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountValid(validator.Bank.Other.bankId,  26, 2600, 320871, 32);
            
        expect(isValid).to.equal(true);
    });    
});
