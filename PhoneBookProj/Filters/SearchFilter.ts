function IsNullOrEmpty(str: string): boolean {
    return (str.length == 0 || str == null || str == undefined);
}
//Used for this Filter ONLY !!!

function Contains(fullString: string, partialString: string): boolean
{ return fullString.search(partialString) != -1; } // short Func

//My Custom Filter
app.filter('ByPhoneOrName', function () {
    return function (Arr: Cell<Contact>[], parameter: string) {
        if (!IsNullOrEmpty(parameter)) {
            var FilteredArr: HashTable<Contact> = new HashTable<Contact>();
            if (isNaN(parseInt(parameter)))
            {//By Name
                angular.forEach(Arr, function (item) {
                    if (Contains(item.Value.Name, parameter))
                        FilteredArr.AddCell(item);
                });//By Name
            }


            else {
                angular.forEach(Arr, function (item) {
                    if (Contains(item.Value.Phone, parameter))
                        FilteredArr.AddCell(item);
                });
            }//By Phone Number
            return FilteredArr.AllCells;
        }
        else
            return Arr;
    };
});