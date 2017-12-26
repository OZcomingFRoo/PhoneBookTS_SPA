app.service('dbService', function () {
    this.GetList = function () {
        return myDB;
    };
    this.AddNew = function (Person) {
        myDB.Add(Person);
    };
    this.DeleteContact = function (Index) {
        return myDB.TryToRemove(Index);
    };
    this.SaveChanges = function (id, NewValues) {
        for (var i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id) {
                myDB.AllCells[i].Value.Name = NewValues.Name;
                myDB.AllCells[i].Value.Phone = NewValues.Phone;
            }
        }
    };
    this.GetContact = function (id) {
        for (var i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id)
                return myDB.AllCells[i];
        }
        return null;
    };
});
//# sourceMappingURL=dbService.js.map