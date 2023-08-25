# Duffies Hellman algorithm  


#using a function to generate rsa1 and rsa2
def rsa1(x,g,p):
   r1=  (g**x)%p
   return r1

def rsa2(y,g,p):
   r2= (g**y)%p
   return r2

# getting input from users
x  = int(input("Enter your x value:"))
y  = int(input("Enter your y value:"))
g  = int(input ("Enter message value:"))
p  = int( input ("Enter modulo value:"))

#switching the conversation of rsa1 and rsa2
def rsa1s(value):
   r1s =(value**x)%p
   return r1s

def rsa2s(value):
   r2s= (value**y)%p
   return r2s

#calling the functions
value1 = rsa1(x,g,p)
value2 = rsa1(y,g,p)

#print key value if condition rsa1s == rsa2s
if (rsa1s(value2) == rsa2s(value1)):
        print(f'The Key is {rsa1s(value2)}'.upper())

