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
    'lines': [
        'var user = {};',
        '',
        'user["name"] = "Imperator Furiosa";',
        'user["password"] = "th3gr33nplac3";',
        '',
        'console.log(user["name"]);',
        'console.log(user["password"]);',
        'console.log(user.name);',
        'console.log(user.password);',
    ],
    'settings': { 'code': 'left', 'heapHeight': 0, 'stackHeight': 150, 'width': 1000 },
    'init': [
        ['createFrame'],
        ['setLine', '1'],
        ["createOperator", "[ ]", "pr", "", " [ # ]"],
        ["createOperator", "[ ] =", "pr", "", "[ # ] = #"],
        // ["createOperator", ">", "lr"], ["createOperator", "<", "lr"],
        ['createOperator', '.', 'pr', '', '. # '],
        // ['createOperator', '+', 'lr'],
        // ['createClass', 'Object'],
        // ['createProperty', 'length', 'length', '-1', 'Array'],
        ['createFunction', 'console.log', 'console.log(value1)', '1', '-1']
    ],
    'steps': [
        ['goto', '@l0'],
        ['_label', 'l0'],
        ['createInstance', 'object'],
        ['addReference', '-1', '0'],
        ['assign', 'user'],
        ['setLine', '3'],
        ['addValueFromVariable', 'user', '0'],
        ['addOperator', '[ ] =', '1'],
        ['addValue', 'name', '0/1/0', 'str'],
        ['addValue', 'Imperator Furiosa', '0/2/0', 'str'],
        ['setValueByKey', '0'],
        ['setLine', '4'],
        ['addValueFromVariable', 'user', '0'],
        ['addOperator', '[ ] =', '1'],
        ['addValue', 'password', '0/1/0', 'str'],
        ['addValue', 'th3gr33nplac3', '0/2/0', 'str'],
        ['setValueByKey', '0'],
        ['setLine', '6'],
        ['addFunction', 'console.log', '0', '1'],
        ['addValueFromVariable', 'user', '0/0/0'],
        ['addOperator', '[ ]', '0/0/1'],
        ['addValue', 'name', '0/0/0/1/0', 'str'],
        ['getValueByKey', '0/0/0'],
        ['evaluateFunction', '0'],
        ['setLine', '7'],
        ['addFunction', 'console.log', '0', '1'],
        ['addValueFromVariable', 'user', '0/0/0'],
        ['addOperator', '[ ]', '0/0/1'],
        ['addValue', 'password', '0/0/0/1/0', 'str'],
        ['getValueByKey', '0/0/0'],
        ['evaluateFunction', '0'],
        ['setLine', '8'],
        ['addFunction', 'console.log', '0', '1'],
        ['addValueFromVariable', 'user', '0/0/0'],
        ['addOperator', '.', '0/0/1'],
        ['addValue', 'name', '0/0/0/1/0', 'str'],
        ['getValueByKey', '0/0/0'],
        ['evaluateFunction', '0'],
        ['setLine', '9'],
        ['addFunction', 'console.log', '0', '1'],
        ['addValueFromVariable', 'user', '0/0/0'],
        ['addOperator', '.', '0/0/1'],
        ['addValue', 'password', '0/0/0/1/0', 'str'],
        ['getValueByKey', '0/0/0'],
        ['evaluateFunction', '0']
     ]

  };

  $(function() {
     //Create animations
    $('.jsvee-animation').each(function() {
      var id = $(this).attr('data-id');
      if (id) {
        new JSVEE.ui(id, this);
        //window.kelmu.data['name'] = {"definitions":{"step1":[[{"text":"The array's length is 0 because it's empty","width":158,"height":53,"left":452,"top":5,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":52,"x1":449,"y2":56,"x2":380,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step7":[[{"text":"Now, length is 4","width":141,"height":32,"left":517,"top":17,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":45,"x1":512,"y2":60,"x2":399,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step15":[[{"text":"As a first step to the for loop, JS initializes the variable we will loop over (i)","width":255,"height":95,"left":28,"top":177,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":177,"x1":147,"y2":71,"x2":116,"arrow":"red","width":2,"size":6,"soundOption":"always"},{"y1":66,"x1":81,"y2":67,"x2":131,"line":"red","width":2,"soundOption":"always"}]],"step17":[[{"text":"The variable i is now initialized (with value 0)","width":260,"height":81,"left":2,"top":193,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":225,"x1":264,"y2":176,"x2":455,"arrow":"red","width":2,"size":6,"soundOption":"always"}],[{"text":"Next, JS evaluates the second part of the for loop: it checks whether to enter (or continue) the loop based on the given condition","width":297,"height":106,"left":8,"top":173,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":68,"x1":146,"y2":70,"x2":255,"line":"red","width":2,"soundOption":"always"},{"y1":180,"x1":162,"y2":81,"x2":211,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step24":[[{"text":"And now, because the condition evaluated to true, JS will enter the loop","width":263,"height":73,"left":23,"top":185,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":230,"x1":293,"y2":225,"x2":353,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step33":[[{"text":"After having evaluated all the code in the for loop block, JS now evaluates the final incrementing instruction","width":301,"height":91,"left":6,"top":196,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"},{"y1":70,"x1":265,"y2":70,"x2":288,"line":"red","width":2,"soundOption":"always"},{"y1":195,"x1":189,"y2":82,"x2":274,"arrow":"red","width":2,"size":6,"soundOption":"always"}]],"step38":[[{"text":"... and next the whole process repeats","width":246,"height":78,"left":34,"top":189,"size":"20","rotate":"0","color":"red","html":true,"background":"transparent","font":"Handlee, sans-serif","soundOption":"always"}]]},"settings":{"animationLength":350,"undo":".jsvee-undo","step":".jsvee-step","redo":".jsvee-redo","begin":".jsvee-begin"}}
        //window.kelmu.initAnnotations(this, 'name');
      }
    });
  });

}(jQuery));
