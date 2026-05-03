import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { get } from 'http';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
   private students = [
        {"id": 1, "name": "Nafeesa", "age": 21},
        {"id": 2, "name": "Alina", "age": 27},
        {"id": 3, "name": "Zara", "age": 24},
        {"id": 4, "name": "Amal", "age": 23},
    ]

    // GET
    getAllStudents(){
        return this.students;
    }

    getStudentById(id: Number){
        const temp =  this.students.find((s) => s.id === id);
        if(!temp) throw new NotFoundException("No student with this exists");
        return temp;
    }

    //POST
    addNewStudent(data: {name: string, age: number }){
        const newStd={
             id : Date.now(),
             ...data
        }
        this.students.push(newStd);
        return newStd;
    }

    //PUT
    editStudent(id:number, body:{name: string, age: number }){
        const temp = this.students.findIndex((s) => (s.id === id));
        if(temp ==  -1) throw new NotFoundException("No student with this id exists");
        this.students[temp] = {
            id,
            ...body
        }
        return this.students[temp];
    }

    //PATCH
    patchStudent(id:number, body: Partial<{name:string, age: number}>){
        const temp = this.getStudentById(id);
        Object.assign(temp, body);
        return temp;        
    }

    //DELETE
    deleteStudent(id: number){
        const removeStd = this.students.findIndex((s) => (s.id === id));
        if(removeStd ==  -1) throw new NotFoundException("No student with this id exists");
    
        const deleteSt= this.students.splice(removeStd,1);
        return {message : "Student deleted successfully", st: deleteSt};
    }

}
