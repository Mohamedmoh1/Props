import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const Player=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.URL} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
            {el.team}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

Player.defaultProps={
    el : {
        name : "Robert Lewandowski",
        team : "FC Barcelona",
        nationality : "Polish",
        age : 35,
        URL : "https://www.fcbarcelona.com/photo-resources/2023/02/20/b3eec126-32f7-4f0c-8649-fcbfb9dec33b/lewy-gol-pu-os.JPG?width=1200&height=750",
    }
}

Player.propTypes = {

el: propTypes.object
}
export default Player 