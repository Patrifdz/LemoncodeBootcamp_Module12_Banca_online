// import {mapAccountListApiToVm} from '../account-list/account-list.mappers';
import {mapMovementsListFromApitoVm} from './movements.mappers';
import {getMovementsList} from './movements.api';
import { getAccountList } from '../account-list/account-list.api';
import {addMovementRows} from './movements.helpers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';

const paramsUrl = history.getParams();

getMovementsList().then( movementsList => {
    const vmMovementsList = mapMovementsListFromApitoVm(movementsList);
    const accountIdMovementList = 
        vmMovementsList.filter( list => list.accountId === paramsUrl.id);
        if (accountIdMovementList.length > 0) {
                    addMovementRows(accountIdMovementList);
                } else {
                    addMovementRows(vmMovementsList)
            }
        })
    

getAccountList().then( accountsList => {
    const accountSelected = accountsList.find(account => account.id === paramsUrl.id)
    const {alias, balance, iban} = accountSelected;
    const accountValidDates = {alias, balance, iban};
    onSetValues(accountValidDates);
} )



