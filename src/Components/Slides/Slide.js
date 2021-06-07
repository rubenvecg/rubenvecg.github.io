 import {SlideCont} from './SlidesStyle'
const Slide = ({deck, index, src}) => {
    return (
        <SlideCont id={`${deck}-slide${index}`} src={src}></SlideCont>
    );
}
 
export default Slide;