// import {mapAccountListApiToVm} from '../account-list/account-list.mappers';
import {mapMovementsListFromApitoVm} from './movements.mappers';
import {getMovementsList} from './movements.api';
import {addMovementRows} from './movements.helpers';
import { history } from '../../core/router';

const params = history.getParams();

getMovementsList().then( movementsList => {
    const vmMovementsList = mapMovementsListFromApitoVm(movementsList);
    const accountIdMovementList = vmMovementsList.filter( list => list.accountId === params.id);
    addMovementRows(accountIdMovementList)
})


