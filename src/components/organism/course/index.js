import React, { useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { MdBookmarkBorder } from "react-icons/md"
import { convertRoleUI } from "constants/roles"
import { useStickyState } from "hooks/useStickyState"
import { BsArrowLeftShort } from "react-icons/bs"
import { VideoPlayer } from "components/atoms/video-player"
import { VideoContent } from "components/organism/video-content"
import { CourseContext } from "providers/course-provider"
import useGetUser from "hooks/useGetUser"
import * as ROUTES from "constants/routes"

import {
  ComponentContainer,
  Header,
  VideoContainer,
  VideoInfos,
  WelcomeCourse,
} from "./style"

export const Course = ({ item }) => {
  const { courseState, setCourseState } = useContext(CourseContext)
  const { userData } = useGetUser()

  useEffect(() => {
    if (!courseState) {
      setCourseState([{ courseId: item.id, currentLesson: 0, wistiaId: null }])
    } else {
      courseState.map(course => {
        if (courseState.findIndex(x => x.courseId === item.id) !== -1) return
        else {
          setCourseState(state => [
            ...state,
            { courseId: item.courseId, currentLesson: 0, wistiaId: null },
          ])
        }
      })
    }
  }, [])

  if (!courseState) return <p>Loading</p>

  const currentCourse =
    courseState && courseState.find(obj => obj.courseId === item.id)
  const position = currentCourse.currentLesson

  const handleStartLesson = (lesson, wistiaId) => {
    let newArray = [...courseState]
    let pos = newArray.findIndex(obj => obj.courseId === item.id)
    newArray[pos] = {
      courseId: item.id,
      currentLesson: item.lessons[0].lesson,
      wistiaId: item.lessons[0].wistiaId,
    }
    setCourseState(newArray)
  }

  const TitleUI = () => {
    console.log(position)
  }

  return (
    <ComponentContainer>
      <Header>
        <button onClick={() => navigate(ROUTES.COURSES)}>
          {" "}
          <BsArrowLeftShort /> Indietro
        </button>
        <h1>{item.title}</h1>
        <p>Creato da {item.madeByFullName}</p>
      </Header>
      <VideoInfos>
        <p className="type">{item.type.replace("_", " ")}</p>
        <p className="role">{convertRoleUI(item.role)}</p>
      </VideoInfos>

      {position === 0 ? (
        <WelcomeCourse>
          <h3>
            👏 Complimenti <span>{userData.getUser.firstName}</span>,
          </h3>
          <h5>
            stai per iniziare questo nuovo corso, ricordati che per ottenere il
            miglior risultato è importantissimo fare gli esercizi e seguire i
            consigli che incontrerai durante il percorso.
            <br />
            <br />
            Buona fortuna e ricordati che puoi dare un occhio alla descrizione e
            alle note qua sotto 👇.
          </h5>
          <button onClick={handleStartLesson}>Inizia</button>
        </WelcomeCourse>
      ) : (
        <VideoContainer>
          <VideoPlayer id={currentCourse.wistiaId} />
        </VideoContainer>
      )}

      <VideoContent item={item} />
    </ComponentContainer>
  )
}
