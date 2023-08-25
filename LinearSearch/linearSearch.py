##linear search
def linear_search(arr,target):
    
    for i in range(0,len(arr)):
        if arr[i] == target:
            return i
    return None

def verify(index):
    if index != None:
        print(f'the index is {index} and is verified')
    else:
        print("Target is not found in list")


list=[1,3,4,8,9,34]
index=linear_search(list,4)
verify(  index  )
       