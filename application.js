$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('.add').on('click', addTodos);
    $('.todo_list').on('click', '.delete', removeTodos);
    $('.todo_list').on('click', '.complete', completeTodo)
  }

  function addTodos () {
    var todo = $('.todo').val()  
    $(".todo_list").append(buildTodo(todo));
    clearInput();
  }

  function removeTodos (){  
    $(this).closest('div').remove();
  }

  function completeTodo () {
    $(this).closest('li').text("Completed")
    $(this).remove();
  }

  function clearInput() {
    $('.todo').val('');
    $('.todo').focus();
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
