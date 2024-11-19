import PropTypes from "prop-types";
import imgTemp from "../assets/temp1.png";
const MovieList = ({ title, data }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-3xl uppercase font-bold mb-4">{title}</h2>
      <div className="flex items-center space-x-4">
        <div className="w-[200px] h-[300px] relative group">
          <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
            <div className="absolute top-0 left-0 h-full w-full bg-black/40" />
            <img
              src={imgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-2">
              <p className="uppercase text-md">Tam Cam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
export default MovieList;
