
export class Student{
    static  count=0
    public isPaid=true
    public _id!: number
    public isactive?: boolean
        public leavedate?:Date

    constructor(
       
       
        public name: string,
        public lastname: string,
        public adress: string,
        
        ) { Student.count+=1
            this._id=Student.count
        }
}
