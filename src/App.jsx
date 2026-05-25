import "./App.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {

const [page,setPage] =
useState("home");

const [message,setMessage] =
useState("");


function handleSubmit(e){

e.preventDefault();

let name =
e.target.name.value;

let email =
e.target.email.value;

let phone =
e.target.phone.value;

let course =
e.target.course.value;

let studentMessage =
e.target.message.value;


emailjs.send(

"nexgen_gmail",

"template_zvfw3qd",

{

student_name:
name,

student_email:
email,

student_message:
`
Phone:
${phone}

Course:
${course}

Message:
${studentMessage}
`

},

"H5xDt1e48EHqf_U4U"

)

.then(()=>{

setMessage(

"Application sent successfully."

);

e.target.reset();

})

.catch(()=>{

setMessage(

"Failed to send."

);

});

}



return(

<div className="hero">

<nav className="navbar">

<h1 className="logo">

NexGen Technology

</h1>



<div className="nav-links">

<button
onClick={()=>
setPage("home")
}>

Home

</button>



<button
onClick={()=>
setPage("courses")
}>

Courses

</button>



<button
onClick={()=>
setPage("contact")
}>

Contact

</button>


</div>

</nav>



{

page==="home" && (

<div className="hero-content">

<h1 className="title">

Learn Coding.
Build Projects.
Get International Opportunities.

</h1>



<p className="description">

NexGen teaches HTML,
CSS,
JavaScript,
React,
Node,
Express,
Git

</p>



<button

className="btn"

onClick={()=>
setPage("register")
}>

Apply Now

</button>



</div>

)

}




{

page==="courses" && (

<div className="page-box">

<h2>

Courses

</h2>


<ul>

<li>
Frontend Development
</li>

<li>
Backend Development
</li>

<li>
React Projects
</li>

<li>
Node + Express
</li>

<li>
Git & GitHub
</li>

<li>
Portfolio Building
</li>

</ul>


</div>

)

}




{

page==="register" && (

<div className="page-box">

<h2>

Student Registration

</h2>



<form

className="form"

onSubmit={
handleSubmit
}

>

<input

name="name"

placeholder=
"Student Name"

required

/>



<input

name="email"

type="email"

placeholder=
"Email Address"

required

/>



<input

name="phone"

placeholder=
"Phone Number"

/>



<select

name="course">

<option>

Frontend Development

</option>


<option>

Backend Development

</option>


<option>

React Projects

</option>


<option>

Node + Express

</option>


</select>



<textarea

name="message"

placeholder=
"Message">

</textarea>



<button
type="submit">

Submit Application

</button>

</form>



<p className="success">

{message}

</p>



</div>

)

}




{

page==="contact" && (

<div className="page-box">

<h2>

Contact NexGen

</h2>


<p>

Email:
i.nexgen@gmail.com

</p>


<p>

Phone:
Add later

</p>


</div>

)

}



</div>

);

}


export default App;