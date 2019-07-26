Java Script NOTES

Tool to check our javascript

-console.log("insert variable here")
Note: user never sees this. just a developer's tool.

VARIABLE: defining an idea or quantity for the computer to remember.
Camelcase: first letter of first word is lowercase, other words are uppercase
var harryStyles = "perfect human being";
Data Types:
1) "STRING": Must be put into quotes. Represents text.


2) NUMBERS: Do NOT have quotes. represents a quantity or amount

  var harryNumber = 1;

  a) < --> greater than or less than. Ex: 8>5
  b) +, -, *, / --> addition, subtraction, multiplication, division
  c) === --> equal to
  d) <= or >= --> less than equal to or greater than equal to
  e) % --> remainder

  HOW TO USE NUMBER AND STRING VARIABLES
   var dogName = "Cricket";
   var dogLeash = 1;
   var poopBags = 2;
   var waterBottles = 1;
   var numItems = dogLeash + poopBags + waterBottles;

   SUMMARY:  1) broke down our problem into parts
            2) defined variables
            3) used our variables


  INTERPOLATION: integrating numerical values into string using variables. MUST USE BACKTICKS.
  console.log((`Take ${dogName} on a walk! Don't forget to bring ${numItems} items!` ))

ARRAYS: a list of strings and/or NUMBERS represented using square brackets. First number assigned an index number of 0.
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

  console.log(arraySports[0]); -->"soccer"

  arraySports.length --> .length tells computer to print the number of items in an array.
  arraySports.push("gymnastics" )--> adds an item to the end of an array
  arraySports.pop() --> removes the last item of the array.


jQuery (element Accessors): library of shortcuts we download onto our html page. the link goes on second to last line of our body right above the javascript link.

<script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>


EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (like a button) for a click. On the click, perform a function (action).

Define specific area on HTML page using jQuery ($)
var dareButton = $('.db');

area        listen for    action
dareButton.on('click', showDare);

another example:
dareButton.on('hover', showDare)


Adding ELEMENTS TO THE webpage
1) Think of user experience. What do we want the user to see or do?
2) Create an area or <div> in my html page to add the elements
3) Use jQuery -- $('nameofdiv') to tell computer where to look in my html files
4) Create a function (action) to add the items to the html <div>
      a) .text --> only adds the words without any html formatting. CSS does NOT apply
      b) .append --> adds html elements to html file. MUST use BACKTICKS

      var truthContainer  = $('.truthcontainer');
      function showTruth(){

      truthContainer.text(arrayTruth[2]);
      //truthContainer.append(`<img src="">`)
      };



CONDITIONALS

1. Define the condition (what do you want to be true?)
2. Determine the action iof the user meets the CONDITIONALS
3. Determine the action if the user does NOT meet the condition
4. conditionals exist in functions


if(condition){
  action if user meets the condition
}
else{
  action if user does not meet the condition
}


if (userNumber > 7){

container.append(`<img src = `)

}

else{

  container.append(`<p> sorry bro</p>`);
}
