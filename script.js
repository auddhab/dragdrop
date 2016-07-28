//$(function () {
var addedusers =[];
$(init);
function init (){
	var users = [
		{ 'id' : 0,'Name': 'RAM'},
		{ 'id' : 1 ,'Name' : 'Hari'},
		{ 'id' : 2 ,'Name' : 'Shyam'},
		{ 'id' : 3 ,'Name' : 'Gopal'},
		{ 'id' : 4 ,'Name' : 'Mohan'},
		{ 'id' : 5 ,'Name' : 'Krishna'},
		{ 'id' : 5 ,'Name' : 'Narayan'},
		{ 'id' : 6 ,'Name' : 'Bharat'}
	]
	$("#users").html('');
	$("dropedusers").html('');
	//console.log(users);
	

	// $.ajax({

	// 	    url: 'http://127.0.0.1:4000/api/outlet',
	// 	    //data: myData,
	// 	    type: 'GET',
	// 	    crossDomain: true,
	// 	    dataType: 'jsonp',
	// 	    contentType: "application/json; charset=utf-8",
	// 	    success: function(data) { 
	// 	    	console.log(data);
	// 	    	alert("Success"); 
	// 	    },
	// 	    error: function() { alert('Failed!'); }
		    
	// 	});
	users.forEach(function(obj){
		$('<div>' + obj.Name + '</div>').data('number' , obj.id ).attr('id', 'user' + obj.ID).appendTo('#users')
		.draggable({
			containment: 'body',
			stack: "#users div",
			cursor: 'move',
			revert: 'invalid',
			helper: 'clone',
			greedy: true,
			
			drag : function(event,ui){
				console.log("dropped");
				
			}
		});
	});

	function handleDropEvent( event, ui ) {
		console.log("i am dropped");
	    ui.helper.css('z-index', "-1");
	};
}
//});