# Part 1a

### var declaration
1. values added:  20

2. final result:  20

### let declaration
1. values added:  20

2. ReferenceError: result is not defined.
    - Explanation: We used the let declaration for the result variable. This declaration occured in the if block, whereas the error occured at line 13, outside the if block. A variable declared with let can only be used inside the block it was declared in, so result was no longer defined when called at line 13, so the program threw a reference error.

### const declaration
1. TypeError: Assignment to constant variable.
    - Explanation: The const declaration declares a constant variable (i.e. it cannot be changed after initial declaration). The program tries to change a constant variable, so the the program exited with the appropraite error.

2. The program will not reach this line due to the program exiting from the previous error above.

# part 1b
1. The output will be "3". 
    - Explanation: The reason for this is because the program is printing out the variable i, which will increment once for every inputted price into the program. In this case three prices are inputted, so i will increment three times. 

2. The output will be "150". 
    - Explanation: The reason for this is because the program is printing out the variable discountedPrice, which will represent the discounted price for each individual price. In this case discountedPrice is set to the discounted price of the last price in the inputted array, since this is after all of the discounted prices have been computted and saved. 

3. The output will be "150". 
    - Explanation: The reason for this is because the program is printing out the variable finalPrice, which is similar to the discountePrice variable. In this case finalPrice is set to the final price of the last price in the inputted array, since this is after all of the final prices have been computted and saved. 

4. This function returns an array of the discounted prices of the inputted array, based off of the discount provided.

5. A reference error will occur.
    - Explanation: The variable i was declared using let, and this occured inside the for loop block, while the console.log statment was outside the for loop block. See let declaration 2 from part a for more details.

6. A reference error will occur.
    - Explanation: The variable discountedPrice was declared using let, and this occured inside the for loop block, while the console.log statment was outside the for loop block. See let declaration 2 from part a for more details.

7. The output will be "150". 
     - Explanation: finalPrice was declared using let inside the same block as the cconsole.log statement, so it worked as intended. See let declaration 2 from part a and 3 from part b for more details.

8. The function will return the same as it did in 4 from part b. The reason for this is that the function correctly uses all of the variables in their own blocks, so it won't return anything different than what is intended.

9. A reference error will occur.
    - Explanation: This happens for the exact same reason as 5 from part b, so see that for more details.

10. The output will be "3".
    - Explanation: This program runs correctly. length was set using the const declaration inside the same black as the console.log statement and there was no attempt to modify length.

11. This function gives a similar output as 8 and 4 from part b. It is an array of discounted prices calculated from the inputted prices and discount, but obtained slightly differently from 8 and 4. 

12. Objects
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting();
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]

13. Arithmetic
    - A. '3' + 2 = '32'. 2 is converted to a string '2' and is concatenated to '3', giving '32'.
    - B. '3' - 2 = 1. '3' is converted to an int and has 2 subtracted from it, giving 1.
    - C. 3 + null = 3. null is converted to 0, an int. 3 + 0 is 3.
    - D. '3' + null = '3null'. null is converted to a string and concatenated with 3, giving '3null'.
    - E. true + 3 = 4. true is converted to 1, an int. 1 + 3 = 4.
    - F. false + null = 0. false is converted to 0, an int, and null is converted to 0, an int. 0 + 0 = 0.
    - G. '3' + undefined = 'undefined'. undefined is converted to a string and concatenated with 3, giving '3undefined'.
    - H. '3' - undefined = NaN. undefined is converted to an int. Since it is undefined, any operation with it will result in NaN

14. Comparison
    - A. '2' > 1, true. '2' is converted to 2, an int. 2 > 1, so true.
    - B. '2' < '12', false. '2' is compared against '1' and '2' is greater than '1', so false.
    - C. 2 == '2', true. '2' is converted to 2, and 2 == 2 is true.
    - D. 2 === '2', false. 2 and '2' are different types, so false.
    - E. true == 2, false. ture is converted to 1, and 1 == 2 is false.
    - F. true === Boolean(2), true. Boolean(2) returns a boolean, true, and true === true is true, since they are both the same type.

15. == uses built in logic to convert one or both of the arguements to the same type to compare them. === will only compare arguements if they are already the same type, otherwise it will always return false.

16. See part1b-question16.js

17. The result will be an array filled with values equivalent to 2 times that value of the item of the original array at the same index. 
    - Explanation: Calling modifyArray([1,2,3], doSomething) calls a function where each item in the provided array is modified by a callback function, and is then pushed into a new array that is returned. The callback function in this case will be the function provided in the original function call, doSomething. doSomething simply takes a provided number, mulitplies it by two, and returns it.

18. See part1b-question18.js

19. 1 4 3 2
    - Explanation: 1 is called first in the function. 2 is set to a timeout of one second, so it will print after 1 second. 3 is set to print after 0 seconds, but do to how JavaScript handles running operations, it is not actually performed until after the next operation is preformed which is printing 4.
