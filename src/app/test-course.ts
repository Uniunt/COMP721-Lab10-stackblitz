import { Course } from './courses';

export const COURSES: Course[] = [
  // ----insert array of five courses with ID here-----
  new Course(1, 'Web Development', 'One', 'Dr. Jian Yu', 'Wedmesday 4-6pm'),
  new Course(10, 'Cloud Computing', 'TBD', 'TBD', 'TBD'),
  new Course(11, 'Information Security', 'TBD', 'TBD', 'TBD'),
  new Course(12, 'Operating System', 'TBD', 'TBD', 'TBD'),
  new Course(13, 'Networking', 'One', 'Jim Buchan', 'Friday 4-6pm'),
];

export class TestCourse {}
