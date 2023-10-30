import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './EditorList.styled';

const EditorList = ({ films }) => {
  const location = useLocation();
console.log(location)
  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={location}>
            {/* <MovieLink to={{ pathname: `/movies/${film.id}`, state: { from: location.pathname } }}> */}
            {/* <MovieLink to={{ pathname: `/movies/${film.id}`, state: {location } }}> */}

            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
