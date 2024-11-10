// import {mapAccountListApiToVm} from '../account-list/account-list.mappers';
import {mapMovementsListFromApitoVm} from './movements.mappers';
import {getMovementsList} from './movements.api';
import {addMovementRows} from './movements.helpers';
import { routes } from '../../core/router';



getMovementsList().then( movementsList => {
    const vmMovementsList = mapMovementsListFromApitoVm(movementsList);
    addMovementRows(vmMovementsList)
})


