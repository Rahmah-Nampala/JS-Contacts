// Creating a Contacts addressbook object 
let contacts = [];
const addContact = (event)=>{
	//event.preventDefault();
	//validateForm = ()=> {
	// var x = document.forms["myForm"]["fname"]["sname"].value;
	// if (x == "") {
		// alert("Name must be filled out");
		//return false;
	//}
	var fname = document.getElementById("firstName").value;
	sname = document.getElementById("secondName").value;
	pnumber = document.getElementById("phoneNumber").value;
	email = document.getElementById("email").value;
	address = document.getElementById("address").value;

	if (fname=="" || sname=="" || pnumber=="" || email=="" || address=="")
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
		return true;
	}
	contacts.push(fname);
	document.forms[0].reset();

	console.log(contacts);
	//let pre = document.querySelector("msg pre");
	//pre.textContent = "\n" + JSON.stringify(contacts, "/t", 2);
};


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

