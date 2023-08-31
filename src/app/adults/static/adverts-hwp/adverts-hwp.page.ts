import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adverts-hwp',
  templateUrl: './adverts-hwp.page.html',
  styleUrls: ['./adverts-hwp.page.scss'],
})
export class AdvertsHwpPage implements OnInit {

  login = 'Login';
  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public countryCode: any = '';
  public cardlist = []
  public firstpage = true;
  public secondpage = false;
  public thirdpage = false;
  public fourthpage = false;
  public fifthpage = false;
  public sixthpage = false;
  public loginemail: any = '';
  public userId = 100
  public email: any = '';
  public verificationCode: any;
  public loginpassword: any = '';
  public subthirdpage = false;
  public subfirstpage = true;
  public subsecondpage = false;
  public user: any
  public idToken: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public yearormonth = ''
  public modaldata = {}
  public activationCode: any = ''
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  public video = 3
  public audio = 4
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public userName: any
  public showWarning = false


  enableAlert = false;
  content = '';
  enablecancel = false;
  public registrationForm : any;
  constructor(

  ) {

   
  }

  ngOnInit() {

  }

  getCountry() {
   
  }

  getPricing() {

  }

  get fname() {
    return this.registrationForm.get('fname')
  }
  get lname() {
    return this.registrationForm.get('lname')
  }
  get emailvalid() {
    return this.registrationForm.get('email')
  }
  get passwordvalid() {
    return this.registrationForm.get('password')
  }
  get confirmpasswordvalid() {
    return this.registrationForm.get('confirmPassword')
  }



  clickbanner(url = '') {
 
  }

  getcode(value) {
    this.activationCode = value;
  }

  verifyactkey() {

  }

  routedashboard(val = '') {

  }

  emaillogin(val = '') {

  }

  googleLogin(d = '') {
 
  }

  fbLogin(d = '') {

  }

  route_adverts_hwp() {
  }

  Logevent() {
  
  }

  navigate(url, event){
    
  }

  getAlertcloseEvent(event) {
  }
}
