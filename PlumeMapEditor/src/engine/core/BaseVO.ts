namespace plume {
	export class BaseVO {
		public constructor() {
		}
		
		public toJSON():string{
			return JSON.stringify(this);
		}

		public fromJSON(json:string):void {
			JSON.parse(json,(key,value)=>{
				this[key]=value;	
			});
		}
	}
}