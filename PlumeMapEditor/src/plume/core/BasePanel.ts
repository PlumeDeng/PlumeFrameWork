namespace plume {
	export class BasePanel extends eui.Panel implements  eui.UIComponent,IEvent,IPanel {
		public constructor(panelName:string) {
			super();
		}

		close():void {
			this.closePanel();
		}

		protected onCloseButtonClick(event: egret.TouchEvent): void {
			this.closePanel();
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

		public closePanel():void {
			this.visible=false;
		}

		panelData:any;

		public showPanel(data:any):void {
			this.panelData = data;
			this.visible=true;
		}
	}
}