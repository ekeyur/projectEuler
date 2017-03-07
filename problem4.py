n=999
palin = []

for i in range(100,1000):
    for j in range(i,1000):
        num = i * j
        n = num
        rev = 0
        while(num > 0):
            dig = num % 10
            rev = rev * 10 + dig
            num = num / 10
        if rev == n:
            palin.append(n)
print max(palin)
