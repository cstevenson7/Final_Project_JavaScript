 Works but no hyperlink:
 
infowindow.setContent("<p>" + locations[i][0] + "<br />" + "Forecast: " + locations[i][3]+ "</p" );
infowindow.setContent("<p>" + locations[i][0] + "<br />" +"Forecast: " + "<a href=" + locations[i][3] + target="_blank""</a></p");


var infoWindow = new google.maps.InfoWindow({
            content: '<div style="font-size: 8pt;">' + '<b>' + siteName +
			'</b>' + '</br>' + status + '</br><a href="' + siteLink + '">Load Site</a>'
        });
                                                 
					<p>" + locations[i][0] + "<br />" +"Forecast: " + "<a href=" + locations[i][3] + target="_blank""</a></p"
					
//************THIS F STRING WORKED  - Joels idea


                            infowindow.setContent(`<p> ${locations[i][0]} <br> Forcast: <a 
							
							href="${locations[i][3]}" target="_blank">${locations[i][3]}</a></p>`);
							
							
							
							
So to recap, synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.

					
							
							
							
							
https://stackoverflow.com/questions/24655851/javascript-function-wait-until-another-function-to-finish							
							
Viewed 119k times

Report this ad

12


14
I have two javascript functions that are called from android. After long debug sessions finally I realized that the problem is arising from the fact that second function is getting called before first one is finished. I already searched the examples with deferred etc, but they all depends on function calls within another one.

function FunctInit(someVarible){ //someVariable is sent from android, cannot call again from getResult
//init and fill screen
}

function getResult(){ //also getResult need to be called from android via button
//return some variables
}
How can I force getResult to wait FuncInit? Is there a way to achieve this via Javascript?

javascript jquery callback jquery-deferred
share  improve this question  follow 
asked Jul 9 '14 at 14:03

tugce
61122 gold badges1111 silver badges2727 bronze badges
Could you set a isInitialized flag and sleep in getResult if it hasn't been flipped yet? – Andrew Walters Jul 9 '14 at 14:05
1
Does FunctInit perform some asynchronous action which you also wish to wait for the completion of? – Paul S. Jul 9 '14 at 14:06
@PaulS. yes it also calls two functions needs to be finished before getResult – tugce Jul 9 '14 at 14:08
1
You may want to read stuff about "callbacks". Check this out for example: recurial.com/programming/… It's tricky to understand but powerful, and certainly a good solution for your problem. – Lord Grosse Jeanine Jul 9 '14 at 14:11 
I hope you mark down answer so further i dont want to post there see here for stackoverflow.com/questions/12116505/… – Anto King Jul 9 '14 at 14:11
show 1 more comment
3 Answers
Active
Oldest
Votes

41

In my opinion, deferreds/promises (as you have mentionned) is the way to go, rather than using timeouts.

Here is an example I have just written to demonstrate how you could do it using deferreds/promises.

Take some time to play around with deferreds. Once you really understand them, it becomes very easy to perform asynchronous tasks.

Hope this helps!

$(function(){
    function1().done(function(){
        // function1 is done, we can now call function2
        console.log('function1 is done!');

        function2().done(function(){
            //function2 is done
            console.log('function2 is done!');
        });
    });
});

function function1(){
    var dfrd1 = $.Deferred();
    var dfrd2= $.Deferred();

    setTimeout(function(){
        // doing async stuff
        console.log('task 1 in function1 is done!');
        dfrd1.resolve();
    }, 1000);

    setTimeout(function(){
        // doing more async stuff
        console.log('task 2 in function1 is done!');
        dfrd2.resolve();
    }, 750);

    return $.when(dfrd1, dfrd2).done(function(){
        console.log('both tasks in function1 are done');
        // Both asyncs tasks are done
    }).promise();
}

function function2(){
    var dfrd1 = $.Deferred();
    setTimeout(function(){
        // doing async stuff
        console.log('task 1 in function2 is done!');
        dfrd1.resolve();
    }, 2000);
    return dfrd1.promise();
}
share  improve this answer  follow 
edited Jul 9 '14 at 18:12
answered Jul 9 '14 at 18:06

