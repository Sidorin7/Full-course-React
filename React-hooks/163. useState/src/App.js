import { Component, useState, useEffect, useCallback,useMemo } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const countTotal = (num) => {
  console.log('counting...');
  return num + 10;
}

const Slider = (props) => {
  const [slide, setSlide] = useState(0); // cостояние
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => { // Закэшировали функцию
    console.log("fetching");
    return [
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    ];
  }, []);

  function logging() {
  }

  useEffect(() => {
    document.title = `Slide: ${slide}`;

    window.addEventListener("click", logging);

    return () => {
      window.removeEventListener("click", logging);
    };
  }, [slide]);

  useEffect(() => {
  }, [autoplay]);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  const total = useMemo(() => { // закэщировали значение
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => ({
    color: slide > 4 ? 'red' : 'black'
  }), [slide])

  useEffect(() =>{
    console.log('style');
  }, [style]) // когда будет изменение стилей будет вызывать вот эту функцию

  return (
    <Container>
      <div className="slider w-50 m-auto">

        <Slide getSomeImages={getSomeImages}/>
        <div className="text-center mt-5">
          Active slide {slide} {autoplay ? "auto" : null} <br />
        </div>
        <div style={style} className="text-center mt-5">Toatal slides: {total}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({getSomeImages}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages())
  }, [getSomeImages])

  return (
    <>
      {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
    </>
  )
}

function App() {
  const [slider, setSlide] = useState(true);

  return (
    <>
      <button onClick={() => setSlide(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;
