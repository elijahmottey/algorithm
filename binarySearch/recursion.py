def recursive(list, target):
    if len(list) == 0:
        return False
    else:
        midpoint = len(list)//2
        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive(list[midpoint]+1, target)
            else:
                return recursive(list[:midpoint], target) 
            
def verified(value):
    print("target found"+ str(value))
list =[1,2,3,4,5,6]   
value = recursive(list,4)
verified(value) 
            
 

            
