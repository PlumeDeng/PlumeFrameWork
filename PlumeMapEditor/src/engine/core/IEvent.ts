namespace plume {
	export interface IEvent {
		dispatchViewEvent(event:BaseViewEvent):void;
		addViewEventListenner(type:string,callBack:Function,thisTarget:any):void;
		removeViewEventListenner(type:string,callBack:Function,thisTarget:any):void;
		removeAllViewEventListenners():void;
	}
}