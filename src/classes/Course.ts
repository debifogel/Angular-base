

export enum Subbject
{
    QA,
    אנגלית,
    תכנות,
    הוראה
}
export class Course {
    static count=0
    public idCourse!:number
    public cost!: number 
    public teachers!:string[]
    constructor(public _nameCourse:string,public _subbject:Subbject ,public _cost: number, 
        public _teachers:string[]) {
        this.idCourse=++Course.count
        
    }
}
