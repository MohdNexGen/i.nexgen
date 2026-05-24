import "./App.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {

const [message,setMessage] =
useState("");

function handleSubmit(e){

e.preventDefault();

const student_name =
e.target.student_name.value;

const student_email =
e.target.student_email.value;

const student_message =
e.target.student_message.value;


emailjs.send(

"nexgen_gmail",

"template_zvfw3qd",

{

student_name,
student_email,
student_message,

},

"H5xDt1e48EHqf_U4U"

)

.then(()=>{


return emailjs.send(

"nexgen_gmail",

"template_rbz2rme",

{

student_name,
student_email,
student_message,

},

"H5xDt1e48EHqf_U4U"

);


})

.then(()=>{

setMessage(

"✅ Registration sent successfully!"

);

e.target.reset();


setTimeout(()=>{

setMessage("");

},5000);


})

.catch((error)=>{

console.log(

"EmailJS Error:",

error

);

setMessage(

"❌ Failed to send registration."

);


setTimeout(()=>{

setMessage("");

},5000);


});


}



return(

<div className="hero">

<div className="container">

<h1>

NexGen Technology

</h1>


<h2>

Student Registration

</h2>


<p>

Register for Front-End and Back-End classes.

</p>



<form onSubmit={handleSubmit}>


<input

name="student_name"

placeholder="Student Name"

required

/>


<input

type="email"

name="student_email"

placeholder="Student Email"

required

/>


<textarea

name="student_message"

placeholder="Why do you want to join?"

required

/>


<button type="submit">

Register Now

</button>


</form>


<h3>

{message}

</h3>


</div>

</div>

);

}


export default App;