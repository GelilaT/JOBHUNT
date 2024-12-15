import React from 'react'
import { useGetJobsQuery } from '@/redux/slices/jobApi'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Joblist = () => {
    const { data, error, isLoading } = useGetJobsQuery()
    
    if (isLoading) { 
        return (
            <div className='mx-auto my-auto'>
                <Image src={'/logo.png'} alt="loading" width={100} height={100} />
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div>
            {data?.data?.map((d) => (
                <div key={d.id} className='flex justify-center items-center p-4 border-2 border-button-border gap-10 px-16 mb-10 hover:-translate-y-1 hover:cursor-pointer'>
                    
                    <div>
                        <p className='text-lg w-48 pb-2'>{d.title}</p>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <p className='text-sm'>{d.location}</p>
                        </div>
                    </div>  
                    <div className="h-24 border-2 border-button-border"></div>
                    <div>
                        <p>{d.opType}</p>
                    </div>
                    <div className="h-24 border-2 border-button-border"></div>

                    <button className='bg-button-hover border py-2 px-6 border-button-border hover:bg-button'>View job</button>
                </div>
            ))}
        </div>
    )
}

export default Joblist
