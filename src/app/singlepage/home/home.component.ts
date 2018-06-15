import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { PeticionService } from '../../server/peticion.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: [
    { 
    label: 'Bring Milk',
    done:false,
    priority:3 
    },
    { 
      label: ' Milk',
      done:true,
      priority:3 
      }
  ];



   name:string = '';
   project:string = ''

  constructor(private httpClient: HttpClient){}

  // constructor(private peticionService: PeticionService) { }

   ngOnInit() {
    this.httpClient.get(`http://backend-everis-retoeveris.a3c1.starter-us-west-1.openshiftapps.com/usuario`)
    .subscribe(
     (results:any[]) => {
       console.log(results)
  
        
           this.name = results[0].name;
           this.project = results[0].project;
   }
   
  // api de perfiles https://randomuser.me/api/?results=10&seed=foobar
  


 
  )
   
  }

  inpuText(){
    console.log("aqui coments")
  }

}
