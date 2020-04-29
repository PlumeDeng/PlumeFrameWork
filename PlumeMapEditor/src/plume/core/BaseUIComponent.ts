namespace plume {
	export class BaseUIComponent extends eui.Component implements  eui.UIComponent,IEvent{
		public constructor() {
			super();
		}

		public dispatchViewEvent(event:BaseViewEvent):void {
			EventManager.Instance<EventManager>(EventManager).dispatchViewEvent(event);
		}

		public addViewEventListenner(type:string,callBack:Function,thisTarget:any):void {
			EventManager.Instance<EventManager>(EventManager).addViewEventListenner(type,callBack,thisTarget);
		}

		public removeViewEventListenner(type:string,callBack:Function,thisTarget:any):void {
			EventManager.Instance<EventManager>(EventManager).removeViewEventListenner(type,callBack,thisTarget);
		}
		
		public removeAllViewEventListenners():void {
			EventManager.Instance<EventManager>(EventManager).removeAllViewEventListenners(this);
		}

		public destroy():void {
			this.removeAllViewEventListenners();
		}
	}
}