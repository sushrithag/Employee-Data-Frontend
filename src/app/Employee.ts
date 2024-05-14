import { IEmployee } from "./IEmployee";

export class Employee {
    
    data!:IEmployee[];
    
    constructor() {
        this.data = [
        // {id: 1, firstName: "AAA",lastName: "aaa", salary: 55000},
        // {id: 2, firstName: "BB",lastName: "aaa", salary: 57000},
        // {id: 3, firstName: "CC" ,lastName: "aaa", salary: 115000}
        ]
    }
    
    findAll():IEmployee[]{
        return this.data
    }
    
    
    findOne(id:number):IEmployee | null{
        for(let i = 0;i<this.data.length;i++){
            if(this.data[i].id==id) {
            return this.data[i];
        }
        }
        return null
    }
    
    delete(id:number) :IEmployee | null{
        //TODO
        let updated_array:IEmployee[] = [];
        let deletedEmp: IEmployee | null = null;
        for(let i = 0;i<this.data.length;i++){
            if( this.data[i].id!=id ) {
                updated_array.push(this.data[i]);
            }
            else{
                deletedEmp = this.data[i];
            }
        }
        this.data = updated_array;
        
        return deletedEmp;
    } 
    
    insert(item:IEmployee) :IEmployee | null{
    //TODO
        // let newItem = {
        //     // id: item.id,
        //     // firstName: item.firstName,
        //     // lastName: item.lastName,
        //     // salary: item.salary
        //     ...item
        // }
        // let newItem = Object.assign(item);
        // this.data.push(newItem);
        this.data.push({...item});
        return item;
    } 
    
    update(item:IEmployee) :IEmployee | null{
        //TODO
        // if( this.findOne(item.id) == null ){
        //     return null;
        // }
        // else{
        //     this.delete(item.id);
        //     this.insert({...item});
        //     return item;
        // }

        if( this.findOne(item.id) == null ){
            return null;
        }
        for(let i = 0; i <this.data.length; i++){
            if(this.data[i].id == item.id){
                this.data.splice(i,1,{...item})
            }
        }
        return item;
    } 
    
 }