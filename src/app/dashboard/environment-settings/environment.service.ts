

export class EnvironmentService {
    backendUrl='http://localhost:8080';
     
      getCustomersListAPI(){
          return this.backendUrl+'/customer/list';
      }
      getOpenAccountAPI(){
        return this.backendUrl+'/customer/account/current';
    }
      
}


