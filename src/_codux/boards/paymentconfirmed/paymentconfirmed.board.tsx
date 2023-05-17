import { createBoard } from '@wixc3/react-board';
import { Paymentconfirmed } from '../../../components/paymentconfirmed/paymentconfirmed';

export default createBoard({
    name: 'Paymentconfirmed',
    Board: () => <Paymentconfirmed />,
    environmentProps: {
        canvasWidth: 1018,
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 777,
    },
});
