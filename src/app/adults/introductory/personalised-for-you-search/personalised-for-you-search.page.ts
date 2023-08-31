import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalised-for-you-search',
  templateUrl: './personalised-for-you-search.page.html',
  styleUrls: ['./personalised-for-you-search.page.scss'],
})
export class PersonalisedForYouSearchPage implements OnInit {

  searchResult = [];
  personalisedforyou = []

  indList = []
  isloggedIn = false;
  searchinp = '';
  public user: any
  public userId = 100
  public idToken: any
  public email: any;
  public showAlert = false
  public loginResponse: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public userName: any
  public video = 3
  public audio = 4
  public password: any
  public saveUsername = false
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public moduleList = [];
  public alertMsg: any
  public qrList: any
  public goToPage: any
  public benefitsWisdomP: any
  public discoveringP: any
  public guideP: any
  public identityP: any
  public keyP: any
  public fiveCirclesP: any
  public hcwhP: any
  public percentage: any

  mediaPercent: any
  freeScreens = []
  isWelcomePopup = false;
  public isSubscribe = false
  public modaldata = {}
  public x = []
  public text = 2
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  public bookmarks = []
  public resume = []
  public bookmarkLength: any

  constructor(
  ) {

  }

  ngOnInit() {
   
  }

  getModuleList(isLoad?) {
   
  }
  getAutoCompleteList(value) {
    
  }

  getUserPreference() {
    

  }

  getinp(event) {
 
  }

  searchEvent(module) {
  
  }
  onFocus(){

  }
  onFocusOutEvent(){
    
  }

  clickbtn(name, val = '', event, ind, id) {
   
  }

  loginpage() {
  }

  googleLogin() {
  }

  clearSearch() {
   
  }


  getProgress() {
  

  }




  // introduction
  routeDiscoveringWisdom(cont: any = 1) {
   
  }

  routeBenefits(cont: any = 1) {
  
  }

  routeCircles(cont: any = 1) {


  }

  routehowcanwisdomhelp(cont: any = 1) {


  }

  routeGuide(cont: any = 1) {
  
  }
  // /introduction

  loginadult(res) {

  }


  freescreens() {
  
  }

  getBookmarks() {
  
  }

  getclcickevent(event) {
    
  }

  goBack() {
  }

  Logevent(route, params, evtName) {
 
  }

  navigate(url) {
  }
}
