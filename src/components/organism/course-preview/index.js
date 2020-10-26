import React, { useEffect, useContext, useState } from "react"
import ProgressLabel from "react-progress-label"
import { CourseContext } from "providers/course-provider"
import {
  CoursePreviewContainer,
  CourseStats,
  Lesson,
  Nav,
  Number,
  Infos,
} from "./style"
import { MdDone } from "react-icons/md"

export const CoursePreview = ({ item }) => {
  const { courseState, setCourseState } = useContext(CourseContext)

  const currentCourse =
    courseState && courseState.find(obj => obj.courseId === item.id)
  const position = (currentCourse && currentCourse.currentLesson) || 0

  const progressBar = parseInt((100 * position) / item.lessons.length)

  console.log(courseState)

  const handleCourseState = (lesson, wistiaId) => {
    let newArray = [...courseState]
    let pos = newArray.findIndex(obj => obj.courseId === item.id)
    newArray[pos] = {
      courseId: item.id,
      currentLesson: lesson,
      wistiaId: wistiaId,
    }
    setCourseState(newArray)
  }

  const handleStartLesson = () => {
    let newArray = [...courseState]
    let pos = newArray.findIndex(obj => obj.courseId === item.id)
    newArray[pos] = {
      courseId: item.id,
      currentLesson: 0,
      wistiaId: item.lessons[0].wistiaId,
    }
    setCourseState(newArray)
  }

  if (!courseState) return <p>Loading</p>

  return (
    <CoursePreviewContainer>
      <CourseStats>
        <h1>
          {item.lessons.length} Lezioni
          {/* <br /> <span>Tot. 04 ore 54 min</span>{" "} */}
        </h1>
        <ProgressLabel
          progress={progressBar}
          fillColor="var(--secondary800)"
          trackColor="var(--primary800)"
          progressColor="var(--secondary800)"
          progressWidth={6}
          trackWidth={8}
          trackBorderWidth={3}
          stroke="var(--primary800)"
          trackBorderColor="var(--primary800)"
          cornersWidth={2}
          size={80}
          text={`${progressBar}%`}
          textProps={{
            x: "50%",
            y: "50%",
            dx: 2,
            dy: 8,
            textAnchor: "middle",
            style: {
              fontSize: 18,
              fontWeight: "300",
              fill: "#fff",
            },
          }}
        />
      </CourseStats>

      <Lesson
        active={position === 0 ? true : false}
        onClick={handleStartLesson}
      >
        <Nav active={position === 0}>
          <div> {position > 0 ? <MdDone /> : null}</div>
        </Nav>
        <Number># 0</Number>
        <Infos>
          <h5>Introduzione</h5>
        </Infos>
      </Lesson>
      {item.lessons.map(lesson => (
        <Lesson
          active={position === lesson.lesson ? true : false}
          key={lesson.lesson}
          onClick={() => handleCourseState(lesson.lesson, lesson.wistiaId)}
        >
          <Nav
            last={lesson.lesson === item.lessons.length ? true : false}
            active={lesson.lesson === position}
          >
            <div> {lesson.lesson < position ? <MdDone /> : null}</div>
          </Nav>
          <Number># {lesson.lesson}</Number>
          <Infos>
            <h5>{lesson.title}</h5>
            <p style={{ opacity: "0.4" }}>{lesson.duration}</p>
          </Infos>
        </Lesson>
      ))}
    </CoursePreviewContainer>
  )
}
