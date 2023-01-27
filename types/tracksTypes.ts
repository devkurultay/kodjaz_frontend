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
};

export type Lesson = {
  id: number;
  name: string;
  entity_type: string;
  description: string;
  is_published: Boolean;
  lesson_exercises: Exercise[];
  unit: number;
  progress_data: string;
};

export type Unit = {
  id: number;
  name: string;
  entity_type: string;
  description: string;
  unit_lessons: Lesson[];
  is_published: Boolean;
  track: number;
  progress_data: string;
};

export type Track = {
  id: number;
  name: string;
  description: string;
  entity_type: string;
  track_units: Unit[];
  is_published: Boolean;
  programming_language: string;
  progress_data: string;
};

export type TrackById = {
  [key: number]: Track;
};

export type TrackByName = {
  [key: string]: Track;
};
