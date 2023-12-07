import React, { useState, useEffect } from "react";
import { NativeWindStyleSheet } from "nativewind";
import Modules from "./Modules";
import Lessons from "./LessonList";
import lessonsMock from './fixtures/lessons.json';
import Exercises from "./ExerciseList";
import Exercise from "../Exercise/Exercise";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  const [page, setPage] = useState<'Modules' | 'Lessons' | 'Exercises' | 'Exercise'>('Modules');
  const [moduleId, setModuleId] = useState<string>('');
  const [lessonId, setLessonId] = useState<string>('');
  const [exerciseId, setExerciseId] = useState<string>('');
  const [exercises, setExercises] = useState<any>([]);
  const [exercise, setExercise] = useState<typeof lessonsMock[0]['exercises'][0]>();
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    const data = lessonsMock.filter(lesson => lesson.moduleId === moduleId);
    setLessons(data);
  }, [moduleId]);

  useEffect(() => {
    const data = lessonsMock.filter(lesson => lesson.id === lessonId);
    setExercises(data[0]?.exercises || []);
  }, [lessonId]);

  useEffect(() => {
    const data = lessonsMock[0]?.exercises.filter(exercise => exercise.id === exerciseId);
    setExercise(data as any || [] as any);
  }, [exerciseId]);

  function handleModulesOnClick(id: string = '') {
    setModuleId(id);
    setPage('Lessons');
  }

  function handleLessonsOnClick(id: string = '') {
    setLessonId(id);
    setPage('Exercises');
  }

  function handleExercisesOnClick(id: string = '') {
    setExerciseId(id);
    setPage('Exercise');
  }

  return (
    <>
      {page === 'Modules' ? <Modules onClick={handleModulesOnClick} /> : null}
      {page === 'Lessons' ? <Lessons data={lessons} onClick={handleLessonsOnClick}/> : null}
      {page === 'Exercises' ? <Exercises data={exercises} onClick={handleExercisesOnClick} /> : null}
      {page === 'Exercise' ? <Exercise alternatives={[{title: 'a', onPress: ()=>{}, isDisabled: false}]} statement={{title: 'M-Sync', description: exercise?.description as any}} /> : null}
    </>
  );
};

export default Home;
