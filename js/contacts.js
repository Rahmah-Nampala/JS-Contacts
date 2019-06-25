// Creating a Contacts addressbook object 
var allContacts = [];
//var Submit = (firstName, secondName, phoneNumber, email, addressArray)=>{
//	this.firstName = firstName;
//	this.secondName = secondName;
//	this.phoneNumber = phoneNumber;
//	this.address = address;
//	//{"str": address_array[0], "city": address_array[1], "country": address_array[2]}
//}
	//event.preventDefault();
	var validateForm = ()=> {
		var fname = document.getElementById("firstName").value;
		var sname = document.getElementById("secondName").value;
		var pnumber = document.getElementById("phoneNumber").value;
		var email = document.getElementById("email").value;
		var address = document.getElementById("address").value;

		if (firstName=="" || secondName=="" || phoneNumber=="" || email=="" || address=="")
		{
		//alert("Required");
		document.getElementById("epage").innerHTML = "All Fields Required";
			return false;
		} 
		if (fname.length<3){
		document.getElementById("epage").innerHTML = "First Name must be atleast 3 characters";
			return false;
		}
		if (sname.length<3){
		document.getElementById("epage").innerHTML = "Second Name must be atleast 3 characters";
			return false;
		}
		else {
			var contact1 = [fname, sname, pnumber, email, address];
			allContacts.push(contact1);
			console.log(allContacts[0]);
		}
	};
	
	// to loop the elements in an array
var searchContacts = ()=>{
	var searchPhrase = document.getElementById("searchPhrase").value;
	//document.getElementById("result").innerHTML = "";
	// var searchPhrase = document.querySelector('[name="searchPhrase"]');
	for (var y = 0; y <(allContacts.lenght); y++){
	var contact1 = allContacts[y];
	if (conact1[0].includes(searchPhrase)){
	//fname = allContacts.fname;
	//if (fname.includes(searchPhrase)) {
		console.log(contact1,);
		document.getElementById("result").innerHTML = contact1[0];
		} //else {console.log("not found")}
	}
};
	
	

	
	//document.forms[0].reset();

	//console.log(contacts);
	//let pre = document.querySelector("msg pre");
	//pre.textContent = "\n" + JSON.stringify(contacts, "/t", 2);



// create an array
//var myContacts = ["contact1", "contact2", "contact3"]; 

// add elements to the array
//function addElement() { // get the input value
	//var contact = document.getElementById("contact").value; // add the value to the array
	//myContacts.push(contact);
	//}
//document.getElementById("myForm").addEventListener("input" (event) => {
//	console.log(event.target.value);
//})
// to loop the elements in an array
// var searchContacts = ()=>{
	//var searchPhrase = document.querySelector('[name="searchPhrase"]')
	//for (i = 0; i <(contact.lenght); i++){
	// firstname = contact[i];
	//firstname = contact.firstname;
	//if (firstname.includes(searchPhrase)) {
		//console.log(firstname, "found!")
		//} else {console.log("not found")}}
		//}