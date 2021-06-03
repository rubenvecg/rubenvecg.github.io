import {Bar, Right} from './ButtonStyle'

const RightButton = (props) => {
    return (
        <Right onClick={props.onClick}>
            <Bar width={15} x={2} y={4} angle={45}></Bar>
            <Bar width={15} x={2} y={11} angle={-45}></Bar>
        </Right>
    );
}
 
export default RightButton;