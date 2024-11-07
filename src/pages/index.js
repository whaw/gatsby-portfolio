import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import 'scss/styles.scss'

const IndexPage = () => {

  // adding domLoaded handler to address hydration error on server
  // this is a SSR issue that occurs in the Gatsby minification process
  // creating the site - running code dependant on the dom - before dom is loaded
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && <Layout />}
    </>
  )
}

export default IndexPage