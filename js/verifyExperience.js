const username = document.getElementById('username');
const password = document.getElementById('password');

const loginBtn = document.getElementById('login');

const database = firebase.database();

const rootRef = database.ref('experiences');

const loginRef = database.ref('login');



loginBtn.addEventListener('click', (e) => {
	e.preventDefault();
	loginRef.once('value', snapshot => {
		var user = username.value;
		var pass = password.value;
		if(user==snapshot.val().username && pass == snapshot.val().password)
		{
			console.log("admitted");
			document.getElementById('username').value = "";
			document.getElementById('password').value = "";
			rootRef.orderByChild('priority').on('value', snapshot1 => {
				//console.log(snapshot1.val());
				var experienceArr = [];
			    snapshot1.forEach(function(item) {
			        var itemVal = item.val();
			        experienceArr.push(itemVal);
			    });
			    var text = '<hr style="max-width: 100%;">';
			    var count=0;
			    
			    for (i=0; i < experienceArr.length; i++) {
			    	if(!experienceArr[i].verified){
			    		console.log(experienceArr[i]);
			    		count++;
			    		text+= "Name: " + '<input type="text" id="'+experienceArr[i].key+'name" value="'+experienceArr[i].name + '"><br>';
			    		text+= "Email: " + '<input type="text" id="'+experienceArr[i].key+'email" value="'+experienceArr[i].email + '"><br>';
			    		text+= "Experience: " + '<textarea rows="5" id="'+experienceArr[i].key+'experience">'+experienceArr[i].experience + '</textarea><br>';
			    		text+= "Priority: " + '<input type="number" id="'+experienceArr[i].key+'priority" value="'+experienceArr[i].priority + '"><br>';
			    		text+= '<input type="submit" onclick="acceptclick(this.id,)" value="accept" id="'+experienceArr[i].key+'" name="accept">';
			    		text+= '<input type="submit" onclick="rejectclick(this.id)" value="reject" id="'+experienceArr[i].key+'" name="reject">';
			    		text+= '<hr style="max-width: 100%;">';
			    		//console.log(text);
					}
			    }
			    if(count==0)
				{
					text = "There are no experiences to review";
					// console.log(text);
				}
		    	document.getElementById("demo").innerHTML = text;
			});
		}
		else {
			console.log('login failed');
		}
    	//console.log(snapshot.val().username);
	});
});



function acceptclick(key) {
	// console.log(key);
	console.log(document.getElementById(key+'name').value);
	const newData = {
		name: document.getElementById(key+'name').value,
		email: document.getElementById(key+'email').value,
		experience: document.getElementById(key+'experience').value,
		priority: parseInt(document.getElementById(key+'priority').value),
		verified: true
	}
	rootRef.child(key).update(newData);
}

function rejectclick(key) {
	// console.log(key);
	rootRef.child(key).remove();
}
