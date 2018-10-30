import { environment } from "./environment";

export const backendAPIs = {
    customers: {
      list: environment.backendUrl+environment.contextName+'/list'
    }
  }