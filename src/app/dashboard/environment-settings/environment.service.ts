

export class EnvironmentService {
    backendUrl='http://localhost:8080';
     
      getCustomersListAPI(pagenumber,pagesize){
          return this.backendUrl+'/customer/list?pagenumber='+pagenumber+'&pagesize='+pagesize;
      }
      getOpenAccountAPI(){
        return this.backendUrl+'/customer/account/current';
    }
      
}


