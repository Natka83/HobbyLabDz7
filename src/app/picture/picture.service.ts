import{Injectable } from "@angular/core";
import {Picture} from './Picture'
@Injectable()

export class PictureGalary{
    private items: Picture[]=[];
    
    addInfo(obj:Picture){
        this.items.push(obj);
    }
    
    getItems(){
        return this.items;
    }

    
}
