app.views.list = Backbone.View.extend({
  mode : null,
  events : {},
  initialize : function(){
    var handler = _bind(this.render, this);
    this.model.bind('change', handler);
    this.model.bind('add', handler);
    this.model.bind('remove', handler);
  },
  render : function() {
    var html = '<ul class="list">',
        self = this;
    this.model.each(function(todo, index){
      if(self.mode === 'archive' ? todo.get('archived') === true : todo.get('archived') === false){
        var template = _.template($('tpl-list-item').html());
        html += template({
          title : todo.get('title'),
          index : index,
          archiveLink : self.mode === 'archive' ? 'unarchive' : 'archive',
          done : todo.get('done') ? 'yes' : 'no',
          doneChecked : todo.get('done') ? 'checked ==="checked"' : ""
        });
      }
    });
  },
  priorityUp : function(e) {},
  priorityDown : function() {},
  archive : function(e) {},
  changeStatus : function(e) {},
  setMode : function(mode){
    this.mode = mode;
    return this;
  }
});