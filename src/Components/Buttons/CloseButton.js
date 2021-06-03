import {Bar, Close} from './ButtonStyle'

const CloseButton = (props) => {
    return (
        <Close onClick={props.onClick}>
            <Bar width={20} x={0} y={8} angle={45}></Bar>
            <Bar width={20} x={0} y={8} angle={-45}></Bar>
        </Close>
    );
}
 
export default CloseButton;