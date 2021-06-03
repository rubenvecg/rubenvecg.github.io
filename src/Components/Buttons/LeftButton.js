import {Bar, Left} from './ButtonStyle'

const RightButton = (props) => {
    return (
        <Left onClick={props.onClick}>
            <Bar width={15} x={2} y={4} angle={-45}></Bar>
            <Bar width={15} x={2} y={11} angle={45}></Bar>
        </Left>
    );
}
 
export default RightButton;