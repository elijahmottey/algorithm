def binarySearch(arr, target):
     #using pointers to find the targeted values
     first = 0
     last = len(arr) - 1
     while first <= last:
         #defining the midpoint
         midpoint = (first + last) //2
         if arr[midpoint] ==  target:
            return midpoint
         elif arr[midpoint] < target:
            first = midpoint + 1
         else:
            last = midpoint -1
         
     return None

def verified(results):
    if results is not None:
        print("verified" )
    else:
        print("Not verified " )
        
        
         
list=[1,2,3,4,5,6,7,8,9]       
result = binarySearch(list,18)
print(result)
verified(result)
     
     