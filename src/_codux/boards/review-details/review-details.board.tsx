import { createBoard } from '@wixc3/react-board';
import { ReviewDetails } from '../../../components/review-details/review-details';

export default createBoard({
    name: 'ReviewDetails',
    Board: () => <ReviewDetails />,
    environmentProps: {
        canvasHeight: 864,
        canvasWidth: 1017,
        windowWidth: 375,
        windowHeight: 667,
    },
});
