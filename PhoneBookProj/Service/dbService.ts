app.service('dbService', function () {
    this.GetList = function (): HashTable<Contact>
    {
        return myDB;
    }
    this.AddNew = function (Person: Contact)
    {
        myDB.Add(Person);
    }
    this.DeleteContact = function (Index: number): boolean
    {
        return myDB.TryToRemove(Index);
    }
    this.SaveChanges = function (id: number, NewValues: Contact) {
        for (let i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id)
            {
                myDB.AllCells[i].Value.Name = NewValues.Name;
                myDB.AllCells[i].Value.Phone = NewValues.Phone;
            }
        }
    }
    this.GetContact = function (id: number): Cell<Contact> {
        for (let i = 0; i < myDB.AllCells.length; i++)
        {
            if (myDB.AllCells[i].Key == id)
                return myDB.AllCells[i];
        }
        return null;
    }
});