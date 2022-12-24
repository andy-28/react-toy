import { useState, useEffect } from 'react'
import clone from '../json/clone.json'
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
    faXmark,
    faUser,
} from '@fortawesome/free-solid-svg-icons'

import './wsp-gallery.css'

const WSPGallery = ({ galleryImages }) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)


    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }
    const [loading, setLoading] = useState(false)
        useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
     }, 3000)
    }, [])

    return (
        <div>

            {openModal &&
                <div className='sliderWrap'>
                    <FontAwesomeIcon icon={faXmark} className='btnClose' onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                </div>
            }

            {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

            <div className='galleryWrap'>
                {
                    loading ?
                    <ClipLoader
                      color={'#6F2ADD'}
                      loading={loading}
          
                      size={80}
          
                    />
                    :
                    galleryImages && galleryImages.map((slide, index) => {
                        return (
                            <div
                                className='single'
                                key={slide.id}
                                onClick={() => handleOpenModal(index)}
                            >
                            
                                <img src={slide.img} alt='' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default WSPGallery