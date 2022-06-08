import { Component, OnInit } from '@angular/core';
import { Course } from '../courses';
import { COURSES } from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  selectedCourse!: Course;
  course = new Course(0, '', '', '', '');
  //course = COURSES[0];
  courses = COURSES;

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  constructor() {}

  ngOnInit() {}
}
