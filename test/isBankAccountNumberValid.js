'use strict';
var expect = require('chai').expect;
var validator = require('../dist/index.js');

describe('if all the fields are undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountNumberValid();
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank id is undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountNumberValid(undefined, validator.Bank.anz.bankId, "01-0902-68389-00");
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank id does not exist', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountNumberValid(9999, "01-0902-68389-00");
            
        expect(isValid).to.equal(false);
    });    
});

describe('if the bank number is undefined', () => {
    it('then the account is invalid', () => {
        
        var isValid = validator.isBankAccountNumberValid(validator.Bank.anz.bankId,  "0902-68389-00");
            
        expect(isValid).to.equal(false);
    });    
});


describe('IRD example 1 Algorithm A', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountNumberValid(validator.Bank.anz.bankId,  "01-0902-68389-00");
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 2 Algorithm D', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountNumberValid(validator.Bank.Bnz.bankId,"08-6523-1954512-01");
            
        expect(isValid).to.equal(true);
    });    
});

describe('IRD example 3 Algorithm G', () => {
    it('then the account is valid', () => {
        
        var isValid = validator.isBankAccountNumberValid(validator.Bank.Other.bankId,  "26-2600-320871-32");
            
        expect(isValid).to.equal(true);
    });    
});
