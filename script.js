//your JS code here. If required.
document.getElementById("submit").addEventListener("click",()=>{
	let firstN=document.getElementById("fname").value
	let lastN=document.getElementById("lname").value
	let PhoneN=document.getElementById("phone").value
	let emailid=document.getElementById("email").value

	alert(`First Name: ${firstN} Last Name: ${lastN} Phone Number: ${PhoneN} Email ID: ${emailid}`)
})