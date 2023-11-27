import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  items: { image: string }[] = [
    { image: 'assets/image1.jpeg' },
    { image: 'assets/image2.jpeg' },
    { image: 'assets/image3.jpeg' },
    { image: 'assets/image4.jpeg' },
    { image: 'assets/image5.jpeg' },
    { image: 'assets/image6.jpeg' },
    { image: 'assets/image7.jpeg' },
    { image: 'assets/image8.jpeg' },
    { image: 'assets/image9.jpeg' }
    // Add more image objects here
  ];

}
