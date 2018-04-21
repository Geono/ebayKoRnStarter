import { navigatorInfo } from './navigator';
const {navigator, startContainerName} = navigatorInfo;

const actionForStartContainer = navigator.router.getActionForPathAndParams(startContainerName);
const stateForStartContainer = navigator.router.getStateForAction(actionForStartContainer);
const initialNavState = navigator.router.getStateForAction(actionForStartContainer, stateForStartContainer);

export default function navigate(state = initialNavState, action) {
    const nextState = navigator.router.getStateForAction(action, state);
    return nextState || state;
}
