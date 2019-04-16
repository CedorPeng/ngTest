import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {
  tabs = [
    {
      name:'首页',
      path:'/home',
      code:'home'
    }
  ];
  tabsIndex:1;
  menuList = [
    {
      id:1,
      name:'个人兴趣',
      children:[
        {
          name:'首页',
          path:'/home',
          code:'home'
        },
        {
          name:'测试',
          path:'/test',
          code:'test'
        },
      ]
    }
  ]
  constructor() {
  }

  ngOnInit() {
  }


  goMenu(childObj){
    for (let key in this.tabs) {
      if(this.tabs[key] && this.tabs[key].path == childObj.path) {
        this.goTabs(key)
        return
      }
    }
    this.tabs.push(childObj)
    this.goTabs(this.tabs.length)
  }

  closeTab(tab: string): void {
    console.log(tab,11111);
  }
  goTabs(index){
    this.tabsIndex = index;
  }
}
