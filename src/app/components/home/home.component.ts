import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  click(){
    // this.http.get('test/test?msg='+'111').subscribe(res=>{
    //   console.log(res);
    // })
    this.http.post('test/post',{msg:'11111'} , {headers:this.headers}).subscribe(res=>{
      console.log(res);
    })
  }
  upFile(e){
    console.log(e);
    let data = new FormData()
    data.append('file',e.srcElement.files[0])
    this.http.post('test/upFile',data).subscribe(res=>{
      console.log(res);
    })
  }

}
