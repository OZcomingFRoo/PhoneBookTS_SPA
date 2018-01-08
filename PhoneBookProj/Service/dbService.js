app.service('dbService', function () {
    //Gives Colletion of Contant objects 
    //Note: HashTable is a custom Model/class collection designed like standard HashTable in programming languages like C#
    this.GetList = function () {
        return myDB;
    };
    //Adds new Contact
    this.AddNew = function (Person) {
        myDB.Add(Person);
    };
    //Deletes Contact by Id
    this.DeleteContact = function (Index) {
        return myDB.TryToRemove(Index);
    };
    //Updates Contact object by Id and NewValues
    this.SaveChanges = function (id, NewValues) {
        for (var i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id) {
                myDB.AllCells[i].Value.Name = NewValues.Name;
                myDB.AllCells[i].Value.Phone = NewValues.Phone;
            }
        }
    };
    //Gets Contant by ID
    this.GetContact = function (id) {
        for (var i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id)
                return myDB.AllCells[i];
        }
        return null;
    };
});
//# sourceMappingURL=dbService.js.map