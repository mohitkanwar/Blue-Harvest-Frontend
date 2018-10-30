import { Output, EventEmitter } from "@angular/core";

export class NotificationService{
    @Output() notificationEvent:EventEmitter<{"message":string}> = new EventEmitter();

    public sendNotification(message:string){
        this.notificationEvent.emit({"message":message});
    }
}