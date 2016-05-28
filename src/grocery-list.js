'use strict';

var groceryList = {
  add: function(item) {
    this.list.push(item);
  },
  getAll: function() {
    return this.list;
  }
};

module.exports = {
  create: function() {
    return Object.create(groceryList, {
      'list': {
        value: [],
        writable: false,
        enumerable: true  
      }
    });
  }
};