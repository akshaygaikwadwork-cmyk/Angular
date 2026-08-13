import { Component } from '@angular/core';

@Component({
  selector: 'app-styling-cssways',
  imports: [],
  //This is for external template and style files
  // templateUrl: './styling-cssways.html',
  // styleUrl: './styling-cssways.scss',

  //This is for inline template and style
  //You can use either external or inline, not both at the same time
  //If you use external, comment out the inline and vice versa

  templateUrl: './styling-cssways.html',
  // template: `
  //   <h2>Styling CSS Ways</h2>
  //   <p class="welcome-message">Welcome to Angular Styling!</p>
  // `,
  styleUrl: './styling-cssways.scss',

  // The following is for multiple external style files
  // styleUrls: ['./styling-cssways.scss','./styling-cssways2.scss'],

  // styles: [
  //   `
  //     .welcome-message {
  //       padding: 10px;
  //       background-color: yellow;
  //       border-radius: 5px;
  //     }
  //   `,
  // ],
})
export class StylingCSSWays {}
