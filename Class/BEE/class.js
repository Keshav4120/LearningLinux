class student {
    //We declare this as a private 
    #fName;
    static hey = false;
    constructor(fName , obtainsedMarks , age) {
        this.fName = fName;
        this.obtainsedMarks = obtainsedMarks;
        this.age = age;
    }

    checkResult(maxmarks) {
        let percentage = (this.obtainsedMarks / maxmarks) * 100;
        if (percentage > 40) {
            return percentage;
        } else {
            return percentage;
        }
    }

    getName() {
        return this.#fName;
    }
}


// when we return this line in browser 
// the line at 27 will give undefined
// because browser think every line will return something


var student1 = new student('Keshav' , 100 , 18);
//if we want to print this this will print all attributes in code that we call in function
console.log(student1)

console.log(student1.getName);

console.log(student1.checkResult(500));



// instance  == Object

// instance variable  =  we need to make a constructor

// static variable  = like if make a var by using static we can access without calling any constuctor
// this will print nothing but undefined because js make this var only for the class not for its obejct
// console.log(student1.hey;
console.log(student.hey);