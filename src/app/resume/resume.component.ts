import { Component, OnInit } from '@angular/core';
import { Resume } from  '../Resume';
import { ITEMS } from '../Resume-mock-items';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  //styleUrls: ['./resume.component.css']
  styles:["div{ padding-left: 15px;padding-right: 10px; text-align: center;}",".forLiNgFor{list-style-type: none ;text-align: center;margin: 0px;padding: 0px;color: rgb(49, 110, 176);font-style: oblique;}"]
})
export class ResumeComponent implements OnInit 
{

  myResume:Resume;
  resumeItems:Resume[]=ITEMS;
  constructor() { }
  
  ngOnInit(): void {
  
  }
  
}
