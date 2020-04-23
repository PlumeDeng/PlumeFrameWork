namespace plume {
	class PoolData{
		public thisTarget:any;
		public callBack:Function;
	}
	export class EventManager extends plume.Singleton<EventManager> {
		private _eventPool:Object={};

		public constructor() {
			super();
		}

		public dispatchViewEvent(event:BaseViewEvent):void {
			let pool = this._eventPool;
			for(var type in pool){
				if(type==event.type){
					for(var index in pool[type]){
						let poolData:PoolData = pool[type][index];
						poolData.callBack.call(poolData.thisTarget,event);
					}
				}
			}
		}

		public addViewEventListenner(type:string,callBack:Function,thisTarget:any):void {
			if(this._eventPool[type]==null) this._eventPool[type] = [];
			let arr:Array<PoolData> = this._eventPool[type];
			let poolData = new PoolData();
			poolData.callBack = callBack;
			poolData.thisTarget = thisTarget;
			arr.push(poolData);
		}

		public removeViewEventListenner(type:string,callBack:Function,thisTarget:any):void {
			if(this._eventPool[type]==null) return;
			let arr:Array<PoolData> = this._eventPool[type];
			let len = arr.length;
			for(var i=0; i<len; i++){
				if(arr[i].thisTarget==thisTarget&&arr[i].callBack==callBack){
					arr.splice(i,1);
					break;
				}
			}
		}

		public removeAllViewEventListenners(thisTarget:any):void {
			let pool = this._eventPool;
			for(var type in pool){
				let arr:Array<PoolData> = pool[type];
				let len = arr.length;
				for(var i=0; i<len; i++){
					if(arr[i].thisTarget==thisTarget){
						arr.splice(i,1);
						i--;
					}
				}
			}
		}
	}
}