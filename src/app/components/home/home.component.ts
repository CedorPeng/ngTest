import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { UtilsService } from '../../services/utils.service';
import { CedorUtils } from '../../../assets/js/utils';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  imgUrl='test/upFile';
  upLoading=false;

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private utils:any;
  // provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 }


  constructor(private http:HttpClient,private utilService:UtilsService,private message: NzMessageService) {
    this.utils = new CedorUtils
  }

  ngOnInit() {
  }
  click(){
    // this.http.get('test/test?msg='+'111').subscribe(res=>{
    //   console.log(res);
    // })
    // this.http.post('test/post',{msg:'11111'} , {headers:this.headers}).subscribe(res=>{
    //   console.log(res);
    // })
    console.log(this.utilService.getApproveType(100));
  }
  upData(e){
    this.upLoading =true;
    if(e.type != 'progress' && e.type != 'start' ){
      let type = e.type == 'success'? '上传成功':'上传失败';
      let msgFn = e.type == 'success'? 'success':'error';

      this.message[msgFn](type,{nzDuration:4000})
      this.upLoading =false;
    }

  }

}
