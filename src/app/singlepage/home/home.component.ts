import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../server/peticion.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;

  constructor(private peticionService: PeticionService) { }

  ngOnInit() {
  }
 
  GetMovies(title: string){
    
  

     this.peticionService.GetAllMovies(title)
      .subscribe(reps => {
        console.log(reps)
        this.movies = reps
      })
  }

}
