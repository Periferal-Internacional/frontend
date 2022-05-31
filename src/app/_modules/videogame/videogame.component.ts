import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
@Component({
  selector: 'videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideogameComponent implements OnInit, AfterViewInit {
  collapsed = false;
  constructor() { }

  async ngOnInit() {
  }

  sendEvent() {
    this.collapsed = !this.collapsed;
  }

  async ngAfterViewInit() {
    var buildUrl = "assets/Unity/Build";
      var config = {
        dataUrl: buildUrl + "/Web Build.data",
        frameworkUrl: buildUrl + "/Web Build.framework.js",
        codeUrl: buildUrl + "/Web Build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Periferal Internacional",
        productName: "Perinte",
        productVersion: "0.1",
        devicePixelRatio: 0
      };
      
      var container : any = document.querySelector("#unity-container");
      var canvas : any = document.querySelector("#unity-canvas");
      var loadingBar : any = document.querySelector("#unity-loading-bar");
      var progressBarFull : any = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton : any = document.querySelector("#unity-fullscreen-button");
      var mobileWarning : any = document.querySelector("#unity-mobile-warning");
      
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = 1;
        mobileWarning.style.display = "block";
        setTimeout(() => {
          mobileWarning.style.display = "none";
        }, 5000);
      } else {
        canvas.style.width = "960px";
        canvas.style.height = "600px";
      }
      loadingBar.style.display = "block";
  
      createUnityInstance(canvas, config, (progress: any) => {
        progressBarFull.style.width = 100 * progress + "%";
      }).then((unityInstance: any) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      }).catch((message: any) => {
        alert(message);
      });
  }

}
