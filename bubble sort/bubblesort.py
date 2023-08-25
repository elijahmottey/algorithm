def selectionSort(arr):
    for i in range(0,len(arr)):
        smallest = i
        for index in range(i+1,len(arr)):
            if arr[index] < arr[index + 1]:
                smallest = index
        #swapping between the index and the smallest to hold values
        value = index
        index = smallest
        smallest = value
    return arr

list = [2,3,7,2,6,9]
sort = selectionSort(list)
print(sort)