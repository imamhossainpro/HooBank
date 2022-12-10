import React from 'react'
import styles from './style'
import  {Navbar, Hero, Business, Billing, CardDeal,  Button, Clients, CTA, FeedbackCard, Footer, Testimonials, GetStarted, Stats } from './components'
const App = () => {
  return (
    <div className="bg-primary w-full b">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App 