import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  Employeeid:string;
  EmployeeName:string;
  LocationName:string;
  DateofJoining:string;
  ProfilePhoto:string;
  PhotoFilePath:string;

  AccountsList:any=[];

  ngOnInit(): void {
    this.loadAccountsList();
  }

  loadAccountsList(){
    this.service.getAllAccountNames().subscribe((data:any)=>{
      this.AccountsList=data;

      this.Employeeid=this.emp.Employeeid;
      this.EmployeeName=this.emp.EmployeeName;
      this.LocationName=this.emp.LocationName;
      this.DateofJoining=this.emp.DateofJoining;
      this.ProfilePhoto=this.emp.ProfilePhoto;
      this.PhotoFilePath=this.service.PhotoUrl+this.ProfilePhoto;
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.Employeeid,
                EmployeeName:this.EmployeeName,
                LocationName:this.LocationName,
              DateofJoining:this.DateofJoining,
            ProfilePhoto:this.ProfilePhoto};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.Employeeid,
      EmployeeName:this.EmployeeName,
      LocationName:this.LocationName,
    DateofJoining:this.DateofJoining,
    ProfilePhoto:this.ProfilePhoto};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  UploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.ProfilePhoto=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.ProfilePhoto;
    })
  }

}
