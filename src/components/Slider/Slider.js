import './Slider.css'
const images = require.context('../../assets/Images', true); 
export default function Slider() {
  
    return (
        <div id="slider-wrapper">
            <div className="inner-wrapper">
                <input checked type="radio" name="slide" className="control" id="Slide1" />
                <label for="Slide1" id="s1"></label>
                <input type="radio" name="slide" className="control" id="Slide2" />
                <label for="Slide2" id="s2"></label>
                <input type="radio" name="slide" className="control" id="Slide3" />
                <label for="Slide3" id="s3"></label>
                
                <div className="overflow-wrapper">
                    <a className="slide" href=""><img src={images('./empanada-1.jpg')}/></a>
                    <a className="slide" href=""><img src={images('./empanada-2.jpg')}/></a>
                    <a className="slide" href=""><img src={images('./empanada-3.jpg')}/></a>
                         </div>
            </div>
        </div>
    );
}