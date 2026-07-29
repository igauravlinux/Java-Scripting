
1. What is try... catch ?

--> try.. catch is used to handle errors (exceptions) in javaScript so the program doesn't crash.


Syntax

try{
    <!-- code that may throw an error -->
}
catch(error){
    <!-- code to handle the error  -->
}


2. How it works ??

Part                    Description
----------------------------------------------------------------------------------------
try                     Execute code that might fail
catch(err)              Runs only if an errors is thrown in try; gets access to the error info
finally                 (Optional) Always runs -- cleanpup / logs, even if the error occurs or not