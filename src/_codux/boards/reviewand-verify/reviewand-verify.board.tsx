import { createBoard } from '@wixc3/react-board';
import { ReviewandVerify } from '../../../components/reviewand-verify/reviewand-verify';

export default createBoard({
    name: 'ReviewandVerify',
    Board: () => <ReviewandVerify />,
    environmentProps: {
        canvasHeight: 691,
        canvasWidth: 1043,
        windowWidth: 375,
        windowHeight: 667,
    },
});
