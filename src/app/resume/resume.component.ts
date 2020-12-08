import { Component, OnInit } from '@angular/core';
import { Resume } from  '../Resume';
//import { ITEMS } from '../Resume-mock-items';
import {SkillService} from '../resume-skills.service';
import {DatePipe} from "@angular/common"

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  //styleUrls: ['./resume.component.css']
  styles:["div{ padding-left: 15px;padding-right: 10px; text-align: center; width: 320px;}",
  ".forLiNgFor{list-style-type: none ;text-align: center;margin: 0px;padding: 0px;color: rgb(49, 110, 176);font-style: oblique;}",
  "button {margin:20px;}",
  "body{ margin: 0;background-color:rgba(219, 234, 248, 0.466);background-size: 100%; text-align:center;}"],
  providers: [SkillService, DatePipe]
})
export class ResumeComponent implements OnInit 
{

  // myResume:Resume;
  // resumeItems:Resume[]=ITEMS;

 // dataObj: Resume;
  obj: Resume = new Resume();
  items: Resume[];
 // date: string;
  constructor(private mySkillService: SkillService, private datePipe: DatePipe){}
  addInfo(obj:Resume){
    
   // this.obj.dateOfBirthy = this.datePipe.transform(this.date, "DD-MM-YYYY");
    this.mySkillService.addInfo(obj);
  };
 
  
  ngOnInit(): void {
    this.items  = this.mySkillService.getItems();
  }
  
}
