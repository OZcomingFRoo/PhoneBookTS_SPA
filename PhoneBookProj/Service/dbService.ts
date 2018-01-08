app.service('dbService', function () {

    //Gives Colletion of Contant objects 
    //Note: HashTable is a custom Model/class collection designed like standard HashTable in programming languages like C#
    this.GetList = function (): HashTable<Contact>
    {
        return myDB;
    }

    //Adds new Contact
    this.AddNew = function (Person: Contact)
    {
        myDB.Add(Person);
    }

    //Deletes Contact by Id
    this.DeleteContact = function (Index: number): boolean
    {
        return myDB.TryToRemove(Index);
    }

    //Updates Contact object by Id and NewValues
    this.SaveChanges = function (id: number, NewValues: Contact) {
        for (let i = 0; i < myDB.AllCells.length; i++) {
            if (myDB.AllCells[i].Key == id)
            {
                myDB.AllCells[i].Value.Name = NewValues.Name;
                myDB.AllCells[i].Value.Phone = NewValues.Phone;
            }
        }
    }

    //Gets Contant by ID
    this.GetContact = function (id: number): Cell<Contact> {
        for (let i = 0; i < myDB.AllCells.length; i++)
        {
            if (myDB.AllCells[i].Key == id)
                return myDB.AllCells[i];
        }
        return null;
    }
});