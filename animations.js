(function($) {
  'use strict';

  if (window.JSVEE === undefined) {
    return;
  }

  JSVEE.animations = {};

  /**
   * Returns the requested animation.
   *
   * @param id The unique id of the animation
   * @memberOf JSVEE.animations
   */
  JSVEE.animations.getAnimation = function(id) {

    if (JSVEE.animations.hasOwnProperty(id)) {
      return JSVEE.animations[id];
    }

    return null;

  };

  JSVEE.animations['hello'] = {
    'lines': ['var numbers = [2, 6, 24, 8];', '', 'var max = numbers[0];','for (var i = 0; i < numbers.length; i++) {', '  if (numbers[i] > max) {', '    max = numbers[i];', '  }', '}','','console.log("The biggest number is ", max);'],
    'settings': { 'code': 'left', 'heapHeight': 0, 'stackHeight': 150, 'width': 800 },
    'init': [['createFrame'], ['setLine', '1'], ["createOperator", "[ ]", "pr", "", " [ # ]"], ["createOperator", ">", "lr"], ["createOperator", "<", "lr"],
        ['createOperator', '.', 'p', '', '. # '],
        ['createOperator', '+', 'lr'],
        ['createClass', 'Array'],
        ['createProperty', 'length', 'length', '-1', 'Array'],
        ['createFunction', 'console.log', 'console.log(value1, value2)', '2', '-1']],
    'steps': [['goto', '@l0'], ['_label', 'l0'], ['createArray', '0', 'Array', '0', '', 'length'], ['addCollectionInitializer', '-1', '0', '4'],
        ['addValue', '2', '0/1/0', 'int'],
        ['addValue', '6', '0/2/0', 'int'],
        ['addValue', '24', '0/3/0', 'int'],
        ['addValue', '8', '0/4/0', 'int'],
        ['initializeCollection', '0'],
        ['assign', 'numbers'],
        ['setLine', '3'],
        ['addValueFromVariable', 'numbers', '0'],
        ['addOperator', '[ ]', '1'],
        ['addValue', '0', '0/1/0', 'int'],
        ['getValueAtIndex', '0'],
        ['assign', 'max'],
        ['_label', 'l1'],
        ['setLine', '4'],
        ['addValue', '0', 'int'],
        ['assign', 'i'],
        ['_label', 'l8'],
        ['addValueFromVariable', 'i', '0'],
        ['addOperator', '<', '1'],
        ['addValueFromVariable', 'numbers', '2'],
        ['addOperator', '.', '3'],
        ['addProperty', 'length', '3/0/1', 'Array'],
        ['evaluateOperator', '3'],
        ['evaluateOperator', '1'],
        ['_conditionalJump', '@l5', '@l10'],
        ['_label', 'l5'],
        ['setLine', '5'],
        ['addValueFromVariable', 'numbers', '0'],
        ['addOperator', '[ ]', '1'],
        ['addValueFromVariable', 'i', '0/1/0'],
        ['getValueAtIndex', '0'],
        ['addOperator', '>', '1'],
        ['addValueFromVariable', 'max', '2'],
        ['evaluateOperator', '1'],
        ['_conditionalJump', '@l6', '@l7'],
        ['_label', 'l7'],
        ['setLine', '4'],
        ['addValueFromVariable', 'i', '0'],
        ['addOperator', '+', '1'],
        ['addValue', '1', 'int'],
        ['evaluateOperator', '1'],
        ['assign', 'i'],
        ['goto', '@l8'],
        ['_label', 'l6'],
        ['setLine', '6'],
        ['addValueFromVariable', 'numbers', '0'],
        ['addOperator', '[ ]', '1'],
        ['addValueFromVariable', 'i', '0/1/0'],
        ['getValueAtIndex', '0'],
        ['assign', 'max'],
        ['goto', '@l7'],
        ['_label', 'l10'],
        ['setLine', '10'],
        ['addFunction', 'console.log', '0', '2'],
        ['addValue', 'The biggest number is', '0/0/0', 'str'],
        ['addValueFromVariable', 'max', '0/1/0'],
        ['evaluateFunction', '0']]

  };

  $(function() {
    // Create animations
    $('.jsvee-animation').each(function() {
      var id = $(this).attr('data-id');
      if (id) {
        new JSVEE.ui(id, this);
        window.kelmu.data['name'] = {"definitions":{"step1":[[{"text":"The array's length is 0 because it's empty","width":158,"height":53,"left":452,"top":5,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":52,"x1":449,"y2":56,"x2":380,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step7":[[{"text":"Now, length is 4","width":141,"height":32,"left":517,"top":17,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":45,"x1":512,"y2":60,"x2":399,"arrow":"red","width":2,"size":6,"soundOption":"always"}]]},"settings":{"animationLength":350,"undo":".jsvee-undo","step":".jsvee-step","redo":".jsvee-redo","begin":".jsvee-begin"}}
        window.kelmu.initAnnotations(this, 'name');
      }
    });
  });

}(jQuery));
