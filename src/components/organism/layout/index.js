import React, { useEffect } from "react"
import { Navigation } from "components/organism/navigation"
import { SchoolNav } from "components/organism/school-nav"
import SEO from "components/seo"
import { GlobalStyle, LayoutWrapper } from "./style"
import { Footer } from "components/organism/footer"

export const Layout = ({ title, children }) => {
  // useEffect(() => {
  //   // SCRIPT 1
  //   const script = document.createElement("script")
  //   script.src = "https://eu-us.productflare.com/newsfeedrunner"
  //   script.async = "true"
  //   document.getElementsByTagName("head")[0].appendChild(script)

  //   const link = document.createElement("link")
  //   link.href = "https://eu-us.productflare.com/newsfeedstyle"
  //   link.rel = "stylesheet"
  //   link.async = "true"
  //   document.getElementsByTagName("head")[0].appendChild(link)

  //   // SCRIPT 2
  //   const script2 = document.createElement("script")
  //   script2.type = "text/javascript"
  //   script.async = "true"
  //   script2.innerHTML = `
  //   window.onload = () => {
  //     initChangelog("Hot-Button","1593519963404x406700131158065150")
  //   }`
  //   document.getElementsByTagName("head")[0].appendChild(script2)

  //   return () => {
  //     document.getElementsByTagName("head")[0].removeChild(script2)
  //     document.getElementsByTagName("head")[0].removeChild(script)
  //   }
  // }, [])
  return (
    <LayoutWrapper>
      <GlobalStyle />
      {/*   <SEO /> */}
      <Navigation />
      <SchoolNav />
      <main style={{ minHeight: "calc(100vh - 70px)" }}>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}
