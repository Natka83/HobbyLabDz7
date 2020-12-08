import{Injectable } from "@angular/core";
import { Resume } from './Resume';
@Injectable()
export class SkillService{
    private items: Resume[] = [];
     
    addInfo(obj:Resume) {        
        // this.dataObj.fio=obj.fio;
        // this.dataObj.email=obj.email;
        // this.dataObj.city=obj.city;
        // this.dataObj.expierence=obj.expierence;
        // this.dataObj.hobby=obj.hobby;
        // this.dataObj.tel=obj.tel;
        // this.dataObj.skills=obj.skills;
        // this.dataObj.photo=obj.photo;
        // this.dataObj.dateOfBirthy=obj.dateOfBirthy;
        // this.dataObj.lastSalary=obj.lastSalary;
        // this.dataObj.readyForWork=obj.readyForWork;
        this.items.push(obj);
        //return this.dataObj;
    }

    getItems(){
        return this.items;
    }
    // getData(): Resume {
    //     return this.dataObj;
    // }

    // addData(obj: Resume){
    //     this.dataObj.push(obj);
    // }
}