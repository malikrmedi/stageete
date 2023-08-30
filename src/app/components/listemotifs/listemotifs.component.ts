import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MotifgratuiteService } from 'src/app/services/motifgratuite.service';

@Component({
  selector: 'app-listemotifs',
  templateUrl: './listemotifs.component.html',
  styleUrls: ['./listemotifs.component.css']
})
export class ListemotifsComponent implements OnInit{
  motifsTab:any=[]
  constructor(
    private motifs: MotifgratuiteService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.motifs.getallmotifs().subscribe(data=>{
    console.log(data);
    this.motifsTab=data;
    
  })
}
}
