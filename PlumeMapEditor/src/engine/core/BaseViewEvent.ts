namespace plume {
	export class BaseViewEvent {
		private _type:string="";
		private _data:any;
		public constructor(type:string,data:any=null) {
			this._type=type;
			this._data=data;
		}

		public setData(data:any):void {
			this._data = data;
		}

		public get type():string {
			return this._type;
		}

		public get data():any {
			return this._data;
		}
	}
}