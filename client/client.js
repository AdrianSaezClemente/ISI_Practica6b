Template.messages.messages = function(){
	console.log("niggers!")
	return Messages.find({},{sort:{time:-1}});  //En orden descendente
}

Template.input.events = {
	'keydown input#message': function(event){		//tecla keydown con un input de id = message
		if (event.which == 13){ 			//si es la tecla enter
			var name='Anonymous';
			var message=$('#message');
			if (Meteor.user()){			//si esta autenticado
				var name = Meteor.user().username;
			}	
			else{
				var name = 'Anonymos';
			}
			if (message.val()!==''){		//si le han dado enter y no hay ningun texto.
				Messages.insert({name:name,message:message.val(),time:Date.now()})			
			} 	
			message.val(''); 			//ponemos la caja vacía.		
		}
								
	} 
}

Accounts.ui.config({
	passwordSignupFields:'USERNAME_AND_OPTIONAL_EMAIL'
});
