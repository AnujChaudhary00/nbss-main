import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  gallery = [
    'https://d18buiteds6yne.cloudfront.net/school-1.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-2.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-3.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-4.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-5.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-6.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-7.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-8.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-9.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-10.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-11.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-12.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-13.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-14.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-16.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-17.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-18.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-19.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-20.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-21.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-22.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-23.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-25.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-29.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-30.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-31.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-32.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-33.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-34.jpeg',
    'https://d18buiteds6yne.cloudfront.net/school-35.jpeg'
  ]

  selectedImage = this.gallery[0];
  showModal = false;
}
