import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  images = [
    {
      url: 'https://d18buiteds6yne.cloudfront.net/school-23.jpeg',
      title: '<h1 class="text-5xl">Nurturing Minds, <br> Nurturing Future, Nurturing Rural</h1>',
      description: ' Nurturing Minds, Nurturing Future, Nurturing Rural'
    },
    {
      url: 'https://d18buiteds6yne.cloudfront.net/school-26.jpeg',
      title: '<h1 class="text-5xl">Give your child best Affordable Education<h1>',
      description: 'Give your child best Affordable Education'
    },
    {
      url: 'https://d18buiteds6yne.cloudfront.net/school-8.jpeg',
      title: '<h1 class="text-5xl">Give your child best Affordable Education<h1>',
      description: 'Give your child best Affordable Education'
    },
    {
      url: 'https://d18buiteds6yne.cloudfront.net/school-23.jpeg',
      title: '<h1 class="text-5xl">Nurturing Minds, <br> Nurturing Future, Nurturing Rural</h1>',
      description: ' Nurturing Minds, Nurturing Future, Nurturing Rural'
    },
    {
      url: 'https://d18buiteds6yne.cloudfront.net/school-26.jpeg',
      title: '<h1 class="text-5xl">Give your child best Affordable Education<h1>',
      description: 'Give your child best Affordable Education'
    }
  ];

  leadership = [
    {
      name: 'Shiksha Devi',
      image: 'http://newbalshikshasadan.com.s3-website-us-east-1.amazonaws.com/mom.jpg',
      about: 'shiksha Devi is a dynamic leader with a passion for innovation. With over a decade of experience in the industry, Vivek has a proven track record of driving growth and improving operations. He is known for his strategic thinking and ability to inspire teams.',
      // add more properties as needed
    },
    {
      name: 'Vivek Chaudhary',
      image: 'https://d18buiteds6yne.cloudfront.net/school-23.jpeg',
      about: 'Vivek Chaudhary is a dynamic leader with a passion for innovation. With over a decade of experience in the industry, Vivek has a proven track record of driving growth and improving operations. He is known for his strategic thinking and ability to inspire teams.',
      // add more properties as needed
    },
    // add more people as needed
  ];

  holidays = [
    {date: '2022-01-01', reason: 'New Year'},
    {date: '2022-01-14', reason: 'Makar Sankranti'},
    {date: '2022-01-26', reason: 'Republic Day'},
    {date: '2022-03-29', reason: 'Holi'},
    {date: '2022-04-02', reason: 'Good Friday'},
    {date: '2022-04-14', reason: 'Ambedkar Jayanti'},
    {date: '2022-05-01', reason: 'May Day'},
    {date: '2022-08-15', reason: 'Independence Day'},
    {date: '2022-10-02', reason: 'Gandhi Jayanti'},
    {date: '2022-10-15', reason: 'Vijaya Dashami'},
    {date: '2022-11-04', reason: 'Diwali'},
    {date: '2022-12-25', reason: 'Christmas'}
  ]
  
  currentIndex = 0;

  announcements = [
    { title: 'Admission Open', description: 'Admission Open for 2022-2023', date: '2022-01-01' },
    { title: 'Scholarship Program', description: 'Apply for our new scholarship program for 2022', date: '2022-02-01' },
    { title: 'New Course Available', description: 'Introduction to Artificial Intelligence now available', date: '2022-03-01' },
    { title: 'Summer Camp', description: 'Join our summer camp starting June 2022', date: '2022-04-01' },
    { title: 'Guest Lecture', description: 'Renowned physicist visiting for a special lecture', date: '2022-05-01' },
    { title: 'Internship Opportunities', description: 'Internship applications for summer 2022 are open', date: '2022-06-01' },
    { title: 'Alumni Meet', description: 'Annual alumni meet scheduled for July 2022', date: '2022-07-01' },
    { title: 'Faculty Recruitment', description: 'Hiring faculty for various departments', date: '2022-08-01' },
    { title: 'Research Grant', description: 'Apply for research grants available for 2022', date: '2022-09-01' },
    { title: 'Workshop', description: 'Workshop on Data Science in October 2022', date: '2022-10-01' },
    { title: 'Conference', description: 'Annual conference scheduled for November 2022', date: '2022-11-01' },
    { title: 'Holiday Notice', description: 'Winter holidays starting from December 2022', date: '2022-12-01' }
  ]

  news =[
    { title: 'University Rankings Released', description: 'Our university ranked in the top 10 nationally', date: '2022-01-15' },
    { title: 'New Campus Inaugurated', description: 'New campus with state-of-the-art facilities inaugurated', date: '2022-02-20' },
    { title: 'Research Paper Published', description: 'Faculty members have published a research paper in a prestigious journal', date: '2022-03-05' },
    { title: 'Students Win Hackathon', description: 'Our students won the national level hackathon', date: '2022-04-10' },
    { title: 'Alumni Donation', description: 'Alumni donated for the development of a new library', date: '2022-05-15' },
    { title: 'Faculty Awarded', description: 'A faculty member has been awarded for their research work', date: '2022-06-20' },
    { title: 'Student Exchange Program', description: 'Student exchange program with a foreign university announced', date: '2022-07-05' },
    { title: 'New Courses Introduced', description: 'New courses introduced for the upcoming academic year', date: '2022-08-10' },
    { title: 'Sports Meet Success', description: 'Annual sports meet concluded with a grand success', date: '2022-09-15' },
    { title: 'Cultural Fest', description: 'Cultural fest to be held in October', date: '2022-10-20' },
    { title: 'Webinar Series', description: 'A series of webinars on various topics to be held in November', date: '2022-11-05' },
    { title: 'Convocation Ceremony', description: 'Annual convocation ceremony to be held in December', date: '2022-12-10' }
  ]

  schoolLife =[
    { title: 'Sports', description: 'We have a state-of-the-art sports complex with facilities for various sports', image: 'https://picsum.photos/400/250' },
    { title: 'Library', description: 'Our library has a vast collection of books, journals, and e-resources', image: 'https://picsum.photos/400/250' },
    { title: 'Laboratories', description: 'We have well-equipped laboratories for various subjects',  image: 'https://d18buiteds6yne.cloudfront.net/school-35.jpeg' },
    { title: 'Cafeteria', description: 'Our cafeteria serves healthy and hygienic food for students and staff', image: 'https://picsum.photos/400/250' },
    { title: 'Hostel', description: 'We have separate host', image: 'https://picsum.photos/400/250' },
    { title: 'Extra Curricular', description: 'We have separate Room For Extra Curricular Activity', image: 'https://d18buiteds6yne.cloudfront.net/school-30.jpeg' }
  ]

  constructor(private cdRef: ChangeDetectorRef  ) {
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        this.currentIndex = 0;
      }
      this.cdRef.detectChanges();
    }, 3000);
  }

  cards = [
    { title: 'Main Card', description: 'This is the main card content' },
    { title: 'Card 1', description: 'This is card 1 content' },
    { title: 'Card 2', description: 'This is card 2 content' },
    // Add more cards as needed
  ];

  mainCard = this.cards[0];
}
