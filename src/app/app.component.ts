import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  public userEmail:string ;
  public password:string ;
  public liderGroup:boolean = false;
  public option2:boolean=true;
  public option1:boolean=true;

  itemsUrl:any;
  urlApi:any = 'http://backend-everis-retoeveris.a3c1.starter-us-west-1.openshiftapps.com/usuario';

  constructor(private http: HttpClient) {}

  email(input){
    this.userEmail = input.value;
    console.log(this.userEmail);

  }

  pass(input2){
    this.password = input2.value;
    console.log(this.password);
  }

  ngOnInit() {
    
  }

  button() {
    this.getUrlApi();
  }
  getUrlApi():void{
    console.log(this.urlApi);
    this.itemsUrlServiceGetUrlApi()
      .subscribe(
        itemsUrl => {
          this.itemsUrl = itemsUrl;
          console.log(this.itemsUrl);
          for(let i=0; i<itemsUrl.length;i++){
            if(itemsUrl[i].email === this.userEmail && itemsUrl[i].password === this.password ){
              console.log('bienvenido');
              this.option2 = true;
              this.option1 = false;


            }
            else {
              //  console.log('bienvenido2');
               this.option1 = true;
               this.option2 = false;

            }
           
          }
          
        }
      )
  }

  itemsUrlServiceGetUrlApi(){
    return this.http
      .get<any[]>(this.urlApi)
      .pipe(map(data => data));

  }
}
