

const BannerSkeleton = () => {
    return (
        <div className="mx-2 my-4 md:mt-4 flex md:gap-2 flex-col md:flex-row animate-pulse">
            <div className='bg-gray-300 rounded-sm py-8 px-5 mb-2 border-2 border-gray-300 md:w-1/2'>
                {/* text section skeleton */}
                <div className='space-y-4'>
                    <div className="h-8 bg-gray-400 rounded-sm w-3/4"></div>
                    <div className="h-6 bg-gray-400 rounded-sm w-2/4"></div>
                    <div className="h-6 bg-gray-400 rounded-sm w-4/5"></div>
                </div>
                
                <div className='mt-16 flex gap-4'>
                    <div className="h-12 bg-gray-400 rounded-3xl w-36"></div>
                    <div className="h-12 bg-gray-400 rounded-3xl w-40"></div>
                </div>
            </div>

            {/* youtube section skeleton */}
            <div className='bg-gray-300 rounded-sm mb-2 p-1 border-2 border-gray-300 md:w-1/2'>
                <div className="w-full h-56 bg-gray-400 rounded"></div>
            </div>
        </div>
    );
};

export default BannerSkeleton;
