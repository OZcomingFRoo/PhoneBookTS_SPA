app.service('otherService', function () {
    //Returns boolean value => if the partial-String is found in full-String True , else false
    this.StringContains = function (fullString, partialString) {
        return fullString.search(partialString) != -1;
    };
    //checks if string has one of these type of values: "", null or undefined
    //If none of the above is asign to the variable , returns false
    this.IsNullOrEmptyOrUndefined = function (str) {
        return (str.length == 0 || str == null || str == undefined);
    };
    //checks if given value contains only digit characters
    this.IsDigitOnly = function (str) {
        for (var i = 0; i < str.length; i++) {
            if (isNaN(parseInt(str[i])))
                return false;
        }
        return true;
    };
});
//# sourceMappingURL=otherServices.js.map