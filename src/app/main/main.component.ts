import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {map} from 'rxjs/operators';


@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public userEmail:string ;
  public password:string ;
  public perfil:boolean = false;

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
            if(itemsUrl[i].email === this.userEmail && itemsUrl[i].password === this.password){
              console.log('eres integrante');
              
            }
            // console.log(this.userEmail = itemsUrl[i].email) ;
            // console.log(this.password = itemsUrl[i].password);
          }
          
        }
      )
  }

  itemsUrlServiceGetUrlApi(){
    return this.http
      .get<any[]>(this.urlApi)
      .pipe(map(data => data));

  }

  

  // restItems: any;
  // restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getRestItems();
  // }

  // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }

  // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl)
  //     .pipe(map(data => data));
  // }

  

}
