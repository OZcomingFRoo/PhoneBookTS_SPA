var HashTable = /** @class */ (function () {
    function HashTable() {
        this.IdCounter = 0;
        this.tableArr = [];
    }
    HashTable.prototype.Add = function (NewValue) {
        this.tableArr.push(new Cell(this.IdCounter, NewValue));
        this.IdCounter++;
    };
    HashTable.prototype.AddCell = function (NewCell) { this.tableArr.push(NewCell); };
    // this is used for Filtered Objects
    HashTable.prototype.TryToRemove = function (Index) {
        for (var i = 0; i < this.tableArr.length; i++) {
            if (this.tableArr[i].Key == Index) {
                this.tableArr.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(HashTable.prototype, "Collection", {
        get: function () {
            var Arr = [];
            for (var i = 0; i < this.tableArr.length; i++) {
                Arr.push(this.tableArr[i].Value);
            }
            return Arr;
        } // Obsolete ?
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HashTable.prototype, "AllCells", {
        get: function () { return this.tableArr; },
        enumerable: true,
        configurable: true
    });
    return HashTable;
}());
//# sourceMappingURL=HashTable.js.map