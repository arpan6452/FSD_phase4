import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public baseURL = 'http://localhost:8090';
  constructor(private http: HttpClient) { }

  createUser(user){
    const userForm = {
      email: user.get("email").value,
      password: user.get("password").value,
      address1: user.get("address1").value,
      address2: user.get("address2").value,
      city: user.get("city").value,
      state: user.get("state").value,
      pincode: user.get("pincode").value,
    };
    return this.http.request('POST', `${this.baseURL}/registration`, {
      body: userForm,
    }).pipe(

    );
  }


  updatePassword(oldpassword, newpassword, user){
    // const userForm = {
    //   userid: user.get("userid").value,
    //   email: user.get("email").value,
    //   password: user.get("password").value,
    //   address1: user.get("address1").value,
    //   address2: user.get("address2").value,
    //   city: user.get("city").value,
    //   state: user.get("state").value,
    //   pincode: user.get("pincode").value,
    // };
    return this.http.request('PUT', `${this.baseURL}/updatePassword?oldPassword=${oldpassword}&newPassword=${newpassword}`, {
      body: user,
    }).pipe(

    );
  }

  login(username: string, password: string){
    return this.http.get(`${this.baseURL}/login?username=${username}&password=${password}`);
  }
}
