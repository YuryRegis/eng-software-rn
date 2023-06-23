import { getImageUrl } from "./util";
import { BehaviorSubject, map } from "rxjs";
import { ICoursesState, ISubjectState } from "./types";

export const rawCourses$ = new BehaviorSubject<ICoursesState[]>([]);
export const rawSubjects$ = new BehaviorSubject<ISubjectState[]>([]);

export const subjects$ = rawSubjects$.pipe(
  map((subjects) =>
    subjects.map((subject) => ({
      ...subject,
      mentors: 0,
      classes: 0,
      image: getImageUrl(subject.name),
    }))
  )
);

fetch("https://athena-api-staff.herokuapp.com/api/v1/courses")
  .then((response) => response.json())
  .then((data) => {
    rawCourses$.next(data.courses);
  });

export function getSubjects(query: string) {
  fetch(
    `https://athena-api-staff.herokuapp.com/api/v1/subjects?search_query=${query}`,
    { headers: { "Content-Type": "application/json" } }
  )
    .then((response) => response.json())
    .then((data) => {
      rawSubjects$.next(data.subjects);
    });
}
