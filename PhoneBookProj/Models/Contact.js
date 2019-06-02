var Contact = /** @class */ (function () {
    function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    Contact.IsValid = function (Person) {
        return (Person.ValidName() && Person.ValidPhone());
    };
    Object.defineProperty(Contact.prototype, "Phone", {
        get: function () {
            var r = this.ValidPhone() ? this.phone : "NaPN";
            return r;
        },
        set: function (value) { this.phone = value; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "Name", {
        get: function () {
            var r = this.ValidName() ? this.name : "NonName";
            return r;
        },
        set: function (value) { this.name = value; },
        enumerable: true,
        configurable: true
    });
    ;
    Contact.prototype.ValidName = function () { return (this.name.length >= 2); };
    ;
    Contact.prototype.ValidPhone = function () {
        return (this.phone.length >= 8 && this.phone.length <= 12
            && this.ContainsOnlyDigits());
    };
    ;
    Contact.prototype.ContainsOnlyDigits = function () {
        for (var i = 0; i < this.phone.length; i++) {
            if (isNaN(parseInt(this.phone[i])))
                return false;
        }
        return true;
    };
    return Contact;
}());
//# sourceMappingURL=Contact.js.map