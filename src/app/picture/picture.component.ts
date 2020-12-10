import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Picture } from './Picture';
import { PictureGalary } from './picture.service';
import { ITEMS } from './picture-mock-items';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  styles:["div{float:left; padding-left: 15px; padding-right: 10px; text-align: center; width: 320px;}",
    ".forLiNgFor{float:left; list-style-type: none ; text-align: center; margin: 0px; padding: 0px; color: rgb(49, 110, 176);font-style: oblique;}",
    "button {margin:20px;}",
    "body{ margin: 0;background-color:rgba(219, 234, 248, 0.466);background-size: 100%; text-align:center;}"],
    providers: [PictureGalary]
})

export class PictureComponent implements OnInit {
 
  myPicture:Picture;
  pictureItems:Picture[]=ITEMS;
  styles={
    normal:true,
    big:false
  }

  changeImg(){
    this.styles.big=!this.styles.big;
    console.log(this.styles.normal);
  }
  

  obj: Picture= new Picture();
  items: Picture[];

  constructor(private myPictureService: PictureGalary) {}

  addInfo(obj: Picture){
      this.myPictureService.addInfo(obj);
    }
  
  ngOnInit(): void {
    this.items=this.myPictureService.getItems();
  }

}

