
module("Hello World");

//basic null test to show that this file is being processed
test("Null Test", function(){
   ok("All is Good");
});

//actual test to check for presence of P tag in the helloworld.html file
test("Hello World P.helloworld", function(){
    var result = document.getElementsByClassName("helloworld");
    console.log(result);
    equals(result.length, 1, "found this many P#helloworld tags: " + result.length);
});

//intentionally fail this test to show a failure scenario
test("Hello World LI.hello test (intentionally fail)", function(){
    var result = document.getElementsByClassName("hello");
    console.log("%o", result);
    equals(result.length, 2, "found this many P tags: " + result.length);
});