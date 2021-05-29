const name = document.getElementById('name');
const email = document.getElementById('email');
const experience = document.getElementById('experience');

const submitBtn = document.getElementById('submit');

const database = firebase.database();

const rootRef = database.ref('experiences');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const autoId = rootRef.push().key;
	rootRef.child(autoId).set({
		name: name.value,
		email: email.value,
		experience: experience.value,
		verified: false
	})
	.then(() => {
		window.alert("Thankyou. Your resposnse has been recorded. Your resposnse will be available on the website after verification and filering");
	}).catch(error => {
		console.error(error);
	});

	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('experience').value = '';
});