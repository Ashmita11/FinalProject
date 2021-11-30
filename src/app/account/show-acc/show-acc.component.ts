import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-acc',
  templateUrl: './show-acc.component.html',
  styleUrls: ['./show-acc.component.css']
})
export class ShowAccComponent implements OnInit {
 
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
    if(confirm('Are you sure you want to  remove this account??')){
      this.service.deleteAccount(item.AccountId).subscribe(data=>{
        alert(data.toString());
        this.refreshAccList()
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
