import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import limits from '../../styles/Limits.module.css'
import { Button } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';

import cn from 'classnames'

import CEO from './assets/images/CEO.png'
import COO from './assets/images/COO.png'
import SSE from './assets/images/SSE.png'
import SSE2 from './assets/images/SSE2.png'
import SSE3 from './assets/images/SSE3.png'

const data = [
  {
    title: "Leadership",
    employees: [
      {
        name: "Saqlain Raza",
        position: "CEO & Co-Founder",
        image: CEO
      },
      {
        name: "Saif Ali",
        position: "COO & Co-Founder",
        image: COO
      },
    ]
  },
  {
    title: "Product",
    employees: [
      {
        name: "Raza",
        position: "Senior Software Engineer",
        image: SSE
      },
      {
        name: "Yahya",
        position: "Senior Software Engineer",
        image: SSE2
      },
      {
        name: "Daniyal",
        position: "Software Engineer",
        image: SSE3
      },
      {
        name: "Hassan",
        position: "Associate Software Engineer",
        image: CEO
      },
      {
        name: "Anas Mohsen",
        position: "Software Engineer",
        image: COO
      },
      {
        name: "Anas Sohail",
        position: "Product Designer",
        image: SSE
      },
    ]
  },
  {
    title: "Customer Success",
    employees: [
      {
        name: "Mubarak",
        position: "Sales Executive",
        image: SSE2
      },
      {
        name: "Saim Iraque",
        position: "Customer Support",
        image: SSE3
      },
      {
        name: "Ahsan Jaffery",
        position: "Customer Support",
        image: SSE3
      },
    ]
  },
]

function MeetThePack() {
  return (
    <>
      <div className={styles.BG}>
        <div className={limits.Limit}>
          <div className={styles.Container}>
            <div className={styles.Head}>
              <div className={styles.Title}>
                <h1>
                  Meet the  <span className={styles.underLine}> Asaan pack!</span>
                </h1>
              </div>
              <div className={styles.SubTitle}>
                <h3>
                  Driven by Passion, Fueled by Innovation.
                </h3>
                <h3>

                  Together, we create solutions that inspire success.
                </h3>
              </div>
            </div>
            <div className={styles.Data}>
              {/* <div className={styles.Left}>
                {data?.map((item, index) => (
                  <>
                  <div className={styles.EmployeeBoxTitle}>
                    <h2>
                      {item?.title}
                    </h2>
                  </div>
                  </>
                ))}
              </div> */}
              <div className={styles.Right}>
                {data?.map((item, index) => (
                  <div className={styles.EmloyeeRowContainer}>
                    
                    <div className={cn(styles.EmployeeBoxTitle)}>
                      <h2>
                        {item?.title}
                      </h2>
                    </div>
                    
                    <ScrollAnimation animateIn="animate__fadeInRight">

                    <div className={styles.EmployeeBox}>

                      {item?.employees?.map((employee, index) => (
                        <>
                          <div className={styles.Employee}>
                            <div className={styles.EmployeeImage}>
                              <Image src={employee.image} alt="" />
                            </div>
                            <div className={styles.EmployeeNameNPosition}>
                              <div className={styles.EmployeeName}>
                                <h3>
                                  {employee.name}
                                </h3>
                              </div>
                              <div className={styles.EmployeePosition}>
                                <h3>
                                  {employee.position}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default MeetThePack