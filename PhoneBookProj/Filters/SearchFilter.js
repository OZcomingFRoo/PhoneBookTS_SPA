//My Custom Filter
app.filter('ByPhoneOrName', function (otherService) {
    return function (Arr, parameter) {
        if (!otherService.IsNullOrEmptyOrUndefined(parameter)) {
            var FilteredArr = new HashTable();
            if (isNaN(parseInt(parameter))) {
                angular.forEach(Arr, function (item) {
                    if (otherService.StringContains(item.Value.Name, parameter))
                        //if (Contains(item.Value.Name, parameter))
                        FilteredArr.AddCell(item);
                }); //By Name
            } //By Name
            else {
                angular.forEach(Arr, function (item) {
                    if (otherService.StringContains(item.Value.Phone, parameter))
                        //if (Contains(item.Value.Phone, parameter))
                        FilteredArr.AddCell(item);
                }); //By Phone Number
            } //By Phone Number
            return FilteredArr.AllCells;
        }
        else
            return Arr;
    };
});
//# sourceMappingURL=SearchFilter.js.map