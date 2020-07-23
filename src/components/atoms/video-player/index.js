import React, { useEffect, useContext } from "react"
import { CourseContext } from "providers/course-provider"

export const VideoPlayer = ({ id }) => {
  const { courseState } = useContext(CourseContext)

  useEffect(() => {
    const script2 = document.createElement("script")
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script2)

    const frame = document.getElementById("iframe-wistia")
    frame.src = `https://fast.wistia.net/embed/iframe/${id}?videoFoam=false`

    return () => {
      document.body.removeChild(script2)
    }
  }, [id])

  return (
    <div
      class="wistia_responsive_padding"
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
        border: "4px solid var(--cleanBlack)",
        boxShadow: "var(--shadow-xs)",
        borderRadius: "10px",
      }}
    >
      <div
        class="wistia_responsive_wrapper"
        style={{
          height: "100%",
          left: "0",
          position: "absolute",
          top: "0",
          width: "100%",
        }}
      >
        <iframe
          id="iframe-wistia"
          title=""
          allow="autoplay; fullscreen"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowfullscreen
          msallowfullscreen
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>
    </div>
  )
}
