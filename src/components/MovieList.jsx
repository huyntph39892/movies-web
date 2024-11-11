import PropTypes from "prop-types";
import imgTemp from "../assets/temp1.png";
const MovieList = ({ title, data }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-3xl uppercase font-bold">
        {title}
      </h2>
      <div className="flex item space-x-4">
        <div className="w-[300px] h-[300px]"></div>
      </div>
    </div>
  );
};
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf,
};
export default MovieList;
