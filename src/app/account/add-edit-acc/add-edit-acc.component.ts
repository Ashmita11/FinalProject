import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-acc',
  templateUrl: './add-edit-acc.component.html',
  styleUrls: ['./add-edit-acc.component.css']
})
export class AddEditAccComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() acc:any;
 AccountId:string;
  AccountName:string;

  ngOnInit(): void {
    this.AccountId=this.acc.AccountId;
    this.AccountName=this.acc.AccountName;
  }

  addAccount(){
    var val = {AccountId:this.AccountId,
                AccountName:this.AccountName};
    this.service.addAccount(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAccount(){
    var val = {AccountId:this.AccountId,
      AccountName:this.AccountName};
    this.service.updateAccount(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}