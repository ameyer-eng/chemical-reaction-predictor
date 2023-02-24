# Predict chemical reactions

## Type in chemicals to see the predicted reaction.  
Actual chemical names (iron(II) sulfate...barium nitrate...etc) must be used. I have not added support for bad spelling or common names such as baking soda or vinegar. 

Good reactions to try:

* Copper Sulfate Calcium Nitrate
* Barium Nitrate Potassium Sulfate
* Potassium Sulfate Sodium Sulfate

## Learning node and express 

This is a project I am working on to learn node.js and express with handlebars view engine. 

## How does it work?

When the user enters two chemical names and hits submit, a get request is sent with the query parameters as the chemical names. 
The program(on the server end) extracts the chemical names from the request.  Almost every ionic chemical compound can be written as a combination of a positive ion and a negative ion. Therefore, we can assume if the user properly entered the chemicals there will be two positive ions and two negative ions per chemical. 

EX:   Copper Sulfate and Calcium Nitrate   (The positive ions are Copper and Calcium.  The negative ions are Sulfate and Nitrate.)   

The ions will either swap positions or they wont.  

### Solubility as the main predictor

  After the program predicts the possible swap, it needs to know if it is likely to happen or not.  This program uses a built in solubility table to reference each possible output to.  If a one of the products is a precipitate...it is known(via chemistry magic) that the reaction is likely to proceed. 

After it references the solubility table it forms a string to be rendered by Handlebars and displayed to the user. 


