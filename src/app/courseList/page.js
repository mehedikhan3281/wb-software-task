import { TbCurrencyTaka } from "react-icons/tb";

const getCourseList = async () => {
    const res = await fetch('https://itderbd.nextwebservice.com/api/get-course-list')
    const data = await res.json()
    return data.courseData
}

const CouseList = async () => {
    const courses = await getCourseList()
    return (
        <div className='mx-2'>
            <h2 className='text-center mt-8 text-3xl font-semibold mb-5'>Career Acceleration Courses</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    courses?.map(({id, course_name, regular_price, discount_price, photo}) => (
                        <div key={id} className=' bg-white border border-gray-300'>
                            <div>
                                <img className='w-full' src={photo} />
                            </div>
                            <div className='text-center p-2'>
                                <h4 className='font-semibold text-lg'>{course_name}</h4>
                                <div className='flex gap-4 items-center justify-center font-semibold my-4'>
                                    <span className='text-gray-600 line-through flex items-center'><TbCurrencyTaka className='text-xl' /> {regular_price}</span>
                                    <span className='text-red-600 flex items-center'><TbCurrencyTaka className='text-xl' /> {discount_price}</span>
                                </div>
                                <button className='mt-2 bg-blue-500 text-white py-2 px-4 rounded'>Apply Now</button>
                            </div>
                        </div>
                    )
                    )
                }

            </div>
        </div>
    );
};

export default CouseList;