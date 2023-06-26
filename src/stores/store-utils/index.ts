import { types } from "mobx-state-tree";

export const userInfoModel = types.model({
    adminId: types.maybeNull(types.string),
    balance: types.maybeNull(types.number),
    bettingAllowed: types.maybeNull(types.boolean),
    canSettlePL: types.maybeNull(types.boolean),
    createdAt: types.maybeNull(types.number),
    createdBy: types.maybeNull(types.string),
    downLineShare: types.maybeNull(types.number),
    isActive: types.maybeNull(types.boolean),
    masterId: types.maybeNull(types.string),
    credit: types?.maybeNull(types.number),
    exposure: types?.maybeNull(types.number),
    availableBalance: types.maybeNull(types.number),
    clientPL: types?.maybeNull(types.number),
    parentId: types.maybeNull(types.string),
    notes: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    passwordChanged: types.maybeNull(types.boolean),
    phone: types.maybeNull(types.string),
    reference: types.maybeNull(types.string),
    role: types.maybeNull(types.union(types.string, types.number)),
    status: types.maybeNull(types.number),
    token: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.number),
    userId: types.maybeNull(types.number),
    userName: types.maybeNull(types.string),
    _id: types.maybeNull(types.string),

  });
export const currentUserModel = types.model({
  email: types.maybeNull(types.string),
  firstname: types.maybeNull(types.string),
  lastname: types.maybeNull(types.string)
})
export const getProjectModel = types.model({
  q1a: types.maybeNull(types.string),
  q1b: types.maybeNull(types.string),
  q2: types.maybeNull(types.string),
  q3: types.maybeNull(types.string)
})
export const ProjectsModel = types.model({
  projectName: types.maybeNull(types.string)
})
  export const marketTypesModel = types.model({
    createdAt: types.maybeNull(types.number),
    marketId: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    status: types.maybeNull(types.number),
  });

  export const allMarketTypesModel = types.model({
    createdAt: types.maybeNull(types.number),
    marketId: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    status: types.maybeNull(types.number),
    _id: types.maybeNull(types.string),
    subMarketTypes: types.maybeNull(types.array(marketTypesModel)),
  });

  export const userCashDepositeDataModel = types.model({
    balance: types.maybeNull(types.number),
    credit: types.maybeNull(types.number),
    maxWithdraw: types.maybeNull(types.number),
  });

  export const userAllCreditDataModel = types.model({
    availableBalance: types.maybeNull(types.number),
    credit: types.maybeNull(types.number),
    creditLimit: types.maybeNull(types.number),
  });
  export const cashDepositLedgerDataModel = types.model({
    description: types.maybeNull(types.string),
    amount: types.maybeNull(types.number),
    balance: types.maybeNull(types.number),
    createdAt: types.maybeNull(types.string),
    userId: types.maybeNull(types.number)
  })

  const negativeClientsModel = types.model({
    userName: types.maybeNull(types.string),
    clientPL: types.maybeNull(types.number),

  })
const positiveClientsModel = types.model({
  userName: types.maybeNull(types.string),
  clientPL: types.maybeNull(types.number),
})
  export const userFinalSheetDataModal = types.model({
    negativeClients: types.maybeNull(types.array(negativeClientsModel)),
    positiveClients: types.maybeNull(types.array(positiveClientsModel)),
    totalNegativeClientPL: types.maybeNull(types.number),
    totalPositiveClientPL: types.maybeNull(types.number),
  });
  
  