const name = document.getElementById('name');
const email = document.getElementById('email');
const experience = document.getElementById('experience');

const submitBtn = document.getElementById('submit');

const database = firebase.database();

const rootRef = database.ref('experiences');

function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "gurusthanqueries@gmail.com",
        Password: "Dadaguruji#9",
        To: 'gurusthanqueries@gmail.com',
        From: "gurusthanqueries@gmail.com",
        Subject: "New Experience",
        Body: 'There are new experiences. Please check them <a href="https://manavrox.github.io/BootstrapWebsite/verifyExperiences.html">here</a>.',
      })
        .then(function (message) {
          //alert("mail sent successfully")
        });
    }



submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const autoId = rootRef.push().key;
	rootRef.child(autoId).set({
		name: name.value,
		email: email.value,
		experience: experience.value,
		verified: false,
		priority: 10,
		key: autoId
	})
	.then(() => {
		window.alert("Thankyou. Your resposnse has been recorded. Your resposnse will be available on the website after verification and filering");
		sendEmail();
	}).catch(error => {
		console.error(error);
	});

	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('experience').value = '';
});




rootRef.orderByChild('priority').on('value', snapshot => {
	// console.log(snapshot.val());
		var experienceArr = [];
    snapshot.forEach(function(item) {
        var itemVal = item.val();
        experienceArr.push(itemVal);
    });
    var text = '<hr style="max-width: 100%;">';
    for (i=0; i < experienceArr.length; i++) {
    	if(experienceArr[i].verified){
    		console.log(experienceArr[i]);
    		text+= "Name: " + experienceArr[i].name + "<br>";
    		text+= "Email: " + experienceArr[i].email + "<br>";
    		text+= "Experience: " + experienceArr[i].experience + "<br>";
    		text+= '<hr style="max-width: 100%;">';
    		//console.log(text);
    	}
    }
    document.getElementById("demo").innerHTML = text;
});

