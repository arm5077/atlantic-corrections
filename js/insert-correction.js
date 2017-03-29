var content = CKEDITOR.instances.id_content.document.getBody().$

if( $(content).find('.correction-div').length == 0 )
  $('<div>').appendTo(content).addClass('correction-div').html("<hr />")

var number_of_corrections = $(content).find('.correction-div p').length

// Generate unique ID
var id = new Date().getTime() + Math.round(Math.random() * 1000);

var asterisks = '';
for( i=0; i<=number_of_corrections; i++){ asterisks += '*' }


// Add asterick
CKEDITOR.instances.id_content.insertHtml('<a name="' + id + 'text"></a><a href="#' + id + 'correction">' + asterisks + '</a>')

// Add new correction at the bottom
$(content).find('.correction-div').append('<p><em><a name="' + id + 'correction"></a><a href="#' + id + 'text">' + asterisks + '</a> We regret the error.</em></p>')
  
