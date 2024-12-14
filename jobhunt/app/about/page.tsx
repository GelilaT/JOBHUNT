'use client'
import { useGetJobsQuery } from '@/redux/slices/jobApi'
import React from 'react'

// interface AboutProps {}
const About = () => {
  const { data, error, isLoading } = useGetJobsQuery()
  return (
    <div>
      
      {data?.data?.map((d) => (
        <p>{d.title}</p>
        
      ))
        
      }
    </div>
  )
}

export default About
