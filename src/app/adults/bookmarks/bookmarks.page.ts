import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  public bookmarkList = [];
  public userName: string;
  public allkeys = [];
  public urlPath = 'https://www.humanwisdom.info/';
  // public urlPath = 'http://ec2-18-132-47-231.eu-west-2.compute.amazonaws.com:88/';
  public qrList: any
  public userId = 100
  public goToPage: any
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  public points: any
  public daysVisited: any
  public timeSpent: any
  public percentage: any
  public resume = []
  public stressP: any
  public relationshipsP: any
  public communicationP: any
  public loveP: any
  public successandfailureP: any
  public happinessP: any
  constructor() { }

  ngOnInit() {
  }
  routeRelationships(x){

  }
}
