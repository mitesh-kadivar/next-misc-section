import React from 'react'
import Image from 'next/image'
import img from '../public/5.avif';

export default function petDogPage() {
  return (
    <>
    <div>
     <Image src={img} placeholder='blur' blurDataURL='data:image/avif'  alt='pet' width={280} height={420}/>
     {
        ['1', '2', '3', '4', '5', '6', '7', '8'].map((path) => {
            return (
                <div key={path}>
                    <Image src={`/${path}.avif`} alt='pet' width={280} height={420}/>
                </div>
            )
        })
     }
     </div>
    </>
  )
}
