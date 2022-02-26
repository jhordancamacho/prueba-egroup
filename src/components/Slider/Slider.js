import './Slider.css'
const images = require.context('../../assets/Images', true); 
export default function Slider() {
  
    return (
        <div id="slider-wrapper">
            <div class="inner-wrapper">
                <input checked type="radio" name="slide" class="control" id="Slide1" />
                <label for="Slide1" id="s1"></label>
                <input type="radio" name="slide" class="control" id="Slide2" />
                <label for="Slide2" id="s2"></label>
                <input type="radio" name="slide" class="control" id="Slide3" />
                <label for="Slide3" id="s3"></label>
                
                <div class="overflow-wrapper">
                    <a class="slide" href=""><img src={images('./empanada-1.jpg')}/></a>
                    <a class="slide" href=""><img src={images('./empanada-2.jpg')}/></a>
                    <a class="slide" href=""><img src={images('./empanada-3.jpg')}/></a>
            {/*<a class="slide" href=""><img src="{items.src{empanada-1}}" /></a>-->
                    <a class="slide" href=""><img src="{items.src{empanada-1}}" /></a>*/}
                </div>
            </div>
        </div>
    );
}