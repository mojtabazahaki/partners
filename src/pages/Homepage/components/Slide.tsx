import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import { dataSlider, SliderType } from '../DataSlide';


const Slider: React.FC = () => {


    return (
        <div className='h-auto w-full flex'>
            <div className=' w-full max-[354px]:!py-[10px] bg-white mt-16 max-lg:!pr-[77px] pr-[50px] pl-[35px] py-[66px] max-lg:!pl-[57px] '>
                <div className='  w-full  '>
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}

                        modules={[Pagination]}

                        spaceBetween={0}
                        slidesPerView={3.99}
                        className='w-[103%] mySwiper'
                        breakpoints={{
                            300: {
                                slidesPerView: .99,
                                spaceBetween: 0,
                            },

                            570: {
                                slidesPerView: 1.99,
                                spaceBetween: 0,
                            },

                            670: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                            911: {
                                slidesPerView: 3.5,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 3.99,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {
                            dataSlider.map((data: SliderType) => {

                                return (
                                    <SwiperSlide key={data.id}>
                                        <div className=' mt-6 bg-[#F5F5F5] h-[13.5rem] py-[34px] rounded-[3px] px-[14px] w-[13.8rem]'>
                                            <div className='flex items-center  justify-between'>
                                                <span>
                                                    <i className='before:flex before:content-[url(assets/Stars1.svg)]'></i>
                                                </span>
                                                <span>
                                                    <h3>
                                                        {data.day}
                                                    </h3>
                                                </span>
                                            </div>
                                            <div className=' my-[10px]'>
                                                <h3 className=' text-[13px]  font-bold'>{data.Issue}</h3>
                                            </div>
                                            <section className=' my-[10px]'>
                                                <p className=' text-[11px] h-[3rem]'>{data.explanation}</p>
                                            </section>
                                            <hr />
                                            <div className=' my-[10px]'>
                                                <h3 className=' text-[14px] font-bold'>{data.person}</h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="flex  justify-center mt-6 max-[332px]:flex-col">
                    <div >
                        <h3 className=" font-light">Excellent</h3>
                    </div>
                    <div className="ml-[1rem] max-[332px]:!ml-0 font-light">
                        <i className="not-italic font-[500]">4.9</i> out of 5
                    </div>
                    <div className="ml-[1rem] max-[332px]:!ml-0">
                        <h3 className="font-[600]">Trustpilot</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Slider;