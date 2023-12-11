import { MMKV } from "react-native-mmkv";

interface LessonStatus {
  [exerciseId: string]: boolean;
}

interface LessonsStatus {
  [lessonId: string]: LessonStatus;
}

interface ExerciseStatus {
  correctCount: number;
  wrongCount: number;
  lastAttemptIsCorrect: boolean;
}

interface ExercisesStatus {
  [exerciseId: string]: ExerciseStatus;
}

export class CacheClient {
  private readonly storage = new MMKV();

  private initializeExercisesStatus() {
    const exercisesStatus = this.getItem<ExercisesStatus>('exercisesStatus');
    console.log(exercisesStatus);
    if (!exercisesStatus) {
      const initialData: ExercisesStatus = {};
      this.saveItem('exercisesStatus', initialData);
      return initialData;
    }

    return exercisesStatus;
  }

  private initializeLessonsStatus() {
    const lessonsStatus = this.getItem<LessonsStatus>('lessonsStatus');

    if (!lessonsStatus) {
      const initialData: LessonsStatus = {};
      this.saveItem('lessonsStatus', initialData);
      return initialData;
    }

    return lessonsStatus;
  }

  getItem<T>(key: string): T | null {
    try {
      const stringValue = this.storage.getString(key) || '';
      const data = JSON.parse(stringValue);

      if (!data) {
        this.saveItem(key, '');
        return this.getItem<T>(key);
      }

      return data as T;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  saveItem(key: string, value: string | object) {
    try {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }

      this.storage.set(key, value);
    } catch (error) {
      console.error('Error saving item:', error);
    }
  }

  increaseCount(exerciseId: string, countType: 'correctCount' | 'wrongCount') {
    try {
      const exercisesStatus = this.initializeExercisesStatus();

      exercisesStatus[exerciseId] = exercisesStatus[exerciseId] || {
        correctCount: 0,
        wrongCount: 0,
        lastAttemptIsCorrect: false,
      };

      exercisesStatus[exerciseId][countType]++;

      this.saveItem('exercisesStatus', exercisesStatus);
    } catch (error) {
      console.error('Error increasing count:', error);
    }
  }

  setAttempt(exerciseId: string, isCorrect: boolean) {
    try {
      const exercisesStatus = this.initializeExercisesStatus();

      if (exercisesStatus[exerciseId]) {
        exercisesStatus[exerciseId].lastAttemptIsCorrect = isCorrect;
        this.saveItem('exercisesStatus', exercisesStatus);
      }
    } catch (error) {
      console.error('Error setting attempt:', error);
    }
  }

  insertLessonStatus(lessonId: string, exerciseId: string, value: boolean) {
    try {
      const lessonsStatus = this.initializeLessonsStatus();

      lessonsStatus[lessonId] = lessonsStatus[lessonId] || {};
      lessonsStatus[lessonId][exerciseId] = value;

      this.saveItem('lessonsStatus', lessonsStatus);
    } catch (error) {
      console.error('Error inserting lesson status:', error);
    }
  }

  deleteLessonStatus(lessonId: string, exerciseId: string) {
    try {
      const lessonsStatus = this.initializeLessonsStatus();

      lessonsStatus[lessonId] = lessonsStatus[lessonId] || {};
      delete lessonsStatus[lessonId][exerciseId];

      this.saveItem('lessonsStatus', lessonsStatus);
    } catch (error) {
      console.error('Error inserting lesson status:', error);
    }
  }
}

const cache = new CacheClient();

export default cache;
