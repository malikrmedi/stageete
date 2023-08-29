import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';


@Component({
  selector: 'app-listemarques',
  templateUrl: './listemarques.component.html',
  styleUrls: ['./listemarques.component.css']
})
export class ListemarquesComponent implements OnInit {
  marquesTab:any=[]
  constructor(
    private marques: MarqueService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.marques.getallmarques().subscribe(data=>{
    console.log(data);
    this.marquesTab=data;
    
  })
}




}
