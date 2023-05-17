import { createBoard } from '@wixc3/react-board';
import { Authorisepay } from '../../../components/authorisepay/authorisepay';

export default createBoard({
    name: 'Authorisepay',
    Board: () => <Authorisepay />
});
