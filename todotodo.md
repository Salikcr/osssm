## Backend 
####User Authentication
Api Endpoints:- 
1. users/login =>  _post req_ - accept username, password and authenticate 
2. users/signup => _post req_ - accept username, password, emailId,(required) ; CF, CC, GFG, LC, other handles (can be null)
 
DB :- 
Users table to store user info (username, email, password, userId, handles(subfields- CF, CC, GFG, LC, other))

##Frontend 
Pages:- 
1. /login =>  
A form to take username and password, send post req to /login -> if no err: redirect to **/home**<br>
Add a link to signup page for new user

2. /signup => 
Form to take user detals. Form fields (username, password, emailId,(required) ; CF, CC, GFG, LC, other handles (optional)).<br>
Send a post req of validated form to /signup ->  if no err: redirect to **/home**

####Note
Since this is only a suggestive structure, if anyone changes anything please update here, it would be helpful to everyone else.
