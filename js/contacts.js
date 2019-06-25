// Creating a Contacts addressbook object 
var allContacts = [];
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
			//console.log(allContacts[0]);
		}
	};
	
	// to loop the elements in an array
var searchContacts = ()=>{
	var searchPhrase = document.getElementById("searchPhrase").value;
	for (var y = 0; y <(allContacts.lenght); y++){
	var contact1 = allContacts[y];
	if (conact1[0].includes(searchPhrase)){
		console.log(contact1,);
		document.getElementById("result").innerHTML = contact1[0];
		} //else {console.log("not found")}
	}
};