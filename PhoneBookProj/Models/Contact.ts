class Contact
{
    constructor(private name: string, private phone: string) { }

    public static IsValid(Person: Contact): boolean
    {
        return (Person.ValidName() && Person.ValidPhone());
    }

    set Phone(value: string) { this.phone = value };
    set Name(value: string) { this.name = value };

    get Phone(): string {
        let r = this.ValidPhone() ? this.phone : "NaPN";
        return r;
    }

    get Name(): string {
        let r = this.ValidName() ? this.name : "NonName";
        return r;
    }

    public ValidName(): boolean { return (this.name.length >= 2) };
    public ValidPhone(): boolean
    {
        return (this.phone.length >= 8 && this.phone.length <= 12
            && this.ContainsOnlyDigits());
    };

    private ContainsOnlyDigits(): boolean
    {
        for (let i = 0; i < this.phone.length; i++) {
            if (isNaN(parseInt(this.phone[i])))
                return false;
        }
        return true;
    }

}

