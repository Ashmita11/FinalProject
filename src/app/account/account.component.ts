import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(private service:SharedService) { }
  
    AccountList:any=[];
  
    ModalTitle:string;
    ActivateAddEditAccComp:boolean=false;
    acc:any;
  
    
  
    ngOnInit(): void {
      this.refreshAccList();
    }
  
    addClick(){
      this.acc={
        AccountId:0,
        AccountName:""
      }
      this.ModalTitle="Add Account";
      this.ActivateAddEditAccComp=true;
  
    }
  
    editClick(item){
      this.acc=item;
      this.ModalTitle="Edit Account";
      this.ActivateAddEditAccComp=true;
    }
  
    deleteClick(item){
      if(confirm('Are you sure??')){
        this.service.deleteAccount(item.AccountId).subscribe(data=>{
          alert(data.toString());
          this.refreshAccList();
        })
      }
    }
  
    closeClick(){
      this.ActivateAddEditAccComp=false;
      this.refreshAccList();
    }
  
  
    refreshAccList(){
      this.service.getAccList().subscribe(data=>{
        this.AccountList=data;
       
      });
    }
  }