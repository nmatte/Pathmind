var TransitionSet = require('./transition_set');

var TransitionFunction = function () {
  this.transitions = {};
};

TransitionFunction.prototype.addTransition =
  function (fromState, fromInput, fromStack, toState, stackResult) {
    if(!this.transitions[fromState.name]) {
      this.transitions[fromState.name] = [];
    }

    var tSet = this.find(fromState, fromInput, fromStack);

    if (!tSet) {
      tSet = new TransitionSet(fromState, fromInput, fromStack);
      this.transitions[fromState.name].push(tSet);
    }

    tSet.addTransitionTo(toState, stackResult);
};

// TransitionFunction.prototype.match = function (fromState, input, stackTop) {
//
// };

TransitionFunction.prototype.get = function (fromState, fromInput, fromStack) {
  var tSet = this.find(fromState, fromInput, fromStack);

  if (tSet) {
    return tSet.results;
  }
};

TransitionFunction.prototype.find = function (fromState, fromInput, fromStack) {
  var tSets = this.transitions[fromState];

  if (tSets) {
    return tSets.find(function (set) {
      return set.matches(fromState, fromInput, fromStack);
    });
  }
};

TransitionFunction.prototype.allSets = function () {
  var keys = Object.keys(this.transitions);
  var results = [];
  for (var i = 0; i < keys.length; i++) {
    results.push(this.transitions[keys[i]]);
  }

  return results;
};

TransitionFunction.prototype.splitAll = function () {
  var results = [];

  var allSets = this.allSets();

  for (var i = 0; i < allSets.length; i++) {
    results.concat(allSets[i].split());
  }

  return results;
};

TransitionFunction.prototype.getAggregateTransitions = function () {
  
};

module.exports = TransitionFunction;
