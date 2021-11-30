import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:55003/api";
  readonly PhotoUrl="http://localhost:55003/Profile"

  constructor(private http:HttpClient) { }

  getAccList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/account');
  }
  addAccount(val:any){
    return this.http.post(this.APIUrl+'/Account',val);
  }
  updateAccount(val:any){
    return this.http.put(this.APIUrl+'/Account',val);
  }
  deleteAccount(val:any){
    return this.http.delete(this.APIUrl+'/Account',val);
  }

  //----------

  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee',val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/Savedoc',val);

  }
  getAllAccountNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllAccountNames');
  }

}
