import React from "react"
import { checkBlockAccess } from "utils/blockAccess"
import useGetUser from "hooks/useGetUser"
import { MdBookmarkBorder, MdLock } from "react-icons/md"
import { WiTime3 } from "react-icons/wi"
import { AiFillSignal, AiOutlinePlayCircle } from "react-icons/ai"
import { convertRoleUI } from "constants/roles"
import {
  CardWrapper,
  ImgRow,
  ContentRow,
  Duration,
  Description,
  Title,
  Level,
  Stats,
  MadeBy,
  BookMark,
  ButtonCta,
} from "./style"

export const MediaCard = ({ data, isCourse, thirdSize }) => {
  const { userData } = useGetUser()
  const role = userData && userData.getUser.role
  const requiredRole = data && data.role

  return (
    <CardWrapper
      class="custom-shape-divider-bottom-1595007141"
      style={checkBlockAccess(role, requiredRole) ? { opacity: ".4" } : null}
      thirdSize={thirdSize}
    >
      {!isCourse ? <AiOutlinePlayCircle className="videoIcon" /> : null}
      <ImgRow src={`https://picsum.photos/1200/900?random=${data.id}`} />
      <ContentRow>
        <Title>
          <h3>
            <span>{data.type.replace("_", " ")}.</span>
            <br /> {data.title}
          </h3>
          {isCourse ? (
            <Description>{data.description.slice(0, 150)} ...</Description>
          ) : null}
        </Title>

        <MadeBy>Creato da {data.madeByFullName}</MadeBy>

        <Stats>
          <Level>
            <p>
              <AiFillSignal /> {convertRoleUI(data.role)}
            </p>
          </Level>

          {checkBlockAccess(role, requiredRole) ? (
            <BookMark>
              {" "}
              <MdLock />
            </BookMark>
          ) : null}

          <Duration>
            {!isCourse ? (
              <p>
                <WiTime3 /> {data.duration.replace(":", " ")}
              </p>
            ) : null}
          </Duration>
        </Stats>
      </ContentRow>
      <ButtonCta>{isCourse ? "Inizia Corso" : "Guarda Ora"}</ButtonCta>
    </CardWrapper>
  )
}
