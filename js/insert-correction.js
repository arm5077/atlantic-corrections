var content = CKEDITOR.instances.id_content.document.getBody().$

if( $(content).find('.correction-div').length == 0 )
  $('<div>').appendTo(content).addClass('correction-div').html("<hr />")

// Generate unique ID
var id = new Date().getTime() + Math.round(Math.random() * 1000);

// Add asterick
CKEDITOR.instances.id_content.insertHtml('<a name="' + id + 'text"></a><a href="#' + id + 'correction">*</a>')

// Add new correction at the bottom
$(content).find('.correction-div').append('<p><em><a name="' + id + 'correction"></a><a href="#' + id + 'text">*</a> We regret the error.</em></p>')
  
