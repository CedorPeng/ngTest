import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  getApproveType(type){
    let approveResult = {
      '100':'未提交',
      '200':'等待初审',
      '300':'等待终审',
      '400':'审批通过',
      '500':'已驳回',
    }
    return approveResult[type]
  }
}
