
class HashTable<T>
{
    private IdCounter: number;
    private tableArr: Cell<T>[];
    constructor() {
        this.IdCounter = 0;
        this.tableArr = [];
    }

    public Add(NewValue: T) {
        this.tableArr.push(new Cell<T>(this.IdCounter, NewValue));
        this.IdCounter++;
    }

    public AddCell(NewCell: Cell<T>) { this.tableArr.push(NewCell); }
    // this is used for Filtered Objects

    public TryToRemove(Index: number): boolean
    {
        for (let i = 0; i < this.tableArr.length; i++)
        {
            if (this.tableArr[i].Key == Index)
            {
                this.tableArr.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    get Collection(): T[]
    {
        let Arr: T[] = [];
        for (let i = 0; i < this.tableArr.length; i++)
        {
            Arr.push(this.tableArr[i].Value);
        }
        return Arr;
    }// Obsolete ?

    get AllCells(): Cell<T>[] { return this.tableArr; }
}