Antoine Cloutier
1,2501111 silver badges2323 bronze badges
Why do you wrap your functions in $.when()? There is no need. You can just do function1().done() - no need for $.when() there at all. $.when() is used when you have several promises and you want to know when they are all done, but provides no use at all when only passing it one promise. – jfriend00 Jul 9 '14 at 18:09 
You are very right, I had multiple promises at first and I just forgot to remove the $.when. I noticed it pretty much at the same time you commented. Thanks for pointing it out! – Antoine Cloutier Jul 9 '14 at 18:11
Thank you very much for the example. It is a very good approach to explain through a simple example @AntoineCloutier – samsri Sep 18 '15 at 14:28
1
I am sorry I don't really understand how it works, so I just follow the example. When I call the function with .done , I get error "Cannot read property 'done' of undefined". – chourn solidet Dec 30 '16 at 2:48
hi @AntoineCloutier I'm not really understand about deferred but just want to know why you still using timeout instead of using deferred only? – Fai Zal Dong Aug 11 '17 at 10:26 
show 2 more comments

Report this ad

6

There are several ways I can think of to do this.

Use a callback:

 function FunctInit(someVarible){
      //init and fill screen
      AndroidCallGetResult();  // Enables Android button.
 }

 function getResult(){ // Called from Android button only after button is enabled
      //return some variables
 }
 
 
 
 
Use a Timeout (this would probably be my preference):

 var inited = false;
 function FunctInit(someVarible){
      //init and fill screen
      inited = true;
 }

 function getResult(){
      if (inited) {
           //return some variables
      } else {
           setTimeout(getResult, 250);
      }
 }
 
 
 
 
 
 
 
Wait for the initialization to occur:

 var inited = false;
 function FunctInit(someVarible){
      //init and fill screen
      inited = true;
 }

 function getResult(){
      var a = 1;
      do { a=1; }
      while(!inited);
      //return some variables
 }
 
https://stackoverflow.com/questions/53721653/javascript-wait-for-function-to-complete-the-call-another-inside-function

There are many ways this can be achieved, although, its hard to see whats going on in your code example as some of the functions are out of scope. However, i have provided you with some examples below which i have assumed the contents of these functions.

You could try:

Callbacks - Link
Promises - Link
Async functions - Link
Callback example

Calling make() from within load(), by passing make() as a callback function.

function load(xx, xx, callback){
    /* load does its thing */

    //callback is invoked - (passed in via args, make)
    callback(xx)
}

function make(arg, callback){
    //make funciton
}

//invoke it!
load('a', 'b', make);
Promise Example

load as a JavaScript Promise

var load = new Promise((resolve, reject) => {
    // do whatever you require in here.
    // when you are happy to fulfil, call resolve. 
    // if error, reject!
    resolve(x); //or
    reject(x);


})
// make function
function make(arg){
    // do something
}

// use it!
load.then((x) => { make(x)}).catch((x) => {console.log(x)})
Async await with promise

In this example the keyword await inside the async function makes javascript wait untill the promise is settled and returns us the result to be used to invoke the make() function.

async function load(){
    // contents of the load funciton.
    // call the make function when you have the outcome
    // you expected. for example if you are getting data.
    let getData = new Promise((resolve, reject) => {resolve('xx')})

    let xx = await getData // wait till the getData promise is resolved. 
    make(xx);
}
share  improve this answer  follow 
answered Dec 11 '18 at 10:30

Luke Walker
36133 silver badges1818 bronze badges
add a comment

0

You can use Promise object. It represents the eventual completion of an asynchronous operation, and its resulting value.

function first_letter() {
    var bg_width = 5;
    var bg_height = 10;

    function load(xx, xy) {
        return new Promise(resolve => {
            // process your data
            // for example
            var result = xx * xy;
            resolve(result);
        });
    }

    function make(xxxxxx) {
        console.log(xxxxxx);
    }

    load(bg_width, bg_height).then(result => make(result));
}


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();