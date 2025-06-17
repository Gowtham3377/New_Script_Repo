class office {
    constructor( emp_userid, emp_contactno,emp_name) {
        this.emp_name = emp_name;           // corrected
        this.emp_userid = emp_userid;
        this.emp_contactno = emp_contactno;
    }

    emp_details() {
        return `Employee name: ${this.emp_name}, Employee userid: ${this.emp_userid}, Employee Contact: ${this.emp_contactno}`;
    }
}

const E1 = new office("Gowtham", "g449", 999499477);

console.log(E1.emp_details());   // corrected
