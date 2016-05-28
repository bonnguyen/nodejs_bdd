'use strict';

var assert = require('assert');
var GroceryList = require("../../src/grocery-list")

module.exports = function() {

  var myList;
  var listItem = 'apple';

  this.Given(/^I have an empty grocery list$/, function(callback) {
    myList = GroceryList.create();
    callback();
  });

  this.When(/^I add an item to the list$/, function(callback) {
    myList.add(listItem);
    callback();
  });

  this.Then(/^The grocery list contains a single item$/, function(callback) {
    var expected = 1;
    var result = myList.getAll().length;

    assert.equal(result, expected, 'Grocery List should grow by one item.');
    callback();
  });
};