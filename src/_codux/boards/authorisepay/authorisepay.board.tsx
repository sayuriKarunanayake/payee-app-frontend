import { createBoard } from '@wixc3/react-board';
import { Authorisepay } from '../../../components/authorisepay/authorisepay';

export default createBoard({
    name: 'Authorisepay',
    Board: () => <Authorisepay />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 758,
        canvasWidth: 1100,
    },
});
