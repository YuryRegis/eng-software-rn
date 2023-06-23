export interface IUserState {
  user: {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    student: boolean;
    mentor: boolean;
    admin: boolean;
    university_id: number | null;
    course_id: number | null;
    profile: {
      id: number;
      first_name: string;
      last_name: string;
      created_at: string;
      date_of_birth: string;
      university_period: number;
      updated_at: string;
      bio: string | null;
    } | null;
    university: {
      id: number;
      name: string;
      created_at: string;
      updated_at: string;
    } | null;
    course: {
      id: number;
      name: string;
      created_at: string;
      updated_at: string;
    } | null;
  };
}

export interface ISubjectState {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ICoursesState {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
