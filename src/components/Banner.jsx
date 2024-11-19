import iconRating from "../assets/rating.png";
import iconRatingHalf from "../assets/rating-half.png";
import imgTemp from "../assets/temp1.png";
import iconPlay from "../assets/pngegg.png";
const Banner = () => {
  return (
    <div className="w-full h-[800px] bg- bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-l py-2 px-3">
            TV Shows
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-[40px] font-bold text-white">Con Cám</h2>
            <div className="flex items-center space-x-3">
              <img src={iconRating} alt="ratting" className="w-8 h-8" />
              <img src={iconRating} alt="ratting" className="w-8 h-8" />
              <img src={iconRating} alt="ratting" className="w-8 h-8" />
              <img src={iconRating} alt="ratting" className="w-8 h-8" />
              <img src={iconRatingHalf} alt="ratting" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-white">
                Cám là bộ phim chiếu rạp tháng 9/2024 thuộc thể loại kinh dị,
                giật gân được chuyển thể từ truyện cổ tích "Tấm Cám" với tên gọi
                cũ là Con Cám. Đạo diễn đã xây dựng một cốt truyện đầy ghê rợn
                và các thủ tục mà chỉ nghe thôi cũng phải sởn gai ốc. Ngay từ
                khi hé lộ trailer, Cám đã thu hút rất nhiều sự chú ý của khán
                giả đến từ dàn cast cũng như hình ảnh hậu trường đầy kinh dị.
                Trước khi đi vào diễn biến của phim, mời các bạn xem qua một số
                thông tin chính của phim.
              </p>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-white bg-red-700 font-bold text-sm">
                  Chi tiết
                </button>
                <button className="p-2 text-white bg-red-700 font-bold text-sm">
                  Xem phim
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-full h-[500px] relative group cursor-pointer">
            <img src={imgTemp} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={iconPlay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
