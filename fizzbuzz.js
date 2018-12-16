/*
print all numbers from 1 to 100 to console

if divisible by 3, print "Fizz"
if divisible by 5, but not 3, print "Buzz"
if divisible by 3 and 5, print "FizzBuzz"
*/

for (let i = 1; i <= 100; ++i) {
    let line = ""
    if (i % 3 === 0)
        line += "Fizz"
    if (i % 5 === 0)
        line += "Buzz"
    else line = i
    console.log(line)    
}