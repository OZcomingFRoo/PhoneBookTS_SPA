function IsNullOrEmpty(str) {
    return (str.length == 0 || str == null || str == undefined);
}
//Used for this Filter ONLY !!!
function Contains(fullString, partialString) { return fullString.search(partialString) != -1; } // short Func
//My Custom Filter
app.filter('ByPhoneOrName', function () {
    return function (Arr, parameter) {
        if (!IsNullOrEmpty(parameter)) {
            var FilteredArr = new HashTable();
            if (isNaN(parseInt(parameter))) {
                angular.forEach(Arr, function (item) {
                    if (Contains(item.Value.Name, parameter))
                        FilteredArr.AddCell(item);
                }); //By Name
            }
            else {
                angular.forEach(Arr, function (item) {
                    if (Contains(item.Value.Phone, parameter))
                        FilteredArr.AddCell(item);
                });
            } //By Phone Number
            return FilteredArr.AllCells;
        }
        else
            return Arr;
    };
});
//# sourceMappingURL=SearchFilter.js.map