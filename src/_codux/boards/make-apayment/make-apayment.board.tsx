import { createBoard } from '@wixc3/react-board';
import { MakeApayment } from '../../../components/make-apayment/make-apayment';

export default createBoard({
    name: 'MakeApayment',
    Board: () => <MakeApayment />,
    environmentProps: {
        canvasHeight: 722,
        canvasWidth: 993,
        windowWidth: 375,
        windowHeight: 667,
    },
});
