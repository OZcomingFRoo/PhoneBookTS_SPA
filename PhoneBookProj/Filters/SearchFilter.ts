﻿
//My Custom Filter
app.filter('ByPhoneOrName', function (otherService)
{
    return function (Arr: Cell<Contact>[], parameter: string) {
        if (!otherService.IsNullOrEmptyOrUndefined(parameter)) {
            var FilteredArr: HashTable<Contact> = new HashTable<Contact>();
            if (isNaN(parseInt(parameter)))

            {//By Name
                angular.forEach(Arr, function (item)
                {
                    if (otherService.StringContains(item.Value.Name, parameter))
                    //if (Contains(item.Value.Name, parameter))
                        FilteredArr.AddCell(item);
                });//By Name
            }//By Name

            else {//By Phone Number
                angular.forEach(Arr, function (item)
                {
                    if (otherService.StringContains(item.Value.Phone, parameter))
                    //if (Contains(item.Value.Phone, parameter))
                        FilteredArr.AddCell(item);
                });//By Phone Number
            }//By Phone Number
            return FilteredArr.AllCells;
        }
        else
            return Arr;
    };
});