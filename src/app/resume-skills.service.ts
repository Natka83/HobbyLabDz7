import{Injectable } from "@angular/core";
import { Resume } from './Resume';
@Injectable()
export class SkillService{
    private items: Resume[] = [];
     
    addInfo(obj:Resume) {        
      
        this.items.push(obj);
      
    }

    getItems(){
        return this.items;
    }
   
}