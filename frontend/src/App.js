import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './routes'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>{routes}</Container>
      </main>
      <Footer />
    </>
  )
}

export default App
