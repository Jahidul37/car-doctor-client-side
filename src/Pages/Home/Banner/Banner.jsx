import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className=' relative w-full opacity-90'>
                        <img className=' h-[800px] w-full' src={banner1} alt="" />
                        <div className=' absolute top-[30%] my-auto left-[10%] w-[40%]  text-slate-50 '>
                            <h1 className=' text-5xl font-bold' >Affordable
                                <br /> Price For Car <br />  Servicing</h1>
                            <p className='mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=' mt-5'>
                                <button className="btn btn-outline btn-error ">Discover More</button>
                                <button className="btn btn-outline btn-info ml-2">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative w-full opacity-90'>
                        <img className=' h-[800px] w-full' src={banner2} alt="" />
                        <div className=' absolute top-[30%] my-auto left-[10%] w-[40%]  text-slate-50 '>
                            <h1 className=' text-5xl font-bold' >Affordable
                                <br /> Price For Car <br />  Servicing</h1>
                            <p className='mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=' mt-5'>
                                <button className="btn btn-outline btn-error ">Discover More</button>
                                <button className="btn btn-outline btn-info ml-2">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative w-full opacity-90'>
                        <img className=' h-[800px] w-full' src={banner3} alt="" />
                        <div className=' absolute top-[30%] my-auto left-[10%] w-[40%]  text-slate-50 '>
                            <h1 className=' text-5xl font-bold' >Affordable
                                <br /> Price For Car <br />  Servicing</h1>
                            <p className='mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=' mt-5'>
                                <button className="btn btn-outline btn-error ">Discover More</button>
                                <button className="btn btn-outline btn-info ml-2">Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;