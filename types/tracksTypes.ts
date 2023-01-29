export type ProgressData = {
  is_complete: Boolean;
  is_in_progress: Boolean;
};

export type Exercise = {
  id: number;
  name: string;
  entity_type: string;
  lecture: string;
  instruction: string;
  hint?: string;
  default_code: string;
  previous_exercise?: string;
  next_exercise?: number;
  is_published: Boolean;
  lesson: number;
  unit_id: number;
  track_id: number;
  progress_data?: ProgressData;
};

export type Lesson = {
  id: number;
  name: string;
  entity_type: string;
  description: string;
  is_published: Boolean;
  lesson_exercises: Exercise[];
  unit: number;
  progress_data?: ProgressData;
};

export type Unit = {
  id: number;
  name: string;
  entity_type: string;
  description: string;
  unit_lessons: Lesson[];
  is_published: Boolean;
  track: number;
  progress_data?: ProgressData;
};

export type Track = {
  id: number;
  name: string;
  description: string;
  entity_type: string;
  track_units: Array<Unit>;
  is_published: Boolean;
  programming_language: string;
  progress_data?: ProgressData;
};

export type EntityByName<T> = {
  [key: string]: T;
};

export type EntityById<T> = {
  [key: number]: T;
};

export type Subscription = {
  id: number;
  track: number;
  user: number;
};

export type Submission = {
  id: number;
  submitted_code: string;
  exercise: number;
  console_output: string;
  error_message: string;
};
