import { createBoard } from '@wixc3/react-board';
import { PayDetails } from '../../../components/pay-details/pay-details';

export default createBoard({
    name: 'PayDetails',
    Board: () => (
        <PayDetails />
    ),
    environmentProps: {
        canvasHeight: 697,
        canvasWidth: 1064,
        windowWidth: 375,
        windowHeight: 681,
    },
});
