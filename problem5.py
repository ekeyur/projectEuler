# 
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?




number = 2520
found = False


while(not found):
    number += 1
    for i in range(11,21):
        found = True
        if(number % i != 0):
            found = False
            break
    if found:
        print number
        break
