Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');
      console.log("in " + value);
      console.log(model.isCompleted);
    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      console.log("saved");
      return value;
    }
  }.property('model.isCompleted')
});
